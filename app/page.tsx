import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      {/* Top nav */}
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight text-lg">
            HighScanner<span className="text-emerald-600">.pl</span>
          </Link>
          <nav className="flex gap-6 text-sm">
            <a
              href="https://t.me/weed_offers_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Telegram bot
            </a>
            <a href="#jak-to-dziala" className="hover:underline">
              Jak to działa
            </a>
            <a href="#kontakt" className="hover:underline">
              Kontakt
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
          <span className="inline-flex items-center rounded-full bg-emerald-100 dark:bg-emerald-900/40 px-3 py-1 text-xs font-medium text-emerald-800 dark:text-emerald-200">
            800+ aptek · aktualizacja codzienna
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight leading-tight">
            Najtańsza apteka
            <br />
            <span className="text-emerald-600">z medyczną marihuaną</span>
            <br />
            w Twoim mieście.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Skaner cen i dostępności suszu medycznego w polskich aptekach.
            Wpisz swoją odmianę, dostań listę miejsc gdzie jest najtaniej i
            na stanie. Codzienna aktualizacja, alerty cenowe na Telegramie,
            społeczność pacjentów na Discordzie.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href="https://t.me/weed_offers_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 text-base font-medium transition-colors"
            >
              Otwórz @weed_offers_bot
              <span aria-hidden>→</span>
            </a>
            <a
              href="https://discord.gg/highscanner"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900 px-6 py-3 text-base font-medium transition-colors"
            >
              Dołącz na Discorda
            </a>
          </div>
          <p className="mt-6 text-xs text-zinc-500 dark:text-zinc-500">
            Zero reklam aptek, zero afiliacji, zero zbierania danych
            pacjentów. Robione po pracy, dla siebie i dla innych.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { value: "800+", label: "aptek w bazie" },
              { value: "60+", label: "odmian suszu" },
              { value: "24h", label: "częstotliwość scrap" },
              { value: "0 zł", label: "miesięcznie" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl sm:text-4xl font-semibold tracking-tight">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
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
        className="border-b border-zinc-200 dark:border-zinc-800"
      >
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-3xl font-semibold tracking-tight">
            Jak to działa
          </h2>
          <div className="mt-10 grid sm:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Scraping aptek",
                body: "Skrypt codziennie pobiera dostępność i ceny z ~800 polskich aptek prowadzących medyczną marihuanę.",
              },
              {
                step: "2",
                title: "Telegram + Discord",
                body: "Bot @weed_offers_bot przyjmuje paragony i pokazuje najtańsze apteki w okolicy. Discord pinguje przy spadkach cen.",
              },
              {
                step: "3",
                title: "Społeczność",
                body: "Pacjenci wrzucają OCR paragonów — baza rośnie, wszyscy zyskują. Brak reklam, brak komercyjnych deali.",
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
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-3xl font-semibold tracking-tight">
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
              HighScanner to mój projekt po pracy — scraper, bot na
              Telegramie i mała społeczność na Discordzie. Nie biorę
              pieniędzy od aptek, nie mam linków afiliacyjnych, nie
              sprzedaję danych użytkowników. Jak masz uwagi, pomysły, błędy
              w danych — napisz.
            </p>
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="kontakt" className="bg-zinc-50 dark:bg-zinc-900/40">
        <div className="mx-auto max-w-5xl px-6 py-12">
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
              <a
                href="https://t.me/weed_offers_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Telegram bot
              </a>
              <a
                href="https://discord.gg/highscanner"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Discord
              </a>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-zinc-200 dark:border-zinc-800 text-xs text-zinc-500 dark:text-zinc-500">
            <p>
              HighScanner nie sprzedaje leków, nie pośredniczy w sprzedaży i
              nie udziela porad medycznych. Dane o cenach i dostępności
              pochodzą z publicznie dostępnych źródeł oraz od użytkowników
              (paragony przesłane do bota). Decyzje o terapii zawsze
              konsultuj z lekarzem.
            </p>
            <p className="mt-3">
              © {new Date().getFullYear()} HighScanner. Projekt niekomercyjny.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
