import React, {useState} from 'react';
import './App.css';

function App() {
    const [aardbeien, setAardbeien] = useState(0);
    const [bananen, setBananen] = useState(0);
    const [appels, setAppels] = useState(0);
    const [kiwis, setKiwis] = useState(0);

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <article>
                <h2>Aardbeien</h2>
                <button type="button" disabled={aardbeien === 0} onClick={() => {
                    setAardbeien(aardbeien - 1)
                }}>
                    -
                </button>
                <p> {aardbeien} </p>
                <button type="button" onClick={() => {
                    setAardbeien(aardbeien + 1)
                }}>
                    +
                </button>
            </article>
            <article>
                <h2>Bananen</h2>
                <button type="button" disabled={bananen === 0} onClick={() => {
                    setBananen(bananen - 1)
                }}>
                    -
                </button>
                <p> {bananen} </p>
                <button type="button" onClick={() => {
                    setBananen(bananen + 1)
                }}>
                    +
                </button>
            </article><article>
            <h2>Appels</h2>
            <button type="button" disabled={appels === 0} onClick={() => {
                setAppels(appels - 1)
            }}>
                -
            </button>
            <p> {appels} </p>
            <button type="button" onClick={() => {
                setAppels (appels + 1)
            }}>
                +
            </button>
        </article><article>
            <h2>Kiwi's</h2>
            <button type="button" disabled={kiwis === 0} onClick={() => {
                setKiwis(kiwis - 1)
            }}>
                -
            </button>
            <p> {kiwis} </p>
            <button type="button" onClick={() => {
                setKiwis(kiwis + 1)
            }}>
                +
            </button>
        </article>
            <div>
                <p>Totaal {aardbeien + bananen + appels + kiwis}</p>
            </div>


        </>
    );
}

export default App;
