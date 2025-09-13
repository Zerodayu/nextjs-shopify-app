export const productsQuery = `
  query Products {
    products(first: 10) {
      edges {
        node {
          title
          handle
          tags
          description
          priceRange {
            minVariantPrice {
              amount
            }
          }
          media(first: 1) {
            nodes {
              ... on MediaImage {
                image {
                  url
                  altText
                }
              }
            }
          }
        }
      }
    }
  }
`