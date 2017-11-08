import React from 'react';
import {Form,Input,Icon,Button} from 'antd';
const { TextArea } = Input;
export default class CommentForm extends React.Component{
  handleSubmit(event){
    event.preventDefault();
   
    let author=this.refs.author.refs.input.value;
     let text=this.refs.text.refs.input.value;   

        console.log(author,text)
        this.props.handleSubmit({author,text,date:"刚刚"})
  }
  render(){
    return(
     <div style={{marginBottom:"25px"}}>
      <Form onSubmit={this.handleSubmit.bind(this)}>
     
      <Input style={{marginBottom:"25px"}} prefix={<Icon type="user" style={{ fontSize: 13 }} />}  ref="author" placeholder="姓名" />
         
      <Input  style={{marginBottom:"25px"}} placeholder="评论" ref="text"/>
      <Button type="primary" size="large" htmlType="submit">添加评论</Button>
      </Form>
     </div>
    )
  }
}