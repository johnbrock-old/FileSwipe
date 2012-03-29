FileSwipeApp.models.Contact = Ext.regModel("FileSwipeApp.models.Contact", {
										   fields: [
													{name: 'name', type: 'string'},
													{name: 'last_name', type: 'string'},
													{name: 'email', type: 'string'},
													{name: 'phone_num', type: 'string'}
													]
										   });

Ext.data.ProxyMgr.registerType("contactstorage",
							   Ext.extend(Ext.data.Proxy, {
										  create: function(operation, callback, scope) {
										  },
										  read: function(operation, callback, scope) {
										  var thisProxy = this;
										  navigator.contacts.find(
																  ['id', 'name', 'emails', 'phoneNumbers', 'addresses'],
																  function(deviceContacts) {
																  //loop over deviceContacts and create Contact model instances
																  var contacts = [];
																  for (var i = 0; i < deviceContacts.length; i++) {
																  var deviceContact = deviceContacts[ i ];
																  var contact = new thisProxy.model({
																									name: deviceContact.name.givenName,
																									last_name: deviceContact.name.familyName,
																									email: deviceContact.emails,
																									phone_num: deviceContact.phoneNumbers[0].value
																									});
																  contact.deviceContact = deviceContact;
																  contacts.push(contact);
																  }
																  //return model instances in a result set
																  operation.resultSet = new Ext.data.ResultSet({
																											   records: contacts,
																											   total : contacts.length,
																											   loaded : true
																											   });
																  //announce success
																  operation.setSuccessful();
																  operation.setCompleted();
																  //finish with callback
																  if (typeof callback == "function") {
																  callback.call(scope || thisProxy, operation);
																  }
																  },
																  function (e) { console.log('Error fetching contacts'); },
																  {multiple: true}
																  );
										  },
										  update: function(operation, callback, scope) {
										  },
										  destroy: function(operation, callback, scope) {
										  }
										  })
							   );


FileSwipeApp.stores.contacts = new Ext.data.JsonStore({
													  model: "FileSwipeApp.models.Contact",
													  proxy: {
													  type: "contactstorage"
													  }
													  });

Ext.regStore('ContactsStore', FileSwipeApp.stores.contacts);