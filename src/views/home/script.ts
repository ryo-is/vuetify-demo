import Vue from "vue"
import { HomeComponentState } from "@/types"

export default Vue.extend({
  data(): HomeComponentState {
    return {
      text: "Hello Vue!!!",
      dialog: true
    }
  },
  methods: {
    getText(): string {
      return this.text
    }
  }
})
