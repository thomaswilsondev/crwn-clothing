import { AnyAction } from "redux";
export type ActionWithPayLoad<T, P> = {
  type: T;
  payload: P;
};
export type Action<T> = {
  type: T;
};

export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayLoad<T, P>;

export function createAction<T extends string, P>(
  type: T,
  payload: void
): ActionWithPayLoad<T, P>;

export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}
