import React from 'react';
import * as api from '../api';

const SubscribeMsg = ({subscriptionState}) => {
  if(!subscriptionState) return null;
  const classNames = {
    pending: 'subscribe-form__msg--ok',
    success: 'subscribe-form__msg--ok',
    error: 'subscribe-form__msg--error'
  };
  const msgs = {
    pending: 'Subscribing you to the list...',
    success: 'Almost done. Check your email to confirm yoursubscription.',
    already_subscribed: "Looks like you're already subscribed to our list.",
    error: "Something went wrong while subscribing you to the list, please try again."
  };
  return (
    <p className={classNames[subscriptionState] || classNames.error}>
      {msgs[subscriptionState] || msgs.error}
    </p>
  )
};

export default class SubscribeForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      subscriptionState: null
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  async handleSubmit(event) {
    this.setState({subscriptionState: 'pending'});
    event.preventDefault();
    const result= await api.subscribeToList(this.state.email);
    this.setState({
      email: result === 'success' ? '' : this.state.email,
      subscriptionState: result
    });
  }

  render () {
    return (
      <form className="subscribe-form" onSubmit={this.handleSubmit}>
        <input type="email" name="email" value={this.state.email} onChange={this.handleEmailChange}/><input type="submit" value="Subscribe"/>
        <SubscribeMsg subscriptionState={this.state.subscriptionState}/>
      </form>
    )
  }

}