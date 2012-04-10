FileSwipeApp.views.Login = Ext.extend(Ext.Panel, {
    layout: 'fit',
    fullscreen: true,
    items: [{
            xtype: 'fieldset',
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
					id : 'email_login',
                    label: 'Email',
                    placeHolder: 'you@email.com',
                    useClearIcon: true
                }, {
                    xtype: 'passwordfield',
                    name : 'password',
					id : 'password_login',
                    label: 'PIN',
					placeHolder: 'XXXX',
                    useClearIcon: false
                }, {
                    xtype: 'checkboxfield',
                    name: 'rememberMe',
                    label: 'Remember login information',
					id: 'rememberMe',
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
			{
				text: 'Signup',
				ui: 'back',
				handler: function() {
					FileSwipeApp.views.viewport.setActiveItem(FileSwipeApp.views.signUp, {type: 'slide', direction: 'right'});
				}
			},
			{xtype: 'spacer'},
			{
				text: 'Login',
				ui: 'confirm' ,
				handler: function() {
					var password = Ext.getCmp('password_login').getValue();
					var email = Ext.getCmp('email_login').getValue();
					var saveOption = Ext.getCmp('rememberMe').isChecked();
					var url = "http://fileswipe.herokuapp.com/users/" + password +"/" + email + ".json?callback?";
					Ext.dispatch({
						 controller: FileSwipeApp.controllers.userController,
						 action: 'saveData', 
						 url: url,
						 email: email,
						 password: password,
						 saveLogin: saveOption
					});
				}
			}
			/*{xtype: 'spacer'},
			 {
			 text: 'Signup',
			 ui: 'forward',
			 handler: function() {
			 FileSwipeApp.views.viewport.setActiveItem(FileSwipeApp.views.signUp, {type: 'slide', direction: 'left'});
			 }
			 }*/
			]
	},
	{
	xtype: 'toolbar',
	dock: 'top',
	title: 'Login'
	}	  
	],
    initComponent: function() {
        FileSwipeApp.stores.contacts.load();
        FileSwipeApp.views.Login.superclass.initComponent.apply(this, arguments);
    }
	
	//onLogin: function() {
	//	alert ("haha");
	//	var url = "http://fileswipe.herokuapp.com/users/" + Ext.getCmp('password').getValue()+"/" + Ext.getCmp('email').getValue()+ ".json?callback?";
	//	//alert (url);
	//	//var url = "hello";
	//	Ext.dispatch({
	//		controller: FileSwipeApp.controllers.fileController,
	//		action: 'test',//
	//		url: url
	//	});
	//}
			

});