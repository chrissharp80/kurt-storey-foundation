
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Application
 * 
 */
export type Application = $Result.DefaultSelection<Prisma.$ApplicationPayload>
/**
 * Model Instrument
 * 
 */
export type Instrument = $Result.DefaultSelection<Prisma.$InstrumentPayload>
/**
 * Model InstrumentAssignment
 * 
 */
export type InstrumentAssignment = $Result.DefaultSelection<Prisma.$InstrumentAssignmentPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model EmailLog
 * 
 */
export type EmailLog = $Result.DefaultSelection<Prisma.$EmailLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  APPLICANT: 'APPLICANT'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const UserStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const ApplicationStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  ASSIGNED: 'ASSIGNED',
  COMPLETED: 'COMPLETED'
};

export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus]


export const InstrumentCondition: {
  EXCELLENT: 'EXCELLENT',
  GOOD: 'GOOD',
  FAIR: 'FAIR',
  NEEDS_REPAIR: 'NEEDS_REPAIR'
};

export type InstrumentCondition = (typeof InstrumentCondition)[keyof typeof InstrumentCondition]


export const InstrumentStatus: {
  AVAILABLE: 'AVAILABLE',
  ASSIGNED: 'ASSIGNED',
  REVOKED: 'REVOKED',
  NEEDS_REPAIR: 'NEEDS_REPAIR'
};

export type InstrumentStatus = (typeof InstrumentStatus)[keyof typeof InstrumentStatus]


export const AssignmentStatus: {
  ASSIGNED: 'ASSIGNED',
  REVOKED: 'REVOKED',
  COMPLETED: 'COMPLETED'
};

export type AssignmentStatus = (typeof AssignmentStatus)[keyof typeof AssignmentStatus]


export const EmailStatus: {
  PENDING: 'PENDING',
  SENT: 'SENT',
  FAILED: 'FAILED',
  RETRY: 'RETRY'
};

