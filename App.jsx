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
      {
  id: 51,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'stęp'?",
  options: ["walk", "trot", "canter", "gallop"],
  correctIndex: 0,
  explanation: "'Walk' oznacza 'stęp'.",
},
{
  id: 52,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'kłus'?",
  options: ["canter", "walk", "trot", "gallop"],
  correctIndex: 2,
  explanation: "'Trot' oznacza 'kłus'.",
},
{
  id: 53,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'galop'?",
  options: ["gallop", "canter", "trot", "walk"],
  correctIndex: 1,
  explanation: "'Canter' oznacza 'galop'.",
},
{
  id: 54,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'galop wyścigowy'?",
  options: ["working canter", "extended canter", "gallop", "medium canter"],
  correctIndex: 2,
  explanation: "'Gallop' oznacza 'galop wyścigowy'.",
},
{
  id: 55,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'stęp roboczy'?",
  options: ["working walk", "free walk", "collected walk", "medium walk"],
  correctIndex: 0,
  explanation: "'Working walk' oznacza 'stęp roboczy'.",
},
{
  id: 56,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'kłus roboczy'?",
  options: ["working trot", "extended trot", "collected trot", "free trot"],
  correctIndex: 0,
  explanation: "'Working trot' oznacza 'kłus roboczy'.",
},
{
  id: 57,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'galop roboczy'?",
  options: ["working canter", "gallop", "medium canter", "free canter"],
  correctIndex: 0,
  explanation: "'Working canter' oznacza 'galop roboczy'.",
},
{
  id: 58,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'stęp zebrany'?",
  options: ["free walk", "working walk", "collected walk", "extended walk"],
  correctIndex: 2,
  explanation: "'Collected walk' oznacza 'stęp zebrany'.",
},
{
  id: 59,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'kłus zebrany'?",
  options: ["collected trot", "extended trot", "working trot", "medium trot"],
  correctIndex: 0,
  explanation: "'Collected trot' oznacza 'kłus zebrany'.",
},
{
  id: 60,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'galop zebrany'?",
  options: ["medium canter", "collected canter", "working canter", "gallop"],
  correctIndex: 1,
  explanation: "'Collected canter' oznacza 'galop zebrany'.",
},
{
  id: 61,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'kłus wyciągnięty'?",
  options: ["extended trot", "medium trot", "working trot", "collected trot"],
  correctIndex: 0,
  explanation: "'Extended trot' oznacza 'kłus wyciągnięty'.",
},
{
  id: 62,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'galop wyciągnięty'?",
  options: ["gallop", "extended canter", "working canter", "medium canter"],
  correctIndex: 1,
  explanation: "'Extended canter' oznacza 'galop wyciągnięty'.",
},
{
  id: 63,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'kłus pośredni'?",
  options: ["working trot", "medium trot", "collected trot", "free trot"],
  correctIndex: 1,
  explanation: "'Medium trot' oznacza 'kłus pośredni'.",
},
{
  id: 64,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'galop pośredni'?",
  options: ["gallop", "working canter", "medium canter", "extended canter"],
  correctIndex: 2,
  explanation: "'Medium canter' oznacza 'galop pośredni'.",
},
{
  id: 65,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'stęp swobodny'?",
  options: ["working walk", "free walk", "collected walk", "medium walk"],
  correctIndex: 1,
  explanation: "'Free walk' oznacza 'stęp swobodny'.",
},
{
  id: 66,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'przejście'?",
  options: ["transition", "movement", "change", "halt"],
  correctIndex: 0,
  explanation: "'Transition' oznacza 'przejście'.",
},
{
  id: 67,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'przejście w górę'?",
  options: ["upward transition", "forward change", "upper movement", "rising transition"],
  correctIndex: 0,
  explanation: "'Upward transition' oznacza 'przejście w górę'.",
},
{
  id: 68,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'przejście w dół'?",
  options: ["low transition", "downward transition", "falling change", "lower movement"],
  correctIndex: 1,
  explanation: "'Downward transition' oznacza 'przejście w dół'.",
},
{
  id: 69,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'zatrzymanie'?",
  options: ["stop", "halt", "pause", "stand"],
  correctIndex: 1,
  explanation: "'Halt' oznacza 'zatrzymanie'.",
},
{
  id: 70,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'ruszenie ze stój'?",
  options: ["move from stop", "move off from halt", "start from stand", "go from halt"],
  correctIndex: 1,
  explanation: "'Move off from halt' oznacza 'ruszenie ze stój'.",
},
{
  id: 71,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'ujeżdżenie'?",
  options: ["dressage", "riding", "flatwork", "schooling"],
  correctIndex: 0,
  explanation: "'Dressage' oznacza 'ujeżdżenie'.",
},
{
  id: 72,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'kontakt'?",
  options: ["connection", "contact", "frame", "reach"],
  correctIndex: 1,
  explanation: "'Contact' oznacza 'kontakt'.",
},
{
  id: 73,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'impuls'?",
  options: ["energy", "impulse", "impulsion", "push"],
  correctIndex: 2,
  explanation: "'Impulsion' oznacza 'impuls'.",
},
{
  id: 74,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'rytm'?",
  options: ["tempo", "rhythm", "beat", "cadence"],
  correctIndex: 1,
  explanation: "'Rhythm' oznacza 'rytm'.",
},
{
  id: 75,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'prostowanie'?",
  options: ["straightness", "straightening", "alignment", "balance"],
  correctIndex: 0,
  explanation: "'Straightness' oznacza 'prostowanie'.",
},
{
  id: 76,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'zebranie'?",
  options: ["engagement", "collection", "contact", "gathering"],
  correctIndex: 1,
  explanation: "'Collection' oznacza 'zebranie'.",
},
{
  id: 77,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'rozluźnienie'?",
  options: ["lightness", "relaxation", "release", "softness"],
  correctIndex: 1,
  explanation: "'Relaxation' oznacza 'rozluźnienie'.",
},
{
  id: 78,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'aktywne tylne nogi'?",
  options: ["active hind legs", "engaged back legs", "active rear legs", "working hindquarters"],
  correctIndex: 0,
  explanation: "'Active hind legs' oznacza 'aktywne tylne nogi'.",
},
{
  id: 79,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'koło'?",
  options: ["round", "circle", "ring", "loop"],
  correctIndex: 1,
  explanation: "'Circle' oznacza 'koło'.",
},
{
  id: 80,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'pół koła'?",
  options: ["semi circle", "middle circle", "half circle", "part circle"],
  correctIndex: 2,
  explanation: "'Half circle' oznacza 'pół koła'.",
},
{
  id: 81,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'serpentyna'?",
  options: ["curve", "serpentine", "snake line", "bending line"],
  correctIndex: 1,
  explanation: "'Serpentine' oznacza 'serpentyna'.",
},
{
  id: 82,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'przekątna'?",
  options: ["diagonal", "cross line", "middle line", "slant"],
  correctIndex: 0,
  explanation: "'Diagonal' oznacza 'przekątna'.",
},
{
  id: 83,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'linia środkowa'?",
  options: ["middle line", "center line", "central track", "main line"],
  correctIndex: 1,
  explanation: "'Center line' oznacza 'linia środkowa'.",
},
{
  id: 84,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'ściana'?",
  options: ["wall", "side", "track", "line"],
  correctIndex: 2,
  explanation: "'Track' oznacza 'ściana' w ujeżdżeniu.",
},
{
  id: 85,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'zmiana kierunku'?",
  options: ["change of line", "change of direction", "turning change", "switch direction"],
  correctIndex: 1,
  explanation: "'Change of direction' oznacza 'zmiana kierunku'.",
},
{
  id: 86,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'zmiana nogi w galopie'?",
  options: ["canter swap", "lead change", "flying change", "gallop switch"],
  correctIndex: 2,
  explanation: "'Flying change' oznacza 'zmiana nogi w galopie'.",
},
{
  id: 87,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'ustępowanie od łydki'?",
  options: ["leg yield", "side pass", "leg move", "yield away"],
  correctIndex: 0,
  explanation: "'Leg yield' oznacza 'ustępowanie od łydki'.",
},
{
  id: 88,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'łopatka do wewnątrz'?",
  options: ["shoulder-in", "inside shoulder", "shoulder turn", "bend in"],
  correctIndex: 0,
  explanation: "'Shoulder-in' oznacza 'łopatka do wewnątrz'.",
},
{
  id: 89,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'trawers'?",
  options: ["travers", "renvers", "half pass", "side step"],
  correctIndex: 0,
  explanation: "'Travers' oznacza 'trawers'.",
},
{
  id: 90,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'renwers'?",
  options: ["renvers", "travers", "shoulder-out", "outside bend"],
  correctIndex: 0,
  explanation: "'Renvers' oznacza 'renwers'.",
},
{
  id: 91,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'ciąg'?",
  options: ["half pass", "full pass", "side movement", "cross move"],
  correctIndex: 0,
  explanation: "'Half pass' oznacza 'ciąg'.",
},
{
  id: 92,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'skoki przez przeszkody'?",
  options: ["jumping", "show jumping", "horse jumping", "fence riding"],
  correctIndex: 1,
  explanation: "'Show jumping' oznacza 'skoki przez przeszkody'.",
},
{
  id: 93,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'parkur'?",
  options: ["course", "track", "arena", "route"],
  correctIndex: 0,
  explanation: "'Course' oznacza 'parkur'.",
},
{
  id: 94,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'przeszkoda'?",
  options: ["fence", "jump", "barrier", "obstacle"],
  correctIndex: 1,
  explanation: "'Jump' oznacza 'przeszkoda'.",
},
{
  id: 95,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'drąg'?",
  options: ["rail", "pole", "bar", "stick"],
  correctIndex: 1,
  explanation: "'Pole' oznacza 'drąg'.",
},
{
  id: 96,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'stacjonata'?",
  options: ["vertical", "upright", "single jump", "straight fence"],
  correctIndex: 0,
  explanation: "'Vertical' oznacza 'stacjonata'.",
},
{
  id: 97,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'okser'?",
  options: ["double", "spread", "oxer", "wide jump"],
  correctIndex: 2,
  explanation: "'Oxer' oznacza 'okser'.",
},
{
  id: 98,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'najazd'?",
  options: ["approach", "entry", "run-up", "take line"],
  correctIndex: 0,
  explanation: "'Approach' oznacza 'najazd'.",
},
{
  id: 99,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'odbicie'?",
  options: ["push off", "take-off", "jump start", "lift"],
  correctIndex: 1,
  explanation: "'Take-off' oznacza 'odbicie'.",
},
{
  id: 100,
  type: "word",
  prompt: "Jak powiedzieć po angielsku: 'lądowanie'?",
  options: ["landing", "touchdown", "come down", "drop"],
  correctIndex: 0,
  explanation: "'Landing' oznacza 'lądowanie'.",
},
      {
  id: 101,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Pracujemy dziś nad przejściami w górę.'",
  options: [
    "We are working on upward transitions today.",
    "We work today on going up changes.",
    "Today we training upper movements.",
    "We do transitions to top today."
  ],
  correctIndex: 0,
  explanation: "Najbardziej naturalne zdanie to: 'We are working on upward transitions today.'",
},
{
  id: 102,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Zrób przejście stęp–kłus.'",
  options: [
    "Do a walk to trot transition.",
    "Make a step and trot moving.",
    "Go from walk in trot nowing.",
    "Take the horse from step to running."
  ],
  correctIndex: 0,
  explanation: "Poprawna forma to: 'Do a walk to trot transition.'",
},
{
  id: 103,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Zrób przejście kłus–galop.'",
  options: [
    "Do a trot to canter transition.",
    "Make trot and gallop change.",
    "Go from trot into race gallop.",
    "Take the horse to canter from trotting line."
  ],
  correctIndex: 0,
  explanation: "To naturalne polecenie treningowe.",
},
{
  id: 104,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Teraz zrób przejście galop–kłus.'",
  options: [
    "Now do a canter to trot transition.",
    "Make now canter and trot changing.",
    "Go canter back in trot now.",
    "Take down the horse from gallop to kłus."
  ],
  correctIndex: 0,
  explanation: "Poprawne zdanie to: 'Now do a canter to trot transition.'",
},
{
  id: 105,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Zatrzymaj się i rusz ze stój.'",
  options: [
    "Halt and move off from halt.",
    "Stop and go from standing horse.",
    "Make halt and start from no move.",
    "Stay and then ride from stop line."
  ],
  correctIndex: 0,
  explanation: "To poprawna forma dla 'zatrzymaj się i rusz ze stój'.",
},
{
  id: 106,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Utrzymaj rytm w kłusie.'",
  options: [
    "Keep the rhythm in trot.",
    "Hold the music in trot.",
    "Stay with beat during horse run.",
    "Maintain the tempo of step two."
  ],
  correctIndex: 0,
  explanation: "Najbardziej naturalne zdanie to: 'Keep the rhythm in trot.'",
},
{
  id: 107,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Koń powinien pracować na kontakcie.'",
  options: [
    "The horse should work into the contact.",
    "The horse should go to the hand contactly.",
    "The horse must work in touching.",
    "The horse should do the bit line."
  ],
  correctIndex: 0,
  explanation: "Tak naturalnie mówi się o pracy na kontakcie.",
},
{
  id: 108,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Popraw prostowanie na długiej ścianie.'",
  options: [
    "Improve the straightness on the long side.",
    "Make horse more straight on big wall.",
    "Correct the horse line on long track side wall.",
    "Put the horse in straight on the long place."
  ],
  correctIndex: 0,
  explanation: "Najbardziej naturalne zdanie treningowe to: 'Improve the straightness on the long side.'",
},
{
  id: 109,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Pracujemy dziś nad zebraniem.'",
  options: [
    "We are working on collection today.",
    "We train gathered horse today.",
    "Today we make the horse collected thing.",
    "We are doing horse closing today."
  ],
  correctIndex: 0,
  explanation: "Poprawna forma to: 'We are working on collection today.'",
},
{
  id: 110,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Rozluźnienie jest dziś najważniejsze.'",
  options: [
    "Relaxation is the most important thing today.",
    "Relaxing is biggest for today now.",
    "Today the horse must be most loosened.",
    "Relax is number one in this training now."
  ],
  correctIndex: 0,
  explanation: "To naturalna i poprawna forma.",
},
{
  id: 111,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Zrób koło na środku ujeżdżalni.'",
  options: [
    "Ride a circle in the middle of the arena.",
    "Make a round in middle place.",
    "Go one wheel in center.",
    "Ride around in the central point."
  ],
  correctIndex: 0,
  explanation: "Najbardziej naturalne polecenie to: 'Ride a circle in the middle of the arena.'",
},
{
  id: 112,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Jedź po pół kole.'",
  options: [
    "Ride a half circle.",
    "Go on half wheel.",
    "Make half round ride.",
    "Ride the middle circle cut."
  ],
  correctIndex: 0,
  explanation: "Poprawna forma to: 'Ride a half circle.'",
},
{
  id: 113,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Zrób serpentynę w kłusie.'",
  options: [
    "Do a serpentine in trot.",
    "Make snake line in horse trot.",
    "Ride curve exercise in running step.",
    "Take a serpentine line with kłus."
  ],
  correctIndex: 0,
  explanation: "To poprawne i naturalne polecenie.",
},
{
  id: 114,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Przejedź po przekątnej.'",
  options: [
    "Ride across the diagonal.",
    "Go by the cross line.",
    "Take the slant route in arena.",
    "Ride on the diagonal way side."
  ],
  correctIndex: 0,
  explanation: "Najnaturalniej: 'Ride across the diagonal.'",
},
{
  id: 115,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Wjedź na linię środkową.'",
  options: [
    "Ride onto the center line.",
    "Go to the middle horse line.",
    "Enter the central ride track.",
    "Take the horse on line in middle."
  ],
  correctIndex: 0,
  explanation: "To standardowe polecenie ujeżdżeniowe.",
},
{
  id: 116,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Zmień kierunek przy literze C.'",
  options: [
    "Change direction at C.",
    "Turn the horse on C letter side.",
    "Make another way near C point.",
    "Do direction switch by the C."
  ],
  correctIndex: 0,
  explanation: "Poprawna forma to: 'Change direction at C.'",
},
{
  id: 117,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Koń zrobił zmianę nogi w galopie.'",
  options: [
    "The horse did a flying change.",
    "The horse changed leg in fast canter line.",
    "The horse made a canter foot switch.",
    "The horse did changing in gallop leg."
  ],
  correctIndex: 0,
  explanation: "W ujeżdżeniu mówi się: 'The horse did a flying change.'",
},
{
  id: 118,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Ćwiczymy ustępowanie od łydki.'",
  options: [
    "We are practicing leg yield.",
    "We train giving from leg.",
    "We are doing side move from calf.",
    "We practice horse moving away leg."
  ],
  correctIndex: 0,
  explanation: "Najbardziej naturalna forma to: 'We are practicing leg yield.'",
},
{
  id: 119,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Zrób łopatkę do wewnątrz.'",
  options: [
    "Do shoulder-in.",
    "Make shoulder to inside now.",
    "Put the shoulder in the horse.",
    "Turn shoulder to center."
  ],
  correctIndex: 0,
  explanation: "To standardowe polecenie: 'Do shoulder-in.'",
},
{
  id: 120,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Teraz pojedź trawersem.'",
  options: [
    "Now ride travers.",
    "Go now in side cross bend.",
    "Ride horse in traversing movement.",
    "Make back side movement now."
  ],
  correctIndex: 0,
  explanation: "Najprościej i poprawnie: 'Now ride travers.'",
},
{
  id: 121,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Zrób ciąg w lewo.'",
  options: [
    "Do a half pass to the left.",
    "Make side crossing left horse movement.",
    "Take the horse left in pass halfing.",
    "Do a leg pass deep to left."
  ],
  correctIndex: 0,
  explanation: "To poprawne polecenie dla 'ciągu w lewo'.",
},
{
  id: 122,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Dziś ćwiczymy skoki przez przeszkody.'",
  options: [
    "We are practicing show jumping today.",
    "Today we train horse jumping over things.",
    "We do obstacle horse work in this day.",
    "Now we are in jump riding obstacles."
  ],
  correctIndex: 0,
  explanation: "Najbardziej naturalna forma to: 'We are practicing show jumping today.'",
},
{
  id: 123,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Zapamiętaj parkur.'",
  options: [
    "Memorize the course.",
    "Remember the jumping road.",
    "Keep the parkour in minding.",
    "Learn the horse route of jumps."
  ],
  correctIndex: 0,
  explanation: "W skokach 'course' oznacza parkur.",
},
{
  id: 124,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'To jest wysoka przeszkoda.'",
  options: [
    "This is a high jump.",
    "This is a tall obstacle horse.",
    "Here is one high fence thing.",
    "This jumping thing is high there."
  ],
  correctIndex: 0,
  explanation: "Najbardziej naturalnie: 'This is a high jump.'",
},
{
  id: 125,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Połóż drągi na ziemi.'",
  options: [
    "Put the poles on the ground.",
    "Lay the bars in floor.",
    "Take poles down to earth now.",
    "Put the sticks for horse below."
  ],
  correctIndex: 0,
  explanation: "To poprawne i naturalne polecenie.",
},
{
  id: 126,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'To jest stacjonata.'",
  options: [
    "This is a vertical.",
    "This is a straight jumping fence.",
    "It is one upright horse jump line.",
    "That is station jump."
  ],
  correctIndex: 0,
  explanation: "W skokach 'vertical' oznacza stacjonatę.",
},
{
  id: 127,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Następna przeszkoda to okser.'",
  options: [
    "The next jump is an oxer.",
    "The next obstacle is wide vertical horse.",
    "The next fence comes as ox jump line.",
    "After this there is one oxer type thing."
  ],
  correctIndex: 0,
  explanation: "To naturalne określenie kolejnej przeszkody.",
},
{
  id: 128,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Najazd był za szybki.'",
  options: [
    "The approach was too fast.",
    "The horse came in speed too much on line.",
    "The going to jump was over quick.",
    "Approach to obstacle had too many speed."
  ],
  correctIndex: 0,
  explanation: "Najbardziej naturalnie: 'The approach was too fast.'",
},
{
  id: 129,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Odbicie było spóźnione.'",
  options: [
    "The take-off was late.",
    "The jump start came too after.",
    "The horse pushed from ground lately.",
    "Take from jump was delayed in air."
  ],
  correctIndex: 0,
  explanation: "To poprawna forma dla 'spóźnionego odbicia'.",
},
{
  id: 130,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Lądowanie było nierówne.'",
  options: [
    "The landing was uneven.",
    "The horse came down not equal.",
    "Landing after jump was not same right.",
    "The ground finish was unbalanced landingly."
  ],
  correctIndex: 0,
  explanation: "Najbardziej naturalne zdanie to: 'The landing was uneven.'",
},
{
  id: 131,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Koń miał odmowę na pierwszej przeszkodzie.'",
  options: [
    "The horse had a refusal at the first jump.",
    "The horse said no on first obstacle.",
    "At the first fence the horse did not go there.",
    "Horse made a stop on number one jump thing."
  ],
  correctIndex: 0,
  explanation: "W skokach używa się słowa 'refusal'.",
},
{
  id: 132,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Koń zrobił wyłamanie.'",
  options: [
    "The horse had a run-out.",
    "The horse went outside jumping thing.",
    "The horse escaped from line fence.",
    "The horse made side refusal out."
  ],
  correctIndex: 0,
  explanation: "Poprawna forma to: 'The horse had a run-out.'",
},
{
  id: 133,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Była zrzutka na okserze.'",
  options: [
    "There was a rail down at the oxer.",
    "The oxer had one bar falling thing.",
    "A pole went off on oxer jump line.",
    "There was down rail in the wide fence."
  ],
  correctIndex: 0,
  explanation: "To naturalna forma opisu błędu na przeszkodzie.",
},
{
  id: 134,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Koń odbił się za daleko.'",
  options: [
    "The horse had a long take-off.",
    "The horse jumped from too much distance far.",
    "The take from ground was very longly.",
    "Horse pushed far away before obstacle."
  ],
  correctIndex: 0,
  explanation: "Poprawna forma to: 'The horse had a long take-off.'",
},
{
  id: 135,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Koń był za blisko przeszkody.'",
  options: [
    "The horse was too deep to the jump.",
    "The horse came much too near obstacle line.",
    "Horse was too close in front of jump thing.",
    "The horse entered deep at fence place too much."
  ],
  correctIndex: 0,
  explanation: "W skokach mówi się: 'too deep to the jump'.",
},
{
  id: 136,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Jedź do przodu.'",
  options: [
    "Go forward.",
    "Ride to front.",
    "Go in front way now.",
    "Take horse more aheadly."
  ],
  correctIndex: 0,
  explanation: "To poprawny i naturalny zwrot używany na parkurze.",
},
{
  id: 137,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Utrzymaj rytm.'",
  options: [
    "Keep the rhythm.",
    "Hold the beat line.",
    "Stay in horse music.",
    "Maintain the movement song."
  ],
  correctIndex: 0,
  explanation: "To standardowy zwrot treningowy.",
},
{
  id: 138,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Zrób półparadę.'",
  options: [
    "Make a half halt.",
    "Do a little stop now.",
    "Take half pause in riding.",
    "Make a soft stopping aid half."
  ],
  correctIndex: 0,
  explanation: "Poprawne polecenie to: 'Make a half halt.'",
},
{
  id: 139,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Utrzymaj kontakt.'",
  options: [
    "Maintain contact.",
    "Keep touching the horse mouth.",
    "Hold the hand line connection now.",
    "Stay with rein link all time."
  ],
  correctIndex: 0,
  explanation: "To właściwy zwrot z dokumentu.",
},
{
  id: 140,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Użyj wewnętrznej łydki.'",
  options: [
    "Use your inside leg.",
    "Take your inner calf now.",
    "Ride from inner leg part there.",
    "Put more leg from in side."
  ],
  correctIndex: 0,
  explanation: "To poprawne i naturalne polecenie.",
},
{
  id: 141,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Wyprostuj konia.'",
  options: [
    "Straighten the horse.",
    "Make the horse more straightly.",
    "Put the horse in direct line now.",
    "Correct horse to front shape."
  ],
  correctIndex: 0,
  explanation: "Najbardziej naturalnie: 'Straighten the horse.'",
},
{
  id: 142,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Patrz na następną przeszkodę.'",
  options: [
    "Look at the next jump.",
    "See the coming obstacle there.",
    "Watch on next fence now.",
    "Keep eye to another jump thing."
  ],
  correctIndex: 0,
  explanation: "To poprawny zwrot używany na parkurze.",
},
{
  id: 143,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Nie przyspieszaj przed przeszkodą.'",
  options: [
    "Don’t rush before the jump.",
    "Do not go more quick in front obstacle.",
    "Not speed before fence line.",
    "Do not faster the horse near jump."
  ],
  correctIndex: 0,
  explanation: "To naturalne polecenie z dokumentu.",
},
{
  id: 144,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Daj koniowi miejsce.'",
  options: [
    "Give the horse space.",
    "Make room to horse now.",
    "Leave horse more free rooming.",
    "Put more place for horse there."
  ],
  correctIndex: 0,
  explanation: "To poprawna i naturalna forma.",
},
{
  id: 145,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Utrzymaj linię.'",
  options: [
    "Keep the line.",
    "Stay on one horse way.",
    "Hold the route directness.",
    "Maintain the straight road thing."
  ],
  correctIndex: 0,
  explanation: "To krótki, poprawny zwrot treningowy.",
},
{
  id: 146,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Koń ma dobre aktywne tylne nogi.'",
  options: [
    "The horse has good active hind legs.",
    "The horse is active in the back foots.",
    "The horse goes strong on rear legsly.",
    "Horse has nice activity in the hind parts legs."
  ],
  correctIndex: 0,
  explanation: "Najbardziej naturalna forma to: 'The horse has good active hind legs.'",
},
{
  id: 147,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'To był dobry working trot.'",
  options: [
    "That was a good working trot.",
    "It was one nice trot of working.",
    "That trot was worker and good.",
    "This was a well trot in work kind."
  ],
  correctIndex: 0,
  explanation: "To poprawna forma z użyciem nazwy chodu.",
},
{
  id: 148,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Pokaż medium trot na przekątnej.'",
  options: [
    "Show a medium trot on the diagonal.",
    "Make medium trot in the cross line now.",
    "Ride medium on diagonal horse line.",
    "Show middle trot across arena line."
  ],
  correctIndex: 0,
  explanation: "To naturalne polecenie ujeżdżeniowe.",
},
{
  id: 149,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Na końcu daj koniowi free walk.'",
  options: [
    "At the end, give the horse a free walk.",
    "In finish make horse free in step.",
    "Last do one open walk for horse.",
    "At the final let horse walk free style."
  ],
  correctIndex: 0,
  explanation: "To poprawne zdanie z nazwą chodu.",
},
{
  id: 150,
  type: "sentence",
  prompt: "Wybierz najlepsze zdanie: 'Dziś pracujemy nad rytmem, kontaktem i prostowaniem.'",
  options: [
    "Today we are working on rhythm, contact, and straightness.",
    "Today we train rhythm, touching and horse straighting.",
    "We are doing beat, contact and direct horse today.",
    "Today horse work is about rhythm and making straight line contact."
  ],
  correctIndex: 0,
  explanation: "To najbardziej naturalna forma podsumowująca trening.",
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
