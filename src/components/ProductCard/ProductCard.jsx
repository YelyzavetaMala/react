import css from "./ProductCard.module.css";

function ProductCard({ title, description }) {
  return (
    <div className={css.card}>
      <h2 className={css.cardTitle}>{title}</h2>
      <p className={css.cardDescription}>{description}</p>
    </div>
  );
}

export default ProductCard;
