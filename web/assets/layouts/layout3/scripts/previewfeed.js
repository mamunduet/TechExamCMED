/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var nextfeed, previousfeed, imgfeedlen, feedpos, pnextfeed, ppreviousfeed, pimgfeedlen, preview;

$("#large").on("hidden.bs.modal", function () {
    switch (preview) {
        case 1:
            // 1 for previewfeed

            $("#albid").text("");
            $("#albname").text("");
            $("#imgurl").attr("src", "");
            $("#media_video_dto").hide();
            $("#media_audio_dto").hide();
            jPlayerVideo.remove();
            jPlayerAudio.remove();
            $("#palbid").text("");
            $("#palbname").text("");
            $("#pimgurl").attr("src", "");
            $("#pmedia_video_dto").hide();
            $("#pmedia_audio_dto").hide();
            jPlayerShareVideo.remove();
            jPlayerShareAudio.remove();
            $("#imgcontainer").removeClass("cbp-popup-loading");
            break;
        case 2:

            // 2 for previewuser

            $("#cntnWnrId").text("");
            $("#fn").text("");
            $("#piUrl").attr("src", "");
            $("#cvUrl").attr("src", "");
            $("#uType").text("");
            $("#gn").text("");
            $("#mbl").text("");
            $("#dc").text("");
            break;
        case 3:

            // 3 for previewimage

            $("#cntnWnrId").text("");
            $("#cntnWnrNm").text("");
            $("#imgId").text("");
            $("#url").attr("src", "");
            $("#imgT").text("");
            $("#likeCount").text("");
            $("#commentCount").text("");
            $("#adTm").text("");
            break;
        case 4:

            // 4 for previewmedia

            $("#cntnWnrId").text("");
            $("#cntnWnrNm").text("");
            $("#mId").text("");
            $("#mType").text("");
            $("#tle").text("");
            $("#arst").text("");
            $("#media_video").attr("src", "");
            $("#media_audio").attr("src", "");
            $("#likeCount").text("");
            $("#commentCount").text("");
            $("#aT").text("");
            break;
        default:

            break;
    }
});

//image loading complete
$('#imgurl').on('load', function () {
    $("#imgcontainer").removeClass("cbp-popup-loading");
});

//share image loading complete
$('#pimgurl').on('load', function () {
    $("#pimgcontainer").removeClass("cbp-popup-loading");
});

// image pagination
$("#imgnext").click(function () {
    if (imgfeedlen > 1) {
        $("#imgcontainer").addClass("cbp-popup-loading");
        nextfeed = nextfeed < imgfeedlen ? nextfeed + 1 : 1;
        $("#imgurl").attr("src", BASE_MEDIA_URL + jsonArray[feedpos]["albumDTO"]["imgDTOs"][nextfeed - 1]["url"]);
        $("#imgview").text(jsonArray[feedpos]["albumDTO"]["imgDTOs"][nextfeed - 1]["viewCount"]);
        $("#imglike").text(jsonArray[feedpos]["albumDTO"]["imgDTOs"][nextfeed - 1]["likeCount"]);
        $("#imgcomment").text(jsonArray[feedpos]["albumDTO"]["imgDTOs"][nextfeed - 1]["commentCount"]);
        $("#imgcurrent").text(nextfeed);
        previousfeed = nextfeed;
    }
});

$("#imgprevious").click(function () {
    if (imgfeedlen > 1) {
        $("#imgcontainer").addClass("cbp-popup-loading");
        previousfeed = previousfeed > 1 ? previousfeed - 1 : imgfeedlen;
        $("#imgurl").attr("src", BASE_MEDIA_URL + jsonArray[feedpos]["albumDTO"]["imgDTOs"][previousfeed - 1]["url"]);
        $("#imgview").text(jsonArray[feedpos]["albumDTO"]["imgDTOs"][previousfeed - 1]["viewCount"]);
        $("#imglike").text(jsonArray[feedpos]["albumDTO"]["imgDTOs"][previousfeed - 1]["likeCount"]);
        $("#imgcomment").text(jsonArray[feedpos]["albumDTO"]["imgDTOs"][previousfeed - 1]["commentCount"]);
        $("#imgcurrent").text(previousfeed);
        nextfeed = previousfeed;
    }
});

