# ALPR Nebraska — Nebraska ALPR Transparency Project

An independent public-interest archive tracking public records requests and released documents on how Nebraska governmental agencies acquire, operate, and oversee automated license plate reader (ALPR) systems.

**Live site:** https://alprnebraska.org

---

## Contributing

See [the contributing page](https://alprnebraska.org/contributing/) for the full guide, or use the pull request template that loads automatically when you open a PR.

### Add a public records request

Add an entry to [`_data/requests.json`](_data/requests.json). The `requestId` is assigned by the project editor in `QCN-NE-YYYY-NNN` format — leave it blank if submitting for review, and the editor will assign one before merging.

```json
{
  "requestId": "QCN-NE-2026-005",
  "agency": "Full agency name",
  "agencyType": "City | County | State | Federal",
  "jurisdiction": "City/County, NE",
  "dateFiled": "YYYY-MM-DD",
  "status": "Filed",
  "muckrockUrl": "https://www.muckrock.com/foi/...",
  "notes": ""
}
```

Valid `status` values: `Filed`, `Pending`, `Clarification / narrowing requested`, `Extension / estimate received`, `Partial production`, `Completed`, `Denied / partially denied`, `Appealed / challenged`

To add a **timeline entry** for a request (e.g. an agency response event), append to the `timeline` array in the same entry:

```json
"timeline": [
  {
    "date": "YYYY-MM-DD",
    "note": "Plain-language description of what happened."
  }
]
```

The section only appears on the folder page when there are entries.

---

### Add a released document

Documents are organized by request ID. Each request has a folder under `documents/`:

```
documents/
└── QCN-NE-2026-001/
    ├── index.md                          ← request metadata (already exists)
    ├── 2026-09-22-agency-filename.pdf    ← the released file
    └── 2026-09-22-agency-filename.md     ← metadata for that file
```

**Step 1** — Drop the PDF (or other file) into the correct `documents/QCN-NE-YYYY-NNN/` folder.

**Step 2** — Create a matching `.md` metadata file alongside it. The two required frontmatter fields `layout` and `tags` wire it into the site's document collection:

```markdown
---
title: Descriptive title of the document
layout: document-sidecar.njk
tags: releasedDocument
source_agency: Full agency name
received_date: YYYY-MM-DD
document_date: YYYY-MM-DD
request_id: QCN-NE-2026-001
source_type: Public-records production | Policy | Annual report | Correspondence | Other
original_filename: original-name-from-agency.pdf
sha256: "<hash>"
redactions: "Agency-applied redactions preserved" | "None apparent"
---
```

Optional fields (include only when applicable): `signatory`, `sender`, `sender_title`, `public_information_officer`, `statutes_cited_by_agency` (array), `topics` (array).

The `.md` filename determines the PDF URL — the site expects a `.pdf` with the same base name in the same folder.

**Step 3** — Update the `status` field for that request in `_data/requests.json`.

---

### Update a request status

Edit the relevant entry in [`_data/requests.json`](_data/requests.json) and update `status` (and any other changed fields such as `notes`).

---

### Add or update an agency profile

Agency profiles live in [`_data/agencies.json`](_data/agencies.json). Each entry supports these fields:

```json
{
  "name": "Full agency name",
  "slug": "url-slug",
  "jurisdiction": "City/County/State",
  "governmentLevel": "Municipal | County | State | Federal",
  "alprStatus": "Records requested | Reported use | No confirmation yet",
  "currentPolicy": "https://... or null",
  "privacyPolicy": "https://... or null",
  "annualReports": [{ "label": "2024", "url": "https://..." }],
  "knownVendors": ["Axon", "Flock"],
  "knownProgramStart": "2021 or null",
  "requestIds": ["QCN-NE-2026-001"],
  "links": [
    { "label": "Link label", "url": "https://..." }
  ],
  "lastReviewed": "YYYY-MM-DD",
  "openQuestions": ["Question one?", "Question two?"]
}
```

Only include `knownVendors` and `knownProgramStart` when supported by a primary-source document. The `links` array is for publicly available resources related to the agency's ALPR program (policy pages, transparency portals, statutory reports, etc.). The "Public Resources" section only appears on the agency profile when the array is non-empty.

---

## Local development

```bash
npm install
npm run serve   # builds and watches at http://localhost:8080
npm run build   # one-time build to _site/
```

Requires Node 18+. Built with [Eleventy](https://www.11ty.dev/) 3.x.

---

## Scope

ALPR/LPR surveillance technology at Nebraska governmental agencies. Requests targeting any Nebraska jurisdiction are welcome. See the [About page](https://alprnebraska.org/about/) for full in-scope/out-of-scope criteria and editorial policy.
