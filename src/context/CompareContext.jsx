import { createContext, useState, useContext } from 'react';

const CompareContext = createContext();

export function CompareProvider({ children }) {
    const [compareItems, setCompareItems] = useState([]);

    const toggleCompare = (product) => {
        setCompareItems((prev) => {
            const isAlreadySelected = prev.find((item) => item.id === product.id);
            if (isAlreadySelected) {
                return prev.filter((item) => item.id !== product.id);
            }
            if (prev.length < 2) {
                return [...prev, product];
            }
            // If already 2 selected, we could either do nothing or replace the last one.
            // Requirement says "Allow selecting up to 2", so I'll just prevent more.
            return prev;
        });
    };

    const clearCompare = () => {
        setCompareItems([]);
    };

    const isCompared = (productId) => {
        return compareItems.some((item) => item.id === productId);
    };

    return (
        <CompareContext.Provider value={{ compareItems, toggleCompare, clearCompare, isCompared }}>
            {children}
        </CompareContext.Provider>
    );
}

export function useCompare() {
    const context = useContext(CompareContext);
    if (!context) {
        throw new Error('useCompare must be used within a CompareProvider');
    }
    return context;
}
