/* eslint-disable */
var jumpToCode = (function init () {
  // Classes of code we would like to highlight
  var missingCoverageClasses = [ '.cbranch-no', '.cstat-no', '.fstat-no' ];

  // Selecter that finds elements on the page to which we can jump
  var selector = missingCoverageClasses.join(', ');

  // The NodeList of matching elements
  var missingCoverageElements = document.querySelectorAll(selector);

  // Group of NodeList which has same class
  var groups = {};
  for (var i = 0, l = missingCoverageElements.length; i < l; i++) {
    var node = missingCoverageElements[i];
    var className = node.className;
    if (groups[className] === undefined) {
      groups[className] = [];
    }
    groups[className].push(node);
  }

  // Convert NodeList to Array
  var missingCoverageGroups = Object.keys(groups).map(function(className) {
    return groups[className];
  });

  var currentIndex;

  function toggleClass(index) {
    if (currentIndex === undefined) {
      currentIndex = 0;
    }
    missingCoverageGroups[currentIndex].map(function(node) {
      return node.classList.remove('highlighted');
    });
    missingCoverageGroups[index].map(function(node) {
      return node.classList.add('highlighted');
    });
  }

  function makeCurrent(index) {
    toggleClass(index);
    currentIndex = index;
    missingCoverageGroups[index][0]
      .scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
  }

  function goToPrevious() {
    var nextIndex = 0;
    if (typeof currentIndex !== 'number' || currentIndex === 0) {
      nextIndex = missingCoverageGroups.length - 1;
    } else if (missingCoverageGroups.length > 1) {
      nextIndex = currentIndex - 1;
    }

    makeCurrent(nextIndex);
  }

  function goToNext() {
    var nextIndex = 0;

    if (typeof currentIndex === 'number' && currentIndex < (missingCoverageGroups.length - 1)) {
      nextIndex = currentIndex + 1;
    }

    makeCurrent(nextIndex);
  }

  return function jump(event) {
    switch (event.which) {
      case 78: // n
      case 74: // j
        goToNext();
        break;
      case 66: // b
      case 75: // k
      case 80: // p
        goToPrevious();
        break;
    }
  };
}());
window.addEventListener('keydown', jumpToCode);