let startRocket = $("#start-rocket");
let openMenu = $(".burger-menu-button");

startRocket.on("click", () => {
  $("#rocket").animate({
    "top": "-20%",
  }, 2000)
})

startRocket.on("dblclick", () => {
  $("#rocket").animate({
    "top": "62%",
  }, 500)
})

openMenu.click(() => {
  if( $("#hidden-menu").css("right") == "-210px") {
    $("#hidden-menu").animate({
      "right": "0"
    })
  } else {
    $("#hidden-menu").animate({
      "right": "-210px"
    }) 
  }
})