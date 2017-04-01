jQuery(document).ready(function($){
	//cache some jQuery objects
	var modalTrigger1 = $('.cd-modal-trigger1'),
		transitionLayer1 = $('.cd-transition-general'),
		transitionBackground = transitionLayer1.children(),
		modalWindow1 = $('.cd-modal1');

	var modalTrigger2 = $('.cd-modal-trigger2'),
		transitionLayer2 = $('.cd-transition-general'),
		transitionBackground = transitionLayer2.children(),
		modalWindow2 = $('.cd-modal2');
		
	var modalTrigger3 = $('.cd-modal-trigger3'),
		transitionLayer3 = $('.cd-transition-general'),
		transitionBackground3 = transitionLayer3.children(),
		modalWindow3 = $('.cd-modal3');
		
	var modalTrigger4 = $('.cd-modal-trigger4'),
		transitionLayer4 = $('.cd-transition-general'),
		transitionBackground4 = transitionLayer4.children(),
		modalWindow4 = $('.cd-modal4');
		
	var modalTrigger5 = $('.cd-modal-trigger5'),
		transitionLayer5 = $('.cd-transition-general'),
		transitionBackground5 = transitionLayer5.children(),
		modalWindow5 = $('.cd-modal5');				

	var frameProportion = 1.78, //png frame aspect ratio
		frames = 25, //number of png frames
		resize = false;

	//set transitionBackground dimentions
	setLayerDimensions();
	$(window).on('resize', function(){
		if( !resize ) {
			resize = true;
			(!window.requestAnimationFrame) ? setTimeout(setLayerDimensions, 300) : window.requestAnimationFrame(setLayerDimensions);
		}
	});

	//open modal window
	modalTrigger1.on('click', function(event){	
		event.preventDefault();
		transitionLayer1.addClass('visible opening');
		var delay = ( $('.no-cssanimations').length > 0 ) ? 0 : 600;
		$('body').css('overflow','hidden');
		setTimeout(function(){
			modalWindow1.addClass('visible');
		}, delay);
	});

	modalTrigger2.on('click', function(event){	
		event.preventDefault();
		transitionLayer2.addClass('visible opening');
		var delay = ( $('.no-cssanimations').length > 0 ) ? 0 : 600;
		$('body').css('overflow','hidden');
		setTimeout(function(){
			modalWindow2.addClass('visible');
		}, delay);
	});

	modalTrigger3.on('click', function(event){	
		event.preventDefault();
		transitionLayer3.addClass('visible opening');
		$('body').css('overflow','hidden');
		var delay = ( $('.no-cssanimations').length > 0 ) ? 0 : 600;
		setTimeout(function(){
			modalWindow3.addClass('visible');
		}, delay);
	});

	modalTrigger4.on('click', function(event){	
		event.preventDefault();
		transitionLayer4.addClass('visible opening');
		var delay = ( $('.no-cssanimations').length > 0 ) ? 0 : 600;
		$('body').css('overflow','hidden');
		setTimeout(function(){
			modalWindow4.addClass('visible');
		}, delay);
	});

	modalTrigger5.on('click', function(event){	
		event.preventDefault();
		transitionLayer5.addClass('visible opening');
		var delay = ( $('.no-cssanimations').length > 0 ) ? 0 : 600;
		$('body').css('overflow','hidden');
		setTimeout(function(){
			modalWindow5.addClass('visible');
		}, delay);
	});

	//close modal window
	modalWindow1.on('click', '.modal-close', function(event){
		event.preventDefault();
		transitionLayer1.addClass('closing');
		modalWindow1.removeClass('visible');
		$('body').css('overflow','scroll');
		transitionBackground1.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
			transitionLayer1.removeClass('closing opening visible');
			transitionBackground1.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
		});
	});

		modalWindow2.on('click', '.modal-close', function(event){
		event.preventDefault();
		transitionLayer2.addClass('closing');
		modalWindow2.removeClass('visible');
		$('body').css('overflow','scroll');
		transitionBackground2.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
			transitionLayer2.removeClass('closing opening visible');
			transitionBackground2.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
		});
	});

			modalWindow3.on('click', '.modal-close', function(event){
		event.preventDefault();
		transitionLayer3.addClass('closing');
		modalWindow3.removeClass('visible');
		$('body').css('overflow','scroll');
		transitionBackground3.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
			transitionLayer3.removeClass('closing opening visible');
			transitionBackground3.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
		});
	});

				modalWindow4.on('click', '.modal-close', function(event){
		event.preventDefault();
		transitionLayer4.addClass('closing');
		modalWindow4.removeClass('visible');
		$('body').css('overflow','scroll');
		transitionBackground4.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
			transitionLayer4.removeClass('closing opening visible');
			transitionBackground4.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
		});
	});

					modalWindow5.on('click', '.modal-close', function(event){
		event.preventDefault();
		transitionLayer5.addClass('closing');
		modalWindow5.removeClass('visible');
		$('body').css('overflow','scroll');
		transitionBackground5.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
			transitionLayer5.removeClass('closing opening visible');
			transitionBackground5.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
		});
	});

	function setLayerDimensions() {
		var windowWidth = $(window).width(),
			windowHeight = $(window).height(),
			layerHeight, layerWidth;

		if( windowWidth/windowHeight > frameProportion ) {
			layerWidth = windowWidth;
			layerHeight = layerWidth/frameProportion;
		} else {
			layerHeight = windowHeight*1.2;
			layerWidth = layerHeight*frameProportion;
		}

		transitionBackground.css({
			'width': layerWidth*frames+'px',
			'height': layerHeight+'px',
		});

		resize = false;
	}


