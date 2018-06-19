import React from 'react';
import Icon from './Icon';

const Navigation = () =>  {
	return (
        <div>
        <div className="slds-context-bar">
            <div className="slds-context-bar__primary">
            <div className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-no-hover">
                <div className="slds-context-bar__icon-action">
                <button className="slds-button slds-icon-waffle_container slds-context-bar__button" title="Description of the icon when needed">
                    <span className="slds-icon-waffle">
                    <span className="slds-r1"></span>
                    <span className="slds-r2"></span>
                    <span className="slds-r3"></span>
                    <span className="slds-r4"></span>
                    <span className="slds-r5"></span>
                    <span className="slds-r6"></span>
                    <span className="slds-r7"></span>
                    <span className="slds-r8"></span>
                    <span className="slds-r9"></span>
                    </span>
                    <span className="slds-assistive-text">Open App Launcher</span>
                </button>
                </div>
                <span className="slds-context-bar__label-action slds-context-bar__app-name">
                <span className="slds-truncate" title="Financial Services Cloud">Financial Services Cloud</span>
                </span>
            </div>
            </div>
            <nav className="slds-context-bar__secondary">
            <ul className="slds-grid">
                <li className="slds-context-bar__item slds-is-active">
                <a href="" className="slds-context-bar__label-action" title="Home">
                    <span className="slds-assistive-text">Current Page:</span>
                    <span className="slds-truncate" title="Relationship Map">Relationship Map</span>
                </a>
                </li>
                <li className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_hover">
                <a href="" className="slds-context-bar__label-action" title="Menu Item">
                    <span className="slds-truncate" title="Accounts">Accounts</span>
                </a>
                <div className="slds-context-bar__icon-action slds-p-left_none">
                    <button className="slds-button slds-button_icon slds-button_icon slds-context-bar__button" aria-haspopup="true" title="Open menu item submenu">
                    <Icon object="chevrondown" type="utility" size="x-small" />
                    <span className="slds-assistive-text">Open menu item submenu</span>
                    </button>
                </div>
                <div className="slds-dropdown slds-dropdown_right">
                    <ul className="slds-dropdown__list" role="menu">
                    <li className="slds-dropdown__item" role="presentation">
                        <a href="" role="menuitem" tabIndex="-1">
                        <span className="slds-truncate" title="Main action">
                            <Icon object="add" type="utility" size="x-small" />
                        </span>
                        </a>
                    </li>
                    <li className="slds-dropdown__header slds-has-divider_top-space" role="separator">
                        <span className="slds-text-title_caps">Menu header</span>
                    </li>
                    <li className="slds-dropdown__item" role="presentation">
                        <a href="" role="menuitem" tabIndex="-1">
                        <span className="slds-truncate" title="Menu Item One">Menu Item One</span>
                        </a>
                    </li>
                    <li className="slds-dropdown__item" role="presentation">
                        <a href="" role="menuitem" tabIndex="-1">
                        <span className="slds-truncate" title="Menu Item Two">Menu Item Two</span>
                        </a>
                    </li>
                    <li className="slds-dropdown__item" role="presentation">
                        <a href="" role="menuitem" tabIndex="-1">
                        <span className="slds-truncate" title="Menu Item Three">Menu Item Three</span>
                        </a>
                    </li>
                    </ul>
                </div>
                </li>
                <li className="slds-context-bar__item">
                <a href="" className="slds-context-bar__label-action" title="Menu Item">
                    <span className="slds-truncate" title="Menu Item">Opportunities</span>
                </a>
                </li>
                <li className="slds-context-bar__item">
                <a href="" className="slds-context-bar__label-action" title="Menu Item">
                    <span className="slds-truncate" title="Menu Item">Tasks</span>
                </a>
                </li>
                <li className="slds-context-bar__item">
                <a href="" className="slds-context-bar__label-action" title="Menu Item">
                    <span className="slds-truncate" title="Menu Item">Leads</span>
                </a>
                </li>
            </ul>
            </nav>
        </div>
        </div>
	)
}

export default Navigation;