# 🌍 React Countries App

A modern web application built with **React**, **Vite**, and **Tailwind CSS** that allows users to explore countries from around the world. This app integrates with the [RestCountries API](https://restcountries.com) to fetch and display detailed information about each country, including flags, population, region, and capital city. The app also includes features such as dark mode, country search, and a persistent theme preference using **localStorage**.

## ✨ Features

- **Explore Countries**: Browse through a list of countries from all over the world with details such as population, capital, and region.
- **Dark Mode Toggle**: Users can switch between light and dark modes. The selected theme is saved to `localStorage` so that it persists on future visits.
- **Responsive Design**: Fully responsive layout, optimized for mobile, tablet, and desktop viewing.
- **Country Details Page**: View detailed information about a specific country, including its location on a map (using **Leaflet**).
- **Search Functionality**: Easily search for countries by name using the search bar.
- **Filter by Region**: Filter countries by region (e.g., Africa, Americas, Europe).
- **API Integration**: Data is fetched from the RestCountries API, providing real-time country data.

## 🛠️ Technologies Used

- **React**: A popular JavaScript library for building user interfaces.
- **Vite**: A fast development build tool that offers lightning-fast Hot Module Replacement (HMR) and optimized builds.
- **Tailwind CSS**: A utility-first CSS framework for quickly building custom designs.
- **React Router**: For client-side routing to handle navigation between pages.
- **RestCountries API**: A free API to get information about countries.
- **Leaflet**: An open-source JavaScript library for mobile-friendly interactive maps.
- **LocalStorage**: For persisting the user's theme preference (light/dark mode) across sessions.

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v12.x or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/flaviusGS/Countries-App.git
   cd countries-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```
  

3. **Run the development server**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser and navigate to http://localhost:5173.**

### Build for Production

To create an optimized build for production, run:

   ```bash
   npm run build
   # or
   yarn build
   ```

This will generate the production-ready files in the dist folder

## 🔧 Project Structure

   ```bash
   ├── public/
   ├── src/
   │   ├── api/              # API endpoints and services
   │   ├── components/       # Reusable components (Navbar, Footer, CountryCard, etc.)
   │   ├── hooks/            # Custom React hooks (e.g., useGetCountries)
   │   ├── pages/            # Different pages (Home, CountryDetails)
   │   ├── App.tsx           # Main app component
   │   ├── main.tsx          # React entry point
   │   └── styles/           # Custom styles if any
   ├── README.md             # This file
   ├── index.html            # HTML template
   └── package.json          # Project configuration and dependencies
   ```