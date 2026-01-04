import { useState, useEffect, useCallback, useMemo } from "react";
import { list } from "@/services/api-listing";
// 这是一个临时的文件，要和 useCategoryProductList 合并
export const useCategoryProductList = (query) => {
  // 存放从服务器拿到的原始产品列表。
  const [listings, setListings] = useState([]); 

  // 一个“开关”，用来记录数据是否正在加载中，好让 UI 显示“加载中...”提示。
  const [loading, setLoading] = useState(true);
// 3. 错误处理（建议增加，增强健壮性）
  const [error, setError] = useState(null);

  const fetchListings = useCallback(async (signal) => {
    try {
        setLoading(true);
      const data = await list(signal);
      if (data && !data.error) {
        setListings(data);
      } else {
        setError(data?.error || "Failed to fetch products");
      }
      console.log("products data:", data)
      console.log("listings data:", listings)
    } catch (err) {
      // 如果是被手动取消的请求，不报错
      if (err.name !== "AbortError") {
        console.error("Fetch error:", err);
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  }, []);

// 触发获取数据的副作用：仅在组件挂载时执行一次
  useEffect(() => {
    const controller = new AbortController();
    fetchListings(controller.signal);
    
    // 清理函数：组件卸载时取消请求
    return () => controller.abort();
  }, [fetchListings]);

  // 【核心合并点】使用 useMemo 进行派生计算
  // 只要 listings 或 query 发生变化，filteredListings 就会自动重新计算
  const filteredListings = useMemo(() => {
    if (!query) return listings;
    
    const lowerQuery = query.toLowerCase();
    return listings.filter((item) =>
      item.title?.toLowerCase().includes(lowerQuery)
    );
  }, [query, listings]);



  return { 
    listings,           // 原始列表
    filteredListings,   // 过滤后的列表（Home页面主要用这个）
    loading, 
    error 
  };
};