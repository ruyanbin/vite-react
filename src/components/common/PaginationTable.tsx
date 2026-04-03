import { Table } from 'antd';
import type { TableProps } from 'antd';

import { usePagination } from '#/hooks/usePagination';
import { StatusMap, formatTableColumns } from '#/utils/status';

interface PaginationTableProps<T> extends TableProps<T> {
  api: (params: { current: number; pageSize: number }) => Promise<{
    data: T[];
    total: number;
    current: number;
    pageSize: number;
  }>;
  pageSize?: number;
  rowKey?: string | ((record: T) => string);
  statusMap?: StatusMap;
}

function PaginationTable<T extends Record<string, unknown>>(props: PaginationTableProps<T>) {
  const { api, pageSize = 10, rowKey = 'id', statusMap, columns, ...tableProps } = props;

  const {
    loading,
    data,
    total,
    current,
    pageSize: tablePageSize,
    onChange,
  } = usePagination<T>({
    api,
    pageSize,
  });

  const pagination = {
    current,
    pageSize: tablePageSize,
    total,
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: (total: number) => `共 ${total} 条`,
    pageSizeOptions: ['10', '20', '50', '100'],
    onChange,
  };

  const formattedColumns = formatTableColumns(columns || [], statusMap);

  return (
    <Table
      loading={loading}
      dataSource={data}
      pagination={pagination}
      rowKey={rowKey}
      columns={formattedColumns}
      {...tableProps}
    />
  );
}

export default PaginationTable;
