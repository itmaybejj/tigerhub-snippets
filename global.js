/******************* Global JS */

// Tabbed navigation: fix invalid role so current tab is announced.
var puTabRoleFix = document.querySelectorAll('#PSTAB a[role*="tab"]');
if (puTabRoleFix != null && puTabRoleFix.length > 0) {
	for (let i = 0; i < puTabRoleFix.length; i++) {
	  puTabRoleFix[i].setAttribute('role','tab');
	}
}
