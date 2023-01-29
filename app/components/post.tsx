
// Pass in cutom className to override default styles
export function Post({ title, html }: { title: string; html: string }) {
  return (
    <div  >
      <h1 className="p-6 border-b-2 text-center text-3xl">{title}</h1>
      {/* Add border with rounded edges */}
      <div className="p-6 border-2 border-gray-500 rounded-lg" dangerouslySetInnerHTML={{ __html: html }} />
      
    </div>
  );
}