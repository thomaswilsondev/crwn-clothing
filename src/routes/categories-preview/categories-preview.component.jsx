import { Fragment } from "react";
import { selectCategoriesMap } from "../../store/categories/categories.select";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useSelector } from "react-redux";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
//<div className="product-container">
//{/* {products.map((products) => (
//  <ProductCard key={products.id} product={products} />
//))} */}
//</div>
