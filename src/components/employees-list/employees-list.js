import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.scss';

const EmployeesList = ({ data, onDelete, onToggleProp, onChangeProp }) => {
    const elements = data.map(item => {
        const { id, ...itemProps } = item  // вытянули id из item, остаток в itemProps
        return <EmployeesListItem
            key={id}
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.dataset.toggle)}
            onChangeProp={(e) => onChangeProp(id, e.currentTarget.dataset.field, e.currentTarget.value)}
        />
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;

