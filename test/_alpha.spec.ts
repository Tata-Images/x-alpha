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
  'function',
];

const types: string[] = ['Mods', 'Instances'];

const testControl: object = {};

testControl['asyncMods'] = [
];

testControl['arrayMods'] = [
  '_binarySearchArray',
  '_binarySearchValue',
  '_binarySearchIndex',
  '_binarySearchIndexBy',
  '_diff',
  '_drop',
  '_intersection',
  '_makeComparator',
  '_orderBy',
  '_pullAll',
  '_removeRedundants',
  '_take',
  '_union',
];

testControl['collectionMods'] = [
];

testControl['numberMods'] = [
  '_decimalAdjust',
  '_round',
];

testControl['objectMods'] = [
  '_identity',
];

testControl['stringMods'] = [
  '_firstCase',
  '_hyphenateToArray',
  '_makeCase',
  '_truncateToArray',
];

testControl['functionMods'] = [
];

testControl['timeInstances'] = [
];

describe('_alpha.ts should act as a barrel which...\n', () => {


  types.forEach((type: string) => {

    categories.forEach((cat: string) => {

      describe('category: ' + cat, () => {

        const testSubject: string = cat + type;

        if (testControl.hasOwnProperty(testSubject)) {

          testControl[testSubject].forEach((sub: string) => {

            const testCondition: string = (typeof (_alpha[sub]) !== 'function') ?
              'instance of ' + sub + ' object' :
              'function ' + sub + '()';

            it(testCondition, () => {
              (_alpha[sub]).should.not.equal(undefined);
            });

          });

        }

      });

    });

  });

});
