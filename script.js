

  const images = [
    'assets/rafting1.jpg',
    'assets/rafting2.jpg',
    'assets/rafting3.jpg'
  ];
  // Preload them
images.forEach(src => {
  const img = new Image();
  img.src = src;
});




window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('loader').style.display = 'none';
    }, 3000); // 3 seconds
  });
  const heroSection = document.querySelector('.hero');



  window.addEventListener('DOMContentLoaded', () => {
  const dateInput = document.getElementById('date');
  const today = new Date().toISOString().split('T')[0];
  dateInput.value = today;
});





  let current = 0;

  setInterval(() => {
    heroSection.style.backgroundImage = `url('${images[current]}')`;
    current = (current + 1) % images.length;
  }, 2500); // 2.5 seconds


  // only show after 10 seconds
 window.addEventListener('load', () => {
    const alertBar = document.querySelector('.alert-bar');
    const footerSection = document.getElementById('footer');
    const currentMonth = new Date().getMonth(); // 0 = Jan, 5 = Jun

    let showAlert = false;

    // Show alert bar after 10 seconds (only in June to Sept)
    if (currentMonth >= 5 && currentMonth <= 8) {
      showAlert = true;
      setTimeout(() => {
        if (!isContactVisible()) {
          alertBar.style.display = 'block';
        }
      }, 13000);
    }

    // Utility: check if contact is on screen
    function isFooterVisible() {
      const rect = footerSection.getBoundingClientRect();
      return (
        rect.top < window.innerHeight &&
        rect.bottom >= 0
      );
    }

    // Scroll listener to hide/show alert bar
    window.addEventListener('scroll', () => {
      if (!showAlert) return;
      if (isFooterVisible()) {
        alertBar.style.display = 'none';
      } else {
        alertBar.style.display = 'block';
      }
    });
  });

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle Logic
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-links-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked (optional but good UX)
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                // Check if the menu is open before closing
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            });
        });
    }

    // Existing Loader Logic (Keep this)
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.style.display = 'none';
        }, 1000);
    }
    
    // Alert Bar Logic (Keep this)
    const alertBar = document.querySelector('.alert-bar');
    if (alertBar) {
        setTimeout(() => {
            alertBar.style.display = 'block';
        }, 1500);
    }
});
