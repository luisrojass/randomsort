import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Config = {
  theme: string
  showInfo: boolean
  quantityToSort: number

  changeTheme: () => void
  changeQuantityToSort: (quantity: number) => void
  disableShowInfo: () => void
}

export const useConfig = create(
  persist<Config>(
    set => ({
      theme: 'dark',
      showInfo: false,
      quantityToSort: 1,

      changeTheme: () => {
        set(state => ({
          theme: state.theme === 'dark' ? 'light' : 'dark'
        }))
      },

      changeQuantityToSort: (quantity) => {
        set(state => ({
          quantityToSort: quantity
        }))
      },

      disableShowInfo: () => {
        set(state => ({
          showInfo: false
        }))
      }
    }),
    {
      name: 'pick-random:CONFIG'
    })
)