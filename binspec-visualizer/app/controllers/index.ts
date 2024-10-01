import Controller from '@ember/controller';
import type Format from 'binspec-visualizer/lib/format';
import FormatRegistry from 'binspec-visualizer/lib/format-registry';

export default class IndexController extends Controller {
  get formats(): Format[] {
    return FormatRegistry.formats;
  }
}
