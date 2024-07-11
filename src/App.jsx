import {useState, useEffect} from 'react';
import Bottles from './components/bottles/Bottles';
import Nabvar from './layout/header/Nabvar';
import {Footer, FooterDetails} from './layout/footer/Footer';
import Button from './layout/button/Button';

function App() {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/ai/tools')
            .then((res) => res.json())
            .then((data) => setTools(data.data.tools));
    }, []);

    return (
        <div className="box-border px-5 md:px-20 font-poppins ">
            <Nabvar />
            <Button />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-between">
                <Bottles tools={tools} />
            </div>

            <FooterDetails />
            <Footer />
        </div>
    );
}

export default App;
