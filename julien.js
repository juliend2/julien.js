window.julien = (function(doc) {

  _createWhenVisibleAt = function(percentage) {
    return function(element, callback) {
      let observer;

      let options = {
        root: null, // parent of visibility is the document
        rootMargin: "0px",
        threshold: percentage,
      };

      observer = new IntersectionObserver(callback, options);
      observer.observe(element);
    }
  }

  // When it's 100% visible:
  function whenFullyVisible(element, callback) {
    _createWhenVisibleAt(1.0)(element, callback);
  }

  // When it starts to look visible:
  function whenVisible(element, callback) {
    _createWhenVisibleAt(0.1)(element, callback);
  }

  return {
    whenFullyVisible,
    whenVisible,
  }
})( document );

