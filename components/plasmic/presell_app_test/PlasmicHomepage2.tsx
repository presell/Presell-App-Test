// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: xsZMHztzDFATfur1s6fDND
// Component: WFBXIKLCmxzW

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  usePlasmicDataConfig,
  executePlasmicDataOp,
  usePlasmicDataOp
} from "@plasmicapp/react-web/lib/data-sources";

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
import Buttonn from "../../Buttonn"; // plasmic-import: vH74q5W3yUX/component
import Footer from "../../Footer"; // plasmic-import: u8qWq0KyHYc/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources"; // plasmic-import: HZxe9asd1Dj/codeComponent

import { useScreenVariants as useScreenVariantsd2JxBvsegxLd } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: d2JXBvsegxLD/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_presell_app_test.module.css"; // plasmic-import: xsZMHztzDFATfur1s6fDND/projectcss
import sty from "./PlasmicHomepage2.module.css"; // plasmic-import: WFBXIKLCmxzW/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: q7U0PeZ56jhW/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 50aYXdf2efdU/icon

createPlasmicElementProxy;

export type PlasmicHomepage2__VariantMembers = {};
export type PlasmicHomepage2__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage2__VariantsArgs;
export const PlasmicHomepage2__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage2__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage2__ArgsType;
export const PlasmicHomepage2__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage2__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  buttonn?: p.Flex<typeof Buttonn>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultHomepage2Props {}

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

