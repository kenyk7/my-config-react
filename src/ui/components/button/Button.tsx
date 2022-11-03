import clsx from 'clsx';
import { HTMLAttributeAnchorTarget, ReactNode } from 'react';

type Variant = 'primary' | 'secondary';

type ButtonPropsR = {
  children: ReactNode;
};

type ButtonPropsO = {
  href?: string;
  target?: HTMLAttributeAnchorTarget;
  size?: 'sm' | 'lg';
  variant?: Variant;
  htmlType?: 'button' | 'submit' | 'reset';
  outlined?: boolean;
  block?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

const defaultProps: ButtonPropsO = {
  href: '',
  target: undefined,
  htmlType: 'button',
  variant: 'primary',
  size: undefined,
  outlined: false,
  block: false,
  disabled: false,
  onClick: undefined,
};

type ButtonProps = ButtonPropsR & ButtonPropsO;

export function Button({
  children,
  href,
  target,
  htmlType,
  size,
  variant,
  outlined,
  block,
  disabled,
  onClick,
}: ButtonProps) {
  const btnSize = size ? `btn--${size}` : '';
  const btnVariant = `btn--${variant}`;
  const classes = clsx([
    'btn',
    btnSize,
    btnVariant,
    { 'btn--outlined': outlined },
    { 'btn--block': block },
    { 'btn--disabled': disabled },
  ]);

  const Tag = href ? 'a' : 'button';
  const attrs = Tag === 'a' ? { href, target } : { type: htmlType, disabled };

  return (
    <Tag className={classes} {...attrs} onClick={onClick}>
      {children}
    </Tag>
  );
}

Button.defaultProps = defaultProps;
