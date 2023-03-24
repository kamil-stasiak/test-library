import { EventEmitter } from "events";
import TypedEmitter from "typed-emitter";

export class SomeClass {
  public a: string;

  constructor(a: string) {
    this.a = a;
  }
}