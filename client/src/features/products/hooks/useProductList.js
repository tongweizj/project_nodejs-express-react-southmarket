import { useState, useEffect, useCallback } from "react";
import { list } from "@/services/api-listing";

export const useProductList = (query) => {
  // 存放从服务器拿到的原始产品列表。
  const [listings, setListings] = useState([]); 

  // 存放过滤后（比如搜索关键词匹配后）的产品列表。
  const [filteredListings, setFilteredListings] = useState([]);

  // 一个“开关”，用来记录数据是否正在加载中，好让 UI 显示“加载中...”提示。
  const [loading, setLoading] = useState(true);

  const fetchListings = useCallback(async (signal) => {
    try {
      const data = await list(signal);
      if (!data?.error) setListings(data);
    } catch (err) {
      if (err.name !== "AbortError") console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    fetchListings(controller.signal);
    return () => controller.abort();
  }, [fetchListings]);

  useEffect(() => {
    const filtered = listings.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredListings(filtered);
  }, [query, listings]);

  return { filteredListings, loading };
};