import {create} from 'zustand';

export const useAppData = create((set) => ({
    data: null,
    about: null,
    sectionData: null,
    setData: (data) => set({data}),
    setAbout:(about)=>set({about}),
    setSectionData:(sectionData)=>set({sectionData}),

}));