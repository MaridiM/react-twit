import React, { Component } from 'react'
// import css from './PostFilter.module.css'

export default class PostFilter extends Component { 
  render() {
    const {filterPosts, activeAllFilter, activeImportantFilter} =this.props

    return (
      <div className='d-flex btn-group btn-group-toggle'>
        <button className = {`btn shadow ${activeAllFilter ? 'btn-success' : 'btn-outline-success'}`} onClick={() => filterPosts('all')}>Все</button>
        <button className = {`btn shadow ${activeImportantFilter ? 'btn-success' : 'btn-outline-success'}`} onClick={() => filterPosts('important')}>Важные</button>
    
      </div>
    )
  }
}

 