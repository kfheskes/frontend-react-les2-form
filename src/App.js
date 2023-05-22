import React, {useState} from 'react';
import './App.css';

function App() {
    const [aardbeien, setAardbeien] = useState(0);
    const [bananen, setBananen] = useState(0);
    const [appels, setAppels] = useState(0);
    const [kiwis, setKiwis] = useState(0);

    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        age: 0,
        zipCode: '',
        delivery: 'Iedere week',
        moment: 'Overdag',
        conditions: false,
        remarks: '',
    });

    function handleChange(e) {
        const changedFieldName = e.target.name;
        const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        })
    };

    function handleReset() {
        setAardbeien(0);
        setBananen(0);
        setAppels(0);
        setKiwis(0);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Aardbeien", aardbeien, "bananen", bananen, "appels", appels, "kiwis", kiwis, formState)
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <div onSubmit={handleSubmit}>
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
                </article>
                <article>
                    <h2>Appels</h2>
                    <button type="button" disabled={appels === 0} onClick={() => {
                        setAppels(appels - 1)
                    }}>
                        -
                    </button>
                    <p> {appels} </p>
                    <button type="button" onClick={() => {
                        setAppels(appels + 1)
                    }}>
                        +
                    </button>
                </article>
                <article>
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
                    <button type="button" onClick={handleReset}>Reset</button>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">
                    Voornaam
                    <input
                        type="text"
                        id="fristName"
                        name="firstName"
                        value={formState.firstName}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="lastName">
                    Achternaam
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formState.lastName}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="age">
                    Leeftijd
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={formState.age}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="zipcode">
                    Postcode
                    <input
                        type="text"
                        id="zipcode"
                        name="zipcode"
                        value={formState.zipCode}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="delivery">
                    Bezorgfrequentie
                    <select
                        id="delivery"
                        name="delivery"
                        value={formState.delivery}
                        onChange={handleChange}
                    >
                        <option value="Iedere week"> Iedere week</option>
                        <option value="Om de week">Om de week</option>
                        <option value="Iedere maand">Iedere maand</option>
                    </select>
                </label>
                <div>
                    <label htmlFor="radioboxMorning">

                        <input
                            type="radio"
                            id="morning"
                            name="moment"
                            value="Overdag"
                            checked={formState.moment === "Overdag"}
                            onChange={handleChange}
                        />
                        Overdag
                    </label>
                    <label htmlFor="radioboxEvening">

                        <input
                            type="radio"
                            id="evening"
                            name="moment"
                            value="'s Avonds"
                            checked={formState.moment === "'s Avonds"}
                            onChange={handleChange}
                        />
                        's Avonds
                    </label>
                </div>
                <label htmlFor="textAreaRemarks">
                    Opmerking
                    <textarea
                        type="textarea"
                        id="remarks"
                        name="remarks"
                        rows="5"
                        cols="50"
                        value={formState.remarks}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="conditions">
                    <input type="checkbox"
                           id="conditions"
                           name="conditions"
                           checked={formState.conditions}
                           onChange={handleChange}
                    />
                    Ik ga akkoord met de voorwaarden
                </label>
                <button type="submit">Verzend</button>
            </form>
        </>
    );
}

export default App;
