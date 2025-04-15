async function getPostsByCategory(category) {
    const res = await fetch(
      `https://cesareferraro.mymagic.page/ghost/api/content/posts/?key=7fe949a0682029bd4e4dc533b7&filter=tag:${category}&include=tags`
    );
    const data = await res.json();
    return data.posts || [];
  }
  
  export default async function CategoryPage({ params }) {
    const posts = await getPostsByCategory(params.category);
  
    return (
      <div>
        <h2>Categoria: {params.category}</h2>
        {posts.map(post => (
          <a key={post.id} href={`/blog/${params.category}/${post.slug}`}>
            <h1>{post.title}</h1>
            <p>{post.excerpt}</p>
          </a>
        ))}
      </div>
    );
  }
  
