import {useState,useEffect,useMemo} from 'react'
import {FaWifi,FaSearch} from 'react-icons/fa'
import {AiFillWindows, AiOutlineClose,AiOutlinePlus} from 'react-icons/ai'

import { DataStore, Predicates } from 'aws-amplify';
import {TagPost,Tag,Post} from '../models'

import Header from '../components/Header'
import Footer from '../components/Footer'

import { convertISODatetimeToDate } from '../utils/datetime-parser'


function uniquePosts(posts){
	return posts.filter((post,index,self)=>self.findIndex(p=>p.id===post.id)===index)
}

async function fetchTagsWithPosts(){
	const pairs = await DataStore.query(TagPost,Predicates.ALL)

	// {tag:{posts}}
	let tagsWithPosts = await DataStore.query(Tag,Predicates.ALL)
	tagsWithPosts = tagsWithPosts.map(tag=>{
		const newTag = {...tag}
		newTag.posts = pairs.filter(pair=>pair.tag.id===tag.id).map(pair=>pair.post)
		return newTag
	})

	// posts
	const posts = pairs.map(pair=>pair.post)

	return {tagsWithPosts,posts}
}



function prettyTag(tag){
	return {
		id:tag.id,
		name:tag.name,
		posts:tag.posts,
	}
}

function prettyPost(post){
	return {
		id:post.id,
		title:post.title,
		createdAt:convertISODatetimeToDate(post.createdAt),
		updatedAt:convertISODatetimeToDate(post.updatedAt),
		timeTaken: post.timeTaken,
		cover: post.cover,
	}
}

const Blog = ()=>{
	const [tags,setTags] = useState([])
	const [selectedTags,setSelectedTags] = useState([])
	const [posts,setPosts] = useState([])
	const isMobile = window.innerWidth < 768
	const [cachePosts,setCachePosts] = useState([])
	const [numberOfPostsToShow,setNumberOfPostsToShow] = useState(10)

	const clickTag = (tag)=>{
		setSelectedTags(ps_tags=>{
			if(ps_tags.map(tag=>tag.id).includes(tag.id)){
				return ps_tags.filter(ps_tag=>ps_tag.id!==tag.id)
			}else{
				return [...ps_tags,tag]
			}
		});
	}

	useEffect(()=>{
		const unselectedTags = tags.filter(tag=>!selectedTags.includes(tag))
		setTags([...selectedTags,...unselectedTags,])
		},[selectedTags])

	useEffect(()=>{
		if (selectedTags.length===0){
			setPosts(cachePosts)
		}else{
			const posts = selectedTags.reduce((acc,tag)=>{
				return [...acc,...tag.posts]
			},[])
			setPosts(uniquePosts(posts))
		}
		},[selectedTags])

	useEffect(()=>{
		fetchTagsWithPosts().then(( {tagsWithPosts,posts} )=>{
			setTags(tagsWithPosts.map(tag=>prettyTag(tag)))
			setPosts(uniquePosts(posts.map(prettyPost)))
			setCachePosts(uniquePosts(posts.map(prettyPost)))
		})
	},[])

	return (
		<div className='w-screen h-screen'>
			<Header />
			<div className='w-[80%] mx-auto mt-20 pb-20'>
				{/*Decorator*/}
				<div className="flex md:flex-row flex-col justify-between items-center gap-20 mt-10">
					<div className='basis-1/2 flex flex-col justify-between md:items-start items-center md:text-4xl text-2xl font-bold space-y-8'>
						<FaWifi className='md:-rotate-45'/>
						<p>Lifelong Learning</p>
						<p className='md:self-end'>Consolidating With Writing</p>
						<p>Never Stopping</p>
					</div>
					<div className='basis-1/2'>
						<img src="/svgs/dna.svg" alt="" />
					</div>
				</div>		
				{/*Search*/}
				<div className='w-full mt-10'>
					<div className='flex flex-row md:w-[80%] h-10 mx-auto border-2 border-gray-300 rounded-lg justify-around items-center'>
						<FaSearch/>
						<input className='md:w-10/12 w-8/10 outline-transparent text-gray-400' type="" placeholder='fuzzy search'/>
						<AiOutlineClose/>
					</div>
					<div className='flex flex-row flex-wrap justify-center gap-5 mt-6'>
						{tags.slice(0,isMobile ? 10 : 25).map((tag,idx) => 
							<div key={`tag${idx}-${tag.name}`} onClick={()=>{ clickTag(tag) }} className={`flex-none px-2 py-1 rounded-md cursor-pointer ${selectedTags.includes(tag) ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}>
								<p>{tag.name}</p>
							</div>
						)}
					</div>
				</div>
				{/*Post Cards*/}
				<div className='mt-20 w-full'>
					<div className='grid md:grid-cols-3 grid-cols-1 gap-16'>
						{/*Card*/}
						{posts.slice(0,numberOfPostsToShow).map((post,idx)=>(
							<div key={`post${idx}-${post.title}`} className='h-[360px] bg-white shadow rounded-bl-lg rounded-br-lg transition ease-in-out hover:scale-105 cursor-pointer duration-300'>
								<img className='h-[220px] object-fill' src={post.cover} alt="cover img" />
								<div className='mt-3 w-[90%] mx-auto flex flex-col justify-between h-[110px]'>
									<h3 className='text-lg font-semibold truncate'>{post.title}</h3>
									<div className='flex justify-between'>
										<p>{post.timeTaken}</p>
										<p>{post.createdAt}</p>
									</div>
								</div>
							</div>
						))
						}
					</div>
					{ 
					selectedTags.length === 0 ? 
						(
							<div className='flex flex-row justify-center mt-12'>
								<button onClick={()=>{setNumberOfPostsToShow(p=>p+5)}} className='flex flex-row justify-between items-center text-black border-2 border-gray-300 px-5 py-2 rounded-lg'>
									<AiOutlinePlus className='text-xl font-bold'/>
									<p className='ml-2'>Load More Articles</p>
								</button>
							</div>
						)
						:
						(
							<></>
					)
					}
				</div>
			</div>
		<Footer />
		</div>
	)
}

export default Blog;
