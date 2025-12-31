import React from 'react';
import ProductCard from "./ProductCard";

/**
 * ProductList 展示组件
 * @param {Array} items - 商品列表数据
 */
export const ProductList = ({ items }) => {
  console.log(items)
  return (
    // 使用 Tailwind Grid 替代 MUI Grid
    // grid-cols-1: 手机端 1 列
    // sm:grid-cols-2: 平板端 2 列
    // lg:grid-cols-3: 桌面端 3 列
    // xl:grid-cols-4: 宽屏端 4 列 (电商项目建议加这一层)
    <div class="mx-auto max-w-7xl py-1">
      <h2 className='text-3xl font-bold mb-6'>New Arrivals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item._id}
            className="flex justify-center transition-transform duration-300 hover:-translate-y-1"
          >
            <ProductCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

