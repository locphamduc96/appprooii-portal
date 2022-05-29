// const API = 'http://34.87.83.179:9020/api';
const API = 'https://backend.approi.co/api';

const getBlogs = async () => {
  const urlParams = new URLSearchParams({
    section: 'NEWS',
  });
  return fetch(`${API}/blog/content/metadata?${urlParams.toString()}`)
    .then((resp) => resp.json())
    .then((resp) => resp.data);
};

const getBlogsDetails = async (id: string) => {
  const urlParams = new URLSearchParams({
    section: 'NEWS',
    id: id.toString(),
  });
  return fetch(`${API}/blog/content/details?${urlParams.toString()}`)
    .then((resp) => resp.json())
    .then((resp) => resp.data);
};

const BlogsServices = {
  getBlogs,
  getBlogsDetails,
};

export default BlogsServices;
