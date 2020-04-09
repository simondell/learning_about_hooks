import React, {
	useEffect,
	useState,
} from 'react'

function logWhenEffectsOccur (): () => void {
	console.log('effect')

	return function logAfter () {
		console.log('clean up')
	}
}

function App() {
	const [count, setCount] = useState(0)

	// this runs after each render
	useEffect(() => {
		document.title = `Clicked ${count} times`
	})

	useEffect(logWhenEffectsOccur)

	return (
		<div className="App">
			Counter: {count} clicks.
			<br/>
			<button
				onClick={() => { setCount(count + 1) }}
			>
				Click me!
			</button>
		</div>
	)
}

export default App
