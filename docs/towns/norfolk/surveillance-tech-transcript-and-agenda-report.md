# Surveillance-tech report: Norfolk


## At a glance: Norfolk

This report collects every mention of surveillance technology found in **Norfolk**'s recorded public meetings -- automatically transcribed, then keyword-scanned. Each mention below links straight to the moment in the source video, so anything here can be checked against the recording itself.


**No surveillance-technology mentions have been found in this town's meetings yet.** That is not the same as none existing -- read the coverage note below, and [Gaps and caveats](#gaps-and-caveats), before treating this as an answer about the town.


- **Coverage:** 39 of 42 known Norfolk meetings transcribed (93%)


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

**[Download Norfolk's meeting transcripts (.zip)](https://github.com/unseenpower/ct-mass-surveillance/releases/download/transcript-archives-2026-08/norfolk-meeting-transcripts.zip)**


Every finding in this report is a keyword match against exactly these files. Download them to check a quote in its full context, or to search for something this report's keyword list does not cover.


**What's inside:** one plain-text `.txt` file per meeting, named `<date>_<video-id>_<meeting-title>.txt`, plus a `MANIFEST.txt` giving the date range and how much of the town's video archive is transcribed.


**How to use it**

```bash
unzip norfolk-meeting-transcripts.zip -d norfolk
cd norfolk

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
- Active meeting bodies: 4
- Videos registered: 42 (fetched: 39, no captions: 0)
- Date range covered: 2020-12-10 to 2024-05-08 (all 42 videos dated)


### Channels

| display_name | channel_id | handle |
| --- | --- | --- |
| Botelle Media (Norfolk CT Board of Education) | botelle_media |  |


### Tab crawl history

| channel_id | tab | last_crawled_at | video_count |
| --- | --- | --- | --- |
| botelle_media | videos | 2026-08-31 14:02:17.806807 | 44 |


## Registered meeting bodies

| body_name | category | active | video_count |
| --- | --- | --- | --- |
| Board of Selectmen | council | True | 0 |
| Board of Education | education | True | 42 |
| Conservation Commission | other | True | 0 |
| Planning and Zoning Commission | other | True | 0 |


**Zero videos registered for:** Board of Selectmen, Conservation Commission, Planning and Zoning Commission


## Agenda/minutes coverage

- Agenda sources registered: 1
- Documents registered: 0 (fetched: 0)
- Date range covered: *no agenda document on file carries a parseable date yet*


### Agenda sources

| source_id | platform | base_url | status |
| --- | --- | --- | --- |
| norfolk_custom | custom | https://norfolkct.org/municipal-meetings/ | unconfirmed |


## Research log

| logged_at | field_name | new_value | source | by |
| --- | --- | --- | --- | --- |
| 2026-08-27 15:11:35.511444 | agenda_platform | WordPress site serving agenda/minutes PDFs from an S3 bucket: norfolkct-media.s3.us-east-2.amazonaws.com/wp-content/uploads/<year>/<month>/<file>.pdf. Same custom-S3 shape as Barkhamsted's and Canaan's document platforms. Not a recognized vendor. | r.jina.ai extraction of norfolkct.org and its board pages, 2026-08-27 | claude |
| 2026-08-27 15:11:35.511444 | both_tabs_checked | botelle_media: /videos 44 titles; /streams tab does not exist (yt-dlp: "This channel does not have a streams tab"). | yt-dlp --flat-playlist crawl of both tabs, 2026-08-27 | claude |
| 2026-08-27 15:11:35.511444 | channel_found | "Botelle Media" (UCszM4--vdcO5WCbXvNAyyIQ) confirmed as Norfolk CT's Board of Education video source -- found by resolving the per-meeting YouTube "Recording" link (hhOJl9yu0wI, "Norfolk Board of Ed - May 2024") published on norfolkct.org's own Board of Education page. Botelle Elementary is Norfolk CT's own school. 44 /videos titles, 40 containing "Norfolk"; no /streams tab (yt-dlp confirmed). Not shared with another town. | r.jina.ai extraction of norfolkct.org/board-of-education + yt-dlp video->channel resolution + --flat-playlist crawl of both tabs, 2026-08-27 | claude |
| 2026-08-27 15:15:17.247138 | dry_run_sanity_check | botelle_media: /videos 44 listed / 42 matched, no /streams tab. Combined 42/44 (95.5%). | ingest/fetch_channel_transcripts.py --tabs videos,streams --mode filtered --dry-run against the live DB after seeding, 2026-08-27 | claude |
| 2026-08-27 15:11:35.511444 | false_lead_rejected_out_of_state | MAJOR FALSE LEAD: "Norfolk Community Television (NCTV)" (UCyBCWjPauEsLGgFqfivJI3Q, @NorfolkCable) is Norfolk, MASSACHUSETTS -- it is the top ytsearch hit for "Norfolk Connecticut Board of Selectmen meeting" and carries 4,416 titles of real-looking government meetings. Rejected on two independent grounds: (a) its body vocabulary is Massachusetts, not Connecticut -- "Select Board", "Planning Board", "School Committee", "Advisory Committee" (the MA finance-committee equivalent); (b) a marker scan of the full 4,416-title corpus found 75 Massachusetts-specific references (King Philip Regional / King Philip School Committee, Freeman Kennedy School, Wrentham, Walpole, Millis, Medway) and ZERO Norfolk CT markers (Botelle School, Infinity Hall, Region 7/Northwestern Regional, Winsted, Colebrook, Canaan, Goshen, Litchfield). NOT registered. | yt-dlp --flat-playlist crawl of both NCTV tabs + Python vocabulary/marker analysis of the full corpus, 2026-08-27 | claude |
| 2026-08-27 15:15:17.247138 | patterns_validated_from_real_titles | 42/44 titles matched (95.5%). The 3 unmatched are a school Winter Concert, a Veteran's Day Celebration, and one "Norfolk Bd of Ed - April 2024 Meeting" variant now covered by the broadened pattern. | Python pattern validation against the full 44-title corpus, 2026-08-27 | claude |
| 2026-08-27 15:11:35.511444 | platform_blocker_town_government | Norfolk CT town-government meetings are NOT fetchable: norfolkct.org's "Municipal Meetings" listing marks meetings "VIA ZOOM" and "HYBRID (In-Person, ZOOM)", and the five per-meeting YouTube "Recording" links found on the Board of Selectmen page (OMd1bpnD7eU, pxqg_TUjlH0, zmIizBZ2OKE, jwLpa1ikAcY, tXObjNrlbPA) ALL resolve to "Video unavailable" -- unlisted or removed one-off uploads with no stable parent channel. Same Zoom-blocked shape as Goshen and Morris. Board of Selectmen / P&Z / Conservation registered as zero-coverage bodies so the gap is visible. | r.jina.ai extraction of norfolkct.org/municipal-meetings and /board-of-selectmen + yt-dlp probes of each linked video ID, 2026-08-27 | claude |


## Gaps and caveats


### Videos with no captions available (0 shown, max 25)

*(none)*


### Tabs never crawled

| channel | tab |
| --- | --- |
| Botelle Media (Norfolk CT Board of Education) | streams |


---


_Generated 2026-08-31T14:41:48 -- regenerate with `.venv/bin/python3 analysis/generate_surveillance_report.py --town "Norfolk"`_

