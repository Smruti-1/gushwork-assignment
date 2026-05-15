const stickyHeader = document.querySelector(".sticky-header");

window.addEventListener("scroll", () => {

  if(window.scrollY > 80){

    stickyHeader.style.top = "0";

  }else{

    stickyHeader.style.top = "-120px";

  }

});
const faqQuestions =
document.querySelectorAll(".faq-question");

faqQuestions.forEach((question)=>{

  question.addEventListener("click",()=>{

    const answer =
    question.nextElementSibling;

    if(answer.style.display === "block"){

      answer.style.display = "none";

    }else{

      answer.style.display = "block";

    }

  });

});
const carousel =
document.querySelector(".carousel");

const nextBtn =
document.querySelector(".next");

const prevBtn =
document.querySelector(".prev");

nextBtn.addEventListener("click",()=>{

  carousel.scrollBy({
    left:300,
    behavior:"smooth"
  });

});

prevBtn.addEventListener("click",()=>{

  carousel.scrollBy({
    left:-300,
    behavior:"smooth"
  });

});