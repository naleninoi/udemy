export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, desc: string, imagerPath: string) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagerPath;
    }
}