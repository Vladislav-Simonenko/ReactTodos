import React from 'react';
import classes from "./MyInput.module.css"

//оборачиваем весь компонент в реакт форвард реф, и помимо пропсов, принимаем ссылку.
//далее указываем куда эта ссылка должна попадать

const MyInput = React.forwardRef((props, ref) => {
    return (
        
            
        <input ref={ref} className={classes.myInput} {...props}/>
    );
});

export default MyInput;