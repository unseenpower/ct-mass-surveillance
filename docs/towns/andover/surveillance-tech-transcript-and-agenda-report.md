# Surveillance-tech report: Andover


## At a glance: Andover

This report collects every mention of surveillance technology found in **Andover**'s recorded public meetings -- automatically transcribed, then keyword-scanned. Each mention below links straight to the moment in the source video, so anything here can be checked against the recording itself.

- **1 mention** across **1 meeting**
- **First mention:** 2025-11-19  |  **Most recent:** 2025-11-19
- **Technologies discussed:** predictive_policing
- **Coverage:** 192 of 487 known Andover meetings transcribed (39%)
- **Not the full history:** transcripts begin **2021-05-04**, but Andover's published video archive goes back to **2020-04-03**. Meetings before 2021 are not yet transcribed, so this report cannot say what was discussed then. Older meetings are still being added.


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

**[Download Andover's meeting transcripts (.zip)](https://github.com/unseenpower/ct-mass-surveillance/releases/download/transcript-archives-2026-08/andover-meeting-transcripts.zip)**


Every finding in this report is a keyword match against exactly these files. Download them to check a quote in its full context, or to search for something this report's keyword list does not cover.


**What's inside:** one plain-text `.txt` file per meeting, named `<date>_<video-id>_<meeting-title>.txt`, plus a `MANIFEST.txt` giving the date range and how much of the town's video archive is transcribed.


**How to use it**

```bash
unzip andover-meeting-transcripts.zip -d andover
cd andover

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
| predictive_policing | 1 | 1 | 2025-11-19 | 2025-11-19 |


## Timeline

1 meetings surfaced a finding (1 dated, spanning 2025-11-19 to 2025-11-19; 0 of unknown date, listed last).


### 2025-11-19 -- Zoning Board of Appeals

**Zoning Board of Appeals11.19.25** _(topics: predictive_policing)_

- `predictive_policing` [▸](https://www.youtube.com/watch?v=S8M_S9gb7Nw&t=507s)  > ...conforming, closer to what the overall zone wanted. In that case, it was going from an existing foundry use to a car repair shop. So they the courts held after the after the variance was upheld,...


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

- **[2025-11-19] Zoning Board of Appeals** -- Zoning Board of Appeals11.19.25
  > ...conforming, closer to what the overall zone wanted. In that case, it was going from an existing foundry use to a car repair shop. So they the courts held after the after the variance was upheld,...
  [Watch on YouTube ▸](https://www.youtube.com/watch?v=S8M_S9gb7Nw&t=507s)  _(term: predictive_policing, unreviewed)_


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
- Active meeting bodies: 9
- Videos registered: 487 (fetched: 192, no captions: 4)
- Date range covered: 2020-04-03 to 2026-08-26 (all 487 videos dated)


### Channels

| display_name | channel_id | handle |
| --- | --- | --- |
| Town of Andover CT | andover_ct | @townofandoverct7881 |


### Tab crawl history

| channel_id | tab | last_crawled_at | video_count |
| --- | --- | --- | --- |
| andover_ct | videos | 2026-08-31 14:20:26.814237 | 510 |


## Registered meeting bodies

| body_name | category | active | video_count |
| --- | --- | --- | --- |
| Annual Town Budget Meeting | budget_finance | True | 18 |
| Board of Finance | budget_finance | True | 126 |
| Capital Improvement Planning Committee | budget_finance | True | 4 |
| Andover Charter Revision Commission | other | True | 7 |
| Board of Assessment Appeals | other | True | 11 |
| Board of Selectmen | other | True | 169 |
| Inland Wetlands and Watercourses Commission | other | True | 58 |
| Planning and Zoning Commission | other | True | 81 |
| Zoning Board of Appeals | other | True | 13 |


## Agenda/minutes coverage

- Agenda sources registered: 1
- Documents registered: 0 (fetched: 0)
- Date range covered: *no agenda document on file carries a parseable date yet*


### Agenda sources

| source_id | platform | base_url | status |
| --- | --- | --- | --- |
| andover_unknown | unknown | https://www.andoverconnecticut.org/home/pages/minutes-agendas | unconfirmed |


## Research log

| logged_at | field_name | new_value | source | by |
| --- | --- | --- | --- | --- |
| 2026-08-27 10:43:03.980188 | channel_found | andover_ct (Town of Andover CT, @townofandoverct7881) -- confirmed via yt-dlp, real recent title in the listing | WebSearch + yt-dlp --flat-playlist --dump-single-json against youtube.com/channel/UCUJaR7vvOBk9RdeTYegbB6Q | claude |
| 2026-08-27 10:43:03.980188 | patterns_validated_from_real_titles | Unfiltered crawl of /videos (509 titles, no /streams) -- 486/509 matched at least one body (95.5%) | yt-dlp --flat-playlist crawl of youtube.com/channel/UCUJaR7vvOBk9RdeTYegbB6Q/videos, 2026-08-27 | claude |
| 2026-08-27 10:43:03.980188 | regional_channel_not_used | Andover's .gov site also links the regional Community Voice Channel (CVC, serves 7 towns) -- not registered here since Andover already has its own dedicated, well-covered channel; CVC registered instead for Bolton in this same batch. | andoverconnecticut.org/community-voice-channel; WebSearch, 2026-08-27 | claude |
| 2026-08-27 10:43:03.980188 | streams_tab_confirmed_absent | yt-dlp returned an explicit "This channel does not have a streams tab" error for /streams -- confirmed absent, not silently skipped | yt-dlp --flat-playlist against youtube.com/channel/UCUJaR7vvOBk9RdeTYegbB6Q/streams, 2026-08-27 | claude |


## Gaps and caveats


### Videos with no captions available (4 shown, max 25)

| title | upload_date |
| --- | --- |
| Board of Finance- Budget Meeting 3.18.26 | 2026-03-18 |
| Board of Finance- Budget Meeting 3.11.26 | 2026-03-11 |
| IWWC 12.2.24 Regular Meeting | 2024-12-02 |
| IWWC #20-27 Application, 129 Hebron Road, Puerto - Video 2 | 2020-11-02 |


### Tabs never crawled

| channel | tab |
| --- | --- |
| Town of Andover CT | streams |


---


_Generated 2026-08-31T14:34:58 -- regenerate with `.venv/bin/python3 analysis/generate_surveillance_report.py --town "Andover"`_

