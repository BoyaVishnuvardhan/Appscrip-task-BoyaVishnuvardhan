import "@/styles/product.css";

type Props = {
  title: string;
  price: number;
  image: string;
};

export default function ProductCard({ title, price, image }: Props) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>
  {title.length > 40 ? title.substring(0, 40) + "..." : title}
</h2>
      <p>${price}</p>
    </div>
  );
}