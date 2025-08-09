import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import { AppProvider } from "./context/AppContext";

export default function App() {
  return (
    <AppProvider>
      <header />
      <Navbar/>
      <Dashboard />
      <footer />
    </AppProvider>
  );
}
