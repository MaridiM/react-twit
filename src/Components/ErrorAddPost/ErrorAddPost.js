import React, { Component } from 'react'
// import css from './ErrorAddPost.modul.css'

export default class ErrorAddPost extends Component {
  render() {  
    const {hidden} = this.props
    return (
        <div className='alert alert-warning ' role='alert' hidden={ hidden }>
            Пустое сообщение не может быть отправлено.
        </div>
    )
  }
}
