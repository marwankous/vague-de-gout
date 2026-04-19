# 🌊 Vague de Goût - Project Progress & Roadmap

A professional, high-performance static site for a luxury seafood traiteur brand, built with **11ty** and **Docker**, deployed via **GitHub Actions**.

---

## ✅ Progress So Far

### 1. Core Architecture
*   **SSG:** 11ty (Eleventy) with Nunjucks templates.
*   **Environment:** Fully Dockerized development and build environment (`Dockerfile`, `docker-compose.yml`).
*   **Deployment:** Automated CI/CD pipeline via GitHub Actions to GitHub Pages.
*   **Multi-language Support:** Full localization in **French (Default)**, **English**, and **Arabic**.
*   **RTL Support:** Dynamic Right-to-Left layout and specific fonts (Amiri) for Arabic users.

### 2. Branding & Design
*   **Aesthetic:** "Luxury Artisanal" with a palette of **Deep Navy (#001f3f)**, **Seafoam White (#f8f9fa)**, and **Gold (#d4af37)**.
*   **Logo:** Integrated custom `logo.svg` (white/gold design) in the header.
*   **Favicon:** Custom `favicon.png` implemented and configured.
*   **Typography:** Playfair Display for headers, Inter for body, and Amiri for Arabic.

### 3. Data & Content
*   **Menu:** 33 premium seafood items managed in `src/_data/menu.json`.
*   **Translation System:** Centralized UI strings in `src/_data/i18n.js`.
*   **Categories:** 7 professional categories (Grandes Bastilas, La Marée Fraîche, Finger Food & Traiteur, Les Saveurs Traditionnelles, Ready-to-Cook, Épicerie Marine, Services Professionnels).

### 4. UI/UX Features
*   **Category Navigation:** Quick-jump chips below the hero for easy browsing of the 33 items.
*   **Product Cards:** Mobile-friendly grid with descriptions, prices, and automated WhatsApp links.
*   **WhatsApp Integration:** Sticky CTA button and product-specific "Order" buttons with pre-filled localized text.
*   **Scroll-to-Top:** A smart button that appears after scrolling, with RTL-aware positioning.
*   **B2B/Professional Section:** A dedicated section targeting restaurants and cafes.

### 5. Production & SEO
*   **SEO Meta Tags:** Full OpenGraph and Twitter card support for professional social sharing.
*   **Structured Data:** JSON-LD Schema (FoodEstablishment) for better Google indexing.
*   **Search Engine Optimization:** `sitemap.xml` and `robots.txt` automatically generated.
*   **Redirects:** Root domain automatically redirects to the default French version (`/fr/`).

---

## 🚀 TODO List (Next Steps)

### 📸 Content & Media (Critical)
- [ ] **Replace Placeholder Images:** Replace the `picsum.photos` URLs in `src/_data/menu.json` with real high-quality photos of Vague de Goût products.
- [ ] **Social Media:** Update the Instagram link in `src/_includes/layouts/base.njk` to point to the actual profile.
- [ ] **OG Image:** Place a real brand preview image at `src/assets/images/og-image.jpg`.

### 🛠 Technical Polish
- [ ] **Image Optimization:** Implement an 11ty image plugin to automatically compress and convert photos to WebP for faster loading.
- [ ] **Custom Domain:** Link the site to a professional domain (e.g., `vaguedegout.ma`).
- [ ] **Analytics:** Add a Google Analytics 4 tag to track visitor traffic and popular products.

### 📈 Marketing & Growth
- [ ] **Search Console:** Submit the `sitemap.xml` to Google Search Console to speed up ranking.
- [ ] **Google Business Profile:** Create/Update the Google Maps profile for the business to link to this site.
- [ ] **Testimonials:** Add a "What our customers say" section once the brand gathers more reviews.
