// Region Controller
var regionController = {
    RegionCookieName: 'elcom_PreferredRegion',

    init: function () {
        if (!jQuery.cookie) {
            throw 'Could not find the jQuery Cookie Plugin';
        }
    },

    resetUserSiteRegion: function () {
        $.cookie(regionController.RegionCookieName, null, { path: "/", expires: -1 });
    },

    setUserSiteRegion: function (siteRegionKey) {
        $.cookie(regionController.RegionCookieName, siteRegionKey, { path: "/", expires: 1825 });
    },

    getUserSiteRegion: function () {
        var userRegion = $.cookie(regionController.RegionCookieName);
        return userRegion;
    },

    setRegionURL: function (userRegion, newURL) {
        regionController.setUserSiteRegion(userRegion);
        if (newURL > '')
        { window.location = newURL; }
    },

    getRedirectURLForRegion: function (regionName) {
        var serviceURL = '/WebServices/InternalLookupServices.asmx/GetURLForRegion';
        var getOrPost = 'POST';
        var resultData;

        $.ajax({
            cache: false,
            url: serviceURL,
            type: getOrPost,
            async: false,
            data: '{ "regionName": "' + regionName + '" }',
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: function (result) {
                if (result && result.d && result.d.IsSuccessful) {
                    var data = result.d.Data;
                    resultData = data;
                }
                else {
                    alert('An error occured while contacting the server. - 2');
                }
            },
            error: function (msg) {
                alert(msg);
            }
        });

        var resultCode;
        if (resultData) {
            resultCode = resultData;
        }
        return resultCode;
    }
};

$(document).ready(function () {
    regionController.init();

    $('#cboRegion').change(function () {
        var target = $(this).find("option:selected");
        regionController.setRegionURL(target.text(), target.val());
    });
});