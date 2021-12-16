module.exports = function (eleventyConfig){
    return{
        dir{ 
            includes:"_include"
            input: "src",
            output:"public",
        },
    };
};
