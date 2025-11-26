const dataBurger = [

    {
  "site": {
    "brand": {
      "name": "PrimeBite",
      "logo": {
        "light": "/assets/logo-light.svg",
        "dark": "/assets/logo-dark.svg"
      },
      "theme": {
        "primary": "#D3322A",
        "secondary": "#F7C842",
        "background": "#ffffff",
        "text": "#1a1a1a"
      }
    },
  },
  "navigation": {
    "links": [
      { "label": "Home", "href": "/" },
      { "label": "Menu", "href": "/menu" },
      { "label": "Order Online", "href": "/order" },
      { "label": "Locations", "href": "/locations" },
      { "label": "About Us", "href": "/about" }
    ],
    "cta": {
      "label": "Order Now",
      "href": "/order"
    }
  },
  "hero": {
    "title": "Crafted With Passion. Served With Flavor.",
    "subtitle": "Premium gourmet burgers grilled to perfection for those who crave more.",
    "buttons": [
      { "label": "Order Now", "href": "/order", "type": "primary" },
      { "label": "Explore Menu", "href": "/menu", "type": "secondary" }
    ],
    "media": {
      "type": "image",
      "src": "/public/hero1.png",
      "alt": "Signature Gourmet Burger"
    }
  },
  "featuredSection": {
    "title": "Signature Burgers",
    "description": "Our most popular creations, crafted by expert chefs.",
    "items": [
      {
        "id": "classic-cheddar",
        "name": "Classic Cheddar",
        "image": "/public/featured1.png",
        "price": 9.99,
        "tags": ["best seller", "beef"],
        "description": "Grass-fed beef, aged cheddar, crisp lettuce, tomato, and house sauce."
      },
      {
        "id": "truffle-burst",
        "name": "Truffle Burst",
        "image": "/public/featured1.png",
        "price": 12.49,
        "tags": ["chef’s choice"],
        "description": "Black truffle aioli, caramelized onions, smoked gouda on a brioche bun."
      },
      {
        "id": "volcano-spice",
        "name": "Volcano Spice",
        "image": "/public/featured1.png",
        "price": 11.79,
        "tags": ["spicy"],
        "description": "Fiery pepper sauce, jalapeños, spicy jack cheese, and crunchy onions."
      }
    ]
  },
  "promo": {
    "active": true,
    "title": "🔥 Weekly Combo Deal",
    "description": "Any signature burger + fries + drink for only $14.99.",
    "image": "/public/combo.png",
    "cta": {
      "label": "Claim Offer",
      "href": "/order?promo=weekly-combo"
    }
  },
  "testimonials": {
    "title": "What Our Customers Say",
    "items": [
      {
        "name": "Emily Carter",
        "avatar": "/assets/avatars/emily.png",
        "rating": 5,
        "review": "Hands down the best burger experience I've had in years. Fresh, juicy, and absolutely delicious."
      },
      {
        "name": "Marcus Holt",
        "avatar": "/assets/avatars/marcus.png",
        "rating": 5,
        "review": "The Truffle Burst changed my life. Incredible flavors!"
      }
    ]
  },
  "footer": {
    "company": "PrimeBite LLC",
    "links": {
      "about": "/about",
      "contact": "/contact",
      "careers": "/careers",
      "privacy": "/privacy-policy"
    },
    "socials": {
      "instagram": "https://instagram.com/primebite",
      "facebook": "https://facebook.com/primebite",
      "tiktok": "https://tiktok.com/@primebite"
    },
    "copyright": "© 2025 PrimeBite. All rights reserved."
  }
}

]


export default dataBurger