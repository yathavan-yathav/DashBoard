import { useAppContext } from "../context/AppContext";


export default function Header() {
  const { header } = useAppContext();
  return (
    <header className="flex flex-row items-center p-4 bg-gray-700 text-white h-16 ">
      <h1 className="text-2xl font-bold pt-10">{header.title}</h1>
      {header.image && <img src={header.image} alt="Header" className="mt-2 w-10 h-10 object-cover rounded-full" />}
    </header>
  );
}
