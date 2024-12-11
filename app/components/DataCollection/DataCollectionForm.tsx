/* eslint-disable prettier/prettier */
type DataCollectionProps = {
  collection: {
    id: string;
    fields: Record<string, any>;
  };
};

export default function DataCollectionForm({ collection }: DataCollectionProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Collection ID: {collection.id}</h2>
      <ul className="list-disc pl-5">
        {Object.entries(collection.fields).map(([fieldId, fieldValue], index) => (
          <li key={index}>
            <strong>{fieldId}:</strong> {JSON.stringify(fieldValue)}
          </li>
        ))}
      </ul>
    </div>
  );
}
