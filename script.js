document.addEventListener("DOMContentLoaded", () => {
    
    const headerContainer = document.getElementById('header');
    const footerContainer = document.getElementById('footer');

    // --- STEP 1: DEFINE HEADER HTML (With Top Contact Bar and Logo Space) ---
    const headerHTML = `
    <div style="background: #f8f9fa; border-bottom: 1px solid #ddd; padding: 5px 0; font-size: 0.8rem; color: #002147;">
        <div style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: flex-end; gap: 20px; padding: 0 20px;">
            <span>📧 radhakrishnaemschool1@gmail.com</span>
            <span>📞 +91 9437526772</span>
        </div>
    </div>

    <nav class="main-nav" style="background: #002147; color: white; padding: 1rem 0; border-bottom: 4px solid #D4AF37;">
        <div class="nav-container" style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 0 20px;">
            <div class="logo" style="display: flex; align-items: center; gap: 15px;">
                <img src="images/log.png" alt="School Logo" style="height: 60px; width: auto; border-radius: 50%;">
                
                <div class="logo-text">
                    <h1 style="font-family: serif; color: #D4AF37; font-size: 1.4rem; margin: 0; letter-spacing: 1px;">RADHA KRISHNA</h1>
                    <p style="font-size: 0.7rem; text-transform: uppercase; margin: 0; opacity: 0.8;">English Medium School</p>
                </div>
            </div>
            <ul class="nav-links" style="display: flex; list-style: none; gap: 20px; margin: 0;">
                <li><a href="index.html" style="color: white; text-decoration: none; font-weight: 600;">Home</a></li>
                <li><a href="about.html" style="color: white; text-decoration: none; font-weight: 600;">About</a></li>
                <li><a href="facilities.html" style="color: white; text-decoration: none; font-weight: 600;">Facilities</a></li>
                <li><a href="gallery.html" style="color: white; text-decoration: none; font-weight: 600;">Gallery</a></li>
                <li><a href="admission.html" style="color: white; text-decoration: none; font-weight: 600;">Admission</a></li>
                <li><a href="mandatory.html" style="color: white; text-decoration: none; font-weight: 600;">Mandatory Disclosure</a></li>
                <li><a href="contact.html" style="color: white; text-decoration: none; font-weight: 600;">Contact</a></li>
            </ul>
        </div>
    </nav>`;

    // --- STEP 2: DEFINE FOOTER HTML (With Logo Space) ---
    const footerHTML = `
    <footer style="background: #00152e; color: white; padding: 40px 0; margin-top: 50px; border-top: 5px solid #D4AF37;">
        <div style="max-width: 1200px; margin: 0 auto; display: flex; flex-wrap: wrap; justify-content: space-between; padding: 0 20px; gap: 30px;">
            
            <div style="flex: 1; min-width: 250px;">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 15px;">
                    <img src="images/log.png" alt="School Logo" style="height: 40px; width: auto;">
                    <h3 style="color: #D4AF37; margin: 0;">RADHA KRISHNA EMS</h3>
                </div>
                <p style="font-size: 0.85rem; opacity: 0.7; line-height: 1.6;">
                    Gudari, Rayagada, Odisha.<br>
                    Providing quality education and fostering character since inception.
                </p>
            </div>

            <div style="flex: 1; min-width: 150px;">
                <h4 style="color: #D4AF37; margin-bottom: 15px;">Quick Links</h4>
                <ul style="list-style: none; padding: 0; font-size: 0.85rem; line-height: 2;">
                    <li><a href="index.html" style="color: white; text-decoration: none;">Home</a></li>
                    <li><a href="admission.html" style="color: white; text-decoration: none;">Admissions</a></li>
                    <li><a href="mandatory.html" style="color: white; text-decoration: none;">Mandatory Disclosure</a></li>
                </ul>
            </div>

            <div style="flex: 1; min-width: 200px;">
                <h4 style="color: #D4AF37; margin-bottom: 15px;">Connect With Us</h4>
                <p style="font-size: 0.85rem; opacity: 0.7;">
                    📧 radhakrishnaemschool1@gmail.com<br>
                    📞 +91 9437526772
                </p>
            </div>
        </div>
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); font-size: 0.8rem; opacity: 0.6;">
            &copy; 2026 Radha Krishna English Medium School. All Rights Reserved.
        </div>
    </footer>`;

    // --- STEP 3: RENDER TO THE PAGE ---
    if (headerContainer) headerContainer.innerHTML = headerHTML;
    if (footerContainer) footerContainer.innerHTML = footerHTML;

});
