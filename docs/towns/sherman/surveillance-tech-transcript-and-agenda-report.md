# Surveillance-tech report: Sherman

<!-- freshness -->
!!! info "Mentions current to 27 September 2026"

    This report covers meetings processed up to **2026-09-27**. Anything newer shows up first in [This Week in Surveillance](../../this-week-in-surveillance.md).
<!-- /freshness -->

<!-- flockoff -->
!!! tip "Want to do something about it?"

    Visit **[flockoff.io](https://flockoff.io)** to find out what you can do.
<!-- /flockoff -->

## At a glance: Sherman

<p class="glance-headline"><strong>Meetings not available yet</strong> for Sherman</p>

**Meetings not available yet:** we have not found Sherman's meeting recordings in a form we can use -- they may not be published online, or only behind a login or password. If you know where they are, or can help us get access, use the **Questions? Feedback?** button on any page (or the [feedback page](../../feedback.md)) to reach out and work with us to get Sherman into the system.

This report collects every mention of surveillance technology in **Sherman**'s public record that this project can read -- its recorded meetings once they are transcribed, its published agendas and minutes, and its police department's licence-plate search log where one has been released.


## Contents

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
- [Get the full transcripts](#get-the-full-transcripts)


## Mentions by topic: first seen / most recent

*No surveillance-technology mentions found in this town's transcribed meetings yet.*


## Timeline

<!-- report-polish v1 -->

No meetings have surfaced a finding yet.


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

- Channels registered: 0
- Active meeting bodies: 0
- Videos registered: 0 (fetched: 0, no captions: 0)
- Date range covered: *no video in this corpus has a parseable upload date, so no range can be stated*


### Channels

*(none)*


### Tab crawl history

*(none)*


## Registered meeting bodies

*(none)*


## Agenda/minutes coverage

- Agenda sources registered: 1
- Documents registered: 0 (fetched: 0)
- Date range covered: *no agenda document on file carries a parseable date yet*


### Agenda sources

| source_id | platform | base_url | status |
| --- | --- | --- | --- |
| sherman_custom | custom | https://www.shermanct.gov/file-directory?file-type=Agenda%2CMinutes | confirmed |


## Research log

| logged_at | field_name | new_value | source | by |
| --- | --- | --- | --- | --- |
| 2026-08-27 16:02:07.041090 | agenda_platform_found | shermanct.gov exposes agendas and minutes through a filtered file directory at /file-directory?file-type=Agenda%2CMinutes, alongside a per-body /muni-events/ calendar. Custom CMS -- no CivicPlus/CivicClerk/Granicus branding. This is Sherman's only available workstream. | curl of shermanct.gov and /file-directory, 2026-08-27 | claude |
| 2026-08-27 16:02:07.041090 | channel_not_found | No meeting-video source exists for Sherman CT (pop. ~3,600, Fairfield County): no town YouTube channel, no citizen channel carrying meetings, no regional PEG channel, and no Vimeo/Granicus/Zoom archive named on shermanct.gov. Three ytsearch queries run. The only Sherman-CT-specific channel found was "Sherman CT News" (UCVVydKlsG8KxW-2Ito6J2yQ), which carries community/news clips and no meeting recordings -- not registered. | yt-dlp ytsearch12 x3 ("Sherman Connecticut Board of Selectmen meeting", "Town of Sherman CT Board of Selectmen", "Town of Sherman CT") + curl of shermanct.gov, 2026-08-27 | claude |
| 2026-08-27 16:02:07.041090 | domain_warning | The old townofsherman.ORG domain has been squatted and now serves an Indonesian online-slots site ("Dewidewitoto : Situs Slot Gacor dengan RTP Tinggi Hari Ini"). Sherman CT's real site is shermanct.gov. Do not use townofsherman.org for anything. The identical failure mode was found this same batch on sharonct.org -- worth checking for on any CT town whose .org resolves but reads oddly. | curl of townofsherman.org (returned the slots site) vs shermanct.gov (returned the real town site), 2026-08-27 | claude |
| 2026-08-27 16:02:07.041090 | out_of_state_collisions_rejected | Sherman is a heavy out-of-state collision and the searches surfaced several, all rejected on body-vocabulary grounds: "Sherman IL411" (Village Board of Sherman, ILLINOIS -- "Village Board" is not a CT body), "Sherman ISD" (Board of Trustees, Sherman, TEXAS -- an independent school district, a Texas-only structure), plus a Village of Cold Spring NY board, a Town of Peterborough NH "Select Board" and a Wolfeboro NH Board of Selectmen. None registered. | yt-dlp ytsearch result inspection, 2026-08-27 | claude |
| 2026-08-27 16:02:07.041090 | oversight_bodies_enumerated | Sherman's real oversight structure, from shermanct.gov's /muni-events/ calendar: Board of Selectmen, Board of Education, Planning & Zoning Commission, Inland Wetlands Commission, Conservation Commission, Historic District Commission, Commission on Aging, Commission for the Arts, Park & Recreation Commission, School Building Committee, Senior Center Building Committee, Town Meeting. Recorded but NOT registered as meeting_bodies rows -- there is no video corpus for patterns to match against, and registering them would create standing zero-match data-quality CRITICALs. Preserved here for whoever picks up the agenda workstream. | curl of shermanct.gov (/muni-events/ links), 2026-08-27 | claude |


## Gaps and caveats


### Videos with no captions available (0 shown, max 25)

*(none)*


### Tabs never crawled

*(none)*


## Get the full transcripts

*Sherman has 0 transcripts so far -- too few to publish as an archive yet. It will appear here once the corpus grows.*


---


_Generated 2026-09-27T16:37:10 from Sherman's meeting transcripts and agenda documents. Home addresses spoken during public comment are redacted; see the archive MANIFEST for what that means._

