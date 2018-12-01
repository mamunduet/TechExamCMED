/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    $("#statusimage").change(function () {
        var type = statusimage;
        switch ((this.files[0].type).substring(0, 5)) {
            case image :
                type = statusimage;
                break;
            case audio :
                type = statusaudio;
                break;

            case video :
                type = statusvideo;
                break;
            default :
                $("#statusimage").val('');
                alert("Invalid file !!!");
                return;
        }
        fileUpload.setData(type, this.files);
        $("#statusimage").val('');
    });
    $("#statusvideo").change(function () {
        var type = statusvideo;
        switch ((this.files[0].type).substring(0, 5)) {
            case image :
                type = statusimage;
                break;
            case audio :
                type = statusaudio;
                break;

            case video :
                type = statusvideo;
                break;
            default :
                $("#statusvideo").val('');
                alert("Invalid file !!!");
                return;
        }
        fileUpload.setData(type, this.files);
        $("#statusvideo").val('');
    });
    $("#statusaudio").change(function () {
        var type = statusaudio;
        switch ((this.files[0].type).substring(0, 5)) {
            case image :
                type = statusimage;
                break;
            case audio :
                type = statusaudio;
                break;

            case video :
                type = statusvideo;
                break;
            default :
                $("#statusaudio").val('');
                alert("Invalid file !!!");
                return;
        }
        fileUpload.setData(type, this.files);
        $("#statusaudio").val('');
    });
    $("#uploadFile").click(function () {
        fileUpload.upload();
    });
    fileUpload.initFileupload();
});

function remove(pos, type) {
    fileUpload.remove(pos, type);
}

