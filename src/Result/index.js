import "./style.css";

const Total = ({total}) => {
<p className="result">
    {total !== undefined && (
        <strong>
            {total.targetSum.toFixed(2)};{total.currency}
        </strong>
    )}
    </p>
    
};

    export default Total;