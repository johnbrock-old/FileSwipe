/*var FileSwipeApp = new Ext.Application({
    name: 'FiileSwipeApp',
    useLoadMask: true,
    launch: function(){
        FiileSwipeApp.views.viewport = new Ext.Panel({
            
            FiileSwipeApp.views.loginContainer = new Ext.Panel({
                id : 'loginContainer',
                layout : 'fit',
                html: 'This is the login container'
            });
    
            FiileSwipeApp.views.viewport = new Ext.Panel({
                fullscreen : true,
                layout : 'card',
                cardAnimation : 'slide',
                items: [FiileSwipeApp.views.loginContainer]
            });
             console.log('Launch!!');
        })
    }
    
    launch: function() {
        this.launched = true;
        this.mainLaunch();
    },
    mainLaunch: function() {
        if (!device || !this.launched) {return;}
        console.log('mainLaunch');
    }
})*/
/*Ext.regApplication({
    name: 'FileSwipeApp',
    launch: function() {
        this.launched = true;
        this.mainLaunch();
    },
    mainLaunch: function() {
        if (!device || !this.launched) {return;}
        console.log('mainLaunch');
        this.views.viewport = new this.views.Viewport();
    }
});

Ext.regApplication({
    name: 'FileSwipeApp',
    launch: function()
    {
        alert("Yay, it's working!");
    }
});*/

Ext.regApplication({
    name: 'FileSwipeApp',
    launch: function() {
        console.log('Launch!!!!');
        this.views.viewport = new this.views.Viewport();
    }
});