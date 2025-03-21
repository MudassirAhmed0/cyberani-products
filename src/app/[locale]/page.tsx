import ComponentMapper from "@/components/ComponentMapper/ComponentMapper";
import Layout from "@/components/layout/Index";
import About from "@/components/pages/home/about/About";
import Hero from "@/components/pages/home/hero/Hero";
import Services from "@/components/pages/home/services/Services";
import Challenges from "@/components/pages/home/Challenges";
import Cta from "@/components/pages/home/cta/Cta";
import WhatsNext from "@/components/pages/home/WhatsNext";
import Contact from "@/components/common/contact/Contact";
import Loading from "./loading";

const data = [
  {
    component_handel: "pages/home/hero/Hero",
    content: {},
  },
  {
    component_handel: "pages/home/about/About",
    content: {},
  },
  {
    component_handel: "pages/home/services/Services",
    content: {},
  },
  {
    component_handel: "pages/home/Challenges",
    content: {},
  },
  {
    component_handel: "pages/home/cta/Cta",
    content: {},
  },
  {
    component_handel: "pages/home/WhatsNext",
    content: {},
  },
  {
    component_handel: "common/contact/Contact",
    content: {},
  },
];
export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale == "ar";
  return (
    <>
      <Loading />
      <Layout blackHeader={false} arabic={isAr}>
        <ComponentMapper components={data} arabic={isAr} />
      </Layout>
    </>
  );
}
