var validation = {
    resetValidation: function () {
        // Reset all errors
        $('[data-validation-key]')
            .removeClass('invalid');
        $('[data-validation-message]')
            .removeClass('validationMessageVisible')
            .addClass('validationMessageHidden');
    },

    presentValidationErrors: function (errors) {
        // Clear all validation errors on display
        validation.resetValidation();

        if (errors) {
            // Get a list of properties that are invalid
            var invalidKeys = errors.
                getUniqueArrayFromProperty('key');

            $(invalidKeys).each(function () {
                // Set the invalid class for the property input
                $('[data-validation-key=' + this + ']')
                    .addClass('invalid');

                // Build up a list of failed validations for the property
                // We do this as a property can have multiple validation
                // errors.
                var keyClosure = this;
                var failedValidations =
                    errors
                        .where(function (x) { return (x.key == keyClosure) })
                        .select(function (x) { return x });

                // Build up an UL with the errors
                var listString = '<ul>';
                $(failedValidations).each(function () {
                    listString += '<li>' + this.value + '</li>';
                });
                listString += '</ul>'

                // Find where to display the messages and replace the html
                // with the UL, also set the visible class
                $('[data-validation-message=' + this + ']')
                    .html(listString)
                    .addClass('validationMessageVisible');
            });
        }
    },

    /*
    This call is based on the ValidatingJsonReturnValue return class.
    */
    callValidatingJsonReturnValueService: function (
        serviceURL,
        getOrPost,
        requestData,
        successFunction,            // function(data) where data is of type T ValidatingJsonReturnValue<T> 
        successNoDataFunction,      // function(messageString) where messageString is of type string
        validationFailedFunction,   // function(errors) where errors is of List<KeyValuePair<string, string>> (property, message)
        serverErrorFunction) {      // function(messageString) where messageString is of type string
        $.ajax({
            cache: false,
            url: serviceURL,
            type: getOrPost,
            dataType: "text",                                           // DateTime fixup
            contentType: "application/json; charset=utf-8",             // Added by Angus
            data: { val: JSON.stringify(requestData) },
            dataFilter: function (data, type) {                         // Datetime fixup
                var d = data.replace(/"\\\/(Date\(.*?\))\\\/"/gi, 'new $1');
                return d;
            },
            success: function (result) {
                try {
                    // only evaluate if result has some content. It may not have content if user refreshes the browser or clicks on link halfway through an ajax call
                    if (result.length > 0) {
                        result = eval('(' + result + ')');                  // DateTime Fixup
                    }
                }
                catch (e) {
                    if (serverErrorFunction)
                        serverErrorFunction('An error occured whilst evaluating the server response.');
                    return;
                }

                if (result && result.d && result.d.IsSuccessful) {
                    var data = result.d.Data;
                    if (data) {
                        // Success
                        if (successFunction)
                            successFunction(data);
                    }
                    else {
                        // Successful but no data
                        if (successNoDataFunction)
                            successNoDataFunction(result.d.Message);
                    }
                }
                else {
                    if (result && result.d) {
                        if (result.d.HasValidationErrors) {
                            // Failed Validation
                            if (validationFailedFunction)
                                validationFailedFunction(result.d.ValidationErrors);
                        }
                        else {
                            // Unsuccessful
                            if (serverErrorFunction)
                                serverErrorFunction(result.d.Message);
                        }
                    }
                    else {
                        // only display error if result has some content. result variable may not have content if user refreshes the browser or clicks on link halfway through an ajax call
                        if (result.length > 0 && serverErrorFunction)
                            serverErrorFunction('An error occured on the server whilst trying to process your request.');
                    }
                }
            },
            error: function () {
                // only display error if result has some content. result variable may not have content if user refreshes the browser or clicks on link halfway through an ajax call
                if (serverErrorFunction)
                    serverErrorFunction('An error occured while contacting the server.');
            }
        });
    }
}