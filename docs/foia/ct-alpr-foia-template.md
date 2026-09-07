# Connecticut ALPR FOIA request — a template you can send to your own town

A fill-in-the-blanks Freedom of Information Act request covering **both** automatic
license plate reader systems a Connecticut police department is likely to be running:
the **Flock Safety** network everybody knows about, and the **Axon** in-car ALPR system
most towns have never mentioned in public.

This is assembled from two real requests made to the West Hartford Police Department —
a Flock audit-log request sent August 11, 2026, and an Axon request drafted September 1,
2026 after West Hartford's second, undisclosed ALPR system turned up on a public Axon
transparency portal. Everything specific to West Hartford has been replaced with a
`[BRACKETED PLACEHOLDER]`.

Nothing here is legal advice. It is a starting document that has been through a real
records division and survived.

---

## Why two vendors

Most Connecticut ALPR coverage — press, council debate, policy — is about Flock. But
Axon sells license plate recognition as a software feature on the in-car camera systems
departments already own, and switching it on takes an administrator, not a council vote.
As of September 1, 2026, **twelve Connecticut agencies publish a live Axon ALPR
transparency portal**, and not one of them discloses who it shares that data with.

If you ask only about Flock, a department can answer completely and truthfully and you
will still not know how many cameras are photographing your street.

---

## Before you send: about 20 minutes of homework

Fill these five things in and the rest of the letter writes itself.

**1. Where the request goes.** Find the records division email on your town's police
department page — usually `PDRecords@<town>ct.gov` or similar. Cc'ing the Town
Corporation Counsel puts the town's lawyer on notice from day one; it can also slow
routing. Your call.

**2. Which vendors your department actually uses.**

