import { useAppContext } from "../context/AppContext";

export default function Navbar() {
  const { navbar } = useAppContext();
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-center space-x-6">
      {navbar.map((link, idx) => (
        <a key={idx} href={link.url} className="hover:text-yellow-300">{link.label}</a>
      ))}
    </nav>
  );
}
