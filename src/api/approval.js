const proxy = window.config.host.authorization;

//测试
const test = ({ $axios }, data) => $axios.get(`/alm/approve/query`, data);

// 审批的基本详情
const approveBaseDetail = ({ $axios }, data) =>
  $axios.get(`/alm/approve/queryForProcess`, data);

export { test, approveBaseDetail };
