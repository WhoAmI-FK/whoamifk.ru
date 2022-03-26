var canvas = document.getElementById('nokey'),
   can_w = parseInt(canvas.getAttribute('width')),
   can_h = parseInt(canvas.getAttribute('height')),
   ctx = canvas.getContext('2d');

// console.log(typeof can_w);
var BALL_NUM = 30

var ball = {
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      r: 0,
      alpha: 1,
      phase: 0
   },
   ball_color = {
       r: 255,
       g: 50,
       b: 10
   },
   R = 2,
   balls = [],
   alpha_f = 0.03,
   alpha_phase = 0,
    
// Line
   link_line_width = 0.8,
   dis_limit = 260,
   add_mouse_point = true,
   mouse_in = false,
   mouse_ball = {
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      r: 0,
      type: 'mouse'
   };

// Random speed
function getRandomSpeed(pos){
    var  min = -1,
       max = 1;
    switch(pos){
        case 'top':
            return [randomNumFrom(min, max), randomNumFrom(0.1, max)];
            break;
        case 'right':
            return [randomNumFrom(min, -0.1), randomNumFrom(min, max)];
            break;
        case 'bottom':
            return [randomNumFrom(min, max), randomNumFrom(min, -0.1)];
            break;
        case 'left':
            return [randomNumFrom(0.1, max), randomNumFrom(min, max)];
            break;
        default:
            return;
            break;
    }
}
function randomArrayItem(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}
function randomNumFrom(min, max){
    return Math.random()*(max - min) + min;
}
console.log(randomNumFrom(0, 10));
// Random Ball
function getRandomBall(){
    var pos = randomArrayItem(['top', 'right', 'bottom', 'left']);
    switch(pos){
        case 'top':
            return {
                x: randomSidePos(can_w),
                y: -R,
                vx: getRandomSpeed('top')[0],
                vy: getRandomSpeed('top')[1],
                r: R,
                alpha: 1,
                phase: randomNumFrom(0, 10)
            }
            break;
        case 'right':
            return {
                x: can_w + R,
                y: randomSidePos(can_h),
                vx: getRandomSpeed('right')[0],
                vy: getRandomSpeed('right')[1],
                r: R,
                alpha: 1,
                phase: randomNumFrom(0, 10)
            }
            break;
        case 'bottom':
            return {
                x: randomSidePos(can_w),
                y: can_h + R,
                vx: getRandomSpeed('bottom')[0],
                vy: getRandomSpeed('bottom')[1],
                r: R,
                alpha: 1,
                phase: randomNumFrom(0, 10)
            }
            break;
        case 'left':
            return {
                x: -R,
                y: randomSidePos(can_h),
                vx: getRandomSpeed('left')[0],
                vy: getRandomSpeed('left')[1],
                r: R,
                alpha: 1,
                phase: randomNumFrom(0, 10)
            }
            break;
    }
}
function randomSidePos(length){
    return Math.ceil(Math.random() * length);
}

// Draw Ball
function renderBalls(){
    Array.prototype.forEach.call(balls, function(b){
       if(!b.hasOwnProperty('type')){
           ctx.fillStyle = 'rgba('+ball_color.r+','+ball_color.g+','+ball_color.b+','+b.alpha+')';
           ctx.beginPath();
           ctx.arc(b.x, b.y, R, 0, Math.PI*2, true);
           ctx.closePath();
           ctx.fill();
       }
    });
}

// Update balls
function updateBalls(){
    var new_balls = [];
    Array.prototype.forEach.call(balls, function(b){
        b.x += b.vx;
        b.y += b.vy;
        
        if(b.x > -(50) && b.x < (can_w+50) && b.y > -(50) && b.y < (can_h+50)){
           new_balls.push(b);
        }
        
        // alpha change
        b.phase += alpha_f;
        b.alpha = Math.abs(Math.cos(b.phase));
        // console.log(b.alpha);
    });
    
    balls = new_balls.slice(0);
}

// loop alpha
function loopAlphaInf(){
    
}

// Draw lines
function renderLines(){
    var fraction, alpha;
    for (var i = 0; i < balls.length; i++) {
        for (var j = i + 1; j < balls.length; j++) {
           
           fraction = getDisOf(balls[i], balls[j]) / dis_limit;
            
           if(fraction < 1){
               alpha = (1 - fraction).toString();

               ctx.strokeStyle = 'rgba(150,150,150,'+alpha+')';
               ctx.lineWidth = link_line_width;
               
               ctx.beginPath();
               ctx.moveTo(balls[i].x, balls[i].y);
               ctx.lineTo(balls[j].x, balls[j].y);
               ctx.stroke();
               ctx.closePath();
           }
        }
    }
}

