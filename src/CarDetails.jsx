
import propTypes from 'prop-types'

const CarDetails = ({car}) => {
    const {title, brand, year, price, isPremium} = car;
    return (
        <div className=" m-2 border-2 rounded-sm " >
            <h2 className='font-semibold text-2xl'>{title}</h2>
            <p > <span className='font-semibold'>Brand:</span> {brand}</p>
            <p > <span className='font-semibold'>Year:</span> {year}</p>
            <p><span className='font-semibold'>Price:</span>  {price}</p>
            <p >{isPremium ? "Premium" : "Standard"}</p>
        </div>
    )
}





CarDetails.propTypes = {


    title: propTypes.string.isRequired,
    brand: propTypes.string.isRequired,
    year: propTypes.number.isRequired,
    price: propTypes.number.isRequired,
    isPremium: propTypes.bool.isRequired

};

export default CarDetails