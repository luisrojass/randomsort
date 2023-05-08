import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { GroupInput, NameInput } from '../../types/types'
import { createId } from '../../utilities/createId'

interface NameList {
  nameList: NameInput[]

  createName: () => void

  editName: (id: string, name: string) => void

  deleteName: (id: string) => void

  deleteAllNames: () => void

  selectGroup: (group: GroupInput) => void
}

export const useNameList = create(
  persist<NameList>(
    set => ({
      nameList: [
        { name: '', id: createId() }
      ],

      createName: () => {
        set(state => ({
          nameList: [{
            id: createId(),
            name: ''
          }, ...state.nameList]
        }))
      },

      editName: (id, name) => {
        set(state => ({
          nameList: state.nameList.map(
            el => el.id === id
              ? { id, name }
              : el
          )
        }))
      },

      deleteName: (id) => {
        set(state => ({
          nameList: state.nameList.filter(name => name.id !== id)
        }))
      },

      deleteAllNames: () => {
        set(() => ({
          nameList: []
        }))
      },

      selectGroup: (group) => {
        set(() => ({
          nameList: group.members
        }))
      }
    }),
    {
      name: 'randomsort:NAMELIST'
    })
)
