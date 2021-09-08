
/**
 * Client
**/

import * as runtime from './runtime';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model basket_daily_totals
 */

export type basket_daily_totals = {
  id: number
  delivery_date: Date
  daily_totals: Prisma.JsonValue
  daily_indexes: Prisma.JsonValue
  created_at: Date
  updated_at: Date | null
}

/**
 * Model basket_line_item_competitor_equivalents
 */

export type basket_line_item_competitor_equivalents = {
  id: number
  competitor_price: number | null
  basket_line_item_id: number
  competitor_id: number
  created_at: Date
  updated_at: Date | null
}

/**
 * Model basket_line_item_recommended_prices
 */

export type basket_line_item_recommended_prices = {
  id: number
  recommended_price: number
  basket_line_item_id: number
  price_recommendation_id: number | null
}

/**
 * Model basket_line_items
 */

export type basket_line_items = {
  id: number
  quantity: number
  basket_id: number
  product_sku: string
  created_at: Date
  updated_at: Date | null
  competitor_indexes: Prisma.JsonValue | null
  competitor_prices: Prisma.JsonValue | null
  goodfood_price: number
}

/**
 * Model baskets
 */

export type baskets = {
  id: number
  goodfood_id: number
  delivery_date: Date
  basket_totals: Prisma.JsonValue | null
  basket_indexes: Prisma.JsonValue | null
  created_at: Date
  updated_at: Date | null
  region_id: number
  basket_daily_total_id: number
}

/**
 * Model competitors
 */

export type competitors = {
  id: number
  slug: string
  display_text: string
}

/**
 * Model migrations
 */

export type migrations = {
  id: number
  timestamp: bigint
  name: string
}

/**
 * Model price_recommendations
 */

export type price_recommendations = {
  id: number
  product_id: number
  region_id: number
  sale_price: number
  list_price: number
  created_at: Date
  updated_at: Date | null
}

/**
 * Model product_region_competitor_urls
 */

export type product_region_competitor_urls = {
  id: number
  product_id: number
  region_id: number
  competitor_id: number
  url: string
  created_at: Date
  updated_at: Date | null
  deleted_at: Date | null
}

/**
 * Model product_region_competitor_urls_former_urls
 */

export type product_region_competitor_urls_former_urls = {
  product_region_competitor_url_id: number
  old_url: string
  created_at: Date
  updated_at: Date | null
  id: number
}

/**
 * Model product_region_price_data
 */

export type product_region_price_data = {
  id: number
  product_id: number
  region_id: number
  price: number
  discount: number
  threshold_price: number | null
  created_at: Date
  updated_at: Date | null
  deleted_at: Date | null
}

/**
 * Model products
 */

export type products = {
  id: number
  sku: string | null
  name: string | null
  package_quantity: number | null
  package_units: string | null
  package_weight: number | null
  weight_unit_id: number
  created_at: Date
  updated_at: Date | null
  deleted_at: Date | null
}

/**
 * Model regions
 */

export type regions = {
  id: number
  name: string | null
  facility: string | null
  city: string | null
  province: string | null
  postal_code: string | null
  is_active: boolean | null
  created_at: Date
  updated_at: Date | null
  deleted_at: Date | null
}

/**
 * Model scaled_prices
 */

export type scaled_prices = {
  id: number
  product_id: number
  competitor_id: number
  region_id: number
  scrape_result_id: number
  competitor_scaled_price: number | null
  created_at: Date
  updated_at: Date | null
  deleted_at: Date | null
}

/**
 * Model scrape_results
 */

export type scrape_results = {
  id: number
  competitor_sale_price: number | null
  competitor_list_price: number | null
  competitor_sold_by_volume: number | null
  competitor_sold_by_unit_id: number
  promotional_info: string | null
  data_source: string | null
  scrape_time: Date | null
  created_at: Date
  updated_at: Date | null
  deleted_at: Date | null
}

/**
 * Model units
 */

export type units = {
  id: number
  slug: string
  display_text: string
  base_unit_id: number
  scale_of_base_unit: number
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Basket_daily_totals
 * const basket_daily_totals = await prisma.basket_daily_totals.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Basket_daily_totals
   * const basket_daily_totals = await prisma.basket_daily_totals.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;


      /**
   * `prisma.basket_daily_totals`: Exposes CRUD operations for the **basket_daily_totals** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Basket_daily_totals
    * const basket_daily_totals = await prisma.basket_daily_totals.findMany()
    * ```
    */
  get basket_daily_totals(): Prisma.basket_daily_totalsDelegate<GlobalReject>;

  /**
   * `prisma.basket_line_item_competitor_equivalents`: Exposes CRUD operations for the **basket_line_item_competitor_equivalents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Basket_line_item_competitor_equivalents
    * const basket_line_item_competitor_equivalents = await prisma.basket_line_item_competitor_equivalents.findMany()
    * ```
    */
  get basket_line_item_competitor_equivalents(): Prisma.basket_line_item_competitor_equivalentsDelegate<GlobalReject>;

  /**
   * `prisma.basket_line_item_recommended_prices`: Exposes CRUD operations for the **basket_line_item_recommended_prices** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Basket_line_item_recommended_prices
    * const basket_line_item_recommended_prices = await prisma.basket_line_item_recommended_prices.findMany()
    * ```
    */
  get basket_line_item_recommended_prices(): Prisma.basket_line_item_recommended_pricesDelegate<GlobalReject>;

  /**
   * `prisma.basket_line_items`: Exposes CRUD operations for the **basket_line_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Basket_line_items
    * const basket_line_items = await prisma.basket_line_items.findMany()
    * ```
    */
  get basket_line_items(): Prisma.basket_line_itemsDelegate<GlobalReject>;

  /**
   * `prisma.baskets`: Exposes CRUD operations for the **baskets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Baskets
    * const baskets = await prisma.baskets.findMany()
    * ```
    */
  get baskets(): Prisma.basketsDelegate<GlobalReject>;

  /**
   * `prisma.competitors`: Exposes CRUD operations for the **competitors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Competitors
    * const competitors = await prisma.competitors.findMany()
    * ```
    */
  get competitors(): Prisma.competitorsDelegate<GlobalReject>;

  /**
   * `prisma.migrations`: Exposes CRUD operations for the **migrations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Migrations
    * const migrations = await prisma.migrations.findMany()
    * ```
    */
  get migrations(): Prisma.migrationsDelegate<GlobalReject>;

  /**
   * `prisma.price_recommendations`: Exposes CRUD operations for the **price_recommendations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Price_recommendations
    * const price_recommendations = await prisma.price_recommendations.findMany()
    * ```
    */
  get price_recommendations(): Prisma.price_recommendationsDelegate<GlobalReject>;

  /**
   * `prisma.product_region_competitor_urls`: Exposes CRUD operations for the **product_region_competitor_urls** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Product_region_competitor_urls
    * const product_region_competitor_urls = await prisma.product_region_competitor_urls.findMany()
    * ```
    */
  get product_region_competitor_urls(): Prisma.product_region_competitor_urlsDelegate<GlobalReject>;

  /**
   * `prisma.product_region_competitor_urls_former_urls`: Exposes CRUD operations for the **product_region_competitor_urls_former_urls** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Product_region_competitor_urls_former_urls
    * const product_region_competitor_urls_former_urls = await prisma.product_region_competitor_urls_former_urls.findMany()
    * ```
    */
  get product_region_competitor_urls_former_urls(): Prisma.product_region_competitor_urls_former_urlsDelegate<GlobalReject>;

  /**
   * `prisma.product_region_price_data`: Exposes CRUD operations for the **product_region_price_data** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Product_region_price_data
    * const product_region_price_data = await prisma.product_region_price_data.findMany()
    * ```
    */
  get product_region_price_data(): Prisma.product_region_price_dataDelegate<GlobalReject>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<GlobalReject>;

  /**
   * `prisma.regions`: Exposes CRUD operations for the **regions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Regions
    * const regions = await prisma.regions.findMany()
    * ```
    */
  get regions(): Prisma.regionsDelegate<GlobalReject>;

  /**
   * `prisma.scaled_prices`: Exposes CRUD operations for the **scaled_prices** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scaled_prices
    * const scaled_prices = await prisma.scaled_prices.findMany()
    * ```
    */
  get scaled_prices(): Prisma.scaled_pricesDelegate<GlobalReject>;

  /**
   * `prisma.scrape_results`: Exposes CRUD operations for the **scrape_results** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scrape_results
    * const scrape_results = await prisma.scrape_results.findMany()
    * ```
    */
  get scrape_results(): Prisma.scrape_resultsDelegate<GlobalReject>;

  /**
   * `prisma.units`: Exposes CRUD operations for the **units** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Units
    * const units = await prisma.units.findMany()
    * ```
    */
  get units(): Prisma.unitsDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 3.0.1
   * Query Engine version: 2452cc6313d52b8b9a96999ac0e974d0aedf88db
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Same as JsonObject, but allows undefined
   */
  export type InputJsonObject = {[Key in string]?: JsonValue}
 
  export interface InputJsonArray extends Array<JsonValue> {}
 
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    basket_daily_totals: 'basket_daily_totals',
    basket_line_item_competitor_equivalents: 'basket_line_item_competitor_equivalents',
    basket_line_item_recommended_prices: 'basket_line_item_recommended_prices',
    basket_line_items: 'basket_line_items',
    baskets: 'baskets',
    competitors: 'competitors',
    migrations: 'migrations',
    price_recommendations: 'price_recommendations',
    product_region_competitor_urls: 'product_region_competitor_urls',
    product_region_competitor_urls_former_urls: 'product_region_competitor_urls_former_urls',
    product_region_price_data: 'product_region_price_data',
    products: 'products',
    regions: 'regions',
    scaled_prices: 'scaled_prices',
    scrape_results: 'scrape_results',
    units: 'units'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Basket_daily_totalsCountOutputType
   */


  export type Basket_daily_totalsCountOutputType = {
    baskets: number
  }

  export type Basket_daily_totalsCountOutputTypeSelect = {
    baskets?: boolean
  }

  export type Basket_daily_totalsCountOutputTypeGetPayload<
    S extends boolean | null | undefined | Basket_daily_totalsCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? Basket_daily_totalsCountOutputType
    : S extends undefined
    ? never
    : S extends Basket_daily_totalsCountOutputTypeArgs
    ?'include' extends U
    ? Basket_daily_totalsCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Basket_daily_totalsCountOutputType ?Basket_daily_totalsCountOutputType [P]
  : 
     never
  } 
    : Basket_daily_totalsCountOutputType
  : Basket_daily_totalsCountOutputType




  // Custom InputTypes

  /**
   * Basket_daily_totalsCountOutputType without action
   */
  export type Basket_daily_totalsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Basket_daily_totalsCountOutputType
     * 
    **/
    select?: Basket_daily_totalsCountOutputTypeSelect | null
  }



  /**
   * Count Type Basket_line_itemsCountOutputType
   */


  export type Basket_line_itemsCountOutputType = {
    basket_line_item_competitor_equivalents: number
    basket_line_item_recommended_prices: number
  }

  export type Basket_line_itemsCountOutputTypeSelect = {
    basket_line_item_competitor_equivalents?: boolean
    basket_line_item_recommended_prices?: boolean
  }

  export type Basket_line_itemsCountOutputTypeGetPayload<
    S extends boolean | null | undefined | Basket_line_itemsCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? Basket_line_itemsCountOutputType
    : S extends undefined
    ? never
    : S extends Basket_line_itemsCountOutputTypeArgs
    ?'include' extends U
    ? Basket_line_itemsCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Basket_line_itemsCountOutputType ?Basket_line_itemsCountOutputType [P]
  : 
     never
  } 
    : Basket_line_itemsCountOutputType
  : Basket_line_itemsCountOutputType




  // Custom InputTypes

  /**
   * Basket_line_itemsCountOutputType without action
   */
  export type Basket_line_itemsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Basket_line_itemsCountOutputType
     * 
    **/
    select?: Basket_line_itemsCountOutputTypeSelect | null
  }



  /**
   * Count Type CompetitorsCountOutputType
   */


  export type CompetitorsCountOutputType = {
    basket_line_item_competitor_equivalents: number
    product_region_competitor_urls: number
    scaled_prices: number
  }

  export type CompetitorsCountOutputTypeSelect = {
    basket_line_item_competitor_equivalents?: boolean
    product_region_competitor_urls?: boolean
    scaled_prices?: boolean
  }

  export type CompetitorsCountOutputTypeGetPayload<
    S extends boolean | null | undefined | CompetitorsCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? CompetitorsCountOutputType
    : S extends undefined
    ? never
    : S extends CompetitorsCountOutputTypeArgs
    ?'include' extends U
    ? CompetitorsCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof CompetitorsCountOutputType ?CompetitorsCountOutputType [P]
  : 
     never
  } 
    : CompetitorsCountOutputType
  : CompetitorsCountOutputType




  // Custom InputTypes

  /**
   * CompetitorsCountOutputType without action
   */
  export type CompetitorsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CompetitorsCountOutputType
     * 
    **/
    select?: CompetitorsCountOutputTypeSelect | null
  }



  /**
   * Count Type Product_region_competitor_urlsCountOutputType
   */


  export type Product_region_competitor_urlsCountOutputType = {
    product_region_competitor_urls_former_urls: number
  }

  export type Product_region_competitor_urlsCountOutputTypeSelect = {
    product_region_competitor_urls_former_urls?: boolean
  }

  export type Product_region_competitor_urlsCountOutputTypeGetPayload<
    S extends boolean | null | undefined | Product_region_competitor_urlsCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? Product_region_competitor_urlsCountOutputType
    : S extends undefined
    ? never
    : S extends Product_region_competitor_urlsCountOutputTypeArgs
    ?'include' extends U
    ? Product_region_competitor_urlsCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Product_region_competitor_urlsCountOutputType ?Product_region_competitor_urlsCountOutputType [P]
  : 
     never
  } 
    : Product_region_competitor_urlsCountOutputType
  : Product_region_competitor_urlsCountOutputType




  // Custom InputTypes

  /**
   * Product_region_competitor_urlsCountOutputType without action
   */
  export type Product_region_competitor_urlsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Product_region_competitor_urlsCountOutputType
     * 
    **/
    select?: Product_region_competitor_urlsCountOutputTypeSelect | null
  }



  /**
   * Count Type ProductsCountOutputType
   */


  export type ProductsCountOutputType = {
    price_recommendations: number
    product_region_competitor_urls: number
    product_region_price_data: number
    scaled_prices: number
  }

  export type ProductsCountOutputTypeSelect = {
    price_recommendations?: boolean
    product_region_competitor_urls?: boolean
    product_region_price_data?: boolean
    scaled_prices?: boolean
  }

  export type ProductsCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ProductsCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ProductsCountOutputType
    : S extends undefined
    ? never
    : S extends ProductsCountOutputTypeArgs
    ?'include' extends U
    ? ProductsCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof ProductsCountOutputType ?ProductsCountOutputType [P]
  : 
     never
  } 
    : ProductsCountOutputType
  : ProductsCountOutputType




  // Custom InputTypes

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     * 
    **/
    select?: ProductsCountOutputTypeSelect | null
  }



  /**
   * Count Type RegionsCountOutputType
   */


  export type RegionsCountOutputType = {
    baskets: number
    price_recommendations: number
    product_region_competitor_urls: number
    product_region_price_data: number
    scaled_prices: number
  }

  export type RegionsCountOutputTypeSelect = {
    baskets?: boolean
    price_recommendations?: boolean
    product_region_competitor_urls?: boolean
    product_region_price_data?: boolean
    scaled_prices?: boolean
  }

  export type RegionsCountOutputTypeGetPayload<
    S extends boolean | null | undefined | RegionsCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? RegionsCountOutputType
    : S extends undefined
    ? never
    : S extends RegionsCountOutputTypeArgs
    ?'include' extends U
    ? RegionsCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof RegionsCountOutputType ?RegionsCountOutputType [P]
  : 
     never
  } 
    : RegionsCountOutputType
  : RegionsCountOutputType




  // Custom InputTypes

  /**
   * RegionsCountOutputType without action
   */
  export type RegionsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RegionsCountOutputType
     * 
    **/
    select?: RegionsCountOutputTypeSelect | null
  }



  /**
   * Count Type Scrape_resultsCountOutputType
   */


  export type Scrape_resultsCountOutputType = {
    scaled_prices: number
  }

  export type Scrape_resultsCountOutputTypeSelect = {
    scaled_prices?: boolean
  }

  export type Scrape_resultsCountOutputTypeGetPayload<
    S extends boolean | null | undefined | Scrape_resultsCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? Scrape_resultsCountOutputType
    : S extends undefined
    ? never
    : S extends Scrape_resultsCountOutputTypeArgs
    ?'include' extends U
    ? Scrape_resultsCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Scrape_resultsCountOutputType ?Scrape_resultsCountOutputType [P]
  : 
     never
  } 
    : Scrape_resultsCountOutputType
  : Scrape_resultsCountOutputType




  // Custom InputTypes

  /**
   * Scrape_resultsCountOutputType without action
   */
  export type Scrape_resultsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Scrape_resultsCountOutputType
     * 
    **/
    select?: Scrape_resultsCountOutputTypeSelect | null
  }



  /**
   * Count Type UnitsCountOutputType
   */


  export type UnitsCountOutputType = {
    products: number
    scrape_results: number
    other_units: number
  }

  export type UnitsCountOutputTypeSelect = {
    products?: boolean
    scrape_results?: boolean
    other_units?: boolean
  }

  export type UnitsCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UnitsCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UnitsCountOutputType
    : S extends undefined
    ? never
    : S extends UnitsCountOutputTypeArgs
    ?'include' extends U
    ? UnitsCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof UnitsCountOutputType ?UnitsCountOutputType [P]
  : 
     never
  } 
    : UnitsCountOutputType
  : UnitsCountOutputType




  // Custom InputTypes

  /**
   * UnitsCountOutputType without action
   */
  export type UnitsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UnitsCountOutputType
     * 
    **/
    select?: UnitsCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model basket_daily_totals
   */


  export type AggregateBasket_daily_totals = {
    _count: Basket_daily_totalsCountAggregateOutputType | null
    _avg: Basket_daily_totalsAvgAggregateOutputType | null
    _sum: Basket_daily_totalsSumAggregateOutputType | null
    _min: Basket_daily_totalsMinAggregateOutputType | null
    _max: Basket_daily_totalsMaxAggregateOutputType | null
  }

  export type Basket_daily_totalsAvgAggregateOutputType = {
    id: number | null
  }

  export type Basket_daily_totalsSumAggregateOutputType = {
    id: number | null
  }

  export type Basket_daily_totalsMinAggregateOutputType = {
    id: number | null
    delivery_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Basket_daily_totalsMaxAggregateOutputType = {
    id: number | null
    delivery_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Basket_daily_totalsCountAggregateOutputType = {
    id: number
    delivery_date: number
    daily_totals: number
    daily_indexes: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Basket_daily_totalsAvgAggregateInputType = {
    id?: true
  }

  export type Basket_daily_totalsSumAggregateInputType = {
    id?: true
  }

  export type Basket_daily_totalsMinAggregateInputType = {
    id?: true
    delivery_date?: true
    created_at?: true
    updated_at?: true
  }

  export type Basket_daily_totalsMaxAggregateInputType = {
    id?: true
    delivery_date?: true
    created_at?: true
    updated_at?: true
  }

  export type Basket_daily_totalsCountAggregateInputType = {
    id?: true
    delivery_date?: true
    daily_totals?: true
    daily_indexes?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Basket_daily_totalsAggregateArgs = {
    /**
     * Filter which basket_daily_totals to aggregate.
     * 
    **/
    where?: basket_daily_totalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of basket_daily_totals to fetch.
     * 
    **/
    orderBy?: Enumerable<basket_daily_totalsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: basket_daily_totalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` basket_daily_totals from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` basket_daily_totals.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned basket_daily_totals
    **/
    _count?: true | Basket_daily_totalsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Basket_daily_totalsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Basket_daily_totalsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Basket_daily_totalsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Basket_daily_totalsMaxAggregateInputType
  }

  export type GetBasket_daily_totalsAggregateType<T extends Basket_daily_totalsAggregateArgs> = {
        [P in keyof T & keyof AggregateBasket_daily_totals]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBasket_daily_totals[P]>
      : GetScalarType<T[P], AggregateBasket_daily_totals[P]>
  }


    
    
  export type Basket_daily_totalsGroupByArgs = {
    where?: basket_daily_totalsWhereInput
    orderBy?: Enumerable<basket_daily_totalsOrderByWithAggregationInput>
    by: Array<Basket_daily_totalsScalarFieldEnum>
    having?: basket_daily_totalsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Basket_daily_totalsCountAggregateInputType | true
    _avg?: Basket_daily_totalsAvgAggregateInputType
    _sum?: Basket_daily_totalsSumAggregateInputType
    _min?: Basket_daily_totalsMinAggregateInputType
    _max?: Basket_daily_totalsMaxAggregateInputType
  }


  export type Basket_daily_totalsGroupByOutputType = {
    id: number
    delivery_date: Date
    daily_totals: JsonValue
    daily_indexes: JsonValue
    created_at: Date
    updated_at: Date | null
    _count: Basket_daily_totalsCountAggregateOutputType | null
    _avg: Basket_daily_totalsAvgAggregateOutputType | null
    _sum: Basket_daily_totalsSumAggregateOutputType | null
    _min: Basket_daily_totalsMinAggregateOutputType | null
    _max: Basket_daily_totalsMaxAggregateOutputType | null
  }

  type GetBasket_daily_totalsGroupByPayload<T extends Basket_daily_totalsGroupByArgs> = Promise<
    Array<
      PickArray<Basket_daily_totalsGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof Basket_daily_totalsGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], Basket_daily_totalsGroupByOutputType[P]> 
            : GetScalarType<T[P], Basket_daily_totalsGroupByOutputType[P]>
        }
      > 
    >


  export type basket_daily_totalsSelect = {
    id?: boolean
    delivery_date?: boolean
    daily_totals?: boolean
    daily_indexes?: boolean
    created_at?: boolean
    updated_at?: boolean
    baskets?: boolean | basketsFindManyArgs
    _count?: boolean | Basket_daily_totalsCountOutputTypeArgs
  }

  export type basket_daily_totalsInclude = {
    baskets?: boolean | basketsFindManyArgs
    _count?: boolean | Basket_daily_totalsCountOutputTypeArgs
  }

  export type basket_daily_totalsGetPayload<
    S extends boolean | null | undefined | basket_daily_totalsArgs,
    U = keyof S
      > = S extends true
        ? basket_daily_totals
    : S extends undefined
    ? never
    : S extends basket_daily_totalsArgs | basket_daily_totalsFindManyArgs
    ?'include' extends U
    ? basket_daily_totals  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'baskets'
        ? Array < basketsGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? Basket_daily_totalsCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof basket_daily_totals ?basket_daily_totals [P]
  : 
          P extends 'baskets'
        ? Array < basketsGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? Basket_daily_totalsCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : basket_daily_totals
  : basket_daily_totals


  type basket_daily_totalsCountArgs = Merge<
    Omit<basket_daily_totalsFindManyArgs, 'select' | 'include'> & {
      select?: Basket_daily_totalsCountAggregateInputType | true
    }
  >

  export interface basket_daily_totalsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Basket_daily_totals that matches the filter.
     * @param {basket_daily_totalsFindUniqueArgs} args - Arguments to find a Basket_daily_totals
     * @example
     * // Get one Basket_daily_totals
     * const basket_daily_totals = await prisma.basket_daily_totals.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends basket_daily_totalsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, basket_daily_totalsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'basket_daily_totals'> extends True ? CheckSelect<T, Prisma__basket_daily_totalsClient<basket_daily_totals>, Prisma__basket_daily_totalsClient<basket_daily_totalsGetPayload<T>>> : CheckSelect<T, Prisma__basket_daily_totalsClient<basket_daily_totals | null >, Prisma__basket_daily_totalsClient<basket_daily_totalsGetPayload<T> | null >>

    /**
     * Find the first Basket_daily_totals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {basket_daily_totalsFindFirstArgs} args - Arguments to find a Basket_daily_totals
     * @example
     * // Get one Basket_daily_totals
     * const basket_daily_totals = await prisma.basket_daily_totals.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends basket_daily_totalsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, basket_daily_totalsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'basket_daily_totals'> extends True ? CheckSelect<T, Prisma__basket_daily_totalsClient<basket_daily_totals>, Prisma__basket_daily_totalsClient<basket_daily_totalsGetPayload<T>>> : CheckSelect<T, Prisma__basket_daily_totalsClient<basket_daily_totals | null >, Prisma__basket_daily_totalsClient<basket_daily_totalsGetPayload<T> | null >>

    /**
     * Find zero or more Basket_daily_totals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {basket_daily_totalsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Basket_daily_totals
     * const basket_daily_totals = await prisma.basket_daily_totals.findMany()
     * 
     * // Get first 10 Basket_daily_totals
     * const basket_daily_totals = await prisma.basket_daily_totals.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const basket_daily_totalsWithIdOnly = await prisma.basket_daily_totals.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends basket_daily_totalsFindManyArgs>(
      args?: SelectSubset<T, basket_daily_totalsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<basket_daily_totals>>, PrismaPromise<Array<basket_daily_totalsGetPayload<T>>>>

    /**
     * Create a Basket_daily_totals.
     * @param {basket_daily_totalsCreateArgs} args - Arguments to create a Basket_daily_totals.
     * @example
     * // Create one Basket_daily_totals
     * const Basket_daily_totals = await prisma.basket_daily_totals.create({
     *   data: {
     *     // ... data to create a Basket_daily_totals
     *   }
     * })
     * 
    **/
    create<T extends basket_daily_totalsCreateArgs>(
      args: SelectSubset<T, basket_daily_totalsCreateArgs>
    ): CheckSelect<T, Prisma__basket_daily_totalsClient<basket_daily_totals>, Prisma__basket_daily_totalsClient<basket_daily_totalsGetPayload<T>>>

    /**
     * Create many Basket_daily_totals.
     *     @param {basket_daily_totalsCreateManyArgs} args - Arguments to create many Basket_daily_totals.
     *     @example
     *     // Create many Basket_daily_totals
     *     const basket_daily_totals = await prisma.basket_daily_totals.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends basket_daily_totalsCreateManyArgs>(
      args?: SelectSubset<T, basket_daily_totalsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Basket_daily_totals.
     * @param {basket_daily_totalsDeleteArgs} args - Arguments to delete one Basket_daily_totals.
     * @example
     * // Delete one Basket_daily_totals
     * const Basket_daily_totals = await prisma.basket_daily_totals.delete({
     *   where: {
     *     // ... filter to delete one Basket_daily_totals
     *   }
     * })
     * 
    **/
    delete<T extends basket_daily_totalsDeleteArgs>(
      args: SelectSubset<T, basket_daily_totalsDeleteArgs>
    ): CheckSelect<T, Prisma__basket_daily_totalsClient<basket_daily_totals>, Prisma__basket_daily_totalsClient<basket_daily_totalsGetPayload<T>>>

    /**
     * Update one Basket_daily_totals.
     * @param {basket_daily_totalsUpdateArgs} args - Arguments to update one Basket_daily_totals.
     * @example
     * // Update one Basket_daily_totals
     * const basket_daily_totals = await prisma.basket_daily_totals.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends basket_daily_totalsUpdateArgs>(
      args: SelectSubset<T, basket_daily_totalsUpdateArgs>
    ): CheckSelect<T, Prisma__basket_daily_totalsClient<basket_daily_totals>, Prisma__basket_daily_totalsClient<basket_daily_totalsGetPayload<T>>>

    /**
     * Delete zero or more Basket_daily_totals.
     * @param {basket_daily_totalsDeleteManyArgs} args - Arguments to filter Basket_daily_totals to delete.
     * @example
     * // Delete a few Basket_daily_totals
     * const { count } = await prisma.basket_daily_totals.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends basket_daily_totalsDeleteManyArgs>(
      args?: SelectSubset<T, basket_daily_totalsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Basket_daily_totals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {basket_daily_totalsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Basket_daily_totals
     * const basket_daily_totals = await prisma.basket_daily_totals.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends basket_daily_totalsUpdateManyArgs>(
      args: SelectSubset<T, basket_daily_totalsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Basket_daily_totals.
     * @param {basket_daily_totalsUpsertArgs} args - Arguments to update or create a Basket_daily_totals.
     * @example
     * // Update or create a Basket_daily_totals
     * const basket_daily_totals = await prisma.basket_daily_totals.upsert({
     *   create: {
     *     // ... data to create a Basket_daily_totals
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Basket_daily_totals we want to update
     *   }
     * })
    **/
    upsert<T extends basket_daily_totalsUpsertArgs>(
      args: SelectSubset<T, basket_daily_totalsUpsertArgs>
    ): CheckSelect<T, Prisma__basket_daily_totalsClient<basket_daily_totals>, Prisma__basket_daily_totalsClient<basket_daily_totalsGetPayload<T>>>

    /**
     * Count the number of Basket_daily_totals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {basket_daily_totalsCountArgs} args - Arguments to filter Basket_daily_totals to count.
     * @example
     * // Count the number of Basket_daily_totals
     * const count = await prisma.basket_daily_totals.count({
     *   where: {
     *     // ... the filter for the Basket_daily_totals we want to count
     *   }
     * })
    **/
    count<T extends basket_daily_totalsCountArgs>(
      args?: Subset<T, basket_daily_totalsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Basket_daily_totalsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Basket_daily_totals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Basket_daily_totalsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Basket_daily_totalsAggregateArgs>(args: Subset<T, Basket_daily_totalsAggregateArgs>): PrismaPromise<GetBasket_daily_totalsAggregateType<T>>

    /**
     * Group by Basket_daily_totals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Basket_daily_totalsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Basket_daily_totalsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Basket_daily_totalsGroupByArgs['orderBy'] }
        : { orderBy?: Basket_daily_totalsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Basket_daily_totalsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBasket_daily_totalsGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for basket_daily_totals.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__basket_daily_totalsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    baskets<T extends basketsFindManyArgs = {}>(args?: Subset<T, basketsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<baskets>>, PrismaPromise<Array<basketsGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * basket_daily_totals findUnique
   */
  export type basket_daily_totalsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the basket_daily_totals
     * 
    **/
    select?: basket_daily_totalsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: basket_daily_totalsInclude | null
    /**
     * Throw an Error if a basket_daily_totals can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which basket_daily_totals to fetch.
     * 
    **/
    where: basket_daily_totalsWhereUniqueInput
  }


  /**
   * basket_daily_totals findFirst
   */
  export type basket_daily_totalsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the basket_daily_totals
     * 
    **/
    select?: basket_daily_totalsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: basket_daily_totalsInclude | null
    /**
     * Throw an Error if a basket_daily_totals can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which basket_daily_totals to fetch.
     * 
    **/
    where?: basket_daily_totalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of basket_daily_totals to fetch.
     * 
    **/
    orderBy?: Enumerable<basket_daily_totalsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for basket_daily_totals.
     * 
    **/
    cursor?: basket_daily_totalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` basket_daily_totals from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` basket_daily_totals.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of basket_daily_totals.
     * 
    **/
    distinct?: Enumerable<Basket_daily_totalsScalarFieldEnum>
  }


  /**
   * basket_daily_totals findMany
   */
  export type basket_daily_totalsFindManyArgs = {
    /**
     * Select specific fields to fetch from the basket_daily_totals
     * 
    **/
    select?: basket_daily_totalsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: basket_daily_totalsInclude | null
    /**
     * Filter, which basket_daily_totals to fetch.
     * 
    **/
    where?: basket_daily_totalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of basket_daily_totals to fetch.
     * 
    **/
    orderBy?: Enumerable<basket_daily_totalsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing basket_daily_totals.
     * 
    **/
    cursor?: basket_daily_totalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` basket_daily_totals from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` basket_daily_totals.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Basket_daily_totalsScalarFieldEnum>
  }


  /**
   * basket_daily_totals create
   */
  export type basket_daily_totalsCreateArgs = {
    /**
     * Select specific fields to fetch from the basket_daily_totals
     * 
    **/
    select?: basket_daily_totalsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: basket_daily_totalsInclude | null
    /**
     * The data needed to create a basket_daily_totals.
     * 
    **/
    data: XOR<basket_daily_totalsCreateInput, basket_daily_totalsUncheckedCreateInput>
  }


  /**
   * basket_daily_totals createMany
   */
  export type basket_daily_totalsCreateManyArgs = {
    data: Enumerable<basket_daily_totalsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * basket_daily_totals update
   */
  export type basket_daily_totalsUpdateArgs = {
    /**
     * Select specific fields to fetch from the basket_daily_totals
     * 
    **/
    select?: basket_daily_totalsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: basket_daily_totalsInclude | null
    /**
     * The data needed to update a basket_daily_totals.
     * 
    **/
    data: XOR<basket_daily_totalsUpdateInput, basket_daily_totalsUncheckedUpdateInput>
    /**
     * Choose, which basket_daily_totals to update.
     * 
    **/
    where: basket_daily_totalsWhereUniqueInput
  }


  /**
   * basket_daily_totals updateMany
   */
  export type basket_daily_totalsUpdateManyArgs = {
    data: XOR<basket_daily_totalsUpdateManyMutationInput, basket_daily_totalsUncheckedUpdateManyInput>
    where?: basket_daily_totalsWhereInput
  }


  /**
   * basket_daily_totals upsert
   */
  export type basket_daily_totalsUpsertArgs = {
    /**
     * Select specific fields to fetch from the basket_daily_totals
     * 
    **/
    select?: basket_daily_totalsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: basket_daily_totalsInclude | null
    /**
     * The filter to search for the basket_daily_totals to update in case it exists.
     * 
    **/
    where: basket_daily_totalsWhereUniqueInput
    /**
     * In case the basket_daily_totals found by the `where` argument doesn't exist, create a new basket_daily_totals with this data.
     * 
    **/
    create: XOR<basket_daily_totalsCreateInput, basket_daily_totalsUncheckedCreateInput>
    /**
     * In case the basket_daily_totals was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<basket_daily_totalsUpdateInput, basket_daily_totalsUncheckedUpdateInput>
  }


  /**
   * basket_daily_totals delete
   */
  export type basket_daily_totalsDeleteArgs = {
    /**
     * Select specific fields to fetch from the basket_daily_totals
     * 
    **/
    select?: basket_daily_totalsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: basket_daily_totalsInclude | null
    /**
     * Filter which basket_daily_totals to delete.
     * 
    **/
    where: basket_daily_totalsWhereUniqueInput
  }


  /**
   * basket_daily_totals deleteMany
   */
  export type basket_daily_totalsDeleteManyArgs = {
    where?: basket_daily_totalsWhereInput
  }


  /**
   * basket_daily_totals without action
   */
  export type basket_daily_totalsArgs = {
    /**
     * Select specific fields to fetch from the basket_daily_totals
     * 
    **/
    select?: basket_daily_totalsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: basket_daily_totalsInclude | null
  }



  /**
   * Model basket_line_item_competitor_equivalents
   */


  export type AggregateBasket_line_item_competitor_equivalents = {
    _count: Basket_line_item_competitor_equivalentsCountAggregateOutputType | null
    _avg: Basket_line_item_competitor_equivalentsAvgAggregateOutputType | null
    _sum: Basket_line_item_competitor_equivalentsSumAggregateOutputType | null
    _min: Basket_line_item_competitor_equivalentsMinAggregateOutputType | null
    _max: Basket_line_item_competitor_equivalentsMaxAggregateOutputType | null
  }

  export type Basket_line_item_competitor_equivalentsAvgAggregateOutputType = {
    id: number | null
    competitor_price: number | null
    basket_line_item_id: number | null
    competitor_id: number | null
  }

  export type Basket_line_item_competitor_equivalentsSumAggregateOutputType = {
    id: number | null
    competitor_price: number | null
    basket_line_item_id: number | null
    competitor_id: number | null
  }

  export type Basket_line_item_competitor_equivalentsMinAggregateOutputType = {
    id: number | null
    competitor_price: number | null
    basket_line_item_id: number | null
    competitor_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Basket_line_item_competitor_equivalentsMaxAggregateOutputType = {
    id: number | null
    competitor_price: number | null
    basket_line_item_id: number | null
    competitor_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Basket_line_item_competitor_equivalentsCountAggregateOutputType = {
    id: number
    competitor_price: number
    basket_line_item_id: number
    competitor_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Basket_line_item_competitor_equivalentsAvgAggregateInputType = {
    id?: true
    competitor_price?: true
    basket_line_item_id?: true
    competitor_id?: true
  }

  export type Basket_line_item_competitor_equivalentsSumAggregateInputType = {
    id?: true
    competitor_price?: true
    basket_line_item_id?: true
    competitor_id?: true
  }

  export type Basket_line_item_competitor_equivalentsMinAggregateInputType = {
    id?: true
    competitor_price?: true
    basket_line_item_id?: true
    competitor_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Basket_line_item_competitor_equivalentsMaxAggregateInputType = {
    id?: true
    competitor_price?: true
    basket_line_item_id?: true
    competitor_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Basket_line_item_competitor_equivalentsCountAggregateInputType = {
    id?: true
    competitor_price?: true
    basket_line_item_id?: true
    competitor_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Basket_line_item_competitor_equivalentsAggregateArgs = {
    /**
     * Filter which basket_line_item_competitor_equivalents to aggregate.
     * 
    **/
    where?: basket_line_item_competitor_equivalentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of basket_line_item_competitor_equivalents to fetch.
     * 
    **/
    orderBy?: Enumerable<basket_line_item_competitor_equivalentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: basket_line_item_competitor_equivalentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` basket_line_item_competitor_equivalents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` basket_line_item_competitor_equivalents.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned basket_line_item_competitor_equivalents
    **/
    _count?: true | Basket_line_item_competitor_equivalentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Basket_line_item_competitor_equivalentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Basket_line_item_competitor_equivalentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Basket_line_item_competitor_equivalentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Basket_line_item_competitor_equivalentsMaxAggregateInputType
  }

  export type GetBasket_line_item_competitor_equivalentsAggregateType<T extends Basket_line_item_competitor_equivalentsAggregateArgs> = {
        [P in keyof T & keyof AggregateBasket_line_item_competitor_equivalents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBasket_line_item_competitor_equivalents[P]>
      : GetScalarType<T[P], AggregateBasket_line_item_competitor_equivalents[P]>
  }


    
    
  export type Basket_line_item_competitor_equivalentsGroupByArgs = {
    where?: basket_line_item_competitor_equivalentsWhereInput
    orderBy?: Enumerable<basket_line_item_competitor_equivalentsOrderByWithAggregationInput>
    by: Array<Basket_line_item_competitor_equivalentsScalarFieldEnum>
    having?: basket_line_item_competitor_equivalentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Basket_line_item_competitor_equivalentsCountAggregateInputType | true
    _avg?: Basket_line_item_competitor_equivalentsAvgAggregateInputType
    _sum?: Basket_line_item_competitor_equivalentsSumAggregateInputType
    _min?: Basket_line_item_competitor_equivalentsMinAggregateInputType
    _max?: Basket_line_item_competitor_equivalentsMaxAggregateInputType
  }


  export type Basket_line_item_competitor_equivalentsGroupByOutputType = {
    id: number
    competitor_price: number | null
    basket_line_item_id: number
    competitor_id: number
    created_at: Date
    updated_at: Date | null
    _count: Basket_line_item_competitor_equivalentsCountAggregateOutputType | null
    _avg: Basket_line_item_competitor_equivalentsAvgAggregateOutputType | null
    _sum: Basket_line_item_competitor_equivalentsSumAggregateOutputType | null
    _min: Basket_line_item_competitor_equivalentsMinAggregateOutputType | null
    _max: Basket_line_item_competitor_equivalentsMaxAggregateOutputType | null
  }

  type GetBasket_line_item_competitor_equivalentsGroupByPayload<T extends Basket_line_item_competitor_equivalentsGroupByArgs> = Promise<
    Array<
      PickArray<Basket_line_item_competitor_equivalentsGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof Basket_line_item_competitor_equivalentsGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], Basket_line_item_competitor_equivalentsGroupByOutputType[P]> 
            : GetScalarType<T[P], Basket_line_item_competitor_equivalentsGroupByOutputType[P]>
        }
      > 
    >


  export type basket_line_item_competitor_equivalentsSelect = {
    id?: boolean
    competitor_price?: boolean
    basket_line_item_id?: boolean
    competitor_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    basket_line_items?: boolean | basket_line_itemsArgs
    competitors?: boolean | competitorsArgs
  }

  export type basket_line_item_competitor_equivalentsInclude = {
    basket_line_items?: boolean | basket_line_itemsArgs
    competitors?: boolean | competitorsArgs
  }

  export type basket_line_item_competitor_equivalentsGetPayload<
    S extends boolean | null | undefined | basket_line_item_competitor_equivalentsArgs,
    U = keyof S
      > = S extends true
        ? basket_line_item_competitor_equivalents
    : S extends undefined
    ? never
    : S extends basket_line_item_competitor_equivalentsArgs | basket_line_item_competitor_equivalentsFindManyArgs
    ?'include' extends U
    ? basket_line_item_competitor_equivalents  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'basket_line_items'
        ? basket_line_itemsGetPayload<S['include'][P]> :
        P extends 'competitors'
        ? competitorsGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof basket_line_item_competitor_equivalents ?basket_line_item_competitor_equivalents [P]
  : 
          P extends 'basket_line_items'
        ? basket_line_itemsGetPayload<S['select'][P]> :
        P extends 'competitors'
        ? competitorsGetPayload<S['select'][P]> : never
  } 
    : basket_line_item_competitor_equivalents
  : basket_line_item_competitor_equivalents


  type basket_line_item_competitor_equivalentsCountArgs = Merge<
    Omit<basket_line_item_competitor_equivalentsFindManyArgs, 'select' | 'include'> & {
      select?: Basket_line_item_competitor_equivalentsCountAggregateInputType | true
    }
  >

  export interface basket_line_item_competitor_equivalentsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Basket_line_item_competitor_equivalents that matches the filter.
     * @param {basket_line_item_competitor_equivalentsFindUniqueArgs} args - Arguments to find a Basket_line_item_competitor_equivalents
     * @example
     * // Get one Basket_line_item_competitor_equivalents
     * const basket_line_item_competitor_equivalents = await prisma.basket_line_item_competitor_equivalents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends basket_line_item_competitor_equivalentsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, basket_line_item_competitor_equivalentsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'basket_line_item_competitor_equivalents'> extends True ? CheckSelect<T, Prisma__basket_line_item_competitor_equivalentsClient<basket_line_item_competitor_equivalents>, Prisma__basket_line_item_competitor_equivalentsClient<basket_line_item_competitor_equivalentsGetPayload<T>>> : CheckSelect<T, Prisma__basket_line_item_competitor_equivalentsClient<basket_line_item_competitor_equivalents | null >, Prisma__basket_line_item_competitor_equivalentsClient<basket_line_item_competitor_equivalentsGetPayload<T> | null >>

    /**
     * Find the first Basket_line_item_competitor_equivalents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {basket_line_item_competitor_equivalentsFindFirstArgs} args - Arguments to find a Basket_line_item_competitor_equivalents
     * @example
     * // Get one Basket_line_item_competitor_equivalents
     * const basket_line_item_competitor_equivalents = await prisma.basket_line_item_competitor_equivalents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends basket_line_item_competitor_equivalentsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, basket_line_item_competitor_equivalentsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'basket_line_item_competitor_equivalents'> extends True ? CheckSelect<T, Prisma__basket_line_item_competitor_equivalentsClient<basket_line_item_competitor_equivalents>, Prisma__basket_line_item_competitor_equivalentsClient<basket_line_item_competitor_equivalentsGetPayload<T>>> : CheckSelect<T, Prisma__basket_line_item_competitor_equivalentsClient<basket_line_item_competitor_equivalents | null >, Prisma__basket_line_item_competitor_equivalentsClient<basket_line_item_competitor_equivalentsGetPayload<T> | null >>

    /**
     * Find zero or more Basket_line_item_competitor_equivalents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {basket_line_item_competitor_equivalentsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Basket_line_item_competitor_equivalents
     * const basket_line_item_competitor_equivalents = await prisma.basket_line_item_competitor_equivalents.findMany()
     * 
     * // Get first 10 Basket_line_item_competitor_equivalents
     * const basket_line_item_competitor_equivalents = await prisma.basket_line_item_competitor_equivalents.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const basket_line_item_competitor_equivalentsWithIdOnly = await prisma.basket_line_item_competitor_equivalents.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends basket_line_item_competitor_equivalentsFindManyArgs>(
      args?: SelectSubset<T, basket_line_item_competitor_equivalentsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<basket_line_item_competitor_equivalents>>, PrismaPromise<Array<basket_line_item_competitor_equivalentsGetPayload<T>>>>

    /**
     * Create a Basket_line_item_competitor_equivalents.
     * @param {basket_line_item_competitor_equivalentsCreateArgs} args - Arguments to create a Basket_line_item_competitor_equivalents.
     * @example
     * // Create one Basket_line_item_competitor_equivalents
     * const Basket_line_item_competitor_equivalents = await prisma.basket_line_item_competitor_equivalents.create({
     *   data: {
     *     // ... data to create a Basket_line_item_competitor_equivalents
     *   }
     * })
     * 
    **/
    create<T extends basket_line_item_competitor_equivalentsCreateArgs>(
      args: SelectSubset<T, basket_line_item_competitor_equivalentsCreateArgs>
    ): CheckSelect<T, Prisma__basket_line_item_competitor_equivalentsClient<basket_line_item_competitor_equivalents>, Prisma__basket_line_item_competitor_equivalentsClient<basket_line_item_competitor_equivalentsGetPayload<T>>>

    /**
     * Create many Basket_line_item_competitor_equivalents.
     *     @param {basket_line_item_competitor_equivalentsCreateManyArgs} args - Arguments to create many Basket_line_item_competitor_equivalents.
     *     @example
     *     // Create many Basket_line_item_competitor_equivalents
     *     const basket_line_item_competitor_equivalents = await prisma.basket_line_item_competitor_equivalents.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends basket_line_item_competitor_equivalentsCreateManyArgs>(
      args?: SelectSubset<T, basket_line_item_competitor_equivalentsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Basket_line_item_competitor_equivalents.
     * @param {basket_line_item_competitor_equivalentsDeleteArgs} args - Arguments to delete one Basket_line_item_competitor_equivalents.
     * @example
     * // Delete one Basket_line_item_competitor_equivalents
     * const Basket_line_item_competitor_equivalents = await prisma.basket_line_item_competitor_equivalents.delete({
     *   where: {
     *     // ... filter to delete one Basket_line_item_competitor_equivalents
     *   }
     * })
     * 
    **/
    delete<T extends basket_line_item_competitor_equivalentsDeleteArgs>(
      args: SelectSubset<T, basket_line_item_competitor_equivalentsDeleteArgs>
    ): CheckSelect<T, Prisma__basket_line_item_competitor_equivalentsClient<basket_line_item_competitor_equivalents>, Prisma__basket_line_item_competitor_equivalentsClient<basket_line_item_competitor_equivalentsGetPayload<T>>>

    /**
     * Update one Basket_line_item_competitor_equivalents.
     * @param {basket_line_item_competitor_equivalentsUpdateArgs} args - Arguments to update one Basket_line_item_competitor_equivalents.
     * @example
     * // Update one Basket_line_item_competitor_equivalents
     * const basket_line_item_competitor_equivalents = await prisma.basket_line_item_competitor_equivalents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends basket_line_item_competitor_equivalentsUpdateArgs>(
      args: SelectSubset<T, basket_line_item_competitor_equivalentsUpdateArgs>
    ): CheckSelect<T, Prisma__basket_line_item_competitor_equivalentsClient<basket_line_item_competitor_equivalents>, Prisma__basket_line_item_competitor_equivalentsClient<basket_line_item_competitor_equivalentsGetPayload<T>>>

    /**
     * Delete zero or more Basket_line_item_competitor_equivalents.
     * @param {basket_line_item_competitor_equivalentsDeleteManyArgs} args - Arguments to filter Basket_line_item_competitor_equivalents to delete.
     * @example
     * // Delete a few Basket_line_item_competitor_equivalents
     * const { count } = await prisma.basket_line_item_competitor_equivalents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends basket_line_item_competitor_equivalentsDeleteManyArgs>(
      args?: SelectSubset<T, basket_line_item_competitor_equivalentsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Basket_line_item_competitor_equivalents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {basket_line_item_competitor_equivalentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Basket_line_item_competitor_equivalents
     * const basket_line_item_competitor_equivalents = await prisma.basket_line_item_competitor_equivalents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends basket_line_item_competitor_equivalentsUpdateManyArgs>(
      args: SelectSubset<T, basket_line_item_competitor_equivalentsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Basket_line_item_competitor_equivalents.
     * @param {basket_line_item_competitor_equivalentsUpsertArgs} args - Arguments to update or create a Basket_line_item_competitor_equivalents.
     * @example
     * // Update or create a Basket_line_item_competitor_equivalents
     * const basket_line_item_competitor_equivalents = await prisma.basket_line_item_competitor_equivalents.upsert({
     *   create: {
     *     // ... data to create a Basket_line_item_competitor_equivalents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Basket_line_item_competitor_equivalents we want to update
     *   }
     * })
    **/
    upsert<T extends basket_line_item_competitor_equivalentsUpsertArgs>(
      args: SelectSubset<T, basket_line_item_competitor_equivalentsUpsertArgs>
    ): CheckSelect<T, Prisma__basket_line_item_competitor_equivalentsClient<basket_line_item_competitor_equivalents>, Prisma__basket_line_item_competitor_equivalentsClient<basket_line_item_competitor_equivalentsGetPayload<T>>>

    /**
     * Count the number of Basket_line_item_competitor_equivalents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {basket_line_item_competitor_equivalentsCountArgs} args - Arguments to filter Basket_line_item_competitor_equivalents to count.
     * @example
     * // Count the number of Basket_line_item_competitor_equivalents
     * const count = await prisma.basket_line_item_competitor_equivalents.count({
     *   where: {
     *     // ... the filter for the Basket_line_item_competitor_equivalents we want to count
     *   }
     * })
    **/
    count<T extends basket_line_item_competitor_equivalentsCountArgs>(
      args?: Subset<T, basket_line_item_competitor_equivalentsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Basket_line_item_competitor_equivalentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Basket_line_item_competitor_equivalents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Basket_line_item_competitor_equivalentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Basket_line_item_competitor_equivalentsAggregateArgs>(args: Subset<T, Basket_line_item_competitor_equivalentsAggregateArgs>): PrismaPromise<GetBasket_line_item_competitor_equivalentsAggregateType<T>>

    /**
     * Group by Basket_line_item_competitor_equivalents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Basket_line_item_competitor_equivalentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Basket_line_item_competitor_equivalentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Basket_line_item_competitor_equivalentsGroupByArgs['orderBy'] }
        : { orderBy?: Basket_line_item_competitor_equivalentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Basket_line_item_competitor_equivalentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBasket_line_item_competitor_equivalentsGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for basket_line_item_competitor_equivalents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__basket_line_item_competitor_equivalentsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    basket_line_items<T extends basket_line_itemsArgs = {}>(args?: Subset<T, basket_line_itemsArgs>): CheckSelect<T, Prisma__basket_line_itemsClient<basket_line_items | null >, Prisma__basket_line_itemsClient<basket_line_itemsGetPayload<T> | null >>;

    competitors<T extends competitorsArgs = {}>(args?: Subset<T, competitorsArgs>): CheckSelect<T, Prisma__competitorsClient<competitors | null >, Prisma__competitorsClient<competitorsGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * basket_line_item_competitor_equivalents findUnique
   */
  export type basket_line_item_competitor_equivalentsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the basket_line_item_competitor_equivalents
     * 
    **/
    select?: basket_line_item_competitor_equivalentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: basket_line_item_competitor_equivalentsInclude | null
    /**
     * Throw an Error if a basket_line_item_competitor_equivalents can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which basket_line_item_competitor_equivalents to fetch.
     * 
    **/
    where: basket_line_item_competitor_equivalentsWhereUniqueInput
  }


  /**
   * basket_line_item_competitor_equivalents findFirst
   */
  export type basket_line_item_competitor_equivalentsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the basket_line_item_competitor_equivalents
     * 
    **/
    select?: basket_line_item_competitor_equivalentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: basket_line_item_competitor_equivalentsInclude | null
    /**
     * Throw an Error if a basket_line_item_competitor_equivalents can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which basket_line_item_competitor_equivalents to fetch.
     * 
    **/
    where?: basket_line_item_competitor_equivalentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of basket_line_item_competitor_equivalents to fetch.
     * 
    **/
    orderBy?: Enumerable<basket_line_item_competitor_equivalentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for basket_line_item_competitor_equivalents.
     * 
    **/
    cursor?: basket_line_item_competitor_equivalentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` basket_line_item_competitor_equivalents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` basket_line_item_competitor_equivalents.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of basket_line_item_competitor_equivalents.
     * 
    **/
    distinct?: Enumerable<Basket_line_item_competitor_equivalentsScalarFieldEnum>
  }


  /**
   * basket_line_item_competitor_equivalents findMany
   */
  export type basket_line_item_competitor_equivalentsFindManyArgs = {
    /**
     * Select specific fields to fetch from the basket_line_item_competitor_equivalents
     * 
    **/
    select?: basket_line_item_competitor_equivalentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: basket_line_item_competitor_equivalentsInclude | null
    /**
     * Filter, which basket_line_item_competitor_equivalents to fetch.
     * 
    **/
    where?: basket_line_item_competitor_equivalentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of basket_line_item_competitor_equivalents to fetch.
     * 
    **/
    orderBy?: Enumerable<basket_line_item_competitor_equivalentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing basket_line_item_competitor_equivalents.
     * 
    **/
    cursor?: basket_line_item_competitor_equivalentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` basket_line_item_competitor_equivalents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` basket_line_item_competitor_equivalents.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Basket_line_item_competitor_equivalentsScalarFieldEnum>
  }


  /**
   * basket_line_item_competitor_equivalents create
   */
  export type basket_line_item_competitor_equivalentsCreateArgs = {
    /**
     * Select specific fields to fetch from the basket_line_item_competitor_equivalents
     * 
    **/
    select?: basket_line_item_competitor_equivalentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: basket_line_item_competitor_equivalentsInclude | null
    /**
     * The data needed to create a basket_line_item_competitor_equivalents.
     * 
    **/
    data: XOR<basket_line_item_competitor_equivalentsCreateInput, basket_line_item_competitor_equivalentsUncheckedCreateInput>
  }


  /**
   * basket_line_item_competitor_equivalents createMany
   */
  export type basket_line_item_competitor_equivalentsCreateManyArgs = {
    data: Enumerable<basket_line_item_competitor_equivalentsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * basket_line_item_competitor_equivalents update
   */
  export type basket_line_item_competitor_equivalentsUpdateArgs = {
    /**
     * Select specific fields to fetch from the basket_line_item_competitor_equivalents
     * 
    **/
    select?: basket_line_item_competitor_equivalentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: basket_line_item_competitor_equivalentsInclude | null
    /**
     * The data needed to update a basket_line_item_competitor_equivalents.
     * 
    **/
    data: XOR<basket_line_item_competitor_equivalentsUpdateInput, basket_line_item_competitor_equivalentsUncheckedUpdateInput>
    /**
     * Choose, which basket_line_item_competitor_equivalents to update.
     * 
    **/
    where: basket_line_item_competitor_equivalentsWhereUniqueInput
  }


  /**
   * basket_line_item_competitor_equivalents updateMany
   */
  export type basket_line_item_competitor_equivalentsUpdateManyArgs = {
    data: XOR<basket_line_item_competitor_equivalentsUpdateManyMutationInput, basket_line_item_competitor_equivalentsUncheckedUpdateManyInput>
    where?: basket_line_item_competitor_equivalentsWhereInput
  }


  /**
   * basket_line_item_competitor_equivalents upsert
   */
  export type basket_line_item_competitor_equivalentsUpsertArgs = {
    /**
     * Select specific fields to fetch from the basket_line_item_competitor_equivalents
     * 
    **/
    select?: basket_line_item_competitor_equivalentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: basket_line_item_competitor_equivalentsInclude | null
    /**
     * The filter to search for the basket_line_item_competitor_equivalents to update in case it exists.
     * 
    **/
    where: basket_line_item_competitor_equivalentsWhereUniqueInput
    /**
     * In case the basket_line_item_competitor_equivalents found by the `where` argument doesn't exist, create a new basket_line_item_competitor_equivalents with this data.
     * 
    **/
    create: XOR<basket_line_item_competitor_equivalentsCreateInput, basket_line_item_competitor_equivalentsUncheckedCreateInput>
    /**
     * In case the basket_line_item_competitor_equivalents was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<basket_line_item_competitor_equivalentsUpdateInput, basket_line_item_competitor_equivalentsUncheckedUpdateInput>
  }


  /**
   * basket_line_item_competitor_equivalents delete
   */
  export type basket_line_item_competitor_equivalentsDeleteArgs = {
    /**
     * Select specific fields to fetch from the basket_line_item_competitor_equivalents
     * 
    **/
    select?: basket_line_item_competitor_equivalentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: basket_line_item_competitor_equivalentsInclude | null
    /**
     * Filter which basket_line_item_competitor_equivalents to delete.
     * 
    **/
    where: basket_line_item_competitor_equivalentsWhereUniqueInput
  }


  /**
   * basket_line_item_competitor_equivalents deleteMany
   */
  export type basket_line_item_competitor_equivalentsDeleteManyArgs = {
    where?: basket_line_item_competitor_equivalentsWhereInput
  }


  /**
   * basket_line_item_competitor_equivalents without action
   */
  export type basket_line_item_competitor_equivalentsArgs = {
    /**
     * Select specific fields to fetch from the basket_line_item_competitor_equivalents
     * 
    **/
    select?: basket_line_item_competitor_equivalentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: basket_line_item_competitor_equivalentsInclude | null
  }



  /**
   * Model basket_line_item_recommended_prices
   */


  export type AggregateBasket_line_item_recommended_prices = {
    _count: Basket_line_item_recommended_pricesCountAggregateOutputType | null
    _avg: Basket_line_item_recommended_pricesAvgAggregateOutputType | null
    _sum: Basket_line_item_recommended_pricesSumAggregateOutputType | null
    _min: Basket_line_item_recommended_pricesMinAggregateOutputType | null
    _max: Basket_line_item_recommended_pricesMaxAggregateOutputType | null
  }

  export type Basket_line_item_recommended_pricesAvgAggregateOutputType = {
    id: number | null
    recommended_price: number | null
    basket_line_item_id: number | null
    price_recommendation_id: number | null
  }

  export type Basket_line_item_recommended_pricesSumAggregateOutputType = {
    id: number | null
    recommended_price: number | null
    basket_line_item_id: number | null
    price_recommendation_id: number | null
  }

  export type Basket_line_item_recommended_pricesMinAggregateOutputType = {
    id: number | null
    recommended_price: number | null
    basket_line_item_id: number | null
    price_recommendation_id: number | null
  }

  export type Basket_line_item_recommended_pricesMaxAggregateOutputType = {
    id: number | null
    recommended_price: number | null
    basket_line_item_id: number | null
    price_recommendation_id: number | null
  }

  export type Basket_line_item_recommended_pricesCountAggregateOutputType = {
    id: number
    recommended_price: number
    basket_line_item_id: number
    price_recommendation_id: number
    _all: number
  }


  export type Basket_line_item_recommended_pricesAvgAggregateInputType = {
    id?: true
    recommended_price?: true
    basket_line_item_id?: true
    price_recommendation_id?: true
  }

  export type Basket_line_item_recommended_pricesSumAggregateInputType = {
    id?: true
    recommended_price?: true
    basket_line_item_id?: true
    price_recommendation_id?: true
  }

  export type Basket_line_item_recommended_pricesMinAggregateInputType = {
    id?: true
    recommended_price?: true
    basket_line_item_id?: true
    price_recommendation_id?: true
  }

  export type Basket_line_item_recommended_pricesMaxAggregateInputType = {
    id?: true
    recommended_price?: true
    basket_line_item_id?: true
    price_recommendation_id?: true
  }

  export type Basket_line_item_recommended_pricesCountAggregateInputType = {
    id?: true
    recommended_price?: true
    basket_line_item_id?: true
    price_recommendation_id?: true
    _all?: true
  }

  export type Basket_line_item_recommended_pricesAggregateArgs = {
    /**
     * Filter which basket_line_item_recommended_prices to aggregate.
     * 
    **/
    where?: basket_line_item_recommended_pricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of basket_line_item_recommended_prices to fetch.
     * 
    **/
    orderBy?: Enumerable<basket_line_item_recommended_pricesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: basket_line_item_recommended_pricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` basket_line_item_recommended_prices from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` basket_line_item_recommended_prices.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned basket_line_item_recommended_prices
    **/
    _count?: true | Basket_line_item_recommended_pricesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Basket_line_item_recommended_pricesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Basket_line_item_recommended_pricesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Basket_line_item_recommended_pricesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Basket_line_item_recommended_pricesMaxAggregateInputType
  }

  export type GetBasket_line_item_recommended_pricesAggregateType<T extends Basket_line_item_recommended_pricesAggregateArgs> = {
        [P in keyof T & keyof AggregateBasket_line_item_recommended_prices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBasket_line_item_recommended_prices[P]>
      : GetScalarType<T[P], AggregateBasket_line_item_recommended_prices[P]>
  }


    
    
  export type Basket_line_item_recommended_pricesGroupByArgs = {
    where?: basket_line_item_recommended_pricesWhereInput
    orderBy?: Enumerable<basket_line_item_recommended_pricesOrderByWithAggregationInput>
    by: Array<Basket_line_item_recommended_pricesScalarFieldEnum>
    having?: basket_line_item_recommended_pricesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Basket_line_item_recommended_pricesCountAggregateInputType | true
    _avg?: Basket_line_item_recommended_pricesAvgAggregateInputType
    _sum?: Basket_line_item_recommended_pricesSumAggregateInputType
    _min?: Basket_line_item_recommended_pricesMinAggregateInputType
    _max?: Basket_line_item_recommended_pricesMaxAggregateInputType
  }


  export type Basket_line_item_recommended_pricesGroupByOutputType = {
    id: number
    recommended_price: number
    basket_line_item_id: number
    price_recommendation_id: number | null
    _count: Basket_line_item_recommended_pricesCountAggregateOutputType | null
    _avg: Basket_line_item_recommended_pricesAvgAggregateOutputType | null
    _sum: Basket_line_item_recommended_pricesSumAggregateOutputType | null
    _min: Basket_line_item_recommended_pricesMinAggregateOutputType | null
    _max: Basket_line_item_recommended_pricesMaxAggregateOutputType | null
  }

  type GetBasket_line_item_recommended_pricesGroupByPayload<T extends Basket_line_item_recommended_pricesGroupByArgs> = Promise<
    Array<
      PickArray<Basket_line_item_recommended_pricesGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof Basket_line_item_recommended_pricesGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], Basket_line_item_recommended_pricesGroupByOutputType[P]> 
            : GetScalarType<T[P], Basket_line_item_recommended_pricesGroupByOutputType[P]>
        }
      > 
    >


  export type basket_line_item_recommended_pricesSelect = {
    id?: boolean
    recommended_price?: boolean
    basket_line_item_id?: boolean
    price_recommendation_id?: boolean
    basket_line_items?: boolean | basket_line_itemsArgs
  }

  export type basket_line_item_recommended_pricesInclude = {
    basket_line_items?: boolean | basket_line_itemsArgs
  }

  export type basket_line_item_recommended_pricesGetPayload<
    S extends boolean | null | undefined | basket_line_item_recommended_pricesArgs,
    U = keyof S
      > = S extends true
        ? basket_line_item_recommended_prices
    : S extends undefined
    ? never
    : S extends basket_line_item_recommended_pricesArgs | basket_line_item_recommended_pricesFindManyArgs
    ?'include' extends U
    ? basket_line_item_recommended_prices  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'basket_line_items'
        ? basket_line_itemsGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof basket_line_item_recommended_prices ?basket_line_item_recommended_prices [P]
  : 
          P extends 'basket_line_items'
        ? basket_line_itemsGetPayload<S['select'][P]> : never
  } 
    : basket_line_item_recommended_prices
  : basket_line_item_recommended_prices


  type basket_line_item_recommended_pricesCountArgs = Merge<
    Omit<basket_line_item_recommended_pricesFindManyArgs, 'select' | 'include'> & {
      select?: Basket_line_item_recommended_pricesCountAggregateInputType | true
    }
  >

  export interface basket_line_item_recommended_pricesDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Basket_line_item_recommended_prices that matches the filter.
     * @param {basket_line_item_recommended_pricesFindUniqueArgs} args - Arguments to find a Basket_line_item_recommended_prices
     * @example
     * // Get one Basket_line_item_recommended_prices
     * const basket_line_item_recommended_prices = await prisma.basket_line_item_recommended_prices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends basket_line_item_recommended_pricesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, basket_line_item_recommended_pricesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'basket_line_item_recommended_prices'> extends True ? CheckSelect<T, Prisma__basket_line_item_recommended_pricesClient<basket_line_item_recommended_prices>, Prisma__basket_line_item_recommended_pricesClient<basket_line_item_recommended_pricesGetPayload<T>>> : CheckSelect<T, Prisma__basket_line_item_recommended_pricesClient<basket_line_item_recommended_prices | null >, Prisma__basket_line_item_recommended_pricesClient<basket_line_item_recommended_pricesGetPayload<T> | null >>

    /**
     * Find the first Basket_line_item_recommended_prices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {basket_line_item_recommended_pricesFindFirstArgs} args - Arguments to find a Basket_line_item_recommended_prices
     * @example
     * // Get one Basket_line_item_recommended_prices
     * const basket_line_item_recommended_prices = await prisma.basket_line_item_recommended_prices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends basket_line_item_recommended_pricesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, basket_line_item_recommended_pricesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'basket_line_item_recommended_prices'> extends True ? CheckSelect<T, Prisma__basket_line_item_recommended_pricesClient<basket_line_item_recommended_prices>, Prisma__basket_line_item_recommended_pricesClient<basket_line_item_recommended_pricesGetPayload<T>>> : CheckSelect<T, Prisma__basket_line_item_recommended_pricesClient<basket_line_item_recommended_prices | null >, Prisma__basket_line_item_recommended_pricesClient<basket_line_item_recommended_pricesGetPayload<T> | null >>

    /**
     * Find zero or more Basket_line_item_recommended_prices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {basket_line_item_recommended_pricesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Basket_line_item_recommended_prices
     * const basket_line_item_recommended_prices = await prisma.basket_line_item_recommended_prices.findMany()
     * 
     * // Get first 10 Basket_line_item_recommended_prices
     * const basket_line_item_recommended_prices = await prisma.basket_line_item_recommended_prices.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const basket_line_item_recommended_pricesWithIdOnly = await prisma.basket_line_item_recommended_prices.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends basket_line_item_recommended_pricesFindManyArgs>(
      args?: SelectSubset<T, basket_line_item_recommended_pricesFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<basket_line_item_recommended_prices>>, PrismaPromise<Array<basket_line_item_recommended_pricesGetPayload<T>>>>

    /**
     * Create a Basket_line_item_recommended_prices.
     * @param {basket_line_item_recommended_pricesCreateArgs} args - Arguments to create a Basket_line_item_recommended_prices.
     * @example
     * // Create one Basket_line_item_recommended_prices
     * const Basket_line_item_recommended_prices = await prisma.basket_line_item_recommended_prices.create({
     *   data: {
     *     // ... data to create a Basket_line_item_recommended_prices
     *   }
     * })
     * 
    **/
    create<T extends basket_line_item_recommended_pricesCreateArgs>(
      args: SelectSubset<T, basket_line_item_recommended_pricesCreateArgs>
    ): CheckSelect<T, Prisma__basket_line_item_recommended_pricesClient<basket_line_item_recommended_prices>, Prisma__basket_line_item_recommended_pricesClient<basket_line_item_recommended_pricesGetPayload<T>>>

    /**
     * Create many Basket_line_item_recommended_prices.
     *     @param {basket_line_item_recommended_pricesCreateManyArgs} args - Arguments to create many Basket_line_item_recommended_prices.
     *     @example
     *     // Create many Basket_line_item_recommended_prices
     *     const basket_line_item_recommended_prices = await prisma.basket_line_item_recommended_prices.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends basket_line_item_recommended_pricesCreateManyArgs>(
      args?: SelectSubset<T, basket_line_item_recommended_pricesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Basket_line_item_recommended_prices.
     * @param {basket_line_item_recommended_pricesDeleteArgs} args - Arguments to delete one Basket_line_item_recommended_prices.
     * @example
     * // Delete one Basket_line_item_recommended_prices
     * const Basket_line_item_recommended_prices = await prisma.basket_line_item_recommended_prices.delete({
     *   where: {
     *     // ... filter to delete one Basket_line_item_recommended_prices
     *   }
     * })
     * 
    **/
    delete<T extends basket_line_item_recommended_pricesDeleteArgs>(
      args: SelectSubset<T, basket_line_item_recommended_pricesDeleteArgs>
    ): CheckSelect<T, Prisma__basket_line_item_recommended_pricesClient<basket_line_item_recommended_prices>, Prisma__basket_line_item_recommended_pricesClient<basket_line_item_recommended_pricesGetPayload<T>>>

    /**
     * Update one Basket_line_item_recommended_prices.
     * @param {basket_line_item_recommended_pricesUpdateArgs} args - Arguments to update one Basket_line_item_recommended_prices.
     * @example
     * // Update one Basket_line_item_recommended_prices
     * const basket_line_item_recommended_prices = await prisma.basket_line_item_recommended_prices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends basket_line_item_recommended_pricesUpdateArgs>(
      args: SelectSubset<T, basket_line_item_recommended_pricesUpdateArgs>
    ): CheckSelect<T, Prisma__basket_line_item_recommended_pricesClient<basket_line_item_recommended_prices>, Prisma__basket_line_item_recommended_pricesClient<basket_line_item_recommended_pricesGetPayload<T>>>

    /**
     * Delete zero or more Basket_line_item_recommended_prices.
     * @param {basket_line_item_recommended_pricesDeleteManyArgs} args - Arguments to filter Basket_line_item_recommended_prices to delete.
     * @example
     * // Delete a few Basket_line_item_recommended_prices
     * const { count } = await prisma.basket_line_item_recommended_prices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends basket_line_item_recommended_pricesDeleteManyArgs>(
      args?: SelectSubset<T, basket_line_item_recommended_pricesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Basket_line_item_recommended_prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {basket_line_item_recommended_pricesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Basket_line_item_recommended_prices
     * const basket_line_item_recommended_prices = await prisma.basket_line_item_recommended_prices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends basket_line_item_recommended_pricesUpdateManyArgs>(
      args: SelectSubset<T, basket_line_item_recommended_pricesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Basket_line_item_recommended_prices.
     * @param {basket_line_item_recommended_pricesUpsertArgs} args - Arguments to update or create a Basket_line_item_recommended_prices.
     * @example
     * // Update or create a Basket_line_item_recommended_prices
     * const basket_line_item_recommended_prices = await prisma.basket_line_item_recommended_prices.upsert({
     *   create: {
     *     // ... data to create a Basket_line_item_recommended_prices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Basket_line_item_recommended_prices we want to update
     *   }
     * })
    **/
    upsert<T extends basket_line_item_recommended_pricesUpsertArgs>(
      args: SelectSubset<T, basket_line_item_recommended_pricesUpsertArgs>
    ): CheckSelect<T, Prisma__basket_line_item_recommended_pricesClient<basket_line_item_recommended_prices>, Prisma__basket_line_item_recommended_pricesClient<basket_line_item_recommended_pricesGetPayload<T>>>

    /**
     * Count the number of Basket_line_item_recommended_prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {basket_line_item_recommended_pricesCountArgs} args - Arguments to filter Basket_line_item_recommended_prices to count.
     * @example
     * // Count the number of Basket_line_item_recommended_prices
     * const count = await prisma.basket_line_item_recommended_prices.count({
     *   where: {
     *     // ... the filter for the Basket_line_item_recommended_prices we want to count
     *   }
     * })
    **/
    count<T extends basket_line_item_recommended_pricesCountArgs>(
      args?: Subset<T, basket_line_item_recommended_pricesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Basket_line_item_recommended_pricesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Basket_line_item_recommended_prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Basket_line_item_recommended_pricesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Basket_line_item_recommended_pricesAggregateArgs>(args: Subset<T, Basket_line_item_recommended_pricesAggregateArgs>): PrismaPromise<GetBasket_line_item_recommended_pricesAggregateType<T>>

    /**
     * Group by Basket_line_item_recommended_prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Basket_line_item_recommended_pricesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Basket_line_item_recommended_pricesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Basket_line_item_recommended_pricesGroupByArgs['orderBy'] }
        : { orderBy?: Basket_line_item_recommended_pricesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Basket_line_item_recommended_pricesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBasket_line_item_recommended_pricesGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for basket_line_item_recommended_prices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__basket_line_item_recommended_pricesClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    basket_line_items<T extends basket_line_itemsArgs = {}>(args?: Subset<T, basket_line_itemsArgs>): CheckSelect<T, Prisma__basket_line_itemsClient<basket_line_items | null >, Prisma__basket_line_itemsClient<basket_line_itemsGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * basket_line_item_recommended_prices findUnique
   */
  export type basket_line_item_recommended_pricesFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the basket_line_item_recommended_prices
     * 
    **/
    select?: basket_line_item_recommended_pricesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: basket_line_item_recommended_pricesInclude | null
    /**
     * Throw an Error if a basket_line_item_recommended_prices can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which basket_line_item_recommended_prices to fetch.
     * 
    **/
    where: basket_line_item_recommended_pricesWhereUniqueInput
  }


  /**
   * basket_line_item_recommended_prices findFirst
   */
  export type basket_line_item_recommended_pricesFindFirstArgs = {
    /**
     * Select specific fields to fetch from the basket_line_item_recommended_prices
     * 
    **/
    select?: basket_line_item_recommended_pricesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: basket_line_item_recommended_pricesInclude | null
    /**
     * Throw an Error if a basket_line_item_recommended_prices can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which basket_line_item_recommended_prices to fetch.
     * 
    **/
    where?: basket_line_item_recommended_pricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of basket_line_item_recommended_prices to fetch.
     * 
    **/
    orderBy?: Enumerable<basket_line_item_recommended_pricesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for basket_line_item_recommended_prices.
     * 
    **/
    cursor?: basket_line_item_recommended_pricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` basket_line_item_recommended_prices from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` basket_line_item_recommended_prices.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of basket_line_item_recommended_prices.
     * 
    **/
    distinct?: Enumerable<Basket_line_item_recommended_pricesScalarFieldEnum>
  }


  /**
   * basket_line_item_recommended_prices findMany
   */
  export type basket_line_item_recommended_pricesFindManyArgs = {
    /**
     * Select specific fields to fetch from the basket_line_item_recommended_prices
     * 
    **/
    select?: basket_line_item_recommended_pricesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: basket_line_item_recommended_pricesInclude | null
    /**
     * Filter, which basket_line_item_recommended_prices to fetch.
     * 
    **/
    where?: basket_line_item_recommended_pricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of basket_line_item_recommended_prices to fetch.
     * 
    **/
    orderBy?: Enumerable<basket_line_item_recommended_pricesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing basket_line_item_recommended_prices.
     * 
    **/
    cursor?: basket_line_item_recommended_pricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` basket_line_item_recommended_prices from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` basket_line_item_recommended_prices.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Basket_line_item_recommended_pricesScalarFieldEnum>
  }


  /**
   * basket_line_item_recommended_prices create
   */
  export type basket_line_item_recommended_pricesCreateArgs = {
    /**
     * Select specific fields to fetch from the basket_line_item_recommended_prices
     * 
    **/
    select?: basket_line_item_recommended_pricesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: basket_line_item_recommended_pricesInclude | null
    /**
     * The data needed to create a basket_line_item_recommended_prices.
     * 
    **/
    data: XOR<basket_line_item_recommended_pricesCreateInput, basket_line_item_recommended_pricesUncheckedCreateInput>
  }


  /**
   * basket_line_item_recommended_prices createMany
   */
  export type basket_line_item_recommended_pricesCreateManyArgs = {
    data: Enumerable<basket_line_item_recommended_pricesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * basket_line_item_recommended_prices update
   */
  export type basket_line_item_recommended_pricesUpdateArgs = {
    /**
     * Select specific fields to fetch from the basket_line_item_recommended_prices
     * 
    **/
    select?: basket_line_item_recommended_pricesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: basket_line_item_recommended_pricesInclude | null
    /**
     * The data needed to update a basket_line_item_recommended_prices.
     * 
    **/
    data: XOR<basket_line_item_recommended_pricesUpdateInput, basket_line_item_recommended_pricesUncheckedUpdateInput>
    /**
     * Choose, which basket_line_item_recommended_prices to update.
     * 
    **/
    where: basket_line_item_recommended_pricesWhereUniqueInput
  }


  /**
   * basket_line_item_recommended_prices updateMany
   */
  export type basket_line_item_recommended_pricesUpdateManyArgs = {
    data: XOR<basket_line_item_recommended_pricesUpdateManyMutationInput, basket_line_item_recommended_pricesUncheckedUpdateManyInput>
    where?: basket_line_item_recommended_pricesWhereInput
  }


  /**
   * basket_line_item_recommended_prices upsert
   */
  export type basket_line_item_recommended_pricesUpsertArgs = {
    /**
     * Select specific fields to fetch from the basket_line_item_recommended_prices
     * 
    **/
    select?: basket_line_item_recommended_pricesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: basket_line_item_recommended_pricesInclude | null
    /**
     * The filter to search for the basket_line_item_recommended_prices to update in case it exists.
     * 
    **/
    where: basket_line_item_recommended_pricesWhereUniqueInput
    /**
     * In case the basket_line_item_recommended_prices found by the `where` argument doesn't exist, create a new basket_line_item_recommended_prices with this data.
     * 
    **/
    create: XOR<basket_line_item_recommended_pricesCreateInput, basket_line_item_recommended_pricesUncheckedCreateInput>
    /**
     * In case the basket_line_item_recommended_prices was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<basket_line_item_recommended_pricesUpdateInput, basket_line_item_recommended_pricesUncheckedUpdateInput>
  }


  /**
   * basket_line_item_recommended_prices delete
   */
  export type basket_line_item_recommended_pricesDeleteArgs = {
    /**
     * Select specific fields to fetch from the basket_line_item_recommended_prices
     * 
    **/
    select?: basket_line_item_recommended_pricesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: basket_line_item_recommended_pricesInclude | null
    /**
     * Filter which basket_line_item_recommended_prices to delete.
     * 
    **/
    where: basket_line_item_recommended_pricesWhereUniqueInput
  }


  /**
   * basket_line_item_recommended_prices deleteMany
   */
  export type basket_line_item_recommended_pricesDeleteManyArgs = {
    where?: basket_line_item_recommended_pricesWhereInput
  }


  /**
   * basket_line_item_recommended_prices without action
   */
  export type basket_line_item_recommended_pricesArgs = {
    /**
     * Select specific fields to fetch from the basket_line_item_recommended_prices
     * 
    **/
    select?: basket_line_item_recommended_pricesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: basket_line_item_recommended_pricesInclude | null
  }



  /**
   * Model basket_line_items
   */


  export type AggregateBasket_line_items = {
    _count: Basket_line_itemsCountAggregateOutputType | null
    _avg: Basket_line_itemsAvgAggregateOutputType | null
    _sum: Basket_line_itemsSumAggregateOutputType | null
    _min: Basket_line_itemsMinAggregateOutputType | null
    _max: Basket_line_itemsMaxAggregateOutputType | null
  }

  export type Basket_line_itemsAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    basket_id: number | null
    goodfood_price: number | null
  }

  export type Basket_line_itemsSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    basket_id: number | null
    goodfood_price: number | null
  }

  export type Basket_line_itemsMinAggregateOutputType = {
    id: number | null
    quantity: number | null
    basket_id: number | null
    product_sku: string | null
    created_at: Date | null
    updated_at: Date | null
    goodfood_price: number | null
  }

  export type Basket_line_itemsMaxAggregateOutputType = {
    id: number | null
    quantity: number | null
    basket_id: number | null
    product_sku: string | null
    created_at: Date | null
    updated_at: Date | null
    goodfood_price: number | null
  }

  export type Basket_line_itemsCountAggregateOutputType = {
    id: number
    quantity: number
    basket_id: number
    product_sku: number
    created_at: number
    updated_at: number
    competitor_indexes: number
    competitor_prices: number
    goodfood_price: number
    _all: number
  }


  export type Basket_line_itemsAvgAggregateInputType = {
    id?: true
    quantity?: true
    basket_id?: true
    goodfood_price?: true
  }

  export type Basket_line_itemsSumAggregateInputType = {
    id?: true
    quantity?: true
    basket_id?: true
    goodfood_price?: true
  }

  export type Basket_line_itemsMinAggregateInputType = {
    id?: true
    quantity?: true
    basket_id?: true
    product_sku?: true
    created_at?: true
    updated_at?: true
    goodfood_price?: true
  }

  export type Basket_line_itemsMaxAggregateInputType = {
    id?: true
    quantity?: true
    basket_id?: true
    product_sku?: true
    created_at?: true
    updated_at?: true
    goodfood_price?: true
  }

  export type Basket_line_itemsCountAggregateInputType = {
    id?: true
    quantity?: true
    basket_id?: true
    product_sku?: true
    created_at?: true
    updated_at?: true
    competitor_indexes?: true
    competitor_prices?: true
    goodfood_price?: true
    _all?: true
  }

  export type Basket_line_itemsAggregateArgs = {
    /**
     * Filter which basket_line_items to aggregate.
     * 
    **/
    where?: basket_line_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of basket_line_items to fetch.
     * 
    **/
    orderBy?: Enumerable<basket_line_itemsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: basket_line_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` basket_line_items from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` basket_line_items.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned basket_line_items
    **/
    _count?: true | Basket_line_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Basket_line_itemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Basket_line_itemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Basket_line_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Basket_line_itemsMaxAggregateInputType
  }

  export type GetBasket_line_itemsAggregateType<T extends Basket_line_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregateBasket_line_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBasket_line_items[P]>
      : GetScalarType<T[P], AggregateBasket_line_items[P]>
  }


    
    
  export type Basket_line_itemsGroupByArgs = {
    where?: basket_line_itemsWhereInput
    orderBy?: Enumerable<basket_line_itemsOrderByWithAggregationInput>
    by: Array<Basket_line_itemsScalarFieldEnum>
    having?: basket_line_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Basket_line_itemsCountAggregateInputType | true
    _avg?: Basket_line_itemsAvgAggregateInputType
    _sum?: Basket_line_itemsSumAggregateInputType
    _min?: Basket_line_itemsMinAggregateInputType
    _max?: Basket_line_itemsMaxAggregateInputType
  }


  export type Basket_line_itemsGroupByOutputType = {
    id: number
    quantity: number
    basket_id: number
    product_sku: string
    created_at: Date
    updated_at: Date | null
    competitor_indexes: JsonValue | null
    competitor_prices: JsonValue | null
    goodfood_price: number
    _count: Basket_line_itemsCountAggregateOutputType | null
    _avg: Basket_line_itemsAvgAggregateOutputType | null
    _sum: Basket_line_itemsSumAggregateOutputType | null
    _min: Basket_line_itemsMinAggregateOutputType | null
    _max: Basket_line_itemsMaxAggregateOutputType | null
  }

  type GetBasket_line_itemsGroupByPayload<T extends Basket_line_itemsGroupByArgs> = Promise<
    Array<
      PickArray<Basket_line_itemsGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof Basket_line_itemsGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], Basket_line_itemsGroupByOutputType[P]> 
            : GetScalarType<T[P], Basket_line_itemsGroupByOutputType[P]>
        }
      > 
    >


  export type basket_line_itemsSelect = {
    id?: boolean
    quantity?: boolean
    basket_id?: boolean
    product_sku?: boolean
    created_at?: boolean
    updated_at?: boolean
    competitor_indexes?: boolean
    competitor_prices?: boolean
    goodfood_price?: boolean
    basket_line_item_competitor_equivalents?: boolean | basket_line_item_competitor_equivalentsFindManyArgs
    basket_line_item_recommended_prices?: boolean | basket_line_item_recommended_pricesFindManyArgs
    _count?: boolean | Basket_line_itemsCountOutputTypeArgs
  }

  export type basket_line_itemsInclude = {
    basket_line_item_competitor_equivalents?: boolean | basket_line_item_competitor_equivalentsFindManyArgs
    basket_line_item_recommended_prices?: boolean | basket_line_item_recommended_pricesFindManyArgs
    _count?: boolean | Basket_line_itemsCountOutputTypeArgs
  }

  export type basket_line_itemsGetPayload<
    S extends boolean | null | undefined | basket_line_itemsArgs,
    U = keyof S
      > = S extends true
        ? basket_line_items
    : S extends undefined
    ? never
    : S extends basket_line_itemsArgs | basket_line_itemsFindManyArgs
    ?'include' extends U
    ? basket_line_items  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'basket_line_item_competitor_equivalents'
        ? Array < basket_line_item_competitor_equivalentsGetPayload<S['include'][P]>>  :
        P extends 'basket_line_item_recommended_prices'
        ? Array < basket_line_item_recommended_pricesGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? Basket_line_itemsCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof basket_line_items ?basket_line_items [P]
  : 
          P extends 'basket_line_item_competitor_equivalents'
        ? Array < basket_line_item_competitor_equivalentsGetPayload<S['select'][P]>>  :
        P extends 'basket_line_item_recommended_prices'
        ? Array < basket_line_item_recommended_pricesGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? Basket_line_itemsCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : basket_line_items
  : basket_line_items


  type basket_line_itemsCountArgs = Merge<
    Omit<basket_line_itemsFindManyArgs, 'select' | 'include'> & {
      select?: Basket_line_itemsCountAggregateInputType | true
    }
  >

  export interface basket_line_itemsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Basket_line_items that matches the filter.
     * @param {basket_line_itemsFindUniqueArgs} args - Arguments to find a Basket_line_items
     * @example
     * // Get one Basket_line_items
     * const basket_line_items = await prisma.basket_line_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends basket_line_itemsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, basket_line_itemsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'basket_line_items'> extends True ? CheckSelect<T, Prisma__basket_line_itemsClient<basket_line_items>, Prisma__basket_line_itemsClient<basket_line_itemsGetPayload<T>>> : CheckSelect<T, Prisma__basket_line_itemsClient<basket_line_items | null >, Prisma__basket_line_itemsClient<basket_line_itemsGetPayload<T> | null >>

    /**
     * Find the first Basket_line_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {basket_line_itemsFindFirstArgs} args - Arguments to find a Basket_line_items
     * @example
     * // Get one Basket_line_items
     * const basket_line_items = await prisma.basket_line_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends basket_line_itemsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, basket_line_itemsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'basket_line_items'> extends True ? CheckSelect<T, Prisma__basket_line_itemsClient<basket_line_items>, Prisma__basket_line_itemsClient<basket_line_itemsGetPayload<T>>> : CheckSelect<T, Prisma__basket_line_itemsClient<basket_line_items | null >, Prisma__basket_line_itemsClient<basket_line_itemsGetPayload<T> | null >>

    /**
     * Find zero or more Basket_line_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {basket_line_itemsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Basket_line_items
     * const basket_line_items = await prisma.basket_line_items.findMany()
     * 
     * // Get first 10 Basket_line_items
     * const basket_line_items = await prisma.basket_line_items.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const basket_line_itemsWithIdOnly = await prisma.basket_line_items.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends basket_line_itemsFindManyArgs>(
      args?: SelectSubset<T, basket_line_itemsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<basket_line_items>>, PrismaPromise<Array<basket_line_itemsGetPayload<T>>>>

    /**
     * Create a Basket_line_items.
     * @param {basket_line_itemsCreateArgs} args - Arguments to create a Basket_line_items.
     * @example
     * // Create one Basket_line_items
     * const Basket_line_items = await prisma.basket_line_items.create({
     *   data: {
     *     // ... data to create a Basket_line_items
     *   }
     * })
     * 
    **/
    create<T extends basket_line_itemsCreateArgs>(
      args: SelectSubset<T, basket_line_itemsCreateArgs>
    ): CheckSelect<T, Prisma__basket_line_itemsClient<basket_line_items>, Prisma__basket_line_itemsClient<basket_line_itemsGetPayload<T>>>

    /**
     * Create many Basket_line_items.
     *     @param {basket_line_itemsCreateManyArgs} args - Arguments to create many Basket_line_items.
     *     @example
     *     // Create many Basket_line_items
     *     const basket_line_items = await prisma.basket_line_items.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends basket_line_itemsCreateManyArgs>(
      args?: SelectSubset<T, basket_line_itemsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Basket_line_items.
     * @param {basket_line_itemsDeleteArgs} args - Arguments to delete one Basket_line_items.
     * @example
     * // Delete one Basket_line_items
     * const Basket_line_items = await prisma.basket_line_items.delete({
     *   where: {
     *     // ... filter to delete one Basket_line_items
     *   }
     * })
     * 
    **/
    delete<T extends basket_line_itemsDeleteArgs>(
      args: SelectSubset<T, basket_line_itemsDeleteArgs>
    ): CheckSelect<T, Prisma__basket_line_itemsClient<basket_line_items>, Prisma__basket_line_itemsClient<basket_line_itemsGetPayload<T>>>

    /**
     * Update one Basket_line_items.
     * @param {basket_line_itemsUpdateArgs} args - Arguments to update one Basket_line_items.
     * @example
     * // Update one Basket_line_items
     * const basket_line_items = await prisma.basket_line_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends basket_line_itemsUpdateArgs>(
      args: SelectSubset<T, basket_line_itemsUpdateArgs>
    ): CheckSelect<T, Prisma__basket_line_itemsClient<basket_line_items>, Prisma__basket_line_itemsClient<basket_line_itemsGetPayload<T>>>

    /**
     * Delete zero or more Basket_line_items.
     * @param {basket_line_itemsDeleteManyArgs} args - Arguments to filter Basket_line_items to delete.
     * @example
     * // Delete a few Basket_line_items
     * const { count } = await prisma.basket_line_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends basket_line_itemsDeleteManyArgs>(
      args?: SelectSubset<T, basket_line_itemsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Basket_line_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {basket_line_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Basket_line_items
     * const basket_line_items = await prisma.basket_line_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends basket_line_itemsUpdateManyArgs>(
      args: SelectSubset<T, basket_line_itemsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Basket_line_items.
     * @param {basket_line_itemsUpsertArgs} args - Arguments to update or create a Basket_line_items.
     * @example
     * // Update or create a Basket_line_items
     * const basket_line_items = await prisma.basket_line_items.upsert({
     *   create: {
     *     // ... data to create a Basket_line_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Basket_line_items we want to update
     *   }
     * })
    **/
    upsert<T extends basket_line_itemsUpsertArgs>(
      args: SelectSubset<T, basket_line_itemsUpsertArgs>
    ): CheckSelect<T, Prisma__basket_line_itemsClient<basket_line_items>, Prisma__basket_line_itemsClient<basket_line_itemsGetPayload<T>>>

    /**
     * Count the number of Basket_line_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {basket_line_itemsCountArgs} args - Arguments to filter Basket_line_items to count.
     * @example
     * // Count the number of Basket_line_items
     * const count = await prisma.basket_line_items.count({
     *   where: {
     *     // ... the filter for the Basket_line_items we want to count
     *   }
     * })
    **/
    count<T extends basket_line_itemsCountArgs>(
      args?: Subset<T, basket_line_itemsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Basket_line_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Basket_line_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Basket_line_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Basket_line_itemsAggregateArgs>(args: Subset<T, Basket_line_itemsAggregateArgs>): PrismaPromise<GetBasket_line_itemsAggregateType<T>>

    /**
     * Group by Basket_line_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Basket_line_itemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Basket_line_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Basket_line_itemsGroupByArgs['orderBy'] }
        : { orderBy?: Basket_line_itemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Basket_line_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBasket_line_itemsGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for basket_line_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__basket_line_itemsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    basket_line_item_competitor_equivalents<T extends basket_line_item_competitor_equivalentsFindManyArgs = {}>(args?: Subset<T, basket_line_item_competitor_equivalentsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<basket_line_item_competitor_equivalents>>, PrismaPromise<Array<basket_line_item_competitor_equivalentsGetPayload<T>>>>;

    basket_line_item_recommended_prices<T extends basket_line_item_recommended_pricesFindManyArgs = {}>(args?: Subset<T, basket_line_item_recommended_pricesFindManyArgs>): CheckSelect<T, PrismaPromise<Array<basket_line_item_recommended_prices>>, PrismaPromise<Array<basket_line_item_recommended_pricesGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * basket_line_items findUnique
   */
  export type basket_line_itemsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the basket_line_items
     * 
    **/
    select?: basket_line_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: basket_line_itemsInclude | null
    /**
     * Throw an Error if a basket_line_items can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which basket_line_items to fetch.
     * 
    **/
    where: basket_line_itemsWhereUniqueInput
  }


  /**
   * basket_line_items findFirst
   */
  export type basket_line_itemsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the basket_line_items
     * 
    **/
    select?: basket_line_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: basket_line_itemsInclude | null
    /**
     * Throw an Error if a basket_line_items can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which basket_line_items to fetch.
     * 
    **/
    where?: basket_line_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of basket_line_items to fetch.
     * 
    **/
    orderBy?: Enumerable<basket_line_itemsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for basket_line_items.
     * 
    **/
    cursor?: basket_line_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` basket_line_items from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` basket_line_items.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of basket_line_items.
     * 
    **/
    distinct?: Enumerable<Basket_line_itemsScalarFieldEnum>
  }


  /**
   * basket_line_items findMany
   */
  export type basket_line_itemsFindManyArgs = {
    /**
     * Select specific fields to fetch from the basket_line_items
     * 
    **/
    select?: basket_line_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: basket_line_itemsInclude | null
    /**
     * Filter, which basket_line_items to fetch.
     * 
    **/
    where?: basket_line_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of basket_line_items to fetch.
     * 
    **/
    orderBy?: Enumerable<basket_line_itemsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing basket_line_items.
     * 
    **/
    cursor?: basket_line_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` basket_line_items from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` basket_line_items.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Basket_line_itemsScalarFieldEnum>
  }


  /**
   * basket_line_items create
   */
  export type basket_line_itemsCreateArgs = {
    /**
     * Select specific fields to fetch from the basket_line_items
     * 
    **/
    select?: basket_line_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: basket_line_itemsInclude | null
    /**
     * The data needed to create a basket_line_items.
     * 
    **/
    data: XOR<basket_line_itemsCreateInput, basket_line_itemsUncheckedCreateInput>
  }


  /**
   * basket_line_items createMany
   */
  export type basket_line_itemsCreateManyArgs = {
    data: Enumerable<basket_line_itemsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * basket_line_items update
   */
  export type basket_line_itemsUpdateArgs = {
    /**
     * Select specific fields to fetch from the basket_line_items
     * 
    **/
    select?: basket_line_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: basket_line_itemsInclude | null
    /**
     * The data needed to update a basket_line_items.
     * 
    **/
    data: XOR<basket_line_itemsUpdateInput, basket_line_itemsUncheckedUpdateInput>
    /**
     * Choose, which basket_line_items to update.
     * 
    **/
    where: basket_line_itemsWhereUniqueInput
  }


  /**
   * basket_line_items updateMany
   */
  export type basket_line_itemsUpdateManyArgs = {
    data: XOR<basket_line_itemsUpdateManyMutationInput, basket_line_itemsUncheckedUpdateManyInput>
    where?: basket_line_itemsWhereInput
  }


  /**
   * basket_line_items upsert
   */
  export type basket_line_itemsUpsertArgs = {
    /**
     * Select specific fields to fetch from the basket_line_items
     * 
    **/
    select?: basket_line_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: basket_line_itemsInclude | null
    /**
     * The filter to search for the basket_line_items to update in case it exists.
     * 
    **/
    where: basket_line_itemsWhereUniqueInput
    /**
     * In case the basket_line_items found by the `where` argument doesn't exist, create a new basket_line_items with this data.
     * 
    **/
    create: XOR<basket_line_itemsCreateInput, basket_line_itemsUncheckedCreateInput>
    /**
     * In case the basket_line_items was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<basket_line_itemsUpdateInput, basket_line_itemsUncheckedUpdateInput>
  }


  /**
   * basket_line_items delete
   */
  export type basket_line_itemsDeleteArgs = {
    /**
     * Select specific fields to fetch from the basket_line_items
     * 
    **/
    select?: basket_line_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: basket_line_itemsInclude | null
    /**
     * Filter which basket_line_items to delete.
     * 
    **/
    where: basket_line_itemsWhereUniqueInput
  }


  /**
   * basket_line_items deleteMany
   */
  export type basket_line_itemsDeleteManyArgs = {
    where?: basket_line_itemsWhereInput
  }


  /**
   * basket_line_items without action
   */
  export type basket_line_itemsArgs = {
    /**
     * Select specific fields to fetch from the basket_line_items
     * 
    **/
    select?: basket_line_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: basket_line_itemsInclude | null
  }



  /**
   * Model baskets
   */


  export type AggregateBaskets = {
    _count: BasketsCountAggregateOutputType | null
    _avg: BasketsAvgAggregateOutputType | null
    _sum: BasketsSumAggregateOutputType | null
    _min: BasketsMinAggregateOutputType | null
    _max: BasketsMaxAggregateOutputType | null
  }

  export type BasketsAvgAggregateOutputType = {
    id: number | null
    goodfood_id: number | null
    region_id: number | null
    basket_daily_total_id: number | null
  }

  export type BasketsSumAggregateOutputType = {
    id: number | null
    goodfood_id: number | null
    region_id: number | null
    basket_daily_total_id: number | null
  }

  export type BasketsMinAggregateOutputType = {
    id: number | null
    goodfood_id: number | null
    delivery_date: Date | null
    created_at: Date | null
    updated_at: Date | null
    region_id: number | null
    basket_daily_total_id: number | null
  }

  export type BasketsMaxAggregateOutputType = {
    id: number | null
    goodfood_id: number | null
    delivery_date: Date | null
    created_at: Date | null
    updated_at: Date | null
    region_id: number | null
    basket_daily_total_id: number | null
  }

  export type BasketsCountAggregateOutputType = {
    id: number
    goodfood_id: number
    delivery_date: number
    basket_totals: number
    basket_indexes: number
    created_at: number
    updated_at: number
    region_id: number
    basket_daily_total_id: number
    _all: number
  }


  export type BasketsAvgAggregateInputType = {
    id?: true
    goodfood_id?: true
    region_id?: true
    basket_daily_total_id?: true
  }

  export type BasketsSumAggregateInputType = {
    id?: true
    goodfood_id?: true
    region_id?: true
    basket_daily_total_id?: true
  }

  export type BasketsMinAggregateInputType = {
    id?: true
    goodfood_id?: true
    delivery_date?: true
    created_at?: true
    updated_at?: true
    region_id?: true
    basket_daily_total_id?: true
  }

  export type BasketsMaxAggregateInputType = {
    id?: true
    goodfood_id?: true
    delivery_date?: true
    created_at?: true
    updated_at?: true
    region_id?: true
    basket_daily_total_id?: true
  }

  export type BasketsCountAggregateInputType = {
    id?: true
    goodfood_id?: true
    delivery_date?: true
    basket_totals?: true
    basket_indexes?: true
    created_at?: true
    updated_at?: true
    region_id?: true
    basket_daily_total_id?: true
    _all?: true
  }

  export type BasketsAggregateArgs = {
    /**
     * Filter which baskets to aggregate.
     * 
    **/
    where?: basketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of baskets to fetch.
     * 
    **/
    orderBy?: Enumerable<basketsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: basketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` baskets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` baskets.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned baskets
    **/
    _count?: true | BasketsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BasketsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BasketsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BasketsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BasketsMaxAggregateInputType
  }

  export type GetBasketsAggregateType<T extends BasketsAggregateArgs> = {
        [P in keyof T & keyof AggregateBaskets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBaskets[P]>
      : GetScalarType<T[P], AggregateBaskets[P]>
  }


    
    
  export type BasketsGroupByArgs = {
    where?: basketsWhereInput
    orderBy?: Enumerable<basketsOrderByWithAggregationInput>
    by: Array<BasketsScalarFieldEnum>
    having?: basketsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BasketsCountAggregateInputType | true
    _avg?: BasketsAvgAggregateInputType
    _sum?: BasketsSumAggregateInputType
    _min?: BasketsMinAggregateInputType
    _max?: BasketsMaxAggregateInputType
  }


  export type BasketsGroupByOutputType = {
    id: number
    goodfood_id: number
    delivery_date: Date
    basket_totals: JsonValue | null
    basket_indexes: JsonValue | null
    created_at: Date
    updated_at: Date | null
    region_id: number
    basket_daily_total_id: number
    _count: BasketsCountAggregateOutputType | null
    _avg: BasketsAvgAggregateOutputType | null
    _sum: BasketsSumAggregateOutputType | null
    _min: BasketsMinAggregateOutputType | null
    _max: BasketsMaxAggregateOutputType | null
  }

  type GetBasketsGroupByPayload<T extends BasketsGroupByArgs> = Promise<
    Array<
      PickArray<BasketsGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof BasketsGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], BasketsGroupByOutputType[P]> 
            : GetScalarType<T[P], BasketsGroupByOutputType[P]>
        }
      > 
    >


  export type basketsSelect = {
    id?: boolean
    goodfood_id?: boolean
    delivery_date?: boolean
    basket_totals?: boolean
    basket_indexes?: boolean
    created_at?: boolean
    updated_at?: boolean
    region_id?: boolean
    basket_daily_total_id?: boolean
    basket_daily_totals?: boolean | basket_daily_totalsArgs
    regions?: boolean | regionsArgs
  }

  export type basketsInclude = {
    basket_daily_totals?: boolean | basket_daily_totalsArgs
    regions?: boolean | regionsArgs
  }

  export type basketsGetPayload<
    S extends boolean | null | undefined | basketsArgs,
    U = keyof S
      > = S extends true
        ? baskets
    : S extends undefined
    ? never
    : S extends basketsArgs | basketsFindManyArgs
    ?'include' extends U
    ? baskets  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'basket_daily_totals'
        ? basket_daily_totalsGetPayload<S['include'][P]> :
        P extends 'regions'
        ? regionsGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof baskets ?baskets [P]
  : 
          P extends 'basket_daily_totals'
        ? basket_daily_totalsGetPayload<S['select'][P]> :
        P extends 'regions'
        ? regionsGetPayload<S['select'][P]> : never
  } 
    : baskets
  : baskets


  type basketsCountArgs = Merge<
    Omit<basketsFindManyArgs, 'select' | 'include'> & {
      select?: BasketsCountAggregateInputType | true
    }
  >

  export interface basketsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Baskets that matches the filter.
     * @param {basketsFindUniqueArgs} args - Arguments to find a Baskets
     * @example
     * // Get one Baskets
     * const baskets = await prisma.baskets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends basketsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, basketsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'baskets'> extends True ? CheckSelect<T, Prisma__basketsClient<baskets>, Prisma__basketsClient<basketsGetPayload<T>>> : CheckSelect<T, Prisma__basketsClient<baskets | null >, Prisma__basketsClient<basketsGetPayload<T> | null >>

    /**
     * Find the first Baskets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {basketsFindFirstArgs} args - Arguments to find a Baskets
     * @example
     * // Get one Baskets
     * const baskets = await prisma.baskets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends basketsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, basketsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'baskets'> extends True ? CheckSelect<T, Prisma__basketsClient<baskets>, Prisma__basketsClient<basketsGetPayload<T>>> : CheckSelect<T, Prisma__basketsClient<baskets | null >, Prisma__basketsClient<basketsGetPayload<T> | null >>

    /**
     * Find zero or more Baskets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {basketsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Baskets
     * const baskets = await prisma.baskets.findMany()
     * 
     * // Get first 10 Baskets
     * const baskets = await prisma.baskets.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const basketsWithIdOnly = await prisma.baskets.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends basketsFindManyArgs>(
      args?: SelectSubset<T, basketsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<baskets>>, PrismaPromise<Array<basketsGetPayload<T>>>>

    /**
     * Create a Baskets.
     * @param {basketsCreateArgs} args - Arguments to create a Baskets.
     * @example
     * // Create one Baskets
     * const Baskets = await prisma.baskets.create({
     *   data: {
     *     // ... data to create a Baskets
     *   }
     * })
     * 
    **/
    create<T extends basketsCreateArgs>(
      args: SelectSubset<T, basketsCreateArgs>
    ): CheckSelect<T, Prisma__basketsClient<baskets>, Prisma__basketsClient<basketsGetPayload<T>>>

    /**
     * Create many Baskets.
     *     @param {basketsCreateManyArgs} args - Arguments to create many Baskets.
     *     @example
     *     // Create many Baskets
     *     const baskets = await prisma.baskets.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends basketsCreateManyArgs>(
      args?: SelectSubset<T, basketsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Baskets.
     * @param {basketsDeleteArgs} args - Arguments to delete one Baskets.
     * @example
     * // Delete one Baskets
     * const Baskets = await prisma.baskets.delete({
     *   where: {
     *     // ... filter to delete one Baskets
     *   }
     * })
     * 
    **/
    delete<T extends basketsDeleteArgs>(
      args: SelectSubset<T, basketsDeleteArgs>
    ): CheckSelect<T, Prisma__basketsClient<baskets>, Prisma__basketsClient<basketsGetPayload<T>>>

    /**
     * Update one Baskets.
     * @param {basketsUpdateArgs} args - Arguments to update one Baskets.
     * @example
     * // Update one Baskets
     * const baskets = await prisma.baskets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends basketsUpdateArgs>(
      args: SelectSubset<T, basketsUpdateArgs>
    ): CheckSelect<T, Prisma__basketsClient<baskets>, Prisma__basketsClient<basketsGetPayload<T>>>

    /**
     * Delete zero or more Baskets.
     * @param {basketsDeleteManyArgs} args - Arguments to filter Baskets to delete.
     * @example
     * // Delete a few Baskets
     * const { count } = await prisma.baskets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends basketsDeleteManyArgs>(
      args?: SelectSubset<T, basketsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Baskets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {basketsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Baskets
     * const baskets = await prisma.baskets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends basketsUpdateManyArgs>(
      args: SelectSubset<T, basketsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Baskets.
     * @param {basketsUpsertArgs} args - Arguments to update or create a Baskets.
     * @example
     * // Update or create a Baskets
     * const baskets = await prisma.baskets.upsert({
     *   create: {
     *     // ... data to create a Baskets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Baskets we want to update
     *   }
     * })
    **/
    upsert<T extends basketsUpsertArgs>(
      args: SelectSubset<T, basketsUpsertArgs>
    ): CheckSelect<T, Prisma__basketsClient<baskets>, Prisma__basketsClient<basketsGetPayload<T>>>

    /**
     * Count the number of Baskets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {basketsCountArgs} args - Arguments to filter Baskets to count.
     * @example
     * // Count the number of Baskets
     * const count = await prisma.baskets.count({
     *   where: {
     *     // ... the filter for the Baskets we want to count
     *   }
     * })
    **/
    count<T extends basketsCountArgs>(
      args?: Subset<T, basketsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BasketsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Baskets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BasketsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BasketsAggregateArgs>(args: Subset<T, BasketsAggregateArgs>): PrismaPromise<GetBasketsAggregateType<T>>

    /**
     * Group by Baskets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BasketsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BasketsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BasketsGroupByArgs['orderBy'] }
        : { orderBy?: BasketsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BasketsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBasketsGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for baskets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__basketsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    basket_daily_totals<T extends basket_daily_totalsArgs = {}>(args?: Subset<T, basket_daily_totalsArgs>): CheckSelect<T, Prisma__basket_daily_totalsClient<basket_daily_totals | null >, Prisma__basket_daily_totalsClient<basket_daily_totalsGetPayload<T> | null >>;

    regions<T extends regionsArgs = {}>(args?: Subset<T, regionsArgs>): CheckSelect<T, Prisma__regionsClient<regions | null >, Prisma__regionsClient<regionsGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * baskets findUnique
   */
  export type basketsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the baskets
     * 
    **/
    select?: basketsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: basketsInclude | null
    /**
     * Throw an Error if a baskets can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which baskets to fetch.
     * 
    **/
    where: basketsWhereUniqueInput
  }


  /**
   * baskets findFirst
   */
  export type basketsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the baskets
     * 
    **/
    select?: basketsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: basketsInclude | null
    /**
     * Throw an Error if a baskets can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which baskets to fetch.
     * 
    **/
    where?: basketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of baskets to fetch.
     * 
    **/
    orderBy?: Enumerable<basketsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for baskets.
     * 
    **/
    cursor?: basketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` baskets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` baskets.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of baskets.
     * 
    **/
    distinct?: Enumerable<BasketsScalarFieldEnum>
  }


  /**
   * baskets findMany
   */
  export type basketsFindManyArgs = {
    /**
     * Select specific fields to fetch from the baskets
     * 
    **/
    select?: basketsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: basketsInclude | null
    /**
     * Filter, which baskets to fetch.
     * 
    **/
    where?: basketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of baskets to fetch.
     * 
    **/
    orderBy?: Enumerable<basketsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing baskets.
     * 
    **/
    cursor?: basketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` baskets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` baskets.
     * 
    **/
    skip?: number
    distinct?: Enumerable<BasketsScalarFieldEnum>
  }


  /**
   * baskets create
   */
  export type basketsCreateArgs = {
    /**
     * Select specific fields to fetch from the baskets
     * 
    **/
    select?: basketsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: basketsInclude | null
    /**
     * The data needed to create a baskets.
     * 
    **/
    data: XOR<basketsCreateInput, basketsUncheckedCreateInput>
  }


  /**
   * baskets createMany
   */
  export type basketsCreateManyArgs = {
    data: Enumerable<basketsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * baskets update
   */
  export type basketsUpdateArgs = {
    /**
     * Select specific fields to fetch from the baskets
     * 
    **/
    select?: basketsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: basketsInclude | null
    /**
     * The data needed to update a baskets.
     * 
    **/
    data: XOR<basketsUpdateInput, basketsUncheckedUpdateInput>
    /**
     * Choose, which baskets to update.
     * 
    **/
    where: basketsWhereUniqueInput
  }


  /**
   * baskets updateMany
   */
  export type basketsUpdateManyArgs = {
    data: XOR<basketsUpdateManyMutationInput, basketsUncheckedUpdateManyInput>
    where?: basketsWhereInput
  }


  /**
   * baskets upsert
   */
  export type basketsUpsertArgs = {
    /**
     * Select specific fields to fetch from the baskets
     * 
    **/
    select?: basketsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: basketsInclude | null
    /**
     * The filter to search for the baskets to update in case it exists.
     * 
    **/
    where: basketsWhereUniqueInput
    /**
     * In case the baskets found by the `where` argument doesn't exist, create a new baskets with this data.
     * 
    **/
    create: XOR<basketsCreateInput, basketsUncheckedCreateInput>
    /**
     * In case the baskets was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<basketsUpdateInput, basketsUncheckedUpdateInput>
  }


  /**
   * baskets delete
   */
  export type basketsDeleteArgs = {
    /**
     * Select specific fields to fetch from the baskets
     * 
    **/
    select?: basketsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: basketsInclude | null
    /**
     * Filter which baskets to delete.
     * 
    **/
    where: basketsWhereUniqueInput
  }


  /**
   * baskets deleteMany
   */
  export type basketsDeleteManyArgs = {
    where?: basketsWhereInput
  }


  /**
   * baskets without action
   */
  export type basketsArgs = {
    /**
     * Select specific fields to fetch from the baskets
     * 
    **/
    select?: basketsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: basketsInclude | null
  }



  /**
   * Model competitors
   */


  export type AggregateCompetitors = {
    _count: CompetitorsCountAggregateOutputType | null
    _avg: CompetitorsAvgAggregateOutputType | null
    _sum: CompetitorsSumAggregateOutputType | null
    _min: CompetitorsMinAggregateOutputType | null
    _max: CompetitorsMaxAggregateOutputType | null
  }

  export type CompetitorsAvgAggregateOutputType = {
    id: number | null
  }

  export type CompetitorsSumAggregateOutputType = {
    id: number | null
  }

  export type CompetitorsMinAggregateOutputType = {
    id: number | null
    slug: string | null
    display_text: string | null
  }

  export type CompetitorsMaxAggregateOutputType = {
    id: number | null
    slug: string | null
    display_text: string | null
  }

  export type CompetitorsCountAggregateOutputType = {
    id: number
    slug: number
    display_text: number
    _all: number
  }


  export type CompetitorsAvgAggregateInputType = {
    id?: true
  }

  export type CompetitorsSumAggregateInputType = {
    id?: true
  }

  export type CompetitorsMinAggregateInputType = {
    id?: true
    slug?: true
    display_text?: true
  }

  export type CompetitorsMaxAggregateInputType = {
    id?: true
    slug?: true
    display_text?: true
  }

  export type CompetitorsCountAggregateInputType = {
    id?: true
    slug?: true
    display_text?: true
    _all?: true
  }

  export type CompetitorsAggregateArgs = {
    /**
     * Filter which competitors to aggregate.
     * 
    **/
    where?: competitorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of competitors to fetch.
     * 
    **/
    orderBy?: Enumerable<competitorsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: competitorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` competitors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` competitors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned competitors
    **/
    _count?: true | CompetitorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompetitorsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompetitorsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompetitorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompetitorsMaxAggregateInputType
  }

  export type GetCompetitorsAggregateType<T extends CompetitorsAggregateArgs> = {
        [P in keyof T & keyof AggregateCompetitors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompetitors[P]>
      : GetScalarType<T[P], AggregateCompetitors[P]>
  }


    
    
  export type CompetitorsGroupByArgs = {
    where?: competitorsWhereInput
    orderBy?: Enumerable<competitorsOrderByWithAggregationInput>
    by: Array<CompetitorsScalarFieldEnum>
    having?: competitorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompetitorsCountAggregateInputType | true
    _avg?: CompetitorsAvgAggregateInputType
    _sum?: CompetitorsSumAggregateInputType
    _min?: CompetitorsMinAggregateInputType
    _max?: CompetitorsMaxAggregateInputType
  }


  export type CompetitorsGroupByOutputType = {
    id: number
    slug: string
    display_text: string
    _count: CompetitorsCountAggregateOutputType | null
    _avg: CompetitorsAvgAggregateOutputType | null
    _sum: CompetitorsSumAggregateOutputType | null
    _min: CompetitorsMinAggregateOutputType | null
    _max: CompetitorsMaxAggregateOutputType | null
  }

  type GetCompetitorsGroupByPayload<T extends CompetitorsGroupByArgs> = Promise<
    Array<
      PickArray<CompetitorsGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof CompetitorsGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], CompetitorsGroupByOutputType[P]> 
            : GetScalarType<T[P], CompetitorsGroupByOutputType[P]>
        }
      > 
    >


  export type competitorsSelect = {
    id?: boolean
    slug?: boolean
    display_text?: boolean
    basket_line_item_competitor_equivalents?: boolean | basket_line_item_competitor_equivalentsFindManyArgs
    product_region_competitor_urls?: boolean | product_region_competitor_urlsFindManyArgs
    scaled_prices?: boolean | scaled_pricesFindManyArgs
    _count?: boolean | CompetitorsCountOutputTypeArgs
  }

  export type competitorsInclude = {
    basket_line_item_competitor_equivalents?: boolean | basket_line_item_competitor_equivalentsFindManyArgs
    product_region_competitor_urls?: boolean | product_region_competitor_urlsFindManyArgs
    scaled_prices?: boolean | scaled_pricesFindManyArgs
    _count?: boolean | CompetitorsCountOutputTypeArgs
  }

  export type competitorsGetPayload<
    S extends boolean | null | undefined | competitorsArgs,
    U = keyof S
      > = S extends true
        ? competitors
    : S extends undefined
    ? never
    : S extends competitorsArgs | competitorsFindManyArgs
    ?'include' extends U
    ? competitors  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'basket_line_item_competitor_equivalents'
        ? Array < basket_line_item_competitor_equivalentsGetPayload<S['include'][P]>>  :
        P extends 'product_region_competitor_urls'
        ? Array < product_region_competitor_urlsGetPayload<S['include'][P]>>  :
        P extends 'scaled_prices'
        ? Array < scaled_pricesGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? CompetitorsCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof competitors ?competitors [P]
  : 
          P extends 'basket_line_item_competitor_equivalents'
        ? Array < basket_line_item_competitor_equivalentsGetPayload<S['select'][P]>>  :
        P extends 'product_region_competitor_urls'
        ? Array < product_region_competitor_urlsGetPayload<S['select'][P]>>  :
        P extends 'scaled_prices'
        ? Array < scaled_pricesGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? CompetitorsCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : competitors
  : competitors


  type competitorsCountArgs = Merge<
    Omit<competitorsFindManyArgs, 'select' | 'include'> & {
      select?: CompetitorsCountAggregateInputType | true
    }
  >

  export interface competitorsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Competitors that matches the filter.
     * @param {competitorsFindUniqueArgs} args - Arguments to find a Competitors
     * @example
     * // Get one Competitors
     * const competitors = await prisma.competitors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends competitorsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, competitorsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'competitors'> extends True ? CheckSelect<T, Prisma__competitorsClient<competitors>, Prisma__competitorsClient<competitorsGetPayload<T>>> : CheckSelect<T, Prisma__competitorsClient<competitors | null >, Prisma__competitorsClient<competitorsGetPayload<T> | null >>

    /**
     * Find the first Competitors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competitorsFindFirstArgs} args - Arguments to find a Competitors
     * @example
     * // Get one Competitors
     * const competitors = await prisma.competitors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends competitorsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, competitorsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'competitors'> extends True ? CheckSelect<T, Prisma__competitorsClient<competitors>, Prisma__competitorsClient<competitorsGetPayload<T>>> : CheckSelect<T, Prisma__competitorsClient<competitors | null >, Prisma__competitorsClient<competitorsGetPayload<T> | null >>

    /**
     * Find zero or more Competitors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competitorsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Competitors
     * const competitors = await prisma.competitors.findMany()
     * 
     * // Get first 10 Competitors
     * const competitors = await prisma.competitors.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const competitorsWithIdOnly = await prisma.competitors.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends competitorsFindManyArgs>(
      args?: SelectSubset<T, competitorsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<competitors>>, PrismaPromise<Array<competitorsGetPayload<T>>>>

    /**
     * Create a Competitors.
     * @param {competitorsCreateArgs} args - Arguments to create a Competitors.
     * @example
     * // Create one Competitors
     * const Competitors = await prisma.competitors.create({
     *   data: {
     *     // ... data to create a Competitors
     *   }
     * })
     * 
    **/
    create<T extends competitorsCreateArgs>(
      args: SelectSubset<T, competitorsCreateArgs>
    ): CheckSelect<T, Prisma__competitorsClient<competitors>, Prisma__competitorsClient<competitorsGetPayload<T>>>

    /**
     * Create many Competitors.
     *     @param {competitorsCreateManyArgs} args - Arguments to create many Competitors.
     *     @example
     *     // Create many Competitors
     *     const competitors = await prisma.competitors.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends competitorsCreateManyArgs>(
      args?: SelectSubset<T, competitorsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Competitors.
     * @param {competitorsDeleteArgs} args - Arguments to delete one Competitors.
     * @example
     * // Delete one Competitors
     * const Competitors = await prisma.competitors.delete({
     *   where: {
     *     // ... filter to delete one Competitors
     *   }
     * })
     * 
    **/
    delete<T extends competitorsDeleteArgs>(
      args: SelectSubset<T, competitorsDeleteArgs>
    ): CheckSelect<T, Prisma__competitorsClient<competitors>, Prisma__competitorsClient<competitorsGetPayload<T>>>

    /**
     * Update one Competitors.
     * @param {competitorsUpdateArgs} args - Arguments to update one Competitors.
     * @example
     * // Update one Competitors
     * const competitors = await prisma.competitors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends competitorsUpdateArgs>(
      args: SelectSubset<T, competitorsUpdateArgs>
    ): CheckSelect<T, Prisma__competitorsClient<competitors>, Prisma__competitorsClient<competitorsGetPayload<T>>>

    /**
     * Delete zero or more Competitors.
     * @param {competitorsDeleteManyArgs} args - Arguments to filter Competitors to delete.
     * @example
     * // Delete a few Competitors
     * const { count } = await prisma.competitors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends competitorsDeleteManyArgs>(
      args?: SelectSubset<T, competitorsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Competitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competitorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Competitors
     * const competitors = await prisma.competitors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends competitorsUpdateManyArgs>(
      args: SelectSubset<T, competitorsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Competitors.
     * @param {competitorsUpsertArgs} args - Arguments to update or create a Competitors.
     * @example
     * // Update or create a Competitors
     * const competitors = await prisma.competitors.upsert({
     *   create: {
     *     // ... data to create a Competitors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Competitors we want to update
     *   }
     * })
    **/
    upsert<T extends competitorsUpsertArgs>(
      args: SelectSubset<T, competitorsUpsertArgs>
    ): CheckSelect<T, Prisma__competitorsClient<competitors>, Prisma__competitorsClient<competitorsGetPayload<T>>>

    /**
     * Count the number of Competitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competitorsCountArgs} args - Arguments to filter Competitors to count.
     * @example
     * // Count the number of Competitors
     * const count = await prisma.competitors.count({
     *   where: {
     *     // ... the filter for the Competitors we want to count
     *   }
     * })
    **/
    count<T extends competitorsCountArgs>(
      args?: Subset<T, competitorsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompetitorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Competitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompetitorsAggregateArgs>(args: Subset<T, CompetitorsAggregateArgs>): PrismaPromise<GetCompetitorsAggregateType<T>>

    /**
     * Group by Competitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompetitorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompetitorsGroupByArgs['orderBy'] }
        : { orderBy?: CompetitorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompetitorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompetitorsGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for competitors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__competitorsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    basket_line_item_competitor_equivalents<T extends basket_line_item_competitor_equivalentsFindManyArgs = {}>(args?: Subset<T, basket_line_item_competitor_equivalentsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<basket_line_item_competitor_equivalents>>, PrismaPromise<Array<basket_line_item_competitor_equivalentsGetPayload<T>>>>;

    product_region_competitor_urls<T extends product_region_competitor_urlsFindManyArgs = {}>(args?: Subset<T, product_region_competitor_urlsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<product_region_competitor_urls>>, PrismaPromise<Array<product_region_competitor_urlsGetPayload<T>>>>;

    scaled_prices<T extends scaled_pricesFindManyArgs = {}>(args?: Subset<T, scaled_pricesFindManyArgs>): CheckSelect<T, PrismaPromise<Array<scaled_prices>>, PrismaPromise<Array<scaled_pricesGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * competitors findUnique
   */
  export type competitorsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the competitors
     * 
    **/
    select?: competitorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: competitorsInclude | null
    /**
     * Throw an Error if a competitors can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which competitors to fetch.
     * 
    **/
    where: competitorsWhereUniqueInput
  }


  /**
   * competitors findFirst
   */
  export type competitorsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the competitors
     * 
    **/
    select?: competitorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: competitorsInclude | null
    /**
     * Throw an Error if a competitors can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which competitors to fetch.
     * 
    **/
    where?: competitorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of competitors to fetch.
     * 
    **/
    orderBy?: Enumerable<competitorsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for competitors.
     * 
    **/
    cursor?: competitorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` competitors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` competitors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of competitors.
     * 
    **/
    distinct?: Enumerable<CompetitorsScalarFieldEnum>
  }


  /**
   * competitors findMany
   */
  export type competitorsFindManyArgs = {
    /**
     * Select specific fields to fetch from the competitors
     * 
    **/
    select?: competitorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: competitorsInclude | null
    /**
     * Filter, which competitors to fetch.
     * 
    **/
    where?: competitorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of competitors to fetch.
     * 
    **/
    orderBy?: Enumerable<competitorsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing competitors.
     * 
    **/
    cursor?: competitorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` competitors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` competitors.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CompetitorsScalarFieldEnum>
  }


  /**
   * competitors create
   */
  export type competitorsCreateArgs = {
    /**
     * Select specific fields to fetch from the competitors
     * 
    **/
    select?: competitorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: competitorsInclude | null
    /**
     * The data needed to create a competitors.
     * 
    **/
    data: XOR<competitorsCreateInput, competitorsUncheckedCreateInput>
  }


  /**
   * competitors createMany
   */
  export type competitorsCreateManyArgs = {
    data: Enumerable<competitorsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * competitors update
   */
  export type competitorsUpdateArgs = {
    /**
     * Select specific fields to fetch from the competitors
     * 
    **/
    select?: competitorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: competitorsInclude | null
    /**
     * The data needed to update a competitors.
     * 
    **/
    data: XOR<competitorsUpdateInput, competitorsUncheckedUpdateInput>
    /**
     * Choose, which competitors to update.
     * 
    **/
    where: competitorsWhereUniqueInput
  }


  /**
   * competitors updateMany
   */
  export type competitorsUpdateManyArgs = {
    data: XOR<competitorsUpdateManyMutationInput, competitorsUncheckedUpdateManyInput>
    where?: competitorsWhereInput
  }


  /**
   * competitors upsert
   */
  export type competitorsUpsertArgs = {
    /**
     * Select specific fields to fetch from the competitors
     * 
    **/
    select?: competitorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: competitorsInclude | null
    /**
     * The filter to search for the competitors to update in case it exists.
     * 
    **/
    where: competitorsWhereUniqueInput
    /**
     * In case the competitors found by the `where` argument doesn't exist, create a new competitors with this data.
     * 
    **/
    create: XOR<competitorsCreateInput, competitorsUncheckedCreateInput>
    /**
     * In case the competitors was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<competitorsUpdateInput, competitorsUncheckedUpdateInput>
  }


  /**
   * competitors delete
   */
  export type competitorsDeleteArgs = {
    /**
     * Select specific fields to fetch from the competitors
     * 
    **/
    select?: competitorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: competitorsInclude | null
    /**
     * Filter which competitors to delete.
     * 
    **/
    where: competitorsWhereUniqueInput
  }


  /**
   * competitors deleteMany
   */
  export type competitorsDeleteManyArgs = {
    where?: competitorsWhereInput
  }


  /**
   * competitors without action
   */
  export type competitorsArgs = {
    /**
     * Select specific fields to fetch from the competitors
     * 
    **/
    select?: competitorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: competitorsInclude | null
  }



  /**
   * Model migrations
   */


  export type AggregateMigrations = {
    _count: MigrationsCountAggregateOutputType | null
    _avg: MigrationsAvgAggregateOutputType | null
    _sum: MigrationsSumAggregateOutputType | null
    _min: MigrationsMinAggregateOutputType | null
    _max: MigrationsMaxAggregateOutputType | null
  }

  export type MigrationsAvgAggregateOutputType = {
    id: number | null
    timestamp: number | null
  }

  export type MigrationsSumAggregateOutputType = {
    id: number | null
    timestamp: bigint | null
  }

  export type MigrationsMinAggregateOutputType = {
    id: number | null
    timestamp: bigint | null
    name: string | null
  }

  export type MigrationsMaxAggregateOutputType = {
    id: number | null
    timestamp: bigint | null
    name: string | null
  }

  export type MigrationsCountAggregateOutputType = {
    id: number
    timestamp: number
    name: number
    _all: number
  }


  export type MigrationsAvgAggregateInputType = {
    id?: true
    timestamp?: true
  }

  export type MigrationsSumAggregateInputType = {
    id?: true
    timestamp?: true
  }

  export type MigrationsMinAggregateInputType = {
    id?: true
    timestamp?: true
    name?: true
  }

  export type MigrationsMaxAggregateInputType = {
    id?: true
    timestamp?: true
    name?: true
  }

  export type MigrationsCountAggregateInputType = {
    id?: true
    timestamp?: true
    name?: true
    _all?: true
  }

  export type MigrationsAggregateArgs = {
    /**
     * Filter which migrations to aggregate.
     * 
    **/
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     * 
    **/
    orderBy?: Enumerable<migrationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned migrations
    **/
    _count?: true | MigrationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MigrationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MigrationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MigrationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MigrationsMaxAggregateInputType
  }

  export type GetMigrationsAggregateType<T extends MigrationsAggregateArgs> = {
        [P in keyof T & keyof AggregateMigrations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMigrations[P]>
      : GetScalarType<T[P], AggregateMigrations[P]>
  }


    
    
  export type MigrationsGroupByArgs = {
    where?: migrationsWhereInput
    orderBy?: Enumerable<migrationsOrderByWithAggregationInput>
    by: Array<MigrationsScalarFieldEnum>
    having?: migrationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MigrationsCountAggregateInputType | true
    _avg?: MigrationsAvgAggregateInputType
    _sum?: MigrationsSumAggregateInputType
    _min?: MigrationsMinAggregateInputType
    _max?: MigrationsMaxAggregateInputType
  }


  export type MigrationsGroupByOutputType = {
    id: number
    timestamp: bigint
    name: string
    _count: MigrationsCountAggregateOutputType | null
    _avg: MigrationsAvgAggregateOutputType | null
    _sum: MigrationsSumAggregateOutputType | null
    _min: MigrationsMinAggregateOutputType | null
    _max: MigrationsMaxAggregateOutputType | null
  }

  type GetMigrationsGroupByPayload<T extends MigrationsGroupByArgs> = Promise<
    Array<
      PickArray<MigrationsGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof MigrationsGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], MigrationsGroupByOutputType[P]> 
            : GetScalarType<T[P], MigrationsGroupByOutputType[P]>
        }
      > 
    >


  export type migrationsSelect = {
    id?: boolean
    timestamp?: boolean
    name?: boolean
  }

  export type migrationsGetPayload<
    S extends boolean | null | undefined | migrationsArgs,
    U = keyof S
      > = S extends true
        ? migrations
    : S extends undefined
    ? never
    : S extends migrationsArgs | migrationsFindManyArgs
    ?'include' extends U
    ? migrations 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof migrations ?migrations [P]
  : 
     never
  } 
    : migrations
  : migrations


  type migrationsCountArgs = Merge<
    Omit<migrationsFindManyArgs, 'select' | 'include'> & {
      select?: MigrationsCountAggregateInputType | true
    }
  >

  export interface migrationsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Migrations that matches the filter.
     * @param {migrationsFindUniqueArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends migrationsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, migrationsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'migrations'> extends True ? CheckSelect<T, Prisma__migrationsClient<migrations>, Prisma__migrationsClient<migrationsGetPayload<T>>> : CheckSelect<T, Prisma__migrationsClient<migrations | null >, Prisma__migrationsClient<migrationsGetPayload<T> | null >>

    /**
     * Find the first Migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsFindFirstArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends migrationsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, migrationsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'migrations'> extends True ? CheckSelect<T, Prisma__migrationsClient<migrations>, Prisma__migrationsClient<migrationsGetPayload<T>>> : CheckSelect<T, Prisma__migrationsClient<migrations | null >, Prisma__migrationsClient<migrationsGetPayload<T> | null >>

    /**
     * Find zero or more Migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Migrations
     * const migrations = await prisma.migrations.findMany()
     * 
     * // Get first 10 Migrations
     * const migrations = await prisma.migrations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const migrationsWithIdOnly = await prisma.migrations.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends migrationsFindManyArgs>(
      args?: SelectSubset<T, migrationsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<migrations>>, PrismaPromise<Array<migrationsGetPayload<T>>>>

    /**
     * Create a Migrations.
     * @param {migrationsCreateArgs} args - Arguments to create a Migrations.
     * @example
     * // Create one Migrations
     * const Migrations = await prisma.migrations.create({
     *   data: {
     *     // ... data to create a Migrations
     *   }
     * })
     * 
    **/
    create<T extends migrationsCreateArgs>(
      args: SelectSubset<T, migrationsCreateArgs>
    ): CheckSelect<T, Prisma__migrationsClient<migrations>, Prisma__migrationsClient<migrationsGetPayload<T>>>

    /**
     * Create many Migrations.
     *     @param {migrationsCreateManyArgs} args - Arguments to create many Migrations.
     *     @example
     *     // Create many Migrations
     *     const migrations = await prisma.migrations.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends migrationsCreateManyArgs>(
      args?: SelectSubset<T, migrationsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Migrations.
     * @param {migrationsDeleteArgs} args - Arguments to delete one Migrations.
     * @example
     * // Delete one Migrations
     * const Migrations = await prisma.migrations.delete({
     *   where: {
     *     // ... filter to delete one Migrations
     *   }
     * })
     * 
    **/
    delete<T extends migrationsDeleteArgs>(
      args: SelectSubset<T, migrationsDeleteArgs>
    ): CheckSelect<T, Prisma__migrationsClient<migrations>, Prisma__migrationsClient<migrationsGetPayload<T>>>

    /**
     * Update one Migrations.
     * @param {migrationsUpdateArgs} args - Arguments to update one Migrations.
     * @example
     * // Update one Migrations
     * const migrations = await prisma.migrations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends migrationsUpdateArgs>(
      args: SelectSubset<T, migrationsUpdateArgs>
    ): CheckSelect<T, Prisma__migrationsClient<migrations>, Prisma__migrationsClient<migrationsGetPayload<T>>>

    /**
     * Delete zero or more Migrations.
     * @param {migrationsDeleteManyArgs} args - Arguments to filter Migrations to delete.
     * @example
     * // Delete a few Migrations
     * const { count } = await prisma.migrations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends migrationsDeleteManyArgs>(
      args?: SelectSubset<T, migrationsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Migrations
     * const migrations = await prisma.migrations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends migrationsUpdateManyArgs>(
      args: SelectSubset<T, migrationsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Migrations.
     * @param {migrationsUpsertArgs} args - Arguments to update or create a Migrations.
     * @example
     * // Update or create a Migrations
     * const migrations = await prisma.migrations.upsert({
     *   create: {
     *     // ... data to create a Migrations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Migrations we want to update
     *   }
     * })
    **/
    upsert<T extends migrationsUpsertArgs>(
      args: SelectSubset<T, migrationsUpsertArgs>
    ): CheckSelect<T, Prisma__migrationsClient<migrations>, Prisma__migrationsClient<migrationsGetPayload<T>>>

    /**
     * Count the number of Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsCountArgs} args - Arguments to filter Migrations to count.
     * @example
     * // Count the number of Migrations
     * const count = await prisma.migrations.count({
     *   where: {
     *     // ... the filter for the Migrations we want to count
     *   }
     * })
    **/
    count<T extends migrationsCountArgs>(
      args?: Subset<T, migrationsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MigrationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MigrationsAggregateArgs>(args: Subset<T, MigrationsAggregateArgs>): PrismaPromise<GetMigrationsAggregateType<T>>

    /**
     * Group by Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MigrationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MigrationsGroupByArgs['orderBy'] }
        : { orderBy?: MigrationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MigrationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMigrationsGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for migrations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__migrationsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * migrations findUnique
   */
  export type migrationsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the migrations
     * 
    **/
    select?: migrationsSelect | null
    /**
     * Throw an Error if a migrations can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which migrations to fetch.
     * 
    **/
    where: migrationsWhereUniqueInput
  }


  /**
   * migrations findFirst
   */
  export type migrationsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the migrations
     * 
    **/
    select?: migrationsSelect | null
    /**
     * Throw an Error if a migrations can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which migrations to fetch.
     * 
    **/
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     * 
    **/
    orderBy?: Enumerable<migrationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for migrations.
     * 
    **/
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of migrations.
     * 
    **/
    distinct?: Enumerable<MigrationsScalarFieldEnum>
  }


  /**
   * migrations findMany
   */
  export type migrationsFindManyArgs = {
    /**
     * Select specific fields to fetch from the migrations
     * 
    **/
    select?: migrationsSelect | null
    /**
     * Filter, which migrations to fetch.
     * 
    **/
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     * 
    **/
    orderBy?: Enumerable<migrationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing migrations.
     * 
    **/
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MigrationsScalarFieldEnum>
  }


  /**
   * migrations create
   */
  export type migrationsCreateArgs = {
    /**
     * Select specific fields to fetch from the migrations
     * 
    **/
    select?: migrationsSelect | null
    /**
     * The data needed to create a migrations.
     * 
    **/
    data: XOR<migrationsCreateInput, migrationsUncheckedCreateInput>
  }


  /**
   * migrations createMany
   */
  export type migrationsCreateManyArgs = {
    data: Enumerable<migrationsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * migrations update
   */
  export type migrationsUpdateArgs = {
    /**
     * Select specific fields to fetch from the migrations
     * 
    **/
    select?: migrationsSelect | null
    /**
     * The data needed to update a migrations.
     * 
    **/
    data: XOR<migrationsUpdateInput, migrationsUncheckedUpdateInput>
    /**
     * Choose, which migrations to update.
     * 
    **/
    where: migrationsWhereUniqueInput
  }


  /**
   * migrations updateMany
   */
  export type migrationsUpdateManyArgs = {
    data: XOR<migrationsUpdateManyMutationInput, migrationsUncheckedUpdateManyInput>
    where?: migrationsWhereInput
  }


  /**
   * migrations upsert
   */
  export type migrationsUpsertArgs = {
    /**
     * Select specific fields to fetch from the migrations
     * 
    **/
    select?: migrationsSelect | null
    /**
     * The filter to search for the migrations to update in case it exists.
     * 
    **/
    where: migrationsWhereUniqueInput
    /**
     * In case the migrations found by the `where` argument doesn't exist, create a new migrations with this data.
     * 
    **/
    create: XOR<migrationsCreateInput, migrationsUncheckedCreateInput>
    /**
     * In case the migrations was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<migrationsUpdateInput, migrationsUncheckedUpdateInput>
  }


  /**
   * migrations delete
   */
  export type migrationsDeleteArgs = {
    /**
     * Select specific fields to fetch from the migrations
     * 
    **/
    select?: migrationsSelect | null
    /**
     * Filter which migrations to delete.
     * 
    **/
    where: migrationsWhereUniqueInput
  }


  /**
   * migrations deleteMany
   */
  export type migrationsDeleteManyArgs = {
    where?: migrationsWhereInput
  }


  /**
   * migrations without action
   */
  export type migrationsArgs = {
    /**
     * Select specific fields to fetch from the migrations
     * 
    **/
    select?: migrationsSelect | null
  }



  /**
   * Model price_recommendations
   */


  export type AggregatePrice_recommendations = {
    _count: Price_recommendationsCountAggregateOutputType | null
    _avg: Price_recommendationsAvgAggregateOutputType | null
    _sum: Price_recommendationsSumAggregateOutputType | null
    _min: Price_recommendationsMinAggregateOutputType | null
    _max: Price_recommendationsMaxAggregateOutputType | null
  }

  export type Price_recommendationsAvgAggregateOutputType = {
    id: number | null
    product_id: number | null
    region_id: number | null
    sale_price: number | null
    list_price: number | null
  }

  export type Price_recommendationsSumAggregateOutputType = {
    id: number | null
    product_id: number | null
    region_id: number | null
    sale_price: number | null
    list_price: number | null
  }

  export type Price_recommendationsMinAggregateOutputType = {
    id: number | null
    product_id: number | null
    region_id: number | null
    sale_price: number | null
    list_price: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Price_recommendationsMaxAggregateOutputType = {
    id: number | null
    product_id: number | null
    region_id: number | null
    sale_price: number | null
    list_price: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Price_recommendationsCountAggregateOutputType = {
    id: number
    product_id: number
    region_id: number
    sale_price: number
    list_price: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Price_recommendationsAvgAggregateInputType = {
    id?: true
    product_id?: true
    region_id?: true
    sale_price?: true
    list_price?: true
  }

  export type Price_recommendationsSumAggregateInputType = {
    id?: true
    product_id?: true
    region_id?: true
    sale_price?: true
    list_price?: true
  }

  export type Price_recommendationsMinAggregateInputType = {
    id?: true
    product_id?: true
    region_id?: true
    sale_price?: true
    list_price?: true
    created_at?: true
    updated_at?: true
  }

  export type Price_recommendationsMaxAggregateInputType = {
    id?: true
    product_id?: true
    region_id?: true
    sale_price?: true
    list_price?: true
    created_at?: true
    updated_at?: true
  }

  export type Price_recommendationsCountAggregateInputType = {
    id?: true
    product_id?: true
    region_id?: true
    sale_price?: true
    list_price?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Price_recommendationsAggregateArgs = {
    /**
     * Filter which price_recommendations to aggregate.
     * 
    **/
    where?: price_recommendationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of price_recommendations to fetch.
     * 
    **/
    orderBy?: Enumerable<price_recommendationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: price_recommendationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` price_recommendations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` price_recommendations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned price_recommendations
    **/
    _count?: true | Price_recommendationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Price_recommendationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Price_recommendationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Price_recommendationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Price_recommendationsMaxAggregateInputType
  }

  export type GetPrice_recommendationsAggregateType<T extends Price_recommendationsAggregateArgs> = {
        [P in keyof T & keyof AggregatePrice_recommendations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrice_recommendations[P]>
      : GetScalarType<T[P], AggregatePrice_recommendations[P]>
  }


    
    
  export type Price_recommendationsGroupByArgs = {
    where?: price_recommendationsWhereInput
    orderBy?: Enumerable<price_recommendationsOrderByWithAggregationInput>
    by: Array<Price_recommendationsScalarFieldEnum>
    having?: price_recommendationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Price_recommendationsCountAggregateInputType | true
    _avg?: Price_recommendationsAvgAggregateInputType
    _sum?: Price_recommendationsSumAggregateInputType
    _min?: Price_recommendationsMinAggregateInputType
    _max?: Price_recommendationsMaxAggregateInputType
  }


  export type Price_recommendationsGroupByOutputType = {
    id: number
    product_id: number
    region_id: number
    sale_price: number
    list_price: number
    created_at: Date
    updated_at: Date | null
    _count: Price_recommendationsCountAggregateOutputType | null
    _avg: Price_recommendationsAvgAggregateOutputType | null
    _sum: Price_recommendationsSumAggregateOutputType | null
    _min: Price_recommendationsMinAggregateOutputType | null
    _max: Price_recommendationsMaxAggregateOutputType | null
  }

  type GetPrice_recommendationsGroupByPayload<T extends Price_recommendationsGroupByArgs> = Promise<
    Array<
      PickArray<Price_recommendationsGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof Price_recommendationsGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], Price_recommendationsGroupByOutputType[P]> 
            : GetScalarType<T[P], Price_recommendationsGroupByOutputType[P]>
        }
      > 
    >


  export type price_recommendationsSelect = {
    id?: boolean
    product_id?: boolean
    region_id?: boolean
    sale_price?: boolean
    list_price?: boolean
    created_at?: boolean
    updated_at?: boolean
    products?: boolean | productsArgs
    regions?: boolean | regionsArgs
  }

  export type price_recommendationsInclude = {
    products?: boolean | productsArgs
    regions?: boolean | regionsArgs
  }

  export type price_recommendationsGetPayload<
    S extends boolean | null | undefined | price_recommendationsArgs,
    U = keyof S
      > = S extends true
        ? price_recommendations
    : S extends undefined
    ? never
    : S extends price_recommendationsArgs | price_recommendationsFindManyArgs
    ?'include' extends U
    ? price_recommendations  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'products'
        ? productsGetPayload<S['include'][P]> :
        P extends 'regions'
        ? regionsGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof price_recommendations ?price_recommendations [P]
  : 
          P extends 'products'
        ? productsGetPayload<S['select'][P]> :
        P extends 'regions'
        ? regionsGetPayload<S['select'][P]> : never
  } 
    : price_recommendations
  : price_recommendations


  type price_recommendationsCountArgs = Merge<
    Omit<price_recommendationsFindManyArgs, 'select' | 'include'> & {
      select?: Price_recommendationsCountAggregateInputType | true
    }
  >

  export interface price_recommendationsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Price_recommendations that matches the filter.
     * @param {price_recommendationsFindUniqueArgs} args - Arguments to find a Price_recommendations
     * @example
     * // Get one Price_recommendations
     * const price_recommendations = await prisma.price_recommendations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends price_recommendationsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, price_recommendationsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'price_recommendations'> extends True ? CheckSelect<T, Prisma__price_recommendationsClient<price_recommendations>, Prisma__price_recommendationsClient<price_recommendationsGetPayload<T>>> : CheckSelect<T, Prisma__price_recommendationsClient<price_recommendations | null >, Prisma__price_recommendationsClient<price_recommendationsGetPayload<T> | null >>

    /**
     * Find the first Price_recommendations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {price_recommendationsFindFirstArgs} args - Arguments to find a Price_recommendations
     * @example
     * // Get one Price_recommendations
     * const price_recommendations = await prisma.price_recommendations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends price_recommendationsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, price_recommendationsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'price_recommendations'> extends True ? CheckSelect<T, Prisma__price_recommendationsClient<price_recommendations>, Prisma__price_recommendationsClient<price_recommendationsGetPayload<T>>> : CheckSelect<T, Prisma__price_recommendationsClient<price_recommendations | null >, Prisma__price_recommendationsClient<price_recommendationsGetPayload<T> | null >>

    /**
     * Find zero or more Price_recommendations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {price_recommendationsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Price_recommendations
     * const price_recommendations = await prisma.price_recommendations.findMany()
     * 
     * // Get first 10 Price_recommendations
     * const price_recommendations = await prisma.price_recommendations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const price_recommendationsWithIdOnly = await prisma.price_recommendations.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends price_recommendationsFindManyArgs>(
      args?: SelectSubset<T, price_recommendationsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<price_recommendations>>, PrismaPromise<Array<price_recommendationsGetPayload<T>>>>

    /**
     * Create a Price_recommendations.
     * @param {price_recommendationsCreateArgs} args - Arguments to create a Price_recommendations.
     * @example
     * // Create one Price_recommendations
     * const Price_recommendations = await prisma.price_recommendations.create({
     *   data: {
     *     // ... data to create a Price_recommendations
     *   }
     * })
     * 
    **/
    create<T extends price_recommendationsCreateArgs>(
      args: SelectSubset<T, price_recommendationsCreateArgs>
    ): CheckSelect<T, Prisma__price_recommendationsClient<price_recommendations>, Prisma__price_recommendationsClient<price_recommendationsGetPayload<T>>>

    /**
     * Create many Price_recommendations.
     *     @param {price_recommendationsCreateManyArgs} args - Arguments to create many Price_recommendations.
     *     @example
     *     // Create many Price_recommendations
     *     const price_recommendations = await prisma.price_recommendations.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends price_recommendationsCreateManyArgs>(
      args?: SelectSubset<T, price_recommendationsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Price_recommendations.
     * @param {price_recommendationsDeleteArgs} args - Arguments to delete one Price_recommendations.
     * @example
     * // Delete one Price_recommendations
     * const Price_recommendations = await prisma.price_recommendations.delete({
     *   where: {
     *     // ... filter to delete one Price_recommendations
     *   }
     * })
     * 
    **/
    delete<T extends price_recommendationsDeleteArgs>(
      args: SelectSubset<T, price_recommendationsDeleteArgs>
    ): CheckSelect<T, Prisma__price_recommendationsClient<price_recommendations>, Prisma__price_recommendationsClient<price_recommendationsGetPayload<T>>>

    /**
     * Update one Price_recommendations.
     * @param {price_recommendationsUpdateArgs} args - Arguments to update one Price_recommendations.
     * @example
     * // Update one Price_recommendations
     * const price_recommendations = await prisma.price_recommendations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends price_recommendationsUpdateArgs>(
      args: SelectSubset<T, price_recommendationsUpdateArgs>
    ): CheckSelect<T, Prisma__price_recommendationsClient<price_recommendations>, Prisma__price_recommendationsClient<price_recommendationsGetPayload<T>>>

    /**
     * Delete zero or more Price_recommendations.
     * @param {price_recommendationsDeleteManyArgs} args - Arguments to filter Price_recommendations to delete.
     * @example
     * // Delete a few Price_recommendations
     * const { count } = await prisma.price_recommendations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends price_recommendationsDeleteManyArgs>(
      args?: SelectSubset<T, price_recommendationsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Price_recommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {price_recommendationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Price_recommendations
     * const price_recommendations = await prisma.price_recommendations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends price_recommendationsUpdateManyArgs>(
      args: SelectSubset<T, price_recommendationsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Price_recommendations.
     * @param {price_recommendationsUpsertArgs} args - Arguments to update or create a Price_recommendations.
     * @example
     * // Update or create a Price_recommendations
     * const price_recommendations = await prisma.price_recommendations.upsert({
     *   create: {
     *     // ... data to create a Price_recommendations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Price_recommendations we want to update
     *   }
     * })
    **/
    upsert<T extends price_recommendationsUpsertArgs>(
      args: SelectSubset<T, price_recommendationsUpsertArgs>
    ): CheckSelect<T, Prisma__price_recommendationsClient<price_recommendations>, Prisma__price_recommendationsClient<price_recommendationsGetPayload<T>>>

    /**
     * Count the number of Price_recommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {price_recommendationsCountArgs} args - Arguments to filter Price_recommendations to count.
     * @example
     * // Count the number of Price_recommendations
     * const count = await prisma.price_recommendations.count({
     *   where: {
     *     // ... the filter for the Price_recommendations we want to count
     *   }
     * })
    **/
    count<T extends price_recommendationsCountArgs>(
      args?: Subset<T, price_recommendationsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Price_recommendationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Price_recommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Price_recommendationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Price_recommendationsAggregateArgs>(args: Subset<T, Price_recommendationsAggregateArgs>): PrismaPromise<GetPrice_recommendationsAggregateType<T>>

    /**
     * Group by Price_recommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Price_recommendationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Price_recommendationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Price_recommendationsGroupByArgs['orderBy'] }
        : { orderBy?: Price_recommendationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Price_recommendationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrice_recommendationsGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for price_recommendations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__price_recommendationsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    products<T extends productsArgs = {}>(args?: Subset<T, productsArgs>): CheckSelect<T, Prisma__productsClient<products | null >, Prisma__productsClient<productsGetPayload<T> | null >>;

    regions<T extends regionsArgs = {}>(args?: Subset<T, regionsArgs>): CheckSelect<T, Prisma__regionsClient<regions | null >, Prisma__regionsClient<regionsGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * price_recommendations findUnique
   */
  export type price_recommendationsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the price_recommendations
     * 
    **/
    select?: price_recommendationsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: price_recommendationsInclude | null
    /**
     * Throw an Error if a price_recommendations can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which price_recommendations to fetch.
     * 
    **/
    where: price_recommendationsWhereUniqueInput
  }


  /**
   * price_recommendations findFirst
   */
  export type price_recommendationsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the price_recommendations
     * 
    **/
    select?: price_recommendationsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: price_recommendationsInclude | null
    /**
     * Throw an Error if a price_recommendations can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which price_recommendations to fetch.
     * 
    **/
    where?: price_recommendationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of price_recommendations to fetch.
     * 
    **/
    orderBy?: Enumerable<price_recommendationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for price_recommendations.
     * 
    **/
    cursor?: price_recommendationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` price_recommendations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` price_recommendations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of price_recommendations.
     * 
    **/
    distinct?: Enumerable<Price_recommendationsScalarFieldEnum>
  }


  /**
   * price_recommendations findMany
   */
  export type price_recommendationsFindManyArgs = {
    /**
     * Select specific fields to fetch from the price_recommendations
     * 
    **/
    select?: price_recommendationsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: price_recommendationsInclude | null
    /**
     * Filter, which price_recommendations to fetch.
     * 
    **/
    where?: price_recommendationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of price_recommendations to fetch.
     * 
    **/
    orderBy?: Enumerable<price_recommendationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing price_recommendations.
     * 
    **/
    cursor?: price_recommendationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` price_recommendations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` price_recommendations.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Price_recommendationsScalarFieldEnum>
  }


  /**
   * price_recommendations create
   */
  export type price_recommendationsCreateArgs = {
    /**
     * Select specific fields to fetch from the price_recommendations
     * 
    **/
    select?: price_recommendationsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: price_recommendationsInclude | null
    /**
     * The data needed to create a price_recommendations.
     * 
    **/
    data: XOR<price_recommendationsCreateInput, price_recommendationsUncheckedCreateInput>
  }


  /**
   * price_recommendations createMany
   */
  export type price_recommendationsCreateManyArgs = {
    data: Enumerable<price_recommendationsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * price_recommendations update
   */
  export type price_recommendationsUpdateArgs = {
    /**
     * Select specific fields to fetch from the price_recommendations
     * 
    **/
    select?: price_recommendationsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: price_recommendationsInclude | null
    /**
     * The data needed to update a price_recommendations.
     * 
    **/
    data: XOR<price_recommendationsUpdateInput, price_recommendationsUncheckedUpdateInput>
    /**
     * Choose, which price_recommendations to update.
     * 
    **/
    where: price_recommendationsWhereUniqueInput
  }


  /**
   * price_recommendations updateMany
   */
  export type price_recommendationsUpdateManyArgs = {
    data: XOR<price_recommendationsUpdateManyMutationInput, price_recommendationsUncheckedUpdateManyInput>
    where?: price_recommendationsWhereInput
  }


  /**
   * price_recommendations upsert
   */
  export type price_recommendationsUpsertArgs = {
    /**
     * Select specific fields to fetch from the price_recommendations
     * 
    **/
    select?: price_recommendationsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: price_recommendationsInclude | null
    /**
     * The filter to search for the price_recommendations to update in case it exists.
     * 
    **/
    where: price_recommendationsWhereUniqueInput
    /**
     * In case the price_recommendations found by the `where` argument doesn't exist, create a new price_recommendations with this data.
     * 
    **/
    create: XOR<price_recommendationsCreateInput, price_recommendationsUncheckedCreateInput>
    /**
     * In case the price_recommendations was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<price_recommendationsUpdateInput, price_recommendationsUncheckedUpdateInput>
  }


  /**
   * price_recommendations delete
   */
  export type price_recommendationsDeleteArgs = {
    /**
     * Select specific fields to fetch from the price_recommendations
     * 
    **/
    select?: price_recommendationsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: price_recommendationsInclude | null
    /**
     * Filter which price_recommendations to delete.
     * 
    **/
    where: price_recommendationsWhereUniqueInput
  }


  /**
   * price_recommendations deleteMany
   */
  export type price_recommendationsDeleteManyArgs = {
    where?: price_recommendationsWhereInput
  }


  /**
   * price_recommendations without action
   */
  export type price_recommendationsArgs = {
    /**
     * Select specific fields to fetch from the price_recommendations
     * 
    **/
    select?: price_recommendationsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: price_recommendationsInclude | null
  }



  /**
   * Model product_region_competitor_urls
   */


  export type AggregateProduct_region_competitor_urls = {
    _count: Product_region_competitor_urlsCountAggregateOutputType | null
    _avg: Product_region_competitor_urlsAvgAggregateOutputType | null
    _sum: Product_region_competitor_urlsSumAggregateOutputType | null
    _min: Product_region_competitor_urlsMinAggregateOutputType | null
    _max: Product_region_competitor_urlsMaxAggregateOutputType | null
  }

  export type Product_region_competitor_urlsAvgAggregateOutputType = {
    id: number | null
    product_id: number | null
    region_id: number | null
    competitor_id: number | null
  }

  export type Product_region_competitor_urlsSumAggregateOutputType = {
    id: number | null
    product_id: number | null
    region_id: number | null
    competitor_id: number | null
  }

  export type Product_region_competitor_urlsMinAggregateOutputType = {
    id: number | null
    product_id: number | null
    region_id: number | null
    competitor_id: number | null
    url: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Product_region_competitor_urlsMaxAggregateOutputType = {
    id: number | null
    product_id: number | null
    region_id: number | null
    competitor_id: number | null
    url: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Product_region_competitor_urlsCountAggregateOutputType = {
    id: number
    product_id: number
    region_id: number
    competitor_id: number
    url: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type Product_region_competitor_urlsAvgAggregateInputType = {
    id?: true
    product_id?: true
    region_id?: true
    competitor_id?: true
  }

  export type Product_region_competitor_urlsSumAggregateInputType = {
    id?: true
    product_id?: true
    region_id?: true
    competitor_id?: true
  }

  export type Product_region_competitor_urlsMinAggregateInputType = {
    id?: true
    product_id?: true
    region_id?: true
    competitor_id?: true
    url?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Product_region_competitor_urlsMaxAggregateInputType = {
    id?: true
    product_id?: true
    region_id?: true
    competitor_id?: true
    url?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Product_region_competitor_urlsCountAggregateInputType = {
    id?: true
    product_id?: true
    region_id?: true
    competitor_id?: true
    url?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type Product_region_competitor_urlsAggregateArgs = {
    /**
     * Filter which product_region_competitor_urls to aggregate.
     * 
    **/
    where?: product_region_competitor_urlsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_region_competitor_urls to fetch.
     * 
    **/
    orderBy?: Enumerable<product_region_competitor_urlsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: product_region_competitor_urlsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_region_competitor_urls from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_region_competitor_urls.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned product_region_competitor_urls
    **/
    _count?: true | Product_region_competitor_urlsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Product_region_competitor_urlsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Product_region_competitor_urlsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Product_region_competitor_urlsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Product_region_competitor_urlsMaxAggregateInputType
  }

  export type GetProduct_region_competitor_urlsAggregateType<T extends Product_region_competitor_urlsAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct_region_competitor_urls]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct_region_competitor_urls[P]>
      : GetScalarType<T[P], AggregateProduct_region_competitor_urls[P]>
  }


    
    
  export type Product_region_competitor_urlsGroupByArgs = {
    where?: product_region_competitor_urlsWhereInput
    orderBy?: Enumerable<product_region_competitor_urlsOrderByWithAggregationInput>
    by: Array<Product_region_competitor_urlsScalarFieldEnum>
    having?: product_region_competitor_urlsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Product_region_competitor_urlsCountAggregateInputType | true
    _avg?: Product_region_competitor_urlsAvgAggregateInputType
    _sum?: Product_region_competitor_urlsSumAggregateInputType
    _min?: Product_region_competitor_urlsMinAggregateInputType
    _max?: Product_region_competitor_urlsMaxAggregateInputType
  }


  export type Product_region_competitor_urlsGroupByOutputType = {
    id: number
    product_id: number
    region_id: number
    competitor_id: number
    url: string
    created_at: Date
    updated_at: Date | null
    deleted_at: Date | null
    _count: Product_region_competitor_urlsCountAggregateOutputType | null
    _avg: Product_region_competitor_urlsAvgAggregateOutputType | null
    _sum: Product_region_competitor_urlsSumAggregateOutputType | null
    _min: Product_region_competitor_urlsMinAggregateOutputType | null
    _max: Product_region_competitor_urlsMaxAggregateOutputType | null
  }

  type GetProduct_region_competitor_urlsGroupByPayload<T extends Product_region_competitor_urlsGroupByArgs> = Promise<
    Array<
      PickArray<Product_region_competitor_urlsGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof Product_region_competitor_urlsGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], Product_region_competitor_urlsGroupByOutputType[P]> 
            : GetScalarType<T[P], Product_region_competitor_urlsGroupByOutputType[P]>
        }
      > 
    >


  export type product_region_competitor_urlsSelect = {
    id?: boolean
    product_id?: boolean
    region_id?: boolean
    competitor_id?: boolean
    url?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    competitors?: boolean | competitorsArgs
    products?: boolean | productsArgs
    regions?: boolean | regionsArgs
    product_region_competitor_urls_former_urls?: boolean | product_region_competitor_urls_former_urlsFindManyArgs
    _count?: boolean | Product_region_competitor_urlsCountOutputTypeArgs
  }

  export type product_region_competitor_urlsInclude = {
    competitors?: boolean | competitorsArgs
    products?: boolean | productsArgs
    regions?: boolean | regionsArgs
    product_region_competitor_urls_former_urls?: boolean | product_region_competitor_urls_former_urlsFindManyArgs
    _count?: boolean | Product_region_competitor_urlsCountOutputTypeArgs
  }

  export type product_region_competitor_urlsGetPayload<
    S extends boolean | null | undefined | product_region_competitor_urlsArgs,
    U = keyof S
      > = S extends true
        ? product_region_competitor_urls
    : S extends undefined
    ? never
    : S extends product_region_competitor_urlsArgs | product_region_competitor_urlsFindManyArgs
    ?'include' extends U
    ? product_region_competitor_urls  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'competitors'
        ? competitorsGetPayload<S['include'][P]> :
        P extends 'products'
        ? productsGetPayload<S['include'][P]> :
        P extends 'regions'
        ? regionsGetPayload<S['include'][P]> :
        P extends 'product_region_competitor_urls_former_urls'
        ? Array < product_region_competitor_urls_former_urlsGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? Product_region_competitor_urlsCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof product_region_competitor_urls ?product_region_competitor_urls [P]
  : 
          P extends 'competitors'
        ? competitorsGetPayload<S['select'][P]> :
        P extends 'products'
        ? productsGetPayload<S['select'][P]> :
        P extends 'regions'
        ? regionsGetPayload<S['select'][P]> :
        P extends 'product_region_competitor_urls_former_urls'
        ? Array < product_region_competitor_urls_former_urlsGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? Product_region_competitor_urlsCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : product_region_competitor_urls
  : product_region_competitor_urls


  type product_region_competitor_urlsCountArgs = Merge<
    Omit<product_region_competitor_urlsFindManyArgs, 'select' | 'include'> & {
      select?: Product_region_competitor_urlsCountAggregateInputType | true
    }
  >

  export interface product_region_competitor_urlsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Product_region_competitor_urls that matches the filter.
     * @param {product_region_competitor_urlsFindUniqueArgs} args - Arguments to find a Product_region_competitor_urls
     * @example
     * // Get one Product_region_competitor_urls
     * const product_region_competitor_urls = await prisma.product_region_competitor_urls.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends product_region_competitor_urlsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, product_region_competitor_urlsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'product_region_competitor_urls'> extends True ? CheckSelect<T, Prisma__product_region_competitor_urlsClient<product_region_competitor_urls>, Prisma__product_region_competitor_urlsClient<product_region_competitor_urlsGetPayload<T>>> : CheckSelect<T, Prisma__product_region_competitor_urlsClient<product_region_competitor_urls | null >, Prisma__product_region_competitor_urlsClient<product_region_competitor_urlsGetPayload<T> | null >>

    /**
     * Find the first Product_region_competitor_urls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_region_competitor_urlsFindFirstArgs} args - Arguments to find a Product_region_competitor_urls
     * @example
     * // Get one Product_region_competitor_urls
     * const product_region_competitor_urls = await prisma.product_region_competitor_urls.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends product_region_competitor_urlsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, product_region_competitor_urlsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'product_region_competitor_urls'> extends True ? CheckSelect<T, Prisma__product_region_competitor_urlsClient<product_region_competitor_urls>, Prisma__product_region_competitor_urlsClient<product_region_competitor_urlsGetPayload<T>>> : CheckSelect<T, Prisma__product_region_competitor_urlsClient<product_region_competitor_urls | null >, Prisma__product_region_competitor_urlsClient<product_region_competitor_urlsGetPayload<T> | null >>

    /**
     * Find zero or more Product_region_competitor_urls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_region_competitor_urlsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Product_region_competitor_urls
     * const product_region_competitor_urls = await prisma.product_region_competitor_urls.findMany()
     * 
     * // Get first 10 Product_region_competitor_urls
     * const product_region_competitor_urls = await prisma.product_region_competitor_urls.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const product_region_competitor_urlsWithIdOnly = await prisma.product_region_competitor_urls.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends product_region_competitor_urlsFindManyArgs>(
      args?: SelectSubset<T, product_region_competitor_urlsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<product_region_competitor_urls>>, PrismaPromise<Array<product_region_competitor_urlsGetPayload<T>>>>

    /**
     * Create a Product_region_competitor_urls.
     * @param {product_region_competitor_urlsCreateArgs} args - Arguments to create a Product_region_competitor_urls.
     * @example
     * // Create one Product_region_competitor_urls
     * const Product_region_competitor_urls = await prisma.product_region_competitor_urls.create({
     *   data: {
     *     // ... data to create a Product_region_competitor_urls
     *   }
     * })
     * 
    **/
    create<T extends product_region_competitor_urlsCreateArgs>(
      args: SelectSubset<T, product_region_competitor_urlsCreateArgs>
    ): CheckSelect<T, Prisma__product_region_competitor_urlsClient<product_region_competitor_urls>, Prisma__product_region_competitor_urlsClient<product_region_competitor_urlsGetPayload<T>>>

    /**
     * Create many Product_region_competitor_urls.
     *     @param {product_region_competitor_urlsCreateManyArgs} args - Arguments to create many Product_region_competitor_urls.
     *     @example
     *     // Create many Product_region_competitor_urls
     *     const product_region_competitor_urls = await prisma.product_region_competitor_urls.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends product_region_competitor_urlsCreateManyArgs>(
      args?: SelectSubset<T, product_region_competitor_urlsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Product_region_competitor_urls.
     * @param {product_region_competitor_urlsDeleteArgs} args - Arguments to delete one Product_region_competitor_urls.
     * @example
     * // Delete one Product_region_competitor_urls
     * const Product_region_competitor_urls = await prisma.product_region_competitor_urls.delete({
     *   where: {
     *     // ... filter to delete one Product_region_competitor_urls
     *   }
     * })
     * 
    **/
    delete<T extends product_region_competitor_urlsDeleteArgs>(
      args: SelectSubset<T, product_region_competitor_urlsDeleteArgs>
    ): CheckSelect<T, Prisma__product_region_competitor_urlsClient<product_region_competitor_urls>, Prisma__product_region_competitor_urlsClient<product_region_competitor_urlsGetPayload<T>>>

    /**
     * Update one Product_region_competitor_urls.
     * @param {product_region_competitor_urlsUpdateArgs} args - Arguments to update one Product_region_competitor_urls.
     * @example
     * // Update one Product_region_competitor_urls
     * const product_region_competitor_urls = await prisma.product_region_competitor_urls.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends product_region_competitor_urlsUpdateArgs>(
      args: SelectSubset<T, product_region_competitor_urlsUpdateArgs>
    ): CheckSelect<T, Prisma__product_region_competitor_urlsClient<product_region_competitor_urls>, Prisma__product_region_competitor_urlsClient<product_region_competitor_urlsGetPayload<T>>>

    /**
     * Delete zero or more Product_region_competitor_urls.
     * @param {product_region_competitor_urlsDeleteManyArgs} args - Arguments to filter Product_region_competitor_urls to delete.
     * @example
     * // Delete a few Product_region_competitor_urls
     * const { count } = await prisma.product_region_competitor_urls.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends product_region_competitor_urlsDeleteManyArgs>(
      args?: SelectSubset<T, product_region_competitor_urlsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_region_competitor_urls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_region_competitor_urlsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Product_region_competitor_urls
     * const product_region_competitor_urls = await prisma.product_region_competitor_urls.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends product_region_competitor_urlsUpdateManyArgs>(
      args: SelectSubset<T, product_region_competitor_urlsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Product_region_competitor_urls.
     * @param {product_region_competitor_urlsUpsertArgs} args - Arguments to update or create a Product_region_competitor_urls.
     * @example
     * // Update or create a Product_region_competitor_urls
     * const product_region_competitor_urls = await prisma.product_region_competitor_urls.upsert({
     *   create: {
     *     // ... data to create a Product_region_competitor_urls
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product_region_competitor_urls we want to update
     *   }
     * })
    **/
    upsert<T extends product_region_competitor_urlsUpsertArgs>(
      args: SelectSubset<T, product_region_competitor_urlsUpsertArgs>
    ): CheckSelect<T, Prisma__product_region_competitor_urlsClient<product_region_competitor_urls>, Prisma__product_region_competitor_urlsClient<product_region_competitor_urlsGetPayload<T>>>

    /**
     * Count the number of Product_region_competitor_urls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_region_competitor_urlsCountArgs} args - Arguments to filter Product_region_competitor_urls to count.
     * @example
     * // Count the number of Product_region_competitor_urls
     * const count = await prisma.product_region_competitor_urls.count({
     *   where: {
     *     // ... the filter for the Product_region_competitor_urls we want to count
     *   }
     * })
    **/
    count<T extends product_region_competitor_urlsCountArgs>(
      args?: Subset<T, product_region_competitor_urlsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Product_region_competitor_urlsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product_region_competitor_urls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_region_competitor_urlsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Product_region_competitor_urlsAggregateArgs>(args: Subset<T, Product_region_competitor_urlsAggregateArgs>): PrismaPromise<GetProduct_region_competitor_urlsAggregateType<T>>

    /**
     * Group by Product_region_competitor_urls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_region_competitor_urlsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Product_region_competitor_urlsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Product_region_competitor_urlsGroupByArgs['orderBy'] }
        : { orderBy?: Product_region_competitor_urlsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Product_region_competitor_urlsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduct_region_competitor_urlsGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for product_region_competitor_urls.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__product_region_competitor_urlsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    competitors<T extends competitorsArgs = {}>(args?: Subset<T, competitorsArgs>): CheckSelect<T, Prisma__competitorsClient<competitors | null >, Prisma__competitorsClient<competitorsGetPayload<T> | null >>;

    products<T extends productsArgs = {}>(args?: Subset<T, productsArgs>): CheckSelect<T, Prisma__productsClient<products | null >, Prisma__productsClient<productsGetPayload<T> | null >>;

    regions<T extends regionsArgs = {}>(args?: Subset<T, regionsArgs>): CheckSelect<T, Prisma__regionsClient<regions | null >, Prisma__regionsClient<regionsGetPayload<T> | null >>;

    product_region_competitor_urls_former_urls<T extends product_region_competitor_urls_former_urlsFindManyArgs = {}>(args?: Subset<T, product_region_competitor_urls_former_urlsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<product_region_competitor_urls_former_urls>>, PrismaPromise<Array<product_region_competitor_urls_former_urlsGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * product_region_competitor_urls findUnique
   */
  export type product_region_competitor_urlsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the product_region_competitor_urls
     * 
    **/
    select?: product_region_competitor_urlsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: product_region_competitor_urlsInclude | null
    /**
     * Throw an Error if a product_region_competitor_urls can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which product_region_competitor_urls to fetch.
     * 
    **/
    where: product_region_competitor_urlsWhereUniqueInput
  }


  /**
   * product_region_competitor_urls findFirst
   */
  export type product_region_competitor_urlsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the product_region_competitor_urls
     * 
    **/
    select?: product_region_competitor_urlsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: product_region_competitor_urlsInclude | null
    /**
     * Throw an Error if a product_region_competitor_urls can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which product_region_competitor_urls to fetch.
     * 
    **/
    where?: product_region_competitor_urlsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_region_competitor_urls to fetch.
     * 
    **/
    orderBy?: Enumerable<product_region_competitor_urlsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_region_competitor_urls.
     * 
    **/
    cursor?: product_region_competitor_urlsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_region_competitor_urls from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_region_competitor_urls.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_region_competitor_urls.
     * 
    **/
    distinct?: Enumerable<Product_region_competitor_urlsScalarFieldEnum>
  }


  /**
   * product_region_competitor_urls findMany
   */
  export type product_region_competitor_urlsFindManyArgs = {
    /**
     * Select specific fields to fetch from the product_region_competitor_urls
     * 
    **/
    select?: product_region_competitor_urlsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: product_region_competitor_urlsInclude | null
    /**
     * Filter, which product_region_competitor_urls to fetch.
     * 
    **/
    where?: product_region_competitor_urlsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_region_competitor_urls to fetch.
     * 
    **/
    orderBy?: Enumerable<product_region_competitor_urlsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing product_region_competitor_urls.
     * 
    **/
    cursor?: product_region_competitor_urlsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_region_competitor_urls from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_region_competitor_urls.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Product_region_competitor_urlsScalarFieldEnum>
  }


  /**
   * product_region_competitor_urls create
   */
  export type product_region_competitor_urlsCreateArgs = {
    /**
     * Select specific fields to fetch from the product_region_competitor_urls
     * 
    **/
    select?: product_region_competitor_urlsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: product_region_competitor_urlsInclude | null
    /**
     * The data needed to create a product_region_competitor_urls.
     * 
    **/
    data: XOR<product_region_competitor_urlsCreateInput, product_region_competitor_urlsUncheckedCreateInput>
  }


  /**
   * product_region_competitor_urls createMany
   */
  export type product_region_competitor_urlsCreateManyArgs = {
    data: Enumerable<product_region_competitor_urlsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * product_region_competitor_urls update
   */
  export type product_region_competitor_urlsUpdateArgs = {
    /**
     * Select specific fields to fetch from the product_region_competitor_urls
     * 
    **/
    select?: product_region_competitor_urlsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: product_region_competitor_urlsInclude | null
    /**
     * The data needed to update a product_region_competitor_urls.
     * 
    **/
    data: XOR<product_region_competitor_urlsUpdateInput, product_region_competitor_urlsUncheckedUpdateInput>
    /**
     * Choose, which product_region_competitor_urls to update.
     * 
    **/
    where: product_region_competitor_urlsWhereUniqueInput
  }


  /**
   * product_region_competitor_urls updateMany
   */
  export type product_region_competitor_urlsUpdateManyArgs = {
    data: XOR<product_region_competitor_urlsUpdateManyMutationInput, product_region_competitor_urlsUncheckedUpdateManyInput>
    where?: product_region_competitor_urlsWhereInput
  }


  /**
   * product_region_competitor_urls upsert
   */
  export type product_region_competitor_urlsUpsertArgs = {
    /**
     * Select specific fields to fetch from the product_region_competitor_urls
     * 
    **/
    select?: product_region_competitor_urlsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: product_region_competitor_urlsInclude | null
    /**
     * The filter to search for the product_region_competitor_urls to update in case it exists.
     * 
    **/
    where: product_region_competitor_urlsWhereUniqueInput
    /**
     * In case the product_region_competitor_urls found by the `where` argument doesn't exist, create a new product_region_competitor_urls with this data.
     * 
    **/
    create: XOR<product_region_competitor_urlsCreateInput, product_region_competitor_urlsUncheckedCreateInput>
    /**
     * In case the product_region_competitor_urls was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<product_region_competitor_urlsUpdateInput, product_region_competitor_urlsUncheckedUpdateInput>
  }


  /**
   * product_region_competitor_urls delete
   */
  export type product_region_competitor_urlsDeleteArgs = {
    /**
     * Select specific fields to fetch from the product_region_competitor_urls
     * 
    **/
    select?: product_region_competitor_urlsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: product_region_competitor_urlsInclude | null
    /**
     * Filter which product_region_competitor_urls to delete.
     * 
    **/
    where: product_region_competitor_urlsWhereUniqueInput
  }


  /**
   * product_region_competitor_urls deleteMany
   */
  export type product_region_competitor_urlsDeleteManyArgs = {
    where?: product_region_competitor_urlsWhereInput
  }


  /**
   * product_region_competitor_urls without action
   */
  export type product_region_competitor_urlsArgs = {
    /**
     * Select specific fields to fetch from the product_region_competitor_urls
     * 
    **/
    select?: product_region_competitor_urlsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: product_region_competitor_urlsInclude | null
  }



  /**
   * Model product_region_competitor_urls_former_urls
   */


  export type AggregateProduct_region_competitor_urls_former_urls = {
    _count: Product_region_competitor_urls_former_urlsCountAggregateOutputType | null
    _avg: Product_region_competitor_urls_former_urlsAvgAggregateOutputType | null
    _sum: Product_region_competitor_urls_former_urlsSumAggregateOutputType | null
    _min: Product_region_competitor_urls_former_urlsMinAggregateOutputType | null
    _max: Product_region_competitor_urls_former_urlsMaxAggregateOutputType | null
  }

  export type Product_region_competitor_urls_former_urlsAvgAggregateOutputType = {
    product_region_competitor_url_id: number | null
    id: number | null
  }

  export type Product_region_competitor_urls_former_urlsSumAggregateOutputType = {
    product_region_competitor_url_id: number | null
    id: number | null
  }

  export type Product_region_competitor_urls_former_urlsMinAggregateOutputType = {
    product_region_competitor_url_id: number | null
    old_url: string | null
    created_at: Date | null
    updated_at: Date | null
    id: number | null
  }

  export type Product_region_competitor_urls_former_urlsMaxAggregateOutputType = {
    product_region_competitor_url_id: number | null
    old_url: string | null
    created_at: Date | null
    updated_at: Date | null
    id: number | null
  }

  export type Product_region_competitor_urls_former_urlsCountAggregateOutputType = {
    product_region_competitor_url_id: number
    old_url: number
    created_at: number
    updated_at: number
    id: number
    _all: number
  }


  export type Product_region_competitor_urls_former_urlsAvgAggregateInputType = {
    product_region_competitor_url_id?: true
    id?: true
  }

  export type Product_region_competitor_urls_former_urlsSumAggregateInputType = {
    product_region_competitor_url_id?: true
    id?: true
  }

  export type Product_region_competitor_urls_former_urlsMinAggregateInputType = {
    product_region_competitor_url_id?: true
    old_url?: true
    created_at?: true
    updated_at?: true
    id?: true
  }

  export type Product_region_competitor_urls_former_urlsMaxAggregateInputType = {
    product_region_competitor_url_id?: true
    old_url?: true
    created_at?: true
    updated_at?: true
    id?: true
  }

  export type Product_region_competitor_urls_former_urlsCountAggregateInputType = {
    product_region_competitor_url_id?: true
    old_url?: true
    created_at?: true
    updated_at?: true
    id?: true
    _all?: true
  }

  export type Product_region_competitor_urls_former_urlsAggregateArgs = {
    /**
     * Filter which product_region_competitor_urls_former_urls to aggregate.
     * 
    **/
    where?: product_region_competitor_urls_former_urlsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_region_competitor_urls_former_urls to fetch.
     * 
    **/
    orderBy?: Enumerable<product_region_competitor_urls_former_urlsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: product_region_competitor_urls_former_urlsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_region_competitor_urls_former_urls from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_region_competitor_urls_former_urls.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned product_region_competitor_urls_former_urls
    **/
    _count?: true | Product_region_competitor_urls_former_urlsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Product_region_competitor_urls_former_urlsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Product_region_competitor_urls_former_urlsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Product_region_competitor_urls_former_urlsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Product_region_competitor_urls_former_urlsMaxAggregateInputType
  }

  export type GetProduct_region_competitor_urls_former_urlsAggregateType<T extends Product_region_competitor_urls_former_urlsAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct_region_competitor_urls_former_urls]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct_region_competitor_urls_former_urls[P]>
      : GetScalarType<T[P], AggregateProduct_region_competitor_urls_former_urls[P]>
  }


    
    
  export type Product_region_competitor_urls_former_urlsGroupByArgs = {
    where?: product_region_competitor_urls_former_urlsWhereInput
    orderBy?: Enumerable<product_region_competitor_urls_former_urlsOrderByWithAggregationInput>
    by: Array<Product_region_competitor_urls_former_urlsScalarFieldEnum>
    having?: product_region_competitor_urls_former_urlsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Product_region_competitor_urls_former_urlsCountAggregateInputType | true
    _avg?: Product_region_competitor_urls_former_urlsAvgAggregateInputType
    _sum?: Product_region_competitor_urls_former_urlsSumAggregateInputType
    _min?: Product_region_competitor_urls_former_urlsMinAggregateInputType
    _max?: Product_region_competitor_urls_former_urlsMaxAggregateInputType
  }


  export type Product_region_competitor_urls_former_urlsGroupByOutputType = {
    product_region_competitor_url_id: number
    old_url: string
    created_at: Date
    updated_at: Date | null
    id: number
    _count: Product_region_competitor_urls_former_urlsCountAggregateOutputType | null
    _avg: Product_region_competitor_urls_former_urlsAvgAggregateOutputType | null
    _sum: Product_region_competitor_urls_former_urlsSumAggregateOutputType | null
    _min: Product_region_competitor_urls_former_urlsMinAggregateOutputType | null
    _max: Product_region_competitor_urls_former_urlsMaxAggregateOutputType | null
  }

  type GetProduct_region_competitor_urls_former_urlsGroupByPayload<T extends Product_region_competitor_urls_former_urlsGroupByArgs> = Promise<
    Array<
      PickArray<Product_region_competitor_urls_former_urlsGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof Product_region_competitor_urls_former_urlsGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], Product_region_competitor_urls_former_urlsGroupByOutputType[P]> 
            : GetScalarType<T[P], Product_region_competitor_urls_former_urlsGroupByOutputType[P]>
        }
      > 
    >


  export type product_region_competitor_urls_former_urlsSelect = {
    product_region_competitor_url_id?: boolean
    old_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    id?: boolean
    product_region_competitor_urls?: boolean | product_region_competitor_urlsArgs
  }

  export type product_region_competitor_urls_former_urlsInclude = {
    product_region_competitor_urls?: boolean | product_region_competitor_urlsArgs
  }

  export type product_region_competitor_urls_former_urlsGetPayload<
    S extends boolean | null | undefined | product_region_competitor_urls_former_urlsArgs,
    U = keyof S
      > = S extends true
        ? product_region_competitor_urls_former_urls
    : S extends undefined
    ? never
    : S extends product_region_competitor_urls_former_urlsArgs | product_region_competitor_urls_former_urlsFindManyArgs
    ?'include' extends U
    ? product_region_competitor_urls_former_urls  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'product_region_competitor_urls'
        ? product_region_competitor_urlsGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof product_region_competitor_urls_former_urls ?product_region_competitor_urls_former_urls [P]
  : 
          P extends 'product_region_competitor_urls'
        ? product_region_competitor_urlsGetPayload<S['select'][P]> : never
  } 
    : product_region_competitor_urls_former_urls
  : product_region_competitor_urls_former_urls


  type product_region_competitor_urls_former_urlsCountArgs = Merge<
    Omit<product_region_competitor_urls_former_urlsFindManyArgs, 'select' | 'include'> & {
      select?: Product_region_competitor_urls_former_urlsCountAggregateInputType | true
    }
  >

  export interface product_region_competitor_urls_former_urlsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Product_region_competitor_urls_former_urls that matches the filter.
     * @param {product_region_competitor_urls_former_urlsFindUniqueArgs} args - Arguments to find a Product_region_competitor_urls_former_urls
     * @example
     * // Get one Product_region_competitor_urls_former_urls
     * const product_region_competitor_urls_former_urls = await prisma.product_region_competitor_urls_former_urls.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends product_region_competitor_urls_former_urlsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, product_region_competitor_urls_former_urlsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'product_region_competitor_urls_former_urls'> extends True ? CheckSelect<T, Prisma__product_region_competitor_urls_former_urlsClient<product_region_competitor_urls_former_urls>, Prisma__product_region_competitor_urls_former_urlsClient<product_region_competitor_urls_former_urlsGetPayload<T>>> : CheckSelect<T, Prisma__product_region_competitor_urls_former_urlsClient<product_region_competitor_urls_former_urls | null >, Prisma__product_region_competitor_urls_former_urlsClient<product_region_competitor_urls_former_urlsGetPayload<T> | null >>

    /**
     * Find the first Product_region_competitor_urls_former_urls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_region_competitor_urls_former_urlsFindFirstArgs} args - Arguments to find a Product_region_competitor_urls_former_urls
     * @example
     * // Get one Product_region_competitor_urls_former_urls
     * const product_region_competitor_urls_former_urls = await prisma.product_region_competitor_urls_former_urls.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends product_region_competitor_urls_former_urlsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, product_region_competitor_urls_former_urlsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'product_region_competitor_urls_former_urls'> extends True ? CheckSelect<T, Prisma__product_region_competitor_urls_former_urlsClient<product_region_competitor_urls_former_urls>, Prisma__product_region_competitor_urls_former_urlsClient<product_region_competitor_urls_former_urlsGetPayload<T>>> : CheckSelect<T, Prisma__product_region_competitor_urls_former_urlsClient<product_region_competitor_urls_former_urls | null >, Prisma__product_region_competitor_urls_former_urlsClient<product_region_competitor_urls_former_urlsGetPayload<T> | null >>

    /**
     * Find zero or more Product_region_competitor_urls_former_urls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_region_competitor_urls_former_urlsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Product_region_competitor_urls_former_urls
     * const product_region_competitor_urls_former_urls = await prisma.product_region_competitor_urls_former_urls.findMany()
     * 
     * // Get first 10 Product_region_competitor_urls_former_urls
     * const product_region_competitor_urls_former_urls = await prisma.product_region_competitor_urls_former_urls.findMany({ take: 10 })
     * 
     * // Only select the `product_region_competitor_url_id`
     * const product_region_competitor_urls_former_urlsWithProduct_region_competitor_url_idOnly = await prisma.product_region_competitor_urls_former_urls.findMany({ select: { product_region_competitor_url_id: true } })
     * 
    **/
    findMany<T extends product_region_competitor_urls_former_urlsFindManyArgs>(
      args?: SelectSubset<T, product_region_competitor_urls_former_urlsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<product_region_competitor_urls_former_urls>>, PrismaPromise<Array<product_region_competitor_urls_former_urlsGetPayload<T>>>>

    /**
     * Create a Product_region_competitor_urls_former_urls.
     * @param {product_region_competitor_urls_former_urlsCreateArgs} args - Arguments to create a Product_region_competitor_urls_former_urls.
     * @example
     * // Create one Product_region_competitor_urls_former_urls
     * const Product_region_competitor_urls_former_urls = await prisma.product_region_competitor_urls_former_urls.create({
     *   data: {
     *     // ... data to create a Product_region_competitor_urls_former_urls
     *   }
     * })
     * 
    **/
    create<T extends product_region_competitor_urls_former_urlsCreateArgs>(
      args: SelectSubset<T, product_region_competitor_urls_former_urlsCreateArgs>
    ): CheckSelect<T, Prisma__product_region_competitor_urls_former_urlsClient<product_region_competitor_urls_former_urls>, Prisma__product_region_competitor_urls_former_urlsClient<product_region_competitor_urls_former_urlsGetPayload<T>>>

    /**
     * Create many Product_region_competitor_urls_former_urls.
     *     @param {product_region_competitor_urls_former_urlsCreateManyArgs} args - Arguments to create many Product_region_competitor_urls_former_urls.
     *     @example
     *     // Create many Product_region_competitor_urls_former_urls
     *     const product_region_competitor_urls_former_urls = await prisma.product_region_competitor_urls_former_urls.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends product_region_competitor_urls_former_urlsCreateManyArgs>(
      args?: SelectSubset<T, product_region_competitor_urls_former_urlsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Product_region_competitor_urls_former_urls.
     * @param {product_region_competitor_urls_former_urlsDeleteArgs} args - Arguments to delete one Product_region_competitor_urls_former_urls.
     * @example
     * // Delete one Product_region_competitor_urls_former_urls
     * const Product_region_competitor_urls_former_urls = await prisma.product_region_competitor_urls_former_urls.delete({
     *   where: {
     *     // ... filter to delete one Product_region_competitor_urls_former_urls
     *   }
     * })
     * 
    **/
    delete<T extends product_region_competitor_urls_former_urlsDeleteArgs>(
      args: SelectSubset<T, product_region_competitor_urls_former_urlsDeleteArgs>
    ): CheckSelect<T, Prisma__product_region_competitor_urls_former_urlsClient<product_region_competitor_urls_former_urls>, Prisma__product_region_competitor_urls_former_urlsClient<product_region_competitor_urls_former_urlsGetPayload<T>>>

    /**
     * Update one Product_region_competitor_urls_former_urls.
     * @param {product_region_competitor_urls_former_urlsUpdateArgs} args - Arguments to update one Product_region_competitor_urls_former_urls.
     * @example
     * // Update one Product_region_competitor_urls_former_urls
     * const product_region_competitor_urls_former_urls = await prisma.product_region_competitor_urls_former_urls.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends product_region_competitor_urls_former_urlsUpdateArgs>(
      args: SelectSubset<T, product_region_competitor_urls_former_urlsUpdateArgs>
    ): CheckSelect<T, Prisma__product_region_competitor_urls_former_urlsClient<product_region_competitor_urls_former_urls>, Prisma__product_region_competitor_urls_former_urlsClient<product_region_competitor_urls_former_urlsGetPayload<T>>>

    /**
     * Delete zero or more Product_region_competitor_urls_former_urls.
     * @param {product_region_competitor_urls_former_urlsDeleteManyArgs} args - Arguments to filter Product_region_competitor_urls_former_urls to delete.
     * @example
     * // Delete a few Product_region_competitor_urls_former_urls
     * const { count } = await prisma.product_region_competitor_urls_former_urls.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends product_region_competitor_urls_former_urlsDeleteManyArgs>(
      args?: SelectSubset<T, product_region_competitor_urls_former_urlsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_region_competitor_urls_former_urls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_region_competitor_urls_former_urlsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Product_region_competitor_urls_former_urls
     * const product_region_competitor_urls_former_urls = await prisma.product_region_competitor_urls_former_urls.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends product_region_competitor_urls_former_urlsUpdateManyArgs>(
      args: SelectSubset<T, product_region_competitor_urls_former_urlsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Product_region_competitor_urls_former_urls.
     * @param {product_region_competitor_urls_former_urlsUpsertArgs} args - Arguments to update or create a Product_region_competitor_urls_former_urls.
     * @example
     * // Update or create a Product_region_competitor_urls_former_urls
     * const product_region_competitor_urls_former_urls = await prisma.product_region_competitor_urls_former_urls.upsert({
     *   create: {
     *     // ... data to create a Product_region_competitor_urls_former_urls
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product_region_competitor_urls_former_urls we want to update
     *   }
     * })
    **/
    upsert<T extends product_region_competitor_urls_former_urlsUpsertArgs>(
      args: SelectSubset<T, product_region_competitor_urls_former_urlsUpsertArgs>
    ): CheckSelect<T, Prisma__product_region_competitor_urls_former_urlsClient<product_region_competitor_urls_former_urls>, Prisma__product_region_competitor_urls_former_urlsClient<product_region_competitor_urls_former_urlsGetPayload<T>>>

    /**
     * Count the number of Product_region_competitor_urls_former_urls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_region_competitor_urls_former_urlsCountArgs} args - Arguments to filter Product_region_competitor_urls_former_urls to count.
     * @example
     * // Count the number of Product_region_competitor_urls_former_urls
     * const count = await prisma.product_region_competitor_urls_former_urls.count({
     *   where: {
     *     // ... the filter for the Product_region_competitor_urls_former_urls we want to count
     *   }
     * })
    **/
    count<T extends product_region_competitor_urls_former_urlsCountArgs>(
      args?: Subset<T, product_region_competitor_urls_former_urlsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Product_region_competitor_urls_former_urlsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product_region_competitor_urls_former_urls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_region_competitor_urls_former_urlsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Product_region_competitor_urls_former_urlsAggregateArgs>(args: Subset<T, Product_region_competitor_urls_former_urlsAggregateArgs>): PrismaPromise<GetProduct_region_competitor_urls_former_urlsAggregateType<T>>

    /**
     * Group by Product_region_competitor_urls_former_urls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_region_competitor_urls_former_urlsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Product_region_competitor_urls_former_urlsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Product_region_competitor_urls_former_urlsGroupByArgs['orderBy'] }
        : { orderBy?: Product_region_competitor_urls_former_urlsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Product_region_competitor_urls_former_urlsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduct_region_competitor_urls_former_urlsGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for product_region_competitor_urls_former_urls.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__product_region_competitor_urls_former_urlsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    product_region_competitor_urls<T extends product_region_competitor_urlsArgs = {}>(args?: Subset<T, product_region_competitor_urlsArgs>): CheckSelect<T, Prisma__product_region_competitor_urlsClient<product_region_competitor_urls | null >, Prisma__product_region_competitor_urlsClient<product_region_competitor_urlsGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * product_region_competitor_urls_former_urls findUnique
   */
  export type product_region_competitor_urls_former_urlsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the product_region_competitor_urls_former_urls
     * 
    **/
    select?: product_region_competitor_urls_former_urlsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: product_region_competitor_urls_former_urlsInclude | null
    /**
     * Throw an Error if a product_region_competitor_urls_former_urls can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which product_region_competitor_urls_former_urls to fetch.
     * 
    **/
    where: product_region_competitor_urls_former_urlsWhereUniqueInput
  }


  /**
   * product_region_competitor_urls_former_urls findFirst
   */
  export type product_region_competitor_urls_former_urlsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the product_region_competitor_urls_former_urls
     * 
    **/
    select?: product_region_competitor_urls_former_urlsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: product_region_competitor_urls_former_urlsInclude | null
    /**
     * Throw an Error if a product_region_competitor_urls_former_urls can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which product_region_competitor_urls_former_urls to fetch.
     * 
    **/
    where?: product_region_competitor_urls_former_urlsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_region_competitor_urls_former_urls to fetch.
     * 
    **/
    orderBy?: Enumerable<product_region_competitor_urls_former_urlsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_region_competitor_urls_former_urls.
     * 
    **/
    cursor?: product_region_competitor_urls_former_urlsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_region_competitor_urls_former_urls from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_region_competitor_urls_former_urls.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_region_competitor_urls_former_urls.
     * 
    **/
    distinct?: Enumerable<Product_region_competitor_urls_former_urlsScalarFieldEnum>
  }


  /**
   * product_region_competitor_urls_former_urls findMany
   */
  export type product_region_competitor_urls_former_urlsFindManyArgs = {
    /**
     * Select specific fields to fetch from the product_region_competitor_urls_former_urls
     * 
    **/
    select?: product_region_competitor_urls_former_urlsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: product_region_competitor_urls_former_urlsInclude | null
    /**
     * Filter, which product_region_competitor_urls_former_urls to fetch.
     * 
    **/
    where?: product_region_competitor_urls_former_urlsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_region_competitor_urls_former_urls to fetch.
     * 
    **/
    orderBy?: Enumerable<product_region_competitor_urls_former_urlsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing product_region_competitor_urls_former_urls.
     * 
    **/
    cursor?: product_region_competitor_urls_former_urlsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_region_competitor_urls_former_urls from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_region_competitor_urls_former_urls.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Product_region_competitor_urls_former_urlsScalarFieldEnum>
  }


  /**
   * product_region_competitor_urls_former_urls create
   */
  export type product_region_competitor_urls_former_urlsCreateArgs = {
    /**
     * Select specific fields to fetch from the product_region_competitor_urls_former_urls
     * 
    **/
    select?: product_region_competitor_urls_former_urlsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: product_region_competitor_urls_former_urlsInclude | null
    /**
     * The data needed to create a product_region_competitor_urls_former_urls.
     * 
    **/
    data: XOR<product_region_competitor_urls_former_urlsCreateInput, product_region_competitor_urls_former_urlsUncheckedCreateInput>
  }


  /**
   * product_region_competitor_urls_former_urls createMany
   */
  export type product_region_competitor_urls_former_urlsCreateManyArgs = {
    data: Enumerable<product_region_competitor_urls_former_urlsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * product_region_competitor_urls_former_urls update
   */
  export type product_region_competitor_urls_former_urlsUpdateArgs = {
    /**
     * Select specific fields to fetch from the product_region_competitor_urls_former_urls
     * 
    **/
    select?: product_region_competitor_urls_former_urlsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: product_region_competitor_urls_former_urlsInclude | null
    /**
     * The data needed to update a product_region_competitor_urls_former_urls.
     * 
    **/
    data: XOR<product_region_competitor_urls_former_urlsUpdateInput, product_region_competitor_urls_former_urlsUncheckedUpdateInput>
    /**
     * Choose, which product_region_competitor_urls_former_urls to update.
     * 
    **/
    where: product_region_competitor_urls_former_urlsWhereUniqueInput
  }


  /**
   * product_region_competitor_urls_former_urls updateMany
   */
  export type product_region_competitor_urls_former_urlsUpdateManyArgs = {
    data: XOR<product_region_competitor_urls_former_urlsUpdateManyMutationInput, product_region_competitor_urls_former_urlsUncheckedUpdateManyInput>
    where?: product_region_competitor_urls_former_urlsWhereInput
  }


  /**
   * product_region_competitor_urls_former_urls upsert
   */
  export type product_region_competitor_urls_former_urlsUpsertArgs = {
    /**
     * Select specific fields to fetch from the product_region_competitor_urls_former_urls
     * 
    **/
    select?: product_region_competitor_urls_former_urlsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: product_region_competitor_urls_former_urlsInclude | null
    /**
     * The filter to search for the product_region_competitor_urls_former_urls to update in case it exists.
     * 
    **/
    where: product_region_competitor_urls_former_urlsWhereUniqueInput
    /**
     * In case the product_region_competitor_urls_former_urls found by the `where` argument doesn't exist, create a new product_region_competitor_urls_former_urls with this data.
     * 
    **/
    create: XOR<product_region_competitor_urls_former_urlsCreateInput, product_region_competitor_urls_former_urlsUncheckedCreateInput>
    /**
     * In case the product_region_competitor_urls_former_urls was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<product_region_competitor_urls_former_urlsUpdateInput, product_region_competitor_urls_former_urlsUncheckedUpdateInput>
  }


  /**
   * product_region_competitor_urls_former_urls delete
   */
  export type product_region_competitor_urls_former_urlsDeleteArgs = {
    /**
     * Select specific fields to fetch from the product_region_competitor_urls_former_urls
     * 
    **/
    select?: product_region_competitor_urls_former_urlsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: product_region_competitor_urls_former_urlsInclude | null
    /**
     * Filter which product_region_competitor_urls_former_urls to delete.
     * 
    **/
    where: product_region_competitor_urls_former_urlsWhereUniqueInput
  }


  /**
   * product_region_competitor_urls_former_urls deleteMany
   */
  export type product_region_competitor_urls_former_urlsDeleteManyArgs = {
    where?: product_region_competitor_urls_former_urlsWhereInput
  }


  /**
   * product_region_competitor_urls_former_urls without action
   */
  export type product_region_competitor_urls_former_urlsArgs = {
    /**
     * Select specific fields to fetch from the product_region_competitor_urls_former_urls
     * 
    **/
    select?: product_region_competitor_urls_former_urlsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: product_region_competitor_urls_former_urlsInclude | null
  }



  /**
   * Model product_region_price_data
   */


  export type AggregateProduct_region_price_data = {
    _count: Product_region_price_dataCountAggregateOutputType | null
    _avg: Product_region_price_dataAvgAggregateOutputType | null
    _sum: Product_region_price_dataSumAggregateOutputType | null
    _min: Product_region_price_dataMinAggregateOutputType | null
    _max: Product_region_price_dataMaxAggregateOutputType | null
  }

  export type Product_region_price_dataAvgAggregateOutputType = {
    id: number | null
    product_id: number | null
    region_id: number | null
    price: number | null
    discount: number | null
    threshold_price: number | null
  }

  export type Product_region_price_dataSumAggregateOutputType = {
    id: number | null
    product_id: number | null
    region_id: number | null
    price: number | null
    discount: number | null
    threshold_price: number | null
  }

  export type Product_region_price_dataMinAggregateOutputType = {
    id: number | null
    product_id: number | null
    region_id: number | null
    price: number | null
    discount: number | null
    threshold_price: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Product_region_price_dataMaxAggregateOutputType = {
    id: number | null
    product_id: number | null
    region_id: number | null
    price: number | null
    discount: number | null
    threshold_price: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Product_region_price_dataCountAggregateOutputType = {
    id: number
    product_id: number
    region_id: number
    price: number
    discount: number
    threshold_price: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type Product_region_price_dataAvgAggregateInputType = {
    id?: true
    product_id?: true
    region_id?: true
    price?: true
    discount?: true
    threshold_price?: true
  }

  export type Product_region_price_dataSumAggregateInputType = {
    id?: true
    product_id?: true
    region_id?: true
    price?: true
    discount?: true
    threshold_price?: true
  }

  export type Product_region_price_dataMinAggregateInputType = {
    id?: true
    product_id?: true
    region_id?: true
    price?: true
    discount?: true
    threshold_price?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Product_region_price_dataMaxAggregateInputType = {
    id?: true
    product_id?: true
    region_id?: true
    price?: true
    discount?: true
    threshold_price?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Product_region_price_dataCountAggregateInputType = {
    id?: true
    product_id?: true
    region_id?: true
    price?: true
    discount?: true
    threshold_price?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type Product_region_price_dataAggregateArgs = {
    /**
     * Filter which product_region_price_data to aggregate.
     * 
    **/
    where?: product_region_price_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_region_price_data to fetch.
     * 
    **/
    orderBy?: Enumerable<product_region_price_dataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: product_region_price_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_region_price_data from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_region_price_data.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned product_region_price_data
    **/
    _count?: true | Product_region_price_dataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Product_region_price_dataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Product_region_price_dataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Product_region_price_dataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Product_region_price_dataMaxAggregateInputType
  }

  export type GetProduct_region_price_dataAggregateType<T extends Product_region_price_dataAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct_region_price_data]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct_region_price_data[P]>
      : GetScalarType<T[P], AggregateProduct_region_price_data[P]>
  }


    
    
  export type Product_region_price_dataGroupByArgs = {
    where?: product_region_price_dataWhereInput
    orderBy?: Enumerable<product_region_price_dataOrderByWithAggregationInput>
    by: Array<Product_region_price_dataScalarFieldEnum>
    having?: product_region_price_dataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Product_region_price_dataCountAggregateInputType | true
    _avg?: Product_region_price_dataAvgAggregateInputType
    _sum?: Product_region_price_dataSumAggregateInputType
    _min?: Product_region_price_dataMinAggregateInputType
    _max?: Product_region_price_dataMaxAggregateInputType
  }


  export type Product_region_price_dataGroupByOutputType = {
    id: number
    product_id: number
    region_id: number
    price: number
    discount: number
    threshold_price: number | null
    created_at: Date
    updated_at: Date | null
    deleted_at: Date | null
    _count: Product_region_price_dataCountAggregateOutputType | null
    _avg: Product_region_price_dataAvgAggregateOutputType | null
    _sum: Product_region_price_dataSumAggregateOutputType | null
    _min: Product_region_price_dataMinAggregateOutputType | null
    _max: Product_region_price_dataMaxAggregateOutputType | null
  }

  type GetProduct_region_price_dataGroupByPayload<T extends Product_region_price_dataGroupByArgs> = Promise<
    Array<
      PickArray<Product_region_price_dataGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof Product_region_price_dataGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], Product_region_price_dataGroupByOutputType[P]> 
            : GetScalarType<T[P], Product_region_price_dataGroupByOutputType[P]>
        }
      > 
    >


  export type product_region_price_dataSelect = {
    id?: boolean
    product_id?: boolean
    region_id?: boolean
    price?: boolean
    discount?: boolean
    threshold_price?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    products?: boolean | productsArgs
    regions?: boolean | regionsArgs
  }

  export type product_region_price_dataInclude = {
    products?: boolean | productsArgs
    regions?: boolean | regionsArgs
  }

  export type product_region_price_dataGetPayload<
    S extends boolean | null | undefined | product_region_price_dataArgs,
    U = keyof S
      > = S extends true
        ? product_region_price_data
    : S extends undefined
    ? never
    : S extends product_region_price_dataArgs | product_region_price_dataFindManyArgs
    ?'include' extends U
    ? product_region_price_data  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'products'
        ? productsGetPayload<S['include'][P]> :
        P extends 'regions'
        ? regionsGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof product_region_price_data ?product_region_price_data [P]
  : 
          P extends 'products'
        ? productsGetPayload<S['select'][P]> :
        P extends 'regions'
        ? regionsGetPayload<S['select'][P]> : never
  } 
    : product_region_price_data
  : product_region_price_data


  type product_region_price_dataCountArgs = Merge<
    Omit<product_region_price_dataFindManyArgs, 'select' | 'include'> & {
      select?: Product_region_price_dataCountAggregateInputType | true
    }
  >

  export interface product_region_price_dataDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Product_region_price_data that matches the filter.
     * @param {product_region_price_dataFindUniqueArgs} args - Arguments to find a Product_region_price_data
     * @example
     * // Get one Product_region_price_data
     * const product_region_price_data = await prisma.product_region_price_data.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends product_region_price_dataFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, product_region_price_dataFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'product_region_price_data'> extends True ? CheckSelect<T, Prisma__product_region_price_dataClient<product_region_price_data>, Prisma__product_region_price_dataClient<product_region_price_dataGetPayload<T>>> : CheckSelect<T, Prisma__product_region_price_dataClient<product_region_price_data | null >, Prisma__product_region_price_dataClient<product_region_price_dataGetPayload<T> | null >>

    /**
     * Find the first Product_region_price_data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_region_price_dataFindFirstArgs} args - Arguments to find a Product_region_price_data
     * @example
     * // Get one Product_region_price_data
     * const product_region_price_data = await prisma.product_region_price_data.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends product_region_price_dataFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, product_region_price_dataFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'product_region_price_data'> extends True ? CheckSelect<T, Prisma__product_region_price_dataClient<product_region_price_data>, Prisma__product_region_price_dataClient<product_region_price_dataGetPayload<T>>> : CheckSelect<T, Prisma__product_region_price_dataClient<product_region_price_data | null >, Prisma__product_region_price_dataClient<product_region_price_dataGetPayload<T> | null >>

    /**
     * Find zero or more Product_region_price_data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_region_price_dataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Product_region_price_data
     * const product_region_price_data = await prisma.product_region_price_data.findMany()
     * 
     * // Get first 10 Product_region_price_data
     * const product_region_price_data = await prisma.product_region_price_data.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const product_region_price_dataWithIdOnly = await prisma.product_region_price_data.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends product_region_price_dataFindManyArgs>(
      args?: SelectSubset<T, product_region_price_dataFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<product_region_price_data>>, PrismaPromise<Array<product_region_price_dataGetPayload<T>>>>

    /**
     * Create a Product_region_price_data.
     * @param {product_region_price_dataCreateArgs} args - Arguments to create a Product_region_price_data.
     * @example
     * // Create one Product_region_price_data
     * const Product_region_price_data = await prisma.product_region_price_data.create({
     *   data: {
     *     // ... data to create a Product_region_price_data
     *   }
     * })
     * 
    **/
    create<T extends product_region_price_dataCreateArgs>(
      args: SelectSubset<T, product_region_price_dataCreateArgs>
    ): CheckSelect<T, Prisma__product_region_price_dataClient<product_region_price_data>, Prisma__product_region_price_dataClient<product_region_price_dataGetPayload<T>>>

    /**
     * Create many Product_region_price_data.
     *     @param {product_region_price_dataCreateManyArgs} args - Arguments to create many Product_region_price_data.
     *     @example
     *     // Create many Product_region_price_data
     *     const product_region_price_data = await prisma.product_region_price_data.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends product_region_price_dataCreateManyArgs>(
      args?: SelectSubset<T, product_region_price_dataCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Product_region_price_data.
     * @param {product_region_price_dataDeleteArgs} args - Arguments to delete one Product_region_price_data.
     * @example
     * // Delete one Product_region_price_data
     * const Product_region_price_data = await prisma.product_region_price_data.delete({
     *   where: {
     *     // ... filter to delete one Product_region_price_data
     *   }
     * })
     * 
    **/
    delete<T extends product_region_price_dataDeleteArgs>(
      args: SelectSubset<T, product_region_price_dataDeleteArgs>
    ): CheckSelect<T, Prisma__product_region_price_dataClient<product_region_price_data>, Prisma__product_region_price_dataClient<product_region_price_dataGetPayload<T>>>

    /**
     * Update one Product_region_price_data.
     * @param {product_region_price_dataUpdateArgs} args - Arguments to update one Product_region_price_data.
     * @example
     * // Update one Product_region_price_data
     * const product_region_price_data = await prisma.product_region_price_data.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends product_region_price_dataUpdateArgs>(
      args: SelectSubset<T, product_region_price_dataUpdateArgs>
    ): CheckSelect<T, Prisma__product_region_price_dataClient<product_region_price_data>, Prisma__product_region_price_dataClient<product_region_price_dataGetPayload<T>>>

    /**
     * Delete zero or more Product_region_price_data.
     * @param {product_region_price_dataDeleteManyArgs} args - Arguments to filter Product_region_price_data to delete.
     * @example
     * // Delete a few Product_region_price_data
     * const { count } = await prisma.product_region_price_data.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends product_region_price_dataDeleteManyArgs>(
      args?: SelectSubset<T, product_region_price_dataDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_region_price_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_region_price_dataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Product_region_price_data
     * const product_region_price_data = await prisma.product_region_price_data.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends product_region_price_dataUpdateManyArgs>(
      args: SelectSubset<T, product_region_price_dataUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Product_region_price_data.
     * @param {product_region_price_dataUpsertArgs} args - Arguments to update or create a Product_region_price_data.
     * @example
     * // Update or create a Product_region_price_data
     * const product_region_price_data = await prisma.product_region_price_data.upsert({
     *   create: {
     *     // ... data to create a Product_region_price_data
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product_region_price_data we want to update
     *   }
     * })
    **/
    upsert<T extends product_region_price_dataUpsertArgs>(
      args: SelectSubset<T, product_region_price_dataUpsertArgs>
    ): CheckSelect<T, Prisma__product_region_price_dataClient<product_region_price_data>, Prisma__product_region_price_dataClient<product_region_price_dataGetPayload<T>>>

    /**
     * Count the number of Product_region_price_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_region_price_dataCountArgs} args - Arguments to filter Product_region_price_data to count.
     * @example
     * // Count the number of Product_region_price_data
     * const count = await prisma.product_region_price_data.count({
     *   where: {
     *     // ... the filter for the Product_region_price_data we want to count
     *   }
     * })
    **/
    count<T extends product_region_price_dataCountArgs>(
      args?: Subset<T, product_region_price_dataCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Product_region_price_dataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product_region_price_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_region_price_dataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Product_region_price_dataAggregateArgs>(args: Subset<T, Product_region_price_dataAggregateArgs>): PrismaPromise<GetProduct_region_price_dataAggregateType<T>>

    /**
     * Group by Product_region_price_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_region_price_dataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Product_region_price_dataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Product_region_price_dataGroupByArgs['orderBy'] }
        : { orderBy?: Product_region_price_dataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Product_region_price_dataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduct_region_price_dataGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for product_region_price_data.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__product_region_price_dataClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    products<T extends productsArgs = {}>(args?: Subset<T, productsArgs>): CheckSelect<T, Prisma__productsClient<products | null >, Prisma__productsClient<productsGetPayload<T> | null >>;

    regions<T extends regionsArgs = {}>(args?: Subset<T, regionsArgs>): CheckSelect<T, Prisma__regionsClient<regions | null >, Prisma__regionsClient<regionsGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * product_region_price_data findUnique
   */
  export type product_region_price_dataFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the product_region_price_data
     * 
    **/
    select?: product_region_price_dataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: product_region_price_dataInclude | null
    /**
     * Throw an Error if a product_region_price_data can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which product_region_price_data to fetch.
     * 
    **/
    where: product_region_price_dataWhereUniqueInput
  }


  /**
   * product_region_price_data findFirst
   */
  export type product_region_price_dataFindFirstArgs = {
    /**
     * Select specific fields to fetch from the product_region_price_data
     * 
    **/
    select?: product_region_price_dataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: product_region_price_dataInclude | null
    /**
     * Throw an Error if a product_region_price_data can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which product_region_price_data to fetch.
     * 
    **/
    where?: product_region_price_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_region_price_data to fetch.
     * 
    **/
    orderBy?: Enumerable<product_region_price_dataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_region_price_data.
     * 
    **/
    cursor?: product_region_price_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_region_price_data from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_region_price_data.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_region_price_data.
     * 
    **/
    distinct?: Enumerable<Product_region_price_dataScalarFieldEnum>
  }


  /**
   * product_region_price_data findMany
   */
  export type product_region_price_dataFindManyArgs = {
    /**
     * Select specific fields to fetch from the product_region_price_data
     * 
    **/
    select?: product_region_price_dataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: product_region_price_dataInclude | null
    /**
     * Filter, which product_region_price_data to fetch.
     * 
    **/
    where?: product_region_price_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_region_price_data to fetch.
     * 
    **/
    orderBy?: Enumerable<product_region_price_dataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing product_region_price_data.
     * 
    **/
    cursor?: product_region_price_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_region_price_data from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_region_price_data.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Product_region_price_dataScalarFieldEnum>
  }


  /**
   * product_region_price_data create
   */
  export type product_region_price_dataCreateArgs = {
    /**
     * Select specific fields to fetch from the product_region_price_data
     * 
    **/
    select?: product_region_price_dataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: product_region_price_dataInclude | null
    /**
     * The data needed to create a product_region_price_data.
     * 
    **/
    data: XOR<product_region_price_dataCreateInput, product_region_price_dataUncheckedCreateInput>
  }


  /**
   * product_region_price_data createMany
   */
  export type product_region_price_dataCreateManyArgs = {
    data: Enumerable<product_region_price_dataCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * product_region_price_data update
   */
  export type product_region_price_dataUpdateArgs = {
    /**
     * Select specific fields to fetch from the product_region_price_data
     * 
    **/
    select?: product_region_price_dataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: product_region_price_dataInclude | null
    /**
     * The data needed to update a product_region_price_data.
     * 
    **/
    data: XOR<product_region_price_dataUpdateInput, product_region_price_dataUncheckedUpdateInput>
    /**
     * Choose, which product_region_price_data to update.
     * 
    **/
    where: product_region_price_dataWhereUniqueInput
  }


  /**
   * product_region_price_data updateMany
   */
  export type product_region_price_dataUpdateManyArgs = {
    data: XOR<product_region_price_dataUpdateManyMutationInput, product_region_price_dataUncheckedUpdateManyInput>
    where?: product_region_price_dataWhereInput
  }


  /**
   * product_region_price_data upsert
   */
  export type product_region_price_dataUpsertArgs = {
    /**
     * Select specific fields to fetch from the product_region_price_data
     * 
    **/
    select?: product_region_price_dataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: product_region_price_dataInclude | null
    /**
     * The filter to search for the product_region_price_data to update in case it exists.
     * 
    **/
    where: product_region_price_dataWhereUniqueInput
    /**
     * In case the product_region_price_data found by the `where` argument doesn't exist, create a new product_region_price_data with this data.
     * 
    **/
    create: XOR<product_region_price_dataCreateInput, product_region_price_dataUncheckedCreateInput>
    /**
     * In case the product_region_price_data was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<product_region_price_dataUpdateInput, product_region_price_dataUncheckedUpdateInput>
  }


  /**
   * product_region_price_data delete
   */
  export type product_region_price_dataDeleteArgs = {
    /**
     * Select specific fields to fetch from the product_region_price_data
     * 
    **/
    select?: product_region_price_dataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: product_region_price_dataInclude | null
    /**
     * Filter which product_region_price_data to delete.
     * 
    **/
    where: product_region_price_dataWhereUniqueInput
  }


  /**
   * product_region_price_data deleteMany
   */
  export type product_region_price_dataDeleteManyArgs = {
    where?: product_region_price_dataWhereInput
  }


  /**
   * product_region_price_data without action
   */
  export type product_region_price_dataArgs = {
    /**
     * Select specific fields to fetch from the product_region_price_data
     * 
    **/
    select?: product_region_price_dataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: product_region_price_dataInclude | null
  }



  /**
   * Model products
   */


  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    id: number | null
    package_quantity: number | null
    package_weight: number | null
    weight_unit_id: number | null
  }

  export type ProductsSumAggregateOutputType = {
    id: number | null
    package_quantity: number | null
    package_weight: number | null
    weight_unit_id: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id: number | null
    sku: string | null
    name: string | null
    package_quantity: number | null
    package_units: string | null
    package_weight: number | null
    weight_unit_id: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: number | null
    sku: string | null
    name: string | null
    package_quantity: number | null
    package_units: string | null
    package_weight: number | null
    weight_unit_id: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    sku: number
    name: number
    package_quantity: number
    package_units: number
    package_weight: number
    weight_unit_id: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    id?: true
    package_quantity?: true
    package_weight?: true
    weight_unit_id?: true
  }

  export type ProductsSumAggregateInputType = {
    id?: true
    package_quantity?: true
    package_weight?: true
    weight_unit_id?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    sku?: true
    name?: true
    package_quantity?: true
    package_units?: true
    package_weight?: true
    weight_unit_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    sku?: true
    name?: true
    package_quantity?: true
    package_units?: true
    package_weight?: true
    weight_unit_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    sku?: true
    name?: true
    package_quantity?: true
    package_units?: true
    package_weight?: true
    weight_unit_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type ProductsAggregateArgs = {
    /**
     * Filter which products to aggregate.
     * 
    **/
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     * 
    **/
    orderBy?: Enumerable<productsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }


    
    
  export type ProductsGroupByArgs = {
    where?: productsWhereInput
    orderBy?: Enumerable<productsOrderByWithAggregationInput>
    by: Array<ProductsScalarFieldEnum>
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }


  export type ProductsGroupByOutputType = {
    id: number
    sku: string | null
    name: string | null
    package_quantity: number | null
    package_units: string | null
    package_weight: number | null
    weight_unit_id: number
    created_at: Date
    updated_at: Date | null
    deleted_at: Date | null
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends ProductsGroupByArgs> = Promise<
    Array<
      PickArray<ProductsGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], ProductsGroupByOutputType[P]> 
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      > 
    >


  export type productsSelect = {
    id?: boolean
    sku?: boolean
    name?: boolean
    package_quantity?: boolean
    package_units?: boolean
    package_weight?: boolean
    weight_unit_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    units?: boolean | unitsArgs
    price_recommendations?: boolean | price_recommendationsFindManyArgs
    product_region_competitor_urls?: boolean | product_region_competitor_urlsFindManyArgs
    product_region_price_data?: boolean | product_region_price_dataFindManyArgs
    scaled_prices?: boolean | scaled_pricesFindManyArgs
    _count?: boolean | ProductsCountOutputTypeArgs
  }

  export type productsInclude = {
    units?: boolean | unitsArgs
    price_recommendations?: boolean | price_recommendationsFindManyArgs
    product_region_competitor_urls?: boolean | product_region_competitor_urlsFindManyArgs
    product_region_price_data?: boolean | product_region_price_dataFindManyArgs
    scaled_prices?: boolean | scaled_pricesFindManyArgs
    _count?: boolean | ProductsCountOutputTypeArgs
  }

  export type productsGetPayload<
    S extends boolean | null | undefined | productsArgs,
    U = keyof S
      > = S extends true
        ? products
    : S extends undefined
    ? never
    : S extends productsArgs | productsFindManyArgs
    ?'include' extends U
    ? products  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'units'
        ? unitsGetPayload<S['include'][P]> :
        P extends 'price_recommendations'
        ? Array < price_recommendationsGetPayload<S['include'][P]>>  :
        P extends 'product_region_competitor_urls'
        ? Array < product_region_competitor_urlsGetPayload<S['include'][P]>>  :
        P extends 'product_region_price_data'
        ? Array < product_region_price_dataGetPayload<S['include'][P]>>  :
        P extends 'scaled_prices'
        ? Array < scaled_pricesGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? ProductsCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof products ?products [P]
  : 
          P extends 'units'
        ? unitsGetPayload<S['select'][P]> :
        P extends 'price_recommendations'
        ? Array < price_recommendationsGetPayload<S['select'][P]>>  :
        P extends 'product_region_competitor_urls'
        ? Array < product_region_competitor_urlsGetPayload<S['select'][P]>>  :
        P extends 'product_region_price_data'
        ? Array < product_region_price_dataGetPayload<S['select'][P]>>  :
        P extends 'scaled_prices'
        ? Array < scaled_pricesGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? ProductsCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : products
  : products


  type productsCountArgs = Merge<
    Omit<productsFindManyArgs, 'select' | 'include'> & {
      select?: ProductsCountAggregateInputType | true
    }
  >

  export interface productsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends productsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, productsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'products'> extends True ? CheckSelect<T, Prisma__productsClient<products>, Prisma__productsClient<productsGetPayload<T>>> : CheckSelect<T, Prisma__productsClient<products | null >, Prisma__productsClient<productsGetPayload<T> | null >>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends productsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, productsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'products'> extends True ? CheckSelect<T, Prisma__productsClient<products>, Prisma__productsClient<productsGetPayload<T>>> : CheckSelect<T, Prisma__productsClient<products | null >, Prisma__productsClient<productsGetPayload<T> | null >>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends productsFindManyArgs>(
      args?: SelectSubset<T, productsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<products>>, PrismaPromise<Array<productsGetPayload<T>>>>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
    **/
    create<T extends productsCreateArgs>(
      args: SelectSubset<T, productsCreateArgs>
    ): CheckSelect<T, Prisma__productsClient<products>, Prisma__productsClient<productsGetPayload<T>>>

    /**
     * Create many Products.
     *     @param {productsCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const products = await prisma.products.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends productsCreateManyArgs>(
      args?: SelectSubset<T, productsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
    **/
    delete<T extends productsDeleteArgs>(
      args: SelectSubset<T, productsDeleteArgs>
    ): CheckSelect<T, Prisma__productsClient<products>, Prisma__productsClient<productsGetPayload<T>>>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends productsUpdateArgs>(
      args: SelectSubset<T, productsUpdateArgs>
    ): CheckSelect<T, Prisma__productsClient<products>, Prisma__productsClient<productsGetPayload<T>>>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends productsDeleteManyArgs>(
      args?: SelectSubset<T, productsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends productsUpdateManyArgs>(
      args: SelectSubset<T, productsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
    **/
    upsert<T extends productsUpsertArgs>(
      args: SelectSubset<T, productsUpsertArgs>
    ): CheckSelect<T, Prisma__productsClient<products>, Prisma__productsClient<productsGetPayload<T>>>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsGroupByArgs['orderBy'] }
        : { orderBy?: ProductsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__productsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    units<T extends unitsArgs = {}>(args?: Subset<T, unitsArgs>): CheckSelect<T, Prisma__unitsClient<units | null >, Prisma__unitsClient<unitsGetPayload<T> | null >>;

    price_recommendations<T extends price_recommendationsFindManyArgs = {}>(args?: Subset<T, price_recommendationsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<price_recommendations>>, PrismaPromise<Array<price_recommendationsGetPayload<T>>>>;

    product_region_competitor_urls<T extends product_region_competitor_urlsFindManyArgs = {}>(args?: Subset<T, product_region_competitor_urlsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<product_region_competitor_urls>>, PrismaPromise<Array<product_region_competitor_urlsGetPayload<T>>>>;

    product_region_price_data<T extends product_region_price_dataFindManyArgs = {}>(args?: Subset<T, product_region_price_dataFindManyArgs>): CheckSelect<T, PrismaPromise<Array<product_region_price_data>>, PrismaPromise<Array<product_region_price_dataGetPayload<T>>>>;

    scaled_prices<T extends scaled_pricesFindManyArgs = {}>(args?: Subset<T, scaled_pricesFindManyArgs>): CheckSelect<T, PrismaPromise<Array<scaled_prices>>, PrismaPromise<Array<scaled_pricesGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * products findUnique
   */
  export type productsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the products
     * 
    **/
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: productsInclude | null
    /**
     * Throw an Error if a products can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which products to fetch.
     * 
    **/
    where: productsWhereUniqueInput
  }


  /**
   * products findFirst
   */
  export type productsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the products
     * 
    **/
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: productsInclude | null
    /**
     * Throw an Error if a products can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which products to fetch.
     * 
    **/
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     * 
    **/
    orderBy?: Enumerable<productsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     * 
    **/
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     * 
    **/
    distinct?: Enumerable<ProductsScalarFieldEnum>
  }


  /**
   * products findMany
   */
  export type productsFindManyArgs = {
    /**
     * Select specific fields to fetch from the products
     * 
    **/
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: productsInclude | null
    /**
     * Filter, which products to fetch.
     * 
    **/
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     * 
    **/
    orderBy?: Enumerable<productsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     * 
    **/
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProductsScalarFieldEnum>
  }


  /**
   * products create
   */
  export type productsCreateArgs = {
    /**
     * Select specific fields to fetch from the products
     * 
    **/
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: productsInclude | null
    /**
     * The data needed to create a products.
     * 
    **/
    data: XOR<productsCreateInput, productsUncheckedCreateInput>
  }


  /**
   * products createMany
   */
  export type productsCreateManyArgs = {
    data: Enumerable<productsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * products update
   */
  export type productsUpdateArgs = {
    /**
     * Select specific fields to fetch from the products
     * 
    **/
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: productsInclude | null
    /**
     * The data needed to update a products.
     * 
    **/
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     * 
    **/
    where: productsWhereUniqueInput
  }


  /**
   * products updateMany
   */
  export type productsUpdateManyArgs = {
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    where?: productsWhereInput
  }


  /**
   * products upsert
   */
  export type productsUpsertArgs = {
    /**
     * Select specific fields to fetch from the products
     * 
    **/
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: productsInclude | null
    /**
     * The filter to search for the products to update in case it exists.
     * 
    **/
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     * 
    **/
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }


  /**
   * products delete
   */
  export type productsDeleteArgs = {
    /**
     * Select specific fields to fetch from the products
     * 
    **/
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: productsInclude | null
    /**
     * Filter which products to delete.
     * 
    **/
    where: productsWhereUniqueInput
  }


  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs = {
    where?: productsWhereInput
  }


  /**
   * products without action
   */
  export type productsArgs = {
    /**
     * Select specific fields to fetch from the products
     * 
    **/
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: productsInclude | null
  }



  /**
   * Model regions
   */


  export type AggregateRegions = {
    _count: RegionsCountAggregateOutputType | null
    _avg: RegionsAvgAggregateOutputType | null
    _sum: RegionsSumAggregateOutputType | null
    _min: RegionsMinAggregateOutputType | null
    _max: RegionsMaxAggregateOutputType | null
  }

  export type RegionsAvgAggregateOutputType = {
    id: number | null
  }

  export type RegionsSumAggregateOutputType = {
    id: number | null
  }

  export type RegionsMinAggregateOutputType = {
    id: number | null
    name: string | null
    facility: string | null
    city: string | null
    province: string | null
    postal_code: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type RegionsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    facility: string | null
    city: string | null
    province: string | null
    postal_code: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type RegionsCountAggregateOutputType = {
    id: number
    name: number
    facility: number
    city: number
    province: number
    postal_code: number
    is_active: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type RegionsAvgAggregateInputType = {
    id?: true
  }

  export type RegionsSumAggregateInputType = {
    id?: true
  }

  export type RegionsMinAggregateInputType = {
    id?: true
    name?: true
    facility?: true
    city?: true
    province?: true
    postal_code?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type RegionsMaxAggregateInputType = {
    id?: true
    name?: true
    facility?: true
    city?: true
    province?: true
    postal_code?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type RegionsCountAggregateInputType = {
    id?: true
    name?: true
    facility?: true
    city?: true
    province?: true
    postal_code?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type RegionsAggregateArgs = {
    /**
     * Filter which regions to aggregate.
     * 
    **/
    where?: regionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of regions to fetch.
     * 
    **/
    orderBy?: Enumerable<regionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: regionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` regions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` regions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned regions
    **/
    _count?: true | RegionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegionsMaxAggregateInputType
  }

  export type GetRegionsAggregateType<T extends RegionsAggregateArgs> = {
        [P in keyof T & keyof AggregateRegions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegions[P]>
      : GetScalarType<T[P], AggregateRegions[P]>
  }


    
    
  export type RegionsGroupByArgs = {
    where?: regionsWhereInput
    orderBy?: Enumerable<regionsOrderByWithAggregationInput>
    by: Array<RegionsScalarFieldEnum>
    having?: regionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegionsCountAggregateInputType | true
    _avg?: RegionsAvgAggregateInputType
    _sum?: RegionsSumAggregateInputType
    _min?: RegionsMinAggregateInputType
    _max?: RegionsMaxAggregateInputType
  }


  export type RegionsGroupByOutputType = {
    id: number
    name: string | null
    facility: string | null
    city: string | null
    province: string | null
    postal_code: string | null
    is_active: boolean | null
    created_at: Date
    updated_at: Date | null
    deleted_at: Date | null
    _count: RegionsCountAggregateOutputType | null
    _avg: RegionsAvgAggregateOutputType | null
    _sum: RegionsSumAggregateOutputType | null
    _min: RegionsMinAggregateOutputType | null
    _max: RegionsMaxAggregateOutputType | null
  }

  type GetRegionsGroupByPayload<T extends RegionsGroupByArgs> = Promise<
    Array<
      PickArray<RegionsGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof RegionsGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], RegionsGroupByOutputType[P]> 
            : GetScalarType<T[P], RegionsGroupByOutputType[P]>
        }
      > 
    >


  export type regionsSelect = {
    id?: boolean
    name?: boolean
    facility?: boolean
    city?: boolean
    province?: boolean
    postal_code?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    baskets?: boolean | basketsFindManyArgs
    price_recommendations?: boolean | price_recommendationsFindManyArgs
    product_region_competitor_urls?: boolean | product_region_competitor_urlsFindManyArgs
    product_region_price_data?: boolean | product_region_price_dataFindManyArgs
    scaled_prices?: boolean | scaled_pricesFindManyArgs
    _count?: boolean | RegionsCountOutputTypeArgs
  }

  export type regionsInclude = {
    baskets?: boolean | basketsFindManyArgs
    price_recommendations?: boolean | price_recommendationsFindManyArgs
    product_region_competitor_urls?: boolean | product_region_competitor_urlsFindManyArgs
    product_region_price_data?: boolean | product_region_price_dataFindManyArgs
    scaled_prices?: boolean | scaled_pricesFindManyArgs
    _count?: boolean | RegionsCountOutputTypeArgs
  }

  export type regionsGetPayload<
    S extends boolean | null | undefined | regionsArgs,
    U = keyof S
      > = S extends true
        ? regions
    : S extends undefined
    ? never
    : S extends regionsArgs | regionsFindManyArgs
    ?'include' extends U
    ? regions  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'baskets'
        ? Array < basketsGetPayload<S['include'][P]>>  :
        P extends 'price_recommendations'
        ? Array < price_recommendationsGetPayload<S['include'][P]>>  :
        P extends 'product_region_competitor_urls'
        ? Array < product_region_competitor_urlsGetPayload<S['include'][P]>>  :
        P extends 'product_region_price_data'
        ? Array < product_region_price_dataGetPayload<S['include'][P]>>  :
        P extends 'scaled_prices'
        ? Array < scaled_pricesGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? RegionsCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof regions ?regions [P]
  : 
          P extends 'baskets'
        ? Array < basketsGetPayload<S['select'][P]>>  :
        P extends 'price_recommendations'
        ? Array < price_recommendationsGetPayload<S['select'][P]>>  :
        P extends 'product_region_competitor_urls'
        ? Array < product_region_competitor_urlsGetPayload<S['select'][P]>>  :
        P extends 'product_region_price_data'
        ? Array < product_region_price_dataGetPayload<S['select'][P]>>  :
        P extends 'scaled_prices'
        ? Array < scaled_pricesGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? RegionsCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : regions
  : regions


  type regionsCountArgs = Merge<
    Omit<regionsFindManyArgs, 'select' | 'include'> & {
      select?: RegionsCountAggregateInputType | true
    }
  >

  export interface regionsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Regions that matches the filter.
     * @param {regionsFindUniqueArgs} args - Arguments to find a Regions
     * @example
     * // Get one Regions
     * const regions = await prisma.regions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends regionsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, regionsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'regions'> extends True ? CheckSelect<T, Prisma__regionsClient<regions>, Prisma__regionsClient<regionsGetPayload<T>>> : CheckSelect<T, Prisma__regionsClient<regions | null >, Prisma__regionsClient<regionsGetPayload<T> | null >>

    /**
     * Find the first Regions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regionsFindFirstArgs} args - Arguments to find a Regions
     * @example
     * // Get one Regions
     * const regions = await prisma.regions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends regionsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, regionsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'regions'> extends True ? CheckSelect<T, Prisma__regionsClient<regions>, Prisma__regionsClient<regionsGetPayload<T>>> : CheckSelect<T, Prisma__regionsClient<regions | null >, Prisma__regionsClient<regionsGetPayload<T> | null >>

    /**
     * Find zero or more Regions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regionsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Regions
     * const regions = await prisma.regions.findMany()
     * 
     * // Get first 10 Regions
     * const regions = await prisma.regions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const regionsWithIdOnly = await prisma.regions.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends regionsFindManyArgs>(
      args?: SelectSubset<T, regionsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<regions>>, PrismaPromise<Array<regionsGetPayload<T>>>>

    /**
     * Create a Regions.
     * @param {regionsCreateArgs} args - Arguments to create a Regions.
     * @example
     * // Create one Regions
     * const Regions = await prisma.regions.create({
     *   data: {
     *     // ... data to create a Regions
     *   }
     * })
     * 
    **/
    create<T extends regionsCreateArgs>(
      args: SelectSubset<T, regionsCreateArgs>
    ): CheckSelect<T, Prisma__regionsClient<regions>, Prisma__regionsClient<regionsGetPayload<T>>>

    /**
     * Create many Regions.
     *     @param {regionsCreateManyArgs} args - Arguments to create many Regions.
     *     @example
     *     // Create many Regions
     *     const regions = await prisma.regions.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends regionsCreateManyArgs>(
      args?: SelectSubset<T, regionsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Regions.
     * @param {regionsDeleteArgs} args - Arguments to delete one Regions.
     * @example
     * // Delete one Regions
     * const Regions = await prisma.regions.delete({
     *   where: {
     *     // ... filter to delete one Regions
     *   }
     * })
     * 
    **/
    delete<T extends regionsDeleteArgs>(
      args: SelectSubset<T, regionsDeleteArgs>
    ): CheckSelect<T, Prisma__regionsClient<regions>, Prisma__regionsClient<regionsGetPayload<T>>>

    /**
     * Update one Regions.
     * @param {regionsUpdateArgs} args - Arguments to update one Regions.
     * @example
     * // Update one Regions
     * const regions = await prisma.regions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends regionsUpdateArgs>(
      args: SelectSubset<T, regionsUpdateArgs>
    ): CheckSelect<T, Prisma__regionsClient<regions>, Prisma__regionsClient<regionsGetPayload<T>>>

    /**
     * Delete zero or more Regions.
     * @param {regionsDeleteManyArgs} args - Arguments to filter Regions to delete.
     * @example
     * // Delete a few Regions
     * const { count } = await prisma.regions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends regionsDeleteManyArgs>(
      args?: SelectSubset<T, regionsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Regions
     * const regions = await prisma.regions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends regionsUpdateManyArgs>(
      args: SelectSubset<T, regionsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Regions.
     * @param {regionsUpsertArgs} args - Arguments to update or create a Regions.
     * @example
     * // Update or create a Regions
     * const regions = await prisma.regions.upsert({
     *   create: {
     *     // ... data to create a Regions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Regions we want to update
     *   }
     * })
    **/
    upsert<T extends regionsUpsertArgs>(
      args: SelectSubset<T, regionsUpsertArgs>
    ): CheckSelect<T, Prisma__regionsClient<regions>, Prisma__regionsClient<regionsGetPayload<T>>>

    /**
     * Count the number of Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regionsCountArgs} args - Arguments to filter Regions to count.
     * @example
     * // Count the number of Regions
     * const count = await prisma.regions.count({
     *   where: {
     *     // ... the filter for the Regions we want to count
     *   }
     * })
    **/
    count<T extends regionsCountArgs>(
      args?: Subset<T, regionsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RegionsAggregateArgs>(args: Subset<T, RegionsAggregateArgs>): PrismaPromise<GetRegionsAggregateType<T>>

    /**
     * Group by Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RegionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegionsGroupByArgs['orderBy'] }
        : { orderBy?: RegionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RegionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegionsGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for regions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__regionsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    baskets<T extends basketsFindManyArgs = {}>(args?: Subset<T, basketsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<baskets>>, PrismaPromise<Array<basketsGetPayload<T>>>>;

    price_recommendations<T extends price_recommendationsFindManyArgs = {}>(args?: Subset<T, price_recommendationsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<price_recommendations>>, PrismaPromise<Array<price_recommendationsGetPayload<T>>>>;

    product_region_competitor_urls<T extends product_region_competitor_urlsFindManyArgs = {}>(args?: Subset<T, product_region_competitor_urlsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<product_region_competitor_urls>>, PrismaPromise<Array<product_region_competitor_urlsGetPayload<T>>>>;

    product_region_price_data<T extends product_region_price_dataFindManyArgs = {}>(args?: Subset<T, product_region_price_dataFindManyArgs>): CheckSelect<T, PrismaPromise<Array<product_region_price_data>>, PrismaPromise<Array<product_region_price_dataGetPayload<T>>>>;

    scaled_prices<T extends scaled_pricesFindManyArgs = {}>(args?: Subset<T, scaled_pricesFindManyArgs>): CheckSelect<T, PrismaPromise<Array<scaled_prices>>, PrismaPromise<Array<scaled_pricesGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * regions findUnique
   */
  export type regionsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the regions
     * 
    **/
    select?: regionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: regionsInclude | null
    /**
     * Throw an Error if a regions can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which regions to fetch.
     * 
    **/
    where: regionsWhereUniqueInput
  }


  /**
   * regions findFirst
   */
  export type regionsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the regions
     * 
    **/
    select?: regionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: regionsInclude | null
    /**
     * Throw an Error if a regions can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which regions to fetch.
     * 
    **/
    where?: regionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of regions to fetch.
     * 
    **/
    orderBy?: Enumerable<regionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for regions.
     * 
    **/
    cursor?: regionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` regions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` regions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of regions.
     * 
    **/
    distinct?: Enumerable<RegionsScalarFieldEnum>
  }


  /**
   * regions findMany
   */
  export type regionsFindManyArgs = {
    /**
     * Select specific fields to fetch from the regions
     * 
    **/
    select?: regionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: regionsInclude | null
    /**
     * Filter, which regions to fetch.
     * 
    **/
    where?: regionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of regions to fetch.
     * 
    **/
    orderBy?: Enumerable<regionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing regions.
     * 
    **/
    cursor?: regionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` regions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` regions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RegionsScalarFieldEnum>
  }


  /**
   * regions create
   */
  export type regionsCreateArgs = {
    /**
     * Select specific fields to fetch from the regions
     * 
    **/
    select?: regionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: regionsInclude | null
    /**
     * The data needed to create a regions.
     * 
    **/
    data: XOR<regionsCreateInput, regionsUncheckedCreateInput>
  }


  /**
   * regions createMany
   */
  export type regionsCreateManyArgs = {
    data: Enumerable<regionsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * regions update
   */
  export type regionsUpdateArgs = {
    /**
     * Select specific fields to fetch from the regions
     * 
    **/
    select?: regionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: regionsInclude | null
    /**
     * The data needed to update a regions.
     * 
    **/
    data: XOR<regionsUpdateInput, regionsUncheckedUpdateInput>
    /**
     * Choose, which regions to update.
     * 
    **/
    where: regionsWhereUniqueInput
  }


  /**
   * regions updateMany
   */
  export type regionsUpdateManyArgs = {
    data: XOR<regionsUpdateManyMutationInput, regionsUncheckedUpdateManyInput>
    where?: regionsWhereInput
  }


  /**
   * regions upsert
   */
  export type regionsUpsertArgs = {
    /**
     * Select specific fields to fetch from the regions
     * 
    **/
    select?: regionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: regionsInclude | null
    /**
     * The filter to search for the regions to update in case it exists.
     * 
    **/
    where: regionsWhereUniqueInput
    /**
     * In case the regions found by the `where` argument doesn't exist, create a new regions with this data.
     * 
    **/
    create: XOR<regionsCreateInput, regionsUncheckedCreateInput>
    /**
     * In case the regions was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<regionsUpdateInput, regionsUncheckedUpdateInput>
  }


  /**
   * regions delete
   */
  export type regionsDeleteArgs = {
    /**
     * Select specific fields to fetch from the regions
     * 
    **/
    select?: regionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: regionsInclude | null
    /**
     * Filter which regions to delete.
     * 
    **/
    where: regionsWhereUniqueInput
  }


  /**
   * regions deleteMany
   */
  export type regionsDeleteManyArgs = {
    where?: regionsWhereInput
  }


  /**
   * regions without action
   */
  export type regionsArgs = {
    /**
     * Select specific fields to fetch from the regions
     * 
    **/
    select?: regionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: regionsInclude | null
  }



  /**
   * Model scaled_prices
   */


  export type AggregateScaled_prices = {
    _count: Scaled_pricesCountAggregateOutputType | null
    _avg: Scaled_pricesAvgAggregateOutputType | null
    _sum: Scaled_pricesSumAggregateOutputType | null
    _min: Scaled_pricesMinAggregateOutputType | null
    _max: Scaled_pricesMaxAggregateOutputType | null
  }

  export type Scaled_pricesAvgAggregateOutputType = {
    id: number | null
    product_id: number | null
    competitor_id: number | null
    region_id: number | null
    scrape_result_id: number | null
    competitor_scaled_price: number | null
  }

  export type Scaled_pricesSumAggregateOutputType = {
    id: number | null
    product_id: number | null
    competitor_id: number | null
    region_id: number | null
    scrape_result_id: number | null
    competitor_scaled_price: number | null
  }

  export type Scaled_pricesMinAggregateOutputType = {
    id: number | null
    product_id: number | null
    competitor_id: number | null
    region_id: number | null
    scrape_result_id: number | null
    competitor_scaled_price: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Scaled_pricesMaxAggregateOutputType = {
    id: number | null
    product_id: number | null
    competitor_id: number | null
    region_id: number | null
    scrape_result_id: number | null
    competitor_scaled_price: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Scaled_pricesCountAggregateOutputType = {
    id: number
    product_id: number
    competitor_id: number
    region_id: number
    scrape_result_id: number
    competitor_scaled_price: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type Scaled_pricesAvgAggregateInputType = {
    id?: true
    product_id?: true
    competitor_id?: true
    region_id?: true
    scrape_result_id?: true
    competitor_scaled_price?: true
  }

  export type Scaled_pricesSumAggregateInputType = {
    id?: true
    product_id?: true
    competitor_id?: true
    region_id?: true
    scrape_result_id?: true
    competitor_scaled_price?: true
  }

  export type Scaled_pricesMinAggregateInputType = {
    id?: true
    product_id?: true
    competitor_id?: true
    region_id?: true
    scrape_result_id?: true
    competitor_scaled_price?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Scaled_pricesMaxAggregateInputType = {
    id?: true
    product_id?: true
    competitor_id?: true
    region_id?: true
    scrape_result_id?: true
    competitor_scaled_price?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Scaled_pricesCountAggregateInputType = {
    id?: true
    product_id?: true
    competitor_id?: true
    region_id?: true
    scrape_result_id?: true
    competitor_scaled_price?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type Scaled_pricesAggregateArgs = {
    /**
     * Filter which scaled_prices to aggregate.
     * 
    **/
    where?: scaled_pricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of scaled_prices to fetch.
     * 
    **/
    orderBy?: Enumerable<scaled_pricesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: scaled_pricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` scaled_prices from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` scaled_prices.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned scaled_prices
    **/
    _count?: true | Scaled_pricesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Scaled_pricesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Scaled_pricesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Scaled_pricesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Scaled_pricesMaxAggregateInputType
  }

  export type GetScaled_pricesAggregateType<T extends Scaled_pricesAggregateArgs> = {
        [P in keyof T & keyof AggregateScaled_prices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScaled_prices[P]>
      : GetScalarType<T[P], AggregateScaled_prices[P]>
  }


    
    
  export type Scaled_pricesGroupByArgs = {
    where?: scaled_pricesWhereInput
    orderBy?: Enumerable<scaled_pricesOrderByWithAggregationInput>
    by: Array<Scaled_pricesScalarFieldEnum>
    having?: scaled_pricesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Scaled_pricesCountAggregateInputType | true
    _avg?: Scaled_pricesAvgAggregateInputType
    _sum?: Scaled_pricesSumAggregateInputType
    _min?: Scaled_pricesMinAggregateInputType
    _max?: Scaled_pricesMaxAggregateInputType
  }


  export type Scaled_pricesGroupByOutputType = {
    id: number
    product_id: number
    competitor_id: number
    region_id: number
    scrape_result_id: number
    competitor_scaled_price: number | null
    created_at: Date
    updated_at: Date | null
    deleted_at: Date | null
    _count: Scaled_pricesCountAggregateOutputType | null
    _avg: Scaled_pricesAvgAggregateOutputType | null
    _sum: Scaled_pricesSumAggregateOutputType | null
    _min: Scaled_pricesMinAggregateOutputType | null
    _max: Scaled_pricesMaxAggregateOutputType | null
  }

  type GetScaled_pricesGroupByPayload<T extends Scaled_pricesGroupByArgs> = Promise<
    Array<
      PickArray<Scaled_pricesGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof Scaled_pricesGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], Scaled_pricesGroupByOutputType[P]> 
            : GetScalarType<T[P], Scaled_pricesGroupByOutputType[P]>
        }
      > 
    >


  export type scaled_pricesSelect = {
    id?: boolean
    product_id?: boolean
    competitor_id?: boolean
    region_id?: boolean
    scrape_result_id?: boolean
    competitor_scaled_price?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    competitors?: boolean | competitorsArgs
    products?: boolean | productsArgs
    regions?: boolean | regionsArgs
    scrape_results?: boolean | scrape_resultsArgs
  }

  export type scaled_pricesInclude = {
    competitors?: boolean | competitorsArgs
    products?: boolean | productsArgs
    regions?: boolean | regionsArgs
    scrape_results?: boolean | scrape_resultsArgs
  }

  export type scaled_pricesGetPayload<
    S extends boolean | null | undefined | scaled_pricesArgs,
    U = keyof S
      > = S extends true
        ? scaled_prices
    : S extends undefined
    ? never
    : S extends scaled_pricesArgs | scaled_pricesFindManyArgs
    ?'include' extends U
    ? scaled_prices  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'competitors'
        ? competitorsGetPayload<S['include'][P]> :
        P extends 'products'
        ? productsGetPayload<S['include'][P]> :
        P extends 'regions'
        ? regionsGetPayload<S['include'][P]> :
        P extends 'scrape_results'
        ? scrape_resultsGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof scaled_prices ?scaled_prices [P]
  : 
          P extends 'competitors'
        ? competitorsGetPayload<S['select'][P]> :
        P extends 'products'
        ? productsGetPayload<S['select'][P]> :
        P extends 'regions'
        ? regionsGetPayload<S['select'][P]> :
        P extends 'scrape_results'
        ? scrape_resultsGetPayload<S['select'][P]> : never
  } 
    : scaled_prices
  : scaled_prices


  type scaled_pricesCountArgs = Merge<
    Omit<scaled_pricesFindManyArgs, 'select' | 'include'> & {
      select?: Scaled_pricesCountAggregateInputType | true
    }
  >

  export interface scaled_pricesDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Scaled_prices that matches the filter.
     * @param {scaled_pricesFindUniqueArgs} args - Arguments to find a Scaled_prices
     * @example
     * // Get one Scaled_prices
     * const scaled_prices = await prisma.scaled_prices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends scaled_pricesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, scaled_pricesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'scaled_prices'> extends True ? CheckSelect<T, Prisma__scaled_pricesClient<scaled_prices>, Prisma__scaled_pricesClient<scaled_pricesGetPayload<T>>> : CheckSelect<T, Prisma__scaled_pricesClient<scaled_prices | null >, Prisma__scaled_pricesClient<scaled_pricesGetPayload<T> | null >>

    /**
     * Find the first Scaled_prices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scaled_pricesFindFirstArgs} args - Arguments to find a Scaled_prices
     * @example
     * // Get one Scaled_prices
     * const scaled_prices = await prisma.scaled_prices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends scaled_pricesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, scaled_pricesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'scaled_prices'> extends True ? CheckSelect<T, Prisma__scaled_pricesClient<scaled_prices>, Prisma__scaled_pricesClient<scaled_pricesGetPayload<T>>> : CheckSelect<T, Prisma__scaled_pricesClient<scaled_prices | null >, Prisma__scaled_pricesClient<scaled_pricesGetPayload<T> | null >>

    /**
     * Find zero or more Scaled_prices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scaled_pricesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scaled_prices
     * const scaled_prices = await prisma.scaled_prices.findMany()
     * 
     * // Get first 10 Scaled_prices
     * const scaled_prices = await prisma.scaled_prices.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scaled_pricesWithIdOnly = await prisma.scaled_prices.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends scaled_pricesFindManyArgs>(
      args?: SelectSubset<T, scaled_pricesFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<scaled_prices>>, PrismaPromise<Array<scaled_pricesGetPayload<T>>>>

    /**
     * Create a Scaled_prices.
     * @param {scaled_pricesCreateArgs} args - Arguments to create a Scaled_prices.
     * @example
     * // Create one Scaled_prices
     * const Scaled_prices = await prisma.scaled_prices.create({
     *   data: {
     *     // ... data to create a Scaled_prices
     *   }
     * })
     * 
    **/
    create<T extends scaled_pricesCreateArgs>(
      args: SelectSubset<T, scaled_pricesCreateArgs>
    ): CheckSelect<T, Prisma__scaled_pricesClient<scaled_prices>, Prisma__scaled_pricesClient<scaled_pricesGetPayload<T>>>

    /**
     * Create many Scaled_prices.
     *     @param {scaled_pricesCreateManyArgs} args - Arguments to create many Scaled_prices.
     *     @example
     *     // Create many Scaled_prices
     *     const scaled_prices = await prisma.scaled_prices.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends scaled_pricesCreateManyArgs>(
      args?: SelectSubset<T, scaled_pricesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Scaled_prices.
     * @param {scaled_pricesDeleteArgs} args - Arguments to delete one Scaled_prices.
     * @example
     * // Delete one Scaled_prices
     * const Scaled_prices = await prisma.scaled_prices.delete({
     *   where: {
     *     // ... filter to delete one Scaled_prices
     *   }
     * })
     * 
    **/
    delete<T extends scaled_pricesDeleteArgs>(
      args: SelectSubset<T, scaled_pricesDeleteArgs>
    ): CheckSelect<T, Prisma__scaled_pricesClient<scaled_prices>, Prisma__scaled_pricesClient<scaled_pricesGetPayload<T>>>

    /**
     * Update one Scaled_prices.
     * @param {scaled_pricesUpdateArgs} args - Arguments to update one Scaled_prices.
     * @example
     * // Update one Scaled_prices
     * const scaled_prices = await prisma.scaled_prices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends scaled_pricesUpdateArgs>(
      args: SelectSubset<T, scaled_pricesUpdateArgs>
    ): CheckSelect<T, Prisma__scaled_pricesClient<scaled_prices>, Prisma__scaled_pricesClient<scaled_pricesGetPayload<T>>>

    /**
     * Delete zero or more Scaled_prices.
     * @param {scaled_pricesDeleteManyArgs} args - Arguments to filter Scaled_prices to delete.
     * @example
     * // Delete a few Scaled_prices
     * const { count } = await prisma.scaled_prices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends scaled_pricesDeleteManyArgs>(
      args?: SelectSubset<T, scaled_pricesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scaled_prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scaled_pricesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scaled_prices
     * const scaled_prices = await prisma.scaled_prices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends scaled_pricesUpdateManyArgs>(
      args: SelectSubset<T, scaled_pricesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Scaled_prices.
     * @param {scaled_pricesUpsertArgs} args - Arguments to update or create a Scaled_prices.
     * @example
     * // Update or create a Scaled_prices
     * const scaled_prices = await prisma.scaled_prices.upsert({
     *   create: {
     *     // ... data to create a Scaled_prices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Scaled_prices we want to update
     *   }
     * })
    **/
    upsert<T extends scaled_pricesUpsertArgs>(
      args: SelectSubset<T, scaled_pricesUpsertArgs>
    ): CheckSelect<T, Prisma__scaled_pricesClient<scaled_prices>, Prisma__scaled_pricesClient<scaled_pricesGetPayload<T>>>

    /**
     * Count the number of Scaled_prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scaled_pricesCountArgs} args - Arguments to filter Scaled_prices to count.
     * @example
     * // Count the number of Scaled_prices
     * const count = await prisma.scaled_prices.count({
     *   where: {
     *     // ... the filter for the Scaled_prices we want to count
     *   }
     * })
    **/
    count<T extends scaled_pricesCountArgs>(
      args?: Subset<T, scaled_pricesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Scaled_pricesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Scaled_prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Scaled_pricesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Scaled_pricesAggregateArgs>(args: Subset<T, Scaled_pricesAggregateArgs>): PrismaPromise<GetScaled_pricesAggregateType<T>>

    /**
     * Group by Scaled_prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Scaled_pricesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Scaled_pricesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Scaled_pricesGroupByArgs['orderBy'] }
        : { orderBy?: Scaled_pricesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Scaled_pricesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScaled_pricesGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for scaled_prices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__scaled_pricesClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    competitors<T extends competitorsArgs = {}>(args?: Subset<T, competitorsArgs>): CheckSelect<T, Prisma__competitorsClient<competitors | null >, Prisma__competitorsClient<competitorsGetPayload<T> | null >>;

    products<T extends productsArgs = {}>(args?: Subset<T, productsArgs>): CheckSelect<T, Prisma__productsClient<products | null >, Prisma__productsClient<productsGetPayload<T> | null >>;

    regions<T extends regionsArgs = {}>(args?: Subset<T, regionsArgs>): CheckSelect<T, Prisma__regionsClient<regions | null >, Prisma__regionsClient<regionsGetPayload<T> | null >>;

    scrape_results<T extends scrape_resultsArgs = {}>(args?: Subset<T, scrape_resultsArgs>): CheckSelect<T, Prisma__scrape_resultsClient<scrape_results | null >, Prisma__scrape_resultsClient<scrape_resultsGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * scaled_prices findUnique
   */
  export type scaled_pricesFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the scaled_prices
     * 
    **/
    select?: scaled_pricesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: scaled_pricesInclude | null
    /**
     * Throw an Error if a scaled_prices can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which scaled_prices to fetch.
     * 
    **/
    where: scaled_pricesWhereUniqueInput
  }


  /**
   * scaled_prices findFirst
   */
  export type scaled_pricesFindFirstArgs = {
    /**
     * Select specific fields to fetch from the scaled_prices
     * 
    **/
    select?: scaled_pricesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: scaled_pricesInclude | null
    /**
     * Throw an Error if a scaled_prices can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which scaled_prices to fetch.
     * 
    **/
    where?: scaled_pricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of scaled_prices to fetch.
     * 
    **/
    orderBy?: Enumerable<scaled_pricesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for scaled_prices.
     * 
    **/
    cursor?: scaled_pricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` scaled_prices from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` scaled_prices.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of scaled_prices.
     * 
    **/
    distinct?: Enumerable<Scaled_pricesScalarFieldEnum>
  }


  /**
   * scaled_prices findMany
   */
  export type scaled_pricesFindManyArgs = {
    /**
     * Select specific fields to fetch from the scaled_prices
     * 
    **/
    select?: scaled_pricesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: scaled_pricesInclude | null
    /**
     * Filter, which scaled_prices to fetch.
     * 
    **/
    where?: scaled_pricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of scaled_prices to fetch.
     * 
    **/
    orderBy?: Enumerable<scaled_pricesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing scaled_prices.
     * 
    **/
    cursor?: scaled_pricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` scaled_prices from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` scaled_prices.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Scaled_pricesScalarFieldEnum>
  }


  /**
   * scaled_prices create
   */
  export type scaled_pricesCreateArgs = {
    /**
     * Select specific fields to fetch from the scaled_prices
     * 
    **/
    select?: scaled_pricesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: scaled_pricesInclude | null
    /**
     * The data needed to create a scaled_prices.
     * 
    **/
    data: XOR<scaled_pricesCreateInput, scaled_pricesUncheckedCreateInput>
  }


  /**
   * scaled_prices createMany
   */
  export type scaled_pricesCreateManyArgs = {
    data: Enumerable<scaled_pricesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * scaled_prices update
   */
  export type scaled_pricesUpdateArgs = {
    /**
     * Select specific fields to fetch from the scaled_prices
     * 
    **/
    select?: scaled_pricesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: scaled_pricesInclude | null
    /**
     * The data needed to update a scaled_prices.
     * 
    **/
    data: XOR<scaled_pricesUpdateInput, scaled_pricesUncheckedUpdateInput>
    /**
     * Choose, which scaled_prices to update.
     * 
    **/
    where: scaled_pricesWhereUniqueInput
  }


  /**
   * scaled_prices updateMany
   */
  export type scaled_pricesUpdateManyArgs = {
    data: XOR<scaled_pricesUpdateManyMutationInput, scaled_pricesUncheckedUpdateManyInput>
    where?: scaled_pricesWhereInput
  }


  /**
   * scaled_prices upsert
   */
  export type scaled_pricesUpsertArgs = {
    /**
     * Select specific fields to fetch from the scaled_prices
     * 
    **/
    select?: scaled_pricesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: scaled_pricesInclude | null
    /**
     * The filter to search for the scaled_prices to update in case it exists.
     * 
    **/
    where: scaled_pricesWhereUniqueInput
    /**
     * In case the scaled_prices found by the `where` argument doesn't exist, create a new scaled_prices with this data.
     * 
    **/
    create: XOR<scaled_pricesCreateInput, scaled_pricesUncheckedCreateInput>
    /**
     * In case the scaled_prices was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<scaled_pricesUpdateInput, scaled_pricesUncheckedUpdateInput>
  }


  /**
   * scaled_prices delete
   */
  export type scaled_pricesDeleteArgs = {
    /**
     * Select specific fields to fetch from the scaled_prices
     * 
    **/
    select?: scaled_pricesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: scaled_pricesInclude | null
    /**
     * Filter which scaled_prices to delete.
     * 
    **/
    where: scaled_pricesWhereUniqueInput
  }


  /**
   * scaled_prices deleteMany
   */
  export type scaled_pricesDeleteManyArgs = {
    where?: scaled_pricesWhereInput
  }


  /**
   * scaled_prices without action
   */
  export type scaled_pricesArgs = {
    /**
     * Select specific fields to fetch from the scaled_prices
     * 
    **/
    select?: scaled_pricesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: scaled_pricesInclude | null
  }



  /**
   * Model scrape_results
   */


  export type AggregateScrape_results = {
    _count: Scrape_resultsCountAggregateOutputType | null
    _avg: Scrape_resultsAvgAggregateOutputType | null
    _sum: Scrape_resultsSumAggregateOutputType | null
    _min: Scrape_resultsMinAggregateOutputType | null
    _max: Scrape_resultsMaxAggregateOutputType | null
  }

  export type Scrape_resultsAvgAggregateOutputType = {
    id: number | null
    competitor_sale_price: number | null
    competitor_list_price: number | null
    competitor_sold_by_volume: number | null
    competitor_sold_by_unit_id: number | null
  }

  export type Scrape_resultsSumAggregateOutputType = {
    id: number | null
    competitor_sale_price: number | null
    competitor_list_price: number | null
    competitor_sold_by_volume: number | null
    competitor_sold_by_unit_id: number | null
  }

  export type Scrape_resultsMinAggregateOutputType = {
    id: number | null
    competitor_sale_price: number | null
    competitor_list_price: number | null
    competitor_sold_by_volume: number | null
    competitor_sold_by_unit_id: number | null
    promotional_info: string | null
    data_source: string | null
    scrape_time: Date | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Scrape_resultsMaxAggregateOutputType = {
    id: number | null
    competitor_sale_price: number | null
    competitor_list_price: number | null
    competitor_sold_by_volume: number | null
    competitor_sold_by_unit_id: number | null
    promotional_info: string | null
    data_source: string | null
    scrape_time: Date | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Scrape_resultsCountAggregateOutputType = {
    id: number
    competitor_sale_price: number
    competitor_list_price: number
    competitor_sold_by_volume: number
    competitor_sold_by_unit_id: number
    promotional_info: number
    data_source: number
    scrape_time: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type Scrape_resultsAvgAggregateInputType = {
    id?: true
    competitor_sale_price?: true
    competitor_list_price?: true
    competitor_sold_by_volume?: true
    competitor_sold_by_unit_id?: true
  }

  export type Scrape_resultsSumAggregateInputType = {
    id?: true
    competitor_sale_price?: true
    competitor_list_price?: true
    competitor_sold_by_volume?: true
    competitor_sold_by_unit_id?: true
  }

  export type Scrape_resultsMinAggregateInputType = {
    id?: true
    competitor_sale_price?: true
    competitor_list_price?: true
    competitor_sold_by_volume?: true
    competitor_sold_by_unit_id?: true
    promotional_info?: true
    data_source?: true
    scrape_time?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Scrape_resultsMaxAggregateInputType = {
    id?: true
    competitor_sale_price?: true
    competitor_list_price?: true
    competitor_sold_by_volume?: true
    competitor_sold_by_unit_id?: true
    promotional_info?: true
    data_source?: true
    scrape_time?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Scrape_resultsCountAggregateInputType = {
    id?: true
    competitor_sale_price?: true
    competitor_list_price?: true
    competitor_sold_by_volume?: true
    competitor_sold_by_unit_id?: true
    promotional_info?: true
    data_source?: true
    scrape_time?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type Scrape_resultsAggregateArgs = {
    /**
     * Filter which scrape_results to aggregate.
     * 
    **/
    where?: scrape_resultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of scrape_results to fetch.
     * 
    **/
    orderBy?: Enumerable<scrape_resultsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: scrape_resultsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` scrape_results from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` scrape_results.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned scrape_results
    **/
    _count?: true | Scrape_resultsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Scrape_resultsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Scrape_resultsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Scrape_resultsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Scrape_resultsMaxAggregateInputType
  }

  export type GetScrape_resultsAggregateType<T extends Scrape_resultsAggregateArgs> = {
        [P in keyof T & keyof AggregateScrape_results]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScrape_results[P]>
      : GetScalarType<T[P], AggregateScrape_results[P]>
  }


    
    
  export type Scrape_resultsGroupByArgs = {
    where?: scrape_resultsWhereInput
    orderBy?: Enumerable<scrape_resultsOrderByWithAggregationInput>
    by: Array<Scrape_resultsScalarFieldEnum>
    having?: scrape_resultsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Scrape_resultsCountAggregateInputType | true
    _avg?: Scrape_resultsAvgAggregateInputType
    _sum?: Scrape_resultsSumAggregateInputType
    _min?: Scrape_resultsMinAggregateInputType
    _max?: Scrape_resultsMaxAggregateInputType
  }


  export type Scrape_resultsGroupByOutputType = {
    id: number
    competitor_sale_price: number | null
    competitor_list_price: number | null
    competitor_sold_by_volume: number | null
    competitor_sold_by_unit_id: number
    promotional_info: string | null
    data_source: string | null
    scrape_time: Date | null
    created_at: Date
    updated_at: Date | null
    deleted_at: Date | null
    _count: Scrape_resultsCountAggregateOutputType | null
    _avg: Scrape_resultsAvgAggregateOutputType | null
    _sum: Scrape_resultsSumAggregateOutputType | null
    _min: Scrape_resultsMinAggregateOutputType | null
    _max: Scrape_resultsMaxAggregateOutputType | null
  }

  type GetScrape_resultsGroupByPayload<T extends Scrape_resultsGroupByArgs> = Promise<
    Array<
      PickArray<Scrape_resultsGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof Scrape_resultsGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], Scrape_resultsGroupByOutputType[P]> 
            : GetScalarType<T[P], Scrape_resultsGroupByOutputType[P]>
        }
      > 
    >


  export type scrape_resultsSelect = {
    id?: boolean
    competitor_sale_price?: boolean
    competitor_list_price?: boolean
    competitor_sold_by_volume?: boolean
    competitor_sold_by_unit_id?: boolean
    promotional_info?: boolean
    data_source?: boolean
    scrape_time?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    units?: boolean | unitsArgs
    scaled_prices?: boolean | scaled_pricesFindManyArgs
    _count?: boolean | Scrape_resultsCountOutputTypeArgs
  }

  export type scrape_resultsInclude = {
    units?: boolean | unitsArgs
    scaled_prices?: boolean | scaled_pricesFindManyArgs
    _count?: boolean | Scrape_resultsCountOutputTypeArgs
  }

  export type scrape_resultsGetPayload<
    S extends boolean | null | undefined | scrape_resultsArgs,
    U = keyof S
      > = S extends true
        ? scrape_results
    : S extends undefined
    ? never
    : S extends scrape_resultsArgs | scrape_resultsFindManyArgs
    ?'include' extends U
    ? scrape_results  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'units'
        ? unitsGetPayload<S['include'][P]> :
        P extends 'scaled_prices'
        ? Array < scaled_pricesGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? Scrape_resultsCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof scrape_results ?scrape_results [P]
  : 
          P extends 'units'
        ? unitsGetPayload<S['select'][P]> :
        P extends 'scaled_prices'
        ? Array < scaled_pricesGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? Scrape_resultsCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : scrape_results
  : scrape_results


  type scrape_resultsCountArgs = Merge<
    Omit<scrape_resultsFindManyArgs, 'select' | 'include'> & {
      select?: Scrape_resultsCountAggregateInputType | true
    }
  >

  export interface scrape_resultsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Scrape_results that matches the filter.
     * @param {scrape_resultsFindUniqueArgs} args - Arguments to find a Scrape_results
     * @example
     * // Get one Scrape_results
     * const scrape_results = await prisma.scrape_results.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends scrape_resultsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, scrape_resultsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'scrape_results'> extends True ? CheckSelect<T, Prisma__scrape_resultsClient<scrape_results>, Prisma__scrape_resultsClient<scrape_resultsGetPayload<T>>> : CheckSelect<T, Prisma__scrape_resultsClient<scrape_results | null >, Prisma__scrape_resultsClient<scrape_resultsGetPayload<T> | null >>

    /**
     * Find the first Scrape_results that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scrape_resultsFindFirstArgs} args - Arguments to find a Scrape_results
     * @example
     * // Get one Scrape_results
     * const scrape_results = await prisma.scrape_results.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends scrape_resultsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, scrape_resultsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'scrape_results'> extends True ? CheckSelect<T, Prisma__scrape_resultsClient<scrape_results>, Prisma__scrape_resultsClient<scrape_resultsGetPayload<T>>> : CheckSelect<T, Prisma__scrape_resultsClient<scrape_results | null >, Prisma__scrape_resultsClient<scrape_resultsGetPayload<T> | null >>

    /**
     * Find zero or more Scrape_results that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scrape_resultsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scrape_results
     * const scrape_results = await prisma.scrape_results.findMany()
     * 
     * // Get first 10 Scrape_results
     * const scrape_results = await prisma.scrape_results.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scrape_resultsWithIdOnly = await prisma.scrape_results.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends scrape_resultsFindManyArgs>(
      args?: SelectSubset<T, scrape_resultsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<scrape_results>>, PrismaPromise<Array<scrape_resultsGetPayload<T>>>>

    /**
     * Create a Scrape_results.
     * @param {scrape_resultsCreateArgs} args - Arguments to create a Scrape_results.
     * @example
     * // Create one Scrape_results
     * const Scrape_results = await prisma.scrape_results.create({
     *   data: {
     *     // ... data to create a Scrape_results
     *   }
     * })
     * 
    **/
    create<T extends scrape_resultsCreateArgs>(
      args: SelectSubset<T, scrape_resultsCreateArgs>
    ): CheckSelect<T, Prisma__scrape_resultsClient<scrape_results>, Prisma__scrape_resultsClient<scrape_resultsGetPayload<T>>>

    /**
     * Create many Scrape_results.
     *     @param {scrape_resultsCreateManyArgs} args - Arguments to create many Scrape_results.
     *     @example
     *     // Create many Scrape_results
     *     const scrape_results = await prisma.scrape_results.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends scrape_resultsCreateManyArgs>(
      args?: SelectSubset<T, scrape_resultsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Scrape_results.
     * @param {scrape_resultsDeleteArgs} args - Arguments to delete one Scrape_results.
     * @example
     * // Delete one Scrape_results
     * const Scrape_results = await prisma.scrape_results.delete({
     *   where: {
     *     // ... filter to delete one Scrape_results
     *   }
     * })
     * 
    **/
    delete<T extends scrape_resultsDeleteArgs>(
      args: SelectSubset<T, scrape_resultsDeleteArgs>
    ): CheckSelect<T, Prisma__scrape_resultsClient<scrape_results>, Prisma__scrape_resultsClient<scrape_resultsGetPayload<T>>>

    /**
     * Update one Scrape_results.
     * @param {scrape_resultsUpdateArgs} args - Arguments to update one Scrape_results.
     * @example
     * // Update one Scrape_results
     * const scrape_results = await prisma.scrape_results.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends scrape_resultsUpdateArgs>(
      args: SelectSubset<T, scrape_resultsUpdateArgs>
    ): CheckSelect<T, Prisma__scrape_resultsClient<scrape_results>, Prisma__scrape_resultsClient<scrape_resultsGetPayload<T>>>

    /**
     * Delete zero or more Scrape_results.
     * @param {scrape_resultsDeleteManyArgs} args - Arguments to filter Scrape_results to delete.
     * @example
     * // Delete a few Scrape_results
     * const { count } = await prisma.scrape_results.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends scrape_resultsDeleteManyArgs>(
      args?: SelectSubset<T, scrape_resultsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scrape_results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scrape_resultsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scrape_results
     * const scrape_results = await prisma.scrape_results.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends scrape_resultsUpdateManyArgs>(
      args: SelectSubset<T, scrape_resultsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Scrape_results.
     * @param {scrape_resultsUpsertArgs} args - Arguments to update or create a Scrape_results.
     * @example
     * // Update or create a Scrape_results
     * const scrape_results = await prisma.scrape_results.upsert({
     *   create: {
     *     // ... data to create a Scrape_results
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Scrape_results we want to update
     *   }
     * })
    **/
    upsert<T extends scrape_resultsUpsertArgs>(
      args: SelectSubset<T, scrape_resultsUpsertArgs>
    ): CheckSelect<T, Prisma__scrape_resultsClient<scrape_results>, Prisma__scrape_resultsClient<scrape_resultsGetPayload<T>>>

    /**
     * Count the number of Scrape_results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scrape_resultsCountArgs} args - Arguments to filter Scrape_results to count.
     * @example
     * // Count the number of Scrape_results
     * const count = await prisma.scrape_results.count({
     *   where: {
     *     // ... the filter for the Scrape_results we want to count
     *   }
     * })
    **/
    count<T extends scrape_resultsCountArgs>(
      args?: Subset<T, scrape_resultsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Scrape_resultsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Scrape_results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Scrape_resultsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Scrape_resultsAggregateArgs>(args: Subset<T, Scrape_resultsAggregateArgs>): PrismaPromise<GetScrape_resultsAggregateType<T>>

    /**
     * Group by Scrape_results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Scrape_resultsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Scrape_resultsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Scrape_resultsGroupByArgs['orderBy'] }
        : { orderBy?: Scrape_resultsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Scrape_resultsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScrape_resultsGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for scrape_results.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__scrape_resultsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    units<T extends unitsArgs = {}>(args?: Subset<T, unitsArgs>): CheckSelect<T, Prisma__unitsClient<units | null >, Prisma__unitsClient<unitsGetPayload<T> | null >>;

    scaled_prices<T extends scaled_pricesFindManyArgs = {}>(args?: Subset<T, scaled_pricesFindManyArgs>): CheckSelect<T, PrismaPromise<Array<scaled_prices>>, PrismaPromise<Array<scaled_pricesGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * scrape_results findUnique
   */
  export type scrape_resultsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the scrape_results
     * 
    **/
    select?: scrape_resultsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: scrape_resultsInclude | null
    /**
     * Throw an Error if a scrape_results can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which scrape_results to fetch.
     * 
    **/
    where: scrape_resultsWhereUniqueInput
  }


  /**
   * scrape_results findFirst
   */
  export type scrape_resultsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the scrape_results
     * 
    **/
    select?: scrape_resultsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: scrape_resultsInclude | null
    /**
     * Throw an Error if a scrape_results can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which scrape_results to fetch.
     * 
    **/
    where?: scrape_resultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of scrape_results to fetch.
     * 
    **/
    orderBy?: Enumerable<scrape_resultsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for scrape_results.
     * 
    **/
    cursor?: scrape_resultsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` scrape_results from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` scrape_results.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of scrape_results.
     * 
    **/
    distinct?: Enumerable<Scrape_resultsScalarFieldEnum>
  }


  /**
   * scrape_results findMany
   */
  export type scrape_resultsFindManyArgs = {
    /**
     * Select specific fields to fetch from the scrape_results
     * 
    **/
    select?: scrape_resultsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: scrape_resultsInclude | null
    /**
     * Filter, which scrape_results to fetch.
     * 
    **/
    where?: scrape_resultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of scrape_results to fetch.
     * 
    **/
    orderBy?: Enumerable<scrape_resultsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing scrape_results.
     * 
    **/
    cursor?: scrape_resultsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` scrape_results from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` scrape_results.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Scrape_resultsScalarFieldEnum>
  }


  /**
   * scrape_results create
   */
  export type scrape_resultsCreateArgs = {
    /**
     * Select specific fields to fetch from the scrape_results
     * 
    **/
    select?: scrape_resultsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: scrape_resultsInclude | null
    /**
     * The data needed to create a scrape_results.
     * 
    **/
    data: XOR<scrape_resultsCreateInput, scrape_resultsUncheckedCreateInput>
  }


  /**
   * scrape_results createMany
   */
  export type scrape_resultsCreateManyArgs = {
    data: Enumerable<scrape_resultsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * scrape_results update
   */
  export type scrape_resultsUpdateArgs = {
    /**
     * Select specific fields to fetch from the scrape_results
     * 
    **/
    select?: scrape_resultsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: scrape_resultsInclude | null
    /**
     * The data needed to update a scrape_results.
     * 
    **/
    data: XOR<scrape_resultsUpdateInput, scrape_resultsUncheckedUpdateInput>
    /**
     * Choose, which scrape_results to update.
     * 
    **/
    where: scrape_resultsWhereUniqueInput
  }


  /**
   * scrape_results updateMany
   */
  export type scrape_resultsUpdateManyArgs = {
    data: XOR<scrape_resultsUpdateManyMutationInput, scrape_resultsUncheckedUpdateManyInput>
    where?: scrape_resultsWhereInput
  }


  /**
   * scrape_results upsert
   */
  export type scrape_resultsUpsertArgs = {
    /**
     * Select specific fields to fetch from the scrape_results
     * 
    **/
    select?: scrape_resultsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: scrape_resultsInclude | null
    /**
     * The filter to search for the scrape_results to update in case it exists.
     * 
    **/
    where: scrape_resultsWhereUniqueInput
    /**
     * In case the scrape_results found by the `where` argument doesn't exist, create a new scrape_results with this data.
     * 
    **/
    create: XOR<scrape_resultsCreateInput, scrape_resultsUncheckedCreateInput>
    /**
     * In case the scrape_results was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<scrape_resultsUpdateInput, scrape_resultsUncheckedUpdateInput>
  }


  /**
   * scrape_results delete
   */
  export type scrape_resultsDeleteArgs = {
    /**
     * Select specific fields to fetch from the scrape_results
     * 
    **/
    select?: scrape_resultsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: scrape_resultsInclude | null
    /**
     * Filter which scrape_results to delete.
     * 
    **/
    where: scrape_resultsWhereUniqueInput
  }


  /**
   * scrape_results deleteMany
   */
  export type scrape_resultsDeleteManyArgs = {
    where?: scrape_resultsWhereInput
  }


  /**
   * scrape_results without action
   */
  export type scrape_resultsArgs = {
    /**
     * Select specific fields to fetch from the scrape_results
     * 
    **/
    select?: scrape_resultsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: scrape_resultsInclude | null
  }



  /**
   * Model units
   */


  export type AggregateUnits = {
    _count: UnitsCountAggregateOutputType | null
    _avg: UnitsAvgAggregateOutputType | null
    _sum: UnitsSumAggregateOutputType | null
    _min: UnitsMinAggregateOutputType | null
    _max: UnitsMaxAggregateOutputType | null
  }

  export type UnitsAvgAggregateOutputType = {
    id: number | null
    base_unit_id: number | null
    scale_of_base_unit: number | null
  }

  export type UnitsSumAggregateOutputType = {
    id: number | null
    base_unit_id: number | null
    scale_of_base_unit: number | null
  }

  export type UnitsMinAggregateOutputType = {
    id: number | null
    slug: string | null
    display_text: string | null
    base_unit_id: number | null
    scale_of_base_unit: number | null
  }

  export type UnitsMaxAggregateOutputType = {
    id: number | null
    slug: string | null
    display_text: string | null
    base_unit_id: number | null
    scale_of_base_unit: number | null
  }

  export type UnitsCountAggregateOutputType = {
    id: number
    slug: number
    display_text: number
    base_unit_id: number
    scale_of_base_unit: number
    _all: number
  }


  export type UnitsAvgAggregateInputType = {
    id?: true
    base_unit_id?: true
    scale_of_base_unit?: true
  }

  export type UnitsSumAggregateInputType = {
    id?: true
    base_unit_id?: true
    scale_of_base_unit?: true
  }

  export type UnitsMinAggregateInputType = {
    id?: true
    slug?: true
    display_text?: true
    base_unit_id?: true
    scale_of_base_unit?: true
  }

  export type UnitsMaxAggregateInputType = {
    id?: true
    slug?: true
    display_text?: true
    base_unit_id?: true
    scale_of_base_unit?: true
  }

  export type UnitsCountAggregateInputType = {
    id?: true
    slug?: true
    display_text?: true
    base_unit_id?: true
    scale_of_base_unit?: true
    _all?: true
  }

  export type UnitsAggregateArgs = {
    /**
     * Filter which units to aggregate.
     * 
    **/
    where?: unitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of units to fetch.
     * 
    **/
    orderBy?: Enumerable<unitsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: unitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` units from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` units.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned units
    **/
    _count?: true | UnitsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnitsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnitsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnitsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnitsMaxAggregateInputType
  }

  export type GetUnitsAggregateType<T extends UnitsAggregateArgs> = {
        [P in keyof T & keyof AggregateUnits]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnits[P]>
      : GetScalarType<T[P], AggregateUnits[P]>
  }


    
    
  export type UnitsGroupByArgs = {
    where?: unitsWhereInput
    orderBy?: Enumerable<unitsOrderByWithAggregationInput>
    by: Array<UnitsScalarFieldEnum>
    having?: unitsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnitsCountAggregateInputType | true
    _avg?: UnitsAvgAggregateInputType
    _sum?: UnitsSumAggregateInputType
    _min?: UnitsMinAggregateInputType
    _max?: UnitsMaxAggregateInputType
  }


  export type UnitsGroupByOutputType = {
    id: number
    slug: string
    display_text: string
    base_unit_id: number
    scale_of_base_unit: number
    _count: UnitsCountAggregateOutputType | null
    _avg: UnitsAvgAggregateOutputType | null
    _sum: UnitsSumAggregateOutputType | null
    _min: UnitsMinAggregateOutputType | null
    _max: UnitsMaxAggregateOutputType | null
  }

  type GetUnitsGroupByPayload<T extends UnitsGroupByArgs> = Promise<
    Array<
      PickArray<UnitsGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof UnitsGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], UnitsGroupByOutputType[P]> 
            : GetScalarType<T[P], UnitsGroupByOutputType[P]>
        }
      > 
    >


  export type unitsSelect = {
    id?: boolean
    slug?: boolean
    display_text?: boolean
    base_unit_id?: boolean
    scale_of_base_unit?: boolean
    units?: boolean | unitsArgs
    products?: boolean | productsFindManyArgs
    scrape_results?: boolean | scrape_resultsFindManyArgs
    other_units?: boolean | unitsFindManyArgs
    _count?: boolean | UnitsCountOutputTypeArgs
  }

  export type unitsInclude = {
    units?: boolean | unitsArgs
    products?: boolean | productsFindManyArgs
    scrape_results?: boolean | scrape_resultsFindManyArgs
    other_units?: boolean | unitsFindManyArgs
    _count?: boolean | UnitsCountOutputTypeArgs
  }

  export type unitsGetPayload<
    S extends boolean | null | undefined | unitsArgs,
    U = keyof S
      > = S extends true
        ? units
    : S extends undefined
    ? never
    : S extends unitsArgs | unitsFindManyArgs
    ?'include' extends U
    ? units  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'units'
        ? unitsGetPayload<S['include'][P]> :
        P extends 'products'
        ? Array < productsGetPayload<S['include'][P]>>  :
        P extends 'scrape_results'
        ? Array < scrape_resultsGetPayload<S['include'][P]>>  :
        P extends 'other_units'
        ? Array < unitsGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? UnitsCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof units ?units [P]
  : 
          P extends 'units'
        ? unitsGetPayload<S['select'][P]> :
        P extends 'products'
        ? Array < productsGetPayload<S['select'][P]>>  :
        P extends 'scrape_results'
        ? Array < scrape_resultsGetPayload<S['select'][P]>>  :
        P extends 'other_units'
        ? Array < unitsGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? UnitsCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : units
  : units


  type unitsCountArgs = Merge<
    Omit<unitsFindManyArgs, 'select' | 'include'> & {
      select?: UnitsCountAggregateInputType | true
    }
  >

  export interface unitsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Units that matches the filter.
     * @param {unitsFindUniqueArgs} args - Arguments to find a Units
     * @example
     * // Get one Units
     * const units = await prisma.units.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends unitsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, unitsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'units'> extends True ? CheckSelect<T, Prisma__unitsClient<units>, Prisma__unitsClient<unitsGetPayload<T>>> : CheckSelect<T, Prisma__unitsClient<units | null >, Prisma__unitsClient<unitsGetPayload<T> | null >>

    /**
     * Find the first Units that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unitsFindFirstArgs} args - Arguments to find a Units
     * @example
     * // Get one Units
     * const units = await prisma.units.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends unitsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, unitsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'units'> extends True ? CheckSelect<T, Prisma__unitsClient<units>, Prisma__unitsClient<unitsGetPayload<T>>> : CheckSelect<T, Prisma__unitsClient<units | null >, Prisma__unitsClient<unitsGetPayload<T> | null >>

    /**
     * Find zero or more Units that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unitsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Units
     * const units = await prisma.units.findMany()
     * 
     * // Get first 10 Units
     * const units = await prisma.units.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unitsWithIdOnly = await prisma.units.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends unitsFindManyArgs>(
      args?: SelectSubset<T, unitsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<units>>, PrismaPromise<Array<unitsGetPayload<T>>>>

    /**
     * Create a Units.
     * @param {unitsCreateArgs} args - Arguments to create a Units.
     * @example
     * // Create one Units
     * const Units = await prisma.units.create({
     *   data: {
     *     // ... data to create a Units
     *   }
     * })
     * 
    **/
    create<T extends unitsCreateArgs>(
      args: SelectSubset<T, unitsCreateArgs>
    ): CheckSelect<T, Prisma__unitsClient<units>, Prisma__unitsClient<unitsGetPayload<T>>>

    /**
     * Create many Units.
     *     @param {unitsCreateManyArgs} args - Arguments to create many Units.
     *     @example
     *     // Create many Units
     *     const units = await prisma.units.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends unitsCreateManyArgs>(
      args?: SelectSubset<T, unitsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Units.
     * @param {unitsDeleteArgs} args - Arguments to delete one Units.
     * @example
     * // Delete one Units
     * const Units = await prisma.units.delete({
     *   where: {
     *     // ... filter to delete one Units
     *   }
     * })
     * 
    **/
    delete<T extends unitsDeleteArgs>(
      args: SelectSubset<T, unitsDeleteArgs>
    ): CheckSelect<T, Prisma__unitsClient<units>, Prisma__unitsClient<unitsGetPayload<T>>>

    /**
     * Update one Units.
     * @param {unitsUpdateArgs} args - Arguments to update one Units.
     * @example
     * // Update one Units
     * const units = await prisma.units.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends unitsUpdateArgs>(
      args: SelectSubset<T, unitsUpdateArgs>
    ): CheckSelect<T, Prisma__unitsClient<units>, Prisma__unitsClient<unitsGetPayload<T>>>

    /**
     * Delete zero or more Units.
     * @param {unitsDeleteManyArgs} args - Arguments to filter Units to delete.
     * @example
     * // Delete a few Units
     * const { count } = await prisma.units.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends unitsDeleteManyArgs>(
      args?: SelectSubset<T, unitsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unitsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Units
     * const units = await prisma.units.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends unitsUpdateManyArgs>(
      args: SelectSubset<T, unitsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Units.
     * @param {unitsUpsertArgs} args - Arguments to update or create a Units.
     * @example
     * // Update or create a Units
     * const units = await prisma.units.upsert({
     *   create: {
     *     // ... data to create a Units
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Units we want to update
     *   }
     * })
    **/
    upsert<T extends unitsUpsertArgs>(
      args: SelectSubset<T, unitsUpsertArgs>
    ): CheckSelect<T, Prisma__unitsClient<units>, Prisma__unitsClient<unitsGetPayload<T>>>

    /**
     * Count the number of Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unitsCountArgs} args - Arguments to filter Units to count.
     * @example
     * // Count the number of Units
     * const count = await prisma.units.count({
     *   where: {
     *     // ... the filter for the Units we want to count
     *   }
     * })
    **/
    count<T extends unitsCountArgs>(
      args?: Subset<T, unitsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnitsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UnitsAggregateArgs>(args: Subset<T, UnitsAggregateArgs>): PrismaPromise<GetUnitsAggregateType<T>>

    /**
     * Group by Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UnitsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnitsGroupByArgs['orderBy'] }
        : { orderBy?: UnitsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UnitsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnitsGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for units.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__unitsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    units<T extends unitsArgs = {}>(args?: Subset<T, unitsArgs>): CheckSelect<T, Prisma__unitsClient<units | null >, Prisma__unitsClient<unitsGetPayload<T> | null >>;

    products<T extends productsFindManyArgs = {}>(args?: Subset<T, productsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<products>>, PrismaPromise<Array<productsGetPayload<T>>>>;

    scrape_results<T extends scrape_resultsFindManyArgs = {}>(args?: Subset<T, scrape_resultsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<scrape_results>>, PrismaPromise<Array<scrape_resultsGetPayload<T>>>>;

    other_units<T extends unitsFindManyArgs = {}>(args?: Subset<T, unitsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<units>>, PrismaPromise<Array<unitsGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * units findUnique
   */
  export type unitsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the units
     * 
    **/
    select?: unitsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: unitsInclude | null
    /**
     * Throw an Error if a units can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which units to fetch.
     * 
    **/
    where: unitsWhereUniqueInput
  }


  /**
   * units findFirst
   */
  export type unitsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the units
     * 
    **/
    select?: unitsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: unitsInclude | null
    /**
     * Throw an Error if a units can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which units to fetch.
     * 
    **/
    where?: unitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of units to fetch.
     * 
    **/
    orderBy?: Enumerable<unitsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for units.
     * 
    **/
    cursor?: unitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` units from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` units.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of units.
     * 
    **/
    distinct?: Enumerable<UnitsScalarFieldEnum>
  }


  /**
   * units findMany
   */
  export type unitsFindManyArgs = {
    /**
     * Select specific fields to fetch from the units
     * 
    **/
    select?: unitsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: unitsInclude | null
    /**
     * Filter, which units to fetch.
     * 
    **/
    where?: unitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of units to fetch.
     * 
    **/
    orderBy?: Enumerable<unitsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing units.
     * 
    **/
    cursor?: unitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` units from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` units.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UnitsScalarFieldEnum>
  }


  /**
   * units create
   */
  export type unitsCreateArgs = {
    /**
     * Select specific fields to fetch from the units
     * 
    **/
    select?: unitsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: unitsInclude | null
    /**
     * The data needed to create a units.
     * 
    **/
    data: XOR<unitsCreateInput, unitsUncheckedCreateInput>
  }


  /**
   * units createMany
   */
  export type unitsCreateManyArgs = {
    data: Enumerable<unitsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * units update
   */
  export type unitsUpdateArgs = {
    /**
     * Select specific fields to fetch from the units
     * 
    **/
    select?: unitsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: unitsInclude | null
    /**
     * The data needed to update a units.
     * 
    **/
    data: XOR<unitsUpdateInput, unitsUncheckedUpdateInput>
    /**
     * Choose, which units to update.
     * 
    **/
    where: unitsWhereUniqueInput
  }


  /**
   * units updateMany
   */
  export type unitsUpdateManyArgs = {
    data: XOR<unitsUpdateManyMutationInput, unitsUncheckedUpdateManyInput>
    where?: unitsWhereInput
  }


  /**
   * units upsert
   */
  export type unitsUpsertArgs = {
    /**
     * Select specific fields to fetch from the units
     * 
    **/
    select?: unitsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: unitsInclude | null
    /**
     * The filter to search for the units to update in case it exists.
     * 
    **/
    where: unitsWhereUniqueInput
    /**
     * In case the units found by the `where` argument doesn't exist, create a new units with this data.
     * 
    **/
    create: XOR<unitsCreateInput, unitsUncheckedCreateInput>
    /**
     * In case the units was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<unitsUpdateInput, unitsUncheckedUpdateInput>
  }


  /**
   * units delete
   */
  export type unitsDeleteArgs = {
    /**
     * Select specific fields to fetch from the units
     * 
    **/
    select?: unitsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: unitsInclude | null
    /**
     * Filter which units to delete.
     * 
    **/
    where: unitsWhereUniqueInput
  }


  /**
   * units deleteMany
   */
  export type unitsDeleteManyArgs = {
    where?: unitsWhereInput
  }


  /**
   * units without action
   */
  export type unitsArgs = {
    /**
     * Select specific fields to fetch from the units
     * 
    **/
    select?: unitsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: unitsInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const Basket_daily_totalsScalarFieldEnum: {
    id: 'id',
    delivery_date: 'delivery_date',
    daily_totals: 'daily_totals',
    daily_indexes: 'daily_indexes',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Basket_daily_totalsScalarFieldEnum = (typeof Basket_daily_totalsScalarFieldEnum)[keyof typeof Basket_daily_totalsScalarFieldEnum]


  export const Basket_line_item_competitor_equivalentsScalarFieldEnum: {
    id: 'id',
    competitor_price: 'competitor_price',
    basket_line_item_id: 'basket_line_item_id',
    competitor_id: 'competitor_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Basket_line_item_competitor_equivalentsScalarFieldEnum = (typeof Basket_line_item_competitor_equivalentsScalarFieldEnum)[keyof typeof Basket_line_item_competitor_equivalentsScalarFieldEnum]


  export const Basket_line_item_recommended_pricesScalarFieldEnum: {
    id: 'id',
    recommended_price: 'recommended_price',
    basket_line_item_id: 'basket_line_item_id',
    price_recommendation_id: 'price_recommendation_id'
  };

  export type Basket_line_item_recommended_pricesScalarFieldEnum = (typeof Basket_line_item_recommended_pricesScalarFieldEnum)[keyof typeof Basket_line_item_recommended_pricesScalarFieldEnum]


  export const Basket_line_itemsScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity',
    basket_id: 'basket_id',
    product_sku: 'product_sku',
    created_at: 'created_at',
    updated_at: 'updated_at',
    competitor_indexes: 'competitor_indexes',
    competitor_prices: 'competitor_prices',
    goodfood_price: 'goodfood_price'
  };

  export type Basket_line_itemsScalarFieldEnum = (typeof Basket_line_itemsScalarFieldEnum)[keyof typeof Basket_line_itemsScalarFieldEnum]


  export const BasketsScalarFieldEnum: {
    id: 'id',
    goodfood_id: 'goodfood_id',
    delivery_date: 'delivery_date',
    basket_totals: 'basket_totals',
    basket_indexes: 'basket_indexes',
    created_at: 'created_at',
    updated_at: 'updated_at',
    region_id: 'region_id',
    basket_daily_total_id: 'basket_daily_total_id'
  };

  export type BasketsScalarFieldEnum = (typeof BasketsScalarFieldEnum)[keyof typeof BasketsScalarFieldEnum]


  export const CompetitorsScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    display_text: 'display_text'
  };

  export type CompetitorsScalarFieldEnum = (typeof CompetitorsScalarFieldEnum)[keyof typeof CompetitorsScalarFieldEnum]


  export const MigrationsScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    name: 'name'
  };

  export type MigrationsScalarFieldEnum = (typeof MigrationsScalarFieldEnum)[keyof typeof MigrationsScalarFieldEnum]


  export const Price_recommendationsScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    region_id: 'region_id',
    sale_price: 'sale_price',
    list_price: 'list_price',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Price_recommendationsScalarFieldEnum = (typeof Price_recommendationsScalarFieldEnum)[keyof typeof Price_recommendationsScalarFieldEnum]


  export const Product_region_competitor_urlsScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    region_id: 'region_id',
    competitor_id: 'competitor_id',
    url: 'url',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type Product_region_competitor_urlsScalarFieldEnum = (typeof Product_region_competitor_urlsScalarFieldEnum)[keyof typeof Product_region_competitor_urlsScalarFieldEnum]


  export const Product_region_competitor_urls_former_urlsScalarFieldEnum: {
    product_region_competitor_url_id: 'product_region_competitor_url_id',
    old_url: 'old_url',
    created_at: 'created_at',
    updated_at: 'updated_at',
    id: 'id'
  };

  export type Product_region_competitor_urls_former_urlsScalarFieldEnum = (typeof Product_region_competitor_urls_former_urlsScalarFieldEnum)[keyof typeof Product_region_competitor_urls_former_urlsScalarFieldEnum]


  export const Product_region_price_dataScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    region_id: 'region_id',
    price: 'price',
    discount: 'discount',
    threshold_price: 'threshold_price',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type Product_region_price_dataScalarFieldEnum = (typeof Product_region_price_dataScalarFieldEnum)[keyof typeof Product_region_price_dataScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    sku: 'sku',
    name: 'name',
    package_quantity: 'package_quantity',
    package_units: 'package_units',
    package_weight: 'package_weight',
    weight_unit_id: 'weight_unit_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const RegionsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    facility: 'facility',
    city: 'city',
    province: 'province',
    postal_code: 'postal_code',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type RegionsScalarFieldEnum = (typeof RegionsScalarFieldEnum)[keyof typeof RegionsScalarFieldEnum]


  export const Scaled_pricesScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    competitor_id: 'competitor_id',
    region_id: 'region_id',
    scrape_result_id: 'scrape_result_id',
    competitor_scaled_price: 'competitor_scaled_price',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type Scaled_pricesScalarFieldEnum = (typeof Scaled_pricesScalarFieldEnum)[keyof typeof Scaled_pricesScalarFieldEnum]


  export const Scrape_resultsScalarFieldEnum: {
    id: 'id',
    competitor_sale_price: 'competitor_sale_price',
    competitor_list_price: 'competitor_list_price',
    competitor_sold_by_volume: 'competitor_sold_by_volume',
    competitor_sold_by_unit_id: 'competitor_sold_by_unit_id',
    promotional_info: 'promotional_info',
    data_source: 'data_source',
    scrape_time: 'scrape_time',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type Scrape_resultsScalarFieldEnum = (typeof Scrape_resultsScalarFieldEnum)[keyof typeof Scrape_resultsScalarFieldEnum]


  export const UnitsScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    display_text: 'display_text',
    base_unit_id: 'base_unit_id',
    scale_of_base_unit: 'scale_of_base_unit'
  };

  export type UnitsScalarFieldEnum = (typeof UnitsScalarFieldEnum)[keyof typeof UnitsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: 'JsonNull'
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: 'DbNull',
    JsonNull: 'JsonNull'
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueFilter: {
    DbNull: 'DbNull',
    JsonNull: 'JsonNull',
    AnyNull: 'AnyNull'
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Deep Input Types
   */


  export type basket_daily_totalsWhereInput = {
    AND?: Enumerable<basket_daily_totalsWhereInput>
    OR?: Enumerable<basket_daily_totalsWhereInput>
    NOT?: Enumerable<basket_daily_totalsWhereInput>
    id?: IntFilter | number
    delivery_date?: DateTimeFilter | Date | string
    daily_totals?: JsonFilter
    daily_indexes?: JsonFilter
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeNullableFilter | Date | string | null
    baskets?: BasketsListRelationFilter
  }

  export type basket_daily_totalsOrderByWithRelationInput = {
    id?: SortOrder
    delivery_date?: SortOrder
    daily_totals?: SortOrder
    daily_indexes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    baskets?: basketsOrderByRelationAggregateInput
  }

  export type basket_daily_totalsWhereUniqueInput = {
    id?: number
  }

  export type basket_daily_totalsOrderByWithAggregationInput = {
    id?: SortOrder
    delivery_date?: SortOrder
    daily_totals?: SortOrder
    daily_indexes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: basket_daily_totalsCountOrderByAggregateInput
    _avg?: basket_daily_totalsAvgOrderByAggregateInput
    _max?: basket_daily_totalsMaxOrderByAggregateInput
    _min?: basket_daily_totalsMinOrderByAggregateInput
    _sum?: basket_daily_totalsSumOrderByAggregateInput
  }

  export type basket_daily_totalsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<basket_daily_totalsScalarWhereWithAggregatesInput>
    OR?: Enumerable<basket_daily_totalsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<basket_daily_totalsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    delivery_date?: DateTimeWithAggregatesFilter | Date | string
    daily_totals?: JsonWithAggregatesFilter
    daily_indexes?: JsonWithAggregatesFilter
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type basket_line_item_competitor_equivalentsWhereInput = {
    AND?: Enumerable<basket_line_item_competitor_equivalentsWhereInput>
    OR?: Enumerable<basket_line_item_competitor_equivalentsWhereInput>
    NOT?: Enumerable<basket_line_item_competitor_equivalentsWhereInput>
    id?: IntFilter | number
    competitor_price?: FloatNullableFilter | number | null
    basket_line_item_id?: IntFilter | number
    competitor_id?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeNullableFilter | Date | string | null
    basket_line_items?: XOR<Basket_line_itemsRelationFilter, basket_line_itemsWhereInput>
    competitors?: XOR<CompetitorsRelationFilter, competitorsWhereInput>
  }

  export type basket_line_item_competitor_equivalentsOrderByWithRelationInput = {
    id?: SortOrder
    competitor_price?: SortOrder
    basket_line_item_id?: SortOrder
    competitor_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    basket_line_items?: basket_line_itemsOrderByWithRelationInput
    competitors?: competitorsOrderByWithRelationInput
  }

  export type basket_line_item_competitor_equivalentsWhereUniqueInput = {
    id?: number
  }

  export type basket_line_item_competitor_equivalentsOrderByWithAggregationInput = {
    id?: SortOrder
    competitor_price?: SortOrder
    basket_line_item_id?: SortOrder
    competitor_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: basket_line_item_competitor_equivalentsCountOrderByAggregateInput
    _avg?: basket_line_item_competitor_equivalentsAvgOrderByAggregateInput
    _max?: basket_line_item_competitor_equivalentsMaxOrderByAggregateInput
    _min?: basket_line_item_competitor_equivalentsMinOrderByAggregateInput
    _sum?: basket_line_item_competitor_equivalentsSumOrderByAggregateInput
  }

  export type basket_line_item_competitor_equivalentsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<basket_line_item_competitor_equivalentsScalarWhereWithAggregatesInput>
    OR?: Enumerable<basket_line_item_competitor_equivalentsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<basket_line_item_competitor_equivalentsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    competitor_price?: FloatNullableWithAggregatesFilter | number | null
    basket_line_item_id?: IntWithAggregatesFilter | number
    competitor_id?: IntWithAggregatesFilter | number
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type basket_line_item_recommended_pricesWhereInput = {
    AND?: Enumerable<basket_line_item_recommended_pricesWhereInput>
    OR?: Enumerable<basket_line_item_recommended_pricesWhereInput>
    NOT?: Enumerable<basket_line_item_recommended_pricesWhereInput>
    id?: IntFilter | number
    recommended_price?: FloatFilter | number
    basket_line_item_id?: IntFilter | number
    price_recommendation_id?: IntNullableFilter | number | null
    basket_line_items?: XOR<Basket_line_itemsRelationFilter, basket_line_itemsWhereInput>
  }

  export type basket_line_item_recommended_pricesOrderByWithRelationInput = {
    id?: SortOrder
    recommended_price?: SortOrder
    basket_line_item_id?: SortOrder
    price_recommendation_id?: SortOrder
    basket_line_items?: basket_line_itemsOrderByWithRelationInput
  }

  export type basket_line_item_recommended_pricesWhereUniqueInput = {
    id?: number
  }

  export type basket_line_item_recommended_pricesOrderByWithAggregationInput = {
    id?: SortOrder
    recommended_price?: SortOrder
    basket_line_item_id?: SortOrder
    price_recommendation_id?: SortOrder
    _count?: basket_line_item_recommended_pricesCountOrderByAggregateInput
    _avg?: basket_line_item_recommended_pricesAvgOrderByAggregateInput
    _max?: basket_line_item_recommended_pricesMaxOrderByAggregateInput
    _min?: basket_line_item_recommended_pricesMinOrderByAggregateInput
    _sum?: basket_line_item_recommended_pricesSumOrderByAggregateInput
  }

  export type basket_line_item_recommended_pricesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<basket_line_item_recommended_pricesScalarWhereWithAggregatesInput>
    OR?: Enumerable<basket_line_item_recommended_pricesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<basket_line_item_recommended_pricesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    recommended_price?: FloatWithAggregatesFilter | number
    basket_line_item_id?: IntWithAggregatesFilter | number
    price_recommendation_id?: IntNullableWithAggregatesFilter | number | null
  }

  export type basket_line_itemsWhereInput = {
    AND?: Enumerable<basket_line_itemsWhereInput>
    OR?: Enumerable<basket_line_itemsWhereInput>
    NOT?: Enumerable<basket_line_itemsWhereInput>
    id?: IntFilter | number
    quantity?: IntFilter | number
    basket_id?: IntFilter | number
    product_sku?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeNullableFilter | Date | string | null
    competitor_indexes?: JsonNullableFilter
    competitor_prices?: JsonNullableFilter
    goodfood_price?: FloatFilter | number
    basket_line_item_competitor_equivalents?: Basket_line_item_competitor_equivalentsListRelationFilter
    basket_line_item_recommended_prices?: Basket_line_item_recommended_pricesListRelationFilter
  }

  export type basket_line_itemsOrderByWithRelationInput = {
    id?: SortOrder
    quantity?: SortOrder
    basket_id?: SortOrder
    product_sku?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    competitor_indexes?: SortOrder
    competitor_prices?: SortOrder
    goodfood_price?: SortOrder
    basket_line_item_competitor_equivalents?: basket_line_item_competitor_equivalentsOrderByRelationAggregateInput
    basket_line_item_recommended_prices?: basket_line_item_recommended_pricesOrderByRelationAggregateInput
  }

  export type basket_line_itemsWhereUniqueInput = {
    id?: number
  }

  export type basket_line_itemsOrderByWithAggregationInput = {
    id?: SortOrder
    quantity?: SortOrder
    basket_id?: SortOrder
    product_sku?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    competitor_indexes?: SortOrder
    competitor_prices?: SortOrder
    goodfood_price?: SortOrder
    _count?: basket_line_itemsCountOrderByAggregateInput
    _avg?: basket_line_itemsAvgOrderByAggregateInput
    _max?: basket_line_itemsMaxOrderByAggregateInput
    _min?: basket_line_itemsMinOrderByAggregateInput
    _sum?: basket_line_itemsSumOrderByAggregateInput
  }

  export type basket_line_itemsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<basket_line_itemsScalarWhereWithAggregatesInput>
    OR?: Enumerable<basket_line_itemsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<basket_line_itemsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    quantity?: IntWithAggregatesFilter | number
    basket_id?: IntWithAggregatesFilter | number
    product_sku?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    competitor_indexes?: JsonNullableWithAggregatesFilter
    competitor_prices?: JsonNullableWithAggregatesFilter
    goodfood_price?: FloatWithAggregatesFilter | number
  }

  export type basketsWhereInput = {
    AND?: Enumerable<basketsWhereInput>
    OR?: Enumerable<basketsWhereInput>
    NOT?: Enumerable<basketsWhereInput>
    id?: IntFilter | number
    goodfood_id?: IntFilter | number
    delivery_date?: DateTimeFilter | Date | string
    basket_totals?: JsonNullableFilter
    basket_indexes?: JsonNullableFilter
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeNullableFilter | Date | string | null
    region_id?: IntFilter | number
    basket_daily_total_id?: IntFilter | number
    basket_daily_totals?: XOR<Basket_daily_totalsRelationFilter, basket_daily_totalsWhereInput>
    regions?: XOR<RegionsRelationFilter, regionsWhereInput>
  }

  export type basketsOrderByWithRelationInput = {
    id?: SortOrder
    goodfood_id?: SortOrder
    delivery_date?: SortOrder
    basket_totals?: SortOrder
    basket_indexes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    region_id?: SortOrder
    basket_daily_total_id?: SortOrder
    basket_daily_totals?: basket_daily_totalsOrderByWithRelationInput
    regions?: regionsOrderByWithRelationInput
  }

  export type basketsWhereUniqueInput = {
    id?: number
  }

  export type basketsOrderByWithAggregationInput = {
    id?: SortOrder
    goodfood_id?: SortOrder
    delivery_date?: SortOrder
    basket_totals?: SortOrder
    basket_indexes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    region_id?: SortOrder
    basket_daily_total_id?: SortOrder
    _count?: basketsCountOrderByAggregateInput
    _avg?: basketsAvgOrderByAggregateInput
    _max?: basketsMaxOrderByAggregateInput
    _min?: basketsMinOrderByAggregateInput
    _sum?: basketsSumOrderByAggregateInput
  }

  export type basketsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<basketsScalarWhereWithAggregatesInput>
    OR?: Enumerable<basketsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<basketsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    goodfood_id?: IntWithAggregatesFilter | number
    delivery_date?: DateTimeWithAggregatesFilter | Date | string
    basket_totals?: JsonNullableWithAggregatesFilter
    basket_indexes?: JsonNullableWithAggregatesFilter
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    region_id?: IntWithAggregatesFilter | number
    basket_daily_total_id?: IntWithAggregatesFilter | number
  }

  export type competitorsWhereInput = {
    AND?: Enumerable<competitorsWhereInput>
    OR?: Enumerable<competitorsWhereInput>
    NOT?: Enumerable<competitorsWhereInput>
    id?: IntFilter | number
    slug?: StringFilter | string
    display_text?: StringFilter | string
    basket_line_item_competitor_equivalents?: Basket_line_item_competitor_equivalentsListRelationFilter
    product_region_competitor_urls?: Product_region_competitor_urlsListRelationFilter
    scaled_prices?: Scaled_pricesListRelationFilter
  }

  export type competitorsOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    display_text?: SortOrder
    basket_line_item_competitor_equivalents?: basket_line_item_competitor_equivalentsOrderByRelationAggregateInput
    product_region_competitor_urls?: product_region_competitor_urlsOrderByRelationAggregateInput
    scaled_prices?: scaled_pricesOrderByRelationAggregateInput
  }

  export type competitorsWhereUniqueInput = {
    id?: number
  }

  export type competitorsOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    display_text?: SortOrder
    _count?: competitorsCountOrderByAggregateInput
    _avg?: competitorsAvgOrderByAggregateInput
    _max?: competitorsMaxOrderByAggregateInput
    _min?: competitorsMinOrderByAggregateInput
    _sum?: competitorsSumOrderByAggregateInput
  }

  export type competitorsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<competitorsScalarWhereWithAggregatesInput>
    OR?: Enumerable<competitorsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<competitorsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    slug?: StringWithAggregatesFilter | string
    display_text?: StringWithAggregatesFilter | string
  }

  export type migrationsWhereInput = {
    AND?: Enumerable<migrationsWhereInput>
    OR?: Enumerable<migrationsWhereInput>
    NOT?: Enumerable<migrationsWhereInput>
    id?: IntFilter | number
    timestamp?: BigIntFilter | bigint | number
    name?: StringFilter | string
  }

  export type migrationsOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    name?: SortOrder
  }

  export type migrationsWhereUniqueInput = {
    id?: number
  }

  export type migrationsOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    name?: SortOrder
    _count?: migrationsCountOrderByAggregateInput
    _avg?: migrationsAvgOrderByAggregateInput
    _max?: migrationsMaxOrderByAggregateInput
    _min?: migrationsMinOrderByAggregateInput
    _sum?: migrationsSumOrderByAggregateInput
  }

  export type migrationsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<migrationsScalarWhereWithAggregatesInput>
    OR?: Enumerable<migrationsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<migrationsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    timestamp?: BigIntWithAggregatesFilter | bigint | number
    name?: StringWithAggregatesFilter | string
  }

  export type price_recommendationsWhereInput = {
    AND?: Enumerable<price_recommendationsWhereInput>
    OR?: Enumerable<price_recommendationsWhereInput>
    NOT?: Enumerable<price_recommendationsWhereInput>
    id?: IntFilter | number
    product_id?: IntFilter | number
    region_id?: IntFilter | number
    sale_price?: FloatFilter | number
    list_price?: FloatFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeNullableFilter | Date | string | null
    products?: XOR<ProductsRelationFilter, productsWhereInput>
    regions?: XOR<RegionsRelationFilter, regionsWhereInput>
  }

  export type price_recommendationsOrderByWithRelationInput = {
    id?: SortOrder
    product_id?: SortOrder
    region_id?: SortOrder
    sale_price?: SortOrder
    list_price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    products?: productsOrderByWithRelationInput
    regions?: regionsOrderByWithRelationInput
  }

  export type price_recommendationsWhereUniqueInput = {
    id?: number
  }

  export type price_recommendationsOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrder
    region_id?: SortOrder
    sale_price?: SortOrder
    list_price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: price_recommendationsCountOrderByAggregateInput
    _avg?: price_recommendationsAvgOrderByAggregateInput
    _max?: price_recommendationsMaxOrderByAggregateInput
    _min?: price_recommendationsMinOrderByAggregateInput
    _sum?: price_recommendationsSumOrderByAggregateInput
  }

  export type price_recommendationsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<price_recommendationsScalarWhereWithAggregatesInput>
    OR?: Enumerable<price_recommendationsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<price_recommendationsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    product_id?: IntWithAggregatesFilter | number
    region_id?: IntWithAggregatesFilter | number
    sale_price?: FloatWithAggregatesFilter | number
    list_price?: FloatWithAggregatesFilter | number
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type product_region_competitor_urlsWhereInput = {
    AND?: Enumerable<product_region_competitor_urlsWhereInput>
    OR?: Enumerable<product_region_competitor_urlsWhereInput>
    NOT?: Enumerable<product_region_competitor_urlsWhereInput>
    id?: IntFilter | number
    product_id?: IntFilter | number
    region_id?: IntFilter | number
    competitor_id?: IntFilter | number
    url?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeNullableFilter | Date | string | null
    deleted_at?: DateTimeNullableFilter | Date | string | null
    competitors?: XOR<CompetitorsRelationFilter, competitorsWhereInput>
    products?: XOR<ProductsRelationFilter, productsWhereInput>
    regions?: XOR<RegionsRelationFilter, regionsWhereInput>
    product_region_competitor_urls_former_urls?: Product_region_competitor_urls_former_urlsListRelationFilter
  }

  export type product_region_competitor_urlsOrderByWithRelationInput = {
    id?: SortOrder
    product_id?: SortOrder
    region_id?: SortOrder
    competitor_id?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    competitors?: competitorsOrderByWithRelationInput
    products?: productsOrderByWithRelationInput
    regions?: regionsOrderByWithRelationInput
    product_region_competitor_urls_former_urls?: product_region_competitor_urls_former_urlsOrderByRelationAggregateInput
  }

  export type product_region_competitor_urlsWhereUniqueInput = {
    id?: number
    competitor_product_region_unique?: product_region_competitor_urlsCompetitor_product_region_uniqueCompoundUniqueInput
  }

  export type product_region_competitor_urlsOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrder
    region_id?: SortOrder
    competitor_id?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    _count?: product_region_competitor_urlsCountOrderByAggregateInput
    _avg?: product_region_competitor_urlsAvgOrderByAggregateInput
    _max?: product_region_competitor_urlsMaxOrderByAggregateInput
    _min?: product_region_competitor_urlsMinOrderByAggregateInput
    _sum?: product_region_competitor_urlsSumOrderByAggregateInput
  }

  export type product_region_competitor_urlsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<product_region_competitor_urlsScalarWhereWithAggregatesInput>
    OR?: Enumerable<product_region_competitor_urlsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<product_region_competitor_urlsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    product_id?: IntWithAggregatesFilter | number
    region_id?: IntWithAggregatesFilter | number
    competitor_id?: IntWithAggregatesFilter | number
    url?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type product_region_competitor_urls_former_urlsWhereInput = {
    AND?: Enumerable<product_region_competitor_urls_former_urlsWhereInput>
    OR?: Enumerable<product_region_competitor_urls_former_urlsWhereInput>
    NOT?: Enumerable<product_region_competitor_urls_former_urlsWhereInput>
    product_region_competitor_url_id?: IntFilter | number
    old_url?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeNullableFilter | Date | string | null
    id?: IntFilter | number
    product_region_competitor_urls?: XOR<Product_region_competitor_urlsRelationFilter, product_region_competitor_urlsWhereInput>
  }

  export type product_region_competitor_urls_former_urlsOrderByWithRelationInput = {
    product_region_competitor_url_id?: SortOrder
    old_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    id?: SortOrder
    product_region_competitor_urls?: product_region_competitor_urlsOrderByWithRelationInput
  }

  export type product_region_competitor_urls_former_urlsWhereUniqueInput = {
    id?: number
  }

  export type product_region_competitor_urls_former_urlsOrderByWithAggregationInput = {
    product_region_competitor_url_id?: SortOrder
    old_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    id?: SortOrder
    _count?: product_region_competitor_urls_former_urlsCountOrderByAggregateInput
    _avg?: product_region_competitor_urls_former_urlsAvgOrderByAggregateInput
    _max?: product_region_competitor_urls_former_urlsMaxOrderByAggregateInput
    _min?: product_region_competitor_urls_former_urlsMinOrderByAggregateInput
    _sum?: product_region_competitor_urls_former_urlsSumOrderByAggregateInput
  }

  export type product_region_competitor_urls_former_urlsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<product_region_competitor_urls_former_urlsScalarWhereWithAggregatesInput>
    OR?: Enumerable<product_region_competitor_urls_former_urlsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<product_region_competitor_urls_former_urlsScalarWhereWithAggregatesInput>
    product_region_competitor_url_id?: IntWithAggregatesFilter | number
    old_url?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    id?: IntWithAggregatesFilter | number
  }

  export type product_region_price_dataWhereInput = {
    AND?: Enumerable<product_region_price_dataWhereInput>
    OR?: Enumerable<product_region_price_dataWhereInput>
    NOT?: Enumerable<product_region_price_dataWhereInput>
    id?: IntFilter | number
    product_id?: IntFilter | number
    region_id?: IntFilter | number
    price?: FloatFilter | number
    discount?: FloatFilter | number
    threshold_price?: FloatNullableFilter | number | null
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeNullableFilter | Date | string | null
    deleted_at?: DateTimeNullableFilter | Date | string | null
    products?: XOR<ProductsRelationFilter, productsWhereInput>
    regions?: XOR<RegionsRelationFilter, regionsWhereInput>
  }

  export type product_region_price_dataOrderByWithRelationInput = {
    id?: SortOrder
    product_id?: SortOrder
    region_id?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    threshold_price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    products?: productsOrderByWithRelationInput
    regions?: regionsOrderByWithRelationInput
  }

  export type product_region_price_dataWhereUniqueInput = {
    id?: number
    price_date_product_region_unique?: product_region_price_dataPrice_date_product_region_uniqueCompoundUniqueInput
  }

  export type product_region_price_dataOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrder
    region_id?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    threshold_price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    _count?: product_region_price_dataCountOrderByAggregateInput
    _avg?: product_region_price_dataAvgOrderByAggregateInput
    _max?: product_region_price_dataMaxOrderByAggregateInput
    _min?: product_region_price_dataMinOrderByAggregateInput
    _sum?: product_region_price_dataSumOrderByAggregateInput
  }

  export type product_region_price_dataScalarWhereWithAggregatesInput = {
    AND?: Enumerable<product_region_price_dataScalarWhereWithAggregatesInput>
    OR?: Enumerable<product_region_price_dataScalarWhereWithAggregatesInput>
    NOT?: Enumerable<product_region_price_dataScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    product_id?: IntWithAggregatesFilter | number
    region_id?: IntWithAggregatesFilter | number
    price?: FloatWithAggregatesFilter | number
    discount?: FloatWithAggregatesFilter | number
    threshold_price?: FloatNullableWithAggregatesFilter | number | null
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type productsWhereInput = {
    AND?: Enumerable<productsWhereInput>
    OR?: Enumerable<productsWhereInput>
    NOT?: Enumerable<productsWhereInput>
    id?: IntFilter | number
    sku?: StringNullableFilter | string | null
    name?: StringNullableFilter | string | null
    package_quantity?: IntNullableFilter | number | null
    package_units?: StringNullableFilter | string | null
    package_weight?: FloatNullableFilter | number | null
    weight_unit_id?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeNullableFilter | Date | string | null
    deleted_at?: DateTimeNullableFilter | Date | string | null
    units?: XOR<UnitsRelationFilter, unitsWhereInput>
    price_recommendations?: Price_recommendationsListRelationFilter
    product_region_competitor_urls?: Product_region_competitor_urlsListRelationFilter
    product_region_price_data?: Product_region_price_dataListRelationFilter
    scaled_prices?: Scaled_pricesListRelationFilter
  }

  export type productsOrderByWithRelationInput = {
    id?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    package_quantity?: SortOrder
    package_units?: SortOrder
    package_weight?: SortOrder
    weight_unit_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    units?: unitsOrderByWithRelationInput
    price_recommendations?: price_recommendationsOrderByRelationAggregateInput
    product_region_competitor_urls?: product_region_competitor_urlsOrderByRelationAggregateInput
    product_region_price_data?: product_region_price_dataOrderByRelationAggregateInput
    scaled_prices?: scaled_pricesOrderByRelationAggregateInput
  }

  export type productsWhereUniqueInput = {
    id?: number
    sku?: string
  }

  export type productsOrderByWithAggregationInput = {
    id?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    package_quantity?: SortOrder
    package_units?: SortOrder
    package_weight?: SortOrder
    weight_unit_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    _count?: productsCountOrderByAggregateInput
    _avg?: productsAvgOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
    _sum?: productsSumOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<productsScalarWhereWithAggregatesInput>
    OR?: Enumerable<productsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<productsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    sku?: StringNullableWithAggregatesFilter | string | null
    name?: StringNullableWithAggregatesFilter | string | null
    package_quantity?: IntNullableWithAggregatesFilter | number | null
    package_units?: StringNullableWithAggregatesFilter | string | null
    package_weight?: FloatNullableWithAggregatesFilter | number | null
    weight_unit_id?: IntWithAggregatesFilter | number
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type regionsWhereInput = {
    AND?: Enumerable<regionsWhereInput>
    OR?: Enumerable<regionsWhereInput>
    NOT?: Enumerable<regionsWhereInput>
    id?: IntFilter | number
    name?: StringNullableFilter | string | null
    facility?: StringNullableFilter | string | null
    city?: StringNullableFilter | string | null
    province?: StringNullableFilter | string | null
    postal_code?: StringNullableFilter | string | null
    is_active?: BoolNullableFilter | boolean | null
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeNullableFilter | Date | string | null
    deleted_at?: DateTimeNullableFilter | Date | string | null
    baskets?: BasketsListRelationFilter
    price_recommendations?: Price_recommendationsListRelationFilter
    product_region_competitor_urls?: Product_region_competitor_urlsListRelationFilter
    product_region_price_data?: Product_region_price_dataListRelationFilter
    scaled_prices?: Scaled_pricesListRelationFilter
  }

  export type regionsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    facility?: SortOrder
    city?: SortOrder
    province?: SortOrder
    postal_code?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    baskets?: basketsOrderByRelationAggregateInput
    price_recommendations?: price_recommendationsOrderByRelationAggregateInput
    product_region_competitor_urls?: product_region_competitor_urlsOrderByRelationAggregateInput
    product_region_price_data?: product_region_price_dataOrderByRelationAggregateInput
    scaled_prices?: scaled_pricesOrderByRelationAggregateInput
  }

  export type regionsWhereUniqueInput = {
    id?: number
  }

  export type regionsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    facility?: SortOrder
    city?: SortOrder
    province?: SortOrder
    postal_code?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    _count?: regionsCountOrderByAggregateInput
    _avg?: regionsAvgOrderByAggregateInput
    _max?: regionsMaxOrderByAggregateInput
    _min?: regionsMinOrderByAggregateInput
    _sum?: regionsSumOrderByAggregateInput
  }

  export type regionsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<regionsScalarWhereWithAggregatesInput>
    OR?: Enumerable<regionsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<regionsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringNullableWithAggregatesFilter | string | null
    facility?: StringNullableWithAggregatesFilter | string | null
    city?: StringNullableWithAggregatesFilter | string | null
    province?: StringNullableWithAggregatesFilter | string | null
    postal_code?: StringNullableWithAggregatesFilter | string | null
    is_active?: BoolNullableWithAggregatesFilter | boolean | null
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type scaled_pricesWhereInput = {
    AND?: Enumerable<scaled_pricesWhereInput>
    OR?: Enumerable<scaled_pricesWhereInput>
    NOT?: Enumerable<scaled_pricesWhereInput>
    id?: IntFilter | number
    product_id?: IntFilter | number
    competitor_id?: IntFilter | number
    region_id?: IntFilter | number
    scrape_result_id?: IntFilter | number
    competitor_scaled_price?: FloatNullableFilter | number | null
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeNullableFilter | Date | string | null
    deleted_at?: DateTimeNullableFilter | Date | string | null
    competitors?: XOR<CompetitorsRelationFilter, competitorsWhereInput>
    products?: XOR<ProductsRelationFilter, productsWhereInput>
    regions?: XOR<RegionsRelationFilter, regionsWhereInput>
    scrape_results?: XOR<Scrape_resultsRelationFilter, scrape_resultsWhereInput>
  }

  export type scaled_pricesOrderByWithRelationInput = {
    id?: SortOrder
    product_id?: SortOrder
    competitor_id?: SortOrder
    region_id?: SortOrder
    scrape_result_id?: SortOrder
    competitor_scaled_price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    competitors?: competitorsOrderByWithRelationInput
    products?: productsOrderByWithRelationInput
    regions?: regionsOrderByWithRelationInput
    scrape_results?: scrape_resultsOrderByWithRelationInput
  }

  export type scaled_pricesWhereUniqueInput = {
    id?: number
  }

  export type scaled_pricesOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrder
    competitor_id?: SortOrder
    region_id?: SortOrder
    scrape_result_id?: SortOrder
    competitor_scaled_price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    _count?: scaled_pricesCountOrderByAggregateInput
    _avg?: scaled_pricesAvgOrderByAggregateInput
    _max?: scaled_pricesMaxOrderByAggregateInput
    _min?: scaled_pricesMinOrderByAggregateInput
    _sum?: scaled_pricesSumOrderByAggregateInput
  }

  export type scaled_pricesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<scaled_pricesScalarWhereWithAggregatesInput>
    OR?: Enumerable<scaled_pricesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<scaled_pricesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    product_id?: IntWithAggregatesFilter | number
    competitor_id?: IntWithAggregatesFilter | number
    region_id?: IntWithAggregatesFilter | number
    scrape_result_id?: IntWithAggregatesFilter | number
    competitor_scaled_price?: FloatNullableWithAggregatesFilter | number | null
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type scrape_resultsWhereInput = {
    AND?: Enumerable<scrape_resultsWhereInput>
    OR?: Enumerable<scrape_resultsWhereInput>
    NOT?: Enumerable<scrape_resultsWhereInput>
    id?: IntFilter | number
    competitor_sale_price?: FloatNullableFilter | number | null
    competitor_list_price?: FloatNullableFilter | number | null
    competitor_sold_by_volume?: FloatNullableFilter | number | null
    competitor_sold_by_unit_id?: IntFilter | number
    promotional_info?: StringNullableFilter | string | null
    data_source?: StringNullableFilter | string | null
    scrape_time?: DateTimeNullableFilter | Date | string | null
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeNullableFilter | Date | string | null
    deleted_at?: DateTimeNullableFilter | Date | string | null
    units?: XOR<UnitsRelationFilter, unitsWhereInput>
    scaled_prices?: Scaled_pricesListRelationFilter
  }

  export type scrape_resultsOrderByWithRelationInput = {
    id?: SortOrder
    competitor_sale_price?: SortOrder
    competitor_list_price?: SortOrder
    competitor_sold_by_volume?: SortOrder
    competitor_sold_by_unit_id?: SortOrder
    promotional_info?: SortOrder
    data_source?: SortOrder
    scrape_time?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    units?: unitsOrderByWithRelationInput
    scaled_prices?: scaled_pricesOrderByRelationAggregateInput
  }

  export type scrape_resultsWhereUniqueInput = {
    id?: number
  }

  export type scrape_resultsOrderByWithAggregationInput = {
    id?: SortOrder
    competitor_sale_price?: SortOrder
    competitor_list_price?: SortOrder
    competitor_sold_by_volume?: SortOrder
    competitor_sold_by_unit_id?: SortOrder
    promotional_info?: SortOrder
    data_source?: SortOrder
    scrape_time?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    _count?: scrape_resultsCountOrderByAggregateInput
    _avg?: scrape_resultsAvgOrderByAggregateInput
    _max?: scrape_resultsMaxOrderByAggregateInput
    _min?: scrape_resultsMinOrderByAggregateInput
    _sum?: scrape_resultsSumOrderByAggregateInput
  }

  export type scrape_resultsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<scrape_resultsScalarWhereWithAggregatesInput>
    OR?: Enumerable<scrape_resultsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<scrape_resultsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    competitor_sale_price?: FloatNullableWithAggregatesFilter | number | null
    competitor_list_price?: FloatNullableWithAggregatesFilter | number | null
    competitor_sold_by_volume?: FloatNullableWithAggregatesFilter | number | null
    competitor_sold_by_unit_id?: IntWithAggregatesFilter | number
    promotional_info?: StringNullableWithAggregatesFilter | string | null
    data_source?: StringNullableWithAggregatesFilter | string | null
    scrape_time?: DateTimeNullableWithAggregatesFilter | Date | string | null
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type unitsWhereInput = {
    AND?: Enumerable<unitsWhereInput>
    OR?: Enumerable<unitsWhereInput>
    NOT?: Enumerable<unitsWhereInput>
    id?: IntFilter | number
    slug?: StringFilter | string
    display_text?: StringFilter | string
    base_unit_id?: IntFilter | number
    scale_of_base_unit?: FloatFilter | number
    units?: XOR<UnitsRelationFilter, unitsWhereInput>
    products?: ProductsListRelationFilter
    scrape_results?: Scrape_resultsListRelationFilter
    other_units?: UnitsListRelationFilter
  }

  export type unitsOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    display_text?: SortOrder
    base_unit_id?: SortOrder
    scale_of_base_unit?: SortOrder
    units?: unitsOrderByWithRelationInput
    products?: productsOrderByRelationAggregateInput
    scrape_results?: scrape_resultsOrderByRelationAggregateInput
    other_units?: unitsOrderByRelationAggregateInput
  }

  export type unitsWhereUniqueInput = {
    id?: number
  }

  export type unitsOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    display_text?: SortOrder
    base_unit_id?: SortOrder
    scale_of_base_unit?: SortOrder
    _count?: unitsCountOrderByAggregateInput
    _avg?: unitsAvgOrderByAggregateInput
    _max?: unitsMaxOrderByAggregateInput
    _min?: unitsMinOrderByAggregateInput
    _sum?: unitsSumOrderByAggregateInput
  }

  export type unitsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<unitsScalarWhereWithAggregatesInput>
    OR?: Enumerable<unitsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<unitsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    slug?: StringWithAggregatesFilter | string
    display_text?: StringWithAggregatesFilter | string
    base_unit_id?: IntWithAggregatesFilter | number
    scale_of_base_unit?: FloatWithAggregatesFilter | number
  }

  export type basket_daily_totalsCreateInput = {
    delivery_date: Date | string
    daily_totals: JsonNullValueInput | InputJsonValue
    daily_indexes: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string | null
    baskets?: basketsCreateNestedManyWithoutBasket_daily_totalsInput
  }

  export type basket_daily_totalsUncheckedCreateInput = {
    id?: number
    delivery_date: Date | string
    daily_totals: JsonNullValueInput | InputJsonValue
    daily_indexes: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string | null
    baskets?: basketsUncheckedCreateNestedManyWithoutBasket_daily_totalsInput
  }

  export type basket_daily_totalsUpdateInput = {
    delivery_date?: DateTimeFieldUpdateOperationsInput | Date | string
    daily_totals?: JsonNullValueInput | InputJsonValue
    daily_indexes?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    baskets?: basketsUpdateManyWithoutBasket_daily_totalsInput
  }

  export type basket_daily_totalsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    delivery_date?: DateTimeFieldUpdateOperationsInput | Date | string
    daily_totals?: JsonNullValueInput | InputJsonValue
    daily_indexes?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    baskets?: basketsUncheckedUpdateManyWithoutBasket_daily_totalsInput
  }

  export type basket_daily_totalsCreateManyInput = {
    id?: number
    delivery_date: Date | string
    daily_totals: JsonNullValueInput | InputJsonValue
    daily_indexes: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type basket_daily_totalsUpdateManyMutationInput = {
    delivery_date?: DateTimeFieldUpdateOperationsInput | Date | string
    daily_totals?: JsonNullValueInput | InputJsonValue
    daily_indexes?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type basket_daily_totalsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    delivery_date?: DateTimeFieldUpdateOperationsInput | Date | string
    daily_totals?: JsonNullValueInput | InputJsonValue
    daily_indexes?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type basket_line_item_competitor_equivalentsCreateInput = {
    competitor_price?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    basket_line_items: basket_line_itemsCreateNestedOneWithoutBasket_line_item_competitor_equivalentsInput
    competitors: competitorsCreateNestedOneWithoutBasket_line_item_competitor_equivalentsInput
  }

  export type basket_line_item_competitor_equivalentsUncheckedCreateInput = {
    id?: number
    competitor_price?: number | null
    basket_line_item_id: number
    competitor_id: number
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type basket_line_item_competitor_equivalentsUpdateInput = {
    competitor_price?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    basket_line_items?: basket_line_itemsUpdateOneRequiredWithoutBasket_line_item_competitor_equivalentsInput
    competitors?: competitorsUpdateOneRequiredWithoutBasket_line_item_competitor_equivalentsInput
  }

  export type basket_line_item_competitor_equivalentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    competitor_price?: NullableFloatFieldUpdateOperationsInput | number | null
    basket_line_item_id?: IntFieldUpdateOperationsInput | number
    competitor_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type basket_line_item_competitor_equivalentsCreateManyInput = {
    id?: number
    competitor_price?: number | null
    basket_line_item_id: number
    competitor_id: number
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type basket_line_item_competitor_equivalentsUpdateManyMutationInput = {
    competitor_price?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type basket_line_item_competitor_equivalentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    competitor_price?: NullableFloatFieldUpdateOperationsInput | number | null
    basket_line_item_id?: IntFieldUpdateOperationsInput | number
    competitor_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type basket_line_item_recommended_pricesCreateInput = {
    recommended_price: number
    price_recommendation_id?: number | null
    basket_line_items: basket_line_itemsCreateNestedOneWithoutBasket_line_item_recommended_pricesInput
  }

  export type basket_line_item_recommended_pricesUncheckedCreateInput = {
    id?: number
    recommended_price: number
    basket_line_item_id: number
    price_recommendation_id?: number | null
  }

  export type basket_line_item_recommended_pricesUpdateInput = {
    recommended_price?: FloatFieldUpdateOperationsInput | number
    price_recommendation_id?: NullableIntFieldUpdateOperationsInput | number | null
    basket_line_items?: basket_line_itemsUpdateOneRequiredWithoutBasket_line_item_recommended_pricesInput
  }

  export type basket_line_item_recommended_pricesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    recommended_price?: FloatFieldUpdateOperationsInput | number
    basket_line_item_id?: IntFieldUpdateOperationsInput | number
    price_recommendation_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type basket_line_item_recommended_pricesCreateManyInput = {
    id?: number
    recommended_price: number
    basket_line_item_id: number
    price_recommendation_id?: number | null
  }

  export type basket_line_item_recommended_pricesUpdateManyMutationInput = {
    recommended_price?: FloatFieldUpdateOperationsInput | number
    price_recommendation_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type basket_line_item_recommended_pricesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    recommended_price?: FloatFieldUpdateOperationsInput | number
    basket_line_item_id?: IntFieldUpdateOperationsInput | number
    price_recommendation_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type basket_line_itemsCreateInput = {
    quantity: number
    basket_id: number
    product_sku: string
    created_at?: Date | string
    updated_at?: Date | string | null
    competitor_indexes?: NullableJsonNullValueInput | InputJsonValue
    competitor_prices?: NullableJsonNullValueInput | InputJsonValue
    goodfood_price: number
    basket_line_item_competitor_equivalents?: basket_line_item_competitor_equivalentsCreateNestedManyWithoutBasket_line_itemsInput
    basket_line_item_recommended_prices?: basket_line_item_recommended_pricesCreateNestedManyWithoutBasket_line_itemsInput
  }

  export type basket_line_itemsUncheckedCreateInput = {
    id?: number
    quantity: number
    basket_id: number
    product_sku: string
    created_at?: Date | string
    updated_at?: Date | string | null
    competitor_indexes?: NullableJsonNullValueInput | InputJsonValue
    competitor_prices?: NullableJsonNullValueInput | InputJsonValue
    goodfood_price: number
    basket_line_item_competitor_equivalents?: basket_line_item_competitor_equivalentsUncheckedCreateNestedManyWithoutBasket_line_itemsInput
    basket_line_item_recommended_prices?: basket_line_item_recommended_pricesUncheckedCreateNestedManyWithoutBasket_line_itemsInput
  }

  export type basket_line_itemsUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    basket_id?: IntFieldUpdateOperationsInput | number
    product_sku?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    competitor_indexes?: NullableJsonNullValueInput | InputJsonValue
    competitor_prices?: NullableJsonNullValueInput | InputJsonValue
    goodfood_price?: FloatFieldUpdateOperationsInput | number
    basket_line_item_competitor_equivalents?: basket_line_item_competitor_equivalentsUpdateManyWithoutBasket_line_itemsInput
    basket_line_item_recommended_prices?: basket_line_item_recommended_pricesUpdateManyWithoutBasket_line_itemsInput
  }

  export type basket_line_itemsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    basket_id?: IntFieldUpdateOperationsInput | number
    product_sku?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    competitor_indexes?: NullableJsonNullValueInput | InputJsonValue
    competitor_prices?: NullableJsonNullValueInput | InputJsonValue
    goodfood_price?: FloatFieldUpdateOperationsInput | number
    basket_line_item_competitor_equivalents?: basket_line_item_competitor_equivalentsUncheckedUpdateManyWithoutBasket_line_itemsInput
    basket_line_item_recommended_prices?: basket_line_item_recommended_pricesUncheckedUpdateManyWithoutBasket_line_itemsInput
  }

  export type basket_line_itemsCreateManyInput = {
    id?: number
    quantity: number
    basket_id: number
    product_sku: string
    created_at?: Date | string
    updated_at?: Date | string | null
    competitor_indexes?: NullableJsonNullValueInput | InputJsonValue
    competitor_prices?: NullableJsonNullValueInput | InputJsonValue
    goodfood_price: number
  }

  export type basket_line_itemsUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    basket_id?: IntFieldUpdateOperationsInput | number
    product_sku?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    competitor_indexes?: NullableJsonNullValueInput | InputJsonValue
    competitor_prices?: NullableJsonNullValueInput | InputJsonValue
    goodfood_price?: FloatFieldUpdateOperationsInput | number
  }

  export type basket_line_itemsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    basket_id?: IntFieldUpdateOperationsInput | number
    product_sku?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    competitor_indexes?: NullableJsonNullValueInput | InputJsonValue
    competitor_prices?: NullableJsonNullValueInput | InputJsonValue
    goodfood_price?: FloatFieldUpdateOperationsInput | number
  }

  export type basketsCreateInput = {
    goodfood_id: number
    delivery_date: Date | string
    basket_totals?: NullableJsonNullValueInput | InputJsonValue
    basket_indexes?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string | null
    basket_daily_totals: basket_daily_totalsCreateNestedOneWithoutBasketsInput
    regions: regionsCreateNestedOneWithoutBasketsInput
  }

  export type basketsUncheckedCreateInput = {
    id?: number
    goodfood_id: number
    delivery_date: Date | string
    basket_totals?: NullableJsonNullValueInput | InputJsonValue
    basket_indexes?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string | null
    region_id: number
    basket_daily_total_id: number
  }

  export type basketsUpdateInput = {
    goodfood_id?: IntFieldUpdateOperationsInput | number
    delivery_date?: DateTimeFieldUpdateOperationsInput | Date | string
    basket_totals?: NullableJsonNullValueInput | InputJsonValue
    basket_indexes?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    basket_daily_totals?: basket_daily_totalsUpdateOneRequiredWithoutBasketsInput
    regions?: regionsUpdateOneRequiredWithoutBasketsInput
  }

  export type basketsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    goodfood_id?: IntFieldUpdateOperationsInput | number
    delivery_date?: DateTimeFieldUpdateOperationsInput | Date | string
    basket_totals?: NullableJsonNullValueInput | InputJsonValue
    basket_indexes?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_id?: IntFieldUpdateOperationsInput | number
    basket_daily_total_id?: IntFieldUpdateOperationsInput | number
  }

  export type basketsCreateManyInput = {
    id?: number
    goodfood_id: number
    delivery_date: Date | string
    basket_totals?: NullableJsonNullValueInput | InputJsonValue
    basket_indexes?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string | null
    region_id: number
    basket_daily_total_id: number
  }

  export type basketsUpdateManyMutationInput = {
    goodfood_id?: IntFieldUpdateOperationsInput | number
    delivery_date?: DateTimeFieldUpdateOperationsInput | Date | string
    basket_totals?: NullableJsonNullValueInput | InputJsonValue
    basket_indexes?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type basketsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    goodfood_id?: IntFieldUpdateOperationsInput | number
    delivery_date?: DateTimeFieldUpdateOperationsInput | Date | string
    basket_totals?: NullableJsonNullValueInput | InputJsonValue
    basket_indexes?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_id?: IntFieldUpdateOperationsInput | number
    basket_daily_total_id?: IntFieldUpdateOperationsInput | number
  }

  export type competitorsCreateInput = {
    slug: string
    display_text: string
    basket_line_item_competitor_equivalents?: basket_line_item_competitor_equivalentsCreateNestedManyWithoutCompetitorsInput
    product_region_competitor_urls?: product_region_competitor_urlsCreateNestedManyWithoutCompetitorsInput
    scaled_prices?: scaled_pricesCreateNestedManyWithoutCompetitorsInput
  }

  export type competitorsUncheckedCreateInput = {
    id?: number
    slug: string
    display_text: string
    basket_line_item_competitor_equivalents?: basket_line_item_competitor_equivalentsUncheckedCreateNestedManyWithoutCompetitorsInput
    product_region_competitor_urls?: product_region_competitor_urlsUncheckedCreateNestedManyWithoutCompetitorsInput
    scaled_prices?: scaled_pricesUncheckedCreateNestedManyWithoutCompetitorsInput
  }

  export type competitorsUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    display_text?: StringFieldUpdateOperationsInput | string
    basket_line_item_competitor_equivalents?: basket_line_item_competitor_equivalentsUpdateManyWithoutCompetitorsInput
    product_region_competitor_urls?: product_region_competitor_urlsUpdateManyWithoutCompetitorsInput
    scaled_prices?: scaled_pricesUpdateManyWithoutCompetitorsInput
  }

  export type competitorsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    display_text?: StringFieldUpdateOperationsInput | string
    basket_line_item_competitor_equivalents?: basket_line_item_competitor_equivalentsUncheckedUpdateManyWithoutCompetitorsInput
    product_region_competitor_urls?: product_region_competitor_urlsUncheckedUpdateManyWithoutCompetitorsInput
    scaled_prices?: scaled_pricesUncheckedUpdateManyWithoutCompetitorsInput
  }

  export type competitorsCreateManyInput = {
    id?: number
    slug: string
    display_text: string
  }

  export type competitorsUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    display_text?: StringFieldUpdateOperationsInput | string
  }

  export type competitorsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    display_text?: StringFieldUpdateOperationsInput | string
  }

  export type migrationsCreateInput = {
    timestamp: bigint | number
    name: string
  }

  export type migrationsUncheckedCreateInput = {
    id?: number
    timestamp: bigint | number
    name: string
  }

  export type migrationsUpdateInput = {
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type migrationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type migrationsCreateManyInput = {
    id?: number
    timestamp: bigint | number
    name: string
  }

  export type migrationsUpdateManyMutationInput = {
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type migrationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type price_recommendationsCreateInput = {
    sale_price: number
    list_price: number
    created_at?: Date | string
    updated_at?: Date | string | null
    products: productsCreateNestedOneWithoutPrice_recommendationsInput
    regions: regionsCreateNestedOneWithoutPrice_recommendationsInput
  }

  export type price_recommendationsUncheckedCreateInput = {
    id?: number
    product_id: number
    region_id: number
    sale_price: number
    list_price: number
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type price_recommendationsUpdateInput = {
    sale_price?: FloatFieldUpdateOperationsInput | number
    list_price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUpdateOneRequiredWithoutPrice_recommendationsInput
    regions?: regionsUpdateOneRequiredWithoutPrice_recommendationsInput
  }

  export type price_recommendationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    region_id?: IntFieldUpdateOperationsInput | number
    sale_price?: FloatFieldUpdateOperationsInput | number
    list_price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type price_recommendationsCreateManyInput = {
    id?: number
    product_id: number
    region_id: number
    sale_price: number
    list_price: number
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type price_recommendationsUpdateManyMutationInput = {
    sale_price?: FloatFieldUpdateOperationsInput | number
    list_price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type price_recommendationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    region_id?: IntFieldUpdateOperationsInput | number
    sale_price?: FloatFieldUpdateOperationsInput | number
    list_price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type product_region_competitor_urlsCreateInput = {
    url: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    competitors: competitorsCreateNestedOneWithoutProduct_region_competitor_urlsInput
    products: productsCreateNestedOneWithoutProduct_region_competitor_urlsInput
    regions: regionsCreateNestedOneWithoutProduct_region_competitor_urlsInput
    product_region_competitor_urls_former_urls?: product_region_competitor_urls_former_urlsCreateNestedManyWithoutProduct_region_competitor_urlsInput
  }

  export type product_region_competitor_urlsUncheckedCreateInput = {
    id?: number
    product_id: number
    region_id: number
    competitor_id: number
    url: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    product_region_competitor_urls_former_urls?: product_region_competitor_urls_former_urlsUncheckedCreateNestedManyWithoutProduct_region_competitor_urlsInput
  }

  export type product_region_competitor_urlsUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    competitors?: competitorsUpdateOneRequiredWithoutProduct_region_competitor_urlsInput
    products?: productsUpdateOneRequiredWithoutProduct_region_competitor_urlsInput
    regions?: regionsUpdateOneRequiredWithoutProduct_region_competitor_urlsInput
    product_region_competitor_urls_former_urls?: product_region_competitor_urls_former_urlsUpdateManyWithoutProduct_region_competitor_urlsInput
  }

  export type product_region_competitor_urlsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    region_id?: IntFieldUpdateOperationsInput | number
    competitor_id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_region_competitor_urls_former_urls?: product_region_competitor_urls_former_urlsUncheckedUpdateManyWithoutProduct_region_competitor_urlsInput
  }

  export type product_region_competitor_urlsCreateManyInput = {
    id?: number
    product_id: number
    region_id: number
    competitor_id: number
    url: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type product_region_competitor_urlsUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type product_region_competitor_urlsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    region_id?: IntFieldUpdateOperationsInput | number
    competitor_id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type product_region_competitor_urls_former_urlsCreateInput = {
    old_url: string
    created_at?: Date | string
    updated_at?: Date | string | null
    product_region_competitor_urls: product_region_competitor_urlsCreateNestedOneWithoutProduct_region_competitor_urls_former_urlsInput
  }

  export type product_region_competitor_urls_former_urlsUncheckedCreateInput = {
    product_region_competitor_url_id: number
    old_url: string
    created_at?: Date | string
    updated_at?: Date | string | null
    id?: number
  }

  export type product_region_competitor_urls_former_urlsUpdateInput = {
    old_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_region_competitor_urls?: product_region_competitor_urlsUpdateOneRequiredWithoutProduct_region_competitor_urls_former_urlsInput
  }

  export type product_region_competitor_urls_former_urlsUncheckedUpdateInput = {
    product_region_competitor_url_id?: IntFieldUpdateOperationsInput | number
    old_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type product_region_competitor_urls_former_urlsCreateManyInput = {
    product_region_competitor_url_id: number
    old_url: string
    created_at?: Date | string
    updated_at?: Date | string | null
    id?: number
  }

  export type product_region_competitor_urls_former_urlsUpdateManyMutationInput = {
    old_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type product_region_competitor_urls_former_urlsUncheckedUpdateManyInput = {
    product_region_competitor_url_id?: IntFieldUpdateOperationsInput | number
    old_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type product_region_price_dataCreateInput = {
    price: number
    discount: number
    threshold_price?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    products: productsCreateNestedOneWithoutProduct_region_price_dataInput
    regions: regionsCreateNestedOneWithoutProduct_region_price_dataInput
  }

  export type product_region_price_dataUncheckedCreateInput = {
    id?: number
    product_id: number
    region_id: number
    price: number
    discount: number
    threshold_price?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type product_region_price_dataUpdateInput = {
    price?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    threshold_price?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUpdateOneRequiredWithoutProduct_region_price_dataInput
    regions?: regionsUpdateOneRequiredWithoutProduct_region_price_dataInput
  }

  export type product_region_price_dataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    region_id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    threshold_price?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type product_region_price_dataCreateManyInput = {
    id?: number
    product_id: number
    region_id: number
    price: number
    discount: number
    threshold_price?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type product_region_price_dataUpdateManyMutationInput = {
    price?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    threshold_price?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type product_region_price_dataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    region_id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    threshold_price?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productsCreateInput = {
    sku?: string | null
    name?: string | null
    package_quantity?: number | null
    package_units?: string | null
    package_weight?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    units: unitsCreateNestedOneWithoutProductsInput
    price_recommendations?: price_recommendationsCreateNestedManyWithoutProductsInput
    product_region_competitor_urls?: product_region_competitor_urlsCreateNestedManyWithoutProductsInput
    product_region_price_data?: product_region_price_dataCreateNestedManyWithoutProductsInput
    scaled_prices?: scaled_pricesCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateInput = {
    id?: number
    sku?: string | null
    name?: string | null
    package_quantity?: number | null
    package_units?: string | null
    package_weight?: number | null
    weight_unit_id: number
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    price_recommendations?: price_recommendationsUncheckedCreateNestedManyWithoutProductsInput
    product_region_competitor_urls?: product_region_competitor_urlsUncheckedCreateNestedManyWithoutProductsInput
    product_region_price_data?: product_region_price_dataUncheckedCreateNestedManyWithoutProductsInput
    scaled_prices?: scaled_pricesUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsUpdateInput = {
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    package_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    package_units?: NullableStringFieldUpdateOperationsInput | string | null
    package_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    units?: unitsUpdateOneRequiredWithoutProductsInput
    price_recommendations?: price_recommendationsUpdateManyWithoutProductsInput
    product_region_competitor_urls?: product_region_competitor_urlsUpdateManyWithoutProductsInput
    product_region_price_data?: product_region_price_dataUpdateManyWithoutProductsInput
    scaled_prices?: scaled_pricesUpdateManyWithoutProductsInput
  }

  export type productsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    package_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    package_units?: NullableStringFieldUpdateOperationsInput | string | null
    package_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    weight_unit_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price_recommendations?: price_recommendationsUncheckedUpdateManyWithoutProductsInput
    product_region_competitor_urls?: product_region_competitor_urlsUncheckedUpdateManyWithoutProductsInput
    product_region_price_data?: product_region_price_dataUncheckedUpdateManyWithoutProductsInput
    scaled_prices?: scaled_pricesUncheckedUpdateManyWithoutProductsInput
  }

  export type productsCreateManyInput = {
    id?: number
    sku?: string | null
    name?: string | null
    package_quantity?: number | null
    package_units?: string | null
    package_weight?: number | null
    weight_unit_id: number
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type productsUpdateManyMutationInput = {
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    package_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    package_units?: NullableStringFieldUpdateOperationsInput | string | null
    package_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    package_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    package_units?: NullableStringFieldUpdateOperationsInput | string | null
    package_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    weight_unit_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type regionsCreateInput = {
    name?: string | null
    facility?: string | null
    city?: string | null
    province?: string | null
    postal_code?: string | null
    is_active?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    baskets?: basketsCreateNestedManyWithoutRegionsInput
    price_recommendations?: price_recommendationsCreateNestedManyWithoutRegionsInput
    product_region_competitor_urls?: product_region_competitor_urlsCreateNestedManyWithoutRegionsInput
    product_region_price_data?: product_region_price_dataCreateNestedManyWithoutRegionsInput
    scaled_prices?: scaled_pricesCreateNestedManyWithoutRegionsInput
  }

  export type regionsUncheckedCreateInput = {
    id?: number
    name?: string | null
    facility?: string | null
    city?: string | null
    province?: string | null
    postal_code?: string | null
    is_active?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    baskets?: basketsUncheckedCreateNestedManyWithoutRegionsInput
    price_recommendations?: price_recommendationsUncheckedCreateNestedManyWithoutRegionsInput
    product_region_competitor_urls?: product_region_competitor_urlsUncheckedCreateNestedManyWithoutRegionsInput
    product_region_price_data?: product_region_price_dataUncheckedCreateNestedManyWithoutRegionsInput
    scaled_prices?: scaled_pricesUncheckedCreateNestedManyWithoutRegionsInput
  }

  export type regionsUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    facility?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    baskets?: basketsUpdateManyWithoutRegionsInput
    price_recommendations?: price_recommendationsUpdateManyWithoutRegionsInput
    product_region_competitor_urls?: product_region_competitor_urlsUpdateManyWithoutRegionsInput
    product_region_price_data?: product_region_price_dataUpdateManyWithoutRegionsInput
    scaled_prices?: scaled_pricesUpdateManyWithoutRegionsInput
  }

  export type regionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    facility?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    baskets?: basketsUncheckedUpdateManyWithoutRegionsInput
    price_recommendations?: price_recommendationsUncheckedUpdateManyWithoutRegionsInput
    product_region_competitor_urls?: product_region_competitor_urlsUncheckedUpdateManyWithoutRegionsInput
    product_region_price_data?: product_region_price_dataUncheckedUpdateManyWithoutRegionsInput
    scaled_prices?: scaled_pricesUncheckedUpdateManyWithoutRegionsInput
  }

  export type regionsCreateManyInput = {
    id?: number
    name?: string | null
    facility?: string | null
    city?: string | null
    province?: string | null
    postal_code?: string | null
    is_active?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type regionsUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    facility?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type regionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    facility?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type scaled_pricesCreateInput = {
    competitor_scaled_price?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    competitors: competitorsCreateNestedOneWithoutScaled_pricesInput
    products: productsCreateNestedOneWithoutScaled_pricesInput
    regions: regionsCreateNestedOneWithoutScaled_pricesInput
    scrape_results: scrape_resultsCreateNestedOneWithoutScaled_pricesInput
  }

  export type scaled_pricesUncheckedCreateInput = {
    id?: number
    product_id: number
    competitor_id: number
    region_id: number
    scrape_result_id: number
    competitor_scaled_price?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type scaled_pricesUpdateInput = {
    competitor_scaled_price?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    competitors?: competitorsUpdateOneRequiredWithoutScaled_pricesInput
    products?: productsUpdateOneRequiredWithoutScaled_pricesInput
    regions?: regionsUpdateOneRequiredWithoutScaled_pricesInput
    scrape_results?: scrape_resultsUpdateOneRequiredWithoutScaled_pricesInput
  }

  export type scaled_pricesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    competitor_id?: IntFieldUpdateOperationsInput | number
    region_id?: IntFieldUpdateOperationsInput | number
    scrape_result_id?: IntFieldUpdateOperationsInput | number
    competitor_scaled_price?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type scaled_pricesCreateManyInput = {
    id?: number
    product_id: number
    competitor_id: number
    region_id: number
    scrape_result_id: number
    competitor_scaled_price?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type scaled_pricesUpdateManyMutationInput = {
    competitor_scaled_price?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type scaled_pricesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    competitor_id?: IntFieldUpdateOperationsInput | number
    region_id?: IntFieldUpdateOperationsInput | number
    scrape_result_id?: IntFieldUpdateOperationsInput | number
    competitor_scaled_price?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type scrape_resultsCreateInput = {
    competitor_sale_price?: number | null
    competitor_list_price?: number | null
    competitor_sold_by_volume?: number | null
    promotional_info?: string | null
    data_source?: string | null
    scrape_time?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    units: unitsCreateNestedOneWithoutScrape_resultsInput
    scaled_prices?: scaled_pricesCreateNestedManyWithoutScrape_resultsInput
  }

  export type scrape_resultsUncheckedCreateInput = {
    id?: number
    competitor_sale_price?: number | null
    competitor_list_price?: number | null
    competitor_sold_by_volume?: number | null
    competitor_sold_by_unit_id: number
    promotional_info?: string | null
    data_source?: string | null
    scrape_time?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    scaled_prices?: scaled_pricesUncheckedCreateNestedManyWithoutScrape_resultsInput
  }

  export type scrape_resultsUpdateInput = {
    competitor_sale_price?: NullableFloatFieldUpdateOperationsInput | number | null
    competitor_list_price?: NullableFloatFieldUpdateOperationsInput | number | null
    competitor_sold_by_volume?: NullableFloatFieldUpdateOperationsInput | number | null
    promotional_info?: NullableStringFieldUpdateOperationsInput | string | null
    data_source?: NullableStringFieldUpdateOperationsInput | string | null
    scrape_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    units?: unitsUpdateOneRequiredWithoutScrape_resultsInput
    scaled_prices?: scaled_pricesUpdateManyWithoutScrape_resultsInput
  }

  export type scrape_resultsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    competitor_sale_price?: NullableFloatFieldUpdateOperationsInput | number | null
    competitor_list_price?: NullableFloatFieldUpdateOperationsInput | number | null
    competitor_sold_by_volume?: NullableFloatFieldUpdateOperationsInput | number | null
    competitor_sold_by_unit_id?: IntFieldUpdateOperationsInput | number
    promotional_info?: NullableStringFieldUpdateOperationsInput | string | null
    data_source?: NullableStringFieldUpdateOperationsInput | string | null
    scrape_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scaled_prices?: scaled_pricesUncheckedUpdateManyWithoutScrape_resultsInput
  }

  export type scrape_resultsCreateManyInput = {
    id?: number
    competitor_sale_price?: number | null
    competitor_list_price?: number | null
    competitor_sold_by_volume?: number | null
    competitor_sold_by_unit_id: number
    promotional_info?: string | null
    data_source?: string | null
    scrape_time?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type scrape_resultsUpdateManyMutationInput = {
    competitor_sale_price?: NullableFloatFieldUpdateOperationsInput | number | null
    competitor_list_price?: NullableFloatFieldUpdateOperationsInput | number | null
    competitor_sold_by_volume?: NullableFloatFieldUpdateOperationsInput | number | null
    promotional_info?: NullableStringFieldUpdateOperationsInput | string | null
    data_source?: NullableStringFieldUpdateOperationsInput | string | null
    scrape_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type scrape_resultsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    competitor_sale_price?: NullableFloatFieldUpdateOperationsInput | number | null
    competitor_list_price?: NullableFloatFieldUpdateOperationsInput | number | null
    competitor_sold_by_volume?: NullableFloatFieldUpdateOperationsInput | number | null
    competitor_sold_by_unit_id?: IntFieldUpdateOperationsInput | number
    promotional_info?: NullableStringFieldUpdateOperationsInput | string | null
    data_source?: NullableStringFieldUpdateOperationsInput | string | null
    scrape_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type unitsCreateInput = {
    slug: string
    display_text: string
    scale_of_base_unit: number
    units: unitsCreateNestedOneWithoutOther_unitsInput
    products?: productsCreateNestedManyWithoutUnitsInput
    scrape_results?: scrape_resultsCreateNestedManyWithoutUnitsInput
    other_units?: unitsCreateNestedManyWithoutUnitsInput
  }

  export type unitsUncheckedCreateInput = {
    id?: number
    slug: string
    display_text: string
    base_unit_id: number
    scale_of_base_unit: number
    products?: productsUncheckedCreateNestedManyWithoutUnitsInput
    scrape_results?: scrape_resultsUncheckedCreateNestedManyWithoutUnitsInput
    other_units?: unitsUncheckedCreateNestedManyWithoutUnitsInput
  }

  export type unitsUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    display_text?: StringFieldUpdateOperationsInput | string
    scale_of_base_unit?: FloatFieldUpdateOperationsInput | number
    units?: unitsUpdateOneRequiredWithoutOther_unitsInput
    products?: productsUpdateManyWithoutUnitsInput
    scrape_results?: scrape_resultsUpdateManyWithoutUnitsInput
    other_units?: unitsUpdateManyWithoutUnitsInput
  }

  export type unitsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    display_text?: StringFieldUpdateOperationsInput | string
    base_unit_id?: IntFieldUpdateOperationsInput | number
    scale_of_base_unit?: FloatFieldUpdateOperationsInput | number
    products?: productsUncheckedUpdateManyWithoutUnitsInput
    scrape_results?: scrape_resultsUncheckedUpdateManyWithoutUnitsInput
    other_units?: unitsUncheckedUpdateManyWithoutUnitsInput
  }

  export type unitsCreateManyInput = {
    id?: number
    slug: string
    display_text: string
    base_unit_id: number
    scale_of_base_unit: number
  }

  export type unitsUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    display_text?: StringFieldUpdateOperationsInput | string
    scale_of_base_unit?: FloatFieldUpdateOperationsInput | number
  }

  export type unitsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    display_text?: StringFieldUpdateOperationsInput | string
    base_unit_id?: IntFieldUpdateOperationsInput | number
    scale_of_base_unit?: FloatFieldUpdateOperationsInput | number
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }
  export type JsonFilter = 
    | PatchUndefined<
        Either<Required<JsonFilterBase>, Exclude<keyof Required<JsonFilterBase>, 'path'>>,
        Required<JsonFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase>, 'path'>>

  export type JsonFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type BasketsListRelationFilter = {
    every?: basketsWhereInput
    some?: basketsWhereInput
    none?: basketsWhereInput
  }

  export type basketsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type basket_daily_totalsCountOrderByAggregateInput = {
    id?: SortOrder
    delivery_date?: SortOrder
    daily_totals?: SortOrder
    daily_indexes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type basket_daily_totalsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type basket_daily_totalsMaxOrderByAggregateInput = {
    id?: SortOrder
    delivery_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type basket_daily_totalsMinOrderByAggregateInput = {
    id?: SortOrder
    delivery_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type basket_daily_totalsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }
  export type JsonWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase>, Exclude<keyof Required<JsonWithAggregatesFilterBase>, 'path'>>,
        Required<JsonWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase>, 'path'>>

  export type JsonWithAggregatesFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
    _count?: NestedIntFilter
    _min?: NestedJsonFilter
    _max?: NestedJsonFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type FloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type Basket_line_itemsRelationFilter = {
    is?: basket_line_itemsWhereInput
    isNot?: basket_line_itemsWhereInput
  }

  export type CompetitorsRelationFilter = {
    is?: competitorsWhereInput
    isNot?: competitorsWhereInput
  }

  export type basket_line_item_competitor_equivalentsCountOrderByAggregateInput = {
    id?: SortOrder
    competitor_price?: SortOrder
    basket_line_item_id?: SortOrder
    competitor_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type basket_line_item_competitor_equivalentsAvgOrderByAggregateInput = {
    id?: SortOrder
    competitor_price?: SortOrder
    basket_line_item_id?: SortOrder
    competitor_id?: SortOrder
  }

  export type basket_line_item_competitor_equivalentsMaxOrderByAggregateInput = {
    id?: SortOrder
    competitor_price?: SortOrder
    basket_line_item_id?: SortOrder
    competitor_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type basket_line_item_competitor_equivalentsMinOrderByAggregateInput = {
    id?: SortOrder
    competitor_price?: SortOrder
    basket_line_item_id?: SortOrder
    competitor_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type basket_line_item_competitor_equivalentsSumOrderByAggregateInput = {
    id?: SortOrder
    competitor_price?: SortOrder
    basket_line_item_id?: SortOrder
    competitor_id?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type basket_line_item_recommended_pricesCountOrderByAggregateInput = {
    id?: SortOrder
    recommended_price?: SortOrder
    basket_line_item_id?: SortOrder
    price_recommendation_id?: SortOrder
  }

  export type basket_line_item_recommended_pricesAvgOrderByAggregateInput = {
    id?: SortOrder
    recommended_price?: SortOrder
    basket_line_item_id?: SortOrder
    price_recommendation_id?: SortOrder
  }

  export type basket_line_item_recommended_pricesMaxOrderByAggregateInput = {
    id?: SortOrder
    recommended_price?: SortOrder
    basket_line_item_id?: SortOrder
    price_recommendation_id?: SortOrder
  }

  export type basket_line_item_recommended_pricesMinOrderByAggregateInput = {
    id?: SortOrder
    recommended_price?: SortOrder
    basket_line_item_id?: SortOrder
    price_recommendation_id?: SortOrder
  }

  export type basket_line_item_recommended_pricesSumOrderByAggregateInput = {
    id?: SortOrder
    recommended_price?: SortOrder
    basket_line_item_id?: SortOrder
    price_recommendation_id?: SortOrder
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }
  export type JsonNullableFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase>, Exclude<keyof Required<JsonNullableFilterBase>, 'path'>>,
        Required<JsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase>, 'path'>>

  export type JsonNullableFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
  }

  export type Basket_line_item_competitor_equivalentsListRelationFilter = {
    every?: basket_line_item_competitor_equivalentsWhereInput
    some?: basket_line_item_competitor_equivalentsWhereInput
    none?: basket_line_item_competitor_equivalentsWhereInput
  }

  export type Basket_line_item_recommended_pricesListRelationFilter = {
    every?: basket_line_item_recommended_pricesWhereInput
    some?: basket_line_item_recommended_pricesWhereInput
    none?: basket_line_item_recommended_pricesWhereInput
  }

  export type basket_line_item_competitor_equivalentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type basket_line_item_recommended_pricesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type basket_line_itemsCountOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    basket_id?: SortOrder
    product_sku?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    competitor_indexes?: SortOrder
    competitor_prices?: SortOrder
    goodfood_price?: SortOrder
  }

  export type basket_line_itemsAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    basket_id?: SortOrder
    goodfood_price?: SortOrder
  }

  export type basket_line_itemsMaxOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    basket_id?: SortOrder
    product_sku?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    goodfood_price?: SortOrder
  }

  export type basket_line_itemsMinOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    basket_id?: SortOrder
    product_sku?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    goodfood_price?: SortOrder
  }

  export type basket_line_itemsSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    basket_id?: SortOrder
    goodfood_price?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }
  export type JsonNullableWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
    _count?: NestedIntNullableFilter
    _min?: NestedJsonNullableFilter
    _max?: NestedJsonNullableFilter
  }

  export type Basket_daily_totalsRelationFilter = {
    is?: basket_daily_totalsWhereInput
    isNot?: basket_daily_totalsWhereInput
  }

  export type RegionsRelationFilter = {
    is?: regionsWhereInput
    isNot?: regionsWhereInput
  }

  export type basketsCountOrderByAggregateInput = {
    id?: SortOrder
    goodfood_id?: SortOrder
    delivery_date?: SortOrder
    basket_totals?: SortOrder
    basket_indexes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    region_id?: SortOrder
    basket_daily_total_id?: SortOrder
  }

  export type basketsAvgOrderByAggregateInput = {
    id?: SortOrder
    goodfood_id?: SortOrder
    region_id?: SortOrder
    basket_daily_total_id?: SortOrder
  }

  export type basketsMaxOrderByAggregateInput = {
    id?: SortOrder
    goodfood_id?: SortOrder
    delivery_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    region_id?: SortOrder
    basket_daily_total_id?: SortOrder
  }

  export type basketsMinOrderByAggregateInput = {
    id?: SortOrder
    goodfood_id?: SortOrder
    delivery_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    region_id?: SortOrder
    basket_daily_total_id?: SortOrder
  }

  export type basketsSumOrderByAggregateInput = {
    id?: SortOrder
    goodfood_id?: SortOrder
    region_id?: SortOrder
    basket_daily_total_id?: SortOrder
  }

  export type Product_region_competitor_urlsListRelationFilter = {
    every?: product_region_competitor_urlsWhereInput
    some?: product_region_competitor_urlsWhereInput
    none?: product_region_competitor_urlsWhereInput
  }

  export type Scaled_pricesListRelationFilter = {
    every?: scaled_pricesWhereInput
    some?: scaled_pricesWhereInput
    none?: scaled_pricesWhereInput
  }

  export type product_region_competitor_urlsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type scaled_pricesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type competitorsCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    display_text?: SortOrder
  }

  export type competitorsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type competitorsMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    display_text?: SortOrder
  }

  export type competitorsMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    display_text?: SortOrder
  }

  export type competitorsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type migrationsCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    name?: SortOrder
  }

  export type migrationsAvgOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
  }

  export type migrationsMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    name?: SortOrder
  }

  export type migrationsMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    name?: SortOrder
  }

  export type migrationsSumOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
  }

  export type BigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type ProductsRelationFilter = {
    is?: productsWhereInput
    isNot?: productsWhereInput
  }

  export type price_recommendationsCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    region_id?: SortOrder
    sale_price?: SortOrder
    list_price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type price_recommendationsAvgOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    region_id?: SortOrder
    sale_price?: SortOrder
    list_price?: SortOrder
  }

  export type price_recommendationsMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    region_id?: SortOrder
    sale_price?: SortOrder
    list_price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type price_recommendationsMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    region_id?: SortOrder
    sale_price?: SortOrder
    list_price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type price_recommendationsSumOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    region_id?: SortOrder
    sale_price?: SortOrder
    list_price?: SortOrder
  }

  export type Product_region_competitor_urls_former_urlsListRelationFilter = {
    every?: product_region_competitor_urls_former_urlsWhereInput
    some?: product_region_competitor_urls_former_urlsWhereInput
    none?: product_region_competitor_urls_former_urlsWhereInput
  }

  export type product_region_competitor_urls_former_urlsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type product_region_competitor_urlsCompetitor_product_region_uniqueCompoundUniqueInput = {
    product_id: number
    competitor_id: number
    region_id: number
  }

  export type product_region_competitor_urlsCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    region_id?: SortOrder
    competitor_id?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type product_region_competitor_urlsAvgOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    region_id?: SortOrder
    competitor_id?: SortOrder
  }

  export type product_region_competitor_urlsMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    region_id?: SortOrder
    competitor_id?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type product_region_competitor_urlsMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    region_id?: SortOrder
    competitor_id?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type product_region_competitor_urlsSumOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    region_id?: SortOrder
    competitor_id?: SortOrder
  }

  export type Product_region_competitor_urlsRelationFilter = {
    is?: product_region_competitor_urlsWhereInput
    isNot?: product_region_competitor_urlsWhereInput
  }

  export type product_region_competitor_urls_former_urlsCountOrderByAggregateInput = {
    product_region_competitor_url_id?: SortOrder
    old_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    id?: SortOrder
  }

  export type product_region_competitor_urls_former_urlsAvgOrderByAggregateInput = {
    product_region_competitor_url_id?: SortOrder
    id?: SortOrder
  }

  export type product_region_competitor_urls_former_urlsMaxOrderByAggregateInput = {
    product_region_competitor_url_id?: SortOrder
    old_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    id?: SortOrder
  }

  export type product_region_competitor_urls_former_urlsMinOrderByAggregateInput = {
    product_region_competitor_url_id?: SortOrder
    old_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    id?: SortOrder
  }

  export type product_region_competitor_urls_former_urlsSumOrderByAggregateInput = {
    product_region_competitor_url_id?: SortOrder
    id?: SortOrder
  }

  export type product_region_price_dataPrice_date_product_region_uniqueCompoundUniqueInput = {
    product_id: number
    region_id: number
  }

  export type product_region_price_dataCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    region_id?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    threshold_price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type product_region_price_dataAvgOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    region_id?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    threshold_price?: SortOrder
  }

  export type product_region_price_dataMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    region_id?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    threshold_price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type product_region_price_dataMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    region_id?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    threshold_price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type product_region_price_dataSumOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    region_id?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    threshold_price?: SortOrder
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type UnitsRelationFilter = {
    is?: unitsWhereInput
    isNot?: unitsWhereInput
  }

  export type Price_recommendationsListRelationFilter = {
    every?: price_recommendationsWhereInput
    some?: price_recommendationsWhereInput
    none?: price_recommendationsWhereInput
  }

  export type Product_region_price_dataListRelationFilter = {
    every?: product_region_price_dataWhereInput
    some?: product_region_price_dataWhereInput
    none?: product_region_price_dataWhereInput
  }

  export type price_recommendationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type product_region_price_dataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productsCountOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    package_quantity?: SortOrder
    package_units?: SortOrder
    package_weight?: SortOrder
    weight_unit_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type productsAvgOrderByAggregateInput = {
    id?: SortOrder
    package_quantity?: SortOrder
    package_weight?: SortOrder
    weight_unit_id?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    package_quantity?: SortOrder
    package_units?: SortOrder
    package_weight?: SortOrder
    weight_unit_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    package_quantity?: SortOrder
    package_units?: SortOrder
    package_weight?: SortOrder
    weight_unit_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type productsSumOrderByAggregateInput = {
    id?: SortOrder
    package_quantity?: SortOrder
    package_weight?: SortOrder
    weight_unit_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type BoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type regionsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    facility?: SortOrder
    city?: SortOrder
    province?: SortOrder
    postal_code?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type regionsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type regionsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    facility?: SortOrder
    city?: SortOrder
    province?: SortOrder
    postal_code?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type regionsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    facility?: SortOrder
    city?: SortOrder
    province?: SortOrder
    postal_code?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type regionsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type Scrape_resultsRelationFilter = {
    is?: scrape_resultsWhereInput
    isNot?: scrape_resultsWhereInput
  }

  export type scaled_pricesCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    competitor_id?: SortOrder
    region_id?: SortOrder
    scrape_result_id?: SortOrder
    competitor_scaled_price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type scaled_pricesAvgOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    competitor_id?: SortOrder
    region_id?: SortOrder
    scrape_result_id?: SortOrder
    competitor_scaled_price?: SortOrder
  }

  export type scaled_pricesMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    competitor_id?: SortOrder
    region_id?: SortOrder
    scrape_result_id?: SortOrder
    competitor_scaled_price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type scaled_pricesMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    competitor_id?: SortOrder
    region_id?: SortOrder
    scrape_result_id?: SortOrder
    competitor_scaled_price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type scaled_pricesSumOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    competitor_id?: SortOrder
    region_id?: SortOrder
    scrape_result_id?: SortOrder
    competitor_scaled_price?: SortOrder
  }

  export type scrape_resultsCountOrderByAggregateInput = {
    id?: SortOrder
    competitor_sale_price?: SortOrder
    competitor_list_price?: SortOrder
    competitor_sold_by_volume?: SortOrder
    competitor_sold_by_unit_id?: SortOrder
    promotional_info?: SortOrder
    data_source?: SortOrder
    scrape_time?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type scrape_resultsAvgOrderByAggregateInput = {
    id?: SortOrder
    competitor_sale_price?: SortOrder
    competitor_list_price?: SortOrder
    competitor_sold_by_volume?: SortOrder
    competitor_sold_by_unit_id?: SortOrder
  }

  export type scrape_resultsMaxOrderByAggregateInput = {
    id?: SortOrder
    competitor_sale_price?: SortOrder
    competitor_list_price?: SortOrder
    competitor_sold_by_volume?: SortOrder
    competitor_sold_by_unit_id?: SortOrder
    promotional_info?: SortOrder
    data_source?: SortOrder
    scrape_time?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type scrape_resultsMinOrderByAggregateInput = {
    id?: SortOrder
    competitor_sale_price?: SortOrder
    competitor_list_price?: SortOrder
    competitor_sold_by_volume?: SortOrder
    competitor_sold_by_unit_id?: SortOrder
    promotional_info?: SortOrder
    data_source?: SortOrder
    scrape_time?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type scrape_resultsSumOrderByAggregateInput = {
    id?: SortOrder
    competitor_sale_price?: SortOrder
    competitor_list_price?: SortOrder
    competitor_sold_by_volume?: SortOrder
    competitor_sold_by_unit_id?: SortOrder
  }

  export type ProductsListRelationFilter = {
    every?: productsWhereInput
    some?: productsWhereInput
    none?: productsWhereInput
  }

  export type Scrape_resultsListRelationFilter = {
    every?: scrape_resultsWhereInput
    some?: scrape_resultsWhereInput
    none?: scrape_resultsWhereInput
  }

  export type UnitsListRelationFilter = {
    every?: unitsWhereInput
    some?: unitsWhereInput
    none?: unitsWhereInput
  }

  export type productsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type scrape_resultsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type unitsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type unitsCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    display_text?: SortOrder
    base_unit_id?: SortOrder
    scale_of_base_unit?: SortOrder
  }

  export type unitsAvgOrderByAggregateInput = {
    id?: SortOrder
    base_unit_id?: SortOrder
    scale_of_base_unit?: SortOrder
  }

  export type unitsMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    display_text?: SortOrder
    base_unit_id?: SortOrder
    scale_of_base_unit?: SortOrder
  }

  export type unitsMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    display_text?: SortOrder
    base_unit_id?: SortOrder
    scale_of_base_unit?: SortOrder
  }

  export type unitsSumOrderByAggregateInput = {
    id?: SortOrder
    base_unit_id?: SortOrder
    scale_of_base_unit?: SortOrder
  }

  export type basketsCreateNestedManyWithoutBasket_daily_totalsInput = {
    create?: XOR<Enumerable<basketsCreateWithoutBasket_daily_totalsInput>, Enumerable<basketsUncheckedCreateWithoutBasket_daily_totalsInput>>
    connectOrCreate?: Enumerable<basketsCreateOrConnectWithoutBasket_daily_totalsInput>
    createMany?: basketsCreateManyBasket_daily_totalsInputEnvelope
    connect?: Enumerable<basketsWhereUniqueInput>
  }

  export type basketsUncheckedCreateNestedManyWithoutBasket_daily_totalsInput = {
    create?: XOR<Enumerable<basketsCreateWithoutBasket_daily_totalsInput>, Enumerable<basketsUncheckedCreateWithoutBasket_daily_totalsInput>>
    connectOrCreate?: Enumerable<basketsCreateOrConnectWithoutBasket_daily_totalsInput>
    createMany?: basketsCreateManyBasket_daily_totalsInputEnvelope
    connect?: Enumerable<basketsWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type basketsUpdateManyWithoutBasket_daily_totalsInput = {
    create?: XOR<Enumerable<basketsCreateWithoutBasket_daily_totalsInput>, Enumerable<basketsUncheckedCreateWithoutBasket_daily_totalsInput>>
    connectOrCreate?: Enumerable<basketsCreateOrConnectWithoutBasket_daily_totalsInput>
    upsert?: Enumerable<basketsUpsertWithWhereUniqueWithoutBasket_daily_totalsInput>
    createMany?: basketsCreateManyBasket_daily_totalsInputEnvelope
    connect?: Enumerable<basketsWhereUniqueInput>
    set?: Enumerable<basketsWhereUniqueInput>
    disconnect?: Enumerable<basketsWhereUniqueInput>
    delete?: Enumerable<basketsWhereUniqueInput>
    update?: Enumerable<basketsUpdateWithWhereUniqueWithoutBasket_daily_totalsInput>
    updateMany?: Enumerable<basketsUpdateManyWithWhereWithoutBasket_daily_totalsInput>
    deleteMany?: Enumerable<basketsScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type basketsUncheckedUpdateManyWithoutBasket_daily_totalsInput = {
    create?: XOR<Enumerable<basketsCreateWithoutBasket_daily_totalsInput>, Enumerable<basketsUncheckedCreateWithoutBasket_daily_totalsInput>>
    connectOrCreate?: Enumerable<basketsCreateOrConnectWithoutBasket_daily_totalsInput>
    upsert?: Enumerable<basketsUpsertWithWhereUniqueWithoutBasket_daily_totalsInput>
    createMany?: basketsCreateManyBasket_daily_totalsInputEnvelope
    connect?: Enumerable<basketsWhereUniqueInput>
    set?: Enumerable<basketsWhereUniqueInput>
    disconnect?: Enumerable<basketsWhereUniqueInput>
    delete?: Enumerable<basketsWhereUniqueInput>
    update?: Enumerable<basketsUpdateWithWhereUniqueWithoutBasket_daily_totalsInput>
    updateMany?: Enumerable<basketsUpdateManyWithWhereWithoutBasket_daily_totalsInput>
    deleteMany?: Enumerable<basketsScalarWhereInput>
  }

  export type basket_line_itemsCreateNestedOneWithoutBasket_line_item_competitor_equivalentsInput = {
    create?: XOR<basket_line_itemsCreateWithoutBasket_line_item_competitor_equivalentsInput, basket_line_itemsUncheckedCreateWithoutBasket_line_item_competitor_equivalentsInput>
    connectOrCreate?: basket_line_itemsCreateOrConnectWithoutBasket_line_item_competitor_equivalentsInput
    connect?: basket_line_itemsWhereUniqueInput
  }

  export type competitorsCreateNestedOneWithoutBasket_line_item_competitor_equivalentsInput = {
    create?: XOR<competitorsCreateWithoutBasket_line_item_competitor_equivalentsInput, competitorsUncheckedCreateWithoutBasket_line_item_competitor_equivalentsInput>
    connectOrCreate?: competitorsCreateOrConnectWithoutBasket_line_item_competitor_equivalentsInput
    connect?: competitorsWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type basket_line_itemsUpdateOneRequiredWithoutBasket_line_item_competitor_equivalentsInput = {
    create?: XOR<basket_line_itemsCreateWithoutBasket_line_item_competitor_equivalentsInput, basket_line_itemsUncheckedCreateWithoutBasket_line_item_competitor_equivalentsInput>
    connectOrCreate?: basket_line_itemsCreateOrConnectWithoutBasket_line_item_competitor_equivalentsInput
    upsert?: basket_line_itemsUpsertWithoutBasket_line_item_competitor_equivalentsInput
    connect?: basket_line_itemsWhereUniqueInput
    update?: XOR<basket_line_itemsUpdateWithoutBasket_line_item_competitor_equivalentsInput, basket_line_itemsUncheckedUpdateWithoutBasket_line_item_competitor_equivalentsInput>
  }

  export type competitorsUpdateOneRequiredWithoutBasket_line_item_competitor_equivalentsInput = {
    create?: XOR<competitorsCreateWithoutBasket_line_item_competitor_equivalentsInput, competitorsUncheckedCreateWithoutBasket_line_item_competitor_equivalentsInput>
    connectOrCreate?: competitorsCreateOrConnectWithoutBasket_line_item_competitor_equivalentsInput
    upsert?: competitorsUpsertWithoutBasket_line_item_competitor_equivalentsInput
    connect?: competitorsWhereUniqueInput
    update?: XOR<competitorsUpdateWithoutBasket_line_item_competitor_equivalentsInput, competitorsUncheckedUpdateWithoutBasket_line_item_competitor_equivalentsInput>
  }

  export type basket_line_itemsCreateNestedOneWithoutBasket_line_item_recommended_pricesInput = {
    create?: XOR<basket_line_itemsCreateWithoutBasket_line_item_recommended_pricesInput, basket_line_itemsUncheckedCreateWithoutBasket_line_item_recommended_pricesInput>
    connectOrCreate?: basket_line_itemsCreateOrConnectWithoutBasket_line_item_recommended_pricesInput
    connect?: basket_line_itemsWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type basket_line_itemsUpdateOneRequiredWithoutBasket_line_item_recommended_pricesInput = {
    create?: XOR<basket_line_itemsCreateWithoutBasket_line_item_recommended_pricesInput, basket_line_itemsUncheckedCreateWithoutBasket_line_item_recommended_pricesInput>
    connectOrCreate?: basket_line_itemsCreateOrConnectWithoutBasket_line_item_recommended_pricesInput
    upsert?: basket_line_itemsUpsertWithoutBasket_line_item_recommended_pricesInput
    connect?: basket_line_itemsWhereUniqueInput
    update?: XOR<basket_line_itemsUpdateWithoutBasket_line_item_recommended_pricesInput, basket_line_itemsUncheckedUpdateWithoutBasket_line_item_recommended_pricesInput>
  }

  export type basket_line_item_competitor_equivalentsCreateNestedManyWithoutBasket_line_itemsInput = {
    create?: XOR<Enumerable<basket_line_item_competitor_equivalentsCreateWithoutBasket_line_itemsInput>, Enumerable<basket_line_item_competitor_equivalentsUncheckedCreateWithoutBasket_line_itemsInput>>
    connectOrCreate?: Enumerable<basket_line_item_competitor_equivalentsCreateOrConnectWithoutBasket_line_itemsInput>
    createMany?: basket_line_item_competitor_equivalentsCreateManyBasket_line_itemsInputEnvelope
    connect?: Enumerable<basket_line_item_competitor_equivalentsWhereUniqueInput>
  }

  export type basket_line_item_recommended_pricesCreateNestedManyWithoutBasket_line_itemsInput = {
    create?: XOR<Enumerable<basket_line_item_recommended_pricesCreateWithoutBasket_line_itemsInput>, Enumerable<basket_line_item_recommended_pricesUncheckedCreateWithoutBasket_line_itemsInput>>
    connectOrCreate?: Enumerable<basket_line_item_recommended_pricesCreateOrConnectWithoutBasket_line_itemsInput>
    createMany?: basket_line_item_recommended_pricesCreateManyBasket_line_itemsInputEnvelope
    connect?: Enumerable<basket_line_item_recommended_pricesWhereUniqueInput>
  }

  export type basket_line_item_competitor_equivalentsUncheckedCreateNestedManyWithoutBasket_line_itemsInput = {
    create?: XOR<Enumerable<basket_line_item_competitor_equivalentsCreateWithoutBasket_line_itemsInput>, Enumerable<basket_line_item_competitor_equivalentsUncheckedCreateWithoutBasket_line_itemsInput>>
    connectOrCreate?: Enumerable<basket_line_item_competitor_equivalentsCreateOrConnectWithoutBasket_line_itemsInput>
    createMany?: basket_line_item_competitor_equivalentsCreateManyBasket_line_itemsInputEnvelope
    connect?: Enumerable<basket_line_item_competitor_equivalentsWhereUniqueInput>
  }

  export type basket_line_item_recommended_pricesUncheckedCreateNestedManyWithoutBasket_line_itemsInput = {
    create?: XOR<Enumerable<basket_line_item_recommended_pricesCreateWithoutBasket_line_itemsInput>, Enumerable<basket_line_item_recommended_pricesUncheckedCreateWithoutBasket_line_itemsInput>>
    connectOrCreate?: Enumerable<basket_line_item_recommended_pricesCreateOrConnectWithoutBasket_line_itemsInput>
    createMany?: basket_line_item_recommended_pricesCreateManyBasket_line_itemsInputEnvelope
    connect?: Enumerable<basket_line_item_recommended_pricesWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type basket_line_item_competitor_equivalentsUpdateManyWithoutBasket_line_itemsInput = {
    create?: XOR<Enumerable<basket_line_item_competitor_equivalentsCreateWithoutBasket_line_itemsInput>, Enumerable<basket_line_item_competitor_equivalentsUncheckedCreateWithoutBasket_line_itemsInput>>
    connectOrCreate?: Enumerable<basket_line_item_competitor_equivalentsCreateOrConnectWithoutBasket_line_itemsInput>
    upsert?: Enumerable<basket_line_item_competitor_equivalentsUpsertWithWhereUniqueWithoutBasket_line_itemsInput>
    createMany?: basket_line_item_competitor_equivalentsCreateManyBasket_line_itemsInputEnvelope
    connect?: Enumerable<basket_line_item_competitor_equivalentsWhereUniqueInput>
    set?: Enumerable<basket_line_item_competitor_equivalentsWhereUniqueInput>
    disconnect?: Enumerable<basket_line_item_competitor_equivalentsWhereUniqueInput>
    delete?: Enumerable<basket_line_item_competitor_equivalentsWhereUniqueInput>
    update?: Enumerable<basket_line_item_competitor_equivalentsUpdateWithWhereUniqueWithoutBasket_line_itemsInput>
    updateMany?: Enumerable<basket_line_item_competitor_equivalentsUpdateManyWithWhereWithoutBasket_line_itemsInput>
    deleteMany?: Enumerable<basket_line_item_competitor_equivalentsScalarWhereInput>
  }

  export type basket_line_item_recommended_pricesUpdateManyWithoutBasket_line_itemsInput = {
    create?: XOR<Enumerable<basket_line_item_recommended_pricesCreateWithoutBasket_line_itemsInput>, Enumerable<basket_line_item_recommended_pricesUncheckedCreateWithoutBasket_line_itemsInput>>
    connectOrCreate?: Enumerable<basket_line_item_recommended_pricesCreateOrConnectWithoutBasket_line_itemsInput>
    upsert?: Enumerable<basket_line_item_recommended_pricesUpsertWithWhereUniqueWithoutBasket_line_itemsInput>
    createMany?: basket_line_item_recommended_pricesCreateManyBasket_line_itemsInputEnvelope
    connect?: Enumerable<basket_line_item_recommended_pricesWhereUniqueInput>
    set?: Enumerable<basket_line_item_recommended_pricesWhereUniqueInput>
    disconnect?: Enumerable<basket_line_item_recommended_pricesWhereUniqueInput>
    delete?: Enumerable<basket_line_item_recommended_pricesWhereUniqueInput>
    update?: Enumerable<basket_line_item_recommended_pricesUpdateWithWhereUniqueWithoutBasket_line_itemsInput>
    updateMany?: Enumerable<basket_line_item_recommended_pricesUpdateManyWithWhereWithoutBasket_line_itemsInput>
    deleteMany?: Enumerable<basket_line_item_recommended_pricesScalarWhereInput>
  }

  export type basket_line_item_competitor_equivalentsUncheckedUpdateManyWithoutBasket_line_itemsInput = {
    create?: XOR<Enumerable<basket_line_item_competitor_equivalentsCreateWithoutBasket_line_itemsInput>, Enumerable<basket_line_item_competitor_equivalentsUncheckedCreateWithoutBasket_line_itemsInput>>
    connectOrCreate?: Enumerable<basket_line_item_competitor_equivalentsCreateOrConnectWithoutBasket_line_itemsInput>
    upsert?: Enumerable<basket_line_item_competitor_equivalentsUpsertWithWhereUniqueWithoutBasket_line_itemsInput>
    createMany?: basket_line_item_competitor_equivalentsCreateManyBasket_line_itemsInputEnvelope
    connect?: Enumerable<basket_line_item_competitor_equivalentsWhereUniqueInput>
    set?: Enumerable<basket_line_item_competitor_equivalentsWhereUniqueInput>
    disconnect?: Enumerable<basket_line_item_competitor_equivalentsWhereUniqueInput>
    delete?: Enumerable<basket_line_item_competitor_equivalentsWhereUniqueInput>
    update?: Enumerable<basket_line_item_competitor_equivalentsUpdateWithWhereUniqueWithoutBasket_line_itemsInput>
    updateMany?: Enumerable<basket_line_item_competitor_equivalentsUpdateManyWithWhereWithoutBasket_line_itemsInput>
    deleteMany?: Enumerable<basket_line_item_competitor_equivalentsScalarWhereInput>
  }

  export type basket_line_item_recommended_pricesUncheckedUpdateManyWithoutBasket_line_itemsInput = {
    create?: XOR<Enumerable<basket_line_item_recommended_pricesCreateWithoutBasket_line_itemsInput>, Enumerable<basket_line_item_recommended_pricesUncheckedCreateWithoutBasket_line_itemsInput>>
    connectOrCreate?: Enumerable<basket_line_item_recommended_pricesCreateOrConnectWithoutBasket_line_itemsInput>
    upsert?: Enumerable<basket_line_item_recommended_pricesUpsertWithWhereUniqueWithoutBasket_line_itemsInput>
    createMany?: basket_line_item_recommended_pricesCreateManyBasket_line_itemsInputEnvelope
    connect?: Enumerable<basket_line_item_recommended_pricesWhereUniqueInput>
    set?: Enumerable<basket_line_item_recommended_pricesWhereUniqueInput>
    disconnect?: Enumerable<basket_line_item_recommended_pricesWhereUniqueInput>
    delete?: Enumerable<basket_line_item_recommended_pricesWhereUniqueInput>
    update?: Enumerable<basket_line_item_recommended_pricesUpdateWithWhereUniqueWithoutBasket_line_itemsInput>
    updateMany?: Enumerable<basket_line_item_recommended_pricesUpdateManyWithWhereWithoutBasket_line_itemsInput>
    deleteMany?: Enumerable<basket_line_item_recommended_pricesScalarWhereInput>
  }

  export type basket_daily_totalsCreateNestedOneWithoutBasketsInput = {
    create?: XOR<basket_daily_totalsCreateWithoutBasketsInput, basket_daily_totalsUncheckedCreateWithoutBasketsInput>
    connectOrCreate?: basket_daily_totalsCreateOrConnectWithoutBasketsInput
    connect?: basket_daily_totalsWhereUniqueInput
  }

  export type regionsCreateNestedOneWithoutBasketsInput = {
    create?: XOR<regionsCreateWithoutBasketsInput, regionsUncheckedCreateWithoutBasketsInput>
    connectOrCreate?: regionsCreateOrConnectWithoutBasketsInput
    connect?: regionsWhereUniqueInput
  }

  export type basket_daily_totalsUpdateOneRequiredWithoutBasketsInput = {
    create?: XOR<basket_daily_totalsCreateWithoutBasketsInput, basket_daily_totalsUncheckedCreateWithoutBasketsInput>
    connectOrCreate?: basket_daily_totalsCreateOrConnectWithoutBasketsInput
    upsert?: basket_daily_totalsUpsertWithoutBasketsInput
    connect?: basket_daily_totalsWhereUniqueInput
    update?: XOR<basket_daily_totalsUpdateWithoutBasketsInput, basket_daily_totalsUncheckedUpdateWithoutBasketsInput>
  }

  export type regionsUpdateOneRequiredWithoutBasketsInput = {
    create?: XOR<regionsCreateWithoutBasketsInput, regionsUncheckedCreateWithoutBasketsInput>
    connectOrCreate?: regionsCreateOrConnectWithoutBasketsInput
    upsert?: regionsUpsertWithoutBasketsInput
    connect?: regionsWhereUniqueInput
    update?: XOR<regionsUpdateWithoutBasketsInput, regionsUncheckedUpdateWithoutBasketsInput>
  }

  export type basket_line_item_competitor_equivalentsCreateNestedManyWithoutCompetitorsInput = {
    create?: XOR<Enumerable<basket_line_item_competitor_equivalentsCreateWithoutCompetitorsInput>, Enumerable<basket_line_item_competitor_equivalentsUncheckedCreateWithoutCompetitorsInput>>
    connectOrCreate?: Enumerable<basket_line_item_competitor_equivalentsCreateOrConnectWithoutCompetitorsInput>
    createMany?: basket_line_item_competitor_equivalentsCreateManyCompetitorsInputEnvelope
    connect?: Enumerable<basket_line_item_competitor_equivalentsWhereUniqueInput>
  }

  export type product_region_competitor_urlsCreateNestedManyWithoutCompetitorsInput = {
    create?: XOR<Enumerable<product_region_competitor_urlsCreateWithoutCompetitorsInput>, Enumerable<product_region_competitor_urlsUncheckedCreateWithoutCompetitorsInput>>
    connectOrCreate?: Enumerable<product_region_competitor_urlsCreateOrConnectWithoutCompetitorsInput>
    createMany?: product_region_competitor_urlsCreateManyCompetitorsInputEnvelope
    connect?: Enumerable<product_region_competitor_urlsWhereUniqueInput>
  }

  export type scaled_pricesCreateNestedManyWithoutCompetitorsInput = {
    create?: XOR<Enumerable<scaled_pricesCreateWithoutCompetitorsInput>, Enumerable<scaled_pricesUncheckedCreateWithoutCompetitorsInput>>
    connectOrCreate?: Enumerable<scaled_pricesCreateOrConnectWithoutCompetitorsInput>
    createMany?: scaled_pricesCreateManyCompetitorsInputEnvelope
    connect?: Enumerable<scaled_pricesWhereUniqueInput>
  }

  export type basket_line_item_competitor_equivalentsUncheckedCreateNestedManyWithoutCompetitorsInput = {
    create?: XOR<Enumerable<basket_line_item_competitor_equivalentsCreateWithoutCompetitorsInput>, Enumerable<basket_line_item_competitor_equivalentsUncheckedCreateWithoutCompetitorsInput>>
    connectOrCreate?: Enumerable<basket_line_item_competitor_equivalentsCreateOrConnectWithoutCompetitorsInput>
    createMany?: basket_line_item_competitor_equivalentsCreateManyCompetitorsInputEnvelope
    connect?: Enumerable<basket_line_item_competitor_equivalentsWhereUniqueInput>
  }

  export type product_region_competitor_urlsUncheckedCreateNestedManyWithoutCompetitorsInput = {
    create?: XOR<Enumerable<product_region_competitor_urlsCreateWithoutCompetitorsInput>, Enumerable<product_region_competitor_urlsUncheckedCreateWithoutCompetitorsInput>>
    connectOrCreate?: Enumerable<product_region_competitor_urlsCreateOrConnectWithoutCompetitorsInput>
    createMany?: product_region_competitor_urlsCreateManyCompetitorsInputEnvelope
    connect?: Enumerable<product_region_competitor_urlsWhereUniqueInput>
  }

  export type scaled_pricesUncheckedCreateNestedManyWithoutCompetitorsInput = {
    create?: XOR<Enumerable<scaled_pricesCreateWithoutCompetitorsInput>, Enumerable<scaled_pricesUncheckedCreateWithoutCompetitorsInput>>
    connectOrCreate?: Enumerable<scaled_pricesCreateOrConnectWithoutCompetitorsInput>
    createMany?: scaled_pricesCreateManyCompetitorsInputEnvelope
    connect?: Enumerable<scaled_pricesWhereUniqueInput>
  }

  export type basket_line_item_competitor_equivalentsUpdateManyWithoutCompetitorsInput = {
    create?: XOR<Enumerable<basket_line_item_competitor_equivalentsCreateWithoutCompetitorsInput>, Enumerable<basket_line_item_competitor_equivalentsUncheckedCreateWithoutCompetitorsInput>>
    connectOrCreate?: Enumerable<basket_line_item_competitor_equivalentsCreateOrConnectWithoutCompetitorsInput>
    upsert?: Enumerable<basket_line_item_competitor_equivalentsUpsertWithWhereUniqueWithoutCompetitorsInput>
    createMany?: basket_line_item_competitor_equivalentsCreateManyCompetitorsInputEnvelope
    connect?: Enumerable<basket_line_item_competitor_equivalentsWhereUniqueInput>
    set?: Enumerable<basket_line_item_competitor_equivalentsWhereUniqueInput>
    disconnect?: Enumerable<basket_line_item_competitor_equivalentsWhereUniqueInput>
    delete?: Enumerable<basket_line_item_competitor_equivalentsWhereUniqueInput>
    update?: Enumerable<basket_line_item_competitor_equivalentsUpdateWithWhereUniqueWithoutCompetitorsInput>
    updateMany?: Enumerable<basket_line_item_competitor_equivalentsUpdateManyWithWhereWithoutCompetitorsInput>
    deleteMany?: Enumerable<basket_line_item_competitor_equivalentsScalarWhereInput>
  }

  export type product_region_competitor_urlsUpdateManyWithoutCompetitorsInput = {
    create?: XOR<Enumerable<product_region_competitor_urlsCreateWithoutCompetitorsInput>, Enumerable<product_region_competitor_urlsUncheckedCreateWithoutCompetitorsInput>>
    connectOrCreate?: Enumerable<product_region_competitor_urlsCreateOrConnectWithoutCompetitorsInput>
    upsert?: Enumerable<product_region_competitor_urlsUpsertWithWhereUniqueWithoutCompetitorsInput>
    createMany?: product_region_competitor_urlsCreateManyCompetitorsInputEnvelope
    connect?: Enumerable<product_region_competitor_urlsWhereUniqueInput>
    set?: Enumerable<product_region_competitor_urlsWhereUniqueInput>
    disconnect?: Enumerable<product_region_competitor_urlsWhereUniqueInput>
    delete?: Enumerable<product_region_competitor_urlsWhereUniqueInput>
    update?: Enumerable<product_region_competitor_urlsUpdateWithWhereUniqueWithoutCompetitorsInput>
    updateMany?: Enumerable<product_region_competitor_urlsUpdateManyWithWhereWithoutCompetitorsInput>
    deleteMany?: Enumerable<product_region_competitor_urlsScalarWhereInput>
  }

  export type scaled_pricesUpdateManyWithoutCompetitorsInput = {
    create?: XOR<Enumerable<scaled_pricesCreateWithoutCompetitorsInput>, Enumerable<scaled_pricesUncheckedCreateWithoutCompetitorsInput>>
    connectOrCreate?: Enumerable<scaled_pricesCreateOrConnectWithoutCompetitorsInput>
    upsert?: Enumerable<scaled_pricesUpsertWithWhereUniqueWithoutCompetitorsInput>
    createMany?: scaled_pricesCreateManyCompetitorsInputEnvelope
    connect?: Enumerable<scaled_pricesWhereUniqueInput>
    set?: Enumerable<scaled_pricesWhereUniqueInput>
    disconnect?: Enumerable<scaled_pricesWhereUniqueInput>
    delete?: Enumerable<scaled_pricesWhereUniqueInput>
    update?: Enumerable<scaled_pricesUpdateWithWhereUniqueWithoutCompetitorsInput>
    updateMany?: Enumerable<scaled_pricesUpdateManyWithWhereWithoutCompetitorsInput>
    deleteMany?: Enumerable<scaled_pricesScalarWhereInput>
  }

  export type basket_line_item_competitor_equivalentsUncheckedUpdateManyWithoutCompetitorsInput = {
    create?: XOR<Enumerable<basket_line_item_competitor_equivalentsCreateWithoutCompetitorsInput>, Enumerable<basket_line_item_competitor_equivalentsUncheckedCreateWithoutCompetitorsInput>>
    connectOrCreate?: Enumerable<basket_line_item_competitor_equivalentsCreateOrConnectWithoutCompetitorsInput>
    upsert?: Enumerable<basket_line_item_competitor_equivalentsUpsertWithWhereUniqueWithoutCompetitorsInput>
    createMany?: basket_line_item_competitor_equivalentsCreateManyCompetitorsInputEnvelope
    connect?: Enumerable<basket_line_item_competitor_equivalentsWhereUniqueInput>
    set?: Enumerable<basket_line_item_competitor_equivalentsWhereUniqueInput>
    disconnect?: Enumerable<basket_line_item_competitor_equivalentsWhereUniqueInput>
    delete?: Enumerable<basket_line_item_competitor_equivalentsWhereUniqueInput>
    update?: Enumerable<basket_line_item_competitor_equivalentsUpdateWithWhereUniqueWithoutCompetitorsInput>
    updateMany?: Enumerable<basket_line_item_competitor_equivalentsUpdateManyWithWhereWithoutCompetitorsInput>
    deleteMany?: Enumerable<basket_line_item_competitor_equivalentsScalarWhereInput>
  }

  export type product_region_competitor_urlsUncheckedUpdateManyWithoutCompetitorsInput = {
    create?: XOR<Enumerable<product_region_competitor_urlsCreateWithoutCompetitorsInput>, Enumerable<product_region_competitor_urlsUncheckedCreateWithoutCompetitorsInput>>
    connectOrCreate?: Enumerable<product_region_competitor_urlsCreateOrConnectWithoutCompetitorsInput>
    upsert?: Enumerable<product_region_competitor_urlsUpsertWithWhereUniqueWithoutCompetitorsInput>
    createMany?: product_region_competitor_urlsCreateManyCompetitorsInputEnvelope
    connect?: Enumerable<product_region_competitor_urlsWhereUniqueInput>
    set?: Enumerable<product_region_competitor_urlsWhereUniqueInput>
    disconnect?: Enumerable<product_region_competitor_urlsWhereUniqueInput>
    delete?: Enumerable<product_region_competitor_urlsWhereUniqueInput>
    update?: Enumerable<product_region_competitor_urlsUpdateWithWhereUniqueWithoutCompetitorsInput>
    updateMany?: Enumerable<product_region_competitor_urlsUpdateManyWithWhereWithoutCompetitorsInput>
    deleteMany?: Enumerable<product_region_competitor_urlsScalarWhereInput>
  }

  export type scaled_pricesUncheckedUpdateManyWithoutCompetitorsInput = {
    create?: XOR<Enumerable<scaled_pricesCreateWithoutCompetitorsInput>, Enumerable<scaled_pricesUncheckedCreateWithoutCompetitorsInput>>
    connectOrCreate?: Enumerable<scaled_pricesCreateOrConnectWithoutCompetitorsInput>
    upsert?: Enumerable<scaled_pricesUpsertWithWhereUniqueWithoutCompetitorsInput>
    createMany?: scaled_pricesCreateManyCompetitorsInputEnvelope
    connect?: Enumerable<scaled_pricesWhereUniqueInput>
    set?: Enumerable<scaled_pricesWhereUniqueInput>
    disconnect?: Enumerable<scaled_pricesWhereUniqueInput>
    delete?: Enumerable<scaled_pricesWhereUniqueInput>
    update?: Enumerable<scaled_pricesUpdateWithWhereUniqueWithoutCompetitorsInput>
    updateMany?: Enumerable<scaled_pricesUpdateManyWithWhereWithoutCompetitorsInput>
    deleteMany?: Enumerable<scaled_pricesScalarWhereInput>
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type productsCreateNestedOneWithoutPrice_recommendationsInput = {
    create?: XOR<productsCreateWithoutPrice_recommendationsInput, productsUncheckedCreateWithoutPrice_recommendationsInput>
    connectOrCreate?: productsCreateOrConnectWithoutPrice_recommendationsInput
    connect?: productsWhereUniqueInput
  }

  export type regionsCreateNestedOneWithoutPrice_recommendationsInput = {
    create?: XOR<regionsCreateWithoutPrice_recommendationsInput, regionsUncheckedCreateWithoutPrice_recommendationsInput>
    connectOrCreate?: regionsCreateOrConnectWithoutPrice_recommendationsInput
    connect?: regionsWhereUniqueInput
  }

  export type productsUpdateOneRequiredWithoutPrice_recommendationsInput = {
    create?: XOR<productsCreateWithoutPrice_recommendationsInput, productsUncheckedCreateWithoutPrice_recommendationsInput>
    connectOrCreate?: productsCreateOrConnectWithoutPrice_recommendationsInput
    upsert?: productsUpsertWithoutPrice_recommendationsInput
    connect?: productsWhereUniqueInput
    update?: XOR<productsUpdateWithoutPrice_recommendationsInput, productsUncheckedUpdateWithoutPrice_recommendationsInput>
  }

  export type regionsUpdateOneRequiredWithoutPrice_recommendationsInput = {
    create?: XOR<regionsCreateWithoutPrice_recommendationsInput, regionsUncheckedCreateWithoutPrice_recommendationsInput>
    connectOrCreate?: regionsCreateOrConnectWithoutPrice_recommendationsInput
    upsert?: regionsUpsertWithoutPrice_recommendationsInput
    connect?: regionsWhereUniqueInput
    update?: XOR<regionsUpdateWithoutPrice_recommendationsInput, regionsUncheckedUpdateWithoutPrice_recommendationsInput>
  }

  export type competitorsCreateNestedOneWithoutProduct_region_competitor_urlsInput = {
    create?: XOR<competitorsCreateWithoutProduct_region_competitor_urlsInput, competitorsUncheckedCreateWithoutProduct_region_competitor_urlsInput>
    connectOrCreate?: competitorsCreateOrConnectWithoutProduct_region_competitor_urlsInput
    connect?: competitorsWhereUniqueInput
  }

  export type productsCreateNestedOneWithoutProduct_region_competitor_urlsInput = {
    create?: XOR<productsCreateWithoutProduct_region_competitor_urlsInput, productsUncheckedCreateWithoutProduct_region_competitor_urlsInput>
    connectOrCreate?: productsCreateOrConnectWithoutProduct_region_competitor_urlsInput
    connect?: productsWhereUniqueInput
  }

  export type regionsCreateNestedOneWithoutProduct_region_competitor_urlsInput = {
    create?: XOR<regionsCreateWithoutProduct_region_competitor_urlsInput, regionsUncheckedCreateWithoutProduct_region_competitor_urlsInput>
    connectOrCreate?: regionsCreateOrConnectWithoutProduct_region_competitor_urlsInput
    connect?: regionsWhereUniqueInput
  }

  export type product_region_competitor_urls_former_urlsCreateNestedManyWithoutProduct_region_competitor_urlsInput = {
    create?: XOR<Enumerable<product_region_competitor_urls_former_urlsCreateWithoutProduct_region_competitor_urlsInput>, Enumerable<product_region_competitor_urls_former_urlsUncheckedCreateWithoutProduct_region_competitor_urlsInput>>
    connectOrCreate?: Enumerable<product_region_competitor_urls_former_urlsCreateOrConnectWithoutProduct_region_competitor_urlsInput>
    createMany?: product_region_competitor_urls_former_urlsCreateManyProduct_region_competitor_urlsInputEnvelope
    connect?: Enumerable<product_region_competitor_urls_former_urlsWhereUniqueInput>
  }

  export type product_region_competitor_urls_former_urlsUncheckedCreateNestedManyWithoutProduct_region_competitor_urlsInput = {
    create?: XOR<Enumerable<product_region_competitor_urls_former_urlsCreateWithoutProduct_region_competitor_urlsInput>, Enumerable<product_region_competitor_urls_former_urlsUncheckedCreateWithoutProduct_region_competitor_urlsInput>>
    connectOrCreate?: Enumerable<product_region_competitor_urls_former_urlsCreateOrConnectWithoutProduct_region_competitor_urlsInput>
    createMany?: product_region_competitor_urls_former_urlsCreateManyProduct_region_competitor_urlsInputEnvelope
    connect?: Enumerable<product_region_competitor_urls_former_urlsWhereUniqueInput>
  }

  export type competitorsUpdateOneRequiredWithoutProduct_region_competitor_urlsInput = {
    create?: XOR<competitorsCreateWithoutProduct_region_competitor_urlsInput, competitorsUncheckedCreateWithoutProduct_region_competitor_urlsInput>
    connectOrCreate?: competitorsCreateOrConnectWithoutProduct_region_competitor_urlsInput
    upsert?: competitorsUpsertWithoutProduct_region_competitor_urlsInput
    connect?: competitorsWhereUniqueInput
    update?: XOR<competitorsUpdateWithoutProduct_region_competitor_urlsInput, competitorsUncheckedUpdateWithoutProduct_region_competitor_urlsInput>
  }

  export type productsUpdateOneRequiredWithoutProduct_region_competitor_urlsInput = {
    create?: XOR<productsCreateWithoutProduct_region_competitor_urlsInput, productsUncheckedCreateWithoutProduct_region_competitor_urlsInput>
    connectOrCreate?: productsCreateOrConnectWithoutProduct_region_competitor_urlsInput
    upsert?: productsUpsertWithoutProduct_region_competitor_urlsInput
    connect?: productsWhereUniqueInput
    update?: XOR<productsUpdateWithoutProduct_region_competitor_urlsInput, productsUncheckedUpdateWithoutProduct_region_competitor_urlsInput>
  }

  export type regionsUpdateOneRequiredWithoutProduct_region_competitor_urlsInput = {
    create?: XOR<regionsCreateWithoutProduct_region_competitor_urlsInput, regionsUncheckedCreateWithoutProduct_region_competitor_urlsInput>
    connectOrCreate?: regionsCreateOrConnectWithoutProduct_region_competitor_urlsInput
    upsert?: regionsUpsertWithoutProduct_region_competitor_urlsInput
    connect?: regionsWhereUniqueInput
    update?: XOR<regionsUpdateWithoutProduct_region_competitor_urlsInput, regionsUncheckedUpdateWithoutProduct_region_competitor_urlsInput>
  }

  export type product_region_competitor_urls_former_urlsUpdateManyWithoutProduct_region_competitor_urlsInput = {
    create?: XOR<Enumerable<product_region_competitor_urls_former_urlsCreateWithoutProduct_region_competitor_urlsInput>, Enumerable<product_region_competitor_urls_former_urlsUncheckedCreateWithoutProduct_region_competitor_urlsInput>>
    connectOrCreate?: Enumerable<product_region_competitor_urls_former_urlsCreateOrConnectWithoutProduct_region_competitor_urlsInput>
    upsert?: Enumerable<product_region_competitor_urls_former_urlsUpsertWithWhereUniqueWithoutProduct_region_competitor_urlsInput>
    createMany?: product_region_competitor_urls_former_urlsCreateManyProduct_region_competitor_urlsInputEnvelope
    connect?: Enumerable<product_region_competitor_urls_former_urlsWhereUniqueInput>
    set?: Enumerable<product_region_competitor_urls_former_urlsWhereUniqueInput>
    disconnect?: Enumerable<product_region_competitor_urls_former_urlsWhereUniqueInput>
    delete?: Enumerable<product_region_competitor_urls_former_urlsWhereUniqueInput>
    update?: Enumerable<product_region_competitor_urls_former_urlsUpdateWithWhereUniqueWithoutProduct_region_competitor_urlsInput>
    updateMany?: Enumerable<product_region_competitor_urls_former_urlsUpdateManyWithWhereWithoutProduct_region_competitor_urlsInput>
    deleteMany?: Enumerable<product_region_competitor_urls_former_urlsScalarWhereInput>
  }

  export type product_region_competitor_urls_former_urlsUncheckedUpdateManyWithoutProduct_region_competitor_urlsInput = {
    create?: XOR<Enumerable<product_region_competitor_urls_former_urlsCreateWithoutProduct_region_competitor_urlsInput>, Enumerable<product_region_competitor_urls_former_urlsUncheckedCreateWithoutProduct_region_competitor_urlsInput>>
    connectOrCreate?: Enumerable<product_region_competitor_urls_former_urlsCreateOrConnectWithoutProduct_region_competitor_urlsInput>
    upsert?: Enumerable<product_region_competitor_urls_former_urlsUpsertWithWhereUniqueWithoutProduct_region_competitor_urlsInput>
    createMany?: product_region_competitor_urls_former_urlsCreateManyProduct_region_competitor_urlsInputEnvelope
    connect?: Enumerable<product_region_competitor_urls_former_urlsWhereUniqueInput>
    set?: Enumerable<product_region_competitor_urls_former_urlsWhereUniqueInput>
    disconnect?: Enumerable<product_region_competitor_urls_former_urlsWhereUniqueInput>
    delete?: Enumerable<product_region_competitor_urls_former_urlsWhereUniqueInput>
    update?: Enumerable<product_region_competitor_urls_former_urlsUpdateWithWhereUniqueWithoutProduct_region_competitor_urlsInput>
    updateMany?: Enumerable<product_region_competitor_urls_former_urlsUpdateManyWithWhereWithoutProduct_region_competitor_urlsInput>
    deleteMany?: Enumerable<product_region_competitor_urls_former_urlsScalarWhereInput>
  }

  export type product_region_competitor_urlsCreateNestedOneWithoutProduct_region_competitor_urls_former_urlsInput = {
    create?: XOR<product_region_competitor_urlsCreateWithoutProduct_region_competitor_urls_former_urlsInput, product_region_competitor_urlsUncheckedCreateWithoutProduct_region_competitor_urls_former_urlsInput>
    connectOrCreate?: product_region_competitor_urlsCreateOrConnectWithoutProduct_region_competitor_urls_former_urlsInput
    connect?: product_region_competitor_urlsWhereUniqueInput
  }

  export type product_region_competitor_urlsUpdateOneRequiredWithoutProduct_region_competitor_urls_former_urlsInput = {
    create?: XOR<product_region_competitor_urlsCreateWithoutProduct_region_competitor_urls_former_urlsInput, product_region_competitor_urlsUncheckedCreateWithoutProduct_region_competitor_urls_former_urlsInput>
    connectOrCreate?: product_region_competitor_urlsCreateOrConnectWithoutProduct_region_competitor_urls_former_urlsInput
    upsert?: product_region_competitor_urlsUpsertWithoutProduct_region_competitor_urls_former_urlsInput
    connect?: product_region_competitor_urlsWhereUniqueInput
    update?: XOR<product_region_competitor_urlsUpdateWithoutProduct_region_competitor_urls_former_urlsInput, product_region_competitor_urlsUncheckedUpdateWithoutProduct_region_competitor_urls_former_urlsInput>
  }

  export type productsCreateNestedOneWithoutProduct_region_price_dataInput = {
    create?: XOR<productsCreateWithoutProduct_region_price_dataInput, productsUncheckedCreateWithoutProduct_region_price_dataInput>
    connectOrCreate?: productsCreateOrConnectWithoutProduct_region_price_dataInput
    connect?: productsWhereUniqueInput
  }

  export type regionsCreateNestedOneWithoutProduct_region_price_dataInput = {
    create?: XOR<regionsCreateWithoutProduct_region_price_dataInput, regionsUncheckedCreateWithoutProduct_region_price_dataInput>
    connectOrCreate?: regionsCreateOrConnectWithoutProduct_region_price_dataInput
    connect?: regionsWhereUniqueInput
  }

  export type productsUpdateOneRequiredWithoutProduct_region_price_dataInput = {
    create?: XOR<productsCreateWithoutProduct_region_price_dataInput, productsUncheckedCreateWithoutProduct_region_price_dataInput>
    connectOrCreate?: productsCreateOrConnectWithoutProduct_region_price_dataInput
    upsert?: productsUpsertWithoutProduct_region_price_dataInput
    connect?: productsWhereUniqueInput
    update?: XOR<productsUpdateWithoutProduct_region_price_dataInput, productsUncheckedUpdateWithoutProduct_region_price_dataInput>
  }

  export type regionsUpdateOneRequiredWithoutProduct_region_price_dataInput = {
    create?: XOR<regionsCreateWithoutProduct_region_price_dataInput, regionsUncheckedCreateWithoutProduct_region_price_dataInput>
    connectOrCreate?: regionsCreateOrConnectWithoutProduct_region_price_dataInput
    upsert?: regionsUpsertWithoutProduct_region_price_dataInput
    connect?: regionsWhereUniqueInput
    update?: XOR<regionsUpdateWithoutProduct_region_price_dataInput, regionsUncheckedUpdateWithoutProduct_region_price_dataInput>
  }

  export type unitsCreateNestedOneWithoutProductsInput = {
    create?: XOR<unitsCreateWithoutProductsInput, unitsUncheckedCreateWithoutProductsInput>
    connectOrCreate?: unitsCreateOrConnectWithoutProductsInput
    connect?: unitsWhereUniqueInput
  }

  export type price_recommendationsCreateNestedManyWithoutProductsInput = {
    create?: XOR<Enumerable<price_recommendationsCreateWithoutProductsInput>, Enumerable<price_recommendationsUncheckedCreateWithoutProductsInput>>
    connectOrCreate?: Enumerable<price_recommendationsCreateOrConnectWithoutProductsInput>
    createMany?: price_recommendationsCreateManyProductsInputEnvelope
    connect?: Enumerable<price_recommendationsWhereUniqueInput>
  }

  export type product_region_competitor_urlsCreateNestedManyWithoutProductsInput = {
    create?: XOR<Enumerable<product_region_competitor_urlsCreateWithoutProductsInput>, Enumerable<product_region_competitor_urlsUncheckedCreateWithoutProductsInput>>
    connectOrCreate?: Enumerable<product_region_competitor_urlsCreateOrConnectWithoutProductsInput>
    createMany?: product_region_competitor_urlsCreateManyProductsInputEnvelope
    connect?: Enumerable<product_region_competitor_urlsWhereUniqueInput>
  }

  export type product_region_price_dataCreateNestedManyWithoutProductsInput = {
    create?: XOR<Enumerable<product_region_price_dataCreateWithoutProductsInput>, Enumerable<product_region_price_dataUncheckedCreateWithoutProductsInput>>
    connectOrCreate?: Enumerable<product_region_price_dataCreateOrConnectWithoutProductsInput>
    createMany?: product_region_price_dataCreateManyProductsInputEnvelope
    connect?: Enumerable<product_region_price_dataWhereUniqueInput>
  }

  export type scaled_pricesCreateNestedManyWithoutProductsInput = {
    create?: XOR<Enumerable<scaled_pricesCreateWithoutProductsInput>, Enumerable<scaled_pricesUncheckedCreateWithoutProductsInput>>
    connectOrCreate?: Enumerable<scaled_pricesCreateOrConnectWithoutProductsInput>
    createMany?: scaled_pricesCreateManyProductsInputEnvelope
    connect?: Enumerable<scaled_pricesWhereUniqueInput>
  }

  export type price_recommendationsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<Enumerable<price_recommendationsCreateWithoutProductsInput>, Enumerable<price_recommendationsUncheckedCreateWithoutProductsInput>>
    connectOrCreate?: Enumerable<price_recommendationsCreateOrConnectWithoutProductsInput>
    createMany?: price_recommendationsCreateManyProductsInputEnvelope
    connect?: Enumerable<price_recommendationsWhereUniqueInput>
  }

  export type product_region_competitor_urlsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<Enumerable<product_region_competitor_urlsCreateWithoutProductsInput>, Enumerable<product_region_competitor_urlsUncheckedCreateWithoutProductsInput>>
    connectOrCreate?: Enumerable<product_region_competitor_urlsCreateOrConnectWithoutProductsInput>
    createMany?: product_region_competitor_urlsCreateManyProductsInputEnvelope
    connect?: Enumerable<product_region_competitor_urlsWhereUniqueInput>
  }

  export type product_region_price_dataUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<Enumerable<product_region_price_dataCreateWithoutProductsInput>, Enumerable<product_region_price_dataUncheckedCreateWithoutProductsInput>>
    connectOrCreate?: Enumerable<product_region_price_dataCreateOrConnectWithoutProductsInput>
    createMany?: product_region_price_dataCreateManyProductsInputEnvelope
    connect?: Enumerable<product_region_price_dataWhereUniqueInput>
  }

  export type scaled_pricesUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<Enumerable<scaled_pricesCreateWithoutProductsInput>, Enumerable<scaled_pricesUncheckedCreateWithoutProductsInput>>
    connectOrCreate?: Enumerable<scaled_pricesCreateOrConnectWithoutProductsInput>
    createMany?: scaled_pricesCreateManyProductsInputEnvelope
    connect?: Enumerable<scaled_pricesWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type unitsUpdateOneRequiredWithoutProductsInput = {
    create?: XOR<unitsCreateWithoutProductsInput, unitsUncheckedCreateWithoutProductsInput>
    connectOrCreate?: unitsCreateOrConnectWithoutProductsInput
    upsert?: unitsUpsertWithoutProductsInput
    connect?: unitsWhereUniqueInput
    update?: XOR<unitsUpdateWithoutProductsInput, unitsUncheckedUpdateWithoutProductsInput>
  }

  export type price_recommendationsUpdateManyWithoutProductsInput = {
    create?: XOR<Enumerable<price_recommendationsCreateWithoutProductsInput>, Enumerable<price_recommendationsUncheckedCreateWithoutProductsInput>>
    connectOrCreate?: Enumerable<price_recommendationsCreateOrConnectWithoutProductsInput>
    upsert?: Enumerable<price_recommendationsUpsertWithWhereUniqueWithoutProductsInput>
    createMany?: price_recommendationsCreateManyProductsInputEnvelope
    connect?: Enumerable<price_recommendationsWhereUniqueInput>
    set?: Enumerable<price_recommendationsWhereUniqueInput>
    disconnect?: Enumerable<price_recommendationsWhereUniqueInput>
    delete?: Enumerable<price_recommendationsWhereUniqueInput>
    update?: Enumerable<price_recommendationsUpdateWithWhereUniqueWithoutProductsInput>
    updateMany?: Enumerable<price_recommendationsUpdateManyWithWhereWithoutProductsInput>
    deleteMany?: Enumerable<price_recommendationsScalarWhereInput>
  }

  export type product_region_competitor_urlsUpdateManyWithoutProductsInput = {
    create?: XOR<Enumerable<product_region_competitor_urlsCreateWithoutProductsInput>, Enumerable<product_region_competitor_urlsUncheckedCreateWithoutProductsInput>>
    connectOrCreate?: Enumerable<product_region_competitor_urlsCreateOrConnectWithoutProductsInput>
    upsert?: Enumerable<product_region_competitor_urlsUpsertWithWhereUniqueWithoutProductsInput>
    createMany?: product_region_competitor_urlsCreateManyProductsInputEnvelope
    connect?: Enumerable<product_region_competitor_urlsWhereUniqueInput>
    set?: Enumerable<product_region_competitor_urlsWhereUniqueInput>
    disconnect?: Enumerable<product_region_competitor_urlsWhereUniqueInput>
    delete?: Enumerable<product_region_competitor_urlsWhereUniqueInput>
    update?: Enumerable<product_region_competitor_urlsUpdateWithWhereUniqueWithoutProductsInput>
    updateMany?: Enumerable<product_region_competitor_urlsUpdateManyWithWhereWithoutProductsInput>
    deleteMany?: Enumerable<product_region_competitor_urlsScalarWhereInput>
  }

  export type product_region_price_dataUpdateManyWithoutProductsInput = {
    create?: XOR<Enumerable<product_region_price_dataCreateWithoutProductsInput>, Enumerable<product_region_price_dataUncheckedCreateWithoutProductsInput>>
    connectOrCreate?: Enumerable<product_region_price_dataCreateOrConnectWithoutProductsInput>
    upsert?: Enumerable<product_region_price_dataUpsertWithWhereUniqueWithoutProductsInput>
    createMany?: product_region_price_dataCreateManyProductsInputEnvelope
    connect?: Enumerable<product_region_price_dataWhereUniqueInput>
    set?: Enumerable<product_region_price_dataWhereUniqueInput>
    disconnect?: Enumerable<product_region_price_dataWhereUniqueInput>
    delete?: Enumerable<product_region_price_dataWhereUniqueInput>
    update?: Enumerable<product_region_price_dataUpdateWithWhereUniqueWithoutProductsInput>
    updateMany?: Enumerable<product_region_price_dataUpdateManyWithWhereWithoutProductsInput>
    deleteMany?: Enumerable<product_region_price_dataScalarWhereInput>
  }

  export type scaled_pricesUpdateManyWithoutProductsInput = {
    create?: XOR<Enumerable<scaled_pricesCreateWithoutProductsInput>, Enumerable<scaled_pricesUncheckedCreateWithoutProductsInput>>
    connectOrCreate?: Enumerable<scaled_pricesCreateOrConnectWithoutProductsInput>
    upsert?: Enumerable<scaled_pricesUpsertWithWhereUniqueWithoutProductsInput>
    createMany?: scaled_pricesCreateManyProductsInputEnvelope
    connect?: Enumerable<scaled_pricesWhereUniqueInput>
    set?: Enumerable<scaled_pricesWhereUniqueInput>
    disconnect?: Enumerable<scaled_pricesWhereUniqueInput>
    delete?: Enumerable<scaled_pricesWhereUniqueInput>
    update?: Enumerable<scaled_pricesUpdateWithWhereUniqueWithoutProductsInput>
    updateMany?: Enumerable<scaled_pricesUpdateManyWithWhereWithoutProductsInput>
    deleteMany?: Enumerable<scaled_pricesScalarWhereInput>
  }

  export type price_recommendationsUncheckedUpdateManyWithoutProductsInput = {
    create?: XOR<Enumerable<price_recommendationsCreateWithoutProductsInput>, Enumerable<price_recommendationsUncheckedCreateWithoutProductsInput>>
    connectOrCreate?: Enumerable<price_recommendationsCreateOrConnectWithoutProductsInput>
    upsert?: Enumerable<price_recommendationsUpsertWithWhereUniqueWithoutProductsInput>
    createMany?: price_recommendationsCreateManyProductsInputEnvelope
    connect?: Enumerable<price_recommendationsWhereUniqueInput>
    set?: Enumerable<price_recommendationsWhereUniqueInput>
    disconnect?: Enumerable<price_recommendationsWhereUniqueInput>
    delete?: Enumerable<price_recommendationsWhereUniqueInput>
    update?: Enumerable<price_recommendationsUpdateWithWhereUniqueWithoutProductsInput>
    updateMany?: Enumerable<price_recommendationsUpdateManyWithWhereWithoutProductsInput>
    deleteMany?: Enumerable<price_recommendationsScalarWhereInput>
  }

  export type product_region_competitor_urlsUncheckedUpdateManyWithoutProductsInput = {
    create?: XOR<Enumerable<product_region_competitor_urlsCreateWithoutProductsInput>, Enumerable<product_region_competitor_urlsUncheckedCreateWithoutProductsInput>>
    connectOrCreate?: Enumerable<product_region_competitor_urlsCreateOrConnectWithoutProductsInput>
    upsert?: Enumerable<product_region_competitor_urlsUpsertWithWhereUniqueWithoutProductsInput>
    createMany?: product_region_competitor_urlsCreateManyProductsInputEnvelope
    connect?: Enumerable<product_region_competitor_urlsWhereUniqueInput>
    set?: Enumerable<product_region_competitor_urlsWhereUniqueInput>
    disconnect?: Enumerable<product_region_competitor_urlsWhereUniqueInput>
    delete?: Enumerable<product_region_competitor_urlsWhereUniqueInput>
    update?: Enumerable<product_region_competitor_urlsUpdateWithWhereUniqueWithoutProductsInput>
    updateMany?: Enumerable<product_region_competitor_urlsUpdateManyWithWhereWithoutProductsInput>
    deleteMany?: Enumerable<product_region_competitor_urlsScalarWhereInput>
  }

  export type product_region_price_dataUncheckedUpdateManyWithoutProductsInput = {
    create?: XOR<Enumerable<product_region_price_dataCreateWithoutProductsInput>, Enumerable<product_region_price_dataUncheckedCreateWithoutProductsInput>>
    connectOrCreate?: Enumerable<product_region_price_dataCreateOrConnectWithoutProductsInput>
    upsert?: Enumerable<product_region_price_dataUpsertWithWhereUniqueWithoutProductsInput>
    createMany?: product_region_price_dataCreateManyProductsInputEnvelope
    connect?: Enumerable<product_region_price_dataWhereUniqueInput>
    set?: Enumerable<product_region_price_dataWhereUniqueInput>
    disconnect?: Enumerable<product_region_price_dataWhereUniqueInput>
    delete?: Enumerable<product_region_price_dataWhereUniqueInput>
    update?: Enumerable<product_region_price_dataUpdateWithWhereUniqueWithoutProductsInput>
    updateMany?: Enumerable<product_region_price_dataUpdateManyWithWhereWithoutProductsInput>
    deleteMany?: Enumerable<product_region_price_dataScalarWhereInput>
  }

  export type scaled_pricesUncheckedUpdateManyWithoutProductsInput = {
    create?: XOR<Enumerable<scaled_pricesCreateWithoutProductsInput>, Enumerable<scaled_pricesUncheckedCreateWithoutProductsInput>>
    connectOrCreate?: Enumerable<scaled_pricesCreateOrConnectWithoutProductsInput>
    upsert?: Enumerable<scaled_pricesUpsertWithWhereUniqueWithoutProductsInput>
    createMany?: scaled_pricesCreateManyProductsInputEnvelope
    connect?: Enumerable<scaled_pricesWhereUniqueInput>
    set?: Enumerable<scaled_pricesWhereUniqueInput>
    disconnect?: Enumerable<scaled_pricesWhereUniqueInput>
    delete?: Enumerable<scaled_pricesWhereUniqueInput>
    update?: Enumerable<scaled_pricesUpdateWithWhereUniqueWithoutProductsInput>
    updateMany?: Enumerable<scaled_pricesUpdateManyWithWhereWithoutProductsInput>
    deleteMany?: Enumerable<scaled_pricesScalarWhereInput>
  }

  export type basketsCreateNestedManyWithoutRegionsInput = {
    create?: XOR<Enumerable<basketsCreateWithoutRegionsInput>, Enumerable<basketsUncheckedCreateWithoutRegionsInput>>
    connectOrCreate?: Enumerable<basketsCreateOrConnectWithoutRegionsInput>
    createMany?: basketsCreateManyRegionsInputEnvelope
    connect?: Enumerable<basketsWhereUniqueInput>
  }

  export type price_recommendationsCreateNestedManyWithoutRegionsInput = {
    create?: XOR<Enumerable<price_recommendationsCreateWithoutRegionsInput>, Enumerable<price_recommendationsUncheckedCreateWithoutRegionsInput>>
    connectOrCreate?: Enumerable<price_recommendationsCreateOrConnectWithoutRegionsInput>
    createMany?: price_recommendationsCreateManyRegionsInputEnvelope
    connect?: Enumerable<price_recommendationsWhereUniqueInput>
  }

  export type product_region_competitor_urlsCreateNestedManyWithoutRegionsInput = {
    create?: XOR<Enumerable<product_region_competitor_urlsCreateWithoutRegionsInput>, Enumerable<product_region_competitor_urlsUncheckedCreateWithoutRegionsInput>>
    connectOrCreate?: Enumerable<product_region_competitor_urlsCreateOrConnectWithoutRegionsInput>
    createMany?: product_region_competitor_urlsCreateManyRegionsInputEnvelope
    connect?: Enumerable<product_region_competitor_urlsWhereUniqueInput>
  }

  export type product_region_price_dataCreateNestedManyWithoutRegionsInput = {
    create?: XOR<Enumerable<product_region_price_dataCreateWithoutRegionsInput>, Enumerable<product_region_price_dataUncheckedCreateWithoutRegionsInput>>
    connectOrCreate?: Enumerable<product_region_price_dataCreateOrConnectWithoutRegionsInput>
    createMany?: product_region_price_dataCreateManyRegionsInputEnvelope
    connect?: Enumerable<product_region_price_dataWhereUniqueInput>
  }

  export type scaled_pricesCreateNestedManyWithoutRegionsInput = {
    create?: XOR<Enumerable<scaled_pricesCreateWithoutRegionsInput>, Enumerable<scaled_pricesUncheckedCreateWithoutRegionsInput>>
    connectOrCreate?: Enumerable<scaled_pricesCreateOrConnectWithoutRegionsInput>
    createMany?: scaled_pricesCreateManyRegionsInputEnvelope
    connect?: Enumerable<scaled_pricesWhereUniqueInput>
  }

  export type basketsUncheckedCreateNestedManyWithoutRegionsInput = {
    create?: XOR<Enumerable<basketsCreateWithoutRegionsInput>, Enumerable<basketsUncheckedCreateWithoutRegionsInput>>
    connectOrCreate?: Enumerable<basketsCreateOrConnectWithoutRegionsInput>
    createMany?: basketsCreateManyRegionsInputEnvelope
    connect?: Enumerable<basketsWhereUniqueInput>
  }

  export type price_recommendationsUncheckedCreateNestedManyWithoutRegionsInput = {
    create?: XOR<Enumerable<price_recommendationsCreateWithoutRegionsInput>, Enumerable<price_recommendationsUncheckedCreateWithoutRegionsInput>>
    connectOrCreate?: Enumerable<price_recommendationsCreateOrConnectWithoutRegionsInput>
    createMany?: price_recommendationsCreateManyRegionsInputEnvelope
    connect?: Enumerable<price_recommendationsWhereUniqueInput>
  }

  export type product_region_competitor_urlsUncheckedCreateNestedManyWithoutRegionsInput = {
    create?: XOR<Enumerable<product_region_competitor_urlsCreateWithoutRegionsInput>, Enumerable<product_region_competitor_urlsUncheckedCreateWithoutRegionsInput>>
    connectOrCreate?: Enumerable<product_region_competitor_urlsCreateOrConnectWithoutRegionsInput>
    createMany?: product_region_competitor_urlsCreateManyRegionsInputEnvelope
    connect?: Enumerable<product_region_competitor_urlsWhereUniqueInput>
  }

  export type product_region_price_dataUncheckedCreateNestedManyWithoutRegionsInput = {
    create?: XOR<Enumerable<product_region_price_dataCreateWithoutRegionsInput>, Enumerable<product_region_price_dataUncheckedCreateWithoutRegionsInput>>
    connectOrCreate?: Enumerable<product_region_price_dataCreateOrConnectWithoutRegionsInput>
    createMany?: product_region_price_dataCreateManyRegionsInputEnvelope
    connect?: Enumerable<product_region_price_dataWhereUniqueInput>
  }

  export type scaled_pricesUncheckedCreateNestedManyWithoutRegionsInput = {
    create?: XOR<Enumerable<scaled_pricesCreateWithoutRegionsInput>, Enumerable<scaled_pricesUncheckedCreateWithoutRegionsInput>>
    connectOrCreate?: Enumerable<scaled_pricesCreateOrConnectWithoutRegionsInput>
    createMany?: scaled_pricesCreateManyRegionsInputEnvelope
    connect?: Enumerable<scaled_pricesWhereUniqueInput>
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type basketsUpdateManyWithoutRegionsInput = {
    create?: XOR<Enumerable<basketsCreateWithoutRegionsInput>, Enumerable<basketsUncheckedCreateWithoutRegionsInput>>
    connectOrCreate?: Enumerable<basketsCreateOrConnectWithoutRegionsInput>
    upsert?: Enumerable<basketsUpsertWithWhereUniqueWithoutRegionsInput>
    createMany?: basketsCreateManyRegionsInputEnvelope
    connect?: Enumerable<basketsWhereUniqueInput>
    set?: Enumerable<basketsWhereUniqueInput>
    disconnect?: Enumerable<basketsWhereUniqueInput>
    delete?: Enumerable<basketsWhereUniqueInput>
    update?: Enumerable<basketsUpdateWithWhereUniqueWithoutRegionsInput>
    updateMany?: Enumerable<basketsUpdateManyWithWhereWithoutRegionsInput>
    deleteMany?: Enumerable<basketsScalarWhereInput>
  }

  export type price_recommendationsUpdateManyWithoutRegionsInput = {
    create?: XOR<Enumerable<price_recommendationsCreateWithoutRegionsInput>, Enumerable<price_recommendationsUncheckedCreateWithoutRegionsInput>>
    connectOrCreate?: Enumerable<price_recommendationsCreateOrConnectWithoutRegionsInput>
    upsert?: Enumerable<price_recommendationsUpsertWithWhereUniqueWithoutRegionsInput>
    createMany?: price_recommendationsCreateManyRegionsInputEnvelope
    connect?: Enumerable<price_recommendationsWhereUniqueInput>
    set?: Enumerable<price_recommendationsWhereUniqueInput>
    disconnect?: Enumerable<price_recommendationsWhereUniqueInput>
    delete?: Enumerable<price_recommendationsWhereUniqueInput>
    update?: Enumerable<price_recommendationsUpdateWithWhereUniqueWithoutRegionsInput>
    updateMany?: Enumerable<price_recommendationsUpdateManyWithWhereWithoutRegionsInput>
    deleteMany?: Enumerable<price_recommendationsScalarWhereInput>
  }

  export type product_region_competitor_urlsUpdateManyWithoutRegionsInput = {
    create?: XOR<Enumerable<product_region_competitor_urlsCreateWithoutRegionsInput>, Enumerable<product_region_competitor_urlsUncheckedCreateWithoutRegionsInput>>
    connectOrCreate?: Enumerable<product_region_competitor_urlsCreateOrConnectWithoutRegionsInput>
    upsert?: Enumerable<product_region_competitor_urlsUpsertWithWhereUniqueWithoutRegionsInput>
    createMany?: product_region_competitor_urlsCreateManyRegionsInputEnvelope
    connect?: Enumerable<product_region_competitor_urlsWhereUniqueInput>
    set?: Enumerable<product_region_competitor_urlsWhereUniqueInput>
    disconnect?: Enumerable<product_region_competitor_urlsWhereUniqueInput>
    delete?: Enumerable<product_region_competitor_urlsWhereUniqueInput>
    update?: Enumerable<product_region_competitor_urlsUpdateWithWhereUniqueWithoutRegionsInput>
    updateMany?: Enumerable<product_region_competitor_urlsUpdateManyWithWhereWithoutRegionsInput>
    deleteMany?: Enumerable<product_region_competitor_urlsScalarWhereInput>
  }

  export type product_region_price_dataUpdateManyWithoutRegionsInput = {
    create?: XOR<Enumerable<product_region_price_dataCreateWithoutRegionsInput>, Enumerable<product_region_price_dataUncheckedCreateWithoutRegionsInput>>
    connectOrCreate?: Enumerable<product_region_price_dataCreateOrConnectWithoutRegionsInput>
    upsert?: Enumerable<product_region_price_dataUpsertWithWhereUniqueWithoutRegionsInput>
    createMany?: product_region_price_dataCreateManyRegionsInputEnvelope
    connect?: Enumerable<product_region_price_dataWhereUniqueInput>
    set?: Enumerable<product_region_price_dataWhereUniqueInput>
    disconnect?: Enumerable<product_region_price_dataWhereUniqueInput>
    delete?: Enumerable<product_region_price_dataWhereUniqueInput>
    update?: Enumerable<product_region_price_dataUpdateWithWhereUniqueWithoutRegionsInput>
    updateMany?: Enumerable<product_region_price_dataUpdateManyWithWhereWithoutRegionsInput>
    deleteMany?: Enumerable<product_region_price_dataScalarWhereInput>
  }

  export type scaled_pricesUpdateManyWithoutRegionsInput = {
    create?: XOR<Enumerable<scaled_pricesCreateWithoutRegionsInput>, Enumerable<scaled_pricesUncheckedCreateWithoutRegionsInput>>
    connectOrCreate?: Enumerable<scaled_pricesCreateOrConnectWithoutRegionsInput>
    upsert?: Enumerable<scaled_pricesUpsertWithWhereUniqueWithoutRegionsInput>
    createMany?: scaled_pricesCreateManyRegionsInputEnvelope
    connect?: Enumerable<scaled_pricesWhereUniqueInput>
    set?: Enumerable<scaled_pricesWhereUniqueInput>
    disconnect?: Enumerable<scaled_pricesWhereUniqueInput>
    delete?: Enumerable<scaled_pricesWhereUniqueInput>
    update?: Enumerable<scaled_pricesUpdateWithWhereUniqueWithoutRegionsInput>
    updateMany?: Enumerable<scaled_pricesUpdateManyWithWhereWithoutRegionsInput>
    deleteMany?: Enumerable<scaled_pricesScalarWhereInput>
  }

  export type basketsUncheckedUpdateManyWithoutRegionsInput = {
    create?: XOR<Enumerable<basketsCreateWithoutRegionsInput>, Enumerable<basketsUncheckedCreateWithoutRegionsInput>>
    connectOrCreate?: Enumerable<basketsCreateOrConnectWithoutRegionsInput>
    upsert?: Enumerable<basketsUpsertWithWhereUniqueWithoutRegionsInput>
    createMany?: basketsCreateManyRegionsInputEnvelope
    connect?: Enumerable<basketsWhereUniqueInput>
    set?: Enumerable<basketsWhereUniqueInput>
    disconnect?: Enumerable<basketsWhereUniqueInput>
    delete?: Enumerable<basketsWhereUniqueInput>
    update?: Enumerable<basketsUpdateWithWhereUniqueWithoutRegionsInput>
    updateMany?: Enumerable<basketsUpdateManyWithWhereWithoutRegionsInput>
    deleteMany?: Enumerable<basketsScalarWhereInput>
  }

  export type price_recommendationsUncheckedUpdateManyWithoutRegionsInput = {
    create?: XOR<Enumerable<price_recommendationsCreateWithoutRegionsInput>, Enumerable<price_recommendationsUncheckedCreateWithoutRegionsInput>>
    connectOrCreate?: Enumerable<price_recommendationsCreateOrConnectWithoutRegionsInput>
    upsert?: Enumerable<price_recommendationsUpsertWithWhereUniqueWithoutRegionsInput>
    createMany?: price_recommendationsCreateManyRegionsInputEnvelope
    connect?: Enumerable<price_recommendationsWhereUniqueInput>
    set?: Enumerable<price_recommendationsWhereUniqueInput>
    disconnect?: Enumerable<price_recommendationsWhereUniqueInput>
    delete?: Enumerable<price_recommendationsWhereUniqueInput>
    update?: Enumerable<price_recommendationsUpdateWithWhereUniqueWithoutRegionsInput>
    updateMany?: Enumerable<price_recommendationsUpdateManyWithWhereWithoutRegionsInput>
    deleteMany?: Enumerable<price_recommendationsScalarWhereInput>
  }

  export type product_region_competitor_urlsUncheckedUpdateManyWithoutRegionsInput = {
    create?: XOR<Enumerable<product_region_competitor_urlsCreateWithoutRegionsInput>, Enumerable<product_region_competitor_urlsUncheckedCreateWithoutRegionsInput>>
    connectOrCreate?: Enumerable<product_region_competitor_urlsCreateOrConnectWithoutRegionsInput>
    upsert?: Enumerable<product_region_competitor_urlsUpsertWithWhereUniqueWithoutRegionsInput>
    createMany?: product_region_competitor_urlsCreateManyRegionsInputEnvelope
    connect?: Enumerable<product_region_competitor_urlsWhereUniqueInput>
    set?: Enumerable<product_region_competitor_urlsWhereUniqueInput>
    disconnect?: Enumerable<product_region_competitor_urlsWhereUniqueInput>
    delete?: Enumerable<product_region_competitor_urlsWhereUniqueInput>
    update?: Enumerable<product_region_competitor_urlsUpdateWithWhereUniqueWithoutRegionsInput>
    updateMany?: Enumerable<product_region_competitor_urlsUpdateManyWithWhereWithoutRegionsInput>
    deleteMany?: Enumerable<product_region_competitor_urlsScalarWhereInput>
  }

  export type product_region_price_dataUncheckedUpdateManyWithoutRegionsInput = {
    create?: XOR<Enumerable<product_region_price_dataCreateWithoutRegionsInput>, Enumerable<product_region_price_dataUncheckedCreateWithoutRegionsInput>>
    connectOrCreate?: Enumerable<product_region_price_dataCreateOrConnectWithoutRegionsInput>
    upsert?: Enumerable<product_region_price_dataUpsertWithWhereUniqueWithoutRegionsInput>
    createMany?: product_region_price_dataCreateManyRegionsInputEnvelope
    connect?: Enumerable<product_region_price_dataWhereUniqueInput>
    set?: Enumerable<product_region_price_dataWhereUniqueInput>
    disconnect?: Enumerable<product_region_price_dataWhereUniqueInput>
    delete?: Enumerable<product_region_price_dataWhereUniqueInput>
    update?: Enumerable<product_region_price_dataUpdateWithWhereUniqueWithoutRegionsInput>
    updateMany?: Enumerable<product_region_price_dataUpdateManyWithWhereWithoutRegionsInput>
    deleteMany?: Enumerable<product_region_price_dataScalarWhereInput>
  }

  export type scaled_pricesUncheckedUpdateManyWithoutRegionsInput = {
    create?: XOR<Enumerable<scaled_pricesCreateWithoutRegionsInput>, Enumerable<scaled_pricesUncheckedCreateWithoutRegionsInput>>
    connectOrCreate?: Enumerable<scaled_pricesCreateOrConnectWithoutRegionsInput>
    upsert?: Enumerable<scaled_pricesUpsertWithWhereUniqueWithoutRegionsInput>
    createMany?: scaled_pricesCreateManyRegionsInputEnvelope
    connect?: Enumerable<scaled_pricesWhereUniqueInput>
    set?: Enumerable<scaled_pricesWhereUniqueInput>
    disconnect?: Enumerable<scaled_pricesWhereUniqueInput>
    delete?: Enumerable<scaled_pricesWhereUniqueInput>
    update?: Enumerable<scaled_pricesUpdateWithWhereUniqueWithoutRegionsInput>
    updateMany?: Enumerable<scaled_pricesUpdateManyWithWhereWithoutRegionsInput>
    deleteMany?: Enumerable<scaled_pricesScalarWhereInput>
  }

  export type competitorsCreateNestedOneWithoutScaled_pricesInput = {
    create?: XOR<competitorsCreateWithoutScaled_pricesInput, competitorsUncheckedCreateWithoutScaled_pricesInput>
    connectOrCreate?: competitorsCreateOrConnectWithoutScaled_pricesInput
    connect?: competitorsWhereUniqueInput
  }

  export type productsCreateNestedOneWithoutScaled_pricesInput = {
    create?: XOR<productsCreateWithoutScaled_pricesInput, productsUncheckedCreateWithoutScaled_pricesInput>
    connectOrCreate?: productsCreateOrConnectWithoutScaled_pricesInput
    connect?: productsWhereUniqueInput
  }

  export type regionsCreateNestedOneWithoutScaled_pricesInput = {
    create?: XOR<regionsCreateWithoutScaled_pricesInput, regionsUncheckedCreateWithoutScaled_pricesInput>
    connectOrCreate?: regionsCreateOrConnectWithoutScaled_pricesInput
    connect?: regionsWhereUniqueInput
  }

  export type scrape_resultsCreateNestedOneWithoutScaled_pricesInput = {
    create?: XOR<scrape_resultsCreateWithoutScaled_pricesInput, scrape_resultsUncheckedCreateWithoutScaled_pricesInput>
    connectOrCreate?: scrape_resultsCreateOrConnectWithoutScaled_pricesInput
    connect?: scrape_resultsWhereUniqueInput
  }

  export type competitorsUpdateOneRequiredWithoutScaled_pricesInput = {
    create?: XOR<competitorsCreateWithoutScaled_pricesInput, competitorsUncheckedCreateWithoutScaled_pricesInput>
    connectOrCreate?: competitorsCreateOrConnectWithoutScaled_pricesInput
    upsert?: competitorsUpsertWithoutScaled_pricesInput
    connect?: competitorsWhereUniqueInput
    update?: XOR<competitorsUpdateWithoutScaled_pricesInput, competitorsUncheckedUpdateWithoutScaled_pricesInput>
  }

  export type productsUpdateOneRequiredWithoutScaled_pricesInput = {
    create?: XOR<productsCreateWithoutScaled_pricesInput, productsUncheckedCreateWithoutScaled_pricesInput>
    connectOrCreate?: productsCreateOrConnectWithoutScaled_pricesInput
    upsert?: productsUpsertWithoutScaled_pricesInput
    connect?: productsWhereUniqueInput
    update?: XOR<productsUpdateWithoutScaled_pricesInput, productsUncheckedUpdateWithoutScaled_pricesInput>
  }

  export type regionsUpdateOneRequiredWithoutScaled_pricesInput = {
    create?: XOR<regionsCreateWithoutScaled_pricesInput, regionsUncheckedCreateWithoutScaled_pricesInput>
    connectOrCreate?: regionsCreateOrConnectWithoutScaled_pricesInput
    upsert?: regionsUpsertWithoutScaled_pricesInput
    connect?: regionsWhereUniqueInput
    update?: XOR<regionsUpdateWithoutScaled_pricesInput, regionsUncheckedUpdateWithoutScaled_pricesInput>
  }

  export type scrape_resultsUpdateOneRequiredWithoutScaled_pricesInput = {
    create?: XOR<scrape_resultsCreateWithoutScaled_pricesInput, scrape_resultsUncheckedCreateWithoutScaled_pricesInput>
    connectOrCreate?: scrape_resultsCreateOrConnectWithoutScaled_pricesInput
    upsert?: scrape_resultsUpsertWithoutScaled_pricesInput
    connect?: scrape_resultsWhereUniqueInput
    update?: XOR<scrape_resultsUpdateWithoutScaled_pricesInput, scrape_resultsUncheckedUpdateWithoutScaled_pricesInput>
  }

  export type unitsCreateNestedOneWithoutScrape_resultsInput = {
    create?: XOR<unitsCreateWithoutScrape_resultsInput, unitsUncheckedCreateWithoutScrape_resultsInput>
    connectOrCreate?: unitsCreateOrConnectWithoutScrape_resultsInput
    connect?: unitsWhereUniqueInput
  }

  export type scaled_pricesCreateNestedManyWithoutScrape_resultsInput = {
    create?: XOR<Enumerable<scaled_pricesCreateWithoutScrape_resultsInput>, Enumerable<scaled_pricesUncheckedCreateWithoutScrape_resultsInput>>
    connectOrCreate?: Enumerable<scaled_pricesCreateOrConnectWithoutScrape_resultsInput>
    createMany?: scaled_pricesCreateManyScrape_resultsInputEnvelope
    connect?: Enumerable<scaled_pricesWhereUniqueInput>
  }

  export type scaled_pricesUncheckedCreateNestedManyWithoutScrape_resultsInput = {
    create?: XOR<Enumerable<scaled_pricesCreateWithoutScrape_resultsInput>, Enumerable<scaled_pricesUncheckedCreateWithoutScrape_resultsInput>>
    connectOrCreate?: Enumerable<scaled_pricesCreateOrConnectWithoutScrape_resultsInput>
    createMany?: scaled_pricesCreateManyScrape_resultsInputEnvelope
    connect?: Enumerable<scaled_pricesWhereUniqueInput>
  }

  export type unitsUpdateOneRequiredWithoutScrape_resultsInput = {
    create?: XOR<unitsCreateWithoutScrape_resultsInput, unitsUncheckedCreateWithoutScrape_resultsInput>
    connectOrCreate?: unitsCreateOrConnectWithoutScrape_resultsInput
    upsert?: unitsUpsertWithoutScrape_resultsInput
    connect?: unitsWhereUniqueInput
    update?: XOR<unitsUpdateWithoutScrape_resultsInput, unitsUncheckedUpdateWithoutScrape_resultsInput>
  }

  export type scaled_pricesUpdateManyWithoutScrape_resultsInput = {
    create?: XOR<Enumerable<scaled_pricesCreateWithoutScrape_resultsInput>, Enumerable<scaled_pricesUncheckedCreateWithoutScrape_resultsInput>>
    connectOrCreate?: Enumerable<scaled_pricesCreateOrConnectWithoutScrape_resultsInput>
    upsert?: Enumerable<scaled_pricesUpsertWithWhereUniqueWithoutScrape_resultsInput>
    createMany?: scaled_pricesCreateManyScrape_resultsInputEnvelope
    connect?: Enumerable<scaled_pricesWhereUniqueInput>
    set?: Enumerable<scaled_pricesWhereUniqueInput>
    disconnect?: Enumerable<scaled_pricesWhereUniqueInput>
    delete?: Enumerable<scaled_pricesWhereUniqueInput>
    update?: Enumerable<scaled_pricesUpdateWithWhereUniqueWithoutScrape_resultsInput>
    updateMany?: Enumerable<scaled_pricesUpdateManyWithWhereWithoutScrape_resultsInput>
    deleteMany?: Enumerable<scaled_pricesScalarWhereInput>
  }

  export type scaled_pricesUncheckedUpdateManyWithoutScrape_resultsInput = {
    create?: XOR<Enumerable<scaled_pricesCreateWithoutScrape_resultsInput>, Enumerable<scaled_pricesUncheckedCreateWithoutScrape_resultsInput>>
    connectOrCreate?: Enumerable<scaled_pricesCreateOrConnectWithoutScrape_resultsInput>
    upsert?: Enumerable<scaled_pricesUpsertWithWhereUniqueWithoutScrape_resultsInput>
    createMany?: scaled_pricesCreateManyScrape_resultsInputEnvelope
    connect?: Enumerable<scaled_pricesWhereUniqueInput>
    set?: Enumerable<scaled_pricesWhereUniqueInput>
    disconnect?: Enumerable<scaled_pricesWhereUniqueInput>
    delete?: Enumerable<scaled_pricesWhereUniqueInput>
    update?: Enumerable<scaled_pricesUpdateWithWhereUniqueWithoutScrape_resultsInput>
    updateMany?: Enumerable<scaled_pricesUpdateManyWithWhereWithoutScrape_resultsInput>
    deleteMany?: Enumerable<scaled_pricesScalarWhereInput>
  }

  export type unitsCreateNestedOneWithoutOther_unitsInput = {
    create?: XOR<unitsCreateWithoutOther_unitsInput, unitsUncheckedCreateWithoutOther_unitsInput>
    connectOrCreate?: unitsCreateOrConnectWithoutOther_unitsInput
    connect?: unitsWhereUniqueInput
  }

  export type productsCreateNestedManyWithoutUnitsInput = {
    create?: XOR<Enumerable<productsCreateWithoutUnitsInput>, Enumerable<productsUncheckedCreateWithoutUnitsInput>>
    connectOrCreate?: Enumerable<productsCreateOrConnectWithoutUnitsInput>
    createMany?: productsCreateManyUnitsInputEnvelope
    connect?: Enumerable<productsWhereUniqueInput>
  }

  export type scrape_resultsCreateNestedManyWithoutUnitsInput = {
    create?: XOR<Enumerable<scrape_resultsCreateWithoutUnitsInput>, Enumerable<scrape_resultsUncheckedCreateWithoutUnitsInput>>
    connectOrCreate?: Enumerable<scrape_resultsCreateOrConnectWithoutUnitsInput>
    createMany?: scrape_resultsCreateManyUnitsInputEnvelope
    connect?: Enumerable<scrape_resultsWhereUniqueInput>
  }

  export type unitsCreateNestedManyWithoutUnitsInput = {
    create?: XOR<Enumerable<unitsCreateWithoutUnitsInput>, Enumerable<unitsUncheckedCreateWithoutUnitsInput>>
    connectOrCreate?: Enumerable<unitsCreateOrConnectWithoutUnitsInput>
    createMany?: unitsCreateManyUnitsInputEnvelope
    connect?: Enumerable<unitsWhereUniqueInput>
  }

  export type productsUncheckedCreateNestedManyWithoutUnitsInput = {
    create?: XOR<Enumerable<productsCreateWithoutUnitsInput>, Enumerable<productsUncheckedCreateWithoutUnitsInput>>
    connectOrCreate?: Enumerable<productsCreateOrConnectWithoutUnitsInput>
    createMany?: productsCreateManyUnitsInputEnvelope
    connect?: Enumerable<productsWhereUniqueInput>
  }

  export type scrape_resultsUncheckedCreateNestedManyWithoutUnitsInput = {
    create?: XOR<Enumerable<scrape_resultsCreateWithoutUnitsInput>, Enumerable<scrape_resultsUncheckedCreateWithoutUnitsInput>>
    connectOrCreate?: Enumerable<scrape_resultsCreateOrConnectWithoutUnitsInput>
    createMany?: scrape_resultsCreateManyUnitsInputEnvelope
    connect?: Enumerable<scrape_resultsWhereUniqueInput>
  }

  export type unitsUncheckedCreateNestedManyWithoutUnitsInput = {
    create?: XOR<Enumerable<unitsCreateWithoutUnitsInput>, Enumerable<unitsUncheckedCreateWithoutUnitsInput>>
    connectOrCreate?: Enumerable<unitsCreateOrConnectWithoutUnitsInput>
    createMany?: unitsCreateManyUnitsInputEnvelope
    connect?: Enumerable<unitsWhereUniqueInput>
  }

  export type unitsUpdateOneRequiredWithoutOther_unitsInput = {
    create?: XOR<unitsCreateWithoutOther_unitsInput, unitsUncheckedCreateWithoutOther_unitsInput>
    connectOrCreate?: unitsCreateOrConnectWithoutOther_unitsInput
    upsert?: unitsUpsertWithoutOther_unitsInput
    connect?: unitsWhereUniqueInput
    update?: XOR<unitsUpdateWithoutOther_unitsInput, unitsUncheckedUpdateWithoutOther_unitsInput>
  }

  export type productsUpdateManyWithoutUnitsInput = {
    create?: XOR<Enumerable<productsCreateWithoutUnitsInput>, Enumerable<productsUncheckedCreateWithoutUnitsInput>>
    connectOrCreate?: Enumerable<productsCreateOrConnectWithoutUnitsInput>
    upsert?: Enumerable<productsUpsertWithWhereUniqueWithoutUnitsInput>
    createMany?: productsCreateManyUnitsInputEnvelope
    connect?: Enumerable<productsWhereUniqueInput>
    set?: Enumerable<productsWhereUniqueInput>
    disconnect?: Enumerable<productsWhereUniqueInput>
    delete?: Enumerable<productsWhereUniqueInput>
    update?: Enumerable<productsUpdateWithWhereUniqueWithoutUnitsInput>
    updateMany?: Enumerable<productsUpdateManyWithWhereWithoutUnitsInput>
    deleteMany?: Enumerable<productsScalarWhereInput>
  }

  export type scrape_resultsUpdateManyWithoutUnitsInput = {
    create?: XOR<Enumerable<scrape_resultsCreateWithoutUnitsInput>, Enumerable<scrape_resultsUncheckedCreateWithoutUnitsInput>>
    connectOrCreate?: Enumerable<scrape_resultsCreateOrConnectWithoutUnitsInput>
    upsert?: Enumerable<scrape_resultsUpsertWithWhereUniqueWithoutUnitsInput>
    createMany?: scrape_resultsCreateManyUnitsInputEnvelope
    connect?: Enumerable<scrape_resultsWhereUniqueInput>
    set?: Enumerable<scrape_resultsWhereUniqueInput>
    disconnect?: Enumerable<scrape_resultsWhereUniqueInput>
    delete?: Enumerable<scrape_resultsWhereUniqueInput>
    update?: Enumerable<scrape_resultsUpdateWithWhereUniqueWithoutUnitsInput>
    updateMany?: Enumerable<scrape_resultsUpdateManyWithWhereWithoutUnitsInput>
    deleteMany?: Enumerable<scrape_resultsScalarWhereInput>
  }

  export type unitsUpdateManyWithoutUnitsInput = {
    create?: XOR<Enumerable<unitsCreateWithoutUnitsInput>, Enumerable<unitsUncheckedCreateWithoutUnitsInput>>
    connectOrCreate?: Enumerable<unitsCreateOrConnectWithoutUnitsInput>
    upsert?: Enumerable<unitsUpsertWithWhereUniqueWithoutUnitsInput>
    createMany?: unitsCreateManyUnitsInputEnvelope
    connect?: Enumerable<unitsWhereUniqueInput>
    set?: Enumerable<unitsWhereUniqueInput>
    disconnect?: Enumerable<unitsWhereUniqueInput>
    delete?: Enumerable<unitsWhereUniqueInput>
    update?: Enumerable<unitsUpdateWithWhereUniqueWithoutUnitsInput>
    updateMany?: Enumerable<unitsUpdateManyWithWhereWithoutUnitsInput>
    deleteMany?: Enumerable<unitsScalarWhereInput>
  }

  export type productsUncheckedUpdateManyWithoutUnitsInput = {
    create?: XOR<Enumerable<productsCreateWithoutUnitsInput>, Enumerable<productsUncheckedCreateWithoutUnitsInput>>
    connectOrCreate?: Enumerable<productsCreateOrConnectWithoutUnitsInput>
    upsert?: Enumerable<productsUpsertWithWhereUniqueWithoutUnitsInput>
    createMany?: productsCreateManyUnitsInputEnvelope
    connect?: Enumerable<productsWhereUniqueInput>
    set?: Enumerable<productsWhereUniqueInput>
    disconnect?: Enumerable<productsWhereUniqueInput>
    delete?: Enumerable<productsWhereUniqueInput>
    update?: Enumerable<productsUpdateWithWhereUniqueWithoutUnitsInput>
    updateMany?: Enumerable<productsUpdateManyWithWhereWithoutUnitsInput>
    deleteMany?: Enumerable<productsScalarWhereInput>
  }

  export type scrape_resultsUncheckedUpdateManyWithoutUnitsInput = {
    create?: XOR<Enumerable<scrape_resultsCreateWithoutUnitsInput>, Enumerable<scrape_resultsUncheckedCreateWithoutUnitsInput>>
    connectOrCreate?: Enumerable<scrape_resultsCreateOrConnectWithoutUnitsInput>
    upsert?: Enumerable<scrape_resultsUpsertWithWhereUniqueWithoutUnitsInput>
    createMany?: scrape_resultsCreateManyUnitsInputEnvelope
    connect?: Enumerable<scrape_resultsWhereUniqueInput>
    set?: Enumerable<scrape_resultsWhereUniqueInput>
    disconnect?: Enumerable<scrape_resultsWhereUniqueInput>
    delete?: Enumerable<scrape_resultsWhereUniqueInput>
    update?: Enumerable<scrape_resultsUpdateWithWhereUniqueWithoutUnitsInput>
    updateMany?: Enumerable<scrape_resultsUpdateManyWithWhereWithoutUnitsInput>
    deleteMany?: Enumerable<scrape_resultsScalarWhereInput>
  }

  export type unitsUncheckedUpdateManyWithoutUnitsInput = {
    create?: XOR<Enumerable<unitsCreateWithoutUnitsInput>, Enumerable<unitsUncheckedCreateWithoutUnitsInput>>
    connectOrCreate?: Enumerable<unitsCreateOrConnectWithoutUnitsInput>
    upsert?: Enumerable<unitsUpsertWithWhereUniqueWithoutUnitsInput>
    createMany?: unitsCreateManyUnitsInputEnvelope
    connect?: Enumerable<unitsWhereUniqueInput>
    set?: Enumerable<unitsWhereUniqueInput>
    disconnect?: Enumerable<unitsWhereUniqueInput>
    delete?: Enumerable<unitsWhereUniqueInput>
    update?: Enumerable<unitsUpdateWithWhereUniqueWithoutUnitsInput>
    updateMany?: Enumerable<unitsUpdateManyWithWhereWithoutUnitsInput>
    deleteMany?: Enumerable<unitsScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }
  export type NestedJsonFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase>, Exclude<keyof Required<NestedJsonFilterBase>, 'path'>>,
        Required<NestedJsonFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase>, 'path'>>

  export type NestedJsonFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }
  export type NestedJsonNullableFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase>, Exclude<keyof Required<NestedJsonNullableFilterBase>, 'path'>>,
        Required<NestedJsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase>, 'path'>>

  export type NestedJsonNullableFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
  }

  export type NestedBigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedBoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type basketsCreateWithoutBasket_daily_totalsInput = {
    goodfood_id: number
    delivery_date: Date | string
    basket_totals?: NullableJsonNullValueInput | InputJsonValue
    basket_indexes?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string | null
    regions: regionsCreateNestedOneWithoutBasketsInput
  }

  export type basketsUncheckedCreateWithoutBasket_daily_totalsInput = {
    id?: number
    goodfood_id: number
    delivery_date: Date | string
    basket_totals?: NullableJsonNullValueInput | InputJsonValue
    basket_indexes?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string | null
    region_id: number
  }

  export type basketsCreateOrConnectWithoutBasket_daily_totalsInput = {
    where: basketsWhereUniqueInput
    create: XOR<basketsCreateWithoutBasket_daily_totalsInput, basketsUncheckedCreateWithoutBasket_daily_totalsInput>
  }

  export type basketsCreateManyBasket_daily_totalsInputEnvelope = {
    data: Enumerable<basketsCreateManyBasket_daily_totalsInput>
    skipDuplicates?: boolean
  }

  export type basketsUpsertWithWhereUniqueWithoutBasket_daily_totalsInput = {
    where: basketsWhereUniqueInput
    update: XOR<basketsUpdateWithoutBasket_daily_totalsInput, basketsUncheckedUpdateWithoutBasket_daily_totalsInput>
    create: XOR<basketsCreateWithoutBasket_daily_totalsInput, basketsUncheckedCreateWithoutBasket_daily_totalsInput>
  }

  export type basketsUpdateWithWhereUniqueWithoutBasket_daily_totalsInput = {
    where: basketsWhereUniqueInput
    data: XOR<basketsUpdateWithoutBasket_daily_totalsInput, basketsUncheckedUpdateWithoutBasket_daily_totalsInput>
  }

  export type basketsUpdateManyWithWhereWithoutBasket_daily_totalsInput = {
    where: basketsScalarWhereInput
    data: XOR<basketsUpdateManyMutationInput, basketsUncheckedUpdateManyWithoutBasketsInput>
  }

  export type basketsScalarWhereInput = {
    AND?: Enumerable<basketsScalarWhereInput>
    OR?: Enumerable<basketsScalarWhereInput>
    NOT?: Enumerable<basketsScalarWhereInput>
    id?: IntFilter | number
    goodfood_id?: IntFilter | number
    delivery_date?: DateTimeFilter | Date | string
    basket_totals?: JsonNullableFilter
    basket_indexes?: JsonNullableFilter
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeNullableFilter | Date | string | null
    region_id?: IntFilter | number
    basket_daily_total_id?: IntFilter | number
  }

  export type basket_line_itemsCreateWithoutBasket_line_item_competitor_equivalentsInput = {
    quantity: number
    basket_id: number
    product_sku: string
    created_at?: Date | string
    updated_at?: Date | string | null
    competitor_indexes?: NullableJsonNullValueInput | InputJsonValue
    competitor_prices?: NullableJsonNullValueInput | InputJsonValue
    goodfood_price: number
    basket_line_item_recommended_prices?: basket_line_item_recommended_pricesCreateNestedManyWithoutBasket_line_itemsInput
  }

  export type basket_line_itemsUncheckedCreateWithoutBasket_line_item_competitor_equivalentsInput = {
    id?: number
    quantity: number
    basket_id: number
    product_sku: string
    created_at?: Date | string
    updated_at?: Date | string | null
    competitor_indexes?: NullableJsonNullValueInput | InputJsonValue
    competitor_prices?: NullableJsonNullValueInput | InputJsonValue
    goodfood_price: number
    basket_line_item_recommended_prices?: basket_line_item_recommended_pricesUncheckedCreateNestedManyWithoutBasket_line_itemsInput
  }

  export type basket_line_itemsCreateOrConnectWithoutBasket_line_item_competitor_equivalentsInput = {
    where: basket_line_itemsWhereUniqueInput
    create: XOR<basket_line_itemsCreateWithoutBasket_line_item_competitor_equivalentsInput, basket_line_itemsUncheckedCreateWithoutBasket_line_item_competitor_equivalentsInput>
  }

  export type competitorsCreateWithoutBasket_line_item_competitor_equivalentsInput = {
    slug: string
    display_text: string
    product_region_competitor_urls?: product_region_competitor_urlsCreateNestedManyWithoutCompetitorsInput
    scaled_prices?: scaled_pricesCreateNestedManyWithoutCompetitorsInput
  }

  export type competitorsUncheckedCreateWithoutBasket_line_item_competitor_equivalentsInput = {
    id?: number
    slug: string
    display_text: string
    product_region_competitor_urls?: product_region_competitor_urlsUncheckedCreateNestedManyWithoutCompetitorsInput
    scaled_prices?: scaled_pricesUncheckedCreateNestedManyWithoutCompetitorsInput
  }

  export type competitorsCreateOrConnectWithoutBasket_line_item_competitor_equivalentsInput = {
    where: competitorsWhereUniqueInput
    create: XOR<competitorsCreateWithoutBasket_line_item_competitor_equivalentsInput, competitorsUncheckedCreateWithoutBasket_line_item_competitor_equivalentsInput>
  }

  export type basket_line_itemsUpsertWithoutBasket_line_item_competitor_equivalentsInput = {
    update: XOR<basket_line_itemsUpdateWithoutBasket_line_item_competitor_equivalentsInput, basket_line_itemsUncheckedUpdateWithoutBasket_line_item_competitor_equivalentsInput>
    create: XOR<basket_line_itemsCreateWithoutBasket_line_item_competitor_equivalentsInput, basket_line_itemsUncheckedCreateWithoutBasket_line_item_competitor_equivalentsInput>
  }

  export type basket_line_itemsUpdateWithoutBasket_line_item_competitor_equivalentsInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    basket_id?: IntFieldUpdateOperationsInput | number
    product_sku?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    competitor_indexes?: NullableJsonNullValueInput | InputJsonValue
    competitor_prices?: NullableJsonNullValueInput | InputJsonValue
    goodfood_price?: FloatFieldUpdateOperationsInput | number
    basket_line_item_recommended_prices?: basket_line_item_recommended_pricesUpdateManyWithoutBasket_line_itemsInput
  }

  export type basket_line_itemsUncheckedUpdateWithoutBasket_line_item_competitor_equivalentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    basket_id?: IntFieldUpdateOperationsInput | number
    product_sku?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    competitor_indexes?: NullableJsonNullValueInput | InputJsonValue
    competitor_prices?: NullableJsonNullValueInput | InputJsonValue
    goodfood_price?: FloatFieldUpdateOperationsInput | number
    basket_line_item_recommended_prices?: basket_line_item_recommended_pricesUncheckedUpdateManyWithoutBasket_line_itemsInput
  }

  export type competitorsUpsertWithoutBasket_line_item_competitor_equivalentsInput = {
    update: XOR<competitorsUpdateWithoutBasket_line_item_competitor_equivalentsInput, competitorsUncheckedUpdateWithoutBasket_line_item_competitor_equivalentsInput>
    create: XOR<competitorsCreateWithoutBasket_line_item_competitor_equivalentsInput, competitorsUncheckedCreateWithoutBasket_line_item_competitor_equivalentsInput>
  }

  export type competitorsUpdateWithoutBasket_line_item_competitor_equivalentsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    display_text?: StringFieldUpdateOperationsInput | string
    product_region_competitor_urls?: product_region_competitor_urlsUpdateManyWithoutCompetitorsInput
    scaled_prices?: scaled_pricesUpdateManyWithoutCompetitorsInput
  }

  export type competitorsUncheckedUpdateWithoutBasket_line_item_competitor_equivalentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    display_text?: StringFieldUpdateOperationsInput | string
    product_region_competitor_urls?: product_region_competitor_urlsUncheckedUpdateManyWithoutCompetitorsInput
    scaled_prices?: scaled_pricesUncheckedUpdateManyWithoutCompetitorsInput
  }

  export type basket_line_itemsCreateWithoutBasket_line_item_recommended_pricesInput = {
    quantity: number
    basket_id: number
    product_sku: string
    created_at?: Date | string
    updated_at?: Date | string | null
    competitor_indexes?: NullableJsonNullValueInput | InputJsonValue
    competitor_prices?: NullableJsonNullValueInput | InputJsonValue
    goodfood_price: number
    basket_line_item_competitor_equivalents?: basket_line_item_competitor_equivalentsCreateNestedManyWithoutBasket_line_itemsInput
  }

  export type basket_line_itemsUncheckedCreateWithoutBasket_line_item_recommended_pricesInput = {
    id?: number
    quantity: number
    basket_id: number
    product_sku: string
    created_at?: Date | string
    updated_at?: Date | string | null
    competitor_indexes?: NullableJsonNullValueInput | InputJsonValue
    competitor_prices?: NullableJsonNullValueInput | InputJsonValue
    goodfood_price: number
    basket_line_item_competitor_equivalents?: basket_line_item_competitor_equivalentsUncheckedCreateNestedManyWithoutBasket_line_itemsInput
  }

  export type basket_line_itemsCreateOrConnectWithoutBasket_line_item_recommended_pricesInput = {
    where: basket_line_itemsWhereUniqueInput
    create: XOR<basket_line_itemsCreateWithoutBasket_line_item_recommended_pricesInput, basket_line_itemsUncheckedCreateWithoutBasket_line_item_recommended_pricesInput>
  }

  export type basket_line_itemsUpsertWithoutBasket_line_item_recommended_pricesInput = {
    update: XOR<basket_line_itemsUpdateWithoutBasket_line_item_recommended_pricesInput, basket_line_itemsUncheckedUpdateWithoutBasket_line_item_recommended_pricesInput>
    create: XOR<basket_line_itemsCreateWithoutBasket_line_item_recommended_pricesInput, basket_line_itemsUncheckedCreateWithoutBasket_line_item_recommended_pricesInput>
  }

  export type basket_line_itemsUpdateWithoutBasket_line_item_recommended_pricesInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    basket_id?: IntFieldUpdateOperationsInput | number
    product_sku?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    competitor_indexes?: NullableJsonNullValueInput | InputJsonValue
    competitor_prices?: NullableJsonNullValueInput | InputJsonValue
    goodfood_price?: FloatFieldUpdateOperationsInput | number
    basket_line_item_competitor_equivalents?: basket_line_item_competitor_equivalentsUpdateManyWithoutBasket_line_itemsInput
  }

  export type basket_line_itemsUncheckedUpdateWithoutBasket_line_item_recommended_pricesInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    basket_id?: IntFieldUpdateOperationsInput | number
    product_sku?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    competitor_indexes?: NullableJsonNullValueInput | InputJsonValue
    competitor_prices?: NullableJsonNullValueInput | InputJsonValue
    goodfood_price?: FloatFieldUpdateOperationsInput | number
    basket_line_item_competitor_equivalents?: basket_line_item_competitor_equivalentsUncheckedUpdateManyWithoutBasket_line_itemsInput
  }

  export type basket_line_item_competitor_equivalentsCreateWithoutBasket_line_itemsInput = {
    competitor_price?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    competitors: competitorsCreateNestedOneWithoutBasket_line_item_competitor_equivalentsInput
  }

  export type basket_line_item_competitor_equivalentsUncheckedCreateWithoutBasket_line_itemsInput = {
    id?: number
    competitor_price?: number | null
    competitor_id: number
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type basket_line_item_competitor_equivalentsCreateOrConnectWithoutBasket_line_itemsInput = {
    where: basket_line_item_competitor_equivalentsWhereUniqueInput
    create: XOR<basket_line_item_competitor_equivalentsCreateWithoutBasket_line_itemsInput, basket_line_item_competitor_equivalentsUncheckedCreateWithoutBasket_line_itemsInput>
  }

  export type basket_line_item_competitor_equivalentsCreateManyBasket_line_itemsInputEnvelope = {
    data: Enumerable<basket_line_item_competitor_equivalentsCreateManyBasket_line_itemsInput>
    skipDuplicates?: boolean
  }

  export type basket_line_item_recommended_pricesCreateWithoutBasket_line_itemsInput = {
    recommended_price: number
    price_recommendation_id?: number | null
  }

  export type basket_line_item_recommended_pricesUncheckedCreateWithoutBasket_line_itemsInput = {
    id?: number
    recommended_price: number
    price_recommendation_id?: number | null
  }

  export type basket_line_item_recommended_pricesCreateOrConnectWithoutBasket_line_itemsInput = {
    where: basket_line_item_recommended_pricesWhereUniqueInput
    create: XOR<basket_line_item_recommended_pricesCreateWithoutBasket_line_itemsInput, basket_line_item_recommended_pricesUncheckedCreateWithoutBasket_line_itemsInput>
  }

  export type basket_line_item_recommended_pricesCreateManyBasket_line_itemsInputEnvelope = {
    data: Enumerable<basket_line_item_recommended_pricesCreateManyBasket_line_itemsInput>
    skipDuplicates?: boolean
  }

  export type basket_line_item_competitor_equivalentsUpsertWithWhereUniqueWithoutBasket_line_itemsInput = {
    where: basket_line_item_competitor_equivalentsWhereUniqueInput
    update: XOR<basket_line_item_competitor_equivalentsUpdateWithoutBasket_line_itemsInput, basket_line_item_competitor_equivalentsUncheckedUpdateWithoutBasket_line_itemsInput>
    create: XOR<basket_line_item_competitor_equivalentsCreateWithoutBasket_line_itemsInput, basket_line_item_competitor_equivalentsUncheckedCreateWithoutBasket_line_itemsInput>
  }

  export type basket_line_item_competitor_equivalentsUpdateWithWhereUniqueWithoutBasket_line_itemsInput = {
    where: basket_line_item_competitor_equivalentsWhereUniqueInput
    data: XOR<basket_line_item_competitor_equivalentsUpdateWithoutBasket_line_itemsInput, basket_line_item_competitor_equivalentsUncheckedUpdateWithoutBasket_line_itemsInput>
  }

  export type basket_line_item_competitor_equivalentsUpdateManyWithWhereWithoutBasket_line_itemsInput = {
    where: basket_line_item_competitor_equivalentsScalarWhereInput
    data: XOR<basket_line_item_competitor_equivalentsUpdateManyMutationInput, basket_line_item_competitor_equivalentsUncheckedUpdateManyWithoutBasket_line_item_competitor_equivalentsInput>
  }

  export type basket_line_item_competitor_equivalentsScalarWhereInput = {
    AND?: Enumerable<basket_line_item_competitor_equivalentsScalarWhereInput>
    OR?: Enumerable<basket_line_item_competitor_equivalentsScalarWhereInput>
    NOT?: Enumerable<basket_line_item_competitor_equivalentsScalarWhereInput>
    id?: IntFilter | number
    competitor_price?: FloatNullableFilter | number | null
    basket_line_item_id?: IntFilter | number
    competitor_id?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeNullableFilter | Date | string | null
  }

  export type basket_line_item_recommended_pricesUpsertWithWhereUniqueWithoutBasket_line_itemsInput = {
    where: basket_line_item_recommended_pricesWhereUniqueInput
    update: XOR<basket_line_item_recommended_pricesUpdateWithoutBasket_line_itemsInput, basket_line_item_recommended_pricesUncheckedUpdateWithoutBasket_line_itemsInput>
    create: XOR<basket_line_item_recommended_pricesCreateWithoutBasket_line_itemsInput, basket_line_item_recommended_pricesUncheckedCreateWithoutBasket_line_itemsInput>
  }

  export type basket_line_item_recommended_pricesUpdateWithWhereUniqueWithoutBasket_line_itemsInput = {
    where: basket_line_item_recommended_pricesWhereUniqueInput
    data: XOR<basket_line_item_recommended_pricesUpdateWithoutBasket_line_itemsInput, basket_line_item_recommended_pricesUncheckedUpdateWithoutBasket_line_itemsInput>
  }

  export type basket_line_item_recommended_pricesUpdateManyWithWhereWithoutBasket_line_itemsInput = {
    where: basket_line_item_recommended_pricesScalarWhereInput
    data: XOR<basket_line_item_recommended_pricesUpdateManyMutationInput, basket_line_item_recommended_pricesUncheckedUpdateManyWithoutBasket_line_item_recommended_pricesInput>
  }

  export type basket_line_item_recommended_pricesScalarWhereInput = {
    AND?: Enumerable<basket_line_item_recommended_pricesScalarWhereInput>
    OR?: Enumerable<basket_line_item_recommended_pricesScalarWhereInput>
    NOT?: Enumerable<basket_line_item_recommended_pricesScalarWhereInput>
    id?: IntFilter | number
    recommended_price?: FloatFilter | number
    basket_line_item_id?: IntFilter | number
    price_recommendation_id?: IntNullableFilter | number | null
  }

  export type basket_daily_totalsCreateWithoutBasketsInput = {
    delivery_date: Date | string
    daily_totals: JsonNullValueInput | InputJsonValue
    daily_indexes: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type basket_daily_totalsUncheckedCreateWithoutBasketsInput = {
    id?: number
    delivery_date: Date | string
    daily_totals: JsonNullValueInput | InputJsonValue
    daily_indexes: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type basket_daily_totalsCreateOrConnectWithoutBasketsInput = {
    where: basket_daily_totalsWhereUniqueInput
    create: XOR<basket_daily_totalsCreateWithoutBasketsInput, basket_daily_totalsUncheckedCreateWithoutBasketsInput>
  }

  export type regionsCreateWithoutBasketsInput = {
    name?: string | null
    facility?: string | null
    city?: string | null
    province?: string | null
    postal_code?: string | null
    is_active?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    price_recommendations?: price_recommendationsCreateNestedManyWithoutRegionsInput
    product_region_competitor_urls?: product_region_competitor_urlsCreateNestedManyWithoutRegionsInput
    product_region_price_data?: product_region_price_dataCreateNestedManyWithoutRegionsInput
    scaled_prices?: scaled_pricesCreateNestedManyWithoutRegionsInput
  }

  export type regionsUncheckedCreateWithoutBasketsInput = {
    id?: number
    name?: string | null
    facility?: string | null
    city?: string | null
    province?: string | null
    postal_code?: string | null
    is_active?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    price_recommendations?: price_recommendationsUncheckedCreateNestedManyWithoutRegionsInput
    product_region_competitor_urls?: product_region_competitor_urlsUncheckedCreateNestedManyWithoutRegionsInput
    product_region_price_data?: product_region_price_dataUncheckedCreateNestedManyWithoutRegionsInput
    scaled_prices?: scaled_pricesUncheckedCreateNestedManyWithoutRegionsInput
  }

  export type regionsCreateOrConnectWithoutBasketsInput = {
    where: regionsWhereUniqueInput
    create: XOR<regionsCreateWithoutBasketsInput, regionsUncheckedCreateWithoutBasketsInput>
  }

  export type basket_daily_totalsUpsertWithoutBasketsInput = {
    update: XOR<basket_daily_totalsUpdateWithoutBasketsInput, basket_daily_totalsUncheckedUpdateWithoutBasketsInput>
    create: XOR<basket_daily_totalsCreateWithoutBasketsInput, basket_daily_totalsUncheckedCreateWithoutBasketsInput>
  }

  export type basket_daily_totalsUpdateWithoutBasketsInput = {
    delivery_date?: DateTimeFieldUpdateOperationsInput | Date | string
    daily_totals?: JsonNullValueInput | InputJsonValue
    daily_indexes?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type basket_daily_totalsUncheckedUpdateWithoutBasketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    delivery_date?: DateTimeFieldUpdateOperationsInput | Date | string
    daily_totals?: JsonNullValueInput | InputJsonValue
    daily_indexes?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type regionsUpsertWithoutBasketsInput = {
    update: XOR<regionsUpdateWithoutBasketsInput, regionsUncheckedUpdateWithoutBasketsInput>
    create: XOR<regionsCreateWithoutBasketsInput, regionsUncheckedCreateWithoutBasketsInput>
  }

  export type regionsUpdateWithoutBasketsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    facility?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price_recommendations?: price_recommendationsUpdateManyWithoutRegionsInput
    product_region_competitor_urls?: product_region_competitor_urlsUpdateManyWithoutRegionsInput
    product_region_price_data?: product_region_price_dataUpdateManyWithoutRegionsInput
    scaled_prices?: scaled_pricesUpdateManyWithoutRegionsInput
  }

  export type regionsUncheckedUpdateWithoutBasketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    facility?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price_recommendations?: price_recommendationsUncheckedUpdateManyWithoutRegionsInput
    product_region_competitor_urls?: product_region_competitor_urlsUncheckedUpdateManyWithoutRegionsInput
    product_region_price_data?: product_region_price_dataUncheckedUpdateManyWithoutRegionsInput
    scaled_prices?: scaled_pricesUncheckedUpdateManyWithoutRegionsInput
  }

  export type basket_line_item_competitor_equivalentsCreateWithoutCompetitorsInput = {
    competitor_price?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    basket_line_items: basket_line_itemsCreateNestedOneWithoutBasket_line_item_competitor_equivalentsInput
  }

  export type basket_line_item_competitor_equivalentsUncheckedCreateWithoutCompetitorsInput = {
    id?: number
    competitor_price?: number | null
    basket_line_item_id: number
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type basket_line_item_competitor_equivalentsCreateOrConnectWithoutCompetitorsInput = {
    where: basket_line_item_competitor_equivalentsWhereUniqueInput
    create: XOR<basket_line_item_competitor_equivalentsCreateWithoutCompetitorsInput, basket_line_item_competitor_equivalentsUncheckedCreateWithoutCompetitorsInput>
  }

  export type basket_line_item_competitor_equivalentsCreateManyCompetitorsInputEnvelope = {
    data: Enumerable<basket_line_item_competitor_equivalentsCreateManyCompetitorsInput>
    skipDuplicates?: boolean
  }

  export type product_region_competitor_urlsCreateWithoutCompetitorsInput = {
    url: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    products: productsCreateNestedOneWithoutProduct_region_competitor_urlsInput
    regions: regionsCreateNestedOneWithoutProduct_region_competitor_urlsInput
    product_region_competitor_urls_former_urls?: product_region_competitor_urls_former_urlsCreateNestedManyWithoutProduct_region_competitor_urlsInput
  }

  export type product_region_competitor_urlsUncheckedCreateWithoutCompetitorsInput = {
    id?: number
    product_id: number
    region_id: number
    url: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    product_region_competitor_urls_former_urls?: product_region_competitor_urls_former_urlsUncheckedCreateNestedManyWithoutProduct_region_competitor_urlsInput
  }

  export type product_region_competitor_urlsCreateOrConnectWithoutCompetitorsInput = {
    where: product_region_competitor_urlsWhereUniqueInput
    create: XOR<product_region_competitor_urlsCreateWithoutCompetitorsInput, product_region_competitor_urlsUncheckedCreateWithoutCompetitorsInput>
  }

  export type product_region_competitor_urlsCreateManyCompetitorsInputEnvelope = {
    data: Enumerable<product_region_competitor_urlsCreateManyCompetitorsInput>
    skipDuplicates?: boolean
  }

  export type scaled_pricesCreateWithoutCompetitorsInput = {
    competitor_scaled_price?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    products: productsCreateNestedOneWithoutScaled_pricesInput
    regions: regionsCreateNestedOneWithoutScaled_pricesInput
    scrape_results: scrape_resultsCreateNestedOneWithoutScaled_pricesInput
  }

  export type scaled_pricesUncheckedCreateWithoutCompetitorsInput = {
    id?: number
    product_id: number
    region_id: number
    scrape_result_id: number
    competitor_scaled_price?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type scaled_pricesCreateOrConnectWithoutCompetitorsInput = {
    where: scaled_pricesWhereUniqueInput
    create: XOR<scaled_pricesCreateWithoutCompetitorsInput, scaled_pricesUncheckedCreateWithoutCompetitorsInput>
  }

  export type scaled_pricesCreateManyCompetitorsInputEnvelope = {
    data: Enumerable<scaled_pricesCreateManyCompetitorsInput>
    skipDuplicates?: boolean
  }

  export type basket_line_item_competitor_equivalentsUpsertWithWhereUniqueWithoutCompetitorsInput = {
    where: basket_line_item_competitor_equivalentsWhereUniqueInput
    update: XOR<basket_line_item_competitor_equivalentsUpdateWithoutCompetitorsInput, basket_line_item_competitor_equivalentsUncheckedUpdateWithoutCompetitorsInput>
    create: XOR<basket_line_item_competitor_equivalentsCreateWithoutCompetitorsInput, basket_line_item_competitor_equivalentsUncheckedCreateWithoutCompetitorsInput>
  }

  export type basket_line_item_competitor_equivalentsUpdateWithWhereUniqueWithoutCompetitorsInput = {
    where: basket_line_item_competitor_equivalentsWhereUniqueInput
    data: XOR<basket_line_item_competitor_equivalentsUpdateWithoutCompetitorsInput, basket_line_item_competitor_equivalentsUncheckedUpdateWithoutCompetitorsInput>
  }

  export type basket_line_item_competitor_equivalentsUpdateManyWithWhereWithoutCompetitorsInput = {
    where: basket_line_item_competitor_equivalentsScalarWhereInput
    data: XOR<basket_line_item_competitor_equivalentsUpdateManyMutationInput, basket_line_item_competitor_equivalentsUncheckedUpdateManyWithoutBasket_line_item_competitor_equivalentsInput>
  }

  export type product_region_competitor_urlsUpsertWithWhereUniqueWithoutCompetitorsInput = {
    where: product_region_competitor_urlsWhereUniqueInput
    update: XOR<product_region_competitor_urlsUpdateWithoutCompetitorsInput, product_region_competitor_urlsUncheckedUpdateWithoutCompetitorsInput>
    create: XOR<product_region_competitor_urlsCreateWithoutCompetitorsInput, product_region_competitor_urlsUncheckedCreateWithoutCompetitorsInput>
  }

  export type product_region_competitor_urlsUpdateWithWhereUniqueWithoutCompetitorsInput = {
    where: product_region_competitor_urlsWhereUniqueInput
    data: XOR<product_region_competitor_urlsUpdateWithoutCompetitorsInput, product_region_competitor_urlsUncheckedUpdateWithoutCompetitorsInput>
  }

  export type product_region_competitor_urlsUpdateManyWithWhereWithoutCompetitorsInput = {
    where: product_region_competitor_urlsScalarWhereInput
    data: XOR<product_region_competitor_urlsUpdateManyMutationInput, product_region_competitor_urlsUncheckedUpdateManyWithoutProduct_region_competitor_urlsInput>
  }

  export type product_region_competitor_urlsScalarWhereInput = {
    AND?: Enumerable<product_region_competitor_urlsScalarWhereInput>
    OR?: Enumerable<product_region_competitor_urlsScalarWhereInput>
    NOT?: Enumerable<product_region_competitor_urlsScalarWhereInput>
    id?: IntFilter | number
    product_id?: IntFilter | number
    region_id?: IntFilter | number
    competitor_id?: IntFilter | number
    url?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeNullableFilter | Date | string | null
    deleted_at?: DateTimeNullableFilter | Date | string | null
  }

  export type scaled_pricesUpsertWithWhereUniqueWithoutCompetitorsInput = {
    where: scaled_pricesWhereUniqueInput
    update: XOR<scaled_pricesUpdateWithoutCompetitorsInput, scaled_pricesUncheckedUpdateWithoutCompetitorsInput>
    create: XOR<scaled_pricesCreateWithoutCompetitorsInput, scaled_pricesUncheckedCreateWithoutCompetitorsInput>
  }

  export type scaled_pricesUpdateWithWhereUniqueWithoutCompetitorsInput = {
    where: scaled_pricesWhereUniqueInput
    data: XOR<scaled_pricesUpdateWithoutCompetitorsInput, scaled_pricesUncheckedUpdateWithoutCompetitorsInput>
  }

  export type scaled_pricesUpdateManyWithWhereWithoutCompetitorsInput = {
    where: scaled_pricesScalarWhereInput
    data: XOR<scaled_pricesUpdateManyMutationInput, scaled_pricesUncheckedUpdateManyWithoutScaled_pricesInput>
  }

  export type scaled_pricesScalarWhereInput = {
    AND?: Enumerable<scaled_pricesScalarWhereInput>
    OR?: Enumerable<scaled_pricesScalarWhereInput>
    NOT?: Enumerable<scaled_pricesScalarWhereInput>
    id?: IntFilter | number
    product_id?: IntFilter | number
    competitor_id?: IntFilter | number
    region_id?: IntFilter | number
    scrape_result_id?: IntFilter | number
    competitor_scaled_price?: FloatNullableFilter | number | null
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeNullableFilter | Date | string | null
    deleted_at?: DateTimeNullableFilter | Date | string | null
  }

  export type productsCreateWithoutPrice_recommendationsInput = {
    sku?: string | null
    name?: string | null
    package_quantity?: number | null
    package_units?: string | null
    package_weight?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    units: unitsCreateNestedOneWithoutProductsInput
    product_region_competitor_urls?: product_region_competitor_urlsCreateNestedManyWithoutProductsInput
    product_region_price_data?: product_region_price_dataCreateNestedManyWithoutProductsInput
    scaled_prices?: scaled_pricesCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutPrice_recommendationsInput = {
    id?: number
    sku?: string | null
    name?: string | null
    package_quantity?: number | null
    package_units?: string | null
    package_weight?: number | null
    weight_unit_id: number
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    product_region_competitor_urls?: product_region_competitor_urlsUncheckedCreateNestedManyWithoutProductsInput
    product_region_price_data?: product_region_price_dataUncheckedCreateNestedManyWithoutProductsInput
    scaled_prices?: scaled_pricesUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutPrice_recommendationsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutPrice_recommendationsInput, productsUncheckedCreateWithoutPrice_recommendationsInput>
  }

  export type regionsCreateWithoutPrice_recommendationsInput = {
    name?: string | null
    facility?: string | null
    city?: string | null
    province?: string | null
    postal_code?: string | null
    is_active?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    baskets?: basketsCreateNestedManyWithoutRegionsInput
    product_region_competitor_urls?: product_region_competitor_urlsCreateNestedManyWithoutRegionsInput
    product_region_price_data?: product_region_price_dataCreateNestedManyWithoutRegionsInput
    scaled_prices?: scaled_pricesCreateNestedManyWithoutRegionsInput
  }

  export type regionsUncheckedCreateWithoutPrice_recommendationsInput = {
    id?: number
    name?: string | null
    facility?: string | null
    city?: string | null
    province?: string | null
    postal_code?: string | null
    is_active?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    baskets?: basketsUncheckedCreateNestedManyWithoutRegionsInput
    product_region_competitor_urls?: product_region_competitor_urlsUncheckedCreateNestedManyWithoutRegionsInput
    product_region_price_data?: product_region_price_dataUncheckedCreateNestedManyWithoutRegionsInput
    scaled_prices?: scaled_pricesUncheckedCreateNestedManyWithoutRegionsInput
  }

  export type regionsCreateOrConnectWithoutPrice_recommendationsInput = {
    where: regionsWhereUniqueInput
    create: XOR<regionsCreateWithoutPrice_recommendationsInput, regionsUncheckedCreateWithoutPrice_recommendationsInput>
  }

  export type productsUpsertWithoutPrice_recommendationsInput = {
    update: XOR<productsUpdateWithoutPrice_recommendationsInput, productsUncheckedUpdateWithoutPrice_recommendationsInput>
    create: XOR<productsCreateWithoutPrice_recommendationsInput, productsUncheckedCreateWithoutPrice_recommendationsInput>
  }

  export type productsUpdateWithoutPrice_recommendationsInput = {
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    package_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    package_units?: NullableStringFieldUpdateOperationsInput | string | null
    package_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    units?: unitsUpdateOneRequiredWithoutProductsInput
    product_region_competitor_urls?: product_region_competitor_urlsUpdateManyWithoutProductsInput
    product_region_price_data?: product_region_price_dataUpdateManyWithoutProductsInput
    scaled_prices?: scaled_pricesUpdateManyWithoutProductsInput
  }

  export type productsUncheckedUpdateWithoutPrice_recommendationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    package_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    package_units?: NullableStringFieldUpdateOperationsInput | string | null
    package_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    weight_unit_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_region_competitor_urls?: product_region_competitor_urlsUncheckedUpdateManyWithoutProductsInput
    product_region_price_data?: product_region_price_dataUncheckedUpdateManyWithoutProductsInput
    scaled_prices?: scaled_pricesUncheckedUpdateManyWithoutProductsInput
  }

  export type regionsUpsertWithoutPrice_recommendationsInput = {
    update: XOR<regionsUpdateWithoutPrice_recommendationsInput, regionsUncheckedUpdateWithoutPrice_recommendationsInput>
    create: XOR<regionsCreateWithoutPrice_recommendationsInput, regionsUncheckedCreateWithoutPrice_recommendationsInput>
  }

  export type regionsUpdateWithoutPrice_recommendationsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    facility?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    baskets?: basketsUpdateManyWithoutRegionsInput
    product_region_competitor_urls?: product_region_competitor_urlsUpdateManyWithoutRegionsInput
    product_region_price_data?: product_region_price_dataUpdateManyWithoutRegionsInput
    scaled_prices?: scaled_pricesUpdateManyWithoutRegionsInput
  }

  export type regionsUncheckedUpdateWithoutPrice_recommendationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    facility?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    baskets?: basketsUncheckedUpdateManyWithoutRegionsInput
    product_region_competitor_urls?: product_region_competitor_urlsUncheckedUpdateManyWithoutRegionsInput
    product_region_price_data?: product_region_price_dataUncheckedUpdateManyWithoutRegionsInput
    scaled_prices?: scaled_pricesUncheckedUpdateManyWithoutRegionsInput
  }

  export type competitorsCreateWithoutProduct_region_competitor_urlsInput = {
    slug: string
    display_text: string
    basket_line_item_competitor_equivalents?: basket_line_item_competitor_equivalentsCreateNestedManyWithoutCompetitorsInput
    scaled_prices?: scaled_pricesCreateNestedManyWithoutCompetitorsInput
  }

  export type competitorsUncheckedCreateWithoutProduct_region_competitor_urlsInput = {
    id?: number
    slug: string
    display_text: string
    basket_line_item_competitor_equivalents?: basket_line_item_competitor_equivalentsUncheckedCreateNestedManyWithoutCompetitorsInput
    scaled_prices?: scaled_pricesUncheckedCreateNestedManyWithoutCompetitorsInput
  }

  export type competitorsCreateOrConnectWithoutProduct_region_competitor_urlsInput = {
    where: competitorsWhereUniqueInput
    create: XOR<competitorsCreateWithoutProduct_region_competitor_urlsInput, competitorsUncheckedCreateWithoutProduct_region_competitor_urlsInput>
  }

  export type productsCreateWithoutProduct_region_competitor_urlsInput = {
    sku?: string | null
    name?: string | null
    package_quantity?: number | null
    package_units?: string | null
    package_weight?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    units: unitsCreateNestedOneWithoutProductsInput
    price_recommendations?: price_recommendationsCreateNestedManyWithoutProductsInput
    product_region_price_data?: product_region_price_dataCreateNestedManyWithoutProductsInput
    scaled_prices?: scaled_pricesCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutProduct_region_competitor_urlsInput = {
    id?: number
    sku?: string | null
    name?: string | null
    package_quantity?: number | null
    package_units?: string | null
    package_weight?: number | null
    weight_unit_id: number
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    price_recommendations?: price_recommendationsUncheckedCreateNestedManyWithoutProductsInput
    product_region_price_data?: product_region_price_dataUncheckedCreateNestedManyWithoutProductsInput
    scaled_prices?: scaled_pricesUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutProduct_region_competitor_urlsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutProduct_region_competitor_urlsInput, productsUncheckedCreateWithoutProduct_region_competitor_urlsInput>
  }

  export type regionsCreateWithoutProduct_region_competitor_urlsInput = {
    name?: string | null
    facility?: string | null
    city?: string | null
    province?: string | null
    postal_code?: string | null
    is_active?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    baskets?: basketsCreateNestedManyWithoutRegionsInput
    price_recommendations?: price_recommendationsCreateNestedManyWithoutRegionsInput
    product_region_price_data?: product_region_price_dataCreateNestedManyWithoutRegionsInput
    scaled_prices?: scaled_pricesCreateNestedManyWithoutRegionsInput
  }

  export type regionsUncheckedCreateWithoutProduct_region_competitor_urlsInput = {
    id?: number
    name?: string | null
    facility?: string | null
    city?: string | null
    province?: string | null
    postal_code?: string | null
    is_active?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    baskets?: basketsUncheckedCreateNestedManyWithoutRegionsInput
    price_recommendations?: price_recommendationsUncheckedCreateNestedManyWithoutRegionsInput
    product_region_price_data?: product_region_price_dataUncheckedCreateNestedManyWithoutRegionsInput
    scaled_prices?: scaled_pricesUncheckedCreateNestedManyWithoutRegionsInput
  }

  export type regionsCreateOrConnectWithoutProduct_region_competitor_urlsInput = {
    where: regionsWhereUniqueInput
    create: XOR<regionsCreateWithoutProduct_region_competitor_urlsInput, regionsUncheckedCreateWithoutProduct_region_competitor_urlsInput>
  }

  export type product_region_competitor_urls_former_urlsCreateWithoutProduct_region_competitor_urlsInput = {
    old_url: string
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type product_region_competitor_urls_former_urlsUncheckedCreateWithoutProduct_region_competitor_urlsInput = {
    old_url: string
    created_at?: Date | string
    updated_at?: Date | string | null
    id?: number
  }

  export type product_region_competitor_urls_former_urlsCreateOrConnectWithoutProduct_region_competitor_urlsInput = {
    where: product_region_competitor_urls_former_urlsWhereUniqueInput
    create: XOR<product_region_competitor_urls_former_urlsCreateWithoutProduct_region_competitor_urlsInput, product_region_competitor_urls_former_urlsUncheckedCreateWithoutProduct_region_competitor_urlsInput>
  }

  export type product_region_competitor_urls_former_urlsCreateManyProduct_region_competitor_urlsInputEnvelope = {
    data: Enumerable<product_region_competitor_urls_former_urlsCreateManyProduct_region_competitor_urlsInput>
    skipDuplicates?: boolean
  }

  export type competitorsUpsertWithoutProduct_region_competitor_urlsInput = {
    update: XOR<competitorsUpdateWithoutProduct_region_competitor_urlsInput, competitorsUncheckedUpdateWithoutProduct_region_competitor_urlsInput>
    create: XOR<competitorsCreateWithoutProduct_region_competitor_urlsInput, competitorsUncheckedCreateWithoutProduct_region_competitor_urlsInput>
  }

  export type competitorsUpdateWithoutProduct_region_competitor_urlsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    display_text?: StringFieldUpdateOperationsInput | string
    basket_line_item_competitor_equivalents?: basket_line_item_competitor_equivalentsUpdateManyWithoutCompetitorsInput
    scaled_prices?: scaled_pricesUpdateManyWithoutCompetitorsInput
  }

  export type competitorsUncheckedUpdateWithoutProduct_region_competitor_urlsInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    display_text?: StringFieldUpdateOperationsInput | string
    basket_line_item_competitor_equivalents?: basket_line_item_competitor_equivalentsUncheckedUpdateManyWithoutCompetitorsInput
    scaled_prices?: scaled_pricesUncheckedUpdateManyWithoutCompetitorsInput
  }

  export type productsUpsertWithoutProduct_region_competitor_urlsInput = {
    update: XOR<productsUpdateWithoutProduct_region_competitor_urlsInput, productsUncheckedUpdateWithoutProduct_region_competitor_urlsInput>
    create: XOR<productsCreateWithoutProduct_region_competitor_urlsInput, productsUncheckedCreateWithoutProduct_region_competitor_urlsInput>
  }

  export type productsUpdateWithoutProduct_region_competitor_urlsInput = {
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    package_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    package_units?: NullableStringFieldUpdateOperationsInput | string | null
    package_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    units?: unitsUpdateOneRequiredWithoutProductsInput
    price_recommendations?: price_recommendationsUpdateManyWithoutProductsInput
    product_region_price_data?: product_region_price_dataUpdateManyWithoutProductsInput
    scaled_prices?: scaled_pricesUpdateManyWithoutProductsInput
  }

  export type productsUncheckedUpdateWithoutProduct_region_competitor_urlsInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    package_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    package_units?: NullableStringFieldUpdateOperationsInput | string | null
    package_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    weight_unit_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price_recommendations?: price_recommendationsUncheckedUpdateManyWithoutProductsInput
    product_region_price_data?: product_region_price_dataUncheckedUpdateManyWithoutProductsInput
    scaled_prices?: scaled_pricesUncheckedUpdateManyWithoutProductsInput
  }

  export type regionsUpsertWithoutProduct_region_competitor_urlsInput = {
    update: XOR<regionsUpdateWithoutProduct_region_competitor_urlsInput, regionsUncheckedUpdateWithoutProduct_region_competitor_urlsInput>
    create: XOR<regionsCreateWithoutProduct_region_competitor_urlsInput, regionsUncheckedCreateWithoutProduct_region_competitor_urlsInput>
  }

  export type regionsUpdateWithoutProduct_region_competitor_urlsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    facility?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    baskets?: basketsUpdateManyWithoutRegionsInput
    price_recommendations?: price_recommendationsUpdateManyWithoutRegionsInput
    product_region_price_data?: product_region_price_dataUpdateManyWithoutRegionsInput
    scaled_prices?: scaled_pricesUpdateManyWithoutRegionsInput
  }

  export type regionsUncheckedUpdateWithoutProduct_region_competitor_urlsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    facility?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    baskets?: basketsUncheckedUpdateManyWithoutRegionsInput
    price_recommendations?: price_recommendationsUncheckedUpdateManyWithoutRegionsInput
    product_region_price_data?: product_region_price_dataUncheckedUpdateManyWithoutRegionsInput
    scaled_prices?: scaled_pricesUncheckedUpdateManyWithoutRegionsInput
  }

  export type product_region_competitor_urls_former_urlsUpsertWithWhereUniqueWithoutProduct_region_competitor_urlsInput = {
    where: product_region_competitor_urls_former_urlsWhereUniqueInput
    update: XOR<product_region_competitor_urls_former_urlsUpdateWithoutProduct_region_competitor_urlsInput, product_region_competitor_urls_former_urlsUncheckedUpdateWithoutProduct_region_competitor_urlsInput>
    create: XOR<product_region_competitor_urls_former_urlsCreateWithoutProduct_region_competitor_urlsInput, product_region_competitor_urls_former_urlsUncheckedCreateWithoutProduct_region_competitor_urlsInput>
  }

  export type product_region_competitor_urls_former_urlsUpdateWithWhereUniqueWithoutProduct_region_competitor_urlsInput = {
    where: product_region_competitor_urls_former_urlsWhereUniqueInput
    data: XOR<product_region_competitor_urls_former_urlsUpdateWithoutProduct_region_competitor_urlsInput, product_region_competitor_urls_former_urlsUncheckedUpdateWithoutProduct_region_competitor_urlsInput>
  }

  export type product_region_competitor_urls_former_urlsUpdateManyWithWhereWithoutProduct_region_competitor_urlsInput = {
    where: product_region_competitor_urls_former_urlsScalarWhereInput
    data: XOR<product_region_competitor_urls_former_urlsUpdateManyMutationInput, product_region_competitor_urls_former_urlsUncheckedUpdateManyWithoutProduct_region_competitor_urls_former_urlsInput>
  }

  export type product_region_competitor_urls_former_urlsScalarWhereInput = {
    AND?: Enumerable<product_region_competitor_urls_former_urlsScalarWhereInput>
    OR?: Enumerable<product_region_competitor_urls_former_urlsScalarWhereInput>
    NOT?: Enumerable<product_region_competitor_urls_former_urlsScalarWhereInput>
    product_region_competitor_url_id?: IntFilter | number
    old_url?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeNullableFilter | Date | string | null
    id?: IntFilter | number
  }

  export type product_region_competitor_urlsCreateWithoutProduct_region_competitor_urls_former_urlsInput = {
    url: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    competitors: competitorsCreateNestedOneWithoutProduct_region_competitor_urlsInput
    products: productsCreateNestedOneWithoutProduct_region_competitor_urlsInput
    regions: regionsCreateNestedOneWithoutProduct_region_competitor_urlsInput
  }

  export type product_region_competitor_urlsUncheckedCreateWithoutProduct_region_competitor_urls_former_urlsInput = {
    id?: number
    product_id: number
    region_id: number
    competitor_id: number
    url: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type product_region_competitor_urlsCreateOrConnectWithoutProduct_region_competitor_urls_former_urlsInput = {
    where: product_region_competitor_urlsWhereUniqueInput
    create: XOR<product_region_competitor_urlsCreateWithoutProduct_region_competitor_urls_former_urlsInput, product_region_competitor_urlsUncheckedCreateWithoutProduct_region_competitor_urls_former_urlsInput>
  }

  export type product_region_competitor_urlsUpsertWithoutProduct_region_competitor_urls_former_urlsInput = {
    update: XOR<product_region_competitor_urlsUpdateWithoutProduct_region_competitor_urls_former_urlsInput, product_region_competitor_urlsUncheckedUpdateWithoutProduct_region_competitor_urls_former_urlsInput>
    create: XOR<product_region_competitor_urlsCreateWithoutProduct_region_competitor_urls_former_urlsInput, product_region_competitor_urlsUncheckedCreateWithoutProduct_region_competitor_urls_former_urlsInput>
  }

  export type product_region_competitor_urlsUpdateWithoutProduct_region_competitor_urls_former_urlsInput = {
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    competitors?: competitorsUpdateOneRequiredWithoutProduct_region_competitor_urlsInput
    products?: productsUpdateOneRequiredWithoutProduct_region_competitor_urlsInput
    regions?: regionsUpdateOneRequiredWithoutProduct_region_competitor_urlsInput
  }

  export type product_region_competitor_urlsUncheckedUpdateWithoutProduct_region_competitor_urls_former_urlsInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    region_id?: IntFieldUpdateOperationsInput | number
    competitor_id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productsCreateWithoutProduct_region_price_dataInput = {
    sku?: string | null
    name?: string | null
    package_quantity?: number | null
    package_units?: string | null
    package_weight?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    units: unitsCreateNestedOneWithoutProductsInput
    price_recommendations?: price_recommendationsCreateNestedManyWithoutProductsInput
    product_region_competitor_urls?: product_region_competitor_urlsCreateNestedManyWithoutProductsInput
    scaled_prices?: scaled_pricesCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutProduct_region_price_dataInput = {
    id?: number
    sku?: string | null
    name?: string | null
    package_quantity?: number | null
    package_units?: string | null
    package_weight?: number | null
    weight_unit_id: number
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    price_recommendations?: price_recommendationsUncheckedCreateNestedManyWithoutProductsInput
    product_region_competitor_urls?: product_region_competitor_urlsUncheckedCreateNestedManyWithoutProductsInput
    scaled_prices?: scaled_pricesUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutProduct_region_price_dataInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutProduct_region_price_dataInput, productsUncheckedCreateWithoutProduct_region_price_dataInput>
  }

  export type regionsCreateWithoutProduct_region_price_dataInput = {
    name?: string | null
    facility?: string | null
    city?: string | null
    province?: string | null
    postal_code?: string | null
    is_active?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    baskets?: basketsCreateNestedManyWithoutRegionsInput
    price_recommendations?: price_recommendationsCreateNestedManyWithoutRegionsInput
    product_region_competitor_urls?: product_region_competitor_urlsCreateNestedManyWithoutRegionsInput
    scaled_prices?: scaled_pricesCreateNestedManyWithoutRegionsInput
  }

  export type regionsUncheckedCreateWithoutProduct_region_price_dataInput = {
    id?: number
    name?: string | null
    facility?: string | null
    city?: string | null
    province?: string | null
    postal_code?: string | null
    is_active?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    baskets?: basketsUncheckedCreateNestedManyWithoutRegionsInput
    price_recommendations?: price_recommendationsUncheckedCreateNestedManyWithoutRegionsInput
    product_region_competitor_urls?: product_region_competitor_urlsUncheckedCreateNestedManyWithoutRegionsInput
    scaled_prices?: scaled_pricesUncheckedCreateNestedManyWithoutRegionsInput
  }

  export type regionsCreateOrConnectWithoutProduct_region_price_dataInput = {
    where: regionsWhereUniqueInput
    create: XOR<regionsCreateWithoutProduct_region_price_dataInput, regionsUncheckedCreateWithoutProduct_region_price_dataInput>
  }

  export type productsUpsertWithoutProduct_region_price_dataInput = {
    update: XOR<productsUpdateWithoutProduct_region_price_dataInput, productsUncheckedUpdateWithoutProduct_region_price_dataInput>
    create: XOR<productsCreateWithoutProduct_region_price_dataInput, productsUncheckedCreateWithoutProduct_region_price_dataInput>
  }

  export type productsUpdateWithoutProduct_region_price_dataInput = {
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    package_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    package_units?: NullableStringFieldUpdateOperationsInput | string | null
    package_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    units?: unitsUpdateOneRequiredWithoutProductsInput
    price_recommendations?: price_recommendationsUpdateManyWithoutProductsInput
    product_region_competitor_urls?: product_region_competitor_urlsUpdateManyWithoutProductsInput
    scaled_prices?: scaled_pricesUpdateManyWithoutProductsInput
  }

  export type productsUncheckedUpdateWithoutProduct_region_price_dataInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    package_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    package_units?: NullableStringFieldUpdateOperationsInput | string | null
    package_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    weight_unit_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price_recommendations?: price_recommendationsUncheckedUpdateManyWithoutProductsInput
    product_region_competitor_urls?: product_region_competitor_urlsUncheckedUpdateManyWithoutProductsInput
    scaled_prices?: scaled_pricesUncheckedUpdateManyWithoutProductsInput
  }

  export type regionsUpsertWithoutProduct_region_price_dataInput = {
    update: XOR<regionsUpdateWithoutProduct_region_price_dataInput, regionsUncheckedUpdateWithoutProduct_region_price_dataInput>
    create: XOR<regionsCreateWithoutProduct_region_price_dataInput, regionsUncheckedCreateWithoutProduct_region_price_dataInput>
  }

  export type regionsUpdateWithoutProduct_region_price_dataInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    facility?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    baskets?: basketsUpdateManyWithoutRegionsInput
    price_recommendations?: price_recommendationsUpdateManyWithoutRegionsInput
    product_region_competitor_urls?: product_region_competitor_urlsUpdateManyWithoutRegionsInput
    scaled_prices?: scaled_pricesUpdateManyWithoutRegionsInput
  }

  export type regionsUncheckedUpdateWithoutProduct_region_price_dataInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    facility?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    baskets?: basketsUncheckedUpdateManyWithoutRegionsInput
    price_recommendations?: price_recommendationsUncheckedUpdateManyWithoutRegionsInput
    product_region_competitor_urls?: product_region_competitor_urlsUncheckedUpdateManyWithoutRegionsInput
    scaled_prices?: scaled_pricesUncheckedUpdateManyWithoutRegionsInput
  }

  export type unitsCreateWithoutProductsInput = {
    slug: string
    display_text: string
    scale_of_base_unit: number
    units: unitsCreateNestedOneWithoutOther_unitsInput
    scrape_results?: scrape_resultsCreateNestedManyWithoutUnitsInput
    other_units?: unitsCreateNestedManyWithoutUnitsInput
  }

  export type unitsUncheckedCreateWithoutProductsInput = {
    id?: number
    slug: string
    display_text: string
    base_unit_id: number
    scale_of_base_unit: number
    scrape_results?: scrape_resultsUncheckedCreateNestedManyWithoutUnitsInput
    other_units?: unitsUncheckedCreateNestedManyWithoutUnitsInput
  }

  export type unitsCreateOrConnectWithoutProductsInput = {
    where: unitsWhereUniqueInput
    create: XOR<unitsCreateWithoutProductsInput, unitsUncheckedCreateWithoutProductsInput>
  }

  export type price_recommendationsCreateWithoutProductsInput = {
    sale_price: number
    list_price: number
    created_at?: Date | string
    updated_at?: Date | string | null
    regions: regionsCreateNestedOneWithoutPrice_recommendationsInput
  }

  export type price_recommendationsUncheckedCreateWithoutProductsInput = {
    id?: number
    region_id: number
    sale_price: number
    list_price: number
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type price_recommendationsCreateOrConnectWithoutProductsInput = {
    where: price_recommendationsWhereUniqueInput
    create: XOR<price_recommendationsCreateWithoutProductsInput, price_recommendationsUncheckedCreateWithoutProductsInput>
  }

  export type price_recommendationsCreateManyProductsInputEnvelope = {
    data: Enumerable<price_recommendationsCreateManyProductsInput>
    skipDuplicates?: boolean
  }

  export type product_region_competitor_urlsCreateWithoutProductsInput = {
    url: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    competitors: competitorsCreateNestedOneWithoutProduct_region_competitor_urlsInput
    regions: regionsCreateNestedOneWithoutProduct_region_competitor_urlsInput
    product_region_competitor_urls_former_urls?: product_region_competitor_urls_former_urlsCreateNestedManyWithoutProduct_region_competitor_urlsInput
  }

  export type product_region_competitor_urlsUncheckedCreateWithoutProductsInput = {
    id?: number
    region_id: number
    competitor_id: number
    url: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    product_region_competitor_urls_former_urls?: product_region_competitor_urls_former_urlsUncheckedCreateNestedManyWithoutProduct_region_competitor_urlsInput
  }

  export type product_region_competitor_urlsCreateOrConnectWithoutProductsInput = {
    where: product_region_competitor_urlsWhereUniqueInput
    create: XOR<product_region_competitor_urlsCreateWithoutProductsInput, product_region_competitor_urlsUncheckedCreateWithoutProductsInput>
  }

  export type product_region_competitor_urlsCreateManyProductsInputEnvelope = {
    data: Enumerable<product_region_competitor_urlsCreateManyProductsInput>
    skipDuplicates?: boolean
  }

  export type product_region_price_dataCreateWithoutProductsInput = {
    price: number
    discount: number
    threshold_price?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    regions: regionsCreateNestedOneWithoutProduct_region_price_dataInput
  }

  export type product_region_price_dataUncheckedCreateWithoutProductsInput = {
    id?: number
    region_id: number
    price: number
    discount: number
    threshold_price?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type product_region_price_dataCreateOrConnectWithoutProductsInput = {
    where: product_region_price_dataWhereUniqueInput
    create: XOR<product_region_price_dataCreateWithoutProductsInput, product_region_price_dataUncheckedCreateWithoutProductsInput>
  }

  export type product_region_price_dataCreateManyProductsInputEnvelope = {
    data: Enumerable<product_region_price_dataCreateManyProductsInput>
    skipDuplicates?: boolean
  }

  export type scaled_pricesCreateWithoutProductsInput = {
    competitor_scaled_price?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    competitors: competitorsCreateNestedOneWithoutScaled_pricesInput
    regions: regionsCreateNestedOneWithoutScaled_pricesInput
    scrape_results: scrape_resultsCreateNestedOneWithoutScaled_pricesInput
  }

  export type scaled_pricesUncheckedCreateWithoutProductsInput = {
    id?: number
    competitor_id: number
    region_id: number
    scrape_result_id: number
    competitor_scaled_price?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type scaled_pricesCreateOrConnectWithoutProductsInput = {
    where: scaled_pricesWhereUniqueInput
    create: XOR<scaled_pricesCreateWithoutProductsInput, scaled_pricesUncheckedCreateWithoutProductsInput>
  }

  export type scaled_pricesCreateManyProductsInputEnvelope = {
    data: Enumerable<scaled_pricesCreateManyProductsInput>
    skipDuplicates?: boolean
  }

  export type unitsUpsertWithoutProductsInput = {
    update: XOR<unitsUpdateWithoutProductsInput, unitsUncheckedUpdateWithoutProductsInput>
    create: XOR<unitsCreateWithoutProductsInput, unitsUncheckedCreateWithoutProductsInput>
  }

  export type unitsUpdateWithoutProductsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    display_text?: StringFieldUpdateOperationsInput | string
    scale_of_base_unit?: FloatFieldUpdateOperationsInput | number
    units?: unitsUpdateOneRequiredWithoutOther_unitsInput
    scrape_results?: scrape_resultsUpdateManyWithoutUnitsInput
    other_units?: unitsUpdateManyWithoutUnitsInput
  }

  export type unitsUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    display_text?: StringFieldUpdateOperationsInput | string
    base_unit_id?: IntFieldUpdateOperationsInput | number
    scale_of_base_unit?: FloatFieldUpdateOperationsInput | number
    scrape_results?: scrape_resultsUncheckedUpdateManyWithoutUnitsInput
    other_units?: unitsUncheckedUpdateManyWithoutUnitsInput
  }

  export type price_recommendationsUpsertWithWhereUniqueWithoutProductsInput = {
    where: price_recommendationsWhereUniqueInput
    update: XOR<price_recommendationsUpdateWithoutProductsInput, price_recommendationsUncheckedUpdateWithoutProductsInput>
    create: XOR<price_recommendationsCreateWithoutProductsInput, price_recommendationsUncheckedCreateWithoutProductsInput>
  }

  export type price_recommendationsUpdateWithWhereUniqueWithoutProductsInput = {
    where: price_recommendationsWhereUniqueInput
    data: XOR<price_recommendationsUpdateWithoutProductsInput, price_recommendationsUncheckedUpdateWithoutProductsInput>
  }

  export type price_recommendationsUpdateManyWithWhereWithoutProductsInput = {
    where: price_recommendationsScalarWhereInput
    data: XOR<price_recommendationsUpdateManyMutationInput, price_recommendationsUncheckedUpdateManyWithoutPrice_recommendationsInput>
  }

  export type price_recommendationsScalarWhereInput = {
    AND?: Enumerable<price_recommendationsScalarWhereInput>
    OR?: Enumerable<price_recommendationsScalarWhereInput>
    NOT?: Enumerable<price_recommendationsScalarWhereInput>
    id?: IntFilter | number
    product_id?: IntFilter | number
    region_id?: IntFilter | number
    sale_price?: FloatFilter | number
    list_price?: FloatFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeNullableFilter | Date | string | null
  }

  export type product_region_competitor_urlsUpsertWithWhereUniqueWithoutProductsInput = {
    where: product_region_competitor_urlsWhereUniqueInput
    update: XOR<product_region_competitor_urlsUpdateWithoutProductsInput, product_region_competitor_urlsUncheckedUpdateWithoutProductsInput>
    create: XOR<product_region_competitor_urlsCreateWithoutProductsInput, product_region_competitor_urlsUncheckedCreateWithoutProductsInput>
  }

  export type product_region_competitor_urlsUpdateWithWhereUniqueWithoutProductsInput = {
    where: product_region_competitor_urlsWhereUniqueInput
    data: XOR<product_region_competitor_urlsUpdateWithoutProductsInput, product_region_competitor_urlsUncheckedUpdateWithoutProductsInput>
  }

  export type product_region_competitor_urlsUpdateManyWithWhereWithoutProductsInput = {
    where: product_region_competitor_urlsScalarWhereInput
    data: XOR<product_region_competitor_urlsUpdateManyMutationInput, product_region_competitor_urlsUncheckedUpdateManyWithoutProduct_region_competitor_urlsInput>
  }

  export type product_region_price_dataUpsertWithWhereUniqueWithoutProductsInput = {
    where: product_region_price_dataWhereUniqueInput
    update: XOR<product_region_price_dataUpdateWithoutProductsInput, product_region_price_dataUncheckedUpdateWithoutProductsInput>
    create: XOR<product_region_price_dataCreateWithoutProductsInput, product_region_price_dataUncheckedCreateWithoutProductsInput>
  }

  export type product_region_price_dataUpdateWithWhereUniqueWithoutProductsInput = {
    where: product_region_price_dataWhereUniqueInput
    data: XOR<product_region_price_dataUpdateWithoutProductsInput, product_region_price_dataUncheckedUpdateWithoutProductsInput>
  }

  export type product_region_price_dataUpdateManyWithWhereWithoutProductsInput = {
    where: product_region_price_dataScalarWhereInput
    data: XOR<product_region_price_dataUpdateManyMutationInput, product_region_price_dataUncheckedUpdateManyWithoutProduct_region_price_dataInput>
  }

  export type product_region_price_dataScalarWhereInput = {
    AND?: Enumerable<product_region_price_dataScalarWhereInput>
    OR?: Enumerable<product_region_price_dataScalarWhereInput>
    NOT?: Enumerable<product_region_price_dataScalarWhereInput>
    id?: IntFilter | number
    product_id?: IntFilter | number
    region_id?: IntFilter | number
    price?: FloatFilter | number
    discount?: FloatFilter | number
    threshold_price?: FloatNullableFilter | number | null
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeNullableFilter | Date | string | null
    deleted_at?: DateTimeNullableFilter | Date | string | null
  }

  export type scaled_pricesUpsertWithWhereUniqueWithoutProductsInput = {
    where: scaled_pricesWhereUniqueInput
    update: XOR<scaled_pricesUpdateWithoutProductsInput, scaled_pricesUncheckedUpdateWithoutProductsInput>
    create: XOR<scaled_pricesCreateWithoutProductsInput, scaled_pricesUncheckedCreateWithoutProductsInput>
  }

  export type scaled_pricesUpdateWithWhereUniqueWithoutProductsInput = {
    where: scaled_pricesWhereUniqueInput
    data: XOR<scaled_pricesUpdateWithoutProductsInput, scaled_pricesUncheckedUpdateWithoutProductsInput>
  }

  export type scaled_pricesUpdateManyWithWhereWithoutProductsInput = {
    where: scaled_pricesScalarWhereInput
    data: XOR<scaled_pricesUpdateManyMutationInput, scaled_pricesUncheckedUpdateManyWithoutScaled_pricesInput>
  }

  export type basketsCreateWithoutRegionsInput = {
    goodfood_id: number
    delivery_date: Date | string
    basket_totals?: NullableJsonNullValueInput | InputJsonValue
    basket_indexes?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string | null
    basket_daily_totals: basket_daily_totalsCreateNestedOneWithoutBasketsInput
  }

  export type basketsUncheckedCreateWithoutRegionsInput = {
    id?: number
    goodfood_id: number
    delivery_date: Date | string
    basket_totals?: NullableJsonNullValueInput | InputJsonValue
    basket_indexes?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string | null
    basket_daily_total_id: number
  }

  export type basketsCreateOrConnectWithoutRegionsInput = {
    where: basketsWhereUniqueInput
    create: XOR<basketsCreateWithoutRegionsInput, basketsUncheckedCreateWithoutRegionsInput>
  }

  export type basketsCreateManyRegionsInputEnvelope = {
    data: Enumerable<basketsCreateManyRegionsInput>
    skipDuplicates?: boolean
  }

  export type price_recommendationsCreateWithoutRegionsInput = {
    sale_price: number
    list_price: number
    created_at?: Date | string
    updated_at?: Date | string | null
    products: productsCreateNestedOneWithoutPrice_recommendationsInput
  }

  export type price_recommendationsUncheckedCreateWithoutRegionsInput = {
    id?: number
    product_id: number
    sale_price: number
    list_price: number
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type price_recommendationsCreateOrConnectWithoutRegionsInput = {
    where: price_recommendationsWhereUniqueInput
    create: XOR<price_recommendationsCreateWithoutRegionsInput, price_recommendationsUncheckedCreateWithoutRegionsInput>
  }

  export type price_recommendationsCreateManyRegionsInputEnvelope = {
    data: Enumerable<price_recommendationsCreateManyRegionsInput>
    skipDuplicates?: boolean
  }

  export type product_region_competitor_urlsCreateWithoutRegionsInput = {
    url: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    competitors: competitorsCreateNestedOneWithoutProduct_region_competitor_urlsInput
    products: productsCreateNestedOneWithoutProduct_region_competitor_urlsInput
    product_region_competitor_urls_former_urls?: product_region_competitor_urls_former_urlsCreateNestedManyWithoutProduct_region_competitor_urlsInput
  }

  export type product_region_competitor_urlsUncheckedCreateWithoutRegionsInput = {
    id?: number
    product_id: number
    competitor_id: number
    url: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    product_region_competitor_urls_former_urls?: product_region_competitor_urls_former_urlsUncheckedCreateNestedManyWithoutProduct_region_competitor_urlsInput
  }

  export type product_region_competitor_urlsCreateOrConnectWithoutRegionsInput = {
    where: product_region_competitor_urlsWhereUniqueInput
    create: XOR<product_region_competitor_urlsCreateWithoutRegionsInput, product_region_competitor_urlsUncheckedCreateWithoutRegionsInput>
  }

  export type product_region_competitor_urlsCreateManyRegionsInputEnvelope = {
    data: Enumerable<product_region_competitor_urlsCreateManyRegionsInput>
    skipDuplicates?: boolean
  }

  export type product_region_price_dataCreateWithoutRegionsInput = {
    price: number
    discount: number
    threshold_price?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    products: productsCreateNestedOneWithoutProduct_region_price_dataInput
  }

  export type product_region_price_dataUncheckedCreateWithoutRegionsInput = {
    id?: number
    product_id: number
    price: number
    discount: number
    threshold_price?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type product_region_price_dataCreateOrConnectWithoutRegionsInput = {
    where: product_region_price_dataWhereUniqueInput
    create: XOR<product_region_price_dataCreateWithoutRegionsInput, product_region_price_dataUncheckedCreateWithoutRegionsInput>
  }

  export type product_region_price_dataCreateManyRegionsInputEnvelope = {
    data: Enumerable<product_region_price_dataCreateManyRegionsInput>
    skipDuplicates?: boolean
  }

  export type scaled_pricesCreateWithoutRegionsInput = {
    competitor_scaled_price?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    competitors: competitorsCreateNestedOneWithoutScaled_pricesInput
    products: productsCreateNestedOneWithoutScaled_pricesInput
    scrape_results: scrape_resultsCreateNestedOneWithoutScaled_pricesInput
  }

  export type scaled_pricesUncheckedCreateWithoutRegionsInput = {
    id?: number
    product_id: number
    competitor_id: number
    scrape_result_id: number
    competitor_scaled_price?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type scaled_pricesCreateOrConnectWithoutRegionsInput = {
    where: scaled_pricesWhereUniqueInput
    create: XOR<scaled_pricesCreateWithoutRegionsInput, scaled_pricesUncheckedCreateWithoutRegionsInput>
  }

  export type scaled_pricesCreateManyRegionsInputEnvelope = {
    data: Enumerable<scaled_pricesCreateManyRegionsInput>
    skipDuplicates?: boolean
  }

  export type basketsUpsertWithWhereUniqueWithoutRegionsInput = {
    where: basketsWhereUniqueInput
    update: XOR<basketsUpdateWithoutRegionsInput, basketsUncheckedUpdateWithoutRegionsInput>
    create: XOR<basketsCreateWithoutRegionsInput, basketsUncheckedCreateWithoutRegionsInput>
  }

  export type basketsUpdateWithWhereUniqueWithoutRegionsInput = {
    where: basketsWhereUniqueInput
    data: XOR<basketsUpdateWithoutRegionsInput, basketsUncheckedUpdateWithoutRegionsInput>
  }

  export type basketsUpdateManyWithWhereWithoutRegionsInput = {
    where: basketsScalarWhereInput
    data: XOR<basketsUpdateManyMutationInput, basketsUncheckedUpdateManyWithoutBasketsInput>
  }

  export type price_recommendationsUpsertWithWhereUniqueWithoutRegionsInput = {
    where: price_recommendationsWhereUniqueInput
    update: XOR<price_recommendationsUpdateWithoutRegionsInput, price_recommendationsUncheckedUpdateWithoutRegionsInput>
    create: XOR<price_recommendationsCreateWithoutRegionsInput, price_recommendationsUncheckedCreateWithoutRegionsInput>
  }

  export type price_recommendationsUpdateWithWhereUniqueWithoutRegionsInput = {
    where: price_recommendationsWhereUniqueInput
    data: XOR<price_recommendationsUpdateWithoutRegionsInput, price_recommendationsUncheckedUpdateWithoutRegionsInput>
  }

  export type price_recommendationsUpdateManyWithWhereWithoutRegionsInput = {
    where: price_recommendationsScalarWhereInput
    data: XOR<price_recommendationsUpdateManyMutationInput, price_recommendationsUncheckedUpdateManyWithoutPrice_recommendationsInput>
  }

  export type product_region_competitor_urlsUpsertWithWhereUniqueWithoutRegionsInput = {
    where: product_region_competitor_urlsWhereUniqueInput
    update: XOR<product_region_competitor_urlsUpdateWithoutRegionsInput, product_region_competitor_urlsUncheckedUpdateWithoutRegionsInput>
    create: XOR<product_region_competitor_urlsCreateWithoutRegionsInput, product_region_competitor_urlsUncheckedCreateWithoutRegionsInput>
  }

  export type product_region_competitor_urlsUpdateWithWhereUniqueWithoutRegionsInput = {
    where: product_region_competitor_urlsWhereUniqueInput
    data: XOR<product_region_competitor_urlsUpdateWithoutRegionsInput, product_region_competitor_urlsUncheckedUpdateWithoutRegionsInput>
  }

  export type product_region_competitor_urlsUpdateManyWithWhereWithoutRegionsInput = {
    where: product_region_competitor_urlsScalarWhereInput
    data: XOR<product_region_competitor_urlsUpdateManyMutationInput, product_region_competitor_urlsUncheckedUpdateManyWithoutProduct_region_competitor_urlsInput>
  }

  export type product_region_price_dataUpsertWithWhereUniqueWithoutRegionsInput = {
    where: product_region_price_dataWhereUniqueInput
    update: XOR<product_region_price_dataUpdateWithoutRegionsInput, product_region_price_dataUncheckedUpdateWithoutRegionsInput>
    create: XOR<product_region_price_dataCreateWithoutRegionsInput, product_region_price_dataUncheckedCreateWithoutRegionsInput>
  }

  export type product_region_price_dataUpdateWithWhereUniqueWithoutRegionsInput = {
    where: product_region_price_dataWhereUniqueInput
    data: XOR<product_region_price_dataUpdateWithoutRegionsInput, product_region_price_dataUncheckedUpdateWithoutRegionsInput>
  }

  export type product_region_price_dataUpdateManyWithWhereWithoutRegionsInput = {
    where: product_region_price_dataScalarWhereInput
    data: XOR<product_region_price_dataUpdateManyMutationInput, product_region_price_dataUncheckedUpdateManyWithoutProduct_region_price_dataInput>
  }

  export type scaled_pricesUpsertWithWhereUniqueWithoutRegionsInput = {
    where: scaled_pricesWhereUniqueInput
    update: XOR<scaled_pricesUpdateWithoutRegionsInput, scaled_pricesUncheckedUpdateWithoutRegionsInput>
    create: XOR<scaled_pricesCreateWithoutRegionsInput, scaled_pricesUncheckedCreateWithoutRegionsInput>
  }

  export type scaled_pricesUpdateWithWhereUniqueWithoutRegionsInput = {
    where: scaled_pricesWhereUniqueInput
    data: XOR<scaled_pricesUpdateWithoutRegionsInput, scaled_pricesUncheckedUpdateWithoutRegionsInput>
  }

  export type scaled_pricesUpdateManyWithWhereWithoutRegionsInput = {
    where: scaled_pricesScalarWhereInput
    data: XOR<scaled_pricesUpdateManyMutationInput, scaled_pricesUncheckedUpdateManyWithoutScaled_pricesInput>
  }

  export type competitorsCreateWithoutScaled_pricesInput = {
    slug: string
    display_text: string
    basket_line_item_competitor_equivalents?: basket_line_item_competitor_equivalentsCreateNestedManyWithoutCompetitorsInput
    product_region_competitor_urls?: product_region_competitor_urlsCreateNestedManyWithoutCompetitorsInput
  }

  export type competitorsUncheckedCreateWithoutScaled_pricesInput = {
    id?: number
    slug: string
    display_text: string
    basket_line_item_competitor_equivalents?: basket_line_item_competitor_equivalentsUncheckedCreateNestedManyWithoutCompetitorsInput
    product_region_competitor_urls?: product_region_competitor_urlsUncheckedCreateNestedManyWithoutCompetitorsInput
  }

  export type competitorsCreateOrConnectWithoutScaled_pricesInput = {
    where: competitorsWhereUniqueInput
    create: XOR<competitorsCreateWithoutScaled_pricesInput, competitorsUncheckedCreateWithoutScaled_pricesInput>
  }

  export type productsCreateWithoutScaled_pricesInput = {
    sku?: string | null
    name?: string | null
    package_quantity?: number | null
    package_units?: string | null
    package_weight?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    units: unitsCreateNestedOneWithoutProductsInput
    price_recommendations?: price_recommendationsCreateNestedManyWithoutProductsInput
    product_region_competitor_urls?: product_region_competitor_urlsCreateNestedManyWithoutProductsInput
    product_region_price_data?: product_region_price_dataCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutScaled_pricesInput = {
    id?: number
    sku?: string | null
    name?: string | null
    package_quantity?: number | null
    package_units?: string | null
    package_weight?: number | null
    weight_unit_id: number
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    price_recommendations?: price_recommendationsUncheckedCreateNestedManyWithoutProductsInput
    product_region_competitor_urls?: product_region_competitor_urlsUncheckedCreateNestedManyWithoutProductsInput
    product_region_price_data?: product_region_price_dataUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutScaled_pricesInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutScaled_pricesInput, productsUncheckedCreateWithoutScaled_pricesInput>
  }

  export type regionsCreateWithoutScaled_pricesInput = {
    name?: string | null
    facility?: string | null
    city?: string | null
    province?: string | null
    postal_code?: string | null
    is_active?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    baskets?: basketsCreateNestedManyWithoutRegionsInput
    price_recommendations?: price_recommendationsCreateNestedManyWithoutRegionsInput
    product_region_competitor_urls?: product_region_competitor_urlsCreateNestedManyWithoutRegionsInput
    product_region_price_data?: product_region_price_dataCreateNestedManyWithoutRegionsInput
  }

  export type regionsUncheckedCreateWithoutScaled_pricesInput = {
    id?: number
    name?: string | null
    facility?: string | null
    city?: string | null
    province?: string | null
    postal_code?: string | null
    is_active?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    baskets?: basketsUncheckedCreateNestedManyWithoutRegionsInput
    price_recommendations?: price_recommendationsUncheckedCreateNestedManyWithoutRegionsInput
    product_region_competitor_urls?: product_region_competitor_urlsUncheckedCreateNestedManyWithoutRegionsInput
    product_region_price_data?: product_region_price_dataUncheckedCreateNestedManyWithoutRegionsInput
  }

  export type regionsCreateOrConnectWithoutScaled_pricesInput = {
    where: regionsWhereUniqueInput
    create: XOR<regionsCreateWithoutScaled_pricesInput, regionsUncheckedCreateWithoutScaled_pricesInput>
  }

  export type scrape_resultsCreateWithoutScaled_pricesInput = {
    competitor_sale_price?: number | null
    competitor_list_price?: number | null
    competitor_sold_by_volume?: number | null
    promotional_info?: string | null
    data_source?: string | null
    scrape_time?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    units: unitsCreateNestedOneWithoutScrape_resultsInput
  }

  export type scrape_resultsUncheckedCreateWithoutScaled_pricesInput = {
    id?: number
    competitor_sale_price?: number | null
    competitor_list_price?: number | null
    competitor_sold_by_volume?: number | null
    competitor_sold_by_unit_id: number
    promotional_info?: string | null
    data_source?: string | null
    scrape_time?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type scrape_resultsCreateOrConnectWithoutScaled_pricesInput = {
    where: scrape_resultsWhereUniqueInput
    create: XOR<scrape_resultsCreateWithoutScaled_pricesInput, scrape_resultsUncheckedCreateWithoutScaled_pricesInput>
  }

  export type competitorsUpsertWithoutScaled_pricesInput = {
    update: XOR<competitorsUpdateWithoutScaled_pricesInput, competitorsUncheckedUpdateWithoutScaled_pricesInput>
    create: XOR<competitorsCreateWithoutScaled_pricesInput, competitorsUncheckedCreateWithoutScaled_pricesInput>
  }

  export type competitorsUpdateWithoutScaled_pricesInput = {
    slug?: StringFieldUpdateOperationsInput | string
    display_text?: StringFieldUpdateOperationsInput | string
    basket_line_item_competitor_equivalents?: basket_line_item_competitor_equivalentsUpdateManyWithoutCompetitorsInput
    product_region_competitor_urls?: product_region_competitor_urlsUpdateManyWithoutCompetitorsInput
  }

  export type competitorsUncheckedUpdateWithoutScaled_pricesInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    display_text?: StringFieldUpdateOperationsInput | string
    basket_line_item_competitor_equivalents?: basket_line_item_competitor_equivalentsUncheckedUpdateManyWithoutCompetitorsInput
    product_region_competitor_urls?: product_region_competitor_urlsUncheckedUpdateManyWithoutCompetitorsInput
  }

  export type productsUpsertWithoutScaled_pricesInput = {
    update: XOR<productsUpdateWithoutScaled_pricesInput, productsUncheckedUpdateWithoutScaled_pricesInput>
    create: XOR<productsCreateWithoutScaled_pricesInput, productsUncheckedCreateWithoutScaled_pricesInput>
  }

  export type productsUpdateWithoutScaled_pricesInput = {
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    package_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    package_units?: NullableStringFieldUpdateOperationsInput | string | null
    package_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    units?: unitsUpdateOneRequiredWithoutProductsInput
    price_recommendations?: price_recommendationsUpdateManyWithoutProductsInput
    product_region_competitor_urls?: product_region_competitor_urlsUpdateManyWithoutProductsInput
    product_region_price_data?: product_region_price_dataUpdateManyWithoutProductsInput
  }

  export type productsUncheckedUpdateWithoutScaled_pricesInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    package_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    package_units?: NullableStringFieldUpdateOperationsInput | string | null
    package_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    weight_unit_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price_recommendations?: price_recommendationsUncheckedUpdateManyWithoutProductsInput
    product_region_competitor_urls?: product_region_competitor_urlsUncheckedUpdateManyWithoutProductsInput
    product_region_price_data?: product_region_price_dataUncheckedUpdateManyWithoutProductsInput
  }

  export type regionsUpsertWithoutScaled_pricesInput = {
    update: XOR<regionsUpdateWithoutScaled_pricesInput, regionsUncheckedUpdateWithoutScaled_pricesInput>
    create: XOR<regionsCreateWithoutScaled_pricesInput, regionsUncheckedCreateWithoutScaled_pricesInput>
  }

  export type regionsUpdateWithoutScaled_pricesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    facility?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    baskets?: basketsUpdateManyWithoutRegionsInput
    price_recommendations?: price_recommendationsUpdateManyWithoutRegionsInput
    product_region_competitor_urls?: product_region_competitor_urlsUpdateManyWithoutRegionsInput
    product_region_price_data?: product_region_price_dataUpdateManyWithoutRegionsInput
  }

  export type regionsUncheckedUpdateWithoutScaled_pricesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    facility?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    baskets?: basketsUncheckedUpdateManyWithoutRegionsInput
    price_recommendations?: price_recommendationsUncheckedUpdateManyWithoutRegionsInput
    product_region_competitor_urls?: product_region_competitor_urlsUncheckedUpdateManyWithoutRegionsInput
    product_region_price_data?: product_region_price_dataUncheckedUpdateManyWithoutRegionsInput
  }

  export type scrape_resultsUpsertWithoutScaled_pricesInput = {
    update: XOR<scrape_resultsUpdateWithoutScaled_pricesInput, scrape_resultsUncheckedUpdateWithoutScaled_pricesInput>
    create: XOR<scrape_resultsCreateWithoutScaled_pricesInput, scrape_resultsUncheckedCreateWithoutScaled_pricesInput>
  }

  export type scrape_resultsUpdateWithoutScaled_pricesInput = {
    competitor_sale_price?: NullableFloatFieldUpdateOperationsInput | number | null
    competitor_list_price?: NullableFloatFieldUpdateOperationsInput | number | null
    competitor_sold_by_volume?: NullableFloatFieldUpdateOperationsInput | number | null
    promotional_info?: NullableStringFieldUpdateOperationsInput | string | null
    data_source?: NullableStringFieldUpdateOperationsInput | string | null
    scrape_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    units?: unitsUpdateOneRequiredWithoutScrape_resultsInput
  }

  export type scrape_resultsUncheckedUpdateWithoutScaled_pricesInput = {
    id?: IntFieldUpdateOperationsInput | number
    competitor_sale_price?: NullableFloatFieldUpdateOperationsInput | number | null
    competitor_list_price?: NullableFloatFieldUpdateOperationsInput | number | null
    competitor_sold_by_volume?: NullableFloatFieldUpdateOperationsInput | number | null
    competitor_sold_by_unit_id?: IntFieldUpdateOperationsInput | number
    promotional_info?: NullableStringFieldUpdateOperationsInput | string | null
    data_source?: NullableStringFieldUpdateOperationsInput | string | null
    scrape_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type unitsCreateWithoutScrape_resultsInput = {
    slug: string
    display_text: string
    scale_of_base_unit: number
    units: unitsCreateNestedOneWithoutOther_unitsInput
    products?: productsCreateNestedManyWithoutUnitsInput
    other_units?: unitsCreateNestedManyWithoutUnitsInput
  }

  export type unitsUncheckedCreateWithoutScrape_resultsInput = {
    id?: number
    slug: string
    display_text: string
    base_unit_id: number
    scale_of_base_unit: number
    products?: productsUncheckedCreateNestedManyWithoutUnitsInput
    other_units?: unitsUncheckedCreateNestedManyWithoutUnitsInput
  }

  export type unitsCreateOrConnectWithoutScrape_resultsInput = {
    where: unitsWhereUniqueInput
    create: XOR<unitsCreateWithoutScrape_resultsInput, unitsUncheckedCreateWithoutScrape_resultsInput>
  }

  export type scaled_pricesCreateWithoutScrape_resultsInput = {
    competitor_scaled_price?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    competitors: competitorsCreateNestedOneWithoutScaled_pricesInput
    products: productsCreateNestedOneWithoutScaled_pricesInput
    regions: regionsCreateNestedOneWithoutScaled_pricesInput
  }

  export type scaled_pricesUncheckedCreateWithoutScrape_resultsInput = {
    id?: number
    product_id: number
    competitor_id: number
    region_id: number
    competitor_scaled_price?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type scaled_pricesCreateOrConnectWithoutScrape_resultsInput = {
    where: scaled_pricesWhereUniqueInput
    create: XOR<scaled_pricesCreateWithoutScrape_resultsInput, scaled_pricesUncheckedCreateWithoutScrape_resultsInput>
  }

  export type scaled_pricesCreateManyScrape_resultsInputEnvelope = {
    data: Enumerable<scaled_pricesCreateManyScrape_resultsInput>
    skipDuplicates?: boolean
  }

  export type unitsUpsertWithoutScrape_resultsInput = {
    update: XOR<unitsUpdateWithoutScrape_resultsInput, unitsUncheckedUpdateWithoutScrape_resultsInput>
    create: XOR<unitsCreateWithoutScrape_resultsInput, unitsUncheckedCreateWithoutScrape_resultsInput>
  }

  export type unitsUpdateWithoutScrape_resultsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    display_text?: StringFieldUpdateOperationsInput | string
    scale_of_base_unit?: FloatFieldUpdateOperationsInput | number
    units?: unitsUpdateOneRequiredWithoutOther_unitsInput
    products?: productsUpdateManyWithoutUnitsInput
    other_units?: unitsUpdateManyWithoutUnitsInput
  }

  export type unitsUncheckedUpdateWithoutScrape_resultsInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    display_text?: StringFieldUpdateOperationsInput | string
    base_unit_id?: IntFieldUpdateOperationsInput | number
    scale_of_base_unit?: FloatFieldUpdateOperationsInput | number
    products?: productsUncheckedUpdateManyWithoutUnitsInput
    other_units?: unitsUncheckedUpdateManyWithoutUnitsInput
  }

  export type scaled_pricesUpsertWithWhereUniqueWithoutScrape_resultsInput = {
    where: scaled_pricesWhereUniqueInput
    update: XOR<scaled_pricesUpdateWithoutScrape_resultsInput, scaled_pricesUncheckedUpdateWithoutScrape_resultsInput>
    create: XOR<scaled_pricesCreateWithoutScrape_resultsInput, scaled_pricesUncheckedCreateWithoutScrape_resultsInput>
  }

  export type scaled_pricesUpdateWithWhereUniqueWithoutScrape_resultsInput = {
    where: scaled_pricesWhereUniqueInput
    data: XOR<scaled_pricesUpdateWithoutScrape_resultsInput, scaled_pricesUncheckedUpdateWithoutScrape_resultsInput>
  }

  export type scaled_pricesUpdateManyWithWhereWithoutScrape_resultsInput = {
    where: scaled_pricesScalarWhereInput
    data: XOR<scaled_pricesUpdateManyMutationInput, scaled_pricesUncheckedUpdateManyWithoutScaled_pricesInput>
  }

  export type unitsCreateWithoutOther_unitsInput = {
    slug: string
    display_text: string
    scale_of_base_unit: number
    units: unitsCreateNestedOneWithoutOther_unitsInput
    products?: productsCreateNestedManyWithoutUnitsInput
    scrape_results?: scrape_resultsCreateNestedManyWithoutUnitsInput
  }

  export type unitsUncheckedCreateWithoutOther_unitsInput = {
    id?: number
    slug: string
    display_text: string
    base_unit_id: number
    scale_of_base_unit: number
    products?: productsUncheckedCreateNestedManyWithoutUnitsInput
    scrape_results?: scrape_resultsUncheckedCreateNestedManyWithoutUnitsInput
  }

  export type unitsCreateOrConnectWithoutOther_unitsInput = {
    where: unitsWhereUniqueInput
    create: XOR<unitsCreateWithoutOther_unitsInput, unitsUncheckedCreateWithoutOther_unitsInput>
  }

  export type productsCreateWithoutUnitsInput = {
    sku?: string | null
    name?: string | null
    package_quantity?: number | null
    package_units?: string | null
    package_weight?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    price_recommendations?: price_recommendationsCreateNestedManyWithoutProductsInput
    product_region_competitor_urls?: product_region_competitor_urlsCreateNestedManyWithoutProductsInput
    product_region_price_data?: product_region_price_dataCreateNestedManyWithoutProductsInput
    scaled_prices?: scaled_pricesCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutUnitsInput = {
    id?: number
    sku?: string | null
    name?: string | null
    package_quantity?: number | null
    package_units?: string | null
    package_weight?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    price_recommendations?: price_recommendationsUncheckedCreateNestedManyWithoutProductsInput
    product_region_competitor_urls?: product_region_competitor_urlsUncheckedCreateNestedManyWithoutProductsInput
    product_region_price_data?: product_region_price_dataUncheckedCreateNestedManyWithoutProductsInput
    scaled_prices?: scaled_pricesUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutUnitsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutUnitsInput, productsUncheckedCreateWithoutUnitsInput>
  }

  export type productsCreateManyUnitsInputEnvelope = {
    data: Enumerable<productsCreateManyUnitsInput>
    skipDuplicates?: boolean
  }

  export type scrape_resultsCreateWithoutUnitsInput = {
    competitor_sale_price?: number | null
    competitor_list_price?: number | null
    competitor_sold_by_volume?: number | null
    promotional_info?: string | null
    data_source?: string | null
    scrape_time?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    scaled_prices?: scaled_pricesCreateNestedManyWithoutScrape_resultsInput
  }

  export type scrape_resultsUncheckedCreateWithoutUnitsInput = {
    id?: number
    competitor_sale_price?: number | null
    competitor_list_price?: number | null
    competitor_sold_by_volume?: number | null
    promotional_info?: string | null
    data_source?: string | null
    scrape_time?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    scaled_prices?: scaled_pricesUncheckedCreateNestedManyWithoutScrape_resultsInput
  }

  export type scrape_resultsCreateOrConnectWithoutUnitsInput = {
    where: scrape_resultsWhereUniqueInput
    create: XOR<scrape_resultsCreateWithoutUnitsInput, scrape_resultsUncheckedCreateWithoutUnitsInput>
  }

  export type scrape_resultsCreateManyUnitsInputEnvelope = {
    data: Enumerable<scrape_resultsCreateManyUnitsInput>
    skipDuplicates?: boolean
  }

  export type unitsCreateWithoutUnitsInput = {
    slug: string
    display_text: string
    scale_of_base_unit: number
    products?: productsCreateNestedManyWithoutUnitsInput
    scrape_results?: scrape_resultsCreateNestedManyWithoutUnitsInput
    other_units?: unitsCreateNestedManyWithoutUnitsInput
  }

  export type unitsUncheckedCreateWithoutUnitsInput = {
    id?: number
    slug: string
    display_text: string
    scale_of_base_unit: number
    products?: productsUncheckedCreateNestedManyWithoutUnitsInput
    scrape_results?: scrape_resultsUncheckedCreateNestedManyWithoutUnitsInput
    other_units?: unitsUncheckedCreateNestedManyWithoutUnitsInput
  }

  export type unitsCreateOrConnectWithoutUnitsInput = {
    where: unitsWhereUniqueInput
    create: XOR<unitsCreateWithoutUnitsInput, unitsUncheckedCreateWithoutUnitsInput>
  }

  export type unitsCreateManyUnitsInputEnvelope = {
    data: Enumerable<unitsCreateManyUnitsInput>
    skipDuplicates?: boolean
  }

  export type unitsUpsertWithoutOther_unitsInput = {
    update: XOR<unitsUpdateWithoutOther_unitsInput, unitsUncheckedUpdateWithoutOther_unitsInput>
    create: XOR<unitsCreateWithoutOther_unitsInput, unitsUncheckedCreateWithoutOther_unitsInput>
  }

  export type unitsUpdateWithoutOther_unitsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    display_text?: StringFieldUpdateOperationsInput | string
    scale_of_base_unit?: FloatFieldUpdateOperationsInput | number
    units?: unitsUpdateOneRequiredWithoutOther_unitsInput
    products?: productsUpdateManyWithoutUnitsInput
    scrape_results?: scrape_resultsUpdateManyWithoutUnitsInput
  }

  export type unitsUncheckedUpdateWithoutOther_unitsInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    display_text?: StringFieldUpdateOperationsInput | string
    base_unit_id?: IntFieldUpdateOperationsInput | number
    scale_of_base_unit?: FloatFieldUpdateOperationsInput | number
    products?: productsUncheckedUpdateManyWithoutUnitsInput
    scrape_results?: scrape_resultsUncheckedUpdateManyWithoutUnitsInput
  }

  export type productsUpsertWithWhereUniqueWithoutUnitsInput = {
    where: productsWhereUniqueInput
    update: XOR<productsUpdateWithoutUnitsInput, productsUncheckedUpdateWithoutUnitsInput>
    create: XOR<productsCreateWithoutUnitsInput, productsUncheckedCreateWithoutUnitsInput>
  }

  export type productsUpdateWithWhereUniqueWithoutUnitsInput = {
    where: productsWhereUniqueInput
    data: XOR<productsUpdateWithoutUnitsInput, productsUncheckedUpdateWithoutUnitsInput>
  }

  export type productsUpdateManyWithWhereWithoutUnitsInput = {
    where: productsScalarWhereInput
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyWithoutProductsInput>
  }

  export type productsScalarWhereInput = {
    AND?: Enumerable<productsScalarWhereInput>
    OR?: Enumerable<productsScalarWhereInput>
    NOT?: Enumerable<productsScalarWhereInput>
    id?: IntFilter | number
    sku?: StringNullableFilter | string | null
    name?: StringNullableFilter | string | null
    package_quantity?: IntNullableFilter | number | null
    package_units?: StringNullableFilter | string | null
    package_weight?: FloatNullableFilter | number | null
    weight_unit_id?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeNullableFilter | Date | string | null
    deleted_at?: DateTimeNullableFilter | Date | string | null
  }

  export type scrape_resultsUpsertWithWhereUniqueWithoutUnitsInput = {
    where: scrape_resultsWhereUniqueInput
    update: XOR<scrape_resultsUpdateWithoutUnitsInput, scrape_resultsUncheckedUpdateWithoutUnitsInput>
    create: XOR<scrape_resultsCreateWithoutUnitsInput, scrape_resultsUncheckedCreateWithoutUnitsInput>
  }

  export type scrape_resultsUpdateWithWhereUniqueWithoutUnitsInput = {
    where: scrape_resultsWhereUniqueInput
    data: XOR<scrape_resultsUpdateWithoutUnitsInput, scrape_resultsUncheckedUpdateWithoutUnitsInput>
  }

  export type scrape_resultsUpdateManyWithWhereWithoutUnitsInput = {
    where: scrape_resultsScalarWhereInput
    data: XOR<scrape_resultsUpdateManyMutationInput, scrape_resultsUncheckedUpdateManyWithoutScrape_resultsInput>
  }

  export type scrape_resultsScalarWhereInput = {
    AND?: Enumerable<scrape_resultsScalarWhereInput>
    OR?: Enumerable<scrape_resultsScalarWhereInput>
    NOT?: Enumerable<scrape_resultsScalarWhereInput>
    id?: IntFilter | number
    competitor_sale_price?: FloatNullableFilter | number | null
    competitor_list_price?: FloatNullableFilter | number | null
    competitor_sold_by_volume?: FloatNullableFilter | number | null
    competitor_sold_by_unit_id?: IntFilter | number
    promotional_info?: StringNullableFilter | string | null
    data_source?: StringNullableFilter | string | null
    scrape_time?: DateTimeNullableFilter | Date | string | null
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeNullableFilter | Date | string | null
    deleted_at?: DateTimeNullableFilter | Date | string | null
  }

  export type unitsUpsertWithWhereUniqueWithoutUnitsInput = {
    where: unitsWhereUniqueInput
    update: XOR<unitsUpdateWithoutUnitsInput, unitsUncheckedUpdateWithoutUnitsInput>
    create: XOR<unitsCreateWithoutUnitsInput, unitsUncheckedCreateWithoutUnitsInput>
  }

  export type unitsUpdateWithWhereUniqueWithoutUnitsInput = {
    where: unitsWhereUniqueInput
    data: XOR<unitsUpdateWithoutUnitsInput, unitsUncheckedUpdateWithoutUnitsInput>
  }

  export type unitsUpdateManyWithWhereWithoutUnitsInput = {
    where: unitsScalarWhereInput
    data: XOR<unitsUpdateManyMutationInput, unitsUncheckedUpdateManyWithoutOther_unitsInput>
  }

  export type unitsScalarWhereInput = {
    AND?: Enumerable<unitsScalarWhereInput>
    OR?: Enumerable<unitsScalarWhereInput>
    NOT?: Enumerable<unitsScalarWhereInput>
    id?: IntFilter | number
    slug?: StringFilter | string
    display_text?: StringFilter | string
    base_unit_id?: IntFilter | number
    scale_of_base_unit?: FloatFilter | number
  }

  export type basketsCreateManyBasket_daily_totalsInput = {
    id?: number
    goodfood_id: number
    delivery_date: Date | string
    basket_totals?: NullableJsonNullValueInput | InputJsonValue
    basket_indexes?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string | null
    region_id: number
  }

  export type basketsUpdateWithoutBasket_daily_totalsInput = {
    goodfood_id?: IntFieldUpdateOperationsInput | number
    delivery_date?: DateTimeFieldUpdateOperationsInput | Date | string
    basket_totals?: NullableJsonNullValueInput | InputJsonValue
    basket_indexes?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    regions?: regionsUpdateOneRequiredWithoutBasketsInput
  }

  export type basketsUncheckedUpdateWithoutBasket_daily_totalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    goodfood_id?: IntFieldUpdateOperationsInput | number
    delivery_date?: DateTimeFieldUpdateOperationsInput | Date | string
    basket_totals?: NullableJsonNullValueInput | InputJsonValue
    basket_indexes?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_id?: IntFieldUpdateOperationsInput | number
  }

  export type basketsUncheckedUpdateManyWithoutBasketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    goodfood_id?: IntFieldUpdateOperationsInput | number
    delivery_date?: DateTimeFieldUpdateOperationsInput | Date | string
    basket_totals?: NullableJsonNullValueInput | InputJsonValue
    basket_indexes?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_id?: IntFieldUpdateOperationsInput | number
  }

  export type basket_line_item_competitor_equivalentsCreateManyBasket_line_itemsInput = {
    id?: number
    competitor_price?: number | null
    competitor_id: number
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type basket_line_item_recommended_pricesCreateManyBasket_line_itemsInput = {
    id?: number
    recommended_price: number
    price_recommendation_id?: number | null
  }

  export type basket_line_item_competitor_equivalentsUpdateWithoutBasket_line_itemsInput = {
    competitor_price?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    competitors?: competitorsUpdateOneRequiredWithoutBasket_line_item_competitor_equivalentsInput
  }

  export type basket_line_item_competitor_equivalentsUncheckedUpdateWithoutBasket_line_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    competitor_price?: NullableFloatFieldUpdateOperationsInput | number | null
    competitor_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type basket_line_item_competitor_equivalentsUncheckedUpdateManyWithoutBasket_line_item_competitor_equivalentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    competitor_price?: NullableFloatFieldUpdateOperationsInput | number | null
    competitor_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type basket_line_item_recommended_pricesUpdateWithoutBasket_line_itemsInput = {
    recommended_price?: FloatFieldUpdateOperationsInput | number
    price_recommendation_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type basket_line_item_recommended_pricesUncheckedUpdateWithoutBasket_line_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    recommended_price?: FloatFieldUpdateOperationsInput | number
    price_recommendation_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type basket_line_item_recommended_pricesUncheckedUpdateManyWithoutBasket_line_item_recommended_pricesInput = {
    id?: IntFieldUpdateOperationsInput | number
    recommended_price?: FloatFieldUpdateOperationsInput | number
    price_recommendation_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type basket_line_item_competitor_equivalentsCreateManyCompetitorsInput = {
    id?: number
    competitor_price?: number | null
    basket_line_item_id: number
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type product_region_competitor_urlsCreateManyCompetitorsInput = {
    id?: number
    product_id: number
    region_id: number
    url: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type scaled_pricesCreateManyCompetitorsInput = {
    id?: number
    product_id: number
    region_id: number
    scrape_result_id: number
    competitor_scaled_price?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type basket_line_item_competitor_equivalentsUpdateWithoutCompetitorsInput = {
    competitor_price?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    basket_line_items?: basket_line_itemsUpdateOneRequiredWithoutBasket_line_item_competitor_equivalentsInput
  }

  export type basket_line_item_competitor_equivalentsUncheckedUpdateWithoutCompetitorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    competitor_price?: NullableFloatFieldUpdateOperationsInput | number | null
    basket_line_item_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type product_region_competitor_urlsUpdateWithoutCompetitorsInput = {
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUpdateOneRequiredWithoutProduct_region_competitor_urlsInput
    regions?: regionsUpdateOneRequiredWithoutProduct_region_competitor_urlsInput
    product_region_competitor_urls_former_urls?: product_region_competitor_urls_former_urlsUpdateManyWithoutProduct_region_competitor_urlsInput
  }

  export type product_region_competitor_urlsUncheckedUpdateWithoutCompetitorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    region_id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_region_competitor_urls_former_urls?: product_region_competitor_urls_former_urlsUncheckedUpdateManyWithoutProduct_region_competitor_urlsInput
  }

  export type product_region_competitor_urlsUncheckedUpdateManyWithoutProduct_region_competitor_urlsInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    region_id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type scaled_pricesUpdateWithoutCompetitorsInput = {
    competitor_scaled_price?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUpdateOneRequiredWithoutScaled_pricesInput
    regions?: regionsUpdateOneRequiredWithoutScaled_pricesInput
    scrape_results?: scrape_resultsUpdateOneRequiredWithoutScaled_pricesInput
  }

  export type scaled_pricesUncheckedUpdateWithoutCompetitorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    region_id?: IntFieldUpdateOperationsInput | number
    scrape_result_id?: IntFieldUpdateOperationsInput | number
    competitor_scaled_price?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type scaled_pricesUncheckedUpdateManyWithoutScaled_pricesInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    region_id?: IntFieldUpdateOperationsInput | number
    scrape_result_id?: IntFieldUpdateOperationsInput | number
    competitor_scaled_price?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type product_region_competitor_urls_former_urlsCreateManyProduct_region_competitor_urlsInput = {
    old_url: string
    created_at?: Date | string
    updated_at?: Date | string | null
    id?: number
  }

  export type product_region_competitor_urls_former_urlsUpdateWithoutProduct_region_competitor_urlsInput = {
    old_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type product_region_competitor_urls_former_urlsUncheckedUpdateWithoutProduct_region_competitor_urlsInput = {
    old_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type product_region_competitor_urls_former_urlsUncheckedUpdateManyWithoutProduct_region_competitor_urls_former_urlsInput = {
    old_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type price_recommendationsCreateManyProductsInput = {
    id?: number
    region_id: number
    sale_price: number
    list_price: number
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type product_region_competitor_urlsCreateManyProductsInput = {
    id?: number
    region_id: number
    competitor_id: number
    url: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type product_region_price_dataCreateManyProductsInput = {
    id?: number
    region_id: number
    price: number
    discount: number
    threshold_price?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type scaled_pricesCreateManyProductsInput = {
    id?: number
    competitor_id: number
    region_id: number
    scrape_result_id: number
    competitor_scaled_price?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type price_recommendationsUpdateWithoutProductsInput = {
    sale_price?: FloatFieldUpdateOperationsInput | number
    list_price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    regions?: regionsUpdateOneRequiredWithoutPrice_recommendationsInput
  }

  export type price_recommendationsUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    region_id?: IntFieldUpdateOperationsInput | number
    sale_price?: FloatFieldUpdateOperationsInput | number
    list_price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type price_recommendationsUncheckedUpdateManyWithoutPrice_recommendationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    region_id?: IntFieldUpdateOperationsInput | number
    sale_price?: FloatFieldUpdateOperationsInput | number
    list_price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type product_region_competitor_urlsUpdateWithoutProductsInput = {
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    competitors?: competitorsUpdateOneRequiredWithoutProduct_region_competitor_urlsInput
    regions?: regionsUpdateOneRequiredWithoutProduct_region_competitor_urlsInput
    product_region_competitor_urls_former_urls?: product_region_competitor_urls_former_urlsUpdateManyWithoutProduct_region_competitor_urlsInput
  }

  export type product_region_competitor_urlsUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    region_id?: IntFieldUpdateOperationsInput | number
    competitor_id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_region_competitor_urls_former_urls?: product_region_competitor_urls_former_urlsUncheckedUpdateManyWithoutProduct_region_competitor_urlsInput
  }

  export type product_region_price_dataUpdateWithoutProductsInput = {
    price?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    threshold_price?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    regions?: regionsUpdateOneRequiredWithoutProduct_region_price_dataInput
  }

  export type product_region_price_dataUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    region_id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    threshold_price?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type product_region_price_dataUncheckedUpdateManyWithoutProduct_region_price_dataInput = {
    id?: IntFieldUpdateOperationsInput | number
    region_id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    threshold_price?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type scaled_pricesUpdateWithoutProductsInput = {
    competitor_scaled_price?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    competitors?: competitorsUpdateOneRequiredWithoutScaled_pricesInput
    regions?: regionsUpdateOneRequiredWithoutScaled_pricesInput
    scrape_results?: scrape_resultsUpdateOneRequiredWithoutScaled_pricesInput
  }

  export type scaled_pricesUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    competitor_id?: IntFieldUpdateOperationsInput | number
    region_id?: IntFieldUpdateOperationsInput | number
    scrape_result_id?: IntFieldUpdateOperationsInput | number
    competitor_scaled_price?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type basketsCreateManyRegionsInput = {
    id?: number
    goodfood_id: number
    delivery_date: Date | string
    basket_totals?: NullableJsonNullValueInput | InputJsonValue
    basket_indexes?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string | null
    basket_daily_total_id: number
  }

  export type price_recommendationsCreateManyRegionsInput = {
    id?: number
    product_id: number
    sale_price: number
    list_price: number
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type product_region_competitor_urlsCreateManyRegionsInput = {
    id?: number
    product_id: number
    competitor_id: number
    url: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type product_region_price_dataCreateManyRegionsInput = {
    id?: number
    product_id: number
    price: number
    discount: number
    threshold_price?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type scaled_pricesCreateManyRegionsInput = {
    id?: number
    product_id: number
    competitor_id: number
    scrape_result_id: number
    competitor_scaled_price?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type basketsUpdateWithoutRegionsInput = {
    goodfood_id?: IntFieldUpdateOperationsInput | number
    delivery_date?: DateTimeFieldUpdateOperationsInput | Date | string
    basket_totals?: NullableJsonNullValueInput | InputJsonValue
    basket_indexes?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    basket_daily_totals?: basket_daily_totalsUpdateOneRequiredWithoutBasketsInput
  }

  export type basketsUncheckedUpdateWithoutRegionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    goodfood_id?: IntFieldUpdateOperationsInput | number
    delivery_date?: DateTimeFieldUpdateOperationsInput | Date | string
    basket_totals?: NullableJsonNullValueInput | InputJsonValue
    basket_indexes?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    basket_daily_total_id?: IntFieldUpdateOperationsInput | number
  }

  export type price_recommendationsUpdateWithoutRegionsInput = {
    sale_price?: FloatFieldUpdateOperationsInput | number
    list_price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUpdateOneRequiredWithoutPrice_recommendationsInput
  }

  export type price_recommendationsUncheckedUpdateWithoutRegionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    sale_price?: FloatFieldUpdateOperationsInput | number
    list_price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type product_region_competitor_urlsUpdateWithoutRegionsInput = {
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    competitors?: competitorsUpdateOneRequiredWithoutProduct_region_competitor_urlsInput
    products?: productsUpdateOneRequiredWithoutProduct_region_competitor_urlsInput
    product_region_competitor_urls_former_urls?: product_region_competitor_urls_former_urlsUpdateManyWithoutProduct_region_competitor_urlsInput
  }

  export type product_region_competitor_urlsUncheckedUpdateWithoutRegionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    competitor_id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_region_competitor_urls_former_urls?: product_region_competitor_urls_former_urlsUncheckedUpdateManyWithoutProduct_region_competitor_urlsInput
  }

  export type product_region_price_dataUpdateWithoutRegionsInput = {
    price?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    threshold_price?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUpdateOneRequiredWithoutProduct_region_price_dataInput
  }

  export type product_region_price_dataUncheckedUpdateWithoutRegionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    threshold_price?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type scaled_pricesUpdateWithoutRegionsInput = {
    competitor_scaled_price?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    competitors?: competitorsUpdateOneRequiredWithoutScaled_pricesInput
    products?: productsUpdateOneRequiredWithoutScaled_pricesInput
    scrape_results?: scrape_resultsUpdateOneRequiredWithoutScaled_pricesInput
  }

  export type scaled_pricesUncheckedUpdateWithoutRegionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    competitor_id?: IntFieldUpdateOperationsInput | number
    scrape_result_id?: IntFieldUpdateOperationsInput | number
    competitor_scaled_price?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type scaled_pricesCreateManyScrape_resultsInput = {
    id?: number
    product_id: number
    competitor_id: number
    region_id: number
    competitor_scaled_price?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type scaled_pricesUpdateWithoutScrape_resultsInput = {
    competitor_scaled_price?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    competitors?: competitorsUpdateOneRequiredWithoutScaled_pricesInput
    products?: productsUpdateOneRequiredWithoutScaled_pricesInput
    regions?: regionsUpdateOneRequiredWithoutScaled_pricesInput
  }

  export type scaled_pricesUncheckedUpdateWithoutScrape_resultsInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    competitor_id?: IntFieldUpdateOperationsInput | number
    region_id?: IntFieldUpdateOperationsInput | number
    competitor_scaled_price?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productsCreateManyUnitsInput = {
    id?: number
    sku?: string | null
    name?: string | null
    package_quantity?: number | null
    package_units?: string | null
    package_weight?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type scrape_resultsCreateManyUnitsInput = {
    id?: number
    competitor_sale_price?: number | null
    competitor_list_price?: number | null
    competitor_sold_by_volume?: number | null
    promotional_info?: string | null
    data_source?: string | null
    scrape_time?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type unitsCreateManyUnitsInput = {
    id?: number
    slug: string
    display_text: string
    scale_of_base_unit: number
  }

  export type productsUpdateWithoutUnitsInput = {
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    package_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    package_units?: NullableStringFieldUpdateOperationsInput | string | null
    package_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price_recommendations?: price_recommendationsUpdateManyWithoutProductsInput
    product_region_competitor_urls?: product_region_competitor_urlsUpdateManyWithoutProductsInput
    product_region_price_data?: product_region_price_dataUpdateManyWithoutProductsInput
    scaled_prices?: scaled_pricesUpdateManyWithoutProductsInput
  }

  export type productsUncheckedUpdateWithoutUnitsInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    package_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    package_units?: NullableStringFieldUpdateOperationsInput | string | null
    package_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price_recommendations?: price_recommendationsUncheckedUpdateManyWithoutProductsInput
    product_region_competitor_urls?: product_region_competitor_urlsUncheckedUpdateManyWithoutProductsInput
    product_region_price_data?: product_region_price_dataUncheckedUpdateManyWithoutProductsInput
    scaled_prices?: scaled_pricesUncheckedUpdateManyWithoutProductsInput
  }

  export type productsUncheckedUpdateManyWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    package_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    package_units?: NullableStringFieldUpdateOperationsInput | string | null
    package_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type scrape_resultsUpdateWithoutUnitsInput = {
    competitor_sale_price?: NullableFloatFieldUpdateOperationsInput | number | null
    competitor_list_price?: NullableFloatFieldUpdateOperationsInput | number | null
    competitor_sold_by_volume?: NullableFloatFieldUpdateOperationsInput | number | null
    promotional_info?: NullableStringFieldUpdateOperationsInput | string | null
    data_source?: NullableStringFieldUpdateOperationsInput | string | null
    scrape_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scaled_prices?: scaled_pricesUpdateManyWithoutScrape_resultsInput
  }

  export type scrape_resultsUncheckedUpdateWithoutUnitsInput = {
    id?: IntFieldUpdateOperationsInput | number
    competitor_sale_price?: NullableFloatFieldUpdateOperationsInput | number | null
    competitor_list_price?: NullableFloatFieldUpdateOperationsInput | number | null
    competitor_sold_by_volume?: NullableFloatFieldUpdateOperationsInput | number | null
    promotional_info?: NullableStringFieldUpdateOperationsInput | string | null
    data_source?: NullableStringFieldUpdateOperationsInput | string | null
    scrape_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scaled_prices?: scaled_pricesUncheckedUpdateManyWithoutScrape_resultsInput
  }

  export type scrape_resultsUncheckedUpdateManyWithoutScrape_resultsInput = {
    id?: IntFieldUpdateOperationsInput | number
    competitor_sale_price?: NullableFloatFieldUpdateOperationsInput | number | null
    competitor_list_price?: NullableFloatFieldUpdateOperationsInput | number | null
    competitor_sold_by_volume?: NullableFloatFieldUpdateOperationsInput | number | null
    promotional_info?: NullableStringFieldUpdateOperationsInput | string | null
    data_source?: NullableStringFieldUpdateOperationsInput | string | null
    scrape_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type unitsUpdateWithoutUnitsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    display_text?: StringFieldUpdateOperationsInput | string
    scale_of_base_unit?: FloatFieldUpdateOperationsInput | number
    products?: productsUpdateManyWithoutUnitsInput
    scrape_results?: scrape_resultsUpdateManyWithoutUnitsInput
    other_units?: unitsUpdateManyWithoutUnitsInput
  }

  export type unitsUncheckedUpdateWithoutUnitsInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    display_text?: StringFieldUpdateOperationsInput | string
    scale_of_base_unit?: FloatFieldUpdateOperationsInput | number
    products?: productsUncheckedUpdateManyWithoutUnitsInput
    scrape_results?: scrape_resultsUncheckedUpdateManyWithoutUnitsInput
    other_units?: unitsUncheckedUpdateManyWithoutUnitsInput
  }

  export type unitsUncheckedUpdateManyWithoutOther_unitsInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    display_text?: StringFieldUpdateOperationsInput | string
    scale_of_base_unit?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}