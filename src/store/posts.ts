import { makeAutoObservable } from "mobx"
import { userPostsUrl } from "../api/config"

class Posts {
  postsCount: number = 0
  loading: boolean = false
  error: string = ''
  constructor() {
    makeAutoObservable(this)
  }

  fetchUserPosts(id: number) {
    this.loading = true
    fetch(`${userPostsUrl}?user_id=${id}`)
      .then(response => response.json())
      .then(data => {
        this.postsCount = data.meta.pagination.total
        this.loading = false
      })
      .catch(e => {
        this.loading = false
        this.error = e.message
      })
  }
}

export default new Posts()