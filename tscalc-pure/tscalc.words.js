/**
 * Version 1.6 (2016-11-19)
 */
var kaladon_spellwords = {
    words : {
        'я': 1, 'я/слово': 1, '!я': 1,
        'поток':    2,
        'толчок':   2,
        'мысль/слово': 3, 'мысль': 3, '!мысль': 3,
        'шар':      3,
        'движение': 4,
        'слово':    4,
        'сон':      5,
        'корень':   5,
        'ухо':      5,
        'конус':    5,
        'силой':    5,'сила':5,
        'тело':     5, 'тела':     5,
        'жизнь':    6,
        'имеющий-дар': 6, 'имеющийдар': 6, 'имеющий_дар': 6, 'ИД': 6,
        'кли-поле':    6,
        'кора': 6,
        'магия': 7,
        'глаз': 7,
        'вихрь': 7,
        'фокус': 7,
        'знак': 8,
        'место': 8,
        'рука': 8,
        'крест': 9,
        'взгляд': 9,
        'образ': 10,
        'спираль': 11,
        'храм': 11,
        'клинок': 12,
        'слой': 13,
        'смерть': 13, 'смерть/слово': 13, '!смерть': 13,
        'сердце': 14,
        'сосредоточение': 14,
        'горнило': 17,
        'баланс': 18
    },
    forms : {
        'создать' : 1, '*создать' : 1,
        'в': 1,
        'стрела': 2,
        'разрушить' : 3,
        'внутри': 4,
        'горн': 5,
        'рост': 5,
        'течение': 6,
        'изъять': 6,
        'посолонь': 6, 'вверх': 6,
        'противосолонь': 6, 'вниз': 6,
        'вложить': 6,
        'там': 6,
        'или': 7,
        'пирамида': 7,
        'молния': 7,
        'переместить': 7,
        'разность': 8,
        'волна': 8,
        'на': 8, 'over': 8,
        'если': 8, 'то': 0,
        'столп': 8,
        'таккак': 9, 'так-как': 9, 'так_как': 9, 'так,как': 9,
        'когда': 9, 'тогда': 0,
        'цепь': 11,
        'вокруг': 11,
        'взрыв': 11,
        'сжать': 13,
        'числительное': 1 // особое правило
    },
    dirs : {
        'эмоции/чувства': 1, 'э/ч': 1,
        'направить': 1,
        'закрыть': 2,
        'вскрыть': 2,
        'закрутить': 2,
        'от': 3, 'от-сих-до-сих': 3, 'от-до': 3,
        'тамгде': 3, 'там-где': 3, 'там,где': 3,
        'мысль/напр': 4, '?мысль': 4,
        'через': 4, 'сквозь': 4,
        'вдоль': 4,
        'скрепить': 5, '*скрепить': 5,  // так сделано специально - ведь * - префикс стихии
        'за': 6,
        'дотехпор': 6, 'дотехпорпока': 6, 'дотехпор,пока': 6,
        'пока': 6, 'пока-условие': 6,
        'разделить': 6,
        'вовсестороны': 7, 'во-все-стороны': 7,
        'к': 7,
        'везде': 8,
        'назад': 10,
        'туда': 12,
        'сложить': 13,
        'вездетамгдеесть': 14,
        'магнит' : 15
    },
    targets : {
        '%я': 1, // впрочем стоимость я-слова и я-цели одинакова, но %я указать стоит
        'заклинание': 1, '%заклинание': 1,
        'животное': 2,
        'камень' : 2,
        'существо': 3, 'существа': 3,
        'гуманоид': 3,
        'HILF': 4, 'hilf': 4,
        'тангар': 5, 'дварф': 5,
        'элементал': 5, 'стихийный-дух': 5, 'элементаль': 5,
        'человек': 5,
        'растение': 5,
        'бес': 5,
        'эльф': 5,
        'духпредков': 7, 'дух-предков': 7,
        'тролль': 7,
        'меч': 7,
        'андед': 8, 'undead': 8,
        'дерево': 8,
        'неподвижнаявода': 8, 'неподвижная_вода': 8, 'неподвижная-вода': 8, 'стоячаявода': 8,
        'носитель': 8,
        'демон': 9,
        'ты': 9,
        'тень': 13,
        'ангел': 14,
        'небесныйкамень': 16, 'небесный-камень': 16, 'небесный_камень': 16,
        'it': 1
    },
    powers : {
        // внешний круг сил
        'свет': 1,
        '*свет': 1,
        'благость': 9, 'свят': 11, 'holy': 11, 'HOLY': 11, 'ангелус': 13, 'ANGELUS': 13, 'angelus': 13,
        '*благость': 9, '*свят': 11, '*holy': 11, '*HOLY': 11, '*ангелус': 13, '*ANGELUS': 13, '*angelus': 13,
        'stasis': 18, 'стазис': 18,
        'порядок': 12,
        'точка': 9,
        '*мысль': 3, 'ментал': 7, 'подсознание': 13,
        'мрак': 3,
        'инферно': 8, 'ад': 11, 'diabolus': 14,
        'время': 18,
        'хаос': 12,
        'пространство': 9,
        'дуновение': 2, 'астрал': 7, 'глубина': 13,
        // внутренний круг сил (элементальные силы)
        'искра': 2, 'огонь': 4, 'пламя': 6, 'всполох': 8,
        'пыль': 2, 'земля': 4, '*камень': 6, 'скала': 8,
        'ручей': 3, 'вода': 5, 'река': 7, 'море': 9,
        'ветер': 4, 'воздух': 6, 'буря': 8, 'ураган': 10,
        'росток': 5, '*дерево': 7, 'лес': 9, 'флора': 11, 'TREE': 7, 'tree': 7,
        'руда': 2, 'металл': 4, 'сплав': 6, 'дух_металла': 8, 'духметалла': 8, 'дух-металла': 8,
        'снежинка': 2, 'холод': 4, 'лёд': 6, 'стужа': 8, 'лед': 6,
        'planetary': 9, 'gravity': 11, 'subgravity': 15, 'blackhole': 18,
        'планетари': 9, 'гравитация': 11, 'субгравитация': 13, 'чернаядыра': 15, 'черная-дыра': 15, 'черная_дыра': 15,
        'sky': 5, 'stratos': 7, 'aerus': 9, 'aefilus': 11,
        'небо': 5, 'страто': 7, 'аэрус': 9, 'аэфилус': 11,
        // особые силы
        '*жизнь': 14, '*ЖИЗНЬ': 14, 'LIFE': 14, 'life': 14,
        '*смерть': 16,  '*СМЕРТЬ': 16,  'DEATH': 16,  'death': 16,
        '*магия': 1, 'MAGIC': 1, 'magic': 1, '*МАГИЯ': 1,
        '*заклинания': 1, '*ЗАКЛИНАНИЯ': 1, 'SPELL': 1, 'spell': 1, 'SPELLS': 1, 'spells': 1,
        // составные
        'shadow': 14,
        'grayhaze': 18,
        'prime': 18,
        'starlight': 17,
        'force': 15 // ?
    }
};

