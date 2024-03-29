import React, { useCallback, useState } from 'react';
import { Staged, OnSwipe } from './staged';

const nums = new Array(7).fill(null).map((_, i) => i + 1);

export const Example6: React.FC = () => {
    const [pos, setPos] = useState(0);
    const onSwipe = useCallback<OnSwipe>(({ pos }) => setPos(pos), []);

    return (
        <div className="example-6">
            <div className="description">
                <h2>Example 6</h2>
                <p>- The slider automatically adjusts sliding amounts.</p>
                <p>- The slider allows to add a swipe listener (current&nbsp;pos:&nbsp;{pos})</p>
                <p>{`<Staged amount={3} onSwipe={setPos}>`}</p>
            </div>
            <Staged amount={3} onSwipe={onSwipe}>
                {nums.map((n) => (
                    <div className="huge-num-container" key={n}>
                        <div className="huge-num">{n}</div>
                    </div>
                ))}
            </Staged>
        </div>
    );
};
