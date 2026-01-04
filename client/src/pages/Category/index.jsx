import { useParams } from 'react-router-dom';
import { useCategoryProductList } from "@/features/products/hooks/useCategoryProductList";
import { ProductList } from "@/features/products/components/ProductList";
import CategoryInfo from "@/features/Category/components/CategoryInfo"
const CategoryPage = () => {
  const { categoryId } = useParams(); // 从 URL 中获取 ID
  console.log("categoryId:", categoryId)

  const { listings, filteredListings, loading, error } = useCategoryProductList(categoryId);
  console.log("products:", listings)

  if (loading) return <div>加载中...</div>;
  return (
    <div>
    <CategoryInfo />
    <div><ProductList items={listings} /></div>
    </div>
  );
};

export default CategoryPage;