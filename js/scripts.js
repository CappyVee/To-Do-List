//business logic
function ListItem(name, description, time) {
  this.itemName = name;
  this.itemDesc = description;
  this.itemTime = time;
}

ListItem.prototype.toDoList = function() {
  return "<h1>" + this.itemName + "</h1>" + "<p>" + this.itemDesc + "</p>" + this.itemTime;
}


//user interface logic
$(document).ready(function(){
  $("form#toDoForm").submit(function(event){
    event.preventDefault();

    var inputtedName = $("input#listItemName").val();
    var inputtedDescription = $("input#listItemDescription").val();
    var inputtedTime = $("input#listItemTime").val();

    var toDoListItem = new ListItem(inputtedName, inputtedDescription, inputtedTime);
    // alert(inputtedName + " " + inputtedDescription + " " + inputtedTime);
    $(".show-info").show();

    $("#storeListItems").append("<li>" + toDoListItem.toDoList() + "</li>");
  })//event fxn
});//doc rdy fxn
