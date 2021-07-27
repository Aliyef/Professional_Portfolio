var open = document.querySelector('#start')
var menu = document.querySelector('.Menu')
var page = document.querySelector('.parallax')
var page_2 = document.querySelector('.parallax_2')
var sosialpage = document.querySelector('.sosialpage')
var html = document.documentElement;
var body = document.body;


// cursor
var cursor = document.querySelector('#cursor');

var cursorListener = function cursorListener(event){
    cursor.style.top = event.y+"px";
    cursor.style.left = event.x+"px";
};

window.addEventListener('mousemove',cursorListener)





open.addEventListener("click",function(){
    menu.classList.toggle('active');
    page.classList.toggle('active');
    page_2.classList.toggle('active');
    sosialpage.classList.toggle('active');
    body.classList.toggle('active');
    



})





let redleaf = document.getElementById("redleaf");

window.addEventListener('scroll',function(){
    var value = window.scrollY;

    redleaf.style.top = value * 1.5 + 'px';
})