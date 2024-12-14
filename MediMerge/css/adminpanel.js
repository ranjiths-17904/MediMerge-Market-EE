
document.querySelectorAll(".card button").forEach((button) => {
  button.addEventListener("click", () => {
    alert("Feature Coming Soon!");
  });
});

const searchInput = document.querySelector("header input[type='text']");
searchInput.addEventListener("input", (event) => {
  console.log(`Search: ${event.target.value}`);
});

const sidebarLinks = document.querySelectorAll(".sidebar ul li a");
sidebarLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    alert(`Navigating to ${link.innerText}`);
  });
});
