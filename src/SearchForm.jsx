import { useState } from "react"
import { useGlobalContext } from "./context";

const SearchForm = () => {
    const { setSearchValue } = useGlobalContext();
    const handleSearch = (e) => {
        e.preventDefault();
        const searchValue = e.target.elements.search.value;
        setSearchValue(searchValue);
        console.log('user searched for:', searchValue);
    }
    return (
        <section>
            <h1 className="title">Unsplash Images</h1>
            <form className='search-form' onSubmit={handleSearch}>
                <input 
                    type="text" 
                    name="search" 
                    id="search" 
                    placeholder="cat" 
                    className="search-input"
                />
                <button type="submit" className='btn'>Submit</button>
            </form>
        </section>
    )
}

export default SearchForm