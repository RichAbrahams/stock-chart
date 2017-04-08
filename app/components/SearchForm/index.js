/**
*
* SearchForm
*
*/

import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form/immutable';
import {
  Panel,
  Button,
  Form,
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap';
import StcField from './StcField';
import StcFormGroup from './StcFormGroup';
import StcLabel from './StcLabel';

class SearchForm extends Component {
  render() {
    const {handleSubmit, customError} = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <StcFormGroup>
          <StcLabel htmlFor="stockCode">Add stock</StcLabel>
          <StcField name="stockCode" component="input" type="text" /> {customError && <span>{customError}</span>}
          <Button bsStyle="primary" type="submit">Submit</Button>
        </StcFormGroup>
      </form>
    );
  }
}

SearchForm = reduxForm({form: 'searchForm'})(SearchForm);

export default SearchForm;
