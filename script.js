const menuIcon = document.getElementById('menu-icon');
const slide = document.getElementById('slide');


    // Add a click event listener
    menuIcon.addEventListener('click', () => {
      // Toggle between two classes
      if (menuIcon.classList.contains('bx-menu-alt-right')) {
        slide.style.display = "flex"
        menuIcon.classList.replace('bx-menu-alt-right', 'bx-x'); // Change to 'bx-x'
      } else {
        slide.style.display = "none"
        menuIcon.classList.replace('bx-x', 'bx-menu-alt-right'); // Change back to 'bx-menu-alt-right'
      }
    });