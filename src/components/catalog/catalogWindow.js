import React from 'react';
import { VirtualizedGrid } from '@mierak/react-virtualized-grid';
import './catalog';
import Card from '../card/card';

const children = [];
for (let i = 0; i < 1000; i++) {
  children.push(<Card key={i} number={i+1}/>);
}

function CatalogWindow() {
    return(
<VirtualizedGrid itemCount={children.length} rowHeight={750} cellWidth={450} gridHeight={800}>
			{(index) => <div>{children[index]}</div>}
		</VirtualizedGrid>
    )
}

export default CatalogWindow;