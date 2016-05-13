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
 * --------------------------------------------------------------------------
 * yy-ui (v1.0.0)
 * name: collapse.js
 * version: 1.0.0
 * refer: Bootstrap v4.0.0 collapse.js
 * --------------------------------------------------------------------------
 */

var Collapse = (function($) {

  /**
   * ------------------------------------------------------------------------
   * Constans
   * ------------------------------------------------------------------------
   */

  var DATA_KEY = 'yyui.collapse';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var ANIMATE_DURATION = 200;

  var Event = {
    CLICK: 'click' + EVENT_KEY + DATA_API_KEY
  }

  var ClassName = {
    IN: 'in',
    COLLAPSE: 'collapse'
  }

  var Selector = {
    DATA_TOGGLE: '[data-toggle="collapse"]'
  }

  /**
   * ------------------------------------------------------------------------
   * Class definition
   * ------------------------------------------------------------------------
   */

  var Collapse = (function() {
    // Constructor
    function Collapse(element) {
      _classCallCheck(this, Collapse);

      this._element = element;
    }

    /**
     * ---------------------------------------
     * Data api implementation
     * ---------------------------------------
     */

    _createClass(Collapse, [{
      key: 'toggle',
      value: function toggle() {
        var target = Util.getTargetFromElement(this);

        if($(target).hasClass('in')) {
          Collapse._hide(target);
          setTimeout(function() {
            $(target).removeClass('in');
          }, ANIMATE_DURATION)
        } else {
          $(target).addClass('in');
          Collapse._show(target);
        }
      }
    }], [{
      key: '_show',
      value: function _show(element) {

        var height = $(element)[0].scrollHeight;
        if(element) {
          this.transitionHeight(element, {"height": height + 'px'});
        }
      }
    }, {
      key: '_hide',
      value: function _hide(element) {
        if(element) {
          this.transitionHeight(element, {"height": '0px'});
        }
      }
    }, {
      key: 'transitionHeight',
      value: function transitionHeight(target, endStatus) {
        $(target).animate(endStatus, ANIMATE_DURATION);
      }
    }]);

    return Collapse;
  })();

  $(document).on(Event.CLICK, Selector.DATA_TOGGLE, Collapse.prototype.toggle);

  return Collapse;
})(jQuery);