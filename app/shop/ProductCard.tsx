/* eslint-disable prettier/prettier */
// import WishlistButton from "./WishlistButton";
import WishlistButton from './WishlistButton';
import { WixMediaImage } from '../components/Image/WixMediaImage';

type Product = {
  _id: string;
  name: string;
  slug: string;
  price: {
    formatted: {
      price: string;
      discountedPrice?: string;
    };
  };
  ribbon?: string;
  media: {
    mainMedia: {
      image: {
        url: string;
        altText: string;
      };
    };
  };
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border p-4 relative">
      <a href={`/product-page/${product.slug}`}>
        <WixMediaImage
          media={product.media.mainMedia.image.url}
          height={200}
          width={200}
          alt={product.media.mainMedia.image.altText || "Product Image"}
        />
        {product.ribbon && (
          <div className="ribbon bg-red-500 text-white px-2 py-1 text-xs absolute top-2 left-2">
            {product.ribbon}
          </div>
        )}
        <h2 className="mt-2 text-lg">{product.name}</h2>
        <p className="text-sm">
          {product.price.formatted.discountedPrice ? (
            <>
              <span className="line-through text-gray-500 mr-2">
                {product.price.formatted.price}
              </span>
              <span className="text-red-500">
                {product.price.formatted.discountedPrice}
              </span>
            </>
          ) : (
            <span>{product.price.formatted.price}</span>
          )}
        </p>
      </a>
      <WishlistButton productId={product._id} />
    </div>
  );
}
