import cleanDeep from 'clean-deep';
import qs, {ParsedUrlQueryInput} from 'querystring';

export const queryParse = (string: string) => {
  return qs.parse(string);
};

/**
 * Clean deep removes the falsy and empty values in an object
 * const a = {test: "", a: "213"};
 * const cleanDeep(a)  -> {a: "213"}
 * @param obj
 * @returns
 */

export const queryStringify = (obj: ParsedUrlQueryInput) => {
  return qs.stringify(cleanDeep(obj));
};
