<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Community Through Donation</title>
    <script src="https://unpkg.com/react/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #FFFFFF;
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><text x="50%" y="50%" text-anchor="middle" stroke="#36985B" stroke-width="2px" dy=".3em" font-size="200">Life Jacket In An Instant</text></svg>');
        }
        .gradient-background {
            background: linear-gradient(90deg, rgba(54, 152, 91, 0.4) 0%, rgba(255, 255, 255, 1) 100%);
        }
    </style>
</head>
<body>
    <div id="app"></div>

    <script type="text/babel">
        function App() {
            return (
                <div className="min-h-screen gradient-background">
                    <nav className="py-5">
                        <div className="container mx-auto flex justify-between items-center">
                            <div className="text-3xl font-bold text-gray-800">Life Jacket In An Instant</div>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-600 hover:text-gray-800">Locations</a>
                                <a href="#" className="text-gray-600 hover:text-gray-800">Analytics</a>
                                <a href="#" className="text-gray-600 hover:text-gray-800">Pricing</a>
                                <a href="#" className="text-blue-600 hover:text-blue-800">Sign in</a>
                            </div>
                        </div>
                    </nav>
                    <div className="container mx-auto flex justify-between items-start my-10">
                        <div className="w-1/2">
                            <h1 className="text-6xl font-bold text-gray-800 leading-none">
                                Community<br />
                                <span className="text-blue-600">Through</span><br />
                                Donation
                            </h1>
                            <p className="mt-6 text-gray-600 text-lg">
                                Live Jacket In A Minute is a platform built to encourage supporting your local community.<br />
                                We use image recognition and real world data to quickly process your<br />
                                planned donations. We then recommend a list of non-profits that could<br />
                                best benefit from the goods you currently have.
                            </p>
                            <div className="mt-6">
                                <button className="text-white px-6 py-2 rounded-md mr-4" style={{ backgroundColor: '#36985B' }}>Start now ></button>
                                <button className="bg-transparent text-blue-600 px-6 py-2 rounded-md border border-blue-600 hover:bg-blue-50">Demo now ></button>
                            </div>
                        </div>
                        <div className="w-1/2 flex justify-end">
                            <img src="https://placehold.co/500x800" alt="Mobile app demo image with map and donation progress interface" style={{ maxWidth: '50%' }} />
                        </div>
                    </div>
                    <footer className="container mx-auto text-center text-gray-600 my-10">
                        Made for APP4Athens <i className="fas fa-heart text-red-600"></i>
                    </footer>
                </div>
            );
        }

        ReactDOM.render(<App />, document.getElementById('app'));
    </script>
</body>
</html>