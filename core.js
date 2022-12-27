var lang = navigator.language || navigator.userLanguage;
langtwo = lang.substr(0, 2);
if (!!window.MSInputMethodContext && !!document.documentMode) {
    if (langtwo == 'zh') {
        if (lang.indexOf('Hant') !== -1 || lang.indexOf('CHT') !== -1 || lang.indexOf('TW') !== -1 || lang.indexOf('tw') !== -1 || lang.indexOf('hk') !== -1 || lang.indexOf('HK') !== -1) {
            window.location.href = "https://ie.xiaozhao233.top/index.zh-hant.html";
        } else {
            window.location.href = "https://ie.xiaozhao233.top/index.html";
        }
    }else {
        window.location.href = "https://ie.xiaozhao233.top/index.en.html";
    }
}
