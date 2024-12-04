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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {collections.map((collection, index) => (
        <div key={index} className="p-4 border rounded shadow">
          {collection.media?.mainMedia?.image?.url && (
            <Image
              src={collection.media.mainMedia.image.url}
              alt={collection.media.mainMedia.image.altText || collection.name}
              width={400}
              height={300}
              className="rounded"
            />  
          )}
          <h3 className="text-lg font-bold mt-4">{collection.name}</h3>
        </div>
      ))}
    </div>
  );
}