var conf_spellwords = {
    words : {
        'шар': 3,
        'толчок': 1,
        'слово': 2,
        'мысль/слово': 1, 'мысль': 1, '!мысль': 1,
        'поток': 2,
        'тело': 2,
        'я': 1, 'я/слово': 1, '!я': 1,
        'имеющий-дар': 5, 'имеющийдар': 5, 'имеющий_дар': 5,
        'силой':5,'сила':5,
        'магия': 5,
        'конус': 6,
        'вихрь': 7,
        'жизнь': 7,
        'крест': 6,
        'рука': 8,
        'глаз': 7,
        'образ': 10,
        'клинок': 12,
        'смерть': 10, 'смерть/слово': 10, '!смерть': 10,
        'сердце': 9,
        'ухо': 8,
        'храм': 12,
        'место': 11,
        'слой': 14,
        'спираль': 8,
        'движение': 6,
        'баланс': 18
    },
    forms : {
        'в': 1,
        'создать' : 1,
        'внутри': 2,
        'там': 2,
        'вложить': 3,
        'разрушить' : 2,
        'переместить': 3,
        'если': 5, 'то': 0,
        'когда': 5, 'тогда': 0,
        'молния': 6,
        'на': 5, 'over': 5,
        'посолонь': 7, 'вверх': 7,
        'противосолонь': 7, 'вниз': 7,
        'таккак': 9, 'так-как': 9, 'так_как': 9, 'так,как': 9,
        'волна': 9,
        'взрыв': 10,
        'вокруг': 9,
        'пирамида': 6,
        'стрела': 2,
        'изъять': 10,
        'или': 8,
        'разность': 12,
        'сжать': 13,
        'течение': 3,
        'цепь': 10
    },
    dirs : {
        'направить': 1,
        'закрутить': 2,
        'эмоции/чувства': 2, 'э/ч': 2,
        'вскрыть': 2,
        'закрыть': 2,
        'тамгде': 6, 'там-где': 6, 'там,где': 6,
        'вдоль': 3,
        'через': 3, 'сквозь': 3,
        'скрепить': 4,
        'разделить': 4,
        'пока': 5, 'пока-условие': 5,
        'дотехпор': 5, 'дотехпорпока': 5, 'дотехпор,пока': 5,
        'к': 6,
        'везде': 6,
        'назад': 11,
        'от': 4, 'от-сих-до-сих': 4, 'от-до': 4,
        'мысль/напр': 9, '?мысль': 9,
        'вовсестороны': 5, 'во-все-стороны': 5,
        'туда': 8,
        'сложить': 9,
        'за': 12,
        'вездетамгдеесть': 14,
        'магнит' : 15
    },
    targets : {
        'гуманоид': 1,
        'камень' : 1,
        'существо': 1,
        'животное': 1,
        'заклинание': 1, '%заклинание': 1,
        'эльф': 3,
        'тролль': 4,
        'ты': 1,
        'бес': 6,
        'демон': 9,
        'растение': 1,
        'человек': 2,
        'духпредков': 9, 'дух-предков': 9,
        'ангел': 12,
        'носитель': 6,
        'элементал': 13, 'стихийный-дух': 13, 'элементаль': 13,
        '%я': 1, // впрочем стоимость я-слова и я-цели одинакова, но %я указать стоит
        'тангар': 6,
        'неподвижнаявода': 10, 'неподвижная_вода': 10, 'неподвижная-вода': 10,
        'тень': 12,
        'дерево': 3,
        'андед': 1,
        'небесныйкамень': 16, 'небесный-камень': 16, 'небесный_камень': 16,
        'it': 1
    },
    powers : {
        // цветной круг
        'свет': 1, 'свят': 8, 'стратос': 12, 'аэфилус': 15, 'жизнь': 17,
        'пагуба': 6, 'инферно': 10, 'диаболус': 14, 'стазис': 15, 'смерть': 17,
        'прах': 4, 'астрал': 6, 'плоть': 10, 'дух': 14, 'некро': 16,
        'росток': 2, 'инсекта': 6, 'дерево': 8, 'анималия': 12, 'природа': 16,
        'искра': 1, 'костер': 4, 'лава': 8, 'пламя': 13, 'вулкан': 17,
        'пыль': 2, 'жар': 6, 'песок': 8, 'суховей': 13, 'пустыня': 16,
        'ручей': 2, 'прилив': 5, 'река': 8, 'море': 12, 'буря': 17,
        'снег': 3, 'металл': 5, 'лёд': 9, 'кристалл': 14, 'лайтнинг': 15,
        // надмировые
        'эмоции': 4, 'ментал': 8, 'воля': 12, 'подсознание': 15, 'сумерки': 18,
        'точка': 8, 'планетари': 9, 'пространство': 14, 'гравитация': 15, 'время': 18,
        // внемировые
        'заря': 5, 'солнце': 11, 'старлайт': 12, 'звезда': 16, 'музыка': 18,
        'сопряжение': 6, 'искажение': 6, 'порядок': 17, 'хаос': 17, 'баланс': 18
        // сила, нацеленная на сопряжение (тяготение друг к другу двух объектов, "любовь")
        // искажение одного или нескольких свойств
    }
};
