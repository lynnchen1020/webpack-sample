// sean's plugin test
const React = require('react')
const ReactDOM = require('react-dom')

// linshifu's plugin
import {use,parse} from 'error-message'

use((error) => {
  error.msg = `${error.msg}[${error.code}]`
})

const m_error = { code: 10100, msg: 'test' }

const m = parse(m_error).getObject()

console.log(m.msg)

// // <-- Simplest example -->

// function Welcome(props) {
//   return <h2>H2, {props.text}</h2>
// }
//
// const el = <Welcome text="Show Text" />
//
// ReactDOM.render(
//   el,
//   document.getElementById('test')
// )



// // <-- Component refer to other component -->

// function Span(props) {
//   return <span className={props.classname}>{props.text}</span>
// }
//
// function List(props) {
//   return (
//     <li>
//       <Span className="One" text="Hi" />
//     </li>
//   )
// }
// function App() {
//   return (
//     <ul>
//       <List />
//     </ul>
//   )
// }
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('list')
// )



// // <-- Class LikeButton practice -->

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props)
//
//     this.state = {
//       liked: false
//     }
//
//     this.handleClick = this.handleClick.bind(this)
//   }
//
//   handleClick(e) {
//     this.setState(prevState => ({
//         liked: !prevState.liked
//       })
//     )
//   }
//
//   render() {
//     let text = this.state.liked ? 'like' : 'haven\'t liked'
//     return (
//       <p onClick={this.handleClick}>
//         You {text} it .Click to toggle
//       </p>
//     )
//   }
// }
//
// ReactDOM.render(
//   <LikeButton />,
//   document.getElementById('likeButton')
// )



// // <-- Conditional Rendering Practice -->

// function Mailbox(props) {
//   const unreadMessages = props.unreadMessages;
//   return (
//     <div>
//       <h1>Hello!</h1>
//       {unreadMessages.length > 0 &&
//         <h2>
//           You have {unreadMessages.length} unread messages.
//         </h2>
//       }
//     </div>
//   );
// }
//
// const messages = ['React', 'Re: React', 'Re:Re: React', 'Re:Re:Re: React'];
// ReactDOM.render(
//   <Mailbox unreadMessages={messages} />,
//   document.getElementById('mailBox')
// );



// // <-- Forms -->

// class NameForm extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {value: ""}
//
//     this.textChange = this.textChange.bind(this)
//     this.textSubmit = this.textSubmit.bind(this)
//   }
//
//   textChange(e) {
//     this.setState({
//       value: e.target.value
//     })
//   }
//
//   textSubmit(e) {
//     alert(this.state.value)
//     e.preventDefault()
//   }
//
//   render() {
//     return(
//       <form onSubmit={this.textSubmit}>
//         <label>
//           Name:
//           <input type="text" value={this.state.value} onChange={this.textChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     )
//   }
// }
//
// ReactDOM.render(
//   <NameForm />,
//   document.getElementById('nameForm')
// )

//
