import React, { Component } from 'react';
import CrudButtons from './crudButtons';
import PopOver from './popOver';
import Icon from '../global/Icon';

class treeNode extends Component {
  constructor(props) {
    super();
    this.hoverHandler = this.hoverHandler.bind(this);
    this.popOverHandler = this.popOverHandler.bind(this);
    this.state = {
      showButtons: false,
      showPopOver: false
    }
  }

  hoverHandler() {
    let showButtons = this.state.showButtons;
    return this.setState({ showButtons: !showButtons });
  }

  popOverHandler() {
    let showPopOver = this.state.showPopOver;
    return this.setState({ showPopOver: !showPopOver });
  }

  render() {
    const { person, hideChildren } = this.props;
    let renderExtension = () => {
      return(
        <button className="slds-button slds-button_stateful slds-button_neutral slds-not-selected circle-button-extender slds-is-absolute" aria-live="assertive" onClick={() => hideChildren()} onMouseEnter={this.popOverHandler} onMouseLeave={this.popOverHandler}>{person.children.length}</button>
      )
    }

    return (
        <div className="button-container slds-is-relative" onMouseEnter={this.hoverHandler} onMouseLeave={this.hoverHandler}>
            <CrudButtons showButtons={this.state.showButtons}></CrudButtons>
            {person.children !== null && renderExtension()}
            <div className="node-button" aria-live="assertive">
                <Icon object={person.object} type='standard' size="x-small"></Icon>
                <div>
                  <span className="node-name">{person.name}</span>
                  <span className="node-role">{person.role}</span>
                </div>
            </div>
            {person.children !== null && <PopOver showPopOver={this.state.showPopOver} children={person.children}/>}
        </div>
    )
  }
}

export default treeNode;