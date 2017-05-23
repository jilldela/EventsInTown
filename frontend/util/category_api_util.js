export const fetchCategories = () => (
  $.ajax({
    method: 'GET',
    url: 'api/categories'
  })
);

export const fetchSingleCategory = (categoryName) => (
  $.ajax({
    method: 'GET',
    url: `api/categories/${categoryName}`
  })
);
