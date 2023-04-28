import "./style.css";

const Total = ({total}) => {
    return (
        <span className="window__result">
            <p className="result">
            Kwota w polskich złotych (PLN):
            {total !== undefined && (
                <strong className="total">
                {total.targetSum.toFixed(2)}
                </strong>
                )}
            </p>
        </span>
    )
};

    export default Total;
