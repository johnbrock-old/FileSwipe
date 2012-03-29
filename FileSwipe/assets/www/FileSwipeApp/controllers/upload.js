Ext.regController('upload', {
	choosePhoto: function () {
	// Retrieve image file location from specified source
		navigator.camera.getPicture(this.uploadPhoto, function(message) { alert('get picture failed'); }, 
							  { 
								  quality: 50, 
								  destinationType: navigator.camera.DestinationType.FILE_URI,
								  sourceType: navigator.camera.PictureSourceType.SAVEDPHOTOALBUM 
							  });
	},
				  
	uploadPhoto: function (imageURI) {
		var options = new FileUploadOptions();
		options.chunkedMode = false;
		options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
		filename = options.fileName;

		var params = new Object();
		params.key="user/" + filename;
		params.acl="public-read";
		params.AWSAccessKeyId = "AKIAIRPU6UBZNJYIRKLQ";
		params.Policy = "eyAiZXhwaXJhdGlvbiI6ICIyMDEzLTEyLTMxVDEyOjAwOjAwLjAwMFoiLAogICJjb25kaXRpb25zIjogWwogICAgICB7ImJ1Y2tldCI6ICJmaWxlc3dpcGUifSwKICAgICAgWyJzdGFydHMtd2l0aCIsICIka2V5IiwgInVzZXIvIl0sCiAgICAgIHsiYWNsIjogInB1YmxpYy1yZWFkIn0KICAgICAgICBdCiAgICAgIH0K";
		params.Signature = "29R/cM7c8PM/FHoTGEGKeIcWwY8=";
		options.params = params;

				  
		fail = function(error) {
			alert("Error - please try again");
			console.log("An error has occurred: Code = " + error.code);
			console.log("upload error source " + error.source);
			console.log("upload error target " + error.target);
		};
				  
		uploadSuc = function(r) {
			var response = (r.response).toString();
			var results = {'filename':'','url':'','size':''};

			results.size = (r.bytesSent).toString();
			results.url = "https://s3.amazonaws.com/fileswipe/user/" + filename;
			results.filename = filename;

			//console.log("Code = " + response);
			//console.log("Response = " + response);
			//console.log("Sent = " + bytesSent);

			createNewUserFile(results);
		};

				  
		createNewUserFile = function (results) {
			var fID = parseInt((((Math.random()).toString())).substring(2,8));

			Ext.Ajax.request({
				url: 'http://fileswipe.herokuapp.com/user_files.json',    // where you wanna post
				success: addToUserFiles(results),	// function called on success
				failure: function() {Ext.Msg.alert("Oops", "File NOT Uploaded", Ext.emptyFn)},
				params: { 
					'user_file[file_id]': fID, 
					'user_file[name]': results.filename, 
					'user_file[url]': results.url,
					'user_file[owner]': window.localStorage.key(0),
					'user_file[file_type]': filename.substring(filename.lastIndexOf('.')+1,filename.length),
					'user_file[size]': parseInt(results.size)
				}
			});
		};  
		// Not necessary if we refactor to change share function in Files controller
		addToUserFiles = function(results) {
			Ext.Ajax.request({
			   url: 'http://fileswipe.herokuapp.com/owners.json',    // where you wanna post
			   success: refreshFileList(),   // function called on success [old: Ext.Msg.alert("Success", "File Uploaded", Ext.emptyFn)]
			   failure: function() {Ext.Msg.alert("Oops", "File NOT added to file list", Ext.emptyFn)},
			   params: { 
				   'owner[email]': window.localStorage.key(0), 
				   'owner[url]': results.url, 
				   'owner[status]': true  //auto accept since uploaded file
			   }
			});
		};
		
		refreshFileList = function() {	  
			var url = "http://fileswipe.herokuapp.com/users/" + window.localStorage.getItem(window.localStorage.key(0)) +"/" + window.localStorage.key(0) + ".json?callback?";
			var fStore = Ext.getStore('fileStore');
			fStore.proxy.url = url;
			fStore.load();
				  Ext.getCmp('fileList').bindStore(fStore);
			/*Ext.Ajax.request({
				url: url,
				method:"GET",
				success:function(msg){
				if (JSON.parse(msg.responseText)==null) {
					Ext.Msg.alert("File list couldn't be retrieved");
				}
				else {
					Ext.redirect('Files/index');

					var files = new Ext.data.JsonStore({
							model: 'FileSwipeApp.models.Files',//should this be Files model??  IT WAS Contact
							data: Ext.decode(msg.responseText)
					});
					
				}
				},
				failure: function() {Ext.Msg.alert("Error with file list",Ext.emptyFn);}
			});*/
		};
				  
		var ft = new FileTransfer();
		ft.upload(imageURI, "http://fileswipe.s3.amazonaws.com/", uploadSuc, fail, options, true);
		
	}
				  		  
				  
});
