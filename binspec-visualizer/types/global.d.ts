import '@glint/environment-ember-loose';

import type PageTitle from 'ember-page-title/template-registry';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry extends PageTitle {}
}
