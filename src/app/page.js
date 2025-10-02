import { ReservationForm } from '../components/reservation-form';

const categories = [
  {
    name: 'Edition Signature',
    blurb:
      'Assemblage sur rendez-vous. Sellerie pleine fleur, calibrage dynamique et concierge dedie 7j/7.',
    image:
      'https://images.unsplash.com/photo-1542367597-709070f0b5c7?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'L7 Atlantique',
    blurb:
      'Pour les horaires tendus entre capitale et littoral. Habitacle lumineux, autonomie et services de transfert portes clos.',
    image:
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'L7 Nocturne',
    blurb:
      'Configuration lounge, traitement acoustique et pack securite discret pour les deplacements tardifs.',
    image:
      'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=1600&auto=format&fit=crop',
  },
];

const proofPoints = [
  {
    title: '30 jours',
    description: 'Delai moyen entre la session de specification et la remise des cles.',
  },
  {
    title: '92 %',
    description: 'Clients dirigeants recommandant Atelier L7 a leur comex.',
  },
  {
    title: '12 villes',
    description: 'Couverture concierge pour essais prives en Europe.',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] text-slate-900 font-['Helvetica Neue','SF Pro Display',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif]">
      <header className="sticky top-0 z-30 border-b border-slate-200/50 bg-[#f3f4f6]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-[0.4em] text-slate-500">Atelier</span>
            <span className="text-base font-semibold tracking-tight text-slate-900">L7</span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-slate-500">
            <a className="transition hover:text-slate-900" href="#collections">
              Collections
            </a>
            <a className="transition hover:text-slate-900" href="#experiences">
              Experiences
            </a>
            <a className="transition hover:text-slate-900" href="#reservation">
              Reservation privee
            </a>
            <button className="rounded-full border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-[1px] hover:border-slate-400 hover:bg-white">
              Espace client
            </button>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-24 lg:pt-28">
        <section className="flex flex-col gap-12 md:flex-row md:items-end">
          <div className="flex-1 space-y-8">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Mobilite taillee pour les directions</p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Une experience automobile de direction, sans compromis temporel
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
              Atelier L7 concilie exigence executive et confort total. Nous orchestrons des vehicules L7 cites par les comites de direction pour leur discretion, leur autonomie urbaine et la qualite de service signature de nos equipes.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                className="rounded-full bg-slate-900 px-7 py-3 text-sm font-medium text-white transition hover:-translate-y-[2px] hover:bg-slate-800 shadow-[0_14px_34px_rgba(15,23,42,0.18)]"
                href="#collections"
              >
                Explorer les configurations
              </a>
              <a
                className="rounded-full border border-slate-300 px-7 py-3 text-sm font-medium text-slate-700 transition hover:-translate-y-[2px] hover:border-slate-400 hover:bg-white"
                href="#reservation"
              >
                Demander un acces prioritaire
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {proofPoints.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white/80 px-5 py-4 shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
                >
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-400">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden flex-1 flex-col gap-6 self-stretch md:flex">
            <div className="h-full rounded-[32px] bg-gradient-to-br from-slate-200/50 via-white to-white p-[2px]">
              <div className="flex h-full flex-col justify-between rounded-[30px] bg-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Pourquoi L7 maintenant</p>
                  <p className="text-base leading-relaxed text-slate-600">
                    Les directives Zero Emission reshaping les centres-villes. Nous livrons des vehicules categorie L7 adaptes aux contraintes de circulation tout en conservant l&apos;ergonomie d&apos;un salon prive.
                  </p>
                </div>
                <div className="space-y-2 border-t border-slate-100 pt-4 text-sm text-slate-500">
                  <p>? Sessions de configuration tenues par un expert ingenierie + un responsable experience.</p>
                  <p>? Mise a disposition d&apos;un vehicule relais pendant la preparation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="collections" className="space-y-12">
          <header className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Collections Atelier L7</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Choisissez le scenario de deplacement qui correspond a votre agenda
            </h2>
            <p className="max-w-2xl text-base text-slate-600">
              Chaque edition est concue avec un objectif clair: optimiser le temps de trajet, la confidentialite et l&apos;impact environnemental. Nos equipes ajustent ensuite finitions, logiciels embarques et services associes.
            </p>
          </header>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <a
                key={category.name}
                className="group relative flex min-h-[340px] flex-col justify-end overflow-hidden rounded-[28px] bg-white shadow-[0_28px_70px_rgba(15,23,42,0.12)] transition duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_36px_80px_rgba(15,23,42,0.16)]"
                href="#reservation"
              >
                <img
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-95 transition duration-700 ease-out filter brightness-[0.9] contrast-[0.95] saturate-[0.85] group-hover:brightness-100 group-hover:contrast-100 group-hover:saturate-100"
                  src={category.image}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,15,30,0.05) 0%,rgba(10,15,30,0.55) 85%)]" />
                <div className="relative z-10 space-y-4 px-8 pb-10">
                  <span className="inline-flex rounded-full border border-white/30 bg-white/20 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/80 backdrop-blur-md">
                    Atelier L7
                  </span>
                  <h3 className="text-2xl font-semibold tracking-tight text-white">{category.name}</h3>
                  <p className="max-w-xs text-sm leading-relaxed text-white/85">{category.blurb}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-white/90 transition group-hover:translate-x-1">
                    Voir le detail
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

        <section id="reservation" className="grid gap-12 rounded-[36px] border border-slate-200 bg-white px-10 py-14 shadow-[0_24px_80px_rgba(15,23,42,0.12)] md:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col justify-between gap-10">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Acces restreint</p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Rejoindre la waiting list et planifier votre session de configuration
              </h2>
              <p className="max-w-xl text-base text-slate-600">
                Nos conseillers orchestrent un rendez-vous dedie (en lounge prive ou a distance) dans les 48h. Vous recevrez un premier cadrage technique, les options prioritaires et une projection budgetaire claire.
              </p>
            </div>
            <div className="grid gap-4 text-sm text-slate-600">
              <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-slate-400" />
                <span>Evaluation de vos usages actuels, profils chauffeurs et contraintes de flotte.</span>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-slate-400" />
                <span>Plan de mise a la route personnalise, incluant formation chauffeur et maintenance proactive.</span>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-slate-400" />
                <span>Confidentialite contractuelle et support prioritaire 24/7.</span>
              </div>
            </div>
          </div>
          <ReservationForm />
        </section>

        <section id="experiences" className="grid gap-12 rounded-[32px] border border-slate-200 bg-white px-10 py-12 shadow-[0_18px_70px_rgba(15,23,42,0.1)] md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Experiences privees</p>
            <h3 className="text-3xl font-semibold tracking-tight text-slate-900">
              Des immersions methode Sprint pour valider chaque decision
            </h3>
            <p className="text-base leading-relaxed text-slate-600">
              Nous combinons expertise produit, legal et financier pour aider les directions a verrouiller leur strategie de mobilite. Chaque session est cadree: feuille de route, analyse TCO, scenarii de recharge et plan de communication interne.
            </p>
            <div className="flex flex-wrap gap-4">
              <a className="rounded-full bg-slate-900 px-7 py-3 text-sm font-medium text-white transition hover:-translate-y-[2px] hover:bg-slate-800" href="#reservation">
                Programmer une immersion
              </a>
              <a className="rounded-full border border-slate-300 px-7 py-3 text-sm font-medium text-slate-700 transition hover:-translate-y-[2px] hover:border-slate-400 hover:bg-white" href="#">
                Telecharger le memo decisionnel
              </a>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-slate-100 via-white to-white p-[2px]">
            <div className="flex h-full flex-col justify-between rounded-[26px] bg-white/90 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Tableau de bord</p>
                <p className="text-base text-slate-600">
                  Acces a un cockpit digital pour suivre les jalons: validation juridique, fabrication, livraison et satisfaction passagers.
                </p>
              </div>
              <div className="mt-10 space-y-2 text-sm text-slate-600">
                <p className="font-medium text-slate-900">Concierge dirigeant</p>
                <p>+33 1 02 03 04 05</p>
                <p>concierge@atelier-l7.com</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white/90 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Atelier L7. Tous droits reserves.</span>
          <div className="flex gap-6">
            <a className="hover:text-slate-700" href="#">
              Mentions legales
            </a>
            <a className="hover:text-slate-700" href="#">
              Confidentialite
            </a>
            <a className="hover:text-slate-700" href="#">
              Presse
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}


