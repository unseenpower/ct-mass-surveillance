# Surveillance-tech report: Lyme


## At a glance: Lyme

This report collects every mention of surveillance technology found in **Lyme**'s recorded public meetings -- automatically transcribed, then keyword-scanned. Each mention below links straight to the moment in the source video, so anything here can be checked against the recording itself.

- **2 mentions** across **2 meetings**
- **First mention:** 2021-08-05  |  **Most recent:** 2021-10-07
- **Technologies discussed:** drone
- **Coverage:** 74 of 99 known Lyme meetings transcribed (75%)
- **Still incomplete:** 25 known meetings are not yet transcribed, so an absence here is not proof a topic never came up.


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

**[Download Lyme's meeting transcripts (.zip)](https://github.com/unseenpower/ct-mass-surveillance/releases/download/transcript-archives-2026-08/lyme-meeting-transcripts.zip)**


Every finding in this report is a keyword match against exactly these files. Download them to check a quote in its full context, or to search for something this report's keyword list does not cover.


**What's inside:** one plain-text `.txt` file per meeting, named `<date>_<video-id>_<meeting-title>.txt`, plus a `MANIFEST.txt` giving the date range and how much of the town's video archive is transcribed.


**How to use it**

```bash
unzip lyme-meeting-transcripts.zip -d lyme
cd lyme

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
| drone | 2 | 2 | 2021-08-05 | 2021-10-07 |


## Timeline

2 meetings surfaced a finding (2 dated, spanning 2021-08-05 to 2021-10-07; 0 of unknown date, listed last).


### 2021-08-05 -- Region 18 Board of Education

**BOE Meeting Aug 4** _(topics: drone)_

- `drone` [▸](https://www.youtube.com/watch?v=K-Ye6yg8D6g&t=3890s)  > ...fabric so that'll be the finished height will be around with a drone a little bit just to show you so this picture the center is where...


### 2021-10-07 -- Region 18 Board of Education

**Oct 6th BOE Meeting** _(topics: drone)_

- `drone` [▸](https://www.youtube.com/watch?v=cpChtUrfyoo&t=271s)  > ...projects wlym morning news broadcasts ping pong club drone lessons and even being a member of our in-district mentoring program for students...


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

- **[2021-10-07] Region 18 Board of Education** -- Oct 6th BOE Meeting
  > ...projects wlym morning news broadcasts ping pong club drone lessons and even being a member of our in-district mentoring program for students...
  [Watch on YouTube ▸](https://www.youtube.com/watch?v=cpChtUrfyoo&t=271s)  _(term: drone, unreviewed)_

- **[2021-08-05] Region 18 Board of Education** -- BOE Meeting Aug 4
  > ...fabric so that'll be the finished height will be around with a drone a little bit just to show you so this picture the center is where...
  [Watch on YouTube ▸](https://www.youtube.com/watch?v=K-Ye6yg8D6g&t=3890s)  _(term: drone, unreviewed)_


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
- Active meeting bodies: 4
- Videos registered: 99 (fetched: 74, no captions: 1)
- Date range covered: 2021-01-12 to 2026-08-05 (all 99 videos dated)


### Channels

| display_name | channel_id | handle |
| --- | --- | --- |
| Lyme-Old Lyme Board Of Education Region18 | region18_boe | @lyme-oldlymeboardofeducati5234 |


### Tab crawl history

| channel_id | tab | last_crawled_at | video_count |
| --- | --- | --- | --- |
| region18_boe | streams | 2026-08-31 14:11:51.413077 | 120 |
| region18_boe | videos | 2026-08-31 14:11:52.102287 | 1 |


## Registered meeting bodies

| body_name | category | active | video_count |
| --- | --- | --- | --- |
| Board of Finance | budget_finance | True | 0 |
| Region 18 Board of Education | education | True | 99 |
| Board of Selectpeople | other | True | 0 |
| Planning & Zoning Commission | other | True | 0 |


**Zero videos registered for:** Board of Finance, Board of Selectpeople, Planning & Zoning Commission


## Agenda/minutes coverage

- Agenda sources registered: 1
- Documents registered: 0 (fetched: 0)
- Date range covered: *no agenda document on file carries a parseable date yet*


### Agenda sources

| source_id | platform | base_url | status |
| --- | --- | --- | --- |
| lyme_custom | custom | https://townlyme.org/category/agendas/ | unconfirmed |


## Research log

| logged_at | field_name | new_value | source | by |
| --- | --- | --- | --- | --- |
| 2026-08-27 14:21:41.316044 | agenda_platform_partial | townlyme.org's own agendas/minutes are custom WordPress file uploads (wp-content/uploads/<year>/<month>/<file>), not a recognized AgendaCenter/CivicClerk/Granicus vendor. | WebFetch of townlyme.org/category/agendas, 2026-08-27 | claude |
| 2026-08-27 14:21:41.316044 | both_tabs_checked | /videos: 1 title only. /streams: 120 titles -- essentially all real content lives on /streams for this channel, another concrete case of the mandatory both-tabs check mattering. | yt-dlp --flat-playlist crawl of both tabs, 2026-08-27 | claude |
| 2026-08-27 14:21:41.316044 | channel_found_shared | "Lyme-Old Lyme Board Of Education Region18" (UCF2_W7yYtFwx067Ici9776Q) confirmed via yt-dlp --dump-single-json tab probe (per-video flat-playlist probes on the first 2 items independently errored as unavailable, a real EJS/bot-check issue not a wrong-channel signal). Genuine joint body for Lyme + Old Lyme, not a cross-town leak risk. | yt-dlp --dump-single-json + --flat-playlist crawl of both tabs (WebSearch budget exhausted, ytsearch: fallback used for initial discovery), 2026-08-27 | claude |
| 2026-08-27 14:21:41.316044 | channel_not_found | No dedicated Lyme town-government (Board of Selectpeople/Board of Finance/Planning & Zoning) YouTube channel found after real effort -- every generic search surfaced either East Lyme's "eltownhall" channel (a distinct, separate town) or Old Lyme's own dedicated channel, never a genuine Lyme-only source. townlyme.org itself only claims YouTube livestreaming for the Board of Education, nothing else. | yt-dlp ytsearch queries (WebSearch budget exhausted) + WebFetch of townlyme.org/boards-commissions and townlyme.org/board-selectpeople, 2026-08-27 | claude |
| 2026-08-27 14:21:41.316044 | patterns_validated_from_real_titles | 97/121 combined-tab titles matched the Region 18 Board of Education pattern (80.2%) via Python regex validation. | Python pattern validation script against the combined 121-title corpus, 2026-08-27 | claude |


## Gaps and caveats


### Videos with no captions available (1 shown, max 25)

| title | upload_date |
| --- | --- |
| Regular Board of Education Meeting Wednesday, October 1, 2025 6:30 PM | 2025-10-01 |


### Tabs never crawled

*(none)*


---


_Generated 2026-08-31T14:40:09 -- regenerate with `.venv/bin/python3 analysis/generate_surveillance_report.py --town "Lyme"`_

