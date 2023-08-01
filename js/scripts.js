var btnclick=0;
var img_05 = document.querySelector('.img_05');
var description = document.querySelector('.description');
$(document).ready(function(){
    $('body').css('overflow-y','hidden');
})
//loading完才執行動畫
window.onload=function(){
   $('body').css('overflow-y','');
   PageReady();
   animation();
}
function PageReady()   
{     
   if ($("#load") != null)   
   {   
       $("#load").fadeOut(1000);     
   }   
}
function animation(){
   $('.L_text>text').each(function(){
       $(this).addClass('start');
   })
}


$(window).scroll(function() {
   // 網頁內部高度
   var h = (window.innerHeight);
   // 滾輪到網頁內部最高點距離
   var scrollout = $(window).scrollTop();
   // 最上方導覽列
   var scrollTop = $('.top').offset().top;
   // 箭頭動畫
   var scrollani = $('.s_ani').offset().top;
   var scrollani2 = $('.s_ani2').offset().top;
   //開始執行動畫距離
   var scrPos = (h-scrollTop);
   var aniPos = (scrollout-(scrollani-h));
   var aniPos2 = (scrollout-(scrollani2-h));
   // 超過banner背景變色
   if (scrPos < 0) {
       $('.top').css( "background-color","rgba(0, 0, 0, 0.7)" );
   }else if(scrPos > 0){
        $('.top').css( "background-color","transparent" );
   }
   //箭頭動畫1
   if (aniPos>0) {
       $('.s_ani').addClass( "ani" );
   }else if(aniPos<0){
        $('.s_ani').removeClass( "ani" );
   }
   if (aniPos2>0) {
       $('.s_ani2').addClass( "ani" );
   }else if(aniPos<0){
        $('.s_ani2').removeClass( "ani" );
   }
   //箭頭動畫2

})


$(".btn").click(function(){
    console.log("click");
    if(btnclick==1){
        $('.description').css("display", "none");
        $('.des_content').css("display", "none");
        btnclick=0;
        img_05.classList.remove('img_ani');
        description.classList.remove('description_ani');
        // console.log(btnclick);
    }else{
        $('.description').css("display", "block");
        $('.des_content').css("display", "block");
        btnclick=1;
        img_05.classList.add('img_ani');
        description.classList.add('description_ani');
        // console.log(btnclick);
        $('.btn').removeClass("btn_ani");
    }
})

const s_Modal = document.getElementById('s_content');
s_Modal.addEventListener('show.bs.modal', event => {
   // console.log("sweet");
})
const i_Modal = document.getElementById('i_content');
i_Modal.addEventListener('show.bs.modal', event => {
   // console.log("iHMOE");
})
const g_Modal = document.getElementById('graduate_content');
g_Modal.addEventListener('show.bs.modal', event => {
   // console.log("graduate");
})
