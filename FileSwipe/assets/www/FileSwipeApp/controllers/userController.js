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
					alert("Login was successful");
					FileSwipeApp.views.viewport.setActiveItem(FileSwipeApp.views.mainScreen, {type: 'slide', direction: 'left'});
					//Ext.dispatch({
					//	controller: FileSwipeApp.controllers.fileController, //filecontroller here
					//	action: 'test',  //filecontroller action here
					//	url: options.url
					//}); 
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