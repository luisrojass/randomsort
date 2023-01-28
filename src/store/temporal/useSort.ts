import { create } from 'zustand'
import { ModalConfig, NameInput } from '../../types/types'

type SortParams = {
  nameList: NameInput[]

  quantityToSort: number

  openModal: (config: ModalConfig) => void

  navigate: (to: string) => void
}

type Sort = {
  sortList: NameInput[]

  sort: (params: SortParams) => void
}

export const useSort = create<Sort>(
  set => ({
    sortList: [],

    sort: ({ nameList, quantityToSort, openModal, navigate }) => {
      const newSortList = [...nameList].filter(el => el.name !== "")

      if (newSortList.length < 2) {
        openModal({
          msg: "2 or more inputs are required",
          showBtn: false,
          action: () => { }
        })
        return
      }

      if (quantityToSort < 1 || newSortList.length < quantityToSort) {
        openModal({
          msg: "Input a valid amount to re-sort",
          showBtn: false,
          action: () => { }
        })
        return
      }

      const fakeArray: any[] = []
      fakeArray.length = 1
      set(state => ({ sortList: fakeArray }))
      navigate('/sort')

      newSortList.sort(() => Math.random() - 0.5)
      setTimeout(() => {
        set(state => ({
          sortList: newSortList.slice(0, quantityToSort)
        }))
      }, 250)
    }
  })
)