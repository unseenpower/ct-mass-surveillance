# Data

## `findings.csv`

Every surveillance-technology mention this project has found in Connecticut
municipal records, in one file. One row per mention.

<!-- stats:start -->
**5,394 rows · 96 towns · 17 topics · 5,173 from meeting transcripts, 221 from
agenda and minutes documents.**
<!-- stats:end -->

Those counts are rewritten from the file itself every time it is published, so
they cannot drift away from what you actually download.

Raw URL, stable across regenerations:

```
https://raw.githubusercontent.com/unseenpower/ct-mass-surveillance/main/docs/data/findings.csv
```

This is the complete record. The [topic reports](../topics/mentions/) are the
readable version of the same data, but they cap receipts at 12 per town so the
pages stay renderable — so they show roughly a quarter of these rows.

### Columns

| Column | Meaning |
| --- | --- |
| `town` | Connecticut municipality the record belongs to |
| `source_kind` | `transcript` (spoken, from meeting captions) or `agenda` (written, from an agenda or minutes document) |
| `topic` | Technology category, e.g. `alpr`, `drone`, `rtcc`, `facial_recognition` |
| `term` | The specific search term that matched |
| `meeting_date` | Date of the meeting or document. Empty where it could not be determined |
| `meeting_body` | Council, commission or committee, where identified |
| `item_title` | Title of the source recording or document |
| `url` | Link to the exact second of the meeting video, or to the document. Present on every row |
| `start_seconds` | Offset within the recording. Empty for `agenda` rows, which have no timestamp |
| `context` | The surrounding passage, up to 300 characters |

`source_kind` is worth reading before you aggregate anything: a transcript row
is somebody *saying* a word out loud, an agenda row is a word *printed* in the
town's own paper. They are not interchangeable evidence, and mixing them
silently inflates a "mentions" count.

### What a row is, and is not

**A row is a place in a public record where a search term appeared. It is not a
verified claim that the town uses the technology.**

Keywords are ambiguous — "drone" can mean a bee, "flock" a bird — and automatic
captions mis-transcribe. Genuine false positives are in this file: one row is a
`predictive_policing` term matching a Zoning Board of Appeals discussion about a
car repair shop. Every row carries a `url` for exactly this reason. **Follow it
and listen before citing anything.**

**A town's absence, or a low count, is not evidence it has avoided surveillance
technology.** It far more often means that town's meeting backlog has not been
downloaded yet, its meetings are not captioned, or its video archive is on a
platform this pipeline cannot read. Per-town coverage is in the
[cross-town matrix](../cross-town-matrix.md); read it before drawing conclusions
from what is missing.

### Redaction

Connecticut public comment opens with a ritual: the speaker gives their name,
then their home address, for the record.

The names are here as spoken. Addressing a public body is a public,
accountable act, and stripping names would gut the record.

The home addresses are not. Where a speaker gives their own residence, the
address is replaced with `[address redacted]`. Individually those addresses are
public and sit on the town's own video. But this file is a different artifact
from a four-hour video nobody watches: it is searchable, sortable and
downloadable in bulk, and several thousand name-and-home-address pairs in that
shape is the same aggregation this project objects to when a camera vendor
builds it. Some of the speakers are children.

Addresses being *discussed* rather than lived at — where a camera sits, which
property is before the commission — are untouched, because that is the evidence.
So is `I live in West Hartford`, which is how a speaker establishes standing.

The town's own recording remains the unredacted record of the same meeting.

### Source

The transcripts behind every row are published as
[release assets](https://github.com/unseenpower/ct-mass-surveillance/releases)
— one `.zip` per town, each with a `MANIFEST.txt` stating its own coverage and
redaction count.
