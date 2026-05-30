import Link from "next/link";

export const metadata = {
  title: "Dane i źródła",
  description:
    "Jakie dane zbiera HighScanner, skąd pochodzą, czego nie robimy oraz procedura zgłoszenia naruszenia.",
};

export default function DanePage() {
  return (
    <div className="flex flex-col flex-1">
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight text-lg">
            HighScanner<span className="text-emerald-600">.pl</span>
          </Link>
          <nav className="flex gap-6 text-sm">
            <Link href="/" className="hover:underline">
              Strona główna
            </Link>
            <a href="mailto:kontakt@highscanner.pl" className="hover:underline">
              Kontakt
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          Dane i źródła
        </h1>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Strona wyjaśnia jakie dane zbieramy, skąd pochodzą, czego{" "}
          <em>nie</em> robimy oraz jak zgłosić podejrzenie naruszenia praw do
          chronionej bazy danych.
        </p>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight">
            1. Jakie dane zbieramy
          </h2>
          <ul className="mt-4 space-y-2 text-zinc-700 dark:text-zinc-300 leading-relaxed list-disc list-outside pl-6">
            <li>
              Punktowe obserwacje cen i dostępności wyrobów z konopi
              indyjskich w aptekach na terenie Polski — para
              (apteka, produkt, cena, znacznik czasu).
            </li>
            <li>
              Metadane produktów (nazwa rejestracyjna, producent,
              stężenie THC/CBD) pochodzące z publicznych ogłoszeń aptek
              i zgłoszeń użytkowników.
            </li>
            <li>
              Wkład społeczności: zdjęcia paragonów / cenników przesyłane
              dobrowolnie przez pacjentów, rozpoznawane przez OCR.
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight">
            2. Skąd pochodzą dane
          </h2>
          <ul className="mt-4 space-y-2 text-zinc-700 dark:text-zinc-300 leading-relaxed list-disc list-outside pl-6">
            <li>
              <strong>Paragony użytkowników</strong> — pacjenci wrzucają
              zdjęcia paragonów / cenników do bota na Telegramie lub
              Discordzie. System OCR rozpoznaje cenę, nazwę odmiany,
              aptekę i datę. Za wkład w bazę użytkownik otrzymuje punkty.
            </li>
            <li>
              <strong>Publicznie udostępniane informacje aptek</strong> —
              część aptek publikuje swój asortyment medyczny w
              ogólnodostępny sposób (strony aptek, marketing, media
              społecznościowe).
            </li>
            <li>
              <strong>Własne zgłoszenia społeczności</strong> — Discord i
              Telegram zawierają kanały, w których pacjenci dzielą się
              tekstowo cenami widzianymi w konkretnych aptekach.
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight">
            3. Czego NIE robimy
          </h2>
          <ul className="mt-4 space-y-2 text-zinc-700 dark:text-zinc-300 leading-relaxed list-disc list-outside pl-6">
            <li>
              Nie pobieramy zawartości żadnej konkretnej zewnętrznej bazy
              danych w całości ani w istotnej części (jakościowo lub
              ilościowo) w rozumieniu ustawy z dnia 27 lipca 2001 r. o
              ochronie baz danych.
            </li>
            <li>
              Nie publikujemy ani nie redystrybuujemy zawartości innych
              chronionych baz danych.
            </li>
            <li>
              Nie sprzedajemy danych użytkowników (numery telefonu,
              identyfikatory Telegram, lokalizacje, historia zakupów).
            </li>
            <li>
              Nie udostępniamy publicznego API, które byłoby mirrorem
              zawartości jakiejkolwiek innej bazy.
            </li>
            <li>
              Nie pobieramy reklam od aptek, nie mamy linków
              afiliacyjnych ani umów typu „pay-for-placement&rdquo;.
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight">
            4. Zgłoszenie naruszenia (procedura takedown)
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Jeśli jesteś producentem (właścicielem) chronionej bazy
            danych w rozumieniu art. 2 ustawy o ochronie baz danych i
            sądzisz, że konkretne dane wykorzystywane w HighScannerze
            naruszają Twoje prawa wyłączne, prosimy o kontakt:
          </p>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            ✉️{" "}
            <a
              href="mailto:kontakt@highscanner.pl"
              className="underline hover:text-emerald-600"
            >
              kontakt@highscanner.pl
            </a>
          </p>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
            W zgłoszeniu prosimy o wskazanie: (a) bazy danych której jesteś
            producentem, (b) konkretnych rekordów / wzorca które uważasz
            za pobrane z Twojej bazy, (c) podstawy prawnej roszczenia.
            Odpowiemy w ciągu <strong>7 dni roboczych</strong>. Jeśli
            zgłoszenie jest zasadne, niezwłocznie usuniemy
            zakwestionowane dane.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight">
            5. Ograniczenie odpowiedzialności
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Informacje cenowe to fakty pochodzące od użytkowników i ze
            źródeł publicznych. HighScanner nie gwarantuje aktualności,
            kompletności ani zgodności prezentowanych danych ze stanem
            faktycznym w danej aptece w danej chwili. Strona nie
            sprzedaje leków, nie pośredniczy w sprzedaży i nie udziela
            porad medycznych. Decyzje dotyczące terapii zawsze konsultuj
            z uprawnionym lekarzem.
          </p>
        </section>

        <p className="mt-16 text-xs text-zinc-500 dark:text-zinc-500">
          Aktualizacja: {new Date().toISOString().slice(0, 10)}.
        </p>
      </main>

      <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40">
        <div className="mx-auto max-w-5xl px-6 py-8 text-xs text-zinc-500 dark:text-zinc-500">
          © {new Date().getFullYear()} HighScanner. Projekt niekomercyjny.{" "}
          <Link href="/" className="underline hover:text-emerald-600">
            Powrót na stronę główną
          </Link>
          .
        </div>
      </footer>
    </div>
  );
}
