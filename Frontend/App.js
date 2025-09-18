import React, { useEffect, useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/api/notes/')
      .then(res => res.json())
      .then(data => setNotes(data));
  }, []);

  const handleAddNote = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:8000/api/notes/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content })
    });
    if (res.ok) {
      const newNote = await res.json();
      setNotes([newNote, ...notes]);
      setTitle('');
      setContent('');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
      padding: '2rem',
      fontFamily: 'Inter, sans-serif'
    }}>
      <div style={{
        maxWidth: 600,
        margin: '2rem auto',
        background: '#fff',
        borderRadius: 16,
        boxShadow: '0 4px 24px 0 rgba(80, 112, 255, 0.10)',
        padding: '2rem 2.5rem',
        border: '1px solid #e0e7ff'
      }}>
        <h1 style={{
          textAlign: 'center',
          color: '#4f46e5',
          fontWeight: 800,
          letterSpacing: 1,
          marginBottom: 32
        }}>📝 Note App</h1>
        <form onSubmit={handleAddNote} style={{ marginBottom: '2rem' }}>
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Title"
            required
            style={{
              width: '100%',
              padding: '12px 14px',
              marginBottom: 12,
              border: '1px solid #c7d2fe',
              borderRadius: 8,
              fontSize: 18,
              outline: 'none',
              fontWeight: 600
            }}
          />
          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            placeholder="Content"
            required
            rows={4}
            style={{
              width: '100%',
              padding: '12px 14px',
              marginBottom: 12,
              border: '1px solid #c7d2fe',
              borderRadius: 8,
              fontSize: 16,
              outline: 'none',
              fontFamily: 'inherit',
              resize: 'vertical'
            }}
          />
          <button type="submit" style={{
            background: 'linear-gradient(90deg, #6366f1 0%, #818cf8 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '12px 32px',
            fontSize: 18,
            fontWeight: 700,
            cursor: 'pointer',
            boxShadow: '0 2px 8px 0 rgba(99,102,241,0.10)',
            transition: 'background 0.2s'
          }}>Add Note</button>
        </form>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {notes.length === 0 && (
            <li style={{ textAlign: 'center', color: '#a1a1aa', fontSize: 18 }}>No notes yet.</li>
          )}
          {notes.map(note => (
            <li key={note.id} style={{
              border: '1px solid #e0e7ff',
              borderRadius: 12,
              padding: 20,
              marginBottom: 18,
              background: '#f1f5f9',
              boxShadow: '0 2px 8px 0 rgba(99,102,241,0.04)'
            }}>
              <h3 style={{ color: '#3730a3', margin: 0, fontWeight: 700 }}>{note.title}</h3>
              <p style={{ color: '#334155', margin: '8px 0 0 0', fontSize: 16 }}>{note.content}</p>
              <small style={{ color: '#64748b', fontSize: 13 }}>Created: {new Date(note.created_at).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ textAlign: 'center', color: '#a1a1aa', marginTop: 32, fontSize: 15 }}>
        Made with <span style={{ color: '#6366f1', fontWeight: 700 }}>React</span> & <span style={{ color: '#6366f1', fontWeight: 700 }}>Django</span>
      </div>
    </div>
  );
}

export default App;