//Contact Form 2

// Auto resize input
function resizeInput() {
    $(this).attr('size', $(this).val().length);
}

$('input[type="text"], input[type="email"]')
    // event handler
    .keyup(resizeInput)
    // resize on page load
    .each(resizeInput);


console.clear();
// Adapted from georgepapadakis.me/demo/expanding-textarea.html
(function(){
  
  var textareas = document.querySelectorAll('.expanding'),
      
      resize = function(t) {
        t.style.height = 'auto';
        t.style.overflow = 'hidden'; // Ensure scrollbar doesn't interfere with the true height of the text.
        t.style.height = (t.scrollHeight + t.offset ) + 'px';
        t.style.overflow = '';
      },
      
      attachResize = function(t) {
        if ( t ) {
          console.log('t.className',t.className);
          t.offset = !window.opera ? (t.offsetHeight - t.clientHeight) : (t.offsetHeight + parseInt(window.getComputedStyle(t, null).getPropertyValue('border-top-width')));

          resize(t);

          if ( t.addEventListener ) {
            t.addEventListener('input', function() { resize(t); });
            t.addEventListener('mouseup', function() { resize(t); }); // set height after user resize
          }

          t['attachEvent'] && t.attachEvent('onkeyup', function() { resize(t); });
        }
      };
  
  // IE7 support
  if ( !document.querySelectorAll ) {
  
    function getElementsByClass(searchClass,node,tag) {
      var classElements = new Array();
      node = node || document;
      tag = tag || '*';
      var els = node.getElementsByTagName(tag);
      var elsLen = els.length;
      var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
      for (i = 0, j = 0; i < elsLen; i++) {
        if ( pattern.test(els[i].className) ) {
          classElements[j] = els[i];
          j++;
        }
      }
      return classElements;
    }
    
    textareas = getElementsByClass('expanding');
  }
  
  for (var i = 0; i < textareas.length; i++ ) {
    attachResize(textareas[i]);
  }
  
})();


// smooth scrooling

// $(function() {
// 				$.scrollify({
// 				     section : ".section",
// 				     scrollSpeed: 2000,
// 				     offset : 0,
// 				     sectionName:false,
// 				     standardScrollElements:".visible, .webpageslist"
// 				});
// 			});




// });

//Mouse Movement Home text

var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $('.jumbotron-text').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

moveBackground();





//modal slides

$(function() {
  var $blocks = $('.smallitem.animBlock.notViewed');
  var $window = $(window);

  $window.on('scroll', function(e){
    $blocks.each(function(i,elem){
      if($(this).hasClass('viewed')) 
        return;
        
      isScrolledIntoView($(this));
    });
  });
});
/* http://stackoverflow.com/a/488073/477958 */
function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var elemOffset = 0;
  
  if(elem.data('offset') != undefined) {
    elemOffset = elem.data('offset');
  }
  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();
  
  if(elemOffset != 0) { // custom offset is updated based on scrolling direction
    if(docViewTop - elemTop >= 0) {
      // scrolling up from bottom
      elemTop = $(elem).offset().top + elemOffset;
    } else {
      // scrolling down from top
      elemBottom = elemTop + $(elem).height() - elemOffset
    }
  }
  
  if((elemBottom <= docViewBottom) && (elemTop >= docViewTop)) {
    // once an element is visible exchange the classes
    $(elem).removeClass('notViewed').addClass('viewed');
    
    var animElemsLeft = $('.animBlock.notViewed').length;
    if(animElemsLeft == 0){
      // with no animated elements left debind the scroll event
      $(window).off('scroll');
    }
  }
}

$(function() {
  var box = $('.sendbutton');
  box.submit(function(){
    box.addClass('active');
  });
});



})





