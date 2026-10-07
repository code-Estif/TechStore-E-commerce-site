<div align="center">

  <img src="./Preview.png" width="100%" alt="TechStore Preview">

  # TechStore

  **A React e-commerce interface focused on filtering, comparison, and state management.**

</div>

## Overview

TechStore is a frontend e-commerce experience for browsing and comparing technology products.

The project goes beyond a static product page by implementing multi-filtering, product comparison, cart management, sorting, and persistent client-side state.

## Key Features

- Responsive product grid
- Multi-criteria filtering by category, brand, price, specifications, stock, and rating
- Product sorting by price and rating
- Side-by-side comparison with a two-product limit
- Shopping cart with quantity controls and live totals
- Persistent cart and filter state using `localStorage`
- Responsive dark UI

## Technical Highlights

### Multi-filter logic

Multiple filters can be active at the same time. Results are narrowed by the combined criteria rather than a single filter.

### Global state

React Context API is used for shared cart and comparison state.

### Persistent state

Cart and filter data are synchronized with `localStorage`, allowing the user's selections to survive a page refresh.

### Component-based architecture

The application is organized around reusable React components and separate pages for the product catalog and cart.

## Tech Stack

- **React 18**
- **React Router 6**
- **Vite**
- **Vanilla CSS3**
- **React Context API**
- **JavaScript**

## Getting Started

```bash
git clone https://github.com/code-Estif/TechStore-E-commerce-site.git
cd TechStore-E-commerce-site
npm install
npm run dev
```

## What This Project Demonstrates

- React state management
- Client-side filtering and sorting
- Reusable component architecture
- E-commerce interactions
- Responsive UI implementation
- Browser storage persistence

## Portfolio Note

TechStore is a flagship technical project in my frontend portfolio. It demonstrates application-level React skills alongside visual UI work.

---

**Built by Estif**
