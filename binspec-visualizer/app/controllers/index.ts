import Controller from '@ember/controller';
import FormatRegistry, {
  type Format,
} from 'binspec-visualizer/lib/format-registry';

export default class IndexController extends Controller {
  get formats(): Format[] {
    return FormatRegistry.formats;
  }
}
