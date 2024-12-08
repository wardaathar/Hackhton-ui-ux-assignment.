import { useParams } from "react-router-dom";
import { Icon } from "src/components/Icon";
import { comments, icons, routes } from "src/constants";
import { PageIntro } from "src/containers/features/PageIntro";
import { BlogSidebar } from "src/containers/layouts/BlogSidebar";
import { Wrapper } from "src/containers/layouts/Wrapper";
import { Comment } from "src/containers/features/Comment";
import { useUserStore } from "src/store/UserStore";
import { Input } from "src/components/Input";
import { Button } from "src/components/Button";
import { formDate } from "src/utils";
import { useBlogStore } from "src/store/BlogStore";
import { useEffect } from "react";

export const BlogSinglePage = () => {
  const { blogId } = useParams();
  const user = useUserStore((state) => state.user);
  const [blogs, getBlogs] = useBlogStore(state => [state.blogs, state.getBlogs]);

  useEffect(() => {
    if (!blogs.length && getBlogs) {
      getBlogs();
    }
  }, [blogs, getBlogs]);

  const url = encodeURI(window.location.href);

  const links = [
    routes.HOME,
    { ...routes.BLOG_DETAILS, path: `${routes.BLOG_DETAILS.path}/${blogId}` },
  ];

  const blog = blogs.find((blogItem) => blogItem._id === blogId);

  // Safety check for blog existence
  if (!blog) {
    return <div>Loading...</div>; // Or handle loading state gracefully
  }

  const [day, month, year] = formDate(new Date(blog.date)).split(" ");
  
  const shareIcons = [
    { url: `https://www.facebook.com/sharer/sharer.php?u=${url}`, icon: icons.facebook.icon },
    { url: `https://twitter.com/intent/tweet?url=${url}`, icon: icons.twitter.icon },
    { url: `https://www.pinterest.com/pin/create/button/?url=${url}`, icon: icons.outlinedPinterest.icon },
  ].map(({ url, icon }) => (
    <a href={url} target="_blank" rel="noreferrer" key={icon}>
      <Icon IconComponent={icon} className="text-gray-800 w-6 h-6" />
    </a>
  ));

  return (
    <main className="py-20">
      <PageIntro links={links} title="Blog Details" />

      <Wrapper wrapStyles="flex gap-5 mt-16">
        <section className="w-2/3">
          <img
            className="object-cover w-full h-[30rem]"
            src={blog.img[0]}
            alt={blog.title}
          />
          <ul className="flex gap-2 py-3">
            <li>
              <Icon IconComponent={icons.outlinedCalendar.icon} className="text-orange-400 mr-2" />
              {`${day} ${month}, ${year} /`}
            </li>
            <li>
              <Icon IconComponent={icons.outlinedComments.icon} className="text-orange-400 mr-2" />
              {blog.comments.length}
            </li>
          </ul>
          <h2 className="pb-6 w-3/4 border-b border-b-gray-200 text-2xl font-semibold">
            {blog.title}
          </h2>
          <article className="my-6">{blog.description}</article>
          <section className="p-5 border border-gray-300 flex justify-between">
            <div className="flex items-center gap-1 text-lg">
              <h3 className="font-semibold">Tags:</h3>
              <ul className="flex">
                {blog.tags.map((tag, index) => (
                  <li className="mx-2" key={index}>{tag}</li>
                ))}
              </ul>
            </div>
            <div className="flex gap-1">
              <h3 className="text-lg font-semibold">Share:</h3>
              <ul className="flex gap-2">
                {shareIcons}
              </ul>
            </div>
          </section>
          <section className="mt-10">
            <h2 className="text-3xl font-semibold">
              Comments - {blog.comments.length}
            </h2>
            {comments.map((comment, index) => (
              <Comment comment={comment} key={index} />
            ))}
          </section>
          {!user && (
            <form>
              <h2 className="text-3xl font-semibold border-b border-gray-300 my-10 pb-4">
                Post a comment
              </h2>
              <div className="flex gap-[5%]">
                <Input
                  type="text"
                  className="w-1/2 outline-0 focus:border-gray-400"
                  placeholder="Name*"
                />
                <Input
                  type="email"
                  className="w-1/2 outline-0 focus:border-gray-400"
                  placeholder="Email*"
                />
              </div>
              <textarea
                placeholder="Write a comment"
                className="w-full h-48 resize-none border-gray-300 border mt-10 p-3 outline-0 focus:border-gray-400"
              />
              <Button size="lg" className="mt-10">Post a comment</Button>
            </form>
          )}
        </section>
        <BlogSidebar />
      </Wrapper>
    </main>
  );
};

export default BlogSinglePage;