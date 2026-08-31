# Surveillance-tech report: New Hartford


## At a glance: New Hartford

This report collects every mention of surveillance technology found in **New Hartford**'s recorded public meetings -- automatically transcribed, then keyword-scanned. Each mention below links straight to the moment in the source video, so anything here can be checked against the recording itself.

- **2 mentions** across **1 meeting**
- **First mention:** 2026-02-03  |  **Most recent:** 2026-02-03
- **Technologies discussed:** drone
- **Coverage:** 59 of 136 known New Hartford meetings transcribed (43%)
- **Still incomplete:** 77 known meetings are not yet transcribed, so an absence here is not proof a topic never came up.


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

**[Download New Hartford's meeting transcripts (.zip)](https://github.com/unseenpower/ct-mass-surveillance/releases/download/transcript-archives-2026-08/new-hartford-meeting-transcripts.zip)**


Every finding in this report is a keyword match against exactly these files. Download them to check a quote in its full context, or to search for something this report's keyword list does not cover.


**What's inside:** one plain-text `.txt` file per meeting, named `<date>_<video-id>_<meeting-title>.txt`, plus a `MANIFEST.txt` giving the date range and how much of the town's video archive is transcribed.


**How to use it**

```bash
unzip new-hartford-meeting-transcripts.zip -d new-hartford
cd new-hartford

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
| drone | 2 | 1 | 2026-02-03 | 2026-02-03 |


## Timeline

1 meetings surfaced a finding (1 dated, spanning 2026-02-03 to 2026-02-03; 0 of unknown date, listed last).


### 2026-02-03 -- Board of Education

**New Hartford Public Schools - Board Meeting - 02/03/2026** _(topics: drone)_

- `drone` [▸](https://www.youtube.com/watch?v=gCzwkInEPII&t=324s)  > ...opportunities. Sixth grade is also working on creating a drone container designed to help remote villages get medicine faster and more efficiently. Working together in a...

- `drone` [▸](https://www.youtube.com/watch?v=gCzwkInEPII&t=331s)  > ...more efficiently. Working together in a group of four, students will be designing drone containers to keep an ice cube frozen. Our schools have been learning together...


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

- **[2026-02-03] Board of Education** -- New Hartford Public Schools - Board Meeting - 02/03/2026
  > ...more efficiently. Working together in a group of four, students will be designing drone containers to keep an ice cube frozen. Our schools have been learning together...
  [Watch on YouTube ▸](https://www.youtube.com/watch?v=gCzwkInEPII&t=331s)  _(term: drone, unreviewed)_

- **[2026-02-03] Board of Education** -- New Hartford Public Schools - Board Meeting - 02/03/2026
  > ...opportunities. Sixth grade is also working on creating a drone container designed to help remote villages get medicine faster and more efficiently. Working together in a...
  [Watch on YouTube ▸](https://www.youtube.com/watch?v=gCzwkInEPII&t=324s)  _(term: drone, unreviewed)_


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
- Active meeting bodies: 7
- Videos registered: 136 (fetched: 59, no captions: 10)
- Date range covered: 2009-10-27 to 2026-08-18 (all 136 videos dated)


### Channels

| display_name | channel_id | handle |
| --- | --- | --- |
| NHPS Board of Education (New Hartford, CT) | new_hartford_boe | @nhpsboardofeducation734 |
| NewHartfordPlus.com | new_hartford_plus |  |


### Tab crawl history

| channel_id | tab | last_crawled_at | video_count |
| --- | --- | --- | --- |
| new_hartford_boe | streams | 2026-08-31 13:37:00.059979 | 27 |
| new_hartford_boe | videos | 2026-08-31 13:37:01.272973 | 48 |
| new_hartford_plus | videos | 2026-08-31 14:16:08.922301 | 182 |


## Registered meeting bodies

| body_name | category | active | video_count |
| --- | --- | --- | --- |
| Board of Finance | budget_finance | True | 11 |
| Board of Selectmen | council | True | 13 |
| Board of Education | education | True | 97 |
| Regional School District 7 Board of Education | education | True | 7 |
| Planning & Zoning Commission | other | True | 1 |
| Town Meeting | other | True | 2 |
| Water Pollution Control Authority | other | True | 5 |


## Agenda/minutes coverage

- Agenda sources registered: 1
- Documents registered: 0 (fetched: 0)
- Date range covered: *no agenda document on file carries a parseable date yet*


### Agenda sources

| source_id | platform | base_url | status |
| --- | --- | --- | --- |
| new_hartford_custom | custom | https://www.newhartfordct.gov/minutes-and-agendas | unconfirmed |


## Research log

| logged_at | field_name | new_value | source | by |
| --- | --- | --- | --- | --- |
| 2026-08-27 15:11:34.550850 | agenda_platform | Virtual Towns & Schools (VT&S) Drupal-family CMS -- theme path /sites/all/themes/custom/sites/newhartfordct/vts_newhartfordct/. Per-board agenda/minutes listings at /node/<id>/agenda and /node/<id>/minutes, plus a site-wide /minutes-and-agendas index. Not AgendaCenter/CivicClerk/Granicus/PrimeGov/Municode. Same CMS family as North Branford and Oxford's IP neighbourhood (207.38.x) though those two are CivicPlus. | r.jina.ai extraction of newhartfordct.gov, 2026-08-27 | claude |
| 2026-08-27 15:11:34.550850 | both_tabs_checked | new_hartford_boe: /videos 48 + /streams 27 = 75 combined. new_hartford_plus: /videos 182, no /streams tab (yt-dlp: "This channel does not have a streams tab"). Combined corpus 257 titles. | yt-dlp --flat-playlist crawl of both tabs on both channels, 2026-08-27 | claude |
| 2026-08-27 15:11:34.550850 | channel_found_boe | "NHPS Board of Education" (UCX-_ZlomWmjG81dc_QM3rfg, @nhpsboardofeducation734) confirmed as New Hartford CT (not New Hartford NY). Evidence: every video description reads "Regular meeting of the New Hartford Public Schools Board of Education"; New Hartford NY's district is named "New Hartford Central School District" (verified by fetching newhartfordschools.org) and has its own separate YouTube presence; and DECISIVELY, newhartfordct.gov's own Board of Education page lists Regular Meetings on August 18, 2026 and June 2, 2026, exactly matching this channel's "New Hartford Public Schools - Board Meeting - 08/18/2026" and "- 06/02/2026" videos. | yt-dlp probe + per-video description dump + r.jina.ai extraction of newhartfordct.gov/board-of-education-new-hartford (site is Cloudflare-challenge-gated to curl/WebFetch), 2026-08-27 | claude |
| 2026-08-27 15:11:34.550850 | channel_found_historical | "NewHartfordPlus.com" (UCRRFcV06kuA5TlX1DqY0PGQ) confirmed New Hartford CT by its own title text ("WPCA Meeting, April ..., New Hartford, CT", "Northwestern Regional #7's proposed budget - New Hartford, CT", Brodie Park, Chapin Park, Town Hill, Bakerville). Citizen archive carrying real BOS/BOF/WPCA/BOE meetings, but content stops around 2013-2014 -- registered as historical coverage, not a live source. | yt-dlp ytsearch + --flat-playlist crawl of both tabs, 2026-08-27 | claude |
| 2026-08-27 15:11:34.550850 | channel_not_found_current_town_government | No CURRENT town-government video source exists: newhartfordct.gov has zero YouTube/livestream/Zoom/video references on its homepage, Board of Selectmen page, Board of Education page, or boards index. Board of Selectmen / Board of Finance / WPCA / P&Z are registered anyway (they have 2011-2014 coverage via new_hartford_plus) so the currency gap is visible in reports rather than silent. | r.jina.ai extraction of newhartfordct.gov, /board-of-selectmen, /board-of-education-new-hartford and the site URL index, 2026-08-27 | claude |
| 2026-08-27 15:15:16.308446 | dry_run_sanity_check | new_hartford_boe: /videos 48 listed / 48 matched, /streams 27 listed / 27 matched. new_hartford_plus: /videos 182 listed / 61 matched, no /streams tab. Combined 136/257 (52.9%). | ingest/fetch_channel_transcripts.py --tabs videos,streams --mode filtered --dry-run against the live DB after seeding, 2026-08-27 | claude |
| 2026-08-27 15:11:34.550850 | patterns_validated_from_real_titles | Combined 136/257 titles matched (52.9%): new_hartford_boe 75/75 (100%), new_hartford_plus 61/182 (33.5%). The low historical-channel rate is honest -- most of that channel is a 2011 candidates' "Town Hall Forum" question series and community events, not meetings. | Python pattern validation against both full corpora, 2026-08-27 | claude |
| 2026-08-27 15:11:34.550850 | shared_channel_leak_check | Full CT-town-name scan of both corpora. new_hartford_boe: only "New Hartford" appears. new_hartford_plus: 4 Barkhamsted mentions, ALL non-government (July 4th parade x2, July 4th ceremony, "Filling The Barkhamsted Skating Rink") -- no Barkhamsted government content, so neither channel is a shared municipal channel and unanchored patterns are safe. Note Barkhamsted is itself already onboarded on a different channel. | Python CT-town-name scan of both full corpora, 2026-08-27 | claude |


## Gaps and caveats


### Videos with no captions available (10 shown, max 25)

| title | upload_date |
| --- | --- |
| Regional7_questions.flv | 2010-04-13 |
| Regional7_2.flv | 2010-04-12 |
| Region 7 Budget -2 | 2010-03-15 |
| Region 7 Budget - Introduction | 2010-03-15 |
| Dr. O'Reilly presents the School Budget - Part 4 | 2010-03-13 |
| Dr. O'Reilly presents the School Budget - Part 3 | 2010-03-13 |
| Dr. O'Reilly presents the School Budget - Part 2 | 2010-03-13 |
| Dr. O'Reilly presents the School Budget - Part 1 | 2010-03-13 |
| BOE at BOF- (4) | 2010-03-13 |
| BOE Comments | 2010-03-11 |


### Tabs never crawled

| channel | tab |
| --- | --- |
| NewHartfordPlus.com | streams |


---


_Generated 2026-08-31T14:41:09 -- regenerate with `.venv/bin/python3 analysis/generate_surveillance_report.py --town "New Hartford"`_

