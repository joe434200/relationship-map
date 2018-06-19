//Requires Props "object", "type", "size"

import React, { Component } from 'react';
import StandardIcons from '@salesforce-ux/design-system/assets/icons/standard-sprite/svg/symbols.svg';
import ActionIcons from '@salesforce-ux/design-system/assets/icons/action-sprite/svg/symbols.svg';
import UtilityIcons from '@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg';

class Icon extends Component {
  render() {
    const { type, size } = this.props;
    let object = this.props.object.toLowerCase();

    let renderStandard = () => {
        return (
            <span className={`slds-icon_container slds-m-right_x-small slds-icon-standard-${object}`} title="">
                <svg className={`slds-icon slds-icon_${size}`} aria-hidden="true">
                    <use xlinkHref={`${StandardIcons}#${object}`}></use>
                </svg>
            </span>
        );
    }

    let renderAction = () => {
        return (
            <span className={`slds-icon_container`} title="">
                <svg className={`slds-icon slds-icon_${size}`} aria-hidden="true">
                    <use xlinkHref={`${ActionIcons}#${object}`}></use>
                </svg>
            </span>
        );
    }

    let renderUtility = () => {
        return (
            <span className={`slds-icon_container slds-icon-utility-${object}`} title="">
                <svg className={`slds-icon slds-icon-text-default slds-icon_${size}`} aria-hidden="true">
                    <use xlinkHref={`${UtilityIcons}#${object}`}></use>
                </svg>
            </span>
        );
    }

    //Replace with Switch
    let renderIcon = () => {
        if (type === 'standard') {
            return renderStandard();
        }
        else if (type === 'utility') {
            return renderUtility();
        }
        else if (type === 'action') {
            return renderAction();
        }
    }

    return (
        <div>
            {renderIcon()}
        </div>
    );
  }
}

export default Icon;
