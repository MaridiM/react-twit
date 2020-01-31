import React, { Component } from 'react'
import css from './PostItem.module.css'

import PostItemBtn from '../PostItemBtn'
import EditPost from '../EditPost/'

export default class PostItem extends Component {

  render () {
    const {label, deletePostItem, onToggleLiked, onToggleImportant, onTextEditChange, editTextForm, showItem, like, important, onEditPost, editPanel} = this.props
    
    return (
      <div className={`shadow p-3 mb-3 bg-white rounded ${showItem ? null : css.hide}`}>
        <EditPost 
          editPanel={editPanel} 
          onEditPost={onEditPost} 
          editLabel={label} 
          onTextEditChange={onTextEditChange}
          editTextForm={editTextForm}
          />
        <section className={editPanel ? css.hide : null}>
          <section className={`p-1  ${ css.text }`}>
           {label}
          </section>        
          <PostItemBtn 
            onEditPost={ onEditPost } 
            clickDeletePost={ deletePostItem } 
            onToggleLiked={ onToggleLiked }
            onToggleImportant={ onToggleImportant }
            important={important}
            like={like} 
            />
        </section>
      </div>
    )
  }
}
