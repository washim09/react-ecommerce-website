import BlogCard from "./BlogCard";
import WhatsAppButton from "./WhatsAppButton";

const data = [
    {
        id: 1,
        img: "/t_1.jpg",
        title: "Healthy Food Healthy Life",
        date: "Mar 27, 2024",
        comment: "8",
    },
    {
        id: 2,
        img: "/t_2.jpg",
        title: "Healthy Food Healthy Life",
        date: "Mar 25, 2024",
        comment: "1",
    },
    {
        id: 3,
        img: "/t_3.jpg", // Assuming this is different from the first "/post__1.webp"
        title: "Healthy Food Healthy Life",
        date: "Mar 30, 2024",
        comment: "6",
    },
];

const BlogSection = () => {
  return (
    <div className="container pt-16">
        <h2 className="font-bold text-2xl">Leather Belt</h2>
        <p className="text-gray-500">Present post in a best way to highlight interesting moment of your blog.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
            {data.map((el) => (
                <BlogCard 
                    key={el.id} // Use id as the key
                    img={el.img} 
                    title={el.title} 
                    date={el.date} 
                    comment={el.comment}
                />
            ))}
        </div>
        <WhatsAppButton />
    </div>
  )
}

export default BlogSection;
