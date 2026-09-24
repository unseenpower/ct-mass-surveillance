// Open a department's search dashboard over the page instead of leaving it.
//
// Dashboards are standalone pages (docs/analysis/towns/*-alpr-searches.html),
// so following a link used to strand the reader with no way back but the
// browser. Any link to one -- a town report's card or button, an index card --
// now opens it in a full-window modal with Close (and Esc). On a phone, or with
// a modifier key (new tab, new window), the link behaves normally, and every
// dashboard also carries its own back links for anyone who lands on it direct.
(function () {
  if (window.__dashModal) return;          // instant navigation re-runs nothing,
  window.__dashModal = true;               // but be safe if it ever does
  var DASH = /-alpr-searches\.html(?:#.*)?$/;

  function close(box, opener) {
    box.remove();
    document.documentElement.classList.remove("dash-modal-open");
    document.removeEventListener("keydown", box._onKey, true);
    if (opener && opener.focus) opener.focus();
  }

  function open(url, title, opener) {
    var box = document.createElement("div");
    box.className = "dash-modal";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.setAttribute("aria-label", title);
    box.innerHTML =
      '<div class="dash-modal__box">' +
      '<div class="dash-modal__bar"><span class="dash-modal__title"></span>' +
      '<a class="dash-modal__full" target="_blank" rel="noopener">Open full page &#8599;</a>' +
      '<button type="button" class="dash-modal__close">Close &#10005;</button></div>' +
      '<iframe class="dash-modal__frame"></iframe></div>';
    box.querySelector(".dash-modal__title").textContent = title;
    box.querySelector(".dash-modal__full").href = url;
    var frame = box.querySelector("iframe");
    frame.title = title;
    // Same-origin, so once it loads the dashboard's own title ("West
    // Hartford's ALPR search record") replaces the guess made from the link.
    frame.addEventListener("load", function () {
      try {
        var t = frame.contentDocument && frame.contentDocument.title;
        if (t) { box.querySelector(".dash-modal__title").textContent = t; frame.title = t; }
      } catch (err) { /* keep the guess */ }
    });
    frame.src = url;
    box.querySelector(".dash-modal__close").addEventListener("click", function () { close(box, opener); });
    box.addEventListener("click", function (e) { if (e.target === box) close(box, opener); });
    box._onKey = function (e) { if (e.key === "Escape") { e.preventDefault(); close(box, opener); } };
    document.addEventListener("keydown", box._onKey, true);
    document.documentElement.classList.add("dash-modal-open");
    document.body.appendChild(box);
    box.querySelector(".dash-modal__close").focus();
  }

  function titleFor(a) {
    var name = a.querySelector(".tc-name");
    if (name) return name.textContent.trim() + " — search dashboard";
    var t = (a.textContent || "").replace(/\s+/g, " ").trim();
    return t.length > 3 && t.length < 90 ? t : "Search dashboard";
  }

  // Capture phase, so this runs before Material's instant navigation tries to
  // fetch the dashboard as if it were a site page.
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[href]");
    if (!a || !DASH.test(a.getAttribute("href"))) return;
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (window.matchMedia("(max-width: 700px)").matches) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    open(a.href, titleFor(a), a);
  }, true);
})();
