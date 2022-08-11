Дано:
Массив видов спорта sports, который состоит из [Иконка вида спорта, Название вида спорта];
Массив стран победителей на Олимпийских играх в каждом виде спорта winners, который состоит из [Название вида спорта, Завоеванная медаль, Страна];
Массив колец с Олимпийской эмблемы olympic, который состоит из [Иконка олимпийского кольца];
Массив медалей medals, который состоит из [Иконка медали, Название медали];
Массив стран и континентов continents, который состоит из [Название страны, Название контента];
Массив флагов стран который состоит из [Флаг страны, Название страны];
const sports = [
['🤺','fencing'],
['⛸','figure skating'],
['⛷','skier'],
['🏂','snowboarder'],
['🏌','golfing'],
['🚣','rowing boat'],
['🏊','swimming'],
['🤸','gymnastics'],
['🤾','handball']
];

const winners = [
['fencing','gold','fr'],
['fencing','silver','it'],
['fencing','bronze','us'],

    ['figure skating','gold','ca'],
    ['figure skating','silver','ru'],
    ['figure skating','bronze','us'],

    ['skier','gold','no'],
    ['skier','silver','ru'],
    ['skier','bronze','fr'],

    ['snowboarder','gold','us'],
    ['snowboarder','silver','jp'],
    ['snowboarder','bronze','au'],

    ['golfing','gold','gb'],
    ['golfing','silver','se'],
    ['golfing','bronze','us'],

    ['rowing boat','gold','us'],
    ['rowing boat','silver','gb'],
    ['rowing boat','bronze','ro'],

    ['swimming','gold','us'],
    ['swimming','silver','gb'],
    ['swimming','bronze','au'],

    ['gymnastics','gold','ru'],
    ['gymnastics','silver','ru'],
    ['gymnastics','bronze','ua'],

    ['handball','gold','dk'],
    ['handball','silver','fr'],
    ['handball','bronze','de'],

];

const olympic = ['🔵','⚫','🔴','🟡','🟢'];
// Европа — синий, Азия — жёлтый, Африка — чёрный, Австралия — зелёный и Америка — красный

const medals = [
['🥇','gold'],
['🥈','silver'],
['🥉','bronze'],
];

const continents = [
['fr','Europe'],
['it','Europe'],
['us','The Americas'],
['ca','The Americas'],
['ru','Europe'],
['no','Europe'],
['jp','Asia'],
['au','Oceania'],
['gb','Europe'],
['se','Europe'],
['ro','Europe'],
['ua','Europe'],
['dk','Europe'],
['de','Europe']
];

const flags = [
['fr','🇫🇷'],
['it','🇮🇹'],
['us','🇺🇸'],
['ca','🇨🇦'],
['ru','🇷🇺'],
['no','🇳🇴'],
['jp','🇯🇵'],
['au','🇦🇺'],
['gb','🇬🇧'],
['se','🇸🇪'],
['ro','🇷🇴'],
['ua','🇺🇦'],
['dk','🇩🇰'],
['de','🇩🇪']
];
Необходимо вывести таблицу победителей Олимпийских игр в соответствии с видом спорта и континентом команды.
