import { BaseModel } from "./BaseModel";

export class Pet extends BaseModel {
  private name: string;
  private species: string;
  private age: number;

  constructor(id: string, name: string, species: string, age: number) {
    super(id);
    this.name = name;
    this.species = species;
    this.age = age;
  }

  getDetails() {
    return {
      id: this.id,
      name: this.name,
      species: this.species,
      age: this.age
    };
  }
}
