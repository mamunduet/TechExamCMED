$(document).ready(function () {
    $("#seeMoreFriend").click(function () {
        console.log("seeMoreFriend click");
        seeMoreFriend();
    });

    $("#seeMorePage").click(function () {
        console.log("seeMorePage click");
        seeMorePage();
    });

    $("#seeMorePeople").click(function () {
        console.log("seeMorePeople click");
        seeMorePeople();
    });

    $("#seeMoreAvailableCoin").click(function () {
        console.log("seeMoreAvailableCoin click");
        seeMoreCoin(0);
    });

    $("#seeMoreGiftCoin").click(function () {
        console.log("seeMoreGiftCoin click");
        seeMoreCoin(1);
    });

    $("#pastLive_seeMoreFeed").click(function () {
        console.log("pastLive_seeMoreFeed click");
        seeMoreFeedList(66);
    });

    $("#seeMoreFeed").click(function () {
        console.log("seeMoreFeed click");
        seeMoreFeedList(5);
    });
});

function seeMorePeople() {
    $("#seeMorePeople").html('<span class="ladda-label">Loading</span>');
    var l = Ladda.create(document.querySelector('.seeMorePeople'));
    l.start();
    $("#seeMorePeople").prop("disabled", true);
    $.ajax({
        url: base_url + '/searchUserContacts/GetList?reqType=1&searchText=' + $('input[name=searchText]').val() + '&type=1&lmt=10&st=' + $("#currentPeopleData").val(),
        type: 'GET',
        dataType: 'json',
        contentType: false,
        processData: false,
        cache: false,
        timeout: 600000,
        success: function (jsondata) {
            var jsonArray = JSON.parse(JSON.stringify(jsondata));
            l.stop();
            l.remove();
            $("#seeMorePeople").html('<span class="ladda-label">See More</span>');
            if (jsonArray.length < 10) {
                $("#seeMorePeople").parent().html('<span class="font-grey-cascade">No more Data</span>');
            } else {
                $("#seeMorePeople").html('<span class="ladda-label">See More</span>');
            }
            $("#currentPeopleData").val(parseInt($("#currentPeopleData").val()) + jsonArray.length);
            for (var i = 0; i < jsonArray.length; i++) {
                var jsonObject = jsonArray[i];
                console.log(jsonObject);
                var userType = getUserTypeStr(jsonObject.pType);
                var tr = document.createElement("tr");
                var img = document.createElement("img");
                if (jsonObject.hasOwnProperty("prIm")) {
                    img.src = media_base_url + jsonObject.prIm;
                } else {
                    img.src = "assets/global/img/default-pp.jpg";
                }
                img.style.height = "100px";
                img.style.width = "100px";
                var proImg = document.createElement("td");
                proImg.className = "table-status";
                proImg.appendChild(img);
                var name = document.createElement("td");
                name.className = "table-title";
                name.innerHTML = "<h3>" +
                        "<a href='searchUser2.do?searchText=" + jsonObject.uId + "'>" + jsonObject.fn + "</a>" +
                        "</h3>" +
                        "<p class='font-blue'>" +
                        userType +
                        "-" +
                        "<span class='font-grey-cascade'>" + jsonObject.mblDc + jsonObject.mbl + "</span>" +
                        "</p>";
                var ringId = document.createElement("td");
                ringId.className = "table-date font-blue";
                ringId.innerHTML = jsonObject.uId;
                var utId = document.createElement("td");
                utId.className = "table-date font-blue";
                utId.innerHTML = jsonObject.utId;
                var country = document.createElement("td");
                country.className = "table-desc";
                country.innerHTML = jsonObject.cnty;
                var view = document.createElement("td");
                view.className = "table-download";
                view.innerHTML = "<a href='searchUser2.do?searchText=" + jsonObject.uId + "' class='btn green-soft uppercase bold'>VIEW</a>";
                tr.appendChild(proImg);
                tr.appendChild(name);
                tr.appendChild(ringId);
                tr.appendChild(utId);
                tr.appendChild(country);
                tr.appendChild(view);
                $(tr).appendTo($("#tablePeople"));
            }
            $("#seeMorePeople").prop("disabled", false);
        },
        error: function () {
            l.stop();
            l.remove();
            $("#seeMorePeople").html('<span class="ladda-label">See More</span>');
            $("#seeMorePeople").prop("disabled", false);
        }
    });
}

