# Surveillance-tech report: Oxford


## At a glance: Oxford

This report collects every mention of surveillance technology found in **Oxford**'s recorded public meetings -- automatically transcribed, then keyword-scanned. Each mention below links straight to the moment in the source video, so anything here can be checked against the recording itself.


**No surveillance-technology mentions have been found in this town's meetings yet.** That is not the same as none existing -- read the coverage note below, and [Gaps and caveats](#gaps-and-caveats), before treating this as an answer about the town.


- **Coverage:** 35 of 46 known Oxford meetings transcribed (76%)
- **Still incomplete:** 11 known meetings are not yet transcribed, so an absence here is not proof a topic never came up.


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

**[Download Oxford's meeting transcripts (.zip)](https://github.com/unseenpower/ct-mass-surveillance/releases/download/transcript-archives-2026-08/oxford-meeting-transcripts.zip)**


Every finding in this report is a keyword match against exactly these files. Download them to check a quote in its full context, or to search for something this report's keyword list does not cover.


**What's inside:** one plain-text `.txt` file per meeting, named `<date>_<video-id>_<meeting-title>.txt`, plus a `MANIFEST.txt` giving the date range and how much of the town's video archive is transcribed.


**How to use it**

```bash
unzip oxford-meeting-transcripts.zip -d oxford
cd oxford

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

- Channels registered: 2
- Active meeting bodies: 6
- Videos registered: 46 (fetched: 35, no captions: 10)
- Date range covered: 2024-05-06 to 2026-07-16 (all 46 videos dated)


### Channels

| display_name | channel_id | handle |
| --- | --- | --- |
| Town of Oxford, Ct. Board of Selectmen | oxford_bos_ct | @bosoxfordct06478 |
| Oxford Underground Press (citizen journalism, Oxford CT) | oxford_underground_press | @OxfordUndergroundPress |


### Tab crawl history

| channel_id | tab | last_crawled_at | video_count |
| --- | --- | --- | --- |
| oxford_bos_ct | streams | 2026-08-31 14:12:11.772721 | 22 |
| oxford_underground_press | videos | 2026-08-31 14:12:02.045895 | 37 |


## Registered meeting bodies

| body_name | category | active | video_count |
| --- | --- | --- | --- |
| Board of Finance | budget_finance | True | 13 |
| Board of Selectmen | council | True | 24 |
| Board of Education | education | True | 0 |
| Planning & Zoning Commission | other | True | 1 |
| Public Hearing | other | True | 3 |
| Town Meeting | other | True | 5 |


**Zero videos registered for:** Board of Education


## Agenda/minutes coverage

- Agenda sources registered: 1
- Documents registered: 138 (fetched: 2)
- Date range covered: 2026-01-06 to 2026-10-20


### Agenda sources

| source_id | platform | base_url | status |
| --- | --- | --- | --- |
| oxford_agendacenter | agendacenter | https://www.oxford-ct.gov/agendacenter | confirmed |


## Research log

| logged_at | field_name | new_value | source | by |
| --- | --- | --- | --- | --- |
| 2026-08-27 15:11:37.897706 | agenda_platform_confirmed | CivicPlus AgendaCenter confirmed at oxford-ct.gov/agendacenter (CivicPlus branding in page source, standard AgendaCenter structure). Fetchable by ingest/fetch_agenda_documents.py. Its category list is far richer than Oxford's video coverage -- Board of Selectmen, Board of Finance, Planning and Zoning Commission, Conservation Commission-Inland Wetlands Agency, Zoning Board of Appeals, Water Pollution Control Authority, Fire Department Chiefs, Charter Revision, Housing Authority, Library Board of Directors, Parks and Recreation Commission, Cultural Arts Commission, Economic Development, Elderly Commission, Agriculture Advisory Committee, Affordable Housing Plan Committee, Town Meeting and more -- so for Oxford the agenda workstream is the higher-value one. | curl of oxford-ct.gov/agendacenter, 2026-08-27 | claude |
| 2026-08-27 15:11:37.897706 | both_tabs_checked | oxford_bos_ct: /videos tab DOES NOT EXIST (yt-dlp: "This channel does not have a videos tab"), /streams 22 titles -- a /videos-only crawl would have found literally nothing. oxford_underground_press: /videos 37 titles, no /streams tab. Combined corpus 59 titles. | yt-dlp --flat-playlist crawl of both tabs on both channels, 2026-08-27 | claude |
| 2026-08-27 15:11:37.897706 | channel_found_citizen | "Oxford Underground Press" (UC19aJb9psbroQ2H9Snvlt0w, @OxfordUndergroundPress) confirmed via yt-dlp probe -- a citizen-journalism channel, NOT an official town source, registered because it carries the substantive gavel-to-gavel Board of Selectmen / Board of Finance / P&Z / Town Meeting recordings the town's own channel does not, nearly all titled "..., Oxford, CT". 37 /videos titles, no /streams tab. Same treatment as NewHartfordPlus.com for New Hartford in this batch. | yt-dlp channel probe + --flat-playlist crawl of both tabs, 2026-08-27 | claude |
| 2026-08-27 15:11:37.897706 | channel_found_official | "Town of Oxford, Ct. Board of Selectmen" (UC6RebHWUhp3s-iGJZqmL77Q, @bosoxfordct06478) confirmed via direct yt-dlp probe -- the channel name itself states the town and state. Thin: no /videos tab at all, 22 /streams titles, roughly a third of them "My Broadcast"/"Test" placeholder livestream artifacts. | yt-dlp channel probe + --flat-playlist crawl of both tabs (WebSearch budget exhausted, ytsearch: fallback), 2026-08-27 | claude |
| 2026-08-27 15:11:37.897706 | collision_check | COLLISION RISK CHECKED: Oxford MS / Oxford UK, and neighbouring Orange CT (already onboarded as orange_ct_ogat, which ranks high for "Oxford Connecticut Board of Selectmen" searches). Both registered channels were confirmed by a yt-dlp probe returning a channel name that states the town and state, and by "Oxford, CT" appearing in the titles themselves; the OGAT results were rejected on the yt-dlp channel name. A CT-town-name scan of both corpora returned only "Oxford" -- neither channel is shared, so patterns are deliberately unanchored (the official channel's titles are bare "BOS Meeting" and anchoring would drop all of them). | yt-dlp probes of every candidate channel + Python CT-town-name scan of both full corpora, 2026-08-27 | claude |
| 2026-08-27 15:15:19.584651 | dry_run_sanity_check | oxford_bos_ct: /videos tab does not exist (0 listed), /streams 22 listed / 9 matched. oxford_underground_press: /videos 37 listed / 37 matched, no /streams tab. Combined 46/59 (78.0%). | ingest/fetch_channel_transcripts.py --tabs videos,streams --mode filtered --dry-run against the live DB after seeding, 2026-08-27 | claude |
| 2026-08-27 15:15:19.584651 | patterns_validated_from_real_titles | 46/59 combined titles matched (78.0%) -- oxford_bos_ct 9/22 (the rest are Test/My Broadcast placeholders), oxford_underground_press 37/37 across 6 registered bodies. The 6 distinct unmatched titles are the official channel's "My Broadcast"/"Test" placeholders and two bare-date titles. | Python pattern validation against both full corpora, 2026-08-27 | claude |


## Gaps and caveats


### Videos with no captions available (10 shown, max 25)

| title | upload_date |
| --- | --- |
| 04 02 25 BoS Meeting, Oxford, CT | 2025-04-02 |
| 03 24 25 BoF Special Mtg with BOE - Oxford, CT  (Part 1 of 2) | 2025-03-24 |
| 3 19 25 Board of Selectmen Meeting, Oxford, CT Part 2 of 2 | 2025-03-19 |
| 03 19 25 BoS Meeting, Oxford, CT Part 1 of 2 | 2025-03-19 |
| 03-05-25 Board of Selectmen Meeting - Oxford, CT | 2025-03-05 |
| 02-19-25 Board of Selectmen Meeting Oxford, CT | 2025-02-19 |
| 02-05-25 Town Meeting - Oxford, CT | 2025-02-05 |
| 02-05-25 Town Meeting - Lot 1, E Commerce Drive, Oxford, CT | 2025-02-05 |
| 01 08 25 BoS Special Meeting Part 1 of 2- Oxford CT | 2025-01-08 |
| 10 16 24 BoS Meeting, Oxford, CT | 2024-10-16 |


### Tabs never crawled

| channel | tab |
| --- | --- |
| Town of Oxford, Ct. Board of Selectmen | videos |
| Oxford Underground Press (citizen journalism, Oxford CT) | streams |


---


_Generated 2026-08-31T14:43:03 -- regenerate with `.venv/bin/python3 analysis/generate_surveillance_report.py --town "Oxford"`_

