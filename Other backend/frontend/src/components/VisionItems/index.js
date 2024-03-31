import React, { useState } from 'react';
import './style.scss'
const MaxItems = 10;

function VisionItems() {
    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [showDescription, setShowDescription] = useState({});

    const addItem = () => {
        if (items.length < MaxItems && itemName.trim() !== '') {
            setItems([...items, { name: itemName, description: itemDescription }]);
            setItemName('');
            setItemDescription('');
        }
    };

    const deleteItem = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    };

    const toggleDescription = (index) => {
        setShowDescription({ ...showDescription, [index]: !showDescription[index] });
    };

    return (
        <div className="container">
            <div className="input-group">
                <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} placeholder="Item Name" />
                <input type="text" value={itemDescription} onChange={(e) => setItemDescription(e.target.value)} placeholder="Item Description" />
                <button className="add-button" onClick={addItem}>Add Item</button>
                
            </div>
            <ul className="item-list">
                {items.map((item, index) => (
                    <li key={index} className="item">
                        <div className="item-name" onClick={() => toggleDescription(index)}>{item.name}</div>
                        <div className="item-description">{item.description}</div>
                        <button className="delete-button" onClick={() => deleteItem(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default VisionItems;
