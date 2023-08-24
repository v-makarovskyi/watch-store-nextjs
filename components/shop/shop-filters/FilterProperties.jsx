import { useState, useEffect, Fragment } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import BrandFilter from "./filter-assets/BrandFilter";
import GlassFilter from "./filter-assets/GlassFilter";
import WatchTypeFilter from "./filter-assets/WatchTypeFilter";
import WristbandFilter from "./filter-assets/WristbandFilter";
import PriceFilter from "./filter-assets/price-filter/PriceFilter";
import ColorFilter from "./filter-assets/ColorFilter";
import { ResetButton } from "./reset-button/ResetButton";
import styles from "./filterProperties.module.css";

const FilterProperties = ({
  showProperties,
  brandPage,
  categoryPage,
  onHandleChanges,
  priceValue,
  watchs,
}) => {
  const router = useRouter();
  const { isLoading, isError } = router;
  const brandSlug = router.query.brandSlug;
  const categorySlug = router.query.categorySlug;

  const [watchType, setWatchType] = useState("");
  const [watchBrand, setWatchBrand] = useState("");
  const [glass, setGlass] = useState("");
  const [wristband, setWristband] = useState("");
  const [color, setColor] = useState("");
  console.log(color);

  useEffect(() => {
    let type = watchType && `watch_type=${watchType}`;
    let watch_brand = watchBrand && `&brand=${watchBrand}`;
    let glass_type = glass && `&glass=${glass}`;
    let wristband_type = wristband && `&wristband=${wristband}`;
    let color_type = color && `&color=${color}`;

    if (categoryPage) {
      router.push(
        `/categories/${categorySlug}?` +
          type +
          watch_brand +
          glass_type +
          wristband_type +
          color_type, undefined, { scroll: false }
      );
    }
    if (brandPage) {
      router.push(
        `/brand/${brandSlug}?` +
          type +
          glass_type +
          wristband_type +
          color_type, undefined, { scroll: false }
      );
    }
  }, [watchType, watchBrand, wristband, glass, color]);

  let content = null;

  content = (
    <>
      <PriceFilter
        handleChanges={onHandleChanges}
        priceValue={priceValue}
        watchs={watchs}
      />

      {categorySlug !== "zhinochi" && categorySlug !== "cholovichi" && (
        <>
          <WatchTypeFilter
            setWatchType={setWatchType}
            showProperties={showProperties}
          />
        </>
      )}

      {!brandPage && (
        <>
          <BrandFilter
            showProperties={showProperties}
            setWatchBrand={setWatchBrand}
          />
        </>
      )}

      <GlassFilter showProperties={showProperties} setGlass={setGlass} />

      <WristbandFilter
        showProperties={showProperties}
        setWristband={setWristband}
      />

      <ColorFilter showProperties={showProperties} setColor={setColor} watchs={watchs} />

      <ResetButton pathname={brandSlug ? `/brand/${brandSlug}` : `/categories/${categorySlug}`} />
    </>
  );

  return <div className="filters_wrapper">{content}</div>;
};

export default FilterProperties;
