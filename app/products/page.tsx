import React from 'react'
import Products from '@/components/products'
import { getStaticProps } from "@/utils/shopify/getStaticProps"

const { props: { products } } = await getStaticProps()

export default function Page() {
  return (
    <div>
      <Products products={products} />
    </div>
  )
}
