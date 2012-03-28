FileSwipeApp.controllers.contacts = new Ext.Controller({
    //index: function(options) {
    //},
    //show: function(options) {
	//	var id = parseInt(options.id),
	//		contact = app.stores.contacts.getById(id);
	//	if (contact) {
	//		//app.views.contactDetail.updateWithRecord(contact);
	//		//app.views.viewport.setActiveItem(
	//		//	app.views.contactDetail, options.animation
	//		//);
	//	}
	//},
	
	postContacts: function(options) {
		Ext.Ajax.request({
			url:'http://fileswipe.herokuapp.com/users/contacts.json',
			jsonData: options.store1,
			method:"POST",
			success:function(response,opts){
				var str = new Ext.data.JsonStore({
					model: "FileSwipeApp.models.Contact",
					data: Ext.decode(response.responseText)
				});
				Ext.regStore('ContactsStore', str);
				Ext.getCmp('contactsList').bindStore(str);	
			},
			failure:function(request, textStatus, errorThrown){
				alert(textStatus);
				alert("Could not retrieve contacts");
			}
		});
		//alert("leaving postContacts");
	}
}
);