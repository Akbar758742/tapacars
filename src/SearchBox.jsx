import propTypes from 'prop-types'

const SearchBox = ({searchCars,onSetsearchCars,onsetPremiumCars,premiumCars}) => {

    console.log(premiumCars);

    return (
        <div className="flex items-center m-2">
           <form action="" className="flex items-center flex-wrap">
           <input type="text" placeholder="Search cars..." className="mr-4 border-2 rounded-sm" value={searchCars} 
           onChange={(e) => onSetsearchCars(e.target.value)}
           
           />
            <label for="premium-only">
                <input type="checkbox" id="premium-only"
                checked={premiumCars.isPremium}
                onChange={(e) => onsetPremiumCars(e.target.checked)}
                />
                Show Premium Only
            </label>
           </form>
        </div>
    )
}

SearchBox.propTypes = {
    searchCars: propTypes.string.isRequired,
    onSetsearchCars: propTypes.func.isRequired
}   

export default SearchBox