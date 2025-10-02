import { ReservationForm } from '../components/reservation-form';

const categories = [
  {
    name: "Edition Signature",
    blurb: "Finitions artisanales, confort haute couture et technologie invisible.",
    image:
      "https://images.unsplash.com/photo-1542367597-709070f0b5c7?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "L7 Atlantique",
    blurb: "Un souffle marin, un habitacle epure et lumineux pour voyager loin.",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "L7 Nocturne",
    blurb: "Velours sombre, lignes tendues et silence magistral.",
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f6f7f9] text-slate-900 font-['Helvetica Neue','SF Pro Display',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif]">
      <header className="sticky top-0 z-30 bg-[#f6f7f9]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5"> 
          <div className="flex items-center gap-2">
            <span className="text-sm uppercase tracking-[0.4em] text-slate-500">L7</span>
            <span className="text-lg font-semibold tracking-tight text-slate-900">
              Atelier
            </span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-slate-500">
            <a className="transition hover:text-slate-900" href="#collections">
              Collections
            </a>
            <a className="transition hover:text-slate-900" href="#experiences">
              Experiences
            </a>
            <a className="transition hover:text-slate-900" href="#reservation">
              Reservations
            </a>
            <button className="rounded-full border border-slate-200 px-5 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-[1px] hover:border-slate-300 hover:bg-white/60">
              Se connecter
            </button>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-24 lg:pt-28">
        <section className="flex flex-col gap-10 md:flex-row md:items-end">
          <div className="flex-1 space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Nouvelle collection</p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              L7, l&apos;echappee contemporaine
            </h1>
            <p className="max-w-xl text-lg text-slate-500">
              Des lignes sensibles, des volumes epures et une experience inspiree par l&apos;hospitalite des maisons les plus desirees. Chaque detail est pense pour ressentir le voyage autrement.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                className="rounded-full border border-[#d9d6cf] bg-[#efece6] px-6 py-2 text-sm font-medium text-slate-900 shadow-[0_8px_30px_rgba(12,18,31,0.04)] transition hover:-translate-y-[2px] hover:shadow-[0_16px_40px_rgba(12,18,31,0.08)]"
                href="#collections"
              >
                Prendre rendez-vous
              </a>
              <a className="rounded-full px-6 py-2 text-sm font-medium text-slate-500 transition hover:text-slate-900" href="#reservation">
                Rejoindre la waiting list
              </a>
            </div>
          </div>
          <div className="hidden flex-1 flex-col gap-6 self-stretch md:flex">
            <div className="h-full rounded-[32px] bg-gradient-to-br from-slate-200/40 via-white to-white p-[2px]">
              <div className="h-full rounded-[30px] bg-white p-8">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Manifesto</p>
                <p className="mt-4 text-base leading-relaxed text-slate-500">
                  Faire dialoguer artisanat et technologie. Recomposer la lumiere a l&apos;interieur. Creer des voyages qui respirent autant que les maisons qui les inspirent.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="collections" className="space-y-10">
          <header className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Collections L7</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Des univers senses et parfaitement calibres
            </h2>
            <p className="max-w-2xl text-base text-slate-500">
              Des cartes photographiques sobres, imaginees pour laisser respirer la texture des materiaux et sublimer chaque edition.
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <a
                key={category.name}
                className="group relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-[28px] bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)] transition duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_32px_70px_rgba(15,23,42,0.12)]"
                href="#"
              >
                <img
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-95 transition duration-700 ease-out filter brightness-[0.95] contrast-[0.92] saturate-[0.82] group-hover:brightness-[1.02] group-hover:contrast-100 group-hover:saturate-100"
                  src={category.image}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(255,255,255,0.6),transparent_55%),linear-gradient(180deg,rgba(12,18,31,0.1),rgba(12,18,31,0.55))] transition-opacity duration-500 group-hover:opacity-90" />
                <div className="relative z-10 space-y-4 px-8 pb-10">
                  <span className="inline-flex rounded-full border border-white/40 bg-white/20 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/80 backdrop-blur-md">
                    Maison L7
                  </span>
                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    {category.name}
                  </h3>
                  <p className="max-w-xs text-sm leading-relaxed text-white/80">
                    {category.blurb}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-white transition group-hover:translate-x-1">
                    Voir les details
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5 10h10" />
                      <path d="m11 6 4 4-4 4" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        

        <section id="reservation" className="grid gap-12 rounded-[36px] border border-slate-100 bg-white/80 px-10 py-14 shadow-[0_20px_70px_rgba(15,23,42,0.08)] md:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-between gap-10">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Waiting list privee</p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Conservez votre place pour les prochaines livraisons
              </h2>
              <p className="max-w-xl text-base text-slate-500">
                Partagez vos preferences et laissez nos equipes orchestrer une reservation personnalisee. Nous coordonnons ensuite un rendez-vous prive en lounge ou a distance selon vos disponibilites.
              </p>
            </div>
            <div className="grid gap-3 text-sm text-slate-500">
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                <span>Recommandations de modeles adaptees a votre usage.</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                <span>Acces prioritaire aux configurations limitees.</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                <span>Conciergerie dediee avant, pendant et apres la commande.</span>
              </div>
            </div>
          </div>
          <ReservationForm />
        </section>

<section id="experiences" className="grid gap-12 rounded-[32px] border border-slate-100 bg-white/80 px-10 py-12 shadow-[0_12px_50px_rgba(15,23,42,0.07)] md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Experiences privees</p>
            <h3 className="text-3xl font-semibold tracking-tight text-slate-900">
              Configurations sur mesure et ateliers sensoriels
            </h3>
            <p className="text-base leading-relaxed text-slate-500">
              Nos conseillers vous recoivent dans des salons epures, inspires des galeries les plus raffinees. Chaque session est personnalisee, rythmee par des textures, des fragrances et des eclairages qui dialoguent avec votre futur modele.
            </p>
            <div className="flex flex-wrap gap-4">
              <a className="rounded-full bg-slate-900 px-6 py-2 text-sm font-medium text-white transition hover:-translate-y-[2px] hover:bg-slate-800" href="#">
                Reserver une immersion
              </a>
              <a className="rounded-full border border-slate-200 px-6 py-2 text-sm font-medium text-slate-600 transition hover:-translate-y-[2px] hover:border-slate-300 hover:bg-slate-50" href="#">
                Demander une brochure
              </a>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-slate-100 via-white to-white p-[2px]">
            <div className="flex h-full flex-col justify-between rounded-[26px] bg-white/90 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Maison privee</p>
                <p className="text-base text-slate-500">
                  Une equipe mobile peut recreer nos lounges chez vous ou dans vos bureaux pour une selection discrete.
                </p>
              </div>
              <div className="mt-10 space-y-1 text-sm text-slate-500">
                <p>Line directe concierge</p>
                <a className="text-sm font-medium text-slate-900 underline-offset-4 hover:underline" href="tel:+33102030405">
                  +33 1 02 03 04 05
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200/60 bg-white/80 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Atelier L7. Tous droits reserves.</span>
          <div className="flex gap-6">
            <a className="hover:text-slate-600" href="#">
              Mentions legales
            </a>
            <a className="hover:text-slate-600" href="#">
              Confidentialite
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}








