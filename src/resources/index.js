import axios from 'axios';

let URL = 'https://afternoon-shore-25033.herokuapp.com/api/v1/articles';

export const getArticles = async () => {
  try {
    let articles = await axios.get(URL);
    return articles.data;
  } catch(error) {
    console.log(error);
  }
};
export const getArticle = async (id) => {
  try {
    let article = await axios.get(`${URL}/${id}`);
    return article.data;
  } catch(error) {
    console.log(error);
  }
};