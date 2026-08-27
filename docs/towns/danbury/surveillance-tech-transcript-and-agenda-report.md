# Surveillance-tech transcript report: Danbury


_Generated 2026-08-27T15:38:52 -- regenerate with `.venv/bin/python3 analysis/generate_surveillance_report.py --town "Danbury"`_


## Coverage status

- Channels registered: 1
- Active meeting bodies: 4
- Videos registered: 20 (fetched: 20, no captions: 0)
- Date range covered: None to None


### Channels

| display_name | channel_id | handle |
| --- | --- | --- |
| City of Danbury | city_of_danbury | @CityofDanburyConnecticut |


### Tab crawl history

| channel_id | tab | last_crawled_at | video_count |
| --- | --- | --- | --- |
| city_of_danbury | streams | 2026-08-27 09:54:33.354830 | 44 |
| city_of_danbury | videos | 2026-08-27 09:54:34.991563 | 87 |


## Registered meeting bodies

| body_name | category | active | video_count |
| --- | --- | --- | --- |
| City Council | council | True | 17 |
| Committee of the Whole | council | True | 1 |
| General Government Committee | other | True | 2 |
| Police Commission | public_safety | True | 0 |


**Zero videos registered for:** Police Commission


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


## Agenda/minutes coverage

- Agenda sources registered: 1
- Documents registered: 0 (fetched: 0)
- Date range covered: None to None


### Agenda sources

| source_id | platform | base_url | status |
| --- | --- | --- | --- |
| danbury_granicus | granicus | https://danbury.granicus.com/ViewPublisher.php?view_id=3 | unconfirmed |


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
| 2026-08-13 14:22:06.812544 | channel_found | city_of_danbury (@CityofDanburyConnecticut) -- confirmed real via yt-dlp, but real meeting-recording coverage on this channel effectively stops 2021-2022 (see platform_blocker entry) | yt-dlp-confirmed handle | claude |
| 2026-08-13 14:22:06.812544 | committees_confirmed | City Council, Committee of the Whole, and a "General Government" session (I/II) confirmed via real title matches in the 44-title historical /streams crawl. No Board of Finance/Board of Estimate-equivalent body found anywhere in this research -- danbury-ct.gov's Boards & Commissions page (40 boards listed) has none; budget appears to be handled directly by City Council. Police Commission confirmed to exist via ACLU-CT's statewide map but not independently verified by name/structure. | danbury-ct.gov/157/Boards-Commissions, flashlight.acluct.org/police-commissions, yt-dlp --flat-playlist crawl of youtube.com/@CityofDanburyConnecticut streams+videos, 2026-08-13 | claude |
| 2026-08-13 14:22:06.812544 | platform_blocker | Danbury's CURRENT meeting archive is Granicus (danbury.granicus.com/ViewPublisher.php?view_id=3), actively maintained through the present. A local news article (WLAD) confirms Council meetings still stream live to the YouTube channel at meeting time, but recordings are not showing up in a flat-playlist crawl of /videos or /streams afterward -- the channel's real meeting-recording content, as far as this crawl can see, stops around 2020-2021. fetch_channel_transcripts.py only supports platform=youtube, so Danbury needs the same new Granicus-scraping tooling as Stamford (seed_stamford_blocked.sql) before CURRENT coverage is reachable. Registered the channel anyway (unlike fully-blocked Stamford) because real, if stale, 2020-2021 meeting content genuinely exists there and is worth capturing. | danbury.granicus.com/ViewPublisher.php?view_id=3, wlad.com/local-headlines/501645 | claude |
| 2026-08-13 14:22:06.812544 | scope_boundary_confirmed | Career Academy Steering Committee (real, several title matches) excluded as a school-construction-project committee, not surveillance-tech oversight in the sense this project tracks -- same precedent as Fire Commission in Milford, noted rather than silently dropped. | yt-dlp --flat-playlist crawl of youtube.com/@CityofDanburyConnecticut streams, 2026-08-13 | claude |


## Gaps and caveats


### Videos with no captions available (0 shown, max 25)

*(none)*


### Tabs never crawled

*(none)*

