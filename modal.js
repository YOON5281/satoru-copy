// 모달창 열기

for (let n = 0; n < 3; n++) {
  $(".img-box")
    .eq(n)
    .click(function () {
      if (window.innerWidth > 720) {
        // console.log("i");
        $("#modal-background").fadeIn(500);

        for (let m = 0; m < class_cnt2; m++) {
          $(".modal_img")
            .eq(m)
            .attr("src", `img/modal${n + 1}-${m + 1}.jpeg`);
          $(".modal_sub_img")
            .eq(m)
            .attr("src", `img/modal${n + 1}-${m + 1}.jpeg`);
        }
        $(".profile").html(
          `<h2>${modelProfile[n].name}</h2>
         <p>
        <span>Height : </span>${modelProfile[n].height}
        <span>Bust : </span>${modelProfile[n].bust}
        <span>Waist : </span>${modelProfile[n].waist}
        <span>Hips : </span> <br>${modelProfile[n].hips}
        <span>Shoes : </span>${modelProfile[n].shoes}
        <span>Hair : </span>${modelProfile[n].hair}
        <span>Eyes : </span>${modelProfile[n].eyes}
         </p>`
        );
      }
    });
}

//   모달창 닫기

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

// 모달창 첫째 사진들로 이미지와 내용 교체
for (let k = 0; k < 3; k++) {
  $(".model-main")
    .eq(k)
    .attr("src", `img/modal${k + 1}-1.jpeg`);
}
