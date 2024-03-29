import * as recast from "recast";
import r = recast.types.namedTypes;

export interface Chunk {
  code: string;
  ast: any;
}

export interface Bundle {
  dir: string;
  files: Map<string, Chunk>;
  size: number;
  entry: string;
  modules: Map<
    number,
    {
      fn: AnyFunctionExpression;
      name: string;
    }
  >;
}

export type AnyFunctionExpression =
  | r.ArrowFunctionExpression
  | r.FunctionExpression;

export interface WebpackModuleMapProperty
  extends recast.types.namedTypes.Property {
  key: r.Literal & { value: number };
  value: AnyFunctionExpression;
}

export interface WebpackModuleMapExpression extends r.ObjectExpression {
  properties: Array<WebpackModuleMapProperty>;
}
