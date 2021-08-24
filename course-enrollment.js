/******************* Course add/drop JS */

// Copy course add/drop alerts into an Aria alert.
var puAlertSpan = document.querySelector('span[id^="DERIVED_SASSMSG"]');
if (puAlertSpan != null) {
	let ariaContainer = document.createElement('div');
	ariaContainer.setAttribute("id", "puAria");
	ariaContainer.setAttribute("aria-live", "assertive");
	puAlertSpan.after(ariaContainer);
  setTimeout( function() {
    ariaContainer.append(puAlertSpan);
  }, 1500);
}



// Announce course add/drop current step.
var puCourseStepAriaFix = document.querySelector('a[id^="DERIVED_REGFRM1_STEP"]');
if (puCourseStepAriaFix != null) {
	puCourseStepAriaFix.setAttribute("aria-current","true");
}


// Clear positive tabindices
var puTabIndexFix = document.querySelectorAll('[tabindex]');
if (puTabIndexFix != null && puTabIndexFix.length > 0) {
	for (let i = 0; i < puTabIndexFix.length; i++) {
	  let myIndex = puTabIndexFix[i].getAttribute('tabindex');
	  if (myIndex !== "-1") {
	  	puTabIndexFix[i].setAttribute('tabindex','0');
	  }
	}
}

