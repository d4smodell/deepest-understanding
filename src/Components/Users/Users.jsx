import React from 'react'
import s from './Users.module.css'
import {NavLink} from 'react-router-dom'
import Paginator from '../common/Paginator/Paginator'

const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, ...props}) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for(let i=1; i <= pagesCount; i++) {
        pages.push(i)
    }
    
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize}/>
    {
        props.usersData.map(u => <div className={s.usersArea} key={u.id}>
            <span>
                <NavLink to={'/profile/'+ u.id}><div><img alt='ava' src={u.photos.small ? u.photos.small : 'https://sun9-29.userapi.com/c845019/v845019139/49571/mhdxvl1yjDE.jpg'} className={s.photo}/></div></NavLink>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </span>

            <span>
                <div>
                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.unfollow(u.id)
                        }
                        }>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.follow(u.id)
                        }
                        }>Follow</button>}
                </div>
            </span>
        </div>
        
        )
    }

    </div>
}

export default Users