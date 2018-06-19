import React from 'react';
import Icon from './Icon';
import logo from '@salesforce-ux/design-system/assets/images/logo.svg';
import avatar from '@salesforce-ux/design-system/assets/images/avatar2.jpg';
import Navigation from './Navigation';
const Header = () =>  {

  let backgroundStyle = { backgroundImage: 'url(' + logo + ')' };
	return (
		<header className="slds-global-header_container">
      <div className="slds-global-header slds-grid slds-grid_align-spread">
          <div className="slds-global-header__item">
            <div className="slds-global-header__logo" style={backgroundStyle}></div>
          </div>
          <div className="slds-global-header__item slds-global-header__item_search">
          <div className="slds-form-element">
              <label className="slds-form-element__label slds-assistive-text">Search Salesforce</label>
              <div className="slds-form-element__control">
              <div className="slds-combobox-group">
                  <div className="slds-combobox_object-switcher slds-combobox-addon_start">
                  <div className="slds-form-element">
                      <label className="slds-form-element__label slds-assistive-text">Filter Search by:</label>
                      <div className="slds-form-element__control">
                      <div className="slds-combobox_container">
                          <div className="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click" aria-controls="primary-search-combobox-id-1" aria-expanded="false" aria-haspopup="listbox" role="combobox">
                          <div className="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                              <input type="text" className="slds-input slds-combobox__input slds-combobox__input-value" id="objectswitcher-combobox-id-1" aria-controls="objectswitcher-listbox-id-1" autoComplete="off" placeholder=" " defaultValue="Accounts"
                              />
                              <span className="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                                <Icon object="down" type="utility" size="x-small" />
                              </span>
                          </div>
                          <div id="objectswitcher-listbox-id-1" className="slds-dropdown slds-dropdown_length-5 slds-dropdown_x-small slds-dropdown_left" role="listbox">
                              <ul className="slds-listbox slds-listbox_vertical" role="group" aria-label="Suggested for you">
                              <li role="presentation" className="slds-listbox__item">
                                  <div id="object0" className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="presentation">
                                  <h3 className="slds-text-title_caps" role="presentation">Suggested for you</h3>
                                  </div>
                              </li>
                              <li role="presentation" className="slds-listbox__item">
                                  <div id="object1" className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected" >
                                  <span className="slds-media__figure">
                                    <Icon object="check" type="utility" size="small" />
                                  </span>
                                  <span className="slds-media__body">
                                      <span className="slds-truncate" title="Accounts">
                                      <span className="slds-assistive-text">Current Selection:</span> Accounts</span>
                                  </span>
                                  </div>
                              </li>
                              <li role="presentation" className="slds-listbox__item">
                                  <div id="object2" className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" >
                                  <span className="slds-media__figure">
                                    <Icon object="check" type="utility" size="small" />
                                  </span>
                                  <span className="slds-media__body">
                                      <span className="slds-truncate" title="Reports"> Reports</span>
                                  </span>
                                  </div>
                              </li>
                              <li role="presentation" className="slds-listbox__item">
                                  <div id="object3" className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" >
                                  <span className="slds-media__figure">
                                    <Icon object="check" type="utility" size="small" />
                                  </span>
                                  <span className="slds-media__body">
                                      <span className="slds-truncate" title="Contacts"> Contacts</span>
                                  </span>
                                  </div>
                              </li>
                              <li role="presentation" className="slds-listbox__item">
                                  <div id="object4" className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" >
                                  <span className="slds-media__figure">
                                    <Icon object="check" type="utility" size="small" />
                                  </span>
                                  <span className="slds-media__body">
                                      <span className="slds-truncate" title="Files"> Files</span>
                                  </span>
                                  </div>
                              </li>
                              <li role="presentation" className="slds-listbox__item">
                                  <div id="object5" className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" >
                                  <span className="slds-media__figure">
                                    <Icon object="check" type="utility" size="small" />
                                  </span>
                                  <span className="slds-media__body">
                                      <span className="slds-truncate" title="Groups"> Groups</span>
                                  </span>
                                  </div>
                              </li>
                              <li role="presentation" className="slds-listbox__item">
                                  <div id="object6" className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" >
                                  <span className="slds-media__figure">
                                    <Icon object="check" type="utility" size="small" />
                                  </span>
                                  <span className="slds-media__body">
                                      <span className="slds-truncate" title="Leads"> Leads</span>
                                  </span>
                                  </div>
                              </li>
                              <li role="presentation" className="slds-listbox__item">
                                  <div id="object7" className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" >
                                  <span className="slds-media__figure">
                                    <Icon object="check" type="utility" size="small" />
                                  </span>
                                  <span className="slds-media__body">
                                      <span className="slds-truncate" title="Notes"> Notes</span>
                                  </span>
                                  </div>
                              </li>
                              </ul>
                          </div>
                          </div>
                      </div>
                      </div>
                  </div>
                  </div>
                  <div className="slds-combobox_container slds-combobox-addon_end">
                  <div className="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click" aria-expanded="false" aria-haspopup="listbox" id="primary-search-combobox-id-1">
                      <div className="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_left slds-global-search__form-element" role="none">
                      <span className="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_left">
                        <Icon object="search" type="utility" size="x-small" />
                      </span>
                      <input type="text" className="slds-input slds-combobox__input" id="combobox-id-1" aria-autocomplete="list" aria-controls="search-listbox-id-1" autoComplete="off" placeholder="Search Salesforce" />
                      </div>
                      <div id="search-listbox-id-1" className="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox">
                      <ul className="slds-listbox slds-listbox_vertical" role="group" aria-label="Recent Items">
                          <li role="presentation" className="slds-listbox__item">
                          <div id="option0" className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_center" role="presentation">
                              <h3 className="slds-text-title_caps" role="presentation">Recent Items</h3>
                          </div>
                          </li>
                          <li role="presentation" className="slds-listbox__item">
                          <div id="option1" className="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" >
                              <span className="slds-media__figure">
                              <span className="slds-icon_container slds-icon-standard-opportunity">
                                <Icon object="opportunity" type="standard" size="small" />
                              </span>
                              </span>
                              <span className="slds-media__body">
                              <span className="slds-listbox__option-text slds-listbox__option-text_entity">Salesforce - 1,000 Licenses</span>
                              <span className="slds-listbox__option-meta slds-listbox__option-meta_entity">Opportunity • Propecting</span>
                              </span>
                          </div>
                          </li>
                          <li role="presentation" className="slds-listbox__item">
                          <div id="option2" className="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" >
                              <span className="slds-media__figure">
                              <span className="slds-icon_container slds-icon-standard-contact">
                                <Icon object="contact" type="standard" size="x-small" />
                              </span>
                              </span>
                              <span className="slds-media__body">
                              <span className="slds-listbox__option-text slds-listbox__option-text_entity">Art Vandelay</span>
                              <span className="slds-listbox__option-meta slds-listbox__option-meta_entity">Contact • avandelay@vandelay.com</span>
                              </span>
                          </div>
                          </li>
                          <li role="presentation" className="slds-listbox__item">
                          <div id="option3" className="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" >
                              <span className="slds-media__figure">
                              <span className="slds-icon_container slds-icon-standard-account">
                                <Icon object="account" type="standard" size="small" />
                              </span>
                              </span>
                              <span className="slds-media__body">
                              <span className="slds-listbox__option-text slds-listbox__option-text_entity">Vandelay Industries</span>
                              <span className="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • San Francisco</span>
                              </span>
                          </div>
                          </li>
                          <li role="presentation" className="slds-listbox__item">
                          <div id="option4" className="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" >
                              <span className="slds-media__figure">
                              <span className="slds-icon_container slds-icon-standard-event">
                                <Icon object="event" type="standard" size="small" />
                              </span>
                              </span>
                              <span className="slds-media__body">
                              <span className="slds-listbox__option-text slds-listbox__option-text_entity">Salesforce UK 2016 Events</span>
                              <span className="slds-listbox__option-meta slds-listbox__option-meta_entity">Event • $20,000</span>
                              </span>
                          </div>
                          </li>
                          <li role="presentation" className="slds-listbox__item">
                          <div id="option5" className="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" >
                              <span className="slds-media__figure">
                              <span className="slds-icon_container slds-icon-standard-lead">
                                <Icon object="lead" type="standard" size="small" />
                              </span>
                              </span>
                              <span className="slds-media__body">
                              <span className="slds-listbox__option-text slds-listbox__option-text_entity">H.E. Pennypacker</span>
                              <span className="slds-listbox__option-meta slds-listbox__option-meta_entity">Lead • Nursing</span>
                              </span>
                          </div>
                          </li>
                      </ul>
                      </div>
                  </div>
                  </div>
              </div>
              </div>
          </div>
          </div>
          <div className="slds-global-header__item">
          <ul className="slds-global-actions">
              <li className="slds-global-actions__item">
              <div className="slds-global-actions__favorites slds-dropdown-trigger slds-dropdown-trigger_click">
                  <div className="slds-button-group">
                  <button className="slds-button slds-button_icon slds-global-actions__favorites-action slds-button_icon slds-button_icon-border slds-button_icon-small" aria-pressed="false" title="Toggle Favorites">
                      <Icon object="favorite" type="utility" size="x-small" />
                      <span className="slds-assistive-text">Toggle Favorite</span>
                  </button>
                  <button className="slds-button slds-button_icon slds-global-actions__favorites-more slds-button_icon slds-button_icon-border slds-button_icon-small" title="View Favorites">
                      <Icon object="down" type="utility" size="x-small" />
                      <span className="slds-assistive-text">View Favorites</span>
                  </button>
                  </div>
              </div>
              </li>
              <li className="slds-global-actions__item">
              <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
                  <button className="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__task slds-global-actions__item-action fill-white" aria-haspopup="true" title="Global Actions">
                  <Icon object="add" type="utility" size="x-small" />
                  <span className="slds-assistive-text">Global Actions</span>
                  </button>
              </div>
              </li>
              <li className="slds-global-actions__item">
              <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
                  <button className="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__help slds-global-actions__item-action" aria-haspopup="true" title="Help and Training">
                  <Icon object="question" type="utility" size="x-small" />
                  <span className="slds-assistive-text">Help and Training</span>
                  </button>
              </div>
              </li>
              <li className="slds-global-actions__item">
              <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
                  <button className="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__setup slds-global-actions__item-action" aria-haspopup="true" title="Setup">
                    <Icon object="setup" type="utility" size="small" />
                  <span className="slds-assistive-text">Setup</span>
                  </button>
              </div>
              </li>
              <li className="slds-global-actions__item">
              <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
                  <button className="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__notifications slds-global-actions__item-action" title="no new notifications" aria-live="assertive" aria-atomic="true">
                    <Icon object="notification" type="utility" size="small" />
                  <span className="slds-assistive-text">no new notifications</span>
                  </button>
                  <span aria-hidden="true" className="slds-notification-badge">0</span>
              </div>
              </li>
              <li className="slds-global-actions__item">
              <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
                  <button className="slds-button slds-global-actions__avatar slds-global-actions__item-action" title="person name" aria-haspopup="true">
                  <span className="slds-avatar slds-avatar_circle slds-avatar_medium">
                      <img alt="Person name" src={`${avatar}`} title="User avatar" />
                  </span>
                  </button>
              </div>
              </li>
          </ul>
          </div>
      </div>
        <Navigation />
      </header>
	)
}

export default Header;