
function fetchDynamicWidget(moduleId, errorCallback, successCallback, page, articleId) {
    // guard functions
    if (!moduleId) {
        throw new ReferenceError("Dynamic widget's moduleId was not provided!");
    }
    if (!successCallback) {
        throw new ReferenceError('Success callback was not provided!');
    }
    if (!errorCallback) {
        throw new ReferenceError('Error callback was not provided!');
    }
    // assume page #1 if none is given
    if (!page) {
        page = 1;
    }
    
    var params = new Object();
    params.moduleId = moduleId;
    params.pageNum = page;

    // only add articleId as a parameter if necessary
    if (articleId) {
        params.articleId = articleId;
    }
    
    $.ajax({
        url: "/apiservice/dynamicwidget.svc/FetchNext",
        cache: false,
        data: params,
        type: "GET",
        dataType: "text",
        // Datetime fixup 1/2
        dataFilter: function (data, type) {
            var d = data.replace(/"\\\/(Date\(.*?\))\\\/"/gi, 'new $1');
            return d;
        },       
        success: function (data) {
            // DateTime Fixup 2/2
            data = eval('(' + data + ')');
            if (data && data.IsSuccessful) {
                var results = data.Data;
                if (results) {
                    // finally, call the passed in function for success
                    successCallback(results);
                }
            } else {
                if (data)
                    errorCallback(data.Message);
                else
                    errorCallback('An error occured on the server whilst trying to process your request.');
            }
        }
    });
}


function fetchDynamicWidgetASMX(moduleId, errorCallback, successCallback, page, articleId) {
    // guard functions
    if (!moduleId) {
        throw new ReferenceError("Dynamic widget's moduleId was not provided!");
    }
    if (!successCallback) {
        throw new ReferenceError('Success callback was not provided!');
    }
    if (!errorCallback) {
        throw new ReferenceError('Error callback was not provided!');
    }
    // assume page #1 if none is given
    if (!page) {
        page = 1;
    }

    var params = new Object();
    params.moduleId = moduleId;
    params.pageNum = page;

    // only add articleId as a parameter if necessary
    if (articleId) {
        params.articleId = articleId;
    }
    
    $.ajax({
        url: "/apiservice/dynamicwidget.asmx/FetchNext",
        cache: false,
        data: params,
        type: "GET",
        dataType: "text",                                           // DateTime fixup
        contentType: "application/json; charset=utf-8",             // Added by Angus
        // Datetime fixup 1/2
        dataFilter: function (data, type) {
            var d = data.replace(/"\\\/(Date\(.*?\))\\\/"/gi, 'new $1');
            return d;
        },       
        success: function (data) {          
            // DateTime Fixup 2/2
            data = eval('(' + data + ')');

            data = data.d;
            if (data && data.IsSuccessful) {
                var results = data.Data;
                if (results) {
                    // finally, call the passed in function for success
                    successCallback(results);
                }
            } else {
                if (data)
                    errorCallback(data.Message);
                else
                    errorCallback('An error occured on the server whilst trying to process your request.');
            }
        }
    });
}