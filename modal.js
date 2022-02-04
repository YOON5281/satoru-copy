// 모델 프로필

const modelProfile = [
  {
    name: "Ami Suzuki",
    main_name: "Ami",
    height: "177",
    bust: "80",
    waist: "60",
    hips: "89",
    shoes: "25.5",
    hair: "Black",
    eyes: "DK.Brown",
  },
  {
    name: "Anna Herrera",
    main_name: "Anna",
    height: "177",
    bust: "78",
    waist: "60",
    hips: "86",
    shoes: "24.5",
    hair: "Brown",
    eyes: "Brown",
  },
  {
    name: "Azlin N",
    main_name: "Azlin N",
    height: "174",
    bust: "83",
    waist: "63",
    hips: "87",
    shoes: "24.5",
    hair: "Brown",
    eyes: "GreenBlue",
  },
];

// 모달창 열기

for (let n = 0; n < 3; n++) {
  // 모달창 첫째 사진들로 이미지와 내용 교체
  $(".model-main")
    .eq(n)
    .attr("src", `img/modal${n + 1}-1.jpeg`);

  $(".model-name").eq(n).text(modelProfile[n].main_name);
  $(".model-profile")
    .eq(n)
    .text(
      `${modelProfile[n].height}/${modelProfile[n].bust}/${modelProfile[n].waist}/${modelProfile[n].hips}`
    );
  let class_cnt2 = document.getElementsByClassName("modal_img").length;
  //모달창 내부에 프로필 넣기
  $(".img-box")
    .eq(n)
    .click(function () {
      //PC용 모달창
      if (window.innerWidth > 900) {
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
      // 모바일용 모달창
      else {
        $("#s-modal-background").fadeIn(500);

        for (let sm = 0; sm < class_cnt2; sm++) {
          // console.log("k");
          $(".s-modal-img")
            .eq(sm)
            .attr("src", `img/modal${n + 1}-${sm + 1}.jpeg`);

          $(".s-profile").html(
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
      }
    });
}

//   모달창 닫기
$(".close-cross").hover(
  function () {
    $(this).css("transform", "rotate(540deg)");
  },
  function () {
    $(this).css("transform", "rotate(0deg)");
  }
);

$(".close-cross").click(function () {
  //   console.log("j");
  $("#modal-background").css("display", "none");
  $("#s-modal-background").css("display", "none");
  swiper.slideTo(0);
  swiper2.slideTo(0);
});
