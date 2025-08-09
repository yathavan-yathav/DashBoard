import { useAppContext } from "../context/AppContext";

export default function Footer() {
  const { footer } = useAppContext();
  return (
    <footer className="bg-gray-900 text-white p-4 text-center">
      <p>Email: {footer.email}</p>
      <p>Phone: {footer.phone}</p>
      <p>Address: {footer.address}</p>
    </footer>
  );
}
