interface propsType {
  img: string;
  title: string;
  date: string;
  comment: string;
}

const BlogCard: React.FC<propsType> = ({ img, title, date, comment }) => {
  return (
    <div className="space-y-4">
      <img
        className="rounded-lg hover:scale-105 transition-transform"
        src={img}
        alt="post"
      />
      <div className="text-orange-600 font-medium">
        <span>{date} / </span>
        <span>{comment} Comments</span>
      </div>
      <h3 className="font-bold text-xl">{title}</h3>
    </div>
  );
};

export default BlogCard;
