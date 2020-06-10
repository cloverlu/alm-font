import { mapGetters, mapActions } from "vuex";
export const loanInspectionMixin = {
  computed: {
    ...mapGetters(["nextFooter", "definite1", "prevFooter"])
  },
  methods: {
    ...mapActions(["setNextFooter", "setDefinite1", "setPrevFooter"])
  }
};
