class Store {
    constructor(name) {
        this.store = window[name];
        this.prefix = 'sls_admin_';
    }
    set(key, value, fn) {
        try {
            value = JSON.stringify(value);
        } catch (e) {
            value = value;
        }

        this.store.setItem(this.prefix + key, value);

        fn && fn();
    }
    get(key, fn) {
        if (!key) {
            throw new Error('没有找到key。');
            return;
        }
        if (typeof key === 'object') {
            throw new Error('key不能是一个对象。');
            return;
        }
        var value = this.store.getItem(this.prefix + key);
        if (value !== null) {
            try {
                value = JSON.parse(value);
            } catch (e) {
                value = value;
            }
        }

        return value;
    }
    remove(key) {
        this.store.removeItem(this.prefix + key);
    }
}
export const sessionStorage = new Store("sessionStorage");
export const localStorage = new Store("localStorage");
