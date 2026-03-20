import React, { useRef } from "react";



export function useSearchForm(onSearchText: (text: string) => void) {
    const timeoutId = useRef(0)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const text = event.target.value

        if (timeoutId.current) {
            clearTimeout(timeoutId.current)
        }

        timeoutId.current = setTimeout(() => {
            onSearchText(text)
        }, 1000)

    }

    return { handleChange }
}