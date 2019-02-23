var kirki = kirki || {};
kirki.input = kirki.input || {};

kirki.input.select = {
    /**
     * Init the control.
     *
     * @since 3.0.17
     * @param {Object} control - The control object.
     * @param {Object} control.id - The setting.
     * @returns {null}
     */
    init: function( control ) {
        var element  = jQuery( 'select[data-id="' + control.id + '"]' ),
            multiple = parseInt( element.data( 'multiple' ), 10 ),
            selectValue,
            selectWooOptions = {
                escapeMarkup: function( markup ) {
                    return markup;
                }
            };
            if ( control.params.placeholder ) {
                selectWooOptions.placeholder = control.params.placeholder;
                selectWooOptions.allowClear = true;
            }

        if ( 1 < multiple ) {
            selectWooOptions.maximumSelectionLength = multiple;
        }
        jQuery( element ).selectWoo( selectWooOptions ).on( 'change', function() {
            selectValue = jQuery( this ).val();
            selectValue = ( null === selectValue && 1 < multiple ) ? [] : selectValue;
            kirki.setting.set( control.id, selectValue );
        } );
    }
};
