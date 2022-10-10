export default {
    set (key, value) {
        localStorage.setItem(key, value)
        return this.get(key)
    },
    get (key, defaultValue) {
        return localStorage.getItem(key) || defaultValue
    },
    setObject (key, value) {
        localStorage.setItem(key, JSON.stringify(value))
        return this.getObject(key)
    },
    getObject (key) {
        return JSON.parse(localStorage.getItem(key), null)
    },
    remove (key) {
        localStorage.removeItem(key)
    }
}