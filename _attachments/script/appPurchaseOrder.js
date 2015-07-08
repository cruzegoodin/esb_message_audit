
$(function() {
    function urlParam(name){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results==null){
           return null;
        }
        else{
           return results[1] || 0;
        }
    }
    var path = unescape(document.location.pathname).split('/'),
        design = path[3],
        db = $.couch.db("esb_audit");

    function drawItems() {
        $("#esb_audit").empty();
        _key = urlParam('poNumber');
        object = {
                 key : Number(_key),
                 descending : "true",
                 limit : 50,
                 update_seq : true,
                 success : function(data) {
                     //builds views
                     setupChanges(data.update_seq);
                     var them = $.mustache($("#shipping-details").html(), {
                         items : data.rows.map(function(r) {return r.value;})
                     });
                     $("#content").html(them);
                 }
             };

        db.view(design + "/purchaseOrderNumber", object);
    };

    drawItems();

    var changesRunning = false;
    function setupChanges(since) {
        if (!changesRunning) {
            var changeHandler = db.changes(since);
            changesRunning = true;
            changeHandler.onChange(drawItems);
        }
    }

    $.couchProfile.templates.profileReady = $("#enter-key").html();
    $("#account").couchLogin({
        loggedIn : function(r) {
            $("#profile").couchProfile(r, {
                profileReady : function(profile) {}
            });
        },
        loggedOut : function() {
            $("#profile").html('<p>Please log in to see your profile.</p>');
        }
    });
 });