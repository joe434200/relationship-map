import React, { Component } from 'react';
import TreeLevel from './treeLevel';
class tree extends Component {

  render() {
    const { people, changeCard } = this.props;
    let firstId = people[0].id;

    return (
        <div className="tree">
            <TreeLevel index={this.firstID} people={people} changeCard={changeCard}></TreeLevel>
        </div>
    )
  }
}

export default tree;
