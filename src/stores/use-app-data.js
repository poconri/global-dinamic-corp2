import {create} from 'zustand';

export const useAppData = create((set) => ({
    data: null,
    setData: (data) => set({data}),
}));