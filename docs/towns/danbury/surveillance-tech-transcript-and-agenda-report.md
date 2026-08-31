# Surveillance-tech report: Danbury


## At a glance: Danbury

This report collects every mention of surveillance technology found in **Danbury**'s recorded public meetings -- automatically transcribed, then keyword-scanned. Each mention below links straight to the moment in the source video, so anything here can be checked against the recording itself.

- **1 mention** across **1 meeting**
- **First mention:** 2021-05-07  |  **Most recent:** 2021-05-07
- **Technologies discussed:** body_camera
- **Coverage:** 20 of 20 known Danbury meetings transcribed (100%)


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

**[Download Danbury's meeting transcripts (.zip)](https://github.com/unseenpower/ct-mass-surveillance/releases/download/transcript-archives-2026-08/danbury-meeting-transcripts.zip)**


Every finding in this report is a keyword match against exactly these files. Download them to check a quote in its full context, or to search for something this report's keyword list does not cover.


**What's inside:** one plain-text `.txt` file per meeting, named `<date>_<video-id>_<meeting-title>.txt`, plus a `MANIFEST.txt` giving the date range and how much of the town's video archive is transcribed.


**How to use it**

```bash
unzip danbury-meeting-transcripts.zip -d danbury
cd danbury

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
| body_camera | 1 | 1 | 2021-05-07 | 2021-05-07 |


## Timeline

1 meetings surfaced a finding (1 dated, spanning 2021-05-07 to 2021-05-07; 0 of unknown date, listed last).


### 2021-05-07 -- City Council

**City Council Meeting 05/2021 (Rescheduled)** _(topics: body_camera)_

- `body_camera` [▸](https://www.youtube.com/watch?v=8ZmFoiem0lI&t=10550s)  > ...and we recently completed training and you'll notice every uniform officer out on the street is wearing a body worn camera and we have upgraded at least 35 of our marked police...


## Findings by topic


### ai_data_fusion

*(no findings)*


### alpr

*(no findings)*


### biometrics_other

*(no findings)*


### body_camera

- **[2021-05-07] City Council** -- City Council Meeting 05/2021 (Rescheduled)
  > ...and we recently completed training and you'll notice every uniform officer out on the street is wearing a body worn camera and we have upgraded at least 35 of our marked police...
  [Watch on YouTube ▸](https://www.youtube.com/watch?v=8ZmFoiem0lI&t=10550s)  _(term: body_camera, unreviewed)_


### cad

*(no findings)*


### cell_site_sim

*(no findings)*


### data_broker

*(no findings)*


### doorbell_partnership

*(no findings)*


### drone

*(no findings)*


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
- Videos registered: 20 (fetched: 20, no captions: 0)
- Date range covered: 2020-05-05 to 2021-06-02 (all 20 videos dated)


### Channels

| display_name | channel_id | handle |
| --- | --- | --- |
| City of Danbury | city_of_danbury | @CityofDanburyConnecticut |


### Tab crawl history

| channel_id | tab | last_crawled_at | video_count |
| --- | --- | --- | --- |
| city_of_danbury | streams | 2026-08-31 14:12:43.681437 | 44 |
| city_of_danbury | videos | 2026-08-31 14:12:45.307548 | 87 |


## Registered meeting bodies

| body_name | category | active | video_count |
| --- | --- | --- | --- |
| City Council | council | True | 17 |
| Committee of the Whole | council | True | 1 |
| General Government Committee | other | True | 2 |
| Police Commission | public_safety | True | 0 |


**Zero videos registered for:** Police Commission


## Agenda/minutes coverage

- Agenda sources registered: 2
- Documents registered: 0 (fetched: 0)
- Date range covered: *no agenda document on file carries a parseable date yet*


### Agenda sources

| source_id | platform | base_url | status |
| --- | --- | --- | --- |
| danbury_agendacenter | agendacenter | https://www.danbury-ct.gov/AgendaCenter | confirmed |
| danbury_granicus | granicus | https://danbury.granicus.com/ViewPublisher.php?view_id=3 | blocked |


## Research log

| logged_at | field_name | new_value | source | by |
| --- | --- | --- | --- | --- |
| 2026-08-13 14:22:06.812544 | channel_found | city_of_danbury (@CityofDanburyConnecticut) -- confirmed real via yt-dlp, but real meeting-recording coverage on this channel effectively stops 2021-2022 (see platform_blocker entry) | yt-dlp-confirmed handle | claude |
| 2026-08-13 14:22:06.812544 | committees_confirmed | City Council, Committee of the Whole, and a "General Government" session (I/II) confirmed via real title matches in the 44-title historical /streams crawl. No Board of Finance/Board of Estimate-equivalent body found anywhere in this research -- danbury-ct.gov's Boards & Commissions page (40 boards listed) has none; budget appears to be handled directly by City Council. Police Commission confirmed to exist via ACLU-CT's statewide map but not independently verified by name/structure. | danbury-ct.gov/157/Boards-Commissions, flashlight.acluct.org/police-commissions, yt-dlp --flat-playlist crawl of youtube.com/@CityofDanburyConnecticut streams+videos, 2026-08-13 | claude |
| 2026-08-13 14:22:06.812544 | platform_blocker | Danbury's CURRENT meeting archive is Granicus (danbury.granicus.com/ViewPublisher.php?view_id=3), actively maintained through the present. A local news article (WLAD) confirms Council meetings still stream live to the YouTube channel at meeting time, but recordings are not showing up in a flat-playlist crawl of /videos or /streams afterward -- the channel's real meeting-recording content, as far as this crawl can see, stops around 2020-2021. fetch_channel_transcripts.py only supports platform=youtube, so Danbury needs the same new Granicus-scraping tooling as Stamford (seed_stamford_blocked.sql) before CURRENT coverage is reachable. Registered the channel anyway (unlike fully-blocked Stamford) because real, if stale, 2020-2021 meeting content genuinely exists there and is worth capturing. | danbury.granicus.com/ViewPublisher.php?view_id=3, wlad.com/local-headlines/501645 | claude |
| 2026-08-13 14:22:06.812544 | scope_boundary_confirmed | Career Academy Steering Committee (real, several title matches) excluded as a school-construction-project committee, not surveillance-tech oversight in the sense this project tracks -- same precedent as Fire Commission in Milford, noted rather than silently dropped. | yt-dlp --flat-playlist crawl of youtube.com/@CityofDanburyConnecticut streams, 2026-08-13 | claude |


## Gaps and caveats


### Videos with no captions available (0 shown, max 25)

*(none)*


### Tabs never crawled

*(none)*


---


_Generated 2026-08-31T14:36:43 -- regenerate with `.venv/bin/python3 analysis/generate_surveillance_report.py --town "Danbury"`_

