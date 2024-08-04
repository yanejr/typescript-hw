
class HashMap {
    data: { [key: string]: { key: string, value: any }[] } = {};
    private hashFunction: (key: string) => number;

    constructor() {
        this.hashFunction = (key: string): number => {
            let hash = 0;
            for (let i = 0; i < key.length; i++) {
                hash += key.charCodeAt(i)
            }
            return hash % 1000
        }
    }

    add(key: string, value: any): void {
        const hash = this.hashFunction(key);
        if (!this.data[hash]) {
            this.data[hash] = []
        }
        this.data[hash].push({ key: key, value: value })
    }

    get(key: string): any {
        const hash = this.hashFunction(key);
        if (this.data[hash]) {

            const element = this.data[hash].filter(el => el.key === key)
            if (element) {
                return element.map(e => e.value)
            }
        }
        throw new Error('Ключ не найден')
    }

    remove(key: string): void {
        const hash = this.hashFunction(key);
        if (this.data[hash]) {
            this.data[hash] = this.data[hash].filter(el => el.key !== key)
            if (this.data[hash].length === 0) {
                delete this.data[hash]
            }
        } else {
            throw new Error('Ключ не найден')
        }
    }

    clear() {
        this.data = {}
    }
}