import { useAppContext } from "../context/AppContext";

export default function Footer() {
  const { footer } = useAppContext();
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-white py-8 text-center">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-3">
      <p>Email: {footer.email}</p>
      <p>Phone: {footer.phone}</p>
      <p>Address: {footer.address}</p>
      </div>
    </footer>
  );
}
