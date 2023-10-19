declare interface globalStore {
  collapsed: boolean;
}
declare interface menuActions {
  payload: {
    path: string;
    title: string;
    icon?: string;
  }[];
  type: string;
}

declare interface menuOption {
  path?: string;
  title: string;
  icon?: string;
  children?: menuOption[];
}
