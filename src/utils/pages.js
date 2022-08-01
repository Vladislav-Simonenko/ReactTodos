//в этой папке вспомогательные функции, работа с датами, форматирование, работа со строками. в нашем случае работа с номерами страниц.
//просто поделить общее кол-во элементов на лимит недостаточно, надо округлить его в большую сторону через функцию ceil.
export const getPagesCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit )
    //округляем значение страниц в большую сторону
}

export const getPageArray = (totalPages) =>  {

    let result = [];
    for (let i = 0; i < totalPages; i++) {
        result.push(i + 1)
    }
    return result;
}