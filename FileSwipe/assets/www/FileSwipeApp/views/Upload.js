FileSwipeApp.views.ShareView = Ext.extend(Ext.Panel, {
    layout: 'fit',
    initComponent: function() {
    	this.store = new Ext.data.Store({
            requires: 'FileSwipeApp.models.Contact',
    		autoLoad: true,
            model: 'FileSwipeApp.models.Contact',
            sorters: 'last_name',
            proxy: {
                type: 'ajax',
                //url: 'http://fileswipe.herokuapp.com/users/1234/irmalam19@tamu.edu.json?callback?',
               // url: 'FileSwipeApp/data/contacts.json',
                url: 'http://students.cse.tamu.edu/jabam89/wp7drone/docs/contacts.json',
                reader: {
                	type: 'json'
                }
            }
        });

        this.dockedItems = [{
            xtype: 'toolbar',
            dock: 'bottom',
            title: 'FileSwipe'

        },
        {
            xtype: 'toolbar',
            dock: 'top',
            title: 'Select Contact'
//            items: [
//						{
//							text: 'Back',
//							ui: 'back',
//							handler: function() {
//								FileSwipeApp.views.Viewport.setActiveItem(FileSwipeApp.views.MainScreen, {type: 'slide', direction: 'right'});}
//							
//						}
//					]
        }
        ];
       
        this.list = new Ext.List({
			id: 'contactsList',
            itemTpl: '{name} {last_name}',
//            onItemDisclosure : function(record, btn, index) {
//            	Ext.Msg.alert((String({name}) + " " + String({last_name})),("Email: " + String({email}) + "< br/>" + "Phone: " + String({phone_num})),Ext.emptyFun);
//            },
            ui : 'round',
            store: this.store
        });

        this.items = [this.list];

        FileSwipeApp.views.ShareView.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('fs-shareview', FileSwipeApp.views.ShareView);
