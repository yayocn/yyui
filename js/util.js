'use strict';

/**
 * --------------------------------------------------------------------------
 * yy-ui (v1.0.0): dropdown.js
 * Refer: Bootstrap v4.0.0 dropdown.js
 * --------------------------------------------------------------------------
 */

var Util = (function ($) {

  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */

  var Util = {
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
    }
  };

  return Util;
})(jQuery);
