FileSwipeApp.views.Contacts = Ext.extend(Ext.Panel, {
    layout: 'fit',
    fullscreen: true,
    items: [{
            xtype: 'fieldset',
            title: 'Contacts',
            instructions: 'FileSwipe - mobile file sharing application',
            defaults: {
                required: true,
                labelAlign: 'left',
                labelWidth: '40%'
            },
            items: [
                {
                    xtype: 'button',
                    name : 'email',
                    label: 'Email',
                    placeHolder: 'you@email.com',
                    useClearIcon: true
                }, {
                    xtype: 'button',
                    name : 'password',
                    label: 'Four-Digit Pin',
                    useClearIcon: false
                }, {
                    xtype: 'button',
                    name: 'rememberMe',
                    label: 'Remember login information',
                    labelWidth: '80%',
                    required: false,
                    checked: true
                }
            ]
            }],
            dockedItems: [{
                        xtype: 'toolbar',
                        dock: 'bottom',
                        items: [
                            /*{
                                text: 'Forgot password',
                                ui: 'back',
                                handler: function() {
                                    FileSwipeApp.views.viewport.setActiveItem(FileSwipeApp.views.signUp, {type: 'slide', direction: 'left'});
                                }
                            },*/
                            {xtype: 'spacer'},
                            {
                                text: 'Login',
                                ui: 'confirm' //,
                                //handler: function() {
                                    //form.reset();
                                //}
                            },
                            {xtype: 'spacer'},
                            {
                                text: 'Signup',
                                ui: 'forward',
                                handler: function() {
                                    FileSwipeApp.views.viewport.setActiveItem(FileSwipeApp.views.signUp, {type: 'slide', direction: 'right'});
                                }
                            }
                        ]
                    }
                ],
    initComponent: function() {
        //FileSwipeApp.stores.users.load();
        FileSwipeApp.views.Contacts.superclass.initComponent.apply(this, arguments);
    }
});