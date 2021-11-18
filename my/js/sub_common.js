

function subCommonFunc(){

$("#cts").delay(1500).fadeIn(0, function(){textEffect(1); textEffect(2);});

gsap.fromTo("#ctsWrap", {
      //opacity: -5,
      opacity: 0,
      //scale: 0.8
      y: 50,
	  filter: 'brightness(300%)'
    }, {
      opacity: 1,
	  delay: 2.3,
	  //delay: 2.0,
      y: 0,
      //scale: 1.0,
      rotate: 0,
      repeat: 0, // 繰り返し指定
      duration: 0.8, // 秒指定
      //duration: 0.5, // 秒指定
      ease: Power4.easeOut, // 加減速の種類
      //ease: Bounce.easeOut, // 加減速の種類
	  onStart:ownFunc,
	  filter: 'brightness(100%)'
});

gsap.defaults({ease: Power4.easeOut});
gsap.set("#menuSPfooter a", {y: 50, opacity: 0, filter: 'brightness(300%)'});

ScrollTrigger.batch("#menuSPfooter a", {
  onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, duration: 1.5, filter: 'brightness(100%)', overwrite: true}),
});


	
}


function resizeSubCommonFunc(){
animate1();
animate2();
animate3();
animate4();
animate5();
}



//クジラ艦
function animate1() {
$("#bgfly_wheel").animate({left:"-150vh",top:"90vh"}, 0).delay(1500).animate({left:"160vh",top:"-220vh"}, 90000, "linear");
setTimeout("animate1()", 110000);
}

//シャチ艦1
function animate2() {
$("#bgfly_shachi1").animate({left:"230vw",top:"20vh"}, 0).delay(15500).animate({left:"-40vw",top:"0vh"}, 2000, "linear");
setTimeout("animate2()", 30000);
}

//シャチ艦2
function animate3() {
$("#bgfly_shachi2").animate({left:"40vw",top:"20vh",width:"0%"}, 0).delay(10000).animate({left:"70vw",top:"40vh",width:"150%"}, 1200, "linear");
setTimeout("animate3()", 30000);
}

//シャチ艦3
function animate4() {
$("#bgfly_shachi3").animate({left:"-50vw",top:"60vh"}, 0).delay(15500).animate({left:"150vw",top:"40vh"}, 1500, "linear");
setTimeout("animate4()", 30000);
}

//シャチ艦4
function animate5() {
$("#bgfly_shachi4").animate({left:"90vw",top:"20vh",width:"0%"}, 0).delay(21000).animate({left:"-150vw",top:"70vh",width:"220%"}, 1500, "linear");
setTimeout("animate5()", 30000);
}
