$(document).ready(function(){
    $("#box_adc h3").click(function(){
        $("#text_adc ul").toggleClass("open");
    }),

    $("#box_jg h3").click(function(){
        $("#text_jg ul").toggleClass("open");
    }),

    $('#toggle_theme').click(function(){
        $('body').toggleClass('light_mode');

        if($('body').hasClass('light_mode')){
            $(this).text('Modo Escuro');
        } else {
            $(this).text('Modo Claro');
        }
    })
});