import { makeAutoObservable } from "mobx"
import { userPostsUrl, usersBaseUrl } from "../api/config"
import { User } from "../api/types"

class Users {
  users: User[]
  constructor(){
    makeAutoObservable(this)
    this.users = []
  }

  fetchUsers(page: number) {
    fetch(`${usersBaseUrl}?page=${page}`)
      .then(response => response.json())
      .then(data => {
        this.users = this.users.concat(data.data)
      })
  }

  fetchUserPosts(id: number) {
    fetch(`${userPostsUrl}?user_id=${id}`)
  }
}

export default new Users()