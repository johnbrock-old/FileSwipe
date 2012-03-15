FileSwipeApp.views.Login = Ext.extend(Ext.Panel, {
    layout: 'fit',
    items: [{
            xtype: 'fieldset',
            title: 'Login',
            fullscreen: true,
            instructions: 'FileSwipe - mobile file sharing application',
            defaults: {
                required: true,
                labelAlign: 'left',
                labelWidth: '40%'
            },
            items: [
                {
                    xtype: 'emailfield',
                    name : 'email',
                    label: 'Email',
                    placeHolder: 'you@email.com',
                    useClearIcon: true
                }, {
                    xtype: 'passwordfield',
                    name : 'password',
                    label: 'Four-Digit Pin',
                    useClearIcon: false
                }, {
                    xtype: 'checkboxfield',
                    name: 'rememberMe',
                    label: 'Remember login information',
                    labelWidth: '80%',
                    required: false,
                    checked: true
                }
            ],
        dockedItems: [{
                        xtype: 'toolbar',
                        dock: 'bottom',
                        title: 'login',
                        items: [
                            {
                                text: 'Signup',
                                ui: 'back',
                                //handler: function() {
                                // form.reset();
                                //}
                            },
                            {xtype: 'spacer'},
                            {
                                text: 'Login',
                                ui: 'confirm',
                                //handler: function() {
                                    //form.reset();
                                //}
                            },
                            {xtype: 'spacer'},
                            {
                                text: 'Forgot Password',
                                ui: 'forward',
                                //handler: function() {
                                //}
                            }
                        ]
                    }
                ]
            }],
    initComponent: function() {
        //FileSwipeApp.stores.users.load();
        FileSwipeApp.views.Login.superclass.initComponent.apply(this, arguments);
    }
});