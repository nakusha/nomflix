# Nomflix

## Screens
- [X] Home
- [X] Search
- [X] TV Show
- [X] Detail

# CSS
## module css(using only create-react-app)
> using css in local file

## styled component
> yarn add styled-components(using css in same page & don't need to memorise className)



## Code Challenges

- [X] IMDB Link
- [ ] Tabs inside of Movie / Show Details (YT Videos, Production Company & Countries)
- [ ] Collections Link
- [ ] /collections Route
- [ ] On TV Show, show seasons and creators



# 배포방법
## Git hub page
yarn add gh-pages

추가
"scripts": {
    "deploy": "gh-pages -d build",
    "predeploy": "yarn run build"
  },
"homepage":"https://nakusha.github.io/nomflix",


gh-page는 broswer Router를 지원하지않는다
hash Router로 교체해주어야함

## Netlify
GitHub로 로그인하고 
그냥 Deploy까지 진행하면되는데 안됨 fail뜸
  (jsconfig의 baseUrl에 .env NODE_PATH대신 설정해야함)
"homepage":"https://stupefied-poincare-f91f7a.netlify.com/",