// 接口调用文件  全局使用
// 20181124，确定使用node、express框架、连接数据库做接口开发。不使用java
// 开始进行数据库数据准备工作
// 20181127 node接口开发：连接数据库实现了增删改查功能，细节需要优化
let _host = "https://api.github.com";
let axiosUrl = {
  'users': _host + '/users'
}
export default axiosUrl