function seeMorePage() {
    $("#seeMorePage").html('<span class="ladda-label">Loading</span>');
    var l = Ladda.create(document.querySelector('.seeMorePage'));
    l.start();
    $("#seeMorePage").prop("disabled", true);
    $.ajax({
        url: base_url + '/searchUserContacts/GetList?reqType=1&searchText=' + $('input[name=searchText]').val() + '&type=2&lmt=10&st=' + $("#currentPageData").val(),
        type: 'GET',
        dataType: 'json',
        contentType: false,
        processData: false,
        cache: false,
        timeout: 600000,
        success: function (jsondata) {
            var jsonArray = JSON.parse(JSON.stringify(jsondata));
            l.stop();
            l.remove();
            if (jsonArray.length < 10) {
                $("#seeMorePage").parent().html('<span class="font-grey-cascade">No more Data</span>');
            } else {
                $("#seeMorePage").html('<span class="ladda-label">See More</span>');
            }
            $("#currentPageData").val(parseInt($("#currentPageData").val()) + jsonArray.length);
            for (var i = 0; i < jsonArray.length; i++) {
                var jsonObject = jsonArray[i];
                console.log(jsonObject);
                var userType = getUserTypeStr(jsonObject.pType);
                var tr = document.createElement("tr");
                var img = document.createElement("img");
                if (jsonObject.hasOwnProperty("prIm")) {
                    img.src = media_base_url + jsonObject.prIm;
                } else {
                    img.src = "assets/global/img/default-pp.jpg";
                }
                img.style.height = "100px";
                img.style.width = "100px";
                var proImg = document.createElement("td");
                proImg.className = "table-status";
                proImg.appendChild(img);
                var name = document.createElement("td");
                name.className = "table-title";
                name.innerHTML = "<h3>" +
                        "<a href='searchUser2.do?searchText=" + jsonObject.uId + "'>" + jsonObject.fn + "</a>" +
                        "</h3>" +
                        "<p class='font-blue'>" +
                        userType;
                var ringId = document.createElement("td");
                ringId.className = "table-date font-blue";
                ringId.innerHTML = jsonObject.uId;
                var utId = document.createElement("td");
                utId.className = "table-date font-blue";
                utId.innerHTML = jsonObject.utId;
                var country = document.createElement("td");
                country.className = "table-desc";
                country.innerHTML = jsonObject.cnty;
                var view = document.createElement("td");
                view.className = "table-download";
                view.innerHTML = "<a href='searchUser2.do?searchText=" + jsonObject.uId + "' class='btn green-soft uppercase bold'>VIEW</a>";
                tr.appendChild(proImg);
                tr.appendChild(name);
                tr.appendChild(ringId);
                tr.appendChild(utId);
                tr.appendChild(country);
                tr.appendChild(view);
                $(tr).appendTo($("#tablePage"));
            }
            $("#seeMorePage").prop("disabled", false);
        },
        error: function () {
            l.stop();
            l.remove();
            $("#seeMorePage").html('<span class="ladda-label">See More</span>');
            $("#seeMorePage").prop("disabled", false);
        }
    });
}

function seeMoreCoin(coinType) {
    var l, gft, $pvtId, $seeMoreCoin, $coinList, $tableRef, msg;
    if (coinType === 0 && ($("#available_coin_pvtId").val() === null || $("#available_coin_pvtId").val() === "NO_ITEM")) {
        return;
    } else if (coinType === 1 && ($("#gift_coin_pvtId").val() === null && $("#gift_coin_pvtId").val() != "NO_ITEM")) {
        return;
    }
    if (coinType === 1) {
        msg = "No more gift coin";
        gft = true;
        $coinList = $(".giftCoinList");
        $pvtId = $("#gift_coin_pvtId");
        $tableRef = document.getElementById('giftCoinList').getElementsByTagName('tbody')[0];
        $seeMoreCoin = $("#seeMoreGiftCoin");
        $seeMoreCoin.html('<span class="ladda-label">Loading</span>');
        l = Ladda.create(document.querySelector('.seeMoreGiftCoin'));
        l.start();
        $seeMoreCoin.prop("disabled", true);
    } else {
        msg = "No more available coin";
        gft = false;
        $coinList = $(".availableCoinList");
        $pvtId = $("#available_coin_pvtId");
        $seeMoreCoin = $("#seeMoreAvailableCoin");
        $tableRef = document.getElementById('availableCoinList').getElementsByTagName('tbody')[0];
        $seeMoreCoin.html('<span class="ladda-label">Loading</span>');
        l = Ladda.create(document.querySelector('.seeMoreAvailableCoin'));
        l.start();
        $seeMoreCoin.prop("disabled", true);
    }
    $.ajax({
        url: base_url + '/searchUserContacts/GetList?reqType=8&utId=' + $('#utId').val() + '&lmt=10&pvtId=' + $pvtId.val() + '&gft=' + gft,
        type: 'GET',
        dataType: 'json',
        contentType: false,
        processData: false,
        cache: false,
        timeout: 600000,
        success: function (jsondata) {
            console.log(JSON.stringify(jsondata));
            var jsonArray = JSON.parse(JSON.stringify(jsondata));
            l.stop();
            l.remove();
            var len = jsonArray.length;
            if (jsonArray.length < 5) {
                $pvtId.val("NO_ITEM");
                $seeMoreCoin.parent().html('<span class="font-grey-cascade">' + msg + '</span>');
            } else {
                $pvtId.val(jsonArray[len - 1].logId);
                $seeMoreCoin.html('<span class="ladda-label">See More</span>');
            }
            if (len > 0 && $coinList.is(":visible") === false) {
                $coinList.show();
            }
            for (var i = 0; i < len; i++) {
                var coinJson = jsonArray[i];
                $tableRef.appendChild(getCoinItem(coinJson))
            }
            $seeMoreCoin.prop("disabled", false);
        },
        error: function () {
            l.stop();
            l.remove();
            $seeMoreCoin.html('<span class="ladda-label">See More</span>');
            $seeMoreCoin.prop("disabled", false);
        }
    });
}

