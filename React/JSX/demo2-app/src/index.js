import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';


const items = [
  'Apple', 'Banana', 'Orange', 'Apricot', 'Black rowan', 'Cranberry'
];
const programming = React.createElement("section", {id: "coding"}, 
React.createElement("h1", null, "List of Fruits"),
				React.createElement("ul", {className: "coding"},
					items.map((coding, i) =>
				   React.createElement("li", { key: i }, coding),
				)
        )
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(programming);
