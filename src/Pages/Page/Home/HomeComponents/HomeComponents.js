import React from 'react';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeContact from '../HomeContact/HomeContact';
import HomeDownloadApp from '../HomeDownloadApp/HomeDownloadApp';
import HomePhotoAlbum from '../HomePhotoAlbum/HomePhotoAlbum';
import HomeSubBanner from '../HomeSubBanner/HomeSubBanner';
import ProductCategories from '../ProductCategories/ProductCategories';

const HomeComponents = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <AdvertisedItems></AdvertisedItems>
            <ProductCategories></ProductCategories>
            <HomeSubBanner></HomeSubBanner>
            <HomePhotoAlbum></HomePhotoAlbum>
            <HomeDownloadApp></HomeDownloadApp>
            <HomeContact></HomeContact>
        </div>
    );
};

export default HomeComponents;