---
title: Information
description: Information
---

# ℹ️ Information

This website is built on various technologies and philosophies. And because I appreciate other dev's stack-info, I thought I'd make a dedicated page just for this.

## Stack

Completely JAM.

- [Vue](https://vuejs.org), JavaScript ES6
- [Vite](https://vitejs.dev) for blazingly fast development
- [Nuxt](https://nuxtjs.org) on top for SSR
- [Nuxt Content](https://content.nuxtjs.org) for easy Git-based headless CMS
- Hosted on [Netlify](https://www.netlify.com)

## Design

This website is built with my interpretation of "Brutalist Web Design".

I love the idea of writing less CSS in general, which is why I initially fell in love with Sass, as I have to write less to get more. However, layouts are often very dependent on third-party frameworks, including but not limited to, CSS or JS, which expands the website size exponentially - for the worse. The filesize of most websites today is larger than the entire game Doom when it was released back in the day. This is where Brutalist Web Design comes in. Letting the browser handle layouts - as it's meant to do - with its built-in styles.

However, I know I need at least *some* form of control over the browser's styles. And each browser has its different quirks. So this is my attempt to be as basic as I can, and still have a website looking relatively good.

This also means no grids. I'd say flexbox is allowed, as you can control the flow of elements with less CSS, and I'd still like to make this for relatively modern browsers (IE11+). I guess you could do grids if you absolutely have to with `display: grid`, but that's not the idea behind Brutalist Web Design.

And since this page is written in Markdown, a lot of the markup is handled internally.

The core styling for this site, not counting scoped styling for Vue components:

- 725 bytes when minified
- 399 bytes when gzipped

Yes *bytes*.

Long story short: The design is a very well-considered choice.

### Sources:

- [Brutalist Web Design](https://brutalist-web.design)
- [58 bytes of CSS to look great nearly everywhere](https://jrl.ninja/etc/1/)
- [Better mother f-ing website](http://bettermotherfuckingwebsite.com)
- [W3C's GitHub](https://w3c.github.io/html/rendering.html#sections-and-headings.)
