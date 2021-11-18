window.addEventListener('DOMContentLoaded', function() {
loadFunc();
resizeCommonFunc();
}, false );

window.addEventListener('load', function() {

pageOpenFunc()
//commonFunc();
subCommonFunc();
resizeCommonFunc();
resizeSubCommonFunc();



gsap.fromTo('#profWrap', {
      opacity: 0,
      y: 50,
    }, {
      opacity: 1,
      y: 0,
      duration: 1.5, // 秒指定
      scrollTrigger: {
            trigger: '#profWrap',
            start: 'top 95%', //アニメーションが始まる位置
            //markers: true,
    }
});



gsap.fromTo('#commentWrap', {
      opacity: 0,
      y: 50,
    }, {
      opacity: 1,
      y: 0,
      duration: 1.5, // 秒指定
      scrollTrigger: {
            trigger: '#commentWrap',
            start: 'top 80%', //アニメーションが始まる位置
            //markers: true,
    }
});

}, false );
	
window.addEventListener( 'resize', function() {

resizeCommonFunc();
resizeSubCommonFunc();

}, false );

function ownFunc(){

}