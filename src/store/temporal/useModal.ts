import { create } from 'zustand'
import { ModalConfig } from '../../types/types'

type Modal = {
  modalConfig: ModalConfig
  openModal: (config: ModalConfig) => void
}

export const useModal = create<Modal>(
  set => ({
    modalConfig: {
      msg: '',
      showBtn: false,
      action: () => { }
    },

    openModal: ({ msg, showBtn, action }) => {
      set(state => ({
        modalConfig: {
          msg,
          showBtn,
          action
        }
      }))
      document.getElementById('launchModal')?.click()
      
    }
  })
)