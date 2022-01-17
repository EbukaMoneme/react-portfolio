import { useState, useCallback, useEffect } from "react";

export default function useCurrentTheme() {
	const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('theme'))

	const toggle = useCallback(() => {
		if (currentTheme !== 'dark') {
			setCurrentTheme('dark')
			document.documentElement.setAttribute('data-theme', 'dark');
			localStorage.setItem('theme', 'dark');
		}
		else { 
			setCurrentTheme('light')
			document.documentElement.setAttribute('data-theme', 'light');
			localStorage.setItem('theme', 'light');
		}
	}, [currentTheme])

	useEffect(() => {
		if (currentTheme) {
			document.documentElement.setAttribute('data-theme', currentTheme);
		}
	}, [currentTheme, setCurrentTheme]);
	return { currentTheme, toggle }
}