

// Pass in cutom className to override default styles
export function Post({ title, html, date }: { title: string; html: string, date: string }) {

  const createDate = new Date(date);

  return (
    <div >
      
      <div className="flex p-6 border-b-2  justify-between items-center">
        <h1 className="text-center text-3xl">{title}</h1>
        {/* Show date in Format similary to January 31, 2022 */}
        <p className=" text-center ">{createDate.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

      </div>



      <div className="p-6 border-2 border-gray-500 rounded-lg" dangerouslySetInnerHTML={{ __html: html }} />

    </div>
  );
}