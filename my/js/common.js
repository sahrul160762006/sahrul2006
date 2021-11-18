function loadFunc(){
$("#menuSPwrap").css({display: "flex"});
$("body").css({opacity:1});
}

function pageOpenFunc(){
$("#loader,#menuSPwrap").delay(1000).fadeOut(0);
$("#loaderWrap").delay(1500).fadeOut(1000);
}

function commonFunc(){

//強制リフレッシュ
window.onpageshow = function(evt) {
    if (evt.persisted) {
      location.reload();
    }
};



/////////////////////////////////////
//マウスオーバーで画像が光る（スマホ対応）//
/////////////////////////////////////

moCNT=0;

var ua = navigator.userAgent;
if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 ||ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {

$( '.fade, input[type="button"], input[type="submit"], button' )
  .bind( 'touchstart', function(){
    $( this ).addClass( 'SPhover' );
}).bind( 'touchend', function(){
    $( this ).removeClass( 'SPhover' );
});

}else{

 $('.fade').fadeTo(0, 1.0);
 $('.fade').hover(function(){
 if(moCNT==0){$(this).fadeTo(0, 0.2).fadeTo(400, 1.0); moCNT=1;}
 }, function(){
 $(this).fadeTo(150, 1.0); moCNT=0;
 });
 }




/////////////////////////////
//ページ内リンクでアニメーション//
/////////////////////////////

$('a.ctsMove').click(function(){
var speed = 900;
var href= $(this).attr("href");
var target = $(href == "#" || href == "" ? 'html' : href);
var position = target.offset().top;
$("html, body").animate({scrollTop:position}, speed, "easeOutExpo");
resizeCommonFunc();
return false;
});



////////////
//リンク展開//
////////////

$('.pageMove').click(function() {
var url = $(this).attr("href");
var query = window.location.search.substring(1);

if(query){
			if(typeCK == "sort"){
				var statusURL= url;
			}else{
				var statusURL= url + "?" + query;
			}
		}else{
			var statusURL= url;
}

$("#loaderWrap").fadeIn(300, function() {location.href = statusURL;});

return false;

});


///////////////////
//pageTopボタン出現//
///////////////////

var topBtn = $('#ptWrap');    
topBtn.hide();

$(window).scroll(function () {
if ($(this).scrollTop() > 100) {
topBtn.fadeIn();
} else {
topBtn.fadeOut();
}
});



//https://teratail.com/questions/69197

$('.newDate').each(function (i, obj) {
var date = $(this).attr('data-date');

//  更新日
var d = new Date();
d.setFullYear(date.split('-')[0]);
d.setMonth(date.split('-')[1] - 1);
d.setDate(date.split('-')[2]);

// 7日後
d.setDate(d.getDate() + 7);
if (d > new Date()) {

var idname = $('body').attr("id"); 

if(idname=='home'){
//$(this).prepend('<img class="newC" src="images_common/new_c.png" alt="NEW"/>');
$(this).prepend('<span class="newMark">NEW</span>');
}else{
//$(this).prepend('<img class="newC" src="../images_common/new_c.png" alt="NEW"/>');
$(this).prepend('<span class="newMark">NEW</span>');
}
}
});


}


function resizeCommonFunc(){
var w = $(window).innerWidth();
var h = $(window).innerHeight();

if(w>=835){
//PC
$('.imgChange').each(function(){
			$(this).attr("src",$(this).attr("src").replace('_sp', '_pc')).css({visibility:'visible'});
});

}else{
//スマホ
$('.imgChange').each(function(){
			$(this).attr("src",$(this).attr("src").replace('_pc', '_sp')).css({visibility:'visible'});
});
}

$("#loaderWrap").css({height:h*1.4});
$("#loader,#decoL,#decoR,.decoC").css({top:h/2});
//var menuSPH = $("#menuSP").innerHeight();
//var menuSPMT = (h-menuSPH)/2;
//$("#menuSP").css({paddingTop:menuSPMT});
	
}

function resizeYT(){

var w = $(window).innerWidth();
var wtH = w*0.96*9/16;

if(wtH>601){wtH = 601;}
$(".yt").css('height', wtH).dequeue();

}

function openWin(){

gsap.fromTo(".modal", {
      scale: -1.0
    }, {
      scale: 1.0,
      duration: 1.2, // 秒指定
      ease: Power4.easeOut // 加減速の種類
});

}
function closeWin(){

gsap.fromTo(".modal", {
      scale: 1.0
    }, {
      scale: 1.1,
      duration: 1.2, // 秒指定
      ease: Power4.easeOut // 加減速の種類
});

$(".modaal-container").css('max-width', 1120);
}

function textEffect(n){

var text = new ShuffleText(document.getElementById('textEffect'+n));

  // エフェクトの継続時間
  text.duration = 700;

  // ランダムテキストに用いる文字列 (日本語も可)
  text.sourceRandomCharacter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';

  // 空白に用いる文字列
  text.emptyCharacter = '　';
  
  $('#textEffect'+n).css('opacity', 1);

  text.start();
  
}
function textEffectK(n){

var text1 = new ShuffleText(document.getElementById('textEffect'+n));

  // エフェクトの継続時間
  text1.duration = 700;

  // ランダムテキストに用いる文字列 (日本語も可)
  text1.sourceRandomCharacter = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン';

  // 空白に用いる文字列
  text1.emptyCharacter = '　';
  
  $('#textEffect'+n).css('opacity', 1);

  text1.start();
  
}