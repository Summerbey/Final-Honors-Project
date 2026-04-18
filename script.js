// Minimal JavaScript for Bootstrap version
// Bootstrap handles mobile menu automatically via data-bs-toggle!

document.addEventListener('DOMContentLoaded', function() {
    
    // Add to Cart button feedback
    const addToCartButtons = document.querySelectorAll('.btn-sm');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.card');
            const productTitle = card.querySelector('.card-title').textContent;
            
            console.log(`Added to cart: ${productTitle}`);
            
            // Visual feedback
            const originalText = this.textContent;
            this.textContent = 'Added!';
            this.classList.remove('btn-primary');
            this.classList.add('btn-success');
            
            setTimeout(() => {
                this.textContent = originalText;
                this.classList.remove('btn-success');
                this.classList.add('btn-primary');
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
- Bootstrap handles mobile menu toggle via data-bs-toggle="collapse"
- No need for custom hamburger animation
- No need for click-outside detection
- No need for mobile menu state management

Total JavaScript: ~40 lines
Compare to vanilla: ~60 lines (but Bootstrap includes its own JS bundle)
*/
