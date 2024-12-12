import Navigation from "./components/Navigation";
import Products from "./components/Products";
import Recommended from "./components/Recommended";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <div>
                    <Navigation />
                    <Recommended />
                    <Products />
                </div>
            </div>
        </>
    );
}

export default App;
