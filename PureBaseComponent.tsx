import { PureComponent } from "react";

export default class PureBaseComponent<Props, State = {}> extends PureComponent<
  Props,
  State
> {
  state!: State;
  props!: Props;
}
