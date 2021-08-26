// Creates a valid page title from likely markup on Classic pages.
// Works on most but not all pages. Needs hardcoding for academic planning form.

var puNewTitle = "";

// Look for a page title span.
var puPageTitleClass = document.querySelector('.PAPAGETITLE');
if (puPageTitleClass != null) {
  let puPageTitleClassText = puPageTitleClass.textContent;
  if (puPageTitleClassText && puPageTitleClassText.length > 0) {
    // trim
    puPageTitleClassText = puPageTitleClassText.replace(/^\s+|\s+$/g, "");
  }
  puNewTitle += puPageTitleClassText;
}

// Look for a transaction title span
var puTransactionTitle = document.querySelector('.PATRANSACTIONTITLE');
if (puTransactionTitle != null) {
  let puTransactionTitletext = puTransactionTitle.textContent;
  if (puTransactionTitletext && puTransactionTitletext.length > 0) {
    // trim
    puTransactionTitletext = puTransactionTitletext.replace(/^\s+|\s+$/g, "");
  }
  puNewTitle += (puNewTitle.length > 0) ? " / " + puTransactionTitletext : puTransactionTitletext;
}

// If we found either, set the page title and politely speak the title.
if (puNewTitle.length > 5) {
  window.top.document.title = puNewTitle + " / TigerHub";
  let ariaContainer = document.createElement('div');
  ariaContainer.setAttribute("id", "puAriaTitle");
  ariaContainer.setAttribute("aria-live", "polite");
  ariaContainer.setAttribute("style","z-index: -1; width:1px; height: 1px; overflow:hidden;")
  document.body.append(ariaContainer);
  setTimeout( function() {
    ariaContainer.append(puNewTitle);
  }, 1500);
}