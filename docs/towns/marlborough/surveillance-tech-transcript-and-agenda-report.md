# Surveillance-tech report: Marlborough

<!-- freshness -->
!!! info "Mentions current to 27 September 2026"

    This report covers meetings processed up to **2026-09-27**. Anything newer shows up first in [This Week in Surveillance](../../this-week-in-surveillance.md).
<!-- /freshness -->

<!-- flockoff -->
!!! tip "Want to do something about it?"

    Visit **[flockoff.io](https://flockoff.io)** to find out what you can do.
<!-- /flockoff -->

## At a glance: Marlborough

<p class="glance-headline"><strong>Meetings not available yet</strong> for Marlborough</p>

**Meetings not available yet:** we have not found Marlborough's meeting recordings in a form we can use -- they may not be published online, or only behind a login or password. If you know where they are, or can help us get access, use the **Questions? Feedback?** button on any page (or the [feedback page](../../feedback.md)) to reach out and work with us to get Marlborough into the system.

This report collects every mention of surveillance technology in **Marlborough**'s public record that this project can read -- its recorded meetings once they are transcribed, its published agendas and minutes, and its police department's licence-plate search log where one has been released.


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

- Channels registered: 1
- Active meeting bodies: 0
- Videos registered: 0 (fetched: 0, no captions: 0)
- Date range covered: *no video in this corpus has a parseable upload date, so no range can be stated*


### Channels

| display_name | channel_id | handle |
| --- | --- | --- |
| Town of Marlborough CT | marlborough_ct_town | @TownofMarlboroughCT2024 |


### Tab crawl history

| channel_id | tab | last_crawled_at | video_count |
| --- | --- | --- | --- |
| marlborough_ct_town | videos | 2026-09-27 14:20:32.273803 | 2 |


## Registered meeting bodies

*(none)*


## Agenda/minutes coverage

- Agenda sources registered: 1
- Documents registered: 0 (fetched: 0)
- Date range covered: *no agenda document on file carries a parseable date yet*


### Agenda sources

| source_id | platform | base_url | status |
| --- | --- | --- | --- |
| marlborough_custom | custom | https://marlboroughct.gov/services/freedom_of_information_act/agendas___minutes.php | unconfirmed |


## Research log

| logged_at | field_name | new_value | source | by |
| --- | --- | --- | --- | --- |
| 2026-08-27 14:16:49.890924 | channel_found_no_content | Own "Town of Marlborough CT" YouTube channel confirmed via yt-dlp (UC_DmDtxEDzZ7XS8eNOhHhiA, @TownofMarlboroughCT2024, linked from marlboroughct.gov's own Services page) -- but only 2 non-meeting videos total, no /streams tab. Fresh discovery, independent of the old cross-town rejection notes (Preston/Wilton/Windsor Locks/Ashford/Barkhamsted), which never recorded this channel's ID. | WebFetch of marlboroughct.gov + marlboroughct.gov/services, yt-dlp --skip-download --print channel probe, yt-dlp --flat-playlist crawl of both tabs, 2026-08-27 | claude |
| 2026-08-27 14:16:49.890924 | false_lead_rejected | yt-dlp ytsearch for "Marlborough Board of Selectmen Meeting" surfaced one candidate video on a personal one-upload channel ("Louise Concodello", UCx0WEvHq2ytWE9AU6h7a2Jg) -- not an ongoing recurring source, rejected. No @marlboroughct handle exists (yt-dlp: HTTP 404). | yt-dlp ytsearch8: queries + direct handle probe, 2026-08-27 | claude |
| 2026-08-27 14:16:49.890924 | shared_channel_reconfirmed_zero_content | Re-crawled the full cvc (Community Voice Channel) corpus fresh (2023 /videos titles, no /streams tab) despite cvcct.org listing Marlborough as one of its 7 served towns: only 1 title contains "Marlborough" and it is a grocery-store ad ("Big Y Opening in Marlborough, CT"), not government content -- zero real Board of Selectmen/committee coverage, unlike the 79-401 real per-town titles found for each of the other 6 served towns in the same corpus. | yt-dlp --flat-playlist crawl of youtube.com/@communityvoicechannel (/videos + /streams) + grep of the full corpus for "marlborough", 2026-08-27 | claude |
| 2026-08-27 14:16:49.890924 | websearch_budget_exhausted_fallback | This session's WebSearch budget was already exhausted (200/200) before Marlborough research began. Fell back to yt-dlp ytsearch: for channel discovery per docs/onboarding_hartford.md's documented fallback, plus WebFetch of marlboroughct.gov directly. | Session state observed 2026-08-27 | claude |


## Gaps and caveats


### Videos with no captions available (0 shown, max 25)

*(none)*


### Tabs never crawled

| channel | tab |
| --- | --- |
| Town of Marlborough CT | streams |


## Get the full transcripts

*Marlborough has 0 transcripts so far -- too few to publish as an archive yet. It will appear here once the corpus grows.*


---


_Generated 2026-09-27T16:30:37 from Marlborough's meeting transcripts and agenda documents. Home addresses spoken during public comment are redacted; see the archive MANIFEST for what that means._

