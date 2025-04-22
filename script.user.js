// ==UserScript==
// @name         WhatsApp Shortcut
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Script com jQuery para WhatsApp Web
// @match        https://web.whatsapp.com/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.7.1.min.js
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    $(document).ready(function () {
        console.log("jQuery carregado com sucesso!");
        $('message-in').css('background-color', 'blue');
        // seu código aqui
    });
})();