import { useState } from "react";
import currencies from "../currencies";
import Total from "../Total";
import "./style.css";

const Form = ({calculateTotal, total}) => {
    const [currency, setCurrency] = useState("");
    const [sum, setSum] = useState(currencies[0].symbol);
    
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateTotal(currency, sum);
        setSum("");
    }
     
    return (
    <form className="form" onSubmit={onFormSubmit}>
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
                        {currencies.map((currency => (
                            <option
                            key={currency.symbol}
                            value={currency.symbol}
                            >
                                {currency.name}
                            </option>
                        )))}
                    </select>
                </label>
                <p className="container__issue">
                *kurs walut z dnia 10 marca 2023 r.
                </p>
            </p>
            <p>
            <button className="button">Przelicz</button>
        </p>
        <span className="window__result">
            <Total total={total} />
        </span>
        </fieldset>
    </form>
    );
};

    export default Form;