//Component contains logic for the container of a grouped,
//object specific branches
import React, { Component } from 'react';
import TreeBranch from './treeBranch';
import Icon from './Icon';

class treeContainer extends Component {
  constructor(props) {
    super(props);
    this.collapseCard = this.collapseCard.bind(this);
    this.state = {
      hideBranches: false
    };
  }

  collapseCard() {
    let hideBranches = this.state.hideBranches;
    return this.setState({ hideBranches: !hideBranches });
  }

  render () {
    const { people, changeCard, active, multiBranch} = this.props;
    let expandedIcon = 'chevrondown';
    let collapsedIcon = 'chevronright';
    let lastChild = people.length;
    let objectType = people[0].object
    let renderIcon = () => {
      return this.state.hideBranches ? collapsedIcon : expandedIcon;
    }

    let renderTitle = () => {
      return (
        <div className={`container-header ${this.state.hideBranches && !multiBranch ? 'collapse-header' : ''}`} onClick={() => this.collapseCard()}>
          <Icon object={`${renderIcon()}`} type="utility" size="xx-small"/>
          <h4>{objectType} ({people.length})</h4>
        </div>
      );
    }

    return (
      <div className={`child-container`}>
          {!people[0].start && renderTitle()}
          <div className={`${this.state.hideBranches ? 'hide' : ''}`}>
            {Object
              .keys(people)
              .map(key => <TreeBranch
                key={key}
                index={key}
                changeCard={changeCard}
                active={active}
                lastChild={lastChild}
                multiBranch={multiBranch}
                person={people[key]}/>)
            }
          </div>
        </div>
    )
  }
}

export default treeContainer;