export interface IErrorMessage {
  error: string;
  error_message: string;
}

export type TAlert = IErrorMessage | {code: number, message: string} | {message: string};
