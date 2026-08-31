# Surveillance-tech report: Easton


## At a glance: Easton

This report collects every mention of surveillance technology found in **Easton**'s recorded public meetings -- automatically transcribed, then keyword-scanned. Each mention below links straight to the moment in the source video, so anything here can be checked against the recording itself.


**No surveillance-technology mentions have been found in this town's meetings yet.** That is not the same as none existing -- read the coverage note below, and [Gaps and caveats](#gaps-and-caveats), before treating this as an answer about the town.


- **Coverage:** 133 of 161 known Easton meetings transcribed (83%)
- **Still incomplete:** 28 known meetings are not yet transcribed, so an absence here is not proof a topic never came up.


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

**[Download Easton's meeting transcripts (.zip)](https://github.com/unseenpower/ct-mass-surveillance/releases/download/transcript-archives-2026-08/easton-meeting-transcripts.zip)**


Every finding in this report is a keyword match against exactly these files. Download them to check a quote in its full context, or to search for something this report's keyword list does not cover.


**What's inside:** one plain-text `.txt` file per meeting, named `<date>_<video-id>_<meeting-title>.txt`, plus a `MANIFEST.txt` giving the date range and how much of the town's video archive is transcribed.


**How to use it**

```bash
unzip easton-meeting-transcripts.zip -d easton
cd easton

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
- Videos registered: 161 (fetched: 133, no captions: 3)
- Date range covered: 2020-01-23 to 2023-10-25 (all 161 videos dated)


### Channels

| display_name | channel_id | handle |
| --- | --- | --- |
| Easton Board of Education | easton_boe_ct | @EastonBoardofEducation |


### Tab crawl history

| channel_id | tab | last_crawled_at | video_count |
| --- | --- | --- | --- |
| easton_boe_ct | streams | 2026-08-31 07:12:38.294900 | 151 |
| easton_boe_ct | videos | 2026-08-31 07:12:39.152069 | 26 |


## Registered meeting bodies

| body_name | category | active | video_count |
| --- | --- | --- | --- |
| Board of Finance | budget_finance | True | 1 |
| Board of Education | education | True | 67 |
| Curriculum Committee | education | True | 2 |
| DEI Task Force | education | True | 9 |
| ER9/Region 9 Joint Board | education | True | 82 |
| Board of Selectmen | other | True | 0 |
| Board of Police Commissioners | public_safety | True | 0 |


**Zero videos registered for:** Board of Selectmen, Board of Police Commissioners


## Agenda/minutes coverage

- Agenda sources registered: 1
- Documents registered: 76 (fetched: 1)
- Date range covered: 2026-01-06 to 2026-08-31


### Agenda sources

| source_id | platform | base_url | status |
| --- | --- | --- | --- |
| easton_agendacenter | agendacenter | https://www.eastonct.gov/agendacenter | confirmed |


## Research log

| logged_at | field_name | new_value | source | by |
| --- | --- | --- | --- | --- |
| 2026-08-27 13:59:59.314362 | agenda_platform_confirmed | eastonct.gov/agendacenter confirmed CivicPlus (CivicEngage), full 30+-category real board list pulled. | WebFetch of eastonct.gov/agendacenter, 2026-08-27 | claude |
| 2026-08-27 13:59:59.314362 | channel_found | easton_boe_ct (Easton Board of Education, @EastonBoardofEducation) -- confirmed via yt-dlp ytsearch10 (WebSearch budget exhausted this session), direct probe, and corroborated by real "Easton, Redding, Region 9" title content. | yt-dlp ytsearch10:"Easton Connecticut Planning and Zoning Commission" / "eastonct.gov board of selectmen" + direct probes, 2026-08-27 | claude |
| 2026-08-27 13:59:59.314362 | channel_not_found | No town-government (Board of Selectmen/Planning & Zoning/etc) YouTube source found despite multiple ytsearch query variations. eastonct.gov/agendacenter names "Channel 79 Access" as the recordings venue for these boards, but no YouTube presence for it was located; non-BOE recordings may only exist via per-item Zoom links or a local cable system with no public archive. | yt-dlp ytsearch10 (multiple queries) + WebFetch of eastonct.gov and eastonct.gov/agendacenter, 2026-08-27 | claude |
| 2026-08-27 13:59:59.314362 | channel_rejected | "Easton Community Access Television" (@eastoncatTV) confirmed EASTON, MASSACHUSETTS via direct title-corpus inspection (MA-only "Select Board"/"School Committee" terminology, explicit "Easton, MA" hits, Bristol County MA church content, BAMSI references) -- NOT registered. | yt-dlp --flat-playlist crawl of youtube.com/channel/UCnDuAjxdDFB7NyOuNF1B6EQ (6904 /videos + 279 /streams titles), 2026-08-27 | claude |
| 2026-08-27 13:59:59.314362 | patterns_validated_from_real_titles | 161/177 titles (BOE channel, /videos+/streams combined) matched at least one body (91.0%) -- unmatched: an unclear-acronym cluster ("BTC", 7 occurrences, meaning not confirmed) plus genuinely non-oversight content (Parent-to-Parent tech help, a personal Zoom-room title, a school closing ceremony, superintendent-search forums). | Python pattern validation against the full BOE-channel corpus, 2026-08-27 | claude |


## Gaps and caveats


### Videos with no captions available (3 shown, max 25)

| title | upload_date |
| --- | --- |
| Easton Board of Education Meeting | 2023-03-09 |
| Joint Easton, Redding, Region 9 Policy Committee | 2021-08-27 |
| Joint Easton, Redding, Region 9 Policy Committee | 2021-08-06 |


### Tabs never crawled

*(none)*


---


_Generated 2026-08-31T08:10:58 -- regenerate with `.venv/bin/python3 analysis/generate_surveillance_report.py --town "Easton"`_

