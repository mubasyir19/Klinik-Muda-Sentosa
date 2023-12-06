import axios from 'axios';

const ROOT_API = process.env.NEXT_API_LOCAL || 'http://localhost:5000/api';

export async function getDataArticle() {
  const fetchDataArticles = await axios.get(`${ROOT_API}/article`, { next: { revalidate: 5 } });
  const articles = fetchDataArticles.data.data;

  return articles;
}

export async function getDataCategories() {
  const fetchDataCategories = await axios.get(`${ROOT_API}/category`, { next: { revalidate: 5 } });
  const categories = fetchDataCategories.data.data;

  return categories;
}

export async function getDataConsultation() {
  const fetchDataConsultations = await axios.get(`${ROOT_API}/consultation`, { next: { revalidate: 5 } });
  const consultation = fetchDataConsultations.data.data;

  return consultation;
}
