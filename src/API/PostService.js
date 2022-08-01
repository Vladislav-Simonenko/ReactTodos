import axios from "axios";
export default class PostService {

    //необходимо указать query параметр и лимит, что бы сервер возвращал информацию о состоянии в нем.
    //можно захардкодить, а можно через axios сделать красивее
    static async getAll(limit = 10, page = 1) {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts",{
                //вторым параметром в get передаем опции, там указываем поле params
                params: {
                    _limit: limit,
                    _page: page,
                }
            })
            return response;
       

    }
}

//так как нам необходимо обращаться к хэдерам и вытаскивать общее кол-во постов, будем возвращать просто response