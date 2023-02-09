import { FaSearch } from "react-icons/fa";
import { useValue } from './Contexte';

const Search = () => {
    const { search, setSearch } = useValue();

    return (
        <form className="searchForm" onSubmit={e=>e.preventDefault()} >
            <input 
            type="text"
            placeholder="search products"
            value={search}
            onChange={e=>setSearch(e.target.value)}
            id="search"
            />
            <label htmlFor="search">
                <FaSearch className="searchIcon" />
            </label>
        </form>
    )
}

export default Search 