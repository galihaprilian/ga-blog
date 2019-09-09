---
title: 'Release Management'
tags: ["git", "nodejs"]
published: true
date: '2019-09-07'
---

# Pendahuluan
Sebelum memulai sebuah *project* atau repo dari sebuah produk, kita harus menyiapkan strategi *release management* dan juga *tools* yang akan kita gunakan.

Berikut adalah tools dan standard yang akan kita gunakan:
- [git](https://git-scm.com/) untuk *version management*
- [git-flow](https://github.com/nvie/gitflow) atau [hubFlow](https://github.com/datasift/gitflow) untuk strategi *branching*
- [Semantic Versioning](https://semver.org/) sebagai standard untuk penamaan versi
- [Conventional Commits](https://www.conventionalcommits.org/en/) sebagai standard untuk *commit messages*


# Tooling dan standarisasi

## Git dan GitFlow
Terkait dengan git-flow, saya rekomendasikan untuk membaca artikel langsung dari pembuatnya di link [GitFlow](https://nvie.com/posts/a-successful-git-branching-model/) ini atau tutorial lain [di sini](https://jeffkreeftmeijer.com/git-flow/).

Saya sendiri menggunakan *extension* dari git-flow yaitu [hubFlow](https://datasift.github.io/gitflow/index.html).

## *Branch naming convetion*
Berikut adalah *naming convention* yang diusulkan oleh pembuat git-flow dan beberap sumber lainnya, tapi tidak mengikat.

| branch    | origin  | merge into |                                                         what |
| :-------- | :-----: | :--------: | -----------------------------------------------------------: |
| master    |         |            |   Always deployable to production. Shall never be pushed to. |
| develop   | master  |   master   | Next release in development. Only mergeable via pull request |
| release-* | master  |   master, develop  |                         A release waiting to be lunched soon |
| hotfix-*  | master  |   master, develop   |                             a bug fix in production (master) |
| feat-*    | develop |  develop   |                                           Adds a new feature |
|fix-*|develop|develop|Fixes a bug in development|
|ref-*|develop|develop|Refactoring/Improvements of existing features|
|chore-*|develop|develop|Config changes, tools/libraries updates, build adjusts and so forth|


## *Conventional commits*
Spesifikasi *conventional commits* adalah konvensi yang dipakai untuk membuat *commit messages* agar konsisten dalam penggunaan, dan memberikan deskripsi yang lebih jelas terhadap aktifitas yang dilakukan. Standarisasi ini juga akan mempermudah untuk membuat *automated tools* seperti auto CHANGE LOG dan juga *versionsing*.

Struktur dari *commit message* seperti berikut ini :

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

Untuk keperluan ini kita bisa menggunakan [Commitizen](https://github.com/commitizen/cz-cli) sebagai utilitas untuk melakukan commit dan analisa *versioning*. Selain itu kita menggunakan [husky](https://github.com/typicode/husky) dan [commitlint](https://commitlint.js.org/) untuk mencegah *bad commit*.

Semua tools yang disebutkan diatas menggunakan [NodeJS](https://nodejs.org/en/).

### Setup Commitizen
Kita bisa saja menuliskan pesan *commit* sesuai dengan *conventional commit* secara langsung, tapi dengan **commitizen** versi selanjutnya bisa secara langsung dianalisa.

Langkah pertama adalah install [Commitizen CLI](https://github.com/commitizen/cz-cli) secara global.

```bash
$ npm install -g commitizen
```
Kemudian kita melakukan inialisasi sekaligus memasang adapter untuk membuat *changelogs* dengan menggunakan [conventional changelog](https://github.com/commitizen/cz-conventional-changelog).

```bash
$ commitizen init cz-conventional-changelog -D -E
```
Perintah diatas memasang *depedencies* di *development*, dan sekarang kita bisa melakukan commit dengan perintah `git cz`.

### Setup Husky dan Commitlint
Pertama kita install husky ke dalam `devDependencies`.
```bash
$ npm install -D husky
```
Kemudian install commitlint dengan *conventional format*.
```bash
$ npm install -D @commitlint/cli
$ npm install -D @commitlint/config-conventional
```
Kemudian kita tambahkan *hook* Husky di `package.json`.
~~~
"husky": {
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
}
~~~ 
Dan terakhir, kita tambahkan rule *commitlint* di `package.json`.
```
"commitlint": {
  "extends": [
    "@commitlint/config-conventional"
  ]
}
```
Sekarang jika kita melakukan commit tanpa menggunakan *conventional commit* maka akan ditolak oleh husky dan commitlint.
