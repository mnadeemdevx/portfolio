import { Home, About, Header, Skills } from "./components";

import "./App.css";

function App() {
    return (
        <>
            <Header />
            <main className="main">
                <Home />
                <About />
                <Skills />
            </main>
        </>
    );
}

export default App;
