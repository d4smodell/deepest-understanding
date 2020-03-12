import React from 'react'
import s from './Users.module.css'
import Users from './Users'
import {connect} from 'react-redux'
import {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleIsFollowingProgress, getUsersThunkCreator, changeUsers} from './../../redux/usersReducer'
import { compose } from 'redux'

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.changeUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
        {this.props.isFetching ? <img className={s.toggleLoader} src='https://брайтфит.рф/style/images/i-loader.png' alt='load' /> : null}
        <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        usersData={this.props.usersData}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
        followingInProgress={this.props.followingInProgress}/> </>
    }
}

let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
        toggleIsFollowingProgress,
        getUsers: getUsersThunkCreator,
        changeUsers
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(UsersContainer)