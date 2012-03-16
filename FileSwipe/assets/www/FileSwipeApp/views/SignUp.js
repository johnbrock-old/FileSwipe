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
            items: [{
                        xtype: 'textfield',
                        name : 'name',
                        label: 'First Name',
                        useClearIcon: true,
                        autoCapitalize : false
                    }, {
                        xtype: 'textfield',
                        name : 'last_name',
                        label: 'Last Name',
                        useClearIcon: true,
                        autoCapitalize : false
                    }, {
                        xtype: 'passwordfield',
                        name : 'password',
                        label: 'Four-Digit Pin',
                        useClearIcon: false
                    }, {
                        xtype: 'textfield',
                        name : 'phone_num',
                        label: 'Phone Number',
                        placeHolder: '979-123-4567',
                        useClearIcon: true
                    },{
                        xtype: 'emailfield',
                        name : 'email',
                        label: 'Email',
                        placeHolder: 'you@email.com',
                        useClearIcon: true
                    }
            ]}],
        dockedItems: [{
                        xtype: 'toolbar',
                        dock: 'bottom',
                        items: [
                        {
                            text: 'Back',
                            ui: 'back',
                            handler: function() {
                                FileSwipeApp.views.viewport.setActiveItem(FileSwipeApp.views.login, {type: 'slide', direction: 'left'});
                            }
                        },
                        {xtype: 'spacer'},
                        {
                            text: 'Save',
                            ui: 'confirm'//,
                            //handler: function() {
                              //  signUpForm.user.phone_num = document.myDeviceId;
                                //if(signUpForm.user){
                                  //  form.updateRecord(signUpForm.user, true);
                               // }
                                //form.submit({
                                    //xmlhttp.open("GET","demo_get.asp",true);
                                    //xmlhttp.send();
                                  //  waitMsg : {message:'Submitting', cls : 'demos-loading'}
                                //});
                            //}
                        }
                    ]
                }],
    initComponent: function() {
        //FileSwipeApp.stores.users.load();
        FileSwipeApp.views.SignUp.superclass.initComponent.apply(this, arguments);
    }
});