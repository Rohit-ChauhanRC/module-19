import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My First book",
    description: "The first book I ever wrote",
  },
  {
    id: "p2",
    price: 16,
    title: "My Second book",
    description: "The seond book I ever wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((products) => (
          <ProductItem
            key={products.id}
            id={products.id}
            title={products.title}
            price={products.price}
            description={products.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
