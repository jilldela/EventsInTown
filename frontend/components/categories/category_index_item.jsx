import React from 'react';

class CategoryIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { category } = this.props;

    return (
      <div>
        {category.name}
      </div>
    );
  }
}

export default CategoryIndexItem;
