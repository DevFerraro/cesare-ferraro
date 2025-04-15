async function getPostsByCategory(category) {
    const res = await fetch(
      `https://cesare-ferraro.ghost.io/ghost/api/content/posts/?key=16ad17e315b2e32c0b58c9f0c5&filter=tag:${category}&include=tags`
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
  