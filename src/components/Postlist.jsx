import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Postitem from './Postitem';
    //map - позволяет получить новый массив, преобразовав при этом все элементы.
    //обращаемся к списку постов и вызываем функцию map, в нее передает колбек, где каждый объект поста, преобразовываем в реакт элемент.
    //для каждого поста в массиве отрисовываем postitem и передаем туда объект 
    //key - обязательное условие, когда создаем какие то списки, ключ должен быть уникальным и статичным, индекс использовать не нужно.
    // ключи помогают реакту перерисовывать не весь список, а нужные элементы

    //можно написать инлайн стиль прямо в теге реакта. передаем туда объект, где пишем название свойства, использую camelCase

    //посты будем принимать из вне, через пропсы,

    //принимаем функцию удаления поста. и передаем эту функцию в postitem
const Postlist = ({posts, title, remove}) => {

    //внутри компонента делаем условие
    if (!posts.length) {
     return (<h1 style={{textAlign:"center"}}>Постов нет</h1> )
    }
    return (
        <div>
            <h1 style={{textAlign: "center", fontSize: "50px", fontWeight: "800"}}>
        {title}
        </h1>
        <TransitionGroup>
            {posts.map((post, index) =>
            <CSSTransition
            key={post.id}
            timeout={500}
            classNames="post"
          >
        <Postitem remove={remove} number={index + 1} post={post} />
        </CSSTransition>
        )}
        </TransitionGroup>
        </div>
    );
};

export default Postlist;
// так как id некпрасивый, так как мы получаем его в миллисекундах, помимо самого поста, мы передаем номер элемента в массиве,