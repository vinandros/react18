export default class Pokemon {
    id: number | undefined;
    name: string | undefined;
    image: string | undefined
    url: string | undefined
    constructor(id?:number, name?:string, image?:string, url?:string) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.url= url
    }
}