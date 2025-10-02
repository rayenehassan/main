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
      setMessage('Merci de renseigner votre nom et votre email.');
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
      setMessage('Demande enregistree. Notre equipe vous recontacte tres vite.');
    } catch (err) {
      console.error('Unable to create reservation', err);
      const supabaseMessage = err?.message || err?.error?.message;
      let feedback = 'Une erreur est survenue. Merci de reessayer ou de nous contacter directement.';

      if (typeof supabaseMessage === 'string' && supabaseMessage.length > 0) {
        if (supabaseMessage.toLowerCase().includes('row-level security')) {
          feedback = "Acces refuse par Supabase (RLS). Verifiez la politique d'insertion pour l'utilisateur anon.";
        } else if (supabaseMessage.toLowerCase().includes('duplicate key value')) {
          feedback = "Votre email semble deja inscrit. Contactez-nous pour ajuster votre demande.";
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
      className="space-y-8 rounded-[28px] border border-slate-100 bg-white/90 px-8 py-10 shadow-[0_24px_60px_rgba(15,23,42,0.06)] backdrop-blur"
      onSubmit={handleSubmit}
    >
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Reservation privee</p>
        <h3 className="text-3xl font-semibold tracking-tight text-slate-900">
          Rejoindre la waiting list Atelier L7
        </h3>
        <p className="text-base text-slate-500">
          Indiquez-nous vos informations essentielles pour planifier votre rendez-vous dedie. Nous revenons vers vous sous 24h ouvrees.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-[0.3em] text-slate-400" htmlFor="fullName">
            Nom complet
          </label>
          <input
            autoComplete="name"
            className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-800 outline-none transition focus:border-slate-400 focus:ring-0"
            disabled={isLoading}
            id="fullName"
            onChange={handleChange('fullName')}
            placeholder="Alexandre Dupont"
            value={formState.fullName}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-[0.3em] text-slate-400" htmlFor="email">
            Email professionnel
          </label>
          <input
            autoComplete="email"
            className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-800 outline-none transition focus:border-slate-400 focus:ring-0"
            disabled={isLoading}
            id="email"
            onChange={handleChange('email')}
            placeholder="a.dupont@exemple.com"
            type="email"
            value={formState.email}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-[0.3em] text-slate-400" htmlFor="preferredModel">
            Modele souhaite
          </label>
          <select
            className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-800 outline-none transition focus:border-slate-400 focus:ring-0"
            disabled={isLoading}
            id="preferredModel"
            onChange={handleChange('preferredModel')}
            value={formState.preferredModel}
          >
            <option value="">Selectionner</option>
            <option value="Edition Signature">Edition Signature</option>
            <option value="L7 Atlantique">L7 Atlantique</option>
            <option value="L7 Nocturne">L7 Nocturne</option>
            <option value="Consultation">Je souhaite un conseil personnalise</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-[0.3em] text-slate-400" htmlFor="timeframe">
            Fenetre ideale
          </label>
          <input
            className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-800 outline-none transition focus:border-slate-400 focus:ring-0"
            disabled={isLoading}
            id="timeframe"
            onChange={handleChange('timeframe')}
            placeholder="Par ex. Octobre 2025"
            value={formState.timeframe}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs uppercase tracking-[0.3em] text-slate-400" htmlFor="notes">
          Attentes particulieres
        </label>
        <textarea
          className="min-h-[120px] rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-800 outline-none transition focus:border-slate-400 focus:ring-0"
          disabled={isLoading}
          id="notes"
          onChange={handleChange('notes')}
          placeholder="Precisez vos besoins, le type de trajet, vos inspirations..."
          value={formState.notes}
        />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
          Donnees traitees de maniere confidentielle
        </p>
        <button
          className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3 text-sm font-medium text-white transition hover:-translate-y-[2px] hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
          disabled={isLoading}
          type="submit"
        >
          {isLoading ? 'Envoi en cours...' : 'Reserver un creneau'}
        </button>
      </div>

      {message && (
        <div
          className={
            status === 'success'
              ? 'rounded-2xl border border-emerald-200 bg-emerald-50/60 px-6 py-4 text-sm text-emerald-700'
              : 'rounded-2xl border border-rose-200 bg-rose-50/60 px-6 py-4 text-sm text-rose-700'
          }
        >
          {message}
        </div>
      )}
    </form>
  );
}





