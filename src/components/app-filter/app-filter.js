import "./app-filter.css";

const AppFilter = ({ filter, onChangeFilter }) => {
    const buttonsData = [
        { name: '', label: 'Все сотрудники' },
        { name: 'rise', label: 'На повышение' },
        { name: 'salary1000+', label: 'З/П больше 1000$' },
    ]

    const buttons = buttonsData.map(({ name, label }) => (
        <button type="button"
            className={`btn ' + ${(name === filter) ? 'btn-light' : 'btn-outline-light'}`}
            key={name}
            onClick={() => onChangeFilter(name)}
        >
            {label}
        </button>
    ))

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;