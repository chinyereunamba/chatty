export default function FormTitle({
  title,
  intro,
}: {
  title: string;
  intro: string;
}) {
  return (
    <div className="mt-2 mb-6 text-center">
      <h3 className="text-3xl">{title}</h3>
      <p>{intro}</p>
    </div>
  );
}
