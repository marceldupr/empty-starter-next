import { CatalogList } from "@/components/blocks";

export default async function CataloguePage() {
  const tableSlug = process.env.NEXT_PUBLIC_CATALOG_TABLE ?? "products";

  return <CatalogList tableSlug={tableSlug} title="Catalogue" basePath="/catalogue" />;
}
