* Component Token Blueprints [component.blueprint.ts] *optional*
* Component Styles [component.styles.ts] *optional*
* Component Presentational [component.ts]
* Component Index [index.ts]
* Component Constants [component.constants.ts]
* Component Story [component.story.* | stories/state.story.*] **?**
* Component Types [component.types.ts] *optional*
* Component Helpers [component.utils.ts] *optional*
* Component Documentation [component.documentation.md]

## Structure

./src
  ./atoms - components that don't consume other components
    ./icon
    ./text
  ./molecules - components comprised of other components
    ./button
    ./input
    ./select
  ./organics - Components comprised of other components and functionality
    ./dial-pad
    ./table
  ./providers
    ./theme
    ./asset
    ./svg
    ./json
  ./utils/

  ## package.json
  ```json
  {
    "exports": {
      "./": "./dist/index.js",
      "./atoms": "./dist/atoms/index.js",
      "...": "..."
    },
    "scripts": {
      "dev": "nodemon ...",
      "dev:prepare": "",
      "dev:start": "",
      "build:web": "",
      "build:angular": "",
      "build:react": "",
      "build:vue": "",
      "build:docs:assets": "momentum-design-icons --build --target \"./dist/static/icons\""
    }
  }
```

yarn run build
build:web-components
build:react
build:angular
build:vue
build:docs:assets => copyfiles

```js
import icons from '@momentum-design/icons';

icons.write('./dist/static/icons');
```

```bash
momentum-design-icons --build --target "./dist/static/icons"
```

```bash
curl -o ./path/to-dist/ -u https:npmjs.org/path/to-dependency
```



