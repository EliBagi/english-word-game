import React, { useMemo, useState } from "react";

export default function SpeakingVocabQuizGame() {
  const questions = useMemo(
    () => [
      {
        id: 1,
        type: "word",
        prompt: "Jak powiedzieć po angielsku: 'ubiegać się o paszport'?",
        options: ["apply for a passport", "pick up a passport", "fill in a passport", "report a passport"],
        correctIndex: 0,
        explanation: "'Apply for' znaczy 'ubiegać się o' lub 'składać wniosek o'.",
      },
      {
        id: 2,
        type: "word",
        prompt: "Jak powiedzieć po angielsku: 'zgłosić chorobę telefonicznie do pracy'?",
        options: ["call for help", "call in sick", "check in sick", "sign in sick"],
        correctIndex: 1,
        explanation: "'Call in sick' oznacza zadzwonić i poinformować, że jest się chorym i nie przyjdzie się do pracy lub na zajęcia.",
      },
      {
        id: 3,
        type: "word",
        prompt: "Jak powiedzieć po angielsku: 'wypełnić formularz'?",
        options: ["fill in a form", "take in a form", "write a form", "draw a form"],
        correctIndex: 0,
        explanation: "Najbardziej naturalne wyrażenie to 'fill in a form'.",
      },
      {
        id: 4,
        type: "word",
        prompt: "Jak powiedzieć po angielsku: 'Czy rachunki są wliczone?'",
        options: ["Are the bills written?", "Are the bills included?", "Are the bills counted?", "Are the bills added?"],
        correctIndex: 1,
        explanation: "'Included' znaczy 'wliczone' lub 'zawarte w cenie'.",
      },
      {
        id: 5,
        type: "word",
        prompt: "Jak powiedzieć po angielsku: 'ból brzucha'?",
        options: ["stomach pain", "stomach ache", "belly disease", "body ache"],
        correctIndex: 1,
        explanation: "W codziennym angielskim najczęściej powiesz 'stomach ache'.",
      },
      {
        id: 6,
        type: "sentence",
        prompt: "Wybierz najlepsze zdanie do urzędu paszportowego.",
        options: ["I want passport now.", "I would like to apply for a passport.", "Give me passport.", "I take passport today."],
        correctIndex: 1,
        explanation: "W sytuacjach oficjalnych najlepiej brzmi: 'I would like to apply for a passport.'",
      },
      {
        id: 7,
        type: "sentence",
        prompt: "Wybierz najlepsze zdanie do rozmowy z landlordem.",
        options: ["Bills include?", "How much flat?", "Are the bills included in the rent?", "Internet and bills where?"],
        correctIndex: 2,
        explanation: "To naturalne i poprawne pytanie o koszty mieszkania.",
      },
      {
        id: 8,
        type: "sentence",
        prompt: "Wybierz najlepsze zdanie przy problemie z bankomatem.",
        options: ["ATM my card take.", "The ATM kept my card.", "The cash kept my ATM.", "My ATM went card."],
        correctIndex: 1,
        explanation: "'The ATM kept my card' to naturalny sposób powiedzenia, że bankomat zatrzymał kartę.",
      },
      {
        id: 9,
        type: "sentence",
        prompt: "Wybierz najlepsze zdanie przy zakupie karty SIM.",
        options: ["I would like to buy a SIM card.", "I want card phone.", "Give me SIM please now.", "I need internet plastic."],
        correctIndex: 0,
        explanation: "To najprostszy i naturalny sposób rozpoczęcia rozmowy w salonie telefonicznym.",
      },
      {
        id: 10,
        type: "sentence",
        prompt: "Wybierz najlepsze zdanie, gdy prosisz o dzień wolny.",
        options: ["I no work tomorrow.", "Can I off tomorrow?", "I’d like to ask for a day off tomorrow.", "Tomorrow free me."],
        correctIndex: 2,
        explanation: "To uprzejma i poprawna prośba o dzień wolny.",
      },
      {
        id: 11,
        type: "word",
        prompt: "Jak powiedzieć po angielsku: 'ból głowy'?",
        options: ["headache", "head sick", "brain hurt", "skull pain"],
        correctIndex: 0,
        explanation: "'Headache' to codzienne słowo na ból głowy.",
      },
      {
        id: 12,
        type: "word",
        prompt: "Jak powiedzieć po angielsku: 'ból gardła'?",
        options: ["sore throat", "throat problem", "neck ache", "mouth pain"],
        correctIndex: 0,
        explanation: "Najbardziej naturalne wyrażenie to 'sore throat'.",
      },
      {
        id: 13,
        type: "word",
        prompt: "Jak powiedzieć po angielsku: 'gorączka'?",
        options: ["heat", "fever", "flu", "coldness"],
        correctIndex: 1,
        explanation: "'Fever' oznacza gorączkę.",
      },
      {
        id: 14,
        type: "word",
        prompt: "Jak powiedzieć po angielsku: 'wizyta lekarska'?",
        options: ["medical appointment", "doctor meeting", "health visit plan", "medicine date"],
        correctIndex: 0,
        explanation: "Najczęściej użyjesz 'medical appointment'.",
      },
      {
        id: 15,
        type: "word",
        prompt: "Jak powiedzieć po angielsku: 'czynsz miesięczny'?",
        options: ["month rent", "monthly rent", "rent month cost", "flat month bill"],
        correctIndex: 1,
        explanation: "Poprawna forma to 'monthly rent'.",
      },
      {
        id: 16,
        type: "word",
        prompt: "Jak powiedzieć po angielsku: 'kaucja'?",
        options: ["deposit", "advance tax", "guarantee money", "rent lock"],
        correctIndex: 0,
        explanation: "Przy wynajmie mieszkania 'deposit' oznacza kaucję.",
      },
      {
        id: 17,
        type: "word",
        prompt: "Jak powiedzieć po angielsku: 'dodatkowe opłaty'?",
        options: ["special costs", "outside prices", "extra charges", "added pays"],
        correctIndex: 2,
        explanation: "'Extra charges' to naturalne określenie dodatkowych opłat.",
      },
      {
        id: 18,
        type: "word",
        prompt: "Jak powiedzieć po angielsku: 'termin płatności'?",
        options: ["pay date", "due date", "bill end", "closing payment"],
        correctIndex: 1,
        explanation: "'Due date' oznacza termin płatności.",
      },
      {
        id: 19,
        type: "word",
        prompt: "Jak powiedzieć po angielsku: 'potwierdzenie płatności'?",
        options: ["payment proof", "bill ticket", "confirmation of payment", "paid message"],
        correctIndex: 2,
        explanation: "'Confirmation of payment' to poprawna i formalna forma.",
      },
      {
        id: 20,
        type: "word",
        prompt: "Jak powiedzieć po angielsku: 'podatek'?",
        options: ["tax", "fee", "charge", "invoice"],
        correctIndex: 0,
        explanation: "'Tax' oznacza podatek.",
      },
      {
        id: 21,
        type: "word",
        prompt: "Jak powiedzieć po angielsku: 'otworzyć konto bankowe'?",
        options: ["make a bank account", "open a bank account", "create bank card", "start a bank"],
        correctIndex: 1,
        explanation: "Najbardziej naturalne wyrażenie to 'open a bank account'.",
      },
      {
        id: 22,
        type: "word",
        prompt: "Jak powiedzieć po angielsku: 'wypłacić gotówkę'?",
        options: ["take out cash", "withdraw cash", "pick cash", "remove money card"],
        correctIndex: 1,
        explanation: "W banku i przy bankomacie używa się wyrażenia 'withdraw cash'.",
      },
      {
        id: 23,
        type: "word",
        prompt: "Jak powiedzieć po angielsku: 'przelew'?",
        options: ["transfer", "translation", "payment line", "move bank"],
        correctIndex: 0,
        explanation: "'Transfer' oznacza przelew bankowy.",
      },
      {
        id: 24,
        type: "word",
        prompt: "Jak powiedzieć po angielsku: 'saldo konta'?",
        options: ["bank state", "account line", "balance", "money status"],
        correctIndex: 2,
        explanation: "'Balance' oznacza saldo konta.",
      },
      {
        id: 25,
        type: "word",
        prompt: "Jak powiedzieć po angielsku: 'paragon'?",
        options: ["ticket", "receipt", "note bill", "pay card"],
        correctIndex: 1,
        explanation: "W sklepie i przy płatnościach poprosisz o 'receipt'.",
      },
      {
        id: 26,
        type: "word",
        prompt: "Jak powiedzieć po angielsku: 'przymierzyć'?",
        options: ["try on", "wear test", "size check", "put compare"],
        correctIndex: 0,
        explanation: "W sklepie użyjesz 'try on'.",
      },
      {
        id: 27,
        type: "word",
        prompt: "Jak powiedzieć po angielsku: 'zgłosić zagubiony bagaż'?",
        options: ["write lost luggage", "report lost luggage", "say missing bag", "apply lost baggage"],
        correctIndex: 1,
        explanation: "Na lotnisku naturalnie powiesz 'report lost luggage'.",
      },
      {
        id: 28,
        type: "word",
        prompt: "Jak powiedzieć po angielsku: 'karta pokładowa'?",
        options: ["boarding pass", "flight card", "air ticket pass", "plane entry card"],
        correctIndex: 0,
        explanation: "'Boarding pass' to karta pokładowa.",
      },
      {
        id: 29,
        type: "word",
        prompt: "Jak powiedzieć po angielsku: 'odprawa'?",
        options: ["boarding", "check-in", "security line", "flight start"],
        correctIndex: 1,
        explanation: "Przy locie 'check-in' oznacza odprawę.",
      },
      {
        id: 30,
        type: "word",
        prompt: "Jak powiedzieć po angielsku: 'bramka na lotnisku'?",
        options: ["gate", "port", "entry air", "flight door"],
        correctIndex: 0,
        explanation: "Na lotnisku używa się słowa 'gate'.",
      },
      {
        id: 31,
        type: "word",
        prompt: "Jak powiedzieć po angielsku: 'przystanek autobusowy'?",
        options: ["bus station point", "bus stop", "stop bus line", "bus place"],
        correctIndex: 1,
        explanation: "'Bus stop' oznacza przystanek autobusowy.",
      },
      {
        id: 32,
        type: "word",
        prompt: "Jak powiedzieć po angielsku: 'zapytać o drogę'?",
        options: ["ask for directions", "ask for streets", "search a road", "find direction talk"],
        correctIndex: 0,
        explanation: "Naturalna forma to 'ask for directions'.",
      },
      {
        id: 33,
        type: "word",
        prompt: "Jak powiedzieć po angielsku: 'wysiąść'?",
        options: ["go down", "drop out", "get off", "leave ride down"],
        correctIndex: 2,
        explanation: "W transporcie publicznym używa się 'get off'.",
      },
      {
        id: 34,
        type: "word",
        prompt: "Jak powiedzieć po angielsku: 'iść prosto'?",
        options: ["walk direct", "go straight", "move simple", "go one line"],
        correctIndex: 1,
        explanation: "Przy dawaniu wskazówek mówi się 'go straight'.",
      },
      {
        id: 35,
        type: "word",
        prompt: "Jak powiedzieć po angielsku: 'skręcić w lewo'?",
        options: ["turn left", "go left side now", "left move", "take left road move"],
        correctIndex: 0,
        explanation: "Poprawne wyrażenie to 'turn left'.",
      },
      {
        id: 36,
        type: "word",
        prompt: "Jak powiedzieć po angielsku: 'doładować konto'?",
        options: ["load the phone", "top up the account", "put money in sim", "recharge number card"],
        correctIndex: 1,
        explanation: "Przy prepaid naturalnie powiesz 'top up the account'.",
      },
      {
        id: 37,
        type: "word",
        prompt: "Jak powiedzieć po angielsku: 'zachować stary numer'?",
        options: ["hold old number", "stay same phone", "keep your old number", "save your first number"],
        correctIndex: 2,
        explanation: "W salonie telefonicznym powiesz 'keep your old number'.",
      },
      {
        id: 38,
        type: "word",
        prompt: "Jak powiedzieć po angielsku: 'abonament miesięczny'?",
        options: ["monthly contract", "month phone pay", "regular sim money", "month plan card"],
        correctIndex: 0,
        explanation: "Jedną z naturalnych form jest 'monthly contract'.",
      },
      {
        id: 39,
        type: "sentence",
        prompt: "Wybierz najlepsze zdanie przy płaceniu rachunku.",
        options: ["I would like to pay this bill.", "I pay this now bill want.", "This bill I would payment.", "I want do bill."],
        correctIndex: 0,
        explanation: "To naturalne i poprawne zdanie przy płatności.",
      },
      {
        id: 40,
        type: "sentence",
        prompt: "Wybierz najlepsze pytanie o podatek.",
        options: ["Tax is there?", "Does this amount include tax?", "This amount has tax maybe?", "Where tax in this?"],
        correctIndex: 1,
        explanation: "To poprawne i naturalne pytanie o podatek.",
      },
      {
        id: 41,
        type: "sentence",
        prompt: "Wybierz najlepsze zdanie przy otwieraniu konta w banku.",
        options: ["I want make bank count.", "I would like to open a bank account.", "Open me account now.", "I bank account start."],
        correctIndex: 1,
        explanation: "To standardowe i uprzejme zdanie w banku.",
      },
      {
        id: 42,
        type: "sentence",
        prompt: "Wybierz najlepsze zdanie przy pytaniu o drogę.",
        options: ["Excuse me, how do I get to the city centre?", "Where city centre going me?", "I need centre road where.", "Tell centre walk."],
        correctIndex: 0,
        explanation: "To naturalny sposób pytania o drogę.",
      },
      {
        id: 43,
        type: "sentence",
        prompt: "Wybierz najlepsze zdanie przy zgłaszaniu choroby do pracy.",
        options: ["I’m calling in sick today.", "Today I am sick call.", "I no work, body bad.", "Sick today, office no."],
        correctIndex: 0,
        explanation: "To naturalne i często używane zdanie przy zgłaszaniu choroby.",
      },
      {
        id: 44,
        type: "sentence",
        prompt: "Wybierz najlepsze zdanie, gdy źle się czujesz.",
        options: ["I’m not feeling well today.", "I am bad in body today.", "My health is no good nowing.", "Today not welling me."],
        correctIndex: 0,
        explanation: "To najprostszy naturalny sposób powiedzenia, że źle się czujesz.",
      },
      {
        id: 45,
        type: "sentence",
        prompt: "Wybierz najlepsze pytanie o termin płatności.",
        options: ["When paying end?", "What is the due date?", "Which day money must?", "How date of pay?"],
        correctIndex: 1,
        explanation: "To poprawne i naturalne pytanie o termin płatności.",
      },
      {
        id: 46,
        type: "sentence",
        prompt: "Wybierz najlepsze zdanie przy prośbie o wyjaśnienie opłaty.",
        options: ["Can you explain this charge, please?", "This charge tell me.", "You explain money now.", "Why this pay doing?"],
        correctIndex: 0,
        explanation: "To uprzejma i poprawna prośba o wyjaśnienie opłaty.",
      },
      {
        id: 47,
        type: "sentence",
        prompt: "Wybierz najlepsze pytanie o nowy numer telefonu.",
        options: ["I need a new phone number.", "I want number fresh phone.", "Give me another calling digits.", "Phone new me please number."],
        correctIndex: 0,
        explanation: "To prosty i naturalny sposób powiedzenia, że potrzebujesz nowego numeru.",
      },
      {
        id: 48,
        type: "sentence",
        prompt: "Wybierz najlepsze pytanie o rozmiar w sklepie.",
        options: ["Do you have this in a bigger size?", "This bigger maybe have?", "Where bigger cloth of this?", "Can size grow this one?"],
        correctIndex: 0,
        explanation: "To naturalne pytanie o większy rozmiar w sklepie.",
      },
      {
        id: 49,
        type: "sentence",
        prompt: "Wybierz najlepsze pytanie o wymagane dokumenty.",
        options: ["What documents are required?", "Which papers must there?", "Documents needed where?", "What documents should existing?"],
        correctIndex: 0,
        explanation: "To poprawne i bardzo przydatne pytanie urzędowe.",
      },
      {
        id: 50,
        type: "sentence",
        prompt: "Wybierz najlepsze zdanie przy zgłaszaniu zagubionego bagażu.",
        options: ["I lost my luggage.", "My baggage is gone by me.", "Luggage not with me now lostly.", "I am without bag thing."],
        correctIndex: 0,
        explanation: "To najprostszy poprawny sposób zgłoszenia problemu.",
      },
    ],
    []
  );

  const QUESTIONS_PER_ROUND = 20;

  function shuffleArray(items) {
    const array = [...items];
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function buildShuffledQuiz(baseQuestions) {
    const safeQuestions = Array.isArray(baseQuestions) ? baseQuestions : [];
    const selectedQuestions = shuffleArray(safeQuestions).slice(0, QUESTIONS_PER_ROUND);

    return selectedQuestions.map((question) => {
      const optionObjects = question.options.map((option, index) => ({
        text: option,
        isCorrect: index === question.correctIndex,
      }));

      const shuffledOptions = shuffleArray(optionObjects);
      const newCorrectIndex = shuffledOptions.findIndex((option) => option.isCorrect);

      return {
        ...question,
        options: shuffledOptions.map((option) => option.text),
        correctIndex: newCorrectIndex,
      };
    });
  }

  const [quizQuestions, setQuizQuestions] = useState(() => buildShuffledQuiz(questions));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState([]);

  const currentQuestion = quizQuestions[currentIndex] ?? null;
  const totalQuestions = quizQuestions.length;
  const correctRate = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

  function handleOptionClick(index) {
    if (!currentQuestion || selectedIndex !== null) return;

    setSelectedIndex(index);
    const isCorrect = index === currentQuestion.correctIndex;

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setAnswers((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        selectedIndex: index,
        isCorrect,
      },
    ]);
  }

  function handleNext() {
    if (!currentQuestion) return;

    if (currentIndex === totalQuestions - 1) {
      setFinished(true);
      return;
    }

    setCurrentIndex((prev) => prev + 1);
    setSelectedIndex(null);
  }

  function resetRound(nextQuestions) {
    setQuizQuestions(nextQuestions);
    setCurrentIndex(0);
    setSelectedIndex(null);
    setScore(0);
    setFinished(false);
    setAnswers([]);
    setShowResult(false);
  }

  function handleRestart() {
    resetRound(buildShuffledQuiz(questions));
  }

  function handleNextRandomSet() {
    resetRound(buildShuffledQuiz(questions));
  }

  if (totalQuestions === 0 || !currentQuestion) {
    return (
      <div className="min-h-screen bg-slate-100 px-4 py-10 md:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
          <h1 className="text-2xl font-bold text-slate-900">English Vocabulary Quiz Game</h1>
          <p className="mt-3 text-slate-700">No questions are available right now.</p>
          <button
            onClick={handleRestart}
            className="mt-6 rounded-2xl bg-slate-900 px-5 py-3 font-medium text-white transition hover:opacity-90"
          >
            Load random set
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-8 md:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-700 p-8 text-white shadow-xl">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight md:text-5xl">English Vocabulary Quiz Game</h1>
            <p className="mt-4 text-sm text-slate-200 md:text-base">
              Gra do nauki słownictwa: wybierz poprawne słowo lub zdanie spośród 4 opcji.
            </p>
          </div>
        </div>

        {!finished ? (
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg md:p-8">
            <div className="mb-8 mt-2 flex justify-center">
              <div className="grid w-full max-w-md gap-3">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-center">
                  <p className="text-xs uppercase tracking-wide text-slate-500">Question</p>
                  <p className="mt-1 text-2xl font-bold text-slate-900">{currentIndex + 1}/{totalQuestions}</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-center">
                  <p className="text-xs uppercase tracking-wide text-slate-500">Type</p>
                  <p className="mt-1 text-2xl font-bold text-slate-900">{currentQuestion.type === "word" ? "Word" : "Sentence"}</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-center">
                  <p className="text-xs uppercase tracking-wide text-slate-500">Score</p>
                  <p className="mt-1 text-2xl font-bold text-slate-900">{score}</p>
                </div>
              </div>
            </div>

            <div className="mb-6 h-3 w-full overflow-hidden rounded-full bg-slate-100">
              <div className="h-full rounded-full bg-slate-900 transition-all" style={{ width: `${(currentIndex / totalQuestions) * 100}%` }} />
            </div>

            <div className="mb-8 text-center">
              <h2 className="mt-5 text-2xl font-bold leading-relaxed text-slate-900 md:text-4xl">
                {currentQuestion.prompt}
              </h2>
            </div>

            <div className="grid gap-5">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedIndex === index;
                const isCorrect = currentQuestion.correctIndex === index;
                const showCorrect = selectedIndex !== null && isCorrect;
                const showWrong = selectedIndex !== null && isSelected && !isCorrect;

                let classes = "w-full rounded-2xl border px-6 py-5 text-left text-2xl font-medium leading-relaxed transition-all md:text-3xl ";
                if (showCorrect) {
                  classes += "border-emerald-500 bg-emerald-50 text-emerald-900";
                } else if (showWrong) {
                  classes += "border-red-500 bg-red-50 text-red-900";
                } else {
                  classes += "border-slate-200 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-50";
                }

                return (
                  <button key={`${currentQuestion.id}-${index}`} onClick={() => handleOptionClick(index)} className={classes}>
                    {option}
                  </button>
                );
              })}
            </div>

            {selectedIndex !== null && (
              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-lg font-semibold text-slate-900">
                  {selectedIndex === currentQuestion.correctIndex ? "Correct" : "Not this time"}
                </p>
                <p className="mt-2 text-slate-700">{currentQuestion.explanation}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <button onClick={handleNext} className="rounded-2xl bg-slate-900 px-5 py-3 font-medium text-white transition hover:opacity-90">
                    {currentIndex === totalQuestions - 1 ? "See results" : "Next question"}
                  </button>
                </div>
              </div>
            )}

            <div className="mt-20 flex justify-center">
              <button
                onClick={handleNextRandomSet}
                className="rounded-2xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                New Random Round
              </button>
            </div>
          </div>
        ) : (
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg md:p-8">
            <h2 className="text-3xl font-bold text-slate-900">Quiz finished</h2>
            <p className="mt-3 text-lg text-slate-700">
              Your score: <span className="font-bold">{score}/{totalQuestions}</span>
            </p>
            <p className="mt-1 text-slate-600">Accuracy: {correctRate}%</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button onClick={handleRestart} className="rounded-2xl bg-slate-900 px-5 py-3 font-medium text-white transition hover:opacity-90">
                Restart quiz
              </button>
              <button onClick={handleNextRandomSet} className="rounded-2xl border border-slate-300 px-5 py-3 font-medium text-slate-900 transition hover:bg-slate-50">
                Next random set
              </button>
              <button onClick={() => setShowResult((prev) => !prev)} className="rounded-2xl border border-slate-300 px-5 py-3 font-medium text-slate-900 transition hover:bg-slate-50">
                {showResult ? "Hide answers" : "Show answers"}
              </button>
            </div>

            {showResult && (
              <div className="mt-8 space-y-4">
                {quizQuestions.map((question, idx) => {
                  const userAnswer = answers[idx];
                  return (
                    <div key={question.id} className="rounded-2xl border border-slate-200 p-4">
                      <p className="text-sm font-medium text-slate-500">Question {idx + 1}</p>
                      <p className="mt-1 font-semibold text-slate-900">{question.prompt}</p>
                      <p className="mt-2 text-slate-700">
                        Correct answer: <span className="font-medium">{question.options[question.correctIndex]}</span>
                      </p>
                      <p className="mt-1 text-slate-600">{question.explanation}</p>
                      {userAnswer && (
                        <p className={`mt-2 text-sm font-medium ${userAnswer.isCorrect ? "text-emerald-700" : "text-red-700"}`}>
                          Your answer: {question.options[userAnswer.selectedIndex]}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        <div className="mt-24 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <button
            onClick={() => setShowHelp((prev) => !prev)}
            className="w-full rounded-2xl border border-slate-300 px-5 py-3 text-left font-semibold text-slate-900 transition hover:bg-slate-50"
          >
            {showHelp ? "Hide Help" : "Show Help"}
          </button>

          {showHelp && (
            <div className="mt-4 rounded-2xl bg-slate-50 p-5 text-slate-700">
              <h3 className="text-lg font-semibold text-slate-900">Help</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Each round uses only 20 randomly selected questions from the full database.</li>
                <li>Every time the quiz starts, the questions are shuffled automatically.</li>
                <li>The 4 answer options inside each question are also shuffled automatically.</li>
                <li>The New Random Round button creates a brand new random round.</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
