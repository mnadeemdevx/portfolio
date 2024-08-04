import { Home, About, Header } from "./components";

import "./App.css";

function App() {
    return (
        <>
            <Header />
            <main className="main">
                <Home />
                <About />
            </main>
        </>
    );
}

export default App;
