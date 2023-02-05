import { Link } from 'react-router-dom';
import './SuccessPay.css';

const SuccessPay =  () => {
    return (
        <div className="success-container">
            <h2 className='title-success'>
                Booking room successfully &#128512; <br />
            </h2>
            <Link className="back-link" to="/">
                Back to homepage
            </Link>
        </div>
    )
}


export default SuccessPay