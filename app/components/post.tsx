
// Pass in cutom className to override default styles
export function Post({ title, html }: { title: string; html: string }) {
  return (
    <div  >
      <h1 className="p-6 border-b-2 text-center text-3xl text-white bg-amber-500">{title}</h1>
      <div className="px-3 text-2xl" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}