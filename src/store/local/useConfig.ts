import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Config {
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
        set(() => ({
          quantityToSort: quantity
        }))
      },

      disableShowInfo: () => {
        set(() => ({
          showInfo: false
        }))
      }
    }),
    {
      name: 'randomsort:CONFIG'
    })
)
