
/**
 * return a copy of the string with the first character converted to lowercase
 * where applicable.
 *
 * Note: this function will skip all white spaces, punctuations
 *       and non printable character when deciding which is
 *       first character
 *
 * @export
 * @param {string} input
 * @returns {string}
 */

import { _firstCase } from '../private/_firstCase';

export function lowerFirst(input: string): string {
  return _firstCase(input, 'toLowerCase');
}
