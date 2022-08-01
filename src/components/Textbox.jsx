import React, { useState } from "react";

const Textbox = () => {
// создаем еще 1 состояние, по умолчанию это будет строка с текстом, свяжем состояние с инпутом.

    const [textbox, setTextbox] = useState("ТЕКСТ")

    //мы указали value(textbox) со статичным текстом, но саму функцию для отследживания не прописали, напишем ее.
//вешаем слушатель события onChange, !!!Колбеки для событий первым параметром принимают event, 
//у которого есть поле targer(сам DOM елемент) и поле value(Значение которое в нем находитмя) (event = event.target.value)
//мы можем доставать это значение и помещать его в состояние (Называется двухсторонее связывание)
//или же управляемыми коспонентами
    return(
        <div>
            <h2>{textbox}</h2>
            <input 
            onChange={event => setTextbox(event.target.value)}
            type="text" 
            value={textbox} 
            />
        </div>
    );
};

export default Textbox;


