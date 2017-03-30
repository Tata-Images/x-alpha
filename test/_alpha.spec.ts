import * as _alpha from '../src/_alpha';

import { expect, should } from 'chai';

should();

const categories: string[] = [
  'async',
  'array',
  'collection',
  'number',
  'object',
  'string',
  'time',
];

const types: string[] = ['Mods', 'Instances'];

const testControl: object = {};

testControl['asyncMods'] = [
];

testControl['arrayMods'] = [
];

testControl['collectionMods'] = [
];

testControl['numberMods'] = [
  '_decimalAdjust',
  '_round',
];

testControl['objectMods'] = [
];

testControl['stringMods'] = [
  '_firstCase',
  '_hyphenateToArray',
  '_makeCase',
  '_truncateToArray',
];

testControl['timeInstances'] = [
];

describe('_alpha.ts should act as a barrel which...', () => {

  types.forEach((type: string) => {

    categories.forEach((cat: string) => {

      const testSubject: string = cat + type;

      if (testControl.hasOwnProperty(testSubject)) {

        testControl[testSubject].forEach((sub: string) => {

          const testCondition: string = (typeof (_alpha[sub]) !== 'function') ?
            'provides instance of ' + sub + ' object.' :
            'provides ' + sub + '() module.';

          it(testCondition, () => {
            (_alpha[sub]).should.not.equal(undefined);
          });

        });

      }

    });

  });

});
