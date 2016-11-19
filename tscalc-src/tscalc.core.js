/**
 * Created by IntelliJ IDEA.
 * User: Rain
 * Date: 15.06.2010
 * Time: 16:52:07
 * To change this template use File | Settings | File Templates.
 */

function kaladon_getcost(str)
{
    var r = '?';
    for (var wordtype in kaladon_spellwords) {
        if (str in kaladon_spellwords[wordtype]) r = kaladon_spellwords[wordtype][str];
    }

    /* // перебор влоб наверное был бы быстрее....
    if (str in ts_words) r = ts_words[str];
    if (str in ts_forms) r = ts_forms[str];
    if (str in ts_dirs) r = ts_dirs[str];
    if (str in ts_targets) r = ts_targets[str];
    if (str in ts_powers) r = ts_powers[str]; */
    return r;
}

function conf_getcost(str)
{
    var r = '?';
    for (var wordtype in conf_spellwords) {
        if (str in conf_spellwords[wordtype]) r = conf_spellwords[wordtype][str];
    }
    return r;
}

$(document).ready(function(){
    $("#spell_input").focus(function(){
        if ($(this).val() == $(this).attr('title')) {
            $(this).val('');
            $("#spell_verify").attr('disabled','');
            $(".hint").text('');
        }
    });
    $("#spell_input").blur(function(){
        $(".hint").text('');
        if ($(this).val() == '') {
            $(this).val($(this).attr('title'));
            $("#spell_verify").attr('disabled','disabled');
            $(".hint").text('Необходимо ввести заклинание');
        }
    });
    $('.toggle').click(function() { $('#'+$(this).attr('title') ).toggle('fast')} );

    // $("#spell_input").click(function(){$(this).val('')});
    // вычисление мощности заклинания и вывод статистики
    $("#spell_verify").click(function(){
        // 1. получить значение формы и преобразовать в массив (?) слов
        var a_spell = $("#spell_input").val();
        
        // 3. обернуть каждое слово конструкцией <span>..<sup></sup></span> для вывода
        // (опц: для hover-подсветки цены), обработку скобок опустим,
        // равно как и обработку "носитель:(сила пламя), вывод сделаем строго потоком слов
        // 4. вывести заклинание с подсчитанными стоимостями слов

        // преобразовать в массив слов

        var words = 0;
        var nowords = 0;
        var spellpower = 0;
        var out = '';

        // в идеале сделать regExp.replace(слово,ограниченное символами :() или пробелом
        // на то же слово, только в обертке span class=word)
        // тогда после этого мы сможем, засунув стороку в див, пробежатся по каждому элементу, вычислить
        // мощность слова и дописать её принудительно в SUB. Это сохранит символы разметки.

        // см http://webformyself.com/20-poleznyx-metodov-jquery/ (jQuery.map() и grep())
        // http://www.pcre.ru/eval/
        // http://javascript.ru/basic/regular-expression#zamena-replace
        // http://www.linkexchanger.su/2008/56.html

        var re = /[\s|\(|\)|\:|\*]/
        spell_words = a_spell.split(re);

        // получить мир
        the_world = $("input[@name='the_world']:checked").val();

        // 2. посчитать суммарную стоимость, длину и среднюю стоимость
        $.each(spell_words,function(idx,value){
            if (value!='')
            {
                // the_world = 'kaladon';
                cost = the_world=='kaladon' ? kaladon_getcost(value) : conf_getcost(value);

                // cost = getcost(value);
                if (cost=='?') {
                    sup_element = '<sup class="error">';
                    nowords++;
                } else {
                    sup_element = '<sup>'; spellpower += cost;
                    words++;
                }
                sstr = '<span class="word">' + value+ sup_element + cost + '</sup></span> ';
                out += sstr;
            }
        });

        // 5. вывести удельные значения
        $(".info").val('?');
        if (!(words==0)) $("#spell_avg").val((spellpower/words).toFixed(1));
        $("#spell_output").html(out);
        $(".bg_out").show();
        $("#spell_len").val(words);
        $("#spell_power").val(spellpower);

        $("#spell_unk").val(nowords);
    });

});
