import { connect } from 'react-redux';
import CollectionItem from "../../components/collections-item/collection-item.component";
import { selectCollection } from '../../redux/shop/shop.selector';

import './collections.style.scss';

const CollectionsPage = ({ collection }) => {
    console.log(collection);
    const { title, items } = collection;
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>

        </div>
    )
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionsPage);