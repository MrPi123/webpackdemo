export function log(msg:string) {
    document.write(msg);
}

export class Name {

    name:String

    constructor(name: String) {
        this.name = name
    }

    sayHello() {
        log(`${this.name}你好啊`)
    }

}