function seeMoreFriend() {
    if ($("#friend_pvtId").val() !== null && $("#friend_pvtId").val() != "NO_ITEM") {
        $("#seeMoreFriend").html('<span class="ladda-label">Loading</span>');
        var l = Ladda.create(document.querySelector('.seeMoreFriend'));
        l.start();
        $("#seeMoreFriend").prop("disabled", true);
        $.ajax({
            url: base_url + '/searchUserContacts/GetList?reqType=5&utId=' + $('#utId').val() + '&lmt=10&pvtId=' + $("#friend_pvtId").val(),
            type: 'GET',
            dataType: 'json',
            contentType: false,
            processData: false,
            cache: false,
            timeout: 600000,
            success: function (jsondata) {
                console.log(JSON.stringify(jsondata));
                var jsonObject = JSON.parse(JSON.stringify(jsondata));
                var jsonArray = jsonObject.friendList;
                l.stop();
                l.remove();
                if (jsonArray.length < 5) {
                    $("#friend_pvtId").val("NO_ITEM");
                    $("#seeMoreFriend").parent().html('<span class="font-grey-cascade">No more friend</span>');
                } else {
                    $("#friend_pvtId").val(jsonObject.nextPivotId);
                    $("#seeMoreFriend").html('<span class="ladda-label">See More</span>');
                }
                var len = jsonArray.length;
                if (len > 0 && $('#friendList').is(":visible") == false) {
                    $('#friendList').show();
                }
                for (var i = 0; i < len; i++) {
                    var friendJson = jsonArray[i];
                    var timeLineItem = document.createElement("div");
                    timeLineItem.className = "timeline-item";
                    timeLineItem.innerHTML = getFriendItem(friendJson);
                    $(timeLineItem).appendTo($('#friendList'));
                }
                $("#seeMoreFriend").prop("disabled", false);
            },
            error: function () {
                l.stop();
                l.remove();
                $("#seeMoreFriend").html('<span class="ladda-label">See More</span>');
                $("#seeMoreFriend").prop("disabled", false);
            }
        });
    }
}

function getUserTypeStr(type) {
    var userType = "";
    switch (type) {
        case 1:
            userType = "User";
            break;
        case 2:
            userType = "Special Contact";
            break;
        case 3:
            userType = "Page";
            break;
        case 4:
            userType = "Room";
            break;
        case 5:
            userType = "Donation";
            break;
        case 6:
            userType = "Beauty Contestant";
            break;
        case 7:
            userType = "Sports";
            break;
        case 10:
            userType = "Celebrity";
            break;
        case 15:
            userType = "Newsportal";
            break;
        case 20:
            userType = "Media";
            break;
        case 25:
            userType = "Business";
            break;
        case 30:
            userType = "Product";
            break;
        case 99:
            userType = "Group";
            break;
    }
    return userType;
}

function seeMoreFeedList(action) {
    var $pivotId, $seeMore, $destination, seeMoreFeedCSS;
    if (action == 66) {
        $pivotId = $('#pastLive_pvtUUID');
        $seeMore = $('#pastLive_seeMoreFeed');
        $destination = $('#pastLiveFeed');
        seeMoreFeedCSS = '.pastLive_seeMoreFeed';
    } else if (action == 5) {
        $pivotId = $('#pvtUUID');
        $seeMore = $('#seeMoreFeed');
        $destination = $('#homeFeed');
        seeMoreFeedCSS = '.seeMoreFeed';
    } else {
        $pivotId = $('#pvtUUID');
        $seeMore = $('#featurepastLive_seeMoreFeed');
        $destination = $('#liveFeed');
        seeMoreFeedCSS = '.featurepastLive_seeMoreFeed';
    }
    if ($pivotId.val() !== null && $pivotId.val() != "NO_ITEM") {
        $seeMore.html('<span class="ladda-label">Loading</span>');
        var l = Ladda.create(document.querySelector(seeMoreFeedCSS));
        l.start();
        $seeMore.prop("disabled", true);
        console.log(base_url + '/searchUserContacts/GetList?reqType=2&utId=' + $('#utId').val() + '&lmt=10&pvtUUID=' + $pivotId.val() + '&actn=' + action + '&searchText=' + $('input[name=searchText]').val());
        $.ajax({
            url: base_url + '/searchUserContacts/GetList?reqType=2&utId=' + $('#utId').val() + '&lmt=10&pvtUUID=' + $pivotId.val() + '&actn=' + action + '&searchText=' + $('input[name=searchText]').val(),
            type: 'GET',
            dataType: 'json',
            contentType: false,
            processData: false,
            cache: false,
            timeout: 600000,
            success: function (jsondata) {
                l.stop();
                l.remove();
                console.log('Data: ' + JSON.stringify(jsondata));
                var jsonObject = JSON.parse(JSON.stringify(jsondata));
                if (jsonObject.reasonCode == 0) {
                    $pivotId.val(jsonObject.nextPivotId);
                    $seeMore.html('<span class="ladda-label">See More</span>');
                } else {
                    $pivotId.val("NO_ITEM");
                    $seeMore.parent().html('<span class="font-grey-cascade">No more feed</span>');
                }
                var jsonArray = jsonObject.feedDTOList;
                var len = jsonArray.length;
                if (len > 0 && $destination.is(":visible") == false) {
                    $destination.show();
                }
                for (var i = 0; i < len; i++) {
                    var feedJson = jsonArray[i];
                    var timeLineItem = document.createElement("div");
                    timeLineItem.className = "timeline-item";
                    timeLineItem.innerHTML = getFeedItem(feedJson, action, false);
                    $(timeLineItem).appendTo($destination);
                }
                $seeMore.prop("disabled", false);
            },
            error: function () {
                l.stop();
                l.remove();
                $seeMore.parent().html('<span class="font-red">No response from server</span>');
                $seeMore.prop("disabled", false);
            }
        });
    }
}

