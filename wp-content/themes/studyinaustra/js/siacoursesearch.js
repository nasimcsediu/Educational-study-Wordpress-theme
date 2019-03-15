//---------------------------------------------------------------------------------
// Course Search Controller for Ajax WCF Web Services
//---------------------------------------------------------------------------------
function CourseNameController() {
    lookforCourseName: null

    var courseNames = new Array();

    //get the lookforCourseName
    this.init = function (lookforCourseName) {
        this.lookforCourseName = lookforCourseName;

        if (this.lookforCourseName) {
            this.loadCoursesData();
        }
    };

    //load Courses data
    this.loadCoursesData = function (requestData) {
        var serviceURL = '/SIA_Services/SIA_Services.svc/GetCourses';

        //make the call
        validation.callValidatingJsonReturnValueService(
            serviceURL,
            "GET",
            requestData,
            this.loadSuccessful, //Success
            this.loadSuccessfulWithNoData,   // Success no data
            null,
            this.serverError);
    };

    this.loadSuccessful = function (loadData) {
        // Top level properties
        for (var i = 0, len = loadData.Courses.length; i < len; i++) {
            var currentCourse = loadData.Courses[i];
            courseNames[i] = currentCourse.CourseName;
        }
    };

    this.loadSuccessfulWithNoData = function (loadData) {
        // Top level properties
        courseNames = new Array();
        $("#courseSelectBox").autocomplete({
            source: courseNames
        });

    };

    this.serverError = function (loadData) {
        courseNames = new Array();
        $("#courseSelectBox").autocomplete({
            source: courseNames
        });
    };

    this.getPostData = function (lookforCourseNamevalue) {
        var data = {
            PartialCourseCode: lookforCourseNamevalue
        }

        return data;
    }

}         