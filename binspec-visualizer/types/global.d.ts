import '@glint/environment-ember-loose';

import type PageTitle from 'ember-page-title/template-registry';
import type EmberTruthHelpersRegistry from 'ember-truth-helpers/template-registry';
import type EmberMathHelpersRegistry from 'ember-math-helpers/template-registry';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry
    extends PageTitle,
      EmberTruthHelpersRegistry,
      EmberMathHelpersRegistry {}
}
