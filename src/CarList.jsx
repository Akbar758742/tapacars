import CarDetails from "./CarDetails"
import propTypes from 'prop-types'




const CarList = ({ cars, searchCars,SetsearchCars}) => {

    const cardetail = [];
    cars.forEach((cars) => {
        if ((cars.title.toLowerCase().indexOf(searchCars.toLowerCase()) === -1) ) {
            return;
        }

        
        cardetail.push(<CarDetails car={cars} key={cars.id} />);
    });

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 w-full mt-4">
            {cardetail}
        </div>
    )
}

CarList.propTypes = {
    cars: propTypes.array.isRequired,
    searchCars: propTypes.string.isRequired
}

export default CarList