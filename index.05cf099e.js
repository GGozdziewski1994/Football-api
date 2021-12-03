// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"kS06O":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "51cf58d705cf099e";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"lA0Es":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js");
var _searchViewJs = require("./views/searchView.js");
var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
var _scorerView = require("./views/scorerView");
var _scorerViewDefault = parcelHelpers.interopDefault(_scorerView);
var _scorersView = require("./views/scorersView");
var _scorersViewDefault = parcelHelpers.interopDefault(_scorersView);
var _squadView = require("./views/squadView");
var _squadViewDefault = parcelHelpers.interopDefault(_squadView);
var _squadsView = require("./views/squadsView");
var _squadsViewDefault = parcelHelpers.interopDefault(_squadsView);
const controlScorer = async function(data) {
    try {
        _scorersViewDefault.default.renderSpinner();
        if (!data.league && !data.player) throw new Error('No data! Please enter data');
        await _modelJs.loadScorer(data.league, data.option, data.player);
        if (data.option.startsWith('scorers')) _scorersViewDefault.default.render(_modelJs.state.scorers);
        else _scorerViewDefault.default.render(_modelJs.state.scorers[0]);
    } catch (error) {
        console.error(`🎆 ${error}`);
    }
};
const controlSquad = async function(data) {
    try {
        _squadsViewDefault.default.renderSpinner();
        await _modelJs.loadSquad(data.league, data.option, data.player);
        if (data.option.startsWith('squads')) _squadsViewDefault.default.render(_modelJs.state.squad);
        else _squadViewDefault.default.render(_modelJs.state.squad[0]);
    } catch (error) {
        throw error;
    }
};
const controlOption = async function() {
    const data = _searchViewJsDefault.default.getDataPlayer();
    if (data.option.startsWith('scorer')) return await controlScorer(data);
    if (data.option.startsWith('squad')) return await controlSquad(data);
};
const init = function() {
    _searchViewJsDefault.default.addHandlerSearch(controlOption);
};
init();

},{"./model.js":"1pVJj","./views/searchView.js":"jcq1q","./views/scorerView":"cx8R2","./views/scorersView":"1Uc29","./views/squadView":"39zny","./views/squadsView":"jSohu","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1pVJj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
parcelHelpers.export(exports, "loadScorer", ()=>loadScorer
);
parcelHelpers.export(exports, "loadSquad", ()=>loadSquad
);
var _helpersJs = require("./helpers.js");
const state = {
    scorers: [],
    squad: []
};
const loadScorer = async function(league, option, player) {
    try {
        const data = await _helpersJs.getAPI(league, option, player);
        if (!data) throw new Error('The data entered is wrong! Enter correct data!');
        state.scorers = data.map((d)=>{
            return {
                goals: d.player_goals,
                name: d.player_name,
                penalties: d.player_penalties,
                position: d.player_role,
                team: d.player_squad
            };
        });
    } catch (error) {
        throw error;
    }
};
const loadSquad = async function(league, option, player) {
    try {
        const data = await _helpersJs.getAPI(league, option, player);
        if (!data) throw new Error('The data entered is wrong! Enter correct data!');
        state.squad = data.map((d)=>{
            return {
                position: d.squad_position,
                team: d.squad_name,
                points: d.squad_points,
                matches: d.squad_played,
                wins: d.squad_winned,
                losses: d.squad_loosed,
                draws: d.squad_tie
            };
        });
    } catch (error) {
        throw error;
    }
};

},{"./helpers.js":"9RX9R","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9RX9R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAPI", ()=>getAPI
);
const getAPI = async function(league, option, player) {
    try {
        const response = await fetch(`https://football98.p.rapidapi.com/${league}/${option}/${player}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "football98.p.rapidapi.com",
                "x-rapidapi-key": "d59bcae9camshfe0dfe733b9b44ap12b67ajsn2abc9c7c6a95"
            }
        });
        if (!response.ok) throw new Error(`You have not entered all the data! Try again! (${response.status})`);
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"jcq1q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class SearchView {
    _parentElement = document.querySelector('.search');
    getDataPlayer() {
        const option = this._parentElement.querySelector('.search__option').value;
        const league = this._parentElement.querySelector('.search__league').value;
        const player = this._parentElement.querySelector('.search__player').value;
        this._clearInput();
        return {
            league,
            player,
            option
        };
    }
    _clearInput() {
        this._parentElement.querySelector('.search__league').value = '';
        this._parentElement.querySelector('.search__player').value = '';
        this._parentElement.querySelector('.search__option').value = '';
    }
    addHandlerSearch(handler) {
        this._parentElement.addEventListener('submit', function(e) {
            e.preventDefault();
            handler();
        });
    }
}
exports.default = new SearchView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cx8R2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _player1Png = require("../../icon/player1.png");
var _player1PngDefault = parcelHelpers.interopDefault(_player1Png);
var _position2Png = require("../../icon/position2.png");
var _position2PngDefault = parcelHelpers.interopDefault(_position2Png);
var _goal2Png = require("../../icon/goal2.png");
var _goal2PngDefault = parcelHelpers.interopDefault(_goal2Png);
var _penalty2Png = require("../../icon/penalty2.png");
var _penalty2PngDefault = parcelHelpers.interopDefault(_penalty2Png);
var _herbPng = require("../../icon/herb.png");
var _herbPngDefault = parcelHelpers.interopDefault(_herbPng);
class ScorerView extends _viewDefault.default {
    _parentElement = document.querySelector('.container');
    _generateMarkup() {
        return `
        <div class="container__data">
            <img class="container__football-icon" src="${_player1PngDefault.default}">
            <h2>Name</h2>
            <div>${this._data.name}</div>
        </div>
        <div class="container__data">
            <img class="container__football-icon" src="${_position2PngDefault.default}">
            <h2>Position</h2>
            <div>${this._data.position}</div>
        </div>
        <div class="container__data">
            <img class="container__football-icon" src="${_goal2PngDefault.default}">
            <h2>Goals</h2>
            <div>${this._data.goals}</div>
        </div>
        <div class="container__data">
            <img class="container__football-icon" src="${_penalty2PngDefault.default}">
            <h2>Penalties</h2>
            <div>${this._data.penalties}</div>
        </div>
        <div class="container__data">
            <img class="container__football-icon" src="${_herbPngDefault.default}">
            <h2>Team</h2>
            <div>${this._data.team}</div>
        </div>
        `;
    }
}
exports.default = new ScorerView();

},{"./View":"9dvKv","../../icon/player1.png":"1j6gS","../../icon/position2.png":"c4jDV","../../icon/goal2.png":"EpytQ","../../icon/penalty2.png":"02S6Z","../../icon/herb.png":"51Ib7","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9dvKv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class View {
    _data;
    render(data) {
        this._data = data;
        this._clear();
        const markup = this._generateMarkup();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    _clear() {
        document.querySelector('.container__text').textContent = '';
        document.querySelector('.container').textContent = '';
        document.querySelector('.table').textContent = '';
    }
    renderSpinner() {
        const markup = `
        <div class="spinner">
            <div class="loader"></div>
        </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1j6gS":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('71ti3') + "player1.93516852.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"chiK4":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"c4jDV":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('71ti3') + "position2.babbfbbf.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"EpytQ":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('71ti3') + "goal2.fc8b0692.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"02S6Z":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('71ti3') + "penalty2.21e83e58.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"51Ib7":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('71ti3') + "herb.7980317d.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"1Uc29":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class ScorersView extends _viewDefault.default {
    _parentElement = document.querySelector('.table');
    _generateMarkup() {
        return `
            <table>
                <thead>
                <tr>
                    <td>Sequence</td>
                    <td>Name</td>
                    <td>Team</td>
                    <td>Position</td>
                    <td>Goals</td>
                    <td>Penalties</td>
                </tr>
                </thead>
                <tbody>
            
                ${this._data.map(this._generateData).join('')}
                
                </tbody>
            </table>
        `;
    }
    _generateData(d, index) {
        return `
            <tr>
                 <td>${index + 1}</td>
                 <td>${d.name}</td>
                 <td>${d.team}</td>
                 <td>${d.position}</td>
                 <td>${d.goals}</td>
                 <td>${d.penalties}</td>
            </tr>
        `;
    }
}
exports.default = new ScorersView();

},{"./View":"9dvKv","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"39zny":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _herbPng = require("../../icon/herb.png");
var _herbPngDefault = parcelHelpers.interopDefault(_herbPng);
var _positionPng = require("../../icon/position.png");
var _positionPngDefault = parcelHelpers.interopDefault(_positionPng);
var _pointPng = require("../../icon/point.png");
var _pointPngDefault = parcelHelpers.interopDefault(_pointPng);
var _whistlePng = require("../../icon/whistle.png");
var _whistlePngDefault = parcelHelpers.interopDefault(_whistlePng);
var _winPng = require("../../icon/win.png");
var _winPngDefault = parcelHelpers.interopDefault(_winPng);
var _loseJpg = require("../../icon/lose.jpg");
var _loseJpgDefault = parcelHelpers.interopDefault(_loseJpg);
var _drawPng = require("../../icon/draw.png");
var _drawPngDefault = parcelHelpers.interopDefault(_drawPng);
class SquadView extends _viewDefault.default {
    _parentElement = document.querySelector('.container');
    _generateMarkup() {
        return `
            <div class="container__data">
                <img class="container__football-icon" src="${_herbPngDefault.default}">
                <h2>Team</h2>
                <div>${this._data.team}</div>
            </div>
            <div class="container__data">
                <img class="container__football-icon" src="${_positionPngDefault.default}">
                <h2>Position</h2>
                <div>${this._data.position}</div>
            </div>
            <div class="container__data">
                <img class="container__football-icon" src="${_pointPngDefault.default}">
                <h2>Points</h2>
                <div>${this._data.points}</div>
            </div>
            <div class="container__data">
                <img class="container__football-icon" src="${_whistlePngDefault.default}">
                <h2>Matches Played</h2>
                <div>${this._data.matches}</div>
            </div>
            <div class="container__data">
                <img class="container__football-icon" src="${_winPngDefault.default}">
                <h2>Wins</h2>
                <div>${this._data.wins}</div>
            </div>
            <div class="container__data">
                <img class="container__football-icon" src="${_loseJpgDefault.default}">
                <h2>Losses</h2>
                <div>${this._data.losses}</div>
            </div>
            <div class="container__data">
                <img class="container__football-icon" src="${_drawPngDefault.default}">
                <h2>Draws</h2>
                <div>${this._data.draws}</div>
            </div>
        `;
    }
}
exports.default = new SquadView();

},{"./View":"9dvKv","../../icon/herb.png":"51Ib7","../../icon/position.png":"iucqv","../../icon/point.png":"aCRh7","../../icon/whistle.png":"6mgvY","../../icon/win.png":"1rCfx","../../icon/lose.jpg":"4LMiB","../../icon/draw.png":"6ptRx","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iucqv":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('71ti3') + "position.2a80d459.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"aCRh7":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('71ti3') + "point.e98fc337.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"6mgvY":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('71ti3') + "whistle.1a5cec97.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"1rCfx":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('71ti3') + "win.f980b2ef.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"4LMiB":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('71ti3') + "lose.584d4ee6.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"6ptRx":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('71ti3') + "draw.2e1d91f2.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"jSohu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class SquadsView extends _viewDefault.default {
    _parentElement = document.querySelector('.table');
    _generateMarkup() {
        return `
            <table>
                <thead>
                <tr>
                    <td>Sequence</td>
                    <td>Team</td>
                    <td>Points</td>
                    <td>Matches</td>
                    <td>Wins</td>
                    <td>Looses</td>
                    <td>Draws</td>
                </tr>
                </thead>
                <tbody>
                
                ${this._data.map(this._generateData).join('')}
                
                </tbody>
            </table>
        `;
    }
    _generateData(d) {
        return `
            <tr>
                <td>${d.position}</td>
                <td>${d.team}</td>
                <td>${d.points}</td>
                <td>${d.matches}</td>
                <td>${d.wins}</td>
                <td>${d.losses}</td>
                <td>${d.draws}</td>
            </tr>
        `;
    }
}
exports.default = new SquadsView();

},{"./View":"9dvKv","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["kS06O","lA0Es"], "lA0Es", "parcelRequireb12c")

//# sourceMappingURL=index.05cf099e.js.map
