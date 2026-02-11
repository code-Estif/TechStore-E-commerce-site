import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import FilterPanel from '../components/FilterPanel';
import ProductGrid from '../components/ProductGrid';
import ProductModal from '../components/ProductModal';
import CompareModal from '../components/CompareModal';
import products from '../data/products';
import { useCompare } from '../context/CompareContext';

// localStorage key for filters
const FILTERS_STORAGE_KEY = 'techstore_filters';

// Default filter state
const defaultFilters = {
    maxPrice: 2000,
    brands: [],
    ram: [],
    storage: [],
    categories: [],
    inStockOnly: false,
    minRating: 0,
};

// Load filters from localStorage
const loadFiltersFromStorage = () => {
    try {
        const savedFilters = localStorage.getItem(FILTERS_STORAGE_KEY);
        if (savedFilters) {
            const parsed = JSON.parse(savedFilters);
            return {
                maxPrice: typeof parsed.maxPrice === 'number' ? parsed.maxPrice : defaultFilters.maxPrice,
                brands: Array.isArray(parsed.brands) ? parsed.brands : defaultFilters.brands,
                ram: Array.isArray(parsed.ram) ? parsed.ram : defaultFilters.ram,
                storage: Array.isArray(parsed.storage) ? parsed.storage : defaultFilters.storage,
                categories: Array.isArray(parsed.categories) ? parsed.categories : defaultFilters.categories,
                inStockOnly: typeof parsed.inStockOnly === 'boolean' ? parsed.inStockOnly : defaultFilters.inStockOnly,
                minRating: typeof parsed.minRating === 'number' ? parsed.minRating : defaultFilters.minRating,
            };
        }
        return defaultFilters;
    } catch (error) {
        console.error('Error loading filters from localStorage:', error);
        return defaultFilters;
    }
};

// Save filters to localStorage
const saveFiltersToStorage = (filters) => {
    try {
        localStorage.setItem(FILTERS_STORAGE_KEY, JSON.stringify(filters));
    } catch (error) {
        console.error('Error saving filters to localStorage:', error);
    }
};

function ProductsPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
    const [filters, setFilters] = useState(() => loadFiltersFromStorage());
    const [sortBy, setSortBy] = useState('price-asc');
    const [isLoading, setIsLoading] = useState(true);
    const { compareItems } = useCompare();

    // Handle initial loading and filter changes
    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 300); // Shorter duration for snappier feel
        return () => clearTimeout(timer);
    }, [filters, sortBy]);

    // Handle initial category from URL query param
    useEffect(() => {
        const category = searchParams.get('category');
        if (category) {
            setFilters(prev => ({
                ...prev,
                categories: [category]
            }));
            // Clear the param after applying
            setSearchParams({});
        }
    }, [searchParams, setSearchParams]);

    // Save filters to localStorage whenever they change
    useEffect(() => {
        saveFiltersToStorage(filters);
    }, [filters]);

    // Filter and Sort products based on current state
    const processedProducts = useMemo(() => {
        let result = products.filter((product) => {
            if (product.price > filters.maxPrice) return false;
            if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) return false;
            if (filters.ram.length > 0 && !filters.ram.includes(product.ram)) return false;
            if (filters.storage.length > 0 && !filters.storage.includes(product.storage)) return false;
            if (filters.categories.length > 0 && !filters.categories.includes(product.category)) return false;
            if (filters.inStockOnly && !product.inStock) return false;
            if (filters.minRating > 0 && product.rating < filters.minRating) return false;
            return true;
        });

        // Apply Sorting
        return [...result].sort((a, b) => {
            if (sortBy === 'price-asc') return a.price - b.price;
            if (sortBy === 'price-desc') return b.price - a.price;
            if (sortBy === 'rating-desc') return b.rating - a.rating;
            return 0;
        });
    }, [filters, sortBy]);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    const getTitle = () => {
        if (filters.categories.length === 1) return filters.categories[0];
        if (filters.categories.length > 1) return 'Tech Catalog';
        return 'All Products';
    };

    return (
        <>
            <main className="main-content">
                <FilterPanel filters={filters} onFilterChange={handleFilterChange} />
                <div className="product-view-container">
                    <div className="product-view__header">
                        <div className="product-view__title-group">
                            <h1 className="product-grid__title">{isLoading ? 'Searching...' : getTitle()}</h1>
                            <span className="product-grid__count">
                                {isLoading ? 'Finding best gear...' : `${processedProducts.length} products`}
                            </span>
                        </div>
                        <div className="product-view__sort">
                            <label htmlFor="sort" className="product-view__sort-label">Sort by:</label>
                            <select
                                id="sort"
                                className="product-view__sort-select"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                disabled={isLoading}
                            >
                                <option value="price-asc">Price: Low to High</option>
                                <option value="price-desc">Price: High to Low</option>
                                <option value="rating-desc">Rating: High to Low</option>
                            </select>
                        </div>
                    </div>

                    {compareItems.length === 2 && !isLoading && (
                        <div className="compare-bar">
                            <span className="compare-bar__text">2 products selected for comparison</span>
                            <button
                                className="compare-bar__btn"
                                onClick={() => setIsCompareModalOpen(true)}
                            >
                                Compare Now
                            </button>
                        </div>
                    )}
                    <ProductGrid
                        products={processedProducts}
                        onProductClick={handleProductClick}
                        hideHeader={true}
                        loading={isLoading}
                    />
                </div>
            </main>
            {selectedProduct && (
                <ProductModal product={selectedProduct} onClose={handleCloseModal} />
            )}
            <CompareModal
                isOpen={isCompareModalOpen}
                onClose={() => setIsCompareModalOpen(false)}
            />
        </>
    );
}

export default ProductsPage;
