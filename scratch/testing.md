# Browser List

* Chrome => Chromium
* Firefox
* Edge => Chromium
* Safari/webkit

# Platform Emulation

* Windows
* OSX
* Unix
* Android
* IOS

# Testing Scopes

* testing source **Unit**
* testing to see if module can be called **
* testing visual consistancy
* does it display correctly in X browser [consistency and responsiveness]
* do its functions work correctly in X browser
* is the component accessible in X browser
* 

# Testing Categories

<!-- * **Unit Testing** - source code testing -->
* **Integration Testing** - Parallel Dist Testing
<!-- * **Journey Testing** - Sequential Dist Testing -->

```bash
+-+ ./test
  +-+ ./accessibility
  +-+ ./visual-regression
  +-+ ./module
  +-+ 
```

```js
import { Componet } from '@momentum-design/components';

describe('Component', () => {
  
});
```
