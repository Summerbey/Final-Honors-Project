// Bulma Mobile Navigation Toggle
// Bulma is CSS-only - no JavaScript included!
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile menu toggle (Bulma navbar-burger)
    const navbarBurger = document.getElementById('navbarBurger');
    const navbarMenu = document.getElementById('navbarMenu');
    
    if (navbarBurger && navbarMenu) {
        navbarBurger.addEventListener('click', function() {
            // Toggle the "is-active" class on both the burger and the menu
            navbarBurger.classList.toggle('is-active');
            navbarMenu.classList.toggle('is-active');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navbarMenu.contains(event.target) && 
                !navbarBurger.contains(event.target) && 
                navbarMenu.classList.contains('is-active')) {
                navbarBurger.classList.remove('is-active');
                navbarMenu.classList.remove('is-active');
            }
        });
        
        // Close mobile menu when clicking on a link
        const navbarLinks = navbarMenu.querySelectorAll('.navbar-item');
        navbarLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (navbarMenu.classList.contains('is-active')) {
                    navbarBurger.classList.remove('is-active');
                    navbarMenu.classList.remove('is-active');
                }
            });
        });
    }
    
    // Add to Cart button feedback
    const addToCartButtons = document.querySelectorAll('.button.is-link.is-small');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.card');
            const productTitle = card.querySelector('.title').textContent;
            
            console.log(`Added to cart: ${productTitle}`);
            
            // Visual feedback using Bulma classes
            const originalHTML = this.innerHTML;
            this.innerHTML = '<strong>Added!</strong>';
            this.classList.remove('is-link');
            this.classList.add('is-success');
            
            setTimeout(() => {
                this.innerHTML = originalHTML;
                this.classList.remove('is-success');
                this.classList.add('is-link');
            }, 1500);
        });
    });
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            console.log(`Newsletter subscription: ${emailInput.value}`);
            
            // Visual feedback
            emailInput.value = '';
            emailInput.placeholder = 'Thanks for subscribing!';
            
            setTimeout(() => {
                emailInput.placeholder = 'Enter your email';
            }, 3000);
        });
    }
});

/*
COMPARISON NOTE:
Like Tailwind, Bulma is CSS-only framework with NO JavaScript.
This is different from Bootstrap which includes JS for components.

Pros:
- Lighter framework (CSS only)
- More control over JavaScript behavior
- No jQuery dependency (like old Bootstrap 4)

Cons:
- Must write custom JavaScript for interactions
- Mobile menu requires manual implementation
- No built-in JS components (modals, dropdowns, etc.)

Total JavaScript: ~65 lines
Similar to vanilla and Tailwind, more than Bootstrap (~40 lines)
*/
