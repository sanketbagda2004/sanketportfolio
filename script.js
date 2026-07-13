window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1200);
});
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior:"smooth"
        });

    });

});

const projects = document.querySelector(".projects");

projects.addEventListener("wheel", function(e){

    e.preventDefault();

    this.scrollLeft += e.deltaY;

});


/*==========================================
LEFT RIGHT BUTTONS
==========================================*/

const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

leftBtn.addEventListener("click",()=>{

    projects.scrollBy({
        left:-450,
        behavior:"smooth"
    });

});

rightBtn.addEventListener("click",()=>{

    projects.scrollBy({
        left:450,
        behavior:"smooth"
    });

});




const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 60){

        header.style.background = "rgba(0,0,0,.75)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";

    }
    else{

        header.style.background = "rgba(0,0,0,.45)";
        header.style.boxShadow = "none";

    }

});


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 150;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});

const toggle = document.getElementById("toggle");

toggle.addEventListener("change",()=>{

    document.body.classList.toggle("light");

});
const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll("section").forEach(sec=>{

    sec.classList.add("hidden");

    observer.observe(sec);

});

const fan = document.querySelector(".fan-wrapper");

window.addEventListener("mousemove",(e)=>{

    const x = (window.innerWidth/2 - e.pageX)/40;
    const y = (window.innerHeight/2 - e.pageY)/40;

    fan.style.transform = `translate(${x}px,${y}px)`;

});

const cards = document.querySelectorAll(".project");

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background =
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(255,255,255,.12),
        #111 65%)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="#111";

    });

});

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:30px;
right:30px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:white;
color:black;
font-size:22px;
cursor:pointer;
display:none;
z-index:999;
`;

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

};