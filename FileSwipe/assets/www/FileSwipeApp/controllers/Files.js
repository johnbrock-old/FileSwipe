Ext.regController('Files', {
    // index controller - first screen (file list)
	index: function() {
			if (!this.listPanel) {
	    	this.listPanel = this.render({
    	            xtype: 'fs-sharelist',
    	            listeners: {
    	                list: {
    	                    select: function(list, record) {
								console.log("call shareFile");
    	                        this.shareFile(record, 'left');
    	                    },
    	                    scope: this
    	                },
    	                activate : function(listPanel) {
    	                    listPanel.list.getSelectionModel().deselectAll();
    	                }
    	            }
    	        });
    	        FileSwipeApp.views.viewport.setActiveItem(this.listPanel);
    	} else {
    	        FileSwipeApp.views.viewport.setActiveItem(this.listPanel, {
					type: 'slide',
    	            direction: 'right'
    	        });
    	    }
    },  
    shareFile: function(file, slide) {
        this.listPanel = this.render({
            xtype: 'fs-shareview',
            listeners: {
                deactivate: function(shareView) {
                    shareView.destroy();
                },
                list: {
                    select: function(list, record) {
                        var msg = "Are you ready to share '" + file.data.name + "' with " + record.data.name + "?";
                    	Ext.Msg.confirm("Confirm", msg, this.share(file, record))
                    },
                    scope: this
                },
                activate : function(listPanel) {
                    listPanel.list.getSelectionModel().deselectAll();
                }
            }
        });

        //FileSwipeApp.views.viewport.setActiveItem(this.listPanel);

        FileSwipeApp.views.viewport.setActiveItem(this.listPanel, {
            type: 'slide',
            direction: 'left'
        });
    },
    
    share: function(file, record) {
    	Ext.Ajax.request({
    		   url: 'http://fileswipe.herokuapp.com/owners.json',    // where you wanna post
    		   success: function() {Ext.Msg.alert("Success", "File Shared", Ext.emptyFn)},   // function called on success
    		   failure: function() {Ext.Msg.alert("Oops", "File NOT shared. Please try again.", Ext.emptyFn)},
    		   params: { 
    			   			'owner[email]': record.data.email, 
    			   			'owner[url]': file.data.url, 
    			   			'owner[status]': false
    			   		}
    		});
    }
});
