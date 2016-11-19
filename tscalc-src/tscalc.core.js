/**
 * User: Rain
 * Version: 1.4
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

    $("#spell_input")
        .focus(function(){
            var $this = $(this);
            if ($this.val() == $this.attr('title'))
            {
                $this.val('');
                $("#spell_verify").attr('disabled','');
                $(".hint").text('');
            }
        })
        .blur(function(){
            var $this = $(this);
            $(".hint").text('');
            if ($this.val() == '') {
                $this.val($this.attr('title'));
                $("#spell_verify").attr('disabled','disabled');
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

});
