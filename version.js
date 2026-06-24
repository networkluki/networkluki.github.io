(function () {
  const commitsBox = document.getElementById("commits");
  const commitsUrl =
    "https://api.github.com/repos/networkluki/networkluki.github.io/commits?per_page=10";
  const fetchTimeoutMs = 5000;

  function renderCommit(message, date) {
    const commit = document.createElement("div");
    const title = document.createElement("strong");
    const lineBreak = document.createElement("br");
    const dateText = document.createElement("span");

    commit.className = "commit";
    dateText.className = "date";
    title.textContent = message;
    dateText.textContent = date;

    commit.append(title, lineBreak, dateText);
    commitsBox.append(commit);
  }

  function renderFallback() {
    commitsBox.replaceChildren();
    renderCommit(
      "Recent changes could not be loaded right now.",
      "GitHub API rate limit may have been reached.",
    );
  }

  function formatDate(value) {
    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      return "unknown date";
    }

    return date.toLocaleDateString("sv-SE");
  }

  if (!commitsBox) {
    return;
  }

  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), fetchTimeoutMs);

  fetch(commitsUrl, { signal: controller.signal })
    .then((response) => {
      if (!response.ok) {
        throw new Error("GitHub API rate limit or request error");
      }

      return response.json();
    })
    .then((commits) => {
      if (!Array.isArray(commits)) {
        throw new Error("Unexpected GitHub API response");
      }

      commitsBox.replaceChildren();

      commits.forEach((item) => {
        const message = item?.commit?.message || "Untitled commit";
        const date = formatDate(item?.commit?.author?.date);

        renderCommit(message, date);
      });
    })
    .catch(renderFallback)
    .finally(() => window.clearTimeout(timeout));
})();
