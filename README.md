# AIM: Study DevOps and implement CI/CD pipeline:

# Netlify Setup:

- Signup/Login on https://www.netlify.com/
- Download build folder from here: https://drive.google.com/drive/folders/140T-1efrCwUqQ805lKRihMFC_XzPi3OY
- Drag and drop build folder here you will get live url of your site: https://app.netlify.com/drop
- Go to https://app.netlify.com/user/applications#personal-access-tokens and generate a new access token. You can use "Github CI CD" as the description of your token. Copy and save this token we need this later => Expiry (No Expiration)
- Go to Site Overview => Site Settings => General => Copy site ID (We will need it later)

# Github Setup:

- Signup/Login on https://github.com/
- Go to (https://github.com/new) Repositories => Create a new repository => Visibility Public => Add .gitignore (Node)
- Go to repository settings => Secrets and variables => Actions
- Add Environment secrets (ENV - Production)
  - NETLIFY_AUTH_TOKEN
  - NETLIFY_SITE_ID
- Repository secrets
  - NETLIFY_AUTH_TOKEN
  - NETLIFY_SITE_ID

# Local Machine Setup And Changes:

- Download this folder and copy all inner files/folder into your cloned folder https://github.com/ankitverma31/cicd-pipeline-demo
- Open the cloned project in code editor
- Push files
  - git add
  - git commit -m "initial commit"
  - git push
- Run command in terminal(in case of error, install nodejs https://nodejs.org/en/download/): **npm i**
- Go to src/calculator => only add.js is implemented. You will need to implement for subtract.js, multiply.js, divide.js
- Go to src/index.test.js => only Addition is implemented. You will need to implement Subtraction, Multiplication, Division
- Run this command to build project: **npm run build**
- Run this command to run test cases: **npm run test**
- You can open and view build/index.html file in broweser to check you changes
- In case of successful build and test, commit changes in your branch and push the changes to remote repository and wait for piplines/jobs to pass

# Useful Links:

- [Basic Git Commands](https://www.freecodecamp.org/news/10-important-git-commands-that-every-developer-should-know/)
- [CI/CD](https://about.gitlab.com/topics/ci-cd/)
- [Github Workflows] (https://docs.github.com/en/actions/using-workflows)
- [About DevOps](https://aws.amazon.com/devops/what-is-devops/)
- [About DevOps](https://aws.amazon.com/devops/what-is-devops/)
