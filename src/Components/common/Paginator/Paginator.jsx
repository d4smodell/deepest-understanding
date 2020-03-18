import React from 'react'
import { useState } from 'react'
import s from './../../Users/Users.module.css'
import cn from 'classnames'

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 20}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = []

    for(let i=1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize
    
    return <div>
        <div className={s.paginator}>
            {portionNumber > 1 &&
            <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>}
            {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
                return <span className={cn({[s.selectedPage] : currentPage === p}, s.pageNumber)} key={p} onClick={(e) => {onPageChanged(p)}}>{p}</span>
            })}
            {portionCount > portionNumber &&
            <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}
        </div>
    </div>
}

export default Paginator