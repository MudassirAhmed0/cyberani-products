import getData from "@/lib/data-hooks/getData";
import getPagesData from "@/lib/data-hooks/getPagesData";
import getGLobalSEOData from "@/lib/data-hooks/getGLobalSEOData";

const getMetaData = async ({ slug, isAr, initalData }) => {
  const {
    pages: { data: pagesData },
  } = await getPagesData(isAr);
  const data = initalData || (await getData(slug, isAr));
  const globalSeo = await getGLobalSEOData(isAr);
  const fallbackSeo = globalSeo?.globalSet;
  const websiteName = fallbackSeo?.site_name;
  const pageSeo = data?.entry?.seo_tags;

  const title = pageSeo?.meta_title
    ? pageSeo?.meta_title + " - " + websiteName
    : fallbackSeo?.meta_title + " - " + websiteName;
  const description = pageSeo?.meta_description
    ? pageSeo?.meta_description
    : fallbackSeo?.meta_description;
  const keywords = pageSeo?.seo_keywords
    ? pageSeo?.seo_keywords
    : fallbackSeo?.seo_keywords;
  const image = pageSeo?.meta_image?.url
    ? pageSeo?.meta_image?.url
    : fallbackSeo?.meta_image?.url;
  return {
    title: title,
    description: description,
    keywords: keywords,
    openGraph: {
      title: title,
      description: description,
      images: [image],
      width: 1200,
      height: 628,
    },
    twitter: {
      title: title,
      description: description,
      images: [image],
      width: 1200,
      height: 628,
    },
  };
};

export default getMetaData;
