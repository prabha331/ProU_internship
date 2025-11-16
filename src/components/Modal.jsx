import React, {useEffect} from 'react';

export default function Modal({item, onClose}) {
  useEffect(() => {
    function onKey(e){ if(e.key === 'Escape') onClose(); }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  if(!item) return null;
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Employee details">
      <div className="modal">
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <h2 style={{margin:0}}>{item.name}</h2>
          <button onClick={onClose} aria-label="Close">Close</button>
        </div>
        <p className="meta" style={{marginTop:6}}>{item.role} · {item.location}</p>

        <section style={{marginTop:12}}>
          <h3 style={{marginBottom:8}}>Tasks</h3>
          <ul>
            {item.tasks.map(t => (
              <li key={t.id}>
                <strong>{t.title}</strong> — {t.priority} · due {t.due}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
