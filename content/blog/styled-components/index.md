---
title: 'Styled Components'
tags: ["react", "javascript", "css"]
published: true
date: '2019-09-08'
---

Saat ini populer istilah *styled-components* di kalangan front-end developer. Beberapa library pengembangan *front-end* yang berdasarkan komponen seperti **React** turut mempengaruhi munculnya konsep desain *component-based*. Konsep ini membantu meningkatkan efektifitas dan produktifitas pengembang.

Lebih jauh latar belakang dan manfaat mengenai konsep ini bisa merujuk ke link berikut ini:
- [Styled-Components](https://www.styled-components.com/)
- [React style components tutorial](https://www.robinwieruch.de/react-styled-components)
- [Build better component libraries with styled-system](https://medium.com/styled-components/build-better-component-libraries-with-styled-system-4951653d54ee)

## Library React Component Pilihan
Ada banyak component `react` yang bisa kita jadikan *base* dalam mengembangan *front-end* aplikasi kita. Untuk mendapatkan update terbaru bisa di laman web [Design Systems Repo](https://designsystemsrepo.com/).

Saya sendiri memilih beberapa desain sistem yang menjadi favorit saya, diantaranya adalah:
- [Atlassian Design](https://atlassian.design/)
- [Ant.Design](https://ant.design/)
- [Microsoft UI Fabric](https://developer.microsoft.com/en-us/fabric#/)
- [IBM Carbon Design](https://www.carbondesignsystem.com/)

## Playground Development
Salah satu hal yang dibutuhkan programmer ketika sedang menulis kode *component library*-nya adalah playground untuk mencoba melihat hasilnya langsung dengan mudah. [StoryBook](https://storybook.js.org/) adalah tool yang bisa membantu kita untuk kebutuhan tersebut langsung dalam project kita.

Untuk memulai penggunaan storybook di project `react` silahkan masuk ke tautan [ini](https://www.learnstorybook.com/react/en/get-started).

## Tools yang berguna dalam membuat komponen
Berikut ini adalah beberapa tools yang bisa kita optimalkan dalam membuat styled-components.
- Tools untuk bundle resource pada saat deployment kita bisa gunakan [rollup](https://rollupjs.org/guide/en/), [bili](https://bili.egoist.sh/#/), dan tentu saja [webpack](https://webpack.js.org/)
- [LernaJS](https://lerna.js.org/), Tools untuk project dengan konsep monorepo 
- Untuk implementasi *test-driven* `react` development, kita bisa menggunakan [Jest](https://jestjs.io/en/)
- Untuk meningkatkan kualitas kode agar sesuai dengan standard, kita perlu menggunakan [ESLint](https://eslint.org/), dan juga [Prettier](https://prettier.io/) untuk melakukan perbaikan otomatis

Hal penting juga adalah bagaimana cara kita bisa men-deploy ke repository publik agar bisa dengan mudah digunakan. Berikut ini adalah [link](https://www.pluralsight.com/guides/publish-ES6-react-modules-to-NPM) yang membahas itu.

