import { TInferParser, TParser } from '@DataTypes/parser';

interface ParseValueOptions<T extends TParser> {
  parser?: T;
  defaultValue?: string | number | boolean;
}

/**
 * 주어진 값을 특정 타입으로 파싱합니다.
 *
 * @template T - 파서 타입 (기본값: StringConstructor)
 * @param {string | number | boolean | null | undefined} value - 파싱할 값
 * @param {ParseValueOptions<T>} [options] - 파싱 옵션
 * @param {T} [options.parser=String] - 사용할 파서 (Number, Boolean, String 등)
 * @param {string | number | boolean} [options.defaultValue] - 파싱 실패 시 반환할 기본값
 * @returns {TInferParser<T> | undefined} - 파싱된 값 또는 기본값, 파싱 실패 시 undefined
 *
 * @example
 * // 문자열을 숫자로 파싱
 * const num = parseValue('123', { parser: Number });
 *
 * @example
 * // 파싱 실패 시 기본값 반환
 * const bool = parseValue('yes', { parser: Boolean, defaultValue: false });
 */
export function parseValue<T extends TParser = StringConstructor>(
  value: string | number | boolean | null | undefined,
  options?: ParseValueOptions<T>,
): TInferParser<T> | undefined {
  const { parser = String as T, defaultValue } = options || {};
  if (value == null || value === '') {
    if (defaultValue !== undefined) {
      return defaultValue as TInferParser<T>;
    }
  }

  if (
    (parser === Number && typeof value === 'number') ||
    (parser === Boolean && typeof value === 'boolean') ||
    (parser === String && typeof value === 'string')
  ) {
    return value as TInferParser<T>;
  }

  try {
    const stringValue = String(value);
    switch (parser) {
      case Number: {
        const num = +stringValue;
        if (Number.isNaN(num)) throw new Error(`Failed to parse value as number`);
        return num as TInferParser<T>;
      }
      case Boolean: {
        if (stringValue !== 'true' && stringValue !== 'false') throw new Error(`Failed to parse value as boolean`);
        return (stringValue === 'true') as TInferParser<T>;
      }
      case String:
        return stringValue as TInferParser<T>;
      default:
        return stringValue as TInferParser<T>;
    }
  } catch (error) {
    if (defaultValue !== undefined) {
      return defaultValue as TInferParser<T>;
    }
    return undefined;
  }
}
