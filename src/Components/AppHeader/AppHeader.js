import React, { Component } from 'react'
import css from './AppHeader.module.css'



export default class AppHeader extends Component {
    render () {
        const {lengthData, liked} = this.props
        return (
            < header className = 'd-flex justify-content-between' >
                <h1 className={ css.h1 } >Dmitriy Marynenko</h1>
                <h2 className={ css.h2 }> 
                    {`${lengthData} записей, ${liked} нравится`}
                </h2>
            </header>
        )
    }
}