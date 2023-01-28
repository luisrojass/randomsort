export interface NameInput {
  name: string
  id: string
}

export interface GroupInput {
  id: string
  title: string
  members: NameInput[]
}

export interface ModalConfig {
  msg: string
  showBtn: boolean
  action: () => void
}