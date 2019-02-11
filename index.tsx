// Libraries
import * as React from "react";
import cn from "classnames";

// Own Components
import PureBaseComponent from "./PureBaseComponent";

// Props
import { Props } from "./Button.props";

// Styles
import "./Button.scss";

export default class Button extends PureBaseComponent<Props> {
  render() {
    const {
      children,
      className,
      submit,
      disabled = false,
      loading = false,
      theme = "default",
      onClick,
      dataTestId,
      ...rest
    } = this.props;

    const classNames = cn(className, "Button", {
      [`Button--${theme}`]: theme,
      "Button--disabled": disabled
    });

    return submit ? (
      <input
        type="submit"
        className={classNames}
        disabled={disabled}
        onClick={onClick}
        data-testid={dataTestId}
        value={String(children)}
      />
    ) : (
      <button
        className={classNames}
        disabled={disabled}
        onClick={onClick}
        data-testid={dataTestId}
        {...rest}
      >
        {children}
      </button>
    );
  }
}
