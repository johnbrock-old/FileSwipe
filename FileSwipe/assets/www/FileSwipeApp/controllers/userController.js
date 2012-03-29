Ext.regController('UsersController',{	
	'saveData': function(options) {
		console.log(options.saveLogin);
		if (options.saveLogin == true) {
				  window.localStorage.setItem(options.email, options.password);}
		this.getRequest(options);
	},
				  
	'getRequest': function(options) {
		Ext.Ajax.request({
			url: options.url,
			method:"GET",
			success:function(msg){
				if (JSON.parse(msg.responseText)==null)
				{
					alert ("Login not successful, please try again");
				}
				else
				{
					Ext.Msg.alert("Login", "Login was successful", Ext.redirect('Files/index'));
						/*var files = new Ext.data.JsonStore({
							model: 'FileSwipeApp.models.Contact',//should this be Files model??
							data: Ext.decode(msg.responseText)
						});
						 Ext.getCmp('fileList').bindStore(files);*/
						 
						 var test = FileSwipeApp.stores.contacts.data;
						 var ar1 = [];
						 test.each(function(item) {
							var number = item.get('phone_num');
							var regexObj = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
						   var formattedPhoneNumber = number.replace(regexObj, "$1-$2-$3");
							ar1.push(formattedPhoneNumber);
						  })
						Ext.dispatch({
						  controller: FileSwipeApp.controllers.contacts,
						  action: 'postContacts',
						  store1: ar1
						});

			

					/*Ext.dispatch({
						controller: "FileSwipeApp.controllers.Files", //filecontroller here
						action: 'index'  //filecontroller action here
					});*/
					//FileSwipeApp.views.viewport.setActiveItem(FileSwipeApp.views.mainScreen, {type: 'slide', direction: 'left'});

				}
			},
			failure:function(request, textStatus, errorThrown){
				alert(textStatus);
				alert("Error");
				alert(options.url);
			}
		});
	}
});

FileSwipeApp.controllers.userController = Ext.ControllerManager.get('UsersController');