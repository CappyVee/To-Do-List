//business logic
function ListItem(name, time, description) {
  this.itemName = name;
  this.itemTime = time;
  this.itemDesc = description;
}

ListItem.prototype.toDoList = function() {
  return "<h3>Do this:" + this.itemName + "</h3>" + "<h4> at " + this.itemTime + "</h4>";
}


//user interface logic
$(document).ready(function(){
  $("form#toDoForm").submit(function(event){
    event.preventDefault();

    var inputtedName = $("input#listItemName").val();
    var inputtedTime = $("input#listItemTime").val();
    var inputtedDescription = $("input#listItemDescription").val();

    var toDoListItem = new ListItem(inputtedName, inputtedTime, inputtedDescription);
    // alert(inputtedName + " " + inputtedDescription + " " + inputtedTime);

    $("ul#storeListItems").append("<li><span class='listInfo'>" + toDoListItem.toDoList() + "</span></li>");

    $(".listInfo").last().click(function(){
      $(".show-info").show();
      $(".displayName").text(toDoListItem.itemName);
      $(".displayTime").text(toDoListItem.itemTime);
      $(".displayDescription").text(toDoListItem.itemDesc);
    });//end click fxn
    $("input#listItemName").val("Enter a new task (you jerk)");
    $("input#listItemDescription").val("Enter a new description");
    $("input#listItemDescription").val("Enter a time");

  })//event fxn
});//doc rdy fxn
