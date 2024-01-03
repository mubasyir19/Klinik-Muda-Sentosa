import axios from 'axios';

const fetcherInstance = () => {
  const instance = axios.create({
    baseURL: 'http://api-klinik.mahdy-mubasyir.my.id/api',
  });

  return instance;
};

const fetcher = fetcherInstance();
export const fetcherSWR = (url) => fetcher.get(url).then((res) => res.data.data);
