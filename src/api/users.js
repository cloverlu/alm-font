//客户
const getListByParams = ({ $axios }, data) =>
  $axios.post(`/alm/loanReceipt/getListByParams`, data);

export { getListByParams };
