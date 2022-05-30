import React, { Component } from 'react'
import { CardSubtitle, FormFeedback, Button, Form, FormGroup, Input, Label, Card, CardImg, CardText, CardTitle } from 'reactstrap'

function RenderComment(props) {
  const comment = props.comments.map((com, index) => {
    return (
      <Card key={index} className='p-4' >
        <CardTitle tag='h5'>{com.firstname} {com.lastname} {com.like ? <span className='fa fa-heart fa-lg' style={{ color: 'pink' }}> Liked this picture</span> : null}</CardTitle>
        <CardSubtitle>{com.email}</CardSubtitle>
        <br />
        <CardText>{com.message}</CardText>
        <p>User rated this picture : {com.score} out of 5</p>
      </Card>
    )
  })
  return (
    <div>
      {comment}
    </div>
  )
}

export default class Photo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      message: '',
      score: null,
      like: false,
      touched: {
        firstname: false,
        lastname: false,
        email: false,
        message: false,
      },
      comments: [],
    }

    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleLike = this.handleLike.bind(this)

  }

  handleLike() {
    this.setState({ like: !this.state.like })
  }

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    })
  }

  validate(firstname, lastname, email, message) {
    const errors = {
      firstname: '',
      lastname: '',
      email: '',
      message: '',
    }

    if (this.state.touched.firstname && firstname.length < 3)
      errors.firstname = 'First Name should be >= 3 characters';
    else if (this.state.touched.firstname && firstname.length > 10)
      errors.firstname = 'First Name should be <= 10 characters';

    if (this.state.touched.lastname && lastname.length < 3)
      errors.lastname = 'Last Name should be >= 3 characters';
    else if (this.state.touched.lastname && lastname.length > 10)
      errors.lastname = 'Last Name should be <= 10 characters';

    // Todo email validate
    const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (this.state.touched.email && !regex.test(email))
      errors.email = 'Please enter the correct email pattern'

    if (this.state.touched.message && message.length < 4)
      errors.message = 'Please a comment!'

    return errors

  }

  handleOnChange(e) {
    const value = e.target.value
    switch (e.target.id) {
      case 'firstname':
        this.setState({ firstname: value })
        break
      case 'lastname':
        this.setState({ lastname: value })
        break
      case 'email':
        this.setState({ email: value })
        break
      case 'message':
        this.setState({ message: value })
        break
      case 'score':
        this.setState({ score: value })
        break
      default:
    }
  }

  handleOnSubmit(e) {
    let arr = this.state.comments
    let comment = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      message: this.state.message,
      like: this.state.like,
      score: this.state.score,
    }
    arr.push(comment)
    this.setState({ comments: arr })
    this.setState({
      firstname: '',
      lastname: '',
      email: '',
      message: '',
      score: null,
      like: false,
      touched: {
        firstname: false,
        lastname: false,
        email: false,
        message: false,
      },
    })
    e.preventDefault()
  }

  render() {
    const dish = this.props.dish
    const errors = this.validate(this.state.firstname, this.state.lastname, this.state.email, this.state.message)
    return (
      <div className='container my-5'>
        <div className='row'>
          <h3>{dish.name}</h3>
          <hr />
          <Card className='p-5'>
            <CardImg src={dish.image} alt={dish.name} />
            <hr />
            <details>
              <summary style={{ fontWeight: 'bold', fontSize: 'large' }}>{dish.name}</summary>
              <CardText>{dish.description}</CardText>
            </details>
            <hr />
            <h3>Comment</h3>
            <RenderComment comments={this.state.comments} />
            <hr />
            <h3>Give us your thought!</h3>
            <hr />
            <Form onSubmit={this.handleOnSubmit} className='d-flex align-items-center flex-column justify-content-start'>
              <div>
                <FormGroup row>
                  <Label htmlFor='firstname'>First Name</Label>
                  <Input valid={errors.firstname === ''}
                    invalid={errors.firstname !== ''} onBlur={this.handleBlur('firstname')} type='text' name='firstname' id='firstname' value={this.state.firstname} onChange={this.handleOnChange} />
                  <FormFeedback>{errors.firstname}</FormFeedback>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor='lastname'>Last Name</Label>
                  <Input valid={errors.lastname === ''}
                    invalid={errors.lastname !== ''} onBlur={this.handleBlur('lastname')} type='text' name='lastname' id='lastname' value={this.state.lastname} onChange={this.handleOnChange} />
                  <FormFeedback>{errors.lastname}</FormFeedback>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor='email'>Email</Label>
                  <Input valid={errors.email === ''}
                    invalid={errors.email !== ''} onBlur={this.handleBlur('email')} type='text' name='email' id='email' value={this.state.email} onChange={this.handleOnChange} />
                  <FormFeedback>{errors.email}</FormFeedback>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor='message'>Comment</Label>
                  <Input valid={errors.message === ''}
                    invalid={errors.message !== ''} onBlur={this.handleBlur('message')} type='textarea' name='message' id='message' value={this.state.message} onChange={this.handleOnChange} />
                  <FormFeedback>{errors.message}</FormFeedback>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor='score'>Score</Label>
                  <Input type='select' name='select' value={this.state.score} onChange={this.handleOnChange} id='score'>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Input>
                </FormGroup>
                <div className='d-flex gap-2 align-items-center'>
                  <Label htmlFor='message'>Like? </Label>
                  <Input checked={this.state.like} type='checkbox' value={this.state.like} onChange={this.handleLike} />
                  {this.state.like ? <span className='fa fa-heart fa-lg' style={{ color: this.state.like ? 'pink' : 'black' }}></span> : null}
                </div>
                <Button color='primary' type='submit'>Send Comment</Button>
              </div>
            </Form>
          </Card>
        </div>
      </div>
    )
  }
}
