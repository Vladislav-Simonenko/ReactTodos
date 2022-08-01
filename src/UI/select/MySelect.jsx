import React from 'react';
//этот компонент принимает несколько пропсов, самый важныый, массив опций {option}, также добавим дефолтную{defaultValue}
//проходимся по массиву функций с помощью map, и отрисывываем для каждой опции, тэг option
//как value указываем поле value из объекта, то что помещаем внутрь, берем из поля name
//внутри селекта value всегда уникальное, поэтому ключ делаем value
//теперь реализуем двухсторонне связывание и делаем компонент управляемым
const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
<select 
value={value}
onChange = {event => onChange(event.target.value)}
>
    <option disabled value={""}>{defaultValue}</option>
        {options.map(option => 
            <option key={option.value} value={option.value}>
                {option.name}
            </option>
            )}
</select>
    );
};

export default MySelect;