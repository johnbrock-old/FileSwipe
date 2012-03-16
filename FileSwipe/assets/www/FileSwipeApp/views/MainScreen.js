FileSwipeApp.views.MainScreen = Ext.extend(Ext.Panel, {
    layout: 'fit',
    scroll: 'vertical',
    standardSubmit : false,
    items: [{
            xtype: 'fieldset',
            title: 'Files',
            instructions: 'Please select a file above.',
            defaults: {
                required: true,
                labelAlign: 'left',
                labelWidth: '40%'
            },
            items: [{text: 'File 1'},
                    {text: 'File 2'},
            		{text: 'File 3'}
            		]
            }    
            ],
        dockedItems: [{
                        xtype: 'toolbar',
                        dock: 'bottom',
                        items: [
                        {
                            text: 'Share',
                           // ui: 'back',
                            handler: function() {
                                FileSwipeApp.views.viewport.setActiveItem(FileSwipeApp.views.contacts, {type: 'slide', direction: 'up'});
                            }
                        }]
                }],
    initComponent: function() {
        //FileSwipeApp.stores.users.load();
        FileSwipeApp.views.MainScreen.superclass.initComponent.apply(this, arguments);
    }
});