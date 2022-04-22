// let navbar = document.querySelector('.navbar');

// document.querySelector('#menu-btn').onclick = () =>{
//     navbar.classList.toggle('active');
// }

//  $(document).ready(function(){
//  $('.btn').click(function(){
//      $('.items').toggleclass("show");
//  });
// });

document.querySelectorAll('.about .video-contaniner .controls .control-btn').forEach(btn => {
    btn.onclick = () =>{
        let src = btn.getAttribute('data-src')
        document.querySelector('.about .video-container .video').src = src
    } 
})