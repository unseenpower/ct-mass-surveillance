# Surveillance-tech report: Thomaston


## At a glance: Thomaston

This report collects every mention of surveillance technology found in **Thomaston**'s recorded public meetings -- automatically transcribed, then keyword-scanned. Each mention below links straight to the moment in the source video, so anything here can be checked against the recording itself.


**No surveillance-technology mentions have been found in this town's meetings yet.** That is not the same as none existing -- read the coverage note below, and [Gaps and caveats](#gaps-and-caveats), before treating this as an answer about the town.


- **Coverage:** 30 of 95 known Thomaston meetings transcribed (32%)
- **Not the full history:** transcripts begin **2020-05-27**, but Thomaston's published video archive goes back to **2016-02-17**. Meetings before 2020 are not yet transcribed, so this report cannot say what was discussed then. Older meetings are still being added.


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

**[Download Thomaston's meeting transcripts (.zip)](https://github.com/unseenpower/ct-mass-surveillance/releases/download/transcript-archives-2026-08/thomaston-meeting-transcripts.zip)**


Every finding in this report is a keyword match against exactly these files. Download them to check a quote in its full context, or to search for something this report's keyword list does not cover.


**What's inside:** one plain-text `.txt` file per meeting, named `<date>_<video-id>_<meeting-title>.txt`, plus a `MANIFEST.txt` giving the date range and how much of the town's video archive is transcribed.


**How to use it**

```bash
unzip thomaston-meeting-transcripts.zip -d thomaston
cd thomaston

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
- Active meeting bodies: 8
- Videos registered: 95 (fetched: 30, no captions: 0)
- Date range covered: 2016-02-17 to 2026-08-18 (all 95 videos dated)


### Channels

| display_name | channel_id | handle |
| --- | --- | --- |
| Town of Thomaston (CT) | thomaston_ct | @townofthomaston4608 |


### Tab crawl history

| channel_id | tab | last_crawled_at | video_count |
| --- | --- | --- | --- |
| thomaston_ct | streams | 2026-08-31 07:22:16.100846 | 72 |
| thomaston_ct | videos | 2026-08-31 07:22:17.083574 | 31 |


## Registered meeting bodies

| body_name | category | active | video_count |
| --- | --- | --- | --- |
| Board of Finance | budget_finance | True | 12 |
| Board of Selectmen | council | True | 18 |
| Board of Education | education | True | 15 |
| Economic Development Commission | other | True | 10 |
| Inland Wetlands & Watercourses Commission | other | True | 5 |
| Planning & Zoning Commission | other | True | 24 |
| Water Pollution Control Authority | other | True | 8 |
| Zoning Board of Appeals | other | True | 3 |


## Agenda/minutes coverage

- Agenda sources registered: 1
- Documents registered: 0 (fetched: 0)
- Date range covered: *no agenda document on file carries a parseable date yet*


### Agenda sources

| source_id | platform | base_url | status |
| --- | --- | --- | --- |
| thomaston_civiclift | custom | https://www.thomastonct.gov/ | unconfirmed |


## Research log

| logged_at | field_name | new_value | source | by |
| --- | --- | --- | --- | --- |
| 2026-08-27 16:02:08.814649 | agenda_platform_found | thomastonct.gov runs on CivicLift (footer branding) -- the same platform family as North Canaan, Morris and Goshen. Recorded as `custom` since CivicLift is not one of the schema's named platforms and there is no handler for it. Note the domain is thomastonct.GOV; thomastonct.org does not resolve. | curl of thomastonct.gov, 2026-08-27 | claude |
| 2026-08-27 16:02:08.814649 | both_tabs_use_different_title_conventions | The /streams tab (72 titles) uses the formal convention "Town of Thomaston <Body> <Regular|Special> Meeting <MM/DD/YYYY>"; the /videos tab (31 titles) uses terse forms ("Board of Selectman Meeting August 18th 2026", "July 1st Planning and Zoning Meeting", "EDC meeting recording", "Thomaston CT P&Z Meeting"). Patterns were built against BOTH -- a /videos-only pass would have missed the formal convention entirely and a /streams-only pass the terse one. Concrete instance of why the both-tabs mandate is about pattern COVERAGE, not just counts (same shape as the Stonington "BOPC" gap noted in docs/onboarding_hartford.md). | yt-dlp --flat-playlist crawls of both tabs + vocabulary comparison, 2026-08-27 | claude |
| 2026-08-27 16:02:08.814649 | channel_found | thomaston_ct -- "Town of Thomaston" (UC53suszlfZ6I7XSqqtITNTg, @townofthomaston4608), confirmed via direct yt-dlp probe. 31 /videos + 72 /streams = 103 titles, both tabs crawled. | yt-dlp ytsearch discovery + direct --skip-download probe (WebSearch budget exhausted this session), 2026-08-27 | claude |
| 2026-08-27 16:02:08.814649 | out_of_state_collision_ruled_out | Thomaston also exists in ME, GA and NY. Confirmed Connecticut: one title reads literally "Town of Thomaston CT Board of Selectman Regular Meeting", and the body structure is CT throughout -- Board of Selectmen/Selectman, Board of Finance, Inland Wetlands & Watercourses Commission, Water Pollution Control Authority, Economic Development Commission. Thomaston ME uses a Select Board and open Town Meeting; Thomaston GA is a City Council city. | Full 103-title corpus inspection, 2026-08-27 | claude |
| 2026-08-27 16:02:08.814649 | patterns_validated_from_real_titles | COMBINED 95/103 (92.2%) across both tabs. Body split: Planning & Zoning 24, Board of Selectmen 18, Board of Education 15, Board of Finance 12, Economic Development 10, WPCA 8, Inland Wetlands 5, ZBA 3. | yt-dlp --flat-playlist crawls of both tabs + Python pattern validation, 2026-08-27 | claude |


## Gaps and caveats


### Videos with no captions available (0 shown, max 25)

*(none)*


### Tabs never crawled

*(none)*


---


_Generated 2026-08-31T08:18:55 -- regenerate with `.venv/bin/python3 analysis/generate_surveillance_report.py --town "Thomaston"`_

