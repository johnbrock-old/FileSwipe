FileSwipeApp.views.MainScreen = Ext.extend(Ext.Panel, {
    layout: 'fit',
    initComponent: function() {

        this.dockedItems = [{
            xtype: 'toolbar',
            dock: 'bottom',
            title: 'FileSwipe'
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
            store: 'fileStore'
        });

        this.items = [this.list];

        FileSwipeApp.views.MainScreen.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('fs-sharelist', FileSwipeApp.views.MainScreen);
