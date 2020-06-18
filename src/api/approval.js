const proxy = window.config.host.authorization;

//测试
const test = ({ $axios }, data) => $axios.get(`/alm/approve/query`, data);

export { test };
