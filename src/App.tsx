import React, {
	useEffect,
	useState,
} from 'react'
import jsonp from 'jsonp'

interface Photo {
	title: string
	link: string
	media: { m: string } 
	date_taken: string 
	description: string 
	published: string
	author: string 
	author_id: string
	tags: string 
}

function App() {
	const [publicPhotos, setPublicPhotos] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const path = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json'
		const options = {
			param: 'jsoncallback'
		}

		setLoading(true)
		jsonp(path, options, handleResponse)
	}, [])

	function handleResponse (err: Error | null, data: any) {
		setPublicPhotos(data.items)
		setLoading(false)
	}

	return (
		<div className="App">
			<section>
				<h1>Status</h1>
				<p>
					{loading && <div>loading...</div>}
					{!loading && <pre><code>got {publicPhotos.length} photos</code></pre>}
				</p>
			</section>
			{publicPhotos.length &&
				<section>
					<ol>{
						publicPhotos.map((photo: Photo) =>
							<li
								key={`photo-${photo.link}`}
							>
								<a
									href={photo.link}
								>
									<img
										alt=""
										src={photo.media.m}
									/>
								</a>
								<div
									dangerouslySetInnerHTML={{__html: photo.description}}
								/>
							</li>
						)
					}</ol>
				</section>
			}
		</div>
	)
}

export default App
