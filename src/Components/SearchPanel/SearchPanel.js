import React, { Component } from 'react'
// import css from './SearchPanel.module.css'
import PostFilter from '../PostFilter/PostFilter'


export default class SearchPanel extends Component {

  render() {
    const {onSearchByText, filterPosts, activeAllFilter, activeImportantFilter} = this.props

    return (
      <div className='d-flex mb-1'>
          <input 
              className = 'form-control mr-1 shadow'
              type="text" 
              placeholder='Что вы ищите?'
              onChange={onSearchByText}
              />
          <PostFilter 
            filterPosts={filterPosts}
            activeAllFilter={activeAllFilter}
            activeImportantFilter={activeImportantFilter}
          />
      </div>
    )
  }
}
