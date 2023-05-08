import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { GroupInput } from '../../types/types'
import { createId } from '../../utilities/createId'

interface GroupList {
  // Group list
  groupList: GroupInput[]

  createGroup: () => void

  deleteGroup: (id: string) => void

  // Current group
  currentGroup: GroupInput

  setCurrentGroup: (group: GroupInput) => void

  editGroupTitle: (id: string, title: string) => void

  createNameInGroup: () => void

  editNameInGroup: (id: string, name: string) => void

  deleteNameInGroup: (id: string) => void
}

const updateGroupList = (
  groupList: GroupInput[],
  currentGroup: GroupInput
): GroupInput[] => {
  return groupList.map(group => {
    if (group.id !== currentGroup.id) return group
    else return currentGroup
  })
}

export const useGroupList = create(
  persist<GroupList>(
    set => ({
      currentGroup: {
        id: '',
        title: '',
        members: []
      },
      groupList: [],

      createGroup: () => {
        set(state => ({
          groupList: [{
            id: createId(),
            title: '',
            members: [{ id: createId(), name: '' }]
          }, ...state.groupList]
        }))

        set(state => ({
          currentGroup: state.groupList[0]
        }))
      },

      deleteGroup: (id) => {
        set(state => ({
          groupList: state.groupList.filter(group => group.id !== id)
        }))
      },

      // Current group
      setCurrentGroup: (group) => {
        set(() => ({
          currentGroup: group
        }))
      },

      editGroupTitle: (id, title) => {
        set(state => ({
          currentGroup: {
            id,
            title,
            members: state.currentGroup.members
          }
        }))

        set(state => ({
          groupList: updateGroupList(state.groupList, state.currentGroup)
        }))
      },

      createNameInGroup: () => {
        set(state => ({
          currentGroup: {
            id: state.currentGroup.id,
            title: state.currentGroup.title,
            members: [{
              id: createId(),
              name: ''
            }, ...state.currentGroup.members]
          }
        }))

        set(state => ({
          groupList: updateGroupList(state.groupList, state.currentGroup)
        }))
      },

      editNameInGroup: (id, name) => {
        set(state => ({
          currentGroup: {
            id: state.currentGroup.id,
            title: state.currentGroup.title,
            members: state.currentGroup.members.map(member => {
              if (member.id !== id) return member

              return { id, name }
            })
          }
        }))

        set(state => ({
          groupList: updateGroupList(state.groupList, state.currentGroup)
        }))
      },

      deleteNameInGroup: (id) => {
        set(state => ({
          currentGroup: {
            id: state.currentGroup.id,
            title: state.currentGroup.title,
            members: state.currentGroup.members.filter(group => group.id !== id)
          }
        }))

        set(state => ({
          groupList: updateGroupList(state.groupList, state.currentGroup)
        }))
      }
    }),
    {
      name: 'randomsort:GROUPLIST'
    })
)
