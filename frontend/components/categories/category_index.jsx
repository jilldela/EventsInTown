import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { values } from 'lodash';

class CategoryIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const categories = values(this.props.categories);
    const { fetchSingleCategory } = this.props;

    return(
      <div className="category-index">
        <h1>Browse by Category</h1>
        <div className="category-list">

          <div className="category-image-large">
            <Link
              to="/categories/sports"
              className="category-link">
              <div className="category-pic-sports">
                <div className="category-hover-content">
                  <div className="category-title">Sports & Wellness</div>
                  <span className="category-description-overlay">
                    Obstacle races, big games, and drop-in yoga classes
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className="category-image-small">
            <Link to="/categories/music" className="category-link">
              <div className="category-pic-music">
                <div className="category-hover-content">
                  <div className="category-title">Music</div>
                  <span className="category-description-overlay">
                    Intimate concerts, major music festivals, and the occasional dance party
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className="category-image-small">
            <Link to="/categories/food" className="category-link">
              <div className="category-pic-food">
                <div className="category-hover-content">
                  <div className="category-title">Food and Drinks</div>
                  <span className="category-description-overlay">
                    Dinner parties, tastings, and big-time festivals
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className="category-image-small">
            <Link to="/categories/entertainment" className="category-link">
              <div className="category-pic-entertainment">
                <div className="category-hover-content">
                  <div className="category-title">Entertainment</div>
                  <span className="category-description-overlay">
                    Plays, comedy nights, art exhibitions, and film festivals
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className="category-image-small">
            <Link to="/categories/classes" className="category-link">
              <div className="category-pic-classes">
                <div className="category-hover-content">
                  <div className="category-title">Classes</div>
                  <span className="category-description-overlay">
                    Enlightening seminars, technical workshops, and fitness classes
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className="category-image-small">
            <Link to="/categories/networking" className="category-link">
              <div className="category-pic-networking">
                <div className="category-hover-content">
                  <div className="category-title">Networking</div>
                  <span className="category-description-overlay">
                    Business mixers, hobby meetups, and panel discussions
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className="category-image-large">
            <Link to="/categories/family" className="category-link">
              <div className="category-pic-family">
                <div className="category-hover-content">
                  <div className="category-title">Family</div>
                  <span className="category-description-overlay">
                    Movie nights, festivals, and kid races
                  </span>
                </div>
              </div>
            </Link>
          </div>

        </div>
      </div>
    );
  }
}

export default CategoryIndex;
