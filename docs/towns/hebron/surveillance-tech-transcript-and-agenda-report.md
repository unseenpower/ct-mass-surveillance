# Surveillance-tech report: Hebron


## At a glance: Hebron

This report collects every mention of surveillance technology found in **Hebron**'s recorded public meetings -- automatically transcribed, then keyword-scanned. Each mention below links straight to the moment in the source video, so anything here can be checked against the recording itself.

- **1 mention** across **1 meeting**
- **First mention:** 2026-04-23  |  **Most recent:** 2026-04-23
- **Technologies discussed:** drone
- **Coverage:** 56 of 153 known Hebron meetings transcribed (37%)
- **Not the full history:** transcripts begin **2024-01-04**, but Hebron's published video archive goes back to **2019-10-03**. Meetings before 2024 are not yet transcribed, so this report cannot say what was discussed then. Older meetings are still being added.


Start with [Timeline](#timeline) to read the discussion in order, or [Findings by topic](#findings-by-topic) to jump to one technology.


> Mentions are found by keyword and are **not** individually verified. A mention means the words were spoken at a public meeting -- not that the town uses, bought, or approved the technology. Read the quote and watch the clip before drawing a conclusion.


## Contents

- [Get the full transcripts](#get-the-full-transcripts)
- [Mentions by topic: first seen / most recent](#mentions-by-topic-first-seen--most-recent)
- [Timeline](#timeline)
- [Findings by topic](#findings-by-topic)
- [Agenda/minutes mentions (unreviewed -- live keyword scan, no human review queue yet)](#agendaminutes-mentions-unreviewed----live-keyword-scan-no-human-review-queue-yet)
- [How this report was built](#how-this-report-was-built)
  - [Coverage status](#coverage-status)
  - [Registered meeting bodies](#registered-meeting-bodies)
  - [Agenda/minutes coverage](#agendaminutes-coverage)
  - [Research log](#research-log)
  - [Gaps and caveats](#gaps-and-caveats)


## Get the full transcripts

**[Download Hebron's meeting transcripts (.zip)](https://github.com/unseenpower/ct-mass-surveillance/releases/download/transcript-archives-2026-08/hebron-meeting-transcripts.zip)**


Every finding in this report is a keyword match against exactly these files. Download them to check a quote in its full context, or to search for something this report's keyword list does not cover.


**What's inside:** one plain-text `.txt` file per meeting, named `<date>_<video-id>_<meeting-title>.txt`, plus a `MANIFEST.txt` giving the date range and how much of the town's video archive is transcribed.


**How to use it**

```bash
unzip hebron-meeting-transcripts.zip -d hebron
cd hebron

# every meeting that mentions a term, with the surrounding line
grep -rin "license plate" .

# just the meeting dates, from the filenames
grep -ril "flock" . | sort
```


The filename's leading date is the meeting date, so a hit tells you which meeting to watch. Find that meeting in the [Timeline](#timeline) below for a direct, timestamped link to that moment in the video.


> These are **machine-generated captions**, not certified minutes. Expect mis-heard names and technical terms, and quote the video rather than the transcript when accuracy matters.


## Mentions by topic: first seen / most recent

| topic | mentions | meetings | first_seen | most_recent |
| --- | --- | --- | --- | --- |
| drone | 1 | 1 | 2026-04-23 | 2026-04-23 |


## Timeline

1 meetings surfaced a finding (1 dated, spanning 2026-04-23 to 2026-04-23; 0 of unknown date, listed last).


### 2026-04-23 -- Town Council

**Hebron Town Council - April 23, 2026** _(topics: drone)_

- `drone` [▸](https://www.youtube.com/watch?v=xdhPAVh3pdw&t=4209s)  > ...I did go down there at one more I did go down there and flew and flew my drone because you really need to see this site. That's the salt shed....


## Findings by topic


### ai_data_fusion

*(no findings)*


### alpr

*(no findings)*


### biometrics_other

*(no findings)*


### body_camera

*(no findings)*


### cad

*(no findings)*


### cell_site_sim

*(no findings)*


### data_broker

*(no findings)*


### doorbell_partnership

*(no findings)*


### drone

- **[2026-04-23] Town Council** -- Hebron Town Council - April 23, 2026
  > ...I did go down there at one more I did go down there and flew and flew my drone because you really need to see this site. That's the salt shed....
  [Watch on YouTube ▸](https://www.youtube.com/watch?v=xdhPAVh3pdw&t=4209s)  _(term: drone, unreviewed)_


### facial_recognition

*(no findings)*


### gunshot_detection

*(no findings)*


### mobile_forensics

*(no findings)*


### osint_social_monitor

*(no findings)*


### predictive_policing

*(no findings)*


### purchasing_broker

*(no findings)*


### rtcc

*(no findings)*


### surveillance_general

*(no findings)*


### undercover_tools

*(no findings)*


### vehicle_forensics

*(no findings)*


### video_analytics

*(no findings)*


## Agenda/minutes mentions (unreviewed -- live keyword scan, no human review queue yet)


### ai_data_fusion

*(no mentions)*


### alpr

*(no mentions)*


### biometrics_other

*(no mentions)*


### body_camera

*(no mentions)*


### cad

*(no mentions)*


### cell_site_sim

*(no mentions)*


### data_broker

*(no mentions)*


### doorbell_partnership

*(no mentions)*


### drone

*(no mentions)*


### facial_recognition

*(no mentions)*


### gunshot_detection

*(no mentions)*


### mobile_forensics

*(no mentions)*


### osint_social_monitor

*(no mentions)*


### predictive_policing

*(no mentions)*


### purchasing_broker

*(no mentions)*


### rtcc

*(no mentions)*


### surveillance_general

*(no mentions)*


### undercover_tools

*(no mentions)*


### vehicle_forensics

*(no mentions)*


### video_analytics

*(no mentions)*


## How this report was built


_Everything below describes the corpus and its limits, rather than what was found in it._


### Why the counts rose on 2026-08-31

Mention counts in this report increased on 2026-08-31, and that is a **correction, not new activity**. Until then the scanner matched keywords against individual caption cues, which average about 33 characters, so a phrase split across two cues -- "license plate" ending one and "reader" starting the next -- matched neither. It missed roughly a quarter of the meetings containing "license plate reader" and about half the mentions of some other terms. The meetings were always in the record; the scanner could not see the phrase. Fixed in [#70](https://github.com/unseenpower/ct-surveillance-transcripts/pull/70); every term was then rescanned across the whole corpus.


## Coverage status

- Channels registered: 1
- Active meeting bodies: 3
- Videos registered: 153 (fetched: 56, no captions: 2)
- Date range covered: 2019-10-03 to 2026-08-20 (all 153 videos dated)


### Channels

| display_name | channel_id | handle |
| --- | --- | --- |
| Community Voice Channel (CVC) | cvc | @communityvoicechannel |


### Tab crawl history

| channel_id | tab | last_crawled_at | video_count |
| --- | --- | --- | --- |
| cvc | videos | 2026-08-31 14:14:27.674814 | 2025 |


## Registered meeting bodies

| body_name | category | active | video_count |
| --- | --- | --- | --- |
| Board of Finance | budget_finance | True | 11 |
| Board of Selectmen | other | True | 128 |
| Town Council | other | True | 14 |


## Agenda/minutes coverage

- Agenda sources registered: 1
- Documents registered: 0 (fetched: 0)
- Date range covered: *no agenda document on file carries a parseable date yet*


### Agenda sources

| source_id | platform | base_url | status |
| --- | --- | --- | --- |
| hebron_custom | custom | https://hebronct.com/agendas/ | unconfirmed |


## Research log

| logged_at | field_name | new_value | source | by |
| --- | --- | --- | --- | --- |
| 2026-08-27 13:59:59.979529 | agenda_platform_partial | hebronct.com/agendas/ is a custom "Codenroll"-built site, not a recognized AgendaCenter/CivicClerk/Granicus/PrimeGov vendor -- exact document URL scheme not confirmed. | WebFetch of hebronct.com and hebronct.com/agendas/, 2026-08-27 | claude |
| 2026-08-27 13:59:59.979529 | channel_found | cvc (Community Voice Channel) -- already registered under Bolton's name in a previous batch. Discovered as relevant to Hebron while researching Ellington (also this batch, same channel listed on Ellington's .gov site but rejected there for zero real content) -- checked Hebron independently and confirmed real government-meeting coverage. | re-crawl of youtube.com/channel/UC7IKRS0lXdkbT4FMX2Dp0lQ (/videos + /streams), 2026-08-27 | claude |
| 2026-08-27 13:59:59.979529 | governance_transition_found | Real title corpus shows Hebron's governing body renamed from "Board of Selectmen" (every meeting through Dec 2025) to "Town Council" (every meeting from Jan 2026 onward) -- both registered as distinct real bodies. hebronct.com's own boards page still lists only "Board of Selectmen", likely not yet updated. | yt-dlp --flat-playlist crawl of the cvc corpus + chronological title inspection, 2026-08-27 | claude |
| 2026-08-27 13:59:59.979529 | leak_check_vs_bolton | Confirmed zero leaks in both directions: Hebron's 3 anchored patterns match none of Bolton's 314 anchored titles; Bolton's 6 existing anchored patterns match none of Hebron's 172 anchored titles. | Python leak-check script against the full 2022-title cvc corpus, 2026-08-27 | claude |
| 2026-08-27 13:59:59.979529 | patterns_validated_from_real_titles | 153/172 Hebron-anchored titles matched at least one body (89.0%) -- the 19 unmatched are ceremonial/community content (Maple Festival, Make Music Day, Summer Concert Series, Farmers/Market Day, Lions Lights in Motion, a Historical Society talk). | Python pattern validation against the anchored subset, 2026-08-27 | claude |


## Gaps and caveats


### Videos with no captions available (2 shown, max 25)

| title | upload_date |
| --- | --- |
| Hebron Budget Meeting: March 26, 2024 | 2024-03-26 |
| Hebron Budget: March 19, 2024 | 2024-03-19 |


### Tabs never crawled

| channel | tab |
| --- | --- |
| Community Voice Channel (CVC) | streams |


---


_Generated 2026-08-31T14:39:38 -- regenerate with `.venv/bin/python3 analysis/generate_surveillance_report.py --town "Hebron"`_

