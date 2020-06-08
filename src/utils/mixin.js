import { mapGetters, mapActions } from "vuex";
export const loanInspectionMixin = {
  computed: {
    ...mapGetters(["nextFooter", "definite1"])
  },
  methods: {
    ...mapActions(["setNextFooter", "setDefinite1"])
  }
};
