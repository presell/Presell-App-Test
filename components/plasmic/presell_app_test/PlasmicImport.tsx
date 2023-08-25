// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: xsZMHztzDFATfur1s6fDND
// Component: 4DF1NkMz2JeL

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: 3VNBKYSN1DZ/component
import Select from "../../Select"; // plasmic-import: SlN1_VGqK84p/component
import Buttonn from "../../Buttonn"; // plasmic-import: vH74q5W3yUX/component
import Footer from "../../Footer"; // plasmic-import: u8qWq0KyHYc/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_presell_app_test.module.css"; // plasmic-import: xsZMHztzDFATfur1s6fDND/projectcss
import sty from "./PlasmicImport.module.css"; // plasmic-import: 4DF1NkMz2JeL/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: q7U0PeZ56jhW/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 50aYXdf2efdU/icon

createPlasmicElementProxy;

export type PlasmicImport__VariantMembers = {};
export type PlasmicImport__VariantsArgs = {};
type VariantPropType = keyof PlasmicImport__VariantsArgs;
export const PlasmicImport__VariantProps = new Array<VariantPropType>();

export type PlasmicImport__ArgsType = {};
type ArgPropType = keyof PlasmicImport__ArgsType;
export const PlasmicImport__ArgProps = new Array<ArgPropType>();

export type PlasmicImport__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  select?: p.Flex<typeof Select>;
  buttonn?: p.Flex<typeof Buttonn>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultImportProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicImport__RenderFunc(props: {
  variants: PlasmicImport__VariantsArgs;
  args: PlasmicImport__ArgsType;
  overrides: PlasmicImport__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "select.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.root
          )}
        >
          <div className={classNames(projectcss.all, sty.freeBox__tNzmI)}>
            <Header
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames("__wab_instance", sty.header)}
            />
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__uuZsd)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__oyu2W
              )}
            >
              {"Platform: * "}
            </div>
            <Select
              data-plasmic-name={"select"}
              data-plasmic-override={overrides.select}
              className={classNames("__wab_instance", sty.select)}
              onChange={(...eventArgs) => {
                p.generateStateOnChangeProp($state, ["select", "value"])(
                  eventArgs[0]
                );
              }}
              options={(() => {
                const __composite = [
                  { value: null },
                  { value: null },
                  { value: null }
                ];
                __composite["0"]["value"] = "Shopify";
                __composite["1"]["value"] = "wooCommerce";
                __composite["2"]["value"] = "Custom";
                return __composite;
              })()}
              placeholder={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__jVwqT
                  )}
                >
                  {"Shopify, WooCommerce, Custom"}
                </div>
              }
              value={p.generateStateValueProp($state, ["select", "value"])}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__trOnp
              )}
            >
              {"CSV: * "}
            </div>
            <Buttonn
              data-plasmic-name={"buttonn"}
              data-plasmic-override={overrides.buttonn}
              className={classNames("__wab_instance", sty.buttonn)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___4ZmPv
                )}
              >
                {"Import Products"}
              </div>
            </Buttonn>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__wAgjm)}>
            <Footer
              data-plasmic-name={"footer"}
              data-plasmic-override={overrides.footer}
              className={classNames("__wab_instance", sty.footer)}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "select", "buttonn", "footer"],
  header: ["header"],
  select: ["select"],
  buttonn: ["buttonn"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  select: typeof Select;
  buttonn: typeof Buttonn;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicImport__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicImport__VariantsArgs;
    args?: PlasmicImport__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicImport__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicImport__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicImport__ArgProps,
          internalVariantPropNames: PlasmicImport__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicImport__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicImport";
  } else {
    func.displayName = `PlasmicImport.${nodeName}`;
  }
  return func;
}

export const PlasmicImport = Object.assign(
  // Top-level PlasmicImport renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    select: makeNodeComponent("select"),
    buttonn: makeNodeComponent("buttonn"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicImport
    internalVariantProps: PlasmicImport__VariantProps,
    internalArgProps: PlasmicImport__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicImport;
/* prettier-ignore-end */