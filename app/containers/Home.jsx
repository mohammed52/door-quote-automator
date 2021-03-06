import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import CategoryWrapperContainer from './CategoryWrapperContainer'
import styles from '../css/components/homeStyles';

// const scrape = require('website-scraper');
// const phantomHtml = require('website-scraper-phantom');

class Home extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log("HomeContainer componentDidMount");
    // scrape({
    //   urls: ['https://www.instagram.com/gopro/'],
    //   directory: '/path/to/save',
    //   httpResponseHandler: phantomHtml
    // }).then(console.log).catch(console.log);
  }

  componentDidUpdate() {
    console.log("HomeContainer componentDidUpdate");
  }



  render() {

    let startingIndex = 0;

    return (
      <div className={[styles.homeWrapper].join(' ')}>
        <div>
          <iframe src="http://www.bbc.com/news"
                  frameBorder="1"></iframe>
          <br/>
          <iframe src="http://www.steelman.com.pk/"
                  frameBorder="1"></iframe>
        </div>
        <div className={["container-fluid"].join(' ')}>
          <h2 className={[styles.pageTitle].join(' ')}>Get INSTANT quotes for Metal Doors!</h2>
          <h3 className={[styles.pageSubTitle].join(' ')}>Select a Door Type</h3>
          <CategoryWrapperContainer />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  // topics: PropTypes.array.isRequired,
  // typing: PropTypes.func.isRequired,
  // createTopic: PropTypes.func.isRequired,
  // destroyTopic: PropTypes.func.isRequired,
  // incrementCount: PropTypes.func.isRequired,
  // decrementCount: PropTypes.func.isRequired,
  // newTopic: PropTypes.string
};

function mapStateToProps(state) {
  return {
    // topics: state.topic.topics,
    // newTopic: state.topic.newTopic
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps, {
  // createTopic,
  // typing,
  // incrementCount,
  // decrementCount,
  // destroyTopic
})(Home);
