import React from 'react';
import Component from './Component';
import useFetch from './useFetch';

function Home()
 {
	const { data: posts } = useFetch ( 'https://jsonplaceholder.typicode.com/posts' );


	return (
		<div className="posts-list">
			<div className="posts-container">
				{posts ? 
				( posts.map((post) => <Component data={post} key={post.id} />)
				) : (
					<p>Loading please Wait...</p>
				)}
			</div>
		</div>
	);
}
export default Home;
