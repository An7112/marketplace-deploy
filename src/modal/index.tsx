export type sidebarModal = {
    link: string,
    name: string,
    icon: any,
}

export type StoreInfoModal = {
    _id: string,
    storeName?: string,
    storeDescription?: string,
    storeAvatar?: string,
    storeBanner?: string,
    storeProductLength?: number,
    purchased: number,
    date?: any
}

export type Messages = {
    title: string | null,
    description?: string | null,
    status: boolean | null,
}

export type ProductModal = {
    _id: string,
    owner: string,
    productName: string,
    productPrice: number,
    productDescription: string,
    productIMG: string,
    quantity: number,
    date: any,
    productType: string,
}

export type CartModal = {
    owner: string,
    id: string,
    qty: number
}

export type PaginatedModal = {
    _id: string,
    img: string,
    name: string,
    quantity: number,
    createdDate: any,
}

export type PurchaseModal = {
    _id: string,
    ownerProduct: string,
    productId: string,
    status: string,
    productName: string,
    productIMG: string,
    productPrice: number,
    buyer: string,
    quantity: number,
    purchaseDate: any,
}