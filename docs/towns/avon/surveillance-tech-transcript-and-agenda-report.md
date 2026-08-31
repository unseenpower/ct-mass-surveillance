# Surveillance-tech report: Avon


## At a glance: Avon

This report collects every mention of surveillance technology found in **Avon**'s recorded public meetings -- automatically transcribed, then keyword-scanned. Each mention below links straight to the moment in the source video, so anything here can be checked against the recording itself.


**No surveillance-technology mentions have been found in this town's meetings yet.** That is not the same as none existing -- read the coverage note below, and [Gaps and caveats](#gaps-and-caveats), before treating this as an answer about the town.


- **Coverage:** 69 of 89 known Avon meetings transcribed (78%)
- **Still incomplete:** 20 known meetings are not yet transcribed, so an absence here is not proof a topic never came up.


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

**[Download Avon's meeting transcripts (.zip)](https://github.com/unseenpower/ct-mass-surveillance/releases/download/transcript-archives-2026-08/avon-meeting-transcripts.zip)**


Every finding in this report is a keyword match against exactly these files. Download them to check a quote in its full context, or to search for something this report's keyword list does not cover.


**What's inside:** one plain-text `.txt` file per meeting, named `<date>_<video-id>_<meeting-title>.txt`, plus a `MANIFEST.txt` giving the date range and how much of the town's video archive is transcribed.


**How to use it**

```bash
unzip avon-meeting-transcripts.zip -d avon
cd avon

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
- Active meeting bodies: 3
- Videos registered: 89 (fetched: 69, no captions: 0)
- Date range covered: 2017-02-28 to 2026-06-09 (all 89 videos dated)


### Channels

| display_name | channel_id | handle |
| --- | --- | --- |
| Nutmeg TV | nutmeg_tv |  |


### Tab crawl history

| channel_id | tab | last_crawled_at | video_count |
| --- | --- | --- | --- |
| nutmeg_tv | streams | 2026-08-31 07:36:35.359674 | 3 |
| nutmeg_tv | videos | 2026-08-31 07:37:38.216460 | 5270 |


## Registered meeting bodies

| body_name | category | active | video_count |
| --- | --- | --- | --- |
| Board of Finance | budget_finance | True | 4 |
| Town Council | council | True | 3 |
| Board of Education | education | True | 82 |


## Agenda/minutes coverage

- Agenda sources registered: 1
- Documents registered: 0 (fetched: 0)
- Date range covered: *no agenda document on file carries a parseable date yet*


### Agenda sources

| source_id | platform | base_url | status |
| --- | --- | --- | --- |
| avon_custom | custom | https://www.avonct.gov/minutes-and-agendas | unconfirmed |


## Research log

| logged_at | field_name | new_value | source | by |
| --- | --- | --- | --- | --- |
| 2026-08-26 20:39:22.318910 | channel_found | nutmeg_tv (Nutmeg TV, shared Farmington Valley regional broadcaster) | WebSearch for Avon CT Town Council meetings YouTube turned up a playlist that traced to Nutmeg TV via yt-dlp; confirmed Nutmeg TV covers Avon via Patch.com reporting and nutmegtv.com/shows listing | claude |
| 2026-08-26 20:39:22.318910 | channel_rejected | highfivemedia.org/series/avon-town-council is Avon, COLORADO (Eagle County High Five Access Media), not Avon, CT -- cross-state collision, confirmed via WebFetch of the page content | WebFetch of highfivemedia.org/series/avon-town-council | claude |
| 2026-08-26 20:39:22.318910 | patterns_validated_from_real_titles | Unfiltered crawl of Nutmeg TV /videos (5265 titles) grepped for Avon prefix (97 titles); patterns matched 89/97 (91.8% of the Avon-specific slice, 1.7% of the full shared-channel crawl -- expected given Nutmeg TV covers 5+ towns) | yt-dlp --flat-playlist crawl of youtube.com/channel/UC9jy8WJuhXggiF0JHf2diEQ/videos, 2026-08-26 | claude |


## Gaps and caveats


### Videos with no captions available (0 shown, max 25)

*(none)*


### Tabs never crawled

*(none)*


---


_Generated 2026-08-31T08:07:30 -- regenerate with `.venv/bin/python3 analysis/generate_surveillance_report.py --town "Avon"`_

