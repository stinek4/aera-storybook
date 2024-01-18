# aera-storybook
This is a repo I created for testing Storybook for aera


## How to run storybook:

```
npm run storybook
```

## When building

Because some libraries don't support server components yet, you need to add 
```
'use client'
```
at the top of the components you create to make the app build. See src/stories/bade/Badge.tsx as an example.


## When running chromatic
```
npx chromatic --project-token chpt_a034259f64698cf
```

## When publishing package

Build the application first
```
npm run build
```

Then you login to npm
```
npm login
```

this should take you to a browser window to npm' 2FA login window. After you've been authenticated you run
```
npm publish
```



### Nice to have

Sometimes, a node_module has popped up as 'too big in size for github', when I try to push commits to solve this I have run this command in the terminal:

```
git filter-branch -f --index-filter 'git rm --cached --ignore-unmatch FILEPATH'
```

after this command, something buggy happens with the head of the commit, so just do a

```
git pull
```

and then a 
```
git push
```

for some reason, this just works. Found solution here: <https://stackoverflow.com/questions/33330771/git-lfs-this-exceeds-githubs-file-size-limit-of-100-00-mb>

