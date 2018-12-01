var form, selectedIDs, len;

$(document).ready(function () {
    form = document.forms[0];
    if ($('#features').length) {
        var activeClasses = $('#features').attr('data-class-active').split(' ');
        activeClasses.forEach(function (className) {
            $(className).addClass("active");
        });
    }
    selectedIDs = document.getElementsByName("selectedIDs");
    if ($('input[name=column]').length) {
        switch (form.column.value) {
            case "1":
                if ($('input[name=sort]').length && $('#col_1').length) {
                    if (form.sort.value === "1") {
                        $('#col_1').addClass('desc');
                    } else {
                        $('#col_1').addClass('asc');
                    }
                }
                if ($('#col_2').length) {
                    $('#col_2').addClass('both');
                }
                if ($('#col_3').length) {
                    $('#col_3').addClass('both');
                }
                if ($('#col_4').length) {
                    $('#col_4').addClass('both');
                }
                if ($('#col_5').length) {
                    $('#col_5').addClass('both');
                }
                if ($('#col_6').length) {
                    $('#col_6').addClass('both');
                }
                break;
            case "2":
                if ($('input[name=sort]').length && $('#col_2').length) {
                    if (form.sort.value === "1") {
                        $('#col_2').addClass('desc');
                    } else {
                        $('#col_2').addClass('asc');
                    }
                }
                if ($('#col_3').length) {
                    $('#col_3').addClass('both');
                }
                if ($('#col_4').length) {
                    $('#col_4').addClass('both');
                }
                if ($('#col_5').length) {
                    $('#col_5').addClass('both');
                }
                if ($('#col_6').length) {
                    $('#col_6').addClass('both');
                }
                if ($('#col_1').length) {
                    $('#col_1').addClass('both');
                }
                break;
            case "3":
                if ($('input[name=sort]').length && $('#col_3').length) {
                    if (form.sort.value === "1") {
                        $('#col_3').addClass('desc');
                    } else {
                        $('#col_3').addClass('asc');
                    }
                }
                if ($('#col_4').length) {
                    $('#col_4').addClass('both');
                }
                if ($('#col_5').length) {
                    $('#col_5').addClass('both');
                }
                if ($('#col_6').length) {
                    $('#col_6').addClass('both');
                }
                if ($('#col_1').length) {
                    $('#col_1').addClass('both');
                }
                if ($('#col_2').length) {
                    $('#col_2').addClass('both');
                }
                break;
            case "4":
                if ($('input[name=sort]').length && $('#col_4').length) {
                    if (form.sort.value === "1") {
                        $('#col_4').addClass('desc');
                    } else {
                        $('#col_4').addClass('asc');
                    }
                }
                if ($('#col_5').length) {
                    $('#col_5').addClass('both');
                }
                if ($('#col_6').length) {
                    $('#col_6').addClass('both');
                }
                if ($('#col_1').length) {
                    $('#col_1').addClass('both');
                }
                if ($('#col_2').length) {
                    $('#col_2').addClass('both');
                }
                if ($('#col_3').length) {
                    $('#col_3').addClass('both');
                }
                break;
            case "5":
                if ($('input[name=sort]').length && $('#col_5').length) {
                    if (form.sort.value === "1") {
                        $('#col_5').addClass('desc');
                    } else {
                        $('#col_5').addClass('asc');
                    }
                }
                if ($('#col_6').length) {
                    $('#col_6').addClass('both');
                }
                if ($('#col_1').length) {
                    $('#col_1').addClass('both');
                }
                if ($('#col_2').length) {
                    $('#col_2').addClass('both');
                }
                if ($('#col_3').length) {
                    $('#col_3').addClass('both');
                }
                if ($('#col_4').length) {
                    $('#col_4').addClass('both');
                }
                break;
            case "6":
                if ($('input[name=sort]').length && $('#col_6').length) {
                    if (form.sort.value === "1") {
                        $('#col_6').addClass('desc');
                    } else {
                        $('#col_6').addClass('asc');
                    }
                }
                if ($('#col_5').length) {
                    $('#col_5').addClass('both');
                }
                if ($('#col_1').length) {
                    $('#col_1').addClass('both');
                }
                if ($('#col_2').length) {
                    $('#col_2').addClass('both');
                }
                if ($('#col_3').length) {
                    $('#col_3').addClass('both');
                }
                if ($('#col_4').length) {
                    $('#col_4').addClass('both');
                }
                break;
            default :
                if ($('#col_1').length) {
                    $('#col_1').addClass('both');
                }
                if ($('#col_2').length) {
                    $('#col_2').addClass('both');
                }
                if ($('#col_3').length) {
                    $('#col_3').addClass('both');
                }
                if ($('#col_4').length) {
                    $('#col_4').addClass('both');
                }
                if ($('#col_5').length) {
                    $('#col_5').addClass('both');
                }
                if ($('#col_6').length) {
                    $('#col_6').addClass('both');
                }
        }
    }
});


function submitform(action, pageNo, obj) {
    if (action !== 0 && typeof form.action.value != 'undefined') {
        form.action.value = action;
    }
    if (pageNo !== 0 && typeof form.pageNo != 'undefined') {
        form.pageNo.value = pageNo;
    }
    form.submit();
}

function checkAll(obj) {
    len = selectedIDs.length;
    for (var i = 0; i < len; i++) {
        selectedIDs[i].checked = obj.checked;
    }
}

$('#col_1').click(function () {
    form.column.value = 1;
    form.action.value = 1;
    form.pageNo.value = 1;
    if (form.sort.value === "0") {
        form.sort.value = 1;
    } else {
        form.sort.value = 0;
    }
    form.submit();
});

$('#col_2').click(function () {
    form.column.value = 2;
    form.action.value = 1;
    form.pageNo.value = 1;
    if (form.sort.value === "0") {
        form.sort.value = 1;
    } else {
        form.sort.value = 0;
    }
    form.submit();
});

$('#col_3').click(function () {
    form.column.value = 3;
    form.action.value = 1;
    form.pageNo.value = 1;
    if (form.sort.value === "0") {
        form.sort.value = 1;
    } else {
        form.sort.value = 0;
    }
    form.submit();
});

$('#col_4').click(function () {
    form.column.value = 4;
    form.action.value = 1;
    form.pageNo.value = 1;
    if (form.sort.value === "0") {
        form.sort.value = 1;
    } else {
        form.sort.value = 0;
    }
    form.submit();
});

$('#col_5').click(function () {
    form.column.value = 5;
    form.action.value = 1;
    form.pageNo.value = 1;
    if (form.sort.value === "0") {
        form.sort.value = 1;
    } else {
        form.sort.value = 0;
    }
    form.submit();
});

$('#col_6').click(function () {
    form.column.value = 6;
    form.action.value = 1;
    form.pageNo.value = 1;
    if (form.sort.value === "0") {
        form.sort.value = 1;
    } else {
        form.sort.value = 0;
    }
    form.submit();
});

function fileExists(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status != 404;
}

$('#validateInput').click(function (event) {
    event.preventDefault();
    var msg = "";
    if ($('#patientName').val().length <= 0) {
        msg = "Patient Name Required\n"
    }
    if ($('#patientAge').val().length <= 0 || parseInt($('#patientAge').val()) === 0 || parseInt($('#patientAge').val()) > 101) {
        msg += "Patient Age Invalid\n"
    }
    if ($('#prescriptionDate').val().length <= 0) {
        msg += "Prescription Date Invalid\n"
    }
    if (msg.length > 0) {
        alert(msg);
        return;
    }
    form.submit();
});