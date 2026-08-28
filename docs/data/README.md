# Data

## `findings.csv`

Every surveillance-technology mention this project has found in Connecticut
municipal meeting transcripts, in one file. **3,528 rows, 81 towns, 14
topics.** One row per mention.

Raw URL, stable across regenerations:

```
https://raw.githubusercontent.com/unseenpower/ct-mass-surveillance/main/docs/data/findings.csv
```

This is the complete record. The
[topic reports](../topics/mentions/) are the readable version of the same
data, but they cap receipts at 12 per town so the pages stay renderable — so
they show roughly 1,400 of these 3,528 rows.

### Columns

| Column | Meaning |
| --- | --- |
| `town` | Connecticut municipality the meeting belongs to |
| `topic` | Technology category, e.g. `alpr`, `drone`, `rtcc`, `facial_recognition` |
| `term` | The specific search term that matched |
| `meeting_date` | Date of the meeting. Empty where the date could not be determined (242 rows) |
| `meeting_body` | Council, commission or committee, where identified |
| `video_title` | Title of the source recording |
| `timestamped_url` | Link to the exact second of the meeting video. Present on every row |
| `start_seconds` | Offset within the recording |
| `context` | The surrounding passage of speech, up to 300 characters |

### What a row is, and is not

**A row is a place in a public meeting where a search term appeared in the
auto-generated captions. It is not a verified claim that the town uses the
technology.**

Keywords are ambiguous — "drone" can mean a bee, "flock" a bird — and
automatic captions mis-transcribe. Genuine false positives are in this file:
one row is a `predictive_policing` term matching a Zoning Board of Appeals
discussion about a car repair shop. Every row carries `timestamped_url` for
exactly this reason. **Follow it and listen before citing anything.**

**A town's absence, or a low count, is not evidence it has avoided
surveillance technology.** It far more often means that town's meeting
backlog has not been downloaded yet, its meetings are not captioned, or its
video archive is on a platform this pipeline cannot read. Per-town coverage
is in the [cross-town matrix](../cross-town-matrix.md); read it before
drawing conclusions from what is missing.

### Source

The transcripts behind every row are published as
[release assets](https://github.com/unseenpower/ct-mass-surveillance/releases)
— one `.zip` per town, 92 towns.
