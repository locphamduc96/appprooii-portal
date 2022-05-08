const API = 'http://34.87.83.179:9020/api';

const getBlogs = () => {
  const urlParams = new URLSearchParams({
    section: 'NEWS',
  });
  fetch(`${API}/blog/content/metadata?${urlParams.toString()}`)
    .then((resp) => resp.json())
    .then((resp) => resp.data);
};

const getBlogsDetails = (id: number) => {
  const urlParams = new URLSearchParams({
    section: 'NEWS',
    id: id.toString(),
  });
  fetch(`${API}/blog/content/details?${urlParams.toString()}`)
    .then((resp) => resp.json())
    .then((resp) => resp.data);
};

const BlogsServices = {
  getBlogs,
  getBlogsDetails,
};

export default BlogsServices;
