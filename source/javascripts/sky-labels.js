/*
 *  SkyLabels.js - v0.0.2
 *  Fun, Compact & Accessible Forms
 *  http://thoughtbot.github.io/sky-labels
 *
 *  Made by Paul Smith
 *  Under MIT License
 */
var setupSkyLabels=function(){function a(a){var b=$(a.currentTarget);b.addClass("sky-label-focused")}function b(a){var b=$(a.currentTarget);b.removeClass("sky-label-focused")}function c(){$(".sky-label").trigger("blur")}function d(a){var b=$(a.currentTarget);e(b)?b.addClass("sky-label-has-text"):b.removeClass("sky-label-has-text")}function e(a){var b=a.find("input, textarea");return $.trim(b.val()).length}$(document).on("focus blur",".sky-label",d),$(document).on("focus",".sky-label",a),$(document).on("blur",".sky-label",b),$(document).ready(c)};
