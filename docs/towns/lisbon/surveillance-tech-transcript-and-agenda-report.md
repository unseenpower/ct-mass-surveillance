# Surveillance-tech report: Lisbon


## At a glance: Lisbon

This report collects every mention of surveillance technology found in **Lisbon**'s recorded public meetings -- automatically transcribed, then keyword-scanned. Each mention below links straight to the moment in the source video, so anything here can be checked against the recording itself.


**No surveillance-technology mentions have been found in this town's meetings yet.** That is not the same as none existing -- read the coverage note below, and [Gaps and caveats](#gaps-and-caveats), before treating this as an answer about the town.


- **Coverage:** 22 of 22 known Lisbon meetings transcribed (100%)


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

**[Download Lisbon's meeting transcripts (.zip)](https://github.com/unseenpower/ct-mass-surveillance/releases/download/transcript-archives-2026-08/lisbon-meeting-transcripts.zip)**


Every finding in this report is a keyword match against exactly these files. Download them to check a quote in its full context, or to search for something this report's keyword list does not cover.


**What's inside:** one plain-text `.txt` file per meeting, named `<date>_<video-id>_<meeting-title>.txt`, plus a `MANIFEST.txt` giving the date range and how much of the town's video archive is transcribed.


**How to use it**

```bash
unzip lisbon-meeting-transcripts.zip -d lisbon
cd lisbon

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
- Active meeting bodies: 2
- Videos registered: 22 (fetched: 22, no captions: 0)
- Date range covered: 2026-02-18 to 2026-04-01 — **based on the 3 of 22 videos that carry a parseable upload date**; the other 19 are undated, so the real corpus may extend beyond this range in either direction


### Channels

| display_name | channel_id | handle |
| --- | --- | --- |
| Town of Lisbon CT | lisbon_ct | @LisbonLisbon-l9s |


### Tab crawl history

| channel_id | tab | last_crawled_at | video_count |
| --- | --- | --- | --- |
| lisbon_ct | videos | 2026-08-31 07:32:41.039987 | 22 |


## Registered meeting bodies

| body_name | category | active | video_count |
| --- | --- | --- | --- |
| Board of Finance | budget_finance | True | 22 |
| Board of Selectmen | other | True | 0 |


**Zero videos registered for:** Board of Selectmen


## Agenda/minutes coverage

- Agenda sources registered: 1
- Documents registered: 63 (fetched: 2)
- Date range covered: 2026-01-12 to 2026-08-24


### Agenda sources

| source_id | platform | base_url | status |
| --- | --- | --- | --- |
| lisbon_agendacenter | agendacenter | https://www.lisbonct.gov/AgendaCenter | confirmed |


## Research log

| logged_at | field_name | new_value | source | by |
| --- | --- | --- | --- | --- |
| 2026-08-27 07:43:54.381118 | channel_found | lisbon_ct (Town of Lisbon CT, @LisbonLisbon-l9s) -- confirmed via yt-dlp, channel description explicitly names the town | WebSearch + yt-dlp --flat-playlist --dump-single-json against youtube.com/@LisbonLisbon-l9s | claude |
| 2026-08-27 07:43:54.381118 | committees_confirmed | Board of Selectmen + Board of Finance per lisbonct.gov official Boards & Commissions page (19 boards/commissions total, most with no video presence) | lisbonct.gov/202/Boards-Commissions | claude |
| 2026-08-27 07:43:54.381118 | patterns_validated_from_real_titles | Unfiltered crawl of /videos (22 titles, small/new channel) -- 22/22 matched (100%), all Board of Finance; Board of Selectmen registered but genuinely absent from this channel so far | yt-dlp --flat-playlist crawl of youtube.com/@LisbonLisbon-l9s/videos, 2026-08-27 | claude |


## Gaps and caveats


### Videos with no captions available (0 shown, max 25)

*(none)*


### Tabs never crawled

| channel | tab |
| --- | --- |
| Town of Lisbon CT | streams |


---


_Generated 2026-08-31T08:12:58 -- regenerate with `.venv/bin/python3 analysis/generate_surveillance_report.py --town "Lisbon"`_

