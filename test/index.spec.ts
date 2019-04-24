import { expect } from 'chai';
import 'mocha';

import { cloneAndModify, deepClone, deepMerge, pathOrDefault } from '../src';

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

describe('pathOrDefault', () => {
	it('should return a value at given path', () => {
		const srcObject = { i: { am: { aValue: 'hello' } } };

		const result = pathOrDefault(srcObject, ['i', 'am', 'aValue'], 'defaultValue');

		expect(result).to.equal('hello');
	});

	it('should return given default value', () => {
		const srcObject = { i: { am: { aValue: 'hello' } } };

		const result = pathOrDefault(srcObject, ['i', 'am', 'not'], 'defaultValue');

		expect(result).to.equal('defaultValue');
	});

	it('should return undefined, no default value given', () => {
		const srcObject = { i: { am: { aValue: 'hello' } } };

		const result = pathOrDefault(srcObject, ['i', 'am', 'not']);

		expect(result).to.equal(undefined);
	});
});

describe('hasPath', () => {});
describe('deepClone', () => {});
describe('setValueAtPath', () => {});