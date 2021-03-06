import * as React from "react"

const myHTML = `<html lang="en" style=""
class=" no-flash no-applicationcache geolocation history postmessage svg websockets supports no-microdata localstorage sessionstorage websqldatabase svgfilters webworkers hashchange audio canvas canvastext video webgl cssgradients multiplebgs opacity rgba placeholder inlinesvg no-touchevents checked fontface generatedcontent no-hairline lastchild nthchild cssscrollbar hsla formvalidation no-localizednumber svgclippaths smil svgasimg textshadow cssanimations bgpositionxy backgroundsize bgsizecover borderimage borderradius boxshadow boxsizing csscolumns csscolumns-width csscolumns-span csscolumns-fill csscolumns-gap csscolumns-rule csscolumns-rulecolor csscolumns-rulestyle csscolumns-rulewidth csscolumns-breakbefore csscolumns-breakafter csscolumns-breakinside ellipsis flexbox flexboxlegacy cssreflections csstransforms csstransforms3d csstransitions no-forcetouch indexeddb indexeddb-deletedatabase csshyphens softhyphens softhyphensfind">

<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#" class="at-element-marker">
<script type="text/javascript" async="async"
    src="https://sstats.deloitte.com/b/ss/deloittecomnewplatformprod/10/JS-2.22.3-LBWB/s57113537875707?AQB=1&amp;ndh=1&amp;pf=1&amp;callback=s_c_il[1].doPostbacks&amp;et=1&amp;t=22%2F1%2F2022%209%3A18%3A49%202%20360&amp;cid.&amp;mf_us_salesforce.&amp;id=undefined&amp;as=1&amp;.mf_us_salesforce&amp;.cid&amp;d.&amp;nsid=0&amp;jsonv=1&amp;.d&amp;mid=62025709585969259440467742903371845304&amp;aamlh=9&amp;ce=UTF-8&amp;ns=deloitte&amp;fpCookieDomainPeriods=2&amp;pageName=%2Fuk%2Fen%2Fpages%2Fpublic-sector%2Farticles%2Fenabling-population-health&amp;g=https%3A%2F%2Fwww2.deloitte.com%2Fuk%2Fen%2Fpages%2Fpublic-sector%2Farticles%2Fenabling-population-health.html&amp;cc=USD&amp;events=event30%2Cevent166%2Cevent167&amp;products=%3B162319c7&amp;c1=uk&amp;c2=en&amp;c3=uk%3Ben&amp;c6=Not_Registered&amp;v7=%2Fuk%2Fen%2Fpages%2Fpublic-sector%2Farticles%2Fenabling-population-health&amp;c9=5104&amp;c17=%2Fuk%2Fen%2Fpages%2Fpublic-sector%2Farticles%2Fenabling-population-health&amp;c19=Deloitte&amp;c23=%7C0013000000M4ob6AAB&amp;v43=Enabling_Population_Health_%7C_Deloitte_UK&amp;v47=%2Fuk%2Fen%2Fpages%2Fpublic-sector%2Farticles%2Fenabling-population-health&amp;c50=v2.22.3%7CAppMeasurement%3A2.22.3&amp;v63=Enterprise%2C1474%2C103000%2Ctrue%2Ctrue%2Cfalse%2Cfalse%2C%2C8221%2C%2C57794030%2CAustin%20Community%20College%20Center%20For%20Public%20Policy%20and%20Political%20Studies&amp;v64=United%20States%2CTX%2CAustin%2CEducation%2C%2C57794030%2CAustin%20Community%20College%20Center%20For%20Public%20Policy%20and%20Political%20Studies&amp;c69=Launch-TMS&amp;v74=70.123.151.116&amp;v76=Austin%20Community%20College%20Center%20For%20Public%20Policy%20and%20Political%20Studies&amp;v195=%2Fuk%2Fen%2Fpages%2Fpublic-sector%2Farticles%2Fenabling-population-health&amp;pe=lnk_o&amp;pev2=Scroll%20Completed&amp;s=1920x1080&amp;c=24&amp;j=1.6&amp;v=N&amp;k=Y&amp;bw=1920&amp;bh=880&amp;mcorgid=5742550D515CABFF0A490D44%40AdobeOrg&amp;lrt=398&amp;AQE=1"></script>
<script type="text/javascript" async="async"
    src="https://sstats.deloitte.com/b/ss/deloittecomnewplatformprod/10/JS-2.22.3-LBWB/s58963472372803?AQB=1&amp;ndh=1&amp;pf=1&amp;callback=s_c_il[1].doPostbacks&amp;et=1&amp;t=22%2F1%2F2022%209%3A1%3A47%202%20360&amp;cid.&amp;mf_us_salesforce.&amp;id=undefined&amp;as=1&amp;.mf_us_salesforce&amp;.cid&amp;d.&amp;nsid=0&amp;jsonv=1&amp;.d&amp;mid=62025709585969259440467742903371845304&amp;aamlh=9&amp;ce=UTF-8&amp;ns=deloitte&amp;fpCookieDomainPeriods=2&amp;pageName=%2Fuk%2Fen%2Fpages%2Fpublic-sector%2Farticles%2Fenabling-population-health&amp;g=https%3A%2F%2Fwww2.deloitte.com%2Fuk%2Fen%2Fpages%2Fpublic-sector%2Farticles%2Fenabling-population-health.html&amp;cc=USD&amp;events=event89%2Cevent166%2Cevent167&amp;products=%3B162319c7&amp;c1=uk&amp;c2=en&amp;c3=uk%3Ben&amp;c6=Not_Registered&amp;v7=%2Fuk%2Fen%2Fpages%2Fpublic-sector%2Farticles%2Fenabling-population-health&amp;c9=5104&amp;c17=%2Fuk%2Fen%2Fpages%2Fpublic-sector%2Farticles%2Fenabling-population-health&amp;c19=Deloitte&amp;c23=%7C0013000000M4ob6AAB&amp;v43=Enabling_Population_Health_%7C_Deloitte_UK&amp;v47=%2Fuk%2Fen%2Fpages%2Fpublic-sector%2Farticles%2Fenabling-population-health&amp;c50=v2.22.3%7CAppMeasurement%3A2.22.3&amp;v63=Enterprise%2C1474%2C103000%2Ctrue%2Ctrue%2Cfalse%2Cfalse%2C%2C8221%2C%2C57794030%2CAustin%20Community%20College%20Center%20For%20Public%20Policy%20and%20Political%20Studies&amp;v64=United%20States%2CTX%2CAustin%2CEducation%2C%2C57794030%2CAustin%20Community%20College%20Center%20For%20Public%20Policy%20and%20Political%20Studies&amp;c69=Launch-TMS&amp;v74=70.123.151.116&amp;v76=Austin%20Community%20College%20Center%20For%20Public%20Policy%20and%20Political%20Studies&amp;v195=%2Fuk%2Fen%2Fpages%2Fpublic-sector%2Farticles%2Fenabling-population-health&amp;pe=lnk_o&amp;pev2=Scroll%20Mid%20Way&amp;s=1920x1080&amp;c=24&amp;j=1.6&amp;v=N&amp;k=Y&amp;bw=1920&amp;bh=880&amp;mcorgid=5742550D515CABFF0A490D44%40AdobeOrg&amp;lrt=347&amp;AQE=1"></script>
<style type="text/css">
    [uib-typeahead-popup].dropdown-menu {
        display: block;
    }
</style>
<style type="text/css">
    .uib-time input {
        width: 50px;
    }
</style>
<style type="text/css">
    .uib-datepicker .uib-title {
        width: 100%;
    }

    .uib-day button,
    .uib-month button,
    .uib-year button {
        min-width: 100%;
    }

    .uib-datepicker-popup.dropdown-menu {
        display: block;
    }

    .uib-button-bar {
        padding: 10px 9px 2px;
    }
</style>
<style type="text/css">
    .ng-animate.item:not(.left):not(.right) {
        -webkit-transition: 0s ease-in-out left;
        transition: 0s ease-in-out left
    }
</style>
<style type="text/css">
    @charset "UTF-8";

    [ng\:cloak],
    [ng-cloak],
    [data-ng-cloak],
    [x-ng-cloak],
    .ng-cloak,
    .x-ng-cloak,
    .ng-hide:not(.ng-hide-animate) {
        display: none !important;
    }

    ng\:form {
        display: block;
    }

    .ng-animate-shim {
        visibility: hidden;
    }

    .ng-anchor {
        position: absolute;
    }
</style>

<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">


<!-- Cookie compliance Consent Notice start 



<iframe src="javascript:void(0)" title="" style="width: 0px; height: 0px; border: 0px; display: none;"></iframe>
<meta data-jc="82" data-jc-version="r20220216">
<script async="" src="https://snap.licdn.com/li.lms-analytics/insight.old.min.js"></script>
<script async="" src="https://snap.licdn.com/li.lms-analytics/insight.old.min.js"></script>
<script data-jc="86"
    src="https://pagead2.googlesyndication.com/pagead/js/r20220216/r20110914/elements/html/omrhp.js"
    data-jc-version="r20220216"></script>
<script type="text/javascript" async="" src="https://static.hotjar.com/c/hotjar-1471381.js?sv=7"></script>
<script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script>
<script type="text/javascript" async="" src="https://snap.licdn.com/li.lms-analytics/insight.min.js"></script>
<script type="text/javascript" async="" src="https://snap.licdn.com/li.lms-analytics/insight.min.js"></script>
<script src="https://connect.facebook.net/signals/config/1683894614986854?v=2.9.52&amp;r=stable" async=""></script>
<script src="https://connect.facebook.net/signals/config/1529515683753284?v=2.9.52&amp;r=stable" async=""></script>
<script async="" src="https://connect.facebook.net/en_US/fbevents.js"></script>
<script type="text/javascript" async="" src="https://www.googleadservices.com/pagead/conversion_async.js"></script>
<script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script>
<script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-NXPZ5SQ&amp;l=deldataLayer"></script>
<script async="" src="//www.googletagmanager.com/gtm.js?id=GTM-5NRLPSW&amp;l=deldataLayer"></script>
<script type="text/plain" async="" src="https://snap.licdn.com/li.lms-analytics/insight.min.js"></script>
<script type="text/plain" async="" src="https://snap.licdn.com/li.lms-analytics/insight.min.js"></script>
<script async="" src="//static.ads-twitter.com/uwt.js"></script>
<script>
    // akam-sw.js install script version 1.3.6
    "serviceWorker" in navigator && "find" in [] && function () { var e = new Promise(function (e) { "complete" === document.readyState || !1 ? e() : (window.addEventListener("load", function () { e() }), setTimeout(function () { "complete" !== document.readyState && e() }, 1e4)) }), n = window.akamServiceWorkerInvoked, r = "1.3.6"; if (n) aka3pmLog("akam-setup already invoked"); else { window.akamServiceWorkerInvoked = !0, window.aka3pmLog = function () { window.akamServiceWorkerDebug && console.log.apply(console, arguments) }; function o(e) { (window.BOOMR_mq = window.BOOMR_mq || []).push(["addVar", { "sm.sw.s": e, "sm.sw.v": r }]) } var i = "/akam-sw.js", a = new Map; navigator.serviceWorker.addEventListener("message", function (e) { var n, r, o = e.data; if (o.isAka3pm) if (o.command) { var i = (n = o.command, (r = a.get(n)) && r.length > 0 ? r.shift() : null); i && i(e.data.response) } else if (o.commandToClient) switch (o.commandToClient) { case "enableDebug": window.akamServiceWorkerDebug || (window.akamServiceWorkerDebug = !0, aka3pmLog("Setup script debug enabled via service worker message"), v()); break; case "boomerangMQ": o.payload && (window.BOOMR_mq = window.BOOMR_mq || []).push(o.payload) }aka3pmLog("akam-sw message: " + JSON.stringify(e.data)) }); var t = function (e) { return new Promise(function (n) { var r, o; r = e.command, o = n, a.has(r) || a.set(r, []), a.get(r).push(o), navigator.serviceWorker.controller && (e.isAka3pm = !0, navigator.serviceWorker.controller.postMessage(e)) }) }, c = function (e) { return t({ command: "navTiming", navTiming: e }) }, s = null, m = {}, d = function () { var e = i; return s && (e += "?othersw=" + encodeURIComponent(s)), function (e, n) { return new Promise(function (r, i) { aka3pmLog("Registering service worker with URL: " + e), navigator.serviceWorker.register(e, n).then(function (e) { aka3pmLog("ServiceWorker registration successful with scope: ", e.scope), r(e), o(1) }).catch(function (e) { aka3pmLog("ServiceWorker registration failed: ", e), o(0), i(e) }) }) }(e, m) }, g = navigator.serviceWorker.__proto__.register; if (navigator.serviceWorker.__proto__.register = function (n, r) { return n.includes(i) ? g.call(this, n, r) : (aka3pmLog("Overriding registration of service worker for: " + n), s = new URL(n, window.location.href), m = r, navigator.serviceWorker.controller ? new Promise(function (n, r) { var o = navigator.serviceWorker.controller.scriptURL; if (o.includes(i)) { var a = encodeURIComponent(s); o.includes(a) ? (aka3pmLog("Cancelling registration as we already integrate other SW: " + s), navigator.serviceWorker.getRegistration().then(function (e) { n(e) })) : e.then(function () { aka3pmLog("Unregistering existing 3pm service worker"), navigator.serviceWorker.getRegistration().then(function (e) { e.unregister().then(function () { return d() }).then(function (e) { n(e) }).catch(function (e) { r(e) }) }) }) } else aka3pmLog("Cancelling registration as we already have akam-sw.js installed"), navigator.serviceWorker.getRegistration().then(function (e) { n(e) }) }) : g.call(this, n, r)) }, navigator.serviceWorker.controller) { var u = navigator.serviceWorker.controller.scriptURL; u.includes("/akam-sw.js") || u.includes("/akam-sw-preprod.js") || u.includes("/threepm-sw.js") || (aka3pmLog("Detected existing service worker. Removing and re-adding inside akam-sw.js"), s = new URL(u, window.location.href), e.then(function () { navigator.serviceWorker.getRegistration().then(function (e) { m = { scope: e.scope }, e.unregister(), d() }) })) } else e.then(function () { window.akamServiceWorkerPreprod && (i = "/akam-sw-preprod.js"), d() }); if (window.performance) { var w = window.performance.timing, l = w.responseEnd - w.responseStart; c(l) } e.then(function () { t({ command: "pageLoad" }) }); var k = !1; function v() { window.akamServiceWorkerDebug && !k && (k = !0, aka3pmLog("Initializing debug functions at window scope"), window.aka3pmInjectSwPolicy = function (e) { return t({ command: "updatePolicy", policy: e }) }, window.aka3pmDisableInjectedPolicy = function () { return t({ command: "disableInjectedPolicy" }) }, window.aka3pmDeleteInjectedPolicy = function () { return t({ command: "deleteInjectedPolicy" }) }, window.aka3pmGetStateAsync = function () { return t({ command: "getState" }) }, window.aka3pmDumpState = function () { aka3pmGetStateAsync().then(function (e) { aka3pmLog(JSON.stringify(e, null, "\t")) }) }, window.aka3pmInjectTiming = function (e) { return c(e) }, window.aka3pmUpdatePolicyFromNetwork = function () { return t({ command: "pullPolicyFromNetwork" }) }) } v() } }();</script>
<script>
    var OTGUID = "b94ba90c-4274-430e-b7d0-dc8bcf8d9b63";
</script>

<script src="https://www2.deloitte.com/content/dam/Deloitte/resources/js/CrossDomainConsentShare.js" data-document-language="true"
    type="text/javascript" charset="UTF-8"></script>
<script src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js" data-document-language="true"
    type="text/javascript" charset="UTF-8" data-domain-script="b94ba90c-4274-430e-b7d0-dc8bcf8d9b63"></script>




Cookie compliance Consent Notice end -->




<script>
    var dtmConfig = 'false';
    var siteCatConfig = 'false';
    // Added the below to fetch the Twine Social parameters        
    var twineSocialClientID = "MTY1ODcsUk9mSlVLWFdWQlZBTzdHWmFWQzVoRzlvTXd2c24wcjU%3D";
    var twineSocialAccountCode = "15-I7FFXT";
    var twineSocialGroupID = "306432072593";
</script>




<meta charset="utf-8">

<meta name="description"
    content="From our work with health systems both in the UK and internationally, we have identified four building blocks (infrastructure, insight, interventions and impacts) and nine critical success factors for achieving better Population Health Management (PHM).">


<link rel="canonical"
    href="https://www2.deloitte.com/uk/en/pages/public-sector/articles/enabling-population-health.html">

<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta property="fb:app_id" content="391573044299401">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Deloitte United Kingdom">
<meta property="og:url"
    content="https://www2.deloitte.com/uk/en/pages/public-sector/articles/enabling-population-health.html">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@DeloitteUK">
<meta name="twitter:url"
    content="https://www2.deloitte.com/uk/en/pages/public-sector/articles/enabling-population-health.html">

<title>Enabling Population Health</title>
<meta property="og:title" content="Enabling Population Health">
<meta name="twitter:title" content="Enabling Population Health">
<meta property="og:description"
    content="From our work with health systems both in the UK and internationally, we have identified four building blocks (infrastructure, insight, interventions and impacts) and nine critical success factors for achieving better Population Health Management (PHM).">
<meta name="twitter:description"
    content="From our work with health systems both in the UK and internationally, we have identified four building blocks (infrastructure, insight, interventions and impacts) and nine critical success factors for achieving better Population Health Management (PHM).">

<meta name="thumbnail"
    content="https://www2.deloitte.com/content/dam/Deloitte/uk/Images/promo_images/Campaign/public-sector/deloitte-uk-public-sector-enabling-population-health-700.png">


<meta property="og:image"
    content="https://www2.deloitte.com/content/dam/Deloitte/uk/Images/promo_images/Campaign/public-sector/deloitte-uk-public-sector-enabling-population-health-700.png">


<meta name="twitter:image"
    content="https://www2.deloitte.com/content/dam/Deloitte/uk/Images/promo_images/Campaign/public-sector/deloitte-uk-public-sector-enabling-population-health-700.png">






<script type="text/javascript"
    src="https://www2.deloitte.com/etc/designs/dcom/dcom-main/clientlibs-jquery.min.1494c0abbe501301e2ab9daecc6082a8.js"></script>






<link rel="icon" type="image/vnd.microsoft.icon" href="https://www2.deloitte.com/content/dam/resources/deloitte/icons/favicon.ico">
<link rel="shortcut icon" type="image/vnd.microsoft.icon" href="https://www2.deloitte.com/content/dam/resources/deloitte/icons/favicon.ico">
<link rel="apple-touch-icon" sizes="57x57" href="https://www2.deloitte.com/content/dam/resources/deloitte/icons/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="72x72" href="https://www2.deloitte.com/content/dam/resources/deloitte/icons/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="114x114" href="https://www2.deloitte.com/content/dam/resources/deloitte/icons/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="144x144" href="https://www2.deloitte.com/content/dam/resources/deloitte/icons/apple-icon-144x144.png">

<!-- Preloading OpenSans Fonts -->
<link rel="preload" href="https://www2.deloitte.com/etc/designs/dcom/assets/fonts/opensans/OpenSans-Regular-webfont.woff" as="font"
    type="font/woff" crossorigin="anonymous">
<link rel="preload" href="https://www2.deloitte.com/etc/designs/dcom/assets/fonts/opensans/OpenSans-Italic-webfont.woff" as="font"
    type="font/woff" crossorigin="anonymous">
<link rel="preload" href="https://www2.deloitte.com/etc/designs/dcom/assets/fonts/opensans/OpenSans-Semibold-webfont.woff" as="font"
    type="font/woff" crossorigin="anonymous">
<link rel="preload" href="https://www2.deloitte.com/etc/designs/dcom/assets/fonts/opensans/OpenSans-BoldItalic-webfont.woff" as="font"
    type="font/woff" crossorigin="anonymous">
<link rel="preload" href="https://www2.deloitte.com/etc/designs/dcom/assets/fonts/opensans/OpenSans-Bold-webfont.woff" as="font"
    type="font/woff" crossorigin="anonymous">
<link rel="preload" href="https://www2.deloitte.com/etc/designs/dcom/assets/fonts/opensans/OpenSans-SemiboldItalic-webfont.woff" as="font"
    type="font/woff" crossorigin="anonymous">

<meta name="msapplication-config" content="/content/dam/resources/deloitte/browserconfig.xml">




<script>
    function loadScript(scriptURL) {
        // load script
        var scriptTAG = document.createElement('script');
        scriptTAG.type = 'application/javascript';
        scriptTAG.async = true;
        scriptTAG.src = scriptURL;
        document.getElementsByTagName('head')[0].appendChild(scriptTAG);
    }

    function loadCSS(CSSURL) {
        // load css
        var linkTAG = document.createElement('link');
        linkTAG.rel = "stylesheet";
        linkTAG.type = 'text/css';
        linkTAG.href = CSSURL;
        document.getElementsByTagName('head')[0].appendChild(linkTAG);
    }
    if (!navigator.onLine) {
        loadScript("/etc/designs/dcom/dcom-main/clientlibs-jquery.min.js");
        loadScript("/etc/designs/dcom/dcom-main.min.js");
        loadScript("/etc/designs/dcom/dcom-main-footer.min.js");
        loadCSS("/etc/designs/dcom/dcom-main.min.css");
    }
</script>












<script type="text/javascript">

    var socialmediaKey = '';
    var mydeloitteAPIKey = '3_HV0IcvFjhy6GgPyQ7w3qEmNrAPxgl1dpOyt9qQ2ScGN4BClLORqK1R3ArbWkBW4v';
    var mydeloitteUserloginenable = 'on';
    var ccURLValue = 'https://sp1004f5ce.guided.ss-omtrdc.net/';
    var shareEnabled = 'on';
    var loginEnabled = '';
    var SOCIAL_SHARE_LINK = 'https://www2.deloitte.com/.html';
    var SOCIAL_SHARE_TITLE = 'From our work with health systems both in the UK and internationally, we have identified four building blocks (infrastructure, insight, interventions and impacts) and nine critical success factors for achieving better Population Health Management (PHM).';
    var isSiteCatalystConfig = 'false';
    var my_account_url = '/content/www/uk/en/pages/public-sector/articles/enabling-population-health.html';
    my_account_url = my_account_url.toLowerCase();
    var view_profile_url = '/gb/en/profile';
    view_profile_url = view_profile_url.toLowerCase();
    var SOCIAL_CURRENT_LOCALE = 'en_GB';
    var pageHashValue = '162319c7';
    var pageTitle = 'Enabling Population Health | Deloitte UK';
    var tempName = 'articlepage';
    var REMEMBER_ME = 'REMEMBER_ME';
    var pageType = '';
    var countryName = 'gb';
    var languageName = 'en';
    var SOCIAL_LANG = 'en';
    var SOCIAL_REGISTER_TEXT = 'SOCIAL_REGISTER_TEXT';
    var SOCIAL_LOGOUT_TEXT = 'SOCIAL_LOGOUT_TEXT';
    var SOCIAL_SHARE_LINK = 'SOCIAL_SHARE_LINK';
    var SOCIAL_SHARE_TITLE = 'SOCIAL_SHARE_TITLE';
    var SOCIAL_LOGIN_MESSAGE = 'SOCIAL_LOGIN_MESSAGE';
    var SOCIAL_LOGIN_ALTERNATE = 'SOCIAL_LOGIN_ALTERNATE';
    var SOCIAL_LOGIN_LABEL = 'SOCIAL_LOGIN';
    var SOCIAL_FORGOT_PASSWORD = 'SOCIAL_FORGOT_PASSWORD';
    var SOCIAL_DONT_HAVE_ACCOUNT = 'SOCIAL_DONT_HAVE_ACCOUNT';
    var SOCIAL_CLICK_HERE = 'SOCIAL_CLICK_HERE';
    var SOCIAL_SUBMIT = 'SOCIAL_SUBMIT';
    var SOCIAL_AUTHENTICATE_YOUR_ACCOUNT = 'SOCIAl_AUTHENTICATE_YOUR_ACCOUNT';
    var SOCIAL_MANDATORY_PASSWORD = 'SOCIAL_MANDATORY_PASSWORD';
    var SOCIAL_EMAIL = 'SOCIAL_EMAIL';
    var SOCIAL_REGISTRATION_FIRST_NAME = 'SOCIAL_REGISTRATION_FIRST_NAME';
    var SOCIAL_REGISTRATION_LAST_NAME = 'SOCIAL_REGISTRATION_LAST_NAME';
    var SOCIAL_REGISTRATION_PASSWORD = 'SOCIAL_REGISTRATION_PASSWORD';
    var SOCIAL_REGISTRATION_REENTER_PASSWORD = 'SOCIAL_REGISTRATION_REENTER_PASSWORD';
    var SOCIAL_REGISTRATION_AGREE_TOBE_CONTACTED = 'SOCIAL_REGISTRATION_AGREE_TOBE_CONTACTED';
    var SOCIAL_REGISTRATION_TERMS_OF_USE = 'SOCIAL_REGISTRATION_TERMS_OF_USE';
    var SOCIAL_ACCOUNT_EXISTS = 'SOCIAL_ACCOUNT_EXISTS';
    var SOCIAL_REGISTRATION_THANKYOU = 'SOCIAL_REGISTRATION_THANKYOU';
    var SOCIAL_REGISTRATION_CONFIRMATION_EMAIL = 'SOCIAL_REGISTRATION_CONFIRMATION_EMAIL';
    var SOCIAL_PASSWORD_NEEDS_TO_CHANGE = 'SOCIAL_REGISTRATION_CONFIRMATION_EMAIL';
    var SOCIAL_CURRENT_PASSWORD = 'SOCIAL_CURRENT_PASSWORD';
    var SOCIAL_CHOOSE_NEW_PASSWORD = 'SOCIAL_CHOOSE_NEW_PASSWORD';
    var SOCIAL_REENTER_NEW_PASSWORD = 'SOCIAL_REENTER_NEW_PASSWORD';
    var SOCIAL_MY_ACCOUNT_TEXT = 'SOCIAL_MY_ACCOUNT_TEXT';
    var SOCIAL_LOGIN_AGAIN = 'SOCIAL_LOGIN_AGAIN';
    var SOCIAL_REGISTER_WITH_PREFERRED_NETWROK = 'SOCIAL_REGISTER_WITH_PREFERRED_NETWROK';
    var SOCIAL_WHY_REGISTER_DELOITTE = 'SOCIAL_REGISTER_WITH_PREFERRED_NETWROK';
    var SOCIAL_FILL_INFO_BELOW = 'SOCIAL_FILL_INFO_BELOW';
    var SOCIAL_YES = 'SOCIAL_YES';
    var SOCIAL_NO = 'SOCIAL_NO';
    var SOCIAL_UNDERSTOOD = 'SOCIAL_UNDERSTOOD';
    var SOCIAL_HAVE_AN_ACCOUNT_ALREADY = 'SOCIAL_HAVE_AN_ACCOUNT_ALREADY';
    var SOCIAL_COMPLETE_REGISTRATION = 'SOCIAL_COMPLETE_REGISTRATION';
    var SOCIAL_WE_STILL_NEED_DETAILS = 'SOCIAL_WE_STILL_NEED_DETAILS';
    var SOCIAL_KEEP_ACCOUNT_SECURE = 'SOCIAL_KEEP_ACCOUNT_SECURE';
    var SOCIAL_EMAIL_FOUND = 'SOCIAL_EMAIL_FOUND';
    var SOCIAL_PROVIDE_PASSWORD_TO_LINK = 'SOCIAL_PROVIDE_PASSWORD_TO_LINK';
    var SOCIAL_OR = 'SOCIAL_OR';
    var SOCIAL_ENTER_TO_REST = 'SOCIAL_OR';
    var SOCIAL_LOGIN_WITH_DIFFERENT_ACC = 'SOCIAL_LOGIN_WITH_DIFFERENT_ACC';
    var SOCIAL_EMAIL_HASBEEN_SENT = 'SOCIAL_EMAIL_HASBEEN_SENT';
    var SOCIAL_VERIFY_CHECK_EMAIL = 'SOCIAL_VERIFY_CHECK_EMAIL';
    var SOCIAL_RESEND_VERIFICATION_EMAIL = 'SOCIAL_RESEND_VERIFICATION_EMAIL';
    var SOCIAL_THANKYOU_FOR_REGISTERING = 'SOCIAL_THANKYOU_FOR_REGISTERING';
    var SOCIAL_CONFIRMATION_EMAIL_SENT = 'SOCIAL_CONFIRMATION_EMAIL_SENT';
    var SOCIAL_CREATE_ACCOUNT = 'SOCIAL_CREATE_ACCOUNT';
    var mfLoginProviders = '';
    var mfShareProviders = 'Twitter,LinkedIn,Facebook,Email';
</script>



<script>

    if (/MSIE (8\.[\.0-9]{0,})|MSIE (7\.[\.0-9]{0,})|MSIE (6\.[\.0-9]{0,})/i.test(navigator.userAgent)) {
        window.location.href = "/uk/en/misc/nonsupportedbrowserpage.uk.en.pages.public-sector.articles.enabling-population-health.html";
    }
    var domain = 'https://www2.deloitte.com/';
    var domainKey = 'deloitte';
    var isEditMode = 'false';
    var isDesignMode = 'false';
    var isPreviewMode = 'false';
    var sc_currentPageName = '/uk/en/pages/public-sector/articles/enabling-population-health';
    var sc_currentPageHashValue = '162319c7';
    var sc_template = 'Deloitte_Article_Page';
    var sc_recCuratedPromos = '6320bd08,1f2dc6f7,1c3531d8,c66d1d36';
    var sc_recommArticle = 'Recommendations';
    var sc_recViewedPage = 'Recently viewed pages';
    var sc_featuredLink = 'Featured Link';
    var sc_channel = '/content/www/uk/en/pages';
    var hideFromRecommendations_v2 = 'false';
    var pagePathValue = '/uk/en/pages/public-sector/articles/enabling-population-health';
    var selectorString = '.';
    var siteSectionOverrideVal = '';
    var PAGE_NAME = "";
    var GOOGLE_MF_ACCOUNT = "";
    var GOOGLE_INCLUDE_GLOBAL = "";
    var RESULTS_FOR_LBL = "";
    var sc_secondLevelForProp5 = "";
    var temp_Name = 'articlepage';
    var isTempSite = false;
    var sc_secondLevel = "Public_Sector";
    var sc_thirdLevel = 'Articles';
    var sc_country = 'uk';
    var sc_language = 'en';
    var siteOverrideValueProp5 = 'public-sector';
    var sc_mfCountry = '';
    var sc_GatedOverlayEnabled = 'false';
    var sc_mfSite = 'Deloitte';
    var sc_gigyaId = "";

    if (siteSectionOverrideVal.length > 0 && (siteSectionOverrideVal.toUpperCase().trim() == 'NA')) {
        siteOverrideValueProp5 = '';
    } else if ((siteSectionOverrideVal.length > 0 && siteSectionOverrideVal.toUpperCase().trim() != 'NA')) {
        siteOverrideValueProp5 = siteSectionOverrideVal.toLowerCase().trim();
    } else if (siteSectionOverrideVal.length == 0) {
        if (temp_Name == 'genericerrorpage') {
            siteOverrideValueProp5 = '404_error';
        }
        else if (temp_Name == 'nonsupportedpage') {
            siteOverrideValueProp5 = 'not_supported';
        } else if ((temp_Name == 'rfpformpage') || (temp_Name == 'contactuspage') || (temp_Name == 'deloitteformstemplate')) {
            siteOverrideValueProp5 = 'forms';
        } else if ((temp_Name == 'searchResultsTemplate') || (temp_Name == 'internalSearchResultsTemplate')) {
            siteOverrideValueProp5 = 'search_results';
        } else if ((temp_Name == 'officedetailspage') || (temp_Name == 'officelocatorpage') || (temp_Name == 'globalofficedirectorypage')) {
            siteOverrideValueProp5 = 'office_information';
        } else if (temp_Name == 'companyinformationpage') {
            siteOverrideValueProp5 = 'legal';
        } else if (temp_Name == 'moreondeloittepage') {
            siteOverrideValueProp5 = 'company_information';
        } else if (temp_Name == 'pressreleasespagetemplate') {
            siteOverrideValueProp5 = 'press_releases';
        } else if ((temp_Name == 'fulltopicpage') || (temp_Name == 'articlepage') || (temp_Name == 'solutionpage') || (temp_Name == 'eventpage') || (temp_Name == 'careerpage')) {
            siteOverrideValueProp5 = 'public-sector';
        } else if (temp_Name == "memberfirmhomepage" || temp_Name == "globalhomepage") {
            siteOverrideValueProp5 = 'home';
        } else if (temp_Name == "thankyoupage") {
            siteOverrideValueProp5 = 'thank_you';
        } else if (temp_Name == "dynamiclisttemplate") {
            siteOverrideValueProp5 = 'dynamiclist';
        } else if (temp_Name == "htmlfragmentpage") {
            siteOverrideValueProp5 = 'landingpage';
        } else if (temp_Name == "blog-collection-template") {
            siteOverrideValueProp5 = 'blog_collection';
        } else if (temp_Name == "blog-post-template") {
            siteOverrideValueProp5 = 'blog-post';
        }
    }

    if (temp_Name == "memberfirmhomepage" || temp_Name == "globalhomepage") {
        sc_channel = 'Homepage';
    } else if (temp_Name == "thankyoupage") {
        sc_channel = 'Thankyou';
    }
    sc_secondLevelForProp5 = siteOverrideValueProp5;
    searchLocation = '//www2.deloitte.com/uk/en/misc/search.html';

    try {
        if (sessionStorage.getItem("gigyaIdInSession") != null) {
            sc_gigyaId = sessionStorage.getItem("gigyaIdInSession");
        }
    }
    catch (err) { console.log(err); }

</script>
<meta name="Author">











<script type="text/javascript">
    /*For checking external link in external dynamic promos*/
    function checkExternalLink(url) {
        var path = url.split("|");
        if (path[1] != undefined) {
            url = path[path.length - 1];
        }
        return url;
    }
</script>
<script type="text/javascript">
    var ccm_enabled
    var isTMP = false;
    var siteDomain = "";
    if (isTMP) {
        siteDomain = domain;
        if (siteDomain != "") {
            siteDomain = domain.slice(0, -1);
            if (siteDomain.indexOf(":") + 1) {
                siteDomain = siteDomain.substr(siteDomain.indexOf(":") + 1);
            }
        }
    }
</script>


<script>
    var base = document.createElement('base');
    base.href = window.location.href;
    document.getElementsByTagName('head')[0].appendChild(base);
</script>
<script type="text/javascript" async="" src="https://www2.deloitte.com//munchkin.marketo.net/161/munchkin.js"></script>
<base href="https://www2.deloitte.com/uk/en/pages/public-sector/articles/enabling-population-health.html">



<script type="text/javascript"></script>















<link rel="stylesheet" href="https://www2.deloitte.com/etc/designs/dcom/dcom-main.min.abfde2108a1d89a4ab13526dca99c70b.css" type="text/css">
<script type="text/javascript"
    src="https://www2.deloitte.com/etc.clientlibs/clientlibs/granite/utils.min.4a192b590a2c2926fb000264370c0588.js"></script>
<script src="https://cdn.cookielaw.org/scripttemplates/6.19.0/otBannerSdk.js" async=""
    type="text/javascript"></script>
<script type="text/javascript"
    src="https://www2.deloitte.com/etc.clientlibs/clientlibs/granite/jquery/granite.min.543d214c88dfa6f4a3233b630c82d875.js"></script>
<script type="text/javascript"
    src="https://www2.deloitte.com/etc.clientlibs/foundation/clientlibs/jquery.min.dd9b395c741ce2784096e26619e14910.js"></script>
<script type="text/javascript"
    src="https://www2.deloitte.com/etc.clientlibs/foundation/clientlibs/shared.min.9f3716b2c473fd53ab31b1caa53131a8.js"></script>
<script type="text/javascript" src="https://www2.deloitte.com/etc/designs/dcom/dcom-main.min.0c492729b901f5281e5d2a3393c9e27b.js"></script>





<script type="text/javascript">
    var memberFirmSNPURL = 'https://sp1004f5ce.guided.ss-omtrdc.net/';

    /* if current request is https (secure), then hitting the secure S&P interface by replacing http with https  */
    if (document.URL.indexOf('https') > -1) {
        memberFirmSNPURL = memberFirmSNPURL.replace("http://", "https://");
    }
    var currentPageTitle = 'Enabling Population Health | Deloitte UK';
    var homePageExclusionList = '162319c7';
    var contentPromosExclusionList = '162319c7';
    var pageProtocol = "https:";
</script>



<script language="JavaScript" type="text/javascript">
    var wcmMode = 'DISABLED';
    var emptyPromoMessage = 'There is currently no CCD data available to display in this promo';
    var contentPageExclusionList = '162319c7';
    var contentPageTagsString = '&quot;Public Sector Technology&quot;';
    var contentPageCuratedPromosTags = '';
    var moreTopicTagsURLHashValue = '285562b4 ';
    var templateType = 'contentpage';
</script>









<script type="text/javascript"
    src="https://www2.deloitte.com/etc/designs/dcom/contentpage-libs.min.724d84826f80dc9bb286ecf8a3efd711.js"></script>











<script>
    if (typeof (pageProtocol) !== "undefined" && pageProtocol != "mixed" && "www2.deloitte.com" === window.location.hostname && window.location.protocol != pageProtocol) {
        window.location.href = pageProtocol + window.location.href.substring(window.location.protocol.length);
    }
</script>








<script>(window.BOOMR_mq = window.BOOMR_mq || []).push(["addVar", { "rua.upush": "false", "rua.cpush": "false", "rua.upre": "false", "rua.cpre": "false", "rua.uprl": "false", "rua.cprl": "false", "rua.cprf": "false", "rua.trans": "SJ-198835a7-3b26-4368-b3f3-73179b830ac6", "rua.cook": "true", "rua.ims": "false", "rua.ufprl": "false", "rua.cfprl": "true", "rua.isuxp": "false", "rua.texp": "norulematch" }]);</script>
<script>!function () { function o(n, i) { if (n && i) for (var r in i) i.hasOwnProperty(r) && (void 0 === n[r] ? n[r] = i[r] : n[r].constructor === Object && i[r].constructor === Object ? o(n[r], i[r]) : n[r] = i[r]) } try { var n = decodeURIComponent("%7B%0A%09%22RT%22%3A%20%7B%0A%09%09%22cookie%22%3A%20%22%22%0A%09%7D%2C%0A%09%22Akamai%22%3A%20%7B%0A%09%09%22enabled%22%3A%20false%0A%09%7D%0A%7D"); if (n.length > 0 && window.JSON && "function" == typeof window.JSON.parse) { var i = JSON.parse(n); void 0 !== window.BOOMR_config ? o(window.BOOMR_config, i) : window.BOOMR_config = i } } catch (r) { window.console && "function" == typeof window.console.error && console.error("mPulse: Could not parse configuration", r) } }();</script>
<script>!function (a) { var e = "https://s.go-mpulse.net/boomerang/", t = "addEventListener"; if ("False" == "True") a.BOOMR_config = a.BOOMR_config || {}, a.BOOMR_config.PageParams = a.BOOMR_config.PageParams || {}, a.BOOMR_config.PageParams.pci = !0, e = "https://s2.go-mpulse.net/boomerang/"; if (window.BOOMR_API_key = "9JTXD-CNBZB-FG7SF-PEEED-N9JSF", function () { function n(e) { a.BOOMR_onload = e && e.timeStamp || (new Date).getTime() } if (!a.BOOMR || !a.BOOMR.version && !a.BOOMR.snippetExecuted) { a.BOOMR = a.BOOMR || {}, a.BOOMR.snippetExecuted = !0; var i, _, o, r = document.createElement("iframe"); if (a[t]) a[t]("load", n, !1); else if (a.attachEvent) a.attachEvent("onload", n); r.src = "javascript:void(0)", r.title = "", r.role = "presentation", (r.frameElement || r).style.cssText = "width:0;height:0;border:0;display:none;", o = document.getElementsByTagName("script")[0], o.parentNode.insertBefore(r, o); try { _ = r.contentWindow.document } catch (O) { i = document.domain, r.src = "javascript:var d=document.open();d.domain='" + i + "';void(0);", _ = r.contentWindow.document } _.open()._l = function () { var a = this.createElement("script"); if (i) this.domain = i; a.id = "boomr-if-as", a.src = e + "9JTXD-CNBZB-FG7SF-PEEED-N9JSF", BOOMR_lstart = (new Date).getTime(), this.body.appendChild(a) }, _.write("<bo" + 'dy onload="document._l();">'), _.close() } }(), "".length > 0) if (a && "performance" in a && a.performance && "function" == typeof a.performance.setResourceTimingBufferSize) a.performance.setResourceTimingBufferSize(); !function () { if (BOOMR = a.BOOMR || {}, BOOMR.plugins = BOOMR.plugins || {}, !BOOMR.plugins.AK) { var e = "true" == "true" ? 1 : 0, t = "cookiepresent", n = "eybybaa6a7gl2jqacqcgiaazqjrbj6oa-f-65da4f902-clienttons-s.akamaihd.net", i = "false" == "true" ? 2 : 1, _ = { "ak.v": "32", "ak.cp": "246442", "ak.ai": parseInt("147953", 10), "ak.ol": "0", "ak.cr": 29, "ak.ipv": 6, "ak.proto": "h2", "ak.rid": "3ae47cb3", "ak.r": 39728, "ak.a2": e, "ak.m": "dsca", "ak.n": "essl", "ak.bpcip": "2603:8080:1e07:ccbd::", "ak.cport": 59244, "ak.gh": "23.47.56.134", "ak.quicv": "", "ak.tlsv": "tls1.3", "ak.0rtt": "", "ak.csrc": "-", "ak.acc": "", "ak.t": "1645541824", "ak.ak": "hOBiQwZUYzCg5VSAfCLimQ==aP6H5lvETMyXRzYJVOoT2t1zxZ3VnsAZaynmN6u8BTsJGR6iqNt+QsyuUaCn3gtA5wD7/yB5dHv+D91DuZJMdsOjiJgP0Q6EiUOzClD8BlJnqAWO5v9wJ5WjGo8kPtfj66QtzVLSVfCkux97Q31momO5zoEnO70dz+H6zPXJbrZoRTAYQ77zU5fzvsSiCGxrolMwZYco1SNpaFmkIzoRzAD3Ju+n37Poi1Q6heGH7CqodkAXuacakCPO6SnGGbcpk7lPbQDnfMIVl6tAkFfs4M/GlBtubJOVECxs2xYl9qtEdVXtfGJahIwd36RLOknKkeYpdse7xpA0qKyq4JuTBoHvrf4l+qsJwJmKAdrAHYGQP621JukAivifHlqzAA9sePoMLp2/ovu1YR/uIMGwx2IsCwb9ix1UOXq4pklYHnI=", "ak.pv": "722", "ak.dpoabenc": "", "ak.tf": i }; if ("" !== t) _["ak.ruds"] = t; var o = { i: !1, av: function (e) { var t = "http.initiator"; if (e && (!e[t] || "spa_hard" === e[t])) _["ak.feo"] = void 0 !== a.aFeoApplied ? 1 : 0, BOOMR.addVar(_) }, rv: function () { var a = ["ak.bpcip", "ak.cport", "ak.cr", "ak.csrc", "ak.gh", "ak.ipv", "ak.m", "ak.n", "ak.ol", "ak.proto", "ak.quicv", "ak.tlsv", "ak.0rtt", "ak.r", "ak.acc", "ak.t", "ak.tf"]; BOOMR.removeVar(a) } }; BOOMR.plugins.AK = { akVars: _, akDNSPreFetchDomain: n, init: function () { if (!o.i) { var a = BOOMR.subscribe; a("before_beacon", o.av, null, null), a("onbeacon", o.rv, null, null), o.i = !0 } return this }, is_complete: function () { return !0 } } } }() }(window);</script>
<style>
    .extend-link[_ngcontent-htd-c19] {
        transition: none;
        color: #007cb0
    }

    @media print {
        .extend-link[_ngcontent-htd-c19] {
            color: #007cb0 !important
        }
    }

    .extend-link[_ngcontent-htd-c19]:hover {
        text-decoration: underline;
        transition: none
    }

    .extend-link[_ngcontent-htd-c19]:visited {
        color: #609
    }

    .extend-break-word[_ngcontent-htd-c19] {
        word-wrap: break-word;
        word-break: break-word
    }

    .extend-line[_ngcontent-htd-c19]:after {
        content: "";
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        right: 0;
        height: 45px;
        border-right: 1px solid #636363
    }

    .cmp-search-page[_ngcontent-htd-c19] {
        max-width: 1200px;
        background: #fff;
        padding: 30px 28px 0 25px;
        font-size: 16px;
        margin: 70px auto 1%;
        width: 85.5%
    }

    @media print {
        .cmp-search-page[_ngcontent-htd-c19] {
            padding: 0
        }
    }

    [dir=rtl][_nghost-htd-c19] .cmp-search-page[_ngcontent-htd-c19] .audible,
    [dir=rtl] [_nghost-htd-c19] .cmp-search-page[_ngcontent-htd-c19] .audible,
    [dir=rtl][_ngcontent-htd-c19] .cmp-search-page[_ngcontent-htd-c19] .audible {
        left: auto
    }

    @media screen and (max-width:1023px) {
        .cmp-search-page[_ngcontent-htd-c19] {
            padding: 30px 20px 0
        }
    }

    @media screen and (max-width:767px) {
        .cmp-search-page[_ngcontent-htd-c19] {
            width: 96%;
            padding: 0 20px;
            margin: 0 auto 10px
        }
    }

    .cmp-search-page__heading[_ngcontent-htd-c19] {
        margin-top: 40px
    }

    .cmp-search-page__title[_ngcontent-htd-c19] {
        word-wrap: break-word;
        word-break: break-word;
        font-weight: 600;
        font-size: 2em;
        margin-bottom: 1em;
        line-height: 1.2
    }

    .cmp-search-page__title[_ngcontent-htd-c19] strong[_ngcontent-htd-c19] {
        font-weight: 700
    }

    @media screen and (max-width:767px) {
        .cmp-search-page__title[_ngcontent-htd-c19] {
            font-size: 1.75em;
            line-height: 1.35em
        }
    }

    @media screen and (max-width:1023px) {
        .cmp-search-page__title[_ngcontent-htd-c19] {
            font-size: 1.75em
        }
    }

    @media screen and (max-width:767px) {
        .cmp-search-page__title[_ngcontent-htd-c19] {
            margin-bottom: .6em;
            padding: 0
        }
    }

    .cmp-search-page__placeholder[_ngcontent-htd-c19] {
        padding-bottom: 40px
    }

    @media screen and (max-width:1023px) {
        .cmp-search-page__placeholder[_ngcontent-htd-c19] {
            padding-bottom: 30px
        }
    }

    @media screen and (max-width:767px) {
        .cmp-search-page__placeholder[_ngcontent-htd-c19] {
            padding: 0 0 20px
        }
    }

    .cmp-search-page__facets[_ngcontent-htd-c19] {
        min-width: 240px;
        padding: 0 14px 0 20px
    }

    @media print {
        .cmp-search-page__facets[_ngcontent-htd-c19] {
            display: none
        }
    }

    @media screen and (max-width:1023px) {
        .cmp-search-page__facets[_ngcontent-htd-c19] {
            min-width: 200px
        }
    }

    @media screen and (max-width:767px) {
        .cmp-search-page__facets[_ngcontent-htd-c19] {
            min-width: 100%;
            position: sticky;
            top: 0;
            padding: 0
        }
    }

    @media print {
        .cmp-search-page__content[_ngcontent-htd-c19] {
            min-width: 100%
        }
    }

    @media screen and (max-width:1023px) {
        .cmp-search-page__content[_ngcontent-htd-c19] {
            padding-bottom: 30px
        }
    }

    @media screen and (max-width:767px) {
        .cmp-search-page__content[_ngcontent-htd-c19] {
            min-width: 100%;
            padding: 0 0 20px
        }
    }

    .cmp-search-page__content--center[_ngcontent-htd-c19] {
        text-align: center
    }

    .cmp-search-page__search[_ngcontent-htd-c19] {
        display: block;
        padding-left: 1em
    }

    [dir=rtl][_nghost-htd-c19] .cmp-search-page__search[_ngcontent-htd-c19],
    [dir=rtl] [_nghost-htd-c19] .cmp-search-page__search[_ngcontent-htd-c19] {
        padding: 0 1em 0 0
    }

    @media screen and (max-width:767px) {

        [dir=rtl][_nghost-htd-c19] .cmp-search-page__search[_ngcontent-htd-c19],
        [dir=rtl] [_nghost-htd-c19] .cmp-search-page__search[_ngcontent-htd-c19] {
            padding-right: 0
        }
    }

    [dir=rtl][_ngcontent-htd-c19] .cmp-search-page__search[_ngcontent-htd-c19] {
        padding: 0 1em 0 0
    }

    @media screen and (max-width:767px) {
        [dir=rtl][_ngcontent-htd-c19] .cmp-search-page__search[_ngcontent-htd-c19] {
            padding-right: 0
        }
    }

    @media print {
        .cmp-search-page__search[_ngcontent-htd-c19] {
            padding: 0
        }
    }

    @media screen and (max-width:1023px) {
        .cmp-search-page__search[_ngcontent-htd-c19] {
            padding-left: .5em
        }
    }

    @media screen and (max-width:767px) {
        .cmp-search-page__search[_ngcontent-htd-c19] {
            padding-left: 0
        }
    }

    .cmp-search-page[_ngcontent-htd-c19] .aem-Grid[_ngcontent-htd-c19] {
        display: flex
    }

    @media screen and (max-width:767px) {
        .cmp-search-page[_ngcontent-htd-c19] .aem-Grid[_ngcontent-htd-c19] {
            display: block;
            float: none
        }
    }

    .padding-0[_ngcontent-htd-c19] {
        padding: 0 !important
    }
</style>
<style>
    .extend-link[_ngcontent-htd-c37] {
        transition: none;
        color: #007cb0
    }

    @media print {
        .extend-link[_ngcontent-htd-c37] {
            color: #007cb0 !important
        }
    }

    .extend-link[_ngcontent-htd-c37]:hover {
        text-decoration: underline;
        transition: none
    }

    .extend-link[_ngcontent-htd-c37]:visited {
        color: #609
    }

    .extend-break-word[_ngcontent-htd-c37] {
        word-wrap: break-word;
        word-break: break-word
    }

    .extend-line[_ngcontent-htd-c37]:after {
        content: "";
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        right: 0;
        height: 45px;
        border-right: 1px solid #636363
    }

    [_nghost-htd-c37] {
        flex-grow: 1;
        z-index: 5;
        position: relative
    }

    .cmp-advanced-search[_ngcontent-htd-c37],
    [_nghost-htd-c37] {
        display: flex;
        justify-content: flex-end;
        height: 100%;
        min-height: 70px
    }

    .cmp-advanced-search[_ngcontent-htd-c37] {
        align-items: center;
        width: 100%;
        color: #fff;
        background: #000;
        z-index: 1;
        font-size: 10px
    }

    @media screen and (max-width:767px) {
        .cmp-advanced-search[_ngcontent-htd-c37] {
            width: auto
        }
    }

    .cmp-advanced-search--light[_ngcontent-htd-c37] {
        max-width: 470px;
        background: #fff;
        color: #53565a
    }

    .cmp-advanced-search--light[_ngcontent-htd-c37] .cmp-advanced-search__button--open[_ngcontent-htd-c37]:after,
    .cmp-advanced-search--light[_ngcontent-htd-c37] .cmp-advanced-search__facetsLabel[_ngcontent-htd-c37]:after {
        border-right: 1px solid #d0d0ce
    }

    .cmp-advanced-search--light[_ngcontent-htd-c37] .cmp-advanced-search__facetsLabel[_ngcontent-htd-c37] {
        margin-left: 0;
        padding: 0 1em
    }

    .cmp-advanced-search--light[_ngcontent-htd-c37] .cmp-advanced-search__close[_ngcontent-htd-c37] {
        display: none
    }

    @media screen and (max-width:767px) {
        .cmp-advanced-search--light[_ngcontent-htd-c37] .cmp-advanced-search__close[_ngcontent-htd-c37] {
            display: inline-flex
        }
    }

    .cmp-advanced-search--borderFluid[_ngcontent-htd-c37] .cmp-advanced-search__button[_ngcontent-htd-c37],
    .cmp-advanced-search--borderFluid[_ngcontent-htd-c37] .cmp-advanced-search__button--open[_ngcontent-htd-c37]:after,
    .cmp-advanced-search--borderFluid[_ngcontent-htd-c37] .cmp-advanced-search__button[_ngcontent-htd-c37]:after,
    .cmp-advanced-search--borderFluid[_ngcontent-htd-c37] .cmp-advanced-search__close[_ngcontent-htd-c37],
    .cmp-advanced-search--borderFluid[_ngcontent-htd-c37] .cmp-advanced-search__close--open[_ngcontent-htd-c37]:after,
    .cmp-advanced-search--borderFluid[_ngcontent-htd-c37] .cmp-advanced-search__close[_ngcontent-htd-c37]:after,
    .cmp-advanced-search--borderFluid[_ngcontent-htd-c37] .cmp-advanced-search__facetsLabel[_ngcontent-htd-c37],
    .cmp-advanced-search--borderFluid[_ngcontent-htd-c37] .cmp-advanced-search__facetsLabel--open[_ngcontent-htd-c37]:after,
    .cmp-advanced-search--borderFluid[_ngcontent-htd-c37] .cmp-advanced-search__facetsLabel[_ngcontent-htd-c37]:after {
        height: 100%
    }

    @media screen and (max-width:767px) {
        .cmp-advanced-search--open[_ngcontent-htd-c37] {
            position: absolute;
            width: 100%;
            max-width: 100%;
            left: 0;
            top: 0;
            height: 40px;
            min-height: 40px;
            margin-top: 15px
        }
    }

    .cmp-advanced-search--open[_ngcontent-htd-c37] .cmp-advanced-search__form[_ngcontent-htd-c37] {
        display: flex;
        width: 100%
    }

    .cmp-advanced-search--open[_ngcontent-htd-c37] .cmp-advanced-search__button--open[_ngcontent-htd-c37] {
        display: none
    }

    .cmp-advanced-search__form[_ngcontent-htd-c37] {
        display: none;
        align-items: center;
        background-color: rgba(208, 208, 206, .36);
        height: 100%;
        width: 100%;
        padding: 0 1px;
        box-sizing: border-box
    }

    .cmp-advanced-search__close[_ngcontent-htd-c37] {
        display: none;
        align-items: center;
        position: relative;
        margin: 0 0 0 .75em;
        padding: 0;
        font-size: 2.4em;
        background-color: transparent;
        border: none;
        color: currentColor
    }

    .cmp-advanced-search__close[_ngcontent-htd-c37]:focus {
        outline: thin dotted
    }

    [dir=rtl][_nghost-htd-c37] .cmp-advanced-search__close[_ngcontent-htd-c37],
    [dir=rtl] [_nghost-htd-c37] .cmp-advanced-search__close[_ngcontent-htd-c37] {
        margin: 0 .75em 0 0
    }

    [dir=rtl][_nghost-htd-c37] .cmp-advanced-search__close[_ngcontent-htd-c37]:after,
    [dir=rtl] [_nghost-htd-c37] .cmp-advanced-search__close[_ngcontent-htd-c37]:after {
        right: inherit;
        left: 0
    }

    [dir=rtl][_ngcontent-htd-c37] .cmp-advanced-search__close[_ngcontent-htd-c37] {
        margin: 0 .75em 0 0
    }

    [dir=rtl][_ngcontent-htd-c37] .cmp-advanced-search__close[_ngcontent-htd-c37]:after {
        right: inherit;
        left: 0
    }

    @media screen and (max-width:767px) {
        .cmp-advanced-search__close[_ngcontent-htd-c37] {
            display: inline-flex;
            margin-right: .25em
        }

        [dir=rtl][_nghost-htd-c37] .cmp-advanced-search__close[_ngcontent-htd-c37],
        [dir=rtl] [_nghost-htd-c37] .cmp-advanced-search__close[_ngcontent-htd-c37],
        [dir=rtl][_ngcontent-htd-c37] .cmp-advanced-search__close[_ngcontent-htd-c37] {
            margin: 0 .75em 0 .25em
        }
    }

    .cmp-advanced-search__close[_ngcontent-htd-c37] .icon-remove[_ngcontent-htd-c37] {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid;
        border-radius: 50%;
        width: 24px;
        height: 24px;
        font-size: 14px
    }

    .cmp-advanced-search__facets[_ngcontent-htd-c37] {
        position: relative;
        height: 100%;
        box-sizing: border-box
    }

    @media screen and (max-width:767px) {
        .cmp-advanced-search__facets[_ngcontent-htd-c37] {
            display: none
        }
    }

    .cmp-advanced-search__facetsLabel[_ngcontent-htd-c37] {
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0 .85em 0 .65em;
        margin-left: .65em;
        font-weight: 600;
        font-size: 1.4em;
        white-space: nowrap;
        color: currentColor;
        box-sizing: border-box
    }

    .cmp-advanced-search__facetsLabel[_ngcontent-htd-c37]:after {
        content: "";
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        right: 0;
        height: 45px;
        border-right: 1px solid #636363
    }

    [dir=rtl][_nghost-htd-c37] .cmp-advanced-search__facetsLabel[_ngcontent-htd-c37],
    [dir=rtl] [_nghost-htd-c37] .cmp-advanced-search__facetsLabel[_ngcontent-htd-c37] {
        padding: 0 .65em 0 .85em;
        margin: 0 .65em 0 0
    }

    [dir=rtl][_nghost-htd-c37] .cmp-advanced-search__facetsLabel[_ngcontent-htd-c37]:after,
    [dir=rtl] [_nghost-htd-c37] .cmp-advanced-search__facetsLabel[_ngcontent-htd-c37]:after {
        right: inherit;
        left: 0
    }

    [dir=rtl][_ngcontent-htd-c37] .cmp-advanced-search__facetsLabel[_ngcontent-htd-c37] {
        padding: 0 .65em 0 .85em;
        margin: 0 .65em 0 0
    }

    [dir=rtl][_ngcontent-htd-c37] .cmp-advanced-search__facetsLabel[_ngcontent-htd-c37]:after {
        right: inherit;
        left: 0
    }

    .cmp-advanced-search__facetsSelect[_ngcontent-htd-c37] {
        position: absolute;
        opacity: 0;
        left: 0;
        top: 0;
        height: 100%;
        font-size: 1.4em;
        max-width: 100%;
        width: 100%
    }

    .cmp-advanced-search__facetsSelect[_ngcontent-htd-c37]:focus+label[_ngcontent-htd-c37] {
        outline: thin dotted
    }

    .cmp-advanced-search__facetsArrow[_ngcontent-htd-c37] {
        margin-left: .5em;
        font-size: .8em
    }

    [dir=rtl][_nghost-htd-c37] .cmp-advanced-search__facetsArrow[_ngcontent-htd-c37],
    [dir=rtl] [_nghost-htd-c37] .cmp-advanced-search__facetsArrow[_ngcontent-htd-c37],
    [dir=rtl][_ngcontent-htd-c37] .cmp-advanced-search__facetsArrow[_ngcontent-htd-c37] {
        margin: 0 .5em 0 0
    }

    .cmp-advanced-search__field[_ngcontent-htd-c37] {
        display: flex;
        align-items: center;
        position: relative;
        height: 100%;
        width: 100%;
        min-height: inherit
    }

    .cmp-advanced-search__input[_ngcontent-htd-c37] {
        width: 230px;
        height: 40px;
        min-height: inherit;
        padding: .5em 15% .5em 3%;
        background: transparent;
        font-size: 1.6em;
        color: currentColor;
        border: none;
        box-sizing: border-box;
        border-radius: 0;
        flex-grow: 1
    }

    .cmp-advanced-search__input[_ngcontent-htd-c37]::-webkit-input-placeholder {
        color: currentColor
    }

    .cmp-advanced-search__input[_ngcontent-htd-c37]:-moz-placeholder,
    .cmp-advanced-search__input[_ngcontent-htd-c37]::-moz-placeholder {
        color: currentColor
    }

    .cmp-advanced-search__input[_ngcontent-htd-c37]:-ms-input-placeholder {
        color: currentColor
    }

    .cmp-advanced-search__input[_ngcontent-htd-c37]:focus {
        outline: thin dotted
    }

    .cmp-advanced-search__suggestion[_ngcontent-htd-c37] {
        position: absolute;
        top: 100%;
        width: 100%;
        left: 0;
        margin-top: 1px;
        text-align: left;
        background: #fff;
        box-shadow: 0 4px 4px rgba(0, 0, 0, .25)
    }

    [dir=rtl][_nghost-htd-c37] .cmp-advanced-search__suggestion[_ngcontent-htd-c37],
    [dir=rtl] [_nghost-htd-c37] .cmp-advanced-search__suggestion[_ngcontent-htd-c37],
    [dir=rtl][_ngcontent-htd-c37] .cmp-advanced-search__suggestion[_ngcontent-htd-c37] {
        text-align: right
    }

    .cmp-advanced-search__button[_ngcontent-htd-c37] {
        font-size: 2em;
        background-color: transparent;
        color: currentColor;
        padding: 0 .75em;
        height: 100%;
        min-height: inherit;
        box-sizing: border-box;
        border: none;
        margin-right: -1px;
        position: absolute;
        right: 0
    }

    @media screen and (max-width:767px) {
        .cmp-advanced-search__button[_ngcontent-htd-c37] {
            font-size: 2.4em
        }
    }

    .cmp-advanced-search__button[_ngcontent-htd-c37] .icon-search[_ngcontent-htd-c37] {
        display: inline-block;
        height: auto;
        width: auto;
        transform: translateY(-1px);
        font-size: .8em !important
    }

    .cmp-advanced-search__button[_ngcontent-htd-c37] .icon-search[_ngcontent-htd-c37]:before {
        display: inline-flex
    }

    .cmp-advanced-search__button[_ngcontent-htd-c37]:focus {
        border: 1px dashed #929292
    }

    .cmp-advanced-search__button--open[_ngcontent-htd-c37] {
        position: relative;
        display: flex;
        align-items: center;
        height: 40px;
        padding: 0 .45em;
        margin: 0 .3em
    }

    .cmp-advanced-search__button--open[_ngcontent-htd-c37]:after {
        content: "";
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        right: 0;
        height: 45px;
        border-right: 1px solid #636363;
        right: -8px
    }

    [dir=rtl][_nghost-htd-c37] .cmp-advanced-search__button--open[_ngcontent-htd-c37]:after,
    [dir=rtl] [_nghost-htd-c37] .cmp-advanced-search__button--open[_ngcontent-htd-c37]:after,
    [dir=rtl][_ngcontent-htd-c37] .cmp-advanced-search__button--open[_ngcontent-htd-c37]:after {
        display: none
    }

    @media screen and (max-width:767px) {
        .cmp-advanced-search__button--open[_ngcontent-htd-c37] {
            color: #97999b
        }
    }

    .cmp-advanced-search__button--open[_ngcontent-htd-c37] .icon-search[_ngcontent-htd-c37] {
        transform: translateY(0)
    }

    @media (-ms-high-contrast:active),
    (-ms-high-contrast:none) {
        .cmp-advanced-search[_ngcontent-htd-c37] {
            display: block;
            height: 70px
        }

        .cmp-advanced-search__field[_ngcontent-htd-c37] {
            display: block
        }

        .cmp-advanced-search--open[_ngcontent-htd-c37] .cmp-advanced-search__form[_ngcontent-htd-c37] {
            margin-top: 15px !important;
            max-height: 40px !important
        }
    }
</style>
<style>
    .extend-link[_ngcontent-htd-c36] {
        transition: none;
        color: #007cb0
    }

    @media print {
        .extend-link[_ngcontent-htd-c36] {
            color: #007cb0 !important
        }
    }

    .extend-link[_ngcontent-htd-c36]:hover {
        text-decoration: underline;
        transition: none
    }

    .extend-link[_ngcontent-htd-c36]:visited {
        color: #609
    }

    .extend-break-word[_ngcontent-htd-c36] {
        word-wrap: break-word;
        word-break: break-word
    }

    .extend-line[_ngcontent-htd-c36]:after {
        content: "";
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        right: 0;
        height: 45px;
        border-right: 1px solid #636363
    }

    .cmp-advanced-search-suggestion[_ngcontent-htd-c36] {
        margin: 0;
        max-height: 220px;
        overflow: auto
    }

    .cmp-advanced-search-suggestion__item[_ngcontent-htd-c36] {
        margin: 0;
        font-size: 1.4em;
        line-height: 2em;
        border: 1px solid #d0d0ce;
        border-top: none
    }

    .cmp-advanced-search-suggestion__link[_ngcontent-htd-c36] {
        word-wrap: break-word;
        word-break: break-word;
        display: block;
        padding: .25em .6em;
        font-size: 1em;
        color: #000;
        transition: none;
        box-sizing: border-box;
        cursor: pointer
    }

    .cmp-advanced-search-suggestion__link[_ngcontent-htd-c36] strong[_ngcontent-htd-c36] {
        font-weight: 600
    }

    .cmp-advanced-search-suggestion__link.active[_ngcontent-htd-c36],
    .cmp-advanced-search-suggestion__link[_ngcontent-htd-c36]:hover {
        background: #f6f6f5;
        background: #333;
        color: #fff
    }

    .cmp-advanced-search-suggestion__link[_ngcontent-htd-c36]:focus {
        outline: thin dotted
    }
</style>
<script type="text/javascript" async=""
    src="https://cdns.gigya.com/js/gigya.js?apiKey=3_HV0IcvFjhy6GgPyQ7w3qEmNrAPxgl1dpOyt9qQ2ScGN4BClLORqK1R3ArbWkBW4v&amp;services=socialize.share,accounts.screenset,socialize.shareCounts,socialize.simpleShare,socialize.reactions">{ lang: en }</script>
<style id="onetrust-style">
    #onetrust-banner-sdk {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%
    }

    #onetrust-banner-sdk .onetrust-vendors-list-handler {
        cursor: pointer;
        color: #1f96db;
        font-size: inherit;
        font-weight: bold;
        text-decoration: none;
        margin-left: 5px
    }

    #onetrust-banner-sdk .onetrust-vendors-list-handler:hover {
        color: #1f96db
    }

    #onetrust-banner-sdk:focus {
        outline: 2px solid #000;
        outline-offset: -2px
    }

    #onetrust-banner-sdk a:focus {
        outline: 2px solid #000
    }

    #onetrust-banner-sdk .ot-close-icon,
    #onetrust-pc-sdk .ot-close-icon,
    #ot-sync-ntfy .ot-close-icon {
        background-image: url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzQ4LjMzM3B4IiBoZWlnaHQ9IjM0OC4zMzNweCIgdmlld0JveD0iMCAwIDM0OC4zMzMgMzQ4LjMzNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzQ4LjMzMyAzNDguMzM0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBhdGggZmlsbD0iIzU2NTY1NiIgZD0iTTMzNi41NTksNjguNjExTDIzMS4wMTYsMTc0LjE2NWwxMDUuNTQzLDEwNS41NDljMTUuNjk5LDE1LjcwNSwxNS42OTksNDEuMTQ1LDAsNTYuODVjLTcuODQ0LDcuODQ0LTE4LjEyOCwxMS43NjktMjguNDA3LDExLjc2OWMtMTAuMjk2LDAtMjAuNTgxLTMuOTE5LTI4LjQxOS0xMS43NjlMMTc0LjE2NywyMzEuMDAzTDY4LjYwOSwzMzYuNTYzYy03Ljg0Myw3Ljg0NC0xOC4xMjgsMTEuNzY5LTI4LjQxNiwxMS43NjljLTEwLjI4NSwwLTIwLjU2My0zLjkxOS0yOC40MTMtMTEuNzY5Yy0xNS42OTktMTUuNjk4LTE1LjY5OS00MS4xMzksMC01Ni44NWwxMDUuNTQtMTA1LjU0OUwxMS43NzQsNjguNjExYy0xNS42OTktMTUuNjk5LTE1LjY5OS00MS4xNDUsMC01Ni44NDRjMTUuNjk2LTE1LjY4Nyw0MS4xMjctMTUuNjg3LDU2LjgyOSwwbDEwNS41NjMsMTA1LjU1NEwyNzkuNzIxLDExLjc2N2MxNS43MDUtMTUuNjg3LDQxLjEzOS0xNS42ODcsNTYuODMyLDBDMzUyLjI1OCwyNy40NjYsMzUyLjI1OCw1Mi45MTIsMzM2LjU1OSw2OC42MTF6Ii8+PC9nPjwvc3ZnPg==");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        height: 12px;
        width: 12px
    }

    #onetrust-banner-sdk .powered-by-logo,
    #onetrust-banner-sdk .ot-pc-footer-logo a,
    #onetrust-pc-sdk .powered-by-logo,
    #onetrust-pc-sdk .ot-pc-footer-logo a,
    #ot-sync-ntfy .powered-by-logo,
    #ot-sync-ntfy .ot-pc-footer-logo a {
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        height: 25px;
        width: 152px;
        display: block
    }

    #onetrust-banner-sdk h3 *,
    #onetrust-banner-sdk h4 *,
    #onetrust-banner-sdk h6 *,
    #onetrust-banner-sdk button *,
    #onetrust-banner-sdk a[data-parent-id] *,
    #onetrust-pc-sdk h3 *,
    #onetrust-pc-sdk h4 *,
    #onetrust-pc-sdk h6 *,
    #onetrust-pc-sdk button *,
    #onetrust-pc-sdk a[data-parent-id] *,
    #ot-sync-ntfy h3 *,
    #ot-sync-ntfy h4 *,
    #ot-sync-ntfy h6 *,
    #ot-sync-ntfy button *,
    #ot-sync-ntfy a[data-parent-id] * {
        font-size: inherit;
        font-weight: inherit;
        color: inherit
    }

    #onetrust-banner-sdk .ot-hide,
    #onetrust-pc-sdk .ot-hide,
    #ot-sync-ntfy .ot-hide {
        display: none !important
    }

    #onetrust-pc-sdk .ot-sdk-row .ot-sdk-column {
        padding: 0
    }

    #onetrust-pc-sdk .ot-sdk-container {
        padding-right: 0
    }

    #onetrust-pc-sdk .ot-sdk-row {
        flex-direction: initial;
        width: 100%
    }

    #onetrust-pc-sdk [type="checkbox"]:checked,
    #onetrust-pc-sdk [type="checkbox"]:not(:checked) {
        pointer-events: initial
    }

    #onetrust-pc-sdk [type="checkbox"]:disabled+label::before,
    #onetrust-pc-sdk [type="checkbox"]:disabled+label:after,
    #onetrust-pc-sdk [type="checkbox"]:disabled+label {
        pointer-events: none;
        opacity: 0.7
    }

    #onetrust-pc-sdk #vendor-list-content {
        transform: translate3d(0, 0, 0)
    }

    #onetrust-pc-sdk li input[type="checkbox"] {
        z-index: 1
    }

    #onetrust-pc-sdk li .ot-checkbox label {
        z-index: 2
    }

    #onetrust-pc-sdk li .ot-checkbox input[type="checkbox"] {
        height: auto;
        width: auto
    }

    #onetrust-pc-sdk li .host-title a,
    #onetrust-pc-sdk li .ot-host-name a,
    #onetrust-pc-sdk li .accordion-text,
    #onetrust-pc-sdk li .ot-acc-txt {
        z-index: 2;
        position: relative
    }

    #onetrust-pc-sdk input {
        margin: 3px 0.1ex
    }

    #onetrust-pc-sdk .toggle-always-active {
        opacity: 0.6;
        cursor: default
    }

    #onetrust-pc-sdk .pc-logo,
    #onetrust-pc-sdk .ot-pc-logo {
        height: 60px;
        width: 180px;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat
    }

    #onetrust-pc-sdk .ot-tooltip .ot-tooltiptext {
        visibility: hidden;
        width: 120px;
        background-color: #555;
        color: #fff;
        text-align: center;
        padding: 5px 0;
        border-radius: 6px;
        position: absolute;
        z-index: 1;
        bottom: 125%;
        left: 50%;
        margin-left: -60px;
        opacity: 0;
        transition: opacity 0.3s
    }

    #onetrust-pc-sdk .ot-tooltip .ot-tooltiptext::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #555 transparent transparent transparent
    }

    #onetrust-pc-sdk .ot-tooltip:hover .ot-tooltiptext {
        visibility: visible;
        opacity: 1
    }

    #onetrust-pc-sdk .ot-tooltip {
        position: relative;
        display: inline-block;
        z-index: 3
    }

    #onetrust-pc-sdk .ot-tooltip svg {
        color: grey;
        height: 20px;
        width: 20px
    }

    #onetrust-pc-sdk .screen-reader-only,
    #onetrust-pc-sdk .ot-scrn-rdr,
    .ot-sdk-cookie-policy .screen-reader-only,
    .ot-sdk-cookie-policy .ot-scrn-rdr {
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px
    }

    #onetrust-pc-sdk.ot-fade-in,
    .onetrust-pc-dark-filter.ot-fade-in,
    #onetrust-banner-sdk.ot-fade-in {
        animation-name: onetrust-fade-in;
        animation-duration: 400ms;
        animation-timing-function: ease-in-out
    }

    #onetrust-pc-sdk.ot-hide {
        display: none !important
    }

    .onetrust-pc-dark-filter.ot-hide {
        display: none !important
    }

    #ot-sdk-btn.ot-sdk-show-settings,
    #ot-sdk-btn.optanon-show-settings {
        color: #68b631;
        border: 1px solid #68b631;
        height: auto;
        white-space: normal;
        word-wrap: break-word;
        padding: 0.8em 2em;
        font-size: 0.8em;
        line-height: 1.2;
        cursor: pointer;
        -moz-transition: 0.1s ease;
        -o-transition: 0.1s ease;
        -webkit-transition: 1s ease;
        transition: 0.1s ease
    }

    #ot-sdk-btn.ot-sdk-show-settings:hover,
    #ot-sdk-btn.optanon-show-settings:hover {
        color: #fff;
        background-color: #68b631
    }

    .onetrust-pc-dark-filter {
        background: rgba(0, 0, 0, 0.5);
        z-index: 2147483646;
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0
    }

    @keyframes onetrust-fade-in {
        0% {
            opacity: 0
        }

        100% {
            opacity: 1
        }
    }

    @media only screen and (min-width: 426px) and (max-width: 896px) and (orientation: landscape) {
        #onetrust-pc-sdk p {
            font-size: 0.75em
        }
    }

    #onetrust-banner-sdk .banner-option-input:focus+label {
        outline: 1px solid #000;
        outline-style: auto
    }

    #onetrust-banner-sdk,
    #onetrust-pc-sdk,
    #ot-sdk-cookie-policy,
    #ot-sync-ntfy {
        font-size: 16px
    }

    #onetrust-banner-sdk *,
    #onetrust-banner-sdk ::after,
    #onetrust-banner-sdk ::before,
    #onetrust-pc-sdk *,
    #onetrust-pc-sdk ::after,
    #onetrust-pc-sdk ::before,
    #ot-sdk-cookie-policy *,
    #ot-sdk-cookie-policy ::after,
    #ot-sdk-cookie-policy ::before,
    #ot-sync-ntfy *,
    #ot-sync-ntfy ::after,
    #ot-sync-ntfy ::before {
        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: content-box
    }

    #onetrust-banner-sdk div,
    #onetrust-banner-sdk span,
    #onetrust-banner-sdk h1,
    #onetrust-banner-sdk h2,
    #onetrust-banner-sdk h3,
    #onetrust-banner-sdk h4,
    #onetrust-banner-sdk h5,
    #onetrust-banner-sdk h6,
    #onetrust-banner-sdk p,
    #onetrust-banner-sdk img,
    #onetrust-banner-sdk svg,
    #onetrust-banner-sdk button,
    #onetrust-banner-sdk section,
    #onetrust-banner-sdk a,
    #onetrust-banner-sdk label,
    #onetrust-banner-sdk input,
    #onetrust-banner-sdk ul,
    #onetrust-banner-sdk li,
    #onetrust-banner-sdk nav,
    #onetrust-banner-sdk table,
    #onetrust-banner-sdk thead,
    #onetrust-banner-sdk tr,
    #onetrust-banner-sdk td,
    #onetrust-banner-sdk tbody,
    #onetrust-banner-sdk .ot-main-content,
    #onetrust-banner-sdk .ot-toggle,
    #onetrust-banner-sdk #ot-content,
    #onetrust-banner-sdk #ot-pc-content,
    #onetrust-banner-sdk .checkbox,
    #onetrust-pc-sdk div,
    #onetrust-pc-sdk span,
    #onetrust-pc-sdk h1,
    #onetrust-pc-sdk h2,
    #onetrust-pc-sdk h3,
    #onetrust-pc-sdk h4,
    #onetrust-pc-sdk h5,
    #onetrust-pc-sdk h6,
    #onetrust-pc-sdk p,
    #onetrust-pc-sdk img,
    #onetrust-pc-sdk svg,
    #onetrust-pc-sdk button,
    #onetrust-pc-sdk section,
    #onetrust-pc-sdk a,
    #onetrust-pc-sdk label,
    #onetrust-pc-sdk input,
    #onetrust-pc-sdk ul,
    #onetrust-pc-sdk li,
    #onetrust-pc-sdk nav,
    #onetrust-pc-sdk table,
    #onetrust-pc-sdk thead,
    #onetrust-pc-sdk tr,
    #onetrust-pc-sdk td,
    #onetrust-pc-sdk tbody,
    #onetrust-pc-sdk .ot-main-content,
    #onetrust-pc-sdk .ot-toggle,
    #onetrust-pc-sdk #ot-content,
    #onetrust-pc-sdk #ot-pc-content,
    #onetrust-pc-sdk .checkbox,
    #ot-sdk-cookie-policy div,
    #ot-sdk-cookie-policy span,
    #ot-sdk-cookie-policy h1,
    #ot-sdk-cookie-policy h2,
    #ot-sdk-cookie-policy h3,
    #ot-sdk-cookie-policy h4,
    #ot-sdk-cookie-policy h5,
    #ot-sdk-cookie-policy h6,
    #ot-sdk-cookie-policy p,
    #ot-sdk-cookie-policy img,
    #ot-sdk-cookie-policy svg,
    #ot-sdk-cookie-policy button,
    #ot-sdk-cookie-policy section,
    #ot-sdk-cookie-policy a,
    #ot-sdk-cookie-policy label,
    #ot-sdk-cookie-policy input,
    #ot-sdk-cookie-policy ul,
    #ot-sdk-cookie-policy li,
    #ot-sdk-cookie-policy nav,
    #ot-sdk-cookie-policy table,
    #ot-sdk-cookie-policy thead,
    #ot-sdk-cookie-policy tr,
    #ot-sdk-cookie-policy td,
    #ot-sdk-cookie-policy tbody,
    #ot-sdk-cookie-policy .ot-main-content,
    #ot-sdk-cookie-policy .ot-toggle,
    #ot-sdk-cookie-policy #ot-content,
    #ot-sdk-cookie-policy #ot-pc-content,
    #ot-sdk-cookie-policy .checkbox,
    #ot-sync-ntfy div,
    #ot-sync-ntfy span,
    #ot-sync-ntfy h1,
    #ot-sync-ntfy h2,
    #ot-sync-ntfy h3,
    #ot-sync-ntfy h4,
    #ot-sync-ntfy h5,
    #ot-sync-ntfy h6,
    #ot-sync-ntfy p,
    #ot-sync-ntfy img,
    #ot-sync-ntfy svg,
    #ot-sync-ntfy button,
    #ot-sync-ntfy section,
    #ot-sync-ntfy a,
    #ot-sync-ntfy label,
    #ot-sync-ntfy input,
    #ot-sync-ntfy ul,
    #ot-sync-ntfy li,
    #ot-sync-ntfy nav,
    #ot-sync-ntfy table,
    #ot-sync-ntfy thead,
    #ot-sync-ntfy tr,
    #ot-sync-ntfy td,
    #ot-sync-ntfy tbody,
    #ot-sync-ntfy .ot-main-content,
    #ot-sync-ntfy .ot-toggle,
    #ot-sync-ntfy #ot-content,
    #ot-sync-ntfy #ot-pc-content,
    #ot-sync-ntfy .checkbox {
        font-family: inherit;
        font-weight: normal;
        -webkit-font-smoothing: auto;
        letter-spacing: normal;
        line-height: normal;
        padding: 0;
        margin: 0;
        height: auto;
        min-height: 0;
        max-height: none;
        width: auto;
        min-width: 0;
        max-width: none;
        border-radius: 0;
        border: none;
        clear: none;
        float: none;
        position: static;
        bottom: auto;
        left: auto;
        right: auto;
        top: auto;
        text-align: left;
        text-decoration: none;
        text-indent: 0;
        text-shadow: none;
        text-transform: none;
        white-space: normal;
        background: none;
        overflow: visible;
        vertical-align: baseline;
        visibility: visible;
        z-index: auto;
        box-shadow: none
    }

    #onetrust-banner-sdk label:before,
    #onetrust-banner-sdk label:after,
    #onetrust-banner-sdk .checkbox:after,
    #onetrust-banner-sdk .checkbox:before,
    #onetrust-pc-sdk label:before,
    #onetrust-pc-sdk label:after,
    #onetrust-pc-sdk .checkbox:after,
    #onetrust-pc-sdk .checkbox:before,
    #ot-sdk-cookie-policy label:before,
    #ot-sdk-cookie-policy label:after,
    #ot-sdk-cookie-policy .checkbox:after,
    #ot-sdk-cookie-policy .checkbox:before,
    #ot-sync-ntfy label:before,
    #ot-sync-ntfy label:after,
    #ot-sync-ntfy .checkbox:after,
    #ot-sync-ntfy .checkbox:before {
        content: "";
        content: none
    }

    #onetrust-banner-sdk .ot-sdk-container,
    #onetrust-pc-sdk .ot-sdk-container,
    #ot-sdk-cookie-policy .ot-sdk-container {
        position: relative;
        width: 100%;
        max-width: 100%;
        margin: 0 auto;
        padding: 0 20px;
        box-sizing: border-box
    }

    #onetrust-banner-sdk .ot-sdk-column,
    #onetrust-banner-sdk .ot-sdk-columns,
    #onetrust-pc-sdk .ot-sdk-column,
    #onetrust-pc-sdk .ot-sdk-columns,
    #ot-sdk-cookie-policy .ot-sdk-column,
    #ot-sdk-cookie-policy .ot-sdk-columns {
        width: 100%;
        float: left;
        box-sizing: border-box;
        padding: 0;
        display: initial
    }

    @media (min-width: 400px) {

        #onetrust-banner-sdk .ot-sdk-container,
        #onetrust-pc-sdk .ot-sdk-container,
        #ot-sdk-cookie-policy .ot-sdk-container {
            width: 90%;
            padding: 0
        }
    }

    @media (min-width: 550px) {

        #onetrust-banner-sdk .ot-sdk-container,
        #onetrust-pc-sdk .ot-sdk-container,
        #ot-sdk-cookie-policy .ot-sdk-container {
            width: 100%
        }

        #onetrust-banner-sdk .ot-sdk-column,
        #onetrust-banner-sdk .ot-sdk-columns,
        #onetrust-pc-sdk .ot-sdk-column,
        #onetrust-pc-sdk .ot-sdk-columns,
        #ot-sdk-cookie-policy .ot-sdk-column,
        #ot-sdk-cookie-policy .ot-sdk-columns {
            margin-left: 4%
        }

        #onetrust-banner-sdk .ot-sdk-column:first-child,
        #onetrust-banner-sdk .ot-sdk-columns:first-child,
        #onetrust-pc-sdk .ot-sdk-column:first-child,
        #onetrust-pc-sdk .ot-sdk-columns:first-child,
        #ot-sdk-cookie-policy .ot-sdk-column:first-child,
        #ot-sdk-cookie-policy .ot-sdk-columns:first-child {
            margin-left: 0
        }

        #onetrust-banner-sdk .ot-sdk-one.ot-sdk-column,
        #onetrust-banner-sdk .ot-sdk-one.ot-sdk-columns,
        #onetrust-pc-sdk .ot-sdk-one.ot-sdk-column,
        #onetrust-pc-sdk .ot-sdk-one.ot-sdk-columns,
        #ot-sdk-cookie-policy .ot-sdk-one.ot-sdk-column,
        #ot-sdk-cookie-policy .ot-sdk-one.ot-sdk-columns {
            width: 4.66666666667%
        }

        #onetrust-banner-sdk .ot-sdk-two.ot-sdk-columns,
        #onetrust-pc-sdk .ot-sdk-two.ot-sdk-columns,
        #ot-sdk-cookie-policy .ot-sdk-two.ot-sdk-columns {
            width: 13.3333333333%
        }

        #onetrust-banner-sdk .ot-sdk-three.ot-sdk-columns,
        #onetrust-pc-sdk .ot-sdk-three.ot-sdk-columns,
        #ot-sdk-cookie-policy .ot-sdk-three.ot-sdk-columns {
            width: 22%
        }

        #onetrust-banner-sdk .ot-sdk-four.ot-sdk-columns,
        #onetrust-pc-sdk .ot-sdk-four.ot-sdk-columns,
        #ot-sdk-cookie-policy .ot-sdk-four.ot-sdk-columns {
            width: 30.6666666667%
        }

        #onetrust-banner-sdk .ot-sdk-five.ot-sdk-columns,
        #onetrust-pc-sdk .ot-sdk-five.ot-sdk-columns,
        #ot-sdk-cookie-policy .ot-sdk-five.ot-sdk-columns {
            width: 39.3333333333%
        }

        #onetrust-banner-sdk .ot-sdk-six.ot-sdk-columns,
        #onetrust-pc-sdk .ot-sdk-six.ot-sdk-columns,
        #ot-sdk-cookie-policy .ot-sdk-six.ot-sdk-columns {
            width: 48%
        }

        #onetrust-banner-sdk .ot-sdk-seven.ot-sdk-columns,
        #onetrust-pc-sdk .ot-sdk-seven.ot-sdk-columns,
        #ot-sdk-cookie-policy .ot-sdk-seven.ot-sdk-columns {
            width: 56.6666666667%
        }

        #onetrust-banner-sdk .ot-sdk-eight.ot-sdk-columns,
        #onetrust-pc-sdk .ot-sdk-eight.ot-sdk-columns,
        #ot-sdk-cookie-policy .ot-sdk-eight.ot-sdk-columns {
            width: 65.3333333333%
        }

        #onetrust-banner-sdk .ot-sdk-nine.ot-sdk-columns,
        #onetrust-pc-sdk .ot-sdk-nine.ot-sdk-columns,
        #ot-sdk-cookie-policy .ot-sdk-nine.ot-sdk-columns {
            width: 74%
        }

        #onetrust-banner-sdk .ot-sdk-ten.ot-sdk-columns,
        #onetrust-pc-sdk .ot-sdk-ten.ot-sdk-columns,
        #ot-sdk-cookie-policy .ot-sdk-ten.ot-sdk-columns {
            width: 82.6666666667%
        }

        #onetrust-banner-sdk .ot-sdk-eleven.ot-sdk-columns,
        #onetrust-pc-sdk .ot-sdk-eleven.ot-sdk-columns,
        #ot-sdk-cookie-policy .ot-sdk-eleven.ot-sdk-columns {
            width: 91.3333333333%
        }

        #onetrust-banner-sdk .ot-sdk-twelve.ot-sdk-columns,
        #onetrust-pc-sdk .ot-sdk-twelve.ot-sdk-columns,
        #ot-sdk-cookie-policy .ot-sdk-twelve.ot-sdk-columns {
            width: 100%;
            margin-left: 0
        }

        #onetrust-banner-sdk .ot-sdk-one-third.ot-sdk-column,
        #onetrust-pc-sdk .ot-sdk-one-third.ot-sdk-column,
        #ot-sdk-cookie-policy .ot-sdk-one-third.ot-sdk-column {
            width: 30.6666666667%
        }

        #onetrust-banner-sdk .ot-sdk-two-thirds.ot-sdk-column,
        #onetrust-pc-sdk .ot-sdk-two-thirds.ot-sdk-column,
        #ot-sdk-cookie-policy .ot-sdk-two-thirds.ot-sdk-column {
            width: 65.3333333333%
        }

        #onetrust-banner-sdk .ot-sdk-one-half.ot-sdk-column,
        #onetrust-pc-sdk .ot-sdk-one-half.ot-sdk-column,
        #ot-sdk-cookie-policy .ot-sdk-one-half.ot-sdk-column {
            width: 48%
        }

        #onetrust-banner-sdk .ot-sdk-offset-by-one.ot-sdk-column,
        #onetrust-banner-sdk .ot-sdk-offset-by-one.ot-sdk-columns,
        #onetrust-pc-sdk .ot-sdk-offset-by-one.ot-sdk-column,
        #onetrust-pc-sdk .ot-sdk-offset-by-one.ot-sdk-columns,
        #ot-sdk-cookie-policy .ot-sdk-offset-by-one.ot-sdk-column,
        #ot-sdk-cookie-policy .ot-sdk-offset-by-one.ot-sdk-columns {
            margin-left: 8.66666666667%
        }

        #onetrust-banner-sdk .ot-sdk-offset-by-two.ot-sdk-column,
        #onetrust-banner-sdk .ot-sdk-offset-by-two.ot-sdk-columns,
        #onetrust-pc-sdk .ot-sdk-offset-by-two.ot-sdk-column,
        #onetrust-pc-sdk .ot-sdk-offset-by-two.ot-sdk-columns,
        #ot-sdk-cookie-policy .ot-sdk-offset-by-two.ot-sdk-column,
        #ot-sdk-cookie-policy .ot-sdk-offset-by-two.ot-sdk-columns {
            margin-left: 17.3333333333%
        }

        #onetrust-banner-sdk .ot-sdk-offset-by-three.ot-sdk-column,
        #onetrust-banner-sdk .ot-sdk-offset-by-three.ot-sdk-columns,
        #onetrust-pc-sdk .ot-sdk-offset-by-three.ot-sdk-column,
        #onetrust-pc-sdk .ot-sdk-offset-by-three.ot-sdk-columns,
        #ot-sdk-cookie-policy .ot-sdk-offset-by-three.ot-sdk-column,
        #ot-sdk-cookie-policy .ot-sdk-offset-by-three.ot-sdk-columns {
            margin-left: 26%
        }

        #onetrust-banner-sdk .ot-sdk-offset-by-four.ot-sdk-column,
        #onetrust-banner-sdk .ot-sdk-offset-by-four.ot-sdk-columns,
        #onetrust-pc-sdk .ot-sdk-offset-by-four.ot-sdk-column,
        #onetrust-pc-sdk .ot-sdk-offset-by-four.ot-sdk-columns,
        #ot-sdk-cookie-policy .ot-sdk-offset-by-four.ot-sdk-column,
        #ot-sdk-cookie-policy .ot-sdk-offset-by-four.ot-sdk-columns {
            margin-left: 34.6666666667%
        }

        #onetrust-banner-sdk .ot-sdk-offset-by-five.ot-sdk-column,
        #onetrust-banner-sdk .ot-sdk-offset-by-five.ot-sdk-columns,
        #onetrust-pc-sdk .ot-sdk-offset-by-five.ot-sdk-column,
        #onetrust-pc-sdk .ot-sdk-offset-by-five.ot-sdk-columns,
        #ot-sdk-cookie-policy .ot-sdk-offset-by-five.ot-sdk-column,
        #ot-sdk-cookie-policy .ot-sdk-offset-by-five.ot-sdk-columns {
            margin-left: 43.3333333333%
        }

        #onetrust-banner-sdk .ot-sdk-offset-by-six.ot-sdk-column,
        #onetrust-banner-sdk .ot-sdk-offset-by-six.ot-sdk-columns,
        #onetrust-pc-sdk .ot-sdk-offset-by-six.ot-sdk-column,
        #onetrust-pc-sdk .ot-sdk-offset-by-six.ot-sdk-columns,
        #ot-sdk-cookie-policy .ot-sdk-offset-by-six.ot-sdk-column,
        #ot-sdk-cookie-policy .ot-sdk-offset-by-six.ot-sdk-columns {
            margin-left: 52%
        }

        #onetrust-banner-sdk .ot-sdk-offset-by-seven.ot-sdk-column,
        #onetrust-banner-sdk .ot-sdk-offset-by-seven.ot-sdk-columns,
        #onetrust-pc-sdk .ot-sdk-offset-by-seven.ot-sdk-column,
        #onetrust-pc-sdk .ot-sdk-offset-by-seven.ot-sdk-columns,
        #ot-sdk-cookie-policy .ot-sdk-offset-by-seven.ot-sdk-column,
        #ot-sdk-cookie-policy .ot-sdk-offset-by-seven.ot-sdk-columns {
            margin-left: 60.6666666667%
        }

        #onetrust-banner-sdk .ot-sdk-offset-by-eight.ot-sdk-column,
        #onetrust-banner-sdk .ot-sdk-offset-by-eight.ot-sdk-columns,
        #onetrust-pc-sdk .ot-sdk-offset-by-eight.ot-sdk-column,
        #onetrust-pc-sdk .ot-sdk-offset-by-eight.ot-sdk-columns,
        #ot-sdk-cookie-policy .ot-sdk-offset-by-eight.ot-sdk-column,
        #ot-sdk-cookie-policy .ot-sdk-offset-by-eight.ot-sdk-columns {
            margin-left: 69.3333333333%
        }

        #onetrust-banner-sdk .ot-sdk-offset-by-nine.ot-sdk-column,
        #onetrust-banner-sdk .ot-sdk-offset-by-nine.ot-sdk-columns,
        #onetrust-pc-sdk .ot-sdk-offset-by-nine.ot-sdk-column,
        #onetrust-pc-sdk .ot-sdk-offset-by-nine.ot-sdk-columns,
        #ot-sdk-cookie-policy .ot-sdk-offset-by-nine.ot-sdk-column,
        #ot-sdk-cookie-policy .ot-sdk-offset-by-nine.ot-sdk-columns {
            margin-left: 78%
        }

        #onetrust-banner-sdk .ot-sdk-offset-by-ten.ot-sdk-column,
        #onetrust-banner-sdk .ot-sdk-offset-by-ten.ot-sdk-columns,
        #onetrust-pc-sdk .ot-sdk-offset-by-ten.ot-sdk-column,
        #onetrust-pc-sdk .ot-sdk-offset-by-ten.ot-sdk-columns,
        #ot-sdk-cookie-policy .ot-sdk-offset-by-ten.ot-sdk-column,
        #ot-sdk-cookie-policy .ot-sdk-offset-by-ten.ot-sdk-columns {
            margin-left: 86.6666666667%
        }

        #onetrust-banner-sdk .ot-sdk-offset-by-eleven.ot-sdk-column,
        #onetrust-banner-sdk .ot-sdk-offset-by-eleven.ot-sdk-columns,
        #onetrust-pc-sdk .ot-sdk-offset-by-eleven.ot-sdk-column,
        #onetrust-pc-sdk .ot-sdk-offset-by-eleven.ot-sdk-columns,
        #ot-sdk-cookie-policy .ot-sdk-offset-by-eleven.ot-sdk-column,
        #ot-sdk-cookie-policy .ot-sdk-offset-by-eleven.ot-sdk-columns {
            margin-left: 95.3333333333%
        }

        #onetrust-banner-sdk .ot-sdk-offset-by-one-third.ot-sdk-column,
        #onetrust-banner-sdk .ot-sdk-offset-by-one-third.ot-sdk-columns,
        #onetrust-pc-sdk .ot-sdk-offset-by-one-third.ot-sdk-column,
        #onetrust-pc-sdk .ot-sdk-offset-by-one-third.ot-sdk-columns,
        #ot-sdk-cookie-policy .ot-sdk-offset-by-one-third.ot-sdk-column,
        #ot-sdk-cookie-policy .ot-sdk-offset-by-one-third.ot-sdk-columns {
            margin-left: 34.6666666667%
        }

        #onetrust-banner-sdk .ot-sdk-offset-by-two-thirds.ot-sdk-column,
        #onetrust-banner-sdk .ot-sdk-offset-by-two-thirds.ot-sdk-columns,
        #onetrust-pc-sdk .ot-sdk-offset-by-two-thirds.ot-sdk-column,
        #onetrust-pc-sdk .ot-sdk-offset-by-two-thirds.ot-sdk-columns,
        #ot-sdk-cookie-policy .ot-sdk-offset-by-two-thirds.ot-sdk-column,
        #ot-sdk-cookie-policy .ot-sdk-offset-by-two-thirds.ot-sdk-columns {
            margin-left: 69.3333333333%
        }

        #onetrust-banner-sdk .ot-sdk-offset-by-one-half.ot-sdk-column,
        #onetrust-banner-sdk .ot-sdk-offset-by-one-half.ot-sdk-columns,
        #onetrust-pc-sdk .ot-sdk-offset-by-one-half.ot-sdk-column,
        #onetrust-pc-sdk .ot-sdk-offset-by-one-half.ot-sdk-columns,
        #ot-sdk-cookie-policy .ot-sdk-offset-by-one-half.ot-sdk-column,
        #ot-sdk-cookie-policy .ot-sdk-offset-by-one-half.ot-sdk-columns {
            margin-left: 52%
        }
    }

    #onetrust-banner-sdk h1,
    #onetrust-banner-sdk h2,
    #onetrust-banner-sdk h3,
    #onetrust-banner-sdk h4,
    #onetrust-banner-sdk h5,
    #onetrust-banner-sdk h6,
    #onetrust-pc-sdk h1,
    #onetrust-pc-sdk h2,
    #onetrust-pc-sdk h3,
    #onetrust-pc-sdk h4,
    #onetrust-pc-sdk h5,
    #onetrust-pc-sdk h6,
    #ot-sdk-cookie-policy h1,
    #ot-sdk-cookie-policy h2,
    #ot-sdk-cookie-policy h3,
    #ot-sdk-cookie-policy h4,
    #ot-sdk-cookie-policy h5,
    #ot-sdk-cookie-policy h6 {
        margin-top: 0;
        font-weight: 600;
        font-family: inherit
    }

    #onetrust-banner-sdk h1,
    #onetrust-pc-sdk h1,
    #ot-sdk-cookie-policy h1 {
        font-size: 1.5rem;
        line-height: 1.2
    }

    #onetrust-banner-sdk h2,
    #onetrust-pc-sdk h2,
    #ot-sdk-cookie-policy h2 {
        font-size: 1.5rem;
        line-height: 1.25
    }

    #onetrust-banner-sdk h3,
    #onetrust-pc-sdk h3,
    #ot-sdk-cookie-policy h3 {
        font-size: 1.5rem;
        line-height: 1.3
    }

    #onetrust-banner-sdk h4,
    #onetrust-pc-sdk h4,
    #ot-sdk-cookie-policy h4 {
        font-size: 1.5rem;
        line-height: 1.35
    }

    #onetrust-banner-sdk h5,
    #onetrust-pc-sdk h5,
    #ot-sdk-cookie-policy h5 {
        font-size: 1.5rem;
        line-height: 1.5
    }

    #onetrust-banner-sdk h6,
    #onetrust-pc-sdk h6,
    #ot-sdk-cookie-policy h6 {
        font-size: 1.5rem;
        line-height: 1.6
    }

    @media (min-width: 550px) {

        #onetrust-banner-sdk h1,
        #onetrust-pc-sdk h1,
        #ot-sdk-cookie-policy h1 {
            font-size: 1.5rem
        }

        #onetrust-banner-sdk h2,
        #onetrust-pc-sdk h2,
        #ot-sdk-cookie-policy h2 {
            font-size: 1.5rem
        }

        #onetrust-banner-sdk h3,
        #onetrust-pc-sdk h3,
        #ot-sdk-cookie-policy h3 {
            font-size: 1.5rem
        }

        #onetrust-banner-sdk h4,
        #onetrust-pc-sdk h4,
        #ot-sdk-cookie-policy h4 {
            font-size: 1.5rem
        }

        #onetrust-banner-sdk h5,
        #onetrust-pc-sdk h5,
        #ot-sdk-cookie-policy h5 {
            font-size: 1.5rem
        }

        #onetrust-banner-sdk h6,
        #onetrust-pc-sdk h6,
        #ot-sdk-cookie-policy h6 {
            font-size: 1.5rem
        }
    }

    #onetrust-banner-sdk p,
    #onetrust-pc-sdk p,
    #ot-sdk-cookie-policy p {
        margin: 0 0 1em 0;
        font-family: inherit;
        line-height: normal
    }

    #onetrust-banner-sdk a,
    #onetrust-pc-sdk a,
    #ot-sdk-cookie-policy a {
        color: #565656;
        text-decoration: underline
    }

    #onetrust-banner-sdk a:hover,
    #onetrust-pc-sdk a:hover,
    #ot-sdk-cookie-policy a:hover {
        color: #565656;
        text-decoration: none
    }

    #onetrust-banner-sdk .ot-sdk-button,
    #onetrust-banner-sdk button,
    #onetrust-pc-sdk .ot-sdk-button,
    #onetrust-pc-sdk button,
    #ot-sdk-cookie-policy .ot-sdk-button,
    #ot-sdk-cookie-policy button {
        margin-bottom: 1rem;
        font-family: inherit
    }

    #onetrust-banner-sdk .ot-sdk-button,
    #onetrust-banner-sdk button,
    #onetrust-banner-sdk input[type="submit"],
    #onetrust-banner-sdk input[type="reset"],
    #onetrust-banner-sdk input[type="button"],
    #onetrust-pc-sdk .ot-sdk-button,
    #onetrust-pc-sdk button,
    #onetrust-pc-sdk input[type="submit"],
    #onetrust-pc-sdk input[type="reset"],
    #onetrust-pc-sdk input[type="button"],
    #ot-sdk-cookie-policy .ot-sdk-button,
    #ot-sdk-cookie-policy button,
    #ot-sdk-cookie-policy input[type="submit"],
    #ot-sdk-cookie-policy input[type="reset"],
    #ot-sdk-cookie-policy input[type="button"] {
        display: inline-block;
        height: 38px;
        padding: 0 30px;
        color: #555;
        text-align: center;
        font-size: 0.9em;
        font-weight: 400;
        line-height: 38px;
        letter-spacing: 0.01em;
        text-decoration: none;
        white-space: nowrap;
        background-color: transparent;
        border-radius: 2px;
        border: 1px solid #bbb;
        cursor: pointer;
        box-sizing: border-box
    }

    #onetrust-banner-sdk .ot-sdk-button:hover,
    #onetrust-banner-sdk :not(.ot-leg-btn-container)>button:hover,
    #onetrust-banner-sdk input[type="submit"]:hover,
    #onetrust-banner-sdk input[type="reset"]:hover,
    #onetrust-banner-sdk input[type="button"]:hover,
    #onetrust-banner-sdk .ot-sdk-button:focus,
    #onetrust-banner-sdk :not(.ot-leg-btn-container)>button:focus,
    #onetrust-banner-sdk input[type="submit"]:focus,
    #onetrust-banner-sdk input[type="reset"]:focus,
    #onetrust-banner-sdk input[type="button"]:focus,
    #onetrust-pc-sdk .ot-sdk-button:hover,
    #onetrust-pc-sdk :not(.ot-leg-btn-container)>button:hover,
    #onetrust-pc-sdk input[type="submit"]:hover,
    #onetrust-pc-sdk input[type="reset"]:hover,
    #onetrust-pc-sdk input[type="button"]:hover,
    #onetrust-pc-sdk .ot-sdk-button:focus,
    #onetrust-pc-sdk :not(.ot-leg-btn-container)>button:focus,
    #onetrust-pc-sdk input[type="submit"]:focus,
    #onetrust-pc-sdk input[type="reset"]:focus,
    #onetrust-pc-sdk input[type="button"]:focus,
    #ot-sdk-cookie-policy .ot-sdk-button:hover,
    #ot-sdk-cookie-policy :not(.ot-leg-btn-container)>button:hover,
    #ot-sdk-cookie-policy input[type="submit"]:hover,
    #ot-sdk-cookie-policy input[type="reset"]:hover,
    #ot-sdk-cookie-policy input[type="button"]:hover,
    #ot-sdk-cookie-policy .ot-sdk-button:focus,
    #ot-sdk-cookie-policy :not(.ot-leg-btn-container)>button:focus,
    #ot-sdk-cookie-policy input[type="submit"]:focus,
    #ot-sdk-cookie-policy input[type="reset"]:focus,
    #ot-sdk-cookie-policy input[type="button"]:focus {
        color: #333;
        border-color: #888;
        opacity: 0.7
    }

    #onetrust-banner-sdk .ot-sdk-button:focus,
    #onetrust-banner-sdk :not(.ot-leg-btn-container)>button:focus,
    #onetrust-banner-sdk input[type="submit"]:focus,
    #onetrust-banner-sdk input[type="reset"]:focus,
    #onetrust-banner-sdk input[type="button"]:focus,
    #onetrust-pc-sdk .ot-sdk-button:focus,
    #onetrust-pc-sdk :not(.ot-leg-btn-container)>button:focus,
    #onetrust-pc-sdk input[type="submit"]:focus,
    #onetrust-pc-sdk input[type="reset"]:focus,
    #onetrust-pc-sdk input[type="button"]:focus,
    #ot-sdk-cookie-policy .ot-sdk-button:focus,
    #ot-sdk-cookie-policy :not(.ot-leg-btn-container)>button:focus,
    #ot-sdk-cookie-policy input[type="submit"]:focus,
    #ot-sdk-cookie-policy input[type="reset"]:focus,
    #ot-sdk-cookie-policy input[type="button"]:focus {
        outline: 2px solid #000
    }

    #onetrust-banner-sdk .ot-sdk-button.ot-sdk-button-primary,
    #onetrust-banner-sdk button.ot-sdk-button-primary,
    #onetrust-banner-sdk input[type="submit"].ot-sdk-button-primary,
    #onetrust-banner-sdk input[type="reset"].ot-sdk-button-primary,
    #onetrust-banner-sdk input[type="button"].ot-sdk-button-primary,
    #onetrust-pc-sdk .ot-sdk-button.ot-sdk-button-primary,
    #onetrust-pc-sdk button.ot-sdk-button-primary,
    #onetrust-pc-sdk input[type="submit"].ot-sdk-button-primary,
    #onetrust-pc-sdk input[type="reset"].ot-sdk-button-primary,
    #onetrust-pc-sdk input[type="button"].ot-sdk-button-primary,
    #ot-sdk-cookie-policy .ot-sdk-button.ot-sdk-button-primary,
    #ot-sdk-cookie-policy button.ot-sdk-button-primary,
    #ot-sdk-cookie-policy input[type="submit"].ot-sdk-button-primary,
    #ot-sdk-cookie-policy input[type="reset"].ot-sdk-button-primary,
    #ot-sdk-cookie-policy input[type="button"].ot-sdk-button-primary {
        color: #fff;
        background-color: #33c3f0;
        border-color: #33c3f0
    }

    #onetrust-banner-sdk .ot-sdk-button.ot-sdk-button-primary:hover,
    #onetrust-banner-sdk button.ot-sdk-button-primary:hover,
    #onetrust-banner-sdk input[type="submit"].ot-sdk-button-primary:hover,
    #onetrust-banner-sdk input[type="reset"].ot-sdk-button-primary:hover,
    #onetrust-banner-sdk input[type="button"].ot-sdk-button-primary:hover,
    #onetrust-banner-sdk .ot-sdk-button.ot-sdk-button-primary:focus,
    #onetrust-banner-sdk button.ot-sdk-button-primary:focus,
    #onetrust-banner-sdk input[type="submit"].ot-sdk-button-primary:focus,
    #onetrust-banner-sdk input[type="reset"].ot-sdk-button-primary:focus,
    #onetrust-banner-sdk input[type="button"].ot-sdk-button-primary:focus,
    #onetrust-pc-sdk .ot-sdk-button.ot-sdk-button-primary:hover,
    #onetrust-pc-sdk button.ot-sdk-button-primary:hover,
    #onetrust-pc-sdk input[type="submit"].ot-sdk-button-primary:hover,
    #onetrust-pc-sdk input[type="reset"].ot-sdk-button-primary:hover,
    #onetrust-pc-sdk input[type="button"].ot-sdk-button-primary:hover,
    #onetrust-pc-sdk .ot-sdk-button.ot-sdk-button-primary:focus,
    #onetrust-pc-sdk button.ot-sdk-button-primary:focus,
    #onetrust-pc-sdk input[type="submit"].ot-sdk-button-primary:focus,
    #onetrust-pc-sdk input[type="reset"].ot-sdk-button-primary:focus,
    #onetrust-pc-sdk input[type="button"].ot-sdk-button-primary:focus,
    #ot-sdk-cookie-policy .ot-sdk-button.ot-sdk-button-primary:hover,
    #ot-sdk-cookie-policy button.ot-sdk-button-primary:hover,
    #ot-sdk-cookie-policy input[type="submit"].ot-sdk-button-primary:hover,
    #ot-sdk-cookie-policy input[type="reset"].ot-sdk-button-primary:hover,
    #ot-sdk-cookie-policy input[type="button"].ot-sdk-button-primary:hover,
    #ot-sdk-cookie-policy .ot-sdk-button.ot-sdk-button-primary:focus,
    #ot-sdk-cookie-policy button.ot-sdk-button-primary:focus,
    #ot-sdk-cookie-policy input[type="submit"].ot-sdk-button-primary:focus,
    #ot-sdk-cookie-policy input[type="reset"].ot-sdk-button-primary:focus,
    #ot-sdk-cookie-policy input[type="button"].ot-sdk-button-primary:focus {
        color: #fff;
        background-color: #1eaedb;
        border-color: #1eaedb
    }

    #onetrust-banner-sdk input[type="email"],
    #onetrust-banner-sdk input[type="number"],
    #onetrust-banner-sdk input[type="search"],
    #onetrust-banner-sdk input[type="text"],
    #onetrust-banner-sdk input[type="tel"],
    #onetrust-banner-sdk input[type="url"],
    #onetrust-banner-sdk input[type="password"],
    #onetrust-banner-sdk textarea,
    #onetrust-banner-sdk select,
    #onetrust-pc-sdk input[type="email"],
    #onetrust-pc-sdk input[type="number"],
    #onetrust-pc-sdk input[type="search"],
    #onetrust-pc-sdk input[type="text"],
    #onetrust-pc-sdk input[type="tel"],
    #onetrust-pc-sdk input[type="url"],
    #onetrust-pc-sdk input[type="password"],
    #onetrust-pc-sdk textarea,
    #onetrust-pc-sdk select,
    #ot-sdk-cookie-policy input[type="email"],
    #ot-sdk-cookie-policy input[type="number"],
    #ot-sdk-cookie-policy input[type="search"],
    #ot-sdk-cookie-policy input[type="text"],
    #ot-sdk-cookie-policy input[type="tel"],
    #ot-sdk-cookie-policy input[type="url"],
    #ot-sdk-cookie-policy input[type="password"],
    #ot-sdk-cookie-policy textarea,
    #ot-sdk-cookie-policy select {
        height: 38px;
        padding: 6px 10px;
        background-color: #fff;
        border: 1px solid #d1d1d1;
        border-radius: 4px;
        box-shadow: none;
        box-sizing: border-box
    }

    #onetrust-banner-sdk input[type="email"],
    #onetrust-banner-sdk input[type="number"],
    #onetrust-banner-sdk input[type="search"],
    #onetrust-banner-sdk input[type="text"],
    #onetrust-banner-sdk input[type="tel"],
    #onetrust-banner-sdk input[type="url"],
    #onetrust-banner-sdk input[type="password"],
    #onetrust-banner-sdk textarea,
    #onetrust-pc-sdk input[type="email"],
    #onetrust-pc-sdk input[type="number"],
    #onetrust-pc-sdk input[type="search"],
    #onetrust-pc-sdk input[type="text"],
    #onetrust-pc-sdk input[type="tel"],
    #onetrust-pc-sdk input[type="url"],
    #onetrust-pc-sdk input[type="password"],
    #onetrust-pc-sdk textarea,
    #ot-sdk-cookie-policy input[type="email"],
    #ot-sdk-cookie-policy input[type="number"],
    #ot-sdk-cookie-policy input[type="search"],
    #ot-sdk-cookie-policy input[type="text"],
    #ot-sdk-cookie-policy input[type="tel"],
    #ot-sdk-cookie-policy input[type="url"],
    #ot-sdk-cookie-policy input[type="password"],
    #ot-sdk-cookie-policy textarea {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none
    }

    #onetrust-banner-sdk textarea,
    #onetrust-pc-sdk textarea,
    #ot-sdk-cookie-policy textarea {
        min-height: 65px;
        padding-top: 6px;
        padding-bottom: 6px
    }

    #onetrust-banner-sdk input[type="email"]:focus,
    #onetrust-banner-sdk input[type="number"]:focus,
    #onetrust-banner-sdk input[type="search"]:focus,
    #onetrust-banner-sdk input[type="text"]:focus,
    #onetrust-banner-sdk input[type="tel"]:focus,
    #onetrust-banner-sdk input[type="url"]:focus,
    #onetrust-banner-sdk input[type="password"]:focus,
    #onetrust-banner-sdk textarea:focus,
    #onetrust-banner-sdk select:focus,
    #onetrust-pc-sdk input[type="email"]:focus,
    #onetrust-pc-sdk input[type="number"]:focus,
    #onetrust-pc-sdk input[type="search"]:focus,
    #onetrust-pc-sdk input[type="text"]:focus,
    #onetrust-pc-sdk input[type="tel"]:focus,
    #onetrust-pc-sdk input[type="url"]:focus,
    #onetrust-pc-sdk input[type="password"]:focus,
    #onetrust-pc-sdk textarea:focus,
    #onetrust-pc-sdk select:focus,
    #ot-sdk-cookie-policy input[type="email"]:focus,
    #ot-sdk-cookie-policy input[type="number"]:focus,
    #ot-sdk-cookie-policy input[type="search"]:focus,
    #ot-sdk-cookie-policy input[type="text"]:focus,
    #ot-sdk-cookie-policy input[type="tel"]:focus,
    #ot-sdk-cookie-policy input[type="url"]:focus,
    #ot-sdk-cookie-policy input[type="password"]:focus,
    #ot-sdk-cookie-policy textarea:focus,
    #ot-sdk-cookie-policy select:focus {
        border: 1px solid #000;
        outline: 0
    }

    #onetrust-banner-sdk label,
    #onetrust-banner-sdk legend,
    #onetrust-pc-sdk label,
    #onetrust-pc-sdk legend,
    #ot-sdk-cookie-policy label,
    #ot-sdk-cookie-policy legend {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 600
    }

    #onetrust-banner-sdk fieldset,
    #onetrust-pc-sdk fieldset,
    #ot-sdk-cookie-policy fieldset {
        padding: 0;
        border-width: 0
    }

    #onetrust-banner-sdk input[type="checkbox"],
    #onetrust-banner-sdk input[type="radio"],
    #onetrust-pc-sdk input[type="checkbox"],
    #onetrust-pc-sdk input[type="radio"],
    #ot-sdk-cookie-policy input[type="checkbox"],
    #ot-sdk-cookie-policy input[type="radio"] {
        display: inline
    }

    #onetrust-banner-sdk label>.label-body,
    #onetrust-pc-sdk label>.label-body,
    #ot-sdk-cookie-policy label>.label-body {
        display: inline-block;
        margin-left: 0.5rem;
        font-weight: normal
    }

    #onetrust-banner-sdk ul,
    #onetrust-pc-sdk ul,
    #ot-sdk-cookie-policy ul {
        list-style: circle inside
    }

    #onetrust-banner-sdk ol,
    #onetrust-pc-sdk ol,
    #ot-sdk-cookie-policy ol {
        list-style: decimal inside
    }

    #onetrust-banner-sdk ol,
    #onetrust-banner-sdk ul,
    #onetrust-pc-sdk ol,
    #onetrust-pc-sdk ul,
    #ot-sdk-cookie-policy ol,
    #ot-sdk-cookie-policy ul {
        padding-left: 0;
        margin-top: 0
    }

    #onetrust-banner-sdk ul ul,
    #onetrust-banner-sdk ul ol,
    #onetrust-banner-sdk ol ol,
    #onetrust-banner-sdk ol ul,
    #onetrust-pc-sdk ul ul,
    #onetrust-pc-sdk ul ol,
    #onetrust-pc-sdk ol ol,
    #onetrust-pc-sdk ol ul,
    #ot-sdk-cookie-policy ul ul,
    #ot-sdk-cookie-policy ul ol,
    #ot-sdk-cookie-policy ol ol,
    #ot-sdk-cookie-policy ol ul {
        margin: 1.5rem 0 1.5rem 3rem;
        font-size: 90%
    }

    #onetrust-banner-sdk li,
    #onetrust-pc-sdk li,
    #ot-sdk-cookie-policy li {
        margin-bottom: 1rem
    }

    #onetrust-banner-sdk code,
    #onetrust-pc-sdk code,
    #ot-sdk-cookie-policy code {
        padding: 0.2rem 0.5rem;
        margin: 0 0.2rem;
        font-size: 90%;
        white-space: nowrap;
        background: #f1f1f1;
        border: 1px solid #e1e1e1;
        border-radius: 4px
    }

    #onetrust-banner-sdk pre>code,
    #onetrust-pc-sdk pre>code,
    #ot-sdk-cookie-policy pre>code {
        display: block;
        padding: 1rem 1.5rem;
        white-space: pre
    }

    #onetrust-banner-sdk th,
    #onetrust-banner-sdk td,
    #onetrust-pc-sdk th,
    #onetrust-pc-sdk td,
    #ot-sdk-cookie-policy th,
    #ot-sdk-cookie-policy td {
        padding: 12px 15px;
        text-align: left;
        border-bottom: 1px solid #e1e1e1
    }

    #onetrust-banner-sdk .ot-sdk-u-full-width,
    #onetrust-pc-sdk .ot-sdk-u-full-width,
    #ot-sdk-cookie-policy .ot-sdk-u-full-width {
        width: 100%;
        box-sizing: border-box
    }

    #onetrust-banner-sdk .ot-sdk-u-max-full-width,
    #onetrust-pc-sdk .ot-sdk-u-max-full-width,
    #ot-sdk-cookie-policy .ot-sdk-u-max-full-width {
        max-width: 100%;
        box-sizing: border-box
    }

    #onetrust-banner-sdk .ot-sdk-u-pull-right,
    #onetrust-pc-sdk .ot-sdk-u-pull-right,
    #ot-sdk-cookie-policy .ot-sdk-u-pull-right {
        float: right
    }

    #onetrust-banner-sdk .ot-sdk-u-pull-left,
    #onetrust-pc-sdk .ot-sdk-u-pull-left,
    #ot-sdk-cookie-policy .ot-sdk-u-pull-left {
        float: left
    }

    #onetrust-banner-sdk hr,
    #onetrust-pc-sdk hr,
    #ot-sdk-cookie-policy hr {
        margin-top: 3rem;
        margin-bottom: 3.5rem;
        border-width: 0;
        border-top: 1px solid #e1e1e1
    }

    #onetrust-banner-sdk .ot-sdk-container:after,
    #onetrust-banner-sdk .ot-sdk-row:after,
    #onetrust-banner-sdk .ot-sdk-u-cf,
    #onetrust-pc-sdk .ot-sdk-container:after,
    #onetrust-pc-sdk .ot-sdk-row:after,
    #onetrust-pc-sdk .ot-sdk-u-cf,
    #ot-sdk-cookie-policy .ot-sdk-container:after,
    #ot-sdk-cookie-policy .ot-sdk-row:after,
    #ot-sdk-cookie-policy .ot-sdk-u-cf {
        content: "";
        display: table;
        clear: both
    }

    #onetrust-banner-sdk .ot-sdk-row,
    #onetrust-pc-sdk .ot-sdk-row,
    #ot-sdk-cookie-policy .ot-sdk-row {
        margin: 0;
        max-width: none;
        display: block
    }

    #onetrust-banner-sdk {
        box-shadow: 0 0 18px rgba(0, 0, 0, .2)
    }

    #onetrust-banner-sdk.otCenterRounded {
        z-index: 2147483645;
        top: 10%;
        position: fixed;
        right: 0;
        background-color: #fff;
        width: 60%;
        max-width: 650px;
        border-radius: 2.5px;
        left: 1em;
        margin: 0 auto;
        font-size: 14px;
        max-height: 90%;
        overflow-x: hidden;
        overflow-y: auto
    }

    #onetrust-banner-sdk.otRelFont {
        font-size: .875rem
    }

    #onetrust-banner-sdk::-webkit-scrollbar {
        width: 11px
    }

    #onetrust-banner-sdk::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: #c1c1c1
    }

    #onetrust-banner-sdk {
        scrollbar-arrow-color: #c1c1c1;
        scrollbar-darkshadow-color: #c1c1c1;
        scrollbar-face-color: #c1c1c1;
        scrollbar-shadow-color: #c1c1c1
    }

    #onetrust-banner-sdk h3,
    #onetrust-banner-sdk p {
        color: dimgray
    }

    #onetrust-banner-sdk #onetrust-policy {
        margin-top: 20px
    }

    #onetrust-banner-sdk #onetrust-policy-title {
        float: left;
        text-align: left;
        font-size: 1em;
        line-height: 1.4;
        margin-bottom: 0;
        padding: 0 0 10px 30px;
        width: calc(100% - 90px)
    }

    #onetrust-banner-sdk #onetrust-policy-text,
    #onetrust-banner-sdk .ot-b-addl-desc,
    #onetrust-banner-sdk .ot-gv-list-handler {
        clear: both;
        float: left;
        margin: 0 30px 10px 30px;
        font-size: .813em;
        line-height: 1.5
    }

    #onetrust-banner-sdk #onetrust-policy-text *,
    #onetrust-banner-sdk .ot-b-addl-desc *,
    #onetrust-banner-sdk .ot-gv-list-handler * {
        line-height: inherit;
        font-size: inherit;
        margin: 0
    }

    #onetrust-banner-sdk .ot-gv-list-handler {
        padding: 0;
        border: 0;
        height: auto;
        width: auto
    }

    #onetrust-banner-sdk .ot-b-addl-desc {
        display: block
    }

    #onetrust-banner-sdk #onetrust-button-group-parent {
        padding: 15px 30px;
        text-align: center
    }

    #onetrust-banner-sdk #onetrust-button-group-parent:not(.has-reject-all-button) #onetrust-button-group {
        text-align: right
    }

    #onetrust-banner-sdk #onetrust-button-group {
        text-align: center;
        display: inline-block;
        width: 100%
    }

    #onetrust-banner-sdk #onetrust-reject-all-handler,
    #onetrust-banner-sdk #onetrust-pc-btn-handler {
        margin-right: 1em
    }

    #onetrust-banner-sdk #onetrust-pc-btn-handler {
        border: 1px solid #6cc04a;
        max-width: 45%
    }

    #onetrust-banner-sdk .banner-actions-container {
        float: right;
        width: 50%
    }

    #onetrust-banner-sdk #onetrust-pc-btn-handler.cookie-setting-link {
        background-color: #fff;
        border: none;
        color: #6cc04a;
        text-decoration: underline;
        padding-left: 0;
        padding-right: 0
    }

    #onetrust-banner-sdk #onetrust-accept-btn-handler,
    #onetrust-banner-sdk #onetrust-reject-all-handler,
    #onetrust-banner-sdk #onetrust-pc-btn-handler {
        background-color: #6cc04a;
        color: #fff;
        border-color: #6cc04a;
        min-width: 135px;
        padding: 12px 10px;
        letter-spacing: .05em;
        line-height: 1.4;
        font-size: .813em;
        font-weight: 600;
        height: auto;
        white-space: normal;
        word-break: break-word;
        word-wrap: break-word
    }

    #onetrust-banner-sdk .has-reject-all-button #onetrust-pc-btn-handler {
        float: left;
        max-width: calc(40% - 18px)
    }

    #onetrust-banner-sdk .has-reject-all-button #onetrust-pc-btn-handler.cookie-setting-link {
        text-align: left;
        margin-right: 0
    }

    #onetrust-banner-sdk .has-reject-all-button .banner-actions-container {
        max-width: 60%;
        width: auto
    }

    #onetrust-banner-sdk .ot-close-icon {
        width: 44px;
        height: 44px;
        background-size: 12px;
        margin: -18px -18px 0 0;
        border: none;
        display: inline-block;
        padding: 0
    }

    #onetrust-banner-sdk #onetrust-close-btn-container {
        position: absolute;
        right: 24px;
        top: 24px
    }

    #onetrust-banner-sdk .banner_logo {
        display: none
    }

    #onetrust-banner-sdk #banner-options {
        float: left;
        padding: 0 30px;
        width: calc(100% - 90px)
    }

    #onetrust-banner-sdk .banner-option {
        margin-bottom: 10px
    }

    #onetrust-banner-sdk .banner-option-input {
        cursor: pointer;
        width: auto;
        height: auto;
        border: none;
        padding: 0;
        padding-right: 3px;
        margin: 0 0 6px;
        font-size: .82em;
        line-height: 1.4
    }

    #onetrust-banner-sdk .banner-option-input * {
        pointer-events: none;
        font-size: inherit;
        line-height: inherit
    }

    #onetrust-banner-sdk .banner-option-input[aria-expanded=true] .ot-arrow-container {
        transform: rotate(90deg)
    }

    #onetrust-banner-sdk .banner-option-input[aria-expanded=true]~.banner-option-details {
        height: auto;
        display: block
    }

    #onetrust-banner-sdk .banner-option-header {
        cursor: pointer;
        display: inline-block
    }

    #onetrust-banner-sdk .banner-option-header :first-child {
        color: dimgray;
        font-weight: bold;
        float: left
    }

    #onetrust-banner-sdk .ot-arrow-container,
    #onetrust-banner-sdk .banner-option-details {
        transition: all 300ms ease-in 0s;
        -webkit-transition: all 300ms ease-in 0s;
        -moz-transition: all 300ms ease-in 0s;
        -o-transition: all 300ms ease-in 0s
    }

    #onetrust-banner-sdk .ot-arrow-container {
        display: inline-block;
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
        border-left: 6px solid dimgray;
        margin-left: 10px;
        vertical-align: middle
    }

    #onetrust-banner-sdk .banner-option-details {
        display: none;
        font-size: .83em;
        line-height: 1.5;
        height: 0px;
        padding: 10px 10px 5px 10px
    }

    #onetrust-banner-sdk .banner-option-details * {
        font-size: inherit;
        line-height: inherit;
        color: dimgray
    }

    #onetrust-banner-sdk .ot-dpd-container {
        float: left;
        margin: 0 30px 10px 30px
    }

    #onetrust-banner-sdk .ot-dpd-title {
        font-weight: bold;
        padding-bottom: 10px
    }

    #onetrust-banner-sdk .ot-dpd-title {
        font-size: 1em;
        line-height: 1.4
    }

    #onetrust-banner-sdk .ot-dpd-desc {
        font-size: .813em;
        line-height: 1.5;
        margin-bottom: 0
    }

    #onetrust-banner-sdk .ot-dpd-desc * {
        margin: 0
    }

    #onetrust-banner-sdk .onetrust-vendors-list-handler {
        display: block;
        margin-left: 0px;
        margin-top: 5px;
        padding: 0;
        margin-bottom: 0;
        border: 0;
        line-height: normal;
        height: auto;
        width: auto
    }

    #onetrust-banner-sdk :not(.ot-dpd-desc)>.ot-b-addl-desc {
        float: left;
        margin: 0 30px 10px 30px
    }

    #onetrust-banner-sdk .ot-dpd-desc>.ot-b-addl-desc {
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 1em;
        line-height: 1.5;
        float: none
    }

    #onetrust-banner-sdk #onetrust-policy-text a {
        font-weight: bold;
        margin-left: 5px
    }

    #onetrust-banner-sdk.ot-close-btn-link #onetrust-close-btn-container {
        top: 15px;
        transform: none;
        right: 15px
    }

    #onetrust-banner-sdk.ot-close-btn-link #onetrust-close-btn-container button {
        padding: 0;
        white-space: pre-wrap;
        border: none;
        height: auto;
        line-height: 1.5;
        text-decoration: underline;
        font-size: .75em
    }

    #onetrust-banner-sdk.ot-close-btn-link.ot-wo-title #onetrust-group-container {
        margin-top: 20px
    }

    @media only screen and (max-width: 425px) {

        #onetrust-banner-sdk #onetrust-accept-btn-handler,
        #onetrust-banner-sdk #onetrust-reject-all-handler,
        #onetrust-banner-sdk #onetrust-pc-btn-handler {
            width: 100%;
            margin-bottom: 10px
        }

        #onetrust-banner-sdk #onetrust-pc-btn-handler,
        #onetrust-banner-sdk #onetrust-reject-all-handler {
            margin-right: 0
        }

        #onetrust-banner-sdk .has-reject-all-button #onetrust-pc-btn-handler.cookie-setting-link {
            text-align: center
        }

        #onetrust-banner-sdk .banner-actions-container,
        #onetrust-banner-sdk #onetrust-pc-btn-handler {
            width: 100%;
            max-width: none
        }

        #onetrust-banner-sdk.otCenterRounded {
            left: 0;
            width: 95%;
            top: 50%;
            transform: translateY(-50%);
            -webkit-transform: translateY(-50%)
        }
    }

    @media only screen and (max-width: 600px) {
        #onetrust-banner-sdk .ot-sdk-container {
            width: auto;
            padding: 0
        }

        #onetrust-banner-sdk #onetrust-policy-title {
            padding: 0 22px 10px 22px
        }

        #onetrust-banner-sdk #onetrust-policy-text,
        #onetrust-banner-sdk :not(.ot-dpd-desc)>.ot-b-addl-desc,
        #onetrust-banner-sdk .ot-dpd-container {
            margin: 0 22px 10px 22px;
            width: calc(100% - 44px)
        }

        #onetrust-banner-sdk #onetrust-button-group-parent {
            padding: 15px 22px
        }

        #onetrust-banner-sdk #banner-options {
            padding: 0 22px;
            width: calc(100% - 44px)
        }

        #onetrust-banner-sdk .banner-option {
            margin-bottom: 6px
        }

        #onetrust-banner-sdk .has-reject-all-button #onetrust-pc-btn-handler {
            float: none;
            max-width: 100%
        }

        #onetrust-banner-sdk .has-reject-all-button .banner-actions-container {
            width: 100%;
            text-align: center;
            max-width: 100%
        }

        #onetrust-banner-sdk.ot-close-btn-link #onetrust-group-container {
            margin-top: 20px
        }
    }

    @media only screen and (min-width: 426px)and (max-width: 896px) {
        #onetrust-banner-sdk.otCenterRounded {
            left: 0;
            top: 15%;
            transform: translateY(-13%);
            -webkit-transform: translateY(-13%);
            max-width: 600px;
            width: 95%
        }
    }

    #onetrust-consent-sdk #onetrust-banner-sdk {
        background-color: #FFFFFF;
    }

    #onetrust-consent-sdk #onetrust-policy-title,
    #onetrust-consent-sdk #onetrust-policy-text,
    #onetrust-consent-sdk .ot-b-addl-desc,
    #onetrust-consent-sdk .ot-dpd-desc,
    #onetrust-consent-sdk .ot-dpd-title,
    #onetrust-consent-sdk #onetrust-policy-text *:not(.onetrust-vendors-list-handler),
    #onetrust-consent-sdk .ot-dpd-desc *:not(.onetrust-vendors-list-handler),
    #onetrust-consent-sdk #onetrust-banner-sdk #banner-options *,
    #onetrust-banner-sdk .ot-cat-header {
        color: #000000;
    }

    #onetrust-consent-sdk #onetrust-banner-sdk .banner-option-details {
        background-color: #E9E9E9;
    }

    #onetrust-consent-sdk #onetrust-banner-sdk a[href],
    #onetrust-consent-sdk #onetrust-banner-sdk a[href] font,
    #onetrust-consent-sdk #onetrust-banner-sdk .ot-link-btn {
        color: #0076A8;
    }

    #onetrust-consent-sdk #onetrust-accept-btn-handler,
    #onetrust-banner-sdk #onetrust-reject-all-handler {
        background-color: #0076A8;
        border-color: #0076A8;
        color: #FFFFFF;
    }

    #onetrust-consent-sdk #onetrust-pc-btn-handler,
    #onetrust-consent-sdk #onetrust-pc-btn-handler.cookie-setting-link {
        color: #FFFFFF;
        border-color: #FFFFFF;
        background-color:
            #0076A8;
    }

    /* Custom CSS 2.3 */
    #onetrust-consent-sdk #onetrust-accept-btn-handler,
    #onetrust-banner-sdk #onetrust-reject-all-handler,
    #onetrust-consent-sdk #onetrust-pc-sdk button:not(#clear-filters-handler):not(.ot-close-icon):not(#filter-btn-handler):not(.ot-remove-objection-handler):not(.ot-obj-leg-btn-handler):not([aria-expanded]):not(.ot-link-btn),
    #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-active-leg-btn #onetrust-consent-sdk #onetrust-pc-btn-handler,
    #onetrust-consent-sdk #onetrust-pc-btn-handler.cookie-setting-link {
        background-color: #0076a8;
        border-color: #0076a8;
        color: #ffffff;
    }

    #onetrust-banner-sdk #onetrust-policy-text,
    #onetrust-banner-sdk .ot-dpd-desc,
    #onetrust-banner-sdk .ot-b-addl-desc,
    #onetrust-banner-sdk #onetrust-accept-btn-handler,
    #onetrust-banner-sdk #onetrust-reject-all-handler,
    #onetrust-banner-sdk #onetrust-pc-btn-handler,
    #onetrust-pc-sdk #ot-pc-desc,
    #onetrust-pc-sdk .ot-accordion-layout .ot-acc-grpdesc,
    #onetrust-pc-sdk .ot-btn-container button {
        font-size: 14.5px;
        line-height: 21.5px;
    }

    #onetrust-pc-sdk #ot-pc-title,
    #onetrust-pc-sdk #ot-category-title,
    #onetrust-pc-sdk .ot-cat-header,
    #onetrust-pc-sdk .ot-cat-grp .ot-always-active {
        font-size: 14px;
    }

    #onetrust-pc-sdk .ot-cat-header {
        font-weight: bold;
    }

    #onetrust-banner-sdk .ot-sdk-button:focus,
    #onetrust-banner-sdk :not(.ot-leg-btn-container)>button:focus,
    #onetrust-banner-sdk input[type="submit"]:focus,
    #onetrust-banner-sdk input[type="reset"]:focus,
    #onetrust-banner-sdk input[type="button"]:focus,
    #onetrust-pc-sdk .ot-sdk-button:focus,
    #onetrust-pc-sdk :not(.ot-leg-btn-container)>button:focus,
    #onetrust-pc-sdk input[type="submit"]:focus,
    #onetrust-pc-sdk input[type="reset"]:focus,
    #onetrust-pc-sdk input[type="button"]:focus,
    #ot-sdk-cookie-policy .ot-sdk-button:focus,
    #ot-sdk-cookie-policy :not(.ot-leg-btn-container)>button:focus,
    #ot-sdk-cookie-policy input[type="submit"]:focus,
    #ot-sdk-cookie-policy input[type="reset"]:focus,
    #ot-sdk-cookie-policy input[type="button"]:focus {
        outline: none;
    }

    #onetrust-consent-sdk #onetrust-pc-btn-handler,
    #onetrust-consent-sdk #onetrust-pc-btn-handler.cookie-setting-link {
        text-decoration: none;
    }

    #onetrust-banner-sdk .onetrust-close-btn-ui {
        display: none;
    }

    #onetrust-consent-sdk #onetrust-accept-btn-handler:hover,
    #onetrust-banner-sdk #onetrust-reject-all-handler:hover,
    #onetrust-consent-sdk #onetrust-pc-btn-handler:hover {
        background: #fff;
        color: #0076a8;
        border: 1px solid #0076a8;
        opacity: 0.7;
    }

    @media only screen and (max-width: 1023px) {
        #onetrust-banner-sdk .has-reject-all-button .banner-actions-container {
            display: flex !important;
            flex-wrap: wrap;
        }

        #onetrust-banner-sdk .has-reject-all-button .banner-actions-container {
            max-width: 100%;
            width: auto;
            float: none;
        }

        #onetrust-banner-sdk .has-reject-all-button .banner-actions-container button {
            width: 100%;
        }

        #onetrust-banner-sdk .has-reject-all-button #onetrust-pc-btn-handler {
            width: 100%;
            max-width: 100%;
        }
    }

    @media only screen and (min-width: 426px) and (max-width: 896px) {
        #onetrust-banner-sdk .has-reject-all-button #onetrust-pc-btn-handler.cookie-setting-link {
            padding-left: 10px;
        }
    }

    /* OT Centered */

    .otCenterRounded#onetrust-banner-sdk .has-reject-all-button #onetrust-pc-btn-handler.cookie-setting-link {
        text-align: center;
        padding: 12px 10px;
    }

    .otCenterRounded#onetrust-banner-sdk:not(.ot-iab-2) #onetrust-group-container {
        width: 100% !important;
    }

    #onetrust-consent-sdk #onetrust-policy-title,
    #onetrust-consent-sdk #onetrust-policy-text,
    #onetrust-consent-sdk .ot-b-addl-desc,
    #onetrust-consent-sdk .ot-dpd-desc,
    #onetrust-consent-sdk .ot-dpd-title,
    #onetrust-consent-sdk #onetrust-policy-text *:not(.onetrust-vendors-list-handler),
    #onetrust-consent-sdk .ot-dpd-desc *:not(.onetrust-vendors-list-handler),
    #onetrust-consent-sdk #onetrust-banner-sdk #banner-options *,
    #onetrust-banner-sdk .ot-cat-header,
    #onetrust-banner-sdk #onetrust-policy-title,
    #onetrust-banner-sdk #onetrust-policy-text,
    #onetrust-consent-sdk #onetrust-pc-sdk h3,
    #onetrust-consent-sdk #onetrust-pc-sdk h4,
    #onetrust-consent-sdk #onetrust-pc-sdk h5,
    #onetrust-consent-sdk #onetrust-pc-sdk h6,
    #onetrust-consent-sdk #onetrust-pc-sdk p,
    #onetrust-consent-sdk #onetrust-pc-sdk #ot-ven-lst .ot-ven-opts p,
    #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-desc,
    #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-title,
    #onetrust-consent-sdk #onetrust-pc-sdk .ot-li-title,
    #onetrust-consent-sdk #onetrust-pc-sdk .ot-sel-all-hdr span,
    #onetrust-consent-sdk #onetrust-pc-sdk #ot-host-lst .ot-host-info,
    #onetrust-consent-sdk #onetrust-pc-sdk #ot-fltr-modal #modal-header,
    #onetrust-consent-sdk #onetrust-pc-sdk .ot-checkbox label span,
    #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-lst #ot-sel-blk p,
    #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-lst #ot-lst-title span,
    #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-lst .back-btn-handler p,
    #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-lst .ot-ven-name,
    #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-lst #ot-ven-lst .consent-category,
    #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-inactive-leg-btn,
    #onetrust-consent-sdk #onetrust-pc-sdk .ot-label-status,
    #onetrust-consent-sdk #onetrust-pc-sdk .ot-chkbox label span,
    #onetrust-consent-sdk #onetrust-pc-sdk #clear-filters-handler {
        color: #000;
    }

    #onetrust-banner-sdk #onetrust-policy-title {
        font-size: 18px !important;
        line-height: 22px !important;
    }

    #onetrust-pc-btn-handler {
        padding: 12px 10px !important;
    }

    @media only screen and (min-width: 1024px) {
        #onetrust-pc-sdk .ot-button-group {
            justify-content: space-between;
            width: 100%;
        }

        #onetrust-banner-sdk .has-reject-all-button .banner-actions-container {
            max-width: 65%;
            width: auto;
            display: flex;
        }

        #onetrust-banner-sdk.otCenterRounded {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            height: fit-content;
        }

        #onetrust-banner-sdk #onetrust-button-group {
            margin-right: 0;
            width: 100%;
            display: flex;
            justify-content: flex-end;
            flex-wrap: wrap;
        }

        #onetrust-banner-sdk.otCenterRounded #onetrust-button-group {
            display: flex;
            justify-content: space-between;
        }

        #onetrust-banner-sdk:not(.ot-iab-2) #onetrust-group-container {
            width: 60% !important;
        }

        /*OT Banner with Center Alignment*/
        .otCenterRounded#onetrust-banner-sdk .has-reject-all-button .banner-actions-container {
            max-width: 387px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            order: 2;
        }

        .otCenterRounded #onetrust-consent-sdk #onetrust-accept-btn-handler,
        #onetrust-banner-sdk #onetrust-reject-all-handler,
        .otCenterRounded#onetrust-banner-sdk .has-reject-all-button #onetrust-pc-btn-handler.cookie-setting-link {
            width: 180px;
        }

        .otCenterRounded #onetrust-button-group .banner-actions-container button {
            width: 180px;
        }

        /*OT Banner with Center Alignment end*/
    }

    #onetrust-consent-sdk #onetrust-pc-btn-handler.cookie-setting-link,
    #onetrust-banner-sdk.otFlat {
        opacity: 1 !important;
    }

    /* #onetrust-pc-sdk .ot-pc-refuse-all-handler, #onetrust-pc-sdk #accept-recommended-btn-handler{
display: none !important;
} */
    #onetrust-pc-sdk .pc-logo,
    #onetrust-pc-sdk .ot-pc-logo {
        background-position: center !important;
        background-size: contain !important;
        background-repeat: no-repeat !important;
        height: 50px;
        width: 140px;
    }

    #onetrust-pc-sdk #pc-title {
        top: 5px;
        font-size: 16px;
        font-weight: bold;
        line-height: 16px;
    }

    #onetrust-pc-sdk #close-pc-btn-handler.ot-close-icon {
        margin-top: 5px;
    }

    #onetrust-banner-sdk #onetrust-reject-all-handler {
        margin-right: 0;
    }

    #onetrust-pc-sdk.otPcTab {
        width: 650px;
        max-width: 650px;
        max-height: 495px;
    }

    #onetrust-banner-sdk a,
    #onetrust-pc-sdk a,
    #ot-sdk-cookie-policy a {
        text-decoration: none !important;
    }

    #onetrust-banner-sdk a:hover,
    #onetrust-pc-sdk a:hover,
    #ot-sdk-cookie-policy a:hover {
        text-decoration: underline;
    }

    #onetrust-consent-sdk #onetrust-banner-sdk a[href],
    #onetrust-consent-sdk #onetrust-banner-sdk a[href] font,
    #onetrust-consent-sdk #onetrust-banner-sdk .ot-link-btn,
    #onetrust-pc-sdk #pc-policy-text a:hover,
    #onetrust-consent-sdk #onetrust-pc-sdk .privacy-notice-link,
    #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler,
    #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler+a,
    #onetrust-consent-sdk #onetrust-pc-sdk .category-host-list-handler,
    #onetrust-consent-sdk #onetrust-pc-sdk .vendor-privacy-notice,
    #onetrust-consent-sdk #onetrust-pc-sdk #hosts-list-container .host-title a,
    #onetrust-consent-sdk #onetrust-pc-sdk #hosts-list-container .accordion-header .host-view-cookies,
    #onetrust-consent-sdk #onetrust-pc-sdk #hosts-list-container .vendor-host a {
        color: #0076a8;
        font-weight: normal;
    }

    .logo-section img {
        margin: 0 0 -15px 0 !important;
        height: 50px;
        width: 140px !important;
    }

    .logo-section #onetrust-policy-title {
        font-size: 16px !important;
        font-weight: bold;
        line-height: 16px !important;
    }

    .ot-button-group {
        display: flex !important;
    }

    .ot-button-group button {
        width: 180px !important;
        height: auto !important;
        padding: 10px 12px !important;
        white-space: normal !important;
        line-height: 21.5px !important;
    }

    #onetrust-pc-sdk #ot-content {
        height: calc(100% - 225px) !important;
    }

    #onetrust-pc-sdk .ot-button-group-parent {
        padding: 15px 30px !important;
    }

    @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) {
        #onetrust-banner-sdk .has-reject-all-button #onetrust-pc-btn-handler {
            width: 160px;
            max-width: 160px;
        }

        .otCenterRounded#onetrust-banner-sdk .has-reject-all-button .banner-actions-container {
            width: 360px;
            max-width: 360px;
        }

        .otCenterRounded#onetrust-banner-sdk .has-reject-all-button .banner-actions-container button {
            width: 160px;
        }
    }

    #onetrust-banner-sdk .has-reject-all-button #onetrust-pc-btn-handler {
        margin-right: 0 !important;
    }

    @media only screen and (max-width: 767px) {
        #onetrust-pc-sdk.otPcTab .ot-button-group-parent {
            padding: 15px !important;
        }

        #onetrust-pc-sdk .pc-title-container {
            width: 50%;
            float: left;
        }

        #onetrust-pc-sdk #ot-content {
            height: calc(100% - 270px) !important;
        }

        #onetrust-pc-sdk #close-pc-btn-handler.ot-close-icon {
            margin-top: -5px;
        }

        #onetrust-consent-sdk #onetrust-banner-sdk {
            height: 100%;
            transform: translate(-50%, -50%);
            left: 50%;
            top: 50%;
        }

        #onetrust-pc-sdk.otPcTab {
            width: 100% !important;
            max-height: 100%;
        }

        .ot-button-group {
            display: block !important;
        }

        .ot-button-group button {
            float: right !important;
            /*margin-right: 16px !important;
margin-left: 15px;*/
            text-align: center;
            width: 100% !important;
        }
    }

    #onetrust-banner-sdk a:focus,
    .pc-content .description-container a:focus {
        outline: thin dotted !important;
    }

    /* button order */

    /* disable button order  ----

#onetrust-pc-sdk .save-preference-btn-handler,
#onetrust-pc-sdk #accept-recommended-btn-handler {
margin-left: 0 !important;
margin-right: 0 !important;

}
.ot-pc-refuse-all-handler {
order: 3;
} 
#onetrust-banner-sdk #onetrust-reject-all-handler {
order: 2;
}
end disable button order --- */

    /* end button order */
    @media (max-width: 767px) {

        #onetrust-pc-sdk.otPcTab .save-preference-btn-handler,
        #onetrust-pc-sdk.otPcTab #accept-recommended-btn-handler,
        #onetrust-pc-sdk.otPcTab .ot-pc-refuse-all-handler {
            width: calc(100% - 33px);
            margin-left: 0;
            margin-right: 0;
        }
    }

    #onetrust-pc-sdk.otPcTab {
        position: fixed;
        width: 730px;
        max-width: 730px;
        height: 580px;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        font-size: 16px;
        z-index: 2147483647;
        border: 1px solid #d7d7d7;
        border-radius: 2px;
        background-color: #fff;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0), 0 7px 14px 0 rgba(50, 50, 93, .1)
    }

    #onetrust-pc-sdk.otPcTab.otRelFont {
        font-size: 1rem
    }

    #onetrust-pc-sdk *,
    #onetrust-pc-sdk ::after,
    #onetrust-pc-sdk ::before {
        box-sizing: content-box
    }

    #onetrust-pc-sdk #ot-content {
        height: calc(100% - 196px)
    }

    #onetrust-pc-sdk .ot-link-btn {
        padding: 0;
        margin-bottom: 0;
        border: 0;
        font-weight: normal;
        line-height: normal;
        width: auto;
        height: auto
    }

    #onetrust-pc-sdk .ot-main-content {
        height: 100%
    }

    #onetrust-pc-sdk .privacy-notice-link {
        text-decoration: underline
    }

    #onetrust-pc-sdk .privacy-notice-link:focus {
        outline: 1px solid #000
    }

    #onetrust-pc-sdk li {
        list-style: none
    }

    #onetrust-pc-sdk ul,
    #onetrust-pc-sdk li {
        margin: 0
    }

    #onetrust-pc-sdk a {
        text-decoration: none
    }

    #onetrust-pc-sdk .pc-content::-webkit-scrollbar,
    #onetrust-pc-sdk .groups-container::-webkit-scrollbar,
    #onetrust-pc-sdk #vendor-list-content::-webkit-scrollbar,
    #onetrust-pc-sdk .vendor-content::-webkit-scrollbar,
    #onetrust-pc-sdk #ot-filter-modal .ot-group-options::-webkit-scrollbar {
        width: 11px
    }

    #onetrust-pc-sdk .pc-content::-webkit-scrollbar-thumb,
    #onetrust-pc-sdk .groups-container::-webkit-scrollbar-thumb,
    #onetrust-pc-sdk #vendor-list-content::-webkit-scrollbar-thumb,
    #onetrust-pc-sdk .vendor-content::-webkit-scrollbar-thumb,
    #onetrust-pc-sdk #ot-filter-modal .ot-group-options::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: #c1c1c1
    }

    #onetrust-pc-sdk .pc-content,
    #onetrust-pc-sdk .groups-container,
    #onetrust-pc-sdk #vendor-list-content,
    #onetrust-pc-sdk .vendor-content,
    #onetrust-pc-sdk #ot-filter-modal .ot-group-options {
        scrollbar-arrow-color: #c1c1c1;
        scrollbar-darkshadow-color: #c1c1c1;
        scrollbar-face-color: #c1c1c1;
        scrollbar-shadow-color: #c1c1c1
    }

    #onetrust-pc-sdk .pc-header {
        height: auto;
        padding: 20px;
        display: inline-block;
        vertical-align: middle;
        width: calc(100% - 40px);
        border-bottom: 1px solid #d8d8d8
    }

    #onetrust-pc-sdk .pc-logo-container {
        float: left
    }

    #onetrust-pc-sdk .pc-title-container {
        float: right;
        width: calc(100% - 190px);
        margin-left: 10px
    }

    #onetrust-pc-sdk .ot-always-active {
        font-size: 1em;
        line-height: 1.3;
        color: #3860be
    }

    #onetrust-pc-sdk .pc-close-btn-container {
        float: right;
        position: absolute;
        right: 0;
        margin-top: 0
    }

    #onetrust-pc-sdk .pc-content {
        position: relative;
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden
    }

    #onetrust-pc-sdk .groups-container {
        height: 100%;
        overflow-y: auto
    }

    #onetrust-pc-sdk .group {
        cursor: pointer;
        border-left: 10px solid transparent;
        background-color: #f4f4f4;
        border-bottom: 1px solid #d7d7d7;
        padding-top: 16px;
        padding-right: 5px;
        padding-bottom: 16px;
        padding-left: 12px
    }

    #onetrust-pc-sdk .group h3 {
        float: left;
        text-align: left;
        margin: 0;
        color: dimgray;
        line-height: 1.4;
        font-size: 1em;
        word-break: break-word;
        word-wrap: break-word
    }

    #onetrust-pc-sdk .active-group {
        border-left: 10px solid #68b631;
        background-color: #fff;
        border-bottom: none;
        position: relative
    }

    #onetrust-pc-sdk .active-group h3 {
        color: #263238;
        font-weight: bold
    }

    #onetrust-pc-sdk .description-container {
        word-break: break-word;
        word-wrap: break-word;
        padding-top: 20px;
        padding-right: 16px;
        padding-bottom: 15px;
        position: absolute;
        left: 30%
    }

    #onetrust-pc-sdk .group-description {
        word-break: break-word;
        word-wrap: break-word;
        text-align: left;
        font-size: .82em;
        line-height: 1.3;
        margin: 0
    }

    #onetrust-pc-sdk #pc-policy-text {
        clear: both;
        float: left
    }

    #onetrust-pc-sdk #pc-policy-text a {
        color: #3860be;
        cursor: pointer;
        font-size: 1em
    }

    #onetrust-pc-sdk #pc-policy-text a:hover {
        color: #1883fd
    }

    #onetrust-pc-sdk #pc-policy-text * {
        font-size: inherit
    }

    #onetrust-pc-sdk #pc-policy-text ul li {
        padding: 10px 0px;
        border-bottom: 1px solid #e2e2e2
    }

    #onetrust-pc-sdk #vdr-lst-dsc {
        font-size: .812em;
        line-height: 1.5;
        padding: 10px 15px 5px 15px
    }

    #onetrust-pc-sdk .ot-close-icon {
        background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjQ3Ljk3MSIgaGVpZ2h0PSI0Ny45NzEiIHZpZXdCb3g9IjAgMCA0Ny45NzEgNDcuOTcxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0Ny45NzEgNDcuOTcxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBhdGggZD0iTTI4LjIyOCwyMy45ODZMNDcuMDkyLDUuMTIyYzEuMTcyLTEuMTcxLDEuMTcyLTMuMDcxLDAtNC4yNDJjLTEuMTcyLTEuMTcyLTMuMDctMS4xNzItNC4yNDIsMEwyMy45ODYsMTkuNzQ0TDUuMTIxLDAuODhjLTEuMTcyLTEuMTcyLTMuMDctMS4xNzItNC4yNDIsMGMtMS4xNzIsMS4xNzEtMS4xNzIsMy4wNzEsMCw0LjI0MmwxOC44NjUsMTguODY0TDAuODc5LDQyLjg1Yy0xLjE3MiwxLjE3MS0xLjE3MiwzLjA3MSwwLDQuMjQyQzEuNDY1LDQ3LjY3NywyLjIzMyw0Ny45NywzLDQ3Ljk3czEuNTM1LTAuMjkzLDIuMTIxLTAuODc5bDE4Ljg2NS0xOC44NjRMNDIuODUsNDcuMDkxYzAuNTg2LDAuNTg2LDEuMzU0LDAuODc5LDIuMTIxLDAuODc5czEuNTM1LTAuMjkzLDIuMTIxLTAuODc5YzEuMTcyLTEuMTcxLDEuMTcyLTMuMDcxLDAtNC4yNDJMMjguMjI4LDIzLjk4NnoiLz48L2c+PC9zdmc+");
        background-size: 12px;
        background-repeat: no-repeat;
        background-position: center;
        height: 44px;
        width: 44px;
        display: inline-block
    }

    #onetrust-pc-sdk .group-toggle {
        display: inline-block;
        width: 100%;
        margin-bottom: 10px
    }

    #onetrust-pc-sdk .group-toggle .checkbox {
        background-color: #fff
    }

    #onetrust-pc-sdk .group-toggle .ot-toggle {
        float: right;
        background-color: #fff
    }

    #onetrust-pc-sdk .group-toggle .ot-toggle-group {
        float: right
    }

    #onetrust-pc-sdk .group-toggle .ot-toggle-group p {
        margin: 0
    }

    #onetrust-pc-sdk .group-toggle .ot-toggle-group:focus {
        outline: #000 auto 5px
    }

    #onetrust-pc-sdk .group-toggle .ot-toggle-group .checkbox input[type=checkbox]:focus+label::before {
        outline: #000 auto 5px
    }

    #onetrust-pc-sdk .description-container h3 {
        color: #263238;
        float: left;
        margin: 0;
        font-weight: bold;
        font-size: 1em;
        line-height: 1.3;
        max-width: 85%;
        top: 3px
    }

    #onetrust-pc-sdk #pc-privacy-header {
        margin-bottom: 10px
    }

    #onetrust-pc-sdk .category-vendors-list-container {
        overflow: hidden
    }

    #onetrust-pc-sdk .category-vendors-list-handler,
    #onetrust-pc-sdk .category-host-list-handler,
    #onetrust-pc-sdk .category-vendors-list-handler+a {
        display: block;
        float: left;
        color: #3860be;
        font-size: .8em;
        font-weight: bold;
        line-height: 1.1;
        cursor: pointer
    }

    #onetrust-pc-sdk .category-vendors-list-handler:hover,
    #onetrust-pc-sdk .category-host-list-handler:hover,
    #onetrust-pc-sdk .category-vendors-list-handler+a:hover {
        color: #1883fd
    }

    #onetrust-pc-sdk .category-vendors-list-handler+a::after {
        content: "";
        height: 15px;
        width: 15px;
        background-repeat: no-repeat;
        margin-left: 5px;
        float: right;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 511.626 511.627'%3E%3Cg fill='%231276CE'%3E%3Cpath d='M392.857 292.354h-18.274c-2.669 0-4.859.855-6.563 2.573-1.718 1.708-2.573 3.897-2.573 6.563v91.361c0 12.563-4.47 23.315-13.415 32.262-8.945 8.945-19.701 13.414-32.264 13.414H82.224c-12.562 0-23.317-4.469-32.264-13.414-8.945-8.946-13.417-19.698-13.417-32.262V155.31c0-12.562 4.471-23.313 13.417-32.259 8.947-8.947 19.702-13.418 32.264-13.418h200.994c2.669 0 4.859-.859 6.57-2.57 1.711-1.713 2.566-3.9 2.566-6.567V82.221c0-2.662-.855-4.853-2.566-6.563-1.711-1.713-3.901-2.568-6.57-2.568H82.224c-22.648 0-42.016 8.042-58.102 24.125C8.042 113.297 0 132.665 0 155.313v237.542c0 22.647 8.042 42.018 24.123 58.095 16.086 16.084 35.454 24.13 58.102 24.13h237.543c22.647 0 42.017-8.046 58.101-24.13 16.085-16.077 24.127-35.447 24.127-58.095v-91.358c0-2.669-.856-4.859-2.574-6.57-1.713-1.718-3.903-2.573-6.565-2.573z'/%3E%3Cpath d='M506.199 41.971c-3.617-3.617-7.905-5.424-12.85-5.424H347.171c-4.948 0-9.233 1.807-12.847 5.424-3.617 3.615-5.428 7.898-5.428 12.847s1.811 9.233 5.428 12.85l50.247 50.248-186.147 186.151c-1.906 1.903-2.856 4.093-2.856 6.563 0 2.479.953 4.668 2.856 6.571l32.548 32.544c1.903 1.903 4.093 2.852 6.567 2.852s4.665-.948 6.567-2.852l186.148-186.148 50.251 50.248c3.614 3.617 7.898 5.426 12.847 5.426s9.233-1.809 12.851-5.426c3.617-3.616 5.424-7.898 5.424-12.847V54.818c-.001-4.952-1.814-9.232-5.428-12.847z'/%3E%3C/g%3E%3C/svg%3E")
    }

    #onetrust-pc-sdk .category-host-list-handler,
    #onetrust-pc-sdk .category-vendors-list-container,
    #onetrust-pc-sdk #pc-policy-text+.category-vendors-list-handler {
        margin-top: 10px
    }

    #onetrust-pc-sdk .group-toggle+.category-vendors-list-container {
        margin-top: 0px;
        margin-bottom: 10px
    }

    #onetrust-pc-sdk .ot-always-active-group .group-toggle h3.category-header,
    #onetrust-pc-sdk .cookie-subgroup.ot-always-active-group>h4 {
        max-width: 70%
    }

    #onetrust-pc-sdk .group-description ul,
    #onetrust-pc-sdk .cookie-subgroups-container li.cookie-subgroup p ul {
        margin: 0px;
        margin-left: 15px;
        padding-bottom: 8px
    }

    #onetrust-pc-sdk .group-description ul li,
    #onetrust-pc-sdk .cookie-subgroups-container li.cookie-subgroup p ul li {
        font-size: inherit;
        padding-top: 8px;
        display: list-item;
        list-style: disc
    }

    #onetrust-pc-sdk .ot-toggle.ot-hide-tgl {
        visibility: hidden
    }

    #onetrust-pc-sdk .ot-toggle.ot-hide-tgl * {
        visibility: hidden
    }

    #onetrust-pc-sdk .cookie-subgroups-container {
        margin-top: 15px
    }

    #onetrust-pc-sdk .cookie-subgroups-container ul.cookie-subgroups {
        margin: 0;
        font-size: inherit
    }

    #onetrust-pc-sdk .cookie-subgroups-container ul.cookie-subgroups .cookie-subgroup-toggle {
        float: right
    }

    #onetrust-pc-sdk .cookie-subgroups-container ul.cookie-subgroups .cookie-subgroup-toggle.ot-always-active-subgroup {
        width: auto
    }

    #onetrust-pc-sdk .cookie-subgroups-container ul.cookie-subgroups .ot-toggle {
        background-color: inherit
    }

    #onetrust-pc-sdk .cookie-subgroups-container ul.cookie-subgroups li {
        padding: 0;
        border: none;
        position: relative
    }

    #onetrust-pc-sdk .cookie-subgroups-container ul.cookie-subgroups li h4,
    #onetrust-pc-sdk .cookie-subgroups-container ul.cookie-subgroups li p {
        font-size: .82em;
        line-height: 1.4
    }

    #onetrust-pc-sdk .cookie-subgroups-container ul.cookie-subgroups li p {
        color: dimgray;
        clear: both;
        float: left;
        margin-top: 10px;
        margin-bottom: 0;
        word-break: break-word;
        word-wrap: break-word
    }

    #onetrust-pc-sdk .cookie-subgroups-container ul.cookie-subgroups li h4 {
        color: #263238;
        font-weight: bold;
        margin-bottom: 0;
        float: left;
        position: relative;
        top: 3px
    }

    #onetrust-pc-sdk .cookie-subgroups-container ul.cookie-subgroups li.cookie-subgroup {
        margin-left: 30px;
        display: inline-block;
        width: calc(100% - 30px)
    }

    #onetrust-pc-sdk .cookie-subgroups-container .ot-arrow {
        top: -3px
    }

    #onetrust-pc-sdk .ot-button-group-parent {
        height: 34px;
        padding: 30px;
        bottom: 0;
        border-top: 1px solid #d8d8d8
    }

    #onetrust-pc-sdk .ot-button-group {
        float: right;
        text-align: center
    }

    #onetrust-pc-sdk .ot-pc-footer-logo {
        float: left;
        text-align: center;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        width: 155px;
        height: 25px;
        position: relative;
        top: 10px
    }

    #onetrust-pc-sdk #accept-recommended-btn-handler {
        float: right;
        margin-right: 16px;
        margin-left: 15px;
        text-align: center
    }

    #onetrust-pc-sdk .save-preference-btn-handler {
        height: 38px;
        min-width: 155px;
        background-color: #68b631;
        border-radius: 2px;
        color: #fff;
        font-size: .9em;
        line-height: 1.1;
        text-align: center;
        margin-left: 15px;
        margin-right: 15px
    }

    #onetrust-pc-sdk #pc-title {
        float: left;
        margin-left: 10px;
        margin-top: 10px;
        max-width: 85%;
        overflow: hidden;
        position: relative;
        line-height: 1.2em;
        max-height: 2.4em;
        padding-right: 1em
    }

    #onetrust-pc-sdk #pc-title:before {
        content: "...";
        right: 0px;
        bottom: 0px;
        position: absolute
    }

    #onetrust-pc-sdk #pc-title:after {
        position: absolute;
        content: "";
        width: 1em;
        height: 1em;
        right: 0px;
        background: #fff
    }

    #onetrust-pc-sdk #vendors-list {
        height: 100%;
        width: 100%
    }

    #onetrust-pc-sdk #vendors-list .accordion-header {
        padding-top: 17px;
        padding-right: 15px;
        padding-bottom: 17px;
        padding-left: 20px;
        display: inline-block;
        width: calc(100% - 35px);
        vertical-align: middle
    }

    #onetrust-pc-sdk #vendors-list .accordion-text {
        padding-top: 6px;
        padding-right: 50px;
        padding-bottom: 10px;
        padding-left: 50px
    }

    #onetrust-pc-sdk .vendor-content {
        height: 100%
    }

    #onetrust-pc-sdk #vendors-list-header {
        padding-top: 15px;
        padding-right: 30px;
        padding-bottom: 15px;
        padding-left: 20px;
        display: inline-block;
        width: calc(100% - 50px);
        height: 20px;
        border-bottom: 1px solid #d8d8d8
    }

    #onetrust-pc-sdk #vendors-list-header input {
        height: 32px;
        width: 300px;
        border-radius: 50px;
        font-size: .8em;
        padding-right: 35px;
        padding-left: 15px;
        float: left
    }

    #onetrust-pc-sdk #vendors-list-header input::placeholder {
        color: #d4d4d4;
        font-style: italic
    }

    #onetrust-pc-sdk #vendor-list-content {
        height: calc(100% - 86px);
        width: calc(100% - 183px);
        padding-left: 80px;
        padding-right: 100px;
        padding-top: 20px;
        margin-top: 8px;
        margin-right: 3px;
        margin-bottom: 4px;
        margin-left: 0;
        overflow-x: hidden;
        overflow-y: auto
    }

    #onetrust-pc-sdk #ot-back-arrow {
        height: 17px;
        width: 20px;
        vertical-align: middle;
        display: inline-block;
        color: dimgray;
        font-size: 1em;
        line-height: 1;
        text-align: center
    }

    #onetrust-pc-sdk #vendors-list-title {
        color: dimgray;
        font-size: .9em;
        font-weight: bold;
        line-height: 1;
        display: inline-block;
        vertical-align: middle;
        margin: 0;
        padding-left: 5px
    }

    #onetrust-pc-sdk #vendors-list-title * {
        font-size: inherit
    }

    #onetrust-pc-sdk .navigation-container {
        float: left
    }

    #onetrust-pc-sdk .back-btn-handler {
        display: inline-block
    }

    #onetrust-pc-sdk .action-container {
        float: right;
        position: relative;
        bottom: 6px
    }

    #onetrust-pc-sdk #search-container {
        float: left
    }

    #onetrust-pc-sdk #search-container svg {
        position: absolute;
        right: 35px;
        width: 30px;
        height: 30px;
        font-size: 1em;
        line-height: 1;
        top: 3px
    }

    #onetrust-pc-sdk .label-text {
        display: none
    }

    #onetrust-pc-sdk #filter-container {
        display: inline-block;
        top: 8px;
        position: relative;
        margin-left: 20px
    }

    #onetrust-pc-sdk #filter-btn-handler svg {
        cursor: pointer;
        width: 15px;
        height: 15px
    }

    #onetrust-pc-sdk #select-all-container {
        min-width: 200px;
        min-height: 30px;
        padding-left: 20px
    }

    #onetrust-pc-sdk #select-all-text-container {
        display: inline-block;
        padding-left: 30px
    }

    #onetrust-pc-sdk #select-all-text-container p {
        color: #2c3643;
        font-size: .8em;
        font-weight: bold;
        line-height: 1.1;
        margin: 0;
        display: inline-block
    }

    #onetrust-pc-sdk #select-all-text-container p * {
        font-size: inherit
    }

    #onetrust-pc-sdk #select-all-vendors-input-container,
    #onetrust-pc-sdk #select-all-hosts-input-container {
        float: left;
        height: 100%
    }

    #onetrust-pc-sdk #select-all-vendors-input-container label,
    #onetrust-pc-sdk #select-all-hosts-input-container label {
        height: 100%;
        padding-left: 0
    }

    #onetrust-pc-sdk .ot-checkbox input[type=checkbox] {
        display: block;
        opacity: 0
    }

    #onetrust-pc-sdk .ot-checkbox input:checked~label::before {
        background-color: #4285f4
    }

    #onetrust-pc-sdk .ot-checkbox label {
        position: relative;
        height: 20px;
        padding-left: 30px
    }

    #onetrust-pc-sdk .ot-checkbox label::before,
    #onetrust-pc-sdk .ot-checkbox label::after {
        position: absolute;
        content: "";
        display: inline-block;
        border-radius: 3px
    }

    #onetrust-pc-sdk .ot-checkbox label::before {
        height: 18px;
        width: 18px;
        border: 1px solid #3860be;
        left: 0px
    }

    #onetrust-pc-sdk .ot-checkbox label::after {
        height: 5px;
        width: 9px;
        border-left: 3px solid;
        border-bottom: 3px solid;
        transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
        left: 4px;
        top: 5px
    }

    #onetrust-pc-sdk .ot-checkbox input[type=checkbox]+label::after {
        content: none;
        color: #fff
    }

    #onetrust-pc-sdk .ot-checkbox input[type=checkbox]:checked+label::after {
        content: ""
    }

    #onetrust-pc-sdk .ot-checkbox input[type=checkbox]:focus+label::before {
        outline-style: solid;
        outline-width: 2px;
        outline-style: auto
    }

    #onetrust-pc-sdk #select-all-vendors-input-container.line-through label::after,
    #onetrust-pc-sdk #select-all-vendors-leg-input-container.line-through label::after,
    #onetrust-pc-sdk #select-all-hosts-input-container.line-through label::after {
        height: auto;
        border-left: 0;
        left: 5px;
        top: 10.5px;
        transform: none;
        -o-transform: none;
        -ms-transform: none;
        -webkit-transform: none
    }

    #onetrust-pc-sdk #hosts-list-container .ot-checkbox {
        float: left
    }

    #onetrust-pc-sdk .vendor-title,
    #onetrust-pc-sdk .host-title {
        color: #2c3643;
        font-weight: bold;
        font-size: .8em;
        line-height: 1.2;
        margin: 0;
        height: auto;
        text-align: left;
        word-break: break-word;
        word-wrap: break-word
    }

    #onetrust-pc-sdk .host-title {
        position: relative;
        vertical-align: middle
    }

    #onetrust-pc-sdk .host-title a {
        font-size: 1em;
        font-weight: bold
    }

    #onetrust-pc-sdk .cookie-name-container a {
        font-size: 1em
    }

    #onetrust-pc-sdk .host-description {
        font-size: .69em;
        line-height: 1.4;
        margin-top: 5px;
        margin-bottom: 5px;
        float: left;
        color: dimgray
    }

    #onetrust-pc-sdk .host-info>a {
        text-decoration: underline;
        font-size: .82em;
        position: relative;
        z-index: 2;
        float: left;
        margin-bottom: 5px
    }

    #onetrust-pc-sdk .host-info .host-title+a {
        margin-top: 5px
    }

    #onetrust-pc-sdk .vendor-info {
        width: 88%;
        float: right
    }

    #onetrust-pc-sdk .vendor-purposes {
        margin-top: 3px
    }

    #onetrust-pc-sdk .vendor-purposes p {
        font-size: .8em;
        line-height: 1.2;
        margin-bottom: 0;
        font-weight: 500;
        text-align: left;
        word-break: break-word;
        word-wrap: break-word
    }

    #onetrust-pc-sdk input[type=checkbox]:focus+.accordion-header {
        outline: 1px solid #000
    }

    #onetrust-pc-sdk #select-all-hosts-input-container input[type=checkbox],
    #onetrust-pc-sdk #select-all-vendors-input-container input[type=checkbox] {
        position: absolute
    }

    #onetrust-pc-sdk #vendors-list-container input[type=checkbox],
    #onetrust-pc-sdk #hosts-list-container input[type=checkbox],
    #onetrust-pc-sdk .cookie-subgroups input[type=checkbox] {
        position: absolute;
        cursor: pointer;
        width: 100%;
        height: 100%;
        opacity: 0;
        margin: 0;
        top: 0;
        left: 0
    }

    #onetrust-pc-sdk #vendors-list-container input[type=checkbox]~.accordion-header,
    #onetrust-pc-sdk #hosts-list-container input[type=checkbox]~.accordion-header,
    #onetrust-pc-sdk .cookie-subgroups input[type=checkbox]~.accordion-header {
        cursor: pointer
    }

    #onetrust-pc-sdk #vendors-list-container input[type=checkbox]:not(:checked)~.accordion-text,
    #onetrust-pc-sdk #hosts-list-container input[type=checkbox]:not(:checked)~.accordion-text,
    #onetrust-pc-sdk .cookie-subgroups input[type=checkbox]:not(:checked)~.accordion-text {
        margin-top: 0;
        max-height: 0;
        opacity: 0;
        overflow: hidden;
        width: 100%;
        transition: .25s ease-out;
        display: none
    }

    #onetrust-pc-sdk #vendors-list-container input[type=checkbox]:checked~.accordion-text,
    #onetrust-pc-sdk #hosts-list-container input[type=checkbox]:checked~.accordion-text,
    #onetrust-pc-sdk .cookie-subgroups input[type=checkbox]:checked~.accordion-text {
        transition: .1s ease-in;
        display: block
    }

    #onetrust-pc-sdk #vendors-list-container .ot-checkbox input[type=checkbox],
    #onetrust-pc-sdk #hosts-list-container .ot-checkbox input[type=checkbox],
    #onetrust-pc-sdk .cookie-subgroups .ot-checkbox input[type=checkbox] {
        width: auto;
        height: auto
    }

    #onetrust-pc-sdk #vendors-list-container .ot-checkbox label,
    #onetrust-pc-sdk #hosts-list-container .ot-checkbox label,
    #onetrust-pc-sdk .cookie-subgroups .ot-checkbox label {
        z-index: 2
    }

    #onetrust-pc-sdk #vendors-list-container,
    #onetrust-pc-sdk #hosts-list-container {
        width: 100%
    }

    #onetrust-pc-sdk #vendors-list-container li,
    #onetrust-pc-sdk #hosts-list-container li {
        border: 1px solid #d7d7d7;
        border-radius: 2px;
        position: relative;
        margin-top: 10px
    }

    #onetrust-pc-sdk #vendors-list-container .ot-toggle-group {
        width: 65%
    }

    #onetrust-pc-sdk #hosts-list-container .ot-toggle-group {
        width: 65%
    }

    #onetrust-pc-sdk label {
        margin-bottom: 0
    }

    #onetrust-pc-sdk .vendor-notice,
    #onetrust-pc-sdk .host-notice {
        float: right
    }

    #onetrust-pc-sdk .vendor-privacy-notice-container,
    #onetrust-pc-sdk .third-party-cookies-container {
        float: left
    }

    #onetrust-pc-sdk .vendor-privacy-notice-container {
        position: relative
    }

    #onetrust-pc-sdk .vendor-privacy-notice-container a:hover {
        text-decoration: underline
    }

    #onetrust-pc-sdk .vendor-privacy-notice,
    #onetrust-pc-sdk .third-party-cookie-notice {
        color: dimgray;
        font-size: .7em;
        line-height: .9;
        display: inline-block
    }

    #onetrust-pc-sdk .vendor-privacy-notice *,
    #onetrust-pc-sdk .third-party-cookie-notice * {
        font-size: inherit
    }

    #onetrust-pc-sdk .vendor-privacy-notice {
        position: relative;
        z-index: 2
    }

    #onetrust-pc-sdk .ot-arrow {
        margin-left: 20px
    }

    #onetrust-pc-sdk .vendor-options {
        display: inline-block;
        width: 100%;
        padding-bottom: 10px;
        border-radius: 2px;
        background-color: #f8f8f8
    }

    #onetrust-pc-sdk .vendor-options p {
        font-size: .69em;
        text-align: left;
        display: table-cell;
        vertical-align: middle;
        word-break: break-word;
        word-wrap: break-word;
        margin: 0;
        padding-left: 15px;
        color: #2e3644
    }

    #onetrust-pc-sdk #hosts-list-container .host-info {
        float: left;
        width: calc(100% - 50px)
    }

    #onetrust-pc-sdk #hosts-list-container .host-option-group {
        display: inline-block;
        width: 100%;
        margin: 0;
        font-size: inherit
    }

    #onetrust-pc-sdk #hosts-list-container .host-option-group li.vendor-host {
        border: none;
        font-size: .8em;
        color: dimgray;
        float: left;
        text-align: left;
        padding: 10px;
        margin-bottom: 10px;
        width: calc(100% - 10px);
        background-color: #f8f8f8
    }

    #onetrust-pc-sdk #hosts-list-container .host-option-group li.vendor-host a {
        color: dimgray
    }

    #onetrust-pc-sdk #hosts-list-container .host-option-group li>div div {
        font-size: .81em;
        padding: 5px 0
    }

    #onetrust-pc-sdk #hosts-list-container .host-option-group li>div div:nth-child(1) {
        width: 30%;
        float: left
    }

    #onetrust-pc-sdk #hosts-list-container .host-option-group li>div div:nth-child(2) {
        width: 70%;
        float: left;
        word-break: break-word;
        word-wrap: break-word
    }

    #onetrust-pc-sdk .vendor-purpose-groups .vendor-option-purpose {
        border-top: 1px solid #e9e9e9;
        border-bottom: 1px solid #e9e9e9;
        margin-bottom: 10px;
        min-height: 30px;
        max-height: 50px;
        width: 100%;
        display: table
    }

    #onetrust-pc-sdk .vendor-purpose-groups .vendor-option-purpose:first-child,
    #onetrust-pc-sdk .vendor-purpose-groups .vendor-option-purpose:first-of-type {
        border-top: none
    }

    #onetrust-pc-sdk .vendor-purpose-groups .vendor-option-purpose p {
        font-weight: bold
    }

    #onetrust-pc-sdk .vendor-purpose-groups .vendor-consent-group {
        display: inline-block;
        width: 100%;
        margin-bottom: 10px
    }

    #onetrust-pc-sdk .vendor-purpose-groups .ot-ven-disc {
        margin-bottom: 10px
    }

    #onetrust-pc-sdk .vendor-purpose-groups .ot-ven-disc:not(:first-child) {
        border-top: 1px solid #e9e9e9
    }

    #onetrust-pc-sdk .vendor-purpose-groups .ot-ven-disc:nth-child(n+3) p {
        display: inline-block
    }

    #onetrust-pc-sdk .vendor-purpose-groups .ot-ven-disc:nth-child(n+3) p:nth-of-type(odd) {
        width: 30%
    }

    #onetrust-pc-sdk .vendor-purpose-groups .ot-ven-disc:nth-child(n+3) p:nth-of-type(even) {
        width: 50%;
        word-break: break-word;
        word-wrap: break-word
    }

    #onetrust-pc-sdk .vendor-purpose-groups .ot-ven-disc p {
        padding-top: 10px;
        display: block
    }

    #onetrust-pc-sdk .vendor-purpose-groups .legitimate-interest-group .consent-category {
        float: left
    }

    #onetrust-pc-sdk .vendor-purpose-groups .vendor-opt-out-handler {
        text-decoration: none;
        float: right;
        font-size: .69em;
        line-height: 1.4;
        color: #3860be;
        right: 15px;
        position: relative
    }

    #onetrust-pc-sdk .vendor-purpose-groups .vendor-opt-out-handler span {
        font-size: .69em;
        line-height: 1.4
    }

    #onetrust-pc-sdk .vendor-purpose-groups .vendor-opt-out-handler svg {
        width: 15px;
        height: 15px;
        vertical-align: middle
    }

    #onetrust-pc-sdk #no-results {
        text-align: center;
        margin-top: 30px
    }

    #onetrust-pc-sdk #no-results p {
        font-size: 1em;
        color: #2e3644;
        word-break: break-word;
        word-wrap: break-word
    }

    #onetrust-pc-sdk #no-results p span {
        font-weight: bold
    }

    #onetrust-pc-sdk .ot-toggle .checkbox label:after {
        cursor: pointer
    }

    #onetrust-pc-sdk .ot-group-option {
        height: 25px
    }

    #onetrust-pc-sdk .checkbox {
        position: relative;
        display: inline-block
    }

    #onetrust-pc-sdk .checkbox label {
        background: #d6d6d6;
        border: none;
        height: 10px;
        width: 35px;
        position: relative;
        display: inline-block;
        border-radius: 46px;
        transition: .4s
    }

    #onetrust-pc-sdk .checkbox label:after {
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 100%;
        left: 0;
        top: -5px;
        z-index: 2;
        background: #7b7b7b;
        transition: .4s
    }

    #onetrust-pc-sdk .checkbox input {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 5;
        opacity: 0;
        cursor: pointer
    }

    #onetrust-pc-sdk .checkbox input:checked+label:after {
        left: 40px
    }

    #onetrust-pc-sdk .checkbox input:focus+label::after {
        outline: #000 solid 1px
    }

    #onetrust-pc-sdk .checkbox:after,
    #onetrust-pc-sdk .checkbox:before {
        -webkit-font-feature-settings: normal;
        font-feature-settings: normal;
        -webkit-font-kerning: auto;
        font-kerning: auto;
        -webkit-font-language-override: normal;
        font-language-override: normal;
        font-stretch: normal;
        font-style: normal;
        font-synthesis: weight style;
        font-variant: normal;
        font-weight: normal;
        text-rendering: auto
    }

    #onetrust-pc-sdk .ot-toggle {
        background-color: #f8f8f8
    }

    #onetrust-pc-sdk .ot-toggle .checkbox input:checked+label {
        background: #cddcf2
    }

    #onetrust-pc-sdk .ot-toggle .checkbox input:checked+label:after {
        background: #4285f4;
        left: 16px
    }

    #onetrust-pc-sdk .ot-toggle-group,
    #onetrust-pc-sdk .ot-toggle {
        display: inline-block;
        vertical-align: middle
    }

    #onetrust-pc-sdk .ot-arrow-container {
        float: right
    }

    #onetrust-pc-sdk .ot-arrow {
        top: 2px;
        position: relative;
        width: 10px;
        height: 10px;
        margin-left: 5px;
        transition: all 300ms ease-in 0s;
        -webkit-transition: all 300ms ease-in 0s;
        -moz-transition: all 300ms ease-in 0s;
        -o-transition: all 300ms ease-in 0s
    }

    #onetrust-pc-sdk input:checked~.accordion-header .ot-arrow {
        transform: rotate(90deg);
        -o-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        -webkit-transform: rotate(90deg)
    }

    #onetrust-pc-sdk button.ot-pill {
        font-size: .75em;
        text-align: center;
        background-color: #3860be;
        border-color: #3860be;
        font-weight: 600;
        box-shadow: 0 0 10px 1px #cce1ff;
        width: 170px;
        max-width: 180px;
        color: #fff;
        height: auto;
        white-space: normal;
        word-break: break-word;
        word-wrap: break-word;
        padding: 10px;
        line-height: 1.2;
        letter-spacing: .05em
    }

    #onetrust-pc-sdk button.ot-pill:first-child {
        margin-top: 10px
    }

    #onetrust-pc-sdk.ot-leg-opt-out .description-container {
        padding-top: 0px;
        margin-top: 20px;
        padding-right: 0px;
        border-radius: 3px;
        overflow: hidden;
        padding-bottom: 10px
    }

    #onetrust-pc-sdk.ot-leg-opt-out .ot-leg-border-color {
        border: 1px solid #e9e9e9
    }

    #onetrust-pc-sdk.ot-leg-opt-out .ot-leg-border-color .cookie-subgroups-container {
        border-top: 1px solid #e9e9e9
    }

    #onetrust-pc-sdk.ot-leg-opt-out .ot-category-desc {
        padding-bottom: 10px
    }

    #onetrust-pc-sdk.ot-leg-opt-out .group-toggle {
        padding-left: 10px;
        width: calc(100% - 20px);
        padding-top: 10px;
        margin-bottom: 0px;
        padding-bottom: 8px
    }

    #onetrust-pc-sdk.ot-leg-opt-out .cookie-subgroups-container {
        padding-top: 10px;
        margin-top: 0px
    }

    #onetrust-pc-sdk.ot-leg-opt-out .description-container>*:not(.group-toggle) {
        padding-left: 10px;
        padding-right: 10px
    }

    #onetrust-pc-sdk.ot-leg-opt-out .leg-int-header {
        overflow: hidden;
        padding-top: 7.5px;
        padding-bottom: 7.5px;
        background-color: #f8f8f8;
        border: none;
        border-bottom: 1px solid #e9e9e9
    }

    #onetrust-pc-sdk.ot-leg-opt-out .leg-int-header .leg-int-title {
        float: right;
        font-size: .813em
    }

    #onetrust-pc-sdk.ot-leg-opt-out .leg-int-header span:first-child {
        text-align: left;
        max-width: 80px
    }

    #onetrust-pc-sdk.ot-leg-opt-out .leg-int-header span:last-child {
        padding-right: 10px;
        max-width: 95px;
        text-align: center
    }

    #onetrust-pc-sdk.ot-leg-opt-out .description-container .ot-toggle-group:first-of-type {
        padding-left: 36px;
        padding-right: 7px
    }

    #onetrust-pc-sdk.ot-leg-opt-out .ot-always-active-group .group-toggle .ot-toggle-group:first-of-type {
        padding-left: 0px
    }

    #onetrust-pc-sdk.ot-leg-opt-out .category-header,
    #onetrust-pc-sdk.ot-leg-opt-out .cookie-subgroup h4 {
        max-width: calc(100% - 115px)
    }

    #onetrust-pc-sdk.ot-leg-opt-out #vendor-list-content:not(.host-list-content) #select-all-container {
        width: 100%;
        display: inline-block;
        padding: 0
    }

    #onetrust-pc-sdk.ot-leg-opt-out #vendor-list-content:not(.host-list-content) #select-all-container .ot-checkbox {
        float: right
    }

    #onetrust-pc-sdk.ot-leg-opt-out .leg-int-sel-all-hdr {
        float: right;
        position: relative;
        height: 20px;
        right: 55px
    }

    #onetrust-pc-sdk.ot-leg-opt-out .consent-hdr,
    #onetrust-pc-sdk.ot-leg-opt-out .leg-int-hdr {
        float: right;
        font-size: .8em;
        position: relative
    }

    #onetrust-pc-sdk.ot-leg-opt-out .leg-int-hdr {
        margin-right: 30px
    }

    #onetrust-pc-sdk.ot-leg-opt-out .ot-vendor-consent-tgl {
        margin-left: 62px;
        margin-right: 38px
    }

    #onetrust-pc-sdk.ot-leg-opt-out .ot-vendor-consent-tgl label,
    #onetrust-pc-sdk.ot-leg-opt-out .ot-leg-int-tgl label {
        width: 22px;
        padding: 0
    }

    #onetrust-pc-sdk.ot-leg-opt-out .ot-leg-int-tgl-only {
        margin-right: 122px
    }

    #onetrust-pc-sdk.ot-leg-opt-out #select-all-vendors-leg-input-container {
        display: block;
        width: 21px;
        height: 21px;
        position: relative;
        float: left;
        right: 30px;
        clear: both
    }

    #onetrust-pc-sdk.ot-leg-opt-out #select-all-vendors-leg-input-container input {
        position: absolute
    }

    #onetrust-pc-sdk.ot-leg-opt-out #select-all-vendors-input-container {
        float: right;
        width: 21px;
        height: 21px;
        position: relative;
        right: 70px
    }

    #onetrust-pc-sdk.ot-leg-opt-out #vendors-list-container .vendor-info {
        float: left;
        width: 60%
    }

    #onetrust-pc-sdk.ot-leg-opt-out #vendors-list-container .ot-toggle-group {
        float: right;
        width: auto
    }

    #onetrust-pc-sdk.ot-leg-opt-out #vendors-list-container .ot-checkbox {
        position: relative
    }

    #onetrust-pc-sdk.ot-leg-btn #select-all-vendors-input-container {
        clear: both
    }

    #onetrust-pc-sdk #ot-triangle {
        border: 12px solid transparent;
        display: none;
        position: absolute;
        z-index: 2147483647;
        top: 140px;
        right: 40px;
        transform: rotate(45deg);
        -o-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        background-color: #fff;
        -webkit-box-shadow: -3px -3px 5px -2px #c7c5c7;
        -moz-box-shadow: -3px -3px 5px -2px #c7c5c7;
        box-shadow: -3px -3px 5px -2px #c7c5c7
    }

    #onetrust-pc-sdk #ot-filter-modal {
        width: 300px;
        position: absolute;
        z-index: 2147483646;
        top: 146px;
        height: auto;
        display: none;
        -moz-transition: .2s ease;
        -o-transition: .2s ease;
        -webkit-transition: 2s ease;
        transition: .2s ease;
        overflow-x: hidden;
        opacity: 1;
        right: 0
    }

    #onetrust-pc-sdk #ot-filter-modal .ot-pill {
        width: 130px;
        float: right
    }

    #onetrust-pc-sdk #ot-options {
        background-color: #fff;
        margin: 5px;
        border-radius: 3px;
        height: 350px;
        -webkit-box-shadow: 0px 0px 12px 2px #c7c5c7;
        -moz-box-shadow: 0px 0px 12px 2px #c7c5c7;
        box-shadow: 0px 0px 12px 2px #c7c5c7
    }

    #onetrust-pc-sdk .ot-group-options {
        overflow-y: auto;
        width: 100%;
        max-height: 65%
    }

    #onetrust-pc-sdk .ot-group-option {
        margin-bottom: 25px;
        margin-left: 15px;
        clear: both;
        display: inline-block
    }

    #onetrust-pc-sdk .ot-group-option label {
        height: auto
    }

    #onetrust-pc-sdk .ot-group-option span {
        cursor: pointer;
        color: dimgray;
        font-size: .8em;
        line-height: 1.1;
        font-weight: normal
    }

    #onetrust-pc-sdk #clear-filters-handler {
        float: right;
        max-width: 200px;
        margin-bottom: 30px;
        text-decoration: none
    }

    #onetrust-pc-sdk #clear-filters-handler p {
        float: right;
        font-weight: bold;
        color: #3860be;
        font-size: .9em;
        margin: 0
    }

    #onetrust-pc-sdk #clear-filters-handler p:hover {
        color: #1883fd
    }

    #onetrust-pc-sdk #clear-filters-container {
        float: right;
        padding-right: 15px;
        height: auto;
        margin-top: 20px
    }

    #onetrust-pc-sdk #filter-apply-handler {
        margin-right: 10px;
        float: right
    }

    #onetrust-pc-sdk .group-description+.ot-leg-btn-container {
        margin-top: 0
    }

    #onetrust-pc-sdk .ot-leg-btn-container {
        display: inline-block;
        width: 100%;
        margin-top: 10px
    }

    #onetrust-pc-sdk .ot-leg-btn-container button {
        height: auto;
        padding: 6.5px 8px;
        margin-bottom: 0;
        line-height: normal;
        letter-spacing: 0
    }

    #onetrust-pc-sdk .ot-leg-btn-container svg {
        display: none;
        height: 14px;
        width: 14px;
        padding-right: 5px;
        vertical-align: sub
    }

    #onetrust-pc-sdk .ot-active-leg-btn {
        cursor: default;
        pointer-events: none
    }

    #onetrust-pc-sdk .ot-active-leg-btn svg {
        display: inline-block
    }

    #onetrust-pc-sdk .ot-remove-objection-handler {
        border: none;
        text-decoration: underline;
        padding: 0;
        font-size: .82em;
        font-weight: 600;
        line-height: 1.4;
        padding-left: 10px
    }

    #onetrust-pc-sdk .ot-obj-leg-btn-handler span {
        font-weight: bold;
        text-align: center;
        font-size: .91em;
        line-height: 1.5
    }

    #onetrust-pc-sdk.otPcTab[dir=rtl] .ot-pc-footer-logo svg {
        direction: rtl
    }

    #onetrust-pc-sdk.otPcTab[dir=rtl] input~.accordion-header .ot-arrow,
    #onetrust-pc-sdk.otPcTab[dir=rtl] #ot-back-arrow {
        transform: rotate(180deg);
        -o-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        -webkit-transform: rotate(180deg)
    }

    #onetrust-pc-sdk.otPcTab[dir=rtl] input:checked~.accordion-header .ot-arrow {
        transform: rotate(270deg);
        -o-transform: rotate(270deg);
        -ms-transform: rotate(270deg);
        -webkit-transform: rotate(270deg)
    }

    #onetrust-pc-sdk.otPcTab[dir=rtl] #search-container svg {
        right: 52px
    }

    #onetrust-pc-sdk.otPcTab[dir=rtl] .ot-checkbox label::after {
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        border-left: 0;
        border-right: 3px solid
    }

    #onetrust-pc-sdk #close-pc-btn-handler.ot-close-icon {
        padding: 0;
        background-color: transparent;
        border: none
    }

    @media(max-width: 767px) {
        #onetrust-pc-sdk.otPcTab {
            width: 100%;
            height: 100%;
            border: none
        }

        #onetrust-pc-sdk.otPcTab .ot-sdk-container,
        #onetrust-pc-sdk.otPcTab .ot-button-group-parent,
        #onetrust-pc-sdk.otPcTab .ot-pc-footer-logo {
            width: 100%
        }

        #onetrust-pc-sdk.otPcTab .ot-sdk-container {
            padding: 0;
            margin: 0
        }

        #onetrust-pc-sdk.otPcTab #pc-title {
            margin-left: 10px;
            margin-top: 10px;
            max-width: 60%
        }

        #onetrust-pc-sdk.otPcTab .description-container {
            margin: 0;
            padding-top: 20px;
            padding-right: 20px;
            padding-bottom: 15px;
            padding-left: 20px;
            position: relative;
            left: auto
        }

        #onetrust-pc-sdk.otPcTab.ot-leg-opt-out .description-container {
            margin-top: 20px;
            margin-left: 20px;
            padding: 0;
            padding-bottom: 10px
        }

        #onetrust-pc-sdk.otPcTab .groups-container {
            max-height: none;
            height: auto;
            overflow: hidden
        }

        #onetrust-pc-sdk.otPcTab .ot-button-group-parent {
            padding-left: 0;
            padding-right: 0;
            position: relative
        }

        #onetrust-pc-sdk.otPcTab .ot-button-group,
        #onetrust-pc-sdk.otPcTab #accept-recommended-btn-handler {
            float: none
        }

        #onetrust-pc-sdk.otPcTab .save-preference-btn-handler,
        #onetrust-pc-sdk.otPcTab #accept-recommended-btn-handler,
        #onetrust-pc-sdk.otPcTab .ot-pc-refuse-all-handler {
            width: calc(100% - 33px)
        }
    }

    @media(max-width: 640px) {
        #onetrust-pc-sdk.otPcTab .pc-header {
            padding: 10px;
            width: calc(100% - 20px)
        }

        #onetrust-pc-sdk.otPcTab #ot-content {
            height: calc(100% - 275px)
        }

        #onetrust-pc-sdk.otPcTab .ot-button-group-parent {
            padding: 15px;
            margin: 0;
            width: calc(100% - 30px)
        }

        #onetrust-pc-sdk.otPcTab .ot-sdk-row .ot-sdk-columns {
            width: 100%
        }

        #onetrust-pc-sdk.otPcTab .description-container {
            margin: 0
        }

        #onetrust-pc-sdk.otPcTab.ot-leg-opt-out .description-container {
            margin-left: 10px;
            width: calc(100% - 15px);
            margin-top: 5px;
            margin-bottom: 5px
        }

        #onetrust-pc-sdk.otPcTab .vendor-info {
            max-width: 80%
        }

        #onetrust-pc-sdk.otPcTab #filter-container {
            bottom: 5px;
            position: relative;
            float: right;
            right: 15px
        }

        #onetrust-pc-sdk.otPcTab #vendor-list-content {
            height: calc(100% - 305px);
            width: calc(100% - 18px);
            padding-top: 13px;
            padding-right: 5px;
            padding-left: 10px
        }

        #onetrust-pc-sdk.otPcTab #ot-triangle {
            top: 190px
        }

        #onetrust-pc-sdk.otPcTab #ot-filter-modal {
            top: 196px
        }

        #onetrust-pc-sdk.otPcTab .ot-pc-footer-logo a {
            width: auto
        }
    }

    @media(max-width: 600px) {
        #onetrust-pc-sdk.otPcTab .vendor-content {
            overflow-y: scroll
        }

        #onetrust-pc-sdk.otPcTab #vendor-list-content {
            height: auto;
            overflow: hidden
        }

        #onetrust-pc-sdk.otPcTab #vendors-list-header {
            height: 70px;
            padding: 15px 0;
            width: 100%
        }

        #onetrust-pc-sdk.otPcTab #search-container {
            display: inline-block;
            width: 85%;
            position: absolute
        }

        #onetrust-pc-sdk.otPcTab .navigation-container {
            display: block;
            text-align: left;
            float: none;
            border-bottom: 1px solid #d7d7d7;
            padding-bottom: 15px;
            padding-left: 15px
        }

        #onetrust-pc-sdk.otPcTab .action-container {
            width: calc(100% - 15px);
            float: none;
            bottom: auto;
            display: inline-block;
            padding-top: 8px;
            padding-left: 15px
        }

        #onetrust-pc-sdk.otPcTab #vendor-search-handler {
            width: 90%
        }

        #onetrust-pc-sdk.otPcTab .ot-button-group-parent {
            display: inline-block;
            height: auto;
            margin-bottom: 10px
        }
    }

    @media(max-width: 425px) {
        #onetrust-pc-sdk.otPcTab #vendors-list .accordion-text {
            padding-top: 6px;
            padding-right: 25px;
            padding-bottom: 10px;
            padding-left: 25px
        }

        #onetrust-pc-sdk.otPcTab #vendors-list-container .ot-toggle-group,
        #onetrust-pc-sdk.otPcTab #hosts-list-container .ot-toggle-group {
            width: 100%
        }

        #onetrust-pc-sdk.otPcTab #vendors-list-container .host-notice,
        #onetrust-pc-sdk.otPcTab #vendors-list-container .vendor-notice,
        #onetrust-pc-sdk.otPcTab #hosts-list-container .host-notice,
        #onetrust-pc-sdk.otPcTab #hosts-list-container .vendor-notice {
            width: 100%;
            float: left;
            margin-left: 30px
        }

        #onetrust-pc-sdk.otPcTab #vendors-list-container .ot-arrow-container,
        #onetrust-pc-sdk.otPcTab #hosts-list-container .ot-arrow-container {
            float: left
        }

        #onetrust-pc-sdk.otPcTab #vendors-list-container .vendor-info {
            float: left;
            width: 100%;
            max-width: 85%
        }

        #onetrust-pc-sdk.otPcTab #pc-title {
            max-width: 100%
        }

        #onetrust-pc-sdk.otPcTab.ot-leg-opt-out .cookie-subgroups-container li.cookie-subgroup {
            margin-left: 10px;
            width: calc(100% - 10px)
        }

        #onetrust-pc-sdk.otPcTab.ot-leg-opt-out #vendors-list-container .ot-toggle-group {
            width: auto;
            float: right
        }

        #onetrust-pc-sdk.otPcTab.ot-leg-opt-out #vendors-list-container .ot-arrow-container {
            float: right
        }

        #onetrust-pc-sdk.otPcTab.ot-leg-opt-out #vendors-list-container .vendor-info {
            max-width: 47%
        }
    }

    @media only screen and (min-width: 320px)and (max-width: 896px)and (orientation: landscape) {
        #onetrust-pc-sdk.otPcTab {
            height: 100%
        }

        #onetrust-pc-sdk.otPcTab #ot-content {
            height: calc(100% - 162px)
        }

        #onetrust-pc-sdk.otPcTab .pc-header {
            padding: 10px;
            width: calc(100% - 20px)
        }

        #onetrust-pc-sdk.otPcTab .ot-button-group-parent {
            padding: 20px;
            width: calc(100% - 40px)
        }

        #onetrust-pc-sdk.otPcTab .vendor-content {
            overflow-y: scroll
        }

        #onetrust-pc-sdk.otPcTab #vendor-list-content {
            height: auto;
            overflow: hidden
        }

        #onetrust-pc-sdk.otPcTab .ot-button-group,
        #onetrust-pc-sdk.otPcTab #accept-recommended-btn-handler {
            float: right
        }

        #onetrust-pc-sdk.otPcTab .ot-pc-footer-logo,
        #onetrust-pc-sdk.otPcTab .save-preference-btn-handler,
        #onetrust-pc-sdk.otPcTab #accept-recommended-btn-handler {
            width: auto
        }
    }

    @media only screen and (min-width: 320px)and (max-width: 640px)and (orientation: landscape) {
        #onetrust-pc-sdk.otPcTab .ot-sdk-row .ot-sdk-columns {
            width: 100%
        }

        #onetrust-pc-sdk.otPcTab.ot-leg-opt-out .description-container {
            width: calc(100% - 15px)
        }
    }

    @media only screen and (min-width: 641px)and (max-width: 896px)and (orientation: landscape) {
        #onetrust-pc-sdk.otPcTab .description-container {
            position: absolute;
            left: 30%
        }
    }

    @media(max-width: 425px),
    (max-width: 896px)and (max-height: 425px)and (orientation: landscape) {
        #onetrust-pc-sdk.otPcTab .pc-header {
            padding-right: 20px
        }

        #onetrust-pc-sdk.otPcTab .pc-logo-container {
            margin-left: 0px;
            margin-top: 5px
        }

        #onetrust-pc-sdk.otPcTab .pc-logo {
            height: 40px;
            width: 150px
        }

        #onetrust-pc-sdk.otPcTab .pc-close-btn-container {
            margin-top: 10px
        }

        #onetrust-pc-sdk.otPcTab .pc-close-btn-container .ot-close-icon {
            width: 44px;
            height: 44px;
            background-size: 12px
        }

        #onetrust-pc-sdk.otPcTab .group-toggle {
            float: right;
            margin-left: 10px;
            width: auto
        }

        #onetrust-pc-sdk.otPcTab.ot-leg-opt-out .group-toggle {
            margin-left: 0px;
            padding-right: 10px
        }

        #onetrust-pc-sdk.otPcTab #pc-privacy-header,
        #onetrust-pc-sdk.otPcTab .group-toggle .category-header {
            display: none
        }
    }

    @media only screen and (min-device-width: 768px)and (max-device-width: 1024px)and (orientation: landscape)and (-webkit-min-device-pixel-ratio: 1) {
        #onetrust-pc-sdk.otPcTab #vendors-list-header input {
            min-width: 250px;
            max-width: 300px
        }
    }

    #onetrust-consent-sdk #onetrust-pc-sdk,
    #onetrust-consent-sdk #search-container,
    #onetrust-consent-sdk #onetrust-pc-sdk .ot-switch.ot-toggle,
    #onetrust-consent-sdk #onetrust-pc-sdk group-toggle .checkbox,
    #onetrust-consent-sdk #onetrust-pc-sdk #pc-title:after {
        background-color: #FFFFFF;
    }

    #onetrust-consent-sdk #onetrust-pc-sdk h3,
    #onetrust-consent-sdk #onetrust-pc-sdk h4,
    #onetrust-consent-sdk #onetrust-pc-sdk h5,
    #onetrust-consent-sdk #onetrust-pc-sdk h6,
    #onetrust-consent-sdk #onetrust-pc-sdk p,
    #onetrust-consent-sdk #onetrust-pc-sdk #vendors-list-container .vendor-options p,
    #onetrust-consent-sdk #onetrust-pc-sdk #pc-policy-text,
    #onetrust-consent-sdk #onetrust-pc-sdk #pc-title,
    #onetrust-consent-sdk #onetrust-pc-sdk .leg-int-title,
    #onetrust-consent-sdk #onetrust-pc-sdk .leg-int-sel-all-hdr span,
    #onetrust-consent-sdk #onetrust-pc-sdk #hosts-list-container .vendor-host,
    #onetrust-consent-sdk #onetrust-pc-sdk #ot-filter-modal #modal-header,
    #onetrust-consent-sdk #onetrust-pc-sdk .ot-checkbox label span,
    #onetrust-consent-sdk #onetrust-pc-sdk #vendors-list #select-all-container p,
    #onetrust-consent-sdk #onetrust-pc-sdk #vendors-list #vendors-list-title,
    #onetrust-consent-sdk #onetrust-pc-sdk #vendors-list .back-btn-handler p,
    #onetrust-consent-sdk #onetrust-pc-sdk #vendors-list .vendor-title,
    #onetrust-consent-sdk #onetrust-pc-sdk #vendors-list #vendors-list-container .consent-category,
    #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-inactive-leg-btn,
    #onetrust-consent-sdk #onetrust-pc-sdk .ot-label-status,
    #onetrust-consent-sdk #onetrust-pc-sdk .ot-chkbox label span,
    #onetrust-consent-sdk #onetrust-pc-sdk #clear-filters-handler {
        color: #000000;
    }

    #onetrust-consent-sdk #onetrust-pc-sdk .privacy-notice-link,
    #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler,
    #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler+a,
    #onetrust-consent-sdk #onetrust-pc-sdk .category-host-list-handler,
    #onetrust-consent-sdk #onetrust-pc-sdk .vendor-privacy-notice,
    #onetrust-consent-sdk #onetrust-pc-sdk #hosts-list-container .host-title a,
    #onetrust-consent-sdk #onetrust-pc-sdk #hosts-list-container .accordion-header .host-view-cookies,
    #onetrust-consent-sdk #onetrust-pc-sdk #hosts-list-container .vendor-host a {
        color: #0076A8;
    }

    #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler:hover {
        opacity: .7;
    }

    #onetrust-consent-sdk #onetrust-pc-sdk #hosts-list-container .vendor-host,
    #onetrust-consent-sdk #onetrust-pc-sdk .accordion-text .vendor-options {
        background-color: #F8F8F8;
    }

    #onetrust-consent-sdk #onetrust-pc-sdk button:not(#clear-filters-handler):not(.ot-close-icon):not(#filter-btn-handler):not(.ot-remove-objection-handler):not(.ot-obj-leg-btn-handler):not([aria-expanded]):not(.ot-link-btn),
    #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-active-leg-btn {
        background-color: #0076A8;
        border-color: #0076A8;
        color: #FFFFFF;
    }

    #onetrust-consent-sdk #onetrust-pc-sdk .active-group {
        border-color: #0076A8;
    }

    #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-remove-objection-handler {
        background-color: transparent;
        border: 1px solid transparent;
    }

    #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-inactive-leg-btn {
        background-color: #FFFFFF;
        color: #78808E;
        border-color: #78808E;
    }

    #onetrust-consent-sdk #onetrust-pc-sdk .category-menu-switch-handler {
        background-color: #F4F4F4
    }

    #onetrust-consent-sdk #onetrust-pc-sdk .active-group {
        background-color: #FFFFFF
    }

    .ot-sdk-cookie-policy {
        font-family: inherit;
        font-size: 16px
    }

    .ot-sdk-cookie-policy.otRelFont {
        font-size: 1rem
    }

    .ot-sdk-cookie-policy h3,
    .ot-sdk-cookie-policy h4,
    .ot-sdk-cookie-policy h6,
    .ot-sdk-cookie-policy p,
    .ot-sdk-cookie-policy li,
    .ot-sdk-cookie-policy a,
    .ot-sdk-cookie-policy th,
    .ot-sdk-cookie-policy #cookie-policy-description,
    .ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,
    .ot-sdk-cookie-policy #cookie-policy-title {
        color: dimgray
    }

    .ot-sdk-cookie-policy #cookie-policy-description {
        margin-bottom: 1em
    }

    .ot-sdk-cookie-policy h4 {
        font-size: 1.2em
    }

    .ot-sdk-cookie-policy h6 {
        font-size: 1em;
        margin-top: 2em
    }

    .ot-sdk-cookie-policy th {
        min-width: 75px
    }

    .ot-sdk-cookie-policy a,
    .ot-sdk-cookie-policy a:hover {
        background: #fff
    }

    .ot-sdk-cookie-policy thead {
        background-color: #f6f6f4;
        font-weight: bold
    }

    .ot-sdk-cookie-policy .ot-mobile-border {
        display: none
    }

    .ot-sdk-cookie-policy section {
        margin-bottom: 2em
    }

    .ot-sdk-cookie-policy table {
        border-collapse: inherit
    }

    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy {
        font-family: inherit;
        font-size: 1rem
    }

    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h3,
    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h4,
    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,
    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,
    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,
    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,
    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,
    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,
    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,
    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title {
        color: dimgray
    }

    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description {
        margin-bottom: 1em
    }

    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup {
        margin-left: 1.5em
    }

    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,
    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group-desc,
    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-table-header,
    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,
    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span,
    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td {
        font-size: .9em
    }

    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td span,
    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td a {
        font-size: inherit
    }

    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group {
        font-size: 1em;
        margin-bottom: .6em
    }

    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-title {
        margin-bottom: 1.2em
    }

    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy>section {
        margin-bottom: 1em
    }

    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th {
        min-width: 75px
    }

    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,
    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a:hover {
        background: #fff
    }

    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead {
        background-color: #f6f6f4;
        font-weight: bold
    }

    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-mobile-border {
        display: none
    }

    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy section {
        margin-bottom: 2em
    }

    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li {
        list-style: disc;
        margin-left: 1.5em
    }

    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li h4 {
        display: inline-block
    }

    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table {
        border-collapse: inherit;
        margin: auto;
        border: 1px solid #d7d7d7;
        border-radius: 5px;
        border-spacing: initial;
        width: 100%;
        overflow: hidden
    }

    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th,
    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td {
        border-bottom: 1px solid #d7d7d7;
        border-right: 1px solid #d7d7d7
    }

    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td {
        border-bottom: 0px
    }

    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr th:last-child,
    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr td:last-child {
        border-right: 0px
    }

    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,
    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type {
        width: 25%
    }

    .ot-sdk-cookie-policy[dir=rtl] {
        text-align: left
    }

    #ot-sdk-cookie-policy h3 {
        font-size: 1.5em
    }

    @media only screen and (max-width: 530px) {

        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) table,
        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead,
        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tbody,
        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) th,
        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td,
        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr {
            display: block
        }

        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead tr {
            position: absolute;
            top: -9999px;
            left: -9999px
        }

        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr {
            margin: 0 0 1em 0
        }

        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd),
        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd) a {
            background: #f6f6f4
        }

        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td {
            border: none;
            border-bottom: 1px solid #eee;
            position: relative;
            padding-left: 50%
        }

        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before {
            position: absolute;
            height: 100%;
            left: 6px;
            width: 40%;
            padding-right: 10px
        }

        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) .ot-mobile-border {
            display: inline-block;
            background-color: #e4e4e4;
            position: absolute;
            height: 100%;
            top: 0;
            left: 45%;
            width: 2px
        }

        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before {
            content: attr(data-label);
            font-weight: bold
        }

        .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) li {
            word-break: break-word;
            word-wrap: break-word
        }

        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table {
            overflow: hidden
        }

        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td {
            border: none;
            border-bottom: 1px solid #d7d7d7
        }

        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table,
        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead,
        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tbody,
        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,
        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,
        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr {
            display: block
        }

        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,
        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type {
            width: auto
        }

        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr {
            margin: 0 0 1em 0
        }

        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before {
            height: 100%;
            width: 40%;
            padding-right: 10px
        }

        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before {
            content: attr(data-label);
            font-weight: bold
        }

        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li {
            word-break: break-word;
            word-wrap: break-word
        }

        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead tr {
            position: absolute;
            top: -9999px;
            left: -9999px;
            z-index: -9999
        }

        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td {
            border-bottom: 1px solid #d7d7d7;
            border-right: 0px
        }

        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td:last-child {
            border-bottom: 0px
        }
    }

    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h5,
    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,
    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,
    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,
    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,
    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span,
    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,
    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description {
        color: #696969;
    }

    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th {
        color: #696969;
    }

    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group {
        color: #696969;
    }

    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title {
        color: #696969;
    }


    #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th {
        background-color: #F8F8F8;
    }
</style>
<script type="text/javascript" src="https://assets.adobedtm.com/launch-EN19f66e78030b4550b8aebe191224f207.min.js"
    class="optanon-category-1" async=""></script>
<script type="text/javascript" async="" src="https://www2.deloitte.com//munchkin.marketo.net/munchkin.js"></script>
<script
    src="https://assets.adobedtm.com/58d4dfc81ba0/271548e2f39d/dfb89bcb8d9c/EXd957cae8194a4518b7eb1a0074ce6573-libraryCode_source.min.js"
    async=""></script>
<style id="at-makers-style" class="at-flicker-control">
    .mboxDefault {
        visibility: hidden;
    }
</style>
<script
    src="https://assets.adobedtm.com/58d4dfc81ba0/271548e2f39d/dfb89bcb8d9c/RC3c5a2396833b40c08bf72472472eb34c-source.min.js"
    async=""></script>
<script
    src="https://assets.adobedtm.com/58d4dfc81ba0/271548e2f39d/dfb89bcb8d9c/RC9e48c213975c41d694c89044dad1e669-source.min.js"
    async=""></script>
<script
    src="https://assets.adobedtm.com/58d4dfc81ba0/271548e2f39d/dfb89bcb8d9c/RCc3939e0bdbfb4304974b23dc7ced107c-source.min.js"
    async=""></script>
<script
    src="https://assets.adobedtm.com/58d4dfc81ba0/271548e2f39d/dfb89bcb8d9c/RC654bfbe131ea46dabcc18ae4ae5f64f6-source.min.js"
    async=""></script>
<script
    src="https://assets.adobedtm.com/58d4dfc81ba0/271548e2f39d/dfb89bcb8d9c/RCbb9425f27738470ab22051f4a5cfc391-source.min.js"
    async=""></script>
<meta http-equiv="origin-trial"
    content="A3v9QjmVUCOO7YqFMKHP/NKbn6kY1G1pa2S1TfeXJZUD/tysMONTy6lV0Jkou3rrCjSKRGbqTrgTaZkm1XJ7pQUAAACKeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ21hbmFnZXIuY29tOjQ0MyIsImZlYXR1cmUiOiJDb252ZXJzaW9uTWVhc3VyZW1lbnQiLCJleHBpcnkiOjE2NDMxNTUxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9">
<script type="text/javascript">
    //TnT Campaign = GTS Dcom - Recently Viewed Content Templates;
    //TnT Recipe = 5115-13814-1;

    if (typeof (s_tnt) == 'undefined') { var s_tnt = ''; }
    s_tnt += '150441:1:0,';
</script>
<script type="text/javascript">
    //TnT Campaign = Featured Dcom Footer (Prod);
    //TnT Recipe = 68950-50339-1;

    if (typeof (s_tnt) == 'undefined') { var s_tnt = ''; }
    s_tnt += '325538:1:0,';
</script>
<script type="text/javascript">
    //TnT Campaign = GTS Dcom Content Page Recommendations 2019;
    //TnT Recipe = 70884-13956-2;

    if (typeof (s_tnt) == 'undefined') { var s_tnt = ''; }
    s_tnt += '301013:2:0,';
</script>
<script type="text/javascript">
    //TnT Campaign = Prudential - UK all pages - navigation;
    //TnT Recipe = Experience A;

    if (typeof (s_tnt) == 'undefined') { var s_tnt = ''; }
    s_tnt += '605625:0:0,';
</script>
<link rel="stylesheet" type="text/css" href="https://www2.deloitte.com/content/dam/Deloitte/resources/css/Dcom-style-2021-06-09.min.css">
<script
    src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/836901514/?random=1645541826711&amp;cv=9&amp;fst=1645541826711&amp;num=1&amp;bg=ffffff&amp;guid=ON&amp;resp=GooglemKTybQhCsO&amp;eid=376635470&amp;u_h=1080&amp;u_w=1920&amp;u_ah=1040&amp;u_aw=1920&amp;u_cd=24&amp;u_his=2&amp;u_tz=-360&amp;u_java=false&amp;u_nplug=5&amp;u_nmime=2&amp;gtm=2wg2g0&amp;sendb=1&amp;ig=1&amp;frm=0&amp;url=https%3A%2F%2Fwww2.deloitte.com%2Fuk%2Fen%2Fpages%2Fpublic-sector%2Farticles%2Fenabling-population-health.html&amp;ref=https%3A%2F%2Fwww2.deloitte.com%2Fuk%2Fen%2Fpages%2Fpublic-sector%2Farticles%2Fpopulation-health-management.html&amp;tiba=Enabling%20Population%20Health&amp;hn=www.googleadservices.com&amp;async=1&amp;rfmt=3&amp;fmt=4"></script>
<script
    src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/869371813/?random=1645541826720&amp;cv=9&amp;fst=1645541826720&amp;num=1&amp;bg=ffffff&amp;guid=ON&amp;resp=GooglemKTybQhCsO&amp;eid=376635470&amp;u_h=1080&amp;u_w=1920&amp;u_ah=1040&amp;u_aw=1920&amp;u_cd=24&amp;u_his=2&amp;u_tz=-360&amp;u_java=false&amp;u_nplug=5&amp;u_nmime=2&amp;gtm=2wg2g0&amp;sendb=1&amp;ig=1&amp;frm=0&amp;url=https%3A%2F%2Fwww2.deloitte.com%2Fuk%2Fen%2Fpages%2Fpublic-sector%2Farticles%2Fenabling-population-health.html&amp;ref=https%3A%2F%2Fwww2.deloitte.com%2Fuk%2Fen%2Fpages%2Fpublic-sector%2Farticles%2Fpopulation-health-management.html&amp;tiba=Enabling%20Population%20Health&amp;hn=www.googleadservices.com&amp;async=1&amp;rfmt=3&amp;fmt=4"></script>
<script async="" src="https://script.hotjar.com/modules.7d6d0311dc6eb2c0bc38.js" charset="utf-8"></script>
<style type="text/css">
    iframe#_hjRemoteVarsFrame {
        display: none !important;
        width: 1px !important;
        height: 1px !important;
        opacity: 0 !important;
        pointer-events: none !important;
    }
</style>
<script
    src="https://assets.adobedtm.com/58d4dfc81ba0/271548e2f39d/dfb89bcb8d9c/RCb26ac2b85f324e2e802854f63df965c1-source.min.js"
    async=""></script>
<script
    src="https://assets.adobedtm.com/58d4dfc81ba0/271548e2f39d/dfb89bcb8d9c/RC1edbeef7f4ed4a42bf7af073498e88a2-source.min.js"
    async=""></script>
<script
    src="https://assets.adobedtm.com/58d4dfc81ba0/271548e2f39d/dfb89bcb8d9c/RC917ec1c6bd504ea291af93b1f5eb0b5c-source.min.js"
    async=""></script>
<script
    src="https://assets.adobedtm.com/58d4dfc81ba0/271548e2f39d/dfb89bcb8d9c/RC38365be774cc4bb89a1e810596f1663e-source.min.js"
    async=""></script>
<script
    src="https://assets.adobedtm.com/58d4dfc81ba0/271548e2f39d/dfb89bcb8d9c/RC5e87c065646448edad21ce43b04668ad-source.min.js"
    async=""></script>
<script
    src="https://assets.adobedtm.com/58d4dfc81ba0/271548e2f39d/dfb89bcb8d9c/RC4471ba7a81f14deab2016ea182a3781e-source.min.js"
    async=""></script>
</head>


<body class="ccm-enabled ng-scope" ng-app="appModule" ng-controller="appController" style="overflow: visible;">
<script type="text/javascript" async=""
    src="https://www.googletagservices.com/activeview/js/current/rx_lidar.js?cache=r20110914"></script>
<script
    src="https://ad.doubleclick.net/ddm/adj/N4378.197812NSO.CODESRV/B20384738.206973885;sz=1x2;ord=189928398855?"></script>



<noscript>
    <div
        style="background: #fbfbfb; color: red; border: 1px solid #DCDCDC; width: 95%; margin: 20px auto; padding: 20px; text-align: center; font-size: 16px; font-weight: 300; font-family: 'Open Sans', sans-serif;">
        Javascript is disabled
    </div>
</noscript>





<script>
    var dataLayer = {};
    var custom_data_1 = '';
    var custom_data_2 = '';
    var memberFirmAccountID = 'sp1004f5ce';
    var searchAllSitesAccountID = 'sp10050774';
    if (custom_data_1.length > 0) {
        custom_data_1 = sc_country + ';' + sc_language + '_' + (custom_data_1.toLowerCase()).replace(/ /g, "_");
    }
    if (custom_data_2.length > 0) {
        custom_data_2 = sc_country + ';' + sc_language + '_' + (custom_data_2.toLowerCase()).replace(/ /g, "_");
    }

    function getCookie(name) {
        var dc = document.cookie;
        var prefix = name + "=";
        var begin = dc.indexOf("; " + prefix);
        if (begin == -1) {
            begin = dc.indexOf(prefix);
            if (begin != 0) return null;
        }
        else {
            begin += 2;
            var end = document.cookie.indexOf(";", begin);
            if (end == -1) {
                end = dc.length;
            }
        }
        return unescape(dc.substring(begin + prefix.length, end));
    }


    var promoIds_attributes = '';
    var tagNames_attributes = '';
    var promoIds_disc_more = '';
    var tagNames_disc_more = '';
    var promoIds_next_steps = '';
    var promoIds_trending = '';
</script>


<div id="gigya-container" style="display: none;">

</div>






<div>







    <!-- This DOM is required for Edit mode only for showing Privancy message on Deloitte Simple Forms template starts-->

    <!-- This DOM is required for Edit mode only for showing Privancy message on Deloitte Simple Forms template ends-->
    <!-- US:526962 : adding offline banner component here-->


    <!-- adding DOM for offline or online mode US:526962 -->
    <div id="offline_display_message" class="offline-alert-wrapper" style="display: none;">
        <!-- TODO: add cloud offline icon here -->
        <span class="deloitte-icon icon-cloud-check"></span>
        <div class="container-space">
            <h5 class="heading-style">
                <b>Viewing offline content</b>
            </h5>
            <p class="msg-subtitle">
                Limited functionality available
            </p>
        </div>
        <div class="close-btn" onclick="closeOfflineBanner()">
            <b>Dismiss</b>
        </div>
    </div>

    <header class="cmp-header" id="header" role="banner">
        <div class="cmp-header-container cmp-container-width">

            <!-- hamburger button for mobile nav -->
            <button class="cmp-header__nav-icon" id="header__nav-icon" type="button" aria-label="Menu"
                aria-expanded="false">
                <i class="icon-navicon"></i>
            </button>

            <!-- Placeholder for Deloitte logo -->

            <div class="cmp-header__logo" id="header__logo">
                <a href="https://www2.deloitte.com/uk/en.html" title="Deloitte UK">
                    <img src="https://www2.deloitte.com/content/dam/assets/logos/deloitte.svg" alt="Deloitte UK" width="182" height="34">
                    <img class="cmp-header__logo--print" src="https://www2.deloitte.com/content/dam/assets/logos/deloitte-print.png" alt=""
                        width="182" height="34">
                </a>
            </div>


            <!-- Annotations DOM -->
            <div class="annotations">

                <img src="https://www2.deloitte.com/libs/cq/ui/resources/0.gif" class="cq-carousel-placeholder" alt="Annotations"
                    title="Annotations">

            </div>
            <!-- Annotations DOM ends-->

            <!-- Placeholder for primary navigation for desktop-->
            <div id="pr-nav" class="cmp-pr-nav">
                <nav role="navigation">
                    <ul role="menubar">


                        <li aria-haspopup="true" role="menuitem" class="cmp-pr-nav__item" id="list1">
                            <a href="#" data-sub="Services" class="cmp-pr-nav__item__link" aria-haspopup="true"
                                aria-expanded="false">Services<i class="icon-chevron"></i>
                            </a>
                            <!--Mega menu starts -->
                            <div class="cmp-pr-nav__menu" aria-expanded="false" aria-labelledby="list1">
                                <div class="cmp-container-width aem-Grid aem-Grid--12">
                                    <div
                                        class="cmp-pr-nav__menu__Whats-new-section aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">







                                        <h4>Highlights</h4>
                                        <ul>

                                            <li>
                                                <a href="https://www2.deloitte.com/uk/en/pages/consulting/articles/major-programmes.html?icid=wn_major-programmes"
                                                    target="_self">
                                                    <strong>Major Programmes</strong>
                                                    <p>Connecting people and technology to anticipate and respond to
                                                        ever-changing conditions, and solve for society???s greatest
                                                        challenges.</p>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="https://www2.deloitte.com/uk/en/pages/innovation/solutions/ventures.html?icid=wn_ventures"
                                                    target="_blank">
                                                    <strong>Deloitte Ventures</strong>
                                                    <p>Connecting our clients to emerging start-ups, leading
                                                        technology players and a whole raft of new Deloitte talent.
                                                    </p>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="https://www2.deloitte.com/uk/en/focus/climate-change.html?icid=wn_climate-change"
                                                    target="_self">
                                                    <strong>Towards net zero together</strong>
                                                    <p>Discover the people leading the change and what could be
                                                        possible for your business.</p>
                                                </a>
                                            </li>

                                        </ul>
                                    </div>
                                    <div
                                        class="cmp-pr-nav__menu__links-wrapper aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12">
                                        <!-- subnav items starts -->

                                        <ul class="cmp-pr-nav__menu__links-section aem-Grid aem-Grid--12">

                                            <li
                                                class="cmp-pr-nav__menu__item aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 navigation-column">
                                                <h4><a href="https://www2.deloitte.com/uk/en/services/audit.html?icid=top_audit"
                                                        target="_self">Audit &amp; Assurance</a></h4>

                                                <ul>




                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/audit/solutions/audit.html?icid=top_audit"
                                                            target="_self">
                                                            Audit</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/audit/articles/uk-accounting-plus.html?icid=top_uk-accounting-plus"
                                                            target="_self">
                                                            Audit - IASPlus</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/audit/solutions/assurance-services.html?icid=top_assurance-services"
                                                            target="_self">
                                                            Assurance</a>
                                                    </li>



                                                </ul>

                                            </li>

                                            <li
                                                class="cmp-pr-nav__menu__item aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 navigation-column">
                                                <h4><a href="https://www2.deloitte.com/uk/en/services/consulting.html?icid=top_consulting"
                                                        target="_self">Consulting</a></h4>

                                                <ul>




                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/strategy-operations/topics/core-business-operations.html?icid=top_core-business-operations"
                                                            target="_self">
                                                            Core Business Operations</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/strategy-operations/topics/customer-and-marketing.html?icid=top_customer-and-marketing"
                                                            target="_self">
                                                            Customer and Marketing</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/technology/topics/enterprise-technology-performance.html?icid=top_enterprise-technology-performance"
                                                            target="_self">
                                                            Enterprise Technology &amp; Performance</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/human-capital/topics/human-capital.html?icid=top_human-capital"
                                                            target="_self">
                                                            Human Capital</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/strategy-operations/topics/strategy-and-operations-consulting.html?icid=top_strategy-and-operations-consulting"
                                                            target="_self">
                                                            Strategy, Analytics and M&amp;A</a>
                                                    </li>



                                                </ul>

                                            </li>

                                            <li
                                                class="cmp-pr-nav__menu__item aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 navigation-column">
                                                <h4><a href="https://www2.deloitte.com/uk/en/services/financial-advisory.html?icid=top_financial-advisory"
                                                        target="_self">Financial Advisory</a></h4>

                                                <ul>




                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/mergers-and-acquisitions/topics/merger-and-acquisition-services.html?icid=top_merger-and-acquisition-services"
                                                            target="_self">
                                                            Mergers &amp; Acquisitions</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/financial-advisory/solutions/performance-improvement.html?icid=top_performance-improvement"
                                                            target="_self">
                                                            Performance Improvement</a>
                                                    </li>



                                                </ul>

                                            </li>



                                            <li
                                                class="cmp-pr-nav__menu__item aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                                <h4><a href="https://www2.deloitte.com/uk/en/services/legal.html?icid=top_legal"
                                                        target="_self">Legal</a></h4>

                                            </li>

                                            <li
                                                class="cmp-pr-nav__menu__item aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                                <h4><a href="https://www2.deloitte.com/uk/en/pages/private-markets/topics/deloitte-private.html?icid=top_deloitte-private"
                                                        target="_self">Deloitte Private</a></h4>

                                                <ul>




                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/private-markets/topics/family-enterprise.html?icid=top_family-enterprise"
                                                            target="_self">
                                                            Family Enterprises</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/private-markets/topics/private-equity.html?icid=top_private-equity"
                                                            target="_self">
                                                            Private Equity</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/private-markets/solutions/emerging-growth.html?icid=top_emerging-growth"
                                                            target="_self">
                                                            High Growth</a>
                                                    </li>



                                                </ul>

                                            </li>

                                            <li
                                                class="cmp-pr-nav__menu__item aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                                <h4><a href="https://www2.deloitte.com/uk/en/services/risk-advisory.html?icid=top_risk-advisory"
                                                        target="_self">Risk Advisory</a></h4>

                                                <ul>




                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/risk/topics/accounting-and-internal-controls.html?icid=top_accounting-and-internal-controls"
                                                            target="_self">
                                                            Accounting and Internal Controls</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/risk/topics/cyber-and-strategic-risk.html?icid=top_cyber-and-strategic-risk"
                                                            target="_self">
                                                            Cyber and Strategic Risk</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/risk/topics/regulatory-and-legal.html?icid=top_regulatory-and-legal"
                                                            target="_self">
                                                            Regulatory and Legal</a>
                                                    </li>



                                                </ul>

                                            </li>




                                            <li
                                                class="cmp-pr-nav__menu__item aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                                <h4><a href="https://www2.deloitte.com/uk/en/services/tax.html?icid=top_tax"
                                                        target="_self">Tax</a></h4>

                                                <ul>




                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/tax/solutions/business-tax.html?icid=top_business-tax"
                                                            target="_self">
                                                            Global Business Tax Services</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/tax/solutions/indirect-tax-vat-gst-sut.html?icid=top_indirect-tax-vat-gst-sut"
                                                            target="_self">
                                                            Indirect Tax</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/tax/solutions/global-employer-services-overview.html?icid=top_global-employer-services-overview"
                                                            target="_self">
                                                            Global Employer Services</a>
                                                    </li>



                                                </ul>

                                            </li>

                                            <li
                                                class="cmp-pr-nav__menu__item aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                                <h4><a></a></h4>

                                            </li>

                                            <li
                                                class="cmp-pr-nav__menu__item aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                                <h4><a></a></h4>

                                            </li>


                                        </ul>
                                        <div class="cmp-pr-nav__menu__close">
                                            <a href="" aria-label="Close" class="icon-remove"></a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </li>

                        <li aria-haspopup="true" role="menuitem" class="cmp-pr-nav__item" id="list2">
                            <a href="#" data-sub="Industries" class="cmp-pr-nav__item__link" aria-haspopup="true"
                                aria-expanded="false">Industries<i class="icon-chevron"></i>
                            </a>
                            <!--Mega menu starts -->
                            <div class="cmp-pr-nav__menu" aria-expanded="false" aria-labelledby="list2">
                                <div class="cmp-container-width aem-Grid aem-Grid--12">
                                    <div
                                        class="cmp-pr-nav__menu__Whats-new-section aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">







                                        <h4>Highlights</h4>
                                        <ul>

                                            <li>
                                                <a href="https://www2.deloitte.com/uk/en/pages/consulting/articles/alliances.html?icid=wn_alliances"
                                                    target="_self">
                                                    <strong>Ecosystems &amp; Alliances</strong>
                                                    <p>An engine to embrace and harness disruptive change</p>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="https://www2.deloitte.com/uk/en/pages/careers/articles/brightstart-business-apprenticeship-scheme.html?icid=wn_brightstart-business-apprenticeship-scheme"
                                                    target="_blank">
                                                    <strong>Our BrightStart Higher Apprenticeship</strong>
                                                    <p>Watch our people's stories </p>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="https://www2.deloitte.com/uk/en/pages/risk/topics/resilience-reimagined.html?icid=wn_resilience-reimagined"
                                                    target="_self">
                                                    <strong>Resilience Reimagined</strong>
                                                    <p>Resilient organisations thrive before, during and after
                                                        adversity. How will you become more resilient?</p>
                                                </a>
                                            </li>

                                        </ul>
                                    </div>
                                    <div
                                        class="cmp-pr-nav__menu__links-wrapper aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12">
                                        <!-- subnav items starts -->

                                        <ul class="cmp-pr-nav__menu__links-section aem-Grid aem-Grid--12">

                                            <li
                                                class="cmp-pr-nav__menu__item aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 navigation-column">
                                                <h4><a href="https://www2.deloitte.com/uk/en/industries/consumer.html?icid=top_consumer"
                                                        target="_self">Consumer</a></h4>

                                                <ul>




                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/manufacturing/topics/automotive-manufacturing.html?icid=top_automotive-manufacturing"
                                                            target="_self">
                                                            Automotive</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/consumer-business/topics/consumer-products.html?icid=top_consumer-products"
                                                            target="_self">
                                                            Consumer Products</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/consumer-business/topics/retail-wholesale-and-distribution.html?icid=top_retail-wholesale-and-distribution"
                                                            target="_self">
                                                            Retail, Wholesale &amp; Distribution</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/consumer-business/topics/transportation-hospitality-and-services.html?icid=top_transportation-hospitality-and-services"
                                                            target="_self">
                                                            Transportation, Hospitality &amp; Services</a>
                                                    </li>



                                                </ul>

                                            </li>

                                            <li
                                                class="cmp-pr-nav__menu__item aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 navigation-column">
                                                <h4><a href="https://www2.deloitte.com/uk/en/industries/energy-and-resources.html?icid=top_energy-and-resources"
                                                        target="_self">Energy, Resources &amp; Industrials</a></h4>

                                                <ul>




                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/manufacturing/topics/industrial-products.html?icid=top_industrial-products"
                                                            target="_self">
                                                            Industrial Products &amp; Construction</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/energy-and-resources/topics/metals-and-mining.html?icid=top_metals-and-mining"
                                                            target="_self">
                                                            Mining &amp; Metals</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/energy-and-resources/topics/oil-and-gas.html?icid=top_oil-and-gas"
                                                            target="_self">
                                                            Oil, Gas &amp; Chemicals</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/energy-and-resources/topics/power-and-utilities.html?icid=top_power-and-utilities"
                                                            target="_self">
                                                            Power, Utilities &amp; Renewables</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/energy-and-resources/articles/future-of-energy.html?icid=top_future-of-energy"
                                                            target="_self">
                                                            Future of Energy</a>
                                                    </li>



                                                </ul>

                                            </li>

                                            <li
                                                class="cmp-pr-nav__menu__item aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 navigation-column">
                                                <h4><a href="https://www2.deloitte.com/uk/en/industries/financial-services.html?icid=top_financial-services"
                                                        target="_self">Financial Services</a></h4>

                                                <ul>




                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/financial-services/topics/banking.html?icid=top_banking"
                                                            target="_self">
                                                            Banking</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/financial-services/topics/capital-markets-investment-banks.html?icid=top_capital-markets-investment-banks"
                                                            target="_self">
                                                            Capital Markets</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/financial-services/topics/insurance.html?icid=top_insurance"
                                                            target="_self">
                                                            Insurance</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/financial-services/topics/investment-management.html?icid=top_investment-management"
                                                            target="_self">
                                                            Investment Management</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/industries/real-estate.html?icid=top_real-estate"
                                                            target="_self">
                                                            Real Estate</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/innovation/topics/fintech.html?icid=top_fintech"
                                                            target="_self">
                                                            FinTech &amp; Alternative Finance</a>
                                                    </li>



                                                </ul>

                                            </li>



                                            <li
                                                class="cmp-pr-nav__menu__item aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                                <h4><a href="https://www2.deloitte.com/uk/en/industries/government-and-public-services.html?icid=top_government-and-public-services"
                                                        target="_self">Government &amp; Public Services</a></h4>

                                                <ul>




                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/life-sciences-and-healthcare/topics/health-care.html?icid=top_health-care"
                                                            target="_self">
                                                            Health &amp; Social Care</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/public-sector/topics/defence-security-justice.html?icid=top_defence-security-justice"
                                                            target="_self">
                                                            Defence, Security &amp; Justice</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/public-sector/topics/civil-government.html?icid=top_civil-government"
                                                            target="_self">
                                                            Civil Government</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/public-sector/topics/transport.html?icid=top_transport"
                                                            target="_self">
                                                            Transport</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/public-sector/topics/international-donor-organisations.html?icid=top_international-donor-organisations"
                                                            target="_self">
                                                            International Donor Organisations</a>
                                                    </li>



                                                </ul>

                                            </li>

                                            <li
                                                class="cmp-pr-nav__menu__item aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                                <h4><a href="https://www2.deloitte.com/uk/en/industries/life-sciences-and-healthcare.html?icid=top_life-sciences-and-healthcare"
                                                        target="_self">Life Sciences &amp; Health Care</a></h4>

                                                <ul>




                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/life-sciences-and-healthcare/topics/health-care.html?icid=top_health-care"
                                                            target="_self">
                                                            Health Care</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/life-sciences-and-healthcare/topics/life-sciences.html?icid=top_life-sciences"
                                                            target="_self">
                                                            Life Sciences</a>
                                                    </li>



                                                </ul>

                                            </li>

                                            <li
                                                class="cmp-pr-nav__menu__item aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                                <h4><a href="https://www2.deloitte.com/uk/en/industries/technology-media-and-telecommunications.html?icid=top_technology-media-and-telecommunications"
                                                        target="_self">Technology, Media &amp;
                                                        Telecommunications</a></h4>

                                                <ul>




                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/technology-media-and-telecommunications/topics/telecom-media-entertainment.html?icid=top_telecom-media-entertainment"
                                                            target="_self">
                                                            Telecommunications, Media &amp; Entertainment</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/technology-media-and-telecommunications/topics/technology.html?icid=top_technology"
                                                            target="_self">
                                                            Technology</a>
                                                    </li>



                                                </ul>

                                            </li>



                                        </ul>
                                        <div class="cmp-pr-nav__menu__close">
                                            <a href="" aria-label="Close" class="icon-remove"></a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </li>

                        <li aria-haspopup="true" role="menuitem" class="cmp-pr-nav__item" id="list3">
                            <a href="#" data-sub="Insights" class="cmp-pr-nav__item__link" aria-haspopup="true"
                                aria-expanded="false">Insights<i class="icon-chevron"></i>
                            </a>
                            <!--Mega menu starts -->
                            <div class="cmp-pr-nav__menu" aria-expanded="false" aria-labelledby="list3">
                                <div class="cmp-container-width aem-Grid aem-Grid--12">
                                    <div
                                        class="cmp-pr-nav__menu__Whats-new-section aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">


                                        <h4></h4>
                                        <a class="logo" href="https://www2.deloitte.com/uk/en/insights.html" title="Deloitte Insights">
                                            <img src="https://www2.deloitte.com/etc/designs/insights/insights-redesign/images/logo.svg"
                                                alt="Deloitte Insights" class="logo-insight">
                                        </a>








                                        <h4>Highlights</h4>
                                        <ul>

                                            <li>
                                                <a href="https://www2.deloitte.com/uk/en/insights/deloitte-insights-magazine.html?icid=wn_deloitte-insights-magazine"
                                                    target="_self">
                                                    <strong>Deloitte Insights Magazine</strong>
                                                    <p>Explore the latest issue now</p>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="https://www2.deloitte.com/uk/en/insights/legal/deloitte-insights-app.html?icid=wn_deloitte-insights-app"
                                                    target="_blank">
                                                    <strong>Deloitte Insights app</strong>
                                                    <p>Go straight to smart with daily updates on your mobile device
                                                    </p>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="https://www2.deloitte.com/uk/en/insights/economy/global-economic-outlook/weekly-update.html?icid=wn_weekly-update"
                                                    target="_self">
                                                    <strong>Weekly economic update</strong>
                                                    <p>See what's happening this week and the impact on your
                                                        business</p>
                                                </a>
                                            </li>

                                        </ul>
                                    </div>
                                    <div
                                        class="cmp-pr-nav__menu__links-wrapper aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12">
                                        <!-- subnav items starts -->

                                        <ul class="cmp-pr-nav__menu__links-section aem-Grid aem-Grid--12">

                                            <li
                                                class="cmp-pr-nav__menu__item aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 navigation-column">
                                                <h4><a target="_self">Strategy</a></h4>

                                                <ul>




                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/insights/topics/strategy.html?icid=top_strategy"
                                                            target="_self">
                                                            Business Strategy &amp; Growth</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/insights/topics/digital-transformation.html?icid=top_digital-transformation"
                                                            target="_self">
                                                            Digital Transformation</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/insights/governance-and-board.html?icid=top_governance-and-board"
                                                            target="_self">
                                                            Governance &amp; Board</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/insights/topics/innovation.html?icid=top_innovation"
                                                            target="_self">
                                                            Innovation</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/insights/topics/marketing-and-sales-operations.html?icid=top_marketing-and-sales-operations"
                                                            target="_self">
                                                            Marketing &amp; Sales</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/insights/topics/private-companies.html?icid=top_private-companies"
                                                            target="_self">
                                                            Private Enterprise</a>
                                                    </li>



                                                </ul>

                                            </li>

                                            <li
                                                class="cmp-pr-nav__menu__item aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 navigation-column">
                                                <h4><a target="_self">Economy &amp; Society</a></h4>

                                                <ul>




                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/insights/economy.html?icid=top_economy"
                                                            target="_self">
                                                            Economy</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/insights/environmental-social-governance.html?icid=top_environmental-social-governance"
                                                            target="_self">
                                                            Environmental, Social, &amp; Governance</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/insights/health-equity.html?icid=top_health-equity"
                                                            target="_self">
                                                            Health Equity</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/insights/topics/leadership/building-trust-in-business-and-leadership.html?icid=top_building-trust-in-business-and-leadership"
                                                            target="_self">
                                                            Trust</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/insights/focus/future-of-mobility.html?icid=top_future-of-mobility"
                                                            target="_self">
                                                            Mobility</a>
                                                    </li>



                                                </ul>

                                            </li>

                                            <li
                                                class="cmp-pr-nav__menu__item aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 navigation-column">
                                                <h4><a target="_self">Organization</a></h4>

                                                <ul>




                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/insights/topics/operations.html?icid=top_operations"
                                                            target="_self">
                                                            Operations</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/insights/finance-transformation.html?icid=top_finance-transformation"
                                                            target="_self">
                                                            Finance &amp; Tax</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/insights/topics/risk-management.html?icid=top_risk-management"
                                                            target="_self">
                                                            Risk &amp; Regulation</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/insights/focus/supply-chain.html?icid=top_supply-chain"
                                                            target="_self">
                                                            Supply Chain</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/insights/topics/advanced-manufacturing.html?icid=top_advanced-manufacturing"
                                                            target="_self">
                                                            Smart Manufacturing</a>
                                                    </li>



                                                </ul>

                                            </li>



                                            <li
                                                class="cmp-pr-nav__menu__item aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                                <h4><a target="_self">People</a></h4>

                                                <ul>




                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/insights/topics/leadership.html?icid=top_leadership"
                                                            target="_self">
                                                            Leadership</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/insights/topics/talent.html?icid=top_talent"
                                                            target="_self">
                                                            Talent &amp; Work</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/insights/topics/value-of-diversity-and-inclusion.html?icid=top_value-of-diversity-and-inclusion"
                                                            target="_self">
                                                            Diversity, Equity, &amp; Inclusion</a>
                                                    </li>



                                                </ul>

                                            </li>

                                            <li
                                                class="cmp-pr-nav__menu__item aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                                <h4><a target="_self">Technology</a></h4>

                                                <ul>




                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/insights/topics/analytics.html?icid=top_analytics"
                                                            target="_self">
                                                            Data &amp; Analytics</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/insights/topics/emerging-technologies.html?icid=top_emerging-technologies"
                                                            target="_self">
                                                            Emerging Technologies</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/insights/technology-management.html?icid=top_technology-management"
                                                            target="_self">
                                                            Technology Management</a>
                                                    </li>



                                                </ul>

                                            </li>

                                            <li
                                                class="cmp-pr-nav__menu__item aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                                <h4><a target="_self">Industries</a></h4>

                                                <ul>




                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/insights/consumer-industry.html?icid=top_consumer-industry"
                                                            target="_self">
                                                            Consumer</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/insights/energy-resources-industrials.html?icid=top_energy-resources-industrials"
                                                            target="_self">
                                                            Energy, Resources, &amp; Industrials</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/insights/industry/financial-services.html?icid=top_financial-services"
                                                            target="_self">
                                                            Financial Services</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/insights/industry/public-sector.html?icid=top_public-sector"
                                                            target="_self">
                                                            Government &amp; Public Services</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/insights/life-sciences-health-care.html?icid=top_life-sciences-health-care"
                                                            target="_self">
                                                            Life Sciences &amp; Health Care</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/insights/technology-media-telecommunications.html?icid=top_technology-media-telecommunications"
                                                            target="_self">
                                                            Technology, Media, &amp; Telecommunications</a>
                                                    </li>



                                                </ul>

                                            </li>




                                            <li
                                                class="cmp-pr-nav__menu__item aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                                <h4><a target="_self">Spotlight</a></h4>

                                                <ul>




                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/insights/deloitte-insights-magazine.html?icid=top_deloitte-insights-magazine"
                                                            target="_self">
                                                            Deloitte Insights Magazine</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/insights/multimedia/podcasts.html?icid=top_podcasts"
                                                            target="_self">
                                                            Press Room Podcasts</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/insights/economy/global-economic-outlook/weekly-update.html?icid=top_weekly-update"
                                                            target="_self">
                                                            Weekly Economic Update</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/insights/economy/covid-19.html?icid=top_covid-19"
                                                            target="_self">
                                                            COVID-19</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/insights/resilience.html?icid=top_resilience"
                                                            target="_self">
                                                            Resilience</a>
                                                    </li>



                                                </ul>

                                            </li>

                                            <li
                                                class="cmp-pr-nav__menu__item aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                                <h4><a></a></h4>

                                            </li>

                                            <li
                                                class="cmp-pr-nav__menu__item aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                                <h4><a></a></h4>

                                            </li>


                                        </ul>
                                        <div class="cmp-pr-nav__menu__close">
                                            <a href="" aria-label="Close" class="icon-remove"></a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </li>

                        <li aria-haspopup="true" role="menuitem" class="cmp-pr-nav__item" id="list4">
                            <a href="#" data-sub="Careers" class="cmp-pr-nav__item__link" aria-haspopup="true"
                                aria-expanded="false">Careers<i class="icon-chevron"></i>
                            </a>
                            <!--Mega menu starts -->
                            <div class="cmp-pr-nav__menu" aria-expanded="false" aria-labelledby="list4">
                                <div class="cmp-container-width aem-Grid aem-Grid--12">
                                    <div
                                        class="cmp-pr-nav__menu__Whats-new-section aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">







                                        <h4>Highlights</h4>
                                        <ul>

                                            <li>
                                                <a href="https://www2.deloitte.com/uk/en/pages/careers/articles/locations.html?icid=wn_locations"
                                                    target="_self">
                                                    <strong>Our Locations</strong>
                                                    <p>Find out more about our locations and what it's like to work
                                                        across all our offices within the UK</p>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="https://www2.deloitte.com/uk/en/pages/careers/articles/return-to-work.html?icid=wn_return-to-work"
                                                    target="_blank">
                                                    <strong>Return to Work</strong>
                                                    <p>Discover our supported hiring opportunities

                                                    </p>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="https://www2.deloitte.com/uk/en/pages/careers/articles/women-in-technology.html?icid=wn_women-in-technology"
                                                    target="_self">
                                                    <strong>Women in Technology</strong>
                                                    <p>At Deloitte we believe in diversity in all its forms</p>
                                                </a>
                                            </li>

                                        </ul>
                                    </div>
                                    <div
                                        class="cmp-pr-nav__menu__links-wrapper aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12">
                                        <!-- subnav items starts -->

                                        <ul class="cmp-pr-nav__menu__links-section aem-Grid aem-Grid--12">

                                            <li
                                                class="cmp-pr-nav__menu__item aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 navigation-column">
                                                <h4><a href="https://www2.deloitte.com/uk/en/careers/careers.html?icid=top_careers"
                                                        target="_self">Careers Home</a></h4>

                                            </li>

                                            <li
                                                class="cmp-pr-nav__menu__item aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 navigation-column">
                                                <h4><a href="https://www2.deloitte.com/uk/en/careers/life-at-deloitte.html?icid=top_life-at-deloitte"
                                                        target="_self">Life at Deloitte</a></h4>

                                            </li>

                                            <li
                                                class="cmp-pr-nav__menu__item aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 navigation-column">
                                                <h4><a href="https://www2.deloitte.com/uk/en/careers/professionals.html?icid=top_professionals"
                                                        target="_self">Professional Careers</a></h4>

                                            </li>



                                            <li
                                                class="cmp-pr-nav__menu__item aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                                <h4><a href="https://www2.deloitte.com/uk/en/pages/careers/articles/selection-process.html?icid=top_selection-process"
                                                        target="_self">Early Careers Application</a></h4>

                                                <ul>




                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/careers/articles/selection-process.html?icid=top_selection-process"
                                                            target="_self">
                                                            Assessment Process</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/careers/articles/student-graduate-faqs.html?icid=top_"
                                                            target="_blank">
                                                            Frequently Asked Questions</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://meetandengage.com/deloittestudenthelpdesk?icid=top_"
                                                            target="_blank">
                                                            Key Updates &amp; Help</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/careers/articles/learning-and-development-students.html?icid=top_learning-and-development-students"
                                                            target="_self">
                                                            Learning &amp; Development</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/careers/articles/academic-requirements.html?icid=top_academic-requirements"
                                                            target="_self">
                                                            Requirements</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/careers/articles/student-events.html?icid=top_student-events"
                                                            target="_self">
                                                            Student &amp; Graduate Events</a>
                                                    </li>



                                                </ul>

                                            </li>

                                            <li
                                                class="cmp-pr-nav__menu__item aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                                <h4><a href="https://www2.deloitte.com/uk/en/careers/programmes.html?icid=top_programmes"
                                                        target="_self">Early Careers Programmes</a></h4>

                                                <ul>




                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/careers/articles/early-careers-work-experience.html?icid=top_early-careers-work-experience"
                                                            target="_self">
                                                            Career Shapers</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/careers/articles/apprenticeship-scheme.html?icid=top_apprenticeship-scheme"
                                                            target="_self">
                                                            Entry Level Apprenticeship</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/careers/articles/brightstart-business-apprenticeship-scheme.html?icid=top_brightstart-business-apprenticeship-scheme"
                                                            target="_self">
                                                            BrightStart Higher Apprenticeship</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/careers/articles/spring-into-deloitte.html?icid=top_spring-into-deloitte"
                                                            target="_self">
                                                            Spring into Deloitte</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/careers/articles/summer-vacation-scheme.html?icid=top_summer-vacation-scheme"
                                                            target="_self">
                                                            Summer Vacation Scheme</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/careers/articles/industrial-placements.html?icid=top_industrial-placements"
                                                            target="_self">
                                                            Industrial Placements</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/careers/articles/graduate-opportunities.html?icid=top_graduate-opportunities"
                                                            target="_self">
                                                            Graduate Programme</a>
                                                    </li>



                                                </ul>

                                            </li>

                                            <li
                                                class="cmp-pr-nav__menu__item aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                                <h4><a href="https://www2.deloitte.com/uk/en/careers/students.html?icid=top_students"
                                                        target="_self">Early Careers Paths</a></h4>

                                                <ul>




                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/careers/articles/student-audit-finance.html?icid=top_student-audit-finance"
                                                            target="_self">
                                                            Audit &amp; Assurance</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/careers/articles/student-business-financial-advisory.html?icid=top_student-business-financial-advisory"
                                                            target="_self">
                                                            Business &amp; Financial Advisory</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/careers/articles/student-consulting.html?icid=top_student-consulting"
                                                            target="_self">
                                                            Consulting</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/careers/articles/student-cyber-risk.html?icid=top_student-cyber-risk"
                                                            target="_self">
                                                            Cyber</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/careers/articles/student-governance-risk-regulation.html?icid=top_student-governance-risk-regulation"
                                                            target="_self">
                                                            Governance, Risk &amp; Regulation</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/careers/articles/student-human-capital.html?icid=top_student-human-capital"
                                                            target="_self">
                                                            Human Capital &amp; Actuarial</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/careers/articles/student-deloitte-legal.html?icid=top_student-deloitte-legal"
                                                            target="_self">
                                                            Legal</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/careers/articles/student-real-estate.html?icid=top_student-real-estate"
                                                            target="_self">
                                                            Real Estate</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/careers/articles/student-tax.html?icid=top_student-tax"
                                                            target="_self">
                                                            Tax Consulting</a>
                                                    </li>






                                                    <li>
                                                        <a href="https://www2.deloitte.com/uk/en/pages/careers/articles/student-technology.html?icid=top_student-technology"
                                                            target="_self">
                                                            Technology</a>
                                                    </li>



                                                </ul>

                                            </li>



                                        </ul>
                                        <div class="cmp-pr-nav__menu__close">
                                            <a href="" aria-label="Close" class="icon-remove"></a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="cmp-pr-nav__site-selector cmp-pr-nav__item" role="menuitem">


                            <a href="javascript:void(0)" class="cmp-header__ut-nav__site-sel__link location-link"
                                data-toggle="siteSelector" aria-expanded="false" role="button">
                                <span class="desk-countrySelector">UK-EN</span>
                                <span class="mobile-location">Location:</span>
                                <span class="mobile-countrySelector">United Kingdom-English</span>
                                &nbsp;
                                <i class="icon-chevron"></i>
                            </a>
                        </li>

                    </ul>
                </nav>
                <div class="menu-overlay"></div>
            </div>
            <!-- Placeholder for Search box, Site selector and other links-->
            <div class="cmp-header__ut-wrapper">

                <!-- interanl search -->
                <div class="cmp-search" id="internal-search">
                    <div class="aem-Grid aem-Grid--12">
                        <div class="aem-GridColumn aem-GridColumn--phone--1 cmp-header__mobile--close">
                            <button class="cmp-search__remove-icon" type="button" aria-label="Close"
                                aria-expanded="false"> <i class="icon-remove"></i> </button>
                        </div>
                        <div class="aem-GridColumn aem-GridColumn--phone--11 cmp-header__mobile--searchinput">






                            <div class="cmp-search__form">
                                <ds-search-bar _nghost-htd-c37="" ng-version="10.1.3">
                                    <div _ngcontent-htd-c37="" id="cmp-advanced-search"
                                        class="cmp-advanced-search cmp-advanced-search--open cmp-advanced-search--dark">
                                        <div _ngcontent-htd-c37=""
                                            class="cmp-advanced-search__form ng-untouched ng-pristine ng-valid">
                                            <div _ngcontent-htd-c37="" class="cmp-advanced-search__facets"
                                                style="display: none;"><select _ngcontent-htd-c37="" tabindex="0"
                                                    id="preConfiguredFacets" formcontrolname="facet"
                                                    class="cmp-advanced-search__facetsSelect ng-untouched ng-pristine ng-valid">
                                                    <option _ngcontent-htd-c37="" value="0: Object">All results
                                                    </option>
                                                    <option _ngcontent-htd-c37="" value="1: Object">Profiles
                                                    </option>
                                                    <option _ngcontent-htd-c37="" value="2: Object">Events</option>
                                                    <option _ngcontent-htd-c37="" value="3: Object">Articles
                                                    </option>
                                                    <option _ngcontent-htd-c37="" value="4: Object">Topics</option>
                                                    <option _ngcontent-htd-c37="" value="5: Object">Solutions
                                                    </option>
                                                    <!---->
                                                </select><label _ngcontent-htd-c37="" for="preConfiguredFacets"
                                                    class="cmp-advanced-search__facetsLabel"> All results <i
                                                        _ngcontent-htd-c37=""
                                                        class="cmp-advanced-search__facetsArrow icon-chevron-down"></i></label>
                                            </div>
                                            <div _ngcontent-htd-c37="" class="cmp-advanced-search__field"><input
                                                    _ngcontent-htd-c37="" type="text" title="search"
                                                    autocomplete="off" formcontrolname="searchTerm"
                                                    class="cmp-advanced-search__input ng-untouched ng-pristine ng-valid"
                                                    id="" placeholder="Search">
                                                <ds-suggestions _ngcontent-htd-c37=""
                                                    class="cmp-advanced-search__suggestion" _nghost-htd-c36="">
                                                    <ul _ngcontent-htd-c36="" dsclickoutside="" role="listbox"
                                                        class="cmp-advanced-search-suggestion"
                                                        aria-label="Search suggestions">
                                                        <!---->
                                                    </ul>
                                                </ds-suggestions><button _ngcontent-htd-c37=""
                                                    class="cmp-advanced-search__button" title="Search"><i
                                                        _ngcontent-htd-c37="" class="icon-search"></i></button>
                                            </div>
                                        </div><label _ngcontent-htd-c37=""
                                            class="cmp-advanced-search__button cmp-advanced-search__button--open"
                                            for=""><i _ngcontent-htd-c37="" class="icon-search"></i></label>
                                    </div>
                                </ds-search-bar>

                                <ds-search hidden="" _nghost-htd-c19="" ng-version="10.1.3">
                                    <div _ngcontent-htd-c19="" id="cmp-search-page" role="main"
                                        class="cmp-search-page padding-0" style="margin-top: 69px;">
                                        <div _ngcontent-htd-c19="" class="aem-Grid aem-Grid--1">
                                            <!---->
                                        </div>
                                        <div _ngcontent-htd-c19="" class="aem-Grid aem-Grid--10">
                                            <!---->
                                        </div>
                                        <!---->
                                        <!----><span _ngcontent-htd-c19="" id="new-window-label"
                                            class="audible">Open in new window</span>
                                    </div>
                                </ds-search>

                            </div>





                        </div>
                    </div>
                </div>
                <ul id="header__ut-nav" class="cmp-header__ut-nav">
                    <li id="header__ut-nav__search-icon" class="cmp-header__ut-nav__search-icon">
                        <button class="" type="button" aria-label="Search">
                            <i class="icon-search"></i>
                        </button>
                    </li>
                    <li id="header__ut-nav__site-sel" class="cmp-header__ut-nav__site-sel">
                        <!-- site selector component-->


                        <a href="javascript:void(0)" class="cmp-header__ut-nav__site-sel__link location-link"
                            data-toggle="siteSelector" aria-expanded="false" role="button">
                            <span class="desk-countrySelector">UK-EN</span>
                            <span class="mobile-location">Location:</span>
                            <span class="mobile-countrySelector">United Kingdom-English</span>
                            &nbsp;
                            <i class="icon-chevron"></i>
                        </a>
                    </li>


                    <!-- When Gigya is enabled DOM starts for Register Links starts-->

                    <li id="register" class="cmp-header__ut-nav__reg-link">
                        <a class="icon-profile-outline icon" aria-label="profile outline"
                            href="https://my.deloitte.com/?site=uk-en" title="Join My Deloitte">
                        </a>
                    </li>
                    <li id="profile_pic_id" class="profile-pic" aria-expanded="false">
                        <span id="profile_pic_span" class="logged-in icon">
                            <img id="profile_pic">
                        </span>
                        <a id="profile_pic_id_mobile" href="https://my.deloitte.com/dashboard.html" target="_blank"
                            class="header-button mobile-register-button logged-in"><span
                                class="profile_pic_span_mobile"><img id="profile_pic_mobile"></span></a>
                        <ul class="nav-content" id="nav-content" role="menu">

                            <li role="menuitem">
                                <a href="https://my.deloitte.com/uk/en/dashboard.html?requestedBy=dcom&amp;pullDown=true&amp;site=uk-en"
                                    target="_blank" class="icon-dashboard"
                                    onclick="setCookieForPullDownMenu()">Dashboard</a>
                            </li>

                            <li role="menuitem">
                                <a href="https://my.deloitte.com/uk/en/bookmarks.html?requestedBy=dcom&amp;pullDown=true&amp;site=uk-en"
                                    target="_blank" class="icon-bookmark-o"
                                    onclick="setCookieForPullDownMenu()">Saved Items</a>
                            </li>

                            <li role="menuitem">
                                <a href="https://my.deloitte.com/uk/en/feed.html?requestedBy=dcom&amp;pullDown=true&amp;site=uk-en"
                                    target="_blank" class="icon-tags-o" onclick="setCookieForPullDownMenu()">Content
                                    feed</a>
                            </li>

                            <li role="menuitem">
                                <a href="https://my.deloitte.com/uk/en/profile.html?requestedBy=dcom&amp;pullDown=true&amp;site=uk-en"
                                    target="_blank" class="icon-profile-outline"
                                    onclick="setCookieForPullDownMenu()">Profile/Interests</a>
                            </li>

                            <li role="menuitem">
                                <a href="https://my.deloitte.com/uk/en/accountsettings.html?requestedBy=dcom&amp;pullDown=true&amp;site=uk-en"
                                    target="_blank" class="icon-configure"
                                    onclick="setCookieForPullDownMenu()">Account settings</a>
                            </li>

                            <li>
                                <button class="signout_button" href="#" onclick="logOut();">Log out</button>
                            </li>
                        </ul>
                    </li>

                    <!-- When Gigya is enabled DOM starts for Register Links -->

                </ul>
            </div>
        </div>

        <!-- DOM added for Breadcrumb Language toggle component starts-->



        <!-- DOM added for Breadcrumb Language toggle component ends-->


        <!-- Variables used for elastic search purpose starts-->
        <script>
            var meta_engine = 'https://e44dfae36b9d42e4b3c1af5464bc42e0.ent-search.northeurope.azure.elastic-cloud.com/api/as/v1/engines/prod-all-content';
            var search_engine = 'https://e44dfae36b9d42e4b3c1af5464bc42e0.ent-search.northeurope.azure.elastic-cloud.com/api/as/v1/engines/prod-english';
            var search_key = 'search-7d29t4baf6qrobjadv5t2p7v';
            var searchFacets = "[{&quot;anchor&quot;:&quot;Insights&quot;,&quot;label_with_op&quot;:&quot;INDEXING_ARTICLE|INDEXING_HOME|INDEXING_MOOCTEMPLATE|INDEXING_MULTIMEDIATEMPLATE|INDEXING_INSIGHTS_ARTICLE_MULTIMEDIA|INDEXING_DI_HOME_PAGE|INDEXING_INSIGHTS_BRANDED_LANDING_PAGE|INDEXING_TOPIC-TWO-ZERO-DI-TEMPLATE&quot;},{&quot;anchor&quot;:&quot;Profiles&quot;,&quot;label_with_op&quot;:&quot;INDEXING_PROFILES&quot;},{&quot;anchor&quot;:&quot;Events&quot;,&quot;label_with_op&quot;:&quot;INDEXING_EVENTS|INDEXING_EVENT_DETAILS|INDEXING_EVENTS_LISTING&quot;},{&quot;anchor&quot;:&quot;Articles&quot;,&quot;label_with_op&quot;:&quot;INDEXING_ARTICLES&quot;},{&quot;anchor&quot;:&quot;Topics&quot;,&quot;label_with_op&quot;:&quot;INDEXING_TOPICS&quot;},{&quot;anchor&quot;:&quot;Solutions&quot;,&quot;label_with_op&quot;:&quot;INDEXING_SOLUTIONS|INDEXING_LANDING_PAGE_THEME1&quot;}]";
            searchFacets = searchFacets.replace(/&quot;/g, '"');
            var internalFacets = JSON.parse(searchFacets);
            var filter_by = "Filter by";
            var cse_AllResultsLabel = "All results";
            var results_for = "Results for";
            var max_results = "More than 100 results";
            var search_placeholder = "Search";
            var Search_result_term = "";
            var word_results = "results found";
            var word_result = "result found";
            var search_suggestions = "Search suggestions";
        </script>
        <!-- Variables used for elastic search purpose ends-->

    </header>
</div>


<div id="datalayerdiv">
    <script type="text/javascript">
        dataLayer.page = {
            "attributes": {
                "pageID": "162319c7",
                "pagename": "/uk/en/pages/public-sector/articles/enabling-population-health",
                "country": "united kingdom",
                "language": "en",
                "urlCountry": "uk",
                "pageTemplate": "Deloitte_Article_Page",
                "siteSection": "public-sector",
                "documentAge": "1063",
                "pageTitle": "Enabling_Population_Health_|_Deloitte_UK",
                "blueprintName": "",
                "createDate": "26 Mar. 2019",
                "publishDate": "19 Mar. 2019",
                "tag2": "Public Sector Technology",
                "description": "From our work with health systems both in the UK and internationally, we have identified four building blocks (infrastructure, insight, interventions and impacts) and nine critical success factors for achieving better Population Health Management (PHM).",
                "headline1": "",
                "headline2": "",
                "mfSite": "Deloitte",
                "primaryTopic": "",
                "contentLabel18n": "Content_type_insights"
            }
        };
        dataLayer.search = {
            "searchTerm": "",
            "pageNum": "1",
            "Facet": "all"
        };
        dataLayer.custom = {
            "customConversion1": "",
            "customConversion2": "",
            "customConversion3": "",
            "customConversion4": "",
            "customConversion5": "",
            "customConversion6": "",
            "customConversion7": "",
            "customTraffic1": "",
            "customTraffic2": "",
            "customTraffic3": "",
            "customTraffic4": "",
            "customTraffic5": "",
            "customActions": "",
            "targetingCodes": ""
        };
    </script>
</div>

<div class="wrapper content-page" style="top: 70px;">



    <script>
        function getCookie(name) {
            var dc = document.cookie;
            var prefix = name + "=";
            var begin = dc.indexOf("; " + prefix);
            if (begin == -1) {
                begin = dc.indexOf(prefix);
                if (begin != 0) return null;
            }
            else {
                begin += 2;
                var end = document.cookie.indexOf(";", begin);
                if (end == -1) {
                    end = dc.length;
                }
            }
            return unescape(dc.substring(begin + prefix.length, end));
        }

    </script>



    <div class="main-container content-page headerimage">
        <div class="content main">






            <script>
                function closePopup() {
                    $(".mydeloitte-alert--success,.mydeloitte-alert--danger,.mydeloitte-alert--warning").hide().removeClass("alert-show");
                    $(".mydeloitte-alert--success,.mydeloitte-alert--danger,.mydeloitte-alert--warning,.mydeloitte-alert").css("top", "");
                    $("#header").css("margin-top", "0");
                    $(".main-container.content-page").css("margin-top", "0");
                    alertHeight = $(".mydeloitte-alert").outerHeight(true);
                }
            </script>
            <div style="display: none;" class="mydeloitte-alert mydeloitte-alert--success">
                <div class="container">
                    <div class="row mydeloitte-alert-body">
                        <!-- alert main -->
                        <div class="col-md-1">
                            <span class="mydeloitte-alert-body__icon icon-myDeloitte-circle icon-check"></span>
                        </div>
                        <!-- alert body text -->
                        <div class="col-md-8">
                            <div class="mydeloitte-alert-body-text">
                                <p class="mb-0" id="bookmark-detail"><span id="bookmark-title"><strong>Enabling
                                            Population Health</strong></span> has been saved </p>
                            </div>
                        </div>
                        <!-- control buttons -->
                        <div class="col-md-3">
                            <div class="ctrl-btns">
                                <a target="_blank"
                                    href="https://my.deloitte.com/dashboard.html?requestedBy=dcom&amp;site=uk-en"><button
                                        class="secondary-small-button">My Deloitte </button></a>
                            </div>
                        </div>

                        <!-- close button -->
                        <button type="button" class="close" aria-label="alert-close" onclick="closePopup()">
                            <span>??</span>
                        </button>
                    </div>
                </div>
            </div>
            <div style="display:none" class="mydeloitte-alert mydeloitte-alert--danger">
                <div class="container">
                    <div class="row mydeloitte-alert-body">
                        <!-- alert main -->
                        <div class="col-md-1">
                            <span
                                class="mydeloitte-alert-body__icon icon-myDeloitte-circle icon-file-text-o"></span>
                        </div>
                        <!-- alert body text -->
                        <div class="col-md-7">
                            <div class="mydeloitte-alert-body-text">

                                <p class="mb-0" id="bookmark-detail"><span id="bookmark-title"><strong>Enabling
                                            Population Health</strong></span> has been removed </p>
                            </div>
                        </div>
                        <!-- control buttons -->
                        <div class="col-md-4">
                            <button onclick="bookMarkPage(bookmarkJSONStr)"
                                class="secondary-small-button">Undo</button>
                            <a target="_blank"
                                href="https://my.deloitte.com/dashboard.html?requestedBy=dcom&amp;site=uk-en"><button
                                    class="secondary-small-button">My Deloitte </button></a>

                        </div>

                        <!-- close button -->
                        <button type="button" class="close" aria-label="alert-close" onclick="closePopup()">
                            <span>??</span>
                        </button>
                    </div>
                </div>
            </div>
            <div style="display:none" class="mydeloitte-alert mydeloitte-alert--warning">
                <div class="container">
                    <div class="row mydeloitte-alert-body">
                        <!-- alert main -->
                        <div class="col-md-1">
                            <span
                                class="mydeloitte-alert-body__icon icon-myDeloitte-circle icon-file-text-o"></span>
                        </div>
                        <!-- alert body text -->
                        <div class="col-md-8">
                            <div class="mydeloitte-alert-body-text">
                                <p class="mb-0" id="bookmark-detail">An Article Titled <span
                                        id="bookmark-title"><strong>Enabling Population Health</strong></span>
                                    already exists in Saved items </p>
                            </div>
                        </div>
                        <!-- control buttons -->
                        <div class="col-md-3">
                            <div class="ctrl-btns">
                                <a target="_blank"
                                    href="https://my.deloitte.com/dashboard.html?requestedBy=dcom&amp;site=uk-en"><button
                                        class="secondary-small-button">My Deloitte </button></a>
                            </div>
                        </div>

                        <!-- close button -->
                        <button type="button" class="close" aria-label="alert-close" onclick="closePopup()">
                            <span>??</span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="headerintro">









                <div class="headerintro" id="content__header-intro">
















                    <!-- Modified here-->


                    <div class="header-intro-container perspective-color">

                        <div class="responsive-img-container">

                            <img id="article-hero-img" class="responsive-img"
                                src="https://www2.deloitte.com/content/dam/Deloitte/uk/Images/header_images/Campaign/public-sector/deloitte-uk-public-sector-enabling-population-health-banner.png/_jcr_content/renditions/cq5dam.web.1400.350.desktop.jpeg"
                                data-orgsrc="https://www2.deloitte.com/content/dam/Deloitte/uk/Images/header_images/Campaign/public-sector/deloitte-uk-public-sector-enabling-population-health-banner.png"
                                data-aspectratio="4:1" width="1400" height="350">



                        </div>




                    </div>



                </div>

                <script type="text/javascript">
                    var thankyoupageentityName = 'Enabling Population Health';
                </script>
            </div>






            <div class="content-page-info perspective-color">


                <div class="left-content-section extended">


                    <!-- Intro copy + Share Bar + Post Intro copy components -->
                    <div class="header-intro-container extended-info">

                        <div id="article-content-type" class="header-intro-label">
                            <p class="tertiary-label-style tertiary-headline" itemprop="articleSection">
                                Article
                            </p>
                        </div>

                        <div id="article-title" class="header-intro">

                            <h1 class="primary-headline" itemprop="headline">Enabling Population Health</h1>


                            <h2 class="secondary-headline" itemprop="alternativeHeadline">Critical success factors
                            </h2>

                        </div>
                    </div>
                    <div id="article-intro-pre">
                        <div class="introductioncopy introductionCopyPre" id="content__intro-copy-pre">





                            <div class="introduction-copy">
                                <p class="page-intro-copy">From our work with health systems both in the UK and
                                    internationally, we have identified four building blocks (infrastructure,
                                    insight, interventions and impacts) and nine critical success factors for
                                    achieving better Population Health Management (PHM).</p>
                            </div>









                        </div>
                    </div>


                    <section>
                        <div class="share-bar" id="share-centre">
                            <div class="custom-socialshare social-share-links">
                                <section>

                                    <ul>




                                        <li><a class="icon-twitter" onclick="launchShare('twitter');"
                                                title="Share via Twitter" href="#" data-provider="twitter"></a></li>





                                        <li><a class="icon-linkedin" onclick="launchShare('linkedin');"
                                                title="Share via LinkedIn" href="#" data-provider="linkedin"></a>
                                        </li>



                                        <li><a class="icon-facebook" onclick="launchShare('facebook');"
                                                title="Share via Facebook" href="#" data-provider="facebook"></a>
                                        </li>







                                        <li><a class="icon-email" onclick="launchShare('email');"
                                                title="Share via Email" href="#" data-provider="email"></a></li>


                                    </ul>





                                    <ul id="bookmark-list" class="social-bookmark">


                                        <li id="bookmark-icon">
                                            <a onclick="bookMarkPage(bookmarkJSONStr)" tabindex="0"
                                                title="Save for later"><i class="icon-bookmark-o bookmark"></i><span
                                                    class="bookmark-text">Save for later</span> </a>
                                        </li>
                                    </ul>


                                </section>

                                <script>
                                    var removebookmarktitle = "Saved for later";
                                    var addbookmarktitle = "Save for later";
                                    var addtomybookmarkstitle = "Save for later";
                                    var addedtomybookmarkstitle = "Saved for later";
                                </script>
                            </div>
                        </div>
                    </section>
                    <div id="article-intro-post">
                        <div class="introductionCopyPost introductioncopy" id="content__intro-copy-post">






                            <div class="introduction-copy"></div>








                        </div>
                    </div>
                    <!-- Into components end-->
                    <div class="content-components">
                        <!-- In-Page Component Code -->


                        <!-- In-Page Component Code ends-->
                        <div>
                            <div class="contentpagecolctrl section">

                                <div class="content-page-column">

                                    <div class="two-columns">
                                        <div class="two-columns-c0">
                                            <div class="customrichtext parbase section">




                                                <div>






                                                    <div class="custom-rte">



                                                        <p></p>
                                                        <p>Historically, a lack of robust patient data that provides
                                                            a holistic and longitudinal view of each patient has
                                                            hindered the adoption of a more integrated approach to
                                                            population health. Our report identifies nine critical
                                                            success factors which form part of four key building
                                                            blocks for PHM: Infrastructure, Insight, Interventions
                                                            and Impacts. These are key requirements for achieving
                                                            PHM:</p>
                                                        <p>
                                                        </p>
                                                    </div>


                                                </div>
                                            </div>
                                            <div class="customrichtext parbase section">




                                                <div>






                                                    <div class="custom-rte">



                                                        <h3 class="secondary-headline">Infrastructure</h3>

                                                        <p></p>
                                                        <ul>
                                                            <li><b>A shared vision, mission, and understanding of
                                                                    how to implement PHM</b><br>
                                                                A key aspect of infrastructure of an STP or ICS is
                                                                for its constituent organisations to develop a
                                                                shared vision and strategy, underpinned by policies
                                                                and principles that promote collaboration and
                                                                consistency of purpose. Aligning the leaderships of
                                                                organisations and, importantly obtaining the buy-in
                                                                of clinical and other key professional staff groups,
                                                                to a collective vision is crucial. Clinical
                                                                engagement is particularly important, as is an
                                                                understanding that any contact with the public is an
                                                                opportunity to engage in improving population
                                                                health.</li>
                                                        </ul>
                                                        <p>
                                                        </p>
                                                    </div>


                                                </div>
                                            </div>
                                            <div class="customrichtext parbase section">




                                                <div>






                                                    <div class="custom-rte">



                                                        <p></p>
                                                        <ul>
                                                            <li><b>Leadership maturity and good governance</b><br>
                                                                A common factor among successful integrated health
                                                                systems is strong governance arrangements and system
                                                                leadership that clarifies where responsibilities and
                                                                accountabilities lie. System leaders, need to create
                                                                a transparent structure of governance and
                                                                accountability to support health and care systems,
                                                                and deliver results at an appropriate pace.</li>
                                                            <li><b>Improved shared technology and infrastructure
                                                                </b><br>
                                                                In order to achieve more integrated care,
                                                                organisations need to prioritise automation and data
                                                                sharing. Although data is critical, many people
                                                                across health and care do not yet see it as an
                                                                asset. This is largely due to concerns about
                                                                consent, confidentially and cyber security. What is
                                                                needed is an integrated IT infrastructure that
                                                                complies with agreed interoperability standards and
                                                                allows data sharing; supports cross-functional
                                                                learning and collaboration; and, ultimately, better
                                                                decision making.</li>
                                                        </ul>
                                                        <p>
                                                        </p>
                                                    </div>


                                                </div>
                                            </div>
                                            <div class="customrichtext parbase section">




                                                <div>






                                                    <div class="custom-rte">



                                                        <p></p>
                                                        <h3>Insight</h3>
                                                        <ul>
                                                            <li><b>Focused population targeting and
                                                                    segmentation&nbsp;</b><br>
                                                                Growing numbers of patients have multiple care needs
                                                                and varying levels of health literacy and engagement
                                                                in their own care. This calls for a strategy that is
                                                                attentive to diversity, based on a suite of
                                                                person-centred action plans; which includes defining
                                                                discrete population segments and developing an
                                                                understanding of their requirements and the extent
                                                                of co-morbidities and related risk factors. There is
                                                                also a need to identify under-served populations and
                                                                prioritise initiatives that provide the most value.
                                                            </li>
                                                            <li><b>Robust systems of monitoring, advanced analytics
                                                                    and insight processes&nbsp;</b><br>
                                                                The volume of health care data is growing by at
                                                                least 48 per cent annually.39 With such vast
                                                                quantities of potentially valuable data, crucial
                                                                information may get lost and unused. Hence,
                                                                appropriate governance and robust monitoring is
                                                                required to ensure that ???insight??? and not just data
                                                                is being generated by the system.</li>
                                                        </ul>
                                                        <p>
                                                        </p>
                                                    </div>


                                                </div>
                                            </div>

                                            <div class="tableauPlaceholder" style="width: 1100px; height: 800px; position: relative; overflow: hidden; display: block;"><iframe frameborder="0" marginheight="0" marginwidth="0" title="Data Visualization" allowtransparency="true" allowfullscreen="true" class="tableauViz" width="1100" height="800" style="display: block; margin: 0px; padding: 0px; border: none; width: 1100px; height: 800px;" src="https://demo.tableau.com/t/LuizOliveira/views/Healthcarerejection/AnlisedePlanos?:embed=y&amp;:showVizHome=no&amp;:host_url=https%3A%2F%2Fdemo.tableau.com%2F&amp;:embed_code_version=3&amp;:tabs=no&amp;:toolbar=no&amp;:showAppBanner=false&amp;:display_spinner=no&amp;:loadOrderID=0"></iframe></div>
                                            <div class="customrichtext parbase section">




                                                <div>






                                                    <div class="custom-rte">



                                                        <p></p>
                                                        <h3>Interventions</h3>
                                                        <ul>
                                                            <li><b>Aligned financial model and funding incentives
                                                                    across the system&nbsp;</b><br>
                                                                Current activity-based payment models encourage a
                                                                revenue optimising behaviour by acute trusts.
                                                                Conversely, the prevailing payment model for
                                                                community and mental health services is a historical
                                                                block contract, which restricts activity levels.
                                                                This set-up is inconsistent with the need to deliver
                                                                more care in the community and manage a population???s
                                                                health closer to home, keeping people healthier and
                                                                out of hospital for longer.</li>
                                                            <li><b>New approaches to delivery and
                                                                    workflow&nbsp;</b><br>
                                                                Figures from NHS Digital show that demands on
                                                                hospital accident and emergency departments in
                                                                England has reached record levels with nearly 24
                                                                million attendances in 2017-18. This represents an
                                                                increase of 22 per cent since 2008-09 and two per
                                                                cent compared to 2016-17, yet the population rose by
                                                                only one per cent. The percentage of people seen
                                                                within four hours was only 88 per cent, well below
                                                                the national target of 95 per cent. Over this time,
                                                                hospital bed occupancy hovered around 95 per cent.
                                                                These and other related factors are putting a strain
                                                                on traditional health care models and increasing the
                                                                imperative to identify new operating models.</li>
                                                            <li><b>Providing primary care at scale&nbsp;</b><br>
                                                                Primary care has been widely acknowledged as central
                                                                to a high-quality and cost-effective health system
                                                                for many years. However, the provision of effective
                                                                primary care at scale, requires choices to be made
                                                                around the scope of the care to be provided, and the
                                                                degree of care coordination.</li>
                                                        </ul>
                                                        <p>
                                                        </p>
                                                    </div>


                                                </div>
                                            </div>
                                            <div class="customrichtext parbase section">




                                                <div>






                                                    <div class="custom-rte">



                                                        <p></p>
                                                        <h3>Impacts</h3>
                                                        <ul>
                                                            <li><b>Population engagement and patient
                                                                    activation</b><br>
                                                                The aim of population engagement and proactive
                                                                health is to help people stay as healthy as
                                                                possible, and to live independently in the community
                                                                for as long as possible. It involves engagement by
                                                                health and social care staff, working together in
                                                                new ways to coordinate the care needed. Patient
                                                                groups that could benefit by targeted engagement
                                                                include:<br>
                                                                <br>
                                                                - Frail or older people with long term health
                                                                problems, where care is often too fragmented and
                                                                difficult to manage<br>
                                                                - Young or new parents, who often bring in their
                                                                new-borns or young children on a ???just-in-case???
                                                                basis<br>
                                                                - Those with long term chronic conditions, such as
                                                                diabetes and chronic obstructive pulmonary disease
                                                                (COPD).<br>
                                                                <br>
                                                                While PHM places responsibility on health and care
                                                                systems to manage care for their local population,
                                                                it places even greater responsibility on the
                                                                population itself to become more self-sufficient and
                                                                engage in self-managing their care, through
                                                                prevention, education and adherence to medication.
                                                                Indeed, patient activation holds the key to improved
                                                                health outcomes through gains in self-management and
                                                                individual behaviour change.
                                                            </li>
                                                        </ul>
                                                        <p>
                                                        </p>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                        <div class="two-columns-c1">
                                            <div class="downloadpromo section">



                                                <a href="https://www2.deloitte.com/content/dam/Deloitte/uk/Documents/public-sector/deloitte-uk-public-sector-population-health-management.pdf"
                                                    target="_blank"
                                                    download="deloitte-uk-public-sector-population-health-management.pdf"
                                                    tabindex="0">
                                                    <div class="download-file-component">
                                                        <div class="icon-download-alt"></div>


                                                        <button tabindex="-1" class="button">Download the
                                                            report</button>

                                                    </div>
                                                </a>


                                                <div class="clear"></div>
                                            </div>
                                            <div class="imagecomponent section">






                                                <a
                                                    href="https://www2.deloitte.com/uk/en/pages/public-sector/articles/population-health-management.html">
                                                    <img class="responsive-img"
                                                        src="https://www2.deloitte.com/content/dam/Deloitte/uk/Images/promo_images/Campaign/public-sector/deloitte-uk-public-sector-population-health-700.png/_jcr_content/renditions/cq5dam.web.231.231.desktop.jpeg"
                                                        data-orgsrc="https://www2.deloitte.com/content/dam/Deloitte/uk/Images/promo_images/Campaign/public-sector/deloitte-uk-public-sector-population-health-700.png"
                                                        data-aspectratio="1:1" width="231" height="231">
                                                </a>





                                            </div>
                                            <div class="fullwidthcalloutbox parbase section">



                                                <div>






                                                    <div class="full-width-callout">


                                                        <div class="full-width-callout-inner-container custom-rte">

                                                            <p></p>
                                                            <p style="text-align: center;"><a
                                                                    href="https://www2.deloitte.com/uk/en/pages/public-sector/articles/population-health-management.html"><b>Explore
                                                                        other chapters</b></a></p>
                                                            <p></p>


                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="htmlfragment section">
                                <!--  Classic UI author placeholder, this is required -->



                                <!-- the below empty div should not be deleted, there is some additional logic written via script to append the id to the parent element -->
                                <div>
                                    <div class="standard-white-component ">
                                        <h3 class="secondary-headline"> </h3>
                                        <p> </p>
                                        <div class="html-fragment-content">
                                            <!-- imglocation is the DAM location and name of the image -->
                                            <img src="https://www2.deloitte.com/content/dam/Deloitte/uk/Images/inline_images/Campaign/public-sector/deloitte-uk-population-health-the-four-building-blocks-enabling.png"
                                                style="width:60%;margin-left:3%">
                                        </div>


                                    </div>
                                </div>
                            </div>

                            <p></p>
                            
                            



                            <div class="tableauPlaceholder" style="width: 1200px; height: 900px; position: relative; overflow: hidden; display: block;"><iframe frameborder="0" marginheight="0" marginwidth="0" title="Data Visualization" allowtransparency="true" allowfullscreen="true" class="tableauViz" width="1200" height="900" style="display: block; margin: 0px; padding: 0px; border: none; width: 1200px; height: 900px;" src="https://demo.tableau.com/t/LuizOliveira/views/ExecutiveKPIDashboard_16455452073710/ExecutiveKPIDashboard3x4?:embed=y&amp;:showVizHome=no&amp;:host_url=https%3A%2F%2Fdemo.tableau.com%2F&amp;:embed_code_version=3&amp;:tabs=no&amp;:toolbar=no&amp;:showAppBanner=false&amp;:display_spinner=no&amp;:loadOrderID=1"></iframe></div>








                            <div class="fullwidthcalloutbox parbase section">



                                <div>






                                    <div class="full-width-callout">


                                        <div class="full-width-callout-inner-container custom-rte">

                                            <p></p>
                                            <h4>Case study: The Wigan story ??? a shared vision for PHM</h4>
                                            <p>In 2010, Wigan council faced severe financial difficulties and needed
                                                to reduce running costs by ??160 million within five years. In
                                                response it introduced the Wigan Deal, freezing council taxes in
                                                return for improved health and well-being behaviours. Wigan also
                                                gave staff permission to innovate. In the intervening years it has
                                                seen a seven year improvement in healthy life expectancy.</p>
                                            <p>Accompanying the Wigan Deal was the ???Be Wigan??? experience which is a
                                                place based organisational development tool, which includes
                                                reappraising how citizens are viewed, thinking how they can be
                                                helped, and building trust between citizens and health and care
                                                provider organisations.</p>
                                            <p>The two largest sources of expenditure are social care and the NHS ???
                                                the NHS and engagement of clinical staff has been pivotal in
                                                wrapping services around citizens and engaging with community and
                                                voluntary organisations. Wigan adopted a zero-based budgeting
                                                approach and adopted ???best in breed??? solutions harnessing the
                                                passion and belief of the community (82 per cent of residents
                                                support the Wigan Deal).</p>
                                            <p>While Wigan has saved ??130 million it still has ??30 million of
                                                savings to make. It has stopped things that don???t work ??? like
                                                expensive day centres ??? and focused on supporting local groups and
                                                local clubs. By 2018 its adoption and implementation of a shared
                                                vision between health and social care has helped it had one of best
                                                performing hospital systems (5th best on delayed transfers of care)
                                                had balanced its budgets for children and adult social services and
                                                had reduced the number of looked after children.<br>
                                            </p>
                                            <p></p>


                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div class="authorhostpanel section">
















                                <div id="">

                                    <div itemprop="author" itemscope="" itemtype="http://schema.org/Person">







                                        <div>


                                            <div class="author-panel author-panel-2">
                                                <div class="box-white box-container-white">

                                                    <h3 class="secondary-headline">Key contacts</h3>

                                                    <div class="profile-boxes">

                                                        <!-- Profile Boxes Inner -->



                                                        <div class="profile-box-inner">
                                                            <div class="profile-img">
                                                                <img src="https://www2.deloitte.com/content/dam/Deloitte/uk/Images/promo_images/Profiles/deloitte-uk-sara-b-siegel-new.jpg/_jcr_content/renditions/cq5dam.web.231.231.desktop.jpeg"
                                                                    data-orgsrc="https://www2.deloitte.com/content/dam/Deloitte/uk/Images/promo_images/Profiles/deloitte-uk-sara-b-siegel-new.jpg"
                                                                    content="/content/dam/Deloitte/uk/Images/promo_images/Profiles/deloitte-uk-sara-b-siegel-new.jpg"
                                                                    alt="Sara Siegel" data-aspectratio="1:1"
                                                                    itemprop="image" width="231" height="231">
                                                            </div>
                                                            <div class="profile-txt">
                                                                <h4 class="profile-name" itemprop="name">
                                                                    <a id="more-emp-info0"
                                                                        href="https://www2.deloitte.com/uk/en/profiles/sarasiegel.html">Sara
                                                                        Siegel </a>
                                                                </h4>
                                                                <h5 class="roles" itemprop="jobTitle">

                                                                    <span class="role-name">Partner</span>

                                                                </h5>





                                                                <div class="email-wrapper">
                                                                    <p itemprop="email">


                                                                        <a href="mailto:sarasiegel@deloitte.co.uk"
                                                                            data-contacttype="email">
                                                                            sarasiegel@deloitte.co.uk </a>




                                                                    </p>
                                                                </div>





                                                                <div class="tel-number-wrapper">
                                                                    <p itemprop="telephone">
                                                                        <a href="tel:+44(0)2070077908"
                                                                            data-contacttype="phone">
                                                                            +44 (0)20 7007 7908 </a>
                                                                    </p>
                                                                </div>


                                                                <div class="social-media-wrapper">
                                                                    <ul>


                                                                        <li><a href="https://uk.linkedin.com/in/sara-siegel-5947961b"
                                                                                class="icon-linkedin"
                                                                                title="LinkedIn"
                                                                                target="_blank"></a></li>


                                                                        <!--Start of Defect #276173 : Code cleanup related to Google+ -->

                                                                        <!--End of Defect #276173 : Code cleanup related to Google+ -->






                                                                    </ul>
                                                                </div>

                                                                <div class="author-description"
                                                                    itemprop="description">
                                                                    <p class="body-copy">
                                                                        Sara is the LCSP for the health account in
                                                                        the UK. She has worked with the NHS for the
                                                                        last 15 years. This encapsulates the Firm???s
                                                                        work with the NHS and public sector
                                                                        healthcare clients. Some of Sara???... <a
                                                                            id="more-btn0"
                                                                            href="https://www2.deloitte.com/uk/en/profiles/sarasiegel.html">More</a>
                                                                    </p>
                                                                </div>

                                                            </div>
                                                        </div>



                                                        <!-- Profile Boxes Inner -->



                                                        <div class="profile-box-inner">
                                                            <div class="profile-img">
                                                                <img src="https://www2.deloitte.com/content/dam/Deloitte/uk/Images/promo_images/Profiles/deloitte-uk-karen-taylor-kartaylor.jpg/_jcr_content/renditions/cq5dam.web.231.231.desktop.jpeg"
                                                                    data-orgsrc="https://www2.deloitte.com/content/dam/Deloitte/uk/Images/promo_images/Profiles/deloitte-uk-karen-taylor-kartaylor.jpg"
                                                                    content="/content/dam/Deloitte/uk/Images/promo_images/Profiles/deloitte-uk-karen-taylor-kartaylor.jpg"
                                                                    alt="Karen Taylor" data-aspectratio="1:1"
                                                                    itemprop="image" width="231" height="231">
                                                            </div>
                                                            <div class="profile-txt">
                                                                <h4 class="profile-name" itemprop="name">
                                                                    <a id="more-emp-info1"
                                                                        href="https://www2.deloitte.com/uk/en/profiles/kartaylor.html">Karen
                                                                        Taylor </a>
                                                                </h4>
                                                                <h5 class="roles" itemprop="jobTitle">

                                                                    <span class="role-name">Director</span>

                                                                </h5>





                                                                <div class="email-wrapper">
                                                                    <p itemprop="email">


                                                                        <a href="mailto:kartaylor@deloitte.co.uk"
                                                                            data-contacttype="email">
                                                                            kartaylor@deloitte.co.uk </a>




                                                                    </p>
                                                                </div>





                                                                <div class="tel-number-wrapper">
                                                                    <p itemprop="telephone">
                                                                        <a href="tel:+44(0)2070073680"
                                                                            data-contacttype="phone">
                                                                            +44 (0)20 7007 3680 </a>
                                                                    </p>
                                                                </div>


                                                                <div class="social-media-wrapper">
                                                                    <ul>


                                                                        <li><a href="http://uk.linkedin.com/pub/karen-taylor/24/127/938"
                                                                                class="icon-linkedin"
                                                                                title="LinkedIn"
                                                                                target="_blank"></a></li>


                                                                        <!--Start of Defect #276173 : Code cleanup related to Google+ -->

                                                                        <!--End of Defect #276173 : Code cleanup related to Google+ -->






                                                                    </ul>
                                                                </div>

                                                                <div class="author-description"
                                                                    itemprop="description">
                                                                    <p class="body-copy">
                                                                        Karen is the Research Director of the Centre
                                                                        for Health Solutions. She supports the
                                                                        Healthcare and Life Sciences practice by
                                                                        driving independent and objective business
                                                                        research and analysis into key i... <a
                                                                            id="more-btn1"
                                                                            href="https://www2.deloitte.com/uk/en/profiles/kartaylor.html">More</a>
                                                                    </p>
                                                                </div>

                                                            </div>
                                                        </div>



                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>




                            </div>
                        </div>
                    </div>

                </div>

                <div class="right-content-section extended right-scrolled"
                    style="position: fixed; margin-right: 0px; width: 60px; margin-top: 15px; top: 0px; left: 1491.5px;">




                    <!-- In-Page Component Code -->


                    <!-- In-Page Component Code ends-->
                </div>
            </div>
        </div>
        <!--TODO: separate content template into individual template.
basic code should be in separate files (if needed) to allow for template expansion.
below code should be in an article template addition -->






        <div class="poll page-scrolled" id="poll-bar" style="display: block;">
            <div class="poll-container">
                <div class="question">
                    <fieldset>
                        <legend>Did you find this useful?</legend>
                        <span class="answers">
                            <button role="button" class="button btn-secondary-teal" id="poll-Yes" value="Yes"
                                aria-label="POLL_CLICK_VOTE_YES"
                                onclick="onPollSelect(true, 'Thank you for your feedback!');">Yes</button>
                            <button role="button" class="button btn-secondary-teal" id="poll-No" value="No"
                                aria-label="POLL_CLICK_VOTE_NO"
                                onclick="onPollSelect(true, 'Thank you for your feedback!');">No</button>
                        </span>
                    </fieldset>
                </div>
                <div class="share-bar" id="share-bottom">
                    <div class="custom-socialshare social-share-links">
                        <section>

                            <ul>




                                <li><a class="icon-twitter" onclick="launchShare('twitter');"
                                        title="Share via Twitter" href="#" data-provider="twitter"></a></li>





                                <li><a class="icon-linkedin" onclick="launchShare('linkedin');"
                                        title="Share via LinkedIn" href="#" data-provider="linkedin"></a></li>



                                <li><a class="icon-facebook" onclick="launchShare('facebook');"
                                        title="Share via Facebook" href="#" data-provider="facebook"></a></li>







                                <li><a class="icon-email" onclick="launchShare('email');" title="Share via Email"
                                        href="#" data-provider="email"></a></li>


                            </ul>





                            <ul id="bookmark-list" class="social-bookmark">


                                <li id="bookmark-icon">
                                    <a onclick="bookMarkPage(bookmarkJSONStr)" tabindex="0"
                                        title="Save for later"><i class="icon-bookmark-o bookmark"></i><span
                                            class="bookmark-text">Save for later</span> </a>
                                </li>
                            </ul>


                        </section>

                        <script>
                            var removebookmarktitle = "Saved for later";
                            var addbookmarktitle = "Save for later";
                            var addtomybookmarkstitle = "Save for later";
                            var addedtomybookmarkstitle = "Saved for later";
                        </script>
                    </div>
                </div>
            </div>
        </div>







        <div class="associated-articles table-frame">
            <div class="table-frame-col left-content-section">
                <!-- Recommended Article Starts -->
                <div class="recommended-articles" id="content__recommended-articles">
                    <!-- table-frame"-->
                    <div id="recommended-articles" class="at-element-marker">
                        <h3>Recommendations</h3>

                    </div>
                    <div>
                        <div class="table-frame">
                            <style>
                                .recommended-articles img {
                                    height: 100px !important;
                                    object-fit: cover;
                            </style>
                            <div class="table-frame-row">
                                <div class="table-frame-col-100px"> <a
                                        href="https://www2.deloitte.com/uk/en/insights/industry/public-sector/medicaid-social-determinants-of-health.html"
                                        class="rec-focus" data-promocategory="dynamic" data-cq-id="ce4abcf2"
                                        data-promotype="recommendation"><img alt="" width="100" height="100"
                                            src="https://www2.deloitte.com/content/dam/insights/us/articles/4819_Social-determinants/images/4819_banner.png"></a>
                                </div>
                                <div class="table-frame-col copy">
                                    <h5><a href="https://www2.deloitte.com/uk/en/insights/industry/public-sector/medicaid-social-determinants-of-health.html"
                                            class="rec-focus" data-promocategory="dynamic"
                                            data-promotype="recommendation">Social determinants of health and
                                            Medicaid payments </a></h5>
                                    <p>Steps states can take to factor social determinants of health into Medicaid
                                        payment policies</p>
                                </div>
                                <div class="table-frame-col-100px"> <a
                                        href="https://www2.deloitte.com/uk/en/pages/public-sector/articles/population-health-management.html"
                                        class="rec-focus" data-promocategory="dynamic"
                                        data-promotype="recommendation"><img alt="" width="100" height="100"
                                            src="https://www2.deloitte.com/content/dam/Deloitte/uk/Images/promo_images/Campaign/public-sector/deloitte-uk-public-sector-population-health-700.png/_jcr_content/renditions/cq5dam.web.231.231.desktop.jpeg"></a>
                                </div>
                                <div class="table-frame-col copy">
                                    <h5><a href="https://www2.deloitte.com/uk/en/pages/public-sector/articles/population-health-management.html"
                                            class="rec-focus" data-promocategory="dynamic" data-cq-id="8ad2867d"
                                            data-promotype="recommendation">The transition to integrated care</a>
                                    </h5>
                                    <p>Population health management in England</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- TODO Configure the dynamic Target Events -->








                    <div class="table-frame">
                        <div class="table-frame-row">


                            <div class="table-frame-col-100px">

                                <a href="https://www2.deloitte.com/global/en/pages/life-sciences-and-healthcare/articles/global-health-care-sector-outlook.html"
                                    class="rec-focus" target="_self" data-cq-id="6320bd08" data-promoname="2022 Global Health Care Outlook
" data-promocategory="curated" data-promotype="recommendation" data-promocontenttype="article">
                                    <img src="https://www2.deloitte.com/content/dam/Deloitte/global/Images/promo_images/gx-lshc-2022-health-care-outlook-promo.png/_jcr_content/renditions/cq5dam.web.231.231.desktop.jpeg"
                                        alt="" width="100" height="100"></a>

                            </div>
                            <div class="table-frame-col copy">
                                <h5><a href="https://www2.deloitte.com/global/en/pages/life-sciences-and-healthcare/articles/global-health-care-sector-outlook.html"
                                        class="rec-focus" target="_self" data-cq-id="6320bd08" data-promoname="2022 Global Health Care Outlook
" data-promocategory="curated" data-promotype="recommendation" data-promocontenttype="article">2022 Global Health Care
                                        Outlook

                                    </a></h5>
                                <p>Are we finally seeing the long-promised transformation?</p>
                            </div>





                            <div class="table-frame-col-100px">

                                <a href="https://www2.deloitte.com/uk/en/pages/public-sector/articles/smart-health-care-solutions.html"
                                    class="rec-focus" target="_self" data-cq-id="1f2dc6f7"
                                    data-promoname="Unlocking potential&nbsp;" data-promocategory="curated"
                                    data-promotype="recommendation" data-promocontenttype="article">
                                    <img src="https://www2.deloitte.com/content/dam/Deloitte/uk/Images/promo_images/Campaign/life-sciences-health-care/deloitte-uk-lsh-smart-health-care-solutions-promo.jpg/_jcr_content/renditions/cq5dam.web.231.231.desktop.jpeg"
                                        alt="" width="100" height="100"></a>

                            </div>
                            <div class="table-frame-col copy">
                                <h5><a href="https://www2.deloitte.com/uk/en/pages/public-sector/articles/smart-health-care-solutions.html"
                                        class="rec-focus" target="_self" data-cq-id="1f2dc6f7"
                                        data-promoname="Unlocking potential&nbsp;" data-promocategory="curated"
                                        data-promotype="recommendation" data-promocontenttype="article">Unlocking
                                        potential&nbsp;</a></h5>
                                <p>Smart Health Care Solutions</p>
                            </div>



                        </div>


                    </div>
                    <script type="text/javascript">
                        var recPromo1 = '6320bd08';
                        var recPromo2 = '1f2dc6f7';
                        dataLayer.page.attributes.recPromo1 = recPromo1;
                        dataLayer.page.attributes.recPromo2 = recPromo2;

                    </script>


                </div>
                <!-- Recommended Article ends -->
            </div>
            <div class="table-frame-col right-content-section" id="related-topics-section">
                <div>
                    <div class="recently-viewed" id="recently-viewed-target">
                        <script>
                            $('.recently-viewed-title').append(sc_recViewedPage);
                        </script>
                        <h3 class="recently-viewed-title">Recently viewed pages</h3>
                        <ul>
                            <li><a href="https://www2.deloitte.com/uk/en/pages/public-sector/articles/population-health-management.html"
                                    data-promocategory="recent" data-promotype="recently-viewed"
                                    data-cq-id="8ad2867d" class="rec-focus" target="_self">The transition to
                                    integrated care</a></li>
                            <li><a href="https://www2.deloitte.com/uk/en/pages/public-sector/articles/defining-population-health.html"
                                    data-promocategory="recent" data-promotype="recently-viewed"
                                    data-cq-id="494e6822" class="rec-focus">Defining Population Health</a></li>
                            <li> <a href="https://www2.deloitte.com/us/en/pages/operations/solutions/business-chemistry.html"
                                    data-promocategory="recent" data-promotype="recently-viewed"
                                    data-cq-id="6ccfd393" class="rec-focus">Business Chemistry</a></li>
                        </ul>
                    </div>
                </div>
                <div id="article-more-topics" class="tag-panel at-element-marker">
                    <h3>Related topics</h3>
                    <!--TODO: replace with related articles tag -->
                    <!--TODO: expose new i18n field in content helper class like more topics -->
                    <div class="more-topics-wrapper">
                        <ul class="article-tags">

                            <li><a href="https://www2.deloitte.com/uk/en/misc/litetopicpage.MF-UK-Tags.public-sector-technology.html"
                                    class="body-copy" data-tagname="public-sector-technology_uk;en">Public Sector
                                    Technology</a></li>

                            <li class="for-clear"></li>
                            <!--TODO: is this clear needed -->
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <meta itemprop="datePublished" content="2019-03-19T00:00:00Z">


    <meta itemprop="dateModified" content="2019-03-26T16:50:33Z">










    <div id="Dcom-signin-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <img src="https://www2.deloitte.com/etc/designs/dcom/assets/images/my-deloitte/my-Deloitte-logo-rev.svg" width="300">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">??</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="myD-reg-signin-wrapper">

                        <div class="myD-signin-headline">
                            <h2>Welcome back</h2>
                        </div>
                        <div id="Dcom-signin-screenset"></div>

                    </div>
                    <div class="myD-register">
                        Still not a member?
                        <a href="https://my.deloitte.com/?site=uk-en" class="myD-register__link"
                            target="_blank">Join My Deloitte</a>
                    </div>
                </div>
            </div>
        </div>
    </div>




    <script type="text/javascript">
        var entityName = 'Enabling Population Health';
        dataLayer.page.attributes.entityName = entityName;

        var mediadata = '[\x22pdf\x22]';
        dataLayer.page.attributes.media = mediadata;
        var bookmarkJSONStr = "{\x22date\x22:\x222022\u002D02\u002D22T14:57:04.821Z\x22,\x22id\x22:\x22162319c7\x22}";
        /** This is to fix the date format issue while bookmarking the articales from dcom to mydeloitte starts **/
        if (bookmarkJSONStr != null && bookmarkJSONStr != "" && typeof (bookmarkJSONStr) != "undefined") {
            var bookmarks = JSON.parse(bookmarkJSONStr);
            bookmarks.date = new Date();
            bookmarkJSONStr = JSON.stringify(bookmarks);
        }
        /** This is to fix the date format issue while bookmarking the articales from dcom to mydeloitte ends **/
        function forgotPwdModal() {
            //alert("ddd");
            localStorage.setItem("forgotPwdRedirectionFromLoginModal", "true");
        }

        var removebookmarktitle = "Saved for later";
        var addbookmarktitle = "Save for later";
        var addtomybookmarkstitle = "Save for later";
        var addedtomybookmarkstitle = "Saved for later";

    </script>



    <div class="gigya-screen-set" id="MyDeloitte1B-RegistrationLogin" style="display: none"
        data-on-pending-registration-screen="MyDeloitte1B-RegistrationLogin/gigya-complete-registration-screen"
        data-on-pending-verification-screen="MyDeloitte1B-RegistrationLogin/gigya-verification-pending-screen"
        data-on-pending-tfa-registration-screen="MyDeloitte1B-RegistrationLogin/gigya-tfa-registration-screen"
        data-on-pending-tfa-verification-screen="MyDeloitte1B-RegistrationLogin/gigya-tfa-verification-screen"
        data-on-pending-password-change-screen="MyDeloitte1B-RegistrationLogin/gigya-password-change-required-screen"
        data-on-existing-login-identifier-screen="MyDeloitte1B-LinkAccounts/gigya-link-account-screen"
        data-on-pending-recent-login-screen="MyDeloitte1B-ReAuthentication/gigya-reauthentication-screen"
        data-width="364" data-responsive="true" data-dialog-style="modern">

        <div id="gigya-login-screen" data-width="auto"
            gigya-conditional:class="viewport.width < 550 ?gigya-screen v2 portrait mobile:viewport.width < 920 ?gigya-screen v2 portrait:"
            class="gigya-screen v2 landscape" gigya-expression:data-caption="screenset.translations["
            gigya_login_screen_caption="">
            <form class="gigya-login-form myD-login-form ng-pristine ng-valid" id="gigya-login-form"
                novalidate="novalidate">
                <div class="gigya-layout-row with-divider">
                    <div class="gigya-layout-cell responsive with-site-login myD-signin-form-fields">
                        <div class="gigya-composite-control gigya-composite-control-textbox form-field">
                            <input type="text" class="gigya-input-text valid-email-text" name="loginID" id="loginID"
                                onblur="dcomssologin(this);" tabindex="0" aria-label="Email"
                                formnovalidate="formnovalidate"
                                gigya-expression:data-gigya-placeholder="screenset.translations["
                                loginid_1311311543682226_placeholder=""
                                gigya-expression:aria-label="screenset.translations[" required="required"
                                style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;">
                            <label class="form-field__label" for="loginID"> Email*</label><i class="bar"></i>
                            <span class="gigya-error-msg" data-bound-to="loginID"></span>
                            <span class="sso-warning-msg" style="display: none;"></span>
                            <span class="valid-inputs-Email" style="display:none;">Invalid special characters
                                found</span>
                        </div>
                        <div class="gigya-composite-control gigya-composite-control-password form-field">
                            <input type="password" name="password" id="password" class="gigya-input-password"
                                tabindex="0" formnovalidate="formnovalidate" aria-label="Password"
                                gigya-expression:data-gigya-placeholder="screenset.translations["
                                password_132128826476804690_placeholder=""
                                gigya-expression:aria-label="screenset.translations[" required="required"
                                autocomplete="off"
                                style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;">
                            <label class="form-field__label" for="password"> Password*</label><i class="bar"></i>
                            <span class="gigya-error-msg" data-bound-to="password"></span>
                        </div>
                        <div class="gigya-layout-row myD-stay-signin-check">
                            <div class="gigya-layout-cell">
                                <div
                                    class="gigya-composite-control gigya-composite-control-checkbox gigya-keep-me-logged-in checkbox">
                                    <label class="gigya-label" for="gigya-checkbox-remember">
                                        <input type="checkbox" name="remember" id="gigya-checkbox-remember"
                                            class="gigya-input-checkbox" tabindex="0">
                                        <i class="helper"></i>
                                        <span class="gigya-label-text gigya-checkbox-text"
                                            data-translation-key="CHECKBOX_76374189532411820_LABEL">Keep me logged
                                            in</span>
                                    </label>
                                </div>
                            </div>
                            <div class="gigya-layout-cell myD-forgotpass">
                                <a href="https://my.deloitte.com/?site=uk-en&amp;showForgotPassword=true"
                                    target="_blank" class="myD-forgotpass__link">Forgot password</a>
                            </div>
                        </div>
                        <div class="myD-cookie-setting-link" hidden="hidden">
                            <p>To stay logged in, <a class="optanon-show-settings" href="#">change your functional
                                    cookie settings.</a></p>
                        </div>
                        <div class="gigya-composite-control gigya-composite-control-submit">
                            <input type="submit" class="gigya-input-submit" tabindex="0"
                                gigya-expression:value="screenset.translations[" submit_142674579108303380_value=""
                                value="Log in">
                        </div>
                        <div class="gigya-error-display gigya-composite-control gigya-composite-control-form-error"
                            data-bound-to="gigya-login-form">
                            <div class="gigya-error-msg gigya-form-error-msg" data-bound-to="gigya-login-form">
                            </div>
                        </div>
                    </div>
                    <div class="gigya-clear">
                    </div>
                </div>
                <div class="gigya-layout-cell responsive with-divider myD-signin-form-divider">
                    <p class="myD-signin-form-divider__label">OR</p>
                </div>
                <p class="social-icons-msg">Social login not available on Microsoft Edge browser at this time.</p>
                <div class="gigya-layout-cell responsive with-social-login myD-signin-social">

                    <div class="">
                        <div class="gigya-composite-control gigya-composite-control-social-login">
                            <div class="gigya-social-login">
                                <param name="tabIndex" value="0">
                                <param name="version" value="2">
                                <param name="width" value="450"
                                    gigya-conditional:value="screenset.width < 430?100%">
                                <param name="height" value="50">
                                <param name="enabledProviders" value="linkedin,twitter,facebook,googleplus,apple">
                                <param name="loginMode" value="standard">
                                <param name="buttonsStyle" value="fullLogoColored">
                                <param name="pagingButtonStyle" value="floating"
                                    gigya-conditional:value="screenset.width < 430?auto:">
                                <param name="buttonSize" value="30">
                                <param name="columns" gigya-conditional:value="screenset.width < 430?2:">
                                <param name="showWhatsThis" value="false">
                                <param name="showTermsLink" value="false">
                                <param name="hideGigyaLink" value="true">
                                <param name="_pluginCenterFix" value="true">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gigya-clear">
                </div>
            </form>
        </div>
    </div>

    <!-- gigya link accounts screen -->
    <div class="gigya-screen-set" style="display:none;" id="MyDeloitte1B-LinkAccounts"
        data-on-pending-registration-screen="MyDeloitte1B-RegistrationLogin/gigya-complete-registration-screen"
        data-on-pending-verification-screen="MyDeloitte1B-RegistrationLogin/gigya-email-verification-screen"
        data-on-pending-tfa-registration-screen="MyDeloitte1B-RegistrationLogin/gigya-tfa-registration-screen"
        data-on-pending-tfa-verification-screen="MyDeloitte1B-RegistrationLogin/gigya-tfa-verification-screen"
        data-on-pending-password-change-screen="MyDeloitte1B-RegistrationLogin/gigya-password-change-required-screen"
        data-on-existing-login-identifier-screen="MyDeloitte1B-LinkAccounts/gigya-link-account-screen"
        data-on-pending-recent-login-screen="MyDeloitte1B-ReAuthentication/gigya-reauthentication-screen"
        data-on-accounts-linked-screen="_finish" data-width="" data-responsive="true"
        data-start-screen="gigya-link-account-screen" data-dialog-style="modern">

        <div id="gigya-link-account-screen" data-width="auto"
            class="gigya-screen v2 gigya-link-account-screen myD-user-reg-screens"
            gigya-conditional:class="viewport.width < 500? gigya-screen v2 gigya-link-account-screen myD-user-reg-screens mobile: gigya-screen v2 gigya-link-account-screen myD-user-reg-screens"
            gigya-expression:data-caption="screenset.translations['GIGYA_LINK_ACCOUNT_SCREEN_CAPTION']">
            <form class="gigya-link-accounts-form ng-pristine ng-valid" id="gigya-link-accounts-form">
                <div class="info">
                    <div class="gigya-layout-row section-info">
                        <div class="section-info-icon">
                            <span
                                class="icon-myDeloitte-circle icon-quick-link icon-myDeloitte-circle--green"></span>
                        </div>
                        <div class="section-info-content">
                            <h1><strong>Link your accounts</strong></h1>
                        </div>

                    </div>
                </div>
                <!-- social login -->
                <div class="gigya-layout-row">
                    <div class="with-social-login responsive" style="width: 100%">
                        <div class="gigya-container gigya-visible-when" data-login-identities="site-only">
                            <h4 class="link-accounts-main-header" data-wizard-text-bold="bold"
                                data-translation-key="HEADER_66766754253798720_LABEL">You previously joined My
                                Deloitte using the same email. Log in here with your My Deloitte password to link
                                accounts. | | Deloitte users: Log in here one time only with the password you have
                                been using for Dbriefs/My Deloitte.</h4>
                        </div>

                        <div class="gigya-container gigya-visible-when" data-login-identities="social">
                            <h4 class="link-accounts-main-header" data-wizard-text-bold="bold"
                                data-translation-key="HEADER_88485663979193280_LABEL">You've previously logged into
                                My Deloitte with a different account. Link your accounts by re-verifying below, or
                                by logging in with a social media account.</h4>
                        </div>

                        <div class="gigya-container gigya-visible-when" data-login-identities="social">
                            <div class="gigya-composite-control gigya-composite-control-social-login">
                                <div class="gigya-social-login">
                                    <param name="tabIndex" value="0">
                                    <param name="version" value="2">
                                    <param name="width" value="450"
                                        gigya-conditional:value="screenset.width < 430?100%">
                                    <param name="height" value="50">
                                    <param name="enabledProviders" value="linkedin,facebook,twitter,google,apple">
                                    <param name="buttonsStyle" value="fullLogoColored">
                                    <param name="pagingButtonStyle" value="floating"
                                        gigya-conditional:value="screenset.width < 430?auto:">
                                    <param name="buttonSize" value="45">
                                    <param name="columns" gigya-conditional:value="screenset.width < 430?2:">
                                    <param name="showWhatsThis" value="false">
                                    <param name="showTermsLink" value="false">
                                    <param name="hideGigyaLink" value="true">
                                    <param name="_pluginCenterFix" value="true">
                                    <param name="loginMode" value="link">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- divider -->
                <div class="gigya-layout-row">
                    <div class="responsive with-divider">
                        <div class="gigya-container gigya-visible-when myD-register-form-divider"
                            data-login-identities="site-and-social" style="margin-bottom: 40px;">
                            <p class="myD-register-form-divider__label">OR</p>
                        </div>
                    </div>
                </div>

                <!-- site login -->
                <div class="gigya-layout-row">
                    <div class="with-site-login responsive">
                        <div class="gigya-layout-row">
                            <div class="gigya-container gigya-visible-when" data-login-identities="site-and-social">
                                <h4 data-translation-key="HEADER_119803489452460820_LABEL">Looks like you've logged
                                    in with your email address, and with your social media. Link your accounts by
                                    signing in with your email or social account.</h4>
                            </div>

                            <div class="gigya-container gigya-visible-when" data-login-identities="site">
                                <div class="gigya-composite-control gigya-composite-control-textbox form-field">
                                    <input type="text" name="loginID" class="gigya-input-text valid-email-text"
                                        formnovalidate="formnovalidate" onblur="validateEmailInput(this);"
                                        disabled="disabled"
                                        gigya-expression:data-gigya-placeholder="screenset.translations['TEXTBOX_9521252200460624_PLACEHOLDER']"
                                        gigya-expression:aria-label="screenset.translations['TEXTBOX_9521252200460624_PLACEHOLDER']"
                                        style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII=&quot;);">
                                    <label class="form-field__label">Email</label>
                                    <i class="bar"></i>
                                    <span class="gigya-error-msg" data-bound-to="loginID"></span>
                                    <span class="valid-inputs-Email" style="display:none;">Invalid special
                                        characters found</span>
                                </div>
                            </div>
                            <div class="gigya-container gigya-visible-when" data-login-identities="site"
                                style="padding-top: 1px;">
                                <div
                                    class="gigya-composite-control gigya-composite-control-password form-field mb-0">
                                    <input type="password" name="password" class="gigya-input-password"
                                        gigya-expression:data-gigya-placeholder="screenset.translations['PASSWORD_112529999536342910_PLACEHOLDER']"
                                        gigya-expression:aria-label="screenset.translations['PASSWORD_112529999536342910_PLACEHOLDER']"
                                        style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;">
                                    <label class="form-field__label">Password</label>
                                    <i class="bar"></i>
                                    <span class="gigya-error-msg" data-bound-to="password"></span>
                                </div>
                                <a href="#" data-toggle="modal" data-target="#modal-forgot-password"
                                    data-backdrop="static"
                                    class="gigya-forgotPassword gigya-composite-control gigya-composite-control-link myD-forgot-password-link"
                                    data-translation-key="LINK_146308315993881860_LABEL"
                                    onclick="gigya.accounts.showScreenSet(fpParams)">Forgot Password</a>
                            </div>

                            <div class="gigya-container gigya-visible-when" data-login-identities="site">
                                <div class="gigya-composite-control gigya-composite-control-submit">
                                    <input type="submit" class="gigya-input-submit mt-3"
                                        gigya-expression:value="screenset.translations['SUBMIT_36585504925953250_VALUE']"
                                        value="Submit">
                                </div>
                            </div>
                            <div class="gigya-error-display gigya-composite-control gigya-composite-control-form-error"
                                data-bound-to="gigya-link-accounts-form">
                                <div class="gigya-error-msg gigya-form-error-msg"
                                    data-bound-to="gigya-link-accounts-form"></div>
                            </div>
                        </div>

                        <div class="gigya-clear"></div>
                    </div>
                </div>
            </form>
        </div>

    </div>
    <!-- gigya link accounts screen ends here -->
</div>
<div class="dcom-footer-wrapper" style="top: 70px;">





    <!-- Footer component starts-->
    <footer class="cmp-footer" id="footer">
        <!-- Footer Top Bar starts -->
        <div class="cmp-footer__top-bar">
            <div class="cmp-container-width aem-Grid aem-Grid--12">
                <div
                    class="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--tablet--12 aem-GridColumn--phone--12">
                    <!-- Footer CTA start-->
                    <ul class="cmp-footer__cta-links" id="footer__cta-links">

                        <li><a href="https://www2.deloitte.com/uk/en/footerlinks/contact-us.html?icid=bn_contact-us" target="_self">Contact
                                us</a></li>


                        <li><a href="https://www2.deloitte.com/uk/en/careers/careers.html?icid=bn_careers" target="_self">Careers at
                                Deloitte</a></li>


                        <li class="submit-rfp"><a href="https://www2.deloitte.com/uk/en/footerlinks/submit-rfp.html?icid=bn_submit-rfp"
                                target="_self">Submit RFP</a></li>


                    </ul>
                    <!-- Footer CTA end-->
                </div>

                <div
                    class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--12 aem-GridColumn--phone--12">
                    <!-- Footer secondary social start-->

                    <!-- Footer secondary social end-->
                </div>

            </div>
        </div>
        <!-- Footer Top Bar ends -->

        <!-- Footer Utility Bar starts -->

        <div class="cmp-footer__utility-bar" id="footer__utility-bar">
            <div class="cmp-container-width aem-Grid aem-Grid--12">
                <div class="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">

                    <!-- Footer Office location links start -->
                    <div class="cmp-footer__utility-bar__loc">
                        <a href="https://www2.deloitte.com/uk/en/footerlinks/global-office-directory.html?icid=bottom_global-office-directory"
                            title="Global office directory" class="cmp-footer__utility-bar__loc-directory">Global
                            office directory</a>
                        <a href="https://www2.deloitte.com/uk/en/footerlinks/office-locator.html?icid=bottom_office-locator"
                            title="Office locations" class="cmp-footer__utility-bar__loc-office">Office
                            locations</a>
                    </div>
                    <!-- Footer Office location links end -->

                    <!-- Footer site selector start-->
                    <div class="cmp-footer__utility-bar__loc">


                        <a href="javascript:void(0)" class="cmp-header__ut-nav__site-sel__link location-link"
                            data-toggle="siteSelector" aria-expanded="false" role="button">
                            <span class="desk-countrySelector">UK-EN</span>
                            <span class="mobile-location">Location:</span>
                            <span class="mobile-countrySelector">United Kingdom-English</span>
                            &nbsp;
                            <i class="icon-chevron"></i>
                        </a>
                    </div>
                    <!-- Footer site selector end-->

                </div>

                <!-- Footer About Deloitte start-->
                <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                    <div class="cmp-footer__utility-bar__about">
                        <a href="https://www2.deloitte.com/uk/en/footerlinks1/about-deloitte.html?icid=bottom_about-deloitte"
                            title="About Deloitte" class="cmp-footer__utility-bar__about-link"
                            id="footer__utility-bar__about">About Deloitte</a>
                    </div>
                </div>
                <!-- Footer About Deloitte end-->
            </div>
        </div>

        <!-- Footer Utility Bar ends -->

        <!-- Footer Links starts -->
        <div class="cmp-footer__links">
            <div class="cmp-container-width aem-Grid aem-Grid--12">

                <div class="cmp-footer__links-get-connected aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--12"
                    id="footer__links-get-connected">
                    <ul>



                        <li><a href="https://www2.deloitte.com/uk/en.html?icid=bottom_en">Home</a></li>




                        <li><a
                                href="https://www2.deloitte.com/uk/en/footerlinks/pressreleasespage.html?icid=bottom_pressreleasespage&amp;q=*&amp;sp_x_18=content-type&amp;sp_s=date-published-d%7Ctitle&amp;sp_q_18=%22Press+releases%22">Press
                                releases</a></li>




                        <li><a href="https://www2.deloitte.com/uk/en/footerlinks/newsroom.html?icid=bottom_newsroom">Newsroom</a></li>




                        <li><a href="https://www2.deloitte.com/uk/en/footerlinks/deloitte-insights.html?icid=bottom_deloitte-insights">Deloitte
                                Insights</a></li>




                        <li><a
                                href="https://www2.deloitte.com/uk/en/footerlinks/global-office-directory.html?icid=bottom_global-office-directory">Global
                                Office Directory</a></li>




                        <li><a href="https://www2.deloitte.com/uk/en/footerlinks/office-locator.html?icid=bottom_office-locator">Office
                                locator</a></li>




                        <li><a href="https://www2.deloitte.com/uk/en/footerlinks/contact-us.html?icid=bottom_contact-us">Contact us</a></li>




                        <li><a href="https://www2.deloitte.com/uk/en/footerlinks/submit-rfp.html?icid=bottom_submit-rfp">Submit RFP</a></li>


                    </ul>

                    <div id="footer__social" class="social-media-links">


                        <ul>

                            <li><a class="icon-facebook" href="https://www.facebook.com/deloitteuk"
                                    title="facebook"></a></li>



                            <li><a class="icon-twitter" href="https://twitter.com/deloitteuk" title="twitter"></a>
                            </li>



                            <li><a class="icon-linkedin" href="https://www.linkedin.com/company/deloitte/"
                                    title="linkedin"></a></li>



                            <li><a class="icon-youtube" href="https://www.youtube.com/deloitteuk"
                                    title="youtube"></a></li>



                            <li><a class="icon-blog" href="https://www2.deloitte.com/uk/en/blog/home.html"
                                    title="blog"></a></li>

                        </ul>

                    </div>
                </div>

                <div class="cmp-footer__links-target aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 at-element-marker"
                    id="footer__links-target">
                    <div>
                        <style>
                            #footer__links-target span {
                                font-size: 1.2em;
                                margin: 0px;
                            }

                            #footer__links-target ul li a {
                                line-height: 1.2em;
                            }

                            #footer__links-target ul li a strong {
                                font-size: 1.2em;
                                font-weight: bold;
                            }

                            #footer__links-target ul li {
                                margin-bottom: 15px;
                            }

                            #footer__links-target {
                                padding-right: 30px;
                            }

                            @media screen and (max-width:767px) {
                                #footer__links-target {
                                    margin-top: 20px;
                                }

                                #footer__links-target ul li {
                                    display: block;
                                }
                            }
                        </style>
                        <ul>
                            <li> <a href="https://www2.deloitte.com/uk/en/pages/public-sector/articles/defining-population-health.html"
                                    data-promocategory="dynamic" data-promotype="recommendation|footer"
                                    class="BI-rec-click"><strong>Defining Population Health </strong></a><br>
                                <span> </span>
                            </li>
                            <li> <a href="https://www2.deloitte.com/uk/en/insights/industry/public-sector/design-thinking-co-creation.html"
                                    data-promocategory="dynamic" data-promotype="recommendation|footer"
                                    class="BI-rec-click"><strong>Cocreation for impact</strong></a><br>
                                <span> Tackle wicked multistakeholder problems </span>
                            </li>
                            <li> <a href="https://www2.deloitte.com/uk/en/insights/industry/public-sector/innovation-in-government-organizations.html"
                                    data-promocategory="dynamic" data-promotype="recommendation|footer"
                                    class="BI-rec-click"><strong>Success at scale</strong></a><br>
                                <span> A guide to scaling public sector innovation</span>
                            </li>
                        </ul>
                    </div>
                </div>


                <div class="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--12"
                    id="footer__links-services">
                    <h5>Services</h5>
                    <ul>

                        <li><a href="https://www2.deloitte.com/uk/en/services/audit.html?icid=bottom_audit">Audit &amp; Assurance</a></li>

                        <li><a href="https://www2.deloitte.com/uk/en/services/consulting.html?icid=bottom_consulting">Consulting</a></li>

                        <li><a href="https://www2.deloitte.com/uk/en/services/financial-advisory.html?icid=bottom_financial-advisory">Financial
                                Advisory</a></li>

                        <li><a href="https://www2.deloitte.com/uk/en/services/legal.html?icid=bottom_legal">Legal</a></li>

                        <li><a
                                href="https://www2.deloitte.com/uk/en/pages/private-markets/topics/deloitte-private.html?icid=bottom_deloitte-private">Deloitte
                                Private</a></li>

                        <li><a href="https://www2.deloitte.com/uk/en/services/risk-advisory.html?icid=bottom_risk-advisory">Risk Advisory</a>
                        </li>

                        <li><a href="https://www2.deloitte.com/uk/en/services/tax.html?icid=bottom_tax">Tax</a></li>

                    </ul>
                </div>

                <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12"
                    id="footer__links-industries">
                    <h5>Industries</h5>
                    <ul>

                        <li><a href="https://www2.deloitte.com/uk/en/industries/consumer.html?icid=bottom_consumer">Consumer</a></li>

                        <li><a href="https://www2.deloitte.com/uk/en/industries/energy-and-resources.html?icid=bottom_energy-and-resources">Energy,
                                Resources &amp; Industrials</a></li>

                        <li><a href="https://www2.deloitte.com/uk/en/industries/financial-services.html?icid=bottom_financial-services">Financial
                                Services</a></li>

                        <li><a
                                href="https://www2.deloitte.com/uk/en/industries/government-and-public-services.html?icid=bottom_government-and-public-services">Government
                                &amp; Public Services</a></li>

                        <li><a
                                href="https://www2.deloitte.com/uk/en/industries/life-sciences-and-healthcare.html?icid=bottom_life-sciences-and-healthcare">Life
                                Sciences &amp; Health Care</a></li>

                        <li><a
                                href="https://www2.deloitte.com/uk/en/industries/technology-media-and-telecommunications.html?icid=bottom_technology-media-and-telecommunications">Technology,
                                Media &amp; Telecommunications</a></li>

                    </ul>
                </div>

                <div class="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--12"
                    id="footer__links-careers">
                    <h5>Careers</h5>
                    <ul>

                        <li><a href="https://www2.deloitte.com/uk/en/careers/careers.html?icid=bottom_careers">Careers Home</a></li>

                        <li><a href="https://www2.deloitte.com/uk/en/careers/life-at-deloitte.html?icid=bottom_life-at-deloitte">Life at
                                Deloitte</a></li>

                        <li><a href="https://www2.deloitte.com/uk/en/careers/professionals.html?icid=bottom_professionals">Professional
                                Careers</a></li>

                        <li><a
                                href="https://www2.deloitte.com/uk/en/pages/careers/articles/selection-process.html?icid=bottom_selection-process">Early
                                Careers Application</a></li>

                        <li><a href="https://www2.deloitte.com/uk/en/careers/programmes.html?icid=bottom_programmes">Early Careers
                                Programmes</a></li>

                        <li><a href="https://www2.deloitte.com/uk/en/careers/students.html?icid=bottom_students">Early Careers Paths</a></li>

                    </ul>
                </div>


            </div>

            <!-- footer legal links start-->
            <div class="cmp-footer__links-legal cmp-container-width aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12"
                id="footer__links-legal">
                <ul>


                    <li><a href="https://www2.deloitte.com/uk/en/footerlinks1/about-deloitte.html?icid=bottom_about-deloitte">About
                            Deloitte</a></li>

                    <li><a href="https://www2.deloitte.com/uk/en/footerlinks1/about-deloitte-uk.html?icid=bottom_about-deloitte-uk">About
                            Deloitte UK</a></li>

                    <li><a
                            href="https://www2.deloitte.com/uk/en/footerlinks1/accessibility-statement.html?icid=bottom_accessibility-statement">Accessibility
                            statement</a></li>

                    <li><a href="https://www2.deloitte.com/uk/en/footerlinks1/cookies.html?icid=bottom_cookies">Cookies</a></li>

                    <li><a href="https://www2.deloitte.com/uk/en/footerlinks1/health-and-safety.html?icid=bottom_health-and-safety">Health
                            and Safety</a></li>

                    <li><a
                            href="https://www2.deloitte.com/uk/en/footerlinks1/modern-slavery-act-statement.html?icid=bottom_modern-slavery-act-statement">Modern
                            Slavery Act Statement</a></li>

                    <li><a href="https://www2.deloitte.com/uk/en/footerlinks1/privacy.html?icid=bottom_privacy">Privacy statement</a></li>

                    <li><a
                            href="https://www2.deloitte.com/uk/en/footerlinks1/regulators-and-provision-service-regulations.html?icid=bottom_regulators-and-provision-service-regulations">Regulators
                            &amp; Provision of Services Regulations</a></li>

                    <li><a href="https://www2.deloitte.com/uk/en/footerlinks1/subprocessors.html?icid=bottom_subprocessors">Deloitte LLP
                            Subprocessors</a></li>

                    <li><a
                            href="https://www2.deloitte.com/uk/en/footerlinks1/supplier-standard-terms-conditions.html?icid=bottom_supplier-standard-terms-conditions">Supplier
                            Standard Terms &amp; Conditions</a></li>

                    <li><a href="https://www2.deloitte.com/uk/en/footerlinks1/legal.html?icid=bottom_legal">Terms of Use</a></li>


                </ul>
            </div>
            <!-- footer legal links end -->

        </div>
        <!-- Footer Links ends -->

        <!-- Footer Bottom Bar starts -->
        <div class="cmp-footer__copy-rights cmp-container-width aem-Grid aem-Grid--12">
            <div class="aem-GridColumn aem-GridColumn--default--10 aem-GridColumn--phone--12">
                <div class="cmp-footer__disclaimer" id="footer__disclaimer">
                    <p></p>
                    <p>?? 2022. See <a href="https://www2.deloitte.com/uk/en/legal/legal.html">Terms of Use</a> for more information.</p>

                    <p>&nbsp;</p>


                    <p>Deloitte LLP is the United Kingdom affiliate of Deloitte NSE LLP, a member firm of Deloitte
                        Touche Tohmatsu Limited, a UK private company limited by guarantee (???DTTL???). DTTL and each
                        of its member firms are legally separate and independent entities. DTTL and Deloitte NSE LLP
                        do not provide services to clients. Please see&nbsp;<a
                            href="https://www2.deloitte.com/uk/en/legal/about-deloitte.html">About Deloitte</a> to learn more about our
                        global network of member firms.</p>

                    <p>&nbsp;</p>


                    <p>Deloitte LLP is a limited liability partnership registered in England and Wales with
                        registered number OC303675 and its registered office at 1 New Street Square, London EC4A
                        3HQ, United Kingdom.&nbsp;A list of members of Deloitte LLP is available at <a
                            href="https://find-and-update.company-information.service.gov.uk/"
                            target="_blank">Companies House</a>.</p>


                    <p></p>
                </div>
            </div>
            <div class="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--12">
                <div id="footer__sponsor-logo" class="cmp-footer__sponsor-logo"> </div>
            </div>
        </div>
        <!-- Footer Bottom Bar ends -->
    </footer>





    <div class="site-selector">

        <div class="site-selector__container visibility-hidden" id="site-options" tabindex="-1" role="dialog">
            <div role="search">
                <input type="text" size="10" class="gsc-input" name="qr" title="search" id="siteSearch"
                    enableorderby="true" spellcheck="false" placeholder="Type location" autocomplete="off">
                <span class="icon-search search-option"></span>
            </div>


            <div class="site-selector__container__list" id="site-selector">

                <ul class="channel-site">
                    <li><a href="https://www2.deloitte.com/global/en.html?icid=site_selector_global" class="site_global_en"> <span
                                class="site-locale">Global (English)</span><span class="site-trans">Global
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="http://www2.deloitte.com/al/sq.html?icid=site_selector_al" class="site_al_en">
                            <span class="site-locale">Albania &amp; Kosova (English)</span><span
                                class="site-trans">Albania (English)</span><span class="site-abbr"
                                style="display:none"></span></a></li>
                    <li><a href="http://www2.deloitte.com/al/sq.html?icid=site_selector_al" class="site_al_sq">
                            <span class="site-locale">Shqiperia (Shqiptar)</span><span class="site-trans">Albania
                                (Albanian)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/dz/fr.html?icid=site_selector_dz" class="site_dz_fr"> <span
                                class="site-locale">Algeria (Fran??ais)</span><span class="site-trans">Algeria
                                (French)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/ao/pt.html?icid=site_selector_ao" class="site_ao_pt"> <span
                                class="site-locale">Angola (Portugu??s)</span><span class="site-trans">Angola
                                (Portuguese)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/ar/es.html?icid=site_selector_ar" class="site_ar_es"> <span
                                class="site-locale">Argentina (Espa??ol)</span><span class="site-trans">Argentina
                                (Spanish)</span><span class="site-abbr" style="display:none">Ar, Arg</span></a></li>
                    <li><a href="https://www2.deloitte.com/am/en.html?icid=site_selector_am" class="site_am_en"> <span
                                class="site-locale">Armenia (English)</span><span class="site-trans">Armenia
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/am/am.html?icid=site_selector_am" class="site_am_am"> <span
                                class="site-locale">???????????????? (??????????????)</span><span class="site-trans">Armenia
                                (Armenian)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/au/en.html?icid=site_selector_au" class="site_au_en"> <span
                                class="site-locale">Australia (English)</span><span class="site-trans">Australia
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/at/de.html?icid=site_selector_at" class="site_at_de"> <span
                                class="site-locale">??sterreich (Deutsch)</span><span class="site-trans">Austria
                                (German)</span><span class="site-abbr" style="display:none">??s,aus</span></a></li>
                    <li><a href="https://www2.deloitte.com/az/az.html?icid=site_selector_az" class="site_az_az"> <span
                                class="site-locale">Az??rbaycan (Azeri)</span><span class="site-trans">Azerbaijan
                                (Azeri)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/az/en.html?icid=site_selector_az" class="site_az_en"> <span
                                class="site-locale">Azerbaijan (English)</span><span class="site-trans">Azerbaijan
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/bs/en.html?icid=site_selector_bs" class="site_bs_en"> <span
                                class="site-locale">Bahamas (English)</span><span class="site-trans">Bahamas
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/bh/en.html?icid=site_selector_bh" class="site_bh_en"> <span
                                class="site-locale">Bahrain (English)</span><span class="site-trans">Bahrain
                                (English)</span><span class="site-abbr" style="display:none">BH, bh</span></a></li>
                    <li><a href="https://www2.deloitte.com/bd/en.html?icid=site_selector_bd" class="site_bd_en"> <span
                                class="site-locale">Bangladesh (English)</span><span class="site-trans">Bangladesh
                                (English)</span><span class="site-abbr" style="display:none">bd, BD</span></a></li>
                    <li><a href="https://www2.deloitte.com/bb/en.html?icid=site_selector_bb" class="site_bb_en"> <span
                                class="site-locale">Barbados (English)</span><span class="site-trans">Barbados
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/by/ru.html?icid=site_selector_by" class="site_by_ru"> <span
                                class="site-locale">???????????????? (??????????????)</span><span class="site-trans">Belarus
                                (Russian)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/by/en.html?icid=site_selector_by" class="site_by_en"> <span
                                class="site-locale">Belarus (English)</span><span class="site-trans">Belarus
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/be/en.html?icid=site_selector_be" class="site_be_en"> <span
                                class="site-locale">Belgium (English)</span><span class="site-trans">Belgium
                                (English)</span><span class="site-abbr" style="display:none">BE,be</span></a></li>
                    <li><a href="https://www2.deloitte.com/bj/fr.html?icid=site_selector_bj" class="site_bj_fr"> <span
                                class="site-locale">Benin (Fran??ais)</span><span class="site-trans">Benin
                                (French)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/bm/en.html?icid=site_selector_bm" class="site_bm_en"> <span
                                class="site-locale">Bermuda (English)</span><span class="site-trans">Bermuda
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/bo/es.html?icid=site_selector_bo" class="site_bo_es"> <span
                                class="site-locale">Bolivia (Espa??ol)</span><span class="site-trans">Bolivia
                                (Spanish)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/ba/bs.html?icid=site_selector_ba" class="site_ba_bs"> <span
                                class="site-locale">Bosna i Hercegovina (Bosanski)</span><span
                                class="site-trans">Bosnia and Herzegovina (Bosnian)</span><span class="site-abbr"
                                style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/ba/en.html?icid=site_selector_ba" class="site_ba_en"> <span
                                class="site-locale">Bosnia and Herzegovina (English)</span><span
                                class="site-trans">Bosnia and Herzegovina (English)</span><span class="site-abbr"
                                style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/br/pt.html?icid=site_selector_br" class="site_br_pt"> <span
                                class="site-locale">Brasil (Portugu??s)</span><span class="site-trans">Brazil
                                (Portuguese)</span><span class="site-abbr" style="display:none">bra, port</span></a>
                    </li>
                    <li><a href="https://www2.deloitte.com/br/en.html?icid=site_selector_br" class="site_br_en"> <span
                                class="site-locale">Brazil (English)</span><span class="site-trans">Brazil
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/vg/en.html?icid=site_selector_vg" class="site_vg_en"> <span
                                class="site-locale">British Virgin Islands (English)</span><span
                                class="site-trans">British Virgin Islands (English)</span><span class="site-abbr"
                                style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/bn/en.html?icid=site_selector_bn" class="site_bn_en"> <span
                                class="site-locale">Brunei Darussalam (English)</span><span
                                class="site-trans">Brunei Darussalam (English)</span><span class="site-abbr"
                                style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/bg/bg.html?icid=site_selector_bg" class="site_bg_bg"> <span
                                class="site-locale">???????????????? (??????????????????)</span><span class="site-trans">Bulgaria
                                (Bulgarian)</span><span class="site-abbr" style="display:none">bg,bul</span></a>
                    </li>
                    <li><a href="https://www2.deloitte.com/bg/en.html?icid=site_selector_bg" class="site_bg_en"> <span
                                class="site-locale">Bulgaria (English)</span><span class="site-trans">Bulgaria
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/kh/en.html?icid=site_selector_kh" class="site_kh_en"> <span
                                class="site-locale">Cambodia (English)</span><span class="site-trans">Cambodia
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/cm/fr.html?icid=site_selector_cm" class="site_cm_fr"> <span
                                class="site-locale">Cameroon (Fran??ais)</span><span class="site-trans">Cameroon
                                (French)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/ca/en.html?icid=site_selector_ca" class="site_ca_en"> <span
                                class="site-locale">Canada (English)</span><span class="site-trans">Canada
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/ca/fr.html?icid=site_selector_ca" class="site_ca_fr"> <span
                                class="site-locale">Canada (Fran??ais)</span><span class="site-trans">Canada
                                (French)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/ky/en.html?icid=site_selector_ky" class="site_ky_en"> <span
                                class="site-locale">Cayman Islands (English)</span><span class="site-trans">Cayman
                                Islands (English)</span><span class="site-abbr" style="display:none"></span></a>
                    </li>
                    <li><a href="http://www2.deloitte.com/uk/en.html?icid=site_selector_xb" class="site_xb_en">
                            <span class="site-locale">Channel Islands and Isle of Man (English)</span><span
                                class="site-trans">Channel Islands and Isle Of Man (English)</span><span
                                class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/cl/es.html?icid=site_selector_cl" class="site_cl_es"> <span
                                class="site-locale">Chile (Espa??ol)</span><span class="site-trans">Chile
                                (Spanish)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/cn/zh.html?icid=site_selector_cn" class="site_cn_zh"> <span class="site-locale">??????
                                (????????????)</span><span class="site-trans">China (Chinese)</span><span class="site-abbr"
                                style="display:none">cn,CN,china,China,PRC,pcr,???,??????,???,??????,???,??????,chn,CHN,Zhongguo,zhongguo</span></a>
                    </li>
                    <li><a href="https://www2.deloitte.com/cn/en.html?icid=site_selector_cn" class="site_cn_en"> <span
                                class="site-locale">China (English)</span><span class="site-trans">China
                                (English)</span><span class="site-abbr"
                                style="display:none">cn,CN,china,China,PRC,pcr,???,??????,???,??????,???,??????,chn,CHN,Zhongguo,zhongguo</span></a>
                    </li>
                    <li><a href="https://www2.deloitte.com/co/es.html?icid=site_selector_co" class="site_co_es"> <span
                                class="site-locale">Colombia (Espa??ol)</span><span class="site-trans">Colombia
                                (Spanish)</span><span class="site-abbr" style="display:none">co</span></a></li>
                    <li><a href="https://www2.deloitte.com/cg/fr.html?icid=site_selector_cg" class="site_cg_fr"> <span
                                class="site-locale">Congo (Fran??ais)</span><span class="site-trans">Congo
                                (French)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/cr/es.html?icid=site_selector_cr" class="site_cr_es"> <span
                                class="site-locale">Costa Rica (Espa??ol)</span><span class="site-trans">Costa Rica
                                (Spanish)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/hr/hr.html?icid=site_selector_hr" class="site_hr_hr"> <span
                                class="site-locale">Hrvatska (Hrvatski)</span><span class="site-trans">Croatia
                                (Croatian)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/hr/en.html?icid=site_selector_hr" class="site_hr_en"> <span
                                class="site-locale">Croatia (English)</span><span class="site-trans">Croatia
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/cy/en.html?icid=site_selector_cy" class="site_cy_en"> <span
                                class="site-locale">Cyprus (English)</span><span class="site-trans">Cyprus
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/cz/cs.html?icid=site_selector_cz" class="site_cz_cs"> <span
                                class="site-locale">??esk?? republika (??e??tina)</span><span class="site-trans">Czech
                                Republic (Czech)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/cz/en.html?icid=site_selector_cz" class="site_cz_en"> <span
                                class="site-locale">Czech Republic (English)</span><span class="site-trans">Czech
                                Republic (English)</span><span class="site-abbr" style="display:none"></span></a>
                    </li>
                    <li><a href="https://www2.deloitte.com/cd/fr.html?icid=site_selector_cd" class="site_cd_fr"> <span
                                class="site-locale">Democratic Republic of the Congo (Fran??ais)</span><span
                                class="site-trans">Democratic Republic of the Congo (French)</span><span
                                class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/dk/da.html?icid=site_selector_dk" class="site_dk_da"> <span
                                class="site-locale">Danmark (Dansk)</span><span class="site-trans">Denmark
                                (Danish)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/do/es.html?icid=site_selector_do" class="site_do_es"> <span
                                class="site-locale">Dominican Republic (Espa??ol)</span><span
                                class="site-trans">Dominican Republic (Spanish)</span><span class="site-abbr"
                                style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/ec/es.html?icid=site_selector_ec" class="site_ec_es"> <span
                                class="site-locale">Ecuador (Espa??ol)</span><span class="site-trans">Ecuador
                                (Spanish)</span><span class="site-abbr" style="display:none">ec</span></a></li>
                    <li><a href="https://www2.deloitte.com/eg/en.html?icid=site_selector_eg" class="site_eg_en"> <span
                                class="site-locale">Egypt (English)</span><span class="site-trans">Egypt
                                (English)</span><span class="site-abbr" style="display:none">EG, eg</span></a></li>
                    <li><a href="https://www2.deloitte.com/sv/es.html?icid=site_selector_sv" class="site_sv_es"> <span class="site-locale">El
                                Salvador (Espa??ol)</span><span class="site-trans">El Salvador (Spanish)</span><span
                                class="site-abbr" style="display:none">SV, SAL, sv, sal</span></a></li>
                    <li><a href="https://www2.deloitte.com/gq/fr.html?icid=site_selector_gq" class="site_gq_fr"> <span
                                class="site-locale">Equatorial Guinea (Fran??ais)</span><span
                                class="site-trans">Equatorial Guinea (French)</span><span class="site-abbr"
                                style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/ee/en.html?icid=site_selector_ee" class="site_ee_en"> <span
                                class="site-locale">Estonia (English)</span><span class="site-trans">Estonia
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/content/www/za/en/pages/deloitte-africa/topics/deloitte-africa.html?icid=site_selector_et"
                            class="site_et_en"> <span class="site-locale">Ethiopia (English)</span><span
                                class="site-trans">Ethiopia (English)</span><span class="site-abbr"
                                style="display:none">et, ET</span></a></li>
                    <li><a href="https://www2.deloitte.com/fi/fi.html?icid=site_selector_fi" class="site_fi_fi"> <span
                                class="site-locale">Suomi (Suomi)</span><span class="site-trans">Finland
                                (Finnish)</span><span class="site-abbr" style="display:none">fin,suomi</span></a>
                    </li>
                    <li><a href="https://www2.deloitte.com/fr/fr.html?icid=site_selector_fr" class="site_fr_fr"> <span
                                class="site-locale">France (Fran??ais)</span><span class="site-trans">France
                                (French)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/ga/fr.html?icid=site_selector_ga" class="site_ga_fr"> <span
                                class="site-locale">Gabon (Fran??ais)</span><span class="site-trans">Gabon
                                (French)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="http://www2.deloitte.com/ge/en.html?icid=site_selector_ge" class="site_ge_en">
                            <span class="site-locale">Georgia (English)</span><span class="site-trans">Georgia
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="http://www2.deloitte.com/ge/en.html?icid=site_selector_ge" class="site_ge_ka">
                            <span class="site-locale">?????????????????????????????? (?????????????????????)</span><span class="site-trans">Georgia
                                (Georgian)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/de/de.html?icid=site_selector_de" class="site_de_de"> <span
                                class="site-locale">Deutschland (Deutsch)</span><span class="site-trans">Germany
                                (German)</span><span class="site-abbr" style="display:none">DEU</span></a></li>
                    <li><a href="https://www2.deloitte.com/gh/en.html?icid=site_selector_gh" class="site_gh_en"> <span
                                class="site-locale">Ghana (English)</span><span class="site-trans">Ghana
                                (English)</span><span class="site-abbr" style="display:none">GH, GHA</span></a></li>
                    <li><a href="https://www2.deloitte.com/gr/en.html?icid=site_selector_gr" class="site_gr_en"> <span
                                class="site-locale">Greece (English)</span><span class="site-trans">Greece
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/gu/en.html?icid=site_selector_gu" class="site_gu_en"> <span
                                class="site-locale">Guam (English)</span><span class="site-trans">Guam
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/gt/es.html?icid=site_selector_gt" class="site_gt_es"> <span
                                class="site-locale">Guatemala (Espa??ol)</span><span class="site-trans">Guatemala
                                (Spanish)</span><span class="site-abbr" style="display:none">gt</span></a></li>
                    <li><a href="https://www2.deloitte.com/hn/es.html?icid=site_selector_hn" class="site_hn_es"> <span
                                class="site-locale">Honduras (Espa??ol)</span><span class="site-trans">Honduras
                                (Spanish)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="http://www2.deloitte.com/cn/zh.html?icid=site_selector_hk" class="site_hk_zh">
                            <span class="site-locale">Hong Kong (Chinese)</span><span class="site-trans">Hong Kong
                                (Chinese)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="http://www2.deloitte.com/cn/en.html?icid=site_selector_hk" class="site_hk_en">
                            <span class="site-locale">Hong Kong (English)</span><span class="site-trans">Hong Kong
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/hu/hu.html?icid=site_selector_hu" class="site_hu_hu"> <span
                                class="site-locale">Magyarorsz??g (Magyar)</span><span class="site-trans">Hungary
                                (Hungarian)</span><span class="site-abbr"
                                style="display:none">hungary,magyar,hun,hu</span></a></li>
                    <li><a href="https://www2.deloitte.com/hu/en.html?icid=site_selector_hu" class="site_hu_en"> <span
                                class="site-locale">Hungary (English)</span><span class="site-trans">Hungary
                                (English)</span><span class="site-abbr"
                                style="display:none">hun,hu,hungary</span></a></li>
                    <li><a href="https://www2.deloitte.com/is/is.html?icid=site_selector_is" class="site_is_is"> <span
                                class="site-locale">Iceland (Icelandic)</span><span class="site-trans">Iceland
                                (Icelandic)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/in/en.html?icid=site_selector_in" class="site_in_en"> <span
                                class="site-locale">India (English)</span><span class="site-trans">India
                                (English)</span><span class="site-abbr"
                                style="display:none">in,ind,bharat,hindustan</span></a></li>
                    <li><a href="https://www2.deloitte.com/ui/en.html?icid=site_selector_ui" class="site_ui_en"> <span
                                class="site-locale">India (Offices of the US) (English)</span><span
                                class="site-trans">India (Offices of the US) (English)</span><span class="site-abbr"
                                style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/id/en.html?icid=site_selector_id" class="site_id_en"> <span
                                class="site-locale">Indonesia (English)</span><span class="site-trans">Indonesia
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/iq/en.html?icid=site_selector_iq" class="site_iq_en"> <span
                                class="site-locale">Iraq (English)</span><span class="site-trans">Iraq
                                (English)</span><span class="site-abbr" style="display:none">IQ, iq</span></a></li>
                    <li><a href="https://www2.deloitte.com/ie/en.html?icid=site_selector_ie" class="site_ie_en"> <span
                                class="site-locale">Ireland (English)</span><span class="site-trans">Ireland
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/il/en.html?icid=site_selector_il" class="site_il_en"> <span
                                class="site-locale">Israel (English)</span><span class="site-trans">Israel
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/it/it.html?icid=site_selector_it" class="site_it_it"> <span
                                class="site-locale">Italia (Italiano)</span><span class="site-trans">Italy
                                (Italian)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/ci/fr.html?icid=site_selector_ci" class="site_ci_fr"> <span
                                class="site-locale">Ivory Coast (Fran??ais)</span><span class="site-trans">Ivory
                                Coast (French)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/jp/ja.html?icid=site_selector_jp" class="site_jp_ja"> <span class="site-locale">??????
                                (?????????)</span><span class="site-trans">Japan (Japanese)</span><span class="site-abbr"
                                style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/jp/en.html?icid=site_selector_jp" class="site_jp_en"> <span
                                class="site-locale">Japan (English)</span><span class="site-trans">Japan
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/jo/en.html?icid=site_selector_jo" class="site_jo_en"> <span
                                class="site-locale">Jordan (English)</span><span class="site-trans">Jordan
                                (English)</span><span class="site-abbr" style="display:none">JO, jo</span></a></li>
                    <li><a href="https://www2.deloitte.com/kz/ru.html?icid=site_selector_kz" class="site_kz_ru"> <span
                                class="site-locale">?????????????????? (??????????????)</span><span class="site-trans">Kazakhstan
                                (Russian)</span><span class="site-abbr" style="display:none">KZ, RU</span></a></li>
                    <li><a href="https://www2.deloitte.com/kz/en.html?icid=site_selector_kz" class="site_kz_en"> <span
                                class="site-locale">Kazakhstan (English)</span><span class="site-trans">Kazakhstan
                                (English)</span><span class="site-abbr" style="display:none">KZ, EN</span></a></li>
                    <li><a href="https://www2.deloitte.com/ke/en.html?icid=site_selector_ke" class="site_ke_en"> <span
                                class="site-locale">Kenya (English)</span><span class="site-trans">Kenya
                                (English)</span><span class="site-abbr" style="display:none">KE, ke</span></a></li>
                    <li><a href="http://www2.deloitte.com/kr/ko.html?icid=site_selector_kr" class="site_kr_ko">
                            <span class="site-locale">???????????? (?????????)</span><span class="site-trans">Korea
                                (Korean)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="http://www2.deloitte.com/kr/ko.html?icid=site_selector_kr" class="site_kr_en">
                            <span class="site-locale">Korea (English)</span><span class="site-trans">Korea
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/kw/en.html?icid=site_selector_kw" class="site_kw_en"> <span
                                class="site-locale">Kuwait (English)</span><span class="site-trans">Kuwait
                                (English)</span><span class="site-abbr" style="display:none">KW, kw</span></a></li>
                    <li><a href="https://www2.deloitte.com/content/www/kz/ru/pages/kyrgyzstan/topics/kyrgyzstan.html?icid=site_selector_kg"
                            class="site_kg_ru"> <span class="site-locale">???????????????????? (??????????????)</span><span
                                class="site-trans">Kyrgyzstan (Russian)</span><span class="site-abbr"
                                style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/content/www/kz/en/pages/kyrgyzstan/topics/kyrgyzstan-practice.html?icid=site_selector_kg"
                            class="site_kg_en"> <span class="site-locale">Kyrgyzstan (English)</span><span
                                class="site-trans">Kyrgyzstan (English)</span><span class="site-abbr"
                                style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/la/en.html?icid=site_selector_la" class="site_la_en"> <span
                                class="site-locale">Lao PDR (English)</span><span class="site-trans">Lao PDR
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/lv/en.html?icid=site_selector_lv" class="site_lv_en"> <span
                                class="site-locale">Latvia (English)</span><span class="site-trans">Latvia
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/lb/en.html?icid=site_selector_lb" class="site_lb_en"> <span
                                class="site-locale">Lebanon (English)</span><span class="site-trans">Lebanon
                                (English)</span><span class="site-abbr" style="display:none">LB, lb</span></a></li>
                    <li><a href="https://www2.deloitte.com/ly/en.html?icid=site_selector_ly" class="site_ly_en"> <span
                                class="site-locale">Libya (English)</span><span class="site-trans">Libya
                                (English)</span><span class="site-abbr" style="display:none">LY, ly</span></a></li>
                    <li><a href="http://www2.deloitte.com/ch/de.html?icid=site_selector_li" class="site_li_de">
                            <span class="site-locale">Liechtenstein (German)</span><span
                                class="site-trans">Liechtenstein (German)</span><span class="site-abbr"
                                style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/lt/en.html?icid=site_selector_lt" class="site_lt_en"> <span
                                class="site-locale">Lithuania (English)</span><span class="site-trans">Lithuania
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/lu/en.html?icid=site_selector_lu" class="site_lu_en"> <span
                                class="site-locale">Luxembourg (English)</span><span class="site-trans">Luxembourg
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="http://www2.deloitte.com/cn/zh.html?icid=site_selector_mo" class="site_mo_zh">
                            <span class="site-locale">Macau (Chinese)</span><span class="site-trans">Macau
                                (Chinese)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="http://www2.deloitte.com/cn/en.html?icid=site_selector_mo" class="site_mo_en">
                            <span class="site-locale">Macau (English)</span><span class="site-trans">Macau
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/my/en.html?icid=site_selector_my" class="site_my_en"> <span
                                class="site-locale">Malaysia (English)</span><span class="site-trans">Malaysia
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/mt/en.html?icid=site_selector_mt" class="site_mt_en"> <span
                                class="site-locale">Malta (English)</span><span class="site-trans">Malta
                                (English)</span><span class="site-abbr" style="display:none">MT,mt</span></a></li>
                    <li><a href="https://www2.deloitte.com/mu/en.html?icid=site_selector_mu" class="site_mu_en"> <span
                                class="site-locale">Mauritius (English)</span><span class="site-trans">Mauritius
                                (English)</span><span class="site-abbr" style="display:none">MU, Mauritius,
                                Ebene</span></a></li>
                    <li><a href="http://www2.deloitte.com/mx/es.html?icid=site_selector_mx" class="site_mx_es">
                            <span class="site-locale">M??xico (Espa??ol)</span><span class="site-trans">Mexico
                                (Spanish)</span><span class="site-abbr" style="display:none">mex,mx,MX</span></a>
                    </li>
                    <li><a href="https://www2.deloitte.com/xe/en.html?icid=site_selector_xe" class="site_xe_en"> <span
                                class="site-locale">Middle East (English)</span><span class="site-trans">Middle East
                                (English)</span><span class="site-abbr" style="display:none">XE, xe, ME,
                                me</span></a></li>
                    <li><a href="http://www2.deloitte.com/ro/ro.html?icid=site_selector_md" class="site_md_ro">
                            <span class="site-locale">Moldova (Rom??n??)</span><span class="site-trans">Moldova
                                (Romanian)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/me/en.html?icid=site_selector_me" class="site_me_en"> <span
                                class="site-locale">Montenegro (English)</span><span class="site-trans">Montenegro
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/ma/fr.html?icid=site_selector_ma" class="site_ma_fr"> <span
                                class="site-locale">Morocco (Fran??ais)</span><span class="site-trans">Morocco
                                (French)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/mm/en.html?icid=site_selector_mm" class="site_mm_en"> <span
                                class="site-locale">Myanmar (English)</span><span class="site-trans">Myanmar
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/na/en.html?icid=site_selector_na" class="site_na_en"> <span
                                class="site-locale">Namibia (English)</span><span class="site-trans">Namibia
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/nl/nl.html?icid=site_selector_nl" class="site_nl_nl"> <span
                                class="site-locale">Nederland (Nederlands)</span><span
                                class="site-trans">Netherlands (Dutch)</span><span class="site-abbr"
                                style="display:none">nl</span></a></li>
                    <li><a href="https://www2.deloitte.com/an/en.html?icid=site_selector_an" class="site_an_en"> <span
                                class="site-locale">Dutch Caribbean (English)</span><span
                                class="site-trans">Netherlands Antilles (English)</span><span class="site-abbr"
                                style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/nz/en.html?icid=site_selector_nz" class="site_nz_en"> <span
                                class="site-locale">New Zealand (English)</span><span class="site-trans">New Zealand
                                (English)</span><span class="site-abbr" style="display:none">NZ,nz</span></a></li>
                    <li><a href="https://www2.deloitte.com/ni/es.html?icid=site_selector_ni" class="site_ni_es"> <span
                                class="site-locale">Nicaragua (Espa??ol)</span><span class="site-trans">Nicaragua
                                (Spanish)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/ng/en.html?icid=site_selector_ng" class="site_ng_en"> <span
                                class="site-locale">Nigeria (English)</span><span class="site-trans">Nigeria
                                (English)</span><span class="site-abbr" style="display:none">NGR, NIG</span></a>
                    </li>
                    <li><a href="https://www2.deloitte.com/mk/en.html?icid=site_selector_mk" class="site_mk_en"> <span
                                class="site-locale">North Macedonia (English)</span><span class="site-trans">North
                                Macedonia (English)</span><span class="site-abbr" style="display:none"></span></a>
                    </li>
                    <li><a href="https://www2.deloitte.com/no/no.html?icid=site_selector_no" class="site_no_no"> <span
                                class="site-locale">Norge (Norsk)</span><span class="site-trans">Norway
                                (Norwegian)</span><span class="site-abbr"
                                style="display:none">no,norge,norway</span></a></li>
                    <li><a href="https://www2.deloitte.com/om/en.html?icid=site_selector_om" class="site_om_en"> <span
                                class="site-locale">Oman (English)</span><span class="site-trans">Oman
                                (English)</span><span class="site-abbr" style="display:none">OM, om</span></a></li>
                    <li><a href="https://www2.deloitte.com/gz/en.html?icid=site_selector_gz" class="site_gz_en"> <span
                                class="site-locale">Palestinian Ruled Territories (English)</span><span
                                class="site-trans">Palestinian Ruled Territories (English)</span><span
                                class="site-abbr" style="display:none">GZ, gz</span></a></li>
                    <li><a href="https://www2.deloitte.com/pa/es.html?icid=site_selector_pa" class="site_pa_es"> <span
                                class="site-locale">Panam?? (Espa??ol)</span><span class="site-trans">Panama
                                (Spanish)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/pg/en.html?icid=site_selector_pg" class="site_pg_en"> <span
                                class="site-locale">Papua New Guinea (English)</span><span class="site-trans">Papua
                                New Guinea (English)</span><span class="site-abbr" style="display:none"></span></a>
                    </li>
                    <li><a href="https://www2.deloitte.com/py/es.html?icid=site_selector_py" class="site_py_es"> <span
                                class="site-locale">Paraguay (Espa??ol)</span><span class="site-trans">Paraguay
                                (Spanish)</span><span class="site-abbr" style="display:none">py</span></a></li>
                    <li><a href="https://www2.deloitte.com/pe/es.html?icid=site_selector_pe" class="site_pe_es"> <span
                                class="site-locale">Per?? (Espa??ol)</span><span class="site-trans">Peru
                                (Spanish)</span><span class="site-abbr" style="display:none">pe</span></a></li>
                    <li><a href="https://www2.deloitte.com/ph/en.html?icid=site_selector_ph" class="site_ph_en"> <span
                                class="site-locale">Philippines (English)</span><span class="site-trans">Philippines
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/pl/pl.html?icid=site_selector_pl" class="site_pl_pl"> <span
                                class="site-locale">Polska (Polski)</span><span class="site-trans">Poland
                                (Polish)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/pt/pt.html?icid=site_selector_pt" class="site_pt_pt"> <span
                                class="site-locale">Portugal (Portugu??s)</span><span class="site-trans">Portugal
                                (Portuguese)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/pt/en.html?icid=site_selector_pt" class="site_pt_en"> <span
                                class="site-locale">Portugal (English)</span><span class="site-trans">Portugal
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/qa/en.html?icid=site_selector_qa" class="site_qa_en"> <span
                                class="site-locale">Qatar (English)</span><span class="site-trans">Qatar
                                (English)</span><span class="site-abbr" style="display:none">QA, qa</span></a></li>
                    <li><a href="https://www2.deloitte.com/ro/ro.html?icid=site_selector_ro" class="site_ro_ro"> <span
                                class="site-locale">Romania (Rom??n??)</span><span class="site-trans">Romania
                                (Romanian)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/ro/en.html?icid=site_selector_ro" class="site_ro_en"> <span
                                class="site-locale">Romania (English)</span><span class="site-trans">Romania
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/ru/ru.html?icid=site_selector_ru" class="site_ru_ru"> <span
                                class="site-locale">???????????? (??????????????)</span><span class="site-trans">Russia
                                (Russian)</span><span class="site-abbr"
                                style="display:none">ru,russia,russ,????,????????????,????????</span></a></li>
                    <li><a href="https://www2.deloitte.com/ru/en.html?icid=site_selector_ru" class="site_ru_en"> <span
                                class="site-locale">Russia (English)</span><span class="site-trans">Russia
                                (English)</span><span class="site-abbr"
                                style="display:none">ru,russ,russia</span></a></li>
                    <li><a href="https://www2.deloitte.com/sa/en.html?icid=site_selector_sa" class="site_sa_en"> <span
                                class="site-locale">Saudi Arabia (English)</span><span class="site-trans">Saudi
                                Arabia (English)</span><span class="site-abbr" style="display:none">SA,
                                sa</span></a></li>
                    <li><a href="https://www2.deloitte.com/sn/fr.html?icid=site_selector_sn" class="site_sn_fr"> <span
                                class="site-locale">Senegal (Fran??ais)</span><span class="site-trans">Senegal
                                (French)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/rs/sr.html?icid=site_selector_rs" class="site_rs_sr"> <span
                                class="site-locale">???????????? (????????????)</span><span class="site-trans">Serbia
                                (Serbian)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/rs/en.html?icid=site_selector_rs" class="site_rs_en"> <span
                                class="site-locale">Serbia (English)</span><span class="site-trans">Serbia
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/sg/en.html?icid=site_selector_sg" class="site_sg_en"> <span
                                class="site-locale">Singapore (English)</span><span class="site-trans">Singapore
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/sk/sk.html?icid=site_selector_sk" class="site_sk_sk"> <span
                                class="site-locale">Slovensk?? republika (Sloven??ina)</span><span
                                class="site-trans">Slovak Republic (Slovak)</span><span class="site-abbr"
                                style="display:none">SK</span></a></li>
                    <li><a href="https://www2.deloitte.com/sk/en.html?icid=site_selector_sk" class="site_sk_en"> <span
                                class="site-locale">Slovak Republic (English)</span><span class="site-trans">Slovak
                                Republic (English)</span><span class="site-abbr" style="display:none"></span></a>
                    </li>
                    <li><a href="https://www2.deloitte.com/si/sl.html?icid=site_selector_si" class="site_si_sl"> <span
                                class="site-locale">Slovenija (Sloven????ina)</span><span class="site-trans">Slovenia
                                (Slovenian)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/si/en.html?icid=site_selector_si" class="site_si_en"> <span
                                class="site-locale">Slovenia (English)</span><span class="site-trans">Slovenia
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/za/en.html?icid=site_selector_za" class="site_za_en"> <span
                                class="site-locale">South Africa (English)</span><span class="site-trans">South
                                Africa (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/es/es.html?icid=site_selector_es" class="site_es_es"> <span
                                class="site-locale">Espa??a (Espa??ol)</span><span class="site-trans">Spain
                                (Spanish)</span><span class="site-abbr"
                                style="display:none">ES,es,Spain,espana</span></a></li>
                    <li><a href="https://www2.deloitte.com/lk/en.html?icid=site_selector_lk" class="site_lk_en"> <span
                                class="site-locale">Sri Lanka (English)</span><span class="site-trans">Sri Lanka
                                (English)</span><span class="site-abbr" style="display:none">sri
                                lanka,srilanka,lk</span></a></li>
                    <li><a href="https://www2.deloitte.com/se/sv.html?icid=site_selector_se" class="site_se_sv"> <span
                                class="site-locale">Sverige (Svenska)</span><span class="site-trans">Sweden
                                (Swedish)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/ch/en.html?icid=site_selector_ch" class="site_ch_en"> <span
                                class="site-locale">Switzerland (English)</span><span class="site-trans">Switzerland
                                (English)</span><span class="site-abbr" style="display:none">ch</span></a></li>
                    <li><a href="https://www2.deloitte.com/ch/de.html?icid=site_selector_ch" class="site_ch_de"> <span
                                class="site-locale">Schweiz (Deutsch)</span><span class="site-trans">Switzerland
                                (German)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/ch/fr.html?icid=site_selector_ch" class="site_ch_fr"> <span
                                class="site-locale">Suisse (Fran??ais)</span><span class="site-trans">Switzerland
                                (French)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/tw/tc.html?icid=site_selector_tw" class="site_tw_tc"> <span class="site-locale">??????
                                (????????????)</span><span class="site-trans">Taiwan (Chinese)</span><span class="site-abbr"
                                style="display:none">tw,taiwan</span></a></li>
                    <li><a href="https://www2.deloitte.com/tw/en.html?icid=site_selector_tw" class="site_tw_en"> <span
                                class="site-locale">Taiwan (English)</span><span class="site-trans">Taiwan
                                (English)</span><span class="site-abbr" style="display:none">tw</span></a></li>
                    <li><a href="https://www2.deloitte.com/content/www/kz/ru/pages/tajikistan/topics/tajikistan.html?icid=site_selector_tj"
                            class="site_tj_ru"> <span class="site-locale">?????????????????????? (??????????????)</span><span
                                class="site-trans">Tajikistan (Russian)</span><span class="site-abbr"
                                style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/content/www/kz/en/pages/tajikistan/topics/tajikistan.html?icid=site_selector_tj"
                            class="site_tj_en"> <span class="site-locale">Tajikistan (English)</span><span
                                class="site-trans">Tajikistan (English)</span><span class="site-abbr"
                                style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/tz/en.html?icid=site_selector_tz" class="site_tz_en"> <span
                                class="site-locale">Tanzania (English)</span><span class="site-trans">Tanzania
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/th/en.html?icid=site_selector_th" class="site_th_en"> <span
                                class="site-locale">Thailand (English)</span><span class="site-trans">Thailand
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/tl/en.html?icid=site_selector_tl" class="site_tl_en"> <span
                                class="site-locale">Timor-Leste (English)</span><span class="site-trans">Timor-Leste
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/tg/fr.html?icid=site_selector_tg" class="site_tg_fr"> <span
                                class="site-locale">Togo (French)</span><span class="site-trans">Togo
                                (French)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/tt/en.html?icid=site_selector_tt" class="site_tt_en"> <span
                                class="site-locale">Trinidad and Tobago (English)</span><span
                                class="site-trans">Trinidad and Tobago (English)</span><span class="site-abbr"
                                style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/tn/fr.html?icid=site_selector_tn" class="site_tn_fr"> <span
                                class="site-locale">Tunisia (Fran??ais)</span><span class="site-trans">Tunisia
                                (French)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/tr/tr.html?icid=site_selector_tr" class="site_tr_tr"> <span
                                class="site-locale">T??rkiye (T??rk)</span><span class="site-trans">Turkey
                                (Turkish)</span><span class="site-abbr" style="display:none">TR,tr</span></a></li>
                    <li><a href="https://www2.deloitte.com/tr/en.html?icid=site_selector_tr" class="site_tr_en"> <span
                                class="site-locale">Turkey (English)</span><span class="site-trans">Turkey
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/ug/en.html?icid=site_selector_ug" class="site_ug_en"> <span
                                class="site-locale">Uganda (English)</span><span class="site-trans">Uganda
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="http://www2.deloitte.com/ua/uk.html?icid=site_selector_ua" class="site_ua_uk">
                            <span class="site-locale">?????????????? (??????????????????????)</span><span class="site-trans">Ukraine
                                (Ukrainian)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="http://www2.deloitte.com/ua/uk.html?icid=site_selector_ua" class="site_ua_en">
                            <span class="site-locale">Ukraine (English)</span><span class="site-trans">Ukraine
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/ae/en.html?icid=site_selector_ae" class="site_ae_en"> <span
                                class="site-locale">United Arab Emirates (English)</span><span
                                class="site-trans">United Arab Emirates (English)</span><span class="site-abbr"
                                style="display:none">AE, ae</span></a></li>
                    <li><a href="http://www2.deloitte.com/uk/en.html?icid=site_selector_uk" class="site_uk_en">
                            <span class="site-locale">United Kingdom (English)</span><span class="site-trans">United
                                Kingdom (English)</span><span class="site-abbr" style="display:none"></span></a>
                    </li>
                    <li><a href="https://www2.deloitte.com/us/en.html?icid=site_selector_us" class="site_us_en"> <span
                                class="site-locale">United States (English)</span><span class="site-trans">United
                                States (English)</span><span class="site-abbr"
                                style="display:none">US,EE.UU,USA,U.S.,EEUU,america</span></a></li>
                    <li><a href="https://www2.deloitte.com/vi/en.html?icid=site_selector_vi" class="site_vi_en"> <span
                                class="site-locale">United States Virgin Islands (English)</span><span
                                class="site-trans">United States Virgin Islands (English)</span><span
                                class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/uy/es.html?icid=site_selector_uy" class="site_uy_es"> <span
                                class="site-locale">Uruguay (Espa??ol)</span><span class="site-trans">Uruguay
                                (Spanish)</span><span class="site-abbr" style="display:none">uy</span></a></li>
                    <li><a href="https://www2.deloitte.com/content/www/kz/ru/pages/uzbekistan/topics/uzbekistan.html?icid=site_selector_uz"
                            class="site_uz_ru"> <span class="site-locale">???????????????????? (??????????????)</span><span
                                class="site-trans">Uzbekistan (Russian)</span><span class="site-abbr"
                                style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/content/www/kz/en/pages/uzbekistan/topics/uzbekistan.html?icid=site_selector_uz"
                            class="site_uz_en"> <span class="site-locale">Uzbekistan (English)</span><span
                                class="site-trans">Uzbekistan (English)</span><span class="site-abbr"
                                style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/ve/es.html?icid=site_selector_ve" class="site_ve_es"> <span
                                class="site-locale">Venezuela (Espa??ol)</span><span class="site-trans">Venezuela
                                (Spanish)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/vn/en.html?icid=site_selector_vn" class="site_vn_en"> <span
                                class="site-locale">Vietnam (English)</span><span class="site-trans">Vietnam
                                (English)</span><span class="site-abbr" style="display:none"></span></a></li>
                    <li><a href="https://www2.deloitte.com/ye/en.html?icid=site_selector_ye" class="site_ye_en"> <span
                                class="site-locale">Yemen (English)</span><span class="site-trans">Yemen
                                (English)</span><span class="site-abbr" style="display:none">YE, ye</span></a></li>
                </ul>
            </div>


            <div class="site-selector__container__site-info"><span>Available in 141 locations and 33
                    languages</span></div>
        </div>
    </div>

    <div class="modal-backdrop fade in visibility-hidden"></div>




    <!-- Footer component ends-->
</div>








<script type="text/javascript"
    src="https://www2.deloitte.com/etc/designs/dcom/dcom-main-footer.min.d91d2bd1be172ca20c91bb98eadc05a4.js"></script>








<script type="text/javascript"
    src="https://www2.deloitte.com/etc/designs/dcom/clientlibs-contentpage.min.d573a59afa3996c3907984780de4d7cb.js"></script>











<script type="text/javascript"
    src="https://www2.deloitte.com/etc/designs/dcom/dcom-personalization-libs.min.ede192f730c501cd2ad01f414fb4ca10.js"></script>









<link rel="stylesheet"
    href="https://www2.deloitte.com/etc/designs/dcom/bookmark-component/bookmarkModal.min.91b2ba166a5ff23cd73de4a45643ac11.css"
    type="text/css">








<link rel="stylesheet"
    href="https://www2.deloitte.com/etc/designs/dcom/bookmark-component/bookmarkAlerts.min.32329887e3e73d3e18d686562115914b.css"
    type="text/css">







<div class="servicecomponents cloudservices">
    <div class="cloudservice generictracker">
        <script type="text/javascript">
        </script>
    </div>
</div>

<!-- Marketo Munchkin Code -->

<!-- End Marketo Munchkin Code -->


<!-- Twitter Universal Website Tracking Code OLD-->
<!--<script>
!function(e,n,u,a){e.twq||(a=e.twq=function(){a.exe?a.exe.apply(a,arguments):
a.queue.push(arguments);},a.version='1',a.queue=[],t=n.createElement(u),
t.async=!0,t.src='//static.ads-twitter.com/uwt.js',s=n.getElementsByTagName(u)[0],
s.parentNode.insertBefore(t,s))}(window,document,'script');
// Insert Twitter Pixel ID and Standard Event data below
twq('init','nv3v3');
twq('track','PageView');
</script>-->
<!-- End Twitter Universal Website Tracking Code -->

<!-- Twitter universal website tag code -->

<!-- End Twitter Universal Website Tracking Code -->



<!-- LinkedIn Conversion Tracking Code -->


<noscript>
    <img height="1" width="1" style="display:none;" alt=""
        src="https://dc.ads.linkedin.com/collect/?pid=22028&fmt=gif" />
</noscript>
<!-- End LinkedIn Conversion Tracking Code -->



<!-- LinkedIn Conversion Tracking Code -->


<noscript>
    <img height="1" width="1" style="display:none;" alt=""
        src="https://dc.ads.linkedin.com/collect/?pid=353714&fmt=gif" />
</noscript>
<!-- End LinkedIn Conversion Tracking Code -->



<!-- Google Tag Manager for Careers -->


<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-5NRLPSW" height='0' width='0'
        style='display:none;visibility:hidden'></iframe></noscript>
<!-- End Google Tag Manager for careers -->


<!-- Google Analytics Tracking Code -->
<!-- commented out 05/11/18
<script type="text/plain" class="optanon-category-4">
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-21750900-1', 'auto', {'allowLinker': true});
ga('require', 'linker');
ga('linker:autoLink', ['deloitte.com', 'deloitte.co.uk'] );
ga('send', 'pageview');
</script> -->
<!-- End Google Analytics Tracking Code -->


<!-- Google Tag Manager for whole website - added 05/11/18 -->

<!-- End Google Tag Manager -->
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NXPZ5SQ" height="0" width="0"
        style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->



<!-- Global site tag (gtag.js) - Google Ads: 745764330 for Thrive pages -->
<!--16 Apr 2021 Begin commenting out GTM script to prevent a.slice function errors
<script type="text/plain" class="optanon-category-4" async src="https://www.googletagmanager.com/gtag/js?id=AW-745764330"></script> 
<script type="text/plain" class="optanon-category-4">
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);} 
gtag('js', new Date()); 
gtag('config', 'AW-745764330'); 
</script> End GTM script commenting out 16 Apr 2021 
-->




<script>
</script>



<script>
    $(document.body).on("pageReady", function (event, y, z) {

        console.log(event.type);

    });
    //Finally, register a Page Load callback and call the execute method on JQuery Page Load event.
    $(function () {

        var executeDeferred = pageLoadFramework.executePageLoadEvents();

        //The execute method returns a deferred.  So, if something needs to wait for it, this is how you do it.
        executeDeferred.done(function () {


        });
    });

    /*$(function() {

        if(window.location.href.indexOf('/careers/') > 0) {
                 $('.submit-rfp').remove();
            }
    });*/

</script>

<iframe title="Api Service" aria-hidden="true"
    src="https://cdns.eu1.gigya.com/gs/webSdk/Api.aspx?apiKey=3_HV0IcvFjhy6GgPyQ7w3qEmNrAPxgl1dpOyt9qQ2ScGN4BClLORqK1R3ArbWkBW4v&amp;version=latest&amp;build=12833#origin=https://www2.deloitte.com/uk/en/pages/public-sector/articles/enabling-population-health.html&amp;gig_loggerConfig=%7B%22logLevel%22%3A0%2C%22clientMuteLevel%22%3A0%2C%22logTheme%22%3A1%7D"
    style="position: absolute; height: 0px; width: 0px; display: none;"></iframe>
<script type="text/javascript" class="optanon-category-4">
    (function () {
        var didInit = false;
        function initMunchkin() {
            if (didInit === false) {
                didInit = true;
                Munchkin.init('676-RGI-700');
            }
        }
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = '//munchkin.marketo.net/munchkin.js';
        s.onreadystatechange = function () {
            if (this.readyState == 'complete' || this.readyState == 'loaded') {
                initMunchkin();
            }
        };
        s.onload = initMunchkin;
        document.getElementsByTagName('head')[0].appendChild(s);
    })();
</script>
<script type="text/javascript" class="optanon-category-4">
    !function (e, t, n, s, u, a) {
        e.twq || (s = e.twq = function () {
            s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments);
        }, s.version = '1.1', s.queue = [], u = t.createElement(n), u.async = !0, u.src = '//static.ads-twitter.com/uwt.js',
            a = t.getElementsByTagName(n)[0], a.parentNode.insertBefore(u, a))
    }(window, document, 'script');
    // Insert Twitter Pixel ID and Standard Event data below
    twq('init', 'nv3v3');
    twq('track', 'PageView');
</script>
<script type="text/javascript" class="optanon-category-4">
    _linkedin_partner_id = "22028";
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(_linkedin_partner_id);
</script>
<script type="text/javascript" class="optanon-category-4">
    (function () {
        var s = document.getElementsByTagName("script")[0];
        var b = document.createElement("script");
        b.type = "text/plain"; b.async = true;
        b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
        s.parentNode.insertBefore(b, s);
    })();
</script>
<script type="text/javascript" class="optanon-category-4">
    _linkedin_data_partner_id = "353714";
</script>
<script type="text/javascript" class="optanon-category-4">
    (function () {
        var s = document.getElementsByTagName("script")[0];
        var b = document.createElement("script");
        b.type = "text/plain"; b.async = true;
        b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
        s.parentNode.insertBefore(b, s);
    })();
</script>
<script type="text/javascript" class="optanon-category-4">
    if (typeof cartObj != 'undefined') { var deldataLayer = [{ 'jobId': cartObj.jobId, 'title': cartObj.title, 'category': cartObj.category, 'location': cartObj.location, 'postedDate': cartObj.postedDate }]; }
</script>
<script type="text/javascript" class="optanon-category-4">
    (function (w, d, s, l, i) { w[l] = w[l] || []; w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' }); var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src = '//www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f); })(window, document, 'script', 'deldataLayer', 'GTM-5NRLPSW');
</script>
<script type="text/javascript" class="optanon-category-4">
    (function (w, d, s, l, i) { w[l] = w[l] || []; w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' }); var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f); })(window, document, 'script', 'deldataLayer', 'GTM-NXPZ5SQ');
</script>
<div id="onetrust-consent-sdk">
    <div class="onetrust-pc-dark-filter ot-hide ot-fade-in"></div>
    <div id="onetrust-pc-sdk" class="ot-sdk-container otPcTab ot-hide ot-fade-in" role="dialog" aria-modal="true"
        aria-labelledby="pc-title" lang="en">
        <!-- pc header -->
        <div class="pc-header">
            <!-- Header logo -->
            <div class="pc-logo-container">
                <div class="pc-logo" role="img" aria-label="Company Logo" style="background-image: url(&quot;https://cdn.cookielaw.org/logos/943e56a6-c554-47c1-8ad7-a96fce0e14b8/a9f4f939-49ab-4ac3-bbd2-308fe9ab781c/c694c743-6c34-43e6-b559-5373b28badb7/2.2_Deloitte_Logo.png&quot;);
                background-position: left"></div>
            </div>
            <div class="pc-title-container">
                <h2 id="pc-title">Privacy preference centre</h2>
                <div class="pc-close-btn-container"><button id="close-pc-btn-handler"
                        class="pc-close-button ot-close-icon" aria-label="Close"></button></div>
            </div>
        </div><!-- content -->
        <div id="ot-content">
            <!-- Groups / Sub groups with cookies -->
            <div class="ot-main-content pc-content">
                <div class="ot-sdk-container groups-container">
                    <div class="ot-sdk-row" role="tablist" aria-label="Cookie Categories">
                        <!-- About Privacy container -->
                        <div class="ot-sdk-column">
                            <div class="ot-sdk-four ot-sdk-columns group active-group category-menu-switch-handler"
                                role="tab" tabindex="0" aria-selected="true" aria-controls="pc-tab-description">
                                <h3 id="privacy-text">Your privacy</h3>
                            </div>
                        </div>
                        <div class="ot-sdk-eight ot-sdk-columns description-container" id="pc-tab-description"
                            tabindex="0" role="tabpanel" aria-labelledby="pc-privacy-header">
                            <h3 id="pc-privacy-header">Your privacy</h3>
                            <p id="pc-policy-text" class="group-description">When you visit any web site, it may
                                store or retrieve information on your browser, mostly in the form of cookies. This
                                information might be about you, your preferences or your device and is mostly used
                                to make the site work as you expect it to. The information does not usually directly
                                identify you, but it can give you a more personalised web experience.

                                Because we respect your right to privacy, you can choose not to allow some types of
                                cookies. Click on the different category headings to find out more and change our
                                default settings. However, blocking some types of cookies may impact your experience
                                of the site and the services we are able to offer.
                                <br><a href="https://www2.deloitte.com/uk/en/legal/cookies.html" class="privacy-notice-link" rel="noopener"
                                    target="_blank"
                                    aria-label="More information about your privacy., opens in a new tab">Cookie
                                    policy</a>
                            </p>
                        </div>
                        <ul class="category-group">
                            <li class="category-item ot-always-active-group" data-optanongroupid="1">
                                <div class="ot-sdk-column">
                                    <div class="ot-sdk-four ot-sdk-columns group category-menu-switch-handler"
                                        role="tab" tabindex="-1" aria-selected="false" aria-controls="ot-desc-id-1">
                                        <h3 id="ot-header-id-1">Strictly necessary cookies</h3>
                                    </div>
                                </div>
                                <div class="ot-sdk-eight ot-sdk-columns description-container ot-hide ot-always-active-group"
                                    role="tabpanel" tabindex="0" id="ot-desc-id-1">
                                    <div class="group-toggle">
                                        <h3 class="category-header">Strictly necessary cookies</h3>
                                        <div class="ot-toggle-group">
                                            <div class="ot-always-active">Always active</div>
                                            <div class="ot-toggle ot-hide-tgl">
                                                <div class="checkbox">
                                                    <!-- DYNAMICALLY GENERATE Input ID  --> <input
                                                        id="ot-group-id-1" class="category-switch-handler"
                                                        type="checkbox" role="switch" aria-checked="true"
                                                        aria-controls="ot-desc-id-1"
                                                        aria-labelledby="ot-header-id-1" aria-hidden="true"
                                                        name="ot-group-id-1" data-optanongroupid="1" checked="">
                                                    <label for="ot-group-id-1"><span class="label-text">Strictly
                                                            necessary cookies</span></label>
                                                    <!-- DYNAMICALLY GENERATE Input ID  -->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p class="group-description ot-category-desc">These cookies are necessary for
                                        the website to function and cannot be switched off in our systems. They are
                                        usually only set in response to actions made by you which amount to a
                                        request for services, such as setting your privacy preferences or filling in
                                        forms.</p><!-- sub groups -->
                                    <div class="category-host-list-container"><button
                                            class="ot-link-btn category-host-list-btn category-host-list-handler"
                                            aria-label="Cookies details button opens Cookies Details window"
                                            data-parent-id="1">Cookies details&lrm;</button></div>
                                </div>
                            </li>
                            <li class="category-item" data-optanongroupid="2">
                                <div class="ot-sdk-column">
                                    <div class="ot-sdk-four ot-sdk-columns group category-menu-switch-handler"
                                        role="tab" tabindex="-1" aria-selected="false" aria-controls="ot-desc-id-2">
                                        <h3 id="ot-header-id-2">Analytics and performance cookies</h3>
                                    </div>
                                </div>
                                <div class="ot-sdk-eight ot-sdk-columns description-container ot-hide"
                                    role="tabpanel" tabindex="0" id="ot-desc-id-2">
                                    <div class="group-toggle">
                                        <h3 class="category-header">Analytics and performance cookies</h3>
                                        <div class="ot-toggle-group">
                                            <div class="ot-toggle">
                                                <div class="checkbox">
                                                    <!-- DYNAMICALLY GENERATE Input ID  --> <input
                                                        id="ot-group-id-2" class="category-switch-handler"
                                                        type="checkbox" role="switch" aria-checked="true"
                                                        aria-controls="ot-desc-id-2"
                                                        aria-labelledby="ot-header-id-2" name="ot-group-id-2"
                                                        data-optanongroupid="2" checked=""> <label
                                                        for="ot-group-id-2"><span class="label-text">Analytics and
                                                            performance cookies</span></label>
                                                    <!-- DYNAMICALLY GENERATE Input ID  -->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p class="group-description ot-category-desc">These cookies allow us to track
                                        analytics by counting visits and traffic sources so we can measure and
                                        improve the performance of our website. They may be set by us or by third
                                        party providers to help us to know which pages are the most and least
                                        popular and see how visitors move around the website.</p><!-- sub groups -->
                                    <div class="category-host-list-container"><button
                                            class="ot-link-btn category-host-list-btn category-host-list-handler"
                                            aria-label="Cookies details button opens Cookies Details window"
                                            data-parent-id="2">Cookies details&lrm;</button></div>
                                </div>
                            </li>
                            <li class="category-item" data-optanongroupid="3">
                                <div class="ot-sdk-column">
                                    <div class="ot-sdk-four ot-sdk-columns group category-menu-switch-handler"
                                        role="tab" tabindex="-1" aria-selected="false" aria-controls="ot-desc-id-3">
                                        <h3 id="ot-header-id-3">Functional cookies</h3>
                                    </div>
                                </div>
                                <div class="ot-sdk-eight ot-sdk-columns description-container ot-hide"
                                    role="tabpanel" tabindex="0" id="ot-desc-id-3">
                                    <div class="group-toggle">
                                        <h3 class="category-header">Functional cookies</h3>
                                        <div class="ot-toggle-group">
                                            <div class="ot-toggle">
                                                <div class="checkbox">
                                                    <!-- DYNAMICALLY GENERATE Input ID  --> <input
                                                        id="ot-group-id-3" class="category-switch-handler"
                                                        type="checkbox" role="switch" aria-checked="true"
                                                        aria-controls="ot-desc-id-3"
                                                        aria-labelledby="ot-header-id-3" name="ot-group-id-3"
                                                        data-optanongroupid="3" checked=""> <label
                                                        for="ot-group-id-3"><span class="label-text">Functional
                                                            cookies</span></label>
                                                    <!-- DYNAMICALLY GENERATE Input ID  -->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p class="group-description ot-category-desc">These cookies enable the website
                                        to provide enhanced functionality and personalization based on your
                                        interaction with the website. They may be set by us or by third party
                                        providers whose services we have added to our pages.</p><!-- sub groups -->
                                    <div class="category-host-list-container"><button
                                            class="ot-link-btn category-host-list-btn category-host-list-handler"
                                            aria-label="Cookies details button opens Cookies Details window"
                                            data-parent-id="3">Cookies details&lrm;</button></div>
                                </div>
                            </li>
                            <li class="category-item" data-optanongroupid="4">
                                <div class="ot-sdk-column">
                                    <div class="ot-sdk-four ot-sdk-columns group category-menu-switch-handler"
                                        role="tab" tabindex="-1" aria-selected="false" aria-controls="ot-desc-id-4">
                                        <h3 id="ot-header-id-4">Advertising and targeting cookies</h3>
                                    </div>
                                </div>
                                <div class="ot-sdk-eight ot-sdk-columns description-container ot-hide"
                                    role="tabpanel" tabindex="0" id="ot-desc-id-4">
                                    <div class="group-toggle">
                                        <h3 class="category-header">Advertising and targeting cookies</h3>
                                        <div class="ot-toggle-group">
                                            <div class="ot-toggle">
                                                <div class="checkbox">
                                                    <!-- DYNAMICALLY GENERATE Input ID  --> <input
                                                        id="ot-group-id-4" class="category-switch-handler"
                                                        type="checkbox" role="switch" aria-checked="true"
                                                        aria-controls="ot-desc-id-4"
                                                        aria-labelledby="ot-header-id-4" name="ot-group-id-4"
                                                        data-optanongroupid="4" checked=""> <label
                                                        for="ot-group-id-4"><span class="label-text">Advertising and
                                                            targeting cookies</span></label>
                                                    <!-- DYNAMICALLY GENERATE Input ID  -->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p class="group-description ot-category-desc">These cookies may be set through
                                        our site by our advertising partners. They may be used by those partners to
                                        build a profile of your interests and show you relevant adverts on other
                                        sites.

                                        They are based on uniquely identifying your browser and internet device. If
                                        you do not allow these cookies, you will experience less targeted
                                        advertising.</p><!-- sub groups -->
                                    <div class="category-host-list-container"><button
                                            class="ot-link-btn category-host-list-btn category-host-list-handler"
                                            aria-label="Cookies details button opens Cookies Details window"
                                            data-parent-id="4">Cookies details&lrm;</button></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div><!-- Vendors / Hosts -->
            <section id="vendors-list" class="ot-hide">
                <div class="vendor-content">
                    <nav id="vendors-list-header">
                        <div class="navigation-container"><button class="ot-link-btn back-btn-handler">
                                <div id="ot-back-arrow"><svg xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="15px"
                                        height="15px" viewBox="0 0 444.531 444.531" xml:space="preserve">
                                        <title>Back Button</title>
                                        <g>
                                            <path fill="#2c3643" d="M213.13,222.409L351.88,83.653c7.05-7.043,10.567-15.657,10.567-25.841c0-10.183-3.518-18.793-10.567-25.835
                l-21.409-21.416C323.432,3.521,314.817,0,304.637,0s-18.791,3.521-25.841,10.561L92.649,196.425
                c-7.044,7.043-10.566,15.656-10.566,25.841s3.521,18.791,10.566,25.837l186.146,185.864c7.05,7.043,15.66,10.564,25.841,10.564
                s18.795-3.521,25.834-10.564l21.409-21.412c7.05-7.039,10.567-15.604,10.567-25.697c0-10.085-3.518-18.746-10.567-25.978
                L213.13,222.409z"></path>
                                        </g>
                                    </svg></div>
                                <h3 class="pc-back-button-text" id="vendors-list-title">Advertising Cookies</h3>
                            </button></div>
                        <div class="action-container">
                            <div id="search-container">
                                <p role="status" class="screen-reader-only"></p><input id="vendor-search-handler"
                                    aria-label="Vendor Search" type="text" placeholder="Search..."
                                    name="vendor-search-handler"> <svg width="30" height="30"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    x="0px" y="0px" viewBox="0 -30 110 110">
                                    <path fill="#2e3644" d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23
          s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
          c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
          s-17-7.626-17-17S14.61,6,23.984,6z"></path>
                                </svg>
                            </div>
                            <div id="filter-container"><button class="ot-link-btn" id="filter-btn-handler"
                                    aria-label="Filter" aria-haspopup="true"><svg role="presentation"
                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="15"
                                        height="15" viewBox="0 0 402.577 402.577"
                                        style="enable-background:new 0 0 402.577 402.577;" xml:space="preserve">
                                        <title>Filter Button</title>
                                        <g>
                                            <path fill="#2c3643" d="M400.858,11.427c-3.241-7.421-8.85-11.132-16.854-11.136H18.564c-7.993,0-13.61,3.715-16.846,11.136
                        c-3.234,7.801-1.903,14.467,3.999,19.985l140.757,140.753v138.755c0,4.955,1.809,9.232,5.424,12.854l73.085,73.083
                        c3.429,3.614,7.71,5.428,12.851,5.428c2.282,0,4.66-0.479,7.135-1.43c7.426-3.238,11.14-8.851,11.14-16.845V172.166L396.861,31.413
                        C402.765,25.895,404.093,19.231,400.858,11.427z"></path>
                                        </g>
                                    </svg></button></div>
                        </div>
                    </nav>
                    <section id="vendor-list-content">
                        <div class="ot-sdk-row">
                            <div class="ot-sdk-column">
                                <div id="select-all-container">
                                    <div class="ot-checkbox">
                                        <div class="leg-int-sel-all-hdr"><span class="consent-hdr">Consent</span>
                                            <span class="leg-int-hdr">Leg.Interest</span></div>
                                        <!-- select all vendor leg.int toggle container -->
                                        <div id="select-all-vendors-leg-input-container"><input
                                                id="select-all-vendor-leg-handler" class="ot-group-option-box"
                                                type="checkbox"> <label for="select-all-vendor-leg-handler"><span
                                                    class="label-text">Select All Vendors</span></label></div>
                                        <!-- select all vendor consent toggle container -->
                                        <div id="select-all-vendors-input-container"><input
                                                id="select-all-vendor-groups-handler" class="ot-group-option-box"
                                                type="checkbox"> <label for="select-all-vendor-groups-handler"><span
                                                    class="label-text">Select All Vendors</span></label></div>
                                        <!-- Hosts select all input container -->
                                        <div id="select-all-hosts-input-container"><input
                                                id="select-all-hosts-groups-handler" class="ot-group-option-box"
                                                type="checkbox"> <label for="select-all-hosts-groups-handler"><span
                                                    class="label-text">Select All Hosts</span></label></div>
                                        <div id="select-all-text-container">
                                            <p>Select All</p>
                                        </div>
                                    </div>
                                </div>
                                <ul id="hosts-list-container">
                                    <li class="host-item"><input type="checkbox" class="host-box"
                                            aria-expanded="false" role="button" ot-accordion="true" aria-label="">
                                        <section class="accordion-header">
                                            <div class="ot-toggle-group">
                                                <!-- Checkbox -->
                                                <div class="ot-checkbox ot-host-tgl"><input
                                                        id="REPLACE-WITH-DYANMIC-HOST-ID"
                                                        class="host-checkbox-handler ot-group-option-box"
                                                        type="checkbox"> <label
                                                        for="REPLACE-WITH-DYANMIC-HOST-ID"><span
                                                            class="label-text">REPLACE-WITH-DYANMIC-HOST-ID</span></label>
                                                </div><!-- Checkbox END -->
                                                <div class="host-info">
                                                    <h3 class="host-title"></h3>
                                                    <h4 class="host-description"></h4>
                                                </div>
                                            </div>
                                            <div class="host-notice">
                                                <div class="third-party-cookies-container"><button
                                                        class="ot-link-btn third-party-cookie-notice host-view-cookies"
                                                        role="presentation" aria-hidden="true" tabindex="-1">View
                                                        Third Party Cookies</button></div>
                                                <div class="ot-arrow-container"><svg class="ot-arrow" x="0px"
                                                        y="0px" width="10px" height="10px"
                                                        viewBox="0 0 451.846 451.847"
                                                        style="enable-background:new 0 0 451.846 451.847;"
                                                        xml:space="preserve">
                                                        <g>
                                                            <path fill="#7b7b7b" d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
                    L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
                    c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"></path>
                                                        </g>
                                                    </svg></div>
                                            </div>
                                        </section>
                                        <div class="accordion-text">
                                            <div class="host-options">
                                                <!-- HOST LIST VIEW UPDATE *** -->
                                                <ul class="host-option-group">
                                                    <li class="vendor-host">
                                                        <div class="cookie-name-container">
                                                            <div>Name</div>
                                                            <div>cookie name</div>
                                                        </div>
                                                    </li>
                                                </ul><!-- HOST LIST VIEW UPDATE END *** -->
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
                <div id="ot-triangle"></div>
                <section id="ot-filter-modal">
                    <div id="ot-options">
                        <div id="clear-filters-container"><button class="ot-link-btn" id="clear-filters-handler">
                                <p>Clear Filters</p>
                            </button></div>
                        <div class="ot-group-options">
                            <div class="ot-group-option">
                                <div class="ot-checkbox"><input id="storage-access-group"
                                        class="ot-group-option-box category-filter-handler" type="checkbox"> <label
                                        for="storage-access-group"><span>Information storage and
                                            access</span></label></div>
                            </div>
                        </div><button id="filter-apply-handler" class="ot-pill">Apply</button>
                    </div>
                </section>
            </section>
        </div><!-- footer -->
        <div class="ot-button-group-parent">
            <div class="ot-button-group"><button
                    class="save-preference-btn-handler onetrust-close-btn-handler">Confirm my choices</button>
                <button class="ot-pc-refuse-all-handler">Decline optional cookies</button> <button
                    id="accept-recommended-btn-handler">Accept optional cookies</button></div>
            <div class="ot-pc-footer-logo"><a class="powered-by-logo"
                    href="https://www.onetrust.com/products/cookie-consent/" target="_blank"
                    rel="noopener noreferrer"
                    style="background-image: url(&quot;https://cdn.cookielaw.org/logos/static/poweredBy_ot_logo.svg&quot;)"
                    aria-label="Powered by OneTrust Opens in a new Tab"></a></div>
        </div><iframe class="ot-text-resize" title="onetrust-text-resize"
            style="position:absolute;top:-50000px;width:100em;" aria-hidden="true"></iframe>
    </div>
</div>
<script>_satellite["_runScript1"](function (event, target, Promise) {
        var eveId = "";
        try { eveId = sessionStorage.getItem("eventIdFromLoginPage"); _satellite.setVar("eveIdFromLogin", eveId); } catch (e) { }
        window.targetPageParams = function () {
            return { "at_property": "110a4023-1532-0f84-5103-87dc7855ec2b", "entity.dbsEventId": _satellite.getVar("eveIdFromLogin") };
        }

    });</script>
<script>
    var dmdApiCall = "false";
    var dmdbDtmData = '';
    var basicInfoDmd = '';
    var detailedInfoDmd = '';
    var dmdDataLayer = {};
    var cookieCategories = _satellite.getVar("OptanonActiveGroups");
    var guid = _satellite.getVar("guid");

    var setVariables = function () {
        try {
            if (typeof dmdbDtmData.company_name !== 'undefined' && dmdbDtmData.company_name !== null) {
                _satellite.setVar("dmdCompanyName", dmdbDtmData.company_name);
            } else {
                _satellite.setVar("dmdCompanyName", "");
            }
            if (typeof dmdbDtmData.industry !== 'undefined' && dmdbDtmData.industry !== null) {
                _satellite.setVar("dmdIndustry", dmdbDtmData.industry);
            } else {
                _satellite.setVar("dmdIndustry", "");
            }
            if (typeof dmdbDtmData.sub_industry !== 'undefined' && dmdbDtmData.sub_industry !== null) {
                _satellite.setVar("dmdSubIndustry", dmdbDtmData.sub_industry);
            } else {
                _satellite.setVar("dmdSubIndustry", "");
            }
            if (typeof dmdbDtmData.revenue_range !== 'undefined' && dmdbDtmData.revenue_range !== null) {
                _satellite.setVar("dmdRevenueRange", dmdbDtmData.revenue_range);
            } else {
                _satellite.setVar("dmdRevenueRange", "");
            }
        } catch (e) {
            _satellite.setVar("dmdCompanyName", "");
            _satellite.setVar("dmdIndustry", "");
            _satellite.setVar("dmdSubIndustry", "");
            _satellite.setVar("dmdRevenueRange", "");
        }

        var dmdid, empRange, empCount, annualSales, b2b, b2c, forbes, fortune, naics, sic, stock, companyName, accountWatchCampaignCode, watchListSfid;
        try {
            dmdid = dmdbDtmData.demandbase_sid;
            if (dmdid === null || typeof dmdid === 'undefined') {
                dmdid = '';
            }
            empRange = dmdbDtmData.employee_range;
            if (empRange === null || typeof empRange === 'undefined') {
                empRange = '';
            }
            empCount = dmdbDtmData.employee_count;
            if (empCount === null || typeof empCount === 'undefined') {
                empCount = '';
            }
            annualSales = dmdbDtmData.annual_sales;
            if (annualSales === null || typeof annualSales === 'undefined') {
                annualSales = '';
            }
            b2b = dmdbDtmData.b2b;
            if (b2b === null || typeof b2b === 'undefined') {
                b2b = '';
            }
            b2c = dmdbDtmData.b2c;
            if (b2c === null || typeof b2c === 'undefined') {
                b2c = '';
            }
            forbes = dmdbDtmData.forbes_2000;
            if (forbes === null || typeof forbes === 'undefined') {
                forbes = '';
            }
            fortune = dmdbDtmData.fortune_1000;
            if (fortune === null || typeof fortune === 'undefined') {
                fortune = '';
            }
            naics = dmdbDtmData.primary_naics;
            if (naics === null || typeof naics === 'undefined') {
                naics = '';
            }
            sic = dmdbDtmData.primary_sic;
            if (sic === null || typeof sic === 'undefined') {
                sic = '';
            }
            stock = dmdbDtmData.stock_ticker;
            if (stock === null || typeof stock === 'undefined') {
                stock = '';
            }
            companyName = dmdbDtmData.company_name;
            if (companyName === null || typeof companyName === 'undefined') {
                companyName = '';
            }
        } catch (e) {
            dmdid = '';
            empRange = '';
            empCount = '';
            annualSales = '';
            b2b = '';
            b2c = '';
            forbes = '';
            fortune = '';
            naics = '';
            sic = '';
            stock = '';
            companyName = '';
        }
        try {
            accountWatchCampaignCode = dmdbDtmData.watch_list.campaign_code;
            if (accountWatchCampaignCode === null || typeof accountWatchCampaignCode === 'undefined') {
                accountWatchCampaignCode = '';
            }
            watchListSfid = dmdbDtmData.watch_list.sfaccountid;
            if (watchListSfid === null || typeof watchListSfid === 'undefined') {
                watchListSfid = '';
            }
        } catch (e) {
            accountWatchCampaignCode = '';
            watchListSfid = '';
        }
        var regCountry, regState, regCity, audience, ipAddressObtained;
        try {
            regCountry = dmdbDtmData.registry_country;
            if (regCountry === null || typeof regCountry === 'undefined') {
                regCountry = '';
            }
            regState = dmdbDtmData.registry_state;
            if (regState === null || typeof regState === 'undefined') {
                regState = '';
            }
            regCity = dmdbDtmData.registry_city;
            if (regCity === null || typeof regCity === 'undefined') {
                regCity = '';
            }
            audience = dmdbDtmData.audience;
            if (audience === null || typeof audience === 'undefined') {
                audience = '';
            }
            ipAddressObtained = dmdbDtmData.ip;
            if (ipAddressObtained === null || typeof ipAddressObtained === 'undefined') {
                ipAddressObtained = '';
            }
        } catch (e) {
            regCountry = '';
            regState = '';
            regCity = '';
            audience = '';
            ipAddressObtained = '';
        }
        var worldHqComanyName;
        try {
            worldHqComanyName = dmdbDtmData.worldhq.company_name;
            if (worldHqComanyName === null || typeof worldHqComanyName === 'undefined') {
                worldHqComanyName = '';
            }
        } catch (e) {
            worldHqComanyName = '';
        }
        var campaignCode;
        try {
            campaignCode = dmdbDtmData.watch_list.campaign_code;
            if (campaignCode === null || typeof campaignCode === 'undefined') {
                campaignCode = '';
            }
        } catch (e) {
            campaignCode = '';
        }
        _satellite.setVar("detailedInfoDmd", empRange + ',' + empCount + ',' + annualSales + ',' + b2b + ',' + b2c + ',' + forbes + ',' + fortune + ',' + naics + ',' + sic + ',' + stock + ',' + dmdid + ',' + companyName);
        _satellite.setVar("basicInfoDmd", regCountry + ',' + regState + ',' + regCity + ',' + audience + ',' + campaignCode + ',' + dmdid + ',' + companyName);
        _satellite.setVar("ipAddress", ipAddressObtained);
        _satellite.setVar("whqCompanyName", worldHqComanyName);
        _satellite.setVar("accountWatchCampaignCode", accountWatchCampaignCode + "|" + watchListSfid);
    }

    var apiCallFunction = function () {

        var cacheBustDate = new Date();
        var dmdburl = "//api.company-target.com/api/v2/ip.json?key=7e74509aaa635634b3993be300e2cd0db15f118c&x=" +
            cacheBustDate.getMilliseconds();
        dmdApiCall = "true";


        $.ajax({
            url: dmdburl,
            dataType: "jsonp",
            timeout: 5000,
            success: function (dmdbResult) {
                dmdbDtmData = dmdbResult;
                //Add a signal to indicate that Demandbase was refreshed with this page load
                dmdbDtmData.cache = "false";
                if (typeof dmdbDtmData.company_name !== 'undefined') {

                    //Now save to Session Storage
                    try {
                        if (guid != null && guid != "" && guid != undefined) {
                            if (cookieCategories.indexOf(",2,") > -1) {
                                window.localStorage.setItem("dmdbDtm", JSON.stringify(dmdbDtmData));
                            }
                        } else window.localStorage.setItem("dmdbDtm", JSON.stringify(dmdbDtmData));
                    } catch (err) { }



                }
                setVariables();
                //Update the Data Layer
                try {
                    //console.log("in call");
                    dmdDataLayer.dmd = dmdbDtmData;
                    //console.log("dmdDataLayer.dmd:",dmdDataLayer.dmd)
                    dataLayer.dmd = dmdbDtmData;

                } catch (err) {
                    if (err.name == 'ReferenceError') {
                        setTimeout(function () {
                            try {
                                dataLayer.dmd = dmdbDtmData;
                            } catch (error) {
                                if (error.name == 'ReferenceError') {
                                    setTimeout(function () {
                                        try {
                                            dataLayer.dmd = dmdbDtmData;
                                        } catch (errorr) {
                                            if (errorr.name == 'ReferenceError') {
                                                setTimeout(function () {
                                                    try {
                                                        dataLayer.dmd = dmdbDtmData;
                                                    } catch (errorrr) { }
                                                }, 500);
                                            }
                                        }
                                    }, 500);
                                }
                            }
                        }, 500);
                    }
                }



                //Now save to Session Storage
                try {
                    if (guid != null && guid != "" && guid != undefined) {
                        if (cookieCategories.indexOf(",2,") > -1) {
                            window.sessionStorage.setItem("dmdbDtm", JSON.stringify(dmdbDtmData));
                        }
                    } else window.sessionStorage.setItem("dmdbDtm", JSON.stringify(dmdbDtmData));


                } catch (err) { }

            }
        });

    }

    //First check to see if the data is saved in local storage
    try {
        if (window.localStorage.getItem("dmdbDtm")) {
            try {
                dmdbDtmData = JSON.parse(window.localStorage.getItem("dmdbDtm"));
                if (typeof dmdbDtmData.ip === 'undefined') {
                    dmdbDtmData = '';
                } else {
                    dmdbDtmData.cache = "true";

                    setVariables();
                    dmdDataLayer.dmd = dmdbDtmData;
                    dataLayer.dmd = dmdbDtmData;


                }
            } catch (err) {
                if (err.name == 'ReferenceError') {
                    setTimeout(function () {
                        try {
                            dataLayer.dmd = dmdbDtmData;

                        } catch (error) {
                            if (error.name == 'ReferenceError') {
                                setTimeout(function () {
                                    try {
                                        dataLayer.dmd = dmdbDtmData;
                                    } catch (e) {
                                        if (e.name == 'ReferenceError') {
                                            setTimeout(function () {
                                                try {
                                                    dataLayer.dmd = dmdbDtmData;
                                                } catch (errorr) {
                                                    if (errorr.name == 'ReferenceError') {
                                                        setTimeout(function () {
                                                            try {
                                                                dataLayer.dmd = dmdbDtmData;
                                                            } catch (e) {
                                                                if (e.name == 'ReferenceError') {
                                                                    setTimeout(function () {
                                                                        try {
                                                                            dataLayer.dmd = dmdbDtmData;
                                                                        } catch (er) { }
                                                                    }, 500);
                                                                }
                                                            }
                                                        }, 500);
                                                    }
                                                }
                                            }, 100);
                                        }
                                    }
                                }, 100)
                            };
                        }
                    }, 500);
                }
            }
        } else if (window.sessionStorage.getItem("dmdbDtm")) {
            //this condition for someone who visits the site from home- to avoid multiple API calls in a session
            try {
                dmdbDtmData = JSON.parse(window.sessionStorage.getItem("dmdbDtm"));
                if (typeof dmdbDtmData.ip === 'undefined') {
                    dmdbDtmData = '';
                } else {
                    dmdbDtmData.cache = "true";

                    setVariables();
                    //console.log("in ss");
                    dmdDataLayer.dmd = dmdbDtmData;

                    dataLayer.dmd = dmdbDtmData;


                }
            } catch (err) {
                if (err.name == 'ReferenceError') {
                    setTimeout(function () {
                        try {
                            dataLayer.dmd = dmdbDtmData;
                        } catch (error) {
                            if (error.name == 'ReferenceError') {
                                setTimeout(function () {
                                    try {
                                        dataLayer.dmd = dmdbDtmData;
                                    } catch (errorr) {
                                        if (errorr.name == 'ReferenceError') {
                                            setTimeout(function () {
                                                try {
                                                    dataLayer.dmd = dmdbDtmData;
                                                } catch (err) { }
                                            }, 500);
                                        }
                                    }
                                }, 500);
                            }
                        }
                    }, 500);
                }
            }
        }
    } catch (error) { }


    try {
        if (typeof dmdbDtmData === 'undefined' || dmdbDtmData === '' || (!window.sessionStorage.getItem("dmdbDtm"))) {
            if (window.jQuery) {
                apiCallFunction();
            } else {
                setTimeout(function () {
                    if (window.jQuery) {
                        apiCallFunction();
                    }
                }, 1000)
            }
        }
    } catch (err) {
        if (err.name == "SecurityError") {
            apiCallFunction();
        }
    }
</script>
<script>_satellite["_runScript2"](function (event, target, Promise) {
        var referrerSite = document.referrer;
        var consentCheck = document.cookie.match(new RegExp('(^| )' + 'OptanonAlertBoxClosed' + '=([^;]+)'));

        if (referrerSite != "" && consentCheck == null) {
            sessionStorage.setItem('deloitteRefDom', referrerSite);
        }





    });</script><iframe height="0" width="0" style="display: none; visibility: hidden;"
    src="//8118687.fls.doubleclick.net/activityi;src=8118687;type=gener0;cat=globa0;ord=3272442232874;gtm=2wg2g0;auiddc=513794992.1645120448;u1=%2Fuk%2Fen%2Fpages%2Fpublic-sector%2Farticles%2Fenabling-population-health.html;u2=https%3A%2F%2Fwww2.deloitte.com%2Fuk%2Fen%2Fpages%2Fpublic-sector%2Farticles%2Fenabling-population-health.html;~oref=https%3A%2F%2Fwww2.deloitte.com%2Fuk%2Fen%2Fpages%2Fpublic-sector%2Farticles%2Fenabling-population-health.html?"></iframe>
<script
    src="https://analytics.twitter.com/i/adsct?type=javascript&amp;version=2.0.4&amp;p_id=Twitter&amp;p_user_id=0&amp;txn_id=nv3v3&amp;events=%5B%5B%22pageview%22%2Cnull%5D%5D&amp;tw_sale_amount=0&amp;tw_order_quantity=0&amp;tw_iframe_status=0&amp;event_id=422ca9e1-e6df-4391-9d52-13b1dfff2985&amp;tw_document_href=https%3A%2F%2Fwww2.deloitte.com%2Fuk%2Fen%2Fpages%2Fpublic-sector%2Farticles%2Fenabling-population-health.html&amp;tpx_cb=twttr.conversion.loadPixels"
    type="text/javascript"></script>
<script type="text/javascript"
    id="">conversionTag = "https://ad.doubleclick.net/ddm/adj/N4378.197812NSO.CODESRV/B20384738.206973885;sz\x3d1x2;ord\x3d"; var randomNumber = Math.floor(1E12 * Math.random() + 1), scriptTag = document.createElement("script"); scriptTag.src = conversionTag + randomNumber + "?"; scriptTag.language = "JavaScript1.1"; var insertionNode = document.body.firstChild; insertionNode.parentNode.insertBefore(scriptTag, insertionNode);</script>

<script type="text/javascript"
    id="">!function (b, e, f, g, a, c, d) { b.fbq || (a = b.fbq = function () { a.callMethod ? a.callMethod.apply(a, arguments) : a.queue.push(arguments) }, b._fbq || (b._fbq = a), a.push = a, a.loaded = !0, a.version = "2.0", a.queue = [], c = e.createElement(f), c.async = !0, c.src = g, d = e.getElementsByTagName(f)[0], d.parentNode.insertBefore(c, d)) }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js"); fbq("init", "1529515683753284"); fbq("track", "PageView");</script>
<noscript><img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=1529515683753284&amp;ev=PageView&amp;noscript=1"></noscript>



<script type="text/javascript"
    id="">!function (b, e, f, g, a, c, d) { b.fbq || (a = b.fbq = function () { a.callMethod ? a.callMethod.apply(a, arguments) : a.queue.push(arguments) }, b._fbq || (b._fbq = a), a.push = a, a.loaded = !0, a.version = "2.0", a.queue = [], c = e.createElement(f), c.async = !0, c.src = g, d = e.getElementsByTagName(f)[0], d.parentNode.insertBefore(c, d)) }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js"); fbq("init", "1683894614986854"); fbq("track", "PageView");</script>
<noscript><img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=1683894614986854&amp;ev=PageView&amp;noscript=1"></noscript>

<script type="text/javascript"
    id="">_linkedin_partner_id = "425028"; window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || []; window._linkedin_data_partner_ids.push(_linkedin_partner_id);</script>
<script type="text/javascript"
    id="">(function () { var b = document.getElementsByTagName("script")[0], a = document.createElement("script"); a.type = "text/javascript"; a.async = !0; a.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js"; b.parentNode.insertBefore(a, b) })();</script>
<noscript>
    <img height="1" width="1" style="display:none;" alt=""
        src="https://dc.ads.linkedin.com/collect/?pid=425028&amp;fmt=gif">
</noscript>
<div style="display: none; visibility: hidden;"><img
        src="https://secure.adnxs.com/px?id=1057691&amp;seg=15909723&amp;redir=https%3A%2F%2Fpixel.mediaiqdigital.com%2Fpixel%3Fu1%3Dhttps%3A%2F%2Fwww2.deloitte.com%2Fuk%2Fen%2Fpages%2Fpublic-sector%2Farticles%2Fenabling-population-health.html%26u3%3D%26u4%3D%26pixel_id%3D1057691%26uid%3D%24%7BUID%7D&amp;t=2"
        width="1" height="1">


    <script
        type="text/javascript">var axel = Math.random() + "", a = 1E13 * axel; document.write('\x3cimg src\x3d"https://ad.doubleclick.net/ddm/activity/src\x3d9081982;type\x3dinvmedia;cat\x3ddeloi00e;dc_lat\x3d;dc_rdid\x3d;tag_for_child_directed_treatment\x3d;tfua\x3d;npa\x3d;ord\x3d' + a + '?" width\x3d"1" height\x3d"1" alt\x3d""/\x3e');</script>
    <img src="https://ad.doubleclick.net/ddm/activity/src=9081982;type=invmedia;cat=deloi00e;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=6332753601194.285?"
        width="1" height="1" alt="">
    <noscript></noscript>
</div>
<script type="text/javascript"
    id="">_linkedin_partner_id = "2708324"; window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || []; window._linkedin_data_partner_ids.push(_linkedin_partner_id);</script>
<script type="text/javascript"
    id="">(function () { var b = document.getElementsByTagName("script")[0], a = document.createElement("script"); a.type = "text/javascript"; a.async = !0; a.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js"; b.parentNode.insertBefore(a, b) })();</script>
<noscript>
    <img height="1" width="1" style="display:none;" alt=""
        src="https://px.ads.linkedin.com/collect/?pid=2708324&amp;fmt=gif">
</noscript>
<script>
    _satellite.setVar("isScrolledOnce", "start"), _satellite.setVar("isScrolledTillEnd", "end"), _satellite.setVar("isScrolledMidway", "start"), _satellite.setVar("isInfoZoom", "false"), _satellite.setVar("isInfoExpand", "false"), _satellite.setVar("pageReadyFired", "true"); var templatename = _satellite.getVar("pageTemplate"); if ($(".download-file-component").length > 0 && $(".download-file-component").each((function () { $(this).closest("a").removeClass("promo-focus") })), "Generic_Error_Page" != templatename) { var sessionProp3 = _satellite.getVar("country") + ";" + _satellite.getVar("language"); try { Modernizr.sessionstorage && sessionStorage.setItem("prop3Stored", sessionProp3) } catch (e) { } } try { TwineSDK.onEvent = function (e) { _satellite.track("twineSocialInteraction", { e: e }) } } catch (e) { }
</script>
<script>_satellite["_runScript3"](function (event, target, Promise) {
        try { var globalOfficeDirectoryLink = $(".cmp-footer-wrapper__utility-bar__container__locations__directory__link"); "" == globalOfficeDirectoryLink.text() && globalOfficeDirectoryLink.hide() } catch (i) { }
    });</script>
<script>
    $("body").append("<div id='recContent' class='mboxDefault'></div>"); var catID = "", tempName = _satellite.getVar("pageTemplate"), contentType = _satellite.getVar("contentLabeli18n"), contentTypeDisplay = _satellite.getVar("contentLabeli18n"), hideFromRecommendations = _satellite.getVar("hideFromRecommendations"); if (tempName.indexOf("_Topic_Page") > -1) { var siteSectionNoDashes = _satellite.getVar("siteSection").replace(/\-|_/g, " "), secondLevelNoDashes = _satellite.getVar("secondLevel").replace(/\-|_/g, " "); catID = siteSectionNoDashes + "," + secondLevelNoDashes } else catID = "" == _satellite.getVar("primaryTopicTag") ? _satellite.getVar("tag2") : _satellite.getVar("primaryTopicTag") + "," + _satellite.getVar("tag2"); contentType.indexOf("Content_type_") > -1 && (contentType = contentType.slice(13)), "Deloitte_Insights_Article_Page_Template" != tempName && "Deloitte_Insights_Multimedia_Page_Template" != tempName || (hideFromRecommendations = "false", contentType = "Deloitte Insights"), "Event_Details_Page_Template" == tempName && (contentType = _satellite.getVar("eventSubType"), contentTypeDisplay = _satellite.getVar("eventSubType18n")), mboxDefine("recContent", "recommendationmbox", "entity.authors=" + _satellite.getVar("authors")), mboxUpdate("recommendationmbox", "entity.country=" + _satellite.getVar("urlCountry"), "entity.language=" + _satellite.getVar("language"), "entity.siteLanguage=" + _satellite.getVar("urlCountry") + ";" + _satellite.getVar("language"), "entity.mfCountry=" + _satellite.getVar("mfCountryName"), "entity.mfSite=" + _satellite.getVar("mfSite"), "entity.contentIndustry=" + _satellite.getVar("contentIndustry"), "entity.contentJobLevel=" + _satellite.getVar("contentJobLevel"), "entity.contentJobFunction=" + _satellite.getVar("contentJobFunction"), "entity.contentTypeDisplay=" + contentTypeDisplay, "entity.primaryTopic=" + _satellite.getVar("primaryTopicTag"), "entity.categoryId=" + catID, "entity.pageStatus=" + _satellite.getVar("pageDomain"), "entity.publishDate=" + _satellite.getVar("publishDate"), "entity.id=" + _satellite.getVar("pageID"), "entity.pageTemplate=" + _satellite.getVar("pageTemplate"), "entity.siteSection=" + _satellite.getVar("siteSection"), "entity.name=" + _satellite.getVar("headline1"), "entity.authors=" + _satellite.getVar("authors"), "entity.media=" + _satellite.getVar("media"), "entity.documentAge=" + _satellite.getVar("documentAge"), "entity.pageUrl=" + _satellite.getVar("recPageURL"), "entity.recPromo1=" + _satellite.getVar("recPromo1"), "entity.recPromo2=" + _satellite.getVar("recPromo2"), "entity.hideFromRecommendations_v2=" + hideFromRecommendations, "entity.thumbnailUrl=" + _satellite.getVar("thumbnailUrl"), "entity.headline1=" + _satellite.getVar("headline1"), "entity.headline2=" + _satellite.getVar("headline2"), "entity.eventType=" + _satellite.getVar("eventType"), "entity.eventStartDate=" + _satellite.getVar("eventStartDate"), "entity.eventEndDate=" + _satellite.getVar("eventEndDate"), "entity.eventStartTime=" + _satellite.getVar("eventStartTime"), "entity.eventCity=" + _satellite.getVar("eventCity"), "entity.eventCountry=" + _satellite.getVar("eventCountry"), "entity.invitationOnly=" + _satellite.getVar("exclusiveContentInvitationOnly"), "entity.exclusiveContent=" + _satellite.getVar("exclusiveContentRegistrationRequired"), "mbox3rdPartyId=" + _satellite.getVar("sc_gigyaId"), "entity.source=mBox-" + _satellite.getVar("today"));
</script>
<div id="recContent" class="mbox-name-recommendationmbox at-element-marker" data-at-mbox-name="recommendationmbox">
</div>
<script>_satellite["_runScript4"](function (event, target, Promise) {
        var filePath = "/content/dam/Deloitte/resources/css/Dcom-style-2021-06-09.min.css"; $("head").append('<link rel="stylesheet" type="text/css" href=' + filePath + ">");
    });</script>
<script>_satellite["_runScript5"](function (event, target, Promise) {
        $(".recommended-articles").find("a").each((function () { if ($("img", this).attr("src") && $(this).attr("href").indexOf("/insights/") > -1 && $("img", this).attr("src").indexOf("_jcr_content/renditions/cq5dam.web.231.231.desktop.jpeg")) { var t = $("img", this).attr("src").replace("/_jcr_content/renditions/cq5dam.web.231.231.desktop.jpeg", ""); $("img", this).attr("src", t) } }));
    });</script><iframe name="_hjRemoteVarsFrame" title="_hjRemoteVarsFrame" id="_hjRemoteVarsFrame"
    src="https://vars.hotjar.com/box-acca23410e696f2ca3087d947271c3d0.html"
    style="display: none !important; width: 1px !important; height: 1px !important; opacity: 0 !important; pointer-events: none !important;"></iframe>
<script>_satellite["_runScript6"](function (event, target, Promise) {
        setTimeout((function () { "none" === $("header").css("display") && ($("#header").css("height", 0), $(".headerBanner").css("margin-top", 0)) }), 1500);
    });</script>
<script>_satellite["_runScript7"](function (event, target, Promise) {
        var str = ""; try { var len = $("#optanon-popup-wrapper #optanon-popup-body-left #optanon-menu li").length } catch (t) { } if (len) { try { $("#optanon-popup-wrapper #optanon-popup-body-left #optanon-menu li").each((function (t) { t > 0 && t < len && $(this).hasClass("menu-item-off") && !($(this).hasClass("menu-item-moreinfo") || $(this).hasClass("menu-item-necessary") || $(this).hasClass("menu-item-about")) && (str = $(this).attr("title") + "," + str) })) } catch (t) { } try { sessionStorage.setItem("inactCookies", str) } catch (t) { } }
    });</script>
<script>_satellite["_runScript8"](function (event, target, Promise) {
        if ("Contact us" == $("#header__ut-nav__cts-link a").attr("title")) { var linkUrl = $("#header__ut-nav__cts-link a").attr("href"); if (linkUrl.indexOf("icid=top_contact-us") < 0) { var newlinkUrl = linkUrl + "?icid=top_contact-us"; $("#header__ut-nav__cts-link a").attr("href", newlinkUrl) } }
    });</script>
<script>_satellite["_runScript9"](function (event, target, Promise) {
        for (var dt, expires, cval, isPWACookiePresent = !1, allCookies = document.cookie.split(";"), i = 0; i < allCookies.length; i++)if (allCookies[i].slice(0, allCookies[i].indexOf("=")).indexOf("pwaAccessCode") > -1) { isPWACookiePresent = !0; break } 0 == isPWACookiePresent && (cval = "a3b808d3d6cbb07c8bcae9c9804d3aff", (dt = new Date).setTime(dt.getTime() + 63072e6), expires = "; expires=" + dt.toGMTString(), document.cookie = "pwaAccessCode=" + cval + expires + " path=/" + window.location.pathname.split("/")[1] + ";");
    });</script>
<script>_satellite["_runScript10"](function (event, target, Promise) {
        function myHandler(e) { var t = "", a = "brightcove_player"; try { t = $($(e.path[2])).find(".brightcove-default").html(), "brightcove_player" == a && (a = "brightcove_video_player"), $($(e.path)).find(".brightcovevideo section").length > 0 && (a = "brightcove_video_player"), $($(e.path)).find(".brightcovepodcast section").length > 0 && (a = "brightcove_podcast_player"), $($(e.path)).find(".brightcovevideo-podcast--standard").length > 0 && (a = "brightcove_podcast_player") } catch (e) { console.log(e) } e.target.duration; s.linkTrackVars = "prop1,prop2,prop3,prop5,prop14,prop35,eVar10,eVar11,eVar25,eVar28,eVar34,eVar35,eVar47,prop52,events", s.linkTrackEvents = "event17,event18,event20,event99,event100,event23", s.prop1 = _satellite.getVar("urlCountry"), s.prop2 = _satellite.getVar("language"), s.prop3 = _satellite.getVar("urlCountry") + ";" + _satellite.getVar("language"), s.prop5 = _satellite.getVar("siteSection"), s.prop14 = _satellite.getVar("pageId"), s.eVar47 = _satellite.getVar("pagename"), s.eVar34 = dataLayer.page.attributes.blueprintName, s.eVar35 = "Video_view", s.prop35 = dataLayer.page.attributes.contentLabel18n, s.eVar25 = dataLayer.page.attributes.contentLabel18n, e.target.currentTime > 0 ? mediaOffset = Math.floor(e.target.currentTime) : mediaOffset = 0, "play" == e.type && 0 == mediaOffset && (-1 != a.indexOf("brightcove_video_player") && setTimeout((function () { "" != t && null != t && null != t || (t = $($(e.path[2])).find(".vjs-dock-title").html()), s.eVar35 = "video_view", s.prop52 = a, s.eVar28 = t, s.events = "event17,event23", s.pageName = dataLayer.page.attributes.pagename + "_" + a + "_" + t, s.tl(this, "o", "Video Start") }), 4e3), -1 != a.indexOf("brightcove_podcast_player") && ("" != t && null != t && null != t || (t = $($(e.path)).find(".podcast-content h4").html() ? $($(e.path)).find(".podcast-content h4").html() : $($(e.path[2])).find(".vjs-dock-title").html()), s.eVar35 = "podcast_start", s.prop52 = a, s.eVar28 = t, s.events = "event99,event23", s.pageName = dataLayer.page.attributes.pagename + "_" + a + "_" + t, s.tl(this, "o", "Podcast Start"))), "ended" == e.type && (-1 != a.indexOf("brightcove_video_player") && ("" != t && null != t && null != t || (t = $($(e.path[2])).find(".vjs-dock-title").html()), s.eVar35 = "video_complete", s.prop52 = a, s.eVar28 = t, s.events = "event20,event23", s.pageName = dataLayer.page.attributes.pagename + "_" + a + "_" + t, s.tl(this, "o", "Video Complete")), -1 != a.indexOf("brightcove_podcast_player") && ("" != t && null != t && null != t || (t = $($(e.path)).find(".podcast-content h4").html() ? $($(e.path)).find(".podcast-content h4").html() : $($(e.path[2])).find(".vjs-dock-title").html()), s.eVar35 = "podcast_complete", s.prop52 = a, s.eVar28 = t, s.events = "event100,event23", s.pageName = dataLayer.page.attributes.pagename + "_" + a + "_" + t, s.tl(this, "o", "Podcast Complete"))) } for (var videos = document.getElementsByTagName("video"), i = 0; i < videos.length; i++) { var video = videos[i]; "QLAbKiSvT" != video.dataset.player && "JyQKKzAeM" != video.dataset.player && "iUsk0iuwpd" != video.dataset.player && "XwhX69YbP" != video.dataset.player && 1 != video.autoplay && 1 != video.muted && (video.addEventListener("play", myHandler, !1), video.addEventListener("ended", myHandler, !1)) }
    });</script>
<script>_satellite["_runScript11"](function (event, target, Promise) {
        $(".promo-focus").each((function () { $(this).attr("href") && $(this).attr("href").indexOf("/insights/") > -1 && ($(this).attr("target", "_self"), $(this).find("span.external-link-icon").css("display", "none")) }));
    });</script>
</body>

</html>`;


// markup
const IndexPage = () => <div dangerouslySetInnerHTML={{ __html: myHTML }} />;


export default IndexPage
