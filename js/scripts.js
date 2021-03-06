//business logic
function ListItem(name, time, description) {
  this.itemName = name;
  this.itemTime = time;
  this.itemDesc = description;
}

ListItem.prototype.toDoList = function() {
  return "<h5>Do this: " + this.itemName + "</h5>" + "<h6> at " + this.itemTime + " O'clock</h6>" + "<p class='remove'>Complete?</p>";
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
    $("input#listItemDescription").val("Enter a description");
    $("input#listItemTime").val("00:00:00");

    $(".remove").click(function(){
      $(this).closest("li").remove();
      $(".show-info").hide();
    })//remove fxn

  })//event fxn
});//doc rdy fxn
