import PageContent from "./PageContent";
import Sidebar from "./Sidebar";

function PageContainer({
  children,
  header,
}: {
  children: React.ReactNode;
  header: React.JSX.Element;
}) {
  return (
    <section className="flex p-4 h-screen">
      <Sidebar />
      <PageContent header={header}>{children}</PageContent>
    </section>
  );
}

export default PageContainer;
