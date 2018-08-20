/*
Promoscope

$(window).height = 100vh
$('.large-window').offset().top - position of the .large-window
*/

$(window).scroll( function(){
  	let wScroll = $(this).scrollTop();
  if(wScroll> $('.large-window').offset().top - $(window).height){
    $('.large-window').css({
      'background-position': `center ${wScroll - $('.large-window').offset().top }px`
    });
    // going from 0 to 1 when the
    let opacity = wScroll - $('.large-window').offset().top/( wScroll/ 5) ;
    $('.window-tint'). css({
      'opacity': `${opacity}`
    });
  }
}

(html)
<div class="large-window">
  <div class="window-title">
    <div class="promo-text">
      Fall Suits <strong> <span>from</span> $99</strong>
      <a href="" class="window-cta"> shop now</a>
    </div>
  </div>
</div>
(css)

/* (css) Periscope */
// .large-window{
//   height: 600px;
//   background-image: url(/image/model.jpg);
//   background-position: center 0px;
//   background-repeat: no-repeat;
//   background-attachment: fixed;
//   margin-top: 10px;
//   border-radius: 50%;
//   position:relative;
// }
//
// .window-tint{
//   background-color: rgba(0,0,0, .5);
//   position:absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   border-radius: 50%;
//   display:flex;
//   justify-content:center;
//   align-items: center;
//
// }
// .promo-text{
//   color: #fff;
//   font-weight: 100;
//   font-size:  50px
//   line-height: 1.2;
// }
//
// strong{
//   display: block;
//   font-size: 30px;
// }
// span {
//   font-weight: 300;
//   font-size: 18px;
//   font-style: italic;
//   color : rgba(255,255,255, .6);
// }
//
// .window-cta{
//   font-size 20px;
//   text-decoration: none;
//   color: #fff;
//   border: 1px solid #fff;
//   padding: 10px 20px;
//   transition all .3s ease-in-out;
//   &:hover{
//     background: #fff;
//     color: black;
//   }
// }
