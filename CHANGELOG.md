Changelog

All notable changes to this project will be documented in this file.

[Unreleased]

Added

- Added Content Security Policy metadata to the homepage, 404 page, and version page.
- Added strict referrer policy metadata to reduce cross-origin referrer leakage.
- Added a dedicated version.js script for loading recent GitHub commits.

Changed

- Moved recent-commit rendering out of inline HTML and into a local script file.
- Updated the web app manifest with site-specific app names, colors, display mode, and icon paths.
- Removed the unused Font Awesome CDN stylesheet from the homepage.
- Reset the homepage body margin so the centered layout fills the viewport consistently.

Fixed

- Prevented GitHub commit messages from being inserted as HTML on the version page.
- Added timeout handling and response validation for the GitHub commits request.
- Added fallback handling for missing commit messages and invalid commit dates.
- Corrected manifest icon paths so they point to existing assets.

[1.0.0] - 2026-06-24

Added

- Initial release.
- Added project files.
- Added README documentation.
- Added CONTRIBUTING.md.
- Added version.html

Changed

- Improved project structure.
- Refactor HTML structure and styling in version.html
- Enhance version.html with CSS styles
- Improve commits loading with error handling
- Implement recent changes section with GitHub commits

Fixed

- Correct homepage link
