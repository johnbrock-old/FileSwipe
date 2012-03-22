Ext.regController('UsersController',{	
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
						 
						 var files = new Ext.data.JsonStore({
															model: 'FileSwipeApp.models.Contact',
															data: Ext.decode(msg.responseText)
															});
						 Ext.getCmp('fileList').bindStore(files);
						 
						 /*var test = FileSwipeApp.stores.contacts.data;
						 var ar1 = [];
						 test.each(function(item) {
								   ar1.push(item.get('phone_num'));
								   })
						 
						 Ext.dispatch({
									  controller: FileSwipeApp.controllers.contacts,
									  action: 'postContacts',
									  store1: ar1
						});*/
					 

						 
					/*this.store = new Ext.data.Store({
						 requires: ['FileSwipeApp.models.Files'],
						 autoLoad: true,
						 model: 'FileSwipeApp.models.Files',
						 storeId: 'fileStore',  
						 sorters: 'name',
						 proxy: {
							type: 'ajax',
							//url: 'http://fileswipe.herokuapp.com/users/1234/irmalam19@tamu.edu.json?callback?',
							url: this.url,
							reader: {
									type: 'json'
							 }
						 }
					});*/
					
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