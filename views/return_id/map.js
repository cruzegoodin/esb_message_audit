function(doc) {
	var id;
	if(doc.OrderId) {
		id = doc.OrderId;


			emit(id,{
			PN: doc.ProxyName,
			PS: doc.ProxyStage,
//			PO: doc.ProcessSalesOrder
			DT: doc.auditDateTime
//			OD: doc.OrderId

			});

	}
};





