/**
*
* RemoveButtons
*
*/

import React from 'react';
import shortid from 'shortid';
import TransitionGroup from 'react-addons-css-transition-group';
import RemoveButtonsWrapper from './RemoveButtonsWrapper';
import Button from './Button';
import FA from './FA';

// import styled from 'styled-components';

function RemoveButtons(props) {
  const { stocks, removeStock } = props;
  const removeButtons = stocks.map((item) => <li><Button color={item.color} key={shortid.generate()} onClick={() => removeStock(item.code)}>{item.code}&nbsp;
    <FA
      name="times"
    />
  </Button></li>);
  return (
    <RemoveButtonsWrapper>
      <ul>
      <TransitionGroup
        transitionName="fade"
        transitionEnterTimeout="500"
        transitionLeaveTimeout="500"
      >
        {removeButtons}
      </TransitionGroup>
      </ul>
    </RemoveButtonsWrapper>
  );
}

RemoveButtons.propTypes = {};

export default RemoveButtons;