function getFeedItem(feedJson, action, isShared) {
    var proImageUrl = 'assets/global/img/default-pp.jpg';
    var name = "";
    var id = "";
    if (feedJson.hasOwnProperty("guestWriterId") && feedJson.guestWriterId > 0) {
        id = feedJson.guestWriterId;
        if (feedJson.hasOwnProperty("guestWriterInfo")) {
            if (feedJson.guestWriterInfo.hasOwnProperty("fn")) {
                name = feedJson.guestWriterInfo.fn;
            }
            if (feedJson.guestWriterInfo.hasOwnProperty("piUrl") && feedJson.guestWriterInfo.piUrl.length > 0) {
                proImageUrl = media_base_url + feedJson.guestWriterInfo.piUrl.toString();
            }
        }
    } else {
        if (feedJson.hasOwnProperty("wallOwnerId")) {
            id = feedJson.wallOwnerId;
        }
        if (feedJson.hasOwnProperty("wallOwnerInfo")) {
            if (feedJson.wallOwnerInfo.hasOwnProperty("fn")) {
                name = feedJson.wallOwnerInfo.fn;
            }
            if (feedJson.wallOwnerInfo.hasOwnProperty("piUrl") && feedJson.wallOwnerInfo.piUrl.length > 0) {
                proImageUrl = media_base_url + feedJson.wallOwnerInfo.piUrl.toString();
            }
        }
    }
    var date = 0;
    if (feedJson.hasOwnProperty("addTime")) {
        date = formateDate(feedJson.addTime, 1);
    }
    var mediaContent = "";
    if (feedJson.hasOwnProperty("contentType") && feedJson.hasOwnProperty("albumDTO") && feedJson.contentType > 1) {
        mediaContent = getMediaContent(feedJson.contentType, feedJson.albumDTO);
    }

    var subTitle = "", dateforsubtitle = "";
    var linkContent = "";
    if (feedJson.hasOwnProperty("parentFeedInfo")) {
        subTitle = '<span class="font-grey-cascade"> shared </span> ' +
                '<a href="searchUser2.do?searchText=' + feedJson.parentFeedInfo.hasOwnProperty("wallOwnerId") ? feedJson.parentFeedInfo.wallOwnerId : 0 + '">' + feedJson.parentFeedInfo.hasOwnProperty("wallOwnerInfo") && feedJson.parentFeedInfo.wallOwnerInfo.hasOwnProperty("fn") ? feedJson.parentFeedInfo.wallOwnerInfo.fn : '' + '</a>' +
                '<span class="font-grey-cascade">\'s status </span>';
    } else if (feedJson.lType != null && feedJson.lType > 0) {
        var liveTense = "";
        if (feedJson.lType == 1) {
            liveTense = " will be ";
        } else if (feedJson.lType == 2) {
            liveTense = " is ";
        } else if (feedJson.lType == 3) {
            liveTense = " was ";
        }
        dateforsubtitle = feedJson.hasOwnProperty("liveTime") ? formateDate(feedJson.liveTime, 2) : '';
        subTitle = '<span class="font-grey-cascade">' + liveTense + '</span><span class="font-red-intense">LIVE </span><span class="font-grey-cascade">on </span>' +
                '<span class="font-green-haze">' + dateforsubtitle + '</span>';
    } else if (feedJson.hasOwnProperty("contentType") && feedJson.contentType > 1) {
        subTitle = "<span class='font-grey-cascade'> ";
        switch (feedJson.contentType) {
            case 2:
            case 3:
            case 4:
                subTitle += 'added ' + (feedJson.hasOwnProperty("albumDTO") && feedJson.albumDTO.contentCount > 1 ? (feedJson.albumDTO.contentCount + ' photos') : 'a photo');
                break;
            case 5:
            case 6:
            case 7:
                subTitle += 'added ' + (feedJson.hasOwnProperty("albumDTO") && feedJson.albumDTO.contentCount > 1 ? (feedJson.albumDTO.contentCount + ' music') : 'a music');
                break;
            case 8:
            case 9:
            case 10:
                subTitle += 'added ' + (feedJson.hasOwnProperty("albumDTO") && feedJson.albumDTO.contentCount > 1 ? (feedJson.albumDTO.contentCount + ' videos') : 'a video');
                break;

        }
        subTitle += ' </span>';
    } else if (feedJson.additionalFeedContent != null) {
        linkContent = "<span class='font-red-intense'>" + feedJson.additionalFeedContent.title + ": </span><br>" + feedJson.additionalFeedContent.shortDescription +
                "<p style='word-wrap: break-word;'>" +
                "<a href='" + feedJson.additionalFeedContent.newsURL + "'>" + feedJson.additionalFeedContent.newsURL + "</a>" +
                "</p>";
    } else if (feedJson.linkContent != null) {
        subTitle = '<span class="font-grey-cascade"> shared a link</span>';
        linkContent = "<span class='font-red-intense'>" + feedJson.linkContent.linkTitle + ": </span>" + feedJson.linkContent.linkDesc +
                "<p style='word-wrap: break-word;'>" +
                "<a href='" + feedJson.linkContent.linkURL + "'>" + feedJson.linkContent.linkURL + "</a>" +
                "</p>";
    }

    if (feedJson.hasOwnProperty("moodList") && feedJson.moodList.length > 0) {
        subTitle += '<span class="font-grey-cascade">';
        for (var i = 0; i < feedJson.moodList.length; i++) {
            subTitle += ' <img src="' + image_base_url + 'emoticon/d5/' + feedJson.moodList[i].url + '" style="height: 16px;width: 16px;">';
            subTitle += ' feeling ' + feedJson.moodList[i].nm;
        }
        subTitle += ' </span>';
    }

    var status = feedJson.status;
    if (feedJson.statusTags.length > 0) {
        status = statusWithTag(status, feedJson.statusTags);
    }

    var listActions = "<a href = 'javascript:;' >Not Implement yet</a>";
    switch (action) {
        case 59:
            listActions = '<li><a href = "javascript:processRequest(3, getParamData(\'' + feedJson.feedId + '\', \'' + (feedJson.liveTimeUUID != null && feedJson.liveTimeUUID.length > 0 ? feedJson.liveTimeUUID : "") + '\'), 59, 1)" >Make Featured Past Live Feed</a></li>';
            listActions += '<li><a href = "javascript:processRequest(3, getParamData(\'' + feedJson.feedId + '\', \'' + (feedJson.liveTimeUUID != null && feedJson.liveTimeUUID.length > 0 ? feedJson.liveTimeUUID : "") + '\'), 59, 0)" >Make Verified Celebrity Past Live Feed</a></li>';
            listActions += '<li><a data-toggle="modal" href="#basic" onclick="javascript:setParamForValidityEdit(\'' + feedJson.feedId + '\', \'' + feedJson.expiredAfter + '\', \'' + feedJson.live.url + '\', \'' + feedJson.wallOwnerId + '\')"> Edit Validity </a></li>';
            dateforsubtitle = feedJson.hasOwnProperty("expiredAfter") ? formateDate(feedJson.expiredAfter, 2) : '';
            dateforsubtitle = dateforsubtitle.length > 0 ? dateforsubtitle : 'unlimited';
            subTitle += '<br><span class="font-red-intense">Validity ' + dateforsubtitle + '</span>';
            break;
        case 66:
            listActions = '<li><a href = "javascript:processRequest(3, getParamData(\'' + feedJson.feedId + '\', \'' + (feedJson.liveTimeUUID != null && feedJson.liveTimeUUID.length > 0 ? feedJson.liveTimeUUID : "") + '\'), 66, 1)" >Make Featured Past Live Feed</a></li>';
            break;
        case 67:
            listActions = '<li><a href = "javascript:processRequest(4, getParamData(\'' + feedJson.feedId + '\', \'' + (feedJson.liveTimeUUID != null && feedJson.liveTimeUUID.length > 0 ? feedJson.liveTimeUUID : "") + '\'), 67, 1)" >Remove Featured Past Live Feed</a></li>';
            listActions += '<li><a data-toggle="modal" href="#basic" onclick="javascript:setParamForValidityEdit(\'' + feedJson.feedId + '\', \'' + feedJson.expiredAfter + '\', \'' + feedJson.live.url + '\', \'' + feedJson.wallOwnerId + '\')"> Edit Validity </a></li>';
            dateforsubtitle = feedJson.hasOwnProperty("expiredAfter") ? formateDate(feedJson.expiredAfter, 2) : '';
            dateforsubtitle = dateforsubtitle.length > 0 ? dateforsubtitle : 'unlimited';
            subTitle += '<br><span class="font-red-intense">Validity ' + dateforsubtitle + '</span>';
            break;
        case 70:
            listActions = '<li><a href = "javascript:processRequest(3, getParamData(\'' + feedJson.feedId + '\', \'' + (feedJson.liveTimeUUID != null && feedJson.liveTimeUUID.length > 0 ? feedJson.liveTimeUUID : "") + '\'), 70, 0)" >Make Verified Top Past Live Feed</a></li>';
            listActions += '<li><a data-toggle="modal" href="#basic" onclick="javascript:setParamForValidityEdit(\'' + feedJson.feedId + '\', \'' + feedJson.expiredAfter + '\', \'' + feedJson.live.url + '\', \'' + feedJson.wallOwnerId + '\')"> Edit Validity </a></li>';
            dateforsubtitle = feedJson.hasOwnProperty("expiredAfter") ? formateDate(feedJson.expiredAfter, 2) : '';
            dateforsubtitle = dateforsubtitle.length > 0 ? dateforsubtitle : 'unlimited';
            subTitle += '<br><span class="font-red-intense">Validity ' + dateforsubtitle + '</span>';
            break;
        case 72:
            listActions = '<li><a href = "javascript:processRequest(4, getParamData(\'' + feedJson.feedId + '\', \'' + (feedJson.liveTimeUUID != null && feedJson.liveTimeUUID.length > 0 ? feedJson.liveTimeUUID : "") + '\'), 72, 0)" >Remove Verified Top Past Live Feed</a></li>';
            listActions += '<li><a data-toggle="modal" href="#basic" onclick="javascript:setParamForValidityEdit(\'' + feedJson.feedId + '\', \'' + feedJson.expiredAfter + '\', \'' + feedJson.live.url + '\', \'' + feedJson.wallOwnerId + '\')"> Edit Validity </a></li>';
            dateforsubtitle = feedJson.hasOwnProperty("expiredAfter") ? formateDate(feedJson.expiredAfter, 2) : '';
            dateforsubtitle = dateforsubtitle.length > 0 ? dateforsubtitle : 'unlimited';
            subTitle += '<br><span class="font-red-intense">Validity ' + dateforsubtitle + '</span>';
            break;
        case 73:
            listActions = '<li><a href = "javascript:processRequest(4, getParamData(\'' + feedJson.feedId + '\', \'' + (feedJson.liveTimeUUID != null && feedJson.liveTimeUUID.length > 0 ? feedJson.liveTimeUUID : "") + '\'), 73, 0)" >Remove Verified Celebrity Past Live Feed</a></li>';
            listActions += '<li><a data-toggle="modal" href="#basic" onclick="javascript:setParamForValidityEdit(\'' + feedJson.feedId + '\', \'' + feedJson.expiredAfter + '\', \'' + feedJson.live.url + '\', \'' + feedJson.wallOwnerId + '\')"> Edit Validity </a></li>';
            dateforsubtitle = feedJson.hasOwnProperty("expiredAfter") ? formateDate(feedJson.expiredAfter, 2) : '';
            dateforsubtitle = dateforsubtitle.length > 0 ? dateforsubtitle : 'unlimited';
            subTitle += '<br><span class="font-red-intense">Validity ' + dateforsubtitle + '</span>';
            break;
        default:
            listActions = "<li><a href = 'javascript:;' >Not Implement yet</a></li>";
            break;
    }

    var timeLineItem =
            (isShared == true ? "<div class='row'></div>" + "<div  class='timeline'>" + "<div class='timeline-item'>" : "") +
            "<div class = 'timeline-body' style='margin-left: 0px; " + (isShared == true ? 'background-color: #f5f6fa;' : '') + (action == 66 ? 'padding: 0px;margin-top: 0px;' : '') + "'>" +
            "<div class = 'timeline-body-head' >" +
            "<div class='timeline-badge' style='width: 56px;height: 50px;'>" +
            "<img class='timeline-badge-userpic' src='" + proImageUrl + "' style='height: 50px;width: 50px;'>" +
            "</div>" +
            "<div class = 'timeline-body-head-caption' style='float: none;'>" +
            "<a href = 'searchUser2.do?searchText=" + id + "' class = 'timeline-body-title font-blue-madison' >" +
            name +
            "</a>" +
            subTitle +
            "<br>" +
            "<span class = 'timeline-body-time font-grey-cascade' style='margin-left: 0px;font-size: 12px;'>" +
            "<i class='fa fa-clock-o'></i> " + date.toString() + "  " +
            (isShared == false ?
                    "<span class = 'timeline-body-head-actions' style='float: none;'>" +
                    "<div class = 'btn-group' >" +
                    "<button class = 'btn btn-circle green btn-outline btn-sm dropdown-toggle' type = 'button' data-toggle = 'dropdown' data-hover = 'dropdown' data-close-others = 'true' > Actions" +
                    "<i class = 'fa fa-angle-down' > </i>" +
                    "</button>" +
                    "<ul class = 'dropdown-menu' role = 'menu' >" +
                    listActions +
                    "</ul>" +
                    "</div>" +
                    "</span>" : "") +
            "</span>" +
            "</div>" +
            "</div>" +
            "<div class = 'timeline-body-content' style='margin-top: 20px;'>" +
            "<span class = 'font-grey-cascade' >" +
            "<p style='word-wrap: break-word;'>" +
            status +
            "</p>" +
            linkContent +
            mediaContent +
            "</span>" +
            (feedJson.parentFeedInfo != null ? getFeedItem(feedJson.parentFeedInfo, action, true) : "") +
            "</div>" +
            "</div>" +
            (isShared == true ? "</div></div>" : "");
    return timeLineItem;
}

