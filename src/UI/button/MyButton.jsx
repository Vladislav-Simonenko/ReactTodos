import React from 'react';
import classes from "./MyButton.module.css"

//props.children - помогает определить в какое место компонента необходимо добавить вложенные элементы.

//делаем деструктуризацию, выцепляем оттуда пропс чилдрен, остальные пропсы как есть

//что бы передать пропсы внутрь компонента, необходимо развернуть весь объект(...props) в button, и все компоненты что мы будем передавать в button будут улетать в кнопку
const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className = {classes.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;