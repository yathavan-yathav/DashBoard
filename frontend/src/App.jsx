import { AppProvider } from './context/AppContext'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard';
function App() {
 

  return (
    <AppProvider>
      <Header />
      <Navbar />
      <Dashboard />
      <Footer />
      </AppProvider>
  );    
}

export default App
