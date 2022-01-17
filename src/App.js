import './assets/css/App.css';
import Container from './Components/Container';
import Nav from './Components/Nav';
import { useEffect, useRef, useState } from 'react';
import NET from "vanta/dist/vanta.net.min";
import * as THREE from 'three';
import useCurrentTheme from './hooks/useCurrentTheme';

function App(props) {
	const { currentTheme, toggle } = useCurrentTheme();

	useEffect(() => {
		const threeScript = document.createElement("script")
		threeScript.setAttribute("id", 'threeScript')
		threeScript.setAttribute("src", 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js')
		document.getElementsByTagName("head")[0].appendChild(threeScript)
		return (() => {
			if (threeScript) {
				threeScript.remove();
			}
		})
	}, [])

	const [vantaEffect, setVantaEffect] = useState(0)
	const vantaRef = useRef(null)

	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				NET({
					el:vantaRef.current,
					color: 0x9c25d7,
					backgroundAlpha: 0,
					points: 5.00,
					maxDistance: 10.00,
					spacing: 30.00,
					THREE
				})
			)
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy()
		}
	}, [vantaEffect])

  return (
    <div 
			className="App" 
			ref={vantaRef}
		>
      <Container />
			<Nav toggle={toggle} currentTheme={currentTheme}/>
    </div>
  );
}

export default App;
