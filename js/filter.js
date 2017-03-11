// FILTER THEMES
$(document).ready(function() {
  $("#costumes").click(function() {
    i
    $('p:contains("Costumes")' ).closest(".tl-timemarker").show();
  });

  $("#winter").click(function() {
    $('p:contains("Winter")' ).closest(".tl-timemarker").toggle();
    $('p:contains("Kids")' ).closest(".tl-timemarker").toggle();
    $('p:contains("Outside")' ).closest(".tl-timemarker").toggle();
  });

  $("#show").click(function(){
      $(".tl-timemarker").show();
      $("input[type='checkbox']:checked").prop("checked",false);
  });



  $.ajax({
    type: "GET",
    dataType: "json",
    cache: false,
    url: "photoinventory.json",
    success: parseData
  });

  function parseData(json){
    for(i in json){
      for(i in json.events) {
        console.log("hello");

      }
    }
    console.log(json);
  };
});
