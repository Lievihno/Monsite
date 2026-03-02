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