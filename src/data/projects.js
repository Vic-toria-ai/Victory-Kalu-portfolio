// Project data stored in an array for easier management. It is easier passing them as props to the ProjectCard component, which will then be passed down as props to the work component.
const projects = [
  {
    name: "CredAxis",
    slug: "credaxis",
    tag: "Featured",
    description:
      "An alternative credit engine — real user input evaluated into a real, conditional outcome.",
    fullDescription:
      "Most credit scoring relies entirely on traditional credit history, which locks out anyone who's never had a loan, credit card, or formal financial footprint, even if they're perfectly capable of repaying one. CredAxis takes a different approach: it evaluates creditworthiness using alternative data points instead, things like real financial behavior rather than an existing credit file. A user fills in real information through a structured onboarding flow, and that input runs through scoring logic to produce an actual, conditional creditworthiness outcome, not a static example of what a result might look like if you already qualified. This project focuses specifically on the interface and logic layer of that scoring system: the forms, the flow, and the decision-making a user actually experiences, not the backend infrastructure a real fintech company would need behind it. Building this meant thinking carefully about what information actually matters for a scoring decision, and structuring the interface so entering that information feels like a guided process rather than a wall of form fields.",
    before: "/screenshots/cred-hero.jpeg",
    after: "/screenshots/cred-signup.jpeg",
    live: "https://cred-axis-beryl.vercel.app/",
    code: "#",
    note: "The result screen has a known bug — the signup screen is shown here as a placeholder until it's fixed.",
  },
  {
    name: "IP Address Tracker",
    slug: "ip-address-tracker",
    description:
      "Enter any IP or domain, get its real location, timezone, and ISP back — live lookup, not mock data.",
    fullDescription:
      "This tool answers a simple question — where does this IP address or domain actually come from — using real data pulled live, not a hardcoded example baked into the page. A user types in any IP address or domain name, and the app sends that input to a live geolocation API in real time. The response comes back with the actual location, timezone, and internet service provider tied to that address, and the result gets plotted directly onto an interactive map so the answer is visual, not just a line of text. Every search is a genuine request-response cycle — try 8.8.8.8 (Google's public DNS) and you'll watch it resolve to Mountain View, California, right in front of you. Building this meant handling real-world API responses, including the ones that come back messy, slow, or in an unexpected shape, and making sure the interface still displayed something sensible either way.",
    before: "/screenshots/ip-tracker-before.jpeg",
    after: "/screenshots/ip-tracker-after.jpeg",
    live: "https://ip-address-trackernetlify.netlify.app/",
    code: "#",
  },
  {
    name: "Product List & Cart",
    slug: "product-cart",
    description:
      "Add items, watch quantities and totals update in real time — real state management, not static pricing.",
    fullDescription:
      "A shopping cart interface where nothing on the page is decorative — every visible number is backed by real, tracked state. Adding an item, adjusting its quantity up or down, or removing it entirely all update the cart's actual internal state immediately, and the order total recalculates live to match whatever's currently in the cart. Built with React and Hooks to manage that state cleanly: the product grid and the cart panel are separate components that don't need to know about each other's internal details, they just share state through props and callbacks the way a well-structured React app should. The interesting part of this project wasn't the visual design, it was getting quantity increments, running totals, and item removal to all stay perfectly in sync without any of them getting out of step with each other.",
    before: "/screenshots/cart-empty.jpeg",
    after: "/screenshots/cart-filled.jpeg",
    live: "https://product-list-cart-74av.vercel.app/",
    code: "#",
  },
  {
    name: "Web Calculator",
    slug: "web-calculator",
    description:
      "Handles real arithmetic, including edge cases like division errors.",
    fullDescription:
      "A fully working calculator that handles real arithmetic operations — not just simple addition, but the messier cases too, like what happens if someone tries to divide by zero, chains multiple operators together, or enters a decimal in an unexpected spot. Built with vanilla JavaScript, it manages the calculator's running expression as the user types, tracks operator precedence, and validates input before evaluating it, so the interface holds up under real, sometimes-awkward usage instead of only working for the cleanest possible input. This project was as much about handling the edge cases correctly as it was about the basic arithmetic — a calculator that only works for perfect input isn't actually a working calculator.",
    before: "/screenshots/calc-before.jpeg",
    after: "/screenshots/calc-after.jpeg",
    live: "https://mycalc-a.netlify.app/",
    code: "#",
  },
  {
    name: "Todo App — Clarify",
    slug: "todo-app",
    description:
      "Add, check off, and delete tasks — real state changes, not a static list.",
    fullDescription:
      "A task manager built entirely without external libraries or frameworks — just vanilla JavaScript and direct DOM manipulation, no React, no state management library doing the work behind the scenes. Every interaction on the page — typing a new task, adding it to the list, checking it off, deleting it entirely — triggers an immediate, real update to the page, driven by manually attached event listeners and state tracked directly in JavaScript rather than handed off to a framework. It's a smaller, simpler project than the others here, but that's part of the point: it's a clean, unassisted demonstration of core JavaScript fundamentals — DOM manipulation, event handling, and state management — without anything else doing the heavy lifting underneath it.",
    before: "/screenshots/todo-unchecked.jpeg",
    after: "/screenshots/todo-checked.jpeg",
    live: "https://clarify-todo-app.vercel.app/",
    code: "#",
  },
  {
    name: "Auto Company Website",
    slug: "auto-company",
    description:
      "A fully responsive marketing site — supporting visual work, not logic-focused.",
    fullDescription:
      "A multi-section marketing website built for a fictional auto company, using Bootstrap's grid system and utility classes to keep the layout consistent and mobile-first across every screen size. Unlike the other projects on this page, this one isn't built around interactive logic — there's no real user input being evaluated into a conditional outcome here. It's included specifically to show a different side of frontend work: page structure, responsive layout, visual hierarchy, and translating a design brief into a working, cross-browser-compatible site. It sits at the end of this list deliberately, since it supports the 'I can build a clean, responsive interface' claim, but not the 'real logic running' claim the stronger projects above it are built to prove.",
    before: "/screenshots/auto-home.jpeg",
    after: "/screenshots/auto-carShowcase.jpeg",
    live: "https://automobile-website-net.netlify.app/",
    code: "#",
  },
];

export default projects;
