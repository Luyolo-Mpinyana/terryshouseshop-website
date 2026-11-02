# Portfolio of Evidence (PoE) — Web Development Project

**Course Module:** Web Development (23; 24; 25)  
**Academic Year:** 2026  
**Institution:** The Independent Institute of Education (Pty) Ltd  
**Repository:** [Link to your GitHub Repository]  
**Live Site Deployment:** [Link to your Netlify / GitHub Pages deployment]  

---

## 📖 Table of Contents
1. [Project Overview](#project-overview)
2. [Part 1: Proposal & Structure](#part-1-proposal--structure)
3. [Part 2: Styling & Layout Design](#part-2-styling--layout-design)
4. [Part 3: Interactive Enhancements & SEO](#part-3-interactive-enhancements--seo)
5. [Setup & Installation](#setup--installation)
6. [Deployment](#deployment)
7. [Changelog](#changelog)
8. [References](#references)

---

## ⚽ Project Overview
This website was developed as part of a multi-part Portfolio of Evidence (PoE) assignment to build a fully functional, responsive, and SEO-optimized web application. The platform provides service information, dynamic content display, interactive elements, and robust HTML5/JavaScript validated forms.

---

## 📄 Part 1: Proposal & Structure
- **Website Proposal:** Initial planning document outlining the targeted audience, wireframes, page structure, and design goals.
- **HTML Structure:** Modular layout created using semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- **Core Pages Included:**
  - `index.html` — Main landing page featuring primary branding and overview.
  - `enquiry.html` — Custom form to enquire about services, products, volunteering, or sponsorship.
  - `contact.html` — General inquiries and organization contact portal.

---

## 🎨 Part 2: Styling & Layout Design
- **CSS Architecture:** Built using structured, responsive CSS (Flexbox & CSS Grid) for multi-device support (desktop, tablet, mobile).
- **Design Consistency:** Styled with modern typography, coherent color palettes, clear element spacing, and hover/focus feedback.
- **Feedback Integration:** Applied changes based on initial Part 2 lecturer review to refine layout readability and mobile navigation.

---

## ⚡ Part 3: Interactive Enhancements & SEO

### 1. Dynamic Functionality & JavaScript
- **Form Validation:** Client-side form checking on both `enquiry.html` and `contact.html` to validate input length, email formatting, and compulsory fields prior to submission.
- **AJAX Submission Simulation:** Non-blocking asynchronous handling on the enquiry form to present interactive cost/availability estimates without full page reloads.
- **Email Dispatch Compiler:** Validates and compiles contact messages directly into a formatted `mailto:` action for instant client sending.
- **Interactive Components:** Features dynamic DOM manipulations including product/service filtering, search functionality, interactive lightbox gallery, and modal popups.

### 2. Search Engine Optimization (SEO) & Web Best Practices
- **On-Page SEO:** Meta tags (title, description), structured header hierarchy (`H1`, `H2`, `H3`), descriptive clean URLs, and informative image `alt` attributes.
- **Search Engine Indexing:** Included standard `robots.txt` instructions and an XML site hierarchy map (`sitemap.xml`).
- **Performance & Security:** Cleaned script assets to boost page rendering speed and implemented input validation to protect against client-side injection scripts.

---

## 📁 Repository Directory Structure

```text
├── index.html              # Landing Page
├── enquiry.html            # Service/Sponsorship Enquiry Form
├── contact.html            # Contact Page & Mail Compiler
├── css/
│   └── style.css           # Global stylesheet & mobile breakpoints
├── js/
│   └── script.js          # DOM manipulation, validation, & AJAX logic
├── images/                 # Optimized image assets with descriptive alt tags
├── robots.txt              # Search engine crawler instructions
├── sitemap.xml             # XML website page map
└── README.md               # Project documentation & changelog
