// INITIALISER EMAILJS
(function() {
  emailjs.init("X15mUUXqYxoM0ofQz");
})();

// ENVOI FORMULAIRE
document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  
  emailjs.sendForm("service_ls4gx8s", "template_fz300n5", this)
  .then(function(response) {
    console.log("SUCCESS", response);
    document.getElementById("successMessage").innerText =
      "Message envoyé avec succès ✅";
    document.getElementById("orderForm").reset();
  })
  .catch(function(error) {
    console.log("FAILED", error);
    document.getElementById("successMessage").innerText =
      "Erreur lors de l'envoi ❌";
  });
});

// SCROLL ANIMATION
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  
  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    
    if (elementTop < windowHeight - 100) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

particlesJS("particles-js", {
  particles: {
    number: {
      value: 80
    },
    size: {
      value: 3
    },
    color: {
  value: ["#4f8cff", "#7a5cff", "#00f2ff"]
},
    line_linked: {
      enable: true,
      color: "#7a5cff",
      opacity: 0.4
    },
    move: {
      speed: 2
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      }
    }
  }
});

document.getElementById("year").textContent = new Date().getFullYear();





const toggle = document.getElementById("menuToggle")
const menu = document.getElementById("topMenu")
const overlay = document.getElementById("menuOverlay")

function openMenu(){
toggle.classList.add("active")
menu.classList.add("active")
overlay.classList.add("active")
}

function closeMenu(){
toggle.classList.remove("active")
menu.classList.remove("active")
overlay.classList.remove("active")
}

toggle.addEventListener("click",()=>{

if(menu.classList.contains("active")){
closeMenu()
}else{
openMenu()
}

})

overlay.addEventListener("click",closeMenu)

document.querySelectorAll(".top-menu a").forEach(link=>{
link.addEventListener("click",closeMenu)
})




const container = document.querySelector(".cards-scroll")

let scrollAmount = 0

function autoScroll(){

scrollAmount += 1

if(scrollAmount >= container.scrollWidth / 2){
scrollAmount = 0
}

container.scrollLeft = scrollAmount

}

setInterval(autoScroll,20)




const timeline = document.querySelector(".timeline")
const progress = document.querySelector(".timeline-progress")

window.addEventListener("scroll", () => {
  
  const rect = timeline.getBoundingClientRect()
  const windowHeight = window.innerHeight
  
  const visible = windowHeight - rect.top
  
  const total = timeline.offsetHeight
  
  const percent = Math.min(Math.max(visible / total, 0), 1)
  
  progress.style.height = percent * 100 + "%"
  
})


const items = document.querySelectorAll(".timeline-item")

window.addEventListener("scroll",()=>{

items.forEach(item=>{

const rect = item.getBoundingClientRect()

if(rect.top < window.innerHeight - 100){

item.classList.add("visible")

}

})

})


/*chatbot*/

document.addEventListener("DOMContentLoaded", function() {
  
  const toggle = document.getElementById("chatbotToggle");
  const box = document.getElementById("chatbotBox");
  const bubble = document.getElementById("chatBubble");
  
  if (!toggle || !box) return;
  
  /* OUVRIR / FERMER */
  
  toggle.addEventListener("click", function(e) {
    
    e.stopPropagation();
    
    if (box.style.display === "block") {
      box.style.display = "none";
    } else {
      box.style.display = "block";
    }
    
  });
  
  /* FERMER SI CLIQUE A L'EXTERIEUR */
  
  document.addEventListener("click", function(e) {
    
    if (!box.contains(e.target) && !toggle.contains(e.target)) {
      
      box.style.display = "none";
      
    }
    
  });
  
  /* BULLE DISPARAIT */
  
  setTimeout(function() {
    
    if (bubble) {
      bubble.style.display = "none";
    }
    
  }, 6000);
  
});

const close=document.getElementById("chatclose");

if(close) {
close.onclick=function(){
box.style.display = "none";
}
};