var fileUpload = {
    initFileupload: function () {
        if (!fileUpload.MultipleFiles || fileUpload.MultipleFiles.length < 1) {
            fileUpload.MultipleFiles = [];
            fileUpload.enabledAllFileInput();
        }
    },
    setData: function (type, files) {
        if (!fileUpload.MultipleFiles || fileUpload.MultipleFiles.length < 1) {
            fileUpload.Type = type;
            fileUpload.MultipleFiles = [];
            fileUpload.disabledOtherFileInput(type);
        }
        for (var i = 0; i < files.length; i++) {
            fileUpload.MultipleFiles.push(files[i]);

            fileUpload.previewFile(type, files[i], fileUpload.MultipleFiles.length - 1);
        }
    },
    upload: function () {
        $('#pleaseWaitDialog').removeClass("hide");
        $('#pleaseWaitDialog').modal();
        $.ajax({
            url: base_url + "/postStatus.do",
            type: 'POST',
            dataType: 'json',
            enctype: 'multipart/form-data',
            cache: false,
            contentType: false,
            processData: false,
            data: fileUpload.getData(),
            timeout: 600000,
            success: function (jsonData) {
                console.log("response : " + jsonData.success);
            },
            complete: function () {
                $('#pleaseWaitDialog').modal('hide');
                $('#pleaseWaitDialog').addClass("hide");
                $('#media_container').empty();
                fileUpload.MultipleFiles = [];
                fileUpload.enabledAllFileInput();
            },
            error: function (e, m, s) {
                $("#bootstrap_alerts_cus").show();
                $("#bootstrap_alerts_msg").text(e.responseText)
                console.log("error : " + e.responseText + "\n messae : " + m + "\n s : " + s);
            }
        });
    },
    getData: function () {
        var formdata = $('form')[0], data = new FormData(), i;
        $.each(formdata, function (key, input) {
            if (input.name === statusimage || input.name === statusvideo || input.name === statusaudio || input.name === liveNow) {
                return;
            }
            data.append(input.name, input.value);
        });
        if (fileUpload.MultipleFiles) {
            for (i = 0; i < fileUpload.MultipleFiles.length; i++) {
                data.append(fileUpload.Type, fileUpload.MultipleFiles[i]);
            }
        }
        data.append(liveNow, $('input[name=liveNow]:checked').val());
        return data;
    },
    disabledOtherFileInput: function (type) {
        $("#tr_album_name").show();
        $("#tr_media_container").show();
        switch (type) {
            case statusimage:
                $("#tr_media_duration").hide();
                $("#statusvideo").prop("disabled", true);
                $("#statusaudio").prop("disabled", true);

                $("#span_video").addClass("disabled");
                $("#span_audio").addClass("disabled");
                break;

            case statusvideo:
                $("#tr_media_duration").show();
                $("#statusimage").prop("disabled", true);
                $("#statusaudio").prop("disabled", true);

                $("#span_image").addClass("disabled");
                $("#span_audio").addClass("disabled");
                break;

            case statusaudio:
                $("#tr_media_duration").show();
                $("#statusimage").prop("disabled", true);
                $("#statusvideo").prop("disabled", true);

                $("#span_video").addClass("disabled");
                $("#span_image").addClass("disabled");
                break;
        }
    },
    enabledAllFileInput: function () {
        fileUpload.MultipleFiles = [];
        $("#albumName").val('');
        $("#tr_album_name").hide();
        $("#mediaDuration").val('');
        $("#tr_media_duration").hide();
        $("#tr_media_container").hide();
        $('#media_container').empty();

        $("#statusimage").prop("disabled", false);
        $("#statusvideo").prop("disabled", false);
        $("#statusaudio").prop("disabled", false);

        $("#span_video").removeClass("disabled");
        $("#span_image").removeClass("disabled");
        $("#span_audio").removeClass("disabled");
    },
    previewFile: function (type, file, pos) {
        switch (type) {
            case statusimage:

                var tr = document.createElement("tr"), td1 = document.createElement("td"), img = document.createElement("img"), td2 = document.createElement("td"), btn = document.createElement("button");
                tr.id = "tr" + pos;
                btn.innerHTML = "Cancel";
                btn.className = "btn red";
                btn.type = "button";
                img.src = window.URL.createObjectURL(file);
                img.style.width = "200px";
                img.style.height = "150px";
                td1.style.textAlign = "center";
                td1.style.verticalAlign = "middle";
                td2.style.textAlign = "center";
                td2.style.verticalAlign = "middle";
                td1.appendChild(img);
                tr.appendChild(td1);
                td2.appendChild(btn);
                tr.appendChild(td2);
                $(tr).appendTo($("#media_container"));

                img.onload = function () {
                    console.log(this.src);
                    window.URL.revokeObjectURL(this.src);  //free up memory
                }

                btn.setAttribute("onclick", "remove(" + pos + ", '" + type + "' )");
                break;

            case statusvideo:

                var tr = document.createElement("tr"), td1 = document.createElement("td"), video = document.createElement("video"), source = document.createElement("source"), td2 = document.createElement("td"), btn = document.createElement("button");
                tr.id = "tr" + pos;
                btn.innerHTML = "Cancel";
                btn.className = "btn red";
                btn.type = "button";
                source.type = "video/mp4";
                source.src = window.URL.createObjectURL(file);
                video.controls = "controls";
                video.style.maxWidth = "250px";
                video.style.maxHeight = "250px";
                video.preload = "metadata";
                td1.style.textAlign = "center";
                td1.style.verticalAlign = "middle";
                td2.style.textAlign = "center";
                td2.style.verticalAlign = "middle";
                video.appendChild(source);
                td1.appendChild(video);
                tr.appendChild(td1);
                td2.appendChild(btn);
                tr.appendChild(td2);
                $(tr).appendTo($("#media_container"));

                video.onloadeddata = function () {
                    console.log(this.childNodes[0].src);
                    window.URL.revokeObjectURL(this.childNodes[0].src);  //free up memory
                }

                btn.setAttribute("onclick", "remove(" + pos + ", '" + type + "' )");
                break;

            case statusaudio:

                var tr = document.createElement("tr"), td1 = document.createElement("td"), audio = document.createElement("audio"), source = document.createElement("source"), td2 = document.createElement("td"), btn = document.createElement("button");
                tr.id = "tr" + pos;
                btn.innerHTML = "Cancel";
                btn.className = "btn red";
                btn.type = "button";
                source.type = "audio/mp3";
                source.src = window.URL.createObjectURL(file);
                audio.controls = "controls";
                audio.style.maxWidth = "250px";
                audio.style.maxHeight = "250px";
                audio.preload = "metadata";
                td1.style.textAlign = "center";
                td1.style.verticalAlign = "middle";
                td2.style.textAlign = "center";
                td2.style.verticalAlign = "middle";
                audio.appendChild(source);
                td1.appendChild(audio);
                tr.appendChild(td1);
                td2.appendChild(btn);
                tr.appendChild(td2);
                $(tr).appendTo($("#media_container"));

                audio.onloadeddata = function () {
                    console.log(this.childNodes[0].src);
                    window.URL.revokeObjectURL(this.childNodes[0].src);  //free up memory
                }

                btn.setAttribute("onclick", "remove(" + pos + ", '" + type + "' )");

                break;
        }
    },
    remove: function (pos, type) {
        fileUpload.MultipleFiles.splice(pos, 1);
        $('#media_container').empty();

        if (fileUpload.MultipleFiles.length < 1) {
            fileUpload.enabledAllFileInput();
        }
        for (var i = 0; i < fileUpload.MultipleFiles.length; i++) {
            fileUpload.previewFile(type, fileUpload.MultipleFiles[i], i);
        }
        console.log(fileUpload.MultipleFiles.length);
    }
}, statusimage = "statusimage", statusvideo = "statusvideo", statusaudio = "statusaudio", image = "image", audio = "audio", video = "video", liveNow = "liveNow";
