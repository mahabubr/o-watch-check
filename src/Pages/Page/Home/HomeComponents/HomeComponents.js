import React from 'react';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import BestSellingProducts from '../BestSellingProducts/BestSellingProducts';
import Discount from '../Discount/Discount';
import FlashSale from '../FlashSale/FlashSale';
// import HomeBanner from '../HomeBanner/HomeBanner';
import HomeContact from '../HomeContact/HomeContact';
import HomeDownloadApp from '../HomeDownloadApp/HomeDownloadApp';
import HomeMainBanner from '../HomeMainBanner/HomeMainBanner';
import HomeOrganizationLogo from '../HomeOrganizationLogo/HomeOrganizationLogo';
import HomePhotoAlbum from '../HomePhotoAlbum/HomePhotoAlbum';
// import HomeSubBanner from '../HomeSubBanner/HomeSubBanner';
import NewArrivedProduct from '../NewArrivedProduct/NewArrivedProduct';
import ProductCategories from '../ProductCategories/ProductCategories';
import WhyChoose from '../WhyChoose/WhyChoose';

const HomeComponents = () => {
    return (
        <div>
            {/* <HomeBanner></HomeBanner> */}
            <HomeMainBanner></HomeMainBanner>
            <AdvertisedItems></AdvertisedItems>
            <ProductCategories></ProductCategories>
            <Discount></Discount>
            <NewArrivedProduct></NewArrivedProduct>
            <BestSellingProducts></BestSellingProducts>
            <FlashSale></FlashSale>
            <WhyChoose></WhyChoose>
            <HomeDownloadApp></HomeDownloadApp>
            {/* <HomeSubBanner></HomeSubBanner> */}
            <HomeOrganizationLogo></HomeOrganizationLogo>
            <HomeContact></HomeContact>
            <HomePhotoAlbum></HomePhotoAlbum>
        </div>
    );
};

export default HomeComponents;