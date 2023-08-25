import * as React from "react";
import {
  PlasmicButtonn,
  DefaultButtonnProps
} from "./plasmic/presell_app_test/PlasmicButtonn";

import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

export interface ButtonnProps extends DefaultButtonnProps {
  // Feel free to add any additional props that this component should receive
}
function Buttonn_(props: ButtonnProps, ref: ButtonRef) {
  const { plasmicProps } = PlasmicButtonn.useBehavior<ButtonnProps>(props, ref);
  return <PlasmicButtonn {...plasmicProps} />;
}

export type ButtonComponentType = {
  (
    props: Omit<ButtonnProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<ButtonnProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const Buttonn = React.forwardRef(Buttonn_) as any as ButtonComponentType;

export default Object.assign(Buttonn, { __plumeType: "button" });
