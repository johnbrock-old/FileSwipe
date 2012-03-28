/*
 * Viewport: instances of the UI go here
 */
FileSwipeApp.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
    cardSwitchAnimation: 'slide',
    initComponent: function() {
        //put instances of cards into app.views namespace
        Ext.apply(FileSwipeApp.views, {
            signUp: new FileSwipeApp.views.SignUp(),
            login: new FileSwipeApp.views.Login(),
            mainScreen: new FileSwipeApp.views.MainScreen(),
            //contacts: new FileSwipeApp.views.Contacts(),
            shareView: new FileSwipeApp.views.ShareView()
        });
        //put instances of cards into viewport
        Ext.apply(this, { 
            items: [
                FileSwipeApp.views.login,
                FileSwipeApp.views.signUp,
                FileSwipeApp.views.mainScreen,
                //FileSwipeApp.views.contacts,
                FileSwipeApp.views.shareView                
            ]
        });
        FileSwipeApp.views.Viewport.superclass.initComponent.apply(this, arguments);
    },
    layoutOrientation : function(orientation, w, h) {
        FileSwipeApp.views.Viewport.superclass.layoutOrientation.call(this, orientation, w, h);
    }
});