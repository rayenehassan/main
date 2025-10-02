'use client';

import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

const initialState = {
  fullName: '',
  email: '',
  preferredModel: '',
  timeframe: '',
  notes: '',
};

export function ReservationForm() {
  const [formState, setFormState] = useState(initialState);
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const handleChange = (field) => (event) => {
    setFormState((current) => ({
      ...current,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formState.fullName.trim() || !formState.email.trim()) {
      setStatus('error');
      setMessage('Merci d&apos;indiquer au minimum votre nom et votre email professionnel.');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const { error } = await supabase.from('waiting_list').insert({
        full_name: formState.fullName.trim(),
        email: formState.email.trim().toLowerCase(),
        desired_model: formState.preferredModel || null,
        preferred_timeframe: formState.timeframe || null,
        notes: formState.notes || null,
      });

      if (error) {
        const parts = [error.message, error.details, error.hint].filter(Boolean);
        throw new Error(parts.join(' - ') || 'Reservation impossible pour le moment.');
      }

      setFormState(initialState);
      setStatus('success');
      setMessage('Merci. Notre equipe revient vers vous sous 24h ouvrables.');
    } catch (err) {
      console.error('Unable to create reservation', err);
      const supabaseMessage = err?.message || err?.error?.message;
      let feedback = "Nous n&apos;avons pas pu valider votre demande. Merci de reessayer ou d&apos;ecrire a concierge@atelier-l7.com.";

      if (typeof supabaseMessage === 'string' && supabaseMessage.length > 0) {
        if (supabaseMessage.toLowerCase().includes('row-level security')) {
          feedback = "Acces refuse par Supabase (RLS). Verifiez la politique d&apos;insertion pour l&apos;utilisateur anon.";
        } else if (supabaseMessage.toLowerCase().includes('duplicate key value')) {
          feedback = 'Votre adresse email est deja enregistree. Notre equipe vous recontactera directement.';
        } else {
          feedback = supabaseMessage;
        }
      }

      setStatus('error');
      setMessage(feedback);
    }
  };

  const isLoading = status === 'loading';

  return (
    <form
      className="space-y-8 rounded-[28px] border border-slate-200 bg-white px-8 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur"
      onSubmit={handleSubmit}
    >
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Brief de reservation</p>
        <h3 className="text-3xl font-semibold tracking-tight text-slate-900">
          Planifier une session privee Atelier L7
        </h3>
        <p className="text-sm leading-relaxed text-slate-600">
          Transmettez les informations essentielles. Nous preparons un dossier de recommandations avant la session pour optimiser le temps de decision.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-[0.3em] text-slate-500" htmlFor="fullName">
            Nom complet
          </label>
          <input
            autoComplete="name"
            className="rounded-2xl border border-slate-300 bg-white px-5 py-4 text-sm text-slate-800 outline-none transition focus:border-slate-500 focus:ring-0"
            disabled={isLoading}
            id="fullName"
            onChange={handleChange('fullName')}
            placeholder="Claire Martin"
            value={formState.fullName}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-[0.3em] text-slate-500" htmlFor="email">
            Email professionnel
          </label>
          <input
            autoComplete="email"
            className="rounded-2xl border border-slate-300 bg-white px-5 py-4 text-sm text-slate-800 outline-none transition focus:border-slate-500 focus:ring-0"
            disabled={isLoading}
            id="email"
            onChange={handleChange('email')}
            placeholder="c.martin@entreprise.com"
            type="email"
            value={formState.email}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-[0.3em] text-slate-500" htmlFor="preferredModel">
            Modele envisage
          </label>
          <select
            className="rounded-2xl border border-slate-300 bg-white px-5 py-4 text-sm text-slate-800 outline-none transition focus:border-slate-500 focus:ring-0"
            disabled={isLoading}
            id="preferredModel"
            onChange={handleChange('preferredModel')}
            value={formState.preferredModel}
          >
            <option value="">Selectionner</option>
            <option value="Edition Signature">Edition Signature</option>
            <option value="L7 Atlantique">L7 Atlantique</option>
            <option value="L7 Nocturne">L7 Nocturne</option>
            <option value="Consultation">Etudier plusieurs scenarios</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-[0.3em] text-slate-500" htmlFor="timeframe">
            Horizon de mise en service
          </label>
          <input
            className="rounded-2xl border border-slate-300 bg-white px-5 py-4 text-sm text-slate-800 outline-none transition focus:border-slate-500 focus:ring-0"
            disabled={isLoading}
            id="timeframe"
            onChange={handleChange('timeframe')}
            placeholder="Ex: debut T1 2026"
            value={formState.timeframe}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs uppercase tracking-[0.3em] text-slate-500" htmlFor="notes">
          Priorites et contexte
        </label>
        <textarea
          className="min-h-[140px] rounded-2xl border border-slate-300 bg-white px-5 py-4 text-sm text-slate-800 outline-none transition focus:border-slate-500 focus:ring-0"
          disabled={isLoading}
          id="notes"
          onChange={handleChange('notes')}
          placeholder="Objectifs, profils passagers, contraintes logistiques..."
          value={formState.notes}
        />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
          Donnees traitees sous NDA et supprimees sur demande
        </p>
        <button
          className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3 text-sm font-medium text-white transition hover:-translate-y-[2px] hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
          disabled={isLoading}
          type="submit"
        >
          {isLoading ? 'Envoi en cours...' : 'Confirmer ma demande'}
        </button>
      </div>

      {message && (
        <div
          className={
            status === 'success'
              ? 'rounded-2xl border border-emerald-200 bg-emerald-50/70 px-6 py-4 text-sm text-emerald-700'
              : 'rounded-2xl border border-rose-200 bg-rose-50/70 px-6 py-4 text-sm text-rose-700'
          }
        >
          {message}
        </div>
      )}
    </form>
  );
}


