// Pass in cutom className to override default styles
export function Post({
  title,
  html,
  date,
}: {
  title: string;
  html: string;
  date: string;
}) {
  const createDate = new Date(date);

  return (
    <div >
      <div className="flex items-center justify-between">
        <h1 className="text-center text-3xl ml-4">{title}</h1>
        {/* Show date in Format similary to January 31, 2022 */}
        <p className=" text-center mr-4">
          {createDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      <div
        className="border-t-2    border-b-2  border-gray-500 p-4"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