- **Flock** — check `https://transparency.flocksafety.com/<town>-ct-pd`
  (e.g. `west-hartford-ct-pd`). Many towns publish one; the slug is commonly the
  hyphenated town name plus `-ct-pd`, but it is worth trying variants. Also check
  [deflock.org](https://deflock.org) for mapped cameras.
- **Axon** — check `https://<sub>.evidence.com/alpr/public/policy`, where `<sub>` is
  the agency's Axon Evidence subdomain, commonly `<city>pd<state>` — e.g.
  `westhartfordpd`, `torringtonpdct`, `manchesterpd`. Agencies pick their own
  subdomain, so try variants. See the [known CT portals](#appendix-known-live-ct-axon-alpr-portals-as-of-2026-09-01)
  below.

**3. Screenshot the portal the day you write.** Both portals refresh daily and the
numbers move. West Hartford's Axon portal reported 39 ALPR-equipped vehicles on August
31, 2026 and 32 on September 1 — same fleet, different rolling count. Cite the date you
observed, never "the number of cameras."

> **A missing portal is not an absence of cameras.** Portal discovery is guess-and-verify.
> Connecticut State Police is a documented Axon Fleet customer with no ALPR portal at all,
> and large agencies can run Axon on-premises with no `evidence.com` tenant. Treat "I
> couldn't find one" as "not found," and ask the question in the letter anyway.

**4. Your department's ALPR policy.** Most CT departments have one, often modeled on the
POST-C model LPR policy. Look for a numbered general order (West Hartford's is PRD 11.9).
If your town uses PowerDMS to host policies, the public viewer usually has a raw-PDF link
behind it. **The policy is the most valuable thing you can find before writing**, because
it tells you what records the department has already promised to create — audits,
declarations, logs. Asking for a record a department's own policy requires it to keep is
much harder to refuse than asking for one it merely might have.

**5. The go-live date.** If you know when the system was switched on, say so. If you
don't, the letter below asks them to identify it — which is itself a useful answer.

---

## How to use the template

- Replace everything in `[BRACKETS]`.
- **Flock only?** Send Sections A, C, D, and G.
- **Axon only?** Send Sections B, C, D, and G.
- **Both, or not sure?** Send the whole thing. Section B costs you nothing if the answer
  is "no such system," and "no responsive records" is a citable fact.
- **Section E** only applies if your department has floated a bundled vendor proposal
  (real-time crime center, drone-as-first-responder, fixed LPR). Cut it if not.
- **Keep the severability and rolling-production language.** It is the specific thing
  that makes "this request is overbroad" a harder answer to give.

---

# The request

> Copy from here down. Delete the section headers that don't apply, then renumber.

**To:** `[PDRecords@<town>ct.gov]`
**Cc (optional):** `[Corporation Counsel]`, `[Chief of Police]`, `[Town Manager]`
**Subject:** FOIA Request — Automatic License Plate Reader records and audits

---

Dear Records Supervisor,

Pursuant to the Connecticut Freedom of Information Act, Conn. Gen. Stat. §§ 1-200 *et
seq.*, and specifically § 1-210(a), I request copies of the records described below. I am
a `[TOWN]` resident.

`[OPTIONAL — WHY YOU ARE WRITING. Two or three sentences. If you found an undisclosed
system, name it and give the URL and the date you observed it. Example:]`

> On `[DATE]`, `[BODY, e.g. the Public Safety Committee]` received a presentation
> describing the Department's license plate reader program as a Flock Safety program of
> `[N]` cameras. The Department also operates a second automatic license plate reader
> system, supplied by Axon Enterprise, Inc. Axon publishes a transparency portal for it at
> `[https://<sub>.evidence.com/alpr/public/policy]`. On `[DATE]` that portal reported
> `[N]` ALPR-equipped vehicles and `[N]` license plate reads retained, at a `[N]`-day
> retention setting. I could not locate any reference to this system in the Department's
> published ALPR policy, on the Town's website, or in the Town's meeting records.

I have tried to make each item independently answerable so that you can produce records on
a rolling basis rather than waiting for the whole request. **Where a category is
voluminous, I would rather receive it in installments than have the request delayed**, and
I am glad to narrow any item — please contact me before denying anything as overbroad.

Unless otherwise noted, the period covered is `[START DATE — either the system go-live
date, or January 1, 2020]` to the present.

---

## A. Flock Safety ALPR platform — audit log exports

Covering `[GO-LIVE DATE — or: the date of the Department's Flock go-live, which I ask you
to identify in your response if it is not otherwise readily available]` through the date
this request is processed.

**A1. Organization Audit Log** — the record of every search the Department's own personnel
have run against the Flock network (plate, location, or vehicle-fingerprint searches),
including but not limited to full reason text, case number, searching officer/account, and
timestamp.

**A2. Network Audit Log** — the record of every search any other agency has run that
touched the Department's shared camera network: including but not limited to searching
agency/org name, reason and reason-category text, case-number field, and timestamp.

**A3. System / Administrative Audit Log** — Flock's platform-level activity log of account
and configuration changes, distinct from search activity. Specifically, but not limited to:

  a. User account and role changes (accounts created or deactivated, role/permission changes);
  b. Camera device history (cameras added, removed, relocated, or taken offline, with dates);
  c. **Network data-sharing history** — every instance of the Department's network being
     shared with, or access granted to or revoked from, another agency, with the date of
     each grant and each revocation;
  d. Hotlist creation, modification, and deletion history;
  e. Any edit history to the transparency-report content itself.

Sub-items (a)–(e) are severable — if any one is withheld or delayed, please still produce
the others rather than holding the whole log. **Item (c) is the priority item in this
request** — if the full log cannot be produced at once, please produce (c) first.

---

## B. Axon ALPR system — acquisition, authorization, and operation

**B1.** All contracts, agreements, amendments, addenda, renewals, statements of work, order
forms, quotes, purchase orders, and invoices between the Town of `[TOWN]` or its Police
Department and **Axon Enterprise, Inc.** (including any predecessor or subsidiary such as
TASER International, Fusus, or Dedrone), including all attachments and exhibits.

**B2.** From the records in B1, specifically any document that adds, enables, licenses,
prices, or describes **automatic license plate recognition (ALPR)**, "ALPR as a service,"
Axon Fleet ALPR, Axon Outpost, or any license plate reading capability.

**B3.** Records sufficient to show **the date on which ALPR functionality was first
enabled** on the Department's Axon Fleet in-car camera system, and **the name and title of
the person who authorized it**.

**B4.** Any written approval, requisition, budget transfer, council or committee
authorization, or Town Manager approval relied upon to acquire or activate the Axon ALPR
capability.

**B5.** Records sufficient to show **the annual and total cost** of the Axon ALPR
capability, broken out from other Axon products, for each fiscal year in which it has been
incurred.

**B6.** Any **grant application, award, or reporting document** — including any State
body-worn camera or dash camera grant under Public Act 20-1, and any ARPA-funded request —
in which Axon in-car camera or ALPR equipment was included.

**B7.** Records sufficient to show, **for each of the last 24 months**, the number of Axon
ALPR-equipped vehicles in service and the number of license plate reads collected.

**B8.** `[IF THE PORTAL FIGURE MOVED:]` An explanation of **what the "vehicles" figure on
the transparency portal counts** — total ALPR-equipped vehicles, vehicles active in a given
period, or something else. The published figure changed from `[N]` to `[N]` between
`[DATE]` and `[DATE]`, and I would like to understand what that reflects.

**B9.** The current **Axon Evidence / Fusus configuration settings** for the ALPR system,
specifically: read retention period, hit retention period, **audit-log retention period**,
the list of enabled hotlist / offense-alert categories, and the list of users or roles with
ALPR search permissions.

**B10.** Records sufficient to show which **hotlists** the Axon ALPR system is subscribed
to or queries, including any federal, state, regional, or commercial hotlist, and the
number of hits generated by category for the last 12 months.

**B11.** Any **training materials, standard operating procedures, user guides, or internal
memoranda** governing use of the Axon ALPR system, as distinct from any other ALPR system.

---

## C. Audits — every ALPR system the Department operates

`[IF YOUR DEPARTMENT'S POLICY REQUIRES AUDITS, CITE IT HERE. Example:]`

> `[TOWN]` Police `[POLICY NUMBER]`, *Automated License Plate Reader Systems* (effective
> `[DATE]`), § `[X]` requires the ALPR Administrator to perform a `[quarterly]` audit of
> the Department's ALPR system, and § `[Y]` requires regular audits reviewing query logs.

**C1. All ALPR audits, audit memoranda, audit findings, and any resulting corrective
action**, for every ALPR system the Department operates, from the first such audit to the
present.

**C2.** The underlying **ALPR audit report exports** from the Axon system covering the last
12 months. I understand the Axon ALPR audit exports in blocks of no more than 31 days;
**please provide 12 consecutive monthly exports.**

  I further understand that the columns included in an Axon audit export are **selected by
  the operator at the time of export**. Please export **all available columns**, including
  at minimum: date and time of query, user name and badge/ID, agency, query type, plate or
  search term queried, **search reason entered**, case number, camera or device queried,
  networks or agencies searched, and result count.

**C3.** The equivalent **Flock Safety audit / search history export** for the last 12
months, with all available columns, including search reason and case number.

**C4.** Records sufficient to show **who receives** each completed ALPR audit — whether any
copy is provided to the Town Manager, Town Council, or any public safety committee.

---

## D. Data sharing and outside access

`[IF YOUR POLICY GOVERNS OUT-OF-STATE SHARING, CITE IT. Example:]`

> `[POLICY NUMBER]` § `[X]` permits out-of-state sharing only after a written declaration
> from the receiving agency, and § `[Y]` requires the requesting agency to accept the
> POST-C model policy terms.

**D1.** A **list of every agency, entity, or organization** that has access to, or has
received, ALPR data collected by the Department — broken out separately for each vendor
system.

**D2. All written declarations or affirmations** obtained from out-of-state law enforcement
agencies pursuant to `[POLICY CITE]` and Conn. Gen. Stat. § 54-155b.

**D3.** Any **memorandum of understanding, data-sharing agreement, or interagency
agreement** governing the sharing of ALPR data, including with any fusion center, task
force, or federal agency.

**D4.** Records of any **request from a federal agency** — including U.S. Immigration and
Customs Enforcement, Customs and Border Protection, or the FBI — for ALPR data, and the
Department's response.

**D5.** Any record showing whether the Axon ALPR system's **"data sharing disclosure"
metric** was ever enabled on the transparency portal, and any decision, direction, or
communication concerning which metrics to publish or withhold on that portal.

**D6.** Any internal guidance or records showing Department compliance with Connecticut law
restricting the sharing of location and personal data with federal agencies without a
judicial warrant.

---

## E. `[OPTIONAL]` Pending bundled vendor proposal

`[USE THIS SECTION IF YOUR DEPARTMENT HAS PRESENTED OR DISCUSSED A BUNDLED PACKAGE —
real-time crime center software, drone-as-first-responder docks, fixed LPR cameras, body
camera refresh. Describe what was presented and when.]`

**E1. The presentation slide deck** shown at `[MEETING, DATE]`, and any handout,
memorandum, or briefing document prepared for it. `[If the filed agenda packet contains no
deck, say so — it makes the absence part of the record.]`

**E2.** All **quotes, proposals, pricing sheets, and term sheets** received from `[VENDOR]`
for that bundled package or any component of it.

**E3.** All **correspondence** (including email) between Department or Town staff and
`[VENDOR]`, or any reseller, concerning that proposal, from `[DATE]` to the present.

**E4.** Records sufficient to show the **current status** of that proposal — whether it has
been accepted, declined, deferred, or remains under negotiation — and any anticipated
approval route.

**E5.** Any analysis, memorandum, or correspondence concerning **funding** the package,
including any reliance on automated traffic enforcement revenue.

---

## F. `[OPTIONAL]` Intelligence center / real-time crime center

**F1.** Records sufficient to show the **establishment, staffing, budget, and technology**
of the Department's `[intelligence center / real-time crime center]`, including which
camera systems, databases, and analytic software it can access.

**F2.** Any policy, general order, or standard operating procedure governing its operation
and its access to ALPR data.

---

## G. Public disclosure and total count

**G1.** Any communication concerning **whether to publish, link, or publicize** any ALPR
transparency portal on the Town or Department website, including any decision not to.

**G2.** Records sufficient to show the Department's **total count of automatic license
plate readers by vendor** — fixed and vehicle-mounted — as of the date this request is
processed.

---

## Format, fees, and handling

**Format.** Please provide records electronically, by email or download link, in their
**native or original electronic format** where they exist electronically — spreadsheets as
**CSV**, not XLSX, PDF, or paper printouts. Conn. Gen. Stat. § 1-211 addresses
computer-stored records. Both vendors' export functions produce CSV directly, and I am
requesting the full, unedited exports from the tool itself. Please note that legacy Excel
format has a hard 65,535-row cap that silently truncates large exports with no error —
please do not convert to XLSX before sending. Producing the audit exports as data rather
than as images will reduce your cost and my copying fees to zero. I am glad to accept the
data in monthly or period batches as it is exported, rather than waiting for one combined
production, if that is easier to process.

**Fees.** If you anticipate a cost, please provide an itemized estimate before proceeding,
consistent with Conn. Gen. Stat. § 1-212. As this is a request for data the systems export
on their own, I expect any cost to be de minimis.

`[OPTIONAL — FEE WAIVER:]` I request a waiver of fees under Conn. Gen. Stat.
§ 1-212(d)(3), on the ground that compliance benefits the general welfare. These records
concern the operation of a surveillance system that collects information about residents
who are not suspected of any crime. I intend to make what I receive publicly available at
no charge. If you decline the waiver, please tell me the estimated cost before incurring
it, and note that electronic delivery avoids the per-page copying charge.

**Exemptions.** If you withhold any record or portion of a record, I ask that you:

- **redact rather than withhold the entire record**, and produce the remainder, as
  § 1-210(a) requires;
- identify each record withheld, and cite the **specific subsection** of § 1-210(b) relied
  upon and the specific field or record it is applied to, rather than a blanket citation;
  and
- note that Conn. Gen. Stat. § 1-210(b)(3) protects law enforcement records **not otherwise
  available to the public** compiled in connection with the detection or investigation of
  crime. Aggregate audit logs, system configuration, contracts, and vendor correspondence
  are administrative records and are not exempt on that basis. Several Connecticut
  municipalities — including Farmington, Waterford, Manchester, Windsor, and Darien — have
  released ALPR search audit records of the kind sought above.

**Timing.** Conn. Gen. Stat. § 1-206(a) provides that a failure to comply within four
business days of receipt is deemed a denial. I am not asking for everything within four
business days — only for an acknowledgment and, if possible, an estimated production
schedule.

I am happy to discuss scope, prioritization, or format at any point, and would rather talk
than litigate. Please treat items `[PICK 3–4 NUMBERS]` as my highest priorities if you need
to sequence the work.

Thank you for your time.

Sincerely,

`[NAME]`
`[ADDRESS]`
`[EMAIL]` | `[PHONE]`

---

# Why the letter is built this way

Notes for the sender. Not part of the request.

**Severability is the whole trick.** A long request is easy to refuse as a single
overbroad unit. Saying explicitly that sub-items are severable, that you will take rolling
production, and that you would rather narrow than be denied removes the easiest reason to
say no — and makes a blanket denial look like a choice rather than a necessity.

**Ask for a format, and say why.** "CSV, not XLSX" sounds fussy until you have received a
65,535-row spreadsheet that ends mid-2024 with no error message. Naming the failure mode
in the letter is what stops it.

**Name the columns.** Axon's own administrator documentation coaches agencies to trim
columns before sharing an export externally. That is why C2 enumerates them. If a narrow
export comes back anyway, that itself is the next story.

**Ask about the toggle, not just the data.** D5 asks whether the sharing-disclosure metric
was ever enabled on the portal. None of the twelve live Connecticut Axon portals publish it.
Someone chose that in a console. There may be no record — and "no responsive records" to
that question is a useful, quotable answer.

**Anchor to their own policy.** Every item in Section C exists because a department policy
already requires the audit. You are not asking them to create anything; you are asking for
a record they have promised the public they keep. If it does not exist, that is the finding.

**Pick your priorities and say so.** Records divisions sequence work. Telling them which
four items matter most gets you the useful material months before the rest.

**Expect the first answer to be partial.** West Hartford's January 2026 request came back
with contract and installation material and simply did not address the sharing questions.
That is normal. The follow-up, narrowed to the specific log and the specific field, is the
one that works.

---

## Appendix: known live CT Axon ALPR portals, as of 2026-09-01

Twelve Connecticut agencies published a live Axon ALPR transparency portal on this date.
The page is a JavaScript app — open it in a browser. Figures move daily; these are one
day's snapshot, not an inventory.

| Agency | Portal | Reads retained | Devices | Read retention (days) |
|---|---|---:|---:|---:|
| Torrington PD | `torringtonpdct.evidence.com` | 940,150 | 23 | 60 |
| West Hartford PD | `westhartfordpd.evidence.com` | 795,474 | 32 | 21 |
| New London PD | `newlondonpdct.evidence.com` | 614,437 | 21 | 21 |
| Manchester PD | `manchesterpd.evidence.com` | 591,424 | 39 | 21 |
| Wallingford PD | `wallingfordpdct.evidence.com` | 452,571 | 23 | 21 |
| Darien PD | `darienpdct.evidence.com` | 309,717 | 15 | 21 |
| Cheshire PD | `cheshirepdct.evidence.com` | 236,614 | 14 | 30 |
| East Windsor PD | `eastwindsorpdct.evidence.com` | 220,375 | 10 | 30 |
| North Branford PD | `northbranfordpd.evidence.com` | 166,109 | 10 | 30 |
| Plymouth PD | `plymouthpdct.evidence.com` | 7,445 | 5 | 21 |
| Fairfield PD | `fairfieldpdct.evidence.com` | *withheld* | 67 (31 fixed) | 21 |
| New Britain PD | `newbritainpdct.evidence.com` | *withheld* | *withheld* | *withheld* |

Portal path: `https://<subdomain>/alpr/public/policy`

**None of the twelve publish the data-sharing disclosure metric.** A withheld metric is an
absent value, not a zero — the portal has per-metric toggles, and an agency that publishes
nothing has switched that metric off rather than reported none.

Connecticut has 169 towns but only **93 municipal police departments** — the rest are
policed by State Police resident troopers. Measure coverage against 93, not 169.

---

## Statutory quick reference

| Cite | What it gives you |
|---|---|
| § 1-200 *et seq.* | The Connecticut FOI Act |
| § 1-210(a) | Right of access; **redact rather than withhold** the whole record |
| § 1-210(b)(3) | The law-enforcement exemption — limited to records *not otherwise available to the public*, compiled for detection or investigation of crime |
| § 1-211 | Computer-stored records — supports asking for native electronic format |
| § 1-212 | Fees; itemized estimate before you incur cost |
| § 1-212(d)(3) | Fee waiver where compliance benefits the general welfare |
| § 1-206(a) | Failure to comply within **four business days** is deemed a denial |
| § 54-155b | Restrictions on out-of-state ALPR data sharing |

If a request is denied, the appeal goes to the **Freedom of Information Commission**
(portal.ct.gov/FOI), which hears complaints without a lawyer and without a filing fee.
