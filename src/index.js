require('./sass/index.sass')
require('./test.js')

class HelloMessage extends React.Component {
   constructor(props) {
     super(props)

     this.state = {
       data: [1, 2, 3, 4, 5, 6, 7, 8]
     }

     this.add = this.add.bind(this)
   }

  add(e) {
    // setState will re-render a component
    this.setState({
      data: this.state.data.concat([1])
    })
   }

  // How React learns what should be displayed on the screen.
  render() {
    const items = this.state.data.map((i) => {
      // Key should be specified inside the array.
      return <span className={'box'} onClick={this.add}>{i}</span>
    })

    // Export Component
    return (
      <div className={this.props.class}>
        {items}
      </div>
    );
  }
}

// Insert component into DOM
ReactDOM.render(
  <HelloMessage class="header"/>,
  document.getElementById('example')
);

// For webpackHotModule must have
if(module.hot) {
    module.hot.accept();
}
