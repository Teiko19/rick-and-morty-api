export type TypeCustomHooks = [
  { [key: string]: any }, // CONSTANTS
  { [key: string]: any }, // STATES
  { [key: string]: (value: any) => void }, // SET STATES
  { [key: string]: (...args: any[]) => void } // FUNCTIONS
];