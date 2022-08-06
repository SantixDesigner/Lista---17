let nav = document.getElementById('nav-toggle');

let nav1 = document.getElementsByClassName('nav');

nav.addEventListener('click',(e) => {
    nav1[0].classList.toggle('nav-show');
})

let toggle_news = document.getElementById('toggle-news');

let container_news = document.getElementById('container');

toggle_news.addEventListener('click',(e)=>{
    container_news.classList.toggle('notas-show');
})