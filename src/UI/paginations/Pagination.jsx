import React from 'react';
import { getPageArray } from '../../utils/pages';

//тут нам надо получать номер текущей страницы и массив, на основании которого надо отрисосвывать элементы. Для создания массива надо знать сколько всего страниц, 
// это прос тоталпейдж. потом получаем номер текущей страницы и функцию которая изменяет текущую страницу
const Pagination = ({totalPage, page, changePage}) => {

    let pagesArray = getPageArray(totalPage);

    return (
        <div className="page__wrapper">
            {pagesArray.map(p => 
                <span 
                onClick={() => changePage(p)}
                 key={p} 
                className={page === p ? "page page__current" : "page"}>
                 {p}
                </span>
)}
            </div>
    );
};

export default Pagination;