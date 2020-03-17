import React from 'react'
import s from './../../Users/Users.module.css'

const Paginator = props => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for(let i=1; i <= pagesCount; i++) {
        pages.push(i)
    }
    
    return <div>
        <div className={s.usersCount}>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage } onClick={(e) => {props.onPageChanged(p)}}>{p}</span>
            })}
        </div>
    </div>
}

export default Paginator