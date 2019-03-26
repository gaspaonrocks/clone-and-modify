import { expect } from 'chai';
import 'mocha';

import { cloneAndModify } from '../src';

describe('cloneAndModify', () => {
	it('should return a new object', () => {
		const testObject = {
			i: {
				am: {
					aValue: 'hello'
				}
			}
		}
		const result = cloneAndModify(testObject, ['i', 'am', 'aValue'], 'goodbye');

		expect(result.i.am.aValue).to.equal('goodbye')
	});
});