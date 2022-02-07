// 모델 프로필

const modelProfile = [
  {
    //1
    name: "Ami Suzuki",
    mainName: "Ami",
    height: "177",
    bust: "80",
    waist: "60",
    hips: "89",
    shoes: "25.5",
    hair: "Black",
    eyes: "DK.Brown",
  },
  {
    //2
    name: "Anna Herrera",
    mainName: "Anna",
    height: "177",
    bust: "78",
    waist: "60",
    hips: "86",
    shoes: "24.5",
    hair: "Brown",
    eyes: "Brown",
  },
  {
    //3
    name: "Azlin N",
    mainName: "Azlin N",
    height: "174",
    bust: "83",
    waist: "63",
    hips: "87",
    shoes: "24.5",
    hair: "Brown",
    eyes: "GreenBlue",
  },
  {
    //4
    name: "Dalphne",
    mainName: "Dalphne",
    height: "178",
    bust: "82",
    waist: "60",
    hips: "89",
    shoes: "26",
    hair: "DK.Brown",
    eyes: "Blue",
  },
  {
    //5
    name: "Milano Nasu",
    mainName: "Milano",
    height: "179",
    bust: "80",
    waist: "60",
    hips: "90",
    shoes: "26",
    hair: "Black",
    eyes: "Black",
  },
  {
    //6
    name: "Nadine L",
    mainName: "Nadine",
    height: "178",
    bust: "78",
    waist: "56",
    hips: "88",
    shoes: "25.5",
    hair: "Brown",
    eyes: "Brown",
  },
  {
    //7
    name: "Laura Blok",
    mainName: "Laura",
    height: "178",
    bust: "81",
    waist: "60",
    hips: "90",
    shoes: "26",
    hair: "Dk.Blode",
    eyes: "GrayGreen",
  },
  {
    //8
    name: "Anastasia Lagune",
    mainName: "Anastasia",
    height: "180",
    bust: "84",
    waist: "61",
    hips: "86",
    shoes: "25.5",
    hair: "Lt.Brown",
    eyes: "Blue",
  },
  {
    //9
    name: "Maeve",
    mainName: "Maeve",
    height: "173",
    bust: "82",
    waist: "61",
    hips: "86",
    shoes: "25.5",
    hair: "Lt.Brown",
    eyes: "Blue",
  },
  {
    //10
    name: "Noreen",
    mainName: "Noreen",
    height: "178",
    bust: "83",
    waist: "60",
    hips: "88",
    shoes: "24.5",
    hair: "Blonde",
    eyes: "GreenBrown",
  },
  {
    //11
    name: "Jolina",
    mainName: "Jolina",
    height: "176",
    bust: "81",
    waist: "60",
    hips: "88",
    shoes: "25.5",
    hair: "Blonde",
    eyes: "BlueGreen",
  },
  {
    //12
    name: "Eduarda Reis",
    mainName: "Eduarda",
    height: "177",
    bust: "78",
    waist: "59",
    hips: "86",
    shoes: "25",
    hair: "Lt.Brown",
    eyes: "Blue",
  },
  {
    //13
    name: "Yuka Sekimizu",
    mainName: "Yuka",
    height: "178",
    bust: "80",
    waist: "60",
    hips: "85",
    shoes: "25",
    hair: "Black",
    eyes: "Dk.Brown",
  },
  {
    //14
    name: "Nastya PA",
    mainName: "Nastya",
    height: "177",
    bust: "80",
    waist: "57",
    hips: "87",
    shoes: "26",
    hair: "Brown",
    eyes: "Green",
  },
  {
    //15
    name: "Louise Lefebure",
    mainName: "Louise",
    height: "178",
    bust: "84",
    waist: "61",
    hips: "86",
    shoes: "26",
    hair: "Brown",
    eyes: "Blue",
  },
  {
    //16
    name: "Natalia M",
    mainName: "Natalia",
    height: "175",
    bust: "82",
    waist: "60",
    hips: "89",
    shoes: "24.5",
    hair: "Brown",
    eyes: "Brown",
  },
  {
    //17
    name: "Geiza",
    mainName: "Geiza",
    height: "176",
    bust: "78",
    waist: "60",
    hips: "90",
    shoes: "25",
    hair: "Brown",
    eyes: "Brown",
  },
  {
    //18
    name: "Kateryna R",
    mainName: "Kateryna",
    height: "177",
    bust: "80",
    waist: "58",
    hips: "89",
    shoes: "26",
    hair: "Brown",
    eyes: "Brown",
  },
];

// 모달창 열기

for (let n = 0; n < 18; n++) {
  // 모달창 첫째 사진들로 이미지와 내용 교체
  $(".model-main")
    .eq(n)
    .attr("src", `img/modal${n + 1}-1.jpeg`);

  $(".model-name").eq(n).text(modelProfile[n].mainName);
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
