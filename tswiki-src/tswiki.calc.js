function kaladon_getcost(str) {
    var r = '?';
    for (var wordtype in kaladon_spellwords) {
        if (str in kaladon_spellwords[wordtype]) r = kaladon_spellwords[wordtype][str];
    }
    return r;
}

function conf_getcost(str) {
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

    $("#spell_verify").click(function() {
        var a_spell = $("#spell_input").val();
        var words = 0;
        var nowords = 0;
        var spellpower = 0;
        var out = '';
        var re = /[\s|\(|\)|\:|\*]/
        spell_words = a_spell.split(re);
        var the_world = $("input[@name='the_world']:checked").val();
        $.each(spell_words, function (idx, value) {
            if (value != '') {
                // the_world = 'kaladon';
                cost = the_world == 'kaladon' ? kaladon_getcost(value) : conf_getcost(value);

                // cost = getcost(value);
                if (cost == '?') {
                    sup_element = '<sup class="error">';
                    nowords++;
                } else {
                    sup_element = '<sup>';
                    spellpower += cost;
                    words++;
                }
                sstr = '<span class="word">' + value + sup_element + cost + '</sup></span> ';
                out += sstr;
            }
        });
        $(".info").val('?');
        if (!(words == 0)) $("#spell_avg").val((spellpower / words).toFixed(1));
        $("#spell_output").html(out);
        $(".bg_out").show();
        $("#spell_len").val(words);
        $("#spell_power").val(spellpower);
        $("#spell_unk").val(nowords);
    });

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