export const $localStorage = {
    set(key,value) {
        if(process.client) {
            localStorage.setItem(key, value)
        }
    },
    get(key) {
        if(process.client) {
           return  localStorage.getItem(key)
        }
    },
    remove(key) {
        if(process.client) {
            localStorage.removeItem(key);
        }
    },
    removeAll() {
        if(process.client) {
            localStorage.clear();
        }
    }
}

export default {$localStorage}