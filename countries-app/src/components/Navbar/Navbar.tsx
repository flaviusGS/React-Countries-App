type NavbarProps = {
  toggleTheme: () => void;
  currentTheme: string;
};

export const Navbar = ({ toggleTheme, currentTheme }: NavbarProps) => {
  return (
    <nav className="bg-gray-200 dark:bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          Countries App
        </h1>
        <button
          className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded"
          onClick={toggleTheme}
        >
          {currentTheme === "light"
            ? "Switch to Dark Mode"
            : "Switch to Light Mode"}
        </button>
      </div>
    </nav>
  );
};
