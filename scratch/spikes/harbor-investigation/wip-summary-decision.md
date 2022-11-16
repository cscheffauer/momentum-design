# Harbor investigation

## Part of the investigation

- Investigation of the harbor code base and current state of development
- Investigation of what changes need to be made to allow adding Momentum specific components to Harbor
- Clarification on how working together with Harbor team would look like
- Clarification on open issues within harbor code base

## Harbor - current state of development

- Harbor is currently in Beta, aiming for a v1 release soon
- Existing components are not WCAG AA compliant
  - Discovered accessibility issues in existing components
  - No a11y audit has been done so far
- 30 of approx 70 unit tests are currently failing
- E2E tests are not working
- No automation pipeline / gating in place
- On the last 100 PRs in total 31 comments on Github
  - Could be a good or bad sign, just for comparison:
    Momentum React v2, last 25 PRs: total 120 comments