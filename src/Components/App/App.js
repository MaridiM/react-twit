import React, { Component } from 'react'
import css from './App.module.css'

import AppHeader from './../AppHeader'
import SearchPanel from '../SearchPanel'
import PostItemList from '../PostItemList'
import AddPost from '../AddPost'

export default class App extends Component {
    state = {
        data: [
            { id: 0, label: 'app',  like: false, important: false, editPanel: false, showItem: true },
            { id: 1, label: 'you',  like: false, important: false, editPanel: false, showItem: true },
            { id: 2, label: 'React app',  like: false, important: false, editPanel: false, showItem: true },
        ],
        text: '',
        editValue: '',
        activeAllFilter: true,
        activeImportantFilter: false,
        hidden: true
    }


    deletePostById = (id) => {
        // 
        //  Delete item
        // 
        this.setState(({data}) => {
            const index = data.findIndex(el => el.id === id)

            return {
                data: [...data.slice(0, index), ...data.slice(index + 1)]
            }
        })
    }
    
    onAddPost = (body) => {
        // 
        //  Add New Item 
        // 
        body.preventDefault()

        this.setState(({data, text, hidden}) => {

            const lengthData = data.length
            if (text === '') {
                return {
                    hidden: !hidden
                }
            }else{
                const newItem = {
                    id: lengthData + 1,
                    label: text,
                    like: false,
                    important: false,
                    editPanel: false, 
                    showItem: true
                }
                
                return {
                   data: [...data, newItem],
                   text: ''
                }
            }


        }) 
    }
    
    onTextChange = (e) => {
        // 
        //  Use value from add form and add in state
        // 
        const value = e.target.value
        this.setState(({text, hidden}) => {
            return {
                text: value,
                hidden: true
            }
        }) 
        
    }

    editTextForm = (e) => {
        // 
        //  Get edit value and remove in state
        // 
        const value = e.target.value
        this.setState(({editValue}) => {
            return{
                editValue: value
            }
        })
        
    }
    
    onTextEditChange = (id) => {
        // 
        //  Get Id editing item and remove label in state.data
        // 
        this.setState(({data, editValue}) => {
            const index = data.findIndex( el => el.id === id)
            
            let newData = {}
            if( editValue.length !== 0) {
                newData = {...data[index], label: editValue, editPanel: !data[index].editPanel}
            } else {
                newData = {...data[index], label: data[index].label, editPanel: !data[index].editPanel }
            }

            return {
                data: [...data.slice(0, index), newData, ...data.slice(index + 1)],
            }
            
        })
        
    }
    onEditPost = (id) => {
        // 
        //  Showing and Hide  edit panel 
        // 
        
        this.setState(({data})=> {
            const index = data.findIndex( el => el.id === id )

            const newData = {...data[index], editPanel: !data[index].editPanel} 
            
            return {
                data: [...data.slice(0, index), newData, ...data.slice(index + 1)],
            }
        })
    }

    onToggleLiked = (id) => {
        // 
        //  Get like status from state.data[id].like and remove  on !state.data[id].like
        // 
        this.setState(({data}) => {
            const index = data.findIndex( el => el.id === id)
            const like = {...data[index], like: !data[index].like}           
            
            return {
                data: [...data.slice(0, index), like, ...data.slice(index + 1)]
            }
        })
        
    }
    onToggleImportant = (id) => {
        // 
        //  Get like status from state.data[id].important and remove  on !state.data[id].important
        // 
        this.setState(({data}) => {
            const index = data.findIndex( el => el.id === id)
            const important = {...data[index], important: !data[index].important}           

            return {
                data: [...data.slice(0, index), important, ...data.slice(index + 1)]
            }
        })


    }

    onSearchByText = (e) => {
        // 
        //  Search by text from searching panel
        // 
        const value = e.target.value
        this.setState(({data}) => {
            const items = data.map( el => {
                const item = el.label.toLowerCase().indexOf(value.toLowerCase()) > -1
                return item === false ? el.showItem = false : el.showItem = true
            })
            return items
        })
    }

    filterPosts = (name) => {
        //
        // Filter by buttons
        //
        this.setState(({data, activeAllFilter, activeImportantFilter}) => {
            data.filter(el => {
                if(name === 'important') {
                    el.showItem = false 
                    if(el.important === true) {
                        el.showItem = true
                    }

                    return el.showItem === true
                    
                } else {
                    el.showItem = true
                }
                return el.showItem === true
            })
            return {
                activeAllFilter: !activeAllFilter,
                activeImportantFilter: !activeImportantFilter
            }
        })
    }

    render () {
        const{data, text, activeAllFilter, activeImportantFilter, hidden} = this.state
        const liked = data.filter(el => el.like).length

        return (
            <div className={ css.app }>
                <AppHeader 
                    lengthData={data.length} 
                    liked={liked}
                    />
                <SearchPanel 
                    onSearchByText={ this.onSearchByText }
                    filterPosts={ this.filterPosts }
                    activeAllFilter={activeAllFilter}
                    activeImportantFilter={activeImportantFilter}
                    />
                <PostItemList 
                    dataItems={ data } 
                    deletePost={ this.deletePostById } 
                    onToggleLiked={ this.onToggleLiked }
                    onToggleImportant={ this.onToggleImportant }
                    onTextEditChange={ this.onTextEditChange }
                    editTextForm={this.editTextForm}
                    onEditPost={this.onEditPost}
                    />
                <AddPost 
                    onAddPost={this.onAddPost} 
                    onTextChange={this.onTextChange}
                    onDefText={text}
                    hidden={hidden}
                    />
            </div>
        )
    }
}