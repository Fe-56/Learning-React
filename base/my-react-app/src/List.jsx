// render lists

import PropTypes from 'prop-types';

function List(props) {
  const itemList = props.items;
  const category = props.category;

  // // sort item names alphabetically
  // itemList.sort((a, b) => 
  //   a.name.localeCompare(b.name)
  // );

  // // sort item names in reverse alphabetical order
  // itemList.sort((a, b) => 
  //   b.name.localeCompare(a.name)
  // );

  // // sort the item calories in ascending order
  // itemList.sort((a, b) => 
  //   a.calories > b.calories
  // );

  // sort the item calories in descending order
  itemList.sort((a, b) => 
    a.calories < b.calories
  );

  const lowCalItems = itemList.filter(item => 
    item.calories < 100
  );

  // const highCalItems = itemList.filter(item =>
  //   item.calories >= 100
  // );

  const listItems = lowCalItems.map(
    item => 
      <li key={item.id}>
        {item.name}: &nbsp;
        <b>{item.calories}</b>
      </li>
  );

  return (
    (props.items.length > 0) ?
      (<div>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">
          {listItems}
        </ol>
      </div>)
      : (<div>
        <h3>There is nothing to be shown!</h3>
      </div>)
  );
}

List.PropTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number
  })),
  category: PropTypes.string
}

List.defaultProps = {
  items: [],
  category: "Generic"
}

export default List;