import React, {Component, Fragment} from "react";
import PropTypes from 'prop-types'

import Aux from '../../../hox/Auxiliary'
import withClass from '../../../hox/withClass'
import classes from './Person.css';
import AuthContext from "../../../context/auth-context";


class Person extends Component {
  constructor(props) {
    super(props)
    this.inputElementRef = React.createRef()
  }

  static contextType=AuthContext

  componentDidMount() {
    // this.inputElement.focus()
    this.inputElementRef.current.focus()
    console.log(this.context.authenticated);
  }
  // const random = Math.random();

  // if (random > 0.7) {
  //   throw new Error("Something went wrong");
  // }
  render() {
    console.log("[Person.js] rendering...");
    return (
      <Fragment>
          {this.context.authenticated ? (
              <p>Authenticated!</p>
            ) : (
              <p>Please Log in</p>
            )
          }
        <p key="i1" onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          // ref={(inputElement) => {this.inputElement = inputElement}}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
        ,
      </Fragment>
    );
  }
};

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default withClass(Person, classes.Person);
