import React, { Component } from 'react';
import Icon from '../global/Icon';

class popOver extends Component {
  constructor(props) {
    super();
    this.state = {
      accounts: {},
      contacts: {}
    }
  }

  componentDidMount() {
    let children = this.props.children;
    let accounts = [];
    let contacts = [];

    for (let i = 0; i < children.length; i++) {
      if (children[i].object === 'Account') {
        accounts.push(children[i]);
      }
      else if (children[i].object === 'Contact') {
        contacts.push(children[i]);
      }
    }

    return this.setState({ 
      accounts: accounts,
      contacts: contacts
    })
  }

  render() {
    const { showPopOver } = this.props;

    return (
      <div className={`map-popOver slds-is-absolute ${showPopOver ? '' : 'hide'}`}>
        <section className="slds-popover slds-nubbin_left-top slds-popover_small" role="dialog" aria-label="Dialog Title" aria-describedby="dialog-body-id-5">
          <button className="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close slds-button_icon" title="Close dialog">
            <Icon object="close" type="utility" size="xx-small"/>
            <span className="slds-assistive-text">Close dialog</span>
          </button>
          <div className="slds-popover__body" id="dialog-body-id-5">
            <div className="map-popOver-row">
              <div className="map-popOver-media">
                <Icon object="Account" type="standard" size="small"/>
                <p>Accounts</p>
              </div>
              <p className="number">{this.state.accounts.length}</p>
            </div>
            <div className="map-popOver-row">
              <div className="map-popOver-media">
                <Icon object="Contact" type="standard" size="small"/>
                <p>Contacts</p>
              </div>
              <p className="number">{this.state.contacts.length}</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default popOver;
