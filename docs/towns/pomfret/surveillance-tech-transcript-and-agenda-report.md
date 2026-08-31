# Surveillance-tech report: Pomfret


## At a glance: Pomfret

This report collects every mention of surveillance technology found in **Pomfret**'s recorded public meetings -- automatically transcribed, then keyword-scanned. Each mention below links straight to the moment in the source video, so anything here can be checked against the recording itself.


**No surveillance-technology mentions have been found in this town's meetings yet.** That is not the same as none existing -- read the coverage note below, and [Gaps and caveats](#gaps-and-caveats), before treating this as an answer about the town.


- **Coverage:** 18 of 18 known Pomfret meetings transcribed (100%)


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

**[Download Pomfret's meeting transcripts (.zip)](https://github.com/unseenpower/ct-mass-surveillance/releases/download/transcript-archives-2026-08/pomfret-meeting-transcripts.zip)**


Every finding in this report is a keyword match against exactly these files. Download them to check a quote in its full context, or to search for something this report's keyword list does not cover.


**What's inside:** one plain-text `.txt` file per meeting, named `<date>_<video-id>_<meeting-title>.txt`, plus a `MANIFEST.txt` giving the date range and how much of the town's video archive is transcribed.


**How to use it**

```bash
unzip pomfret-meeting-transcripts.zip -d pomfret
cd pomfret

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
- Active meeting bodies: 5
- Videos registered: 18 (fetched: 18, no captions: 0)
- Date range covered: 2025-07-30 to 2026-08-29 (all 18 videos dated)


### Channels

| display_name | channel_id | handle |
| --- | --- | --- |
| Kathleen Sposato (Sposato Uncensored, Pomfret CT) | pomfret_sposato | @parentsforpomfret |


### Tab crawl history

| channel_id | tab | last_crawled_at | video_count |
| --- | --- | --- | --- |
| pomfret_sposato | videos | 2026-08-31 07:27:17.443491 | 44 |


## Registered meeting bodies

| body_name | category | active | video_count |
| --- | --- | --- | --- |
| Board of Finance | budget_finance | True | 2 |
| Board of Selectmen | council | True | 9 |
| Board of Education | education | True | 5 |
| Planning & Zoning Commission | other | True | 1 |
| Town Meeting | other | True | 1 |


## Agenda/minutes coverage

- Agenda sources registered: 1
- Documents registered: 0 (fetched: 0)
- Date range covered: *no agenda document on file carries a parseable date yet*


### Agenda sources

| source_id | platform | base_url | status |
| --- | --- | --- | --- |
| pomfret_custom | custom | https://www.pomfretct.gov/minutes-and-agendas | confirmed |


## Research log

| logged_at | field_name | new_value | source | by |
| --- | --- | --- | --- | --- |
| 2026-08-27 16:02:03.803689 | agenda_platform_found | pomfretct.gov runs a Virtual Towns & Schools / Drupal-style custom CMS (theme path `vts_pomfretct`). Agendas and minutes at /minutes-and-agendas, plus per-body pages at /first-selectmens-office/links/board-of-selectmen-agenda and .../board-of-selectmen-minutes. No CivicPlus/CivicClerk/Granicus branding. | r.jina.ai text extraction of pomfretct.gov and /minutes-and-agendas, 2026-08-27 | claude |
| 2026-08-27 16:02:03.803689 | channel_found | pomfret_sposato -- "Kathleen Sposato" / "Sposato Uncensored" (UCdyAC24G8EzFAyrCWn9yWyQ, @parentsforpomfret), confirmed via direct yt-dlp probe. 43 /videos, no /streams tab. A citizen-activist channel (owner is a Pomfret BOE candidate), NOT an official archive -- but the only Pomfret video source that exists, carrying ~17 genuine Board of Selectmen / Special Town Meeting / P&Z / BOE recordings among 26 commentary videos. | yt-dlp --skip-download probe + full /videos crawl, 2026-08-27 | claude |
| 2026-08-27 16:02:03.803689 | no_official_channel_found | Pomfret has NO official town video channel. pomfretct.gov publishes Board of Selectmen agendas/minutes and a general /minutes-and-agendas index but names no video source. Four separate ytsearch queries returned no town channel -- the top hits were Plainfield's two channels surfacing as generic "Board of Selectmen" ranking noise, the exact failure mode docs/onboarding_hartford.md warns about. | yt-dlp ytsearch12 x4 ("Pomfret Connecticut Board of Selectmen meeting", "Town of Pomfret Connecticut meeting", "Pomfret CT Planning and Zoning Commission Connecticut", "Town of Pomfret CT meetings") + curl of pomfretct.gov, 2026-08-27 | claude |
| 2026-08-27 16:02:03.803689 | out_of_state_collision_ruled_out | Pomfret also exists in VT and NY. Confirmed Connecticut from local markers in the title corpus: NECCOG (Northeastern Connecticut Council of Governments), WINY Radio (Putnam CT), the Woodstock Villager and The Pomfret Times (northeastern CT weeklies), the hashtag #pomfretct, and CT body vocabulary (Board of Selectmen, First Selectman, Board of Finance, Town Meeting). | Full 43-title corpus inspection, 2026-08-27 | claude |
| 2026-08-27 16:02:03.803689 | patterns_validated_from_real_titles | 17/43 titles matched (39.5%) -- BOTH tabs checked, /streams confirmed absent by yt-dlp. The low rate is correct: 26 of 43 titles are opinion/reaction videos naming no meeting body. Body split: Board of Selectmen 9, Board of Education 5, Planning & Zoning 1, Board of Finance 1, Town Meeting 1. | yt-dlp --flat-playlist crawl + Python pattern validation, 2026-08-27 | claude |


## Gaps and caveats


### Videos with no captions available (0 shown, max 25)

*(none)*


### Tabs never crawled

| channel | tab |
| --- | --- |
| Kathleen Sposato (Sposato Uncensored, Pomfret CT) | streams |


---


_Generated 2026-08-31T08:17:13 -- regenerate with `.venv/bin/python3 analysis/generate_surveillance_report.py --town "Pomfret"`_

