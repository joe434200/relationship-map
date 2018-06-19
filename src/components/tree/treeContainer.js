//Component contains logic for the container of a grouped,
//object specific branches
import React, { Component } from 'react';
import TreeBranch from './treeBranch';
import Icon from '../global/Icon';

class treeContainer extends Component {

  render () {
    const { people, changeCard, active, multiBranch} = this.props;
    let lastChild = people.length;
    let objectType = people[0].object


    let renderTitle = () => {
      return (
        <div className="container-header">
          <Icon object="chevrondown" type="utility" size="xx-small"/>
          <h4>{objectType} ({people.length})</h4>
        </div>
      );
    }

    return (
      <div className={`child-container`}>
          {!people[0].start && renderTitle()}
          <div>
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