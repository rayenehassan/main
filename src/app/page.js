import { ReservationForm } from '../components/reservation-form';

const experiences = [
  {
    name: 'Balade Executive',
    blurb:
      'Un golden retriever habitue aux environnements urbains accompagne vos clients pour une pause detente de 90 minutes.',
    image:
      'https://images.unsplash.com/photo-1507145569372-d69bae8bc9a0?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Weekend Immersion',
    blurb:
      'Recevez un duo chien + coach pour un week-end test avant adoption. Logistique, nourriture et planning fournis.',
    image:
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Dog Office Break',
    blurb:
      'Un border collie sociable anime une session anti-stress pour votre equipe. Ideal pour les sprints intenses.',
    image:
      'https://images.unsplash.com/photo-1517848940025-5ca381bb4857?q=80&w=1600&auto=format&fit=crop',
  },
];

const proofPoints = [
  {
    title: '48h',
    description: 'Delai moyen entre votre brief et la premiere experience avec un chien valide par nos refuges partenaires.',
  },
  {
    title: '74 %',
    description: 'Utilisateurs qui envisagent une adoption apres deux experiences UberDog.',
  },
  {
    title: '120 refuges',
    description: 'Reseau partenaire couvrant France et Benelux pour maximiser les mises en relation utiles.',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f3f5f7] text-slate-900 font-['Helvetica Neue','SF Pro Display',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif]">
      <header className="sticky top-0 z-30 border-b border-slate-200/50 bg-[#f3f5f7]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-[0.45em] text-slate-500">Uber</span>
            <span className="text-base font-semibold tracking-tight text-slate-900">Dog</span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-slate-500">
            <a className="transition hover:text-slate-900" href="#experiences">
              Experiences
            </a>
            <a className="transition hover:text-slate-900" href="#refuges">
              Refuges partenaires
            </a>
            <a className="transition hover:text-slate-900" href="#reservation">
              Demande d experience
            </a>
            <button className="rounded-full border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-[1px] hover:border-slate-400 hover:bg-white">
              Se connecter
            </button>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-24 lg:pt-28">
        <section className="flex flex-col gap-12 md:flex-row md:items-end">
          <div className="flex-1 space-y-8">
            <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Le chien a la demande</p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Testez la vie avec un chien sans engagement et soutenez les refuges
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
              UberDog met en relation des refuges et des particuliers verifies pour des experiences canines controlees: balade express, week-end immersion ou team break en entreprise. Vous beneficiez d un programme cle en main, les refuges financent mieux leurs pensions, et les chiens profitent d interactions de qualite avant adoption.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                className="rounded-full bg-slate-900 px-7 py-3 text-sm font-medium text-white transition hover:-translate-y-[2px] hover:bg-slate-800 shadow-[0_14px_34px_rgba(15,23,42,0.18)]"
                href="#experiences"
              >
                Parcourir les experiences
              </a>
              <a
                className="rounded-full border border-slate-300 px-7 py-3 text-sm font-medium text-slate-700 transition hover:-translate-y-[2px] hover:border-slate-400 hover:bg-white"
                href="#reservation"
              >
                Briefer notre equipe
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {proofPoints.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white/85 px-5 py-4 shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
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
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Pourquoi UberDog</p>
                  <p className="text-base leading-relaxed text-slate-600">
                    Les refuges croulent sous les demandes d adoption impulsive. Nous instaurons un sas responsable: verification des profils, brief comportemental et experiences progressives.
                  </p>
                </div>
                <div className="space-y-2 border-t border-slate-100 pt-4 text-sm text-slate-500">
                  <p>? Pack assurance incluse et transporteur agree.</p>
                  <p>? Debrief comportemental remis sous 24h au refuge.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experiences" className="space-y-12">
          <header className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Catalogue UberDog</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Choisissez l experience canine qui correspond a votre rythme
            </h2>
            <p className="max-w-2xl text-base text-slate-600">
              Chaque experience est concue avec un refuge partenaire. Nous preparons les duos chien + accompagant, fournissons le kit logistique et assurons un suivi comportemental complet.
            </p>
          </header>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((experience) => (
              <a
                key={experience.name}
                className="group relative flex min-h-[340px] flex-col justify-end overflow-hidden rounded-[28px] bg-white shadow-[0_28px_70px_rgba(15,23,42,0.12)] transition duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_36px_80px_rgba(15,23,42,0.16)]"
                href="#reservation"
              >
                <img
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-95 transition duration-700 ease-out filter brightness-[0.92] contrast-[0.95] saturate-[0.9] group-hover:brightness-100 group-hover:contrast-100 group-hover:saturate-100"
                  src={experience.image}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,15,30,0.05) 0%,rgba(10,15,30,0.55) 85%)]" />
                <div className="relative z-10 space-y-4 px-8 pb-10">
                  <span className="inline-flex rounded-full border border-white/30 bg-white/20 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/80 backdrop-blur-md">
                    UberDog Select
                  </span>
                  <h3 className="text-2xl font-semibold tracking-tight text-white">{experience.name}</h3>
                  <p className="max-w-xs text-sm leading-relaxed text-white/85">{experience.blurb}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-white/90 transition group-hover:translate-x-1">
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

        <section id="refuges" className="grid gap-12 rounded-[34px] border border-slate-200 bg-white px-10 py-14 shadow-[0_22px_70px_rgba(15,23,42,0.1)] md:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Impact refuges</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Chaque experience finance les soins et facilite l adoption responsable
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              Les refuges partenaires valident chaque chien et recuperent un reporting complet apres l experience. Nous couvrons les frais de transport, d assurance, ainsi qu un bonus financier affecte a la sante et a la formation.
            </p>
            <div className="grid gap-4 text-sm text-slate-600 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3">
                <p className="font-medium text-slate-900">Selection rigoureuse</p>
                <p>Equipe educateurs canins + veterinaire partenaire pour valider temperament et besoins.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3">
                <p className="font-medium text-slate-900">Suivi adoption</p>
                <p>Les familles peuvent prolonger l experience ou enclencher une adoption accompagnee.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-[28px] border border-slate-200 bg-white/90 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
            <div className="space-y-2 text-sm text-slate-600">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Refuges partenaires</p>
              <p>Nous travaillons avec la SPA, Seconde Chance et un reReseau de refuges independants verifies. Chaque experience est couverte par notre assurance groupe.</p>
            </div>
            <div className="space-y-2 text-sm text-slate-600">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Questions frequentes</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>Comment se deroulent les briefings ? 20 minutes en visio avec un educateur UberDog.</li>
                <li>Qui gere le transport ? Chauffeurs partenaires agrees animal friendly.</li>
                <li>Et si je veux adopter ? Nous coordonnons directement avec le refuge.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="reservation" className="grid gap-12 rounded-[36px] border border-slate-200 bg-white px-10 py-14 shadow-[0_24px_80px_rgba(15,23,42,0.12)] md:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col justify-between gap-10">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Acces controle</p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Briefer UberDog et recevoir une proposition adaptee
              </h2>
              <p className="max-w-xl text-base text-slate-600">
                En 48h, nous planifions votre premiere experience, vous envoyons le profil du chien et les conditions d accueil. Vous ne payez que si la proposition vous convient.
              </p>
            </div>
            <div className="grid gap-4 text-sm text-slate-600">
              <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-slate-400" />
                <span>Verification identite et environnement effectuee une fois pour toutes.</span>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-slate-400" />
                <span>Assurance responsabilite incluse pour la duree de l experience.</span>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-slate-400" />
                <span>Feedback partage au refuge + recommandation adoption si affinite.</span>
              </div>
            </div>
          </div>
          <ReservationForm />
        </section>

        <section id="experiences-plus" className="grid gap-12 rounded-[32px] border border-slate-200 bg-white px-10 py-12 shadow-[0_18px_70px_rgba(15,23,42,0.1)] md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Programmes entreprises</p>
            <h3 className="text-3xl font-semibold tracking-tight text-slate-900">
              Un protocole RH pour integrer l experience chien sans friction
            </h3>
            <p className="text-base leading-relaxed text-slate-600">
              UberDog fournit un kit RH: charte sanitaire, assurance collective, plan de communication interne et atelier d onboarding. Vos equipes experimentent les benefices therapeutiques tout en soutenant les refuges.
            </p>
            <div className="flex flex-wrap gap-4">
              <a className="rounded-full bg-slate-900 px-7 py-3 text-sm font-medium text-white transition hover:-translate-y-[2px] hover:bg-slate-800" href="#reservation">
                Demander une session pilote
              </a>
              <a className="rounded-full border border-slate-300 px-7 py-3 text-sm font-medium text-slate-700 transition hover:-translate-y-[2px] hover:border-slate-400 hover:bg-white" href="#">
                Telecharger le kit RH
              </a>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-slate-100 via-white to-white p-[2px]">
            <div className="flex h-full flex-col justify-between rounded-[26px] bg-white/90 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Concierge</p>
                <p className="text-base text-slate-600">
                  Ligne directe: +33 1 86 95 28 12
                </p>
                <p className="text-base text-slate-600">
                  Email: pro@uberdog.io
                </p>
              </div>
              <div className="space-y-2 text-sm text-slate-600">
                <p>Support 7j/7 pendant l experience.</p>
                <p>Formation express des collaborateurs disponible sur demande.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white/90 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} UberDog. Tous droits reserves.</span>
          <div className="flex gap-6">
            <a className="hover:text-slate-700" href="#">
              Mentions legales
            </a>
            <a className="hover:text-slate-700" href="#">
              Refuges
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

