import FooterPhone from './Components/FooterPhoneComponent/FooterPhone';
import About from './Components/MainComponents/About';
import Clients from './Components/MainComponents/Clients';

import Home from './Components/MainComponents/Home';
import Programs from './Components/MainComponents/Programs';

import NavBar from './Components/NavComponents/NavBar';
import { useEffect, useState } from 'react';

function App() {
    const [isHome, setHome] = useState(false);
    const [isAbout, setAbout] = useState(false);
    const [isProgram, setProgram] = useState(false);
    const [isClient, setClient] = useState(false);
    const [isSelected, setIsSelected] = useState<number>(1);
    useEffect(() => {
        const sections = document.querySelectorAll('main section');

        const observerOptions = {
            root: null,
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    switch (entry.target.id) {
                        case 'home':
                            setHome(true);
                            setAbout(false);
                            setProgram(false);
                            setClient(false);
                            setIsSelected(1);
                            break;
                        case 'about':
                            setHome(false);
                            setAbout(true);
                            setProgram(false);
                            setClient(false);
                            setIsSelected(2);
                            break;
                        case 'programs':
                            setHome(false);
                            setAbout(false);
                            setProgram(true);
                            setClient(false);
                            setIsSelected(3);
                            break;
                        case 'clients':
                            setHome(false);
                            setAbout(false);
                            setProgram(false);
                            setClient(true);
                            setIsSelected(4);
                            break;
                    }
                }
            });
        }, observerOptions);

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <>
            <nav>
                <NavBar
                    isHome={isHome}
                    setHome={setHome}
                    isAbout={isAbout}
                    setAbout={setAbout}
                    isProgram={isProgram}
                    setProgram={setProgram}
                    isClient={isClient}
                    setClient={setClient}
                    setIsSelected={setIsSelected}
                    isSelected={isSelected}
                />
            </nav>
            <main>
                <section id="home">
                    <Home />
                </section>
                <section id="about">
                    <About />
                </section>
                <section id="programs">
                    <Programs />
                </section>
                <section id="clients">
                    <Clients />
                </section>
            </main>

            <div className="footer-phone">
                <FooterPhone
                    isHome={isHome}
                    setHome={setHome}
                    isAbout={isAbout}
                    setAbout={setAbout}
                    isProgram={isProgram}
                    setProgram={setProgram}
                    isClient={isClient}
                    setClient={setClient}
                    setIsSelected={setIsSelected}
                    isSelected={isSelected}
                />
            </div>
        </>
    );
}

export default App;