function getFriendItem(friendJson) {
    var name = friendJson.fn;
    var id = friendJson.utId;
    var proImageUrl = "assets/global/img/default-pp.jpg";
    if (friendJson.prIm != null && friendJson.prIm.length > 0) {
        proImageUrl = media_base_url + friendJson.prIm;
    }
    var timeLineItem =
            "<div class = 'timeline-body' style='margin-left: 0px;padding: 0px;margin-top: 0px;'>" +
            "<div class = 'timeline-body-head' >" +
            "<div class='timeline-badge' style='width: 70px;height: 70px;'>" +
            "<img class='timeline-badge-userpic' src='" + proImageUrl + "' style='height: 60px;width: 60px;'>" +
            "</div>" +
            "<div class = 'timeline-body-head-caption' style='float: none;'>" +
            "<a href = 'searchUser2.do?searchText=" + id + "' class = 'timeline-body-title font-blue-madison' >" +
            name +
            "</a>" +
            "<br>" +
            "<span class = 'timeline-body-time font-grey-cascade' style='margin-left: 0px;'>" +
            friendJson.ringID + "  " +
            "</span>" +
            "</div>" +
            "</div>" +
            "<div class = 'timeline-body-content' style='margin-top: 20px;'>" +
            "<span class = 'font-grey-cascade' >" +
            "<p style='word-wrap: break-word;'>" +
            "</p>" +
            "</span>" +
            "</div>" +
            "</div>";
    return timeLineItem;
}

