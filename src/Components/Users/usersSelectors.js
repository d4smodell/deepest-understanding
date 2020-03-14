import { createSelector } from "reselect"

export const getUsers = state => {
    return state.usersPage.usersData
}

export const getUsersSuperSelector = createSelector(getUsers, (usersData) => {
    return usersData.filter(u => true)
})

export const getPagesize = state => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = state => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = state => {
    return state.usersPage.currentPage
}

export const getIsFetching = state => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = state => {
    return state.usersPage.followingInProgress
}

export const getIsAuth = state => {
    return state.auth.isAuth
}