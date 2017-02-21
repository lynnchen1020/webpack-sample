require('./sass/index.sass')

class TimeZone extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      date: this.tick(),
      timezone: 8
    }

    this.getTime = this.getTime.bind(this)
    this.tick = this.tick.bind(this)

  }

  tick() {
    let that = this
    setInterval(() => {
      this.setState({
        date: that.getTime()
      })
    }, 1000)
  }

  getTime() {
    this.date = new Date()
    this.timeOffset = this.date.getTimezoneOffset() / 60;
    this.timezone = -this.timeOffset;

    if (Math.abs(this.timezone > 12)) {
      return;
    }

    let now = Date.now()

    let hours = 3600000

    // now + utc + local
    let utcTime = now + this.timeOffset * hours + this.state.timezone * hours

    let result = new Date(utcTime).toLocaleString()

    return result
  }


  render() {
    return (
      <div>
        <div className={this.props.classname}>{this.state.date}</div>
      </div>
    )
  }
}

ReactDOM.render(
  <TimeZone classname='box'/>,
  document.getElementById('timezone')
)

// For webpackHotModule must have
if(module.hot) {
    module.hot.accept();
}
