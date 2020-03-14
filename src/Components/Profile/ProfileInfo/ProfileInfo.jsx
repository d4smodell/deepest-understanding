import React from 'react'
import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = props => {
    if(!props.profile) {
        return <img src='https://брайтфит.рф/style/images/i-loader.png' alt='sd' className={s.toggleLoader}/>
    }
    return (
        <div>
        <div>
        <img src='http://blog.centimetre.com/wp-content/uploads/2018/01/2-verri%C3%A8res-loft-indus.jpg' alt='back'/>
        </div>
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large ? props.profile.photos.large : 'https://sun9-29.userapi.com/c845019/v845019139/49571/mhdxvl1yjDE.jpg'} alt='img'/>
            <div>{props.profile.fullName ? props.profile.fullName : 'Name'}</div>
            <div>{props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : 'Looking for a Job'}</div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
        </div>
    )
}

export default ProfileInfo