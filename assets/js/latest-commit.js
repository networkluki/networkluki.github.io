// Update the footer link to point at the repository's latest commit.
// Falls back silently to the hardcoded link already in the HTML if the
// request fails (offline, GitHub API rate limit of 60 req/h per IP, etc.).
// External file so it complies with a strict CSP (script-src 'self').
// Requires the CSP to allow the API host via: connect-src https://api.github.com
(function () {
	"use strict";

	var el = document.getElementById("latest-diff");
	if (!el || !window.fetch) { return; }

	var OWNER = "networkluki";
	var REPO = "networkluki.github.io";
	var api = "https://api.github.com/repos/" + OWNER + "/" + REPO + "/commits?per_page=1";

	fetch(api, { headers: { "Accept": "application/vnd.github+json" } })
		.then(function (res) { return res.ok ? res.json() : Promise.reject(res.status); })
		.then(function (data) {
			if (!Array.isArray(data) || data.length === 0) { return; }
			var sha = data[0] && data[0].sha;
			// Accept only a real 40-char hex SHA before touching the DOM.
			if (typeof sha !== "string" || !/^[0-9a-f]{40}$/.test(sha)) { return; }
			// textContent (never innerHTML) keeps this injection-safe.
			el.textContent = "version#" + sha.slice(0, 7);
			el.setAttribute("href",
				"https://github.com/" + OWNER + "/" + REPO + "/commit/" + sha);
		})
		.catch(function () { /* keep the hardcoded fallback link */ });
})();
