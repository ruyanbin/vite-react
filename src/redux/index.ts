// configureStore: store配置项
import { configureStore } from '@reduxjs/toolkit';
// / combineReducers： 组合reducers目录下的所有reducer模块
import { combineReducers } from 'redux';

// 数据持久化
import { persistStore, persistReducer } from 'redux-persist';
// 默认存储到storage
import storageLocation from "redux-persist/lib/storage";

import logger from 'react-logger';
import thunk from 'react-thunk';


import MenuSliceReducer from '@s/feature/Menu';
import globalSlice from '@s/feature/Global';
// 持久换存储对象配置
const presistConfig = {
    key: 'root',
    storage: storageLocation
}
// 持久化处理reduce
const presistReducer = persistReducer(presistConfig, combineReducers({
    MenuSliceReducer,
    globalSlice,
}))
const Store = configureStore({
  /**
     *  如果是函数 它直接用作存储根花简器
如果是对象 他将对象传递给Redux 中的 combineReducers 实用程序 来自动创建 跟化简其

     */
  reducer: presistReducer,
  /**
     *  如果是函数 它直接用作存储根花简器
如果是对象 他将对象传递给Redux 中的 combineReducers 实用程序 来自动创建 跟化简其

     */
  middleware: [logger, thunk],
  devTools: true, // 是否开启redux-devTool 调试工具 默认是开启的

  preloadedState: {
    // 预先创建 在使用的时候要记住田间初始状态
  },
});

export default Store;
