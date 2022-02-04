$("body").css("display", "none");
$("body").fadeIn(1000);

let i = 0;
setInterval(function () {
  $(".auto-slide").css("background-position", `-${i / 5}px center`);
  i = i + 1;
}, 1);
$(window).scroll(function () {
  const height = $(window).scrollTop();
<<<<<<< HEAD
  // console.log(height);
=======
  console.log(height);
>>>>>>> d6ebf6c01d659d8a7b47b33f0d2bdb9a9c29d5d0
  if (height > 2500) {
    $(".creators").addClass("imgmove");
  } else {
    $(".creators").removeClass("imgmove");
  }

  if (height > 2800) {
    $(".dailylife").addClass("imgmove");
  } else {
    $(".dailylife").removeClass("imgmove");
  }

  if (height > 3200) {
    $(".become").addClass("imgmove");
  } else {
    $(".become").removeClass("imgmove");
  }

  if (height > 3600) {
    $(".contact").addClass("imgmove");
  } else {
    $(".contact").removeClass("imgmove");
  }
});

let class_cnt = document.getElementsByClassName("img-box").length;
// console.log(class_cnt);

for (let i = 0; i < class_cnt; i++) {
  $(".img-box")
    .eq(i)
    .hover(
      function () {
        // console.log("i");
        $(".shadow").eq(i).css("bottom", "-50px").css("right", "-50px");
        $(".model-introduct").eq(i).css("display", "block");
      },
      function () {
        // console.log("j");
        $(".shadow").eq(i).css("bottom", "450px").css("right", "450px");
        $(".model-introduct").eq(i).css("display", "none");
      }
    );
}

//swiper
let swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: "auto",
  freeMode: true,
  watchSlidesProgress: true,
});
let swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  // autoHeight: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
<<<<<<< HEAD
=======

// 모달창 첫째 사진들로 이미지와 내용 교체
for (let k = 0; k < 3; k++) {
  $(".model-main")
    .eq(k)
    .attr("src", `img/modal${k + 1}-1.jpeg`);
}
>>>>>>> d6ebf6c01d659d8a7b47b33f0d2bdb9a9c29d5d0
