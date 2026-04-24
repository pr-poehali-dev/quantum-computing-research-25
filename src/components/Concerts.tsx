interface ConcertsProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Key Milestones",
    learnMore: "Learn More",
  },
  de: {
    heading: "Wichtige Meilensteine",
    learnMore: "Mehr erfahren",
  },
  ru: {
    heading: "Ключевые события",
    learnMore: "Подробнее",
  },
}

const concerts = {
  en: [
    {
      date: "October 4, 1957",
      time: "22:28 MSK",
      title: "Launch of Sputnik-1",
      venue: "Baikonur Cosmodrome",
      location: "Kazakhstan, USSR",
    },
    {
      date: "April 12, 1961",
      time: "09:07 MSK",
      title: "Vostok-1: Yuri Gagarin in Space",
      venue: "Baikonur Cosmodrome",
      location: "Kazakhstan, USSR",
    },
    {
      date: "March 18, 1965",
      time: "Flight Day 2",
      title: "First Spacewalk — Alexei Leonov",
      venue: "Voskhod-2 Mission",
      location: "Earth Orbit",
    },
  ],
  de: [
    {
      date: "4. Oktober 1957",
      time: "22:28 MSK",
      title: "Start von Sputnik-1",
      venue: "Kosmodrom Baikonur",
      location: "Kasachstan, UdSSR",
    },
    {
      date: "12. April 1961",
      time: "09:07 MSK",
      title: "Wostok-1: Juri Gagarin im Weltall",
      venue: "Kosmodrom Baikonur",
      location: "Kasachstan, UdSSR",
    },
    {
      date: "18. März 1965",
      time: "2. Flugtag",
      title: "Erster Weltraumausstieg — Alexei Leonow",
      venue: "Woschod-2-Mission",
      location: "Erdumlaufbahn",
    },
  ],
  ru: [
    {
      date: "4 октября 1957",
      time: "22:28 МСК",
      title: "Запуск «Спутника-1»",
      venue: "Космодром Байконур",
      location: "Казахстан, СССР",
    },
    {
      date: "12 апреля 1961",
      time: "09:07 МСК",
      title: "Восток-1: Юрий Гагарин в космосе",
      venue: "Космодром Байконур",
      location: "Казахстан, СССР",
    },
    {
      date: "18 марта 1965",
      time: "2-й день полёта",
      title: "Первый выход в открытый космос — Алексей Леонов",
      venue: "Миссия «Восход-2»",
      location: "Орбита Земли",
    },
  ],
}

export default function Concerts({ language }: ConcertsProps) {
  const t = translations[language]
  const concertList = concerts[language]

  return (
    <section id="concerts" className="py-32 md:py-48 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-charcoal mb-6">{t.heading}</h2>
          <div className="line-accent"></div>
        </div>

        <div className="space-y-8">
          {concertList.map((concert, idx) => (
            <div key={idx} className="pb-8 border-b border-taupe/30 last:border-b-0">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-start">
                <div>
                  <h3 className="text-charcoal mb-1">{concert.date}</h3>
                  <small className="text-taupe">{concert.time}</small>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-charcoal mb-1">{concert.title}</h3>
                  <p className="text-charcoal/70 mb-1">{concert.venue}</p>
                  <small className="text-taupe">{concert.location}</small>
                </div>
                <div className="flex justify-start md:justify-end">
                  <button className="text-gold hover:text-gold/80 transition-colors text-sm font-medium">
                    {t.learnMore} &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}