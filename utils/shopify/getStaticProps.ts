import { storefront } from ".."
import { productsQuery } from "@/utils/shopify/productsQuery"



export async function getStaticProps() {
    const {data} = await storefront(productsQuery, {})
    return {
        props: {
            products: data.products,
        }
    }
}