import { useEffect, useState } from "react";
import { CoffeeCard } from "./components/CoffeeCard";
import { Cover } from "./components/Cover";
import { CoffeeListContainer, MainContainer } from "./styles";
import { products as mockedProducts } from "../../../products";
import { stripe } from "../../services/stripe";

interface ProductsResponse {
  data: Array<{
    id: string;
    description: string;
    default_price: {
      id: string;
      unit_amount: number;
      currency: string;
    };
    images: string[];
    metadata: {
      categories: string;
    };
    name: string;
  }>;
}

interface Product {
  id: string;
  description: string;
  image_url: string;
  price: {
    amount: number;
    formatted: {
      currency: string;
      amount: string;
    };
  };
  categories: string[];
  name: string;
  default_price_id: string;
}

/**
 * @todo Show something when has no products
 */
export function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  // useEffect(() => {
  //   // API
  //   // useEffect

  //   const productsFromAPI: ProductsResponse = mockedProducts;

  //   const formattedProducts = productsFromAPI.data.map((product): Product => {
  //     const price = new Intl.NumberFormat("pt-BR", {
  //       style: "currency",
  //       currency: "BRL",
  //     }).formatToParts(product.default_price.unit_amount / 100);

  //     return {
  //       id: product.id,
  //       description: product.description,
  //       image_url: product.images[0],
  //       categories: product.metadata.categories.split(","),
  //       name: product.name,
  //       price: {
  //         amount: product.default_price.unit_amount / 100,
  //         formatted: {
  //           currency: price[0].value,
  //           amount: [price[2].value, price[3].value, price[4].value].join(""),
  //         },
  //       },
  //     };
  //   });

  //   setProducts(formattedProducts);
  // }, []);

  useEffect(() => {
    stripe
      .get<ProductsResponse>("/products", {
        params: {
          "expand[]": "data.default_price",
        },
      })
      .then((response) => {
        const formattedProducts = response.data.data.map((product): Product => {
          const price = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).formatToParts(product.default_price.unit_amount / 100);

          return {
            id: product.id,
            description: product.description,
            image_url: product.images[0],
            categories: product.metadata.categories.split(","),
            name: product.name,
            price: {
              amount: product.default_price.unit_amount / 100,
              formatted: {
                currency: price[0].value,
                amount: [price[2].value, price[3].value, price[4].value].join(
                  ""
                ),
              },
            },
            default_price_id: product.default_price.id,
          };
        });

        setProducts(formattedProducts);
      })
      .catch((err) => console.log("Failed to get products"));
  }, []);

  return (
    <>
      <Cover />

      <MainContainer>
        <h2>Nossos cafés</h2>

        <CoffeeListContainer>
          {products.map((product) => (
            <CoffeeCard key={product.id} product={product} />
          ))}
        </CoffeeListContainer>
      </MainContainer>
    </>
  );
}
