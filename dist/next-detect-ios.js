(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var USER_AGENT = global.navigator.userAgent;
  var IPHONE_RE = /iPhone/i;
  var IPOD_RE = /iPod/i;
  var IPAD_RE = /iPad/i;
  var WINDOWS_RE = /Windows Phone|IEMobile|WPDesktop/i;
  var OS_RE = 'OS ';
  var UNDER ='_';
  var DOT = '.';
  var BLANK = ' ';

  var NxDetectIos = nx.declare('nx.DetectIos', {
    statics: {
      isIphone: function () {
        return IPHONE_RE.test(USER_AGENT) && !NxDetectIos.iPad() && !WINDOWS_RE.test(USER_AGENT);
      },
      isIpod: function () {
        return IPOD_RE.test(USER_AGENT);
      },
      isIpad: function () {
        return IPAD_RE.test(USER_AGENT);
      },
      isIos: function () {
        return (NxDetectIos.iPad() || NxDetectIos.iPod() || NxDetectIos.iPhone());
      },
      version: function () {
        var splitUserAgent = USER_AGENT.split(OS_RE);
        if (splitUserAgent.length > 1) {
          var unformattedVersion = splitUserAgent[1].split(BLANK)[0];
          return unformattedVersion.split(UNDER).join(DOT);
        }
        return null;
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxDetectIos;
  }

}());
