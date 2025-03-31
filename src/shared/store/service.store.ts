import { create } from 'zustand'

interface IStore {
	isModalVisible: boolean
	setIsModalVisible: (value: boolean) => void
}

export const useServiceStore = create<IStore>(set => ({
	isModalVisible: false,
	setIsModalVisible: value => set({ isModalVisible: value })
}))
