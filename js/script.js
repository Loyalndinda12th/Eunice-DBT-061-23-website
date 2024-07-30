// Show about page
function showAbout() {
  const aboutSection = document.getElementById("about");
  aboutSection.style.display = "block";
}
function hideAbout() {
  const aboutSection = document.getElementById("about");
  aboutSection.style.display = "none";
}
document.getElementById("dept").addEventListener("click", hideAbout);
document.getElementById("home").addEventListener("click", hideAbout);
document.getElementById("cont").addEventListener("click", hideAbout);

// Show departments Page
function showDepartments() {
  const aboutSection = document.getElementById("departments");
  aboutSection.style.display = "block";
}
function hideDepartments() {
  const aboutSection = document.getElementById("departments");
  aboutSection.style.display = "none";
}
document.getElementById("abt").addEventListener("click", hideDepartments);
document.getElementById("home").addEventListener("click", hideDepartments);
document.getElementById("cont").addEventListener("click", hideDepartments);

//Show contacts page
function showContact() {
  const aboutSection = document.getElementById("contact");
  aboutSection.style.display = "block";
}
function hideContact() {
  const aboutSection = document.getElementById("contact");
  aboutSection.style.display = "none";
}
document.getElementById("abt").addEventListener("click", hideContact);
document.getElementById("home").addEventListener("click", hideContact);
document.getElementById("dept").addEventListener("click", hideContact);
// Show home
function showHome() {
  const aboutSection = document.getElementById("homes");
  aboutSection.style.display = "block";
}
function hideHome() {
  const aboutSection = document.getElementById("homes");
  aboutSection.style.display = "none";
}
document.getElementById("abt").addEventListener("click", hideHome);
document.getElementById("cont").addEventListener("click", hideHome);
document.getElementById("dept").addEventListener("click", hideHome);
