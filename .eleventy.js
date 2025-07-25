module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");

    eleventyConfig.addCollection("automationPosts", function (collectionApi) {
        return collectionApi.getFilteredByTag("blogpost").filter(post => {
            return post.data.categories && post.data.categories.includes('automation');
        });
    });

    eleventyConfig.addCollection("technologyPosts", function (collectionApi) {
        return collectionApi.getFilteredByTag("blogpost").filter(post => {
            return post.data.categories && post.data.categories.includes('technology');
        });
    });

    eleventyConfig.addCollection("salesPosts", function (collectionApi) {
        return collectionApi.getFilteredByTag("blogpost").filter(post => {
            return post.data.categories && post.data.categories.includes('sales');
        });
    });

    eleventyConfig.addCollection("operationsPosts", function (collectionApi) {
        return collectionApi.getFilteredByTag("blogpost").filter(post => {
            return post.data.categories && post.data.categories.includes('operations');
        });
    });

    eleventyConfig.addCollection("marketInsightPosts", function (collectionApi) {
        return collectionApi.getFilteredByTag("blogpost").filter(post => {
            return post.data.categories && post.data.categories.includes('insights');
        });
    });
    
    eleventyConfig.addCollection("growthPosts", function (collectionApi) {
        return collectionApi.getFilteredByTag("blogpost").filter(post => {
            return post.data.categories && post.data.categories.includes('growth');
        });
    });

    eleventyConfig.addCollection("financePosts", function (collectionApi) {
        return collectionApi.getFilteredByTag("blogpost").filter(post => {
            return post.data.categories && post.data.categories.includes('finance');
        });
    });

    return {
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk",
        templateFormats: ["html", "njk", "md"],
        dir: {
            input: "src",
            output: "_site",
            include: "includes",
        },
        pathPrefix: "/100xbuilds/"
    };
};