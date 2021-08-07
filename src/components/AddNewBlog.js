import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function AddNewBlog() {
	const [Title, setTitle] = useState('');
	const [userId, setUserId] = useState('');
	const [content, setContent] = useState('');

	const history = useHistory();

	const addPost = (e) => {
		e.preventDefault();

		const newPost = {
			 Title, userId, content
			 };

		fetch('https://jsonplaceholder.typicode.com/posts'
		,{

			method: 'POST',
			headers: { 'content-type': 'application/json' 
		},
			content: JSON.stringify(newPost),
		})
			.then((response) => response.json())
			.then((json) => {
				console.log(json);
				alert('Added');
				history.push('/');
			});
	};
	return (
		<div className="add-post">
			<h2><u>Add New Blog</u></h2>

			<form onSubmit={addPost}>
				<label>Enter Title here</label>
				
				<input
					type="text"
					value={Title}

					onChange={(e) => setTitle(e.target.value)}
				/>

				<label>Enter Name of the Writer here</label>
				<input
					type="text"
					value={userId}
					onChange={(e) => setUserId(e.target.value)}
				/>

				<label>Add Content</label>
				<textarea
					type="text"
					value={content}
					onChange={(e) => setContent(e.target.value)}
				/>

				<button> Publish </button>
			</form>
		</div>
	);
}

export default AddNewBlog;
