var Dashboard = function () {

    return {
        initAmChart1: function () {
            if (typeof (AmCharts) === 'undefined' || $('#dashboard_amchart_1').size() === 0) {
                return;
            }
            var chartData = [{
                    "date": "2012-01-01",
                    "distance": 480,
                    "townName": "Miami",
                    "townName2": "Miami",
                    "townSize": 10,
                    "latitude": 25.83,
                    "duration": 501
                }, {
                    "date": "2012-01-06",
                    "distance": 386,
                    "townName": "Tallahassee",
                    "townSize": 7,
                    "latitude": 30.46,
                    "duration": 443
                }, {
                    "date": "2012-01-07",
                    "distance": 348,
                    "townName": "New Orleans",
                    "townSize": 10,
                    "latitude": 29.94,
                    "duration": 405
                }, {
                    "date": "2012-01-08",
                    "distance": 238,
                    "townName": "Houston",
                    "townName2": "Houston",
                    "townSize": 16,
                    "latitude": 29.76,
                    "duration": 309
                }, {
                    "date": "2012-01-09",
                    "distance": 218,
                    "townName": "Dalas",
                    "townSize": 17,
                    "latitude": 32.8,
                    "duration": 287
                }, {
                    "date": "2012-01-10",
                    "distance": 349,
                    "townName": "Oklahoma City",
                    "townSize": 11,
                    "latitude": 35.49,
                    "duration": 485
                }, {
                    "date": "2012-01-11",
                    "distance": 603,
                    "townName": "Kansas City",
                    "townSize": 10,
                    "latitude": 39.1,
                    "duration": 890
                }, {
                    "date": "2012-01-12",
                    "distance": 534,
                    "townName": "Denver",
                    "townName2": "Denver",
                    "townSize": 18,
                    "latitude": 39.74,
                    "duration": 810
                }, {
                    "date": "2012-01-13",
                    "townName": "Salt Lake City",
                    "townSize": 12,
                    "distance": 425,
                    "duration": 670,
                    "latitude": 40.75,
                    "alpha": 0.4
                }, {
                    "date": "2012-01-14",
                    "latitude": 36.1,
                    "distance": 200,
                    "duration": 470,
                    "townName": "Las Vegas",
                    "townName2": "Las Vegas",
                    "bulletClass": "lastBullet"
                }, {
                    "date": "2012-01-15",
                    "distance": 300
                }];
            var chart = AmCharts.makeChart("dashboard_amchart_1", {
                type: "serial",
                fontSize: 12,
                fontFamily: "Open Sans",
                dataDateFormat: "YYYY-MM-DD",
                dataProvider: chartData,
                addClassNames: true,
                startDuration: 1,
                color: "#6c7b88",
                marginLeft: 0,
                categoryField: "date",
                categoryAxis: {
                    parseDates: true,
                    minPeriod: "DD",
                    autoGridCount: false,
                    gridCount: 50,
                    gridAlpha: 0.1,
                    gridColor: "#FFFFFF",
                    axisColor: "#555555",
                    dateFormats: [{
                            period: 'DD',
                            format: 'DD'
                        }, {
                            period: 'WW',
                            format: 'MMM DD'
                        }, {
                            period: 'MM',
                            format: 'MMM'
                        }, {
                            period: 'YYYY',
                            format: 'YYYY'
                        }]
                },
                valueAxes: [{
                        id: "a1",
                        title: "User Count",
                        gridAlpha: 0,
                        axisAlpha: 0
                    }, {
                        id: "a2",
                        position: "right",
                        gridAlpha: 0,
                        axisAlpha: 0,
                        labelsEnabled: false
                    }, {
                        id: "a3",
                        title: "duration",
                        position: "right",
                        gridAlpha: 0,
                        axisAlpha: 0,
                        inside: true,
                        duration: "mm",
                        durationUnits: {
                            DD: "d. ",
                            hh: "h ",
                            mm: "min",
                            ss: ""
                        }
                    }],
                graphs: [{
                        id: "g1",
                        valueField: "distance",
                        title: "Users Count",
                        type: "column",
                        fillAlphas: 0.7,
                        valueAxis: "a1",
                        balloonText: "[[value]] miles",
                        legendValueText: "[[value]] mi",
                        legendPeriodValueText: "total: [[value.sum]] mi",
                        lineColor: "#08a3cc",
                        alphaField: "alpha"
                    }
                ],
                chartCursor: {
                    zoomable: false,
                    categoryBalloonDateFormat: "MMM DD, YYYY",
                    cursorAlpha: 0,
                    categoryBalloonColor: "#e26a6a",
                    categoryBalloonAlpha: 0.8,
                    valueBalloonsEnabled: false
                },
                legend: {
                    bulletType: "round",
                    equalWidths: false,
                    valueWidth: 120,
                    useGraphSettings: true,
                    color: "#6c7b88"
                }
            });
        },
        initDashboardRegStatChart: function (chartData) {
            if (typeof (AmCharts) === 'undefined' || $('#dashboard_registration_stat').size() === 0) {
                return;
            }
            var legendPeriodValueTextSuffix = "";
            if (($("#startDate").val() == null || $("#startDate").val().length == 0) && ($("#endDate").val() == null || $("#endDate").val().length == 0)) {
                legendPeriodValueTextSuffix = " in last 7 days";
            }

            var chart = AmCharts.makeChart("dashboard_registration_stat", {
                type: "serial",
                fontSize: 12,
                fontFamily: "Open Sans",
                dataDateFormat: "YYYY-MM-DD",
                dataProvider: chartData,
                addClassNames: true,
                startDuration: 1,
                color: "#6c7b88",
                marginLeft: 0,
                categoryField: "date",
                categoryAxis: {
                    parseDates: true,
                    minPeriod: "DD",
                    autoGridCount: false,
                    gridCount: 50,
                    gridAlpha: 0.1,
                    gridColor: "#FFFFFF",
                    axisColor: "#555555",
                    dateFormats: [{
                            period: 'DD',
                            format: 'DD'
                        }, {
                            period: 'WW',
                            format: 'MMM DD'
                        }, {
                            period: 'MM',
                            format: 'MMM'
                        }, {
                            period: 'YYYY',
                            format: 'YYYY'
                        }]
                },
                valueAxes: [{
                        id: "a1",
                        title: "User Count",
                        gridAlpha: 0,
//                        axisAlpha: 0
                    }],
                graphs: [{
                        id: "g1",
                        valueField: "registrationCount",
                        title: "Users Count",
                        type: "column",
                        fillAlphas: 0.7,
                        valueAxis: "a1",
                        balloonText: "[[value]]",
                        legendValueText: "[[value]] users",
                        legendPeriodValueText: "Total: [[value.sum]] users " + legendPeriodValueTextSuffix,
                        lineColor: "#08a3cc",
                        alphaField: "alpha"
                    }],
                chartCursor: {
                    zoomable: false,
                    categoryBalloonDateFormat: "MMM DD, YYYY",
                    cursorAlpha: 0,
                    categoryBalloonColor: "#e26a6a",
                    categoryBalloonAlpha: 0.8,
                    valueBalloonsEnabled: false
                },
                legend: {
                    bulletType: "round",
                    equalWidths: false,
                    valueWidth: 120,
                    useGraphSettings: true,
                    color: "#6c7b88"
                }
            });
        },
        ajaxCallForRegistrationStat: function () {
            if (typeof (AmCharts) === 'undefined' || $('#dashboard_registration_stat').size() === 0) {
                return;
            }
            var el = $('#dashboard_registration_stat');
            var chartData = "";
            App.blockUI({
                target: el,
                animate: true,
                overlayColor: 'none'
            });
            var url = baseUrl + '/dashboardContent?st=' + $("#startDate").val() + '&et=' + $("#endDate").val();
            console.log(url);
            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'json',
                contentType: false,
                processData: false,
                cache: false,
                timeout: 600000,
                success: function (jsondata) {
                    App.unblockUI(el);
                    var jsonObject = JSON.parse(JSON.stringify(jsondata));
                    if (jsonObject.sucs == true) {
                        chartData = jsonObject.registrationStatistic;
                    }
                    Dashboard.initDashboardRegStatChart(chartData); // init metronic core componets
                },
                error: function () {
                    App.unblockUI(el);
                }
            });
        },
        resetRegistrationStatData: function () {
            $("#startDate").val("");
            $("#endDate").val("");
            this.ajaxCallForRegistrationStat();
        },
        init: function () {
            this.ajaxCallForRegistrationStat();
        }
    };

}();

if (App.isAngularJsApp() === false) {
    jQuery(document).ready(function () {
        Dashboard.init(); // init metronic core componets
    });
}