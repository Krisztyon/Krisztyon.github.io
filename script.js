$( "#btn" ).click(function() {
    
    $( "#cancel" ).css( "visibility", "visible" );
    $( "#cancel" ).css( "transition", "all 0.32s" );
    $( this ).css( "margin-left", "150px" );
    $( this ).hide();
    $( "#cancel" ).show(0);
});

$( "#cancel" ).click(function() {
    $( "#btn" ).css( "visibility", "visible" );
    $( "#btn" ).css( "margin-left", "0px" );
    $( this ).css( "visibility", "hidden" );
    $( this ).css( "margin-left", "0px" );
    $( "#cancel" ).css( "transition", "all 0.32s" );
    $( "#btn" ).css( "transition", "all 0.32s" );
    $( this ).hide(0);
    $( "#btn" ).show(0);
});

$( "#ageBlockYes" ).click(function() {
    $( "#age" ).toggle();
});

$( "#ageBlockNo" ).click(function() {
    $( "#ageBlockYes" ).toggle();
    $( "#ageBlockNo" ).toggle();

    $( "#informationBox" ).css( "visibility", "visible" );
    $( "#InformationBoxSzoveg" ).text("Túl fiatal vagy még az oldal használhatához!")
});

$("#ageBlockNo").click(function() {
    $("#informationBox").fadeIn(100000,function(){
    });
});


$("#searchAlap").click(function() {
    $( "#searchLenyiloFule" ).css( "visibility", "visible" );
    $("#searchexit").click(function() {
        $( "#searchLenyiloFule" ).css( "visibility", "hidden" );
    });
});

$("#login").click(function() {
    $( "#loginFelugroMenu" ).css( "visibility", "visible" );
    $("#loginexit").click(function() {
        $( "#loginFelugroMenu" ).css( "visibility", "hidden" );
    });
});