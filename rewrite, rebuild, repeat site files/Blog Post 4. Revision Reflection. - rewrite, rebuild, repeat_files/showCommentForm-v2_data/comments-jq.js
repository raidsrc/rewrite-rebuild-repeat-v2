(function(e){var t={};function a(o){if(t[o])return t[o].exports;var n=t[o]={exports:{},id:o,loaded:false};e[o].call(n.exports,n,n.exports,a);n.loaded=true;return n.exports}a.m=e;a.c=t;a.p="https://cdn2.editmysite.com/js/";a.p="https://"+window.ASSETS_BASE+"/js/"||a.p;return a(0)})({0:function(e,t,a){e.exports=a(602)},602:function(e,t){(function(e){var t="/weebly/publicBackend.php";var a={};window.submitComment=function(){var t=e("#commentSubmit");var n=e("#commentComment");var m=e("#commentName");var r=e("#errorMessage");var i=e("#captchaMarkup");if(t.hasClass("disabled")){return}if(!n.val().trim()){r.html(window._W.utl("html.weebly.libraries.comments-jq.error.missing_comments"));n.effect("highlight",{color:"#dd0000"},1e3);return}if(m.val().trim()){r.empty();a.postId=e("#commentPostId").val();a.name=m.val();a.email=e("#commentEmail").val()||"";a.website=e("#commentWebsite").val()||"";a.comment=n.val();a.userId=e("#userId").val();a.parentId=e("#parentId").val();a.notify=e("#commentNotify").prop("checked")?"1":"0";a.blogId=e("#blogId").val();if(window.CAPTCHA_REQUIRED==true){s(a)}else{t.prop("disabled",true);o(a)}}else{r.html(window._W.utl("html.weebly.libraries.comments-jq.error.missing_name"));m.effect("highlight",{color:"#dd0000"},1e3)}};function o(a){m();e.ajax(t,{type:"POST",data:{pos:"postcomment",postid:a.postId,user_id:a.userId,cookie:document.cookie,name:a.name,email:a.email,website:a.website,commentv2:a.comment,parentId:a.parentId,notify:a.notify,blogId:a.blogId,captcha_token:a.captcha_token},success:function(e){if(typeof e=="object"){if(e.result==false){if(e.error=="captcha"){d()}}}else{i(e)}},error:function(){n();c()}})}function n(){r(true)}function m(){r(false)}function r(t){t=t||false;e("#commentName,#commentEmail,#commentWebsite,#commentComment,#commentNotify").each(function(a,o){var n=e(o);var m=n.parent().parent();if(t){m.removeClass("field-disabled");n.prop("disabled",false)}else{m.addClass("field-disabled");n.prop("disabled",true)}});if(t){e("#commentSubmit").removeClass("disabled").find("span:first").html(window._W.utl("html.weebly.images.common.comments-jq_1"))}else{e("#commentSubmit").addClass("disabled").find("span:first").html(window._W.utl("html.weebly.images.common.comments-jq_2"))}}function i(t){if(t.match("%%SUCCESS%%")||t.match("%%MODERATE%%")){e("#commentName").val("");e("#commentEmail").val("");e("#commentWebsite").val("");e("#commentNotify").prop("checked",false);e("#commentComment").val("");e("#commentSubmit").prop("disabled",false);if(t.match("%%MODERATE%%")){n();e("#errorMessage").html("<b style='color: black;'>This comment is currently being held for moderation awaiting approval.</b>")}else{if(e("#commentUserInfo").length){window.top.location.href=document.referrer}else{e("#commentPostArea").slideToggle();e("#errorMessage").html("<b style='color: black;'>Your comment was successfully posted.</b>")}}}else{n();e("#commentSubmit").prop("disabled",false);if(t.match("ERROR:")){e("#errorMessage").html(t.replace("ERROR:",""))}else{e("#errorMessage").html("There was an error submitting your comment. Please try again")}}}function c(){e("#errorMessage").html("There was an error submitting your comment. Please try again")}function s(t){if(!e("#g-recaptcha").data("loaded")){window.grecaptcha.render("g-recaptcha",{sitekey:e("#g-recaptcha").data("sitekey"),"data-badge":"inline",callback:function(e){t.captcha_token=e;o(t)}},true);e("#g-recaptcha").data("loaded",true)}else{window.grecaptcha.reset()}window.grecaptcha.execute()}function l(){e("#captchaMarkup").hide();e("#commentInputs").show();e("#commentCancelCaptcha").hide()}window.hideCaptchaMarkup=l;function d(){if(e("#captchaMarkup").css("display")!="none"){e("#errorMessage").text("Please try again.");window.Recaptcha.reload();n();e("#commentSubmit").prop("disabled",false)}else{s();n()}}})(window.jQuery)}});