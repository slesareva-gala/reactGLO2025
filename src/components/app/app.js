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
                { name: "Visky", salary: 800, increase: true, rise: false, id: ids[0] },
                { name: "Serg", salary: 1000, increase: false, rise: true, id: ids[1] },
                { name: "Gala", salary: 1200, increase: false, rise: true, id: ids[2] },
                { name: "Gala S", salary: 2000, increase: true, rise: false, id: ids[3] },
            ],
            term: '',
            filter: ''
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
            const record = { name: "", salary: 0, increase: false, rise: false, id }

            return {
                data: [...data, { ...record, ...newValues }],
                term: '',
                filter: ''
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(el => (el.id === id) ? { ...el, [prop]: !el[prop] } : el)
        }))
    }

    onChangeProp = (id, field, value) => {
        const valueField = (field, value) => {
            let valueField = value

            if (field === 'salary') {
                valueField = +value.replace(/\D/g, '')
            }
            return valueField
        }

        this.setState(({ data }) => ({
            data: data.map(el => (el.id === id) ? { ...el, [field]: valueField(field, value) } : el)
        }))
    }

    filterEmploees = (items, term, filter) => {
        const search = term.toLowerCase()
        const inSearch = item => !search || item.name.toLowerCase().includes(search)
        const inFilters = item => !filter || (filter === 'rise' ? item.rise : item.salary > 1000)

        if (!items.length) return items
        return items.filter(item => inSearch(item) && inFilters(item))
    }

    onUpdateSearch = (e) => {
        const term = e.target.value

        this.setState({ term: term.trim() })
    }

    onChangeFilter = (filter) => {
        this.setState({ filter })
    }

    render() {
        const { data, term, filter } = this.state
        const qtyEmployees = data.length
        const qtyPrizesEmployees = data.filter(el => el.increase).length
        const visibleData = this.filterEmploees(data, term, filter)

        return (
            <div className="app">
                <AppInfo
                    qtyEmployees={qtyEmployees}
                    qtyPrizesEmployees={qtyPrizesEmployees}
                />
                <div className="search-panel">
                    <SearchPanel
                        search={term}
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <AppFilter
                        filter={filter}
                        onChangeFilter={this.onChangeFilter}
                    />
                </div>
                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onChangeProp={this.onChangeProp}
                />
                <EmployeesAddForm
                    onAppend={this.appendItem}
                />
            </div>
        );
    }

}

export default App;

