import { Func } from "./Func";
/**
 * A predicate is a boolean function, used as a point on a {@link Dimension}
 * @typeParam TArgs The tuple type of the arguments passed to the predicate.
 * @category Type declarations
 */
export type Predicate<TArgs extends readonly unknown[] = []> = Func<boolean, TArgs>;
//# sourceMappingURL=Predicate.d.ts.map