export default {
  isLive: false, // 是否是直播
  box: 'flv', // 容器
  seekInKeyframe: true, // 总是seek 到关键帧
  alwaysSeekKeyframe: true, // 总是seek 到关键帧
  lazyLoadMaxDuration: 2 * 60, // 懒加载 最大播放长度
  lazyLoadRecoverDuration: 30, // 懒加载还有多少长度 重启加载功能
  lockInternalProperty: false, // 锁定原生的选项
  debug: true, // 是否开启debug模式
  webWorker: false, // 是否开启webworker
  autoCleanupSourceBuffer: true, // 是否自动清除 sourcebuffer
  autoCleanupMaxBackwardDuration: 30, // 清除sourcebuffer最大时间
  autoCleanupMinBackwardDuration: 30, // 清除sourcebuffer最小时间
  stashSize: 1024 * 384, // io缓存大小 直播下建议设置成 1024 * 128
  seekType: 'range'// seek请求的方式 是range 还是 query
};
