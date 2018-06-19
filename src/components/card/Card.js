import React, { Component } from 'react';
import Icon from '../global/Icon';
import CardData from './cardData';

class Card extends Component {
  render() {
    const { card } = this.props;
    return (
      <article className="slds-card slds-card_boundary">
        <div className="slds-card__header slds-grid">
          <header className="slds-media slds-media_center slds-has-flexi-truncate">
            <div className="slds-media__figure">
              <Icon object={card.object} type="standard" size="small" />
            </div>
            <div className="slds-media__body">
              <h2 className="slds-card__header-title">
                  <span className="slds-text-heading_small">{card.title}</span>
              </h2>
            </div>
          </header>
        </div>
        <div className="slds-card__body slds-card__body_inner card-data">
          {Object
            .keys(card.info)
            .map(key => <CardData
                key={key}
                index={key}
                type={card.object}
                data={card.info[key]}/>)
          }
        </div>
      </article>
    );
  }
}

export default Card;
