webpackJsonp([0x67ef26645b2a,60335399758886],{"./node_modules/json-loader/index.js!./.cache/json/layout-index.json":function(e,t){e.exports={layoutContext:{}}},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/lcustodio/projects/oktoberfest/helena-martins.com/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/lcustodio/projects/oktoberfest/helena-martins.com/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/lcustodio/projects/oktoberfest/helena-martins.com/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/lcustodio/projects/oktoberfest/helena-martins.com/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/lcustodio/projects/oktoberfest/helena-martins.com/node_modules/babel-preset-stage-0/lib/index.js","/Users/lcustodio/projects/oktoberfest/helena-martins.com/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./.cache/layouts/index.js':function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=n("./node_modules/react/react.js"),a=r(s),i=n("./src/layouts/index.js"),u=r(i),l=n("./node_modules/json-loader/index.js!./.cache/json/layout-index.json"),c=r(l);t.default=function(e){return a.default.createElement(u.default,o({},e,c.default))},e.exports=t.default},"./node_modules/babel-runtime/core-js/object/assign.js":function(e,t,n){e.exports={default:n("./node_modules/core-js/library/fn/object/assign.js"),__esModule:!0}},"./node_modules/babel-runtime/core-js/object/keys.js":function(e,t,n){e.exports={default:n("./node_modules/core-js/library/fn/object/keys.js"),__esModule:!0}},"./node_modules/babel-runtime/helpers/extends.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n("./node_modules/babel-runtime/core-js/object/assign.js"),s=r(o);t.default=s.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}},"./node_modules/babel-runtime/helpers/objectWithoutProperties.js":function(e,t){"use strict";t.__esModule=!0,t.default=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}},"./node_modules/core-js/library/fn/object/assign.js":function(e,t,n){n("./node_modules/core-js/library/modules/es6.object.assign.js"),e.exports=n("./node_modules/core-js/library/modules/_core.js").Object.assign},"./node_modules/core-js/library/fn/object/keys.js":function(e,t,n){n("./node_modules/core-js/library/modules/es6.object.keys.js"),e.exports=n("./node_modules/core-js/library/modules/_core.js").Object.keys},"./node_modules/core-js/library/modules/_object-assign.js":function(e,t,n){"use strict";var r=n("./node_modules/core-js/library/modules/_object-keys.js"),o=n("./node_modules/core-js/library/modules/_object-gops.js"),s=n("./node_modules/core-js/library/modules/_object-pie.js"),a=n("./node_modules/core-js/library/modules/_to-object.js"),i=n("./node_modules/core-js/library/modules/_iobject.js"),u=Object.assign;e.exports=!u||n("./node_modules/core-js/library/modules/_fails.js")(function(){var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach(function(e){t[e]=e}),7!=u({},e)[n]||Object.keys(u({},t)).join("")!=r})?function(e,t){for(var n=a(e),u=arguments.length,l=1,c=o.f,d=s.f;u>l;)for(var f,p=i(arguments[l++]),T=c?r(p).concat(c(p)):r(p),m=T.length,E=0;m>E;)d.call(p,f=T[E++])&&(n[f]=p[f]);return n}:u},"./node_modules/core-js/library/modules/_object-sap.js":function(e,t,n){var r=n("./node_modules/core-js/library/modules/_export.js"),o=n("./node_modules/core-js/library/modules/_core.js"),s=n("./node_modules/core-js/library/modules/_fails.js");e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],a={};a[e]=t(n),r(r.S+r.F*s(function(){n(1)}),"Object",a)}},"./node_modules/core-js/library/modules/es6.object.assign.js":function(e,t,n){var r=n("./node_modules/core-js/library/modules/_export.js");r(r.S+r.F,"Object",{assign:n("./node_modules/core-js/library/modules/_object-assign.js")})},"./node_modules/core-js/library/modules/es6.object.keys.js":function(e,t,n){var r=n("./node_modules/core-js/library/modules/_to-object.js"),o=n("./node_modules/core-js/library/modules/_object-keys.js");n("./node_modules/core-js/library/modules/_object-sap.js")("keys",function(){return function(e){return o(r(e))}})},"./node_modules/deep-equal/index.js":function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function s(e,t,n){var s,c;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(u(e))return!!u(t)&&(e=a.call(e),t=a.call(t),l(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(s=0;s<e.length;s++)if(e[s]!==t[s])return!1;return!0}try{var d=i(e),f=i(t)}catch(e){return!1}if(d.length!=f.length)return!1;for(d.sort(),f.sort(),s=d.length-1;s>=0;s--)if(d[s]!=f[s])return!1;for(s=d.length-1;s>=0;s--)if(c=d[s],!l(e[c],t[c],n))return!1;return typeof e==typeof t}var a=Array.prototype.slice,i=n("./node_modules/deep-equal/lib/keys.js"),u=n("./node_modules/deep-equal/lib/is_arguments.js"),l=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:s(e,t,n))}},"./node_modules/deep-equal/lib/is_arguments.js":function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},"./node_modules/deep-equal/lib/keys.js":function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},"./node_modules/exenv/index.js":function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),s={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return s}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},"./node_modules/gatsby-link/index.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return e.replace(/^\/\//g,"/")}t.__esModule=!0,t.navigateTo=void 0;var s=n("./node_modules/babel-runtime/helpers/extends.js"),a=r(s),i=n("./node_modules/babel-runtime/core-js/object/keys.js"),u=r(i),l=n("./node_modules/babel-runtime/helpers/objectWithoutProperties.js"),c=r(l),d=n("./node_modules/babel-runtime/helpers/classCallCheck.js"),f=r(d),p=n("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),T=r(p),m=n("./node_modules/babel-runtime/helpers/inherits.js"),E=r(m),b=n("./node_modules/react/react.js"),y=r(b),_=n("./node_modules/react-router-dom/index.js"),h=n("./node_modules/prop-types/index.js"),A=r(h),j="/",S={activeClassName:A.default.string,activeStyle:A.default.object,exact:A.default.bool,strict:A.default.bool,isActive:A.default.func,location:A.default.object},v=function(e){function t(n){(0,f.default)(this,t);var r=(0,T.default)(this,e.call(this));return r.state={to:o(j+n.to)},r}return(0,E.default)(t,e),t.prototype.componentWillReceiveProps=function(e){this.props.to!==e.to&&(this.setState({to:o(j+e.to)}),___loader.enqueue(this.state.to))},t.prototype.componentDidMount=function(){___loader.enqueue(this.state.to)},t.prototype.render=function(){var e=this,t=this.props,n=t.onClick,r=(0,c.default)(t,["onClick"]);if((0,u.default)(S).some(function(t){return e.props[t]}))var o=_.NavLink;else var o=_.Link;return y.default.createElement(o,(0,a.default)({onClick:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(t){if(n&&n(t),!(0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){var r=e.state.to;if(r.split("#").length>1&&(r=r.split("#").slice(0,-1).join("")),r===window.location.pathname){var o=e.state.to.split("#").slice(1).join("#"),s=document.getElementById(o);if(null!==s)return s.scrollIntoView(),!0}t.preventDefault(),window.___navigateTo(e.state.to)}})},r,{to:this.state.to}))},t}(y.default.Component);v.contextTypes={router:A.default.object},t.default=v;t.navigateTo=function(e){window.___navigateTo(o(j+e))}},"./node_modules/react-helmet/lib/Helmet.js":function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n("./node_modules/react/react.js"),d=r(c),f=n("./node_modules/prop-types/index.js"),p=r(f),T=n("./node_modules/react-side-effect/lib/index.js"),m=r(T),E=n("./node_modules/deep-equal/index.js"),b=r(E),y=n("./node_modules/react-helmet/lib/HelmetUtils.js"),_=n("./node_modules/react-helmet/lib/HelmetConstants.js"),h=function(e){var t,n;return n=t=function(t){function n(){return s(this,n),a(this,t.apply(this,arguments))}return i(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,b.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case _.TAG_NAMES.SCRIPT:case _.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case _.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,s=e.nestedChildren;return u({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[u({},o,this.mapNestedChildrenToProps(n,s))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,s=e.newChildProps,a=e.nestedChildren;switch(r.type){case _.TAG_NAMES.TITLE:return u({},o,(t={},t[r.type]=a,t.titleAttributes=u({},s),t));case _.TAG_NAMES.BODY:return u({},o,{bodyAttributes:u({},s)});case _.TAG_NAMES.HTML:return u({},o,{htmlAttributes:u({},s)})}return u({},o,(n={},n[r.type]=u({},s),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=u({},t);return Object.keys(e).forEach(function(t){var r;n=u({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return d.default.Children.forEach(e,function(e){if(e&&e.props){var s=e.props,a=s.children,i=o(s,["children"]),u=(0,y.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,a),e.type){case _.TAG_NAMES.LINK:case _.TAG_NAMES.META:case _.TAG_NAMES.NOSCRIPT:case _.TAG_NAMES.SCRIPT:case _.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:u,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:u,nestedChildren:a})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),s=u({},r);return n&&(s=this.mapChildrenToProps(n,s)),d.default.createElement(e,s)},l(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(d.default.Component),t.propTypes={base:p.default.object,bodyAttributes:p.default.object,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),defaultTitle:p.default.string,defer:p.default.bool,encodeSpecialCharacters:p.default.bool,htmlAttributes:p.default.object,link:p.default.arrayOf(p.default.object),meta:p.default.arrayOf(p.default.object),noscript:p.default.arrayOf(p.default.object),onChangeClientState:p.default.func,script:p.default.arrayOf(p.default.object),style:p.default.arrayOf(p.default.object),title:p.default.string,titleAttributes:p.default.object,titleTemplate:p.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,y.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},A=function(){return null},j=(0,m.default)(y.reducePropsToState,y.handleClientStateChange,y.mapStateOnServer)(A),S=h(j);S.renderStatic=S.rewind,t.Helmet=S,t.default=S},"./node_modules/react-helmet/lib/HelmetConstants.js":function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},"./node_modules/react-helmet/lib/HelmetUtils.js":function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n("./node_modules/react/react.js"),i=r(a),u=n("./node_modules/object-assign/index.js"),l=r(u),c=n("./node_modules/react-helmet/lib/HelmetConstants.js"),d=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=b(e,c.TAG_NAMES.TITLE),n=b(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=b(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return b(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return s({},e,t)},{})},m=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[c.TAG_NAMES.BASE]}).map(function(e){return e[c.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var s=r[o],a=s.toLowerCase();if(e.indexOf(a)!==-1&&n[a])return t.concat(n)}return t},[])},E=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&S("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,s=Object.keys(e),a=0;a<s.length;a++){var i=s[a],u=i.toLowerCase();t.indexOf(u)===-1||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||u===c.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(n=u),t.indexOf(i)===-1||i!==c.TAG_PROPERTIES.INNER_HTML&&i!==c.TAG_PROPERTIES.CSS_TEXT&&i!==c.TAG_PROPERTIES.ITEM_PROP||(n=i)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var s=Object.keys(o),a=0;a<s.length;a++){var i=s[a],u=(0,l.default)({},r[i],o[i]);r[i]=u}return e},[]).reverse()},b=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},y=function(e){return{baseTag:m([c.TAG_PROPERTIES.HREF],e),bodyAttributes:T(c.ATTRIBUTE_NAMES.BODY,e),defer:b(e,c.HELMET_PROPS.DEFER),encode:b(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(c.ATTRIBUTE_NAMES.HTML,e),linkTags:E(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:E(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:E(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:T(c.ATTRIBUTE_NAMES.TITLE,e)}},_=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){_(t)},0)}}(),h=function(e){return clearTimeout(e)},A="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||_:e.requestAnimationFrame||_,j="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||h:e.cancelAnimationFrame||h,S=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},v=null,g=function(e){v&&j(v),e.defer?v=A(function(){O(e,function(){v=null})}):(O(e),v=null)},O=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,s=e.linkTags,a=e.metaTags,i=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,d=e.styleTags,f=e.title,p=e.titleAttributes;R(c.TAG_NAMES.BODY,r),R(c.TAG_NAMES.HTML,o),P(f,p);var T={baseTag:C(c.TAG_NAMES.BASE,n),linkTags:C(c.TAG_NAMES.LINK,s),metaTags:C(c.TAG_NAMES.META,a),noscriptTags:C(c.TAG_NAMES.NOSCRIPT,i),scriptTags:C(c.TAG_NAMES.SCRIPT,l),styleTags:C(c.TAG_NAMES.STYLE,d)},m={},E={};Object.keys(T).forEach(function(e){var t=T[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(E[e]=T[e].oldTags)}),t&&t(),u(e,m,E)},M=function(e){return Array.isArray(e)?e.join(""):e},P=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=M(e)),R(c.TAG_NAMES.TITLE,t)},R=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),o=r?r.split(","):[],s=[].concat(o),a=Object.keys(t),i=0;i<a.length;i++){var u=a[i],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),o.indexOf(u)===-1&&o.push(u);var d=s.indexOf(u);d!==-1&&s.splice(d,1)}for(var f=s.length-1;f>=0;f--)n.removeAttribute(s[f]);o.length===s.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,a.join(","))}},C=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),s=[],a=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var i="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,i)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return a=t,n.isEqualNode(e)})?o.splice(a,1):s.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),s.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:s}},w=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},I=function(e,t,n,r){var o=w(n),s=M(t);return o?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+">"+d(s,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+d(s,r)+"</"+e+">"},N=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+d(r[t],n)+'"';return e?e+" "+o:o},""),s=r.innerHTML||r.cssText||"",a=c.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+s+"</"+e+">")},"")},x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t},t)},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t},t)},k=function(e,t,n){var r,o=(r={key:t},r[c.HELMET_ATTRIBUTE]=!0,r),s=x(n,o);return[i.default.createElement(c.TAG_NAMES.TITLE,s,t)]},G=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),i.default.createElement(e,o)})},H=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return k(e,t.title,t.titleAttributes,n)},toString:function(){return I(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return x(t)},toString:function(){return w(t)}};default:return{toComponent:function(){return G(e,t)},toString:function(){return N(e,t,n)}}}},U=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,s=e.linkTags,a=e.metaTags,i=e.noscriptTags,u=e.scriptTags,l=e.styleTags,d=e.title,f=void 0===d?"":d,p=e.titleAttributes;return{base:H(c.TAG_NAMES.BASE,t,r),bodyAttributes:H(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:H(c.ATTRIBUTE_NAMES.HTML,o,r),link:H(c.TAG_NAMES.LINK,s,r),meta:H(c.TAG_NAMES.META,a,r),noscript:H(c.TAG_NAMES.NOSCRIPT,i,r),script:H(c.TAG_NAMES.SCRIPT,u,r),style:H(c.TAG_NAMES.STYLE,l,r),title:H(c.TAG_NAMES.TITLE,{title:f,titleAttributes:p},r)}};t.convertReactPropstoHtmlAttributes=L,t.handleClientStateChange=g,t.mapStateOnServer=U,t.reducePropsToState=y,t.requestAnimationFrame=A,t.warn=S}).call(t,function(){return this}())},"./node_modules/react-side-effect/lib/index.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n("./node_modules/react/react.js"),u=r(i),l=n("./node_modules/exenv/index.js"),c=r(l),d=n("./node_modules/shallowequal/index.js"),f=r(d);e.exports=function(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(l){function d(){T=e(p.map(function(e){return e.props})),m.canUseDOM?t(T):n&&(T=n(T))}if("function"!=typeof l)throw new Error("Expected WrappedComponent to be a React component.");var p=[],T=void 0,m=function(e){function t(){return o(this,t),s(this,e.apply(this,arguments))}return a(t,e),t.peek=function(){return T},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=T;return T=void 0,p=[],e},t.prototype.shouldComponentUpdate=function(e){return!(0,f.default)(e,this.props)},t.prototype.componentWillMount=function(){p.push(this),d()},t.prototype.componentDidUpdate=function(){d()},t.prototype.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),d()},t.prototype.render=function(){return u.default.createElement(l,this.props)},t}(i.Component);return m.displayName="SideEffect("+r(l)+")",m.canUseDOM=c.default.canUseDOM,m}}},"./node_modules/shallowequal/index.js":function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var s=Object.keys(e),a=Object.keys(t);if(s.length!==a.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(t),u=0;u<s.length;u++){var l=s[u];if(!i(l))return!1;var c=e[l],d=t[l];if(o=n?n.call(r,c,d,l):void 0,o===!1||void 0===o&&c!==d)return!1}return!0}},"./src/layouts/components/hambuger.css":function(e,t){},"./src/layouts/components/header.css":function(e,t){},"./src/layouts/components/navigation.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n("./node_modules/react/react.js"),s=r(o),a=n("./node_modules/gatsby-link/index.js"),i=r(a);n("./src/layouts/components/hambuger.css"),n("./src/layouts/components/header.css");var u=n("./src/styles/constants.js"),l=["publications","teaching","education","CV"],c=function(e){function t(){r.focus(),r.classList.toggle("hide"),o.classList.toggle("open")}var n=e.children,r=null,o=null;return s.default.createElement("nav",{className:"navbar"},s.default.createElement("div",{className:"main-menu"},s.default.createElement("div",null,n),s.default.createElement("div",{id:"navIcon",ref:function(e){o=e},onClick:t},s.default.createElement("span",null),s.default.createElement("span",null),s.default.createElement("span",null),s.default.createElement("span",null))),s.default.createElement("div",{className:"navbar-links"},s.default.createElement("ul",{className:"nav hide",ref:function(e){r=e}},l.map(function(e){return s.default.createElement("li",{key:e},s.default.createElement(i.default,{to:e,style:{color:u.colors.black,textDecoration:"none",fontFamily:u.headerFont},onClick:t},e))}))))};t.default=c,e.exports=t.default},"./src/layouts/index.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n("./node_modules/react/react.js"),s=r(o),a=n("./node_modules/prop-types/index.js"),i=r(a),u=n("./src/layouts/components/navigation.js"),l=r(u),c=n("./node_modules/react-helmet/lib/Helmet.js"),d=r(c),f=n("./node_modules/gatsby-link/index.js"),p=r(f),T=n("./src/styles/constants.js");n("./src/styles/reset-style.css");var m=function(){return s.default.createElement("div",{style:{background:"white",marginBottom:"1.45rem",borderBottom:"1px gray solid"}},s.default.createElement("div",{style:{display:"flex",margin:"0 auto",maxWidth:960,padding:"0.5rem 1rem"}},s.default.createElement(l.default,null,s.default.createElement("h1",{style:{margin:0,alignSelf:"center"}},s.default.createElement(p.default,{to:"/",style:{color:T.colors.black,textDecoration:"none"}},"Helena Martins")))))},E=function(){return s.default.createElement("div",{style:{background:"white"}},s.default.createElement("div",{style:{display:"flex",justifyContent:"flex-end",margin:"0 auto",maxWidth:960,padding:"1rem 1rem"}},"."))},b=function(e){var t=e.children;return s.default.createElement("div",null,s.default.createElement(d.default,{title:"H. Martins",meta:[{name:"description",content:"Helena Martins Website"},{name:"keywords",content:"doctor, statistics, mathematics"}]}),s.default.createElement(m,null),s.default.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t()),s.default.createElement(E,null))};b.propTypes={children:i.default.func},t.default=b,e.exports=t.default},"./src/styles/constants.js":function(e,t){"use strict";t.__esModule=!0;t.colors={black:"#444"},t.headerFont="News Cycle"},"./src/styles/reset-style.css":function(e,t){}});
//# sourceMappingURL=component---src-layouts-index-js-c8963833f7085f80f1c2.js.map