// calculate distance between two points
function getDisOf(b1, b2){
    var  delta_x = Math.abs(b1.x - b2.x),
       delta_y = Math.abs(b1.y - b2.y);
    
    return Math.sqrt(delta_x*delta_x + delta_y*delta_y);
}

// add balls if there a little balls
function addBallIfy(){
    if(balls.length < BALL_NUM){
        balls.push(getRandomBall());
    }
}

// Render
function render(){
    ctx.clearRect(0, 0, can_w, can_h);
    
    renderBalls();
    
    renderLines();
    
    updateBalls();
    
    addBallIfy();
    
    window.requestAnimationFrame(render);
}

// Init Balls
function initBalls(num){
    for(var i = 1; i <= num; i++){
        balls.push({
            x: randomSidePos(can_w),
            y: randomSidePos(can_h),
            vx: getRandomSpeed('top')[0],
            vy: getRandomSpeed('top')[1],
            r: R,
            alpha: 1,
            phase: randomNumFrom(0, 10)
        });
    }
}
// Init Canvas
function initCanvas(){
    canvas.setAttribute('width', window.innerWidth);
    canvas.setAttribute('height', window.innerHeight);
    
    can_w = parseInt(canvas.getAttribute('width'));
    can_h = parseInt(canvas.getAttribute('height'));
}
window.addEventListener('resize', function(e){
    console.log('Window Resize...');
    initCanvas();
});

function goMovie(){
    initCanvas();
    initBalls(BALL_NUM);
    window.requestAnimationFrame(render);
}
goMovie();

// Mouse effect
canvas.addEventListener('mouseenter', function(){
    console.log('mouseenter');
    mouse_in = true;
    balls.push(mouse_ball);
});
canvas.addEventListener('mouseleave', function(){
    console.log('mouseleave');
    mouse_in = false;
    var new_balls = [];
    Array.prototype.forEach.call(balls, function(b){
        if(!b.hasOwnProperty('type')){
            new_balls.push(b);
        }
    });
    balls = new_balls.slice(0);
});
canvas.addEventListener('mousemove', function(e){
    var e = e || window.event;
    mouse_ball.x = e.pageX;
    mouse_ball.y = e.pageY;
    // console.log(mouse_ball);
});
$('#text').on("selectstart",function(e){
e.preventDefault();
return false;
});

$num = $('.my-card').length;
$even = $num / 2;
$odd = ($num + 1) / 2;

if ($num % 2 == 0) {
  $('.my-card:nth-child(' + $even + ')').addClass('active');
  $('.my-card:nth-child(' + $even + ')').prev().addClass('prev');
  $('.my-card:nth-child(' + $even + ')').next().addClass('next');
} else {
  $('.my-card:nth-child(' + $odd + ')').addClass('active');
  $('.my-card:nth-child(' + $odd + ')').prev().addClass('prev');
  $('.my-card:nth-child(' + $odd + ')').next().addClass('next');
}

$('.my-card').click(function() {
  $slide = $('.active').width();
  console.log($('.active').position().left);
  
  if ($(this).hasClass('next')) {
    $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
  } else if ($(this).hasClass('prev')) {
    $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
  }
  
  $(this).removeClass('prev next');
  $(this).siblings().removeClass('prev active next');
  
  $(this).addClass('active');
  $(this).prev().addClass('prev');
  $(this).next().addClass('next');
});


// Keyboard nav
$('html body').keydown(function(e) {
  if (e.keyCode == 37) { // left
    $('.active').prev().trigger('click');
  }
  else if (e.keyCode == 39) { // right
    $('.active').next().trigger('click');
  }
});

document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     
                                                                         
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
                                                                         
function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }
    
    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                         
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            $('.active').next().trigger('click');
        } else {
            $('.active').prev().trigger('click');
        }                       
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};

let parent;
$('.custom-design').click(function(){
    $(this).parent().css('z-index','-1');
    parent=$(this).parent();
    let id = $(this).data("project");
    let tid = $(this).data("type");
    console.log(tid,id);
    console.log("AJAX  WORKS");
    $.ajax({
        type: "POST",
        url: "../dbdata/display.php",
        data: {idPrj: id,idType: tid},
        dataType: "html",
        success:async function (response) { 
            $(".popup").html(response);
            $('.close-popup').click(function() {
                parent.css('z-index','3');
                console.log("im closing");
                $('.popup').animate({
                    width: '0',
                    top: '100%',
                    height: '0'
                }, 'slow')
                $('.overlay').fadeOut();
            
            });
        }
    });
    $('.overlay').fadeIn();
    $('.popup').animate({
        width: '90vw',
        top: '50%',
        height: '90vh'
    }, 'slow')

    $('.overlay').addClass('disabled');
});

