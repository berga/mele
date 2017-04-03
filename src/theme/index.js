"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var replace_1 = require("../cmd/replace");
var addClass_1 = require("../cmd/addClass");
var removeClass_1 = require("../cmd/removeClass");
var after_1 = require("../cmd/after");
var before_1 = require("../cmd/before");
var append_1 = require("../cmd/append");
var prepend_1 = require("../cmd/prepend");
var prop_1 = require("../cmd/prop");
var removeProp_1 = require("../cmd/removeProp");
var findElements_1 = require("../util/findElements");
var unfreezeElement_1 = require("../util/unfreezeElement");
exports.default = function (root) {
    // unfreeze object
    var rootEl = unfreezeElement_1.default(root), wrapper = {
        element: function () { return rootEl; }
    }, utils = {
        replace: replace_1.default,
        addClass: addClass_1.default,
        removeClass: removeClass_1.default,
        after: after_1.default,
        before: before_1.default,
        append: append_1.default,
        prepend: prepend_1.default,
        prop: prop_1.default,
        removeProp: removeProp_1.default
    };
    Object.keys(utils)
        .forEach(function (key, value) {
        var op = utils[key];
        wrapper[key] = function (selector) {
            var rest = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                rest[_i - 1] = arguments[_i];
            }
            rootEl = op.apply(void 0, [rootEl,
                findElements_1.default(rootEl, selector)].concat(rest));
            return wrapper;
        };
    });
    return wrapper;
};
