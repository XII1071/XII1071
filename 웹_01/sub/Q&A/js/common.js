$(document).ready(function ()
{
    // 전체메뉴
  $("#all_menu").hide();

  $(".menu_logo").click(function () {
      $("#all_menu").fadeIn();
  });
  $(".all_close").click(function () {
      $("#all_menu").fadeOut();
  });
})
