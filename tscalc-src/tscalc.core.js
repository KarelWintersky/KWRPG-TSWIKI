/**
 * User: Rain
 * Version: 1.5
 * Date: 15.06.2010
 * Update: 26.11.2015
 * Update: 19.11.2016
 */

var getcost = function(str, dictionary) {
    if (typeof dictionary == "undefined")
        dictionary = kaladon_spellwords;

    var r = '?';
    for (var wordtype in dictionary) {
        if (str in dictionary[wordtype])
            r = dictionary[wordtype][str];
    }
    return r;
}

$(document).ready(function(){
    var $spell_input = $("#spell_input");

    $("#spell_input")
        .focus(function(){
            if ($spell_input.val() == $spell_input.attr('title'))
            {
                $spell_input.val('');
                $("#spell_verify").prop('disabled', false);
                $(".hint").text('');
            }
        })
        .blur(function(){
            $(".hint").text('');
            if ($spell_input.val() == '') {
                $spell_input.val($spell_input.attr('title'));
                $("#spell_verify").prop('disabled', true);
                $(".hint").text('Необходимо ввести заклинание');
            }
        });

    $('.toggle').click(function() { $('#'+$(this).attr('title') ).toggle('fast')} );

    // вычисление мощности заклинания и вывод статистики
    $("#spell_verify").click(function(){
        // получить мир
        // the_world = $("input[@name='the_world']:checked").val();
        // var dictionary = (the_world == 'kaladon') ? kaladon_spellwords : conf_spellwords;

        // получить значение формы и преобразовать в последовательность слов
        var source_spell = $("#spell_input").val();
        
        var known_words_count     = 0;
        var unknown_words_count   = 0;
        var spellpower      = 0;
        var cost = '';
        var sup_class = '';

        var regexp_replace = /([a-zа-я*]+)/gi;

        // формируем строку заклинания
        var formatted_spell = source_spell.replace(regexp_replace, function(spellword, inb, offset, sourcestr){
            with(getcost) {  // invoke function getcost() to this closure
                cost = getcost(spellword); // will use dictionary for specific world, default is kaladon_spellwords

                if (cost == '?') {
                    sup_class = 'error';
                    unknown_words_count++;
                } else {
                    sup_class = 'info';
                    known_words_count++;
                    spellpower += cost;
                }

                return '<span class="word">' + spellword + '<sup class="' + sup_class + '">' + cost + '</sup></span>';
            }
        });

        // 5. вывести удельные значения
        $("#spell_length").val( known_words_count );
        $("#spell_unknown_words_count").val( unknown_words_count )
        if ( known_words_count != 0 )
            $("#spell_average_power").val((spellpower/known_words_count).toFixed(1));
        $("#spell_total_power").val( spellpower );
        $("#spell_formatted").html(formatted_spell);
        $(".spell_legend").show();
    });

    // UI
    $('.toggle').click(function() { $('#'+$(this).attr('title') ).toggle('fast')} );

    $('ul.tabs').delegate('li:not(.current)', 'click', function() {
        $(this).addClass('current').siblings().removeClass('current')
            .parents('div.section').find('div.box').eq($(this).index()).fadeIn(150).siblings('div.box').hide();
    });

    var tabIndex = window.location.hash.replace('#tab','')-1;
    if (tabIndex != -1) $('ul.tabs li').eq(tabIndex).click();

    $('a[href^=#tab]').click(function() {
        var tabIndex = $(this).attr('href').replace('#tab','')-1;
        $('ul.tabs li').eq(tabIndex).click();
    });



});
