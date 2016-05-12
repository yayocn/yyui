'use strict';

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;

      if ('value' in descriptor)
        descriptor.writable = true;

      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

/**
 * ------------------------------------------------------------------
 * yy-ui (v1.0.0)
 * name: alert.js
 * version: 1.0.0
 * refer: Bootstrap v4.0.0 alert.js
 * ------------------------------------------------------------------
 */

var Alert = (function($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var DATA_KEY = 'yyui.alert';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var ANIMATION = true;
  var ANIMATION_TYPE = 'fade'; // fade, slide
  var ANIMATION_DURATION = 500;

  var Selector = {
    DISMISS: '[data-dismiss="alert"]'
  };

  var Event = {
    CLOSE: 'close' + EVENT_KEY,
    CLOSED: 'closed' + EVENT_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    ALERT: 'alert',
  };

  /**
   * --------------------------------------------------------------------
   * Class definition
   * --------------------------------------------------------------------
   */

  var Alert = (function() {
    // Constructor
    function Alert(element) {
      _classCallCheck(this, Alert);

      this._element = element;
    }

    /**
     * ----------------------------------------------------------------
     * Data api implementation
     * ----------------------------------------------------------------
     */

    _createClass(Alert, [{
      key: 'close',
      value: function close(element) {
        element = element || this._element;

        var rootElement = this._getRootElement(element);

        this._removeElement(rootElement);
      }
    }, {
      key: '_getRootElement',
      value: function _getRootElement(element) {
        var parent = $(element).closest('.' + ClassName.ALERT)[0];

        return parent;
      }
    }, {
      key: '_removeElement',
      value: function _removeElement(element) {
        var self = this;
        if(ANIMATION) {
          Util.setAnimateHideForTarget(element, ANIMATION_TYPE, ANIMATION_DURATION);
          setTimeout(function() {
            self._destroyElement(element);
          }, ANIMATION_DURATION);
          return;
        }

        this._destroyElement(element);
      }
    }, {
      key: '_destroyElement',
      value: function _destroyElement(element) {
        $(element).detach().remove();
      }
    }], [{
      key: '_handleDismiss',
      value: function _handleDismiss(instance) {
        return function(event) {
          if(event) {
            event.preventDefault();
          }

          instance.close(this);
        };
      }
    }]);

    return Alert;
  })();

  $(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));

  return Alert;
})(jQuery);