function getTransactionType(transactionType) {
    var transactionTypeStr = "";
    switch (transactionType) {
        case 1:
            transactionTypeStr = "DAILY CHECK IN";
            break;
        case 2:
            transactionTypeStr = "DAILY TASK DWELLING TIME";
            break;
        case 3:
            transactionTypeStr = "GIFT";
            break;
        case 4:
            transactionTypeStr = "INVITE FRIEND";
            break;
        case 5:
            transactionTypeStr = "PROFILE COMPLETION";
            break;
        case 6:
            transactionTypeStr = "PURCHASE COIN";
            break;
        case 7:
            transactionTypeStr = "SHARE MEDIA";
            break;
        case 8:
            transactionTypeStr = "ADVERTISEMENT VIEW";
            break;
        case 9:
            transactionTypeStr = "CALL";
            break;
        case 10:
            transactionTypeStr = "DONATION";
            break;
        case 11:
            transactionTypeStr = "CASHOUT";
            break;
        case 12:
            transactionTypeStr = "GIFT CONVERSION";
            break;
        case 13:
            transactionTypeStr = "PRODUCT PURCHASE";
            break;
        case 14:
            transactionTypeStr = "LIVE SUBSCRIPTION FEE";
            break;
        case 15:
            transactionTypeStr = "CHANNEL SUBSCRIPTION FEE";
            break;
        default:
            break;
    }
    return transactionTypeStr;
}

