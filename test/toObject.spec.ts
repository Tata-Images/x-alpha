import { expect, should } from 'chai';
import { isTheSame, randomInteger, randomText, theTypeOf, toObject } from '../src/alpha';

should();

describe('toObject()\n', () => {

  describe('should...', () => {

    let input: any;
    let output: object;

    it('convert a text string into an object.', () => {
      input = randomText(1000);
      output = toObject(input);
      theTypeOf(output).should.equal('object');
      output[theTypeOf(input)].should.equal(input);
    });

    it('convert a number string into an object.', () => {
      input = '' + randomInteger(1000);
      output = toObject(input);
      theTypeOf(output).should.equal('object');
      output[theTypeOf(input)].should.equal(input);
    });

    it('convert an empty string into an object.', () => {
      input = '';
      output = toObject(input);
      theTypeOf(output).should.equal('object');
      output[theTypeOf(input)].should.equal(input);
    });

    it('convert a +ve number into an object.', () => {
      input = randomInteger(1000, 2000);
      output = toObject(input);
      theTypeOf(output).should.equal('object');
      output[theTypeOf(input)].should.equal(input);
    });

    it('convert a -ve number into an object.', () => {
      input = randomInteger(-1000, -2000);
      output = toObject(input);
      theTypeOf(output).should.equal('object');
      output[theTypeOf(input)].should.equal(input);
    });

    it('convert number 0 into an object.', () => {
      input = 0;
      output = toObject(input);
      theTypeOf(output).should.equal('object');
      output[theTypeOf(input)].should.equal(input);
    });

    it('convert a TRUE boolean into an object.', () => {
      input = true;
      output = toObject(input);
      theTypeOf(output).should.equal('object');
      output[theTypeOf(input)].should.equal(input);
    });

    it('convert a FALSE boolean into an object.', () => {
      input = false;
      output = toObject(input);
      theTypeOf(output).should.equal('object');
      output[theTypeOf(input)].should.equal(input);
    });

    it('convert a date into an object.', () => {
      input = new Date();
      output = toObject(input);
      theTypeOf(output).should.equal('object');
      output[theTypeOf(input)].getTime().should.equal(input.getTime());
    });

    it('convert a "undefined" into an object.', () => {
      input = undefined;
      output = toObject(input);
      theTypeOf(output).should.equal('object');
      output.should.deep.equal({});
    });

    it('convert a "null" into an object.', () => {
      input = null;
      output = toObject(input);
      theTypeOf(output).should.equal('object');
      output.should.deep.equal({});
    });

    it('convert a "NaN" into an object.', () => {
      input = NaN;
      output = toObject(input);
      theTypeOf(output).should.equal('object');
      output.should.deep.equal({});
    });

    it('convert a Symbol into an object.', () => {
      input = Symbol();
      output = toObject(input);
      theTypeOf(output).should.equal('object');
      const res: boolean = (output['symbol'] === input);
      // tslint:disable-next-line:no-unused-expression
      res.should.be.true;
    });

    it('convert an empty Array into an object.', () => {
      input = [];
      output = toObject(input);
      theTypeOf(output).should.equal('object');
      isTheSame(output[theTypeOf(input)], input).should.be.true;
    });

    it('convert an Array into an object.', () => {
      input = [123, ['hello', true]];
      output = toObject(input);
      theTypeOf(output).should.equal('object');
      isTheSame(output[theTypeOf(input)], input).should.be.true;
    });

    it('convert an empty object into an object.', () => {
      input = {};
      output = toObject(input);
      theTypeOf(output).should.equal('object');
      output.should.deep.equal(input);
    });

    it('convert an nested object into an object.', () => {
      input = { a: 1, b: 2, c: { d: 'a', e: 'b', f: 'c' } };
      output = toObject(input);
      theTypeOf(output).should.equal('object');
      output.should.deep.equal(input);
    });

    it('convert an Error object into an object.', () => {
      input = new Error('TEST');
      output = toObject(input);
      theTypeOf(output).should.equal('error');
      output.should.deep.equal(input);
    });

    it('convert a anonymous function into an object.', () => {
      output = toObject(() => ('hello world'));
      theTypeOf(output).should.equal('object');
      output.hasOwnProperty('function').should.be.true;
      output.hasOwnProperty('input').should.be.false;
      output['function']().should.equal('hello world');
    });

    it('convert a function into an object.', () => {
      input = () => ('hello world');
      input.name.should.equal('input');
      output = toObject(input);
      theTypeOf(output).should.equal('object');
      output['input'].should.equal(input);
    });

    it('convert a factory function into an object.', () => {
      input = () => () => ('hello world');
      output = toObject(input);
      theTypeOf(output).should.equal('object');
      output['input'].should.equal(input);
    });

    it('convert a promise into an object.', () => {
      input = Promise.resolve('hello');
      output = toObject(input);
      theTypeOf(output).should.equal('object');
      output[theTypeOf(input)].should.eventually.equal('hello');
    });

  });

});
