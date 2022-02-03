// 모달창 열고 내용 수정

$(".img-box")
  .eq(0)
  .click(function () {
    // console.log("i");
    $("#modal-background").css("display", "block");
    for (let m = 0; m < class_cnt2; m++) {
      $(".modal_img")
        .eq(m)
        .attr("src", `img/modal1-${m + 1}.jpeg`);
      $(".modal_sub_img")
        .eq(m)
        .attr("src", `img/modal1-${m + 1}.jpeg`);
    }
    $(".profile").html(`<h2>Ami Suzuki</h2>
    <p>
    <span>Height : </span>177 
    <span>Bust : </span>80 
    <span>Waist : </span>60 
    <span>Hips : </span>89 <br>
    <span>Shoes : </span>25.5 
    <span>Hair : </span>Black
    <span>Eyes : </span>Dk.Brown </p>`);
  });

$(".img-box")
  .eq(1)
  .click(function () {
    // console.log("i");
    $("#modal-background").css("display", "block");
    for (let m = 0; m < class_cnt2; m++) {
      $(".modal_img")
        .eq(m)
        .attr("src", `img/modal2-${m + 1}.jpeg`);
      $(".modal_sub_img")
        .eq(m)
        .attr("src", `img/modal2-${m + 1}.jpeg`);
    }
    $(".profile").html(`<h2>Anna Herrera</h2>
    <p>
    <span>Height : </span>177 
    <span>Bust : </span>78 
    <span>Waist : </span>60 
    <span>Hips : </span>86 <br>
    <span>Shoes : </span>24.5 
    <span>Hair : </span>Brown
    <span>Eyes : </span>Brown </p>`);
  });

$("#close-cross").hover(
  function () {
    $(this).css("transform", "rotate(540deg)");
  },
  function () {
    $(this).css("transform", "rotate(0deg)");
  }
);

$("#close-cross").click(function () {
  //   console.log("j");
  $("#modal-background").css("display", "none");
  swiper.slideTo(0);
  swiper2.slideTo(0);
});
