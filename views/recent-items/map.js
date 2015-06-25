function(doc) {
	var id;
	if(doc.OrderId || doc.PurchaseOrderNumber) {
		id = doc.OrderId;
	if(!id){
		id=doc.PurchaseOrderNumber;
		}

			emit(id, {
			
			id : doc.OrderID,
			po : doc.PurchaseOrderNumber
			
			
			
			});
		
	}
};






// function(doc) {
//   if (doc.created_at) {
//       var p = doc.profile || {};
//       emit(doc.created_at, {
//           message:doc.message,
//           gravatar_url : p.gravatar_url,
//           nickname : p.nickname,
//           name : doc.name
//       });
//   }
// };