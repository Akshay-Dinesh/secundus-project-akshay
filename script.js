// Smooth scroll or interactive behaviors can go here if needed
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (!href.endsWith('.html')) return;
    // Add more interactions if needed
  });
});
