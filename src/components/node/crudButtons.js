import React, { Component } from 'react';
import Icon from '../global/Icon';

class crudButtons extends Component {
  render() {
    const { showButtons } = this.props;

    return (
      <div className={`${showButtons ? '' : 'crud-hide'}`}>
        <button className="slds-button slds-button_stateful slds-button_neutral slds-not-selected circle-button-edit slds-is-absolute" aria-live="assertive">
            <Icon object="edit" type="action" size="x-small" />
        </button>
        <button className="slds-button slds-button_stateful slds-button_neutral slds-not-selected circle-button-add slds-is-absolute" aria-live="assertive">
            <Icon object="more" type="action" size="x-small" />
        </button>
      </div>
    );
  }
}

export default crudButtons;
