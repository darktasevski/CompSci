<template>
  <div>
    <div v-for="post in posts">
      <h2>
        <router-link :to="post.path">
          <img
            :src="typeof post.frontmatter.cover_image !== 'undefined' ?  post.frontmatter.cover_image : '/images/blog_hero.png'"
            :alt="post.frontmatter.title + ' cover image'"
            style="max-height:300px;object-fit: cover;"
          />
          {{ post.frontmatter.title }}
        </router-link>
      </h2>

      <p>{{ post.frontmatter.description }}</p>

      <p>
        <router-link :to="post.path">Read more</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    mounted() {},
    posts() {
      return this.$site.pages
        .filter(
          x =>
            x.path.startsWith("/blog/") &&
            !x.frontmatter.blog_index &&
            !x.frontmatter.ignore
        )
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        );
    }
  }
};
</script>

