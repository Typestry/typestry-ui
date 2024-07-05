/**
 * useKeyPress
 * @param keyCodes - Array of key codes to listen for
 * @param handler - Callback function to be executed when the event occurs
 */
declare function useKeyPress(keyCodes: string[], handler: (event: KeyboardEvent) => void): void;
export default useKeyPress;
