(function () {
    const pathEl = document.getElementById("path");
    const refEl  = document.getElementById("ref");

    if (pathEl) {
        pathEl.textContent = window.location.pathname;
    }

    if (refEl) {
        refEl.textContent = document.referrer
            ? document.referrer
            : "direct / none";
    }
})();
