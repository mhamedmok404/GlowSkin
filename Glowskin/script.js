// Menu Mobile
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mainNav.style.display = mainNav.style.display === 'block' ? 'none' : 'block';
        });
    }
    
    // Gestion du sticky header
    const header = document.querySelector('.sticky-header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        
        lastScroll = currentScroll;
    });
    
    // Slideshow Hero
    const slideshow = document.getElementById('slideshow');
    const images = [
        'images/xxxxx.jpg',
        'images/xxxxxx.jpg',
        'images/xxxxx (2).jpg',
        'images/xxxxxxx.jpg'
    ];
    
    let index = 0;
    
    function changeBackground() {
        slideshow.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${images[index]}')`;
        index = (index + 1) % images.length;
    }
    
    // Préchargement des images
    function preloadImages() {
        images.forEach(img => {
            const image = new Image();
            image.src = img;
        });
    }
    
    if (slideshow) {
        preloadImages();
        changeBackground(); // initial
        setInterval(changeBackground, 5000); // toutes les 5 secondes
    }
    
    // Animation au scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.product-card, .value-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initialisation des éléments animés
    const animatedElements = document.querySelectorAll('.product-card, .value-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
    
    // Focus sur la recherche
    function focusSearch() {
        document.getElementById('searchInput').focus();
    }
    
    // Panier - Simulation
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const cartCount = document.querySelector('.cart-count');
            let count = parseInt(cartCount.textContent);
            cartCount.textContent = count + 1;
            
            // Animation
            button.textContent = 'Ajouté !';
            button.style.backgroundColor = '#4CAF50';
            
            setTimeout(function() {
                button.textContent = 'Ajouter au panier';
                button.style.backgroundColor = '';
            }, 1500);
        });
    });

    document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".main-nav a");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage || (currentPage === "" && linkPage === "acceuil.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

});






