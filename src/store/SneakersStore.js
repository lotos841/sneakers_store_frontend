import { makeAutoObservable } from "mobx"

export default class SneakersStore {
    constructor() {
        this._brands = []
        this._types = []
        this._sneakers = []
        this._basket = []
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setSneakers(sneakers) {
        this._sneakers = sneakers
    }
    setBaskets(basket) {
        this._basket = basket
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get sneakers() {
        return this._sneakers
    }
    get basket() {
        return this._basket
    }
}