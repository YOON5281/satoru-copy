let i = 0;
setInterval(function () {
  $(".auto-slide").css("background-position", `-${i / 5}px center`);
  i = i + 1;
}, 1);
$(window).scroll(function () {
  const height = $(window).scrollTop();
  //   console.log(height);
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

  if (height > 3000) {
    $(".become").addClass("imgmove");
  } else {
    $(".become").removeClass("imgmove");
  }

  if (height > 3400) {
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
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
let swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

// 모달창 열고 닫기

$(".img-box")
  .eq(0)
  .click(function () {
    // console.log("i");
    $("#modal-background").css("display", "block");
  });

$("#close-cross").click(function () {
  //   console.log("j");
  $("#modal-background").css("display", "none");
});
