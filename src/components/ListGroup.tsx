import { Fragment } from "react"
import { MouseEvent } from "react";


export default function ListGroup() {

    let items = [
        'Kigali', 'Musanze', 'Rubavu', 'Kamonyi', 'Ruhango'
  ]

  const handleClick = (event: MouseEvent) => console.log(event);
  


    return (
      <Fragment>
            <h1>This is my List</h1>
            {items.length ===0 && <p>No item found</p>}
        <ul>
                {items.map((item, index) => <li className="list-group-item" key={item} onClick={(event) => console.log(event)}>{item}</li>)}
        </ul>
      </Fragment>
    );
}