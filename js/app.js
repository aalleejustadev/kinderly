document.addEventListener("DOMContentLoaded", () => {
  /**
   * Activate activities titles
   */
  let activitiesTitles = document.querySelectorAll(
    ".activities__title__button"
  );
  activitiesTitles.forEach((title) => {
    title.addEventListener("click", () => {
      // Remove active class from all titles
      activitiesTitles.forEach((t) => t.classList.remove("active"));
      // Add active class to clicked title
      title.classList.add("active");

      let activitiesList = document.querySelectorAll(".activities__item");
      activitiesList.forEach((item) => {
        item.style.display = "none";
        if (
          item.dataset.type === title.dataset.type ||
          title.dataset.type === "all"
        ) {
          item.style.display = "block";
        }
      });
    });
  });

  /**
   * Initialize testimonials slider
   */
  class TestimonialsSlider {
    constructor() {
      // Get DOM elements
      this.wrapper = document.querySelector(".testimonials__wrapper");
      this.slides = Array.from(
        document.querySelectorAll(".testimonials__slide")
      );
      this.controls = document.querySelectorAll(".testimonial__control");

      // Set initial state
      this.currentIndex = 0;
      this.slidesCount = this.slides.length;

      // Bind event handlers
      this.init();
    }

    init() {
      // Add click handlers to controls
      this.controls.forEach((control) => {
        control.addEventListener("click", (e) => {
          const direction = e.currentTarget.dataset.direction;
          this.handleSlideChange(direction);
        });
      });
    }

    handleSlideChange(direction) {
      // Remove active class from current slide
      this.slides[this.currentIndex].classList.remove("active");

      // Calculate new index based on direction
      if (direction === "next") {
        this.currentIndex = (this.currentIndex + 1) % this.slidesCount;
      } else {
        this.currentIndex =
          (this.currentIndex - 1 + this.slidesCount) % this.slidesCount;
      }

      // Add active class to new slide
      this.slides[this.currentIndex].classList.add("active");
    }
  }

  new TestimonialsSlider();

  /**
   * Initialize FAQs accordions
   */
  const accordions = document.querySelectorAll(".faqs__accordion");

  // Add click event listener to each accordion
  accordions.forEach((accordion) => {
    const answer = accordion.querySelector(".faqs__accordion__answer");
    accordion.addEventListener("click", () => {
      // Check if this accordion is already active
      const isActive = accordion.classList.contains("active");

      // Close all accordions first
      accordions.forEach((item) => {
        const itemAnswer = item.querySelector(".faqs__accordion__answer");
        item.classList.remove("active");
        itemAnswer.style.height = "0";
      });

      // If the clicked accordion wasn't active, open it
      if (!isActive) {
        accordion.classList.add("active");
        answer.style.height = answer.scrollHeight + "px";
      }
    });
  });

  /**
   * Initialize menu trigger
   */
  const menuTrigger = document.querySelector(".menu-trigger");
  const navigation = document.querySelector(".navigation");

  let isMenuOpen = false;

  menuTrigger.addEventListener("click", function () {
    if (!isMenuOpen) {
      // Opening the menu
      navigation.classList.add("navigation__active");
      menuTrigger.classList.add("active");
    } else {
      // Closing the menu
      navigation.classList.remove("navigation__active");
      menuTrigger.classList.remove("active");
    }

    isMenuOpen = !isMenuOpen;
  });
});
