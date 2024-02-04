// Enable Bootstrap tooltips
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// Form feedback alert with jQuery
$(document).ready(function () {
  $("#submit").on("click", function () {
    alert(
      "Hemos recibido su mensaje.\nNos pondremos en contacto con usted a la brevedad."
    );
  });
});
