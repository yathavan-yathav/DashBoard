import { useAppContext } from "../../../frontend/src/context/AppContext";

export default function Navbar() {
  const { navbar } = useAppContext();
  return (
    <nav className="relative top-0 left-0 h-6 w-full bg-gray-800 text-white flex flex-row items-start p-4 space-y-4 z-40">
      {navbar.map((link, idx) => (
        <a 
        key={idx} 
        href={link.url}
        className="bg-gray-800 hover:bg-gray-900 hover:text-gray-500 rounded-md py-3 px-4 text-center w-full transition-colors duration-300">{link.label}</a>
      ))}
    </nav>
  );
}
