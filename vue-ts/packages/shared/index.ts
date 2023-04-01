export const NOOP = () => {};
export const extend = Object.assign;
export const isFunction = (val: unknown) => typeof val === 'function';
export const isString = (val: unknown) => typeof val === 'string';
export const isSymbol = (val: unknown) => typeof val === 'symbol';
export const isObject = (val: unknown) => val !== null && typeof val === 'object';

export const def = (obj: object, key: string | symbol, value: any) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  })
}