import SearchForm from '#/components/common/SearchForm';

function Role() {
  return (
    <div>
      Role
      <SearchForm
        columns={[
          {
            dataIndex: 'name',
            title: '角色名称',
          },

          {
            dataIndex: 'code',
            title: '角色编码',
          },
          {
            type: 'select',
            dataIndex: 'status',
            title: '状态',
            options: [
              { label: '启用', value: '1' },
              { label: '禁用', value: '0' },
            ],
            onChange: (value: string | null) => {
              console.log(value);
            },
          },
          {
            type: 'date',
            dataIndex: 'createTime',
            title: '创建时间',
          },
          {
            type: 'date',
            dataIndex: 'updateTime',
            title: '更新时间',
          },

          {
            type: 'date',
            dataIndex: 'loginTime',
            title: '登录时间',
          },
          {
            type: 'date',
            dataIndex: 'logoutTime',
            title: '退出时间',
          },
        ]}
      ></SearchForm>
    </div>
  );
}

export default Role;
