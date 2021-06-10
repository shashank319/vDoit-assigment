import React from 'react';

const Modal = ({ onClose, results, data }) => {
  return(
    <div className="modal is-active">
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">You Choosed</p>
          <button className="delete" onClick={onClose}></button>
        </header>
        <section className="modal-card-body content">
          <ul style={{textDecoration:"none"}}>
            {results.map((result, i) => (
              <li key={i} className="mb-6">
                <p><strong>{result.q}</strong></p>
                <p className={result.a === data[i].answer ? 'has-background-success has-text-white p-2' : 'has-background-success has-text-white p-2'}>You Choosed: {result.a+" "}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Modal;