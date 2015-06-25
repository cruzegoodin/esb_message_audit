//
db = $.couch.db("esb_audit");
function updatemessages() {
$("#esb_audit").empty();
db.view("/return_id", {
 success: function(data) {
 for (i in data.rows) {
 $("#esb_audit").append('<div id="' + data.rows[i].value._id
+ '" class="recent-messages"><span>' +
 data.rows[i].value.OrderId +
 "</span><span>" +
 data.rows[i].value.PurchaseOrderNumber +
 "</span></div>"<span>" +
 '<a href="#" id="' + data.rows[i].value._id
+ '" class="edit">Edit Message</a>' +
 "</span><span>" +
 '<a href="#" id="' + data.rows[i].value._id
+ '" class="remove">Remove Message</a>' +
 "</span>
 );
 }
}
});
//}
//
//$(document).ready(function() {
//updatemessages();
//})

db = $.couch.db("esb_audit");
function updateesb_audit() {
    $("#esb_audit").empty();

    db.view("/return_id", {
        success: function(data) {
            for (i in data.rows) {
                $("#esb_audit").append('<div id="' +
                data.rows[i].value._id +
                '" class="contactrow"><span>' +
                data.rows[i].value.OrderId +
                                      "</span><span>" +
                                      data.rows[i].value.PurchaseOrderNumber +
                                      "</span><span>" +
                                      '<a href="#" id="' + data.rows[i].value._id
+ '" class="edit">Edit Contact</a>' +
                                      "</span><span>" +
                                      '<a href="#" id="' + data.rows[i].value._id
+ '" class="remove">Remove Contact</a>' +
                                      "</span></div>"
                                     );
            }
        }
    });
}

function contactform(doctoedit) {
var formhtml;
    formhtml =
'<form name="update" id="update" action="">';

    if (doctoedit) {
formhtml = formhtml +
    '<input name="docid" id="docid" type="hidden" value="' + doctoedit._id
+ '"/>';
    }

    formhtml = formhtml +
'<table>';

    formhtml = formhtml +
        '<tr><td>OrderId</td>' +
'<td><input name="OrderId" type="text" id="OrderId" value="' +
(doctoedit ? doctoedit.OrderId : '') +
'"/></td></tr>';
    formhtml = formhtml +
'<tr><td>PurchaseOrderNumber</td>' +
'<td><input name="PurchaseOrderNumber" type="text" id="PurchaseOrderNumber" value="' +
(doctoedit ? doctoedit.PurchaseOrderNumber : '') +
'"/></td></tr>';
    formhtml = formhtml + '<tr><td>Email</td>' +
'<td><input name="email" type="text" id="email" value="' +
(doctoedit ? doctoedit.email : '') +
'"/></td></tr>';

formhtml = formhtml +
'</table>' +
'<input type="submit" name="submit" class="update" value="' +
        (doctoedit ? 'Update' : 'Add') + '"/>' +
'</form>';
    $("#contactform").empty();
    $("#contactform").append(formhtml);
}

function builddocfromform(doc,form) {
if (!doc) {
        doc = new Object;
    }
    doc.OrderId = form.find("OrderId").val();
    doc.PurchaseOrderNumber = form.find("PurchaseOrderNumber").val();
    doc.email = form.find("email").val();

return(doc);
}

$(document).ready(function() {

    updateesb_audit();

    $("#esb_audit").click(function(event) {

    var target = $(event.target);
    if (target.is('a')) {
        id = target.attr("id");

        if (target.hasClass("edit")) {
            db.openDoc(id, { success: function(doc) {
        contactform(doc);
            }});
        }

if (target.hasClass("remove")) {
            html = '<span class="confirm">Really Delete? ' +
        '<a href="#" id="' + id + '" class="actuallydel">Delete</a>' +
                '<a href="#" id="' + id + '" class="canceldel">Cancel</a></span>';
            target.parent().append(html);
        }

if (target.hasClass("actuallydel")) {

    db.openDoc(id, {
        success: function(doc) {
            db.removeDoc(doc, { success: function() {
                    target.parents("div.contactrow").remove();
                    }
                                       });
                }
            }
                       );
        }

if (target.hasClass("canceldel")) {
            target.parents("span.confirm").remove();
        }
    }
    });

    $("a.add").live('click', function(event) {
contactform();
    });

    $("input.update").live('click', function(event) {
var form = $(event.target).parents("form#update");

        var id = form.find("input#docid").val();
        if (id) {
            db.openDoc(id, {
                success: function(doc) {
            db.saveDoc(builddocfromform(doc,form), {
                        success: function() {
                    $("form#update").remove();
                            updateesb_audit();
                        }});
                },
            });
        }
        else
        {
            $db.saveDoc(builddocfromform(null,$form), {
                success: function() {
            $("form#update").remove();
                    updateesb_audit();
                },
            });
        }
        return false;
    });
});

//...
//    root: "http://localhost:5984/",
//...
//    max_quotes: 6,
//
//    //Invoked when the HTML page is first loaded
//    loadPage: function()
//    {
//        var six_latest = poq.root + "poquotes/_design/poquotes/_view/by_year?&limit=" var orderid = esb_audit/_design/CruzeQ/_view/return_id
//            + poq.max_quotes + "&descending=true&callback=?";
//        $.getJSON(six_latest, poq.handleMainQuotes);
//...
//    },
//
//    //Invoked with the result of the Ajax call to load quote documents
//    handleMainQuotes: function(json)
//    {
//        //Load up to six records, as available
//        quote_count = Math.min(poq.max_quotes, json["total_rows"])
//        for (var i=0; i<quote_count; i++) {
//            var doc = json["rows"][i]["value"]    var doc = json["rows
//            var year = doc["work"]["year"].toString() var info = doc["OrderId"].toString()
//            var title = doc["work"]["title"].toString()
//            var link = doc["work"]["link"].toString()
//
//            //Create an HTML snippet from the fields of each quote document
//            qblock = $("<div class='span4 featured-quote'></div>")
//              .append("<h2>" + doc["author"] + "</h2>")
//              .append("<p style='font-size: 80%; height: 8em;'>" + doc["text"] + "</p>")
//              .append("<p>" + year + "</p>")
//              .append("<p><a href='" + link + "'>" + title + "</a></p>")
//              .append("<p><a class='btn' href='#'>View details &raquo;</a></p>")
//            //jQuery's eq selector to find the target div corresponding to the loop index
//            $('div.featured-quote:eq(' + i.toString() + ')').replaceWith(qblock);
//        }
//    },