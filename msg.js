/*******************************
 * 
 *      Crazy Cool messaging system
 * 
 * 
 * 
 * 
 *******************************/
$('#btn-chat').click(function(){
    const message = $("#message").val();
    $("#message").val("");
    //send message
    $.post( "http://localhost:5000/message", { message } );
});
function onMessageAdded(data) {
    let template = $("#new-message").html();
    template = template.replace("{{body}}", data.message);
    $(".chat").append(template);
}

 function insertNote( note ){

    let msgBox;

    $("#msgBox").append( note + "<br>");

    //position scroll view to bottom
    msgBox = document.getElementById("msgBox");
    msgBox.scrollTop = msgBox.scrollHeight;
 } 