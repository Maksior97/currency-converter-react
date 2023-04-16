import { useState } from "react";
import { currencyTable } from "./currencyTable";
import "./style.css";

const Form = ({calculateTotal, total}) => {
    const [currency, setCurrency] = useState(currencyTable[0].symbol);
    const [sum, setSum] = useState("");
    
    const onSubmit = (event) => {
        event.preventDefault();
        calculateTotal(currency, sum);
    }
     
    return (
    <form className="form" onSubmit={onSubmit}>
        <fieldset className="form__fieldset">
            <legend className="form__legend">
                Przelicznik walut
            </legend>
            <p>
                <label>
                    <span className="form__labelText">
                        Podaj kwotę (w wybranej walucie):
                    </span>
                    <input
                        value={sum}
                        onChange={({target}) => setSum(target.value)}
                        className="form__field"
                        type="number"
                        placeholder="wpisz kwotę"
                        required
                        step="0.01" 
                    />
                </label>
            </p>
            <p>
                <label>
                    <span className="form__labelText">
                        Wybierz walutę:*
                    </span>
                    <select className="form__field"
                        value={currency}
                        onChange={({target}) => setCurrency(target.value)}
                    >
                        {currencyTable.map((currency => (
                            <option
                            key={currency.symbol}
                            value={currency.symbol}
                            >
                                {currency.name}
                            </option>
                        )))}
                    </select>
                </label>
            </p>
            <p className="container__issue">
                *kurs walut z dnia 10 marca 2023 r.
            </p>
            <p>
            <button className="button">Przelicz</button>
        </p>
        </fieldset>
            <p className="result">Kwota w polskich złotych (PLN): <strong
                className="total">0.00</strong></p>
    </form>
    );
};

    export default Form;