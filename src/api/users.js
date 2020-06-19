//客户列表
const getListByParams = ({ $axios }, data) =>
  $axios.post(`/alm/loanReceipt/getListByParams`, data)

export { getListByParams }
