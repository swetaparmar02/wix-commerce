/* eslint-disable @next/next/no-img-element */
/* eslint-disable prettier/prettier */
import Image from 'next/image';

interface Collection {
  name: string;
  media: {
    mainMedia: {
      image: {
        url: string;
        altText: string;
      };
    };
  };
}

export default function Categories({ collections }: { collections: Collection[] }) {
  return (
    <div>
    <h2>Categories</h2>
    {collections.length === 0 ? (
        <p>No categories found</p>
    ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {collections.map((category: any) => (
                <div key={category.id} className="p-4 border rounded shadow">
                 
                    {category?.media?.mainMedia?.image?.url && (
                        <img
                            src={category.media.mainMedia.image.url}
                            alt={category.name}
                            style={{
                                width: '100%',
                                height: '150px',
                                objectFit: 'cover',
                                borderRadius: '8px',
                            }}
                        />
                    )}
                    <h3 className="text-lg font-bold mt-4">{category.name}</h3>
                    <p>{category.numberOfProducts} products</p>
                </div>
            ))}
        </div>
    )}
</div>
  );
}


