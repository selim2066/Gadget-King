
# Gadget King

Live Site: [gadget-king.netlify.app](https://gadget-king.netlify.app/)

**Gadget King** is a React-based e-commerce web application built with Tailwind CSS and DaisyUI. It supports routing, price sorting, cart & wishlist functionality, and displays statistics of which products are added to the cart.

---

## Table of Contents

1. [Features](#features)
2. [Demo](#demo)
3. [Tech Stack](#tech-stack)
4. [Getting Started](#getting-started)
5. [Project Structure](#project-structure)
6. [Scripts](#scripts)
7. [Future Improvements](#future-improvements)
8. [License](#license)

---

## Features

* User-friendly routing between pages (product listing, single product, cart, wishlist, etc.)
* Sort products by price (ascending / descending)
* Add products to cart
* Add / remove products to / from wishlist
* Product statistics: track which products are added to the cart (how often, etc.)
* Styled using Tailwind CSS + DaisyUI

---

## Demo

You can see the live demo here:
[Gadget King Live](https://gadget-king.netlify.app/)

---

## Tech Stack

* **Frontend**: React
* **Styling**: Tailwind CSS, DaisyUI
* **State Management**: React state/hooks (or other library if used)
* **Routing**: React Router (or specify which routing you used)
* **Other dependencies**: (list any important ones: e.g. axios, context, redux, etc.)

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js (version ≥ *x.x.x*)
* npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/<your-username>/gadget-king.git
   cd gadget-king
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view in the browser. The app will reload if you make edits.

---

## Project Structure


```
Gadget-King/
├── public/               # Static files
├── src/
│   ├── assets/           # Images & icons
│   ├── components/       # Reusable components
│   │   ├── banner/
│   │   ├── dashboard/
│   │   ├── footer/
│   │   ├── gadget/
│   │   ├── navbar/
│   │   ├── statistics/
│   │   └── Routs/Home/
│   ├── context/          # Global state (cart, wishlist, etc.)
│   ├── App.jsx           # Main App component
│   ├── main.jsx          # Entry point
│   ├── App.css
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md

```

---

## Scripts

| Script           | Description                                |
| ---------------- | ------------------------------------------ |
| `npm start`      | Runs the app in development mode.          |
| `npm run build`  | Builds the app for production.             |
| `npm test`       | (If you have tests) Runs test suite.       |
| `npm run lint`   | (If you have linting) Runs code linters.   |
| `npm run format` | (If using Prettier etc.) Formats the code. |

---

## Future Improvements

Here are some ideas for future work / enhancements:

* Add user authentication (login / signup)
* Persist cart and wishlist data (e.g., in local storage or backend)
* Payment integration
* Product search + filtering (beyond price)
* Responsive design / mobile optimizations
* Better error handling / loading indicators
* Tests (unit / integration)


---

## Author

* Md Selim Reza — *Developer / Maintainer*
* Contact: mdselimreza2066@gmail.com

---

If you like, I can auto-generate a filled README with your specific dependencies (based on your `package.json`) so you can just drop it in. Do you want me to do that for you?
