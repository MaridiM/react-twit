import React, { Component } from 'react'
import css from './PostItemBtn.module.css'


export default class PostItemBtn extends Component {
  
  render() {
    const {onEditPost, clickDeletePost, onToggleLiked, onToggleImportant, like, important} = this.props

    return (
      <div className = 'd-flex justify-content-between align-items-center' >
        <time className = {`text-monospace ${ css.date }`}> 28.01.20 1:17:26 </time>
        <section className='btn-group'>
          <div 
            className={`btn ${ css.hover }`}
            onClick={onEditPost}
          >
            <i className={`fas fa-pencil-alt ${ css.fa }`}></i>
          </div>

          <div 
            className={`btn ${ css.hover }`}
             onClick={ onToggleImportant }  
          >
              <i className={`far fa-star ${ css.star } ${ important ? 'fas' : 'far' }`}></i>
          </div>
          <div 
            className={`btn ${ css.hover }`}
             onClick={onToggleLiked}
          >
              <i className={`fa-heart ${ css.heart } ${ like ? 'fas' : 'far' }`}></i>
          </div>
        
          <div 
            className={`btn ${ css.hover }`}
            onClick={clickDeletePost}
          >
              <i className={`fas fa-trash-alt ${ css.fa }`}></i>
          </div>
          
        </section>
      </div>
    )
  }
}
