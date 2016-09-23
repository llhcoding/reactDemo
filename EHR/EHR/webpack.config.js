/**
 * Created by siriushll on 2016/9/21.
 */

module.exports = {
    entry: './index.js',

    output:{
        path:'dist',
        filename:'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=819200'
            },
            {   test: /\.css$/,
                loader: 'style-loader!css-loader?sourceMap'
            }
        ]
    }
}

