FileSwipeApp.views.SignUp = Ext.extend(Ext.Panel, {
    layout: 'fit',
    scroll: 'vertical',
    standardSubmit : false,
    items: [{
            xtype: 'fieldset',
            title: 'Personal Info',
            instructions: 'Please enter the information above.',
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
                    label: 'Remember SignUp information',
                    labelWidth: '80%',
                    required: false,
                    checked: true
                }
            ],
        dockedItems: [{
                        xtype: 'toolbar',
                        dock: 'bottom',
                        title: 'SignUp',
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
                                text: 'SignUp',
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
        FileSwipeApp.views.SignUp.superclass.initComponent.apply(this, arguments);
    }
});