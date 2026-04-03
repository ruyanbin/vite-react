import Mock from 'mockjs';

/**
 * 生成模拟用户数据
 * @param current - 当前页码
 * @param pageSize - 每页条数
 * @returns 分页用户数据
 */
export const getUserList = (current: number, pageSize: number) => {
  const data = Mock.mock({
    'list|100': [
      {
        'id|+1': 1,
        'name|1': ['@cname'],
        'email|1': ['@email'],
        'status|1': ['1', '0'],
      },
    ],
  });

  const total = data.list.length;
  const start = (current - 1) * pageSize;
  const end = start + pageSize;
  const paginatedList = data.list.slice(start, end);

  return {
    data: paginatedList,
    total,
    current,
    pageSize,
  };
};

/**
 * 生成模拟角色数据
 * @param current - 当前页码
 * @param pageSize - 每页条数
 * @returns 分页角色数据
 */
export const getRoleList = (current: number, pageSize: number, params: Record<string, unknown>) => {
  console.log('请求参数：', current, pageSize, params); // 打印请求参数
  const data = Mock.mock({
    'list|50': [
      {
        'id|+1': 1,
        'name|1': ['管理员', '普通用户', 'VIP用户', '超级管理员', '运营人员'],
        'code|1': ['admin', 'user', 'vip', 'super_admin', 'operator'],
        'status|1': ['1', '0'],
        'description|1': ['系统管理员', '普通用户', 'VIP会员', '超级管理员', '运营人员'],
      },
    ],
  });

  const total = data.list.length;
  const start = (current - 1) * pageSize;
  const end = start + pageSize;
  const paginatedList = data.list.slice(start, end);

  return {
    data: paginatedList,
    total,
    current,
    pageSize,
  };
};
