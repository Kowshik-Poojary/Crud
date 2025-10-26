import { useState } from 'react';
import axios from 'axios';

export default function FormPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/forms', { title, description });
    alert('Form saved!');
    setTitle(''); setDescription('');
  }

  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Add Form Entry</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)}
          className="w-full border p-2 rounded" />
        <textarea placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)}
          className="w-full border p-2 rounded" />
        <button className="w-full bg-blue-600 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  )
}
