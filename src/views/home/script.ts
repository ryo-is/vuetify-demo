import Vue from "vue"
import { HomeComponentState } from "@/types"
import dayjs from "dayjs"

export default Vue.extend({
  data(): HomeComponentState {
    return {
      text: "Hello Vue!!!",
      dialog: false,
      tableHeaders: [
        { text: "Name", value: "name", sortable: false },
        { text: "Age", value: "age" },
        { text: "Gender", value: "gender", sortable: false }
      ],
      tableItems: [
        { name: "Taro", age: 20, gender: "Male" },
        { name: "Hanako", age: 18, gender: "Female" },
        { name: "Ichiro", age: 25, gender: "Male" }
      ],
      selectDate: ""
    }
  },
  mounted() {
    this.selectDate = dayjs().format("YYYY-MM-DD")
  },
  methods: {
    getText(): string {
      return this.text
    }
  }
})
