import "./style.css";

const Total = ({total}) => {
    return (
        <span className="window__result">
            {total !== undefined && 
            <p className="result">
            <strong className="total">
                {total.targetSum.toFixed(2)}{total.currency}
            </strong>
            </p>}
        </span>
    )
};

    export default Total;