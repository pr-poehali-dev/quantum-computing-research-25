interface HeroProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    title: "Sergei Korolev",
    subtitle: "Chief Designer of the Soviet Space Program",
    description: "The man who launched humanity into the cosmos — engineer, visionary, and father of the Space Age",
  },
  de: {
    title: "Sergei Koroljow",
    subtitle: "Chefkonstrukteur des sowjetischen Raumfahrtprogramms",
    description: "Der Mann, der die Menschheit in den Kosmos brachte — Ingenieur, Visionär und Vater des Weltraumzeitalters",
  },
  ru: {
    title: "Сергей Павлович Королёв",
    subtitle: "Главный конструктор советской космической программы",
    description: "Человек, открывший человечеству путь в космос — инженер, провидец и отец космической эры",
  },
}

export default function Hero({ language }: HeroProps) {
  const t = translations[language]

  return (
    <section id="hero" className="relative pt-40 pb-32 md:pt-56 md:pb-48 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.poehali.dev/projects/ef5d41d9-6718-4ae8-a1d9-4a17507c0c90/files/32f72065-5ccf-403f-a31e-7739e78eb23d.jpg"
          alt="Rocket launch at Baikonur"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/35"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-white mb-6 animate-fade-in-up">{t.title}</h1>
          <h3 className="text-white font-light mb-8 animate-fade-in-up animation-delay-100">{t.subtitle}</h3>
          <div className="line-accent mb-10 animate-fade-in-up animation-delay-200"></div>
          <p className="text-white font-light max-w-2xl mb-16 animate-fade-in-up animation-delay-300">{t.description}</p>


        </div>
      </div>
    </section>
  )
}