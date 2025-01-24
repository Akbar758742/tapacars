import Header from "./Header";
import SearchBox from "./SearchBox";
import CarList from "./CarList";
const TapaCars = () => {
  return (
    <div className=" p-3 mx-auto">
        <Header />
        <SearchBox />
        <CarList />
    </div>
  )
}

export default TapaCars