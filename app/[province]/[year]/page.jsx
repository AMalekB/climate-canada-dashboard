export default async function Page({ params }) {
  const { province, year } = params;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Données pour : {province.toUpperCase()} - {year}
      </h1>
      <iframe
        title="visualisation"
        className="w-full max-w-[1140px] h-[541.25px] mx-auto"
        src="https://app.powerbi.com/reportEmbed?reportId=de7d74d4-466a-4fb1-9303-6392cb411d4f&autoAuth=true&ctid=ad8a84ef-f1f3-4b14-ad08-b99ca66f7e30"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}
