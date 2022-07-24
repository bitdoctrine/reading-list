import { useState } from 'react';
import { useFirestore } from '../hooks/useFirestore';

export default function BookForm() {
  const [newBook, setNewBook] = useState('');

  const { addDocument } = useFirestore('books');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newBook);
    addDocument({ title: newBook });
    setNewBook('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Add a new book title:</span>
        <input
          required
          type="text"
          onChange={(e) => setNewBook(e.target.value)}
          value={newBook}
        />
      </label>
      <button>Add</button>
    </form>
  );
}
