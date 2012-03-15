/*FileSwipeApp.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
    cardSwitchAnimation: 'slide',
    initComponent: function() {
        //put instances of cards into FileSwipe.views namespace
        Ext.apply(FileSwipeApp.views, {
            login: new FileSwipeApp.views.Login()
            //contactDetail: new FileSwipeApp.views.ContactDetail(),
            //contactForm: new FileSwipeApp.views.ContactForm()
        });
        //put instances of cards into viewport
        Ext.apply(this, {
            items: [
                FileSwipeApp.views.login
                //FileSwipeApp.views.contactDetail,
                //FileSwipeApp.views.contactForm,
            ]
        });
        FileSwipeApp.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});*/

FileSwipeApp.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
    cardSwitchAnimation: 'slide',
    initComponent: function() {
        //put instances of cards into app.views namespace
        Ext.apply(FileSwipeApp.views, {
        	Login: new FileSwipeApp.views.Login()
        	//,FileSwipeAppList: new FileSwipeApp.views.FileSwipeAppList()
        	//,FileSwipeAppMap: new FileSwipeApp.views.FileSwipeAppMap()
        });
        //put instances of cards into viewport
        Ext.apply(this, {
            items: [
                FileSwipeApp.views.Login
               // ,FileSwipeApp.views.FileSwipeAppList
              //  ,FileSwipeApp.views.FileSwipeAppMap
            ]
        });
        FileSwipeApp.views.Viewport.superclass.initComponent.apply(this, arguments);
    },
    layoutOrientation : function(orientation, w, h) {
        FileSwipeApp.views.Viewport.superclass.layoutOrientation.call(this, orientation, w, h);
    }
});