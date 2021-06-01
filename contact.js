//$(".contact_form").hide();
$("#contact").click(function () {
    $(".contact_form").fadeIn(300);
});

$("#nameAlert").hide();
$("#emailAlert").hide();
$("#titleAlert").hide();
$("#msgAlert").hide();

function nameCheck() {
    var name = $("#name");
    if ($(name).val().length < 1) {
        $("#nameAlert").show(100);
        $("#nameAlert").css({
            "color": "red",
            "font-size": "12px"
        });
        return false;
    }
    if (!isNan$(name).val()) {
        alert("이름에 숫자만 쓸수 없습니다.");
        return false;
    }
    if ($(id).val().indexOf(" ") != -1) {
        alert("이름에는 공백을 쓸수 없습니다.");
        return false;
    }
    return true;
}

function emailCheck() {
    var email = $("#email");
    if ($(email).val().length < 1) {
        $("#emailHelp").hide();
        $("#emailAlert").show(100);
        $("#emailAlert").css({
            "color": "red",
            "font-size": "12px"
        });
        return false;
    }
    return true;
}

function titleCheck() {
    let title = $("#title");
    if ($(title).val().length < 1) {
        $("#titleAlert").show(100);
        $("#titleAlert").css({
            "color": "red",
            "font-size": "12px"
        });
        return false;
    }
    return true;
}

function msgCheck() {
    let msg = $("#msg");
    if ($(msg).val().length < 1) {
        $("#msgAlert").show(100);
        $("#msgAlert").css({
            "color": "red",
            "font-size": "12px"
        });
        return false;
    }
    return true;
}

// function passCheck() {

//     var pass = $("#pass");
//     var pass_chk = $("#pass_chk");
//     var pass_result = $("#pass_result");

//     if ($(pass).val().length < 8 || $(pass).val().length > 32) {
//         $(pass_result).html("암호는 8글자 이상 32자 이하로 입력하세요");
//         //if(!$(pass_result).hasClass("false"))
//         $(pass_result).removeAttr("class");
//         $(pass_result).addClass("false");
//         return false;
//     }
//     var pattern = /[0-9]/;
//     if (!pattern.test($(pass).val())) {
//         $(pass_result).html("암호에 숫자하나를 반드시 입력하시겠습니다.");
//         $(pass_result).removeAttr("class");
//         $(pass_result).addClass("false");
//         return false;
//     }
//     pattern = /[!@#$%^&*()_\+\=\-\[\]\"\']/;
//     if (!pattern.test($(pass).val())) {
//         $(pass_result).html("암호에 특수문자 하나를 반드시 입력하시겠습니다.");
//         $(pass_result).removeAttr("class");
//         $(pass_result).addClass("false");
//         return false;
//     }
//     pattern = /[a-zA-Z]/;
//     if (!pattern.test($(pass).val())) {
//         $(pass_result).html("암호에 알파벳 하나를 반드시 입력하시겠습니다.");
//         $(pass_result).removeAttr("class");
//         $(pass_result).addClass("false");
//         return false;
//     }
//     pattern = /[\s]/;
//     if (pattern.test($(pass).val())) {
//         $(pass_result).html("암호에 공백을 넣으시면 안됩니다.");
//         $(pass_result).removeAttr("class");
//         $(pass_result).addClass("false");
//     }
//     if ($(pass).val() != $(pass_chk).val()) {
//         $(pass_result).html("입력하신 두 암호가 다릅니다.");
//         $(pass_result).removeAttr("class");
//         $(pass_result).addClass("false");
//         return false;
//     }
//     $(pass_result).html("암호가 정상적으로 입력되었습니다.");
//     $(pass_result).removeAttr("class");
//     $(pass_result).addClass("true");
//     return true;
// }


$(function () {
    $("form").submit(function (e) {
        if (!nameCheck()) e.preventDefault();
        if (!emailCheck()) e.preventDefault();
        if (!titleCheck()) e.preventDefault();
        if (!msgCheck()) e.preventDefault();
    });
});