import { useParams } from 'react-router-dom';

import { useProduct } from "@/features/products/hooks/useProduct";

const ProductDetailPage = () => {

  const { productId } = useParams(); // 从 URL 中获取 ID
  console.log("id:", productId)

  const { product, loading } = useProduct(productId);
  console.log("product:", product)

  if (loading) return <div>加载中...</div>;

  return (
    <div class="flex flex-col md:flex-row gap-4 min-h-screen">
      <div class="md:w-3/5 space-y-4">
        <div class="bg-gray-100 p-4 rounded">
          <h2 class="text-lg font-bold mb-2">商品图片</h2>
          <div class="flex items-center justify-center rounded">
            {product.images?.map((img, index) => (
              <img key={index} src={`/${img}`} />
            ))}
          </div>
        </div>
        <div class="bg-gray-100 p-4 rounded">
          <h2 class="text-lg font-bold mb-2">商品描述</h2>
          <p>{product.description}</p>
        </div>
      </div>
      <div class="md:w-2/5">
        <div class="sticky top-4 bg-gray-100 p-4 rounded">
          <h2 class="text-lg font-bold mb-4">购买信息</h2>
          <div class="space-y-4">
            <div>
              <p class="font-bold text-xl"> ${product.price}</p>
              <p class="text-gray-600 line-through">¥1299</p>
            </div>
            <div>
              <p class="font-medium mb-2">分类：${product.category}</p>
            </div>
            <button class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
              立即购买
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;