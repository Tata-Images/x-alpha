/**
 * Truncate a string down to a certain length, with option to include
 * padding characters at the end, such as '...' indicating more/rest/etc.
 *
 * The result is returned in the form of an array,
 * [0] being the truncated string
 * [1] being the padding characters
 *
 * Take note that length of [0] and [1] combines shuold be the length requested
 * to the function.
 *
 * @refactor April 13, 2017
 *
 * @since 0.0.1
 * @category String
 *
 * @param {string} input
 * @param {number} [len=0]
 * @param {string} [pad='...']
 * @returns {string[]}
 */

import { HalfWordLen } from '../constants';

export function _truncateToArray(input: string, length: number,
  pad: string = '...'): string[] {

  // short length or empty string, return empty array
  if (!length || !input || length <= 0) return ['', ''];

  // if input string is short, just return
  // a copy of it in [0] with no padding in [1]
  if (input.length <= length) return [input.slice(0), ''];

  // '...' will be shortened to '…' if desired output length
  // is a short ( <= 1.5 average word length/ 9 characters )
  // '…' however will not be expanded to '...'.
  if (pad === '...') pad = length > HalfWordLen * 3 ? '...' : '…';

  // size of padding should be limited to half word length/3 chars
  const padLen: number
    = pad.length > HalfWordLen ? HalfWordLen : pad.length;

  // make a copy of shortened pad text
  pad = pad.substr(0, padLen);

  // too small a space, return [0] = empty line and
  // [1] a further shortened pad string in array
  if (length <= padLen) return ['', pad.substr(0, length)];

  // normal circumstances, return [0] a truncated line, [1] padding text
  return [input.substr(0, length - padLen), pad];

}