function getToFrom(toFrom) {
    var val = "";
    if (toFrom === 1) {
        val = "Received";
    } else {
        val = "Sent";
    }
    return val;
}

function getCoinItem(coinJson) {
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var text = document.createTextNode(coinJson.amount);
    td.appendChild(text);
    tr.appendChild(td);

    td = document.createElement('td');
    text = document.createTextNode(getTransactionType(coinJson.transactionType));
    td.appendChild(text);
    tr.appendChild(td);

    td = document.createElement('td');
    text = document.createTextNode(getToFrom(coinJson.toOrFrom));
    td.appendChild(text);
    tr.appendChild(td);

    td = document.createElement('td');
    text = document.createTextNode(formateDate(coinJson.transactionDate, 0));
    td.appendChild(text);
    tr.appendChild(td);
    return tr;
}

function getMediaContent(contentType, albumDTO) {
    var mediaContent = "";
    switch (contentType) {
        case 2:
        case 3:
        {
            for (var j = 0; j < albumDTO.imgDTOs.length; j++) {
                mediaContent += "<img class='' src='" + media_base_url + albumDTO.imgDTOs[j].url + "' alt='' style='max-height: 650px;width: 100%;margin: 5px 20px 0 0;'>";
            }
            break;
        }
        case 4:
        {
            for (var j = 0; j < albumDTO.imgDTOs.length; j++) {
                mediaContent += "<img class='' src='" + media_base_url + albumDTO.imgDTOs[j].url + "' alt='' style='width: 45%;min-height: 100px;min-width: 100px;margin: 5px 20px 0 0;'>";
            }
            break;
        }
        case 5:
        case 6:
        case 7:
        {
            for (var j = 0; j < albumDTO.mDTOs.length; j++) {
                mediaContent += "<audio controls style='width: 100%' preload='metadata'>" +
                        "<source src='" + media_base_url + albumDTO.mDTOs[j].mUrl + "' type='audio/mp3'>" +
                        "Your browser does not support the audio element." +
                        "</audio>";
            }
            break;
        }
        case 8:
        case 9:
        case 10:
        {
            for (var j = 0; j < albumDTO.mDTOs.length; j++) {
                mediaContent += "<video controls style='width: 100%' preload='metadata' poster='" + media_base_url + albumDTO.mDTOs[j].tUrl + "'>" +
                        "<source src='" + media_base_url + albumDTO.mDTOs[j].mUrl + "' type='video/mp4'>" +
                        "Your browser does not support the video tag." +
                        "</video> ";
            }
            break;
        }
    }

    return mediaContent;
}

function statusWithTag(status, statusTags) {
    var tempStatus = "", statusTag;
    var prefixIndex = 0;
    for (var i = 0; i < statusTags.length; i++) {
        statusTag = "<a class='font-dark' href='searchUser2.do?searchText=" + statusTags[i].utId + "'>" + statusTags[i].fn + "</a>"
        tempStatus = status.slice(0, statusTags[i].pstn + prefixIndex);
        tempStatus += statusTag;
        tempStatus += status.slice(statusTags[i].pstn + prefixIndex, status.length);
        prefixIndex += statusTag.length;
        status = tempStatus;
    }
    return status;
}

function getContentTypeStr(type) {
    var contentType = "";
    switch (type) {
        case 1:
            contentType = "Text";
            break;
        case 2:
            contentType = "Single Image";
            break;
        case 3:
            contentType = "Single Image With Album";
            break;
        case 4:
            contentType = "Multiple Image With Album";
            break;
        case 5:
            contentType = "Single Audio";
            break;
        case 6:
            contentType = "Single Audio With Album";
            break;
        case 7:
            contentType = "Multiple Audio With Album";
            break;
        case 8:
            contentType = "Single Video";
            break;
        case 9:
            contentType = "Single Video With Album";
            break;
        case 10:
            contentType = "Multiple Video With Album";
            break;
        default:
            contentType = "Unknown";
            break;
    }
    return contentType;
}

function formateDate(value, type) {
    var monthNames = ["None",
        "Jan", "Feb", "Mar",
        "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct",
        "Nov", "Dec"
    ];
    if (value != null && !isNaN(value) && Number(value) > 0) {
        var date = new Date(value);
        var hour = date.getHours();
        var AM_OR_PM = hour > 11 ? "PM" : "AM";
        if (hour > 12) {
            hour -= 12;
        } else if (hour == 0) {
            hour = 12;
        }
        var minute = date.getMinutes();
        if (minute < 10) {
            minute = "0" + minute;
        }
        var day = date.getDate();
        if (day < 10) {
            day = "0" + day;
        }
        var month = date.getMonth() + 1;
        if (month < 10) {
            month = "0" + (month);
        }
        var year = date.getFullYear();
        if (type == 2) {
            return day + " " + monthNames[parseInt(month)] + " " + year + " " + hour + ":" + minute + AM_OR_PM;
        }
        return hour + ":" + minute + AM_OR_PM + " " + month + "/" + day + "/" + year;
    }
    return "";
}

