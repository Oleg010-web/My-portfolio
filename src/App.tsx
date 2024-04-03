import './App.css';
import { Footer } from './layouts/Footer';
import { Header } from './layouts/Header';
import { Contacts } from './layouts/sections/contacts/Contacts';
import { Main } from './layouts/sections/main/Main';
import { Skills } from './layouts/sections/skills/Skills';
import { Slogan } from './layouts/sections/slogan/Slogan';
import { Testimony } from './layouts/sections/testimony/Testimony';
import { Works } from './layouts/sections/works/Works';


function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Skills />
            <Works />
            <Testimony/>
            <Contacts />
            <Slogan />
            <Footer />
        </div>
    );
}

export default App;

