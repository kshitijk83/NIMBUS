


document.addEventListener('DOMContentLoaded', function() {
    var clubs = document.querySelectorAll('.clubs-con-img');
    
    clubs.forEach(club=>{
        club.addEventListener('click', function(){
            popupBack.style.opacity = 1;
            popupBack.style.visibility = 'visible';
        })
    })

    var close = document.querySelector('.popup__close');
    var popupBack = document.querySelector('.popup');
    console.log(close);
    close.addEventListener('click', function(){
        popupBack.style.opacity = 0;
        popupBack.style.visibility = 'hidden';
    })
});


// $('[has-ripple="true"]').click(function () {
// $(this).toggleClass('clicked');
// $('.menu').toggleClass('open');
// });

// $(document).ready()

// $('.menu a').each(function (index) {
// var thismenuItem= $(this);

// thismenuItem.click(function (event) {
//     event.preventDefault();
//     console.log('hey');
    // $('.menuitem-wrapper').eq(index).addClass('spin');
    
    // var timer = setTimeout(function () {
    // $('body').removeAttr('class').addClass('bg-'+index);
    // $('.menuitem-wrapper').eq(index).removeClass('spin');
    // $('.menu').removeClass('open');
    // $('.menu-btn').removeClass('clicked');
    // }, 800);
// });
// });
// $('navigation_icon').click(function(){
//     console.log('hey');
// })