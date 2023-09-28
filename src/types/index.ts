enum TypeNotification { success, error, warning }
export type CallbackProps = {
  type: keyof typeof TypeNotification
  status?: number
  msg: string
}