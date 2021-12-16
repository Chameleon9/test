module.exports = function (eleventyConfig){
    return{
        dir{ 
            includes:"src/_include"
            input: "src",
            output:"public",
        },
    };
};
