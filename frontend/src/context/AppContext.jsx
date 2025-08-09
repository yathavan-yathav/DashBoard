import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [header, setHeader] = useState({title: "Webside", image:""});
    const [navbar, setNavbar] = useState([
        { label: "Home", url: "#"},
        { label: "About", url: "#"},
        { label: "Contact", url: "#"},
]);
    const [footer, setFooter] = useState({
    email: "yathav@gmail.com",
    phone: "+94774518651",
    address: "Colombo, Sri Lanka"   
    });

    return (
        <AppContext.Provider value={{ header, setHeader, navbar, setNavbar, footer, setFooter }}
        >
            {children}  
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);