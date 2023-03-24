import { EventEmitter } from "events";
import TypedEmitter from "typed-emitter";

export interface Callbacks {
  hello: (message: string) => void
}

export class SomeClass extends (EventEmitter as new () => TypedEmitter<Required<Callbacks>>) {
  public a: string;

  constructor(a: string) {
    super()
    this.a = a;
  }
}

export class DifferentClass extends (EventEmitter as new () => TypedEmitter<Required<Callbacks>>) {
  public b: string;

  constructor(a: string) {
    super()
    this.b = a;
  }
}