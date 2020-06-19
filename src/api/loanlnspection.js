//待办事项1
const getToDoList = ({ $axios }, data) =>
  $axios.get(`/alm/postLoan/business/toDoList`, data)

// 贷后检查列表
const getNoticeCheckList = ({ $axios }, data) =>
  $axios.post(`/alm/postLoan/business/noticeCheckList`, data)

// 保存
const SaveEditModelBusiness = ({ $axios }, data) =>
  $axios.post(`/alm/postLoan/business/editModelBusiness`, data)

// 申请明细
const queryForDtail = ({ $axios }, data) =>
  $axios.post(`/alm/postLoan/business/queryForDtail`, data)

export { getToDoList, getNoticeCheckList, SaveEditModelBusiness, queryForDtail }
