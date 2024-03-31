<html>
<head>
    <title>Donation Page</title>
    <script src="https://unpkg.com/react/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
    <style>
        body {
            font-family: 'Inter', sans-serif;
        }
        .custom-green {
            background-color: #36985B;
        }
        .custom-green:hover {
            background-color: #2b7a46;
        }
    </style>
</head>
<body>
    <div id="app"></div>

    <script type="text/babel">
        function App() {
            const [items, setItems] = React.useState([
                { name: 'Blanket', count: 3, description: '', showDescriptionInput: false },
                { name: 'Shoe',    count: 1, description: '', showDescriptionInput: false },
                { name: 'Tampon', count: 1, description: '', showDescriptionInput: false }
            ]);
            const [inputValue, setInputValue] = React.useState('');
            const [email, setEmail] = React.useState('');

            const handleInputChange = (event) => {
                setInputValue(event.target.value);
            };

            const handleEmailChange = (event) => {
                setEmail(event.target.value);
            };

            const handleDescriptionChange = (itemName, description) => {
                const updatedItems = items.map(item => {
                    if (item.name === itemName) {
                        return { ...item, description: description };
                    }
                    return item;
                });
                setItems(updatedItems);
            };

            const toggleDescriptionInput = (itemName) => {
                const updatedItems = items.map(item => {
                    if (item.name === itemName) {
                        return { ...item, showDescriptionInput: !item.showDescriptionInput };
                    }
                    return item;
                });
                setItems(updatedItems);
            };

            const deleteItem = (itemName) => {
                const updatedItems = items.filter(item => item.name !== itemName);
                setItems(updatedItems);
            };

            const addItem = (event) => {
                event.preventDefault();
                if (inputValue.trim() !== '' && !items.some(item => item.name.toLowerCase() === inputValue.toLowerCase())) {
                    const newItems = [...items, { name: inputValue, count: 1, description: '', showDescriptionInput: false }];
                    setItems(newItems);
                    setInputValue('');
                }
            };

            return (
                <div className="bg-gray-200 font-sans leading-normal tracking-normal">
                    <div className="container mx-auto p-4">
                        <header className="flex justify-between items-center py-2">
                            <h1 className="text-2xl font-bold text-gray-700">LJIAM</h1>
                            <button className="custom-green text-white font-bold py-2 px-4 rounded-full">
                                Scan Items
                            </button>
                        </header>

                        <div className="flex justify-center items-center h-screen">
                            <div className="bg-white rounded-lg shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
                                <span className="block w-full text-xl uppercase font-bold mb-4">Scan to donate</span>
                                <div className="mb-4">
                                    <img src="https://placehold.co/300x200" alt="Person holding a blanket with a scanning interface overlay" className="w-full h-auto rounded-lg"/>
                                    <p className="text-green-500 text-xs mt-2">Blanket scanned</p>
                                </div>
                                <div className="mb-6">
                                    <span className="block w-full text-xl uppercase font-bold mb-4">Items</span>
                                    <form onSubmit={addItem}>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 mb-3 text-gray-700 border rounded-lg focus:outline-none"
                                            value={inputValue}
                                            onChange={handleInputChange}
                                            placeholder="Type an item name"
                                        />
                                    </form>
                                    {items.map((item, index) => (
                                        <div key={index} className="mb-2">
                                            <div className="flex justify-between items-center">
                                                <span className="ml-2 cursor-pointer" onClick={() => toggleDescriptionInput(item.name)}>{item.name}</span>
                                                <span>x{item.count}</span>
                                                <button className="text-red-500 hover:text-red-700" onClick={() => deleteItem(item.name)}>
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </div>
                                            {item.showDescriptionInput && (
                                                <input
                                                    type="text"
                                                    className="w-full px-3 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none"
                                                    value={item.description}
                                                    onChange={(e) => handleDescriptionChange(item.name, e.target.value)}
                                                    placeholder="Enter description"
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <input
                                    type="email"
                                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none mb-4"
                                    value={email}
                                    onChange={handleEmailChange}
                                    placeholder="Enter your email"
                                />
                                <button className="w-full custom-green text-white font-bold py-2 px-4 rounded-full" onClick={addItem}>
                                    Confirm Items
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        ReactDOM.render(<App />, document.getElementById('app'));
    </script>
</body>
</html>