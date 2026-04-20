const headerHTML = `
<nav class="navbar">
    <div class="nav-container">
        <a href="index.html" class="logo">BRIGHT<span>FUTURE</span></a>
        <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="admission.html">Admission</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="mandatory.html">Disclosure</a></li>
            <li><a href="facilities.html">Facilities</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </div>
</nav>`;

const footerHTML = `
<footer>
    <div class="footer-container">
        <div>
            <h3>BRIGHT FUTURE</h3>
            <p style="margin-top:15px; opacity:0.7;">Empowering minds since 1998 with colorful innovation.</p>
        </div>
        <div class="footer-section">
            <h5>Quick Links</h5>
            <ul class="footer-links">
                <li><a href="mandatory.html">CBSE Disclosure</a></li>
                <li><a href="admission.html">Admissions</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h5>Connect</h5>
            <p style="color:#94a3b8;">+91 7735135408</p>
            <p style="color:#94a3b8;">fbright395@gmail.com</p>
        </div>
    </div>
</footer>`;

document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header-placeholder");
    const footer = document.getElementById("footer-placeholder");

    if (header) header.innerHTML = headerHTML;
    if (footer) footer.innerHTML = footerHTML;
});
document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const galleryItems = document.querySelectorAll(".gallery-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filterValue = button.getAttribute("data-filter");

            galleryItems.forEach(item => {
                if (filterValue === "all" || item.classList.contains(filterValue)) {
                    item.style.display = "block";
                    item.classList.add("show");
                } else {
                    item.style.display = "none";
                    item.classList.remove("show");
                }
            });
        });
    });
});