// share image pagination
$("#pimgnext").click(function () {
    if (pimgfeedlen > 1) {
        $("#pimgcontainer").addClass("cbp-popup-loading");
        pnextfeed = pnextfeed < pimgfeedlen ? pnextfeed + 1 : 1;
        $("#pimgurl").attr("src", BASE_MEDIA_URL + jsonArray[feedpos]["parentFeedInfo"]["albumDTO"]["imgDTOs"][pnextfeed - 1]["url"]);
        $("#pimgview").text(jsonArray[feedpos]["parentFeedInfo"]["albumDTO"]["imgDTOs"][pnextfeed - 1]["viewCount"]);
        $("#pimglike").text(jsonArray[feedpos]["parentFeedInfo"]["albumDTO"]["imgDTOs"][pnextfeed - 1]["likeCount"]);
        $("#pimgcomment").text(jsonArray[feedpos]["parentFeedInfo"]["albumDTO"]["imgDTOs"][pnextfeed - 1]["commentCount"]);
        $("#pimgcurrent").text(pnextfeed);
        ppreviousfeed = pnextfeed;
    }
});

$("#pimgprevious").click(function () {
    if (pimgfeedlen > 1) {
        $("#pimgcontainer").addClass("cbp-popup-loading");
        ppreviousfeed = ppreviousfeed > 1 ? ppreviousfeed - 1 : pimgfeedlen;
        $("#pimgurl").attr("src", BASE_MEDIA_URL + jsonArray[feedpos]["parentFeedInfo"]["albumDTO"]["imgDTOs"][ppreviousfeed - 1]["url"]);
        $("#pimgview").text(jsonArray[feedpos]["parentFeedInfo"]["albumDTO"]["imgDTOs"][ppreviousfeed - 1]["viewCount"]);
        $("#pimglike").text(jsonArray[feedpos]["parentFeedInfo"]["albumDTO"]["imgDTOs"][ppreviousfeed - 1]["likeCount"]);
        $("#pimgcomment").text(jsonArray[feedpos]["parentFeedInfo"]["albumDTO"]["imgDTOs"][ppreviousfeed - 1]["commentCount"]);
        $("#pimgcurrent").text(ppreviousfeed);
        pnextfeed = ppreviousfeed;
    }
});

function getPlaylist(pos, mediaType) {

    var len, i, data = {}, media_data = [];

    switch (mediaType) {
        case 1:
            // 1 for video
            len = jsonArray[pos]["albumDTO"]["mDTOs"].length;
            for (i = 0; i < len; i++) {
                data = {};
                data["title"] = jsonArray[pos]["albumDTO"]["mDTOs"][i]["tle"];
                data["artist"] = jsonArray[pos]["albumDTO"]["mDTOs"][i]["arst"];
                data["m4v"] = BASE_MEDIA_URL + jsonArray[pos]["albumDTO"]["mDTOs"][i]["mUrl"];
                data["poster"] = BASE_MEDIA_URL + jsonArray[pos]["albumDTO"]["mDTOs"][i]["tUrl"];

                media_data.push(data);
            }
            break;
        case 2:
            // 2 for audio
            len = jsonArray[pos]["albumDTO"]["mDTOs"].length;
            for (i = 0; i < len; i++) {
                data = {};
                data["title"] = jsonArray[pos]["albumDTO"]["mDTOs"][i]["tle"];
                data["artist"] = jsonArray[pos]["albumDTO"]["mDTOs"][i]["arst"];
                data["mp3"] = BASE_MEDIA_URL + jsonArray[pos]["albumDTO"]["mDTOs"][i]["mUrl"];

                media_data.push(data);
            }
            break;
        case 3:
            // 3 for share video
            len = jsonArray[pos]["parentFeedInfo"]["albumDTO"]["mDTOs"].length;
            for (i = 0; i < len; i++) {
                data = {};
                data["title"] = jsonArray[pos]["parentFeedInfo"]["albumDTO"]["mDTOs"][i]["tle"];
                data["artist"] = jsonArray[pos]["parentFeedInfo"]["albumDTO"]["mDTOs"][i]["arst"];
                data["m4v"] = BASE_MEDIA_URL + jsonArray[pos]["parentFeedInfo"]["albumDTO"]["mDTOs"][i]["mUrl"];
                data["poster"] = BASE_MEDIA_URL + jsonArray[pos]["parentFeedInfo"]["albumDTO"]["mDTOs"][i]["tUrl"];

                media_data.push(data);
            }
            break;
        case 4:
            // 4 for share audio
            len = jsonArray[pos]["parentFeedInfo"]["albumDTO"]["mDTOs"].length;
            for (i = 0; i < len; i++) {
                data = {};
                data["title"] = jsonArray[pos]["parentFeedInfo"]["albumDTO"]["mDTOs"][i]["tle"];
                data["artist"] = jsonArray[pos]["parentFeedInfo"]["albumDTO"]["mDTOs"][i]["arst"];
                data["mp3"] = BASE_MEDIA_URL + jsonArray[pos]["parentFeedInfo"]["albumDTO"]["mDTOs"][i]["mUrl"];

                media_data.push(data);
            }
            break;
            break;
        default :
            //empty media_data
            break;
    }
    return media_data;
}

