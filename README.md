# The Artisan Park — Website Replica & Extension Base

Full replica of [web.theartisanpark.com](https://web.theartisanpark.com) with offline asset bundling, interactive shopping bag drawer, quick view modal, currency toggle (USD / INR), responsive checkout with discount promo codes, and administrative control panel.

---

## 🚀 Quick Start

You can run this project immediately with zero configuration:

### Option 1: Zero-Dependency Node.js Server (Recommended)
```bash
npm start
# or
node server.js
```
Then open your browser at **[http://localhost:3000](http://localhost:3000)**.

### Option 2: Python Built-in Server
```bash
python3 -m http.server 3000
```

### Option 3: Direct File Access
You can also open `index.html` directly in any web browser.

---

## 📁 Project Structure

```
artisianpark/
├── index.html            # Main Storefront: Hero slider, gummies catalog,
│                         # category banners, story, FAQ, interactive cart & quick view
├── checkout.html         # Checkout page: order summary, address form,
│                         # live promo coupons (GUMMY15, WELCOME10), payment options
├── order-success.html    # Confirmation receipt with order tracker & invoice print
├── login.html            # Administrator Portal login screen
├── admin-dashboard.html  # Admin control panel: KPIs, customer orders, catalog overview
├── server.js             # Zero-dependency local development HTTP server
├── package.json          # Project metadata and run scripts
├── build/
│   └── assets/           # Compiled Tailwind CSS and Vite application bundle
│       ├── app-CJf5TaD9.css
│       └── app-DMsN-rLE.js
└── images/               # High-resolution transparent product & banner assets
    ├── badges/           # Trust badges & certifications
    ├── banners/          # Category & promotional banners
    ├── products/         # All 12 botanical gummy product jars
    ├── slider/           # Hero transparency showcases
    └── logo-sand.png     # Brand vector & logo assets
```

---

## 🌟 Interactive Features Included

- **Alpine.js Reactive State**:
  - Add to bag & remove from bag with reactive count badges
  - Slide-out cart drawer with live subtotal calculation
  - Currency switcher (`USD $` &harr; `INR ₹` with live exchange rates)
  - Quick-view product modal
  - Hero carousel auto-slider with pause-on-hover
  - Preloader curtain transition
- **Fully Working Checkout**:
  - Live coupons (`GUMMY15` for 15% off, `WELCOME10` for 10% off, `ARTISAN20` for 20% off)
  - Payment method selector: Credit/Debit Cards, UPI / QR, Cash on Delivery (COD)
  - Client-side order generation and persistence to `localStorage`
  - Automated redirect to invoice receipt (`order-success.html`)
- **Admin Control Panel**:
  - Live order tracking and product catalog inspection

---

## 🛠️ Ready for Feature Customization

You can now easily modify products, add customer reviews, integrate payment gateways (Razorpay, Stripe), connect a backend API, or add customized blog / journal sections.
