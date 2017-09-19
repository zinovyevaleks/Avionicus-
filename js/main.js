function anichange(objName) {
    $(objName).slideToggle(400);
}

$( function() {
    $( ".checkbox2" ).click (function() {
        var $tableRow = $(this).closest('.divTableRow');
        $tableRow.find( ".icon-type" ).toggleClass( "icon-type-selected" );
        $tableRow.find( ".icon-access" ).toggleClass( "icon-access-selected" );
        $tableRow.find( ".share-icons" ).toggleClass( "share-icons-selected" );
    });
});
