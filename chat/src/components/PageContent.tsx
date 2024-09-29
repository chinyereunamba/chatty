
export default function PageContent({
  children,
  header
}: {
  children: React.ReactNode;
  header: React.JSX.Element
}) {
  return (
    <section className="w-full h-full bg-[#18181B] rounded-3xl ">
      <div className="px-8 py-6 border-b-[1.5px] border-[#3F3F46] flex justify-between items-center">
        {header}
      </div>
      <section className="px-8 py-6 h-[calc(100%-85px)] w-full relative">
        {children}
      </section>
    </section>
  );
}
