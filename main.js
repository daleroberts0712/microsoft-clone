const slide = document.querySelectorAll('.carousel-item');
const auto = true;
const intervalTime = 5000;
let slideInterval

class Slide{
    static nextSlide(){
        const active = document.querySelector('.active');
        active.classList.remove('active');
    
        if(active.previousElementSibling){
            active.previousElementSibling.classList.add('active');
        }else{
            slide[1].classList.add('active');
        }
        setTimeout(() => active.classList.remove('active'));
    }

    static prevSlide(){
        const active = document.querySelector('.active');
        active.classList.remove('active');
    
        if(active.previousElementSibling){
            active.previousElementSibling.classList.add('active');
        }else{
            slide[slide.length - 1].classList.add('active');
        }
        setTimeout(() => active.classList.remove('active'));
    }
    
}

document.querySelector('.carousel-control-next').addEventListener('click', () => {
    if(auto){
        clearInterval(slideInterval)
        slideInterval = setInterval(Slide.nextSlide, intervalTime);
    }
        Slide.nextSlide();
});

document.querySelector('.carousel-control-prev').addEventListener('click', () => {
    if(auto){
        clearInterval(slideInterval)
        slideInterval = setInterval(Slide.prevSlide, intervalTime);
    }
        Slide.prevSlide();
});

if(auto){
    slideInterval = setInterval(Slide.nextSlide, intervalTime);
}

const microBtn = document.querySelector('#micro-btn');
microBtn.addEventListener('click', onclick);

function onclick(){
    const menu = document.querySelector('#all-microsoft');
    menu.classList.toggle('show');
    const links = document.querySelector('#sitemap');
    links.classList.toggle('view');
}

const hamBtn = document.querySelector('.ham-btn').addEventListener('click', onClick);

function onClick(){
    const leftBar = document.querySelector('.left-bar ul').classList.toggle('left');
    const micro = document.querySelector('#all-microsoft').classList.toggle('modal-all');
    const map = document.querySelector('#sitemap').classList.toggle('.site');
}

//software//
const soft = document.querySelector('.software').addEventListener('click', onSoft);

function onSoft(){
    const softWare = document.querySelector('.software ul');
    softWare.classList.toggle('soft');
}

//devices//
const dev = document.querySelector('.devices').addEventListener('click', onDev);

function onDev(){
    const devices = document.querySelector('.devices ul');
    devices.classList.toggle('dev');
}

//entertainment//
const entertain = document.querySelector('.entertainment').addEventListener('click', onTain);

function onTain(){
    const ment = document.querySelector('.entertainment ul');
    ment.classList.toggle('entertain');
}

//business//
const business = document.querySelector('.business').addEventListener('click', onBusi);

function onBusi(){
    const ness = document.querySelector('.business ul');
    ness.classList.toggle('busi');
}

//developer & it //
const devel = document.querySelector('.developer').addEventListener('click', onDeve);

function onDeve(){
    const developer = document.querySelector('.developer ul');
    developer.classList.toggle('develop');
}

//other
const oth = document.querySelector('.other').addEventListener('click', onOther);

function onOther(){
    const other = document.querySelector('.other ul');
    other.classList.toggle('oth');
}