function PlasmicHomepage2__RenderFunc(props: {
  variants: PlasmicHomepage2__VariantsArgs;
  args: PlasmicHomepage2__ArgsType;
  overrides: PlasmicHomepage2__OverridesType;
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

  const [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    airtableIntegration: usePlasmicDataOp(
      (() => {
        try {
          return {
            sourceId: "9tDX6QXXin2Z6jndTXctjE",
            opId: "e39cb5a9-aa1f-420c-9463-d27ff9bcc1c8",
            userArgs: {},
            cacheKey: "plasmic.$.KsMNEW8d4nhL.$.",
            invalidatedKeys: null,
            roleId: null
          };
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return undefined;
          } else {
            throw e;
          }
        }
      })()
    )
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);
  }

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsd2JxBvsegxLd()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicHomepage2.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicHomepage2.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicHomepage2.pageMetadata.title}
        />
      </Head>

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
          <div className={classNames(projectcss.all, sty.freeBox___5Zhdb)}>
            <Header
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames("__wab_instance", sty.header)}
            />
          </div>
          <div className={classNames(projectcss.all, sty.freeBox___5Byki)}>
            <div className={classNames(projectcss.all, sty.freeBox__bE6Kf)}>
              <Buttonn
                data-plasmic-name={"buttonn"}
                data-plasmic-override={overrides.buttonn}
                className={classNames("__wab_instance", sty.buttonn)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___7Zlaz
                  )}
                >
                  {"Create \u21b4"}
                </div>
              </Buttonn>
              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              )
                ? (
                    (() => {
                      try {
                        return $queries.airtableIntegration.data;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return [];
                        }
                        throw e;
                      }
                    })() ?? []
                  ).map((currentItem, currentIndex) => (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__oguW9)}
                      key={currentIndex}
                    >
                      {(
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? true
                          : true
                      ) ? (
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__yvX9D
                          )}
                        >
                          <p.PlasmicImg
                            alt={""}
                            className={classNames(sty.img__xzAyf)}
                            displayHeight={"5rem" as const}
                            displayMaxHeight={"none" as const}
                            displayMaxWidth={"100%" as const}
                            displayMinHeight={"0" as const}
                            displayMinWidth={"0" as const}
                            displayWidth={"5rem" as const}
                            loading={"lazy" as const}
                            src={(() => {
                              try {
                                return currentItem[
                                  "Hero Image (from Products)"
                                ][0].url;
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return "https://site-assets.plasmic.app/d1fcf223340f5a68156e4b07f6478d57.jpg";
                                }
                                throw e;
                              }
                            })()}
                          />

                          {(
                            hasVariant(globalVariants, "screen", "mobileOnly")
                              ? true
                              : true
                          ) ? (
                            <div
                              className={classNames(
                                projectcss.all,
                                sty.freeBox__oRxj1
                              )}
                            >
                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text__b4HC2
                                )}
                              >
                                <React.Fragment>
                                  {(() => {
                                    try {
                                      return currentItem[
                                        "Product Name (from Products)"
                                      ][0];
                                    } catch (e) {
                                      if (
                                        e instanceof TypeError ||
                                        e?.plasmicType ===
                                          "PlasmicUndefinedDataError"
                                      ) {
                                        return "LEARNARAMA\u2122 MATS";
                                      }
                                      throw e;
                                    }
                                  })()}
                                </React.Fragment>
                              </div>
                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text__zyp63
                                )}
                              >
                                <React.Fragment>
                                  {(() => {
                                    try {
                                      return currentItem["Persona Who Home"];
                                    } catch (e) {
                                      if (
                                        e instanceof TypeError ||
                                        e?.plasmicType ===
                                          "PlasmicUndefinedDataError"
                                      ) {
                                        return "\ud835\udde7\ud835\uddee\ud835\uddff\ud835\uddf4\ud835\uddf2\ud835\ude01\ud835\uddf6\ud835\uddfb\ud835\uddf4: Preschool, elementary, special ed facilitators";
                                      }
                                      throw e;
                                    }
                                  })()}
                                </React.Fragment>
                              </div>
                            </div>
                          ) : null}
                        </div>
                      ) : null}
                      {(
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? true
                          : true
                      ) ? (
                        <p.PlasmicImg
                          alt={""}
                          className={classNames(sty.img__s3Gtl)}
                          displayHeight={"5rem" as const}
                          displayMaxHeight={"none" as const}
                          displayMaxWidth={"100%" as const}
                          displayMinHeight={"0" as const}
                          displayMinWidth={"0" as const}
                          displayWidth={"5rem" as const}
                          loading={"lazy" as const}
                          src={{
                            src: "/plasmic/presell_app_test/images/int53A96Cf388736Fb56B65B9Be3C55Af5E1Pi1Jximjpg.jpg",
                            fullWidth: 500,
                            fullHeight: 500,
                            aspectRatio: undefined
                          }}
                        />
                      ) : null}
                    </div>
                  ))
                : null}
              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              )
                ? (
                    (() => {
                      try {
                        return $queries.airtableIntegration.data;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return [];
                        }
                        throw e;
                      }
                    })() ?? []
                  ).map((currentItem, currentIndex) => (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__n0EvE)}
                      key={currentIndex}
                    >
                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img__pMLxR)}
                        displayHeight={"5rem" as const}
                        displayMaxHeight={"none" as const}
                        displayMaxWidth={"100%" as const}
                        displayMinHeight={"0" as const}
                        displayMinWidth={"0" as const}
                        displayWidth={"5rem" as const}
                        loading={"lazy" as const}
                        src={(() => {
                          try {
                            return currentItem["Hero Image (from Products)"][0]
                              .url;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return "https://site-assets.plasmic.app/d1fcf223340f5a68156e4b07f6478d57.jpg";
                            }
                            throw e;
                          }
                        })()}
                      />

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__pgWhg
                        )}
                      >
                        <React.Fragment>
                          {(() => {
                            try {
                              return currentItem[
                                "Product Name (from Products)"
                              ][0];
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return "LEARNARAMA\u2122 MATS";
                              }
                              throw e;
                            }
                          })()}
                        </React.Fragment>
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__lqCN
                        )}
                      >
                        <React.Fragment>
                          {(() => {
                            try {
                              return currentItem["Persona Who Home"];
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return "\ud835\udde7\ud835\uddee\ud835\uddff\ud835\uddf4\ud835\uddf2\ud835\ude01\ud835\uddf6\ud835\uddfb\ud835\uddf4: Preschool, elementary, special ed facilitators";
                              }
                              throw e;
                            }
                          })()}
                        </React.Fragment>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__pMuNd)}>
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
  root: ["root", "header", "buttonn", "footer"],
  header: ["header"],
  buttonn: ["buttonn"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  buttonn: typeof Buttonn;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage2__VariantsArgs;
    args?: PlasmicHomepage2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage2__ArgsType,
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
          internalArgPropNames: PlasmicHomepage2__ArgProps,
          internalVariantPropNames: PlasmicHomepage2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage2";
  } else {
    func.displayName = `PlasmicHomepage2.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage2 = Object.assign(
  // Top-level PlasmicHomepage2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    buttonn: makeNodeComponent("buttonn"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicHomepage2
    internalVariantProps: PlasmicHomepage2__VariantProps,
    internalArgProps: PlasmicHomepage2__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Home",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage2;
/* prettier-ignore-end */
