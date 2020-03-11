
export const addClass = () => {
  const carousel = document.querySelector(".carousel-item");
  if (carousel !== null) {
    carousel.classList.add("active");
  }
  // const radio = document.querySelectorAll(".radio_button");
  // radio.forEach(element => element.setAttribute("type", "hidden"));
};
