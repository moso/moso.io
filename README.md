# moso-vite

> Brutalist Web Design meets Vue and Nuxt, and the blazingly fast Vite

#### My intepretation of 'Brutalist Web Design'.

##### *Warning: This is very opinionated!*

I love the idea of writing less CSS in general, which is why I initially fell in love with Sass, as I have to write less to get more. However, layouts are often very dependent on third-party frameworks, including but not limited to, CSS or JS, which expands the website size exponentially - for the worse. The filesize of most websites today is larger than the entire game Doom when it was released back in the day. This is where Brutalist Web Design comes in. Letting the browser handle layouts - as it's meant to do - with its built-in styles.

However, I know I need at least *some* form of control over the browser's styles. And each browser has its different quirks. So this is my attempt to be as basic as I can, and still have a website looking relatively good.

This also means no grids. I'd say flexbox is allowed, as you can control the flow of elements with less CSS, and I'd still like to make this for relatively modern browsers (IE11+). I guess you could do grids if you absolutely have to with `display: grid`,
but that's not the idea behind Brutalist Web Design.

Source: https://brutalist-web.design

The core styling for this site, not counting scoped styling for Vue components:
- 725 bytes when minified
- 399 bytes when gzipped

Yes *bytes*.

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
