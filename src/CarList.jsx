import CarDetails from "./CarDetails"
import propTypes from 'prop-types'




const CarList = () => {
    const cars = 
    [
        { "id": 1, "title": "Luxury Sedan", "brand": "Mercedes", "year": 2023, "price": 80000, "isPremium": true },
        { "id": 2, "title": "Family SUV", "brand": "Toyota", "year": 2022, "price": 45000, "isPremium": false },
        { "id": 3, "title": "Sports Car", "brand": "Porsche", "year": 2023, "price": 120000, "isPremium": true },
        { "id": 4, "title": "Electric Hatchback", "brand": "Nissan", "year": 2022, "price": 35000, "isPremium": false },
        { "id": 5, "title": "Luxury SUV", "brand": "BMW", "year": 2023, "price": 90000, "isPremium": true },
        { "id": 6, "title": "Compact Sedan", "brand": "Honda", "year": 2021, "price": 25000, "isPremium": false },
        { "id": 7, "title": "Pickup Truck", "brand": "Ford", "year": 2022, "price": 40000, "isPremium": false },
        { "id": 8, "title": "Convertible", "brand": "Audi", "year": 2023, "price": 70000, "isPremium": true },
        { "id": 9, "title": "Minivan", "brand": "Chrysler", "year": 2021, "price": 30000, "isPremium": false },
        { "id": 10, "title": "Electric SUV", "brand": "Tesla", "year": 2023, "price": 85000, "isPremium": true },
        { "id": 11, "title": "Hybrid Sedan", "brand": "Lexus", "year": 2022, "price": 55000, "isPremium": true },
        { "id": 12, "title": "Compact SUV", "brand": "Mazda", "year": 2021, "price": 28000, "isPremium": false },
        { "id": 13, "title": "Sports Coupe", "brand": "Chevrolet", "year": 2023, "price": 42000, "isPremium": false },
        { "id": 14, "title": "Luxury Sedan", "brand": "Jaguar", "year": 2022, "price": 100000, "isPremium": true },
        { "id": 15, "title": "Family Minivan", "brand": "Toyota", "year": 2021, "price": 32000, "isPremium": false },
        { "id": 16, "title": "Electric Truck", "brand": "Rivian", "year": 2023, "price": 75000, "isPremium": true },
        { "id": 17, "title": "Sports Sedan", "brand": "BMW", "year": 2022, "price": 60000, "isPremium": true },
        { "id": 18, "title": "Compact Car", "brand": "Hyundai", "year": 2021, "price": 22000, "isPremium": false },
        { "id": 19, "title": "SUV", "brand": "Ford", "year": 2022, "price": 38000, "isPremium": false },
        { "id": 20, "title": "Luxury Sedan", "brand": "Audi", "year": 2023, "price": 88000, "isPremium": true }
      ];
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 w-full mt-4">
         {

            cars.map((car) => (
                <li key={car.id} >
                    <CarDetails car={car} />
                </li>
            ))
         }
       
    </ul>
  )
}

CarList.propTypes = {
    cars: propTypes.object.isRequired
}

export default CarList