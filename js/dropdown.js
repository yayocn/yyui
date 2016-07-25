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
 * name: dropdown.js
 * version: 1.0.0
 * refer: Bootstrap v4.0.0 dropdown.js
 * --------------------------------------------------------------------------
 */

var Dropdown = (function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var DATA_KEY = 'yyui.dropdown';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var ANIMATE = true;
  var ANIMATE_TYPE = 'slide'; // fade, slide
  var ANIMATE_DURATION = 200;

  var Event = {
    CLICK: 'click' + EVENT_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,
    MOUSEENTER_DATA_API: 'mouseenter' + EVENT_KEY + DATA_API_KEY,
    MOUSELEAVE_DATA_API: 'mouseleave' + EVENT_KEY + DATA_API_KEY
  }

  var ClassName = {
    DISABLED: 'disabled',
    ACTIVE: 'active'
  }

  var Selector = {
    DATA_TOGGLE: '.dropdown-toggle,[data-toggle="dropdown"]',
    DATA_TOGGLE_HOVER: '.dropdown-toggle-hover',
    DROPDOWN_WRAPPER: '.dropdown',
    DROPDOWN_MENU: '.dropdown-menu',
  }

  /**
   * -----------------------------------------
   * Class definition
   * -----------------------------------------
   */

  var Dropdown = (function() {
    // Constructor
    function Dropdown(element) {
      _classCallCheck(this, Dropdown);

      this._element = element;
    }

    /**
     * ---------------------------------------
     * Data api implementation
     * ---------------------------------------
     */

    _createClass(Dropdown, [{
      key: 'toggle',
      value: function toggle() {
        if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
          return false;
        }

        var parent = Dropdown._getParentFromElement(this);
        var isACTIVE = $(parent).hasClass(ClassName.ACTIVE);

        // close the other dropdown
        Dropdown._clearMenus();

        this.focus();

        if(ANIMATE && !isACTIVE) {
          Util.setAnimateToggleForTarget($(this).nextAll(Selector.DROPDOWN_MENU)[0], ANIMATE_TYPE, ANIMATE_DURATION);
          $(parent).addClass(ClassName.ACTIVE);
        }

        return false;
      }
    }], [{
      key: '_getParentFromElement',
      value: function _getParentFromElement(element) {
        var parent = undefined;
        var selector = Util.getSelectorFromElement(element);

        if(selector) {
          parent = $(selector)[0];
        }

        return parent || element.parentNode;
      }
    },  {
      key: '_clearMenus',
      value: function _clearMenus(event) {
        // right mouse button
        if (event && event.which === 3) {
          return;
        }

        var toggles = $.makeArray($(Selector.DATA_TOGGLE));

        for (var i = 0; i < toggles.length; i++) {
          if(ANIMATE) {
            $(toggles[i]).nextAll('.dropdown-menu').slideUp(ANIMATE_DURATION);

            var _parent = Dropdown._getParentFromElement(toggles[i]);
            if ($(_parent).hasClass(ClassName.ACTIVE)) {
              $(_parent).removeClass(ClassName.ACTIVE);
            }
            continue;
          }

          // click the blank space
          if (event && event.type === 'click' && /input|textarea/i.test(event.target.tagName) && $.contains(_parent, event.target)) {
            continue;
          }


        }
      }
    }]);

    return Dropdown;
  })();

  $(document).on(Event.CLICK_DATA_API, Dropdown._clearMenus)
    .on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, Dropdown.prototype.toggle)
    .on(Event.MOUSEENTER_DATA_API, Selector.DATA_TOGGLE_HOVER, Dropdown.prototype.toggle);

  return Dropdown;
})(jQuery);