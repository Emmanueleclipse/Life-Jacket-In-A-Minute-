<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Donation Thank You Modal</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/react/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
        }
    </style>
</head>
<body>
    <div id="app"></div>

    <script type="text/babel">
        function App() {
            return (
                <div className="flex items-center justify-center h-screen bg-gray-100">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{width: '400px'}}>
                        <div className="bg-[#36985B] p-6 flex items-center justify-center">
                            <div className="bg-white p-2 rounded-full">
                                <svg className="w-16 h-16 text-[#36985B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="p-6">
                            <h1 className="text-2xl font-semibold mb-4">Thank you for your donation.</h1>
                            <p>Your support helps us to further our mission. Your donation is invaluable to us, thanks again!</p>
                        </div>
                        <div className="absolute top-0 right-0 mt-4 mr-4">
                            <button className="text-gray-400 hover:text-gray-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

        ReactDOM.render(<App />, document.getElementById('app'));
    </script>
</body>
</html>