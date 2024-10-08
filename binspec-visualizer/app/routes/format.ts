import Route from '@ember/routing/route';
import type RouterService from '@ember/routing/router-service';
import { service } from '@ember/service';
import type Format from 'binspec-visualizer/lib/format';
import FormatRegistry from 'binspec-visualizer/lib/format-registry';

export type ModelType = {
  format: Format;
};

export default class FormatRoute extends Route {
  @service declare router: RouterService;

  model(params: { format_slug: string; highlight?: string }): ModelType {
    const format = FormatRegistry.getBySlug(params.format_slug);

    if (!format) {
      this.router.transitionTo('index');
      return {} as ModelType;
    }

    return {
      format,
    };
  }
}
