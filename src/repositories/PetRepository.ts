import { IRepository } from "../interfaces/IRepository";
import { Pet } from "../models/Pet";

export class PetRepository implements IRepository<Pet> {
  private pets: Pet[] = [];

  create(pet: Pet): Pet {
    this.pets.push(pet);
    return pet;
  }

  findAll(): Pet[] {
    return this.pets;
  }

  findById(id: string): Pet | null {
    return this.pets.find(p => p.getId() === id) || null;
  }

  delete(id: string): boolean {
    const index = this.pets.findIndex(p => p.getId() === id);
    if (index === -1) return false;
    this.pets.splice(index, 1);
    return true;
  }
}
