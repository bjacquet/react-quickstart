
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
};

function App() {
  return (
    <div>
      <Welcome name="Edite" />
    </div>
  ); 
};

function FormattedDate(props) {
  return <h2>It is now {props.date.toLocaleTimeString()}.</h2>;
}

// Clock
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  
  // When is rendered into DOM.
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  // When is removed from DOM.
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  tick() {
    this.setState({
      date: new Date()
    });
  }

  
  render() {
    return <FormattedDate date={this.state.date} />;
  }
}


const element = (
  <div>
    <App />
    <Clock />
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);


function Avatar(props) {
  return (
    <img className="Avatar"
         src={props.user.avatarUrl}
         alt={props.user.name}
       />
  );
};

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
        <div className="UserInfo-name">
          {props.user.name}
        </div>
      </div>
  );
};

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

