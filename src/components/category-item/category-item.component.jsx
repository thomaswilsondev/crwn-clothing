import "./category-item.styles.scss";
import cls from "classnames";
const CategoryItem = ({ category }) => {
  const { id, imageUrl, title } = category;
  return (
    <div className={cls("category-container", `element-${id}`)}>
      {/* IMG */}
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      {/* INFORMATION */}
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};
export default CategoryItem;
