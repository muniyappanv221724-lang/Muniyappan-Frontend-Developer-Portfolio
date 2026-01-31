import { useState } from "react";

import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Service from "./Services/service";

import Frontend from "./Services/Frontend";
import Backend from "./Services/Backend";
import OracleSQL from "./Services/OracleSQL";
import CloudComputing from "./Services/CloudComputing";

import Project from "./Project/Project";
import Contact from "./Contact";

export default function App() {
    const [activeService, setActiveService] = useState(null);

    return (
        <>
            <Header />
            <Home />
            <About />

            {activeService === null && (
                <Service onSelect={setActiveService} />
            )}

            {activeService === "frontend" && <Frontend onBack={() => setActiveService(null)} />}
            {activeService === "backend" && <Backend onBack={() => setActiveService(null)} />}
            {activeService === "database" && <OracleSQL onBack={() => setActiveService(null)} />}
            {activeService === "cloud" && <CloudComputing onBack={() => setActiveService(null)} />}

            <Project />
            <Contact />
        </>
    );
}
