# Mass surveillance in Connecticut

Public reference documents on mass surveillance in Connecticut — research
briefs, FOIA materials, and the public record of what Connecticut towns have
said about surveillance technology in their own meetings.

Everything here is built from primary sources: public meeting transcripts,
agenda and minutes documents, and records released under the Connecticut
Freedom of Information Act. Every finding links back to the exact second of
the source recording so you can check it yourself.

!!! warning "Read this before citing anything"

    The per-town findings are **raw keyword matches, not verified claims**.
    Keywords are ambiguous — "drone" can mean a bee, "flock" a bird. A listed
    mention is a pointer to a place in the record, not a finding in itself.

    **Absence of mentions is not evidence that a town has no surveillance
    technology.** It often means the transcripts have not been fetched yet,
    that meetings were not recorded or captioned, or that the town's video
    archive lives on a platform this pipeline does not read. Every report
    states its own coverage — read the "Coverage status" section first.

## Start here

**[Cross-town matrix](cross-town-matrix.md)** — every town, every
surveillance-tech topic, mention counts side by side, each linking through to
that town's full report. The fastest way to see which towns are discussing
ALPR, drones, facial recognition or real-time crime centres, and how one town
compares to its neighbours.

**[This Week in Surveillance](this-week-in-surveillance.md)** — what entered
the record in the last seven days: meetings actually held this week, towns
whose transcripts were downloaded for the first time, and topics appearing for
the first time in a town already being watched. Regenerated continuously.

**[ALPR FOIA request template](foia/ct-alpr-foia-template.md)** — a
fill-in-the-blanks Connecticut FOI Act request covering both ALPR systems a
police department is likely to run: the Flock Safety network, and the Axon
in-car system most towns have never mentioned in public. Built from two real
requests to West Hartford PD, with the homework to do first, the statutory
cites, and notes on why each item is worded the way it is.

**[Meetings to watch](meetings-to-watch.md)** — where surveillance technology
is most likely to come up next: meetings towns have already scheduled at
bodies that have raised it before, and the ~160 committees and councils across
Connecticut that keep returning to the subject. For deciding which meeting is
worth an evening.

**[Topic reports](topics/mentions/alpr.md)** — the same data cut the other
way: one file per technology, gathering every town's mentions of it into a
single document. Start here to read what a dozen towns said about ALPR without
opening a dozen town reports.

**[findings.csv](data/README.md)** — every mention in one machine-readable
file: 3,528 rows, 81 towns, 14 topics, each with a timestamped link to the
exact second of the meeting video. For spreadsheets, scripts, or pointing an
AI assistant at.

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
