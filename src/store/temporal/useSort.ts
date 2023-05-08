import { create } from 'zustand'
import { ModalConfig, NameInput } from '../../types/types'
import { createId } from '../../utilities/createId'

interface SortParams {
  nameList: NameInput[]

  quantityToSort: number

  openModal: (config: ModalConfig) => void

  navigate: (to: string) => void
}

interface Sort {
  sortList: NameInput[]

  sort: (params: SortParams) => void
}

export const useSort = create<Sort>(
  set => ({
    sortList: [],

    sort: ({ nameList, quantityToSort, openModal, navigate }) => {
      const newSortList = [...nameList].filter(el => el.name !== '')

      if (newSortList.length < 2) {
        openModal({
          msg: '2 or more inputs are required',
          showBtn: false,
          action: () => { }
        })
        return
      }

      if (quantityToSort < 1) {
        openModal({
          msg: 'Input a valid amount to re-sort',
          showBtn: false,
          action: () => { }
        })
        return
      }

      const fakeArray: NameInput[] = []
      fakeArray.length = 1
      set(() => ({ sortList: fakeArray }))
      navigate('/sort')

      const newArr: NameInput[][] = []
      for (let i = 0; i < Math.ceil(quantityToSort / newSortList.length); i++) {
        newArr.push(newSortList)
      }

      newArr.forEach(list => list.sort(() => Math.random() - 0.5))
      newArr.forEach(list => list.sort(() => Math.random() - 0.5))

      const _sortList = newArr.flat().slice(0, quantityToSort)
      const sortList = _sortList.map(input => ({ id: createId(), name: input.name }))
      sortList.sort(() => Math.random() - 0.5)

      setTimeout(() => set(() => ({ sortList })), 250)
    }
  })
)
