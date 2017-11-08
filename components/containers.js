import React from 'react';
import { Row, Col } from 'antd';
import styles from './index.css';
import CommentList from './commentList';
import CommentForm from './commentFrom';
import $ from 'jquery';
export default class Containers extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      data: [],
    })
    this.getComments();
  }
  handleSubmit(comment) {
    
        let comments = this.state.data;
        let newComment = comments.concat(comment);
        this.setState({
          data: newComment,
        })
      }
    getComments(){
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        cache: false,
        success: comments => {
          this.setState({
            data: comments
          })
        },
        error: (xhr, status, error) => {
          console.log(error);
        }
      })
    }

 

  

  render() {

    return (
      <div>
        <Row>
          <Col span={5}></Col>
          <Col span={14}>
            <h1>评论</h1>
            <hr style={{ background: "#e7e7e7", margin: "30px 0" }} />

            <CommentList data={this.state.data} />
            <CommentForm handleSubmit={this.handleSubmit.bind(this)} />

          </Col>
          <Col span={5}></Col>
        </Row>
      </div>
    )
  }
}