// The "Questions? Feedback?" button on every page links to feedback/ with
// ?from=<that page>. Fill that page into the email subject and the GitHub
// issue forms so nobody has to say which page they mean. Only links back into
// this site are accepted. Runs on every instant-navigation page load.
(function () {
  var SITE = "https://unseenpower.github.io/ct-mass-surveillance/";

  function fill() {
    var mail = document.getElementById("fb-email");
    if (!mail) return;
    var from = new URLSearchParams(location.search).get("from");
    if (!from || from.indexOf(SITE) !== 0) return;
    var path = from.slice(SITE.length - 1);
    var e = encodeURIComponent;

    var p = document.querySelector(".fb-from");
    var a = document.getElementById("fb-from-link");
    if (p && a) { a.href = from; a.textContent = path; p.hidden = false; }

    mail.href = "mailto:flockoff.io@proton.me?subject=" +
      e("CT Mass Surveillance site: " + path) +
      "&body=" + e("About this page: " + from + "\n\n");
    ["question", "correction", "suggestion"].forEach(function (id) {
      var l = document.getElementById("fb-" + id);
      if (l && l.href.indexOf("&page=") < 0) l.href += "&page=" + e(from);
    });
  }

  if (window.document$) window.document$.subscribe(fill);
  else document.addEventListener("DOMContentLoaded", fill);
})();
