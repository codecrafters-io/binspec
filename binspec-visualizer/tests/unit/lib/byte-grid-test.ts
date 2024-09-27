import { module, test } from 'qunit';
import { setupTest } from 'binspec-visualizer/tests/helpers';
import { ByteGrid } from 'binspec-visualizer/lib/byte-grid';

module('Unit | Lib | hex-preview', function (hooks) {
  setupTest(hooks);

  test('caretPositionForByteIndexRange should work', function (assert) {
    const byteGrid = new ByteGrid({
      startByteIndex: 0,
      endByteIndex: 99,
      rowWidth: 4,
    });

    // Single line
    assertCaretPosition(assert, byteGrid, [0, 1], 0, [0, 'end']);
    assertCaretPosition(assert, byteGrid, [0, 2], 0, [1, 'middle']);
    assertCaretPosition(assert, byteGrid, [0, 3], 0, [1, 'end']);

    // Multi-line
    assertCaretPosition(assert, byteGrid, [0, 7], 0, [1, 'end']);
    assertCaretPosition(assert, byteGrid, [0, 7], 3, [1, 'end']);
    assertCaretPosition(assert, byteGrid, [0, 7], 4, [5, 'end']);
  });

  test('lineForByteIndex should work', function (assert) {
    const byteGrid = new ByteGrid({
      startByteIndex: 0,
      endByteIndex: 99,
      rowWidth: 16,
    });

    // First row
    assertLineForByteIndex(assert, byteGrid, 0, [0, 15]);
    assertLineForByteIndex(assert, byteGrid, 1, [0, 15]);
    assertLineForByteIndex(assert, byteGrid, 15, [0, 15]);

    // Middle rows
    assertLineForByteIndex(assert, byteGrid, 16, [16, 31]);
    assertLineForByteIndex(assert, byteGrid, 95, [80, 95]);

    // Last row
    assertLineForByteIndex(assert, byteGrid, 96, [96, 99]);
    assertLineForByteIndex(assert, byteGrid, 98, [96, 99]);
    assertLineForByteIndex(assert, byteGrid, 99, [96, 99]);
  });

  function assertLineForByteIndex(
    assert: Assert,
    byteGrid: ByteGrid,
    byteIndex: number,
    expectedRange: [number, number],
  ) {
    const line = byteGrid.lineForByteIndex(byteIndex);

    assert.ok(line, 'line should exist');

    assert.equal(
      line!.startByteIndex,
      expectedRange[0],
      `line.startByteIndex should be ${expectedRange[0]} if byteIndex is ${byteIndex}`,
    );

    assert.equal(
      line!.endByteIndex,
      expectedRange[1],
      `line.endByteIndex should be ${expectedRange[1]} if byteIndex is ${byteIndex}`,
    );
  }

  function assertCaretPosition(
    assert: Assert,
    byteGrid: ByteGrid,
    lineRange: [number, number],
    hoverIndex: number,
    expectation: [number, 'start' | 'end' | 'middle'],
  ) {
    const caretPosition = byteGrid.caretPositionForByteIndexRange(
      lineRange[0],
      lineRange[1],
      hoverIndex,
    );

    assert.ok(
      caretPosition,
      `caretPosition should exist if range is [${lineRange[0]}-${lineRange[1]}] and hoverIndex is ${hoverIndex}`,
    );

    assert.equal(
      caretPosition!.byteIndex,
      expectation[0],
      `caretPosition.byteIndex should be ${expectation[0]} if range is [${lineRange[0]}-${lineRange[1]}] and hoverIndex is ${hoverIndex}`,
    );

    assert.equal(
      caretPosition!.alignment,
      expectation[1],
      `caretPosition.alignment should be ${expectation[1]} if range is [${lineRange[0]}-${lineRange[1]}] and hoverIndex is ${hoverIndex}`,
    );
  }
});
