# Mass surveillance in Connecticut

<figure class="map-gif">
<a href="analysis/who-searches-ct-map.html" aria-label="Open the interactive map: who searches Connecticut's plate-reader cameras">
<picture>
<source media="(prefers-reduced-motion: reduce)" srcset="analysis/who-searches-ct-poster.png">
<img src="analysis/who-searches-ct.gif" width="1000" height="562" fetchpriority="high" alt="An animated map rings outward from six Connecticut towns: the towns themselves (0.9% of searches of their cameras), their neighbours, all of Connecticut (3.46%), New York and New England intelligence centres, every regional centre, then every department in the country (100%). Each step shows a quote from a Connecticut police official or Flock representative saying the data is the town's to control and is audited. The last frame: only 3.46% of 12,895,873 searches were run by any Connecticut agency.">
</picture>
</a>
<figcaption>What officials told the public, against who actually searched. <a href="analysis/who-searches-ct-map.html">Step through the interactive map →</a></figcaption>
</figure>

This site puts the record in one place: what each Connecticut police
department searched, and what each town's officials have said about
surveillance technology in their own public meetings. Every figure links back
to its source — a released audit log, or the exact second of a meeting video —
so you can check it yourself.

**Want to do something about it?** See [flockoff.io](https://flockoff.io).

[Look at your town's police searches →](analysis/towns/index.md){ .md-button .md-button--primary }
[Find your town in the matrix](cross-town-matrix.md){ .md-button }

## What's here

<div class="town-grid">
<a class="town-card" href="analysis/towns/">
<span class="tc-name">Your police department's searches</span>
<span class="tc-big">56</span>
<span class="tc-lbl">department dashboards</span>
<span class="tc-stats">Every licence-plate search each Connecticut department ran that reached six towns' cameras — filter by month, stated reason and how far it reached.</span>
</a>
<a class="town-card" href="cross-town-matrix/">
<span class="tc-name">Cross-town matrix</span>
<span class="tc-big">99</span>
<span class="tc-lbl">towns side by side</span>
<span class="tc-stats">Every town, every surveillance technology, mention counts from public meetings — each linking to that town's full report.</span>
</a>
<a class="town-card" href="this-week-in-surveillance/">
<span class="tc-name">This Week in Surveillance</span>
<span class="tc-big">7</span>
<span class="tc-lbl">days, refreshed</span>
<span class="tc-stats">What entered the record this week: meetings held, towns newly covered, and topics coming up for the first time in a town.</span>
</a>
<a class="town-card" href="meetings-to-watch/">
<span class="tc-name">Meetings to watch</span>
<span class="tc-big">Next</span>
<span class="tc-lbl">where it comes up</span>
<span class="tc-stats">Meetings already scheduled at bodies that keep returning to surveillance technology. For deciding which meeting is worth an evening.</span>
</a>
<a class="town-card" href="foia/ct-alpr-foia-template/">
<span class="tc-name">ALPR FOIA request template</span>
<span class="tc-big">FOIA</span>
<span class="tc-lbl">ask your own town</span>
<span class="tc-stats">A fill-in-the-blanks Connecticut FOI Act request covering Flock and the Axon in-car system most towns have never mentioned in public.</span>
</a>
<a class="town-card" href="topics/mentions/alpr/">
<span class="tc-name">Topic reports</span>
<span class="tc-big">17</span>
<span class="tc-lbl">technologies</span>
<span class="tc-stats">One page per technology — ALPR, drones, facial recognition, real-time crime centres — gathering what every town said about it.</span>
</a>
<a class="town-card" href="data/">
<span class="tc-name">findings.csv</span>
<span class="tc-big">CSV</span>
<span class="tc-lbl">the whole dataset</span>
<span class="tc-stats">Every finding of mass surveillance technology in Connecticut's public meetings, in one machine-readable file: <!-- stats:start -->7,004 rows, 101 towns, 18 topics<!-- stats:end -->, each linked to the exact second of the meeting video.</span>
</a>
<div class="town-card soon">
<span class="tc-name">Explainers</span>
<span class="tc-big">Soon</span>
<span class="tc-lbl">coming soon</span>
<span class="tc-stats">Plain-language pages on how licence-plate readers actually work, one question per page. See below.</span>
</div>
</div>

!!! warning "Read this before citing anything"

    The per-town findings are **raw keyword matches, not verified claims**.
    Keywords are ambiguous — "drone" can mean talking at length, "flock" a
    bird. Known false positives of that kind are removed, but a listed mention
    is still a pointer to a place in the record, not a finding in itself.

    **Absence of mentions is not evidence that a town has no surveillance
    technology.** It often means the transcripts have not been fetched yet,
    that meetings were not recorded or captioned, or that the town's video
    archive lives on a platform this pipeline does not read. Every report
    states its own coverage — read the "Coverage status" section first.

## Coming soon: explainers

Plain-language pages on how the data side of licence-plate readers works, one
question per page. In preparation:

- **Read the search record yourself** — what a search event is, and three things about this data that are easy to get backwards
- **What the camera actually records**
- **Hotlists, and what a "hit" means**
- **The search reason field**
- **Not the officer you know** — who is actually searching your town's cameras
- **Not the camera on the street**
- **Not lost puppies**
- **Not only Flock**
- **Nobody had to say yes to mass surveillance**
- **How this gets bought**
- **The transparency portal**
- **The four FOIA artifacts**
- **Reading a search log honestly**
- **Check your own town**

## Searching

Use the search box at the top of any page. It covers every town report, topic
index and FOIA document on this site, and runs entirely in your browser.

## Raw transcript archives

The plain-text meeting transcripts behind every report are published as
[release assets](https://github.com/unseenpower/ct-mass-surveillance/releases)
— one `.zip` per town, covering **92 Connecticut towns**. Each archive
contains a `MANIFEST.txt` giving its transcript count, the meeting dates it
covers, and what share of that town's known meetings have actually been
transcribed.

These are machine transcriptions of automatic captions, not official minutes.
They contain mis-hearings, missing speaker attribution and dropped audio.
**Quote the video, not the transcript.**

## Two kinds of topic file

The distinction matters and the directories keep them apart:

- **`topics/<topic>.md`** — hand-curated cross-town indexes. These are
  claims, assembled deliberately, e.g. "cameras implemented with no legal
  process."
- **`topics/mentions/<topic>.md`** — generated per-technology mention
  reports. These are not claims: they are raw keyword matches with their
  source links attached, regenerated automatically.
