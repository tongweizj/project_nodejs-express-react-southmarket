// src/pages/Home/index.jsx
import React from "react";
import { useLocation } from "react-router-dom";

import { HeroBanner } from "@/features/products/components/HeroBanner";
import TopSales from '@/features/products/components/TopSales';
import Category from '@/features/products/components/Category';
import { ProductList } from "@/features/products/components/ProductList";

import { useProductList } from "@/features/products/hooks/useProductList";

const Home = () => {
  // 将首页复用成搜索结果页
  const location = useLocation(); // useLocation()组件能够获取当前浏览器的 URL 信息
  const params = new URLSearchParams(location.search);
  const query = params.get("query") || ""; // 当url != 'http://localhost:5174/?query=apple' 时，query=""

  // 使用 Feature Hook
  const { filteredListings, loading } = useProductList(query);

  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto  px-4">
        <HeroBanner />
        <TopSales />
        <Category />
        {loading ? (
          <div className="flex justify-center py-10">加载中...</div> // 后续换成 Spinner
        ) : filteredListings.length > 0 ? (
          <ProductList items={filteredListings} />
        ) : (
          <p className="text-center text-gray-500 mt-10 text-lg">
            No listings match your search criteria.
          </p>
        )}
      </main>
    </div>
  );
};

export default Home;