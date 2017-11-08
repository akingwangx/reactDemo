import React from 'react';
import Comment from './comment';
export default class CommentList extends React.Component {
  render() {
    let commentNodes=this.props.data.map((comment,index)=>{
      return (
        <Comment author={comment.author} date={comment.date} key={index}>{comment.text}</Comment>
      )
    })
    return (
      <div style={{margin:"25px 0"}}>
        <h2>
          {commentNodes}
          
      </h2>
      </div>


    )
  }
}