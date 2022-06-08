function Accordeon() {
  const toggleAccordionClass = (event) => {
    event.target.classList.toggle("active");
    event.target.nextElementSibling.classList.toggle("show");
  };
}
