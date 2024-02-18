import { Link } from "react-router-dom";
import { useThemeContext } from "../contexts";

const Navbar = () => {
  const { theme, setTheme } = useThemeContext();

  return (
    <div
      className={`flex gap-10 py-5 justify-center ${
        theme == "dark" && "bg-red-600"
      }`}
    >
      <Link className={`text-2xl font-bold `} to="/">
        Home
      </Link>
      <Link className="text-2xl font-bold" to="/about">
        About
      </Link>
      <button onClick={() => setTheme("dark")}>Dark</button>
      <button onClick={() => setTheme("light")}>light</button>
    </div>
  );
};

export default Navbar;
