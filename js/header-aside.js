import { body, overlay, aside, openBtn } from "./elements.js";

openBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.isClickedOnAside = true;
    aside.classList.toggle("open");
    if (aside.classList.contains("open")) {
      overlay.classList.add("visible");
      body.classList.add("body-hidden");
    } else {
      overlay.classList.remove("visible");
      body.classList.remove("body-hidden");
    }
  });
});

aside.addEventListener("click", (e) => {
  e.isClickedOnAside = true;
});

body.addEventListener("click", (e) => {
  if (e.isClickedOnAside) return;
  aside.classList.remove("open");
  overlay.classList.remove("visible");
  body.classList.remove("body-hidden");
});
