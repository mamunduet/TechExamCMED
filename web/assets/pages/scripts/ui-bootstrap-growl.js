var UIBootstrapGrowl = function() {

    return {
        //main function to initiate the module
        init: function() {


            $('#bs_growl_show').click(function(event) {

                $.bootstrapGrowl($('#growl_text').val(), {
                    ele: 'body', // which element to append to
                    type: $('#growl_type').val(), // (null, 'info', 'danger', 'success', 'warning')
                    offset: {
                        from: 'top',
                        amount: 100
                    }, // 'top', or 'bottom'
                    align: 'left', // ('left', 'right', or 'center')
                    width: 'auto', // (integer, or 'auto')
                    delay: 5000, // Time while the message will be displayed. It's not equivalent to the *demo* timeOut!
                    allow_dismiss: true, // If true then will display a cross to close the popup.
                    stackup_spacing: 10 // spacing between consecutively stacked growls.
                });

            });

        }

    };

}();

jQuery(document).ready(function() {    
   UIBootstrapGrowl.init();
});