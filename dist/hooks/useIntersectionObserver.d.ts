export interface UseIntersectionObserverProps {
    callback: IntersectionObserverCallback;
    observables: Array<Element>;
    config?: IntersectionObserverInit;
    deps?: Array<unknown>;
}
declare const useIntersectionObserver: ({ callback, config, observables, ...deps }: UseIntersectionObserverProps) => void;
export default useIntersectionObserver;
