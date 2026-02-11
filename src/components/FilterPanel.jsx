import { useState } from 'react';
import { brands, ramOptions, storageOptions, categories } from '../data/products';

function FilterPanel({ filters, onFilterChange }) {
    const [expandedSections, setExpandedSections] = useState({
        availability: true,
        rating: true,
        price: true,
        category: true,
        brand: true,
        ram: false,
        storage: false
    });

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const handlePriceChange = (e) => {
        onFilterChange({ ...filters, maxPrice: parseInt(e.target.value) });
    };

    const handleCategoryChange = (category) => {
        const selectedCategories = (filters.categories || []).includes(category)
            ? filters.categories.filter((c) => c !== category)
            : [...(filters.categories || []), category];
        onFilterChange({ ...filters, categories: selectedCategories });
    };

    const handleBrandChange = (brand) => {
        const selectedBrands = (filters.brands || []).includes(brand)
            ? filters.brands.filter((b) => b !== brand)
            : [...(filters.brands || []), brand];
        onFilterChange({ ...filters, brands: selectedBrands });
    };

    const handleRamChange = (ram) => {
        const selectedRam = (filters.ram || []).includes(ram)
            ? filters.ram.filter((r) => r !== ram)
            : [...(filters.ram || []), ram];
        onFilterChange({ ...filters, ram: selectedRam });
    };

    const handleStorageChange = (storage) => {
        const selectedStorage = (filters.storage || []).includes(storage)
            ? filters.storage.filter((s) => s !== storage)
            : [...(filters.storage || []), storage];
        onFilterChange({ ...filters, storage: selectedStorage });
    };

    const handleStockToggle = () => {
        onFilterChange({ ...filters, inStockOnly: !filters.inStockOnly });
    };

    const handleRatingChange = (rating) => {
        const newRating = filters.minRating === rating ? 0 : rating;
        onFilterChange({ ...filters, minRating: newRating });
    };

    const FilterHeader = ({ label, section, isExpanded }) => (
        <div className="filter-section__header" onClick={() => toggleSection(section)}>
            <label className="filter-section__label">{label}</label>
            <span className={`filter-section__icon ${isExpanded ? 'filter-section__icon--expanded' : ''}`}>
                ⌄
            </span>
        </div>
    );

    return (
        <aside className="filter-panel">
            <div className="filter-panel__header">
                <h2 className="filter-panel__title">Filters</h2>
                <button
                    className="filter-panel__clear-btn"
                    onClick={() => onFilterChange({
                        maxPrice: 2000,
                        brands: [],
                        ram: [],
                        storage: [],
                        categories: [],
                        inStockOnly: false,
                        minRating: 0
                    })}
                >
                    Clear All
                </button>
            </div>

            {/* Availability */}
            <div className="filter-section">
                <FilterHeader label="Availability" section="availability" isExpanded={expandedSections.availability} />
                <div className={`filter-section__content ${expandedSections.availability ? 'filter-section__content--expanded' : ''}`}>
                    <div className="checkbox-list">
                        <label className="checkbox-item">
                            <input
                                type="checkbox"
                                className="checkbox-item__input"
                                checked={filters.inStockOnly}
                                onChange={handleStockToggle}
                            />
                            <span className="checkbox-item__label">In Stock Only</span>
                        </label>
                    </div>
                </div>
            </div>

            {/* Customer Rating */}
            <div className="filter-section">
                <FilterHeader label="Customer Rating" section="rating" isExpanded={expandedSections.rating} />
                <div className={`filter-section__content ${expandedSections.rating ? 'filter-section__content--expanded' : ''}`}>
                    <div className="checkbox-list">
                        {[4, 3].map((star) => (
                            <label key={star} className="checkbox-item">
                                <input
                                    type="checkbox"
                                    className="checkbox-item__input"
                                    checked={filters.minRating === star}
                                    onChange={() => handleRatingChange(star)}
                                />
                                <span className="checkbox-item__label">{star} Stars & Up</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>

            {/* Price Range */}
            <div className="filter-section">
                <FilterHeader label="Price Range" section="price" isExpanded={expandedSections.price} />
                <div className={`filter-section__content ${expandedSections.price ? 'filter-section__content--expanded' : ''}`}>
                    <div className="price-slider">
                        <input
                            type="range"
                            className="price-slider__input"
                            min="0"
                            max="2000"
                            value={filters.maxPrice}
                            onChange={handlePriceChange}
                        />
                        <div className="price-slider__values">
                            <span>$0</span>
                            <span>${filters.maxPrice}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Categories */}
            <div className="filter-section">
                <FilterHeader label="Category" section="category" isExpanded={expandedSections.category} />
                <div className={`filter-section__content ${expandedSections.category ? 'filter-section__content--expanded' : ''}`}>
                    <div className="checkbox-list">
                        {categories.map((category, index) => (
                            <label key={index} className="checkbox-item">
                                <input
                                    type="checkbox"
                                    className="checkbox-item__input"
                                    checked={(filters.categories || []).includes(category)}
                                    onChange={() => handleCategoryChange(category)}
                                />
                                <span className="checkbox-item__label">{category}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>

            {/* Brand */}
            <div className="filter-section">
                <FilterHeader label="Brand" section="brand" isExpanded={expandedSections.brand} />
                <div className={`filter-section__content ${expandedSections.brand ? 'filter-section__content--expanded' : ''}`}>
                    <div className="checkbox-list">
                        {brands.map((brand, index) => (
                            <label key={index} className="checkbox-item">
                                <input
                                    type="checkbox"
                                    className="checkbox-item__input"
                                    checked={(filters.brands || []).includes(brand)}
                                    onChange={() => handleBrandChange(brand)}
                                />
                                <span className="checkbox-item__label">{brand}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>

            {/* RAM */}
            <div className="filter-section">
                <FilterHeader label="RAM" section="ram" isExpanded={expandedSections.ram} />
                <div className={`filter-section__content ${expandedSections.ram ? 'filter-section__content--expanded' : ''}`}>
                    <div className="checkbox-list">
                        {ramOptions.map((ram, index) => (
                            <label key={index} className="checkbox-item">
                                <input
                                    type="checkbox"
                                    className="checkbox-item__input"
                                    checked={(filters.ram || []).includes(ram)}
                                    onChange={() => handleRamChange(ram)}
                                />
                                <span className="checkbox-item__label">{ram}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>

            {/* Internal Storage */}
            <div className="filter-section">
                <FilterHeader label="Internal Storage" section="storage" isExpanded={expandedSections.storage} />
                <div className={`filter-section__content ${expandedSections.storage ? 'filter-section__content--expanded' : ''}`}>
                    <div className="checkbox-list">
                        {storageOptions.map((storage, index) => (
                            <label key={index} className="checkbox-item">
                                <input
                                    type="checkbox"
                                    className="checkbox-item__input"
                                    checked={(filters.storage || []).includes(storage)}
                                    onChange={() => handleStorageChange(storage)}
                                />
                                <span className="checkbox-item__label">{storage}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default FilterPanel;
