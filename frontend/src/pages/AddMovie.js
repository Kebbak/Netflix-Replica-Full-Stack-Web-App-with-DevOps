import { useState } from 'react';
import axios from '../api/axios';
export default function AddMovie() {
  const [form, setForm] = useState({ title:'', description:'', genre:'', year:'', posterUrl:'', videoUrl:'' });
  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('/movies', { ...form, genre: form.genre.split(',') });
    alert('Movie added!');
  };
  return (
    <form className="max-w-md mx-auto mt-8" onSubmit={handleSubmit}>
      {['title','description','genre','year','posterUrl','videoUrl'].map(f => (
        <input key={f}
          className="block w-full p-2 mb-4 border rounded"
          placeholder={f} onChange={e => setForm({ ...form, [f]: e.target.value })}/>
      ))}
      <button className="bg-blue-600 text-white py-2 px-4 rounded">Add Movie</button>
    </form>
  );
}
