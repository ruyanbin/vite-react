import QueryPage, { QueryPageConfig } from '#/components/common/QueryPage';
import { getRoleList } from '#/mock/api';
import { StatusConfig } from '#/utils/status';

interface Role {
  id: string;
  name: string;
  code: string;
  status: string;
  description: string;
}

const statusConfigs: StatusConfig[] = [
  { value: '1', label: '启用', color: 'success' },
  { value: '0', label: '禁用', color: 'error' },
];

function Role() {
  const config: QueryPageConfig<Role> = {
    searchColumns: [
      { dataIndex: 'name', title: '角色名称', type: 'input' },
      { dataIndex: 'code', title: '角色编码', type: 'input' },
      {
        dataIndex: 'status',
        title: '状态',
        type: 'select',
        options: statusConfigs.map((item) => ({ label: item.label, value: item.value as string })),
      },
    ],
    tableColumns: [
      { title: 'ID', dataIndex: 'id' },
      { title: '角色名称', dataIndex: 'name' },
      { title: '角色编码', dataIndex: 'code' },
      { title: '状态', dataIndex: 'status' },
      { title: '描述', dataIndex: 'description' },
    ],
    api: (params) => {
      const { current, pageSize, ...searchParams } = params;
      console.log('请求参数：', current, pageSize, searchParams);
      return Promise.resolve(getRoleList(current, pageSize, searchParams));
    },
    pageSize: 10,
    rowKey: 'id',
    statusMap: {
      status: statusConfigs,
    },
  };
  return <QueryPage {...(config as any)} />;
}

export default Role;
