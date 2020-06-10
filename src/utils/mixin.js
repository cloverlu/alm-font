import { mapGetters, mapActions } from "vuex";
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
      "routineDefinite3"
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
      "setRoutineDefinite3"
    ])
  }
};
