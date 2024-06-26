import { RefObject } from 'react';

/**
 * useOutsideClick
 * @param ref - Reference of the element
 * @param handler - Callback function to be executed when the event occurs
 */
export type ClickEvent = MouseEvent | TouchEvent;
declare function useOutsideClick<T extends HTMLElement>(ref: RefObject<T>, handler: (event: Event) => void): void;
export default useOutsideClick;
