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
    getTargetFromElement: function getTargetFromElement(element) {
      var target = element.getAttribute('data-target');

      if (!target) {
        target = element.getAttribute('href') || '';
        target = /^#[a-z]/i.test(target) ? target : null;
      }

      return target;
    },
    setAnimateToggleForTarget: function setAnimateToggleForTarget(target, type, duration) {
      type = type || 'slide';
      duration = duration || 'fast';

      switch (type) {
        case 'slide':
          $(target).slideToggle(duration);
          break;
        case 'fade':
          $(target).fadeToggle(duration);
          break;
      }
    },
    setAnimateShowForTarget: function setAnimateShowForTarget(target, type, duration) {
      type = type || 'slide';
      duration = duration || 'fast';

      switch (type) {
        case 'slide':
          $(target).slideUp(duration);
          break;
        case 'fade':
          $(target).fadeIn(duration);
          break;
      }
    },
    setAnimateHideForTarget: function setAnimateHideForTarget(target, type, duration) {
      type = type || 'slide';
      duration = duration || 'fast';

      switch (type) {
        case 'slide':
          $(target).slideDown(duration);
          break;
        case 'fade':
          $(target).fadeOut(duration);
          break;
      }
    }
  };

  return Util;
})(jQuery);
