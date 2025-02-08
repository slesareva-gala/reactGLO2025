import "./app-info.scss";

const AppInfo = ({ qtyEmployees, qtyPrizesEmployees }) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {qtyEmployees}</h2>
            <h2>Премию получат: {qtyPrizesEmployees}</h2>
        </div>
    )
}

export default AppInfo;
