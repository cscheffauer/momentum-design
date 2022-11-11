## Harbor Investigation

### Possible Paths we can take

1. **Use Harbor**
    1.a. Add everything we need to the existing Harbor repository
    - We would need to tell our consumers to use Harbor with the Momentum theme
    - Current state of development in harbor isn't made for external contributions

    1.b. Adjust the existing harbor components to our needs & build a Momentum component library on top
    - Current state of development in harbor isn't made for external contributions
    - 2 repositories to maintain at the same time (e.g. atoms in Harbor, molecules & widgets in Momentum)
    - Duplication of work, since Stencil doesn't allow for inheritance, only composition (mapping of props & methods necessary)
    - 

2. **Start from scratch**
- More work
- Freedom in structure & developer experience































### Development POC
#### Harbor components repository (Stencil):
- Set up of basic Stencil project (with Stencil component starter) in `harbor-components` lib:
15min

- Adding harbor elements to `harbor-components` lib and view a harbor button in a index html:
25min

- Setup of a storybook like Live Preview tooling:
45min

- Create Modal component, based on Harbor modal:
1.5 days (mapping events, props from Harbor, replacing their styling, no changes to Harbor modal component necessary (from first look at it))

#### Components repository (Lit):
- Set up of basic Lit project (with Lit component starter) in `components` lib:


### Component Matrix

Listed are Momentum components (v1 & v2).
Note: some components are grouped based on similarity - like SpaceListItem and SpaceListItemNext are v1 & v2 components, which do the same thing.

| Name | Used (#) | Available in harbor | Notes
|---|---|---|---|
| Button (all sort of buttons) | 368 | yes | needs customisation on top of harbor
| Icon | 280 | yes | needs modification to allow using our icons
| Text | 186 | no | 
| List sub components (Header, Item, Sections, ...) | 160 | no | 
| Modal (+ sub components) | 135 | yes | needs customisation on top of harbor
| LoadingSpinner | 62 | yes | available in repository, not visible on storybook - needs modification to allow passing in custom animation / spinner
| Menu Sub components (Overlay, Item, Content, Trigger,...) | 55 | yes | no menu trigger avilable, needs customisation on top of harbor, accessibility issues
| Popover | 50 | no | only tooltip available at the moment
| List | 44 | no | same as List sub components
| Input | 35 | yes | needs customisation on top of harbor, Error message 
| Tooltip | 31 | yes | needs customisation on top of harbor
| Flex | 30 | no | not really relevant to be in a component library though
| Link(=Anchor) | 30 | yes | in harbor part of Button component
| Menu | 19 | yes | no menu trigger available, needs customisation on top of harbor, accessibility issues
| ButtonGroup | 17 | yes | available through Button component, not a separate component, needs investigation
| Avatar | 15 | no | 
| AlertBanner | 15 | yes | Banner component available, needs customisation on top of harbor
| Select | 12 | yes | needs customisation on top of harbor, accessibility issues
| NavigationTab | 12 | no | part of list component work
| Checkbox | 9 | yes | needs customisation on top of harbor, accessibility issues
| Badge | 5 | yes | needs customisation on top of harbor
| Toast (+ sub components, like Content, Details) | 6 | yes | Banner could theoretically be reused, needs customisation on top of harbor, accessibility issues
| AlertBadge | 4 | yes | needs customisation on top of harbor
| DividerDot | 4 | no | 
| EditableTextField | 4 | no | 
| Form | 3 | yes | needs customisation on top of harbor
| RadioGroup | 3 | yes | needs customisation on top of harbor
| CodeInput | 3 | no | really specific product component, could be built with buttons as a widget
| SubMenu | 3 | no | functionality necessary in web client - Harbor Menu component likely needs to be extended to allow this
| Tag | 3 | yes | The existing tag component is different than what we need for the Momentum tag component. It looks like the tag could be built on top of a button component, but needs to be a separate component most likely.  
| ContentItem | 2 | no | 
| EventOverlay | 2 | no | could be done with a popover!
| MeetingContainer | 2 | no | could theoretically done with a list item, needs to be checked
| Progressbar | 2 | yes | adjustment of the styling necessary - everything else should be fine.
| Reaction | 2 | no | renders lottie animations, not possible to do in harbor elements at the moment 
| ThemeProvider | 2 | yes | no component for that available, but theme switching capability - a component needs to be built for parity, with http://harbor.cisco.com/?path=/docs/guides-theming-switching--page
| ReactionBadge | 1 | no | wrapper component (button) around Reaction component 
| ReactionPicker | 1 | no | button group wrapper around Reaction button components 
| AlertContainer | 1 | no | 
| Chip | 1 | yes | tag component can be reused
| ContentSeparator | 1 | no | 
| Lightbox | 1 | no | widget component, specific to webex  
| NotificationSystem | 1 | yes | the harbor toast component allows to trigger components and put them on the screen, there are functionalities missing though 
| Tab | 1 | yes | the tab component in momentum is a button with some styling, so reusing the harbor button component and exporting as a tab component would work (need to align with the existing Harbor Tab component though)
| Toggle | 1 | yes | Switch component can be reused - adjustment of the styling necessary


### Q&A



#### Potential layering of what we want vs what is already there:
**Super Intent-driven implementation**
— <= Client is here [client-focused intent]
— <= momentum react v2 is here [Reusable, pre-styled components]
— <= Harbor is here, also where organic components should live [style agnostic]
— <= Where we want Molecular Components to be [style/accessibility/partial-layout agnostic]
— <= Where we want Core Components to be [style/layout/accessibility agnostic]
**Super Agnostic Implementation**

(made by Tim * kudos *)


### Harbor - state of development:

Testing and Reviewing culture:
- No automation pipeline / gating in place
- On the last 100 PRs in total 31 comments on Github
    - Could be a good or bad sign, just for comparison: 
    Momentum React v2, last 25 PRs: total 120 comments