export type TParser = NumberConstructor | StringConstructor | BooleanConstructor;

export type TInferParser<T extends TParser> = T extends NumberConstructor
  ? number
  : T extends BooleanConstructor
    ? boolean
    : string;

// parseValue가 받을 수 있는 타입
export type ParsableValue = string | number | boolean | null | undefined;
