import React from 'react';
import { Staged } from './staged';
import { articles } from './mocks';
import { Img } from './Img';

export const Example3: React.FC = () => (
    <div className="example-3">
        <div className="description">
            <h2>Example 3</h2>
            <p>In some cases it might be necessary to disable animations.</p>
            <p>{'<Staged amount={2} noDrag animation="none">'}</p>
        </div>
        <Staged amount={2} noDrag animation="none">
            {articles.slice(0, 6).map((a, i) => (
                <Img data={a} key={i} />
            ))}
        </Staged>
    </div>
);
