import { Component } from 'react';
import nextId from "react-id-generator";

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props)

        const ids = Array(4).fill(0).map(el => nextId())
        this.state = {
            data: [
                { name: "Visky", salary: 800, increase: true, like: false, id: ids[0] },
                { name: "Serg", salary: 1000, increase: false, like: true, id: ids[1] },
                { name: "Gala", salary: 1200, increase: false, like: true, id: ids[2] },
                { name: "Gala S", salary: 2000, increase: true, like: false, id: ids[3] },
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {

            return {
                data: data.filter(el => el.id !== id)
            }
        })
    }

    appendItem = (newValues) => {
        this.setState(({ data }) => {
            const id = nextId()
            const record = { name: "", salary: 0, increase: false, like: false, id }

            return {
                data: [...data, { ...record, ...newValues }]
            }
        })
    }

    render() {
        const { data } = this.state

        return (
            <div className="app">
                <AppInfo />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployeesList
                    data={data}
                    onDelete={this.deleteItem} />
                <EmployeesAddForm
                    onAppend={this.appendItem}
                />
            </div>
        );
    }

}

export default App;

