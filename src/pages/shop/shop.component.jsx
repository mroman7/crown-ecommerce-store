import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collection-overview/collections-overview.component";
import CollectionsPage from "../collections/collections.component";

const ShopPage = ({ match }) => {

    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionsPage} />
        </div>
    )
};

export default ShopPage;