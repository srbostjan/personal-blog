import axios from "axios";

export const getArticles = async () => {
  try {
    let articles = await axios.get('http://localhost:4000/api/v1/articles')
    return articles.data
  } catch(error) {
    console.log(error);
  }
};