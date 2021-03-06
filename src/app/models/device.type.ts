export interface Device {
  id?: string
  name: string
  roomId?: string
  template?: string
  pluginName?: string
  driver?: string
  type?: string
  data?: any
  privateData?: any
  isFavorite?: boolean
}
