import React from 'react';
import classes from "./MyModal.module.css";

//чтобы помещать в модальное окно все что захотим, используем пропс children
// что бы добавить еще класс active воспользуемся такой конструкцией [classes.myModal, classes.active].join("") (создаем массив, добавляем 2 класса, и джоиним через пробел)
//join возвращает строку




const MyModal = ({children, visible, setVisible}) => {
//сам компонент не может управлять видимостью и невидимостью, используем для этого родительский компонент.
    const rootClasses = [classes.myModal]
    if(visible){
    rootClasses.push(classes.active)
    }

//чтобы закрывать модалку по клику на темную область, вешаем слушатель события на корневой файл
//при нажатии на контентную часть, окно также закрывается, поэтому предотвращаем всплытие события, используя у event функция stopPropagation
    return (
        <div className={rootClasses.join(" ")} onClick={() => setVisible(false)} >
            <div className={classes.myModalContent} onClick={(e)=> e.stopPropagation()}> 
                {children}
            </div>
        </div>
    );
};

export default MyModal;