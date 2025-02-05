import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {
    const data = [
        { name: "Visky", salary: 800, increase: true, like: false, id: 1 },
        { name: "Serg", salary: 1000, increase: false, like: true, id: 2 },
        { name: "Gala", salary: 1200, increase: false, like: true, id: 3 },
        { name: "Gala S", salary: 2000, increase: true, like: false, id: 4 },
    ]

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <EmployeesList data={data} />
            <EmployeesAddForm />
        </div>
    );
}

export default App;

