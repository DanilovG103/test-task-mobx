import { makeAutoObservable } from "mobx"
import { usersBaseUrl } from "../api/config"
import { User } from "../api/types"

class Users {
  users: User[] = []
  loading: boolean = false
  error: string = ''
  constructor() {
    makeAutoObservable(this)
  }

  fetchUsers(page: number) {
    this.loading = true
    fetch(`${usersBaseUrl}?page=${page}&limit=10`)
      .then(response => response.json())
      .then(data => {
        this.users = [...this.users, ...data.data]
        this.loading = false
      })
      .catch(e => {
        this.loading = false
        this.error = e.message
      })
  }
}

export default new Users()