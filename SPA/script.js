$(document).ready(function () {
  const $text1 = $("#text1");
  const $text2 = $("#text2");
  const $text3 = $("#text3");
  const $show = $("#show");

  $text1.on("click", function () {
    $.ajax({
      url: "https://baconipsum.com/api/?type=meat-and-filler",
      type: "GET",
      dataType: "text",
      success: function (data) {
        $show.html(data);
      },
      error(){
        $('#show').html('Error');
      }
    });
  });

  $text2.on("click", function () {
    $.ajax({
      url:
        "https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1",
      type: "GET",
      dataType: "text",
      success: function (data) {
        $show.html(data);
      },
      error(){
        $('#show').html('Error');
      }
    });
  });

  $text3.on("click", function () {
    $.ajax({
      url:
        "https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1",
      type: "GET",
      dataType: "text",
      success: function (data) {
        $show.html(data);
      },
      error(){
        $('#show').html('Error');
      }
    });
  });
});
