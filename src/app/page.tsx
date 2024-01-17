import { Button } from '../stories/button/Button';

export default function Page() {
  return <>
  <Button label={'Storybook button'}/>
  <h1>Hello</h1>
  <p>You are now in the wrong place in the app. This repo is a component library and exists in the storybook part of the app. The components can be found in the folder /stories. Run npm run storybook to open the preview of the components.</p>
  </>
}