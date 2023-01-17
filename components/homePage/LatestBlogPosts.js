import { useRouter } from "next/router";
import { Button } from "primereact/button";
import React from "react";
import PostResultCardSmall from "./PostResultCardSmall";

function LatestBlogPosts({ data }) {
  let router = useRouter();
  return (
    <>
      <div className="latestBlogPosts">
        <h1 className="latestBlogPosts__title">Latest Blog Posts</h1>
        <div className="latestBlogPosts__posts">
          {data.map((post, index) => (
            <PostResultCardSmall
              key={post.id}
              slug={post.attributes.Slug}
              title={post.attributes.Title}
              cover_image={post.attributes.Cover_image.data.attributes.url}
              content={post.attributes.Description}
              mini_description={post.attributes.Mini_description}
              authors={post.attributes.authors}
              post_tags={post.attributes.tags}
              createdAt={post.attributes.createdAt}
              updatedAt={post.attributes.updatedAt}
            />
          ))}
        </div>
        <div className="latestBlogPosts__button">
          <Button
            className="p-button-outlined"
            label="View All Blog Posts"
            icon="pi pi-external-link"
            onClick={() => router.push("/blog")}
          />
        </div>
      </div>
      <style jsx>{`
        .latestBlogPosts {
          flex: 1;
          max-width: 1200px;
          margin: 0 auto;
          margin-block: 20px;
        }
        .latestBlogPosts__title {
          font-size: min(30px, 9vw);
          margin-bottom: 30px;
          border-top: 1px solid #e2e2e2;
          border-bottom: 1px solid #e2e2e2;
          padding: 20px 0;
          color: #3792c1;
        }
        .latestBlogPosts__posts {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          grid-gap: 20px;
        }
        .latestBlogPosts__button {
          text-align: center;
          margin-block: 20px;
        }
      `}</style>
    </>
  );
}

export default LatestBlogPosts;
