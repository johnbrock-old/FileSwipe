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
						id : 'name',
                        label: 'First Name',
                        useClearIcon: true,
                        autoCapitalize : false
                    }, {
                        xtype: 'textfield',
                        name : 'last_name',
						id : 'last_name',
                        label: 'Last Name',
                        useClearIcon: true,
                        autoCapitalize : false
                    }, {
                        xtype: 'passwordfield',
						type: 'int',
                        name : 'password',
						id : 'password_field',
                        label: 'Four-Digit Pin',
                        useClearIcon: false
                    }, {
                        xtype: 'textfield',
                        name : 'phone_num',
						id : 'phone_num',
                        label: 'Phone Number',
                        placeHolder: '979-123-4567',
                        useClearIcon: true
                    },{
                        xtype: 'emailfield',
                        name : 'email',
						id : 'email',
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
                            ui: 'confirm',
                            handler: function() {
                                Ext.Ajax.request({
									url:'http://fileswipe.herokuapp.com/users.json',
									//url:'http://10.0.2.2:3000/users.json',
									jsonData:{phone_num:Ext.getCmp('phone_num').getValue(),password:Ext.getCmp('password_field').getValue() ,name:Ext.getCmp('name').getValue(),last_name:Ext.getCmp('last_name').getValue(),email:Ext.getCmp('email').getValue()},
									method:"POST",
									success:function(){
										alert("Your account has been created!");
										//redirect to MainScreen
										FileSwipeApp.views.viewport.setActiveItem(FileSwipeApp.views.mainScreen, {type: 'slide', direction: 'left'});
									},
									failure:function(request, textStatus, errorThrown){
										alert(textStatus);
										alert("Error");
										//error handling 
										//error is also thrown if unique fields already exist in database
									}
								});
                            }
                        }
                    ]
                }],
    initComponent: function() {
        //FileSwipeApp.stores.users.load();
        FileSwipeApp.views.SignUp.superclass.initComponent.apply(this, arguments);
    }
});