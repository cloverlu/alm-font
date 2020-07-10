const proxy = window.config.host.authorization;

//测试
const test = ({ $axios }, data) => $axios.get(`/alm/approve/query`, data);

// 审批的基本详情
const approveBaseDetail = ({ $axios }, data) =>
  $axios.get(`/alm/approve/queryForProcess`, data);

//下一岗位处理人
const handleParams = ({ $axios }, data) =>
  $axios.get(`/alm/employee/getListByParams`, data);

export { test, approveBaseDetail, handleParams };
