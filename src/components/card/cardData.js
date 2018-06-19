import React, { Component } from 'react';
import Icon from '../global/Icon';
class cardData extends Component {
  render() {
    const { data, type } = this.props;

    let renderStandardData = () => {
      return (
        <div className="slds-form-element">
            <span className="slds-form-element__label">{data.label}</span>
              <div className="slds-form-element__control">
                <span className="slds-form-element__static">{data.field}</span>
            </div>
        </div>
      )
    }

    let renderTeamData = () => {
      return (
        <div className="team-container">
            <Icon object="avatar" type="standard" size="small" />
            <div>
              <span className="slds-form-element__label">{data.label}</span>
                <div className="slds-form-element__control">
                  <span className="slds-form-element__static">{data.field}</span>
              </div>
            </div>
        </div>
      )
    }

    return (
      <div className={`${type === 'Groups' ? 'card-team' : 'info'}`}>
        {type === 'Groups' ? renderTeamData() : renderStandardData()}
      </div>
    );
  }
}

export default cardData;
