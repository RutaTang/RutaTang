import { useEffect,useState } from 'react';
import {useParams} from 'react-router-dom'


import { DataStore } from 'aws-amplify';
import { Post } from '../models'

import {prettyPost} from '../utils/pretty'

const BlogPostDetail = ()=>{
	const { id } = useParams();
	const [post, setPost] = useState(null);
	useEffect(()=>{
		DataStore.query(Post, id).then(_post=>{
			setPost(prettyPost(_post))
		})
	},[])
	return (
		<div>
			{
			post
				&&
				(
					<div>
					<h1>{post.title}</h1>
					<p>{post.content}</p>
					</div>
				) 
			}
		</div>
	)
}


export default BlogPostDetail;
