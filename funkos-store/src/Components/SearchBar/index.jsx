import searchButton from '../../assets/icons/search.png';
import './SearchBar.css'

function SearchBar() {
    return (
        <form className="search-container">
            <input type= 'text' placeholder="Busca aquí tus Funkos..."></input>
            <button> <img className='search-icon' src={searchButton} alt="search icon" /> </button>
        </form>
    )
}

export { SearchBar }