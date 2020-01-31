import React, { Component } from 'react'
import ErrorAddPost from '../ErrorAddPost'
// import css from './AddPost.module.css'



export default class AddPost extends Component {
  

    render () {
        const {onAddPost, onTextChange, onDefText, hidden} = this.props

        return (
            <div>
                <ErrorAddPost hidden={hidden} />
                <form className='d-flex mb-1 mt-1'
                    onSubmit={ onAddPost }>
                    <textarea
                        className = 'form-control mr-1 shadow'
                        type="text" 
                        placeholder='Отправить сообщение'
                        onChange={onTextChange}
                        value={onDefText}>
                    </textarea>
                    <button className='btn btn-outline-success shadow'>Отправить</button>
                </form>
            </div>
        )
    }
}