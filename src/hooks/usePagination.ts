import { useCallback, useEffect, useState } from 'react';

/**
 * 分页参数接口
 * @property current - 当前页码
 * @property pageSize - 每页显示条数
 */
export interface PaginationParams {
  current: number;
  pageSize: number;
}

/**
 * 分页结果接口
 * @template T - 数据项的类型
 * @property data - 数据列表
 * @property total - 总条数
 * @property current - 当前页码
 * @property pageSize - 每页显示条数
 */
export interface PaginationResult<T> {
  data: T[];
  total: number;
  current: number;
  pageSize: number;
}

/**
 * usePagination 选项接口
 * @template T - 数据项的类型
 * @property api - 分页查询 API 函数
 * @property pageSize - 每页显示条数，默认为 10
 * @property immediate - 是否在初始化时立即执行查询，默认为 true
 */
export interface UsePaginationOptions<T> {
  api: (params: PaginationParams) => Promise<PaginationResult<T>>;
  pageSize?: number;
  immediate?: boolean;
}

/**
 * 分页 Hook
 * 封装了分页查询的逻辑，提供加载状态、数据、分页控制等功能
 * @template T - 数据项的类型
 * @param options - usePagination 选项
 * @returns 包含加载状态、数据、分页控制等的对象
 * @example
 * ```ts
 * const { loading, data, total, current, pageSize, onChange } = usePagination({
 *   api: async ({ current, pageSize }) => {
 *     const res = await fetch(`/api/users?page=${current}&pageSize=${pageSize}`);
 *     return res.json();
 *   },
 *   pageSize: 10,
 *   immediate: true,
 * });
 * ```
 */
export function usePagination<T>(options: UsePaginationOptions<T>) {
  const { api, pageSize = 10, immediate = true } = options;

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T[]>([]);
  const [total, setTotal] = useState(0);
  const [current, setCurrent] = useState(1);
  const [pageSizeState, setPageSizeState] = useState(pageSize);

  /**
   * 获取数据函数
   * @param page - 页码
   * @param ps - 每页条数
   */
  const fetchData = useCallback(
    async (page = current, ps = pageSizeState) => {
      setLoading(true);
      try {
        const res = await api({ current: page, pageSize: ps });
        setData(res.data);
        setTotal(res.total);
        setCurrent(res.current);
        setPageSizeState(res.pageSize);
      } finally {
        setLoading(false);
      }
    },
    [api, current, pageSizeState]
  );

  useEffect(() => {
    if (immediate) {
      fetchData();
    }
  }, [immediate, fetchData]);

  /**
   * 页码改变处理函数
   * @param page - 新的页码
   * @param ps - 新的每页条数
   */
  const handleChange = (page: number, ps?: number) => {
    setCurrent(page);
    if (ps) {
      setPageSizeState(ps);
    }
    fetchData(page, ps || pageSizeState);
  };

  return {
    loading,
    data,
    total,
    current,
    pageSize: pageSizeState,
    onChange: handleChange,
    refresh: fetchData,
  };
}
