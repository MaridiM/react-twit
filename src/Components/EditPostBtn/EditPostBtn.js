import React, { Component } from 'react'
// import css from './EditPostBtn.module.css'

export default class EditPostBtn extends Component {
  render() {
    const {onTextEditChange, onEditPost} = this.props


    return (
      <div className='d-flex justify-content-end mt-1'>
        <button
            className='btn btn-outline-success m-1 shadow'
            onClick={ onTextEditChange }
            >Изменить</button>
        <button 
            className='btn btn-outline-danger m-1 shadow'
            onClick={ onEditPost }
            >Отменить</button>
      </div>
    )
  }
}

