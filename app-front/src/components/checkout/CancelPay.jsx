import { Link } from "react-router-dom";
import './CancelPay.css';

const CancelPay =  () => {
    return (
        <div className="cancel-container">
        <h2 className='title-cancel'>
            Booking room canceled &#x1F615; <br />
        </h2>
        <Link className="back-link" to="/">
            Back to homepage
        </Link>
    </div>
    )
}

export default CancelPay