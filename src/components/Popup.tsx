import { observer } from 'mobx-react-lite'
import React, { ReactNode } from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import posts from '../store/posts'

interface Props {
  children: React.ReactElement | (() => ReactNode)
}

export const Popup = observer(({children}: Props) => {
  return (
    <OverlayTrigger placement='right' overlay={
      <Tooltip>
      {posts.loading ? (
        <p>Loading info...</p>
        ) : (
          <p>
            Total posts: {posts.postsCount}
          </p> 
        )}
        {!!posts.error && "Error: " + posts.error} 
      </Tooltip>
    }>
      {children}
    </OverlayTrigger>
  )
})
