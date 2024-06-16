function toggleDisplay(elementId) {
  // Get the element by its ID
  const element = document.getElementById(elementId);

  // Check if the element exists to avoid errors
  if (!element) {
    console.error('Element not found');
    return;
  }

  // Check if the data-default-display-value attribute exists
  if (!element.hasAttribute('data-default-display-value')) {
    // If it doesn't exist, create it with the current display value or an empty string
    const currentDisplay = getComputedStyle(element).display;
    const attributeValue = currentDisplay === 'none' ? '' : currentDisplay;
    element.setAttribute('data-default-display-value', attributeValue);
  }

  // Toggle the display value
  if (element.style.display !== 'none') {
    // If the display is not 'none', change it to 'none'
    element.style.display = 'none';
  } else {
    // If the display is 'none', revert to the original display value or remove the display property
    const originalDisplay = element.getAttribute('data-default-display-value');
    if (originalDisplay === '') {
      element.style.removeProperty('display');
    } else {
      element.style.display = originalDisplay;
    }
  }
}

/*
Example:

window.onload = function() {
    const element = document.querySelector("#myElement");
    if (element) {
        toggleDisplay('elementID');
    }
};

OnClick Example: 

document.querySelector("#myButton").addEventListener("click", function() {
    const element = document.querySelector("#myElement");
    if (element) {
        toggleDisplay('elementID');
    }
});

*/