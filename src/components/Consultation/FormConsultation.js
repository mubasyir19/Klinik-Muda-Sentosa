'use client';

import axios from 'axios';
import { Work_Sans, Yeseva_One } from 'next/font/google';
import { useState } from 'react';
import Swal from 'sweetalert2';

const yesevaOne = Yeseva_One({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
});

const workSans = Work_Sans({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const ROOT_API = process.env.PUBLIC_API;

export default function FormConsultation() {
  const [formData, setFormData] = useState({
    asker: '',
    question: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${ROOT_API}/api/consultation`, formData);
      if (response.status === 200) {
        Swal.fire({
          title: 'Berhasil',
          text: 'Berhasil kirim data',
          timer: 1000,
        });
      }
      setFormData({ asker: '', question: '' });
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: 'Error',
        text: 'Gagal mengirim data!',
        timer: 1000,
      });
    }
  };

  return (
    <form className='mt-4 lg:w-[800px] mx-auto' style={workSans.style} onSubmit={handleSubmit}>
      <div className=''>
        <input
          className='w-full bg-primary px-5 py-3.5 text-white'
          type='text'
          name='asker'
          value={formData.asker}
          placeholder='Nama'
          onChange={handleChange}
        />
      </div>
      <div className=''>
        <textarea
          className='w-full h-32 bg-primary px-5 py-3.5 text-white'
          name='question'
          value={formData.question}
          placeholder='Pertanyaan'
          onChange={handleChange}
        ></textarea>
      </div>
      <button
        type='submit'
        className='w-full py-4 text-center text-base font-medium text-primary bg-accent border-none'
      >
        Submit
      </button>
    </form>
  );
}
