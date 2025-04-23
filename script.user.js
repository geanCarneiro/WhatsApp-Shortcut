// ==UserScript==
// @name         WhatsApp Shortcut
// @namespace    http://tampermonkey.net/
// @version      1.5
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

    jQuery(function () {
        observeDOM('.message-in', ( /** @type {JQuery<HTMLElement>} */ el) => {
            el.on("keydown", function (/** @type {KeyboardEvent} */ evt) {
                

                if(evt.ctrlKey) {
                    switch(evt.key.toUpperCase()) {
                        case "R":
                            evt.preventDefault();
                            evt.stopPropagation();

                            $('[data-icon="react"]', el).parent().trigger("click")
                        break;
                        case "Q":
                            evt.preventDefault();
                            evt.stopPropagation();
                            
                            $('[data-icon="down-context"]', el).parent().trigger("click")
                        break;
                    }
                }

                

            })
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