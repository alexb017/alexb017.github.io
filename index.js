// Image follow cursor on hover
const itemLinks = document.querySelectorAll(".item-link");
itemLinks.forEach((link) => {
  const img = link.querySelector("img");
  link.addEventListener("mousemove", (e) => {
    const rect = link.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    img.style.left = `${x + 20}px`;
    img.style.top = `${y}px`;
  });
});

// Show local time
const localTime = document.querySelector(".local-time");
function updateTime() {
  const date = new Date();

  const day = { weekday: "short" };
  const time = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  const dayString = date.toLocaleDateString("en-US", day);
  const timeString = date.toLocaleTimeString("en-US", time);
  localTime.textContent = `${dayString} ${timeString}`;
}
updateTime();
setInterval(updateTime, 1000);

// Fade in animation on load
const fadeInElements = document.querySelectorAll(".fade-in");
fadeInElements.forEach((element, index) => {
  element.style.animationDelay = `${index * 0.05}s`;
  element.classList.add("animate-fade-in");
});
