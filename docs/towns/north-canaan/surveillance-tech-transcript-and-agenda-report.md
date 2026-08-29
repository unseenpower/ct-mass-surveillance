# Surveillance-tech transcript report: North Canaan


_Generated 2026-08-29T10:19:14 -- regenerate with `.venv/bin/python3 analysis/generate_surveillance_report.py --town "North Canaan"`_


## Coverage status

- Channels registered: 1
- Active meeting bodies: 9
- Videos registered: 101 (fetched: 101, no captions: 0)
- Date range covered: 2025-01-28 to 2026-08-18 (all 101 videos dated)


### Channels

| display_name | channel_id | handle |
| --- | --- | --- |
| Town of North Canaan, CT | north_canaan_ct | @TownofNorthCanaanCT-h9s |


### Tab crawl history

| channel_id | tab | last_crawled_at | video_count |
| --- | --- | --- | --- |
| north_canaan_ct | streams | 2026-08-29 08:26:19.618583 | 0 |
| north_canaan_ct | videos | 2026-08-29 08:26:21.506168 | 101 |


## Registered meeting bodies

| body_name | category | active | video_count |
| --- | --- | --- | --- |
| Board of Finance | budget_finance | True | 21 |
| Board of Selectmen | council | True | 25 |
| Board of Education | education | True | 0 |
| Events Committee | other | True | 6 |
| Inland Wetland Commission | other | True | 5 |
| Planning & Zoning Commission | other | True | 18 |
| Recreation Commission | other | True | 17 |
| Town Meeting | other | True | 5 |
| Zoning Board of Appeals | other | True | 4 |


**Zero videos registered for:** Board of Education


## Mentions by topic: first seen / most recent

| topic | mentions | meetings | first_seen | most_recent |
| --- | --- | --- | --- | --- |
| drone | 2 | 1 | 2025-04-28 | 2025-04-28 |


## Timeline

1 meetings surfaced a finding (1 dated, spanning 2025-04-28 to 2025-04-28; 0 of unknown date, listed last).


### 2025-04-28 -- Events Committee

**Events Committee Quarterly Meeting (4-28-2025)** _(topics: drone)_

- `drone` [▸](https://www.youtube.com/watch?v=tXrZYp3sLm4&t=2072s)  > ...year, um we took some funds out of the firework budget. We moved them to the drone show. So, to get the exact same show that we had last year, which was a shorter show,...

- `drone` [▸](https://www.youtube.com/watch?v=tXrZYp3sLm4&t=2180s)  > ...Last year it was shorter Mhm. because of the drones. This year there's no drone show, so I think people are going to want to just have the expanded fireworks show...


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

- **[2025-04-28] Events Committee** -- Events Committee Quarterly Meeting (4-28-2025)
  > ...Last year it was shorter Mhm. because of the drones. This year there's no drone show, so I think people are going to want to just have the expanded fireworks show...
  [Watch on YouTube ▸](https://www.youtube.com/watch?v=tXrZYp3sLm4&t=2180s)  _(term: drone, unreviewed)_

- **[2025-04-28] Events Committee** -- Events Committee Quarterly Meeting (4-28-2025)
  > ...year, um we took some funds out of the firework budget. We moved them to the drone show. So, to get the exact same show that we had last year, which was a shorter show,...
  [Watch on YouTube ▸](https://www.youtube.com/watch?v=tXrZYp3sLm4&t=2072s)  _(term: drone, unreviewed)_


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


## Agenda/minutes coverage

- Agenda sources registered: 1
- Documents registered: 0 (fetched: 0)
- Date range covered: *no agenda document on file carries a parseable date yet*


### Agenda sources

| source_id | platform | base_url | status |
| --- | --- | --- | --- |
| north_canaan_custom | custom | https://www.northcanaan.org/minutes-agendas | unconfirmed |


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


## Research log

| logged_at | field_name | new_value | source | by |
| --- | --- | --- | --- | --- |
| 2026-08-27 15:11:36.463048 | agenda_platform | northcanaan.org runs on CivicLift (footer branding), agendas/minutes index at /minutes-agendas, per-meeting event pages at /events/<slug>. Same platform family as Morris (this batch) and Goshen -- but unlike those two, North Canaan does have a real working YouTube meeting archive, so CivicLift is not by itself a transcript blocker. | curl of northcanaan.org, 2026-08-27 | claude |
| 2026-08-27 15:11:36.463048 | both_tabs_checked | /videos 101 titles; /streams tab does not exist (yt-dlp: "This channel does not have a streams tab"). | yt-dlp --flat-playlist crawl of both tabs, 2026-08-27 | claude |
| 2026-08-27 15:11:36.463048 | channel_found | "Town of North Canaan, CT" (UCkyVLXscOR0tQu2zDMO219A, @TownofNorthCanaanCT-h9s) confirmed via direct yt-dlp --skip-download --print channel probe. | yt-dlp channel probe + --flat-playlist crawl of both tabs (WebSearch budget exhausted, ytsearch: fallback), 2026-08-27 | claude |
| 2026-08-27 15:11:36.463048 | collision_check_canaan | COLLISION RISK CHECKED: Canaan CT (Falls Village) is a different town, onboarded in this same batch on channel canaan_falls_village_ct (UCCtgav-oe3SMmnUO11xIKew, @TownofCanaanFallsVillage). North Canaan's channel is a completely separate UC id and handle -- no shared channel exists between the two towns, so match_body() cannot cross-apply patterns and no anchoring is required on either side. Independently verified: a CT-town-name scan of North Canaan's full 101-title corpus found ZERO town-name mentions of any kind (titles are bare "<Body> <Frequency> Meeting (<date>)"). | yt-dlp probes of both channels + Python CT-town-name scan of the full North Canaan corpus + town_channels query of the live DB, 2026-08-27 | claude |
| 2026-08-27 15:15:18.183164 | dry_run_sanity_check | north_canaan_ct: /videos 101 listed / 101 matched, no /streams tab. Combined 101/101 (100%). | ingest/fetch_channel_transcripts.py --tabs videos,streams --mode filtered --dry-run against the live DB after seeding, 2026-08-27 | claude |
| 2026-08-27 15:15:18.183164 | patterns_validated_from_real_titles | 101/101 titles matched (100%) across 9 registered bodies. Every title matches -- the last holdout ("Annual Town Budget Meeting") is covered by the broadened Town Meeting pattern. Confirmed by the tool's own --dry-run: 101 listed, 101 matched. | Python pattern validation against the full 101-title corpus, 2026-08-27 | claude |


## Gaps and caveats


### Videos with no captions available (0 shown, max 25)

*(none)*


### Tabs never crawled

*(none)*

