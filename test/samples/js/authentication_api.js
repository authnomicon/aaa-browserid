/**
 * Uncompressed source can be found at:
 *    https://login.persona.org/authentication_api.orig.js
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function(){function a(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var b="[\\?&]"+a+"=([^&#]*)",c=new RegExp(b),d=c.exec(window.location.href);return d==null?"":decodeURIComponent(d[1].replace(/\+/g," "))}"use strict",navigator.id||(navigator.id={});if(!navigator.id.beginAuthentication||navigator.id._primaryAPIIsShimmed){navigator.id.beginAuthentication=function(b){if(typeof b!="function")throw".beginAuthentication() requires a callback argument";var c=a("email");setTimeout(function(){b(c)},0)};var b="https://login.persona.org";!!navigator.mozId&&navigator.userAgent.indexOf("(Mobile;")>-1&&(b="https://firefoxos.login.persona.org"),navigator.id.completeAuthentication=function(a){window.location=b+"/sign_in?AUTH_RETURN"},navigator.id.raiseAuthenticationFailure=function(a){window.location=b+"/sign_in?AUTH_RETURN_CANCEL"},navigator.id._primaryAPIIsShimmed=!0}})()