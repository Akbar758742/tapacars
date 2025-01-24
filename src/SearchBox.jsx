

const SearchBox = () => {
    return (
        <div className="flex items-center m-2">
            <input type="text" placeholder="Search cars..." className="mr-4 border-2 rounded-sm" />
            <label for="premium-only">
                <input type="checkbox" id="premium-only" />
                Show Premium Only
            </label>
        </div>
    )
}

export default SearchBox