import { useCallback, useState } from 'react';

import { FormItemProps } from '#/typings/components/form';
// 将中文分号改为英文分号

import { StatusMap } from '#/utils/status';

import PaginationTable from './PaginationTable';
// 将中文分号改为英文分号
import SearchForm from './SearchForm';

export interface QueryParams {
  current: number;
  pageSize: number;
  [key: string]: any;
}

export interface QueryPageConfig<T> {
  searchColumns?: FormItemProps[];
  api: (params: QueryParams) => Promise<{
    data: T[];
    total: number;
    current: number;
    pageSize: number;
  }>;
  tableColumns: any[];
  pageSize?: number;
  rowKey?: string | ((record: T) => string);
  onSearch?: (values: any) => void;
  beforeSearch?: (values: any) => any;
  statusMap?: StatusMap;
}

function QueryPage<T extends Record<string, unknown>>(config: QueryPageConfig<T>) {
  const { searchColumns, api, tableColumns, pageSize = 10, rowKey = 'id', onSearch, beforeSearch, statusMap } = config;

  const [searchParams, setSearchParams] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(false);

  const handleSearch = useCallback(
    (values: any) => {
      let params = { ...values };

      if (beforeSearch) {
        params = beforeSearch(params);
      }

      setSearchParams(params);
      onSearch?.(values);
    },
    [beforeSearch, onSearch]
  );

  const fetchData = useCallback(
    async (current: number, ps: number) => {
      setLoading(true);
      try {
        const res = await api({ current, pageSize: ps, ...searchParams });
        return res;
      } finally {
        setLoading(false);
      }
    },
    [api, searchParams]
  );

  return (
    <div className='query-page'>
      {searchColumns && searchColumns.length > 0 && <SearchForm columns={searchColumns} onSubmit={handleSearch} />}
      <PaginationTable
        columns={tableColumns}
        api={async ({ current, pageSize }) => {
          const res = await fetchData(current, pageSize);
          return {
            data: res.data,
            total: res.total,
            current: res.current,
            pageSize: res.pageSize,
          };
        }}
        loading={loading}
        pageSize={pageSize}
        rowKey={rowKey}
        statusMap={statusMap}
      />
    </div>
  );
}

export default QueryPage;
