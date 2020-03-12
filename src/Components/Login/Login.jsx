import React from 'react'
import s from './Login.module.css'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControls'
import { required, maxLengthCreator } from '../../utils/validators/validators'
import { connect } from 'react-redux'
import { login, logout } from './../../redux/authReducer'
import { Redirect } from 'react-router-dom'

let maxLength = maxLengthCreator(30)

const LoginForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder='Email' name='email' component={Input} validate={[required, maxLength]}/></div>
            <div><Field placeholder='Password' name='password' type={'password'} component={Input} validate={[required, maxLength]}/></div>
            <div><Field type='checkbox' name='rememberMe' component={Input} /><label>Remember Me</label></div>
            {props.error && <div className={s.formSummaryError}>{props.error}</div>}
            <div><button>Login</button></div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = props => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div className={s.logArea}>
        <div>Login</div>
        <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login, logout} )(Login)