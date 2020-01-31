import React, { Component } from 'react'
// import css from './PostItemList.module.css'


import PostItem from '../PostItem'

export default class PostItemList extends Component {
  render() {
    const {dataItems, deletePost, onToggleLiked, onToggleImportant, onTextEditChange, editTextForm, onEditPost} = this.props

    const element = dataItems.map( el => {
      const {id, ...itemsPropsData} = el

      return (
        <PostItem key={ id }
          { ...itemsPropsData }
          deletePostItem={ () => deletePost(id) }
          onToggleLiked={ () => onToggleLiked(id) }
          onToggleImportant={ () => onToggleImportant(id) }
          onTextEditChange={ () => onTextEditChange(id ,editTextForm) }
          editTextForm={editTextForm}
          onEditPost={() => onEditPost(id) }
        />
      )
      
    })

    return (
      <div className='mb-4 mt-4'>
        { element }

      </div>
    )
  }
}

