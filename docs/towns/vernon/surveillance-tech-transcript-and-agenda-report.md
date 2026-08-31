# Surveillance-tech report: Vernon


## At a glance: Vernon

This report collects every mention of surveillance technology found in **Vernon**'s recorded public meetings -- automatically transcribed, then keyword-scanned. Each mention below links straight to the moment in the source video, so anything here can be checked against the recording itself.


**No surveillance-technology mentions have been found in this town's meetings yet.** That is not the same as none existing -- read the coverage note below, and [Gaps and caveats](#gaps-and-caveats), before treating this as an answer about the town.


- **Coverage:** 35 of 86 known Vernon meetings transcribed (41%)
- **Not the full history:** transcripts begin **2023-05-16**, but Vernon's published video archive goes back to **2021-08-17**. Meetings before 2023 are not yet transcribed, so this report cannot say what was discussed then. Older meetings are still being added.


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

**[Download Vernon's meeting transcripts (.zip)](https://github.com/unseenpower/ct-mass-surveillance/releases/download/transcript-archives-2026-08/vernon-meeting-transcripts.zip)**


Every finding in this report is a keyword match against exactly these files. Download them to check a quote in its full context, or to search for something this report's keyword list does not cover.


**What's inside:** one plain-text `.txt` file per meeting, named `<date>_<video-id>_<meeting-title>.txt`, plus a `MANIFEST.txt` giving the date range and how much of the town's video archive is transcribed.


**How to use it**

```bash
unzip vernon-meeting-transcripts.zip -d vernon
cd vernon

# every meeting that mentions a term, with the surrounding line
grep -rin "license plate" .

# just the meeting dates, from the filenames
grep -ril "flock" . | sort
```


The filename's leading date is the meeting date, so a hit tells you which meeting to watch. Find that meeting in the [Timeline](#timeline) below for a direct, timestamped link to that moment in the video.


> These are **machine-generated captions**, not certified minutes. Expect mis-heard names and technical terms, and quote the video rather than the transcript when accuracy matters.


## Mentions by topic: first seen / most recent

*(none)*


## Timeline

0 meetings surfaced a finding (none have a known date).


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


## Coverage status

- Channels registered: 1
- Active meeting bodies: 7
- Videos registered: 86 (fetched: 35, no captions: 27)
- Date range covered: 2021-08-17 to 2026-08-18 — **based on the 84 of 86 videos that carry a parseable upload date**; the other 2 are undated, so the real corpus may extend beyond this range in either direction


### Channels

| display_name | channel_id | handle |
| --- | --- | --- |
| Town of Vernon, Connecticut | vernon_ct | @townofvernonconnecticut |


### Tab crawl history

| channel_id | tab | last_crawled_at | video_count |
| --- | --- | --- | --- |
| vernon_ct | streams | 2026-08-31 07:11:24.005905 | 56 |
| vernon_ct | videos | 2026-08-31 07:11:25.550388 | 83 |


## Registered meeting bodies

| body_name | category | active | video_count |
| --- | --- | --- | --- |
| Town Council | council | True | 86 |
| Board of Education | education | True | 0 |
| Board of Assessment Appeals | other | True | 0 |
| Inland Wetlands Regulatory Commission | other | True | 0 |
| Permanent Municipal Building Committee | other | True | 0 |
| Planning and Zoning Commission | other | True | 0 |
| Zoning Board of Appeals | other | True | 0 |


**Zero videos registered for:** Board of Education, Board of Assessment Appeals, Inland Wetlands Regulatory Commission, Permanent Municipal Building Committee, Planning and Zoning Commission, Zoning Board of Appeals


## Agenda/minutes coverage

- Agenda sources registered: 1
- Documents registered: 0 (fetched: 0)
- Date range covered: *no agenda document on file carries a parseable date yet*


### Agenda sources

| source_id | platform | base_url | status |
| --- | --- | --- | --- |
| vernon_custom | custom | https://www.vernon-ct.gov/agendacenter | unconfirmed |


## Research log

| logged_at | field_name | new_value | source | by |
| --- | --- | --- | --- | --- |
| 2026-08-27 10:42:40.544405 | channel_found | vernon_ct (Town of Vernon, Connecticut, @townofvernonconnecticut) -- confirmed via yt-dlp | WebSearch + yt-dlp --flat-playlist --dump-single-json against youtube.com/channel/UC7QdlGkfv2VAnPuD8i4dR0w | claude |
| 2026-08-27 10:42:40.544405 | committees_confirmed | Board of Education, Planning and Zoning Commission, Zoning Board of Appeals, Board of Assessment Appeals, Permanent Municipal Building Committee, Inland Wetlands Regulatory Commission per vernon-ct.gov -- ZERO title matches for any of them in the real crawl | WebSearch of vernon-ct.gov boards/commissions pages (vernon-ct.gov itself returns a JS bot-challenge to automated fetch) | claude |
| 2026-08-27 10:42:40.544405 | patterns_validated_from_real_titles | Unfiltered crawl of BOTH /videos (83) and /streams (56), 139 titles combined -- Town Council 86/139 matched (61.9%); remainder is genuine non-meeting PR/event content (school programs, ribbon cuttings, a "Rock Solid" interview series), not a coverage gap | yt-dlp --flat-playlist crawl of youtube.com/channel/UC7QdlGkfv2VAnPuD8i4dR0w /videos and /streams, 2026-08-27 | claude |


## Gaps and caveats


### Videos with no captions available (25 shown, max 25)

| title | upload_date |
| --- | --- |
| The Tuesday, August 18, 2026 Town Council meeting of the Town of Vernon, Connecticut. | 2026-08-18 |
| The Tuesday, July 21, 2026 Town Council meeting of the Town of Vernon, Connecticut. | 2026-07-21 |
| May 19, 2026 Town Council meeting, Town of Vernon, Connecticut | 2026-05-19 |
| 3-03-2026, Town Council meeting, Town of Vernon, Connecticut | 2026-03-03 |
| 2-17-2026, Town Council meeting, Town of Vernon, Connecticut | 2026-02-17 |
| 2-03-2026, Town Council meeting, Town of Vernon, Connecticut | 2026-02-03 |
| 1-20-2026, Town Council meeting, Town of Vernon, Connecticut | 2026-01-20 |
| 12-16-2025, Town Council meeting, Town of Vernon, Connecticut | 2025-12-16 |
| 12-2-2025, Town Council meeting, Town of Vernon, Connecticut | 2025-12-02 |
| 11-18-2025, Town Council, Town of Vernon, Connecticut | 2025-11-18 |
| 10-21-2025, Town Council meeting, Town of Vernon, Connecticut | 2025-10-21 |
| 10-07-2025, Town Council, Town of Vernon, Connecticut | 2025-10-07 |
| 7-15-2025, Town Council, Town of Vernon, Connecticut | 2025-07-15 |
| 7-15-2025, Town Council, Town of Vernon, Connecticut | 2025-07-15 |
| 6-17-2025, Town Council, Town of Vernon, Connecticut | 2025-06-17 |
| 6-3-2025, Town Council, Town of Vernon, Connecticut | 2025-06-03 |
| 5-6-2025, Town Council, Town of Vernon, Connecticut | 2025-05-06 |
| 4-01-2025, Town Council, Town of Vernon, Connecticut | 2025-04-01 |
| 3-18-2025, Town Council, Town of Vernon, Connecticut | 2025-03-18 |
| 3-4-2025, Town Council, Town of Vernon, Connecticut | 2025-03-04 |
| 2-24-2025, Town Council, Town of Vernon, Connecticut | 2025-02-24 |
| Vernon Town Council 11-19-2024 | 2024-11-19 |
| Vernon Town Council 9-17-2024 | 2024-09-17 |
| Vernon Town Council 9-17-2024 | 2024-09-17 |
| Vernon Town Council 9-17-2024 | 2024-09-17 |


### Tabs never crawled

*(none)*


---


_Generated 2026-08-31T08:18:59 -- regenerate with `.venv/bin/python3 analysis/generate_surveillance_report.py --town "Vernon"`_

