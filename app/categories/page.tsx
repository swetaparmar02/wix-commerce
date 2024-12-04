/* eslint-disable prettier/prettier */
import { fetchCollections } from "../lib/wixApi";
import Categories from "../components/categories/categories";


export default async function CategoriesPage() {
  try {
    const collections = await fetchCollections();

    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Categories</h1>
        <Categories collections={collections} />
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Categories</h1>
        <p className="text-red-500">Failed to load categories. Please try again later.</p>
      </div>
    );
  }
}