function processRequest(reqType, param, action, makeFeatured) {
    showGrowlMessage("request send", 'info', 500);
    switch (parseInt(reqType)) {
        case 4:
        case 3:
            $.ajax({
                url: base_url + '/searchUserContacts/GetList?reqType=' + reqType + '&feedId=' + param["param1"] + '&liveTimeUUID=' + param["param2"] + '&actn=' + action + "&mkFetr=" + makeFeatured,
                type: 'GET',
                dataType: 'json',
                contentType: false,
                processData: false,
                cache: false,
                timeout: 600000,
                success: function (jsondata) {
                    console.log('Data: ' + JSON.stringify(jsondata));
                    var jsonObject = JSON.parse(JSON.stringify(jsondata));
                    if (jsonObject.sucs == true) {
                        showGrowlMessage(jsonObject.ms, 'success', 3000);
                    } else {
                        showGrowlMessage(jsonObject.ms, 'danger', 3000);
                    }
                },
                error: function (errorMsg) {
                    console.log('Data: ' + errorMsg);
                }
            });
            break;
        default :
            break;
    }
}

function changePassword(ringId, newPassword) {
    console.log(ringId + " " + newPassword);
    var el = $("#tab_1_3");
    showGrowlMessage("request send", 'info', 500);
    if (ringId == null || ringId.length == 0 || newPassword == null || newPassword.length == 0) {
        showGrowlMessage("Please check input", 'danger', 1000);
    } else {
        App.blockUI({
            target: el,
            animate: true,
            overlayColor: 'none'
        });
        $.ajax({
            url: base_url + '/searchUserContacts/GetList?reqType=6&ringId=' + ringId + '&newPassword=' + newPassword,
            type: 'GET',
            dataType: 'json',
            contentType: false,
            processData: false,
            cache: false,
            timeout: 600000,
            success: function (jsondata) {
                App.unblockUI(el);
                console.log('Data: ' + JSON.stringify(jsondata));
                var jsonObject = JSON.parse(JSON.stringify(jsondata));
                if (jsonObject.sucs == true) {
                    showGrowlMessage(jsonObject.ms, 'success', 3000);
                } else {
                    showGrowlMessage(jsonObject.ms, 'danger', 3000);
                }
            },
            error: function (errorMsg) {
                App.unblockUI(el);
                console.log('Data: ' + errorMsg);
            }
        });
    }
}

function showGrowlMessage(message, type, delay) {
    $.bootstrapGrowl(message, {
        ele: 'body', // which element to append to
        type: type, // (null, 'info', 'danger', 'success', 'warning')
        offset: {
            from: 'top',
            amount: 100
        }, // 'top', or 'bottom'
        align: 'left', // ('left', 'right', or 'center')
        width: 'auto', // (integer, or 'auto')
        delay: delay, // Time while the message will be displayed. It's not equivalent to the *demo* timeOut!
        allow_dismiss: true, // If true then will display a cross to close the popup.
        stackup_spacing: 10 // spacing between consecutively stacked growls.
    });
}

function getWalletInfo(utid) {
    console.log(utid);
    $.ajax({
        url: base_url + '/searchUserContacts/GetList?reqType=7&utId=' + utid,
        type: 'GET',
        dataType: 'json',
        contentType: false,
        processData: false,
        cache: false,
        timeout: 600000,
        success: function (jsondata) {
            console.log('Data: ' + JSON.stringify(jsondata));
            var jsonObject = JSON.parse(JSON.stringify(jsondata));
            if (jsonObject && jsonObject.hasOwnProperty("totalCoin")) {
                $("#totalCoin").text(jsonObject.totalCoin);
                $("#giftCoin").text(jsonObject.giftCoin);
                $("#myCoin").text(jsonObject.myCoin);
            }
            if (jsonObject && jsonObject.hasOwnProperty("blockedEarnedCoin")) {
                $("#blockedEarnedCoin").text(jsonObject.blockedEarnedCoin);
                $("#blockedGiftCoin").text(jsonObject.blockedGiftCoin);
            }
        },
        error: function (errorMsg) {
            console.log('Data: ' + errorMsg);
        }
    });

}

function editStatus() {
    showGrowlMessage("request send", 'info', 500);
    var expiredAfter = $('#expiredAfter').val(), select_unlimited = $('#select_unlimited').val();
    if (select_unlimited == "true" || select_unlimited == true) {
        expiredAfter = -1;
    }
    $.ajax({
        url: base_url + '/searchUserContacts/GetList?reqType=' + 9 + '&feedId=' + $('#feedId').val() + '&expiredAfter=' + expiredAfter + '&mediaurl=' + $('#mediaurl').val() + "&wallOwnerId=" + $('#wallOwnerId').val(),
        type: 'GET',
        dataType: 'json',
        contentType: false,
        processData: false,
        cache: false,
        timeout: 600000,
        success: function (jsondata) {
            console.log('Data: ' + JSON.stringify(jsondata));
            var jsonObject = JSON.parse(JSON.stringify(jsondata));
            if (jsonObject.sucs == true) {
                $('divforvalidity').hide();
                showGrowlMessage(jsonObject.ms, 'success', 3000);
                $('#basic').modal('hide');
            } else {
                $('divforvalidity').show();
                $('#msgforvalidity').text(jsonObject.ms);
                showGrowlMessage(jsonObject.ms, 'danger', 3000);
            }
        },
        error: function (errorMsg) {
            console.log('Data: ' + errorMsg);
        }
    });
}

function getParamData(param1, param2) {
    var jsonData = {};
    jsonData["param1"] = param1;
    jsonData["param2"] = param2;
    return jsonData;
}
