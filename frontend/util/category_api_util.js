export const fetchCategories = () => (
  $.ajax({
    method: 'GET',
    url: 'api/categories'
  })
);

export const fetchSingleCategory = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/categories/${id}`
  })
);
