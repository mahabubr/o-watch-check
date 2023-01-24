import React from 'react';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
// import HomeBanner from '../HomeBanner/HomeBanner';
import HomeContact from '../HomeContact/HomeContact';
import HomeDownloadApp from '../HomeDownloadApp/HomeDownloadApp';
import HomeMainBanner from '../HomeMainBanner/HomeMainBanner';
import HomeOrganizationLogo from '../HomeOrganizationLogo/HomeOrganizationLogo';
import HomePhotoAlbum from '../HomePhotoAlbum/HomePhotoAlbum';
import HomeSubBanner from '../HomeSubBanner/HomeSubBanner';
import ProductCategories from '../ProductCategories/ProductCategories';

const HomeComponents = () => {
    return (
        <div>
            {/* <HomeBanner></HomeBanner> */}
            <HomeMainBanner></HomeMainBanner>
            <AdvertisedItems></AdvertisedItems>
            <ProductCategories></ProductCategories>
            <HomeSubBanner></HomeSubBanner>
            <HomePhotoAlbum></HomePhotoAlbum>
            <HomeDownloadApp></HomeDownloadApp>
            <HomeOrganizationLogo></HomeOrganizationLogo>
            <HomeContact></HomeContact>
        </div>
    );
};

export default HomeComponents;