export type HomeComponentState = {
  text: string
  dialog: boolean
  tableHeaders: DataTableHeaderType[]
  tableItems: Array<{ [k: string]: string | number }>
  selectDate: string
}

export type DataTableHeaderType = {
  text: string
  value: string
  align?: string
  sortable?: boolean
}
