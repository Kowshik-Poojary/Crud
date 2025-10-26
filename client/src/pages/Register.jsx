import { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/register', { name, email, password });
      alert(res.data.message);
    } catch(err) {
      alert(err.response.data.message || 'Registration failed');
    }
  }

  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)}
          className="w-full border p-2 rounded" />
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}
          className="w-full border p-2 rounded" />
        <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}
          className="w-full border p-2 rounded" />
        <button className="w-full bg-green-600 text-white p-2 rounded">Register</button>
      </form>
    </div>
  )
}
