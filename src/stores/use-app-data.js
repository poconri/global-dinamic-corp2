import {create} from 'zustand';

export const useAppData = create((set) => ({
    data: null,
    about: null,
    setData: (data) => set({data}),
    setAbout:(about)=>set({about})
}));