import renderer from 'react-test-renderer';
import { Button } from '.';

it('Button basic primary renders correctly', () => {
  const component = renderer.create(<Button>Hello</Button>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('Button variant secondary renders correctly', () => {
  const component = renderer.create(<Button variant="secondary">Hello</Button>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('Button outlined renders correctly', () => {
  const component = renderer.create(<Button outlined>Hello</Button>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('Button block renders correctly', () => {
  const component = renderer.create(<Button block>Hello</Button>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('Button size renders correctly', () => {
  const component = renderer.create(<Button size="lg">Hello</Button>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('Button disabled renders correctly', () => {
  const component = renderer.create(<Button disabled>Hello</Button>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
