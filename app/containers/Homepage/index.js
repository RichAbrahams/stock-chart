/*
 *
 * Homepage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { reset } from 'redux-form';
import { PageHeader } from 'react-bootstrap';
import * as selectors from './selectors';
import * as actions from './actions';
import SearchForm from '../../components/SearchForm';
import Chart from '../../components/Chart';
import RemoveButtons from '../../components/RemoveButtons';
import Container from './Container';
import DivRow from './DivRow';
import Header from './Header';

export class Homepage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.handleSubmit = this
      .handleSubmit
      .bind(this);
  }

  handleSubmit(data) {
    this
      .props
      .getStock(data);
    this
      .props
      .resetForm('searchForm');
  }

  render() {
    return (
      <Container>
        <Helmet
          title="NYSE Stock Chart"
          meta={[{
            name: 'description',
            content: 'Description of Homepage',
          },
          ]}
        />
        <Header className="header">
        <h1>NYSE Stock Chart</h1>
        <SearchForm
          {...this.props}
          onSubmit={this.handleSubmit}
        />
        </Header>
        <DivRow className="div-row">
          {this.props.stocks !== null && <Chart {...this.props} />}
          {this.props.stocks !== null && <RemoveButtons {...this.props} />}
        </DivRow>
      </Container>
    );
  }
}

Homepage.propTypes = {
  getStock: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  stocks: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  stocks: selectors.selectStocks(),
  customError: selectors.selectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    getStock: (payload) => dispatch(actions.getStock(payload)),
    removeStock: (payload) => dispatch(actions.removeStock(payload)),
    resetForm: () => dispatch(reset('searchForm')),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
