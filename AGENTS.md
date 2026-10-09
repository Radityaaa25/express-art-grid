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

## Portfolio architecture
- Keep the supported TanStack Start application with public routes and a separate `/admin` screen rather than adding another framework or monorepo runtime; this preserves the managed preview and publish pipeline.
- Store portfolio preview state in the shared PortfolioProvider only; the design-only CMS must clearly disclose session-only changes and must not imply secure login or permanent storage.
- Define shared visual styles and semantic tokens in src/styles.css and interaction variants in the existing Button component; this keeps public and admin design consistent.
- Initialize Lenis and GSAP only in browser effects and clean up on unmount; this preserves SSR compatibility and reduced-motion behavior.
