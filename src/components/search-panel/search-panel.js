import './search-panel.css';

const SearchPanel = ({ search, onUpdateSearch }) => {
    return (
        <input
            type="text"
            className="form-control search-input"
            placeholder="Найти сотрудника"
            value={search}
            onChange={onUpdateSearch}
        />
    )
}


export default SearchPanel;