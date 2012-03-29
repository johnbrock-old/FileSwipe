FileSwipeApp.models.Files = Ext.regModel("FileSwipeApp.models.Files", {
    fields: [
        {name: 'created_at', type: 'string'},
        {name: 'file_id', type: 'string'},
        {name: 'file_type', type: 'string'},
        {name: 'id', type: 'int'},
        {name: 'name', type: 'string'},
        {name: 'size', type: 'int'},
        {name: 'updated_at', type: 'string'},
        {name: 'url', type: 'string'}
        ]
});
