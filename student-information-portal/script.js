// simple animation on scroll
const cards = document.querySelectorAll('.course-card, .info-card, .category-card');

window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const position = card.getBoundingClientRect().top;
    if(position < window.innerHeight - 100){
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});


const form = document.querySelector('.contact-form form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Message sent successfully!');
  form.reset();
});


// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  item.addEventListener('click', () => {
    faqItems.forEach(i => {
      i.classList.remove('active');
      i.querySelector('span').textContent = '+';
    });

    item.classList.add('active');
    item.querySelector('span').textContent = '−';
  });
});

// Newsletter
const newsletter = document.querySelector('.newsletter-form');
newsletter.addEventListener('submit', e => {
  e.preventDefault();
  alert('Subscribed successfully!');
  newsletter.reset();
});


const footerForm = document.querySelector('.footer-newsletter');

footerForm.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thanks for subscribing!');
  footerForm.reset();
});

