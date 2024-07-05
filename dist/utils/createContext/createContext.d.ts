/// <reference types="react" />
export interface CreateContextOptions<T> {
    strict?: boolean;
    hookName?: string;
    providerName?: string;
    errorMessage?: string;
    name?: string;
    defaultValue?: T;
}
export type CreateContextReturn<T, IsStrict extends boolean = true> = [
    React.Provider<T>,
    () => IsStrict extends true ? T : T | undefined,
    React.Context<T>
];
declare function createContext<T, IsStrict extends boolean = true>(options?: CreateContextOptions<T>): CreateContextReturn<T, IsStrict>;
export default createContext;
