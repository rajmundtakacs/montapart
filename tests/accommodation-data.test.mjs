import test from 'node:test';
import assert from 'node:assert/strict';
import { apartments } from '../src/data/apartments.ts';

test('accommodation capacities are plausible guest counts, including ranges rather than spreadsheet date serials', () => {
  for (const apartment of apartments) {
    assert.ok(apartment.units.length > 0, apartment.slug);
    assert.equal(new Set(apartment.units.map(unit => unit.id)).size, apartment.units.length, apartment.slug);
    for (const unit of apartment.units) {
      const values = typeof unit.capacity === 'number' ? [unit.capacity] : unit.capacity.split('-').map(Number);
      assert.ok(values.length <= 2 && values.every(value => Number.isInteger(value) && value > 0 && value <= 100), `${apartment.slug}: ${unit.capacity}`);
      if (values.length === 2) assert.ok(values[0] <= values[1], apartment.slug);
    }
  }
});
