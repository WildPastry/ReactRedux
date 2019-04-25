// @ts-ignore
const ProductItem = ({ category, name }) => (
  <div className="category__list-item box flex-spread">
    {name}
    <div className={`category--${category} circle`} />
  </div>
);

const ProductItems = ({ state: { products, displayCategory } }) => (
  <div>
    {products
      .filter(
        ({ category }) =>
          displayCategory === category || displayCategory === "all"
      )
      .map(({ category, name }) => (
        <ProductItem
          key={`ProductItems-${name}`}
          category={category}
          name={name}
        />
      ))}
  </div>
);

const ButtonCategories = (productCategories, setCategory) =>
  productCategories.map(category => (
    <button
      key={category}
      className={`btn-${category}`}
      onClick={() => setCategory(category)}
    >
      {category}
    </button>
  ));

const UI = ({
  state,
  state: { productCategories },
  setCategory
}) => (
  <div className="box flex-row">
    <div className="box flex-col">
      <h3>Filter by Category</h3>
      {ButtonCategories(productCategories, setCategory)}
    </div>
    <div className="box flex-col">
      <h3>Results</h3>
      <ProductItems state={state} />
    </div>
  </div>
);

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCategory: "all",
      products: props.products,
      productCategories: props.productCategories
    };
    this.setCategory = this.setCategory.bind(this);
  }
  setCategory(category) {
    this.setState({
      displayCategory: category
    });
  }
  render() {
    return <UI setCategory={this.setCategory} state={this.state} />;
  }
}

// data
const PRODUCTS = [
  { category: "entertainment", name: "Football" },
  { category: "entertainment", name: "Baseball" },
  { category: "entertainment", name: "Basketball" },
  { category: "fashion", name: "iPod Touch" },
  { category: "design", name: "iPhone 5" },
  { category: "design", name: "Nexus 7" },
  { category: "leisure", name: "Holiday" }
];

// get unique category items
const uniqueItems = (x, i, array) => array.indexOf(x) === i;
const PRODUCT_CATEGORIES = PRODUCTS.map(prod => prod.category).filter(
  uniqueItems
);

PRODUCT_CATEGORIES.push("all");
PRODUCT_CATEGORIES.sort();

ReactDOM.render(
  <Main products={PRODUCTS} productCategories={PRODUCT_CATEGORIES} />,
  document.getElementById("filter")
);
