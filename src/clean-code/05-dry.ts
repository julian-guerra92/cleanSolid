
type Size = '' | 'S' | 'M' | 'L';


class Product {

    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = ''
    ) { }

    isProductReady(): boolean{
        for (const key in this) {
            switch (typeof this[key]) {
                case 'string':
                    if ((<string>this[key]).length <= 0) throw Error(`${key} es empty`);
                    break;
                case 'number':
                    if ((<number>this[key]) <= 0) throw Error(`${key} es zero`);
                    break;
                default:
                    throw Error(`${typeof this[key]} is not valid`)
            }
        }
        return true;
    }

    toString() {
        // //Este métos es no DRY
        // if(this.name.length <= 0) throw Error('name es empty');
        // if(this.price <= 0) throw Error('price is zero');
        // if(this.size.length <= 0) throw Error('size es empty');
        // return `${this.name}, ${this.price}, ${this.size}`

        if(!this.isProductReady) return;

        return `${this.name}, ${this.price}, ${this.size}`;
    }

}

(() => {

    const bluePants = new Product('Blue large Pants', 50);
    console.log(bluePants.toString());

})();