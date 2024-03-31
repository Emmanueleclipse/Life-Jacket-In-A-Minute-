<html>
<head>
    <title>Donation Center Dashboard</title>
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
            color: #36985B;
        }
        .custom-green-bg {
            background-color: #36985B;
        }
        /* Custom toggle switch */
        .toggle-switch {
            position: relative;
            display: inline-block;
            width: 50px;
            height: 24px;
        }
        .toggle-switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }
        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            transition: .4s;
            border-radius: 24px;
        }
        .slider:before {
            position: absolute;
            content: "";
            height: 20px;
            width: 20px;
            left: 2px;
            bottom: 2px;
            background-color: white;
            transition: .4s;
            border-radius: 50%;
        }
        input:checked + .slider {
            background-color: #36985B;
        }
        input:focus + .slider {
            box-shadow: 0 0 1px #36985B;
        }
        input:checked + .slider:before {
            transform: translateX(26px);
        }
        .hover:text-custom-green:hover {
            color: #36985B;
        }
        .cursor-pointer {
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div id="app"></div>

    <script type="text/babel">
        function App() {
            // Dummy functions to simulate click behavior
            const handlePreviousClick = () => {
                console.log('Previous clicked');
            };

            const handleNextClick = () => {
                console.log('Next clicked');
            };

            return (
                <div className="bg-gray-100 h-screen">
                    <div className="flex flex-col md:flex-row">
                        <div className="bg-white p-6 w-full md:w-1/3">
                            <header className="flex justify-between items-center pb-6">
                                <div className="text-3xl font-bold custom-green">LJII</div>
                                <button className="custom-green-bg text-white px-6 py-2 rounded-full">Scan Items</button>
                            </header>
                            <div className="mt-10">
                                <h2 className="text-2xl font-bold mb-4">Recommended Centers</h2>
                                <div className="flex items-center justify-between mb-6">
                                    <button className="text-gray-600 hover:text-custom-green cursor-pointer" onClick={handlePreviousClick}>previous</button>
                                    <div className="text-center">
                                        <div className="mb-2">8 of 10</div>
                                        <div className="text-sm bg-gray-200 inline-block py-1 px-3 rounded-full">Donation Center</div>
                                    </div>
                                    <button className="text-gray-600 hover:text-custom-green cursor-pointer" onClick={handleNextClick}>next</button>
                                </div>
                                <div className="text-xl font-semibold mb-2">Goodwill Store and Donati</div>
                                <div className="text-gray-600 mb-6">3663 Rosecrans St, San Di</div>
                                <h3 className="text-lg font-semibold mb-4">Resources Needed</h3>
                                <div className="grid grid-cols-3 gap-4 mb-6">
                                    <div className="bg-white p-4 rounded-lg shadow text-center">
                                        <i className="fas fa-bed custom-green text-3xl mb-2"></i>
                                        <div className="text-gray-600">57 bedding needed</div>
                                        <div className="text-xs text-gray-500">5 miles</div>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow text-center">
                                        <i className="fas fa-couch custom-green text-3xl mb-2"></i>
                                        <div className="text-gray-600">56 pillow needed</div>
                                        <div className="text-xs text-gray-500">5 miles</div>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow text-center">
                                        <i className="fas fa-shower custom-green text-3xl mb-2"></i>
                                        <div className="text-gray-600">42 shampoo needed</div>
                                        <div className="text-xs text-gray-500">5 miles</div>
                                    </div>
                                </div>
                                <button className="custom-green-bg text-white w-full py-3 rounded-full">Confirm Donation</button>
                            </div>
                        </div>
                        <div className="w-full md:w-2/3">
                            <div className="relative h-full">
                                <img src="https://placehold.co/600x400" alt="Map showing various donation centers" className="absolute inset-0 w-full h-full object-cover" />
                                <div className="absolute bottom-0 left-0 p-6 bg-white">
                                    <h4 className="text-lg font-semibold mb-2">Filter Views</h4>
                                    <div className="space-y-2">
                                        <div className="flex items-center">
                                            <label className="toggle-switch">
                                                <input type="checkbox" />
                                                <span className="slider"></span>
                                            </label>
                                            <label htmlFor="homeless-shelter" className="text-gray-600 ml-2">Homeless Shelter</label>
                                        </div>
                                        <div className="flex items-center">
                                            <label className="toggle-switch">
                                                <input type="checkbox" />
                                                <span className="slider"></span>
                                            </label>
                                            <label htmlFor="food-bank" className="text-gray-600 ml-2">Food Bank</label>
                                        </div>
                                        <div className="flex items-center">
                                            <label className="toggle-switch">
                                                <input type="checkbox" />
                                                <span className="slider"></span>
                                            </label>
                                            <label htmlFor="mobile-pantry" className="text-gray-600 ml-2">Mobile Pantry</label>
                                        </div>
                                        <div className="flex items-center">
                                            <label className="toggle-switch">
                                                <input type="checkbox" />
                                                <span className="slider"></span>
                                            </label>
                                            <label htmlFor="donation-center" className="text-gray-600 ml-2">Donation Center</label>
                                        </div>
                                    </div>
                                </div>
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