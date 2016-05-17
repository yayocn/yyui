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
 * name: tab.js
 * version: 1.0.0
 * refer: Bootstrap v4.0.0 tab.js
 * --------------------------------------------------------------------------
 */

var Tab = (function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var DATA_KEY = 'yyui.tab';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var ANIMATION = true;
  var ANIAMTION_TYPE = 'fade';
  var ANIMATION_DURATION = 200;

  var Event = {
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active',
  };

  var Selector = {
    A: 'a',
    LI: 'li',
    DROPDOWN: '.dropdown',
    UL: 'ul:not(.dropdown-menu)',
    ACTIVE: '.active',
    ACTIVE_CHILD: '> li > .active, > .active',
    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
    DROPDOWN_TOGGLE: '.dropdown-toggle',
    DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tab = (function () {
    function Tab(element) {
      _classCallCheck(this, Tab);

      this._element = element;
    }

    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    _createClass(Tab, [{
      key: 'show',
      value: function show(element) {
        element = element || this._element;

        if (element.parentNode && element.parentNode.nodeType === Node.ELEMENT_NODE && $(element).hasClass(ClassName.ACTIVE)) {
          return;
        }

        var previous = undefined;
        var ulElement = $(element).closest(Selector.UL)[0];
        var selector = Util.getSelectorFromElement(element);

        if (ulElement) {
          previous = $.makeArray($(ulElement).find(Selector.ACTIVE));
          previous = previous[previous.length - 1];
        }

        Tab._hide(previous, selector);

        $(element).closest('li').addClass('active');
      }
    }], [{
      key: '_hide',
      value: function _hide(element, target) {
        $(element).removeClass('active');
        var anchor = $(element).find('a')[0];
        var selector = Util.getSelectorFromElement(anchor);
        Util.setAnimateHideForTarget(selector, ANIAMTION_TYPE, ANIMATION_DURATION, function() {
          Util.setAnimateShowForTarget(target, ANIAMTION_TYPE, ANIMATION_DURATION)
        });
      }
    }, {
      key: '_handleTab',
      value: function _handleTab(instance) {
        return function(event) {
          if(event) {
            event.preventDefault();
          }

          instance.show(this);
        };
      }
    }]);

    return Tab;
  })();

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, Tab._handleTab(new Tab()));

  return Tab;
})(jQuery);
