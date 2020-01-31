import React, { Component } from 'react'
import css from './EditPost.module.css'

import EditPostBtn from '../EditPostBtn'

export default class EditPost extends Component {


  render() {
    const {onEditPost, onTextEditChange, editPanel, editLabel, editTextForm} = this.props


    
    return (
      <form 
        className={editPanel ? null : css.hide}
        onSubmit={ el => el.preventDefault() }>
          <textarea 
            className={`form-control shadow ${ css.editText }`} 
            defaultValue={ editLabel }
            onChange={editTextForm} 
            ></textarea>
          <EditPostBtn 
            onEditPost={onEditPost} 
            onTextEditChange={ onTextEditChange }
          />
      </form>
    )
  }
}

