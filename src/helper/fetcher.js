import axios from 'axios';

const fetcherInstance = () => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API,
  });

  return instance;
};

const fetcher = fetcherInstance();
export const fetcherSWR = (url) => fetcher.get(url).then((res) => res.data.data);
