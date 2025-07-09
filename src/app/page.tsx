import { ExclusivePackagesCard } from "@/features/exclusive-packages/components/ExclusivePackagesCard";

import "@/app/page.scss";

export default function HomePage() {
  
  return (
    <main suppressHydrationWarning className="page">
      <div className="page-content">
        <h1 className="page-content__title">Exclusive packages</h1>
        <ExclusivePackagesCard />
      </div>
    </main>
  );
}