function previewfeed(pos) {
    preview = 1;
    feedpos = pos;
    nextfeed = 1;
    previousfeed = 1;
    pnextfeed = 1;
    ppreviousfeed = 1;
    if (userBasicInfo) {
        $("#fn").text(userBasicInfo["fn"]);
    } else {
        $("#fn").text(jsonArray[pos]["cntnWnrNm"]);
    }
    $("#feedid").text(jsonArray[pos]["feedId"]);
    $("#feedstatus").text(jsonArray[pos]["status"]);
    $("#feedtotallike").text(jsonArray[pos]["totalLike"]);
    switch (jsonArray[pos]["contentType"]) {
        case 1:
            $("#contenttype").text("TEXT");
            $("#albid").text("");
            $("#albname").text("");
            $("#imgurl").attr("src", "");
            $("#media_video_dto").hide();
            $("#media_audio_dto").hide();
            jPlayerVideo.remove();
            jPlayerAudio.remove();
            $("#imgdto").hide();
            $("#albumid").hide();
            $("#albumname").hide();
            break;
        case 2:
            $("#contenttype").text("SINGLE_IMAGE");
            $("#albumid").show();
            $("#albumname").show();
            $("#albid").text(jsonArray[pos]["albumDTO"]["albId"]);
            $("#albname").text(jsonArray[pos]["albumDTO"]["albn"]);
            $("#imgdto").show();
            $("#media_video_dto").hide();
            $("#media_audio_dto").hide();
            jPlayerVideo.remove();
            jPlayerAudio.remove();
            $("#imgurl").attr("src", BASE_MEDIA_URL + jsonArray[pos]["albumDTO"]["imgDTOs"][0]["url"]);
            $("#imgview").text(jsonArray[pos]["albumDTO"]["imgDTOs"][0]["viewCount"]);
            $("#imglike").text(jsonArray[pos]["albumDTO"]["imgDTOs"][0]["likeCount"]);
            $("#imgcomment").text(jsonArray[pos]["albumDTO"]["imgDTOs"][0]["commentCount"]);
            imgfeedlen = jsonArray[pos]["albumDTO"]["imgDTOs"].length;
            $("#imgcurrent").text("1");
            $("#imgtotal").text(imgfeedlen);
            break;
        case 3:
            $("#contenttype").text("SINGLE_IMAGE_WITH_ALBUM");
            $("#albumid").show();
            $("#albumname").show();
            $("#albid").text(jsonArray[pos]["albumDTO"]["albId"]);
            $("#albname").text(jsonArray[pos]["albumDTO"]["albn"]);
            $("#imgdto").show();
            $("#media_video_dto").hide();
            $("#media_audio_dto").hide();
            jPlayerVideo.remove();
            jPlayerAudio.remove();
            $("#imgurl").attr("src", BASE_MEDIA_URL + jsonArray[pos]["albumDTO"]["imgDTOs"][0]["url"]);
            $("#imgview").text(jsonArray[pos]["albumDTO"]["imgDTOs"][0]["viewCount"]);
            $("#imglike").text(jsonArray[pos]["albumDTO"]["imgDTOs"][0]["likeCount"]);
            $("#imgcomment").text(jsonArray[pos]["albumDTO"]["imgDTOs"][0]["commentCount"]);
            imgfeedlen = jsonArray[pos]["albumDTO"]["imgDTOs"].length;
            $("#imgcurrent").text("1");
            $("#imgtotal").text(imgfeedlen);
            break;
        case 4:
            $("#contenttype").text("MULTIPLE_IMAGE_WITH_ALBUM");
            $("#albumid").show();
            $("#albumname").show();
            $("#albid").text(jsonArray[pos]["albumDTO"]["albId"]);
            $("#albname").text(jsonArray[pos]["albumDTO"]["albn"]);
            $("#imgdto").show();
            $("#media_video_dto").hide();
            $("#media_audio_dto").hide();
            jPlayerVideo.remove();
            jPlayerAudio.remove();
            $("#imgurl").attr("src", BASE_MEDIA_URL + jsonArray[pos]["albumDTO"]["imgDTOs"][0]["url"]);
            $("#imgview").text(jsonArray[pos]["albumDTO"]["imgDTOs"][0]["viewCount"]);
            $("#imglike").text(jsonArray[pos]["albumDTO"]["imgDTOs"][0]["likeCount"]);
            $("#imgcomment").text(jsonArray[pos]["albumDTO"]["imgDTOs"][0]["commentCount"]);
            imgfeedlen = jsonArray[pos]["albumDTO"]["imgDTOs"].length;
            $("#imgcurrent").text("1");
            $("#imgtotal").text(imgfeedlen);
            break;
        case 5:
            $("#contenttype").text("SINGLE_AUDIO");
            $("#albumid").show();
            $("#albumname").show();
            $("#albid").text(jsonArray[pos]["albumDTO"]["albId"]);
            $("#albname").text(jsonArray[pos]["albumDTO"]["albn"]);
            $("#media_video_dto").hide();
            $("#media_audio_dto").show();
            jPlayerVideo.remove();
            $("#imgdto").hide();
            $("#imgurl").attr("src", "");
            jPlayerAudio.setPlaylist(getPlaylist(pos, 2)) //2 for audio
            break;
        case 6:
            $("#contenttype").text("SINGLE_AUDIO_WITH_ALBUM");
            $("#albumid").show();
            $("#albumname").show();
            $("#albid").text(jsonArray[pos]["albumDTO"]["albId"]);
            $("#albname").text(jsonArray[pos]["albumDTO"]["albn"]);
            $("#media_video_dto").hide();
            $("#media_audio_dto").show();
            jPlayerVideo.remove();
            $("#imgdto").hide();
            $("#imgurl").attr("src", "");
            jPlayerAudio.setPlaylist(getPlaylist(pos, 2)) //2 for audio
            break;
        case 7:
            $("#contenttype").text("MULTIPLE_AUDIO_WITH_ALBUM");
            $("#albumid").show();
            $("#albumname").show();
            $("#albid").text(jsonArray[pos]["albumDTO"]["albId"]);
            $("#albname").text(jsonArray[pos]["albumDTO"]["albn"]);
            $("#media_video_dto").hide();
            $("#media_audio_dto").show();
            jPlayerVideo.remove();
            $("#imgdto").hide();
            $("#imgurl").attr("src", "");
            jPlayerAudio.setPlaylist(getPlaylist(pos, 2)) //2 for audio
            break;
        case 8:
            $("#contenttype").text("SINGLE_VIDEO");
            $("#albumid").show();
            $("#albumname").show();
            $("#albid").text(jsonArray[pos]["albumDTO"]["albId"]);
            $("#albname").text(jsonArray[pos]["albumDTO"]["albn"]);
            $("#media_video_dto").show();
            $("#media_audio_dto").hide();
            jPlayerAudio.remove();
            $("#imgdto").hide();
            $("#imgurl").attr("src", "");
            jPlayerVideo.setPlaylist(getPlaylist(pos, 1)) //1 for video
            break;
        case 9:
            $("#contenttype").text("SINGLE_VIDEO_WITH_ALBUM");
            $("#albumid").show();
            $("#albumname").show();
            $("#albid").text(jsonArray[pos]["albumDTO"]["albId"]);
            $("#albname").text(jsonArray[pos]["albumDTO"]["albn"]);
            $("#media_video_dto").show();
            $("#media_audio_dto").hide();
            jPlayerAudio.remove();
            $("#imgdto").hide();
            $("#imgurl").attr("src", "");
            jPlayerVideo.setPlaylist(getPlaylist(pos, 1)) //1 for video
            break;
        case 10:
            $("#contenttype").text("MULTIPLE_VIDEO_WITH_ALBUM");
            $("#albumid").show();
            $("#albumname").show();
            $("#albid").text(jsonArray[pos]["albumDTO"]["albId"]);
            $("#albname").text(jsonArray[pos]["albumDTO"]["albn"]);
            $("#media_video_dto").show();
            $("#media_audio_dto").hide();
            jPlayerAudio.remove();
            $("#imgdto").hide();
            $("#imgurl").attr("src", "");
            jPlayerVideo.setPlaylist(getPlaylist(pos, 1)) //1 for video
            break;
        default:
            $("#contenttype").text("UNKNOWN");
            $("#albid").text("");
            $("#albname").text("");
            $("#imgurl").attr("src", "");
            $("#imgdto").hide();
            $("#media_video_dto").hide();
            $("#media_audio_dto").hide();
            jPlayerVideo.remove();
            jPlayerAudio.remove();
            imgfeedlen = 0;
            break;
    }

    if ("linkContent" in jsonArray[pos]) {
        $("#lnkContent").show();
        $("#lnkTitle").text(jsonArray[pos]["linkContent"]["linkTitle"]);
        $("#lnkURL").text(jsonArray[pos]["linkContent"]["linkURL"]);
        $("#lnkDesc").text(jsonArray[pos]["linkContent"]["linkDesc"]);
        $("#lnkImageURL").text(jsonArray[pos]["linkContent"]["linkImageURL"]);
        $("#lnkDomain").text(jsonArray[pos]["linkContent"]["linkDomain"]);
    } else {
        $("#lnkContent").hide();
    }

    if ("parentFeedId" in jsonArray[pos]) {
        $("#sharecontent").show();
        if (userBasicInfoHashMap) {
            $("#pfn").text(userBasicInfoHashMap[jsonArray[pos]["parentFeedInfo"]["wallOwnerId"]]["fn"]);
        }
        $("#pfeedid").text(jsonArray[pos]["parentFeedId"]);
        $("#pfeedstatus").text(jsonArray[pos]["parentFeedInfo"]["status"]);
        switch (jsonArray[pos]["parentFeedInfo"]["contentType"]) {
            case 1:
                $("#pcontenttype").text("TEXT");
                $("#palbid").text("");
                $("#palbname").text("");
                $("#pimgurl").attr("src", "");
                $("#pimgdto").hide();
                $("#palbumid").hide();
                $("#palbumname").hide();
                $("#pmedia_video_dto").hide();
                $("#pmedia_audio_dto").hide();
                jPlayerShareVideo.remove();
                jPlayerShareAudio.remove();
                break;
            case 2:
                $("#pcontenttype").text("SINGLE_IMAGE");
                $("#palbid").show();
                $("#palbname").show();
                $("#palbid").text(jsonArray[pos]["parentFeedInfo"]["albumDTO"]["albId"]);
                $("#palbname").text(jsonArray[pos]["parentFeedInfo"]["albumDTO"]["albn"]);
                $("#pimgdto").show();
                $("#pmedia_video_dto").hide();
                $("#pmedia_audio_dto").hide();
                jPlayerShareVideo.remove();
                jPlayerShareAudio.remove();
                $("#pimgurl").attr("src", BASE_MEDIA_URL + jsonArray[pos]["parentFeedInfo"]["albumDTO"]["imgDTOs"][0]["url"]);
                $("#pimgview").text(jsonArray[pos]["parentFeedInfo"]["albumDTO"]["imgDTOs"][0]["viewCount"]);
                $("#pimglike").text(jsonArray[pos]["parentFeedInfo"]["albumDTO"]["imgDTOs"][0]["likeCount"]);
                $("#pimgcomment").text(jsonArray[pos]["parentFeedInfo"]["albumDTO"]["imgDTOs"][0]["commentCount"]);
                pimgfeedlen = jsonArray[pos]["parentFeedInfo"]["albumDTO"]["imgDTOs"].length;
                $("#pimgcurrent").text("1");
                $("#pimgtotal").text(pimgfeedlen);
                break;
            case 3:
                $("#pcontenttype").text("SINGLE_IMAGE_WITH_ALBUM");
                $("#palbid").show();
                $("#palbname").show();
                $("#palbid").text(jsonArray[pos]["parentFeedInfo"]["albumDTO"]["albId"]);
                $("#palbname").text(jsonArray[pos]["parentFeedInfo"]["albumDTO"]["albn"]);
                $("#pimgdto").show();
                $("#pmedia_video_dto").hide();
                $("#pmedia_audio_dto").hide();
                jPlayerShareVideo.remove();
                jPlayerShareAudio.remove();
                $("#pimgurl").attr("src", BASE_MEDIA_URL + jsonArray[pos]["parentFeedInfo"]["albumDTO"]["imgDTOs"][0]["url"]);
                $("#pimgview").text(jsonArray[pos]["parentFeedInfo"]["albumDTO"]["imgDTOs"][0]["viewCount"]);
                $("#pimglike").text(jsonArray[pos]["parentFeedInfo"]["albumDTO"]["imgDTOs"][0]["likeCount"]);
                $("#pimgcomment").text(jsonArray[pos]["parentFeedInfo"]["albumDTO"]["imgDTOs"][0]["commentCount"]);
                pimgfeedlen = jsonArray[pos]["parentFeedInfo"]["albumDTO"]["imgDTOs"].length;
                $("#pimgcurrent").text("1");
                $("#pimgtotal").text(pimgfeedlen);
                break;
            case 4:
                $("#pcontenttype").text("MULTIPLE_IMAGE_WITH_ALBUM");
                $("#palbid").show();
                $("#palbname").show();
                $("#palbid").text(jsonArray[pos]["parentFeedInfo"]["albumDTO"]["albId"]);
                $("#palbname").text(jsonArray[pos]["parentFeedInfo"]["albumDTO"]["albn"]);
                $("#pimgdto").show();
                $("#pmedia_video_dto").hide();
                $("#pmedia_audio_dto").hide();
                jPlayerShareVideo.remove();
                jPlayerShareAudio.remove();
                $("#pimgurl").attr("src", BASE_MEDIA_URL + jsonArray[pos]["parentFeedInfo"]["albumDTO"]["imgDTOs"][0]["url"]);
                $("#pimgview").text(jsonArray[pos]["parentFeedInfo"]["albumDTO"]["imgDTOs"][0]["viewCount"]);
                $("#pimglike").text(jsonArray[pos]["parentFeedInfo"]["albumDTO"]["imgDTOs"][0]["likeCount"]);
                $("#pimgcomment").text(jsonArray[pos]["parentFeedInfo"]["albumDTO"]["imgDTOs"][0]["commentCount"]);
                pimgfeedlen = jsonArray[pos]["parentFeedInfo"]["albumDTO"]["imgDTOs"].length;
                $("#pimgcurrent").text("1");
                $("#pimgtotal").text(pimgfeedlen);
                break;
            case 5:
                $("#pcontenttype").text("SINGLE_AUDIO");
                $("#palbumid").show();
                $("#palbumname").show();
                $("#palbid").text(jsonArray[pos]["parentFeedInfo"]["albumDTO"]["albId"]);
                $("#palbname").text(jsonArray[pos]["parentFeedInfo"]["albumDTO"]["albn"]);
                $("#pmedia_video_dto").hide();
                $("#pmedia_audio_dto").show();
                jPlayerShareVideo.remove();
                $("#pimgdto").hide();
                $("#pimgurl").attr("src", "");
                jPlayerShareAudio.setPlaylist(getPlaylist(pos, 4)); // 4 for share audio
                break;
            case 6:
                $("#pcontenttype").text("SINGLE_AUDIO_WITH_ALBUM");
                $("#palbumid").show();
                $("#palbumname").show();
                $("#palbid").text(jsonArray[pos]["parentFeedInfo"]["albumDTO"]["albId"]);
                $("#palbname").text(jsonArray[pos]["parentFeedInfo"]["albumDTO"]["albn"]);
                $("#pmedia_video_dto").hide();
                $("#pmedia_audio_dto").show();
                jPlayerShareVideo.remove();
                $("#pimgdto").hide();
                $("#pimgurl").attr("src", "");
                jPlayerShareAudio.setPlaylist(getPlaylist(pos, 4)); // 4 for share audio
                break;
            case 7:
                $("#pcontenttype").text("MULTIPLE_AUDIO_WITH_ALBUM");
                $("#palbumid").show();
                $("#palbumname").show();
                $("#palbid").text(jsonArray[pos]["parentFeedInfo"]["albumDTO"]["albId"]);
                $("#palbname").text(jsonArray[pos]["parentFeedInfo"]["albumDTO"]["albn"]);
                $("#pmedia_video_dto").hide();
                $("#pmedia_audio_dto").show();
                jPlayerShareVideo.remove();
                $("#pimgdto").hide();
                $("#pimgurl").attr("src", "");
                jPlayerShareAudio.setPlaylist(getPlaylist(pos, 4)); // 4 for share audio
                break;
            case 8:
                $("#pcontenttype").text("SINGLE_VIDEO");
                $("#palbumid").show();
                $("#palbumname").show();
                $("#palbid").text(jsonArray[pos]["parentFeedInfo"]["albumDTO"]["albId"]);
                $("#palbname").text(jsonArray[pos]["parentFeedInfo"]["albumDTO"]["albn"]);
                $("#pmedia_video_dto").show();
                $("#pmedia_audio_dto").hide();
                jPlayerShareAudio.remove();
                $("#pimgdto").hide();
                $("#pimgurl").attr("src", "");
                jPlayerShareVideo.setPlaylist(getPlaylist(pos, 3)); // 3 for share video
                break;
            case 9:
                $("#pcontenttype").text("SINGLE_VIDEO_WITH_ALBUM");
                $("#palbumid").show();
                $("#palbumname").show();
                $("#palbid").text(jsonArray[pos]["parentFeedInfo"]["albumDTO"]["albId"]);
                $("#palbname").text(jsonArray[pos]["parentFeedInfo"]["albumDTO"]["albn"]);
                $("#pmedia_video_dto").show();
                $("#pmedia_audio_dto").hide();
                jPlayerShareAudio.remove();
                $("#pimgdto").hide();
                $("#pimgurl").attr("src", "");
                jPlayerShareVideo.setPlaylist(getPlaylist(pos, 3)); // 3 for share video
                break;
            case 10:
                $("#pcontenttype").text("MULTIPLE_VIDEO_WITH_ALBUM");
                $("#palbumid").show();
                $("#palbumname").show();
                $("#palbid").text(jsonArray[pos]["parentFeedInfo"]["albumDTO"]["albId"]);
                $("#palbname").text(jsonArray[pos]["parentFeedInfo"]["albumDTO"]["albn"]);
                $("#pmedia_video_dto").show();
                $("#pmedia_audio_dto").hide();
                jPlayerShareAudio.remove();
                $("#pimgdto").hide();
                $("#pimgurl").attr("src", "");
                jPlayerShareVideo.setPlaylist(getPlaylist(pos, 3)); // 3 for share video
                break;
            default:
                $("#pcontenttype").text("UNKNOWN");
                $("#palbid").text("");
                $("#palbname").text("");
                $("#pimgurl").attr("src", "");
                $("#pimgdto").hide();
                $("#pmedia_video_dto").hide();
                $("#pmedia_audio_dto").hide();
                jPlayerShareVideo.remove();
                jPlayerShareAudio.remove();
                break;
        }
    } else {
        $("#sharecontent").hide();
    }

}

