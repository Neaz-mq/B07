# Animated Website

Welcome to **Animated Website**, an interactive and animated website built with **React** and **GSAP**. This project demonstrates smooth animations, responsive design, and modern frontend development best practices.

---

## 🚀 Technologies Used

The project leverages the following technologies:

- **React 18** – For building the user interface with reusable components.
- **GSAP (GreenSock Animation Platform)** – For creating smooth, performant animations and transitions.
- **React Router DOM** – For handling multiple pages and client-side routing.
- **Tailwind CSS 4** – For utility-first, responsive styling.
- **Vite** – As the development server and build tool for faster bundling.
- **ESLint** – To maintain code quality and best practices.
- **React Context API** – For global state management (navbar state, colors, etc.).

---

## 🌟 Features

- **Fully Animated Hero Section** using GSAP.
- **Smooth Page Transitions** between routes.
- **Responsive Design** for all screen sizes (mobile, tablet, desktop).
- **Custom Navbar** with hover effects and color changes based on route.
- **Reusable Components** for Hero text, Video backgrounds, Badges, and more.
- **Context-based State Management** for navigation and theming.

---

## 📁 Project Structure

```
src/
 ├─ components/       # Reusable UI components
 │   ├─ Navigation/   # Navbar and fullscreen menu
 │   ├─ Home/         # Hero section, bottom text, video
 │   └─ models/       # Animation models
 ├─ context/          # React Context for navbar and theme
 ├─ pages/            # Route pages (Home, Agence, Projects)
 ├─ App.jsx           # Main app component with routes
 └─ main.jsx          # Entry point
```

---

## 💻 Installation

1. **Clone the repository**

```bash
git clone https://github.com/Neaz-mq/B07.git
cd B07
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm run dev
```

Your app will be running at `http://localhost:5173` (or as indicated by Vite).

---

## ⚡ Build for Production

To create a production-ready build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 📌 Scripts

- `npm run dev` – Start the development server.
- `npm run build` – Build the app for production.
- `npm run preview` – Preview the production build.
- `npm run lint` – Run ESLint for code quality checks.

---

## ✨ Usage

1. Open the website in your browser.
2. Navigate between pages using the Navbar.
3. Observe animations powered by **GSAP**.
4. The Navbar color changes dynamically based on the current page.
5. Enjoy smooth transitions, responsive layouts, and interactive elements.

---

## 🤝 Contributing

Feel free to contribute by opening issues or submitting pull requests.  
Make sure to follow the **coding style** (Tailwind + React) and **run ESLint** before committing.

---

> Built with ❤️ using React, GSAP, and Tailwind CSS
