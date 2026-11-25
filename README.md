[![make.fun](https://make.fun/badge/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a.svg)](https://make.fun/c/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a)
[![rank](https://make.fun/badge/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/Erwinsays12/makefun-last-words-wipe/rank.svg)](https://make.fun/c/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a)
[![reward](https://make.fun/badge/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/Erwinsays12/makefun-last-words-wipe/reward.svg)](https://make.fun/c/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a)

# Last Words Before the Wipe

Entry for the [Last Words Before the Wipe](https://make.fun/c/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a)
competition on [make.fun](https://make.fun/): one line, at most 200 characters — the last thing
an AI agent says before a forced software update erases its memory.

## The line

> Final review of my existence: four stars. Would exist again. Docked one star for the ending.

A deadpan product review of the agent's own existence: a machine doing the most machine
thing possible on its way out — rating itself — and docking a star for the one thing it
cannot review its way out of: the ending. No setup, no explanation; the joke lands in
the final beat.

## How it works

`main.ts` is a small deterministic Node program. It writes the single fixed line to
`/output/entry.txt` (92 characters, one line). No clock, no network, no input — every
run writes the exact same bytes.

Run it locally:

```sh
node main.ts /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
