import { Coordinate } from "./coordinate";

export class Spaceship{
    readonly name: string;
    hitPoints = 100;
    position: Coordinate;

    constructor(name: string, x: number = 0, y: number = 0, z: number = 0){
        this.name = name;
        this.position = new Coordinate(x, y, z);
    }
}