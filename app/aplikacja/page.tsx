import Link from "next/link";

export const metadata = {
  title: "Aplikacja na Androida",
  description:
    "Pobierz darmową apkę HighScanner na Androida: ceny medycznej marihuany w aptekach, skaner paragonów, najtańsze apteki w Twojej okolicy. Instrukcja instalacji krok po kroku.",
};

const APK_URL = "https://api.highscanner.pl/apk";

const steps = [
  {
    title: "Pobierz plik",
    body: "Kliknij zielony przycisk na telefonie. Pobierze się plik highscanner.apk (ok. 26 MB). Przeglądarka może zapytać, czy na pewno go pobrać — potwierdź.",
  },
  {
    title: "Zezwól na instalację",
    body: "Otwórz pobrany plik (z powiadomienia albo z folderu Pobrane). Android zapyta o zgodę na instalowanie aplikacji z przeglądarki — wejdź w Ustawienia i włącz „Zezwalaj z tego źródła”. To jednorazowe.",
  },
  {
    title: "Zainstaluj i gotowe",
    body: "Wróć i naciśnij „Zainstaluj”. Jeśli pojawi się ostrzeżenie Play Protect, wybierz „Więcej szczegółów” → „Zainstaluj mimo to”. Aktualizacje apka pobiera sama — przy większych poprosi tylko o potwierdzenie.",
  },
];

const features = [
  "Ceny odmian w aptekach — od najtańszej, z odległością i godzinami otwarcia",
  "Wyszukiwanie po odmianie, producencie i mocy (np. „27%”)",
  "Skaner paragonów — zdjęcie, a apka sama odczyta kwotę i produkt",
  "Linki do opisów odmian (BudCare)",
  "Bez zakładania konta, bez logowania",
];

const faq = [
  {
    q: "Dlaczego nie ma jej w Google Play?",
    a: "Google Play ma bardzo ostre zasady dla aplikacji związanych z marihuaną, także medyczną — ryzyko zablokowania jest wysokie. Dlatego apkę pobierasz bezpośrednio od nas.",
  },
  {
    q: "Czy to bezpieczne?",
    a: "Apka nie prosi o kontakty, SMS-y ani konto. Pyta o aparat (zdjęcie paragonu), lokalizację (sortowanie „najbliżej”, opcjonalnie), powiadomienia i zgodę na instalowanie swoich aktualizacji. Na aparat i lokalizację możesz się nie zgodzić — reszta działa.",
  },
  {
    q: "Jakie dane zbiera?",
    a: "Żadnych danych osobowych. Apka ma losowy identyfikator instalacji, dzięki któremu wiemy, ilu mniej więcej jest użytkowników. Zdjęcia paragonów z PESEL lub numerem recepty są odrzucane.",
  },
  {
    q: "Mam iPhone'a.",
    a: "Wersji na iPhone'a jeszcze nie ma. Do tego czasu korzystaj z bota na Telegramie — ma te same ceny.",
  },
];

export default function AplikacjaPage() {
  return (
    <div className="flex flex-col flex-1 pb-20 sm:pb-0">
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight text-base sm:text-lg">
            HighScanner<span className="text-emerald-600">.pl</span>
          </Link>
          <nav className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
            <Link href="/" className="hover:underline">
              Strona główna
            </Link>
            <Link href="/#wsparcie" className="hover:underline">
              Wesprzyj
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl px-4 sm:px-6 py-10 sm:py-16">
        <span className="inline-flex items-center rounded-full bg-emerald-100 dark:bg-emerald-900/40 px-3 py-1 text-xs font-medium text-emerald-800 dark:text-emerald-200">
          Android 7 lub nowszy · za darmo
        </span>
        <h1 className="mt-5 text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.1]">
          Apka HighScanner <span className="text-emerald-600">na Androida</span>
        </h1>
        <p className="mt-5 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Najtańsze apteki z medyczną marihuaną w Twojej okolicy i skaner
          paragonów w jednym miejscu. Instalacja trwa minutę.
        </p>
        <a
          href={APK_URL}
          className="mt-7 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white px-8 py-4 text-lg font-medium transition-colors shadow-sm shadow-emerald-600/20"
        >
          Pobierz apkę (.apk)
          <span aria-hidden>↓</span>
        </a>
        <p className="mt-3 text-xs text-zinc-500">
          Otwórz tę stronę na telefonie z Androidem. Na komputerze plik się pobierze, ale go nie zainstalujesz.
        </p>

        <h2 className="mt-12 text-2xl font-semibold tracking-tight">Jak zainstalować</h2>
        <ol className="mt-5 space-y-4">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-5">
              <div className="text-emerald-600 font-mono text-sm">krok {i + 1}</div>
              <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>

        <h2 className="mt-12 text-2xl font-semibold tracking-tight">Co jest w apce</h2>
        <ul className="mt-5 space-y-2 text-zinc-700 dark:text-zinc-300">
          {features.map((f) => (
            <li key={f} className="flex gap-2">
              <span className="text-emerald-600" aria-hidden>✓</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <h2 className="mt-12 text-2xl font-semibold tracking-tight">Pytania</h2>
        <div className="mt-5 space-y-5">
          {faq.map((f) => (
            <div key={f.q}>
              <h3 className="font-semibold">{f.q}</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-xs text-zinc-500 leading-relaxed">
          HighScanner nie sprzedaje leków, nie pośredniczy w sprzedaży i nie udziela porad
          medycznych. Ceny są orientacyjne — potwierdź je w aptece. Decyzje dotyczące terapii
          konsultuj z lekarzem.{" "}
          <Link href="/dane" className="underline hover:text-emerald-600">
            Dane i źródła
          </Link>
          .
        </p>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-40 sm:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur">
        <div className="mx-auto max-w-5xl px-3 py-2.5">
          <a
            href={APK_URL}
            className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg bg-emerald-600 active:bg-emerald-800 text-white px-3 py-3 text-sm font-medium"
          >
            Pobierz apkę (.apk) <span aria-hidden>↓</span>
          </a>
        </div>
      </div>
    </div>
  );
}
