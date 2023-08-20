import { create } from "zustand";

export const useLanguage = create((set,get) => ({
	isSpanish: true,
	setLanguage: () =>
		{
            const isSpanish = get().isSpanish
            set({
			isSpanish: !isSpanish,
		})},
}));
