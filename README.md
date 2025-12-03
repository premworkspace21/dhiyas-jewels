# Dhiyas Jewels – Ecommerce (Static)

A lightweight, SEO-friendly earring store for **Dhiyas Jewels** with editable catalog, cart, and product pages.

## Features
- Homepage with hero, featured, why-choose-us, testimonials, contact
- Shop with search, filters (Studs/Hoops/Drops), sorting, and Add-to-Cart
- Product detail pages with Schema.org Product markup
- Cart (localStorage) – ready for future Razorpay/UPI integration
- Admin page to add/edit/delete products; import/export JSON
- SEO basics: meta tags, Open Graph, robots.txt, sitemap.xml

## Edit Products
1. Open **admin.html** in your browser.
2. Use the form to add/edit products. Changes save to localStorage and instantly reflect in **shop.html**.
3. Click **Export JSON** to download `products.override.json`.
4. Replace `assets/products.json` on your hosting to make changes live for all users.

## Manual Edits
- Edit `assets/products.json` directly to add/remove items.
- Fields: `id`, `name`, `price`, `currency`, `category`, `tags`, `short_description`, `description`, `images`, `rating`, `reviews`, `stock`.

## Contact Form
Currently uses `mailto:`. Switch to Formspree or a small backend when ready.

## Hosting
- Drop the folder on **GitHub Pages**, **Vercel**, **Netlify**, or any static host.

## Brand Assets
- Update logo path in `index.html` JSON-LD.
- Replace hero/product images with your own.
