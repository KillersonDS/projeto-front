import { createContext, useContext, useState, ReactNode } from 'react';

interface PopupContextType {
    isPopupOpen: boolean;
    togglePopup: () => void;
}

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const PopupProvider = ({ children }: { children: ReactNode }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen((prev) => !prev);
    };

    return (
        <PopupContext.Provider value={{ isPopupOpen, togglePopup }}>
            {children}
        </PopupContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const usePopup = () => {
    const context = useContext(PopupContext);
    if (!context) {
        throw new Error("usePopup deve ser usado dentro de um PopupProvider");
    }
    return context;
};
