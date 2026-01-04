import { useState, useEffect, useCallback } from "react";
import { read } from "@/services/api-listing";

export const useProduct = (query) => {
  
    // 存放从服务器拿到的产品数据
  const [product, setProduct] = useState(null); 

  // 一个“开关”，用来记录数据是否正在加载中，好让 UI 显示“加载中...”提示。
  const [loading, setLoading] = useState(true);

  const fetchProduct = useCallback(async () => {
    setLoading(true);
    console.log("hook query:",query)
    try {
      const data = await read(query);
      if (!data?.error) setProduct(data);
    } catch (err) {
      if (err.name !== "AbortError") console.error(err);
    } finally {
      setLoading(false);
    }
  }, [query]);

  useEffect(() => {
    const controller = new AbortController();
    fetchProduct(controller.signal);
    return () => controller.abort();
  }, [fetchProduct]);


  return { product, loading };
};