import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({ data }) => {
    const elements = data.map(item => {
        const { id, ...itemProps } = item  // вытянули id из item, остаток в itemProps
        return <EmployeesListItem key={id} {...itemProps} />
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;

