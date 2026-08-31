# Surveillance-tech report: Roxbury


## At a glance: Roxbury

This report collects every mention of surveillance technology found in **Roxbury**'s recorded public meetings -- automatically transcribed, then keyword-scanned. Each mention below links straight to the moment in the source video, so anything here can be checked against the recording itself.


**No surveillance-technology mentions have been found in this town's meetings yet.** That is not the same as none existing -- read the coverage note below, and [Gaps and caveats](#gaps-and-caveats), before treating this as an answer about the town.


- **Coverage:** 27 of 286 known Roxbury meetings transcribed (9%)
- **Not the full history:** transcripts begin **2024-01-23**, but Roxbury's published video archive goes back to **2020-03-31**. Meetings before 2024 are not yet transcribed, so this report cannot say what was discussed then. Older meetings are still being added.


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

**[Download Roxbury's meeting transcripts (.zip)](https://github.com/unseenpower/ct-mass-surveillance/releases/download/transcript-archives-2026-08/roxbury-meeting-transcripts.zip)**


Every finding in this report is a keyword match against exactly these files. Download them to check a quote in its full context, or to search for something this report's keyword list does not cover.


**What's inside:** one plain-text `.txt` file per meeting, named `<date>_<video-id>_<meeting-title>.txt`, plus a `MANIFEST.txt` giving the date range and how much of the town's video archive is transcribed.


**How to use it**

```bash
unzip roxbury-meeting-transcripts.zip -d roxbury
cd roxbury

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


### Why the counts rose on 2026-08-31

Mention counts in this report increased on 2026-08-31, and that is a **correction, not new activity**. Until then the scanner matched keywords against individual caption cues, which average about 33 characters, so a phrase split across two cues -- "license plate" ending one and "reader" starting the next -- matched neither. It missed roughly a quarter of the meetings containing "license plate reader" and about half the mentions of some other terms. The meetings were always in the record; the scanner could not see the phrase. Fixed in [#70](https://github.com/unseenpower/ct-surveillance-transcripts/pull/70); every term was then rescanned across the whole corpus.


## Coverage status

- Channels registered: 1
- Active meeting bodies: 11
- Videos registered: 286 (fetched: 27, no captions: 0)
- Date range covered: 2020-03-31 to 2026-05-21 (all 286 videos dated)


### Channels

| display_name | channel_id | handle |
| --- | --- | --- |
| Town of Roxbury CT Meetings | roxbury_ct | @townofroxburyctmeetings2790 |


### Tab crawl history

| channel_id | tab | last_crawled_at | video_count |
| --- | --- | --- | --- |
| roxbury_ct | videos | 2026-08-31 13:49:14.962162 | 291 |


## Registered meeting bodies

| body_name | category | active | video_count |
| --- | --- | --- | --- |
| Board of Finance | budget_finance | True | 36 |
| Board of Selectmen | council | True | 53 |
| Affordable Housing Plan Committee | other | True | 6 |
| Conservation Commission | other | True | 12 |
| Historic District Commission | other | True | 3 |
| Inland Wetlands & Watercourses Commission | other | True | 70 |
| Planning Commission | other | True | 25 |
| Senior Center Board of Directors | other | True | 17 |
| Town Meeting | other | True | 2 |
| Zoning Board of Appeals | other | True | 20 |
| Zoning Commission | other | True | 42 |


## Agenda/minutes coverage

- Agenda sources registered: 1
- Documents registered: 0 (fetched: 0)
- Date range covered: *no agenda document on file carries a parseable date yet*


### Agenda sources

| source_id | platform | base_url | status |
| --- | --- | --- | --- |
| roxbury_agendacenter | agendacenter | https://www.roxburyct.com/AgendaCenter | confirmed |


## Research log

| logged_at | field_name | new_value | source | by |
| --- | --- | --- | --- | --- |
| 2026-08-27 16:02:04.753616 | agenda_platform_confirmed | roxburyct.com is a CivicPlus site (CivicPlus branding in page source) and its AgendaCenter is live -- https://www.roxburyct.com/AgendaCenter returns HTTP 200. The town's own nav links agendas/minutes at /129/Agendas-Minutes. This makes Roxbury FETCHABLE by ingest/fetch_agenda_documents.py today, same as Milford/Ashford/Deep River. | curl of roxburyct.com and /AgendaCenter (HTTP 200), 2026-08-27 | claude |
| 2026-08-27 16:02:04.753616 | channel_found | roxbury_ct -- "Town of Roxbury CT Meetings" (UC0vlFwzqlnVXQiY5sA7ufag, @townofroxburyctmeetings2790). 290 /videos titles; NO /streams tab (yt-dlp confirmed absent). Identity confirmed via `yt-dlp --flat-playlist -J` metadata after the usual single-video --skip-download probe failed with "This video is not available" on the newest items -- worth remembering as an alternative confirmation route. | yt-dlp ytsearch12:"Roxbury Connecticut Board of Selectmen meeting" + --flat-playlist -J metadata probe, 2026-08-27 | claude |
| 2026-08-27 16:02:04.753616 | out_of_state_collision_ruled_out | Roxbury is best known as a Boston, MA neighborhood (no town government of its own -- governed by the Boston City Council) and there is also a Roxbury Township, NJ (Township Council + Mayor). Confirmed Connecticut: the channel is literally named "Town of Roxbury CT Meetings", and the corpus body structure is unambiguously CT small-town -- Board of Selectmen, Board of Finance, Inland Wetlands & Watercourses Commission, separate Planning and Zoning commissions, Historic District Commission. No MA "Select Board"/"School Committee" vocabulary anywhere. | Full 290-title corpus inspection + channel-name verification, 2026-08-27 | claude |
| 2026-08-27 16:02:04.753616 | patterns_validated_from_real_titles | 285/290 titles matched (98.3%). Both tabs checked -- /streams confirmed absent, so 290 IS the combined total. Body split: Inland Wetlands 69, Board of Selectmen 53, Zoning Commission 42, Board of Finance 36, Planning Commission 25, ZBA 20, Senior Center Board 17, Conservation 12, Affordable Housing 6, Historic District 3, Town Meeting 2. Board of Education matched ZERO (Roxbury's schools are Regional School District 12 with Bridgewater and Washington) and was deliberately not registered. | yt-dlp --flat-playlist crawl + Python pattern validation, 2026-08-27 | claude |


## Gaps and caveats


### Videos with no captions available (0 shown, max 25)

*(none)*


### Tabs never crawled

| channel | tab |
| --- | --- |
| Town of Roxbury CT Meetings | streams |


---


_Generated 2026-08-31T14:43:31 -- regenerate with `.venv/bin/python3 analysis/generate_surveillance_report.py --town "Roxbury"`_

