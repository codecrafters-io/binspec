import { module, test } from 'qunit';
import { setupTest } from 'binspec-visualizer/tests/helpers';
import generatedSQLiteDatabase from 'binspec-visualizer/data/formats/generated/sqlite-database';
import Format from 'binspec-visualizer/lib/format';

module('Unit | Lib | format', function (hooks) {
  setupTest(hooks);

  test('fromGeneratedData works', function (assert) {
    const format = Format.fromGeneratedData(generatedSQLiteDatabase);
    assert.strictEqual(format.name, 'SQLite Database File');
    assert.strictEqual(format.segments[0]!.title, 'Header string');
    assert.strictEqual(format.segments[0]!.startBitIndex, 0);
    assert.strictEqual(format.segments[0]!.endBitIndex, 127);
    assert.strictEqual(format.segments[1]!.title, 'Page size');
    assert.strictEqual(format.segments[1]!.startBitIndex, 128);
    assert.strictEqual(format.segments[1]!.endBitIndex, 143);
  });
});
