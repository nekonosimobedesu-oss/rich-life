//drawer
jQuery("#js-drawer-icon").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
});

$("#js-drawer-content [href]").on("click", function (event) {
  $("#js-drawer-icon").trigger("click");
});

// ヘッダーの高さ分だけコンテンツを下げる
$(function () {
  const height = $(".js-header").height();
  $("main").css("margin-top", height);
});

//スムーススクロール
jQuery('a[href^="#"]').on("click", function () {
  var header = jQuery("header").innerHeight();
  var id = jQuery(this).attr("href");
  var position = 0;
  if (id != "#") {
    var position = jQuery(id).offset().top - header;
  }
  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    300
  );

  return false;
});

//ビューポイント
window.addEventListener("resize", function () {
  var width = window.innerWidth;
  if (width < 375) {
    document.body.style.width = "375px";
  } else {
    document.body.style.width = "100%";
  }
});

//ドロップダウンメニュー
document.addEventListener("DOMContentLoaded", function () {

  const dropdownLinks = document.querySelectorAll(".header__link.has-dropdown");
  const dropdownMenus = document.querySelectorAll(".dropdown-menu");

  dropdownLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetDropdown = this.getAttribute("data-dropdown");
      const dropdownMenu = document.getElementById(
        `dropdown-${targetDropdown}`
      );

      // 他のドロップダウンを閉じる
      dropdownLinks.forEach((otherLink) => {
        if (otherLink !== this) {
          otherLink.classList.remove("active");
        }
      });
      dropdownMenus.forEach((menu) => {
        if (menu !== dropdownMenu) {
          menu.classList.remove("active");
        }
      });

      // クリックされたドロップダウンを開閉
      this.classList.toggle("active");
      dropdownMenu.classList.toggle("active");
    });
  });

  // 外部クリックでドロップダウンを閉じる
  document.addEventListener("click", function (e) {
    if (
      !e.target.closest(".header__nav") &&
      !e.target.closest(".dropdown-menu")
    ) {
      dropdownLinks.forEach((link) => link.classList.remove("active"));
      dropdownMenus.forEach((menu) => menu.classList.remove("active"));
    }
  });
});

//qa
jQuery(document).ready(function ($) {
  $(".qa__box-a").hide(); // 全部閉じる
  $(".qa__box-icon").removeClass("is-open"); // アイコンも全部閉じる

  $(".qa__box-q").click(function () {
    const $answer = $(this).next(".qa__box-a");
    const $icon = $(this).children(".qa__box-icon");

    $answer.slideToggle();
    $icon.toggleClass("is-open");

    $(".qa__box-a").not($answer).slideUp();
    $(".qa__box-icon").not($icon).removeClass("is-open");
  });
});

