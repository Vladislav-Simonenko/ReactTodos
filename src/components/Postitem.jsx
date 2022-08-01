import React from "react"
import MyButton from "../UI/button/MyButton";

//props - входные данные, которые так называются в контексте React.
//обозначив props с названием post, мы можем обращатся к нему, как к обычному объекту и достаем оттуда title, таким же образом достаем id и описание
//мы можем передавать любые данные внутрь любого компонента на уровне пропсов.
const Postitem = (props) => {
    return(
        <div className="post">
        <div className="post__content"> 
          <strong>{props.post.id}. {props.post.title} </strong>
          <div> 
          {props.post.body}
          </div>
        </div>
        <div className="post__btns">
          <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
        </div>
      </div>
    );
};

export default Postitem;

//теперь научимся удалять компоненты.
//мы передали функцию и при нажатии на кнопку, мы ее вызываем. вешаем слушатель события onClick и вызываем функцию получив ее из пропсов. и как параметр передаем туда тукуший пост
// у этого поста будет id, и этот id мы тоже достаем из пропсов
// эту функицю мы прокинули на 2 уровня выше. сначла в пост лист потом в пост итем. 