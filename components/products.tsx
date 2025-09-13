import Link from "next/link"

interface ProductProps {
  products: {
    edges: Array<{
      node: {
        title: string
        handle: string
        description: string
        priceRange: {  // Changed from priceRangeV2
          minVariantPrice: {
            amount: string
          }
        }
        media: {
          nodes: Array<{
            image: {  // Removed preview level
              url: string
              altText: string
            }
          }>
        }
      }
    }>
  }
}

export default function Products({ products }: ProductProps) {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-foreground">Our Products</h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products?.edges?.map(({ node: product }) => (
          <div key={product.handle} className="group relative">
            <img
              width={500}
              height={500}
              alt={product.media.nodes[0]?.image.altText || product.title}
              src={product.media.nodes[0]?.image.url}
              className="aspect-square w-full rounded-md bg-muted-foreground object-cover group-hover:scale-105 lg:aspect-auto lg:h-80 transition-all duration-300"
            />
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-foreground">
                  <Link href={`/products/${product.handle}`}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.title}
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{product.description}</p>
              </div>
              <p className="text-sm font-medium text-foreground">
                ${parseFloat(product.priceRange.minVariantPrice.amount).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}