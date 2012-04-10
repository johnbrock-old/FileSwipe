FileSwipeApp.views.MainScreen = Ext.extend(Ext.Panel, {
    layout: 'fit',
    initComponent: function() {

        this.dockedItems = [{
            xtype: 'toolbar',
            dock: 'bottom',
            title: 'FileSwipe',
            items: [
					{
						text: 'Pending',
						badgeText: '2'
					},
					{xtype: 'spacer'},
					{
						text: 'Upload File',
						handler: function() {
								Ext.redirect('upload/choosePhoto');
									 //controller: FileSwipeApp.controllers.upload,
									 //action: 'choosePhoto',
									 //animation: {type:'slide', direction:'right'}
								}
								/*navigator.camera.getPicture(function() {alert("pass");}, function(){alert("fail");}, {
												quality: 50,
												destinationType: Camera.DestinationType.FILE_URI,
												sourceType: Camera.PictureSourceType.PHOTOLIBRARY
												});*/
				
						
					}
					
					]
        },
        {
            xtype: 'toolbar',
            dock: 'top',
            title: 'Select File to Share'
//            items: [
//						{
//							text: 'Click File to Share',
//							ui: 'round',
//							flex:1
////							handler: function() {
////								FileSwipeApp.views.viewport.setActiveItem(FileSwipeApp.views.contacts, {type: 'slide', direction: 'up'});}
//							
//						}
//					]
        }];

        this.list = new Ext.List({
			id: 'fileList',
			itemTpl: '{name}',
            ui: 'round',
            store: new Ext.data.Store({
				 model: 'FileSwipeApp.models.Files',
				 storeId: 'fileStore',  
				 sorters: 'name',
				 proxy: {
				  type: 'ajax',
				  url: 'http://fileswipe.herokuapp.com/users/' + window.localStorage.getItem("password") + '/' + window.localStorage.getItem("email") + '.json?callback?',
                  reader: {
					type: 'json'
				  }
				}
			})
        });
        this.list.store.load();
        this.items = [this.list];

        FileSwipeApp.views.MainScreen.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('fs-sharelist', FileSwipeApp.views.MainScreen);
