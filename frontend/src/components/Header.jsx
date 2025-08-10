import { useAppContext } from "../context/AppContext";

export default function Header() {
  const { header } = useAppContext();
  return (
    <header className="flex flex-col items-center p-4 bg-blue-500 text-white">
      <h1 className="text-3xl font-bold">My Picture</h1>
      {header.image && <img src={header.image} alt="Header" className="mt-2 w-40 h-40 object-cover rounded-full" />}
    </header>
  );
}
