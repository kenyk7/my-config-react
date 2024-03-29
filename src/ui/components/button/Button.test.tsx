import renderer from 'react-test-renderer';

import { Button } from './Button';

it('Button basic primary renders correctly', () => {
  const component = renderer.create(<Button>Hello</Button>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('Button variant secondary renders correctly', () => {
  const component = renderer.create(<Button variant="secondary">Hello</Button>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('Button outlined renders correctly', () => {
  const component = renderer.create(<Button outlined>Hello</Button>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('Button block renders correctly', () => {
  const component = renderer.create(<Button block>Hello</Button>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('Button size renders correctly', () => {
  const component = renderer.create(<Button size="lg">Hello</Button>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('Button disabled renders correctly', () => {
  const component = renderer.create(<Button disabled>Hello</Button>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
