export interface globalStore {
  collapsed: boolean;
}
export interface menuActions {
  payload: {
    path: string;
    title: string;
    icon?: string;
  }[];
  type: string;
}

export interface menuOption {
  path: string;
  title: string;
  icon?: string;
  children?: menuOption[];
}
