$(document).ready(function(){

	//카트 hover
	var cartBtn = $('header .logcart .cartbtn');
	var cart = $('header').find('.cart');
	cartBtn.hover(function(){
		cart.show();
	}, function(){
		cart.hide();
	});

	//이미지 위 hover 마우스
	var mainImg = $('section .main');
	var sideImg = $('section .side');
	var hoverBox = $('article .hover');

	mainImg.mouseover(function(){hoverOn();});
	mainImg.mouseout(function(){hoverOff();});
	mainImg.mousemove(function(e){followMouse(e);});
	sideImg.mouseover(function(){hoverOn();});
	sideImg.mouseout(function(){hoverOff();});
	sideImg.mousemove(function(e){followMouse(e);});

	function hoverOn(){
		hoverBox.stop().fadeIn(100);
	}
	function hoverOff(){
		hoverBox.stop().fadeOut(100);
	}
	function followMouse(e){
		hoverBox.css({
	  		left:e.pageX,
	  		top:e.pageY-20
	  	});
	}

	//아이템 구매 팝업
	var s1img = $('#s1').find('.main');
	var s1simg = $('#s1').find('.side');
	var s2img = $('#s2').find('.main, .side');

	var wavesNavy = $('#wavesNavy');
	var wavesNavyImg = wavesNavy.find('.right');
	var wavesIvory = $('#wavesIvory');
	var wavesIvoryImg = wavesIvory.find('.right');
	var dolce = $('#dolce');
	var dolceImg = dolce.find('.right');
	var productImg = $('.left ul').find('li');
	s1img.click(function(){
		$('.product').css('display','none');
		wavesNavy.slideDown().css({display: 'flex'});
		wavesNavyImg.delay(200).css('background-image',`url('img/duvet/waves4-1.jpg')`);
	});
	s1simg.click(function(){
		$('.product').css('display','none');
		wavesIvory.slideDown().css({display: 'flex'});
		wavesIvoryImg.delay(200).css('background-image',`url('img/duvet/waves1-1.jpg')`);
	});
	s2img.click(function(){
		$('.product').css('display','none');
		dolce.slideDown().css({display: 'flex'});
		dolceImg.delay(200).css('background-image',`url('img/duvet/dolce2-1.jpg')`);
	});
	$('.toggle').click(function(){
		$('.product').slideUp(200);
	});
	//팝업 사이즈 선택 배경 색상 변경
	$('input:radio').click(function(){
		$(this).parent().addClass('on').
		siblings().removeClass('on');
	});
	//팝업 갤러리
	productImg.click(function(){
		var idx = $(this).index();
		wavesNavyImg.css('background-image',`url('img/duvet/waves4-${idx+1}.jpg')`);
		wavesIvoryImg.css('background-image',`url('img/duvet/waves1-${idx+1}.jpg')`);
		dolceImg.css('background-image',`url('img/duvet/dolce2-${idx+1}.jpg')`);
	})

	//768px 이하 메뉴 슬라이드
	$('.menubtn').click(function(){
		$('nav').animate({width:'toggle'});
	});

	//#slide
	var next = $('#btn').find('.pg2');
	var prev = $('#btn').find('.pg1');
	var card = $('#slide ul .card');
	var count = 0;
	var listSize = 3;
	var maxSize = card.length;
	var slideWidth = $('#slide').width();
	var slide = $('#slide ul');

	next.click(function(){
		count < maxSize/listSize-1 ? count++ : count = 0;
		move();
	});
	prev.click(function(){
		if(count > 0){
			count--;
			var tl = count*slideWidth*-1;
			slide.animate({ left:tl}, 400);
		} else {
			count = maxSize/listSize-1;
		}
		move();	
	});
	function move () {
		var tl = count*slideWidth*-1;
		slide.animate({ left: tl}, 400);
	}

	//sub.html tag
	var tag = $('.nav ul li')
	tag.click(function(){
		tag.removeClass('active');
		$(this).addClass('active');

		var idx = $(this).index();
		$('.cl0').hide();
		$(`.cl${idx}`).show();
	});
});