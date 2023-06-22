import itemCSS from "./item.module.css";

export default function Item({ item }) {
  return (
    <div className={itemCSS.container}>
      <h3 className={itemCSS.title}>{item.title}</h3>
      <img src={item.image} alt={item.title} className={itemCSS.image} />
      <p>
        <strong className={itemCSS.price}>${item.price}</strong>
      </p>
      <p>{item.description}</p>
    </div>
  );
}
