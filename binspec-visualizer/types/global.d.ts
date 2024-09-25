import '@glint/environment-ember-loose';

import type PageTitle from 'ember-page-title/template-registry';
import type EmberTruthHelpersRegistry from 'ember-truth-helpers/template-registry';
import type EmberMathHelpersRegistry from 'ember-math-helpers/template-registry';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry
    extends PageTitle,
      EmberTruthHelpersRegistry,
      EmberMathHelpersRegistry {
    EmberTooltip: ComponentLike<{
      Args: {
        Named: {
          text?: string;
          side?: 'top' | 'bottom' | 'left' | 'right';
          delay?: number;
          duration?: number;
        };
      };
      Blocks: { default?: [] };
    }>;
    EmberPopover: ComponentLike<{
      Args: {
        Named: {
          side?: 'top' | 'bottom' | 'left' | 'right';
        };
      };
      Blocks: { default?: [] };
    }>;
  }
}
