import { useCompare } from '../context/CompareContext';

function CompareModal({ isOpen, onClose }) {
    const { compareItems, clearCompare } = useCompare();

    if (!isOpen || compareItems.length === 0) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal compare-modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal__header">
                    <h2 className="modal__title">Product Comparison</h2>
                    <button className="modal__close" onClick={onClose}>✕</button>
                </div>

                <div className="modal__body">
                    <div className="compare-table-container">
                        <table className="compare-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    {compareItems.map(item => (
                                        <th key={item.id} className="compare-table__product-header">
                                            <div className="compare-table__image">
                                                <img src={item.image} alt={item.name} />
                                            </div>
                                            <div className="compare-table__product-name">{item.name}</div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Brand</td>
                                    {compareItems.map(item => <td key={item.id}>{item.brand}</td>)}
                                </tr>
                                <tr>
                                    <td>Price</td>
                                    {compareItems.map(item => <td key={item.id} className="compare-table__price">${item.price}</td>)}
                                </tr>
                                <tr>
                                    <td>Category</td>
                                    {compareItems.map(item => <td key={item.id}>{item.category}</td>)}
                                </tr>
                                <tr>
                                    <td>RAM</td>
                                    {compareItems.map(item => <td key={item.id}>{item.ram}</td>)}
                                </tr>
                                <tr>
                                    <td>Storage</td>
                                    {compareItems.map(item => <td key={item.id}>{item.storage}</td>)}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="compare-modal__footer">
                    <button
                        className="compare-modal__clear-btn"
                        onClick={() => {
                            clearCompare();
                            onClose();
                        }}
                    >
                        Clear Selection
                    </button>
                    <button className="compare-modal__close-btn" onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CompareModal;
