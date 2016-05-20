'use strict';

/**
 * --------------------------------------------------------------------------
 * yy-ui (v1.0.0): dropdown.js
 * Refer: Bootstrap v4.0.0 dropdown.js
 * --------------------------------------------------------------------------
 */

var Util = (function ($) {

  var transition = false;

  var TransitionEndEvent = {
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'transitionend',
    OTransition: 'oTransitionEnd otransitionend',
    transition: 'transitionend'
  };

  function getSpecialTransitionEndEvent() {
    return {
      bindType: transition.end,
      delegateType: transition.end,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments);
        }
      }
    };
  }

  function transitionEndTest() {
    if (window.QUnit) {
      return false;
    }

    var el = document.createElement('yyui');

    for (var _name in TransitionEndEvent) {
      if (el.style[_name] !== undefined) {
        return { end: TransitionEndEvent[_name] };
      }
    }

    return false;
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;

    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });

    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);

    return this;
  }

  function setTransitionEndSupport() {
    transition = transitionEndTest();

    $.fn.emulateTransitionEnd = transitionEndEmulator;

    if (Util.supportsTransitionEnd()) {
      $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
    }
  }

  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */

  var Util = {
    TRANSITION_END: 'transitionEnd',

    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector) {
        selector = element.getAttribute('href') || '';
        selector = /^#[a-z]/i.test(selector) ? selector : null;
      }

      return selector;
    },

    setAnimateToggleForTarget: function setAnimateToggleForTarget(target, type, duration, callback) {
      type = type || 'slide';
      duration = duration || 'fast';

      switch (type) {
        case 'slide':
          $(target).slideToggle(duration, callback);
          break;
        case 'fade':
          $(target).fadeToggle(duration, callback);
          break;
      }
    },

    setAnimateShowForTarget: function setAnimateShowForTarget(target, type, duration, callback) {
      type = type || 'slide';
      duration = duration || 'fast';

      switch (type) {
        case 'slide':
          $(target).slideUp(duration, callback);
          break;
        case 'fade':
          $(target).fadeIn(duration, callback);
          break;
      }
    },

    setAnimateHideForTarget: function setAnimateHideForTarget(target, type, duration, callback) {
      type = type || 'slide';
      duration = duration || 'fast';

      switch (type) {
        case 'slide':
          $(target).slideDown(duration, callback);
          break;
        case 'fade':
          $(target).fadeOut(duration, callback);
          break;
      }
    },

    reflow: function reflow(element) {
      new Function('yyui', 'return yyui')(element.offsetHeight);
    },

    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(transition.end);
    },

    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(transition);
    },
  };

  setTransitionEndSupport();
  return Util;
})(jQuery);
