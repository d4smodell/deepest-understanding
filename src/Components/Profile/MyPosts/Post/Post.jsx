import React from 'react'
import s from './Post.module.css'

function randomInteger(min, max) {
  let rand = min + Math.random() * (max - min);
  return Math.round(rand);
}

const Post = props => {
    return (
          <div>
            <div className={s.item}>
              <div><img src='https://sun1-20.userapi.com/h_A94i1wqiwgzB9lYAKmozthon2TOK0FFELXKA/niOkBfdhZ5o.jpg' alt='ava'></img></div>
              {props.message}
              <div> Like {randomInteger(1, 9)}</div>
            </div>
          </div>
    )
}

export default Post