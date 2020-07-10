//客户
const getListByParams = ({ $axios }, data) =>
  $axios.get(`/alm/employee/getListByParams`, data);

// 借据列表信息
const loanReceiptParams = ({ $axios }, data) =>
  $axios.post(`/alm/loanReceipt/getListByParams`, data);
export { getListByParams, loanReceiptParams };
