# find robots friend app
- example project [robots friend]( https://wudtichaikarun.github.io/react-circleci-findrobot/) 

- ref: [juniior to senior web developer](https://www.udemy.com/the-complete-junior-to-senior-web-developer-roadmap/)

## circleci
- add folder .circleci/config.yml

```
version: 2
jobs:
  build:
    docker:
      - image: circleci/node:9.11.1
    steps:
      - checkout
      - run: npm install
      - run: CI=true npm run build
  test:
    docker:
      - image: circleci/node:9.11.1
    steps:
      - checkout
      - run: npm install
      - run: npm run test
  hithere:
    docker:
      - image: circleci/node:9.11.1
    steps:
      - checkout
      - run: echo "Hellloooo!"
workflows:
  version: 2
  build-test-and-lint:
    jobs:
      - build
      - hithere
      - test:
          requires:
            - hithere
```
- goto `https://circleci.com/dashboard` and ADD PROJECTS
- at local run `npm run predeploy` and `npm run deploy` for deploy build project up to git hub
