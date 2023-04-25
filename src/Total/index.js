import "./style.css";

const Total = ({total}) => {
    return (
        <span className="window__result">
            {!!total && 
            <p className="result">
            Kwota w polskich złotych (PLN):
            <strong className="total">
            0.00{total.targetSum.toFixed(2)}
            </strong>
            </p>}
        </span>
    )
};

    export default Total;
