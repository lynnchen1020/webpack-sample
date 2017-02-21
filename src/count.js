require('./sass/index.sass')

class CountDownTimer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      timeout: this.setStartTime()
    }

    this.secToTime = this.secToTime.bind(this)
    this.count = this.count.bind(this)
    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.reset = this.reset.bind(this)
    this.setStartTime = this.setStartTime.bind(this)

  }

  showTimeFormat(s, n) {
    let t = '' + s;
    while (t.length < n) {
      t = `0${t}`;
    }
    return t;
  }

  secToTime(sec) {
    const seconds = Math.floor(sec % 60).toString();
    const minutes = Math.floor((sec / 60) % 60).toString();
    const hours = parseInt(sec / 3600, 10).toString();
    const showTime = `${this.showTimeFormat(hours, 2)}:${this.showTimeFormat(minutes, 2)}:${this.showTimeFormat(seconds, 2)}`;
    return showTime;
  }

  setStartTime() {
    this.setTime = 300
    return this.setTime
  }

  count() {
    this.setState({
      timeout: this.state.timeout
    })
  }

  start() {
    this.stop()
    this.timer = setInterval(() => {
      this.state.timeout--
      this.count()
    }, 1000)
  }

  stop() {
    clearInterval(this.timer)
  }

  reset() {
    this.setState({
      timeout: this.setStartTime()
    })
  }

  render() {
    const timeOut = this.state.timeout
    return (
      <div>
      <h4>{this.secToTime(timeOut)}</h4>
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}

ReactDOM.render(
  <CountDownTimer />,
  document.getElementById('countDownTimer')
)

// For webpackHotModule must have
if(module.hot) {
    module.hot.accept();
}
