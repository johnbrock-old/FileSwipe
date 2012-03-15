Ext.data.ProxyMgr.registerType("userstorage",
    Ext.extend(Ext.data.Proxy, {
        create: function(operation, callback, scope) {
        },
        read: function(operation, callback, scope) {
        },
        update: function(operation, callback, scope) {
        },
        destroy: function(operation, callback, scope) {
        }
    })
);

FileSwipeApp.models.User = Ext.regModel("FileSwipeApp.models.User", {
    fields: [
        {name: 'email',    type: 'string'},
        {name: 'password', type: 'password'}
    ],
    proxy: {
        type: "userstorage"
    }
});

FileSwipeApp.stores.contacts = new Ext.data.Store({
    model: "FileSwipeApp.models.User"
});

FileSwipeApp.models.Contact = Ext.regModel("FileSwipeApp.models.User", {
    fields: [...],
    proxy: {
        type: "userstorage"
    }
});

read: function(operation, callback, scope) {
    navigator.service.user.find(
        ['email', 'password'],
        function(deviceUser) {
           //success callback
        },
        function (e) { console.log('Error fetching user information'); },
        {multiple: true}
    );
},