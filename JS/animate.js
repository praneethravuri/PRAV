const elementsToAnimateNoDelay = document.querySelectorAll(".req-animate");
const elementsToAnimateDelay75 = document.querySelectorAll(".req-animate-75");
const elementsToAnimateDelay200 = document.querySelectorAll(".req-animate-200");
const elementsToAnimateDelay300 = document.querySelectorAll(".req-animate-300");

function applyAnimationToElements(elements) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const targetElement = entry.target;
        if (targetElement.classList.contains("req-animate")) {
          entry.target.classList.add("animate__animated");
          entry.target.classList.add("animate__fadeInUp");
        }
        else if (targetElement.classList.contains("req-animate-75")) {
          entry.target.classList.add("animate__animated");
          entry.target.classList.add("animate__fadeInUp");
          entry.target.classList.add("animate__delay-1s");
        }
        else if (targetElement.classList.contains("req-animate-200")) {
          entry.target.classList.add("animate__animated");
          entry.target.classList.add("animate__fadeInUp");
          entry.target.classList.add("animate__delay-2s");
        }
        else if (targetElement.classList.contains("req-animate-300")) {
          entry.target.classList.add("animate__animated");
          entry.target.classList.add("animate__fadeInUp");
          entry.target.classList.add("animate__delay-3s");
        }

        observer.unobserve(entry.target);
      }
    });
  });

  elements.forEach((element) => {
    observer.observe(element);
  });
}

applyAnimationToElements(elementsToAnimateNoDelay);
applyAnimationToElements(elementsToAnimateDelay75);
applyAnimationToElements(elementsToAnimateDelay200);
applyAnimationToElements(elementsToAnimateDelay300);
