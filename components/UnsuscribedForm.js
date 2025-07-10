// components/UnsubscribeForm.jsx
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const UnsubscribeForm = () => {
  const router = useRouter();
  const { email: emailFromUrl } = router.query;

  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [otherReason, setOtherReason] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);


  useEffect(() => {
    if (!hasBeenSubmitted && emailFromUrl && emailFromUrl !== email) {
      setEmail(emailFromUrl);
    }
  }, [emailFromUrl, email, hasBeenSubmitted]);


  const reasons = [
    'Ya no me interesa el contenido',
    'Recibo demasiados correos',
    'El contenido no es relevante para mí',
    'Otro (especificar)',
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setHasBeenSubmitted(false);


    try {
      const payload = {
        email,
        reason: reason === 'Otro (especificar)' ? otherReason : reason,
      };

      const res = await fetch('/api/unsuscribed', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitMessage('¡Te has desuscrito exitosamente!');
        setEmail('');
        setReason('');
        setOtherReason('');
        setHasBeenSubmitted(true);

        router.replace('/desuscripcion', undefined, { shallow: true });

      } else {
        const errData = await res.json();
        setSubmitMessage(`Error: ${errData.message || 'Inténtalo de nuevo.'}`);
      }

    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setSubmitMessage('Error de red. Inténtalo más tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="mb-3">
                {/* --- CAMBIO: Nuevo id para el label --- */}
                <label htmlFor="unsubscribeEmail" className="form-label">Correo Electrónico:</label>
                <input
                  type="email"
                  id="unsubscribeEmail" // --- CAMBIO: Nuevo id para el input ---
                  className={`form-control ${emailFromUrl ? 'bg-light' : ''}`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  readOnly={!!emailFromUrl}
                  disabled
                />
              </div>

              <div className="mb-3">
                <label htmlFor="reason" className="form-label">Motivo de la desuscripción:</label>
                <select
                  id="reason" className="form-select"
                  value={reason} onChange={(e) => setReason(e.target.value)}
                  required
                >
                  <option value="">Selecciona un motivo</option>
                  {reasons.map((r) => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>

              {reason === 'Otro (especificar)' && (
                <div className="mb-3">
                  <label htmlFor="otherReason" className="form-label">Por favor, especifica:</label>
                  <textarea
                    id="otherReason" className="form-control"
                    value={otherReason} onChange={(e) => setOtherReason(e.target.value)}
                    rows="3" required
                  ></textarea>
                </div>
              )}

              <button
                type="submit" className="btn btn-primary w-100"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Enviando...
                  </>
                ) : (
                  'Desuscribirme'
                )}
              </button>

              {submitMessage && (
                <div className={`alert mt-4 ${submitMessage.includes('Error') ? 'alert-danger' : 'alert-success'}`}>
                  {submitMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UnsubscribeForm;