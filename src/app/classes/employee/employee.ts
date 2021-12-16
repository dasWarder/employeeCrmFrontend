import {Profession} from "./profession";

export class Employee {
  id!: string;
  first_name!: string;
  last_name!: string;
  age!: number;
  profession!: Profession;

  constructor() {
  }
}
