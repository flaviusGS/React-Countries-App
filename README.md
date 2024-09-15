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

## 🌗 Theme Persistence

The app supports light and dark themes, and users can toggle between them using the theme switcher. The theme preference is stored in **localStorage**, so when users return to the app, their last chosen theme is automatically applied.

### How it works:

- On initial load, the app checks **localStorage** for the user's theme preference.
- If no preference is found, it defaults to the system's preferred theme (light/dark).
- The selected theme is saved to **localStorage** and persists across sessions.

## 🔍 API Usage

This app uses the RestCountries API to fetch detailed information about countries.

### Example API Response:

   ```json
   {
    "name": {
        "common": "Italy",
        "official": "Italian Republic"
    },
    "capital": ["Rome"],
    "region": "Europe",
    "population": 59554023,
    "flags": {
        "svg": "https://flagcdn.com/it.svg"
    },
    "latlng": [41.87, 12.57],
    "currencies": {
        "EUR": {
            "name": "Euro",
            "symbol": "€"
        }
    },
    "languages": {
        "ita": "Italian"
    },
    "subregion": "Southern Europe",
    "maps": {
        "googleMaps": "https://goo.gl/maps/ZiQpGgUPm8FoHhdL6"
        }
    }
   ```

## 🗺️ Country Map with Leaflet

This project is open-source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute, feel free to create an issue or open a pull request. Be sure to follow the contribution guidelines (if any) for submitting changes.

## 📧 Contact

Feel free to reach out to me via:

- GitHub: flaviusGS
- Email: flaviusstasac@gmail.com


