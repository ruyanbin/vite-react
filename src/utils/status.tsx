import { Tag } from 'antd';

// 显式导出Tag以避免未使用警告
export { Tag };

/**
 * 状态翻译配置
 * @property value - 状态值
 * @property label - 状态显示文本
 * @property color - 状态标签颜色
 */
export interface StatusConfig {
  value: string | number;
  label: string;
  color?: 'success' | 'processing' | 'error' | 'default' | 'warning' | 'purple' | 'cyan' | 'gold' | 'lime';
}

/**
 * 状态翻译映射
 * @property [key: string]: StatusConfig[] - 列数据索引对应的配置
 */
export type StatusMap = Record<string, StatusConfig[]>;

/**
 * 根据状态值获取翻译后的标签配置
 * @param status - 状态值
 * @param configs - 状态配置数组
 * @returns 翻译后的标签配置，如果未找到则返回 null
 */
export const getStatusConfig = (status: string | number, configs: StatusConfig[]): StatusConfig | null => {
  return configs.find((config) => config.value === status) || null;
};

/**
 * 格式化表格列，自动添加状态翻译
 * @param columns - 表格列配置
 * @param statusMap - 状态翻译映射
 * @returns 格式化后的表格列配置
 */
export const formatTableColumns = (
  columns: any[],
  statusMap?: StatusMap
): {
  title: string;
  dataIndex: string;
  key?: string;
  render?: (text: any, record: any) => any;
}[] => {
  return columns.map((col) => {
    if (!statusMap || !col.dataIndex || !statusMap[col.dataIndex]) {
      return col;
    }

    const statusConfigs = statusMap[col.dataIndex];

    return {
      ...col,
      render: (text: any) => {
        const config = getStatusConfig(text, statusConfigs);
        if (config) {
          return <Tag color={config.color}>{config.label}</Tag>;
        }
        return text;
      },
    };
  });
};