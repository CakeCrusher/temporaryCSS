import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import resStyle from '../styles/pages/results.module.css'
// import Post from '../src/components/post/Post'
import { useQuery } from '@apollo/react-hooks'
import { SEARCH_POSTS } from '../src/schemas/queries'
// import { addPosts } from '../src/reducers/posts'
import { Link } from 'react-router-dom'
// import Loading from '../src/components/Loading'
import { palletteGenerator } from '../src/functions/functions'
// import { toggleStretchLayout } from '../src/reducers/stretchLayout'
// import { setEventSearch } from '../src/reducers/eventSearch'
// import covidIconB from '../src/static/svg/events/virusB.svg'
// import covidIconW from '../src/static/svg/events/virusW.svg'
// import covidIconC from '../src/static/svg/events/virusC.svg'
// import usaIconB from '../src/static/svg/events/usaB.svg'
// import usaIconW from '../src/static/svg/events/usaW.svg'
// import usaIconC from '../src/static/svg/events/usaC.svg'
import {bindActionCreators} from 'redux'
import {setToken} from '../redux/reducers/token'
import {FIND_USER, ALL_POSTS} from '../src/schemas/queries'
import {apolloClient} from '../lib/apollo'

const Results = (props) => {
    let running
    if (typeof window !== 'undefined') {
        running = 'client'
    } else {
        running = 'server'
        // running = localStorage.getItem('running')
    }
    const Posts = () => {
        return (
            <ul>
                {props.posts.map(p => (
                    <li key={p.title}>
                        <h3>{p.title}</h3>
                    </li>
                ))}
            </ul>
        )
    }
    // const currentIds = props.posts ? props.posts.map(p => p._id) : []
    // const [scrollAtBottom, setScrollAtBottom] = useState(false)
    // const decodedSearch = decodeURIComponent(props.query)
    // const SPQuery = useQuery(SEARCH_POSTS, {
    //     variables: {
    //         filterString: decodedSearch,
    //         postIds: currentIds,
    //         eventQuery: props.eventSearch,
    //     }
    // })
    // const moreResults = () => {
    //     if (SPQuery.data && SPQuery.data.searchPosts === null) {
    //         return false
    //     }
    //     return true
    // }
    // if ((window.innerHeight + window.scrollY) > (document.body.offsetHeight - 100) && !scrollAtBottom) {
    //     setScrollAtBottom(true)
    // }
    // if ((window.innerHeight + window.scrollY) <= (document.body.offsetHeight - 100) && scrollAtBottom) {
    //     setScrollAtBottom(false)
    // }
    // const triggerWhenScroll = () => {
    //     if ((window.innerHeight + window.scrollY) > (document.body.offsetHeight - 100) && !scrollAtBottom) {
    //         setScrollAtBottom(true)
    //     }
    //     if ((window.innerHeight + window.scrollY) <= (document.body.offsetHeight - 100) && scrollAtBottom) {
    //         setScrollAtBottom(false)
    //     }
    // }
    // window.addEventListener('scroll', triggerWhenScroll, false)

    // const postChangeConditions = (query, reducer) => {
    //     if (!scrollAtBottom) return false
    //     if (!query) return false
    //     if (!query.searchPosts) return false
    //     if (!reducer) {
    //         return true
    //     }
    //     const queryTitles = query.searchPosts.map(i => i.title)
    //     const reducerTitles = reducer.map(i => i.title)
    //     for (const title of queryTitles) {
    //         if (!reducerTitles.includes(title)) {
    //             return true
    //         }
    //     }
    //     return false
    // }
    // const postsSearched = postChangeConditions(SPQuery.data, props.posts) ?
    //     SPQuery.data.searchPosts : null
    // useEffect(() => {
    //     if (postsSearched && !props.posts) {
    //         props.addPosts(SPQuery.data.searchPosts)
    //         setScrollAtBottom(false)
    //     }
    //     if (postsSearched && props.posts) {
    //         if (postsSearched.length > 0) {
    //             if (!props.posts.map(p => p._id).includes(postsSearched[0]._id)){
    //                 props.addPosts(SPQuery.data.searchPosts)
    //                 setScrollAtBottom(false)
    //             }
    //         }
    //     }
    // }, [SPQuery, props.addPosts, props, postsSearched])
    // if (!props.posts) {
    //     return (
    //         <div>
    //             <div style={{height: '5vh'}}/>
    //             <Loading />
    //         </div>
    //     )
    // }

    // const eventQuery = props.eventSearch
    // const eventKeys = () => {
    //     if (eventQuery === 'COVID-19') {
    //         return ['covid', 'coronavirus', 'outbreak', 'virus', 'emergency response']
    //     }
    //     if (eventQuery === '2020 Election') {
    //         return ['election', 'democrat', 'republican', 'vote']
    //     }
    //     return null
    // }
    // const postToShow = (post, eventKeys) => {
    //     if (eventKeys) {
    //         for (const keyWord of eventKeys) {
    //             if (post.description.toLowerCase().includes(keyWord) || post.title.toLowerCase().includes(keyWord)) {
    //                 if (post.title.toLowerCase().includes(decodedSearch.toLowerCase())) return true
    //             }
    //         }
    //         return false
    //     }
    //     if (post.title.toLowerCase().includes(decodedSearch.toLowerCase())) return true
    //     for (const skill of post.skillNames) {
    //         if (decodedSearch.includes(skill)) return true
    //     }

    //     return false
    // }
    // let postsToShow = props.posts
    // postsToShow = postsToShow.map(p => postToShow(p, eventKeys()) ? <Post stretch={props.stretchLayout} key={`post${p._id}`} post={p} /> : null)
    // const pallette = palletteGenerator('rgb(40,40,40)').colorPallette
    // const layoutBtnClass = props.stretchLayout ? 'layout-button-grid' : 'layout-button-stretch'
    // const layoutClass = !props.stretchLayout ? 'results-content-grid' : 'results-content-stretch'
    
    // const eventsList = [
    //     {name: 'COVID-19', color: 'rgb(237,32,40)', iconB: covidIconB, iconW: '/svg/events/virusW.svg', iconC: '/svg/events/virusC.svg',
    //     {name: '2020 Election', color: 'rgb(255,0,255)', iconB: usaIconB, iconW: '/svg/events/usaW.svg', iconC: '/svg/events/usaC.svg' 
    // ]
    // const eventsHTML = eventsList.map(e => e.name === props.eventSearch ? 
    //     <div className={resStyle.event-selected} onClick={() => props.setEventSearch(null)} style={{borderColor: e.color, backgroundColor: e.color}} key={`EV${e.name}`}>
    //         <img src={e.iconW} className={resStyle.event-image} alt={e.name} />
    //         <h3 className={resStyle.event-text}>{e.name}</h3>
    //     </div>
    //     :
    //     <div className={resStyle.event} onClick={() => props.setEventSearch(e.name)} style={{borderColor: e.color, color: e.color}} key={`EV${e.name}`}>
    //         <img src={e.iconC} className={resStyle.vent-image} alt={e.name} />
    //         <h3 className={resStyle.event-text}>{e.name}</h3>
    //     </div>
    // )
    
    // const eventsContainerClass = props.eventSearch ? {resStyle.EC-active} : null
    // const showLoading = moreResults() ? <Loading /> : <h3 style={{opacity: '0.8'}}>no more posts</h3>
    return (
        <div className="home-wrapper">
            <h1 className={resStyle.test}>Results</h1>
            <button onClick={() => props.setToken('hello')}>set token to "hello"</button>
            <h2>token = {props.token}</h2>
            <Posts />
            <p>running on {running}</p>
            <h4>Signed in as: {props.user.username}</h4>
            <img src="/svg/bellB.svg" alt="bell" />
            {/* <div className={resStyle.results-container}>
                <Link to="/post-form/" className={`${resStyle.form-container-expand} standard-hover neutralize-link`} title={props.setTitle}>
                    <img className={resStyle.form-expand-icon} src={pallette.plusIcon} alt="team up" />
                </Link>
                <div className="navbar-height"/>
                <h2 className={resStyle.secondary-title}>events</h2>
                <div className={`${resStyle.events-container} ${eventsContainerClass}`}>
                    {eventsHTML}
                </div>
                <div onClick={() => props.toggleStretchLayout(!props.stretchLayout)} className={resStyle.layout-wrapper}>
                    <div className={resStyle.layout-container}>
                        <div className={`layout-button ${layoutBtnClass}`} >
                            <div className={resStyle.layout-box}/>
                            <div className={resStyle.layout-box}/>
                            <div className={resStyle.layout-box}/>
                            <div className={resStyle.layout-box}/>
                        </div>
                    </div>
                </div>
                <div />
                <div className={`results-content ${layoutClass}`}>
                    {postsToShow}
                </div>
                <div style={{position: 'relative', height: '400px'}}>
                    {showLoading}
                </div>
            </div> */}
        </div>
    )
}

// const mapStateToProps = (state) => {
// 	return {
//         posts: state.posts,
//         search: state.search,
//         stretchLayout: state.stretchLayout,
//         eventSearch: state.eventSearch,
// 	}
// }
// export default connect(
//     mapStateToProps,
//     { addPosts, toggleStretchLayout, setEventSearch }
// )(Results)
Results.getInitialProps = async (context) => {
    const userQuery = await apolloClient.query({
        query: FIND_USER,
        variables: {username: 'SebastianSosa'}
    }).then((res) => {
        return res
    }).catch(err => console.log(err))

    const postsQuery = await apolloClient.query({query: ALL_POSTS}).then((res) => {
        return res
    }).catch(err => console.log(err))
    console.log(postsQuery)

    return {
        posts: postsQuery.data.allPosts,
        user: userQuery.data.findUser
    }
}

const mapStateToProps = (state) => {
	return {
        token: state.token
	}
}
const mapDispatchToProps = (dispatch) => {
    return {
        setToken: bindActionCreators(setToken, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Results)