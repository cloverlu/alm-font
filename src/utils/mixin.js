import { mapGetters, mapActions } from "vuex";

// 贷后检查
export const loanInspectionMixin = {
  computed: {
    ...mapGetters([
      "nextFooter",
      "prevFooter",
      "definite1",
      "definite12",
      "definite13",
      "definite11",
      "definite10",
      "definite5",
      "definite4",
      "routineDefinite3",
      "bizType"
    ])
  },

  methods: {
    ...mapActions([
      "setNextFooter",
      "setPrevFooter",
      "setDefinite1",
      "setDefinite12",
      "setDefinite13",
      "setDefinite11",
      "setDefinite10",
      "setDefinite4",
      "setDefinite5",
      "setRoutineDefinite3",
      "setBizType"
    ])
  }
};

//业务审批
export const approvalMixin = {
  computed: {
    ...mapGetters(["addmore"])
  },
  methods: {
    ...mapActions(["setAddmore"])
  }
};

// 用户管理
export const userMixin = {
  computed: {
    ...mapGetters([])
  },
  methods: {
    ...mapActions([])
  }
};
