import { expect } from 'chai';
import 'mocha';

import { cloneAndModify, deepMerge } from '../src';

describe('cloneAndModify', () => {
	it('should return a new object', () => {
		const testObject = { i: { am: { aValue: 'hello' } } };
		
		const result = cloneAndModify(testObject, ['i', 'am', 'aValue'], 'goodbye');

		expect(result.i.am.aValue).to.equal('goodbye')
	});
});

describe('deepMerge', () => {
	it('should return a merged object', () => {
		const srcObject = { i: { am: { aValue: 'hello' } } };
		const targetObject = { i: { am: { not: ['a value'] } } };

		const result = deepMerge(srcObject, targetObject);

		expect(result.i.am.aValue).to.equal('hello');
		expect(result.i.am.not[0]).to.equal('a value');
	});
});