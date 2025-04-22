// ==UserScript==
// @name         WhatsApp Shortcut
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Script com jQuery para WhatsApp Web
// @match        https://web.whatsapp.com/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.7.1.min.js
// @run-at       document-idle
// @updateURL    https://raw.githubusercontent.com/geanCarneiro/WhatsApp-Shortcut/refs/heads/main/script.user.js
// @downloadURL  https://raw.githubusercontent.com/geanCarneiro/WhatsApp-Shortcut/refs/heads/main/script.user.js
// ==/UserScript==

(function() {
    'use strict';

    $(document).ready(function () {
        observeDOM('message-in', (el) => {
            el.css('background-color', 'blue');
        })
    });
})();



function observeDOM(selector, callback) {
    const observer = new MutationObserver(() => {
        $(selector).each(function () {
            if (!$(this).data('handled')) {
                $(this).data('handled', true); // Evita repetir
                callback($(this));
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
}