import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ListPage() {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/forms').then(res => setForms(res.data));
  }, []);

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Form Entries</h2>
      <div className="space-y-4">
        {forms.map(f => (
          <div key={f._id} className="border p-4 rounded shadow">
            <h3 className="font-bold">{f.title}</h3>
            <p>{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
