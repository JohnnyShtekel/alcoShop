import React from 'react';
import ProgressBar from 'react-progress-bar-plus';
import Menu from '../components/Menu.js';

import 'react-progress-bar-plus/lib/progress-bar.css';
import '../components/main.css';
import { getCategories } from '../api/api.js';



class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: []
        };
    }


    componentWillMount() {
        getCategories().then(categories => {
            this.setState({
                categories: categories.data.categorysNameList
            });
        })
    }

  handleSearch(e) {
    e.preventDefault;
    if (e.charCode == 13 && e.target.value.length > 0) {
      let encodeUri = encodeURIComponent(e.target.value);
      this.props.router.push('/?q=' + encodeUri);
      e.target.value = '';
    } else {
      e.target.focus();
    }
  }

  scrolltoTop(scrollDuration) {
    const scrollHeight = window.scrollY;
    const scrollStep = Math.PI / ( scrollDuration / 15 );
    const cosParameter = scrollHeight / 2;
      let scrollCount = 0;
      let scrollMargin;
      const scrollInterval = setInterval(() => {
          if (window.scrollY != 0) {
              scrollCount = scrollCount + 1;
              scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
              window.scrollTo(0, ( scrollHeight - scrollMargin ));
          }
          else clearInterval(scrollInterval);
      }, 15);
  }

  render() {

    return (
      <div>
        <ProgressBar percent={100} />
        <Menu onSearch={this.handleSearch.bind(this)} categories={this.state.categories} ></Menu>
        <div className='main-wrapper'>
          {this.props.children}
        </div>
        <a onClick={this.scrolltoTop.bind(this, 1000)} className="back-to-top">
          <i className="ion-chevron-up"></i>
        </a>
        <footer>
          <div className="container-mini">
            <p className="copyright">
              Best Alco shop
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Main;
