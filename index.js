// Image follow cursor on hover
const itemLinks = document.querySelectorAll(".item-link");
itemLinks.forEach((link) => {
  // const project = link.closest(".project");

  // link.addEventListener("mouseenter", () => {
  //   project.classList.add("active");
  // });

  // link.addEventListener("mouseleave", () => {
  //   project.classList.remove("active");
  // });

  const img = link.querySelector("img");
  link.addEventListener("mousemove", (e) => {
    const rect = link.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    img.style.left = `${x - 20}px`;
    img.style.top = `${y - img.offsetHeight - 20}px`;
  });
});

// Show local time
const localTime = document.querySelector(".local-time");

// Create formatter for local time
const formatter = new Intl.DateTimeFormat("en-US", {
  weekday: "short",
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
});

function updateTime() {
  const now = new Date();

  if (!localTime) return;

  // Format and display local time without comma
  localTime.textContent = formatter.format(now).replace(",", "");

  // Update every second
  const delay = 1000 - now.getMilliseconds();
  setTimeout(updateTime, delay);
}
// updateTime();

// Fade in animation on load
const fadeInElements = document.querySelectorAll(".fade-in");
fadeInElements.forEach((element, index) => {
  element.style.animationDelay = `${index * 0.1}s`;
  element.classList.add("animate-fade-in");
});
