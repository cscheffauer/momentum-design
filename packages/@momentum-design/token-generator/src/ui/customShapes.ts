/* eslint-disable no-use-before-define */
/* eslint-disable max-classes-per-file */
/*
Copyright 2022-present The maxGraph project Contributors

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { ColorValue, Rectangle, RectangleShape, CellRenderer } from '@maxgraph/core';

export const registerCustomShapes = (): void => {
  // @ts-ignore TODO fix CellRenderer. Calls to this function are also marked as 'ts-ignore' in CellRenderer
  CellRenderer.registerShape('colorCircle', ColorCircle);
};

class ColorCircle extends RectangleShape {
  constructor(bounds: Rectangle, fill: ColorValue, stroke: ColorValue) {
    super(bounds, fill, stroke, 1);
    this.isRounded = true; // force rounded shape
  }
}
