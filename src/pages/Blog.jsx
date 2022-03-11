import {useState,useEffect} from 'react'
import {FaWifi,FaSearch} from 'react-icons/fa'
import {AiOutlineClose,AiOutlinePlus} from 'react-icons/ai'
import { useTransition, animated, config} from '@react-spring/web'
import { useNavigate } from 'react-router-dom';

import { DataStore, Predicates,Hub } from 'aws-amplify';
import {TagPost,Tag} from '../models'

import Header from '../components/Header'
import Footer from '../components/Footer'

import {prettyPost,prettyTag} from '../utils/pretty'

//  remove redundant items by its id
//  @param modelItem: item with id property
function removeRedundancyById(modelItem){
	return modelItem.filter((post,index,self)=>self.findIndex(p=>p.id===post.id)===index)
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


const Blog = ()=>{
	const [unSelectedTags,setUnSelectedTags] = useState([])
	const [selectedTags,setSelectedTags] = useState([])
	const [posts,setPosts] = useState([])
	const [cachePosts,setCachePosts] = useState([])
	const [numberOfPostsToShow,setNumberOfPostsToShow] = useState(9)
	const [syncTimes,setSyncTimes] = useState(0)
	const navigate = useNavigate()
	const isMobile = window.innerWidth < 768

	const selectedTagsTransitions = useTransition(selectedTags, {
		from: { opacity: 0, transform:'scale(0.8)' },
		enter: { opacity: 1, transform:'scale(1)' },
		duration:200,
		config: config.wobbly,
		keys: item=>item.id
	})

	const unSelectedTagsTransitions = useTransition(unSelectedTags, {
		from: { opacity: 0, transform:'scale(0.8)' },
		enter: { opacity: 1, transform:'scale(1)' },
		duration: 300,
		config: config.wobbly,
		keys: item=>item.id
	})

	const postsTransitions = useTransition(posts.slice(0,numberOfPostsToShow), {
		from: { opacity: 0.8 },
		enter: { opacity: 1 },
		duration: 50,
		keys: item=>item.id
	})

	const selectTag = (tag)=>{
		if(selectedTags.find(t=>t.id===tag.id)){
			setSelectedTags(selectedTags.filter(t=>t.id!==tag.id))
			setUnSelectedTags([tag,...unSelectedTags,])
		}else{
			setSelectedTags([...selectedTags,tag])
			setUnSelectedTags(unSelectedTags.filter(t=>t.id!==tag.id))
		}
	}

	const choosePost = (post)=>{
		navigate(`/blog/${post.id}`)
	}

	useEffect(()=>{
		const listener = Hub.listen('datastore', async hubData => {
			const  { event, data } = hubData.payload;
			if (event === 'ready') {
				console.log('sync is done')
				setSyncTimes(syncTimes+1)
			}
		})
		return listener
	},[])

	useEffect(()=>{
		fetchTagsWithPosts().then(( {tagsWithPosts,posts} )=>{
			const selectedTagIds = selectedTags.map(tag=>tag.id)
			const unSelectedTagIds = unSelectedTags.map(tag=>tag.id)
			const newFectedTags = tagsWithPosts.map(tag=>prettyTag(tag)).filter(tag=>!selectedTagIds.includes(tag.id)).filter(tag=>!unSelectedTagIds.includes(tag.id))
			setUnSelectedTags(p=>[...p,...newFectedTags])

			setPosts(removeRedundancyById(posts.map(prettyPost)))
			setCachePosts(removeRedundancyById(posts.map(prettyPost)))
		})
		},[syncTimes])

	useEffect(()=>{
		if (selectedTags.length===0){
			setPosts(cachePosts)
		}else{
			const posts = selectedTags.reduce((acc,tag)=>{
				return [...acc,...tag.posts]
			},[])
			setPosts(removeRedundancyById(posts))
		}
		},[cachePosts,selectedTags])

	return (
		<div className='w-screen h-screen flex flex-col justify-between'>
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
						{selectedTagsTransitions((styles ,tag) => 
							<animated.div style={styles}  key={`tag-${tag.id}`} onClick={()=>{selectTag(tag)}} className={`flex-none px-2 py-1 rounded-md cursor-pointer ${selectedTags.includes(tag) ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}>
								<p>{tag.name}</p>
							</animated.div>
						)}
						{unSelectedTagsTransitions((styles, tag) => 
							<animated.div style={styles}  key={`tag-${tag.id}`} onClick={()=>{selectTag(tag)}} className={`flex-none px-2 py-1 rounded-md cursor-pointer ${selectedTags.includes(tag) ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}>
								<p>{tag.name}</p>
							</animated.div>
						)}
					</div>
				</div>
				{/*Post Cards*/}
				<div className='mt-20 w-full'>
					<div className='grid md:grid-cols-3 grid-cols-1 gap-16'>
						{/*Card*/}
						{postsTransitions((styles, post)=>
							<animated.div onClick={()=>{choosePost(post)}} style={styles} key={`post-${post.id}`} className='h-[360px] bg-white shadow rounded-bl-lg rounded-br-lg transition ease-in-out hover:scale-105 cursor-pointer duration-300'>
								<img className='h-[220px] object-fill' src={post.cover} alt="cover img" />
								<div className='mt-3 w-[90%] mx-auto flex flex-col justify-between h-[110px]'>
									<h3 className='text-lg font-semibold truncate'>{post.title}</h3>
									<div className='flex justify-between'>
										<p>{post.timeTaken ?? "No Idea"}</p>
										<p>{post.createdAt}</p>
									</div>
								</div>
							</animated.div>
						)
						}
					</div>
					<div className='flex flex-row justify-center mt-12'>
						<button onClick={()=>{setNumberOfPostsToShow(p=>p+6)}} className='flex flex-row justify-between items-center text-black border-2 border-gray-300 px-5 py-2 rounded-lg'>
							<AiOutlinePlus className='text-xl font-bold'/>
							<p className='ml-2'>Load More Articles</p>
						</button>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Blog;
