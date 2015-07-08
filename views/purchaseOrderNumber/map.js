function(doc) {
	var id;
	if(doc.PurchaseOrderNumber) {
		id = doc.PurchaseOrderNumber;


			emit(id,{
			PN: doc.ProxyName,
			PS: doc.ProxyStage,
			DT: doc.auditDateTime


			});

	}
};

