import { html } from 'lit';

import './iconprovider.stories.utils';

interface Args {
  [name: string]: any;
}

const base = (args: Args) => html`
  <mdc-iconprovider url="${args.url}" file-extension="${args.fileExtension}" length-unit="${args.lengthUnit}">
    <mdc-subcomponent-icon></mdc-subcomponent-icon>
  </mdc-iconprovider>
`;

// Todo: use in e2e test (needs some config)
const e2e = (args: Args) => html`
<mdc-iconprovider url="${args.url}" id="local" file-extension="${args.fileExtension}" length-unit="${args.lengthUnit}">
  <mdc-icon name="accessibility-regular" scale="2"></mdc-icon>
</mdc-iconprovider>
`;

const fixtures = {
  base,
  e2e,
};

export default fixtures;
