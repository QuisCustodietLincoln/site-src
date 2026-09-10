# Quis Custodiet Nebraska - Nebraska ALPR Transparency Project

A public interest project tracking requests filed under the Nebraska Public Records Act to document how local and state agencies in Nebraska acquire, operate, and oversee automated license plate reader (ALPR) systems.

**Live site:** https://quiscustodietlincoln.github.io

---

## Contributing

### Add a public records request

If you've filed a request with a Nebraska agency related to ALPR/LPR surveillance technology, open a PR adding an entry to [`_data/requests.json`](_data/requests.json):

```json
{
  "agency": "Full agency name",
  "agencyType": "City | County | State | Federal",
  "jurisdiction": "City/County, NE",
  "dateFiled": "YYYY-MM-DD",
  "status": "Pending",
  "muckrockUrl": "https://www.muckrock.com/foi/...",
  "notes": ""
}
```

Valid `status` values: `Pending`, `Acknowledged`, `Partial Response`, `Complete`, `Appealed`, `Overdue`, `No Records`

Include a link to the MuckRock request page if one exists. If you filed directly with the agency (not via MuckRock), leave `muckrockUrl` empty and add context in `notes`.

---

### Add a released document

If an agency has released records in response to a request, open a PR adding an entry to [`_data/documents.json`](_data/documents.json):

```json
{
  "agency": "Full agency name",
  "title": "Descriptive title of the document",
  "type": "Policy | Contract | Report | Correspondence | Invoice | Other",
  "dateReceived": "YYYY-MM-DD",
  "description": "One sentence describing what this document contains.",
  "fileUrl": "https://..."
}
```

For `fileUrl`, link to the document on MuckRock, a government website, or another permanent host. If you want to host it in this repo for archival permanence, place the file in [`documents/files/`](documents/files/) and set `fileUrl` to `/documents/files/your-filename.pdf`.

---

### Update a request status

As requests progress, open a PR updating the `status` field (and any other changed fields) for the relevant entry in `_data/requests.json`.

---

## Local development

```bash
npm install
npm run serve   # builds and watches at http://localhost:8080
```

Requires Node 18+.

---

## Scope

This project focuses on **ALPR/LPR surveillance technology** in **Nebraska**. Requests targeting any Nebraska jurisdictions ALPR surveillance technologies are welcome.
