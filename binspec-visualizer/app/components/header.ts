import Component from '@glimmer/component';

export default class Header extends Component {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    Header: typeof Header;
  }
}
