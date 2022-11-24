import React from 'react';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeDownloadApp from '../HomeDownloadApp/HomeDownloadApp';
import HomeSubBanner from '../HomeSubBanner/HomeSubBanner';
import ProductCategories from '../ProductCategories/ProductCategories';

const HomeComponents = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <AdvertisedItems></AdvertisedItems>
            <ProductCategories></ProductCategories>
            <HomeSubBanner></HomeSubBanner>
            <HomeDownloadApp></HomeDownloadApp>
        </div>
    );
};

export default HomeComponents;