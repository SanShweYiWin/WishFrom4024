//UI
const welcome = document.getElementById('welcome');
const welcomeul = document.getElementById('welcomeul');

const hbd = document.getElementById('hbd');
const hbdul = document.getElementById('hbdul');

const container = document.getElementById('container');

const floatimg = document.getElementById('floatimg');

const teampage = document.getElementById('team-page');

const audio = document.getElementById('audio');

const clickme = document.getElementById('click-me');
const click = document.getElementById('click');

const bounce = document.getElementById('bounce');

const body = document.querySelector('body');


click.addEventListener('click' , (e)=>{
    clickme.remove();
    setTimeout(()=>{
        welcome.remove();
        welcome.style.display="flex";
    }, 5000);
    setTimeout(()=>{
        hbd.style.display="flex";
    }, 5500);
    
    setTimeout(()=>{
        container.style.display="flex";
    }, 12500);
    
    setTimeout(()=>{
        floatimg.style.display="flex";
    }, 13500);
    
    setTimeout(()=>{
        teampage.style.display="flex";
    }, 5000);
    setTimeout(()=>{
        bounce.remove();
        bounce.style.display="flex";
    }, 5000);
    body.classList.add('body');
});

window.addEventListener('mousemove' ,(e)=>{
    audio.play();
});
