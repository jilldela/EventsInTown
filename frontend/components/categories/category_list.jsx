import React from 'react';
import { Link } from 'react-router-dom';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="category-nav-list">
        <ul>
          <li><Link to="/categories">All Categories</Link></li>
          <li><Link to="/categories/sports">Sports & Wellness</Link></li>
          <li><Link to="/categories/music">Music</Link></li>
          <li><Link to="/categories/food">Food and Drink</Link></li>
          <li><Link to="/categories/entertainment">Entertainment</Link></li>
          <li><Link to="/categories/classes">Classes</Link></li>
          <li><Link to="/categories/networking">Networking</Link></li>
          <li><Link to="/categories/family">Family</Link></li>
        </ul>
      </nav>
    );
  }
}

export default CategoryList;
