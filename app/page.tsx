import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 pb-20 sm:pb-0">
      {/* Top nav */}
      <header className="border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-30 bg-white/90 dark:bg-zinc-950/90 backdrop-blur supports-[backdrop-filter]:bg-white/75 supports-[backdrop-filter]:dark:bg-zinc-950/75">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight text-base sm:text-lg">
            HighScanner<span className="text-emerald-600">.pl</span>
          </Link>
          <nav className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
            <Link href="/aplikacja" className="hover:underline">
              Aplikacja
            </Link>
            <a href="#jak-to-dziala" className="hover:underline">
              Jak to działa
            </a>
            <a href="#wsparcie" className="hover:underline">
              Wesprzyj
            </a>
            <a href="#kontakt" className="hover:underline">
              Kontakt
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-10 sm:py-28">
          <span className="inline-flex items-center rounded-full bg-emerald-100 dark:bg-emerald-900/40 px-3 py-1 text-xs font-medium text-emerald-800 dark:text-emerald-200">
            Ceny od pacjentów · aktualne
          </span>
          <h1 className="mt-5 text-3xl sm:text-6xl font-semibold tracking-tight leading-[1.1]">
            Najtańsza apteka{" "}
            <span className="text-emerald-600">z medyczną marihuaną</span>{" "}
            w Twoim mieście.
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Realne ceny z paragonów wrzucanych przez pacjentów i z
            publicznie dostępnych źródeł. Wpisz odmianę i miasto — dostań
            listę aptek gdzie jest taniej. Apka na Androida, bot na
            Telegramie, społeczność na Discordzie.
          </p>
          <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row gap-2 sm:gap-3">
            <Link
              href="/aplikacja"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white px-6 py-3.5 sm:py-3 text-base font-medium transition-colors shadow-sm shadow-emerald-600/20"
            >
              Pobierz apkę na Androida
              <span aria-hidden>→</span>
            </Link>
            <a
              href="https://t.me/weed_offers_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900 active:bg-zinc-200 dark:active:bg-zinc-800 px-6 py-3.5 sm:py-3 text-base font-medium transition-colors"
            >
              Bot na Telegramie
            </a>
            <a
              href="https://discord.gg/qBDz9z2VDX"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900 active:bg-zinc-200 dark:active:bg-zinc-800 px-6 py-3.5 sm:py-3 text-base font-medium transition-colors"
            >
              Dołącz na Discorda
            </a>
          </div>
          <p className="mt-5 sm:mt-6 text-xs text-zinc-500 dark:text-zinc-500">
            Zero reklam aptek i leków, zero afiliacji, bez zbierania danych
            osobowych pacjentów. Robione po pracy, dla siebie i dla innych.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8 sm:py-14">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
            {[
              { value: "640+", label: "aptek z cenami (30 dni)" },
              { value: "150+", label: "miast" },
              { value: "45+", label: "odmian dostępnych teraz" },
              { value: "0 zł", label: "dla pacjenta" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl sm:text-4xl font-semibold tracking-tight">
                  {s.value}
                </div>
                <div className="mt-1 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="jak-to-dziala"
        className="border-b border-zinc-200 dark:border-zinc-800 scroll-mt-16"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Jak to działa
          </h2>
          <div className="mt-6 sm:mt-10 grid sm:grid-cols-3 gap-4 sm:gap-8">
            {[
              {
                step: "1",
                title: "Wrzucasz paragon",
                body: "W apce na Androida albo w bocie na Telegramie robisz zdjęcie paragonu. OCR odczytuje kwotę i produkt, a spójny paragon od razu trafia do cen widocznych dla innych pacjentów.",
              },
              {
                step: "2",
                title: "Sprawdzasz najtaniej",
                body: "Wpisujesz odmianę i miasto — apka albo bot pokazuje apteki z najniższymi cenami na podstawie ostatnich obserwacji z naszej bazy oraz publicznie dostępnych źródeł.",
              },
              {
                step: "3",
                title: "Społeczność rośnie",
                body: "Im więcej pacjentów wrzuca paragony, tym pełniejszy obraz rynku. Reklamy tylko oznaczone i nigdy od aptek ani producentów leków. Bez afiliacji, bez sprzedaży danych użytkowników.",
              },
            ].map((c) => (
              <div
                key={c.step}
                className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-6"
              >
                <div className="text-emerald-600 font-mono text-sm">
                  /{c.step}
                </div>
                <h3 className="mt-3 text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / trust */}
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Dlaczego to robię
          </h2>
          <div className="mt-6 space-y-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
            <p>
              Sam jestem pacjentem na medycznej marihuanie. Wkurzyło mnie, że
              ta sama odmiana w dwóch aptekach na tej samej ulicy potrafi
              kosztować 40 zł różnicy. Apteki nie wystawiają cen publicznie,
              bo nie muszą — a pacjent traci 200–400 zł miesięcznie tylko
              dlatego, że nie wie, że gdzieś jest taniej.
            </p>
            <p>
              HighScanner to mój projekt po pracy — apka na Androida, bot
              na Telegramie i społeczność na Discordzie. Nie biorę pieniędzy od
              aptek, nie mam linków afiliacyjnych, nie sprzedaję danych
              użytkowników. Jak masz uwagi, pomysły, błędy w danych —
              napisz.
            </p>
            <p>
              Skąd są dane: paragony wrzucane dobrowolnie przez pacjentów
              (rozpoznawane przez OCR), publicznie udostępniane przez
              apteki informacje o asortymencie, oraz własne zgłoszenia
              użytkowników. Nie kopiujemy zawartości żadnej konkretnej
              bazy zewnętrznego dostawcy — agregujemy punktowe
              obserwacje społeczności. Szczegóły:{" "}
              <Link href="/dane" className="underline hover:text-emerald-600">
                /dane
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Donations */}
      <section
        id="wsparcie"
        className="border-b border-zinc-200 dark:border-zinc-800 scroll-mt-16"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Wesprzyj HighScanner
          </h2>
          <div className="mt-6 space-y-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
            <p>
              Apka i bot są darmowe i takie zostaną — bez zakładania konta
              i bez handlu danymi. Serwer chodzi całą dobę, żeby ceny były
              aktualne, a ktoś za ten prąd płaci. Jeśli HighScanner
              zaoszczędził Ci parę złotych w aptece, możesz dorzucić
              cegiełkę.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <a
                href="https://revolut.me/dawajsos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white px-6 py-3 text-base font-medium transition-colors"
              >
                Wesprzyj przez Revolut
              </a>
              <div className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-zinc-300 dark:border-zinc-700 px-6 py-3 text-base">
                BLIK na telefon:&nbsp;<span className="font-semibold">606 493 220</span>
              </div>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Wpisz nazwę miasta w tytule przelewu — założę dla niego kanał
              z cenami na Discordzie. Nie masz jak wesprzeć? Wrzuć paragon
              w apce — to pomaga najbardziej.
            </p>
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="kontakt" className="bg-zinc-50 dark:bg-zinc-900/40 scroll-mt-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-10 sm:py-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <div className="font-semibold text-lg tracking-tight">
                HighScanner<span className="text-emerald-600">.pl</span>
              </div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Skaner cen medycznej marihuany w polskich aptekach.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm">
              <a
                href="mailto:kontakt@highscanner.pl"
                className="hover:underline"
              >
                kontakt@highscanner.pl
              </a>
              <Link href="/aplikacja" className="hover:underline">
                Aplikacja
              </Link>
              <a
                href="https://t.me/weed_offers_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Telegram bot
              </a>
              <a
                href="https://discord.gg/qBDz9z2VDX"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Discord
              </a>
              <Link href="/dane" className="hover:underline">
                Dane i źródła
              </Link>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-zinc-200 dark:border-zinc-800 text-xs text-zinc-500 dark:text-zinc-500">
            <p>
              HighScanner nie sprzedaje leków, nie pośredniczy w sprzedaży
              i nie udziela porad medycznych. Dane o cenach pochodzą od
              użytkowników (paragony przesyłane dobrowolnie w apce lub do bota,
              rozpoznawane przez OCR) oraz z publicznie udostępnianych
              źródeł. Nie pobieramy zawartości żadnej konkretnej bazy
              dostawcy w sposób systematyczny — agregujemy punktowe
              obserwacje społeczności. Jeśli jesteś właścicielem
              chronionej bazy i sądzisz że jej zawartość została
              wykorzystana niezgodnie z prawem, napisz na{" "}
              <a href="mailto:kontakt@highscanner.pl" className="underline">
                kontakt@highscanner.pl
              </a>
              {" "}— przyjrzymy się sprawie w ciągu 7 dni. Decyzje
              dotyczące terapii zawsze konsultuj z lekarzem.
            </p>
            <p className="mt-3">
              © {new Date().getFullYear()} HighScanner. Projekt społeczny rozwijany po godzinach.
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky bottom CTA — mobile only */}
      <div
        aria-hidden="false"
        className="fixed inset-x-0 bottom-0 z-40 sm:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 supports-[backdrop-filter]:dark:bg-zinc-950/80"
      >
        <div className="mx-auto max-w-5xl px-3 py-2.5 flex gap-2">
          <Link
            href="/aplikacja"
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-emerald-600 active:bg-emerald-800 text-white px-3 py-3 text-sm font-medium shadow-sm shadow-emerald-600/20"
          >
            Pobierz apkę
            <span aria-hidden>→</span>
          </Link>
          <a
            href="https://t.me/weed_offers_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-zinc-300 dark:border-zinc-700 active:bg-zinc-200 dark:active:bg-zinc-800 px-4 py-3 text-sm font-medium"
            aria-label="Otwórz bota na Telegramie"
          >
            Bot
          </a>
          <a
            href="https://discord.gg/qBDz9z2VDX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-zinc-300 dark:border-zinc-700 active:bg-zinc-200 dark:active:bg-zinc-800 px-4 py-3 text-sm font-medium"
            aria-label="Dołącz na Discorda"
          >
            Discord
          </a>
        </div>
      </div>
    </div>
  );
}
