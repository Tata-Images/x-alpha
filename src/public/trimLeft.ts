/**
 * Return a new copy of string with trailing white spaces removed.
 *
 *
 * @since 0.0.1
 * @category String
 *
 * @export
 * @param {string} input
 * @returns {string}
 */

export function trimLeft(input: string): string {
  return input ? input.replace(/^[\s]+/, '') : '';
}
