interface BiographyProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Biography",
    paragraphs: [
      "Sergei Pavlovich Korolev was born on January 12, 1907, in Zhytomyr, in the Russian Empire (now Ukraine). From childhood he was fascinated by aviation and engineering. After graduating from the Odessa Construction Trade School, he enrolled at the Kyiv Polytechnic Institute, and later transferred to the Bauman Moscow State Technical University, where he earned his degree in aeronautical engineering.",
      "In 1931, together with Friedrich Tsander, Korolev co-founded GIRD — the Group for the Study of Reactive Motion — a pioneering organization in Soviet rocketry. In 1933, under his leadership, the first Soviet liquid-propellant rocket GIRD-09 was successfully launched.",
      "In 1938, at the height of Stalin's Great Purge, Korolev was arrested on fabricated charges and sentenced to ten years in a labour camp in Kolyma. He survived only because leading Soviet aviation engineers personally petitioned for his release, and he was transferred to a sharashka — a secret prison research institute.",
      "After the war, Korolev led the Soviet effort to develop ballistic missiles based on captured German V-2 technology. In 1957, under his direction, the world's first intercontinental ballistic missile R-7 was successfully tested — and later used to launch Sputnik-1, the first artificial satellite in history, on October 4, 1957.",
      "On April 12, 1961, the Vostok-1 spacecraft, designed by Korolev, carried Yuri Gagarin into orbit — making him the first human in space. Korolev also directed the programs of the first spacewalk (Alexei Leonov, 1965) and the first probes to the Moon, Mars, and Venus.",
      "Sergei Korolev passed away on January 14, 1966, during a routine surgical operation. His true identity as the mastermind behind the Soviet space program was kept secret throughout his lifetime and revealed only after his death. He remains one of the greatest engineers and visionaries of the 20th century.",
    ],
  },
  de: {
    heading: "Biografie",
    paragraphs: [
      "Sergei Pawlowitsch Koroljow wurde am 12. Januar 1907 in Schitomir im Russischen Reich (heute Ukraine) geboren. Von Kindheit an faszinierten ihn Luftfahrt und Technik. Nach seinem Abschluss an der Odessaer Baufachschule studierte er am Kiewer Polytechnischen Institut und später an der Bauman-Moskauer Staatlichen Technischen Universität, wo er seinen Abschluss in Luftfahrtingenieurwesen erwarb.",
      "Im Jahr 1931 gründete Koroljow gemeinsam mit Friedrich Zander die GIRD — die Gruppe zur Erforschung reaktiver Antriebe — eine Pionierorganisation der sowjetischen Raketentechnik. 1933 wurde unter seiner Leitung die erste sowjetische Flüssigkeitsrakete GIRD-09 erfolgreich gestartet.",
      "Im Jahr 1938, auf dem Höhepunkt von Stalins Großem Terror, wurde Koroljow auf fabrizierte Anklagen hin verhaftet und zu zehn Jahren Arbeitslager in Kolyma verurteilt. Er überlebte nur dank persönlicher Fürsprache führender sowjetischer Luftfahrtingenieure und wurde in eine Scharaschka — ein geheimes Gefängnisforschungsinstitut — verlegt.",
      "Nach dem Krieg leitete Koroljow die sowjetischen Bemühungen zur Entwicklung von Ballistic Missiles auf der Grundlage erbeuteter deutscher V-2-Technologie. Im Jahr 1957 wurde unter seiner Leitung die erste interkontinentale ballistische Rakete R-7 erfolgreich getestet — und später genutzt, um am 4. Oktober 1957 Sputnik-1, den ersten künstlichen Satelliten der Geschichte, in den Orbit zu bringen.",
      "Am 12. April 1961 brachte das von Koroljow konstruierte Raumschiff Wostok-1 Juri Gagarin in den Orbit — den ersten Menschen im Weltraum. Koroljow leitete auch die Programme des ersten Weltraumausstiegs (Alexei Leonow, 1965) sowie der ersten Sonden zum Mond, Mars und zur Venus.",
      "Sergei Koroljow starb am 14. Januar 1966 während einer routinemäßigen Operation. Seine wahre Identität als Kopf des sowjetischen Raumfahrtprogramms blieb zu seinen Lebzeiten geheim und wurde erst nach seinem Tod enthüllt. Er gilt als einer der größten Ingenieure und Visionäre des 20. Jahrhunderts.",
    ],
  },
  ru: {
    heading: "Биография",
    paragraphs: [
      "Сергей Павлович Королёв родился 12 января 1907 года в Житомире, в Российской империи (ныне Украина). С детства его увлекали авиация и техника. После окончания Одесской стройпрофшколы он поступил в Киевский политехнический институт, а затем перевёлся в Московское высшее техническое училище имени Баумана, которое окончил по специальности «авиационная техника».",
      "В 1931 году совместно с Фридрихом Цандером Королёв основал ГИРД — Группу изучения реактивного движения — пионерскую организацию советского ракетостроения. В 1933 году под его руководством была успешно запущена первая советская жидкостная ракета ГИРД-09.",
      "В 1938 году, в разгар сталинских репрессий, Королёв был арестован по сфабрикованным обвинениям и приговорён к десяти годам лагерей в Колыме. Он выжил лишь благодаря личным ходатайствам ведущих советских авиационных конструкторов и был переведён в шарашку — секретный научно-исследовательский институт при тюрьме.",
      "После войны Королёв возглавил советские работы по созданию баллистических ракет на основе трофейных немецких технологий V-2. В 1957 году под его руководством была успешно испытана первая в мире межконтинентальная баллистическая ракета Р-7, а затем 4 октября 1957 года с её помощью был выведен на орбиту первый в истории искусственный спутник Земли — «Спутник-1».",
      "12 апреля 1961 года корабль «Восток-1», созданный Королёвым, вывел на орбиту Юрия Гагарина — первого человека в космосе. Под руководством Королёва были осуществлены также программы первого выхода в открытый космос (Алексей Леонов, 1965) и первые зонды к Луне, Марсу и Венере.",
      "Сергей Павлович Королёв скончался 14 января 1966 года во время плановой хирургической операции. Его подлинная роль как создателя советской космической программы была засекречена при жизни и раскрыта лишь после смерти. Он навсегда остался одним из величайших инженеров и провидцев XX века.",
    ],
  },
}

export default function Biography({ language }: BiographyProps) {
  const t = translations[language]

  return (
    <section id="biography" className="py-24 md:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-charcoal mb-12 text-pretty">
          {t.heading}
        </h2>
        <div className="space-y-6">
          {t.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg leading-relaxed text-charcoal/90 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}