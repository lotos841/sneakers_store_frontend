import { $host, $authHost } from ".";

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand')
    return data
}

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createSneakers = async (sneakers) => {
    const {data} = await $authHost.post('api/sneakers', sneakers)
    return data
}

export const fetchSneakers = async () => {
    const {data} = await $host.get('api/sneakers')
    return data
}

export const fetchOneSneakers = async (id) => {
    const {data} = await $host.get('api/sneakers/' + id)
    return data
}

export const addToBasket = async (id) => {
    const {response} = await $authHost.post('api/basket', id)
    return response
}

export const removeFromBasket = async (id) => {
    const {response} = await $authHost.delete('api/basket/' + id)
    return response
}

export const getBasket = async () => {
    const {data} = await $authHost.get('api/basket')
    return data
}