export type EmailStatus = (typeof EmailStatus)[keyof typeof EmailStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type ApplicationStatus = $Enums.ApplicationStatus

export const ApplicationStatus: typeof $Enums.ApplicationStatus

export type InstrumentCondition = $Enums.InstrumentCondition

export const InstrumentCondition: typeof $Enums.InstrumentCondition

export type InstrumentStatus = $Enums.InstrumentStatus

export const InstrumentStatus: typeof $Enums.InstrumentStatus

export type AssignmentStatus = $Enums.AssignmentStatus

export const AssignmentStatus: typeof $Enums.AssignmentStatus

export type EmailStatus = $Enums.EmailStatus

export const EmailStatus: typeof $Enums.EmailStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.application`: Exposes CRUD operations for the **Application** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.application.findMany()
    * ```
    */
  get application(): Prisma.ApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.instrument`: Exposes CRUD operations for the **Instrument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Instruments
    * const instruments = await prisma.instrument.findMany()
    * ```
    */
  get instrument(): Prisma.InstrumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.instrumentAssignment`: Exposes CRUD operations for the **InstrumentAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InstrumentAssignments
    * const instrumentAssignments = await prisma.instrumentAssignment.findMany()
    * ```
    */
  get instrumentAssignment(): Prisma.InstrumentAssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailLog`: Exposes CRUD operations for the **EmailLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailLogs
    * const emailLogs = await prisma.emailLog.findMany()
    * ```
    */
  get emailLog(): Prisma.EmailLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Application: 'Application',
    Instrument: 'Instrument',
    InstrumentAssignment: 'InstrumentAssignment',
    AuditLog: 'AuditLog',
    EmailLog: 'EmailLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "application" | "instrument" | "instrumentAssignment" | "auditLog" | "emailLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Application: {
        payload: Prisma.$ApplicationPayload<ExtArgs>
        fields: Prisma.ApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findFirst: {
            args: Prisma.ApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findMany: {
            args: Prisma.ApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          create: {
            args: Prisma.ApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          createMany: {
            args: Prisma.ApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          delete: {
            args: Prisma.ApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          update: {
            args: Prisma.ApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          upsert: {
            args: Prisma.ApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          aggregate: {
            args: Prisma.ApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplication>
          }
          groupBy: {
            args: Prisma.ApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationCountAggregateOutputType> | number
          }
        }
      }
      Instrument: {
        payload: Prisma.$InstrumentPayload<ExtArgs>
        fields: Prisma.InstrumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstrumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstrumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload>
          }
          findFirst: {
            args: Prisma.InstrumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstrumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload>
          }
          findMany: {
            args: Prisma.InstrumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload>[]
          }
          create: {
            args: Prisma.InstrumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload>
          }
          createMany: {
            args: Prisma.InstrumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstrumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload>[]
          }
          delete: {
            args: Prisma.InstrumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload>
          }
          update: {
            args: Prisma.InstrumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload>
          }
          deleteMany: {
            args: Prisma.InstrumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstrumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstrumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload>[]
          }
          upsert: {
            args: Prisma.InstrumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload>
          }
          aggregate: {
            args: Prisma.InstrumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstrument>
          }
          groupBy: {
            args: Prisma.InstrumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstrumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstrumentCountArgs<ExtArgs>
            result: $Utils.Optional<InstrumentCountAggregateOutputType> | number
          }
        }
      }
      InstrumentAssignment: {
        payload: Prisma.$InstrumentAssignmentPayload<ExtArgs>
        fields: Prisma.InstrumentAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstrumentAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstrumentAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentAssignmentPayload>
          }
          findFirst: {
            args: Prisma.InstrumentAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstrumentAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentAssignmentPayload>
          }
          findMany: {
            args: Prisma.InstrumentAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentAssignmentPayload>[]
          }
          create: {
            args: Prisma.InstrumentAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentAssignmentPayload>
          }
          createMany: {
            args: Prisma.InstrumentAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstrumentAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentAssignmentPayload>[]
          }
          delete: {
            args: Prisma.InstrumentAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentAssignmentPayload>
          }
          update: {
            args: Prisma.InstrumentAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.InstrumentAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstrumentAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstrumentAssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentAssignmentPayload>[]
          }
          upsert: {
            args: Prisma.InstrumentAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentAssignmentPayload>
          }
          aggregate: {
            args: Prisma.InstrumentAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstrumentAssignment>
          }
          groupBy: {
            args: Prisma.InstrumentAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstrumentAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstrumentAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<InstrumentAssignmentCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      EmailLog: {
        payload: Prisma.$EmailLogPayload<ExtArgs>
        fields: Prisma.EmailLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>
          }
          findFirst: {
            args: Prisma.EmailLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>
          }
          findMany: {
            args: Prisma.EmailLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>[]
          }
          create: {
            args: Prisma.EmailLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>
          }
          createMany: {
            args: Prisma.EmailLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>[]
          }
          delete: {
            args: Prisma.EmailLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>
          }
          update: {
            args: Prisma.EmailLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>
          }
          deleteMany: {
            args: Prisma.EmailLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>[]
          }
          upsert: {
            args: Prisma.EmailLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>
          }
          aggregate: {
            args: Prisma.EmailLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailLog>
          }
          groupBy: {
            args: Prisma.EmailLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailLogCountArgs<ExtArgs>
            result: $Utils.Optional<EmailLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    application?: ApplicationOmit
    instrument?: InstrumentOmit
    instrumentAssignment?: InstrumentAssignmentOmit
    auditLog?: AuditLogOmit
    emailLog?: EmailLogOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    reviewedApplications: number
    auditLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewedApplications?: boolean | UserCountOutputTypeCountReviewedApplicationsArgs
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewedApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Count Type ApplicationCountOutputType
   */

  export type ApplicationCountOutputType = {
    instrumentAssignments: number
  }

  export type ApplicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instrumentAssignments?: boolean | ApplicationCountOutputTypeCountInstrumentAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * ApplicationCountOutputType without action
   */
  export type ApplicationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationCountOutputType
     */
    select?: ApplicationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApplicationCountOutputType without action
   */
  export type ApplicationCountOutputTypeCountInstrumentAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstrumentAssignmentWhereInput
  }


  /**
   * Count Type InstrumentCountOutputType
   */

  export type InstrumentCountOutputType = {
    assignments: number
  }

  export type InstrumentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | InstrumentCountOutputTypeCountAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * InstrumentCountOutputType without action
   */
  export type InstrumentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstrumentCountOutputType
     */
    select?: InstrumentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstrumentCountOutputType without action
   */
  export type InstrumentCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstrumentAssignmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    role: $Enums.UserRole | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    role: $Enums.UserRole | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    role: number
    status: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    role: $Enums.UserRole
    status: $Enums.UserStatus
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    reviewedApplications?: boolean | User$reviewedApplicationsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "role" | "status" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewedApplications?: boolean | User$reviewedApplicationsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      reviewedApplications: Prisma.$ApplicationPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      role: $Enums.UserRole
      status: $Enums.UserStatus
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviewedApplications<T extends User$reviewedApplicationsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewedApplicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.reviewedApplications
   */
  export type User$reviewedApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Application
   */

  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  export type ApplicationMinAggregateOutputType = {
    id: string | null
    message: string | null
    instrumentPreference: string | null
    status: $Enums.ApplicationStatus | null
    token: string | null
    tokenExpiresAt: Date | null
    tokenRevoked: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    reviewedById: string | null
  }

  export type ApplicationMaxAggregateOutputType = {
    id: string | null
    message: string | null
    instrumentPreference: string | null
    status: $Enums.ApplicationStatus | null
    token: string | null
    tokenExpiresAt: Date | null
    tokenRevoked: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    reviewedById: string | null
  }

  export type ApplicationCountAggregateOutputType = {
    id: number
    message: number
    instrumentPreference: number
    status: number
    token: number
    tokenExpiresAt: number
    tokenRevoked: number
    createdAt: number
    updatedAt: number
    reviewedById: number
    _all: number
  }


  export type ApplicationMinAggregateInputType = {
    id?: true
    message?: true
    instrumentPreference?: true
    status?: true
    token?: true
    tokenExpiresAt?: true
    tokenRevoked?: true
    createdAt?: true
    updatedAt?: true
    reviewedById?: true
  }

  export type ApplicationMaxAggregateInputType = {
    id?: true
    message?: true
    instrumentPreference?: true
    status?: true
    token?: true
    tokenExpiresAt?: true
    tokenRevoked?: true
    createdAt?: true
    updatedAt?: true
    reviewedById?: true
  }

  export type ApplicationCountAggregateInputType = {
    id?: true
    message?: true
    instrumentPreference?: true
    status?: true
    token?: true
    tokenExpiresAt?: true
    tokenRevoked?: true
    createdAt?: true
    updatedAt?: true
    reviewedById?: true
    _all?: true
  }

  export type ApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Application to aggregate.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applications
    **/
    _count?: true | ApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationMaxAggregateInputType
  }

  export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplication[P]>
      : GetScalarType<T[P], AggregateApplication[P]>
  }




  export type ApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithAggregationInput | ApplicationOrderByWithAggregationInput[]
    by: ApplicationScalarFieldEnum[] | ApplicationScalarFieldEnum
    having?: ApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationCountAggregateInputType | true
    _min?: ApplicationMinAggregateInputType
    _max?: ApplicationMaxAggregateInputType
  }

  export type ApplicationGroupByOutputType = {
    id: string
    message: string
    instrumentPreference: string
    status: $Enums.ApplicationStatus
    token: string
    tokenExpiresAt: Date
    tokenRevoked: boolean
    createdAt: Date
    updatedAt: Date
    reviewedById: string | null
    _count: ApplicationCountAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  type GetApplicationGroupByPayload<T extends ApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    instrumentPreference?: boolean
    status?: boolean
    token?: boolean
    tokenExpiresAt?: boolean
    tokenRevoked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reviewedById?: boolean
    reviewedBy?: boolean | Application$reviewedByArgs<ExtArgs>
    instrumentAssignments?: boolean | Application$instrumentAssignmentsArgs<ExtArgs>
    _count?: boolean | ApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    instrumentPreference?: boolean
    status?: boolean
    token?: boolean
    tokenExpiresAt?: boolean
    tokenRevoked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reviewedById?: boolean
    reviewedBy?: boolean | Application$reviewedByArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    instrumentPreference?: boolean
    status?: boolean
    token?: boolean
    tokenExpiresAt?: boolean
    tokenRevoked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reviewedById?: boolean
    reviewedBy?: boolean | Application$reviewedByArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectScalar = {
    id?: boolean
    message?: boolean
    instrumentPreference?: boolean
    status?: boolean
    token?: boolean
    tokenExpiresAt?: boolean
    tokenRevoked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reviewedById?: boolean
  }

  export type ApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message" | "instrumentPreference" | "status" | "token" | "tokenExpiresAt" | "tokenRevoked" | "createdAt" | "updatedAt" | "reviewedById", ExtArgs["result"]["application"]>
  export type ApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewedBy?: boolean | Application$reviewedByArgs<ExtArgs>
    instrumentAssignments?: boolean | Application$instrumentAssignmentsArgs<ExtArgs>
    _count?: boolean | ApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewedBy?: boolean | Application$reviewedByArgs<ExtArgs>
  }
  export type ApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewedBy?: boolean | Application$reviewedByArgs<ExtArgs>
  }

  export type $ApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Application"
    objects: {
      reviewedBy: Prisma.$UserPayload<ExtArgs> | null
      instrumentAssignments: Prisma.$InstrumentAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      message: string
      instrumentPreference: string
      status: $Enums.ApplicationStatus
      token: string
      tokenExpiresAt: Date
      tokenRevoked: boolean
      createdAt: Date
      updatedAt: Date
      reviewedById: string | null
    }, ExtArgs["result"]["application"]>
    composites: {}
  }

  type ApplicationGetPayload<S extends boolean | null | undefined | ApplicationDefaultArgs> = $Result.GetResult<Prisma.$ApplicationPayload, S>

  type ApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationCountAggregateInputType | true
    }

  export interface ApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Application'], meta: { name: 'Application' } }
    /**
     * Find zero or one Application that matches the filter.
     * @param {ApplicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationFindUniqueArgs>(args: SelectSubset<T, ApplicationFindUniqueArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Application that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationFindUniqueOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationFindFirstArgs>(args?: SelectSubset<T, ApplicationFindFirstArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationFindManyArgs>(args?: SelectSubset<T, ApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Application.
     * @param {ApplicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     * 
     */
    create<T extends ApplicationCreateArgs>(args: SelectSubset<T, ApplicationCreateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Applications.
     * @param {ApplicationCreateManyArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationCreateManyArgs>(args?: SelectSubset<T, ApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Applications and returns the data saved in the database.
     * @param {ApplicationCreateManyAndReturnArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Application.
     * @param {ApplicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     * 
     */
    delete<T extends ApplicationDeleteArgs>(args: SelectSubset<T, ApplicationDeleteArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Application.
     * @param {ApplicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationUpdateArgs>(args: SelectSubset<T, ApplicationUpdateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Applications.
     * @param {ApplicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationDeleteManyArgs>(args?: SelectSubset<T, ApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationUpdateManyArgs>(args: SelectSubset<T, ApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications and returns the data updated in the database.
     * @param {ApplicationUpdateManyAndReturnArgs} args - Arguments to update many Applications.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Application.
     * @param {ApplicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationUpsertArgs>(args: SelectSubset<T, ApplicationUpsertArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends ApplicationCountArgs>(
      args?: Subset<T, ApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApplicationAggregateArgs>(args: Subset<T, ApplicationAggregateArgs>): Prisma.PrismaPromise<GetApplicationAggregateType<T>>

    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationGroupByArgs} args - Group by arguments.
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
      T extends ApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Application model
   */
  readonly fields: ApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviewedBy<T extends Application$reviewedByArgs<ExtArgs> = {}>(args?: Subset<T, Application$reviewedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    instrumentAssignments<T extends Application$instrumentAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Application$instrumentAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstrumentAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Application model
   */
  interface ApplicationFieldRefs {
    readonly id: FieldRef<"Application", 'String'>
    readonly message: FieldRef<"Application", 'String'>
    readonly instrumentPreference: FieldRef<"Application", 'String'>
    readonly status: FieldRef<"Application", 'ApplicationStatus'>
    readonly token: FieldRef<"Application", 'String'>
    readonly tokenExpiresAt: FieldRef<"Application", 'DateTime'>
    readonly tokenRevoked: FieldRef<"Application", 'Boolean'>
    readonly createdAt: FieldRef<"Application", 'DateTime'>
    readonly updatedAt: FieldRef<"Application", 'DateTime'>
    readonly reviewedById: FieldRef<"Application", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Application findUnique
   */
  export type ApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findUniqueOrThrow
   */
  export type ApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findFirst
   */
  export type ApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findFirstOrThrow
   */
  export type ApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findMany
   */
  export type ApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application create
   */
  export type ApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Application.
     */
    data: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
  }

  /**
   * Application createMany
   */
  export type ApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Application createManyAndReturn
   */
  export type ApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Application update
   */
  export type ApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Application.
     */
    data: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
    /**
     * Choose, which Application to update.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application updateMany
   */
  export type ApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
  }

  /**
   * Application updateManyAndReturn
   */
  export type ApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Application upsert
   */
  export type ApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Application to update in case it exists.
     */
    where: ApplicationWhereUniqueInput
    /**
     * In case the Application found by the `where` argument doesn't exist, create a new Application with this data.
     */
    create: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
    /**
     * In case the Application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
  }

  /**
   * Application delete
   */
  export type ApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter which Application to delete.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application deleteMany
   */
  export type ApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to delete
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to delete.
     */
    limit?: number
  }

  /**
   * Application.reviewedBy
   */
  export type Application$reviewedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Application.instrumentAssignments
   */
  export type Application$instrumentAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstrumentAssignment
     */
    select?: InstrumentAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstrumentAssignment
     */
    omit?: InstrumentAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentAssignmentInclude<ExtArgs> | null
    where?: InstrumentAssignmentWhereInput
    orderBy?: InstrumentAssignmentOrderByWithRelationInput | InstrumentAssignmentOrderByWithRelationInput[]
    cursor?: InstrumentAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InstrumentAssignmentScalarFieldEnum | InstrumentAssignmentScalarFieldEnum[]
  }

  /**
   * Application without action
   */
  export type ApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
  }


  /**
   * Model Instrument
   */

  export type AggregateInstrument = {
    _count: InstrumentCountAggregateOutputType | null
    _min: InstrumentMinAggregateOutputType | null
    _max: InstrumentMaxAggregateOutputType | null
  }

  export type InstrumentMinAggregateOutputType = {
    id: string | null
    type: string | null
    brand: string | null
    condition: $Enums.InstrumentCondition | null
    status: $Enums.InstrumentStatus | null
    donorName: string | null
    donorEmail: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InstrumentMaxAggregateOutputType = {
    id: string | null
    type: string | null
    brand: string | null
    condition: $Enums.InstrumentCondition | null
    status: $Enums.InstrumentStatus | null
    donorName: string | null
    donorEmail: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InstrumentCountAggregateOutputType = {
    id: number
    type: number
    brand: number
    condition: number
    status: number
    donorName: number
    donorEmail: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InstrumentMinAggregateInputType = {
    id?: true
    type?: true
    brand?: true
    condition?: true
    status?: true
    donorName?: true
    donorEmail?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InstrumentMaxAggregateInputType = {
    id?: true
    type?: true
    brand?: true
    condition?: true
    status?: true
    donorName?: true
    donorEmail?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InstrumentCountAggregateInputType = {
    id?: true
    type?: true
    brand?: true
    condition?: true
    status?: true
    donorName?: true
    donorEmail?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InstrumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instrument to aggregate.
     */
    where?: InstrumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instruments to fetch.
     */
    orderBy?: InstrumentOrderByWithRelationInput | InstrumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstrumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instruments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instruments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Instruments
    **/
    _count?: true | InstrumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstrumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstrumentMaxAggregateInputType
  }

  export type GetInstrumentAggregateType<T extends InstrumentAggregateArgs> = {
        [P in keyof T & keyof AggregateInstrument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstrument[P]>
      : GetScalarType<T[P], AggregateInstrument[P]>
  }




  export type InstrumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstrumentWhereInput
    orderBy?: InstrumentOrderByWithAggregationInput | InstrumentOrderByWithAggregationInput[]
    by: InstrumentScalarFieldEnum[] | InstrumentScalarFieldEnum
    having?: InstrumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstrumentCountAggregateInputType | true
    _min?: InstrumentMinAggregateInputType
    _max?: InstrumentMaxAggregateInputType
  }

  export type InstrumentGroupByOutputType = {
    id: string
    type: string
    brand: string
    condition: $Enums.InstrumentCondition
    status: $Enums.InstrumentStatus
    donorName: string | null
    donorEmail: string | null
    createdAt: Date
    updatedAt: Date
    _count: InstrumentCountAggregateOutputType | null
    _min: InstrumentMinAggregateOutputType | null
    _max: InstrumentMaxAggregateOutputType | null
  }

  type GetInstrumentGroupByPayload<T extends InstrumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstrumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstrumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstrumentGroupByOutputType[P]>
            : GetScalarType<T[P], InstrumentGroupByOutputType[P]>
        }
      >
    >


  export type InstrumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    brand?: boolean
    condition?: boolean
    status?: boolean
    donorName?: boolean
    donorEmail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignments?: boolean | Instrument$assignmentsArgs<ExtArgs>
    _count?: boolean | InstrumentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instrument"]>

  export type InstrumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    brand?: boolean
    condition?: boolean
    status?: boolean
    donorName?: boolean
    donorEmail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["instrument"]>

  export type InstrumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    brand?: boolean
    condition?: boolean
    status?: boolean
    donorName?: boolean
    donorEmail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["instrument"]>

  export type InstrumentSelectScalar = {
    id?: boolean
    type?: boolean
    brand?: boolean
    condition?: boolean
    status?: boolean
    donorName?: boolean
    donorEmail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InstrumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "brand" | "condition" | "status" | "donorName" | "donorEmail" | "createdAt" | "updatedAt", ExtArgs["result"]["instrument"]>
  export type InstrumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | Instrument$assignmentsArgs<ExtArgs>
    _count?: boolean | InstrumentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InstrumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InstrumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InstrumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Instrument"
    objects: {
      assignments: Prisma.$InstrumentAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      brand: string
      condition: $Enums.InstrumentCondition
      status: $Enums.InstrumentStatus
      donorName: string | null
      donorEmail: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["instrument"]>
    composites: {}
  }

  type InstrumentGetPayload<S extends boolean | null | undefined | InstrumentDefaultArgs> = $Result.GetResult<Prisma.$InstrumentPayload, S>

  type InstrumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstrumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstrumentCountAggregateInputType | true
    }

  export interface InstrumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Instrument'], meta: { name: 'Instrument' } }
    /**
     * Find zero or one Instrument that matches the filter.
     * @param {InstrumentFindUniqueArgs} args - Arguments to find a Instrument
     * @example
     * // Get one Instrument
     * const instrument = await prisma.instrument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstrumentFindUniqueArgs>(args: SelectSubset<T, InstrumentFindUniqueArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Instrument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstrumentFindUniqueOrThrowArgs} args - Arguments to find a Instrument
     * @example
     * // Get one Instrument
     * const instrument = await prisma.instrument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstrumentFindUniqueOrThrowArgs>(args: SelectSubset<T, InstrumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instrument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentFindFirstArgs} args - Arguments to find a Instrument
     * @example
     * // Get one Instrument
     * const instrument = await prisma.instrument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstrumentFindFirstArgs>(args?: SelectSubset<T, InstrumentFindFirstArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instrument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentFindFirstOrThrowArgs} args - Arguments to find a Instrument
     * @example
     * // Get one Instrument
     * const instrument = await prisma.instrument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstrumentFindFirstOrThrowArgs>(args?: SelectSubset<T, InstrumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Instruments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Instruments
     * const instruments = await prisma.instrument.findMany()
     * 
     * // Get first 10 Instruments
     * const instruments = await prisma.instrument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instrumentWithIdOnly = await prisma.instrument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstrumentFindManyArgs>(args?: SelectSubset<T, InstrumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Instrument.
     * @param {InstrumentCreateArgs} args - Arguments to create a Instrument.
     * @example
     * // Create one Instrument
     * const Instrument = await prisma.instrument.create({
     *   data: {
     *     // ... data to create a Instrument
     *   }
     * })
     * 
     */
    create<T extends InstrumentCreateArgs>(args: SelectSubset<T, InstrumentCreateArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Instruments.
     * @param {InstrumentCreateManyArgs} args - Arguments to create many Instruments.
     * @example
     * // Create many Instruments
     * const instrument = await prisma.instrument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstrumentCreateManyArgs>(args?: SelectSubset<T, InstrumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Instruments and returns the data saved in the database.
     * @param {InstrumentCreateManyAndReturnArgs} args - Arguments to create many Instruments.
     * @example
     * // Create many Instruments
     * const instrument = await prisma.instrument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Instruments and only return the `id`
     * const instrumentWithIdOnly = await prisma.instrument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstrumentCreateManyAndReturnArgs>(args?: SelectSubset<T, InstrumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Instrument.
     * @param {InstrumentDeleteArgs} args - Arguments to delete one Instrument.
     * @example
     * // Delete one Instrument
     * const Instrument = await prisma.instrument.delete({
     *   where: {
     *     // ... filter to delete one Instrument
     *   }
     * })
     * 
     */
    delete<T extends InstrumentDeleteArgs>(args: SelectSubset<T, InstrumentDeleteArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Instrument.
     * @param {InstrumentUpdateArgs} args - Arguments to update one Instrument.
     * @example
     * // Update one Instrument
     * const instrument = await prisma.instrument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstrumentUpdateArgs>(args: SelectSubset<T, InstrumentUpdateArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Instruments.
     * @param {InstrumentDeleteManyArgs} args - Arguments to filter Instruments to delete.
     * @example
     * // Delete a few Instruments
     * const { count } = await prisma.instrument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstrumentDeleteManyArgs>(args?: SelectSubset<T, InstrumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instruments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Instruments
     * const instrument = await prisma.instrument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstrumentUpdateManyArgs>(args: SelectSubset<T, InstrumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instruments and returns the data updated in the database.
     * @param {InstrumentUpdateManyAndReturnArgs} args - Arguments to update many Instruments.
     * @example
     * // Update many Instruments
     * const instrument = await prisma.instrument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Instruments and only return the `id`
     * const instrumentWithIdOnly = await prisma.instrument.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InstrumentUpdateManyAndReturnArgs>(args: SelectSubset<T, InstrumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Instrument.
     * @param {InstrumentUpsertArgs} args - Arguments to update or create a Instrument.
     * @example
     * // Update or create a Instrument
     * const instrument = await prisma.instrument.upsert({
     *   create: {
     *     // ... data to create a Instrument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Instrument we want to update
     *   }
     * })
     */
    upsert<T extends InstrumentUpsertArgs>(args: SelectSubset<T, InstrumentUpsertArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Instruments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentCountArgs} args - Arguments to filter Instruments to count.
     * @example
     * // Count the number of Instruments
     * const count = await prisma.instrument.count({
     *   where: {
     *     // ... the filter for the Instruments we want to count
     *   }
     * })
    **/
    count<T extends InstrumentCountArgs>(
      args?: Subset<T, InstrumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstrumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Instrument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstrumentAggregateArgs>(args: Subset<T, InstrumentAggregateArgs>): Prisma.PrismaPromise<GetInstrumentAggregateType<T>>

    /**
     * Group by Instrument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentGroupByArgs} args - Group by arguments.
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
      T extends InstrumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstrumentGroupByArgs['orderBy'] }
        : { orderBy?: InstrumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, InstrumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstrumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Instrument model
   */
  readonly fields: InstrumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Instrument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstrumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignments<T extends Instrument$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Instrument$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstrumentAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Instrument model
   */
  interface InstrumentFieldRefs {
    readonly id: FieldRef<"Instrument", 'String'>
    readonly type: FieldRef<"Instrument", 'String'>
    readonly brand: FieldRef<"Instrument", 'String'>
    readonly condition: FieldRef<"Instrument", 'InstrumentCondition'>
    readonly status: FieldRef<"Instrument", 'InstrumentStatus'>
    readonly donorName: FieldRef<"Instrument", 'String'>
    readonly donorEmail: FieldRef<"Instrument", 'String'>
    readonly createdAt: FieldRef<"Instrument", 'DateTime'>
    readonly updatedAt: FieldRef<"Instrument", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Instrument findUnique
   */
  export type InstrumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * Filter, which Instrument to fetch.
     */
    where: InstrumentWhereUniqueInput
  }

  /**
   * Instrument findUniqueOrThrow
   */
  export type InstrumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * Filter, which Instrument to fetch.
     */
    where: InstrumentWhereUniqueInput
  }

  /**
   * Instrument findFirst
   */
  export type InstrumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * Filter, which Instrument to fetch.
     */
    where?: InstrumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instruments to fetch.
     */
    orderBy?: InstrumentOrderByWithRelationInput | InstrumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instruments.
     */
    cursor?: InstrumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instruments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instruments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instruments.
     */
    distinct?: InstrumentScalarFieldEnum | InstrumentScalarFieldEnum[]
  }

  /**
   * Instrument findFirstOrThrow
   */
  export type InstrumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * Filter, which Instrument to fetch.
     */
    where?: InstrumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instruments to fetch.
     */
    orderBy?: InstrumentOrderByWithRelationInput | InstrumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instruments.
     */
    cursor?: InstrumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instruments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instruments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instruments.
     */
    distinct?: InstrumentScalarFieldEnum | InstrumentScalarFieldEnum[]
  }

  /**
   * Instrument findMany
   */
  export type InstrumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * Filter, which Instruments to fetch.
     */
    where?: InstrumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instruments to fetch.
     */
    orderBy?: InstrumentOrderByWithRelationInput | InstrumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Instruments.
     */
    cursor?: InstrumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instruments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instruments.
     */
    skip?: number
    distinct?: InstrumentScalarFieldEnum | InstrumentScalarFieldEnum[]
  }

  /**
   * Instrument create
   */
  export type InstrumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Instrument.
     */
    data: XOR<InstrumentCreateInput, InstrumentUncheckedCreateInput>
  }

  /**
   * Instrument createMany
   */
  export type InstrumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Instruments.
     */
    data: InstrumentCreateManyInput | InstrumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Instrument createManyAndReturn
   */
  export type InstrumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * The data used to create many Instruments.
     */
    data: InstrumentCreateManyInput | InstrumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Instrument update
   */
  export type InstrumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Instrument.
     */
    data: XOR<InstrumentUpdateInput, InstrumentUncheckedUpdateInput>
    /**
     * Choose, which Instrument to update.
     */
    where: InstrumentWhereUniqueInput
  }

  /**
   * Instrument updateMany
   */
  export type InstrumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Instruments.
     */
    data: XOR<InstrumentUpdateManyMutationInput, InstrumentUncheckedUpdateManyInput>
    /**
     * Filter which Instruments to update
     */
    where?: InstrumentWhereInput
    /**
     * Limit how many Instruments to update.
     */
    limit?: number
  }

  /**
   * Instrument updateManyAndReturn
   */
  export type InstrumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * The data used to update Instruments.
     */
    data: XOR<InstrumentUpdateManyMutationInput, InstrumentUncheckedUpdateManyInput>
    /**
     * Filter which Instruments to update
     */
    where?: InstrumentWhereInput
    /**
     * Limit how many Instruments to update.
     */
    limit?: number
  }

  /**
   * Instrument upsert
   */
  export type InstrumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Instrument to update in case it exists.
     */
    where: InstrumentWhereUniqueInput
    /**
     * In case the Instrument found by the `where` argument doesn't exist, create a new Instrument with this data.
     */
    create: XOR<InstrumentCreateInput, InstrumentUncheckedCreateInput>
    /**
     * In case the Instrument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstrumentUpdateInput, InstrumentUncheckedUpdateInput>
  }

  /**
   * Instrument delete
   */
  export type InstrumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * Filter which Instrument to delete.
     */
    where: InstrumentWhereUniqueInput
  }

  /**
   * Instrument deleteMany
   */
  export type InstrumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instruments to delete
     */
    where?: InstrumentWhereInput
    /**
     * Limit how many Instruments to delete.
     */
    limit?: number
  }

  /**
   * Instrument.assignments
   */
  export type Instrument$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstrumentAssignment
     */
    select?: InstrumentAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstrumentAssignment
     */
    omit?: InstrumentAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentAssignmentInclude<ExtArgs> | null
    where?: InstrumentAssignmentWhereInput
    orderBy?: InstrumentAssignmentOrderByWithRelationInput | InstrumentAssignmentOrderByWithRelationInput[]
    cursor?: InstrumentAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InstrumentAssignmentScalarFieldEnum | InstrumentAssignmentScalarFieldEnum[]
  }

  /**
   * Instrument without action
   */
  export type InstrumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
  }


  /**
   * Model InstrumentAssignment
   */

  export type AggregateInstrumentAssignment = {
    _count: InstrumentAssignmentCountAggregateOutputType | null
    _min: InstrumentAssignmentMinAggregateOutputType | null
    _max: InstrumentAssignmentMaxAggregateOutputType | null
  }

  export type InstrumentAssignmentMinAggregateOutputType = {
    id: string | null
    status: $Enums.AssignmentStatus | null
    assignedAt: Date | null
    revokedAt: Date | null
    notes: string | null
    instrumentId: string | null
    applicationId: string | null
  }

  export type InstrumentAssignmentMaxAggregateOutputType = {
    id: string | null
    status: $Enums.AssignmentStatus | null
    assignedAt: Date | null
    revokedAt: Date | null
    notes: string | null
    instrumentId: string | null
    applicationId: string | null
  }

  export type InstrumentAssignmentCountAggregateOutputType = {
    id: number
    status: number
    assignedAt: number
    revokedAt: number
    notes: number
    instrumentId: number
    applicationId: number
    _all: number
  }


  export type InstrumentAssignmentMinAggregateInputType = {
    id?: true
    status?: true
    assignedAt?: true
    revokedAt?: true
    notes?: true
    instrumentId?: true
    applicationId?: true
  }

  export type InstrumentAssignmentMaxAggregateInputType = {
    id?: true
    status?: true
    assignedAt?: true
    revokedAt?: true
    notes?: true
    instrumentId?: true
    applicationId?: true
  }

  export type InstrumentAssignmentCountAggregateInputType = {
    id?: true
    status?: true
    assignedAt?: true
    revokedAt?: true
    notes?: true
    instrumentId?: true
    applicationId?: true
    _all?: true
  }

  export type InstrumentAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstrumentAssignment to aggregate.
     */
    where?: InstrumentAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstrumentAssignments to fetch.
     */
    orderBy?: InstrumentAssignmentOrderByWithRelationInput | InstrumentAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstrumentAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstrumentAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstrumentAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InstrumentAssignments
    **/
    _count?: true | InstrumentAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstrumentAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstrumentAssignmentMaxAggregateInputType
  }

  export type GetInstrumentAssignmentAggregateType<T extends InstrumentAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateInstrumentAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstrumentAssignment[P]>
      : GetScalarType<T[P], AggregateInstrumentAssignment[P]>
  }




  export type InstrumentAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstrumentAssignmentWhereInput
    orderBy?: InstrumentAssignmentOrderByWithAggregationInput | InstrumentAssignmentOrderByWithAggregationInput[]
    by: InstrumentAssignmentScalarFieldEnum[] | InstrumentAssignmentScalarFieldEnum
    having?: InstrumentAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstrumentAssignmentCountAggregateInputType | true
    _min?: InstrumentAssignmentMinAggregateInputType
    _max?: InstrumentAssignmentMaxAggregateInputType
  }

  export type InstrumentAssignmentGroupByOutputType = {
    id: string
    status: $Enums.AssignmentStatus
    assignedAt: Date
    revokedAt: Date | null
    notes: string | null
    instrumentId: string
    applicationId: string
    _count: InstrumentAssignmentCountAggregateOutputType | null
    _min: InstrumentAssignmentMinAggregateOutputType | null
    _max: InstrumentAssignmentMaxAggregateOutputType | null
  }

  type GetInstrumentAssignmentGroupByPayload<T extends InstrumentAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstrumentAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstrumentAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstrumentAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], InstrumentAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type InstrumentAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    assignedAt?: boolean
    revokedAt?: boolean
    notes?: boolean
    instrumentId?: boolean
    applicationId?: boolean
    instrument?: boolean | InstrumentDefaultArgs<ExtArgs>
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instrumentAssignment"]>

  export type InstrumentAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    assignedAt?: boolean
    revokedAt?: boolean
    notes?: boolean
    instrumentId?: boolean
    applicationId?: boolean
    instrument?: boolean | InstrumentDefaultArgs<ExtArgs>
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instrumentAssignment"]>

  export type InstrumentAssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    assignedAt?: boolean
    revokedAt?: boolean
    notes?: boolean
    instrumentId?: boolean
    applicationId?: boolean
    instrument?: boolean | InstrumentDefaultArgs<ExtArgs>
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instrumentAssignment"]>

  export type InstrumentAssignmentSelectScalar = {
    id?: boolean
    status?: boolean
    assignedAt?: boolean
    revokedAt?: boolean
    notes?: boolean
    instrumentId?: boolean
    applicationId?: boolean
  }

  export type InstrumentAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "assignedAt" | "revokedAt" | "notes" | "instrumentId" | "applicationId", ExtArgs["result"]["instrumentAssignment"]>
  export type InstrumentAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instrument?: boolean | InstrumentDefaultArgs<ExtArgs>
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }
  export type InstrumentAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instrument?: boolean | InstrumentDefaultArgs<ExtArgs>
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }
  export type InstrumentAssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instrument?: boolean | InstrumentDefaultArgs<ExtArgs>
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }

  export type $InstrumentAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InstrumentAssignment"
    objects: {
      instrument: Prisma.$InstrumentPayload<ExtArgs>
      application: Prisma.$ApplicationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: $Enums.AssignmentStatus
      assignedAt: Date
      revokedAt: Date | null
      notes: string | null
      instrumentId: string
      applicationId: string
    }, ExtArgs["result"]["instrumentAssignment"]>
    composites: {}
  }

  type InstrumentAssignmentGetPayload<S extends boolean | null | undefined | InstrumentAssignmentDefaultArgs> = $Result.GetResult<Prisma.$InstrumentAssignmentPayload, S>

  type InstrumentAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstrumentAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstrumentAssignmentCountAggregateInputType | true
    }

  export interface InstrumentAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InstrumentAssignment'], meta: { name: 'InstrumentAssignment' } }
    /**
     * Find zero or one InstrumentAssignment that matches the filter.
     * @param {InstrumentAssignmentFindUniqueArgs} args - Arguments to find a InstrumentAssignment
     * @example
     * // Get one InstrumentAssignment
     * const instrumentAssignment = await prisma.instrumentAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstrumentAssignmentFindUniqueArgs>(args: SelectSubset<T, InstrumentAssignmentFindUniqueArgs<ExtArgs>>): Prisma__InstrumentAssignmentClient<$Result.GetResult<Prisma.$InstrumentAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InstrumentAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstrumentAssignmentFindUniqueOrThrowArgs} args - Arguments to find a InstrumentAssignment
     * @example
     * // Get one InstrumentAssignment
     * const instrumentAssignment = await prisma.instrumentAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstrumentAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, InstrumentAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstrumentAssignmentClient<$Result.GetResult<Prisma.$InstrumentAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstrumentAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentAssignmentFindFirstArgs} args - Arguments to find a InstrumentAssignment
     * @example
     * // Get one InstrumentAssignment
     * const instrumentAssignment = await prisma.instrumentAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstrumentAssignmentFindFirstArgs>(args?: SelectSubset<T, InstrumentAssignmentFindFirstArgs<ExtArgs>>): Prisma__InstrumentAssignmentClient<$Result.GetResult<Prisma.$InstrumentAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstrumentAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentAssignmentFindFirstOrThrowArgs} args - Arguments to find a InstrumentAssignment
     * @example
     * // Get one InstrumentAssignment
     * const instrumentAssignment = await prisma.instrumentAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstrumentAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, InstrumentAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstrumentAssignmentClient<$Result.GetResult<Prisma.$InstrumentAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InstrumentAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InstrumentAssignments
     * const instrumentAssignments = await prisma.instrumentAssignment.findMany()
     * 
     * // Get first 10 InstrumentAssignments
     * const instrumentAssignments = await prisma.instrumentAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instrumentAssignmentWithIdOnly = await prisma.instrumentAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstrumentAssignmentFindManyArgs>(args?: SelectSubset<T, InstrumentAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstrumentAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InstrumentAssignment.
     * @param {InstrumentAssignmentCreateArgs} args - Arguments to create a InstrumentAssignment.
     * @example
     * // Create one InstrumentAssignment
     * const InstrumentAssignment = await prisma.instrumentAssignment.create({
     *   data: {
     *     // ... data to create a InstrumentAssignment
     *   }
     * })
     * 
     */
    create<T extends InstrumentAssignmentCreateArgs>(args: SelectSubset<T, InstrumentAssignmentCreateArgs<ExtArgs>>): Prisma__InstrumentAssignmentClient<$Result.GetResult<Prisma.$InstrumentAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InstrumentAssignments.
     * @param {InstrumentAssignmentCreateManyArgs} args - Arguments to create many InstrumentAssignments.
     * @example
     * // Create many InstrumentAssignments
     * const instrumentAssignment = await prisma.instrumentAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstrumentAssignmentCreateManyArgs>(args?: SelectSubset<T, InstrumentAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InstrumentAssignments and returns the data saved in the database.
     * @param {InstrumentAssignmentCreateManyAndReturnArgs} args - Arguments to create many InstrumentAssignments.
     * @example
     * // Create many InstrumentAssignments
     * const instrumentAssignment = await prisma.instrumentAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InstrumentAssignments and only return the `id`
     * const instrumentAssignmentWithIdOnly = await prisma.instrumentAssignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstrumentAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, InstrumentAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstrumentAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InstrumentAssignment.
     * @param {InstrumentAssignmentDeleteArgs} args - Arguments to delete one InstrumentAssignment.
     * @example
     * // Delete one InstrumentAssignment
     * const InstrumentAssignment = await prisma.instrumentAssignment.delete({
     *   where: {
     *     // ... filter to delete one InstrumentAssignment
     *   }
     * })
     * 
     */
    delete<T extends InstrumentAssignmentDeleteArgs>(args: SelectSubset<T, InstrumentAssignmentDeleteArgs<ExtArgs>>): Prisma__InstrumentAssignmentClient<$Result.GetResult<Prisma.$InstrumentAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InstrumentAssignment.
     * @param {InstrumentAssignmentUpdateArgs} args - Arguments to update one InstrumentAssignment.
     * @example
     * // Update one InstrumentAssignment
     * const instrumentAssignment = await prisma.instrumentAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstrumentAssignmentUpdateArgs>(args: SelectSubset<T, InstrumentAssignmentUpdateArgs<ExtArgs>>): Prisma__InstrumentAssignmentClient<$Result.GetResult<Prisma.$InstrumentAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InstrumentAssignments.
     * @param {InstrumentAssignmentDeleteManyArgs} args - Arguments to filter InstrumentAssignments to delete.
     * @example
     * // Delete a few InstrumentAssignments
     * const { count } = await prisma.instrumentAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstrumentAssignmentDeleteManyArgs>(args?: SelectSubset<T, InstrumentAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstrumentAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InstrumentAssignments
     * const instrumentAssignment = await prisma.instrumentAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstrumentAssignmentUpdateManyArgs>(args: SelectSubset<T, InstrumentAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstrumentAssignments and returns the data updated in the database.
     * @param {InstrumentAssignmentUpdateManyAndReturnArgs} args - Arguments to update many InstrumentAssignments.
     * @example
     * // Update many InstrumentAssignments
     * const instrumentAssignment = await prisma.instrumentAssignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InstrumentAssignments and only return the `id`
     * const instrumentAssignmentWithIdOnly = await prisma.instrumentAssignment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InstrumentAssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, InstrumentAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstrumentAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InstrumentAssignment.
     * @param {InstrumentAssignmentUpsertArgs} args - Arguments to update or create a InstrumentAssignment.
     * @example
     * // Update or create a InstrumentAssignment
     * const instrumentAssignment = await prisma.instrumentAssignment.upsert({
     *   create: {
     *     // ... data to create a InstrumentAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InstrumentAssignment we want to update
     *   }
     * })
     */
    upsert<T extends InstrumentAssignmentUpsertArgs>(args: SelectSubset<T, InstrumentAssignmentUpsertArgs<ExtArgs>>): Prisma__InstrumentAssignmentClient<$Result.GetResult<Prisma.$InstrumentAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InstrumentAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentAssignmentCountArgs} args - Arguments to filter InstrumentAssignments to count.
     * @example
     * // Count the number of InstrumentAssignments
     * const count = await prisma.instrumentAssignment.count({
     *   where: {
     *     // ... the filter for the InstrumentAssignments we want to count
     *   }
     * })
    **/
    count<T extends InstrumentAssignmentCountArgs>(
      args?: Subset<T, InstrumentAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstrumentAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InstrumentAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstrumentAssignmentAggregateArgs>(args: Subset<T, InstrumentAssignmentAggregateArgs>): Prisma.PrismaPromise<GetInstrumentAssignmentAggregateType<T>>

    /**
     * Group by InstrumentAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentAssignmentGroupByArgs} args - Group by arguments.
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
      T extends InstrumentAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstrumentAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: InstrumentAssignmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, InstrumentAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstrumentAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InstrumentAssignment model
   */
  readonly fields: InstrumentAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InstrumentAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstrumentAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instrument<T extends InstrumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstrumentDefaultArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    application<T extends ApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApplicationDefaultArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InstrumentAssignment model
   */
  interface InstrumentAssignmentFieldRefs {
    readonly id: FieldRef<"InstrumentAssignment", 'String'>
    readonly status: FieldRef<"InstrumentAssignment", 'AssignmentStatus'>
    readonly assignedAt: FieldRef<"InstrumentAssignment", 'DateTime'>
    readonly revokedAt: FieldRef<"InstrumentAssignment", 'DateTime'>
    readonly notes: FieldRef<"InstrumentAssignment", 'String'>
    readonly instrumentId: FieldRef<"InstrumentAssignment", 'String'>
    readonly applicationId: FieldRef<"InstrumentAssignment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * InstrumentAssignment findUnique
   */
  export type InstrumentAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstrumentAssignment
     */
    select?: InstrumentAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstrumentAssignment
     */
    omit?: InstrumentAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which InstrumentAssignment to fetch.
     */
    where: InstrumentAssignmentWhereUniqueInput
  }

  /**
   * InstrumentAssignment findUniqueOrThrow
   */
  export type InstrumentAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstrumentAssignment
     */
    select?: InstrumentAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstrumentAssignment
     */
    omit?: InstrumentAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which InstrumentAssignment to fetch.
     */
    where: InstrumentAssignmentWhereUniqueInput
  }

  /**
   * InstrumentAssignment findFirst
   */
  export type InstrumentAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstrumentAssignment
     */
    select?: InstrumentAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstrumentAssignment
     */
    omit?: InstrumentAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which InstrumentAssignment to fetch.
     */
    where?: InstrumentAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstrumentAssignments to fetch.
     */
    orderBy?: InstrumentAssignmentOrderByWithRelationInput | InstrumentAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstrumentAssignments.
     */
    cursor?: InstrumentAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstrumentAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstrumentAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstrumentAssignments.
     */
    distinct?: InstrumentAssignmentScalarFieldEnum | InstrumentAssignmentScalarFieldEnum[]
  }

  /**
   * InstrumentAssignment findFirstOrThrow
   */
  export type InstrumentAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstrumentAssignment
     */
    select?: InstrumentAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstrumentAssignment
     */
    omit?: InstrumentAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which InstrumentAssignment to fetch.
     */
    where?: InstrumentAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstrumentAssignments to fetch.
     */
    orderBy?: InstrumentAssignmentOrderByWithRelationInput | InstrumentAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstrumentAssignments.
     */
    cursor?: InstrumentAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstrumentAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstrumentAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstrumentAssignments.
     */
    distinct?: InstrumentAssignmentScalarFieldEnum | InstrumentAssignmentScalarFieldEnum[]
  }

  /**
   * InstrumentAssignment findMany
   */
  export type InstrumentAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstrumentAssignment
     */
    select?: InstrumentAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstrumentAssignment
     */
    omit?: InstrumentAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which InstrumentAssignments to fetch.
     */
    where?: InstrumentAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstrumentAssignments to fetch.
     */
    orderBy?: InstrumentAssignmentOrderByWithRelationInput | InstrumentAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InstrumentAssignments.
     */
    cursor?: InstrumentAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstrumentAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstrumentAssignments.
     */
    skip?: number
    distinct?: InstrumentAssignmentScalarFieldEnum | InstrumentAssignmentScalarFieldEnum[]
  }

  /**
   * InstrumentAssignment create
   */
  export type InstrumentAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstrumentAssignment
     */
    select?: InstrumentAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstrumentAssignment
     */
    omit?: InstrumentAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a InstrumentAssignment.
     */
    data: XOR<InstrumentAssignmentCreateInput, InstrumentAssignmentUncheckedCreateInput>
  }

  /**
   * InstrumentAssignment createMany
   */
  export type InstrumentAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InstrumentAssignments.
     */
    data: InstrumentAssignmentCreateManyInput | InstrumentAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InstrumentAssignment createManyAndReturn
   */
  export type InstrumentAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstrumentAssignment
     */
    select?: InstrumentAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InstrumentAssignment
     */
    omit?: InstrumentAssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many InstrumentAssignments.
     */
    data: InstrumentAssignmentCreateManyInput | InstrumentAssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InstrumentAssignment update
   */
  export type InstrumentAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstrumentAssignment
     */
    select?: InstrumentAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstrumentAssignment
     */
    omit?: InstrumentAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a InstrumentAssignment.
     */
    data: XOR<InstrumentAssignmentUpdateInput, InstrumentAssignmentUncheckedUpdateInput>
    /**
     * Choose, which InstrumentAssignment to update.
     */
    where: InstrumentAssignmentWhereUniqueInput
  }

  /**
   * InstrumentAssignment updateMany
   */
  export type InstrumentAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InstrumentAssignments.
     */
    data: XOR<InstrumentAssignmentUpdateManyMutationInput, InstrumentAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which InstrumentAssignments to update
     */
    where?: InstrumentAssignmentWhereInput
    /**
     * Limit how many InstrumentAssignments to update.
     */
    limit?: number
  }

  /**
   * InstrumentAssignment updateManyAndReturn
   */
  export type InstrumentAssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstrumentAssignment
     */
    select?: InstrumentAssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InstrumentAssignment
     */
    omit?: InstrumentAssignmentOmit<ExtArgs> | null
    /**
     * The data used to update InstrumentAssignments.
     */
    data: XOR<InstrumentAssignmentUpdateManyMutationInput, InstrumentAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which InstrumentAssignments to update
     */
    where?: InstrumentAssignmentWhereInput
    /**
     * Limit how many InstrumentAssignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InstrumentAssignment upsert
   */
  export type InstrumentAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstrumentAssignment
     */
    select?: InstrumentAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstrumentAssignment
     */
    omit?: InstrumentAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the InstrumentAssignment to update in case it exists.
     */
    where: InstrumentAssignmentWhereUniqueInput
    /**
     * In case the InstrumentAssignment found by the `where` argument doesn't exist, create a new InstrumentAssignment with this data.
     */
    create: XOR<InstrumentAssignmentCreateInput, InstrumentAssignmentUncheckedCreateInput>
    /**
     * In case the InstrumentAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstrumentAssignmentUpdateInput, InstrumentAssignmentUncheckedUpdateInput>
  }

  /**
   * InstrumentAssignment delete
   */
  export type InstrumentAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstrumentAssignment
     */
    select?: InstrumentAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstrumentAssignment
     */
    omit?: InstrumentAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentAssignmentInclude<ExtArgs> | null
    /**
     * Filter which InstrumentAssignment to delete.
     */
    where: InstrumentAssignmentWhereUniqueInput
  }

  /**
   * InstrumentAssignment deleteMany
   */
  export type InstrumentAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstrumentAssignments to delete
     */
    where?: InstrumentAssignmentWhereInput
    /**
     * Limit how many InstrumentAssignments to delete.
     */
    limit?: number
  }

  /**
   * InstrumentAssignment without action
   */
  export type InstrumentAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstrumentAssignment
     */
    select?: InstrumentAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstrumentAssignment
     */
    omit?: InstrumentAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentAssignmentInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    action: string | null
    details: string | null
    entityType: string | null
    entityId: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    action: string | null
    details: string | null
    entityType: string | null
    entityId: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    action: number
    details: number
    entityType: number
    entityId: number
    createdAt: number
    userId: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    action?: true
    details?: true
    entityType?: true
    entityId?: true
    createdAt?: true
    userId?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    action?: true
    details?: true
    entityType?: true
    entityId?: true
    createdAt?: true
    userId?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    action?: true
    details?: true
    entityType?: true
    entityId?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    action: string
    details: string
    entityType: string
    entityId: string
    createdAt: Date
    userId: string
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    details?: boolean
    entityType?: boolean
    entityId?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    details?: boolean
    entityType?: boolean
    entityId?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    details?: boolean
    entityType?: boolean
    entityId?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    action?: boolean
    details?: boolean
    entityType?: boolean
    entityId?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "action" | "details" | "entityType" | "entityId" | "createdAt" | "userId", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      action: string
      details: string
      entityType: string
      entityId: string
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly details: FieldRef<"AuditLog", 'String'>
    readonly entityType: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
    readonly userId: FieldRef<"AuditLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Model EmailLog
   */

  export type AggregateEmailLog = {
    _count: EmailLogCountAggregateOutputType | null
    _avg: EmailLogAvgAggregateOutputType | null
    _sum: EmailLogSumAggregateOutputType | null
    _min: EmailLogMinAggregateOutputType | null
    _max: EmailLogMaxAggregateOutputType | null
  }

  export type EmailLogAvgAggregateOutputType = {
    retryCount: number | null
  }

  export type EmailLogSumAggregateOutputType = {
    retryCount: number | null
  }

  export type EmailLogMinAggregateOutputType = {
    id: string | null
    to: string | null
    subject: string | null
    body: string | null
    status: $Enums.EmailStatus | null
    retryCount: number | null
    sentAt: Date | null
    failedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmailLogMaxAggregateOutputType = {
    id: string | null
    to: string | null
    subject: string | null
    body: string | null
    status: $Enums.EmailStatus | null
    retryCount: number | null
    sentAt: Date | null
    failedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmailLogCountAggregateOutputType = {
    id: number
    to: number
    subject: number
    body: number
    status: number
    retryCount: number
    sentAt: number
    failedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmailLogAvgAggregateInputType = {
    retryCount?: true
  }

  export type EmailLogSumAggregateInputType = {
    retryCount?: true
  }

  export type EmailLogMinAggregateInputType = {
    id?: true
    to?: true
    subject?: true
    body?: true
    status?: true
    retryCount?: true
    sentAt?: true
    failedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmailLogMaxAggregateInputType = {
    id?: true
    to?: true
    subject?: true
    body?: true
    status?: true
    retryCount?: true
    sentAt?: true
    failedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmailLogCountAggregateInputType = {
    id?: true
    to?: true
    subject?: true
    body?: true
    status?: true
    retryCount?: true
    sentAt?: true
    failedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmailLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailLog to aggregate.
     */
    where?: EmailLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailLogs to fetch.
     */
    orderBy?: EmailLogOrderByWithRelationInput | EmailLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailLogs
    **/
    _count?: true | EmailLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmailLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmailLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailLogMaxAggregateInputType
  }

  export type GetEmailLogAggregateType<T extends EmailLogAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailLog[P]>
      : GetScalarType<T[P], AggregateEmailLog[P]>
  }




  export type EmailLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailLogWhereInput
    orderBy?: EmailLogOrderByWithAggregationInput | EmailLogOrderByWithAggregationInput[]
    by: EmailLogScalarFieldEnum[] | EmailLogScalarFieldEnum
    having?: EmailLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailLogCountAggregateInputType | true
    _avg?: EmailLogAvgAggregateInputType
    _sum?: EmailLogSumAggregateInputType
    _min?: EmailLogMinAggregateInputType
    _max?: EmailLogMaxAggregateInputType
  }

  export type EmailLogGroupByOutputType = {
    id: string
    to: string
    subject: string
    body: string
    status: $Enums.EmailStatus
    retryCount: number
    sentAt: Date | null
    failedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: EmailLogCountAggregateOutputType | null
    _avg: EmailLogAvgAggregateOutputType | null
    _sum: EmailLogSumAggregateOutputType | null
    _min: EmailLogMinAggregateOutputType | null
    _max: EmailLogMaxAggregateOutputType | null
  }

  type GetEmailLogGroupByPayload<T extends EmailLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailLogGroupByOutputType[P]>
            : GetScalarType<T[P], EmailLogGroupByOutputType[P]>
        }
      >
    >


  export type EmailLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    to?: boolean
    subject?: boolean
    body?: boolean
    status?: boolean
    retryCount?: boolean
    sentAt?: boolean
    failedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["emailLog"]>

  export type EmailLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    to?: boolean
    subject?: boolean
    body?: boolean
    status?: boolean
    retryCount?: boolean
    sentAt?: boolean
    failedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["emailLog"]>

  export type EmailLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    to?: boolean
    subject?: boolean
    body?: boolean
    status?: boolean
    retryCount?: boolean
    sentAt?: boolean
    failedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["emailLog"]>

  export type EmailLogSelectScalar = {
    id?: boolean
    to?: boolean
    subject?: boolean
    body?: boolean
    status?: boolean
    retryCount?: boolean
    sentAt?: boolean
    failedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmailLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "to" | "subject" | "body" | "status" | "retryCount" | "sentAt" | "failedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["emailLog"]>

  export type $EmailLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      to: string
      subject: string
      body: string
      status: $Enums.EmailStatus
      retryCount: number
      sentAt: Date | null
      failedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["emailLog"]>
    composites: {}
  }

  type EmailLogGetPayload<S extends boolean | null | undefined | EmailLogDefaultArgs> = $Result.GetResult<Prisma.$EmailLogPayload, S>

  type EmailLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailLogCountAggregateInputType | true
    }

  export interface EmailLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailLog'], meta: { name: 'EmailLog' } }
    /**
     * Find zero or one EmailLog that matches the filter.
     * @param {EmailLogFindUniqueArgs} args - Arguments to find a EmailLog
     * @example
     * // Get one EmailLog
     * const emailLog = await prisma.emailLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailLogFindUniqueArgs>(args: SelectSubset<T, EmailLogFindUniqueArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailLogFindUniqueOrThrowArgs} args - Arguments to find a EmailLog
     * @example
     * // Get one EmailLog
     * const emailLog = await prisma.emailLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailLogFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailLogFindFirstArgs} args - Arguments to find a EmailLog
     * @example
     * // Get one EmailLog
     * const emailLog = await prisma.emailLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailLogFindFirstArgs>(args?: SelectSubset<T, EmailLogFindFirstArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailLogFindFirstOrThrowArgs} args - Arguments to find a EmailLog
     * @example
     * // Get one EmailLog
     * const emailLog = await prisma.emailLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailLogFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailLogs
     * const emailLogs = await prisma.emailLog.findMany()
     * 
     * // Get first 10 EmailLogs
     * const emailLogs = await prisma.emailLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailLogWithIdOnly = await prisma.emailLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailLogFindManyArgs>(args?: SelectSubset<T, EmailLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailLog.
     * @param {EmailLogCreateArgs} args - Arguments to create a EmailLog.
     * @example
     * // Create one EmailLog
     * const EmailLog = await prisma.emailLog.create({
     *   data: {
     *     // ... data to create a EmailLog
     *   }
     * })
     * 
     */
    create<T extends EmailLogCreateArgs>(args: SelectSubset<T, EmailLogCreateArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailLogs.
     * @param {EmailLogCreateManyArgs} args - Arguments to create many EmailLogs.
     * @example
     * // Create many EmailLogs
     * const emailLog = await prisma.emailLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailLogCreateManyArgs>(args?: SelectSubset<T, EmailLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailLogs and returns the data saved in the database.
     * @param {EmailLogCreateManyAndReturnArgs} args - Arguments to create many EmailLogs.
     * @example
     * // Create many EmailLogs
     * const emailLog = await prisma.emailLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailLogs and only return the `id`
     * const emailLogWithIdOnly = await prisma.emailLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailLogCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailLog.
     * @param {EmailLogDeleteArgs} args - Arguments to delete one EmailLog.
     * @example
     * // Delete one EmailLog
     * const EmailLog = await prisma.emailLog.delete({
     *   where: {
     *     // ... filter to delete one EmailLog
     *   }
     * })
     * 
     */
    delete<T extends EmailLogDeleteArgs>(args: SelectSubset<T, EmailLogDeleteArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailLog.
     * @param {EmailLogUpdateArgs} args - Arguments to update one EmailLog.
     * @example
     * // Update one EmailLog
     * const emailLog = await prisma.emailLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailLogUpdateArgs>(args: SelectSubset<T, EmailLogUpdateArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailLogs.
     * @param {EmailLogDeleteManyArgs} args - Arguments to filter EmailLogs to delete.
     * @example
     * // Delete a few EmailLogs
     * const { count } = await prisma.emailLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailLogDeleteManyArgs>(args?: SelectSubset<T, EmailLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailLogs
     * const emailLog = await prisma.emailLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailLogUpdateManyArgs>(args: SelectSubset<T, EmailLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailLogs and returns the data updated in the database.
     * @param {EmailLogUpdateManyAndReturnArgs} args - Arguments to update many EmailLogs.
     * @example
     * // Update many EmailLogs
     * const emailLog = await prisma.emailLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailLogs and only return the `id`
     * const emailLogWithIdOnly = await prisma.emailLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmailLogUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailLog.
     * @param {EmailLogUpsertArgs} args - Arguments to update or create a EmailLog.
     * @example
     * // Update or create a EmailLog
     * const emailLog = await prisma.emailLog.upsert({
     *   create: {
     *     // ... data to create a EmailLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailLog we want to update
     *   }
     * })
     */
    upsert<T extends EmailLogUpsertArgs>(args: SelectSubset<T, EmailLogUpsertArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailLogCountArgs} args - Arguments to filter EmailLogs to count.
     * @example
     * // Count the number of EmailLogs
     * const count = await prisma.emailLog.count({
     *   where: {
     *     // ... the filter for the EmailLogs we want to count
     *   }
     * })
    **/
    count<T extends EmailLogCountArgs>(
      args?: Subset<T, EmailLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailLogAggregateArgs>(args: Subset<T, EmailLogAggregateArgs>): Prisma.PrismaPromise<GetEmailLogAggregateType<T>>

    /**
     * Group by EmailLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailLogGroupByArgs} args - Group by arguments.
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
      T extends EmailLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailLogGroupByArgs['orderBy'] }
        : { orderBy?: EmailLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, EmailLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailLog model
   */
  readonly fields: EmailLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmailLog model
   */
  interface EmailLogFieldRefs {
    readonly id: FieldRef<"EmailLog", 'String'>
    readonly to: FieldRef<"EmailLog", 'String'>
    readonly subject: FieldRef<"EmailLog", 'String'>
    readonly body: FieldRef<"EmailLog", 'String'>
    readonly status: FieldRef<"EmailLog", 'EmailStatus'>
    readonly retryCount: FieldRef<"EmailLog", 'Int'>
    readonly sentAt: FieldRef<"EmailLog", 'DateTime'>
    readonly failedAt: FieldRef<"EmailLog", 'DateTime'>
    readonly createdAt: FieldRef<"EmailLog", 'DateTime'>
    readonly updatedAt: FieldRef<"EmailLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmailLog findUnique
   */
  export type EmailLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * Filter, which EmailLog to fetch.
     */
    where: EmailLogWhereUniqueInput
  }

  /**
   * EmailLog findUniqueOrThrow
   */
  export type EmailLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * Filter, which EmailLog to fetch.
     */
    where: EmailLogWhereUniqueInput
  }

  /**
   * EmailLog findFirst
   */
  export type EmailLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * Filter, which EmailLog to fetch.
     */
    where?: EmailLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailLogs to fetch.
     */
    orderBy?: EmailLogOrderByWithRelationInput | EmailLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailLogs.
     */
    cursor?: EmailLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailLogs.
     */
    distinct?: EmailLogScalarFieldEnum | EmailLogScalarFieldEnum[]
  }

  /**
   * EmailLog findFirstOrThrow
   */
  export type EmailLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * Filter, which EmailLog to fetch.
     */
    where?: EmailLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailLogs to fetch.
     */
    orderBy?: EmailLogOrderByWithRelationInput | EmailLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailLogs.
     */
    cursor?: EmailLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailLogs.
     */
    distinct?: EmailLogScalarFieldEnum | EmailLogScalarFieldEnum[]
  }

  /**
   * EmailLog findMany
   */
  export type EmailLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * Filter, which EmailLogs to fetch.
     */
    where?: EmailLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailLogs to fetch.
     */
    orderBy?: EmailLogOrderByWithRelationInput | EmailLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailLogs.
     */
    cursor?: EmailLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailLogs.
     */
    skip?: number
    distinct?: EmailLogScalarFieldEnum | EmailLogScalarFieldEnum[]
  }

  /**
   * EmailLog create
   */
  export type EmailLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * The data needed to create a EmailLog.
     */
    data: XOR<EmailLogCreateInput, EmailLogUncheckedCreateInput>
  }

  /**
   * EmailLog createMany
   */
  export type EmailLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailLogs.
     */
    data: EmailLogCreateManyInput | EmailLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailLog createManyAndReturn
   */
  export type EmailLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * The data used to create many EmailLogs.
     */
    data: EmailLogCreateManyInput | EmailLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailLog update
   */
  export type EmailLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * The data needed to update a EmailLog.
     */
    data: XOR<EmailLogUpdateInput, EmailLogUncheckedUpdateInput>
    /**
     * Choose, which EmailLog to update.
     */
    where: EmailLogWhereUniqueInput
  }

  /**
   * EmailLog updateMany
   */
  export type EmailLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailLogs.
     */
    data: XOR<EmailLogUpdateManyMutationInput, EmailLogUncheckedUpdateManyInput>
    /**
     * Filter which EmailLogs to update
     */
    where?: EmailLogWhereInput
    /**
     * Limit how many EmailLogs to update.
     */
    limit?: number
  }

  /**
   * EmailLog updateManyAndReturn
   */
  export type EmailLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * The data used to update EmailLogs.
     */
    data: XOR<EmailLogUpdateManyMutationInput, EmailLogUncheckedUpdateManyInput>
    /**
     * Filter which EmailLogs to update
     */
    where?: EmailLogWhereInput
    /**
     * Limit how many EmailLogs to update.
     */
    limit?: number
  }

  /**
   * EmailLog upsert
   */
  export type EmailLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * The filter to search for the EmailLog to update in case it exists.
     */
    where: EmailLogWhereUniqueInput
    /**
     * In case the EmailLog found by the `where` argument doesn't exist, create a new EmailLog with this data.
     */
    create: XOR<EmailLogCreateInput, EmailLogUncheckedCreateInput>
    /**
     * In case the EmailLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailLogUpdateInput, EmailLogUncheckedUpdateInput>
  }

  /**
   * EmailLog delete
   */
  export type EmailLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * Filter which EmailLog to delete.
     */
    where: EmailLogWhereUniqueInput
  }

  /**
   * EmailLog deleteMany
   */
  export type EmailLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailLogs to delete
     */
    where?: EmailLogWhereInput
    /**
     * Limit how many EmailLogs to delete.
     */
    limit?: number
  }

  /**
   * EmailLog without action
   */
  export type EmailLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    role: 'role',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ApplicationScalarFieldEnum: {
    id: 'id',
    message: 'message',
    instrumentPreference: 'instrumentPreference',
    status: 'status',
    token: 'token',
    tokenExpiresAt: 'tokenExpiresAt',
    tokenRevoked: 'tokenRevoked',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    reviewedById: 'reviewedById'
  };

  export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum]


  export const InstrumentScalarFieldEnum: {
    id: 'id',
    type: 'type',
    brand: 'brand',
    condition: 'condition',
    status: 'status',
    donorName: 'donorName',
    donorEmail: 'donorEmail',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InstrumentScalarFieldEnum = (typeof InstrumentScalarFieldEnum)[keyof typeof InstrumentScalarFieldEnum]


  export const InstrumentAssignmentScalarFieldEnum: {
    id: 'id',
    status: 'status',
    assignedAt: 'assignedAt',
    revokedAt: 'revokedAt',
    notes: 'notes',
    instrumentId: 'instrumentId',
    applicationId: 'applicationId'
  };

  export type InstrumentAssignmentScalarFieldEnum = (typeof InstrumentAssignmentScalarFieldEnum)[keyof typeof InstrumentAssignmentScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    action: 'action',
    details: 'details',
    entityType: 'entityType',
    entityId: 'entityId',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const EmailLogScalarFieldEnum: {
    id: 'id',
    to: 'to',
    subject: 'subject',
    body: 'body',
    status: 'status',
    retryCount: 'retryCount',
    sentAt: 'sentAt',
    failedAt: 'failedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmailLogScalarFieldEnum = (typeof EmailLogScalarFieldEnum)[keyof typeof EmailLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ApplicationStatus'
   */
  export type EnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus'>
    


  /**
   * Reference to a field of type 'ApplicationStatus[]'
   */
  export type ListEnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'InstrumentCondition'
   */
  export type EnumInstrumentConditionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InstrumentCondition'>
    


  /**
   * Reference to a field of type 'InstrumentCondition[]'
   */
  export type ListEnumInstrumentConditionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InstrumentCondition[]'>
    


  /**
   * Reference to a field of type 'InstrumentStatus'
   */
  export type EnumInstrumentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InstrumentStatus'>
    


  /**
   * Reference to a field of type 'InstrumentStatus[]'
   */
  export type ListEnumInstrumentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InstrumentStatus[]'>
    


  /**
   * Reference to a field of type 'AssignmentStatus'
   */
  export type EnumAssignmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssignmentStatus'>
    


  /**
   * Reference to a field of type 'AssignmentStatus[]'
   */
  export type ListEnumAssignmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssignmentStatus[]'>
    


  /**
   * Reference to a field of type 'EmailStatus'
   */
  export type EnumEmailStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmailStatus'>
    


  /**
   * Reference to a field of type 'EmailStatus[]'
   */
  export type ListEnumEmailStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmailStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    reviewedApplications?: ApplicationListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    reviewedApplications?: ApplicationOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    reviewedApplications?: ApplicationListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type ApplicationWhereInput = {
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    id?: StringFilter<"Application"> | string
    message?: StringFilter<"Application"> | string
    instrumentPreference?: StringFilter<"Application"> | string
    status?: EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus
    token?: StringFilter<"Application"> | string
    tokenExpiresAt?: DateTimeFilter<"Application"> | Date | string
    tokenRevoked?: BoolFilter<"Application"> | boolean
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
    reviewedById?: StringNullableFilter<"Application"> | string | null
    reviewedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    instrumentAssignments?: InstrumentAssignmentListRelationFilter
  }

  export type ApplicationOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    instrumentPreference?: SortOrder
    status?: SortOrder
    token?: SortOrder
    tokenExpiresAt?: SortOrder
    tokenRevoked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviewedById?: SortOrderInput | SortOrder
    reviewedBy?: UserOrderByWithRelationInput
    instrumentAssignments?: InstrumentAssignmentOrderByRelationAggregateInput
  }

  export type ApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    message?: StringFilter<"Application"> | string
    instrumentPreference?: StringFilter<"Application"> | string
    status?: EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus
    tokenExpiresAt?: DateTimeFilter<"Application"> | Date | string
    tokenRevoked?: BoolFilter<"Application"> | boolean
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
    reviewedById?: StringNullableFilter<"Application"> | string | null
    reviewedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    instrumentAssignments?: InstrumentAssignmentListRelationFilter
  }, "id" | "token">

  export type ApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    instrumentPreference?: SortOrder
    status?: SortOrder
    token?: SortOrder
    tokenExpiresAt?: SortOrder
    tokenRevoked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviewedById?: SortOrderInput | SortOrder
    _count?: ApplicationCountOrderByAggregateInput
    _max?: ApplicationMaxOrderByAggregateInput
    _min?: ApplicationMinOrderByAggregateInput
  }

  export type ApplicationScalarWhereWithAggregatesInput = {
    AND?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    OR?: ApplicationScalarWhereWithAggregatesInput[]
    NOT?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Application"> | string
    message?: StringWithAggregatesFilter<"Application"> | string
    instrumentPreference?: StringWithAggregatesFilter<"Application"> | string
    status?: EnumApplicationStatusWithAggregatesFilter<"Application"> | $Enums.ApplicationStatus
    token?: StringWithAggregatesFilter<"Application"> | string
    tokenExpiresAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string
    tokenRevoked?: BoolWithAggregatesFilter<"Application"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string
    reviewedById?: StringNullableWithAggregatesFilter<"Application"> | string | null
  }

  export type InstrumentWhereInput = {
    AND?: InstrumentWhereInput | InstrumentWhereInput[]
    OR?: InstrumentWhereInput[]
    NOT?: InstrumentWhereInput | InstrumentWhereInput[]
    id?: StringFilter<"Instrument"> | string
    type?: StringFilter<"Instrument"> | string
    brand?: StringFilter<"Instrument"> | string
    condition?: EnumInstrumentConditionFilter<"Instrument"> | $Enums.InstrumentCondition
    status?: EnumInstrumentStatusFilter<"Instrument"> | $Enums.InstrumentStatus
    donorName?: StringNullableFilter<"Instrument"> | string | null
    donorEmail?: StringNullableFilter<"Instrument"> | string | null
    createdAt?: DateTimeFilter<"Instrument"> | Date | string
    updatedAt?: DateTimeFilter<"Instrument"> | Date | string
    assignments?: InstrumentAssignmentListRelationFilter
  }

  export type InstrumentOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    brand?: SortOrder
    condition?: SortOrder
    status?: SortOrder
    donorName?: SortOrderInput | SortOrder
    donorEmail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assignments?: InstrumentAssignmentOrderByRelationAggregateInput
  }

  export type InstrumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InstrumentWhereInput | InstrumentWhereInput[]
    OR?: InstrumentWhereInput[]
    NOT?: InstrumentWhereInput | InstrumentWhereInput[]
    type?: StringFilter<"Instrument"> | string
    brand?: StringFilter<"Instrument"> | string
    condition?: EnumInstrumentConditionFilter<"Instrument"> | $Enums.InstrumentCondition
    status?: EnumInstrumentStatusFilter<"Instrument"> | $Enums.InstrumentStatus
    donorName?: StringNullableFilter<"Instrument"> | string | null
    donorEmail?: StringNullableFilter<"Instrument"> | string | null
    createdAt?: DateTimeFilter<"Instrument"> | Date | string
    updatedAt?: DateTimeFilter<"Instrument"> | Date | string
    assignments?: InstrumentAssignmentListRelationFilter
  }, "id">

  export type InstrumentOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    brand?: SortOrder
    condition?: SortOrder
    status?: SortOrder
    donorName?: SortOrderInput | SortOrder
    donorEmail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InstrumentCountOrderByAggregateInput
    _max?: InstrumentMaxOrderByAggregateInput
    _min?: InstrumentMinOrderByAggregateInput
  }

  export type InstrumentScalarWhereWithAggregatesInput = {
    AND?: InstrumentScalarWhereWithAggregatesInput | InstrumentScalarWhereWithAggregatesInput[]
    OR?: InstrumentScalarWhereWithAggregatesInput[]
    NOT?: InstrumentScalarWhereWithAggregatesInput | InstrumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Instrument"> | string
    type?: StringWithAggregatesFilter<"Instrument"> | string
    brand?: StringWithAggregatesFilter<"Instrument"> | string
    condition?: EnumInstrumentConditionWithAggregatesFilter<"Instrument"> | $Enums.InstrumentCondition
    status?: EnumInstrumentStatusWithAggregatesFilter<"Instrument"> | $Enums.InstrumentStatus
    donorName?: StringNullableWithAggregatesFilter<"Instrument"> | string | null
    donorEmail?: StringNullableWithAggregatesFilter<"Instrument"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Instrument"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Instrument"> | Date | string
  }

  export type InstrumentAssignmentWhereInput = {
    AND?: InstrumentAssignmentWhereInput | InstrumentAssignmentWhereInput[]
    OR?: InstrumentAssignmentWhereInput[]
    NOT?: InstrumentAssignmentWhereInput | InstrumentAssignmentWhereInput[]
    id?: StringFilter<"InstrumentAssignment"> | string
    status?: EnumAssignmentStatusFilter<"InstrumentAssignment"> | $Enums.AssignmentStatus
    assignedAt?: DateTimeFilter<"InstrumentAssignment"> | Date | string
    revokedAt?: DateTimeNullableFilter<"InstrumentAssignment"> | Date | string | null
    notes?: StringNullableFilter<"InstrumentAssignment"> | string | null
    instrumentId?: StringFilter<"InstrumentAssignment"> | string
    applicationId?: StringFilter<"InstrumentAssignment"> | string
    instrument?: XOR<InstrumentScalarRelationFilter, InstrumentWhereInput>
    application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>
  }

  export type InstrumentAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    assignedAt?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    instrumentId?: SortOrder
    applicationId?: SortOrder
    instrument?: InstrumentOrderByWithRelationInput
    application?: ApplicationOrderByWithRelationInput
  }

  export type InstrumentAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InstrumentAssignmentWhereInput | InstrumentAssignmentWhereInput[]
    OR?: InstrumentAssignmentWhereInput[]
    NOT?: InstrumentAssignmentWhereInput | InstrumentAssignmentWhereInput[]
    status?: EnumAssignmentStatusFilter<"InstrumentAssignment"> | $Enums.AssignmentStatus
    assignedAt?: DateTimeFilter<"InstrumentAssignment"> | Date | string
    revokedAt?: DateTimeNullableFilter<"InstrumentAssignment"> | Date | string | null
    notes?: StringNullableFilter<"InstrumentAssignment"> | string | null
    instrumentId?: StringFilter<"InstrumentAssignment"> | string
    applicationId?: StringFilter<"InstrumentAssignment"> | string
    instrument?: XOR<InstrumentScalarRelationFilter, InstrumentWhereInput>
    application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>
  }, "id">

  export type InstrumentAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    assignedAt?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    instrumentId?: SortOrder
    applicationId?: SortOrder
    _count?: InstrumentAssignmentCountOrderByAggregateInput
    _max?: InstrumentAssignmentMaxOrderByAggregateInput
    _min?: InstrumentAssignmentMinOrderByAggregateInput
  }

  export type InstrumentAssignmentScalarWhereWithAggregatesInput = {
    AND?: InstrumentAssignmentScalarWhereWithAggregatesInput | InstrumentAssignmentScalarWhereWithAggregatesInput[]
    OR?: InstrumentAssignmentScalarWhereWithAggregatesInput[]
    NOT?: InstrumentAssignmentScalarWhereWithAggregatesInput | InstrumentAssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InstrumentAssignment"> | string
    status?: EnumAssignmentStatusWithAggregatesFilter<"InstrumentAssignment"> | $Enums.AssignmentStatus
    assignedAt?: DateTimeWithAggregatesFilter<"InstrumentAssignment"> | Date | string
    revokedAt?: DateTimeNullableWithAggregatesFilter<"InstrumentAssignment"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"InstrumentAssignment"> | string | null
    instrumentId?: StringWithAggregatesFilter<"InstrumentAssignment"> | string
    applicationId?: StringWithAggregatesFilter<"InstrumentAssignment"> | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    details?: StringFilter<"AuditLog"> | string
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    userId?: StringFilter<"AuditLog"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    details?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    action?: StringFilter<"AuditLog"> | string
    details?: StringFilter<"AuditLog"> | string
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    userId?: StringFilter<"AuditLog"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    details?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    details?: StringWithAggregatesFilter<"AuditLog"> | string
    entityType?: StringWithAggregatesFilter<"AuditLog"> | string
    entityId?: StringWithAggregatesFilter<"AuditLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
    userId?: StringWithAggregatesFilter<"AuditLog"> | string
  }

  export type EmailLogWhereInput = {
    AND?: EmailLogWhereInput | EmailLogWhereInput[]
    OR?: EmailLogWhereInput[]
    NOT?: EmailLogWhereInput | EmailLogWhereInput[]
    id?: StringFilter<"EmailLog"> | string
    to?: StringFilter<"EmailLog"> | string
    subject?: StringFilter<"EmailLog"> | string
    body?: StringFilter<"EmailLog"> | string
    status?: EnumEmailStatusFilter<"EmailLog"> | $Enums.EmailStatus
    retryCount?: IntFilter<"EmailLog"> | number
    sentAt?: DateTimeNullableFilter<"EmailLog"> | Date | string | null
    failedAt?: DateTimeNullableFilter<"EmailLog"> | Date | string | null
    createdAt?: DateTimeFilter<"EmailLog"> | Date | string
    updatedAt?: DateTimeFilter<"EmailLog"> | Date | string
  }

  export type EmailLogOrderByWithRelationInput = {
    id?: SortOrder
    to?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    status?: SortOrder
    retryCount?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    failedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmailLogWhereInput | EmailLogWhereInput[]
    OR?: EmailLogWhereInput[]
    NOT?: EmailLogWhereInput | EmailLogWhereInput[]
    to?: StringFilter<"EmailLog"> | string
    subject?: StringFilter<"EmailLog"> | string
    body?: StringFilter<"EmailLog"> | string
    status?: EnumEmailStatusFilter<"EmailLog"> | $Enums.EmailStatus
    retryCount?: IntFilter<"EmailLog"> | number
    sentAt?: DateTimeNullableFilter<"EmailLog"> | Date | string | null
    failedAt?: DateTimeNullableFilter<"EmailLog"> | Date | string | null
    createdAt?: DateTimeFilter<"EmailLog"> | Date | string
    updatedAt?: DateTimeFilter<"EmailLog"> | Date | string
  }, "id">

  export type EmailLogOrderByWithAggregationInput = {
    id?: SortOrder
    to?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    status?: SortOrder
    retryCount?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    failedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmailLogCountOrderByAggregateInput
    _avg?: EmailLogAvgOrderByAggregateInput
    _max?: EmailLogMaxOrderByAggregateInput
    _min?: EmailLogMinOrderByAggregateInput
    _sum?: EmailLogSumOrderByAggregateInput
  }

  export type EmailLogScalarWhereWithAggregatesInput = {
    AND?: EmailLogScalarWhereWithAggregatesInput | EmailLogScalarWhereWithAggregatesInput[]
    OR?: EmailLogScalarWhereWithAggregatesInput[]
    NOT?: EmailLogScalarWhereWithAggregatesInput | EmailLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmailLog"> | string
    to?: StringWithAggregatesFilter<"EmailLog"> | string
    subject?: StringWithAggregatesFilter<"EmailLog"> | string
    body?: StringWithAggregatesFilter<"EmailLog"> | string
    status?: EnumEmailStatusWithAggregatesFilter<"EmailLog"> | $Enums.EmailStatus
    retryCount?: IntWithAggregatesFilter<"EmailLog"> | number
    sentAt?: DateTimeNullableWithAggregatesFilter<"EmailLog"> | Date | string | null
    failedAt?: DateTimeNullableWithAggregatesFilter<"EmailLog"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EmailLog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EmailLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    reviewedApplications?: ApplicationCreateNestedManyWithoutReviewedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    reviewedApplications?: ApplicationUncheckedCreateNestedManyWithoutReviewedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedApplications?: ApplicationUpdateManyWithoutReviewedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedApplications?: ApplicationUncheckedUpdateManyWithoutReviewedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApplicationCreateInput = {
    id?: string
    message: string
    instrumentPreference: string
    status?: $Enums.ApplicationStatus
    token: string
    tokenExpiresAt: Date | string
    tokenRevoked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewedBy?: UserCreateNestedOneWithoutReviewedApplicationsInput
    instrumentAssignments?: InstrumentAssignmentCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateInput = {
    id?: string
    message: string
    instrumentPreference: string
    status?: $Enums.ApplicationStatus
    token: string
    tokenExpiresAt: Date | string
    tokenRevoked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewedById?: string | null
    instrumentAssignments?: InstrumentAssignmentUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    instrumentPreference?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    token?: StringFieldUpdateOperationsInput | string
    tokenExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokenRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedBy?: UserUpdateOneWithoutReviewedApplicationsNestedInput
    instrumentAssignments?: InstrumentAssignmentUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    instrumentPreference?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    token?: StringFieldUpdateOperationsInput | string
    tokenExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokenRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedById?: NullableStringFieldUpdateOperationsInput | string | null
    instrumentAssignments?: InstrumentAssignmentUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationCreateManyInput = {
    id?: string
    message: string
    instrumentPreference: string
    status?: $Enums.ApplicationStatus
    token: string
    tokenExpiresAt: Date | string
    tokenRevoked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewedById?: string | null
  }

  export type ApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    instrumentPreference?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    token?: StringFieldUpdateOperationsInput | string
    tokenExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokenRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    instrumentPreference?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    token?: StringFieldUpdateOperationsInput | string
    tokenExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokenRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InstrumentCreateInput = {
    id?: string
    type: string
    brand: string
    condition: $Enums.InstrumentCondition
    status?: $Enums.InstrumentStatus
    donorName?: string | null
    donorEmail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: InstrumentAssignmentCreateNestedManyWithoutInstrumentInput
  }

  export type InstrumentUncheckedCreateInput = {
    id?: string
    type: string
    brand: string
    condition: $Enums.InstrumentCondition
    status?: $Enums.InstrumentStatus
    donorName?: string | null
    donorEmail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: InstrumentAssignmentUncheckedCreateNestedManyWithoutInstrumentInput
  }

  export type InstrumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    condition?: EnumInstrumentConditionFieldUpdateOperationsInput | $Enums.InstrumentCondition
    status?: EnumInstrumentStatusFieldUpdateOperationsInput | $Enums.InstrumentStatus
    donorName?: NullableStringFieldUpdateOperationsInput | string | null
    donorEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: InstrumentAssignmentUpdateManyWithoutInstrumentNestedInput
  }

  export type InstrumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    condition?: EnumInstrumentConditionFieldUpdateOperationsInput | $Enums.InstrumentCondition
    status?: EnumInstrumentStatusFieldUpdateOperationsInput | $Enums.InstrumentStatus
    donorName?: NullableStringFieldUpdateOperationsInput | string | null
    donorEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: InstrumentAssignmentUncheckedUpdateManyWithoutInstrumentNestedInput
  }

  export type InstrumentCreateManyInput = {
    id?: string
    type: string
    brand: string
    condition: $Enums.InstrumentCondition
    status?: $Enums.InstrumentStatus
    donorName?: string | null
    donorEmail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstrumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    condition?: EnumInstrumentConditionFieldUpdateOperationsInput | $Enums.InstrumentCondition
    status?: EnumInstrumentStatusFieldUpdateOperationsInput | $Enums.InstrumentStatus
    donorName?: NullableStringFieldUpdateOperationsInput | string | null
    donorEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstrumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    condition?: EnumInstrumentConditionFieldUpdateOperationsInput | $Enums.InstrumentCondition
    status?: EnumInstrumentStatusFieldUpdateOperationsInput | $Enums.InstrumentStatus
    donorName?: NullableStringFieldUpdateOperationsInput | string | null
    donorEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstrumentAssignmentCreateInput = {
    id?: string
    status?: $Enums.AssignmentStatus
    assignedAt?: Date | string
    revokedAt?: Date | string | null
    notes?: string | null
    instrument: InstrumentCreateNestedOneWithoutAssignmentsInput
    application: ApplicationCreateNestedOneWithoutInstrumentAssignmentsInput
  }

  export type InstrumentAssignmentUncheckedCreateInput = {
    id?: string
    status?: $Enums.AssignmentStatus
    assignedAt?: Date | string
    revokedAt?: Date | string | null
    notes?: string | null
    instrumentId: string
    applicationId: string
  }

  export type InstrumentAssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    instrument?: InstrumentUpdateOneRequiredWithoutAssignmentsNestedInput
    application?: ApplicationUpdateOneRequiredWithoutInstrumentAssignmentsNestedInput
  }

  export type InstrumentAssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    instrumentId?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
  }

  export type InstrumentAssignmentCreateManyInput = {
    id?: string
    status?: $Enums.AssignmentStatus
    assignedAt?: Date | string
    revokedAt?: Date | string | null
    notes?: string | null
    instrumentId: string
    applicationId: string
  }

  export type InstrumentAssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InstrumentAssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    instrumentId?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
  }

  export type AuditLogCreateInput = {
    id?: string
    action: string
    details: string
    entityType: string
    entityId: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    action: string
    details: string
    entityType: string
    entityId: string
    createdAt?: Date | string
    userId: string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    action: string
    details: string
    entityType: string
    entityId: string
    createdAt?: Date | string
    userId: string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type EmailLogCreateInput = {
    id?: string
    to: string
    subject: string
    body: string
    status?: $Enums.EmailStatus
    retryCount?: number
    sentAt?: Date | string | null
    failedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailLogUncheckedCreateInput = {
    id?: string
    to: string
    subject: string
    body: string
    status?: $Enums.EmailStatus
    retryCount?: number
    sentAt?: Date | string | null
    failedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: EnumEmailStatusFieldUpdateOperationsInput | $Enums.EmailStatus
    retryCount?: IntFieldUpdateOperationsInput | number
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: EnumEmailStatusFieldUpdateOperationsInput | $Enums.EmailStatus
    retryCount?: IntFieldUpdateOperationsInput | number
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailLogCreateManyInput = {
    id?: string
    to: string
    subject: string
    body: string
    status?: $Enums.EmailStatus
    retryCount?: number
    sentAt?: Date | string | null
    failedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: EnumEmailStatusFieldUpdateOperationsInput | $Enums.EmailStatus
    retryCount?: IntFieldUpdateOperationsInput | number
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: EnumEmailStatusFieldUpdateOperationsInput | $Enums.EmailStatus
    retryCount?: IntFieldUpdateOperationsInput | number
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ApplicationListRelationFilter = {
    every?: ApplicationWhereInput
    some?: ApplicationWhereInput
    none?: ApplicationWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type InstrumentAssignmentListRelationFilter = {
    every?: InstrumentAssignmentWhereInput
    some?: InstrumentAssignmentWhereInput
    none?: InstrumentAssignmentWhereInput
  }

  export type InstrumentAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    instrumentPreference?: SortOrder
    status?: SortOrder
    token?: SortOrder
    tokenExpiresAt?: SortOrder
    tokenRevoked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviewedById?: SortOrder
  }

  export type ApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    instrumentPreference?: SortOrder
    status?: SortOrder
    token?: SortOrder
    tokenExpiresAt?: SortOrder
    tokenRevoked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviewedById?: SortOrder
  }

  export type ApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    instrumentPreference?: SortOrder
    status?: SortOrder
    token?: SortOrder
    tokenExpiresAt?: SortOrder
    tokenRevoked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviewedById?: SortOrder
  }

  export type EnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumInstrumentConditionFilter<$PrismaModel = never> = {
    equals?: $Enums.InstrumentCondition | EnumInstrumentConditionFieldRefInput<$PrismaModel>
    in?: $Enums.InstrumentCondition[] | ListEnumInstrumentConditionFieldRefInput<$PrismaModel>
    notIn?: $Enums.InstrumentCondition[] | ListEnumInstrumentConditionFieldRefInput<$PrismaModel>
    not?: NestedEnumInstrumentConditionFilter<$PrismaModel> | $Enums.InstrumentCondition
  }

  export type EnumInstrumentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InstrumentStatus | EnumInstrumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InstrumentStatus[] | ListEnumInstrumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InstrumentStatus[] | ListEnumInstrumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInstrumentStatusFilter<$PrismaModel> | $Enums.InstrumentStatus
  }

  export type InstrumentCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    brand?: SortOrder
    condition?: SortOrder
    status?: SortOrder
    donorName?: SortOrder
    donorEmail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InstrumentMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    brand?: SortOrder
    condition?: SortOrder
    status?: SortOrder
    donorName?: SortOrder
    donorEmail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InstrumentMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    brand?: SortOrder
    condition?: SortOrder
    status?: SortOrder
    donorName?: SortOrder
    donorEmail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumInstrumentConditionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InstrumentCondition | EnumInstrumentConditionFieldRefInput<$PrismaModel>
    in?: $Enums.InstrumentCondition[] | ListEnumInstrumentConditionFieldRefInput<$PrismaModel>
    notIn?: $Enums.InstrumentCondition[] | ListEnumInstrumentConditionFieldRefInput<$PrismaModel>
    not?: NestedEnumInstrumentConditionWithAggregatesFilter<$PrismaModel> | $Enums.InstrumentCondition
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInstrumentConditionFilter<$PrismaModel>
    _max?: NestedEnumInstrumentConditionFilter<$PrismaModel>
  }

  export type EnumInstrumentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InstrumentStatus | EnumInstrumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InstrumentStatus[] | ListEnumInstrumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InstrumentStatus[] | ListEnumInstrumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInstrumentStatusWithAggregatesFilter<$PrismaModel> | $Enums.InstrumentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInstrumentStatusFilter<$PrismaModel>
    _max?: NestedEnumInstrumentStatusFilter<$PrismaModel>
  }

  export type EnumAssignmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssignmentStatusFilter<$PrismaModel> | $Enums.AssignmentStatus
  }

  export type InstrumentScalarRelationFilter = {
    is?: InstrumentWhereInput
    isNot?: InstrumentWhereInput
  }

  export type ApplicationScalarRelationFilter = {
    is?: ApplicationWhereInput
    isNot?: ApplicationWhereInput
  }

  export type InstrumentAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    assignedAt?: SortOrder
    revokedAt?: SortOrder
    notes?: SortOrder
    instrumentId?: SortOrder
    applicationId?: SortOrder
  }

  export type InstrumentAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    assignedAt?: SortOrder
    revokedAt?: SortOrder
    notes?: SortOrder
    instrumentId?: SortOrder
    applicationId?: SortOrder
  }

  export type InstrumentAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    assignedAt?: SortOrder
    revokedAt?: SortOrder
    notes?: SortOrder
    instrumentId?: SortOrder
    applicationId?: SortOrder
  }

  export type EnumAssignmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssignmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AssignmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssignmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAssignmentStatusFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    details?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    details?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    details?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type EnumEmailStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailStatus | EnumEmailStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmailStatus[] | ListEnumEmailStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailStatus[] | ListEnumEmailStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailStatusFilter<$PrismaModel> | $Enums.EmailStatus
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EmailLogCountOrderByAggregateInput = {
    id?: SortOrder
    to?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    status?: SortOrder
    retryCount?: SortOrder
    sentAt?: SortOrder
    failedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailLogAvgOrderByAggregateInput = {
    retryCount?: SortOrder
  }

  export type EmailLogMaxOrderByAggregateInput = {
    id?: SortOrder
    to?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    status?: SortOrder
    retryCount?: SortOrder
    sentAt?: SortOrder
    failedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailLogMinOrderByAggregateInput = {
    id?: SortOrder
    to?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    status?: SortOrder
    retryCount?: SortOrder
    sentAt?: SortOrder
    failedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailLogSumOrderByAggregateInput = {
    retryCount?: SortOrder
  }

  export type EnumEmailStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailStatus | EnumEmailStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmailStatus[] | ListEnumEmailStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailStatus[] | ListEnumEmailStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailStatusWithAggregatesFilter<$PrismaModel> | $Enums.EmailStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmailStatusFilter<$PrismaModel>
    _max?: NestedEnumEmailStatusFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ApplicationCreateNestedManyWithoutReviewedByInput = {
    create?: XOR<ApplicationCreateWithoutReviewedByInput, ApplicationUncheckedCreateWithoutReviewedByInput> | ApplicationCreateWithoutReviewedByInput[] | ApplicationUncheckedCreateWithoutReviewedByInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutReviewedByInput | ApplicationCreateOrConnectWithoutReviewedByInput[]
    createMany?: ApplicationCreateManyReviewedByInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutReviewedByInput = {
    create?: XOR<ApplicationCreateWithoutReviewedByInput, ApplicationUncheckedCreateWithoutReviewedByInput> | ApplicationCreateWithoutReviewedByInput[] | ApplicationUncheckedCreateWithoutReviewedByInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutReviewedByInput | ApplicationCreateOrConnectWithoutReviewedByInput[]
    createMany?: ApplicationCreateManyReviewedByInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ApplicationUpdateManyWithoutReviewedByNestedInput = {
    create?: XOR<ApplicationCreateWithoutReviewedByInput, ApplicationUncheckedCreateWithoutReviewedByInput> | ApplicationCreateWithoutReviewedByInput[] | ApplicationUncheckedCreateWithoutReviewedByInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutReviewedByInput | ApplicationCreateOrConnectWithoutReviewedByInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutReviewedByInput | ApplicationUpsertWithWhereUniqueWithoutReviewedByInput[]
    createMany?: ApplicationCreateManyReviewedByInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutReviewedByInput | ApplicationUpdateWithWhereUniqueWithoutReviewedByInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutReviewedByInput | ApplicationUpdateManyWithWhereWithoutReviewedByInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutReviewedByNestedInput = {
    create?: XOR<ApplicationCreateWithoutReviewedByInput, ApplicationUncheckedCreateWithoutReviewedByInput> | ApplicationCreateWithoutReviewedByInput[] | ApplicationUncheckedCreateWithoutReviewedByInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutReviewedByInput | ApplicationCreateOrConnectWithoutReviewedByInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutReviewedByInput | ApplicationUpsertWithWhereUniqueWithoutReviewedByInput[]
    createMany?: ApplicationCreateManyReviewedByInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutReviewedByInput | ApplicationUpdateWithWhereUniqueWithoutReviewedByInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutReviewedByInput | ApplicationUpdateManyWithWhereWithoutReviewedByInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutReviewedApplicationsInput = {
    create?: XOR<UserCreateWithoutReviewedApplicationsInput, UserUncheckedCreateWithoutReviewedApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewedApplicationsInput
    connect?: UserWhereUniqueInput
  }

  export type InstrumentAssignmentCreateNestedManyWithoutApplicationInput = {
    create?: XOR<InstrumentAssignmentCreateWithoutApplicationInput, InstrumentAssignmentUncheckedCreateWithoutApplicationInput> | InstrumentAssignmentCreateWithoutApplicationInput[] | InstrumentAssignmentUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: InstrumentAssignmentCreateOrConnectWithoutApplicationInput | InstrumentAssignmentCreateOrConnectWithoutApplicationInput[]
    createMany?: InstrumentAssignmentCreateManyApplicationInputEnvelope
    connect?: InstrumentAssignmentWhereUniqueInput | InstrumentAssignmentWhereUniqueInput[]
  }

  export type InstrumentAssignmentUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: XOR<InstrumentAssignmentCreateWithoutApplicationInput, InstrumentAssignmentUncheckedCreateWithoutApplicationInput> | InstrumentAssignmentCreateWithoutApplicationInput[] | InstrumentAssignmentUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: InstrumentAssignmentCreateOrConnectWithoutApplicationInput | InstrumentAssignmentCreateOrConnectWithoutApplicationInput[]
    createMany?: InstrumentAssignmentCreateManyApplicationInputEnvelope
    connect?: InstrumentAssignmentWhereUniqueInput | InstrumentAssignmentWhereUniqueInput[]
  }

  export type EnumApplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApplicationStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneWithoutReviewedApplicationsNestedInput = {
    create?: XOR<UserCreateWithoutReviewedApplicationsInput, UserUncheckedCreateWithoutReviewedApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewedApplicationsInput
    upsert?: UserUpsertWithoutReviewedApplicationsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewedApplicationsInput, UserUpdateWithoutReviewedApplicationsInput>, UserUncheckedUpdateWithoutReviewedApplicationsInput>
  }

  export type InstrumentAssignmentUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<InstrumentAssignmentCreateWithoutApplicationInput, InstrumentAssignmentUncheckedCreateWithoutApplicationInput> | InstrumentAssignmentCreateWithoutApplicationInput[] | InstrumentAssignmentUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: InstrumentAssignmentCreateOrConnectWithoutApplicationInput | InstrumentAssignmentCreateOrConnectWithoutApplicationInput[]
    upsert?: InstrumentAssignmentUpsertWithWhereUniqueWithoutApplicationInput | InstrumentAssignmentUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: InstrumentAssignmentCreateManyApplicationInputEnvelope
    set?: InstrumentAssignmentWhereUniqueInput | InstrumentAssignmentWhereUniqueInput[]
    disconnect?: InstrumentAssignmentWhereUniqueInput | InstrumentAssignmentWhereUniqueInput[]
    delete?: InstrumentAssignmentWhereUniqueInput | InstrumentAssignmentWhereUniqueInput[]
    connect?: InstrumentAssignmentWhereUniqueInput | InstrumentAssignmentWhereUniqueInput[]
    update?: InstrumentAssignmentUpdateWithWhereUniqueWithoutApplicationInput | InstrumentAssignmentUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: InstrumentAssignmentUpdateManyWithWhereWithoutApplicationInput | InstrumentAssignmentUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: InstrumentAssignmentScalarWhereInput | InstrumentAssignmentScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type InstrumentAssignmentUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<InstrumentAssignmentCreateWithoutApplicationInput, InstrumentAssignmentUncheckedCreateWithoutApplicationInput> | InstrumentAssignmentCreateWithoutApplicationInput[] | InstrumentAssignmentUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: InstrumentAssignmentCreateOrConnectWithoutApplicationInput | InstrumentAssignmentCreateOrConnectWithoutApplicationInput[]
    upsert?: InstrumentAssignmentUpsertWithWhereUniqueWithoutApplicationInput | InstrumentAssignmentUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: InstrumentAssignmentCreateManyApplicationInputEnvelope
    set?: InstrumentAssignmentWhereUniqueInput | InstrumentAssignmentWhereUniqueInput[]
    disconnect?: InstrumentAssignmentWhereUniqueInput | InstrumentAssignmentWhereUniqueInput[]
    delete?: InstrumentAssignmentWhereUniqueInput | InstrumentAssignmentWhereUniqueInput[]
    connect?: InstrumentAssignmentWhereUniqueInput | InstrumentAssignmentWhereUniqueInput[]
    update?: InstrumentAssignmentUpdateWithWhereUniqueWithoutApplicationInput | InstrumentAssignmentUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: InstrumentAssignmentUpdateManyWithWhereWithoutApplicationInput | InstrumentAssignmentUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: InstrumentAssignmentScalarWhereInput | InstrumentAssignmentScalarWhereInput[]
  }

  export type InstrumentAssignmentCreateNestedManyWithoutInstrumentInput = {
    create?: XOR<InstrumentAssignmentCreateWithoutInstrumentInput, InstrumentAssignmentUncheckedCreateWithoutInstrumentInput> | InstrumentAssignmentCreateWithoutInstrumentInput[] | InstrumentAssignmentUncheckedCreateWithoutInstrumentInput[]
    connectOrCreate?: InstrumentAssignmentCreateOrConnectWithoutInstrumentInput | InstrumentAssignmentCreateOrConnectWithoutInstrumentInput[]
    createMany?: InstrumentAssignmentCreateManyInstrumentInputEnvelope
    connect?: InstrumentAssignmentWhereUniqueInput | InstrumentAssignmentWhereUniqueInput[]
  }

  export type InstrumentAssignmentUncheckedCreateNestedManyWithoutInstrumentInput = {
    create?: XOR<InstrumentAssignmentCreateWithoutInstrumentInput, InstrumentAssignmentUncheckedCreateWithoutInstrumentInput> | InstrumentAssignmentCreateWithoutInstrumentInput[] | InstrumentAssignmentUncheckedCreateWithoutInstrumentInput[]
    connectOrCreate?: InstrumentAssignmentCreateOrConnectWithoutInstrumentInput | InstrumentAssignmentCreateOrConnectWithoutInstrumentInput[]
    createMany?: InstrumentAssignmentCreateManyInstrumentInputEnvelope
    connect?: InstrumentAssignmentWhereUniqueInput | InstrumentAssignmentWhereUniqueInput[]
  }

  export type EnumInstrumentConditionFieldUpdateOperationsInput = {
    set?: $Enums.InstrumentCondition
  }

  export type EnumInstrumentStatusFieldUpdateOperationsInput = {
    set?: $Enums.InstrumentStatus
  }

  export type InstrumentAssignmentUpdateManyWithoutInstrumentNestedInput = {
    create?: XOR<InstrumentAssignmentCreateWithoutInstrumentInput, InstrumentAssignmentUncheckedCreateWithoutInstrumentInput> | InstrumentAssignmentCreateWithoutInstrumentInput[] | InstrumentAssignmentUncheckedCreateWithoutInstrumentInput[]
    connectOrCreate?: InstrumentAssignmentCreateOrConnectWithoutInstrumentInput | InstrumentAssignmentCreateOrConnectWithoutInstrumentInput[]
    upsert?: InstrumentAssignmentUpsertWithWhereUniqueWithoutInstrumentInput | InstrumentAssignmentUpsertWithWhereUniqueWithoutInstrumentInput[]
    createMany?: InstrumentAssignmentCreateManyInstrumentInputEnvelope
    set?: InstrumentAssignmentWhereUniqueInput | InstrumentAssignmentWhereUniqueInput[]
    disconnect?: InstrumentAssignmentWhereUniqueInput | InstrumentAssignmentWhereUniqueInput[]
    delete?: InstrumentAssignmentWhereUniqueInput | InstrumentAssignmentWhereUniqueInput[]
    connect?: InstrumentAssignmentWhereUniqueInput | InstrumentAssignmentWhereUniqueInput[]
    update?: InstrumentAssignmentUpdateWithWhereUniqueWithoutInstrumentInput | InstrumentAssignmentUpdateWithWhereUniqueWithoutInstrumentInput[]
    updateMany?: InstrumentAssignmentUpdateManyWithWhereWithoutInstrumentInput | InstrumentAssignmentUpdateManyWithWhereWithoutInstrumentInput[]
    deleteMany?: InstrumentAssignmentScalarWhereInput | InstrumentAssignmentScalarWhereInput[]
  }

  export type InstrumentAssignmentUncheckedUpdateManyWithoutInstrumentNestedInput = {
    create?: XOR<InstrumentAssignmentCreateWithoutInstrumentInput, InstrumentAssignmentUncheckedCreateWithoutInstrumentInput> | InstrumentAssignmentCreateWithoutInstrumentInput[] | InstrumentAssignmentUncheckedCreateWithoutInstrumentInput[]
    connectOrCreate?: InstrumentAssignmentCreateOrConnectWithoutInstrumentInput | InstrumentAssignmentCreateOrConnectWithoutInstrumentInput[]
    upsert?: InstrumentAssignmentUpsertWithWhereUniqueWithoutInstrumentInput | InstrumentAssignmentUpsertWithWhereUniqueWithoutInstrumentInput[]
    createMany?: InstrumentAssignmentCreateManyInstrumentInputEnvelope
    set?: InstrumentAssignmentWhereUniqueInput | InstrumentAssignmentWhereUniqueInput[]
    disconnect?: InstrumentAssignmentWhereUniqueInput | InstrumentAssignmentWhereUniqueInput[]
    delete?: InstrumentAssignmentWhereUniqueInput | InstrumentAssignmentWhereUniqueInput[]
    connect?: InstrumentAssignmentWhereUniqueInput | InstrumentAssignmentWhereUniqueInput[]
    update?: InstrumentAssignmentUpdateWithWhereUniqueWithoutInstrumentInput | InstrumentAssignmentUpdateWithWhereUniqueWithoutInstrumentInput[]
    updateMany?: InstrumentAssignmentUpdateManyWithWhereWithoutInstrumentInput | InstrumentAssignmentUpdateManyWithWhereWithoutInstrumentInput[]
    deleteMany?: InstrumentAssignmentScalarWhereInput | InstrumentAssignmentScalarWhereInput[]
  }

  export type InstrumentCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<InstrumentCreateWithoutAssignmentsInput, InstrumentUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: InstrumentCreateOrConnectWithoutAssignmentsInput
    connect?: InstrumentWhereUniqueInput
  }

  export type ApplicationCreateNestedOneWithoutInstrumentAssignmentsInput = {
    create?: XOR<ApplicationCreateWithoutInstrumentAssignmentsInput, ApplicationUncheckedCreateWithoutInstrumentAssignmentsInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutInstrumentAssignmentsInput
    connect?: ApplicationWhereUniqueInput
  }

  export type EnumAssignmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AssignmentStatus
  }

  export type InstrumentUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<InstrumentCreateWithoutAssignmentsInput, InstrumentUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: InstrumentCreateOrConnectWithoutAssignmentsInput
    upsert?: InstrumentUpsertWithoutAssignmentsInput
    connect?: InstrumentWhereUniqueInput
    update?: XOR<XOR<InstrumentUpdateToOneWithWhereWithoutAssignmentsInput, InstrumentUpdateWithoutAssignmentsInput>, InstrumentUncheckedUpdateWithoutAssignmentsInput>
  }

  export type ApplicationUpdateOneRequiredWithoutInstrumentAssignmentsNestedInput = {
    create?: XOR<ApplicationCreateWithoutInstrumentAssignmentsInput, ApplicationUncheckedCreateWithoutInstrumentAssignmentsInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutInstrumentAssignmentsInput
    upsert?: ApplicationUpsertWithoutInstrumentAssignmentsInput
    connect?: ApplicationWhereUniqueInput
    update?: XOR<XOR<ApplicationUpdateToOneWithWhereWithoutInstrumentAssignmentsInput, ApplicationUpdateWithoutInstrumentAssignmentsInput>, ApplicationUncheckedUpdateWithoutInstrumentAssignmentsInput>
  }

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type EnumEmailStatusFieldUpdateOperationsInput = {
    set?: $Enums.EmailStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumInstrumentConditionFilter<$PrismaModel = never> = {
    equals?: $Enums.InstrumentCondition | EnumInstrumentConditionFieldRefInput<$PrismaModel>
    in?: $Enums.InstrumentCondition[] | ListEnumInstrumentConditionFieldRefInput<$PrismaModel>
    notIn?: $Enums.InstrumentCondition[] | ListEnumInstrumentConditionFieldRefInput<$PrismaModel>
    not?: NestedEnumInstrumentConditionFilter<$PrismaModel> | $Enums.InstrumentCondition
  }

  export type NestedEnumInstrumentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InstrumentStatus | EnumInstrumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InstrumentStatus[] | ListEnumInstrumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InstrumentStatus[] | ListEnumInstrumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInstrumentStatusFilter<$PrismaModel> | $Enums.InstrumentStatus
  }

  export type NestedEnumInstrumentConditionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InstrumentCondition | EnumInstrumentConditionFieldRefInput<$PrismaModel>
    in?: $Enums.InstrumentCondition[] | ListEnumInstrumentConditionFieldRefInput<$PrismaModel>
    notIn?: $Enums.InstrumentCondition[] | ListEnumInstrumentConditionFieldRefInput<$PrismaModel>
    not?: NestedEnumInstrumentConditionWithAggregatesFilter<$PrismaModel> | $Enums.InstrumentCondition
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInstrumentConditionFilter<$PrismaModel>
    _max?: NestedEnumInstrumentConditionFilter<$PrismaModel>
  }

  export type NestedEnumInstrumentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InstrumentStatus | EnumInstrumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InstrumentStatus[] | ListEnumInstrumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InstrumentStatus[] | ListEnumInstrumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInstrumentStatusWithAggregatesFilter<$PrismaModel> | $Enums.InstrumentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInstrumentStatusFilter<$PrismaModel>
    _max?: NestedEnumInstrumentStatusFilter<$PrismaModel>
  }

  export type NestedEnumAssignmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssignmentStatusFilter<$PrismaModel> | $Enums.AssignmentStatus
  }

  export type NestedEnumAssignmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssignmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AssignmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssignmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAssignmentStatusFilter<$PrismaModel>
  }

  export type NestedEnumEmailStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailStatus | EnumEmailStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmailStatus[] | ListEnumEmailStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailStatus[] | ListEnumEmailStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailStatusFilter<$PrismaModel> | $Enums.EmailStatus
  }

  export type NestedEnumEmailStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailStatus | EnumEmailStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmailStatus[] | ListEnumEmailStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailStatus[] | ListEnumEmailStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailStatusWithAggregatesFilter<$PrismaModel> | $Enums.EmailStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmailStatusFilter<$PrismaModel>
    _max?: NestedEnumEmailStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ApplicationCreateWithoutReviewedByInput = {
    id?: string
    message: string
    instrumentPreference: string
    status?: $Enums.ApplicationStatus
    token: string
    tokenExpiresAt: Date | string
    tokenRevoked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    instrumentAssignments?: InstrumentAssignmentCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutReviewedByInput = {
    id?: string
    message: string
    instrumentPreference: string
    status?: $Enums.ApplicationStatus
    token: string
    tokenExpiresAt: Date | string
    tokenRevoked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    instrumentAssignments?: InstrumentAssignmentUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutReviewedByInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutReviewedByInput, ApplicationUncheckedCreateWithoutReviewedByInput>
  }

  export type ApplicationCreateManyReviewedByInputEnvelope = {
    data: ApplicationCreateManyReviewedByInput | ApplicationCreateManyReviewedByInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutUserInput = {
    id?: string
    action: string
    details: string
    entityType: string
    entityId: string
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutUserInput = {
    id?: string
    action: string
    details: string
    entityType: string
    entityId: string
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogCreateManyUserInputEnvelope = {
    data: AuditLogCreateManyUserInput | AuditLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationUpsertWithWhereUniqueWithoutReviewedByInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutReviewedByInput, ApplicationUncheckedUpdateWithoutReviewedByInput>
    create: XOR<ApplicationCreateWithoutReviewedByInput, ApplicationUncheckedCreateWithoutReviewedByInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutReviewedByInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutReviewedByInput, ApplicationUncheckedUpdateWithoutReviewedByInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutReviewedByInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutReviewedByInput>
  }

  export type ApplicationScalarWhereInput = {
    AND?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    OR?: ApplicationScalarWhereInput[]
    NOT?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    id?: StringFilter<"Application"> | string
    message?: StringFilter<"Application"> | string
    instrumentPreference?: StringFilter<"Application"> | string
    status?: EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus
    token?: StringFilter<"Application"> | string
    tokenExpiresAt?: DateTimeFilter<"Application"> | Date | string
    tokenRevoked?: BoolFilter<"Application"> | boolean
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
    reviewedById?: StringNullableFilter<"Application"> | string | null
  }

  export type AuditLogUpsertWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutUserInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutUserInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    details?: StringFilter<"AuditLog"> | string
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    userId?: StringFilter<"AuditLog"> | string
  }

  export type UserCreateWithoutReviewedApplicationsInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewedApplicationsInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewedApplicationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewedApplicationsInput, UserUncheckedCreateWithoutReviewedApplicationsInput>
  }

  export type InstrumentAssignmentCreateWithoutApplicationInput = {
    id?: string
    status?: $Enums.AssignmentStatus
    assignedAt?: Date | string
    revokedAt?: Date | string | null
    notes?: string | null
    instrument: InstrumentCreateNestedOneWithoutAssignmentsInput
  }

  export type InstrumentAssignmentUncheckedCreateWithoutApplicationInput = {
    id?: string
    status?: $Enums.AssignmentStatus
    assignedAt?: Date | string
    revokedAt?: Date | string | null
    notes?: string | null
    instrumentId: string
  }

  export type InstrumentAssignmentCreateOrConnectWithoutApplicationInput = {
    where: InstrumentAssignmentWhereUniqueInput
    create: XOR<InstrumentAssignmentCreateWithoutApplicationInput, InstrumentAssignmentUncheckedCreateWithoutApplicationInput>
  }

  export type InstrumentAssignmentCreateManyApplicationInputEnvelope = {
    data: InstrumentAssignmentCreateManyApplicationInput | InstrumentAssignmentCreateManyApplicationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutReviewedApplicationsInput = {
    update: XOR<UserUpdateWithoutReviewedApplicationsInput, UserUncheckedUpdateWithoutReviewedApplicationsInput>
    create: XOR<UserCreateWithoutReviewedApplicationsInput, UserUncheckedCreateWithoutReviewedApplicationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewedApplicationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewedApplicationsInput, UserUncheckedUpdateWithoutReviewedApplicationsInput>
  }

  export type UserUpdateWithoutReviewedApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewedApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type InstrumentAssignmentUpsertWithWhereUniqueWithoutApplicationInput = {
    where: InstrumentAssignmentWhereUniqueInput
    update: XOR<InstrumentAssignmentUpdateWithoutApplicationInput, InstrumentAssignmentUncheckedUpdateWithoutApplicationInput>
    create: XOR<InstrumentAssignmentCreateWithoutApplicationInput, InstrumentAssignmentUncheckedCreateWithoutApplicationInput>
  }

  export type InstrumentAssignmentUpdateWithWhereUniqueWithoutApplicationInput = {
    where: InstrumentAssignmentWhereUniqueInput
    data: XOR<InstrumentAssignmentUpdateWithoutApplicationInput, InstrumentAssignmentUncheckedUpdateWithoutApplicationInput>
  }

  export type InstrumentAssignmentUpdateManyWithWhereWithoutApplicationInput = {
    where: InstrumentAssignmentScalarWhereInput
    data: XOR<InstrumentAssignmentUpdateManyMutationInput, InstrumentAssignmentUncheckedUpdateManyWithoutApplicationInput>
  }

  export type InstrumentAssignmentScalarWhereInput = {
    AND?: InstrumentAssignmentScalarWhereInput | InstrumentAssignmentScalarWhereInput[]
    OR?: InstrumentAssignmentScalarWhereInput[]
    NOT?: InstrumentAssignmentScalarWhereInput | InstrumentAssignmentScalarWhereInput[]
    id?: StringFilter<"InstrumentAssignment"> | string
    status?: EnumAssignmentStatusFilter<"InstrumentAssignment"> | $Enums.AssignmentStatus
    assignedAt?: DateTimeFilter<"InstrumentAssignment"> | Date | string
    revokedAt?: DateTimeNullableFilter<"InstrumentAssignment"> | Date | string | null
    notes?: StringNullableFilter<"InstrumentAssignment"> | string | null
    instrumentId?: StringFilter<"InstrumentAssignment"> | string
    applicationId?: StringFilter<"InstrumentAssignment"> | string
  }

  export type InstrumentAssignmentCreateWithoutInstrumentInput = {
    id?: string
    status?: $Enums.AssignmentStatus
    assignedAt?: Date | string
    revokedAt?: Date | string | null
    notes?: string | null
    application: ApplicationCreateNestedOneWithoutInstrumentAssignmentsInput
  }

  export type InstrumentAssignmentUncheckedCreateWithoutInstrumentInput = {
    id?: string
    status?: $Enums.AssignmentStatus
    assignedAt?: Date | string
    revokedAt?: Date | string | null
    notes?: string | null
    applicationId: string
  }

  export type InstrumentAssignmentCreateOrConnectWithoutInstrumentInput = {
    where: InstrumentAssignmentWhereUniqueInput
    create: XOR<InstrumentAssignmentCreateWithoutInstrumentInput, InstrumentAssignmentUncheckedCreateWithoutInstrumentInput>
  }

  export type InstrumentAssignmentCreateManyInstrumentInputEnvelope = {
    data: InstrumentAssignmentCreateManyInstrumentInput | InstrumentAssignmentCreateManyInstrumentInput[]
    skipDuplicates?: boolean
  }

  export type InstrumentAssignmentUpsertWithWhereUniqueWithoutInstrumentInput = {
    where: InstrumentAssignmentWhereUniqueInput
    update: XOR<InstrumentAssignmentUpdateWithoutInstrumentInput, InstrumentAssignmentUncheckedUpdateWithoutInstrumentInput>
    create: XOR<InstrumentAssignmentCreateWithoutInstrumentInput, InstrumentAssignmentUncheckedCreateWithoutInstrumentInput>
  }

  export type InstrumentAssignmentUpdateWithWhereUniqueWithoutInstrumentInput = {
    where: InstrumentAssignmentWhereUniqueInput
    data: XOR<InstrumentAssignmentUpdateWithoutInstrumentInput, InstrumentAssignmentUncheckedUpdateWithoutInstrumentInput>
  }

  export type InstrumentAssignmentUpdateManyWithWhereWithoutInstrumentInput = {
    where: InstrumentAssignmentScalarWhereInput
    data: XOR<InstrumentAssignmentUpdateManyMutationInput, InstrumentAssignmentUncheckedUpdateManyWithoutInstrumentInput>
  }

  export type InstrumentCreateWithoutAssignmentsInput = {
    id?: string
    type: string
    brand: string
    condition: $Enums.InstrumentCondition
    status?: $Enums.InstrumentStatus
    donorName?: string | null
    donorEmail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstrumentUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    type: string
    brand: string
    condition: $Enums.InstrumentCondition
    status?: $Enums.InstrumentStatus
    donorName?: string | null
    donorEmail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstrumentCreateOrConnectWithoutAssignmentsInput = {
    where: InstrumentWhereUniqueInput
    create: XOR<InstrumentCreateWithoutAssignmentsInput, InstrumentUncheckedCreateWithoutAssignmentsInput>
  }

  export type ApplicationCreateWithoutInstrumentAssignmentsInput = {
    id?: string
    message: string
    instrumentPreference: string
    status?: $Enums.ApplicationStatus
    token: string
    tokenExpiresAt: Date | string
    tokenRevoked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewedBy?: UserCreateNestedOneWithoutReviewedApplicationsInput
  }

  export type ApplicationUncheckedCreateWithoutInstrumentAssignmentsInput = {
    id?: string
    message: string
    instrumentPreference: string
    status?: $Enums.ApplicationStatus
    token: string
    tokenExpiresAt: Date | string
    tokenRevoked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewedById?: string | null
  }

  export type ApplicationCreateOrConnectWithoutInstrumentAssignmentsInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutInstrumentAssignmentsInput, ApplicationUncheckedCreateWithoutInstrumentAssignmentsInput>
  }

  export type InstrumentUpsertWithoutAssignmentsInput = {
    update: XOR<InstrumentUpdateWithoutAssignmentsInput, InstrumentUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<InstrumentCreateWithoutAssignmentsInput, InstrumentUncheckedCreateWithoutAssignmentsInput>
    where?: InstrumentWhereInput
  }

  export type InstrumentUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: InstrumentWhereInput
    data: XOR<InstrumentUpdateWithoutAssignmentsInput, InstrumentUncheckedUpdateWithoutAssignmentsInput>
  }

  export type InstrumentUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    condition?: EnumInstrumentConditionFieldUpdateOperationsInput | $Enums.InstrumentCondition
    status?: EnumInstrumentStatusFieldUpdateOperationsInput | $Enums.InstrumentStatus
    donorName?: NullableStringFieldUpdateOperationsInput | string | null
    donorEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstrumentUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    condition?: EnumInstrumentConditionFieldUpdateOperationsInput | $Enums.InstrumentCondition
    status?: EnumInstrumentStatusFieldUpdateOperationsInput | $Enums.InstrumentStatus
    donorName?: NullableStringFieldUpdateOperationsInput | string | null
    donorEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUpsertWithoutInstrumentAssignmentsInput = {
    update: XOR<ApplicationUpdateWithoutInstrumentAssignmentsInput, ApplicationUncheckedUpdateWithoutInstrumentAssignmentsInput>
    create: XOR<ApplicationCreateWithoutInstrumentAssignmentsInput, ApplicationUncheckedCreateWithoutInstrumentAssignmentsInput>
    where?: ApplicationWhereInput
  }

  export type ApplicationUpdateToOneWithWhereWithoutInstrumentAssignmentsInput = {
    where?: ApplicationWhereInput
    data: XOR<ApplicationUpdateWithoutInstrumentAssignmentsInput, ApplicationUncheckedUpdateWithoutInstrumentAssignmentsInput>
  }

  export type ApplicationUpdateWithoutInstrumentAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    instrumentPreference?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    token?: StringFieldUpdateOperationsInput | string
    tokenExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokenRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedBy?: UserUpdateOneWithoutReviewedApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutInstrumentAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    instrumentPreference?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    token?: StringFieldUpdateOperationsInput | string
    tokenExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokenRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    reviewedApplications?: ApplicationCreateNestedManyWithoutReviewedByInput
  }

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    reviewedApplications?: ApplicationUncheckedCreateNestedManyWithoutReviewedByInput
  }

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedApplications?: ApplicationUpdateManyWithoutReviewedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedApplications?: ApplicationUncheckedUpdateManyWithoutReviewedByNestedInput
  }

  export type ApplicationCreateManyReviewedByInput = {
    id?: string
    message: string
    instrumentPreference: string
    status?: $Enums.ApplicationStatus
    token: string
    tokenExpiresAt: Date | string
    tokenRevoked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuditLogCreateManyUserInput = {
    id?: string
    action: string
    details: string
    entityType: string
    entityId: string
    createdAt?: Date | string
  }

  export type ApplicationUpdateWithoutReviewedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    instrumentPreference?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    token?: StringFieldUpdateOperationsInput | string
    tokenExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokenRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instrumentAssignments?: InstrumentAssignmentUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutReviewedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    instrumentPreference?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    token?: StringFieldUpdateOperationsInput | string
    tokenExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokenRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instrumentAssignments?: InstrumentAssignmentUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateManyWithoutReviewedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    instrumentPreference?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    token?: StringFieldUpdateOperationsInput | string
    tokenExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokenRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstrumentAssignmentCreateManyApplicationInput = {
    id?: string
    status?: $Enums.AssignmentStatus
    assignedAt?: Date | string
    revokedAt?: Date | string | null
    notes?: string | null
    instrumentId: string
  }

  export type InstrumentAssignmentUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    instrument?: InstrumentUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type InstrumentAssignmentUncheckedUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    instrumentId?: StringFieldUpdateOperationsInput | string
  }

  export type InstrumentAssignmentUncheckedUpdateManyWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    instrumentId?: StringFieldUpdateOperationsInput | string
  }

  export type InstrumentAssignmentCreateManyInstrumentInput = {
    id?: string
    status?: $Enums.AssignmentStatus
    assignedAt?: Date | string
    revokedAt?: Date | string | null
    notes?: string | null
    applicationId: string
  }

  export type InstrumentAssignmentUpdateWithoutInstrumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    application?: ApplicationUpdateOneRequiredWithoutInstrumentAssignmentsNestedInput
  }

  export type InstrumentAssignmentUncheckedUpdateWithoutInstrumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    applicationId?: StringFieldUpdateOperationsInput | string
  }

  export type InstrumentAssignmentUncheckedUpdateManyWithoutInstrumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    applicationId?: StringFieldUpdateOperationsInput | string
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
  export const dmmf: runtime.BaseDMMF
}