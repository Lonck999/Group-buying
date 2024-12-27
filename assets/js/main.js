
//側選單開關
function Togglesidebar(){
  let sidebarShow= document.querySelector(".icon-sidebar-show");
  let sidebarHide= document.querySelector(".icon-sidebar-hide");
  if(sidebarShow){
    sidebarShow.addEventListener('click',e=>{
      switchClass(".sidebar-left-width", { open : 'd-block transition-show', close : 'd-none transition-hide' })
    })
  }
  if(sidebarHide){
    sidebarHide.addEventListener('click',e=>{
      switchClass(".sidebar-left-width", { open : 'd-none transition-hide', close : 'd-block transition-show' })
    })
  }

}

//數字+,-
function auto_quantity(){

  document.addEventListener('DOMContentLoaded', function () {
    if( document.querySelector('[data-quantity="plus"]')){
      // 增加數量
      document.querySelector('[data-quantity="plus"]').addEventListener('click', function (e) {
        e.preventDefault();
        var quantityInput = document.querySelector('[data-quantity="number"]');
        var currentVal = parseInt(quantityInput.value);
        if (!isNaN(currentVal)) {
            quantityInput.value = currentVal + 1;
        } else {
            quantityInput.value = 0;
        }
      });
    }

    if( document.querySelector('[data-quantity="minus"]')){
      // 減少數量
      document.querySelector('[data-quantity="minus"]').addEventListener('click', function (e) {
        e.preventDefault();
        var quantityInput = document.querySelector('[data-quantity="number"]');
        var currentVal = parseInt(quantityInput.value);
        if (!isNaN(currentVal) && currentVal > 0) {
            quantityInput.value = currentVal - 1;
        } else {
            quantityInput.value = 0;
        }
      });
    }

  });

}

//勾選 有整欄效果
function initCheckbox(){
  const selcheckbox = document.querySelectorAll('input[type="checkbox"]:not([all])');
  selcheckbox.forEach(function(checkbox){
    checkbox.addEventListener('change', function() { // 改用 'change' 事件
      const cartListItem = this.closest('.cart-list-item'); // 使用 closest() 找到最近的 .cart-list-item 元素
      if (cartListItem) {
          if(checkbox.checked) cartListItem.classList.add('selectBox')
          else cartListItem.classList.remove('selectBox')
      }
    });
  })
}

//checkbox 全選監聽
function AllCheckBox(){
    const checkAll = document.querySelector('input[type="checkbox"][all]');
    if(Boolean(checkAll)){
      const checkboxes = document.querySelectorAll('input[type="checkbox"]:not([all])');
       // 初始化所有核取方塊為未選取狀態
      checkboxes.forEach(checkbox => checkbox.checked = false);
      checkAll.checked = false;
      // 事件代理處理所有核取方塊的變更
      document.addEventListener('change', e => {
        const target = e.target;
        // 如果是 "全選" 核取方塊被變更

        if (target === checkAll) {

          checkboxes.forEach(checkbox => {
            checkbox.checked = checkAll.checked;
            const cartListItem = checkbox.closest('.cart-list-item');
            if(checkAll.checked){
              cartListItem.classList.add('selectBox')
            }else{
              cartListItem.classList.remove('selectBox')
            }
          });

        }else if (target.matches('input[type="checkbox"]:not([all])')) {
          // 如果是其他核取方塊被變更
          const allChecked = [...checkboxes].every(checkbox => checkbox.checked);
          checkAll.checked = allChecked;
        }
      });
    }

}

//collapse 側選單項目做展開
function auto_NavBar(){
  document.addEventListener("DOMContentLoaded", function() {
    var sidebarBtns = document.querySelectorAll(".sidebar-btn--1");
    var active_Btns = document.querySelectorAll(".sidebar-btn--1.active");//當li 友加上.active
    sidebarBtns.forEach(function(sidebarBtn) {
      sidebarBtn.addEventListener("click", function() {
        sidebarBtn.classList.add("active");
        var collapse = this.parentElement.parentElement;
        if (collapse.classList.contains("collapse")) {
          collapse.classList.add("show");
        }
      });
    });
    //一開始自動展開
    active_Btns.forEach(function(coll) {
      var collapse = coll.parentElement.parentElement;
      if (collapse.classList.contains("collapse")) {
        collapse.classList.add("show");
      }
    });
  });
}

//輪播圖-首頁
function splideImg(){
  let target= document.querySelector(".splide-index");
  if(!target) return;
  var splide = new Splide(".splide-index", {
    wheel: true,
    autoplay: true,
    lazyLoad: 'nearby',
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
    speed :3000,
    autoScroll: {
      speed: 3,
    },
  });
  splide.mount();
}
//輪播圖-商品頁
function splideProductImg(){
  let target= document.querySelector(".splide-product");
  if(!target) return;
  var splide = new Splide( '.splide-product', {
    type:'loop',
    gap        : 10,
    rewind     : true,
    pagination : false,
    speed :2000,
  } );

  var thumbnails = document.getElementsByClassName( 'product-thumbnail-item' );
  var current;

  for ( var i = 0; i < thumbnails.length; i++ ) {
    initThumbnail( thumbnails[ i ], i );
  }

  function initThumbnail( thumbnail, index ) {
    thumbnail.addEventListener( 'click', function () {
      splide.go( index );
    } );
  }

  splide.on( 'mounted move', function () {
    var thumbnail = thumbnails[ splide.index ];
    if ( thumbnail ) {
      if ( current ) {
        current.classList.remove( 'is-active' );
      }

      thumbnail.classList.add( 'is-active' );
      current = thumbnail;
    }
  } );
  splide.mount();
}
function splideProductImgMobile(){
  let target= document.querySelector("#mobile-image-carousel");
  if(!target) return;

    new Splide(target, {
      wheel: true,
      autoplay: true,
      type   : 'loop',
      drag   : 'free',
      focus  : 'center',
      speed :3000,
      height    : '20rem',
      autoScroll: {
        speed: 3,
      },
    }).mount()


}

//密碼是否可看
function initPasswd(){
  if(document.querySelector(".showpassword")){
      document.querySelector(".showpassword").addEventListener('change', function() {

          let passwordInput = document.querySelector(".password");
          if (this.checked) {
              passwordInput.type = "text";
          } else {
              passwordInput.type = "password";
          }
      })
  }
}
//彈跳視窗，可以用在提示
function saveBtn(){
  let targrt=document.querySelector("#save");
  if(!targrt) return;
  document.querySelector("#save").addEventListener("click", function() {

    var modal = new bootstrap.Modal(myModal);
    modal.show();
  });
}
!(function() {

  //checkbox全選
  AllCheckBox();
  //對li的active 上層collapse 做展開
  auto_NavBar();
  //數字+-
  auto_quantity();
  //首頁輪播圖
  splideImg();
  //商品頁輪播圖
  splideProductImg();
  //密碼查看
  initPasswd();
  //控制手版側選單
  Togglesidebar();
  //手機版輪播圖
  splideProductImgMobile();

  initCheckbox()
  saveBtn();




}());

let selectHeader = document.querySelector('.header')
if (selectHeader) {
  const headerScrolled = () => {

    if (window.scrollY >55) {
      selectHeader.classList.add('header-scrolled')

    } else {
      selectHeader.classList.remove('header-scrolled')
    }
  }
  window.addEventListener('load', headerScrolled)
  document.addEventListener('scroll', headerScrolled)
}
