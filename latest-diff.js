(async function () {
    const link = document.getElementById("latest-diff");

    if (!link) {
        return;
    }

    try {
        const response = await fetch(
            "https://api.github.com/repos/theinfobots/networkluki.github.io/commits?sha=main&per_page=1"
        );

        if (!response.ok) {
            return;
        }

        const commits = await response.json();

        if (!Array.isArray(commits) || commits.length === 0) {
            return;
        }

        link.href = commits[0].html_url;
    } catch {
        // Keep fallback link.
    }
})();
