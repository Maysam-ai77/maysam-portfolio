<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# Project rules

- All visible copy lives in `src/lib/i18n.ts` (one dictionary per language, `en` typed against `ar`); components read it via `usePrefs().t` — never hardcode copy in components, so both languages stay in sync.
- Theme/language context, `usePrefs`, storage keys and `PREFS_BOOT_SCRIPT` live in `src/lib/prefs.ts`; `PrefsProvider.tsx` exports only the component, so hot reload never recreates the context (mixed exports broke it).
- Use logical CSS (start/end, ps/pe, border-s) instead of left/right so RTL and LTR both work.
- The site is a single page with anchored sections (user requested smooth-scroll single page); section ids are listed in `SECTION_ORDER`.
