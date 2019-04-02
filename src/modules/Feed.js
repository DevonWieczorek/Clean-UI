import React from 'react';
import TileHeroLink from '../components/TileHeroLink';
import Pagination from '../components/Pagination';

const Feed = () => {
    const renderFeed = () => {
        let items = [];
        for(var i = 0; i < 12; i++){
            items.push(
                <TileHeroLink
                    title="Dynamic Title"
                    src="http://www.fillmurray.com/300/200"
                    link="#"
                >
                    <div className="row">
                        <div className="single-detail col">21.3k Views &middot; 78.6%</div>
                        <div className="single-detail col">31:24</div>
                    </div>
                </TileHeroLink>
            );
        }
        return items;
    }

    return(
        <>
            {renderFeed()}

            <center className="clear">
                <Pagination />
            </center>
        </>
    );
}

export default Feed;
