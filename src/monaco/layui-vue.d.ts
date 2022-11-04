import { AllowedComponentProps, AppContext } from 'vue';
import type { App, VNodeTypes } from 'vue';
import { ComponentCustomProperties } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentInternalInstance } from 'vue';
import { ComponentOptionsBase } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComponentPublicInstance } from 'vue';
import { Composer } from 'vue-i18n';
import { default as Cropper_2 } from 'cropperjs';
import { CubicBezierPoints } from '@vueuse/core';
import { DebuggerEvent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { nextTick } from 'vue';
import { Plugin as Plugin_2 } from '@vue/runtime-core';
import { PropType } from 'vue';
import { RendererElement } from 'vue';
import { RendererNode } from 'vue';
import { Rule } from 'async-validator';
import { ShallowUnwrapRef } from 'vue';
import { Slot } from 'vue';
import { StyleValue } from 'vue';
import { ValidateCallback } from 'async-validator';
import type { ValidateError } from 'async-validator';
import { ValidateMessages } from 'async-validator';
import { VNode } from 'vue';
import { VNodeProps } from 'vue';
import { VueMessageType } from 'vue-i18n';
import { WatchOptions } from 'vue';
import { WatchStopHandle } from 'vue';

declare type BooleanOrString = boolean | string;

declare type ButtonBorder = "green" | "blue" | "orange" | "red" | "black";

declare type ButtonNativeType = "button" | "submit" | "reset";

declare type ButtonSize = "lg" | "md" | "sm" | "xs";

declare type ButtonType = "primary" | "normal" | "warm" | "danger";

declare type CardShadow = "always" | "hover" | "never";

declare type CascaderSize = "lg" | "md" | "sm" | "xs";

declare type CheckboxSize = "lg" | "md" | "sm" | "xs";

declare interface CollapseItemProps {
    id: number | string;
    title: string;
    disabled?: boolean;
}

declare interface CutOptions {
    layerOption: LayerModal;
    copperOption?: typeof Cropper_2;
}

declare const _default: {
    install: (app: App<any>, options?: InstallOptions | undefined) => void;
};
export default _default;

declare type DropdownPlacement = "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "right" | "right-start" | "right-end" | "left" | "left-start" | "left-end";

declare type DropdownTrigger = "click" | "hover" | "focus" | "contextMenu";

declare type DropdownTrigger_2 = "click" | "hover" | "focus" | "contextMenu";

declare type DropdownTrigger_3 = "click" | "hover" | "focus" | "contextMenu";

declare type EditType = boolean | ("add" | "update" | "delete");

declare interface FormCallback {
    (isValid?: boolean, model?: modelType, errors?: ValidateError[] | null): void;
}

declare type InputNumberSize = "lg" | "md" | "sm" | "xs";

declare type InputSize = "lg" | "md" | "sm" | "xs";

export declare const install: (app: App, options?: InstallOptions) => void;

declare interface InstallOptions extends StringObject {
}

declare type KeysType = (number | string)[];

declare module '@vue/runtime-core' {
  interface GlobalComponents {
    LayButton: typeof LayButton;
    LaySplitPanel: typeof LaySplitPanel;
    LaySplitPanelItem: typeof LaySplitPanelItem;
    LayRadio: typeof LayRadio;
    LayRadioGroup: typeof LayRadioGroup;
    LayIcon: typeof LayIcon;
    LayBacktop: typeof LayBacktop;
    LayLayout: typeof LayLayout;
    LaySide: typeof LaySide;
    LayHeader: typeof LayHeader;
    LayBody: typeof LayBody;
    LayFooter: typeof LayFooter;
    LayLogo: typeof LayLogo;
    LayPanel: typeof LayPanel;
    LayCard: typeof LayCard;
    LayProgress: typeof LayProgress;
    LayButtonGroup: typeof LayButtonGroup;
    LayButtonContainer: typeof LayButtonContainer;
    LayRow: typeof LayRow;
    LayCol: typeof LayCol;
    LayInput: typeof LayInput;
    LayBadge: typeof LayBadge;
    LayQuote: typeof LayQuote;
    LayLine: typeof LayLine;
    LayTimeline: typeof LayTimeline;
    LayTimelineItem: typeof LayTimelineItem;
    LayTextarea: typeof LayTextarea;
    LaySwitch: typeof LaySwitch;
    LayCollapse: typeof LayCollapse;
    LayCollapseItem: typeof LayCollapseItem;
    LayContainer: typeof LayContainer;
    LayMenu: typeof LayMenu;
    LayMenuItem: typeof LayMenuItem;
    LayCheckbox: typeof LayCheckbox;
    LayForm: typeof LayForm;
    LayBreadcrumb: typeof LayBreadcrumb;
    LayBreadcrumbItem: typeof LayBreadcrumbItem;
    LayAvatar: typeof LayAvatar;
    LayAvatarList: typeof LayAvatarList;
    LayField: typeof LayField;
    LaySelect: typeof LaySelect;
    LayScroll: typeof LayScroll;
    LaySelectOption: typeof LaySelectOption;
    LayEmpty: typeof LayEmpty;
    LayFormItem: typeof LayFormItem;
    LayRate: typeof LayRate;
    LayDropdown: typeof LayDropdown;
    LayDropdownMenu: typeof LayDropdownMenu;
    LayDropdownMenuItem: typeof LayDropdownMenuItem;
    LayDropdownSubMenu: typeof LayDropdownSubMenu;
    LayTab: typeof LayTab;
    LayTabItem: typeof LayTabItem;
    LayIconPicker: typeof LayIconPicker;
    LayTree: typeof LayTree;
    LayTable: typeof LayTable;
    LayPage: typeof LayPage;
    LayTransfer: typeof LayTransfer;
    LayCheckboxGroup: typeof LayCheckboxGroup;
    LaySlider: typeof LaySlider;
    LayCarousel: typeof LayCarousel;
    LayCarouselItem: typeof LayCarouselItem;
    LayColorPicker: typeof LayColorPicker;
    LayTooltip: typeof LayTooltip;
    LayInputNumber: typeof LayInputNumber;
    LaySkeleton: typeof LaySkeleton;
    LaySkeletonItem: typeof LaySkeletonItem;
    LayCountUp: typeof LayCountUp;
    LayStep: typeof LayStep;
    LayStepItem: typeof LayStepItem;
    LaySubMenu: typeof LaySubMenu;
    LayException: typeof LayException;
    LayResult: typeof LayResult;
    LayFullscreen: typeof LayFullscreen;
    LayConfigProvider: typeof LayConfigProvider;
    LayDatePicker: typeof LayDatePicker;
    LayTransition: typeof LayTransition;
    LayUpload: typeof LayUpload;
    LayRipple: typeof LayRipple;
    LayNoticeBar: typeof LayNoticeBar;
    LayPageHeader: typeof LayPageHeader;
    LayCascader: typeof LayCascader;
    LayAffix: typeof LayAffix;
    LaySpace: typeof LaySpace;
    LayTag: typeof LayTag;
    LayTagInput: typeof LayTagInput;
    LayLayer: typeof LayLayer;
  }

  export interface ComponentCustomProperties {
    $layer: typeof layer;
  }
}

export declare const layer: {
    _context: AppContext | null;
    open: (option: any, callback?: Function) => string;
    drawer: (option: any, callback?: Function) => string;
    msg: (message: string, option?: any, callback?: Function) => string;
    load: (load: number, option?: any, callback?: Function) => string;
    confirm: (msg: string, option?: any, callback?: Function) => string;
    photos: (option: any, callback?: Function) => string;
    notifiy: (option?: any, callback?: Function) => string;
    create: (option: any, defaultOption: any, callback?: Function) => string;
    close: (id: any) => void;
    closeAll: () => void;
    reset: (instance: any) => void;
};
export interface LayerProps {
    id?: string;
    title?: string | boolean | Function;
    icon?: string | number;
    skin?: string;
    zIndex?: number | Function;
    setTop?: boolean;
    offset?: string[] | string;
    area?: string[] | "auto";
    modelValue?: boolean;
    maxmin?: boolean | string;
    btn?: Record<string, Function>[] | false;
    move?: boolean | string;
    resize?: boolean | string;
    type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | "dialog" | "page" | "iframe" | "loading" | "drawer" | "photos" | "notifiy";
    content?: string | Function | object | VNodeTypes;
    isHtmlFragment?: boolean;
    shade?: boolean | string;
    shadeClose?: boolean | string;
    shadeOpacity?: string;
    closeBtn?: boolean | string;
    btnAlign?: "l" | "c" | "r";
    time?: number;
    load?: number;
    anim?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    isOutAnim?: boolean;
    destroy?: Function;
    success?: Function;
    end?: Function;
    yes?: Function;
    yesText?: string;
    isFunction?: boolean;
    isMessage?: boolean;
    appContext?: any;
    startIndex?: number;
    imgList?: {
        src: string;
        alt: string;
        thumb: string;
    }[];
    min?: Function;
    full?: Function;
    restore?: Function;
}
export declare const LayLayer: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            type: 0 | 2 | "loading" | "dialog" | "iframe" | 1 | 3 | 4 | 5 | 6 | "page" | "drawer" | "photos" | "notifiy";
            offset: string | string[];
            end: Function;
            resize: string | boolean;
            move: string | boolean;
            area: string[] | "auto";
            time: number;
            title: string | boolean | Function;
            load: number;
            success: Function;
            full: Function;
            min: Function;
            closeBtn: string | boolean;
            isHtmlFragment: boolean;
            imgList: {
                src: string;
                alt: string;
                thumb: string;
            }[];
            startIndex: number;
            setTop: boolean;
            modelValue: boolean;
            maxmin: string | boolean;
            shade: string | boolean;
            shadeClose: string | boolean;
            shadeOpacity: string;
            btnAlign: "r" | "l" | "c";
            anim: 0 | 2 | 1 | 3 | 4 | 5 | 6;
            isOutAnim: boolean;
            destroy: Function;
            yesText: string;
            isFunction: boolean;
            isMessage: boolean;
            restore: Function;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<LayerProps>, {
            title: string;
            setTop: boolean;
            offset: () => string[];
            area: string;
            modelValue: boolean;
            maxmin: boolean;
            move: boolean;
            type: number;
            time: number;
            shade: boolean;
            shadeClose: boolean;
            shadeOpacity: string;
            closeBtn: string;
            btnAlign: string;
            load: number;
            anim: number;
            resize: boolean;
            isHtmlFragment: boolean;
            isOutAnim: boolean;
            destroy: () => void;
            success: () => void;
            end: () => void;
            full: () => void;
            min: () => void;
            restore: () => void;
            yesText: string;
            isFunction: boolean;
            isMessage: boolean;
            startIndex: number;
            imgList: () => never[];
        }>>> & {
            onClose?: ((...args: any[]) => any) | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "type" | "offset" | "end" | "resize" | "move" | "area" | "time" | "title" | "load" | "success" | "full" | "min" | "closeBtn" | "isHtmlFragment" | "imgList" | "startIndex" | "setTop" | "modelValue" | "maxmin" | "shade" | "shadeClose" | "shadeOpacity" | "btnAlign" | "anim" | "isOutAnim" | "destroy" | "yesText" | "isFunction" | "isMessage" | "restore">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "close" | "update:modelValue", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<LayerProps>, {
            title: string;
            setTop: boolean;
            offset: () => string[];
            area: string;
            modelValue: boolean;
            maxmin: boolean;
            move: boolean;
            type: number;
            time: number;
            shade: boolean;
            shadeClose: boolean;
            shadeOpacity: string;
            closeBtn: string;
            btnAlign: string;
            load: number;
            anim: number;
            resize: boolean;
            isHtmlFragment: boolean;
            isOutAnim: boolean;
            destroy: () => void;
            success: () => void;
            end: () => void;
            full: () => void;
            min: () => void;
            restore: () => void;
            yesText: string;
            isFunction: boolean;
            isMessage: boolean;
            startIndex: number;
            imgList: () => never[];
        }>>> & {
            onClose?: ((...args: any[]) => any) | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }, {
            reset: () => void;
            open: () => void;
            close: () => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "update:modelValue")[], string, {
            type: 0 | 2 | "loading" | "dialog" | "iframe" | 1 | 3 | 4 | 5 | 6 | "page" | "drawer" | "photos" | "notifiy";
            offset: string | string[];
            end: Function;
            resize: string | boolean;
            move: string | boolean;
            area: string[] | "auto";
            time: number;
            title: string | boolean | Function;
            load: number;
            success: Function;
            full: Function;
            min: Function;
            closeBtn: string | boolean;
            isHtmlFragment: boolean;
            imgList: {
                src: string;
                alt: string;
                thumb: string;
            }[];
            startIndex: number;
            setTop: boolean;
            modelValue: boolean;
            maxmin: string | boolean;
            shade: string | boolean;
            shadeClose: string | boolean;
            shadeOpacity: string;
            btnAlign: "r" | "l" | "c";
            anim: 0 | 2 | 1 | 3 | 4 | 5 | 6;
            isOutAnim: boolean;
            destroy: Function;
            yesText: string;
            isFunction: boolean;
            isMessage: boolean;
            restore: Function;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<LayerProps>, {
        title: string;
        setTop: boolean;
        offset: () => string[];
        area: string;
        modelValue: boolean;
        maxmin: boolean;
        move: boolean;
        type: number;
        time: number;
        shade: boolean;
        shadeClose: boolean;
        shadeOpacity: string;
        closeBtn: string;
        btnAlign: string;
        load: number;
        anim: number;
        resize: boolean;
        isHtmlFragment: boolean;
        isOutAnim: boolean;
        destroy: () => void;
        success: () => void;
        end: () => void;
        full: () => void;
        min: () => void;
        restore: () => void;
        yesText: string;
        isFunction: boolean;
        isMessage: boolean;
        startIndex: number;
        imgList: () => never[];
    }>>> & {
        onClose?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        reset: () => void;
        open: () => void;
        close: () => void;
    }> & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<LayerProps>, {
    title: string;
    setTop: boolean;
    offset: () => string[];
    area: string;
    modelValue: boolean;
    maxmin: boolean;
    move: boolean;
    type: number;
    time: number;
    shade: boolean;
    shadeClose: boolean;
    shadeOpacity: string;
    closeBtn: string;
    btnAlign: string;
    load: number;
    anim: number;
    resize: boolean;
    isHtmlFragment: boolean;
    isOutAnim: boolean;
    destroy: () => void;
    success: () => void;
    end: () => void;
    full: () => void;
    min: () => void;
    restore: () => void;
    yesText: string;
    isFunction: boolean;
    isMessage: boolean;
    startIndex: number;
    imgList: () => never[];
}>>> & {
    onClose?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    reset: () => void;
    open: () => void;
    close: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "update:modelValue")[], "close" | "update:modelValue", {
    type: 0 | 2 | "loading" | "dialog" | "iframe" | 1 | 3 | 4 | 5 | 6 | "page" | "drawer" | "photos" | "notifiy";
    offset: string | string[];
    end: Function;
    resize: string | boolean;
    move: string | boolean;
    area: string[] | "auto";
    time: number;
    title: string | boolean | Function;
    load: number;
    success: Function;
    full: Function;
    min: Function;
    closeBtn: string | boolean;
    isHtmlFragment: boolean;
    imgList: {
        src: string;
        alt: string;
        thumb: string;
    }[];
    startIndex: number;
    setTop: boolean;
    modelValue: boolean;
    maxmin: string | boolean;
    shade: string | boolean;
    shadeClose: string | boolean;
    shadeOpacity: string;
    btnAlign: "r" | "l" | "c";
    anim: 0 | 2 | 1 | 3 | 4 | 5 | 6;
    isOutAnim: boolean;
    destroy: Function;
    yesText: string;
    isFunction: boolean;
    isMessage: boolean;
    restore: Function;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});

declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
declare type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
declare type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

export declare const LayAffix: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            offset: number;
            position: string;
            target: HTMLElement;
        }> & Omit<Readonly<ExtractPropTypes<    {
        offset: {
        type: PropType<number>;
        } & {
        default: number;
        };
        position: {
        type: PropType<string>;
        } & {
        default: string;
        };
        target: {
        type: PropType<HTMLElement>;
        } & {
        default: () => HTMLElement;
        };
        }>> & {
            onScroll?: ((...args: any[]) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "offset" | "position" | "target">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "scroll", ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        offset: {
        type: PropType<number>;
        } & {
        default: number;
        };
        position: {
        type: PropType<string>;
        } & {
        default: string;
        };
        target: {
        type: PropType<HTMLElement>;
        } & {
        default: () => HTMLElement;
        };
        }>> & {
        onScroll?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "scroll"[], string, {
        offset: number;
        position: string;
        target: HTMLElement;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    offset: {
    type: PropType<number>;
    } & {
    default: number;
    };
    position: {
    type: PropType<string>;
    } & {
    default: string;
    };
    target: {
    type: PropType<HTMLElement>;
    } & {
    default: () => HTMLElement;
    };
    }>> & {
        onScroll?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
offset: {
type: PropType<number>;
} & {
default: number;
};
position: {
type: PropType<string>;
} & {
default: string;
};
target: {
type: PropType<HTMLElement>;
} & {
default: () => HTMLElement;
};
}>> & {
onScroll?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "scroll"[], "scroll", {
offset: number;
position: string;
target: HTMLElement;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayAvatar: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            size: "xs" | "sm" | "md" | "lg";
            icon: string;
            radius: boolean;
        }> & Omit<Readonly<ExtractPropTypes<    {
        size: {
        type: PropType<"xs" | "sm" | "md" | "lg">;
        } & {
        default: string;
        };
        icon: {
        type: PropType<string>;
        } & {
        default: string;
        };
        alt: {
        type: PropType<string>;
        };
        src: {
        type: PropType<string>;
        };
        radius: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        }>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "size" | "icon" | "radius">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        size: {
        type: PropType<"xs" | "sm" | "md" | "lg">;
        } & {
        default: string;
        };
        icon: {
        type: PropType<string>;
        } & {
        default: string;
        };
        alt: {
        type: PropType<string>;
        };
        src: {
        type: PropType<string>;
        };
        radius: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
        size: "xs" | "sm" | "md" | "lg";
        icon: string;
        radius: boolean;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    size: {
    type: PropType<"xs" | "sm" | "md" | "lg">;
    } & {
    default: string;
    };
    icon: {
    type: PropType<string>;
    } & {
    default: string;
    };
    alt: {
    type: PropType<string>;
    };
    src: {
    type: PropType<string>;
    };
    radius: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    }>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
size: {
type: PropType<"xs" | "sm" | "md" | "lg">;
} & {
default: string;
};
icon: {
type: PropType<string>;
} & {
default: string;
};
alt: {
type: PropType<string>;
};
src: {
type: PropType<string>;
};
radius: {
type: PropType<boolean>;
} & {
default: boolean;
};
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
size: "xs" | "sm" | "md" | "lg";
icon: string;
radius: boolean;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayAvatarList: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<ExtractPropTypes<    {}>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {}>>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {}>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {}>>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayBacktop: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            circle: boolean;
            target: string;
            disabled: boolean;
            icon: string;
            showHeight: number;
            iconSize: number;
        }> & Omit<Readonly<ExtractPropTypes<    {
        borderRadius: {
        type: PropType<string | number>;
        };
        bottom: {
        type: PropType<number>;
        };
        color: {
        type: PropType<string>;
        };
        opacity: {
        type: PropType<number>;
        };
        position: {
        type: PropType<"fixed" | "absolute">;
        };
        right: {
        type: PropType<number>;
        };
        circle: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        target: {
        type: PropType<string>;
        } & {
        default: string;
        };
        disabled: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        size: {
        type: PropType<"small" | "medium">;
        };
        icon: {
        type: PropType<string>;
        } & {
        default: string;
        };
        showHeight: {
        type: PropType<number>;
        } & {
        default: number;
        };
        bgcolor: {
        type: PropType<string>;
        };
        iconSize: {
        type: PropType<number>;
        } & {
        default: number;
        };
        iconColor: {
        type: PropType<string>;
        };
        }>> & {
            onClick?: ((...args: any[]) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "circle" | "target" | "disabled" | "icon" | "showHeight" | "iconSize">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "click", ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        borderRadius: {
        type: PropType<string | number>;
        };
        bottom: {
        type: PropType<number>;
        };
        color: {
        type: PropType<string>;
        };
        opacity: {
        type: PropType<number>;
        };
        position: {
        type: PropType<"fixed" | "absolute">;
        };
        right: {
        type: PropType<number>;
        };
        circle: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        target: {
        type: PropType<string>;
        } & {
        default: string;
        };
        disabled: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        size: {
        type: PropType<"small" | "medium">;
        };
        icon: {
        type: PropType<string>;
        } & {
        default: string;
        };
        showHeight: {
        type: PropType<number>;
        } & {
        default: number;
        };
        bgcolor: {
        type: PropType<string>;
        };
        iconSize: {
        type: PropType<number>;
        } & {
        default: number;
        };
        iconColor: {
        type: PropType<string>;
        };
        }>> & {
        onClick?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "click"[], string, {
        circle: boolean;
        target: string;
        disabled: boolean;
        icon: string;
        showHeight: number;
        iconSize: number;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    borderRadius: {
    type: PropType<string | number>;
    };
    bottom: {
    type: PropType<number>;
    };
    color: {
    type: PropType<string>;
    };
    opacity: {
    type: PropType<number>;
    };
    position: {
    type: PropType<"fixed" | "absolute">;
    };
    right: {
    type: PropType<number>;
    };
    circle: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    target: {
    type: PropType<string>;
    } & {
    default: string;
    };
    disabled: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    size: {
    type: PropType<"small" | "medium">;
    };
    icon: {
    type: PropType<string>;
    } & {
    default: string;
    };
    showHeight: {
    type: PropType<number>;
    } & {
    default: number;
    };
    bgcolor: {
    type: PropType<string>;
    };
    iconSize: {
    type: PropType<number>;
    } & {
    default: number;
    };
    iconColor: {
    type: PropType<string>;
    };
    }>> & {
        onClick?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
borderRadius: {
type: PropType<string | number>;
};
bottom: {
type: PropType<number>;
};
color: {
type: PropType<string>;
};
opacity: {
type: PropType<number>;
};
position: {
type: PropType<"fixed" | "absolute">;
};
right: {
type: PropType<number>;
};
circle: {
type: PropType<boolean>;
} & {
default: boolean;
};
target: {
type: PropType<string>;
} & {
default: string;
};
disabled: {
type: PropType<boolean>;
} & {
default: boolean;
};
size: {
type: PropType<"small" | "medium">;
};
icon: {
type: PropType<string>;
} & {
default: string;
};
showHeight: {
type: PropType<number>;
} & {
default: number;
};
bgcolor: {
type: PropType<string>;
};
iconSize: {
type: PropType<number>;
} & {
default: number;
};
iconColor: {
type: PropType<string>;
};
}>> & {
onClick?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "click"[], "click", {
circle: boolean;
target: string;
disabled: boolean;
icon: string;
showHeight: number;
iconSize: number;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayBadge: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<ExtractPropTypes<    {
        type: {
        type: PropType<"dot" | "rim">;
        };
        theme: {
        type: PropType<string>;
        };
        color: {
        type: PropType<string>;
        };
        ripple: {
        type: PropType<boolean>;
        };
        }>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        type: {
        type: PropType<"dot" | "rim">;
        };
        theme: {
        type: PropType<string>;
        };
        color: {
        type: PropType<string>;
        };
        ripple: {
        type: PropType<boolean>;
        };
        }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    type: {
    type: PropType<"dot" | "rim">;
    };
    theme: {
    type: PropType<string>;
    };
    color: {
    type: PropType<string>;
    };
    ripple: {
    type: PropType<boolean>;
    };
    }>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
type: {
type: PropType<"dot" | "rim">;
};
theme: {
type: PropType<string>;
};
color: {
type: PropType<string>;
};
ripple: {
type: PropType<boolean>;
};
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayBody: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<ExtractPropTypes<    {}>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {}>>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {}>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {}>>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayBreadcrumb: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            separator: string;
        }> & Omit<Readonly<ExtractPropTypes<    {
        separator: {
        type: PropType<string>;
        } & {
        default: string;
        };
        }>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "separator">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        separator: {
        type: PropType<string>;
        } & {
        default: string;
        };
        }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
        separator: string;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    separator: {
    type: PropType<string>;
    } & {
    default: string;
    };
    }>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
separator: {
type: PropType<string>;
} & {
default: string;
};
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
separator: string;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayBreadcrumbItem: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<ExtractPropTypes<    {
        title: {
        type: PropType<string>;
        };
        }>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        title: {
        type: PropType<string>;
        };
        }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    title: {
    type: PropType<string>;
    };
    }>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
title: {
type: PropType<string>;
};
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayButton: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            borderStyle: string;
            loading: string | boolean;
            disabled: string | boolean;
            radius: string | boolean;
            loadingIcon: string;
            fluid: string | boolean;
            nativeType: ButtonNativeType;
        }> & Omit<Readonly<ExtractPropTypes<    {
        type: {
        type: PropType<ButtonType>;
        };
        border: {
        type: PropType<ButtonBorder>;
        };
        borderStyle: {
        type: PropType<string>;
        } & {
        default: string;
        };
        loading: {
        type: PropType<string | boolean>;
        } & {
        default: boolean;
        };
        disabled: {
        type: PropType<string | boolean>;
        } & {
        default: boolean;
        };
        size: {
        type: PropType<ButtonSize>;
        };
        radius: {
        type: PropType<string | boolean>;
        } & {
        default: boolean;
        };
        prefixIcon: {
        type: PropType<string>;
        };
        suffixIcon: {
        type: PropType<string>;
        };
        loadingIcon: {
        type: PropType<string>;
        } & {
        default: string;
        };
        fluid: {
        type: PropType<string | boolean>;
        } & {
        default: boolean;
        };
        nativeType: {
        type: PropType<ButtonNativeType>;
        } & {
        default: string;
        };
        }>> & {
            onClick?: ((evt: MouseEvent) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "borderStyle" | "loading" | "disabled" | "radius" | "loadingIcon" | "fluid" | "nativeType">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "click", evt: MouseEvent) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        type: {
        type: PropType<ButtonType>;
        };
        border: {
        type: PropType<ButtonBorder>;
        };
        borderStyle: {
        type: PropType<string>;
        } & {
        default: string;
        };
        loading: {
        type: PropType<string | boolean>;
        } & {
        default: boolean;
        };
        disabled: {
        type: PropType<string | boolean>;
        } & {
        default: boolean;
        };
        size: {
        type: PropType<ButtonSize>;
        };
        radius: {
        type: PropType<string | boolean>;
        } & {
        default: boolean;
        };
        prefixIcon: {
        type: PropType<string>;
        };
        suffixIcon: {
        type: PropType<string>;
        };
        loadingIcon: {
        type: PropType<string>;
        } & {
        default: string;
        };
        fluid: {
        type: PropType<string | boolean>;
        } & {
        default: boolean;
        };
        nativeType: {
        type: PropType<ButtonNativeType>;
        } & {
        default: string;
        };
        }>> & {
        onClick?: ((evt: MouseEvent) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        click: (evt: MouseEvent) => boolean;
        }, string, {
        borderStyle: string;
        loading: string | boolean;
        disabled: string | boolean;
        radius: string | boolean;
        loadingIcon: string;
        fluid: string | boolean;
        nativeType: ButtonNativeType;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    type: {
    type: PropType<ButtonType>;
    };
    border: {
    type: PropType<ButtonBorder>;
    };
    borderStyle: {
    type: PropType<string>;
    } & {
    default: string;
    };
    loading: {
    type: PropType<string | boolean>;
    } & {
    default: boolean;
    };
    disabled: {
    type: PropType<string | boolean>;
    } & {
    default: boolean;
    };
    size: {
    type: PropType<ButtonSize>;
    };
    radius: {
    type: PropType<string | boolean>;
    } & {
    default: boolean;
    };
    prefixIcon: {
    type: PropType<string>;
    };
    suffixIcon: {
    type: PropType<string>;
    };
    loadingIcon: {
    type: PropType<string>;
    } & {
    default: string;
    };
    fluid: {
    type: PropType<string | boolean>;
    } & {
    default: boolean;
    };
    nativeType: {
    type: PropType<ButtonNativeType>;
    } & {
    default: string;
    };
    }>> & {
        onClick?: ((evt: MouseEvent) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
type: {
type: PropType<ButtonType>;
};
border: {
type: PropType<ButtonBorder>;
};
borderStyle: {
type: PropType<string>;
} & {
default: string;
};
loading: {
type: PropType<string | boolean>;
} & {
default: boolean;
};
disabled: {
type: PropType<string | boolean>;
} & {
default: boolean;
};
size: {
type: PropType<ButtonSize>;
};
radius: {
type: PropType<string | boolean>;
} & {
default: boolean;
};
prefixIcon: {
type: PropType<string>;
};
suffixIcon: {
type: PropType<string>;
};
loadingIcon: {
type: PropType<string>;
} & {
default: string;
};
fluid: {
type: PropType<string | boolean>;
} & {
default: boolean;
};
nativeType: {
type: PropType<ButtonNativeType>;
} & {
default: string;
};
}>> & {
onClick?: ((evt: MouseEvent) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
click: (evt: MouseEvent) => boolean;
}, string, {
borderStyle: string;
loading: string | boolean;
disabled: string | boolean;
radius: string | boolean;
loadingIcon: string;
fluid: string | boolean;
nativeType: ButtonNativeType;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayButtonContainer: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<ExtractPropTypes<    {}>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {}>>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {}>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {}>>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayButtonGroup: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<ExtractPropTypes<    {}>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {}>>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {}>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {}>>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayCard: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            shadow: CardShadow;
        }> & Omit<Readonly<ExtractPropTypes<    {
        title: {
        type: PropType<string>;
        };
        shadow: {
        type: PropType<CardShadow>;
        } & {
        default: string;
        };
        }>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "shadow">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        title: {
        type: PropType<string>;
        };
        shadow: {
        type: PropType<CardShadow>;
        } & {
        default: string;
        };
        }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
        shadow: CardShadow;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    title: {
    type: PropType<string>;
    };
    shadow: {
    type: PropType<CardShadow>;
    } & {
    default: string;
    };
    }>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
title: {
type: PropType<string>;
};
shadow: {
type: PropType<CardShadow>;
} & {
default: string;
};
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
shadow: CardShadow;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        title: (_: {}) => any;
        extra: (_: {}) => any;
        body: (_: {}) => any;
        default: (_: {}) => any;
        footer: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayCarousel: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            interval: number;
            height: string;
            width: string;
            autoplay: boolean;
            anim: "default" | "updown" | "fade";
            arrow: "none" | "always" | "hover";
            indicator: "none" | "inside" | "outside";
            pauseOnHover: boolean;
        }> & Omit<Readonly<ExtractPropTypes<    {
        interval: {
        type: PropType<number>;
        } & {
        default: number;
        };
        height: {
        type: PropType<string>;
        } & {
        default: string;
        };
        width: {
        type: PropType<string>;
        } & {
        default: string;
        };
        autoplay: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        anim: {
        type: PropType<"default" | "updown" | "fade">;
        } & {
        default: string;
        };
        modelValue: {
        type: PropType<string>;
        required: true;
        };
        arrow: {
        type: PropType<"none" | "always" | "hover">;
        } & {
        default: string;
        };
        indicator: {
        type: PropType<"none" | "inside" | "outside">;
        } & {
        default: string;
        };
        pauseOnHover: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        }>> & {
            onChange?: ((...args: any[]) => any) | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "interval" | "height" | "width" | "autoplay" | "anim" | "arrow" | "indicator" | "pauseOnHover">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "change" | "update:modelValue", ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        interval: {
        type: PropType<number>;
        } & {
        default: number;
        };
        height: {
        type: PropType<string>;
        } & {
        default: string;
        };
        width: {
        type: PropType<string>;
        } & {
        default: string;
        };
        autoplay: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        anim: {
        type: PropType<"default" | "updown" | "fade">;
        } & {
        default: string;
        };
        modelValue: {
        type: PropType<string>;
        required: true;
        };
        arrow: {
        type: PropType<"none" | "always" | "hover">;
        } & {
        default: string;
        };
        indicator: {
        type: PropType<"none" | "inside" | "outside">;
        } & {
        default: string;
        };
        pauseOnHover: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "update:modelValue")[], string, {
        interval: number;
        height: string;
        width: string;
        autoplay: boolean;
        anim: "default" | "updown" | "fade";
        arrow: "none" | "always" | "hover";
        indicator: "none" | "inside" | "outside";
        pauseOnHover: boolean;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    interval: {
    type: PropType<number>;
    } & {
    default: number;
    };
    height: {
    type: PropType<string>;
    } & {
    default: string;
    };
    width: {
    type: PropType<string>;
    } & {
    default: string;
    };
    autoplay: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    anim: {
    type: PropType<"default" | "updown" | "fade">;
    } & {
    default: string;
    };
    modelValue: {
    type: PropType<string>;
    required: true;
    };
    arrow: {
    type: PropType<"none" | "always" | "hover">;
    } & {
    default: string;
    };
    indicator: {
    type: PropType<"none" | "inside" | "outside">;
    } & {
    default: string;
    };
    pauseOnHover: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
interval: {
type: PropType<number>;
} & {
default: number;
};
height: {
type: PropType<string>;
} & {
default: string;
};
width: {
type: PropType<string>;
} & {
default: string;
};
autoplay: {
type: PropType<boolean>;
} & {
default: boolean;
};
anim: {
type: PropType<"default" | "updown" | "fade">;
} & {
default: string;
};
modelValue: {
type: PropType<string>;
required: true;
};
arrow: {
type: PropType<"none" | "always" | "hover">;
} & {
default: string;
};
indicator: {
type: PropType<"none" | "inside" | "outside">;
} & {
default: string;
};
pauseOnHover: {
type: PropType<boolean>;
} & {
default: boolean;
};
}>> & {
onChange?: ((...args: any[]) => any) | undefined;
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", {
interval: number;
height: string;
width: string;
autoplay: boolean;
anim: "default" | "updown" | "fade";
arrow: "none" | "always" | "hover";
indicator: "none" | "inside" | "outside";
pauseOnHover: boolean;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayCarouselItem: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<ExtractPropTypes<    {
        id: {
        type: PropType<string>;
        required: true;
        };
        }>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        id: {
        type: PropType<string>;
        required: true;
        };
        }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    id: {
    type: PropType<string>;
    required: true;
    };
    }>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
id: {
type: PropType<string>;
required: true;
};
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayCascader: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
            options: any[] | null;
            size: CascaderSize;
            placeholder: string;
            modelValue: string;
            allowClear: boolean;
            trigger: DropdownTrigger_3 | DropdownTrigger_3[];
            decollator: string;
            onlyLastLevel: boolean;
            replaceFields: {
                label: string;
                value: string;
                children: string;
            };
        }> & Omit<Readonly<ExtractPropTypes<    {
        disabled: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        options: {
        type: PropType<any[] | null>;
        } & {
        default: null;
        };
        size: {
        type: PropType<CascaderSize>;
        } & {
        default: string;
        };
        placeholder: {
        type: PropType<string>;
        } & {
        default: string;
        };
        modelValue: {
        type: PropType<string>;
        } & {
        default: string;
        };
        allowClear: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        trigger: {
        type: PropType<DropdownTrigger_3 | DropdownTrigger_3[]>;
        } & {
        default: string;
        };
        contentClass: {
        type: PropType<string | object | (string | object)[]>;
        };
        contentStyle: {
        type: PropType<StyleValue>;
        };
        decollator: {
        type: PropType<string>;
        } & {
        default: string;
        };
        onlyLastLevel: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        replaceFields: {
        type: PropType<    {
        label: string;
        value: string;
        children: string;
        }>;
        } & {
        default: () => {
        label: string;
        value: string;
        children: string;
        };
        };
        }>> & {
            onChange?: ((...args: any[]) => any) | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
            onClear?: ((...args: any[]) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "disabled" | "options" | "size" | "placeholder" | "modelValue" | "allowClear" | "trigger" | "decollator" | "onlyLastLevel" | "replaceFields">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "change" | "clear" | "update:modelValue", ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        disabled: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        options: {
        type: PropType<any[] | null>;
        } & {
        default: null;
        };
        size: {
        type: PropType<CascaderSize>;
        } & {
        default: string;
        };
        placeholder: {
        type: PropType<string>;
        } & {
        default: string;
        };
        modelValue: {
        type: PropType<string>;
        } & {
        default: string;
        };
        allowClear: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        trigger: {
        type: PropType<DropdownTrigger_3 | DropdownTrigger_3[]>;
        } & {
        default: string;
        };
        contentClass: {
        type: PropType<string | object | (string | object)[]>;
        };
        contentStyle: {
        type: PropType<StyleValue>;
        };
        decollator: {
        type: PropType<string>;
        } & {
        default: string;
        };
        onlyLastLevel: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        replaceFields: {
        type: PropType<    {
        label: string;
        value: string;
        children: string;
        }>;
        } & {
        default: () => {
        label: string;
        value: string;
        children: string;
        };
        };
        }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onClear?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "clear" | "update:modelValue")[], string, {
        disabled: boolean;
        options: any[] | null;
        size: CascaderSize;
        placeholder: string;
        modelValue: string;
        allowClear: boolean;
        trigger: DropdownTrigger_3 | DropdownTrigger_3[];
        decollator: string;
        onlyLastLevel: boolean;
        replaceFields: {
        label: string;
        value: string;
        children: string;
        };
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    disabled: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    options: {
    type: PropType<any[] | null>;
    } & {
    default: null;
    };
    size: {
    type: PropType<CascaderSize>;
    } & {
    default: string;
    };
    placeholder: {
    type: PropType<string>;
    } & {
    default: string;
    };
    modelValue: {
    type: PropType<string>;
    } & {
    default: string;
    };
    allowClear: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    trigger: {
    type: PropType<DropdownTrigger_3 | DropdownTrigger_3[]>;
    } & {
    default: string;
    };
    contentClass: {
    type: PropType<string | object | (string | object)[]>;
    };
    contentStyle: {
    type: PropType<StyleValue>;
    };
    decollator: {
    type: PropType<string>;
    } & {
    default: string;
    };
    onlyLastLevel: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    replaceFields: {
    type: PropType<    {
    label: string;
    value: string;
    children: string;
    }>;
    } & {
    default: () => {
    label: string;
    value: string;
    children: string;
    };
    };
    }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onClear?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
disabled: {
type: PropType<boolean>;
} & {
default: boolean;
};
options: {
type: PropType<any[] | null>;
} & {
default: null;
};
size: {
type: PropType<CascaderSize>;
} & {
default: string;
};
placeholder: {
type: PropType<string>;
} & {
default: string;
};
modelValue: {
type: PropType<string>;
} & {
default: string;
};
allowClear: {
type: PropType<boolean>;
} & {
default: boolean;
};
trigger: {
type: PropType<DropdownTrigger_3 | DropdownTrigger_3[]>;
} & {
default: string;
};
contentClass: {
type: PropType<string | object | (string | object)[]>;
};
contentStyle: {
type: PropType<StyleValue>;
};
decollator: {
type: PropType<string>;
} & {
default: string;
};
onlyLastLevel: {
type: PropType<boolean>;
} & {
default: boolean;
};
replaceFields: {
type: PropType<    {
label: string;
value: string;
children: string;
}>;
} & {
default: () => {
label: string;
value: string;
children: string;
};
};
}>> & {
onChange?: ((...args: any[]) => any) | undefined;
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
onClear?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "clear" | "update:modelValue")[], "clear" | "change" | "update:modelValue", {
disabled: boolean;
options: any[] | null;
size: CascaderSize;
placeholder: string;
modelValue: string;
allowClear: boolean;
trigger: DropdownTrigger_3 | DropdownTrigger_3[];
decollator: string;
onlyLastLevel: boolean;
replaceFields: {
label: string;
value: string;
children: string;
};
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: Record<any, {}> & {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayCheckbox: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            label: string;
            disabled: boolean;
            size: CheckboxSize;
            modelValue: boolean | (string | number | object)[];
            isIndeterminate: boolean;
        }> & Omit<Readonly<ExtractPropTypes<    {
        name: {
        type: PropType<string>;
        };
        value: {
        type: PropType<string | number | object>;
        required: true;
        };
        label: {
        type: PropType<string>;
        } & {
        default: string;
        };
        disabled: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        size: {
        type: PropType<CheckboxSize>;
        } & {
        default: string;
        };
        modelValue: {
        type: PropType<boolean | (string | number | object)[]>;
        } & {
        default: boolean;
        };
        skin: {
        type: PropType<string>;
        };
        isIndeterminate: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        }>> & {
            onChange?: ((...args: any[]) => any) | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "label" | "disabled" | "size" | "modelValue" | "isIndeterminate">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "change" | "update:modelValue", ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        name: {
        type: PropType<string>;
        };
        value: {
        type: PropType<string | number | object>;
        required: true;
        };
        label: {
        type: PropType<string>;
        } & {
        default: string;
        };
        disabled: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        size: {
        type: PropType<CheckboxSize>;
        } & {
        default: string;
        };
        modelValue: {
        type: PropType<boolean | (string | number | object)[]>;
        } & {
        default: boolean;
        };
        skin: {
        type: PropType<string>;
        };
        isIndeterminate: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "update:modelValue")[], string, {
        label: string;
        disabled: boolean;
        size: CheckboxSize;
        modelValue: boolean | (string | number | object)[];
        isIndeterminate: boolean;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    name: {
    type: PropType<string>;
    };
    value: {
    type: PropType<string | number | object>;
    required: true;
    };
    label: {
    type: PropType<string>;
    } & {
    default: string;
    };
    disabled: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    size: {
    type: PropType<CheckboxSize>;
    } & {
    default: string;
    };
    modelValue: {
    type: PropType<boolean | (string | number | object)[]>;
    } & {
    default: boolean;
    };
    skin: {
    type: PropType<string>;
    };
    isIndeterminate: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
name: {
type: PropType<string>;
};
value: {
type: PropType<string | number | object>;
required: true;
};
label: {
type: PropType<string>;
} & {
default: string;
};
disabled: {
type: PropType<boolean>;
} & {
default: boolean;
};
size: {
type: PropType<CheckboxSize>;
} & {
default: string;
};
modelValue: {
type: PropType<boolean | (string | number | object)[]>;
} & {
default: boolean;
};
skin: {
type: PropType<string>;
};
isIndeterminate: {
type: PropType<boolean>;
} & {
default: boolean;
};
}>> & {
onChange?: ((...args: any[]) => any) | undefined;
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", {
label: string;
disabled: boolean;
size: CheckboxSize;
modelValue: boolean | (string | number | object)[];
isIndeterminate: boolean;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayCheckboxGroup: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
            modelValue: Recordable[];
        }> & Omit<Readonly<ExtractPropTypes<    {
        disabled: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        modelValue: {
        type: PropType<Recordable[]>;
        } & {
        default: () => never[];
        };
        }>> & {
            onChange?: ((...args: any[]) => any) | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "disabled" | "modelValue">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "change" | "update:modelValue", ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        disabled: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        modelValue: {
        type: PropType<Recordable[]>;
        } & {
        default: () => never[];
        };
        }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "update:modelValue")[], string, {
        disabled: boolean;
        modelValue: Recordable[];
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    disabled: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    modelValue: {
    type: PropType<Recordable[]>;
    } & {
    default: () => never[];
    };
    }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
disabled: {
type: PropType<boolean>;
} & {
default: boolean;
};
modelValue: {
type: PropType<Recordable[]>;
} & {
default: () => never[];
};
}>> & {
onChange?: ((...args: any[]) => any) | undefined;
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", {
disabled: boolean;
modelValue: Recordable[];
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayCol: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<ExtractPropTypes<    {
        md: {
        type: PropType<string | number>;
        };
        xs: {
        type: PropType<string | number>;
        };
        sm: {
        type: PropType<string | number>;
        };
        lg: {
        type: PropType<string | number>;
        };
        mdOffset: {
        type: PropType<string | number>;
        };
        xsOffset: {
        type: PropType<string | number>;
        };
        smOffset: {
        type: PropType<string | number>;
        };
        lgOffset: {
        type: PropType<string | number>;
        };
        }>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        md: {
        type: PropType<string | number>;
        };
        xs: {
        type: PropType<string | number>;
        };
        sm: {
        type: PropType<string | number>;
        };
        lg: {
        type: PropType<string | number>;
        };
        mdOffset: {
        type: PropType<string | number>;
        };
        xsOffset: {
        type: PropType<string | number>;
        };
        smOffset: {
        type: PropType<string | number>;
        };
        lgOffset: {
        type: PropType<string | number>;
        };
        }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    md: {
    type: PropType<string | number>;
    };
    xs: {
    type: PropType<string | number>;
    };
    sm: {
    type: PropType<string | number>;
    };
    lg: {
    type: PropType<string | number>;
    };
    mdOffset: {
    type: PropType<string | number>;
    };
    xsOffset: {
    type: PropType<string | number>;
    };
    smOffset: {
    type: PropType<string | number>;
    };
    lgOffset: {
    type: PropType<string | number>;
    };
    }>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
md: {
type: PropType<string | number>;
};
xs: {
type: PropType<string | number>;
};
sm: {
type: PropType<string | number>;
};
lg: {
type: PropType<string | number>;
};
mdOffset: {
type: PropType<string | number>;
};
xsOffset: {
type: PropType<string | number>;
};
smOffset: {
type: PropType<string | number>;
};
lgOffset: {
type: PropType<string | number>;
};
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayCollapse: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            modelValue: string | number | string[] | number[];
            accordion: boolean;
            collapseTransition: boolean;
        }> & Omit<Readonly<ExtractPropTypes<    {
        modelValue: {
        type: PropType<string | number | string[] | number[]>;
        } & {
        default: () => never[];
        };
        accordion: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        collapseTransition: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        }>> & {
            onChange?: ((...args: any[]) => any) | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "modelValue" | "accordion" | "collapseTransition">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "change" | "update:modelValue", ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        modelValue: {
        type: PropType<string | number | string[] | number[]>;
        } & {
        default: () => never[];
        };
        accordion: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        collapseTransition: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "update:modelValue")[], string, {
        modelValue: string | number | string[] | number[];
        accordion: boolean;
        collapseTransition: boolean;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    modelValue: {
    type: PropType<string | number | string[] | number[]>;
    } & {
    default: () => never[];
    };
    accordion: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    collapseTransition: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
modelValue: {
type: PropType<string | number | string[] | number[]>;
} & {
default: () => never[];
};
accordion: {
type: PropType<boolean>;
} & {
default: boolean;
};
collapseTransition: {
type: PropType<boolean>;
} & {
default: boolean;
};
}>> & {
onChange?: ((...args: any[]) => any) | undefined;
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", {
modelValue: string | number | string[] | number[];
accordion: boolean;
collapseTransition: boolean;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayCollapseItem: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
        }> & Omit<Readonly<ExtractPropTypes<    {
        id: {
        type: PropType<string | number>;
        required: true;
        };
        title: {
        type: PropType<string>;
        required: true;
        };
        disabled: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        }>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "disabled">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        id: {
        type: PropType<string | number>;
        required: true;
        };
        title: {
        type: PropType<string>;
        required: true;
        };
        disabled: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
        disabled: boolean;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    id: {
    type: PropType<string | number>;
    required: true;
    };
    title: {
    type: PropType<string>;
    required: true;
    };
    disabled: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    }>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
id: {
type: PropType<string | number>;
required: true;
};
title: {
type: PropType<string>;
required: true;
};
disabled: {
type: PropType<boolean>;
} & {
default: boolean;
};
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
disabled: boolean;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        title: (_: {
            props: Readonly<CollapseItemProps> & {
                disabled: boolean;
            };
        }) => any;
        default: (_: {
            props: Readonly<CollapseItemProps> & {
                disabled: boolean;
            };
        }) => any;
    };
}) & Plugin_2;

export declare const LayColorPicker: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
            modelValue: any;
            preset: any;
        }> & Omit<Readonly<ExtractPropTypes<    {
        disabled: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        modelValue: {
        type: PropType<any>;
        } & {
        default: {
        r: number;
        g: number;
        b: number;
        a: number;
        };
        };
        contentClass: {
        type: PropType<string | object | (string | object)[]>;
        };
        contentStyle: {
        type: PropType<StyleValue>;
        };
        preset: {
        type: PropType<any>;
        } & {
        default: string[];
        };
        eyeDropper: {
        type: PropType<boolean>;
        };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "disabled" | "modelValue" | "preset">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "update:modelValue", ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        disabled: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        modelValue: {
        type: PropType<any>;
        } & {
        default: {
        r: number;
        g: number;
        b: number;
        a: number;
        };
        };
        contentClass: {
        type: PropType<string | object | (string | object)[]>;
        };
        contentStyle: {
        type: PropType<StyleValue>;
        };
        preset: {
        type: PropType<any>;
        } & {
        default: string[];
        };
        eyeDropper: {
        type: PropType<boolean>;
        };
        }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "update:modelValue"[], string, {
        disabled: boolean;
        modelValue: any;
        preset: any;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    disabled: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    modelValue: {
    type: PropType<any>;
    } & {
    default: {
    r: number;
    g: number;
    b: number;
    a: number;
    };
    };
    contentClass: {
    type: PropType<string | object | (string | object)[]>;
    };
    contentStyle: {
    type: PropType<StyleValue>;
    };
    preset: {
    type: PropType<any>;
    } & {
    default: string[];
    };
    eyeDropper: {
    type: PropType<boolean>;
    };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
disabled: {
type: PropType<boolean>;
} & {
default: boolean;
};
modelValue: {
type: PropType<any>;
} & {
default: {
r: number;
g: number;
b: number;
a: number;
};
};
contentClass: {
type: PropType<string | object | (string | object)[]>;
};
contentStyle: {
type: PropType<StyleValue>;
};
preset: {
type: PropType<any>;
} & {
default: string[];
};
eyeDropper: {
type: PropType<boolean>;
};
}>> & {
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", {
disabled: boolean;
modelValue: any;
preset: any;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & Plugin_2;

export declare const LayConfigProvider: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            theme: string;
            locale: string;
        }> & Omit<Readonly<ExtractPropTypes<    {
        theme: {
        type: PropType<string>;
        } & {
        default: string;
        };
        locale: {
        type: PropType<string>;
        } & {
        default: string;
        };
        locales: {
        type: PropType<[]>;
        };
        themeVariable: {
        type: PropType<any>;
        };
        darkPartial: {
        type: PropType<any>;
        };
        }>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "theme" | "locale">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        theme: {
        type: PropType<string>;
        } & {
        default: string;
        };
        locale: {
        type: PropType<string>;
        } & {
        default: string;
        };
        locales: {
        type: PropType<[]>;
        };
        themeVariable: {
        type: PropType<any>;
        };
        darkPartial: {
        type: PropType<any>;
        };
        }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
        theme: string;
        locale: string;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    theme: {
    type: PropType<string>;
    } & {
    default: string;
    };
    locale: {
    type: PropType<string>;
    } & {
    default: string;
    };
    locales: {
    type: PropType<[]>;
    };
    themeVariable: {
    type: PropType<any>;
    };
    darkPartial: {
    type: PropType<any>;
    };
    }>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
theme: {
type: PropType<string>;
} & {
default: string;
};
locale: {
type: PropType<string>;
} & {
default: string;
};
locales: {
type: PropType<[]>;
};
themeVariable: {
type: PropType<any>;
};
darkPartial: {
type: PropType<any>;
};
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
theme: string;
locale: string;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayContainer: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            fluid: BooleanOrString;
        }> & Omit<Readonly<ExtractPropTypes<    {
        fluid: {
        type: PropType<BooleanOrString>;
        } & {
        default: boolean;
        };
        }>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "fluid">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        fluid: {
        type: PropType<BooleanOrString>;
        } & {
        default: boolean;
        };
        }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
        fluid: BooleanOrString;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    fluid: {
    type: PropType<BooleanOrString>;
    } & {
    default: boolean;
    };
    }>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
fluid: {
type: PropType<BooleanOrString>;
} & {
default: boolean;
};
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
fluid: BooleanOrString;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayCountUp: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            prefix: string;
            decimal: string;
            separator: string;
            duration: number;
            autoplay: boolean;
            suffix: string;
            startVal: number;
            endVal: number;
            decimalPlaces: number;
            useGrouping: boolean;
            useEasing: boolean;
            easingFn: any;
        }> & Omit<Readonly<ExtractPropTypes<    {
        prefix: {
        type: PropType<string>;
        } & {
        default: string;
        };
        decimal: {
        type: PropType<string>;
        } & {
        default: string;
        };
        separator: {
        type: PropType<string>;
        } & {
        default: string;
        };
        duration: {
        type: PropType<number>;
        } & {
        default: number;
        };
        autoplay: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        suffix: {
        type: PropType<string>;
        } & {
        default: string;
        };
        startVal: {
        type: PropType<number>;
        } & {
        default: number;
        };
        endVal: {
        type: PropType<number>;
        } & {
        default: number;
        };
        decimalPlaces: {
        type: PropType<number>;
        } & {
        default: number;
        };
        useGrouping: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        useEasing: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        easingFn: {
        type: PropType<any>;
        } & {
        default: CubicBezierPoints;
        };
        }>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "prefix" | "decimal" | "separator" | "duration" | "autoplay" | "suffix" | "startVal" | "endVal" | "decimalPlaces" | "useGrouping" | "useEasing" | "easingFn">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        prefix: {
        type: PropType<string>;
        } & {
        default: string;
        };
        decimal: {
        type: PropType<string>;
        } & {
        default: string;
        };
        separator: {
        type: PropType<string>;
        } & {
        default: string;
        };
        duration: {
        type: PropType<number>;
        } & {
        default: number;
        };
        autoplay: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        suffix: {
        type: PropType<string>;
        } & {
        default: string;
        };
        startVal: {
        type: PropType<number>;
        } & {
        default: number;
        };
        endVal: {
        type: PropType<number>;
        } & {
        default: number;
        };
        decimalPlaces: {
        type: PropType<number>;
        } & {
        default: number;
        };
        useGrouping: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        useEasing: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        easingFn: {
        type: PropType<any>;
        } & {
        default: CubicBezierPoints;
        };
        }>>, {
        start: () => void;
        }, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
        prefix: string;
        decimal: string;
        separator: string;
        duration: number;
        autoplay: boolean;
        suffix: string;
        startVal: number;
        endVal: number;
        decimalPlaces: number;
        useGrouping: boolean;
        useEasing: boolean;
        easingFn: any;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    prefix: {
    type: PropType<string>;
    } & {
    default: string;
    };
    decimal: {
    type: PropType<string>;
    } & {
    default: string;
    };
    separator: {
    type: PropType<string>;
    } & {
    default: string;
    };
    duration: {
    type: PropType<number>;
    } & {
    default: number;
    };
    autoplay: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    suffix: {
    type: PropType<string>;
    } & {
    default: string;
    };
    startVal: {
    type: PropType<number>;
    } & {
    default: number;
    };
    endVal: {
    type: PropType<number>;
    } & {
    default: number;
    };
    decimalPlaces: {
    type: PropType<number>;
    } & {
    default: number;
    };
    useGrouping: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    useEasing: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    easingFn: {
    type: PropType<any>;
    } & {
    default: CubicBezierPoints;
    };
    }>> & ShallowUnwrapRef<    {
    start: () => void;
    }> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
prefix: {
type: PropType<string>;
} & {
default: string;
};
decimal: {
type: PropType<string>;
} & {
default: string;
};
separator: {
type: PropType<string>;
} & {
default: string;
};
duration: {
type: PropType<number>;
} & {
default: number;
};
autoplay: {
type: PropType<boolean>;
} & {
default: boolean;
};
suffix: {
type: PropType<string>;
} & {
default: string;
};
startVal: {
type: PropType<number>;
} & {
default: number;
};
endVal: {
type: PropType<number>;
} & {
default: number;
};
decimalPlaces: {
type: PropType<number>;
} & {
default: number;
};
useGrouping: {
type: PropType<boolean>;
} & {
default: boolean;
};
useEasing: {
type: PropType<boolean>;
} & {
default: boolean;
};
easingFn: {
type: PropType<any>;
} & {
default: CubicBezierPoints;
};
}>>, {
start: () => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
prefix: string;
decimal: string;
separator: string;
duration: number;
autoplay: boolean;
suffix: string;
startVal: number;
endVal: number;
decimalPlaces: number;
useGrouping: boolean;
useEasing: boolean;
easingFn: any;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        prefix: (_: {}) => any;
        suffix: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayDatePicker: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            type: "time" | "month" | "year" | "date" | "datetime" | "yearmonth";
            disabled: boolean;
            size: "xs" | "sm" | "md" | "lg";
            readonly: boolean;
            range: boolean;
            prefixIcon: string;
            suffixIcon: string;
            modelValue: string | number | string[];
            allowClear: boolean;
            simple: boolean;
            rangeSeparator: string;
            timestamp: boolean;
        }> & Omit<Readonly<ExtractPropTypes<    {
        max: {
        type: PropType<string>;
        };
        type: {
        type: PropType<"time" | "month" | "year" | "date" | "datetime" | "yearmonth">;
        } & {
        default: string;
        };
        name: {
        type: PropType<string>;
        };
        disabled: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        size: {
        type: PropType<"xs" | "sm" | "md" | "lg">;
        } & {
        default: string;
        };
        readonly: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        range: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        placeholder: {
        type: PropType<string>;
        };
        min: {
        type: PropType<string>;
        };
        prefixIcon: {
        type: PropType<string>;
        } & {
        default: string;
        };
        suffixIcon: {
        type: PropType<string>;
        } & {
        default: string;
        };
        modelValue: {
        type: PropType<string | number | string[]>;
        } & {
        default: string;
        };
        allowClear: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        contentClass: {
        type: PropType<string | object | (string | object)[]>;
        };
        contentStyle: {
        type: PropType<StyleValue>;
        };
        simple: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        rangeSeparator: {
        type: PropType<string>;
        } & {
        default: string;
        };
        timestamp: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "type" | "disabled" | "size" | "readonly" | "range" | "prefixIcon" | "suffixIcon" | "modelValue" | "allowClear" | "simple" | "rangeSeparator" | "timestamp">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "update:modelValue", ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        max: {
        type: PropType<string>;
        };
        type: {
        type: PropType<"time" | "month" | "year" | "date" | "datetime" | "yearmonth">;
        } & {
        default: string;
        };
        name: {
        type: PropType<string>;
        };
        disabled: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        size: {
        type: PropType<"xs" | "sm" | "md" | "lg">;
        } & {
        default: string;
        };
        readonly: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        range: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        placeholder: {
        type: PropType<string>;
        };
        min: {
        type: PropType<string>;
        };
        prefixIcon: {
        type: PropType<string>;
        } & {
        default: string;
        };
        suffixIcon: {
        type: PropType<string>;
        } & {
        default: string;
        };
        modelValue: {
        type: PropType<string | number | string[]>;
        } & {
        default: string;
        };
        allowClear: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        contentClass: {
        type: PropType<string | object | (string | object)[]>;
        };
        contentStyle: {
        type: PropType<StyleValue>;
        };
        simple: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        rangeSeparator: {
        type: PropType<string>;
        } & {
        default: string;
        };
        timestamp: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "update:modelValue"[], string, {
        type: "time" | "month" | "year" | "date" | "datetime" | "yearmonth";
        disabled: boolean;
        size: "xs" | "sm" | "md" | "lg";
        readonly: boolean;
        range: boolean;
        prefixIcon: string;
        suffixIcon: string;
        modelValue: string | number | string[];
        allowClear: boolean;
        simple: boolean;
        rangeSeparator: string;
        timestamp: boolean;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    max: {
    type: PropType<string>;
    };
    type: {
    type: PropType<"time" | "month" | "year" | "date" | "datetime" | "yearmonth">;
    } & {
    default: string;
    };
    name: {
    type: PropType<string>;
    };
    disabled: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    size: {
    type: PropType<"xs" | "sm" | "md" | "lg">;
    } & {
    default: string;
    };
    readonly: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    range: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    placeholder: {
    type: PropType<string>;
    };
    min: {
    type: PropType<string>;
    };
    prefixIcon: {
    type: PropType<string>;
    } & {
    default: string;
    };
    suffixIcon: {
    type: PropType<string>;
    } & {
    default: string;
    };
    modelValue: {
    type: PropType<string | number | string[]>;
    } & {
    default: string;
    };
    allowClear: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    contentClass: {
    type: PropType<string | object | (string | object)[]>;
    };
    contentStyle: {
    type: PropType<StyleValue>;
    };
    simple: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    rangeSeparator: {
    type: PropType<string>;
    } & {
    default: string;
    };
    timestamp: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
max: {
type: PropType<string>;
};
type: {
type: PropType<"time" | "month" | "year" | "date" | "datetime" | "yearmonth">;
} & {
default: string;
};
name: {
type: PropType<string>;
};
disabled: {
type: PropType<boolean>;
} & {
default: boolean;
};
size: {
type: PropType<"xs" | "sm" | "md" | "lg">;
} & {
default: string;
};
readonly: {
type: PropType<boolean>;
} & {
default: boolean;
};
range: {
type: PropType<boolean>;
} & {
default: boolean;
};
placeholder: {
type: PropType<string>;
};
min: {
type: PropType<string>;
};
prefixIcon: {
type: PropType<string>;
} & {
default: string;
};
suffixIcon: {
type: PropType<string>;
} & {
default: string;
};
modelValue: {
type: PropType<string | number | string[]>;
} & {
default: string;
};
allowClear: {
type: PropType<boolean>;
} & {
default: boolean;
};
contentClass: {
type: PropType<string | object | (string | object)[]>;
};
contentStyle: {
type: PropType<StyleValue>;
};
simple: {
type: PropType<boolean>;
} & {
default: boolean;
};
rangeSeparator: {
type: PropType<string>;
} & {
default: string;
};
timestamp: {
type: PropType<boolean>;
} & {
default: boolean;
};
}>> & {
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", {
type: "time" | "month" | "year" | "date" | "datetime" | "yearmonth";
disabled: boolean;
size: "xs" | "sm" | "md" | "lg";
readonly: boolean;
range: boolean;
prefixIcon: string;
suffixIcon: string;
modelValue: string | number | string[];
allowClear: boolean;
simple: boolean;
rangeSeparator: string;
timestamp: boolean;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & Plugin_2;

export declare const LayDropdown: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            animationName: string | boolean;
            visible: boolean;
            disabled: boolean;
            trigger: DropdownTrigger | DropdownTrigger[];
            placement: DropdownPlacement;
            autoFitPosition: boolean;
            autoFitWidth: boolean;
            autoFitMinWidth: boolean;
            updateAtScroll: boolean;
            autoFixPosition: boolean;
            clickToClose: boolean;
            blurToClose: boolean;
            clickOutsideToClose: boolean;
            contentOffset: number;
            mouseEnterDelay: number;
            mouseLeaveDelay: number;
            focusDelay: number;
            alignPoint: boolean;
            popupContainer: string;
        }> & Omit<Readonly<ExtractPropTypes<    {
        animationName: {
        type: PropType<string | boolean>;
        } & {
        default: string;
        };
        visible: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        disabled: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        trigger: {
        type: PropType<DropdownTrigger | DropdownTrigger[]>;
        } & {
        default: string;
        };
        placement: {
        type: PropType<DropdownPlacement>;
        } & {
        default: string;
        };
        autoFitPosition: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        autoFitWidth: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        autoFitMinWidth: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        updateAtScroll: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        autoFixPosition: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        clickToClose: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        blurToClose: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        clickOutsideToClose: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        contentOffset: {
        type: PropType<number>;
        } & {
        default: number;
        };
        mouseEnterDelay: {
        type: PropType<number>;
        } & {
        default: number;
        };
        mouseLeaveDelay: {
        type: PropType<number>;
        } & {
        default: number;
        };
        focusDelay: {
        type: PropType<number>;
        } & {
        default: number;
        };
        alignPoint: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        contentClass: {
        type: PropType<string | object | (string | object)[]>;
        };
        contentStyle: {
        type: PropType<StyleValue>;
        };
        popupContainer: {
        type: PropType<string>;
        } & {
        default: string;
        };
        }>> & {
            onHide?: ((...args: any[]) => any) | undefined;
            onShow?: ((...args: any[]) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "animationName" | "visible" | "disabled" | "trigger" | "placement" | "autoFitPosition" | "autoFitWidth" | "autoFitMinWidth" | "updateAtScroll" | "autoFixPosition" | "clickToClose" | "blurToClose" | "clickOutsideToClose" | "contentOffset" | "mouseEnterDelay" | "mouseLeaveDelay" | "focusDelay" | "alignPoint" | "popupContainer">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "hide" | "show", ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        animationName: {
        type: PropType<string | boolean>;
        } & {
        default: string;
        };
        visible: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        disabled: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        trigger: {
        type: PropType<DropdownTrigger | DropdownTrigger[]>;
        } & {
        default: string;
        };
        placement: {
        type: PropType<DropdownPlacement>;
        } & {
        default: string;
        };
        autoFitPosition: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        autoFitWidth: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        autoFitMinWidth: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        updateAtScroll: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        autoFixPosition: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        clickToClose: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        blurToClose: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        clickOutsideToClose: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        contentOffset: {
        type: PropType<number>;
        } & {
        default: number;
        };
        mouseEnterDelay: {
        type: PropType<number>;
        } & {
        default: number;
        };
        mouseLeaveDelay: {
        type: PropType<number>;
        } & {
        default: number;
        };
        focusDelay: {
        type: PropType<number>;
        } & {
        default: number;
        };
        alignPoint: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        contentClass: {
        type: PropType<string | object | (string | object)[]>;
        };
        contentStyle: {
        type: PropType<StyleValue>;
        };
        popupContainer: {
        type: PropType<string>;
        } & {
        default: string;
        };
        }>> & {
        onHide?: ((...args: any[]) => any) | undefined;
        onShow?: ((...args: any[]) => any) | undefined;
        }, {
        show: (delay?: number | undefined) => void;
        hide: (delay?: number | undefined) => void;
        toggle: () => void;
        }, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("hide" | "show")[], string, {
        animationName: string | boolean;
        visible: boolean;
        disabled: boolean;
        trigger: DropdownTrigger | DropdownTrigger[];
        placement: DropdownPlacement;
        autoFitPosition: boolean;
        autoFitWidth: boolean;
        autoFitMinWidth: boolean;
        updateAtScroll: boolean;
        autoFixPosition: boolean;
        clickToClose: boolean;
        blurToClose: boolean;
        clickOutsideToClose: boolean;
        contentOffset: number;
        mouseEnterDelay: number;
        mouseLeaveDelay: number;
        focusDelay: number;
        alignPoint: boolean;
        popupContainer: string;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    animationName: {
    type: PropType<string | boolean>;
    } & {
    default: string;
    };
    visible: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    disabled: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    trigger: {
    type: PropType<DropdownTrigger | DropdownTrigger[]>;
    } & {
    default: string;
    };
    placement: {
    type: PropType<DropdownPlacement>;
    } & {
    default: string;
    };
    autoFitPosition: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    autoFitWidth: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    autoFitMinWidth: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    updateAtScroll: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    autoFixPosition: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    clickToClose: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    blurToClose: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    clickOutsideToClose: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    contentOffset: {
    type: PropType<number>;
    } & {
    default: number;
    };
    mouseEnterDelay: {
    type: PropType<number>;
    } & {
    default: number;
    };
    mouseLeaveDelay: {
    type: PropType<number>;
    } & {
    default: number;
    };
    focusDelay: {
    type: PropType<number>;
    } & {
    default: number;
    };
    alignPoint: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    contentClass: {
    type: PropType<string | object | (string | object)[]>;
    };
    contentStyle: {
    type: PropType<StyleValue>;
    };
    popupContainer: {
    type: PropType<string>;
    } & {
    default: string;
    };
    }>> & {
        onHide?: ((...args: any[]) => any) | undefined;
        onShow?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {
    show: (delay?: number | undefined) => void;
    hide: (delay?: number | undefined) => void;
    toggle: () => void;
    }> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
animationName: {
type: PropType<string | boolean>;
} & {
default: string;
};
visible: {
type: PropType<boolean>;
} & {
default: boolean;
};
disabled: {
type: PropType<boolean>;
} & {
default: boolean;
};
trigger: {
type: PropType<DropdownTrigger | DropdownTrigger[]>;
} & {
default: string;
};
placement: {
type: PropType<DropdownPlacement>;
} & {
default: string;
};
autoFitPosition: {
type: PropType<boolean>;
} & {
default: boolean;
};
autoFitWidth: {
type: PropType<boolean>;
} & {
default: boolean;
};
autoFitMinWidth: {
type: PropType<boolean>;
} & {
default: boolean;
};
updateAtScroll: {
type: PropType<boolean>;
} & {
default: boolean;
};
autoFixPosition: {
type: PropType<boolean>;
} & {
default: boolean;
};
clickToClose: {
type: PropType<boolean>;
} & {
default: boolean;
};
blurToClose: {
type: PropType<boolean>;
} & {
default: boolean;
};
clickOutsideToClose: {
type: PropType<boolean>;
} & {
default: boolean;
};
contentOffset: {
type: PropType<number>;
} & {
default: number;
};
mouseEnterDelay: {
type: PropType<number>;
} & {
default: number;
};
mouseLeaveDelay: {
type: PropType<number>;
} & {
default: number;
};
focusDelay: {
type: PropType<number>;
} & {
default: number;
};
alignPoint: {
type: PropType<boolean>;
} & {
default: boolean;
};
contentClass: {
type: PropType<string | object | (string | object)[]>;
};
contentStyle: {
type: PropType<StyleValue>;
};
popupContainer: {
type: PropType<string>;
} & {
default: string;
};
}>> & {
onHide?: ((...args: any[]) => any) | undefined;
onShow?: ((...args: any[]) => any) | undefined;
}, {
show: (delay?: number | undefined) => void;
hide: (delay?: number | undefined) => void;
toggle: () => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("hide" | "show")[], "hide" | "show", {
animationName: string | boolean;
visible: boolean;
disabled: boolean;
trigger: DropdownTrigger | DropdownTrigger[];
placement: DropdownPlacement;
autoFitPosition: boolean;
autoFitWidth: boolean;
autoFitMinWidth: boolean;
updateAtScroll: boolean;
autoFixPosition: boolean;
clickToClose: boolean;
blurToClose: boolean;
clickOutsideToClose: boolean;
contentOffset: number;
mouseEnterDelay: number;
mouseLeaveDelay: number;
focusDelay: number;
alignPoint: boolean;
popupContainer: string;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        content: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayDropdownMenu: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<ExtractPropTypes<    {}>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {}>>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {}>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {}>>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & Plugin_2;

export declare const LayDropdownMenuItem: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
        }> & Omit<Readonly<ExtractPropTypes<    {
        disabled: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        }>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "disabled">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        disabled: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
        disabled: boolean;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    disabled: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    }>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
disabled: {
type: PropType<boolean>;
} & {
default: boolean;
};
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
disabled: boolean;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        prefix: (_: {}) => any;
        default: (_: {}) => any;
        suffix: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayDropdownSubMenu: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
            trigger: DropdownTrigger_2 | DropdownTrigger_2[];
            placement: DropdownPlacement;
            contentOffset: number;
        }> & Omit<Readonly<ExtractPropTypes<    {
        disabled: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        trigger: {
        type: PropType<DropdownTrigger_2 | DropdownTrigger_2[]>;
        } & {
        default: string;
        };
        placement: {
        type: PropType<DropdownPlacement>;
        } & {
        default: string;
        };
        contentOffset: {
        type: PropType<number>;
        } & {
        default: number;
        };
        }>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "disabled" | "trigger" | "placement" | "contentOffset">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        disabled: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        trigger: {
        type: PropType<DropdownTrigger_2 | DropdownTrigger_2[]>;
        } & {
        default: string;
        };
        placement: {
        type: PropType<DropdownPlacement>;
        } & {
        default: string;
        };
        contentOffset: {
        type: PropType<number>;
        } & {
        default: number;
        };
        }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
        disabled: boolean;
        trigger: DropdownTrigger_2 | DropdownTrigger_2[];
        placement: DropdownPlacement;
        contentOffset: number;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    disabled: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    trigger: {
    type: PropType<DropdownTrigger_2 | DropdownTrigger_2[]>;
    } & {
    default: string;
    };
    placement: {
    type: PropType<DropdownPlacement>;
    } & {
    default: string;
    };
    contentOffset: {
    type: PropType<number>;
    } & {
    default: number;
    };
    }>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
disabled: {
type: PropType<boolean>;
} & {
default: boolean;
};
trigger: {
type: PropType<DropdownTrigger_2 | DropdownTrigger_2[]>;
} & {
default: string;
};
placement: {
type: PropType<DropdownPlacement>;
} & {
default: string;
};
contentOffset: {
type: PropType<number>;
} & {
default: number;
};
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
disabled: boolean;
trigger: DropdownTrigger_2 | DropdownTrigger_2[];
placement: DropdownPlacement;
contentOffset: number;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        prefix: (_: {}) => any;
        default: (_: {}) => any;
        suffix: (_: {}) => any;
        content: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayEmpty: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<ExtractPropTypes<    {
        image: {
        type: PropType<string>;
        };
        description: {
        type: PropType<string>;
        };
        }>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        image: {
        type: PropType<string>;
        };
        description: {
        type: PropType<string>;
        };
        }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    image: {
    type: PropType<string>;
    };
    description: {
    type: PropType<string>;
    };
    }>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
image: {
type: PropType<string>;
};
description: {
type: PropType<string>;
};
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        image: (_: {}) => any;
        extra: (_: {}) => any;
    };
}) & Plugin_2;

declare interface LayerButton {
    text: string;
    callback: Function;
}

declare interface LayerModal {
    title?: string;
    resize?: boolean;
    move?: boolean;
    maxmin?: boolean;
    offset?: string[];
    content?: string;
    shade?: boolean;
    shadeClose?: boolean;
    shadeOpacity?: number;
    zIndex?: number;
    type?: "component" | "iframe";
    closeBtn?: boolean;
    area: string[];
    btn?: LayerButton[];
    btnAlign?: "l" | "r" | "c";
    anim?: boolean;
    isOutAnim?: boolean;
}

export declare const LayException: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            title: string;
            describe: string;
        }> & Omit<Readonly<ExtractPropTypes<    {
        title: {
        type: PropType<string>;
        } & {
        default: string;
        };
        status: {
        type: PropType<"401" | "403" | "404" | "500">;
        };
        describe: {
        type: PropType<string>;
        } & {
        default: string;
        };
        }>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "title" | "describe">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        title: {
        type: PropType<string>;
        } & {
        default: string;
        };
        status: {
        type: PropType<"401" | "403" | "404" | "500">;
        };
        describe: {
        type: PropType<string>;
        } & {
        default: string;
        };
        }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
        title: string;
        describe: string;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    title: {
    type: PropType<string>;
    } & {
    default: string;
    };
    status: {
    type: PropType<"401" | "403" | "404" | "500">;
    };
    describe: {
    type: PropType<string>;
    } & {
    default: string;
    };
    }>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
title: {
type: PropType<string>;
} & {
default: string;
};
status: {
type: PropType<"401" | "403" | "404" | "500">;
};
describe: {
type: PropType<string>;
} & {
default: string;
};
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
title: string;
describe: string;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        image: (_: {}) => any;
        extra: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayField: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<ExtractPropTypes<    {
        title: {
        type: PropType<string>;
        };
        }>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        title: {
        type: PropType<string>;
        };
        }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    title: {
    type: PropType<string>;
    };
    }>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
title: {
type: PropType<string>;
};
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayFooter: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<ExtractPropTypes<    {}>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {}>>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {}>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {}>>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayForm: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            model: modelType;
            initValidate: boolean;
            requiredIcons: string;
            useCN: boolean;
        }> & Omit<Readonly<ExtractPropTypes<    {
        required: {
        type: PropType<boolean>;
        };
        model: {
        type: PropType<modelType>;
        } & {
        default: () => {};
        };
        rules: {
        type: PropType<Rule>;
        };
        initValidate: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        requiredIcons: {
        type: PropType<string>;
        } & {
        default: string;
        };
        requiredErrorMessage: {
        type: PropType<string>;
        };
        validateMessage: {
        type: PropType<ValidateMessages>;
        };
        useCN: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        }>> & {
            onSubmit?: ((...args: any[]) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "model" | "initValidate" | "requiredIcons" | "useCN">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "submit", ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        required: {
        type: PropType<boolean>;
        };
        model: {
        type: PropType<modelType>;
        } & {
        default: () => {};
        };
        rules: {
        type: PropType<Rule>;
        };
        initValidate: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        requiredIcons: {
        type: PropType<string>;
        } & {
        default: string;
        };
        requiredErrorMessage: {
        type: PropType<string>;
        };
        validateMessage: {
        type: PropType<ValidateMessages>;
        };
        useCN: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        }>> & {
        onSubmit?: ((...args: any[]) => any) | undefined;
        }, {
        validate: (fields?: string | string[] | FormCallback | null | undefined, callback?: FormCallback | null | undefined) => Promise<unknown> | null;
        clearValidate: (fields?: string | string[] | undefined) => void;
        reset: () => void;
        }, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "submit"[], string, {
        model: modelType;
        initValidate: boolean;
        requiredIcons: string;
        useCN: boolean;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    required: {
    type: PropType<boolean>;
    };
    model: {
    type: PropType<modelType>;
    } & {
    default: () => {};
    };
    rules: {
    type: PropType<Rule>;
    };
    initValidate: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    requiredIcons: {
    type: PropType<string>;
    } & {
    default: string;
    };
    requiredErrorMessage: {
    type: PropType<string>;
    };
    validateMessage: {
    type: PropType<ValidateMessages>;
    };
    useCN: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    }>> & {
        onSubmit?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {
    validate: (fields?: string | string[] | FormCallback | null | undefined, callback?: FormCallback | null | undefined) => Promise<unknown> | null;
    clearValidate: (fields?: string | string[] | undefined) => void;
    reset: () => void;
    }> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
required: {
type: PropType<boolean>;
};
model: {
type: PropType<modelType>;
} & {
default: () => {};
};
rules: {
type: PropType<Rule>;
};
initValidate: {
type: PropType<boolean>;
} & {
default: boolean;
};
requiredIcons: {
type: PropType<string>;
} & {
default: string;
};
requiredErrorMessage: {
type: PropType<string>;
};
validateMessage: {
type: PropType<ValidateMessages>;
};
useCN: {
type: PropType<boolean>;
} & {
default: boolean;
};
}>> & {
onSubmit?: ((...args: any[]) => any) | undefined;
}, {
validate: (fields?: string | string[] | FormCallback | null | undefined, callback?: FormCallback | null | undefined) => Promise<unknown> | null;
clearValidate: (fields?: string | string[] | undefined) => void;
reset: () => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "submit"[], "submit", {
model: modelType;
initValidate: boolean;
requiredIcons: string;
useCN: boolean;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayFormItem: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            mode: string;
            labelPosition: string;
            labelWidth: string | number;
        }> & Omit<Readonly<ExtractPropTypes<    {
        required: {
        type: PropType<boolean>;
        };
        label: {
        type: PropType<string>;
        };
        mode: {
        type: PropType<string>;
        } & {
        default: string;
        };
        rules: {
        type: PropType<Rule>;
        };
        requiredErrorMessage: {
        type: PropType<string>;
        };
        prop: {
        type: PropType<string>;
        };
        labelPosition: {
        type: PropType<string>;
        } & {
        default: string;
        };
        labelWidth: {
        type: PropType<string | number>;
        } & {
        default: number;
        };
        errorMessage: {
        type: PropType<string>;
        };
        }>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "mode" | "labelPosition" | "labelWidth">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        required: {
        type: PropType<boolean>;
        };
        label: {
        type: PropType<string>;
        };
        mode: {
        type: PropType<string>;
        } & {
        default: string;
        };
        rules: {
        type: PropType<Rule>;
        };
        requiredErrorMessage: {
        type: PropType<string>;
        };
        prop: {
        type: PropType<string>;
        };
        labelPosition: {
        type: PropType<string>;
        } & {
        default: string;
        };
        labelWidth: {
        type: PropType<string | number>;
        } & {
        default: number;
        };
        errorMessage: {
        type: PropType<string>;
        };
        }>>, {
        validate: (callback?: ValidateCallback | undefined) => void;
        clearValidate: () => void;
        }, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
        mode: string;
        labelPosition: string;
        labelWidth: string | number;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    required: {
    type: PropType<boolean>;
    };
    label: {
    type: PropType<string>;
    };
    mode: {
    type: PropType<string>;
    } & {
    default: string;
    };
    rules: {
    type: PropType<Rule>;
    };
    requiredErrorMessage: {
    type: PropType<string>;
    };
    prop: {
    type: PropType<string>;
    };
    labelPosition: {
    type: PropType<string>;
    } & {
    default: string;
    };
    labelWidth: {
    type: PropType<string | number>;
    } & {
    default: number;
    };
    errorMessage: {
    type: PropType<string>;
    };
    }>> & ShallowUnwrapRef<    {
    validate: (callback?: ValidateCallback | undefined) => void;
    clearValidate: () => void;
    }> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
required: {
type: PropType<boolean>;
};
label: {
type: PropType<string>;
};
mode: {
type: PropType<string>;
} & {
default: string;
};
rules: {
type: PropType<Rule>;
};
requiredErrorMessage: {
type: PropType<string>;
};
prop: {
type: PropType<string>;
};
labelPosition: {
type: PropType<string>;
} & {
default: string;
};
labelWidth: {
type: PropType<string | number>;
} & {
default: number;
};
errorMessage: {
type: PropType<string>;
};
}>>, {
validate: (callback?: ValidateCallback | undefined) => void;
clearValidate: () => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
mode: string;
labelPosition: string;
labelWidth: string | number;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        required: (_: {
            props: {
                model: modelType;
                prop?: string | undefined;
                mode: string;
                label?: string | undefined;
                labelPosition: string;
                labelWidth: string | number;
                errorMessage?: string | undefined;
                rules?: Rule | undefined;
                required?: boolean | undefined;
                requiredErrorMessage?: string | undefined;
            };
        }) => any;
        label: (_: {
            props: {
                model: modelType;
                prop?: string | undefined;
                mode: string;
                label?: string | undefined;
                labelPosition: string;
                labelWidth: string | number;
                errorMessage?: string | undefined;
                rules?: Rule | undefined;
                required?: boolean | undefined;
                requiredErrorMessage?: string | undefined;
            };
        }) => any;
        default: (_: {
            props: {
                model: modelType;
                prop?: string | undefined;
                mode: string;
                label?: string | undefined;
                labelPosition: string;
                labelWidth: string | number;
                errorMessage?: string | undefined;
                rules?: Rule | undefined;
                required?: boolean | undefined;
                requiredErrorMessage?: string | undefined;
            };
        }) => any;
    };
}) & Plugin_2;

export declare const LayFullscreen: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            immersive: boolean;
        }> & Omit<Readonly<ExtractPropTypes<    {
        position: {
        type: PropType<string>;
        };
        zIndex: {
        type: PropType<string>;
        };
        target: {
        type: PropType<HTMLElement>;
        };
        immersive: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        }>> & {
            onFullscreenchange?: ((...args: any[]) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "immersive">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "fullscreenchange", ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        position: {
        type: PropType<string>;
        };
        zIndex: {
        type: PropType<string>;
        };
        target: {
        type: PropType<HTMLElement>;
        };
        immersive: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        }>> & {
        onFullscreenchange?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "fullscreenchange"[], string, {
        immersive: boolean;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    position: {
    type: PropType<string>;
    };
    zIndex: {
    type: PropType<string>;
    };
    target: {
    type: PropType<HTMLElement>;
    };
    immersive: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    }>> & {
        onFullscreenchange?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
position: {
type: PropType<string>;
};
zIndex: {
type: PropType<string>;
};
target: {
type: PropType<HTMLElement>;
};
immersive: {
type: PropType<boolean>;
} & {
default: boolean;
};
}>> & {
onFullscreenchange?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "fullscreenchange"[], "fullscreenchange", {
immersive: boolean;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {
            isFullscreen: boolean;
            enter: (targetEl: HTMLElement | undefined) => Promise<boolean | undefined>;
            exit: (targetEl: Document | HTMLElement | undefined) => Promise<boolean | undefined>;
            toggle: () => Promise<void>;
        }) => any;
    };
}) & Plugin_2;

export declare const LayHeader: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<ExtractPropTypes<    {}>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {}>>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {}>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {}>>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayIcon: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            prefix: string;
        }> & Omit<Readonly<ExtractPropTypes<    {
        type: {
        type: PropType<string>;
        };
        color: {
        type: PropType<string>;
        };
        prefix: {
        type: PropType<string>;
        } & {
        default: string;
        };
        size: {
        type: PropType<string>;
        };
        }>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "prefix">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        type: {
        type: PropType<string>;
        };
        color: {
        type: PropType<string>;
        };
        prefix: {
        type: PropType<string>;
        } & {
        default: string;
        };
        size: {
        type: PropType<string>;
        };
        }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
        prefix: string;
        }> & {
            beforeCreate?: (() => void) | (() => void)[] | undefined;
            created?: (() => void) | (() => void)[] | undefined;
            beforeMount?: (() => void) | (() => void)[] | undefined;
            mounted?: (() => void) | (() => void)[] | undefined;
            beforeUpdate?: (() => void) | (() => void)[] | undefined;
            updated?: (() => void) | (() => void)[] | undefined;
            activated?: (() => void) | (() => void)[] | undefined;
            deactivated?: (() => void) | (() => void)[] | undefined;
            beforeDestroy?: (() => void) | (() => void)[] | undefined;
            beforeUnmount?: (() => void) | (() => void)[] | undefined;
            destroyed?: (() => void) | (() => void)[] | undefined;
            unmounted?: (() => void) | (() => void)[] | undefined;
            renderTracked?: ((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[] | undefined;
            renderTriggered?: ((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[] | undefined;
            errorCaptured?: ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    type: {
    type: PropType<string>;
    };
    color: {
    type: PropType<string>;
    };
    prefix: {
    type: PropType<string>;
    } & {
    default: string;
    };
    size: {
    type: PropType<string>;
    };
    }>> & ShallowUnwrapRef<    {}> & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
type: {
type: PropType<string>;
};
color: {
type: PropType<string>;
};
prefix: {
type: PropType<string>;
} & {
default: string;
};
size: {
type: PropType<string>;
};
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
prefix: string;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & Plugin_2;

export declare const LayIconPicker: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
            page: boolean;
            modelValue: string;
        }> & Omit<Readonly<ExtractPropTypes<    {
        disabled: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        page: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        modelValue: {
        type: PropType<string>;
        } & {
        default: string;
        };
        contentClass: {
        type: PropType<string | object | (string | object)[]>;
        };
        contentStyle: {
        type: PropType<StyleValue>;
        };
        showSearch: {
        type: PropType<boolean>;
        };
        }>> & {
            onChange?: ((...args: any[]) => any) | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "disabled" | "page" | "modelValue">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "change" | "update:modelValue", ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        disabled: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        page: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        modelValue: {
        type: PropType<string>;
        } & {
        default: string;
        };
        contentClass: {
        type: PropType<string | object | (string | object)[]>;
        };
        contentStyle: {
        type: PropType<StyleValue>;
        };
        showSearch: {
        type: PropType<boolean>;
        };
        }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "update:modelValue")[], string, {
        disabled: boolean;
        page: boolean;
        modelValue: string;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    disabled: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    page: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    modelValue: {
    type: PropType<string>;
    } & {
    default: string;
    };
    contentClass: {
    type: PropType<string | object | (string | object)[]>;
    };
    contentStyle: {
    type: PropType<StyleValue>;
    };
    showSearch: {
    type: PropType<boolean>;
    };
    }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
disabled: {
type: PropType<boolean>;
} & {
default: boolean;
};
page: {
type: PropType<boolean>;
} & {
default: boolean;
};
modelValue: {
type: PropType<string>;
} & {
default: string;
};
contentClass: {
type: PropType<string | object | (string | object)[]>;
};
contentStyle: {
type: PropType<StyleValue>;
};
showSearch: {
type: PropType<boolean>;
};
}>> & {
onChange?: ((...args: any[]) => any) | undefined;
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", {
disabled: boolean;
page: boolean;
modelValue: string;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & Plugin_2;

export declare const LayInput: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            password: boolean;
            autofocus: boolean;
            disabled: boolean;
            size: InputSize;
            readonly: boolean;
            modelValue: string | number | string[];
            allowClear: boolean;
        }> & Omit<Readonly<ExtractPropTypes<    {
        type: {
        type: PropType<string>;
        };
        password: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        name: {
        type: PropType<string>;
        };
        autocomplete: {
        type: PropType<string>;
        };
        autofocus: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        disabled: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        size: {
        type: PropType<InputSize>;
        } & {
        default: string;
        };
        readonly: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        placeholder: {
        type: PropType<string>;
        };
        maxlength: {
        type: PropType<number>;
        };
        prefixIcon: {
        type: PropType<string>;
        };
        suffixIcon: {
        type: PropType<string>;
        };
        modelValue: {
        type: PropType<string | number | string[]>;
        } & {
        default: string;
        };
        allowClear: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        }>> & {
            onFocus?: ((evt: Event) => any) | undefined;
            onBlur?: ((evt: Event) => any) | undefined;
            onChange?: ((value: string) => any) | undefined;
            onInput?: ((value: string) => any) | undefined;
            "onUpdate:modelValue"?: ((value: string) => any) | undefined;
            onClear?: (() => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "password" | "autofocus" | "disabled" | "size" | "readonly" | "modelValue" | "allowClear">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: ((event: "input", value: string) => void) & ((event: "clear") => void) & ((event: "blur", evt: Event) => void) & ((event: "change", value: string) => void) & ((event: "focus", evt: Event) => void) & ((event: "update:modelValue", value: string) => void);
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        type: {
        type: PropType<string>;
        };
        password: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        name: {
        type: PropType<string>;
        };
        autocomplete: {
        type: PropType<string>;
        };
        autofocus: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        disabled: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        size: {
        type: PropType<InputSize>;
        } & {
        default: string;
        };
        readonly: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        placeholder: {
        type: PropType<string>;
        };
        maxlength: {
        type: PropType<number>;
        };
        prefixIcon: {
        type: PropType<string>;
        };
        suffixIcon: {
        type: PropType<string>;
        };
        modelValue: {
        type: PropType<string | number | string[]>;
        } & {
        default: string;
        };
        allowClear: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        }>> & {
        onFocus?: ((evt: Event) => any) | undefined;
        onBlur?: ((evt: Event) => any) | undefined;
        onChange?: ((value: string) => any) | undefined;
        onInput?: ((value: string) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        onClear?: (() => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        blur: (evt: Event) => void;
        } & {
        input: (value: string) => void;
        } & {
        "update:modelValue": (value: string) => void;
        } & {
        change: (value: string) => void;
        } & {
        focus: (evt: Event) => void;
        } & {
        clear: () => void;
        }, string, {
        password: boolean;
        autofocus: boolean;
        disabled: boolean;
        size: InputSize;
        readonly: boolean;
        modelValue: string | number | string[];
        allowClear: boolean;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    type: {
    type: PropType<string>;
    };
    password: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    name: {
    type: PropType<string>;
    };
    autocomplete: {
    type: PropType<string>;
    };
    autofocus: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    disabled: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    size: {
    type: PropType<InputSize>;
    } & {
    default: string;
    };
    readonly: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    placeholder: {
    type: PropType<string>;
    };
    maxlength: {
    type: PropType<number>;
    };
    prefixIcon: {
    type: PropType<string>;
    };
    suffixIcon: {
    type: PropType<string>;
    };
    modelValue: {
    type: PropType<string | number | string[]>;
    } & {
    default: string;
    };
    allowClear: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    }>> & {
        onFocus?: ((evt: Event) => any) | undefined;
        onBlur?: ((evt: Event) => any) | undefined;
        onChange?: ((value: string) => any) | undefined;
        onInput?: ((value: string) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        onClear?: (() => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
type: {
type: PropType<string>;
};
password: {
type: PropType<boolean>;
} & {
default: boolean;
};
name: {
type: PropType<string>;
};
autocomplete: {
type: PropType<string>;
};
autofocus: {
type: PropType<boolean>;
} & {
default: boolean;
};
disabled: {
type: PropType<boolean>;
} & {
default: boolean;
};
size: {
type: PropType<InputSize>;
} & {
default: string;
};
readonly: {
type: PropType<boolean>;
} & {
default: boolean;
};
placeholder: {
type: PropType<string>;
};
maxlength: {
type: PropType<number>;
};
prefixIcon: {
type: PropType<string>;
};
suffixIcon: {
type: PropType<string>;
};
modelValue: {
type: PropType<string | number | string[]>;
} & {
default: string;
};
allowClear: {
type: PropType<boolean>;
} & {
default: boolean;
};
}>> & {
onFocus?: ((evt: Event) => any) | undefined;
onBlur?: ((evt: Event) => any) | undefined;
onChange?: ((value: string) => any) | undefined;
onInput?: ((value: string) => any) | undefined;
"onUpdate:modelValue"?: ((value: string) => any) | undefined;
onClear?: (() => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
blur: (evt: Event) => void;
} & {
input: (value: string) => void;
} & {
"update:modelValue": (value: string) => void;
} & {
change: (value: string) => void;
} & {
focus: (evt: Event) => void;
} & {
clear: () => void;
}, string, {
password: boolean;
autofocus: boolean;
disabled: boolean;
size: InputSize;
readonly: boolean;
modelValue: string | number | string[];
allowClear: boolean;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        prepend: (_: {}) => any;
        prefix: (_: {}) => any;
        suffix: (_: {}) => any;
        append: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayInputNumber: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            max: number;
            disabled: boolean;
            size: InputNumberSize;
            step: number;
            min: number;
            modelValue: number;
            disabledInput: boolean;
        }> & Omit<Readonly<ExtractPropTypes<    {
        max: {
        type: PropType<number>;
        } & {
        default: number;
        };
        name: {
        type: PropType<string>;
        };
        position: {
        type: PropType<"right">;
        };
        disabled: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        size: {
        type: PropType<InputNumberSize>;
        } & {
        default: string;
        };
        step: {
        type: PropType<number>;
        } & {
        default: number;
        };
        min: {
        type: PropType<number>;
        } & {
        default: number;
        };
        modelValue: {
        type: PropType<number>;
        } & {
        default: number;
        };
        disabledInput: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        }>> & {
            onChange?: ((...args: any[]) => any) | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "max" | "disabled" | "size" | "step" | "min" | "modelValue" | "disabledInput">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "change" | "update:modelValue", ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        max: {
        type: PropType<number>;
        } & {
        default: number;
        };
        name: {
        type: PropType<string>;
        };
        position: {
        type: PropType<"right">;
        };
        disabled: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        size: {
        type: PropType<InputNumberSize>;
        } & {
        default: string;
        };
        step: {
        type: PropType<number>;
        } & {
        default: number;
        };
        min: {
        type: PropType<number>;
        } & {
        default: number;
        };
        modelValue: {
        type: PropType<number>;
        } & {
        default: number;
        };
        disabledInput: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "update:modelValue")[], string, {
        max: number;
        disabled: boolean;
        size: InputNumberSize;
        step: number;
        min: number;
        modelValue: number;
        disabledInput: boolean;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    max: {
    type: PropType<number>;
    } & {
    default: number;
    };
    name: {
    type: PropType<string>;
    };
    position: {
    type: PropType<"right">;
    };
    disabled: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    size: {
    type: PropType<InputNumberSize>;
    } & {
    default: string;
    };
    step: {
    type: PropType<number>;
    } & {
    default: number;
    };
    min: {
    type: PropType<number>;
    } & {
    default: number;
    };
    modelValue: {
    type: PropType<number>;
    } & {
    default: number;
    };
    disabledInput: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
max: {
type: PropType<number>;
} & {
default: number;
};
name: {
type: PropType<string>;
};
position: {
type: PropType<"right">;
};
disabled: {
type: PropType<boolean>;
} & {
default: boolean;
};
size: {
type: PropType<InputNumberSize>;
} & {
default: string;
};
step: {
type: PropType<number>;
} & {
default: number;
};
min: {
type: PropType<number>;
} & {
default: number;
};
modelValue: {
type: PropType<number>;
} & {
default: number;
};
disabledInput: {
type: PropType<boolean>;
} & {
default: boolean;
};
}>> & {
onChange?: ((...args: any[]) => any) | undefined;
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", {
max: number;
disabled: boolean;
size: InputNumberSize;
step: number;
min: number;
modelValue: number;
disabledInput: boolean;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & Plugin_2;

export declare const LayLayout: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            isVertical: boolean;
        }> & Omit<Readonly<ExtractPropTypes<    {
        isVertical: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        }>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "isVertical">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        isVertical: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
        isVertical: boolean;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    isVertical: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    }>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
isVertical: {
type: PropType<boolean>;
} & {
default: boolean;
};
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
isVertical: boolean;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayLine: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            offset: string;
            borderStyle: string;
            borderWidth: string;
            direction: "horizontal" | "vertical";
            margin: string;
            contentPosition: "center" | "left" | "right";
        }> & Omit<Readonly<ExtractPropTypes<    {
        offset: {
        type: PropType<string>;
        } & {
        default: string;
        };
        borderStyle: {
        type: PropType<string>;
        } & {
        default: string;
        };
        borderWidth: {
        type: PropType<string>;
        } & {
        default: string;
        };
        direction: {
        type: PropType<"horizontal" | "vertical">;
        } & {
        default: string;
        };
        margin: {
        type: PropType<string>;
        } & {
        default: string;
        };
        theme: {
        type: PropType<string>;
        };
        contentPosition: {
        type: PropType<"center" | "left" | "right">;
        } & {
        default: string;
        };
        }>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "offset" | "borderStyle" | "borderWidth" | "direction" | "margin" | "contentPosition">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        offset: {
        type: PropType<string>;
        } & {
        default: string;
        };
        borderStyle: {
        type: PropType<string>;
        } & {
        default: string;
        };
        borderWidth: {
        type: PropType<string>;
        } & {
        default: string;
        };
        direction: {
        type: PropType<"horizontal" | "vertical">;
        } & {
        default: string;
        };
        margin: {
        type: PropType<string>;
        } & {
        default: string;
        };
        theme: {
        type: PropType<string>;
        };
        contentPosition: {
        type: PropType<"center" | "left" | "right">;
        } & {
        default: string;
        };
        }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
        offset: string;
        borderStyle: string;
        borderWidth: string;
        direction: "horizontal" | "vertical";
        margin: string;
        contentPosition: "center" | "left" | "right";
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    offset: {
    type: PropType<string>;
    } & {
    default: string;
    };
    borderStyle: {
    type: PropType<string>;
    } & {
    default: string;
    };
    borderWidth: {
    type: PropType<string>;
    } & {
    default: string;
    };
    direction: {
    type: PropType<"horizontal" | "vertical">;
    } & {
    default: string;
    };
    margin: {
    type: PropType<string>;
    } & {
    default: string;
    };
    theme: {
    type: PropType<string>;
    };
    contentPosition: {
    type: PropType<"center" | "left" | "right">;
    } & {
    default: string;
    };
    }>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
offset: {
type: PropType<string>;
} & {
default: string;
};
borderStyle: {
type: PropType<string>;
} & {
default: string;
};
borderWidth: {
type: PropType<string>;
} & {
default: string;
};
direction: {
type: PropType<"horizontal" | "vertical">;
} & {
default: string;
};
margin: {
type: PropType<string>;
} & {
default: string;
};
theme: {
type: PropType<string>;
};
contentPosition: {
type: PropType<"center" | "left" | "right">;
} & {
default: string;
};
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
offset: string;
borderStyle: string;
borderWidth: string;
direction: "horizontal" | "vertical";
margin: string;
contentPosition: "center" | "left" | "right";
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayLogo: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<ExtractPropTypes<    {}>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {}>>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {}>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {}>>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayMenu: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            collapse: string | boolean;
            tree: boolean;
            theme: string;
            collapseTransition: string | boolean;
            level: string | boolean;
            selectedKey: string;
            openKeys: string[];
            inverted: string | boolean;
            indent: string | boolean;
        }> & Omit<Readonly<ExtractPropTypes<    {
        collapse: {
        type: PropType<string | boolean>;
        } & {
        default: boolean;
        };
        tree: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        theme: {
        type: PropType<string>;
        } & {
        default: string;
        };
        collapseTransition: {
        type: PropType<string | boolean>;
        } & {
        default: boolean;
        };
        level: {
        type: PropType<string | boolean>;
        } & {
        default: boolean;
        };
        selectedKey: {
        type: PropType<string>;
        } & {
        default: string;
        };
        openKeys: {
        type: PropType<string[]>;
        } & {
        default: () => never[];
        };
        inverted: {
        type: PropType<string | boolean>;
        } & {
        default: boolean;
        };
        indent: {
        type: PropType<string | boolean>;
        } & {
        default: boolean;
        };
        }>> & {
            "onUpdate:selectedKey"?: ((...args: any[]) => any) | undefined;
            "onUpdate:openKeys"?: ((...args: any[]) => any) | undefined;
            onChangeSelectedKey?: ((...args: any[]) => any) | undefined;
            onChangeOpenKeys?: ((...args: any[]) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "collapse" | "tree" | "theme" | "collapseTransition" | "level" | "selectedKey" | "openKeys" | "inverted" | "indent">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "update:selectedKey" | "update:openKeys" | "changeSelectedKey" | "changeOpenKeys", ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        collapse: {
        type: PropType<string | boolean>;
        } & {
        default: boolean;
        };
        tree: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        theme: {
        type: PropType<string>;
        } & {
        default: string;
        };
        collapseTransition: {
        type: PropType<string | boolean>;
        } & {
        default: boolean;
        };
        level: {
        type: PropType<string | boolean>;
        } & {
        default: boolean;
        };
        selectedKey: {
        type: PropType<string>;
        } & {
        default: string;
        };
        openKeys: {
        type: PropType<string[]>;
        } & {
        default: () => never[];
        };
        inverted: {
        type: PropType<string | boolean>;
        } & {
        default: boolean;
        };
        indent: {
        type: PropType<string | boolean>;
        } & {
        default: boolean;
        };
        }>> & {
        "onUpdate:selectedKey"?: ((...args: any[]) => any) | undefined;
        "onUpdate:openKeys"?: ((...args: any[]) => any) | undefined;
        onChangeSelectedKey?: ((...args: any[]) => any) | undefined;
        onChangeOpenKeys?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("update:selectedKey" | "update:openKeys" | "changeSelectedKey" | "changeOpenKeys")[], string, {
        collapse: string | boolean;
        tree: boolean;
        theme: string;
        collapseTransition: string | boolean;
        level: string | boolean;
        selectedKey: string;
        openKeys: string[];
        inverted: string | boolean;
        indent: string | boolean;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    collapse: {
    type: PropType<string | boolean>;
    } & {
    default: boolean;
    };
    tree: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    theme: {
    type: PropType<string>;
    } & {
    default: string;
    };
    collapseTransition: {
    type: PropType<string | boolean>;
    } & {
    default: boolean;
    };
    level: {
    type: PropType<string | boolean>;
    } & {
    default: boolean;
    };
    selectedKey: {
    type: PropType<string>;
    } & {
    default: string;
    };
    openKeys: {
    type: PropType<string[]>;
    } & {
    default: () => never[];
    };
    inverted: {
    type: PropType<string | boolean>;
    } & {
    default: boolean;
    };
    indent: {
    type: PropType<string | boolean>;
    } & {
    default: boolean;
    };
    }>> & {
        "onUpdate:selectedKey"?: ((...args: any[]) => any) | undefined;
        "onUpdate:openKeys"?: ((...args: any[]) => any) | undefined;
        onChangeSelectedKey?: ((...args: any[]) => any) | undefined;
        onChangeOpenKeys?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
collapse: {
type: PropType<string | boolean>;
} & {
default: boolean;
};
tree: {
type: PropType<boolean>;
} & {
default: boolean;
};
theme: {
type: PropType<string>;
} & {
default: string;
};
collapseTransition: {
type: PropType<string | boolean>;
} & {
default: boolean;
};
level: {
type: PropType<string | boolean>;
} & {
default: boolean;
};
selectedKey: {
type: PropType<string>;
} & {
default: string;
};
openKeys: {
type: PropType<string[]>;
} & {
default: () => never[];
};
inverted: {
type: PropType<string | boolean>;
} & {
default: boolean;
};
indent: {
type: PropType<string | boolean>;
} & {
default: boolean;
};
}>> & {
"onUpdate:selectedKey"?: ((...args: any[]) => any) | undefined;
"onUpdate:openKeys"?: ((...args: any[]) => any) | undefined;
onChangeSelectedKey?: ((...args: any[]) => any) | undefined;
onChangeOpenKeys?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("update:selectedKey" | "update:openKeys" | "changeSelectedKey" | "changeOpenKeys")[], "update:selectedKey" | "update:openKeys" | "changeSelectedKey" | "changeOpenKeys", {
collapse: string | boolean;
tree: boolean;
theme: string;
collapseTransition: string | boolean;
level: string | boolean;
selectedKey: string;
openKeys: string[];
inverted: string | boolean;
indent: string | boolean;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayMenuItem: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<ExtractPropTypes<    {
        id: {
        type: PropType<string>;
        required: true;
        };
        title: {
        type: PropType<string>;
        };
        }>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        id: {
        type: PropType<string>;
        required: true;
        };
        title: {
        type: PropType<string>;
        };
        }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    id: {
    type: PropType<string>;
    required: true;
    };
    title: {
    type: PropType<string>;
    };
    }>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
id: {
type: PropType<string>;
required: true;
};
title: {
type: PropType<string>;
};
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        icon: (_: {}) => any;
        title: (_: {}) => any;
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayNoticeBar: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            height: string | number;
            background: string;
            color: string;
            text: string;
            size: string | number;
            speed: number;
            delay: number;
            textlist: any[];
            scrollable: boolean;
        }> & Omit<Readonly<ExtractPropTypes<    {
        height: {
        type: PropType<string | number>;
        } & {
        default: number;
        };
        background: {
        type: PropType<string>;
        } & {
        default: () => "var(--color-warning-light-9)";
        };
        color: {
        type: PropType<string>;
        } & {
        default: () => "var(--color-warning)";
        };
        text: {
        type: PropType<string>;
        } & {
        default: string;
        };
        size: {
        type: PropType<string | number>;
        } & {
        default: number;
        };
        mode: {
        type: PropType<string>;
        };
        speed: {
        type: PropType<number>;
        } & {
        default: number;
        };
        delay: {
        type: PropType<number>;
        } & {
        default: number;
        };
        textlist: {
        type: PropType<any[]>;
        } & {
        default: () => never[];
        };
        scrollable: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        leftIcon: {
        type: PropType<string>;
        };
        rightIcon: {
        type: PropType<string>;
        };
        }>> & {
            onLink?: ((...args: any[]) => any) | undefined;
            onClose?: ((...args: any[]) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "height" | "background" | "color" | "text" | "size" | "speed" | "delay" | "textlist" | "scrollable">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "link" | "close", ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        height: {
        type: PropType<string | number>;
        } & {
        default: number;
        };
        background: {
        type: PropType<string>;
        } & {
        default: () => "var(--color-warning-light-9)";
        };
        color: {
        type: PropType<string>;
        } & {
        default: () => "var(--color-warning)";
        };
        text: {
        type: PropType<string>;
        } & {
        default: string;
        };
        size: {
        type: PropType<string | number>;
        } & {
        default: number;
        };
        mode: {
        type: PropType<string>;
        };
        speed: {
        type: PropType<number>;
        } & {
        default: number;
        };
        delay: {
        type: PropType<number>;
        } & {
        default: number;
        };
        textlist: {
        type: PropType<any[]>;
        } & {
        default: () => never[];
        };
        scrollable: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        leftIcon: {
        type: PropType<string>;
        };
        rightIcon: {
        type: PropType<string>;
        };
        }>> & {
        onLink?: ((...args: any[]) => any) | undefined;
        onClose?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("link" | "close")[], string, {
        height: string | number;
        background: string;
        color: string;
        text: string;
        size: string | number;
        speed: number;
        delay: number;
        textlist: any[];
        scrollable: boolean;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    height: {
    type: PropType<string | number>;
    } & {
    default: number;
    };
    background: {
    type: PropType<string>;
    } & {
    default: () => "var(--color-warning-light-9)";
    };
    color: {
    type: PropType<string>;
    } & {
    default: () => "var(--color-warning)";
    };
    text: {
    type: PropType<string>;
    } & {
    default: string;
    };
    size: {
    type: PropType<string | number>;
    } & {
    default: number;
    };
    mode: {
    type: PropType<string>;
    };
    speed: {
    type: PropType<number>;
    } & {
    default: number;
    };
    delay: {
    type: PropType<number>;
    } & {
    default: number;
    };
    textlist: {
    type: PropType<any[]>;
    } & {
    default: () => never[];
    };
    scrollable: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    leftIcon: {
    type: PropType<string>;
    };
    rightIcon: {
    type: PropType<string>;
    };
    }>> & {
        onLink?: ((...args: any[]) => any) | undefined;
        onClose?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
height: {
type: PropType<string | number>;
} & {
default: number;
};
background: {
type: PropType<string>;
} & {
default: () => "var(--color-warning-light-9)";
};
color: {
type: PropType<string>;
} & {
default: () => "var(--color-warning)";
};
text: {
type: PropType<string>;
} & {
default: string;
};
size: {
type: PropType<string | number>;
} & {
default: number;
};
mode: {
type: PropType<string>;
};
speed: {
type: PropType<number>;
} & {
default: number;
};
delay: {
type: PropType<number>;
} & {
default: number;
};
textlist: {
type: PropType<any[]>;
} & {
default: () => never[];
};
scrollable: {
type: PropType<boolean>;
} & {
default: boolean;
};
leftIcon: {
type: PropType<string>;
};
rightIcon: {
type: PropType<string>;
};
}>> & {
onLink?: ((...args: any[]) => any) | undefined;
onClose?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("link" | "close")[], "link" | "close", {
height: string | number;
background: string;
color: string;
text: string;
size: string | number;
speed: number;
delay: number;
textlist: any[];
scrollable: boolean;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & Plugin_2;

export declare const LayPage: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            theme: string;
            modelValue: number;
            limit: number;
            showPage: boolean;
            showSkip: boolean;
            showCount: boolean;
            showLimit: boolean;
            showInput: boolean;
            showRefresh: boolean;
            pages: number;
            limits: number[];
        }> & Omit<Readonly<ExtractPropTypes<    {
        total: {
        type: PropType<number>;
        required: true;
        };
        theme: {
        type: PropType<string>;
        } & {
        default: string;
        };
        modelValue: {
        type: PropType<number>;
        } & {
        default: number;
        };
        limit: {
        type: PropType<number>;
        required: true;
        } & {
        default: number;
        };
        showPage: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        showSkip: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        showCount: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        showLimit: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        showInput: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        showRefresh: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        pages: {
        type: PropType<number>;
        } & {
        default: number;
        };
        limits: {
        type: PropType<number[]>;
        } & {
        default: () => number[];
        };
        }>> & {
            onChange?: ((...args: any[]) => any) | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
            "onUpdate:limit"?: ((...args: any[]) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "theme" | "modelValue" | "limit" | "showPage" | "showSkip" | "showCount" | "showLimit" | "showInput" | "showRefresh" | "pages" | "limits">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "change" | "update:modelValue" | "update:limit", ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        total: {
        type: PropType<number>;
        required: true;
        };
        theme: {
        type: PropType<string>;
        } & {
        default: string;
        };
        modelValue: {
        type: PropType<number>;
        } & {
        default: number;
        };
        limit: {
        type: PropType<number>;
        required: true;
        } & {
        default: number;
        };
        showPage: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        showSkip: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        showCount: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        showLimit: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        showInput: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        showRefresh: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        pages: {
        type: PropType<number>;
        } & {
        default: number;
        };
        limits: {
        type: PropType<number[]>;
        } & {
        default: () => number[];
        };
        }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        "onUpdate:limit"?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "update:modelValue" | "update:limit")[], string, {
        theme: string;
        modelValue: number;
        limit: number;
        showPage: boolean;
        showSkip: boolean;
        showCount: boolean;
        showLimit: boolean;
        showInput: boolean;
        showRefresh: boolean;
        pages: number;
        limits: number[];
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    total: {
    type: PropType<number>;
    required: true;
    };
    theme: {
    type: PropType<string>;
    } & {
    default: string;
    };
    modelValue: {
    type: PropType<number>;
    } & {
    default: number;
    };
    limit: {
    type: PropType<number>;
    required: true;
    } & {
    default: number;
    };
    showPage: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    showSkip: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    showCount: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    showLimit: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    showInput: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    showRefresh: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    pages: {
    type: PropType<number>;
    } & {
    default: number;
    };
    limits: {
    type: PropType<number[]>;
    } & {
    default: () => number[];
    };
    }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        "onUpdate:limit"?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
total: {
type: PropType<number>;
required: true;
};
theme: {
type: PropType<string>;
} & {
default: string;
};
modelValue: {
type: PropType<number>;
} & {
default: number;
};
limit: {
type: PropType<number>;
required: true;
} & {
default: number;
};
showPage: {
type: PropType<boolean>;
} & {
default: boolean;
};
showSkip: {
type: PropType<boolean>;
} & {
default: boolean;
};
showCount: {
type: PropType<boolean>;
} & {
default: boolean;
};
showLimit: {
type: PropType<boolean>;
} & {
default: boolean;
};
showInput: {
type: PropType<boolean>;
} & {
default: boolean;
};
showRefresh: {
type: PropType<boolean>;
} & {
default: boolean;
};
pages: {
type: PropType<number>;
} & {
default: number;
};
limits: {
type: PropType<number[]>;
} & {
default: () => number[];
};
}>> & {
onChange?: ((...args: any[]) => any) | undefined;
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
"onUpdate:limit"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "update:modelValue" | "update:limit")[], "change" | "update:modelValue" | "update:limit", {
theme: string;
modelValue: number;
limit: number;
showPage: boolean;
showSkip: boolean;
showCount: boolean;
showLimit: boolean;
showInput: boolean;
showRefresh: boolean;
pages: number;
limits: number[];
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        prev: (_: {}) => any;
        next: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayPageHeader: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            content: string;
            backText: string;
        }> & Omit<Readonly<ExtractPropTypes<    {
        content: {
        type: PropType<string>;
        } & {
        default: string;
        };
        backText: {
        type: PropType<string>;
        } & {
        default: string;
        };
        }>> & {
            onBack?: ((...args: any[]) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "content" | "backText">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "back", ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        content: {
        type: PropType<string>;
        } & {
        default: string;
        };
        backText: {
        type: PropType<string>;
        } & {
        default: string;
        };
        }>> & {
        onBack?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "back"[], string, {
        content: string;
        backText: string;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    content: {
    type: PropType<string>;
    } & {
    default: string;
    };
    backText: {
    type: PropType<string>;
    } & {
    default: string;
    };
    }>> & {
        onBack?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
content: {
type: PropType<string>;
} & {
default: string;
};
backText: {
type: PropType<string>;
} & {
default: string;
};
}>> & {
onBack?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "back"[], "back", {
content: string;
backText: string;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayPanel: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            shadow: PanelShadow;
        }> & Omit<Readonly<ExtractPropTypes<    {
        shadow: {
        type: PropType<PanelShadow>;
        } & {
        default: string;
        };
        }>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "shadow">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        shadow: {
        type: PropType<PanelShadow>;
        } & {
        default: string;
        };
        }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
        shadow: PanelShadow;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    shadow: {
    type: PropType<PanelShadow>;
    } & {
    default: string;
    };
    }>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
shadow: {
type: PropType<PanelShadow>;
} & {
default: string;
};
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
shadow: PanelShadow;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayProgress: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            circle: boolean;
            circleSize: number;
            circleWidth: number;
        }> & Omit<Readonly<ExtractPropTypes<    {
        color: {
        type: PropType<string>;
        };
        circle: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        text: {
        type: PropType<string>;
        };
        size: {
        type: PropType<string>;
        };
        percent: {
        type: PropType<string | number>;
        required: true;
        };
        theme: {
        type: PropType<string>;
        };
        showText: {
        type: PropType<boolean>;
        };
        circleSize: {
        type: PropType<number>;
        } & {
        default: number;
        };
        circleWidth: {
        type: PropType<number>;
        } & {
        default: number;
        };
        }>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "circle" | "circleSize" | "circleWidth">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        color: {
        type: PropType<string>;
        };
        circle: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        text: {
        type: PropType<string>;
        };
        size: {
        type: PropType<string>;
        };
        percent: {
        type: PropType<string | number>;
        required: true;
        };
        theme: {
        type: PropType<string>;
        };
        showText: {
        type: PropType<boolean>;
        };
        circleSize: {
        type: PropType<number>;
        } & {
        default: number;
        };
        circleWidth: {
        type: PropType<number>;
        } & {
        default: number;
        };
        }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
        circle: boolean;
        circleSize: number;
        circleWidth: number;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    color: {
    type: PropType<string>;
    };
    circle: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    text: {
    type: PropType<string>;
    };
    size: {
    type: PropType<string>;
    };
    percent: {
    type: PropType<string | number>;
    required: true;
    };
    theme: {
    type: PropType<string>;
    };
    showText: {
    type: PropType<boolean>;
    };
    circleSize: {
    type: PropType<number>;
    } & {
    default: number;
    };
    circleWidth: {
    type: PropType<number>;
    } & {
    default: number;
    };
    }>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
color: {
type: PropType<string>;
};
circle: {
type: PropType<boolean>;
} & {
default: boolean;
};
text: {
type: PropType<string>;
};
size: {
type: PropType<string>;
};
percent: {
type: PropType<string | number>;
required: true;
};
theme: {
type: PropType<string>;
};
showText: {
type: PropType<boolean>;
};
circleSize: {
type: PropType<number>;
} & {
default: number;
};
circleWidth: {
type: PropType<number>;
} & {
default: number;
};
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
circle: boolean;
circleSize: number;
circleWidth: number;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & Plugin_2;

export declare const LayQuote: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<ExtractPropTypes<    {
        type: {
        type: PropType<string>;
        };
        }>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        type: {
        type: PropType<string>;
        };
        }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    type: {
    type: PropType<string>;
    };
    }>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
type: {
type: PropType<string>;
};
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayRadio: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            size: RadioSize;
        }> & Omit<Readonly<ExtractPropTypes<    {
        name: {
        type: PropType<string>;
        };
        value: {
        type: PropType<string | number | boolean>;
        };
        label: {
        type: PropType<string>;
        };
        disabled: {
        type: PropType<boolean>;
        };
        size: {
        type: PropType<RadioSize>;
        } & {
        default: string;
        };
        modelValue: {
        type: PropType<string | number | boolean>;
        };
        }>> & {
            onChange?: ((...args: any[]) => any) | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "size">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "change" | "update:modelValue", ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        name: {
        type: PropType<string>;
        };
        value: {
        type: PropType<string | number | boolean>;
        };
        label: {
        type: PropType<string>;
        };
        disabled: {
        type: PropType<boolean>;
        };
        size: {
        type: PropType<RadioSize>;
        } & {
        default: string;
        };
        modelValue: {
        type: PropType<string | number | boolean>;
        };
        }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "update:modelValue")[], string, {
        size: RadioSize;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    name: {
    type: PropType<string>;
    };
    value: {
    type: PropType<string | number | boolean>;
    };
    label: {
    type: PropType<string>;
    };
    disabled: {
    type: PropType<boolean>;
    };
    size: {
    type: PropType<RadioSize>;
    } & {
    default: string;
    };
    modelValue: {
    type: PropType<string | number | boolean>;
    };
    }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
name: {
type: PropType<string>;
};
value: {
type: PropType<string | number | boolean>;
};
label: {
type: PropType<string>;
};
disabled: {
type: PropType<boolean>;
};
size: {
type: PropType<RadioSize>;
} & {
default: string;
};
modelValue: {
type: PropType<string | number | boolean>;
};
}>> & {
onChange?: ((...args: any[]) => any) | undefined;
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", {
size: RadioSize;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayRadioGroup: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
        }> & Omit<Readonly<ExtractPropTypes<    {
        name: {
        type: PropType<string>;
        };
        disabled: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        modelValue: {
        type: PropType<string | number | boolean>;
        };
        }>> & {
            onChange?: ((...args: any[]) => any) | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "disabled">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "change" | "update:modelValue", ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        name: {
        type: PropType<string>;
        };
        disabled: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        modelValue: {
        type: PropType<string | number | boolean>;
        };
        }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "update:modelValue")[], string, {
        disabled: boolean;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    name: {
    type: PropType<string>;
    };
    disabled: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    modelValue: {
    type: PropType<string | number | boolean>;
    };
    }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
name: {
type: PropType<string>;
};
disabled: {
type: PropType<boolean>;
} & {
default: boolean;
};
modelValue: {
type: PropType<string | number | boolean>;
};
}>> & {
onChange?: ((...args: any[]) => any) | undefined;
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", {
disabled: boolean;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayRate: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            length: number;
            text: boolean;
            readonly: string | boolean;
            isBlock: boolean;
            modelValue: number;
            allowClear: boolean;
            half: boolean;
            clearIcon: string;
            icons: string[];
        }> & Omit<Readonly<ExtractPropTypes<    {
        length: {
        type: PropType<number>;
        } & {
        default: number;
        };
        text: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        readonly: {
        type: PropType<string | boolean>;
        } & {
        default: boolean;
        };
        isBlock: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        theme: {
        type: PropType<string>;
        };
        modelValue: {
        type: PropType<number>;
        required: true;
        } & {
        default: number;
        };
        allowClear: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        half: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        clearIcon: {
        type: PropType<string>;
        } & {
        default: string;
        };
        icons: {
        type: PropType<string[]>;
        } & {
        default: () => string[];
        };
        }>> & {
            onSelect?: ((...args: any[]) => any) | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
            onClear?: ((...args: any[]) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "length" | "text" | "readonly" | "isBlock" | "modelValue" | "allowClear" | "half" | "clearIcon" | "icons">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "select" | "clear" | "update:modelValue", ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        length: {
        type: PropType<number>;
        } & {
        default: number;
        };
        text: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        readonly: {
        type: PropType<string | boolean>;
        } & {
        default: boolean;
        };
        isBlock: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        theme: {
        type: PropType<string>;
        };
        modelValue: {
        type: PropType<number>;
        required: true;
        } & {
        default: number;
        };
        allowClear: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        half: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        clearIcon: {
        type: PropType<string>;
        } & {
        default: string;
        };
        icons: {
        type: PropType<string[]>;
        } & {
        default: () => string[];
        };
        }>> & {
        onSelect?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onClear?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("select" | "clear" | "update:modelValue")[], string, {
        length: number;
        text: boolean;
        readonly: string | boolean;
        isBlock: boolean;
        modelValue: number;
        allowClear: boolean;
        half: boolean;
        clearIcon: string;
        icons: string[];
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    length: {
    type: PropType<number>;
    } & {
    default: number;
    };
    text: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    readonly: {
    type: PropType<string | boolean>;
    } & {
    default: boolean;
    };
    isBlock: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    theme: {
    type: PropType<string>;
    };
    modelValue: {
    type: PropType<number>;
    required: true;
    } & {
    default: number;
    };
    allowClear: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    half: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    clearIcon: {
    type: PropType<string>;
    } & {
    default: string;
    };
    icons: {
    type: PropType<string[]>;
    } & {
    default: () => string[];
    };
    }>> & {
        onSelect?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onClear?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
length: {
type: PropType<number>;
} & {
default: number;
};
text: {
type: PropType<boolean>;
} & {
default: boolean;
};
readonly: {
type: PropType<string | boolean>;
} & {
default: boolean;
};
isBlock: {
type: PropType<boolean>;
} & {
default: boolean;
};
theme: {
type: PropType<string>;
};
modelValue: {
type: PropType<number>;
required: true;
} & {
default: number;
};
allowClear: {
type: PropType<boolean>;
} & {
default: boolean;
};
half: {
type: PropType<boolean>;
} & {
default: boolean;
};
clearIcon: {
type: PropType<string>;
} & {
default: string;
};
icons: {
type: PropType<string[]>;
} & {
default: () => string[];
};
}>> & {
onSelect?: ((...args: any[]) => any) | undefined;
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
onClear?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("select" | "clear" | "update:modelValue")[], "clear" | "select" | "update:modelValue", {
length: number;
text: boolean;
readonly: string | boolean;
isBlock: boolean;
modelValue: number;
allowClear: boolean;
half: boolean;
clearIcon: string;
icons: string[];
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {
            value: number;
        }) => any;
    };
}) & Plugin_2;

export declare const LayResult: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            title: string;
            status: "success" | "failure";
            describe: string;
        }> & Omit<Readonly<ExtractPropTypes<    {
        title: {
        type: PropType<string>;
        } & {
        default: string;
        };
        status: {
        type: PropType<"success" | "failure">;
        } & {
        default: string;
        };
        describe: {
        type: PropType<string>;
        } & {
        default: string;
        };
        }>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "title" | "status" | "describe">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        title: {
        type: PropType<string>;
        } & {
        default: string;
        };
        status: {
        type: PropType<"success" | "failure">;
        } & {
        default: string;
        };
        describe: {
        type: PropType<string>;
        } & {
        default: string;
        };
        }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
        title: string;
        status: "success" | "failure";
        describe: string;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    title: {
    type: PropType<string>;
    } & {
    default: string;
    };
    status: {
    type: PropType<"success" | "failure">;
    } & {
    default: string;
    };
    describe: {
    type: PropType<string>;
    } & {
    default: string;
    };
    }>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
title: {
type: PropType<string>;
} & {
default: string;
};
status: {
type: PropType<"success" | "failure">;
} & {
default: string;
};
describe: {
type: PropType<string>;
} & {
default: string;
};
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
title: string;
status: "success" | "failure";
describe: string;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        content: (_: {}) => any;
        extra: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayRipple: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            type: RippleType;
            center: boolean;
            borderRadius: string;
            color: string;
            trigger: RippleTrigger;
            spreadWidth: string;
        }> & Omit<Readonly<ExtractPropTypes<    {
        type: {
        type: PropType<RippleType>;
        } & {
        default: string;
        };
        center: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        borderRadius: {
        type: PropType<string>;
        } & {
        default: string;
        };
        color: {
        type: PropType<string>;
        } & {
        default: string;
        };
        trigger: {
        type: PropType<RippleTrigger>;
        } & {
        default: string;
        };
        spreadWidth: {
        type: PropType<string>;
        } & {
        default: string;
        };
        spreadSize: {
        type: PropType<string>;
        };
        }>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "type" | "center" | "borderRadius" | "color" | "trigger" | "spreadWidth">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        type: {
        type: PropType<RippleType>;
        } & {
        default: string;
        };
        center: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        borderRadius: {
        type: PropType<string>;
        } & {
        default: string;
        };
        color: {
        type: PropType<string>;
        } & {
        default: string;
        };
        trigger: {
        type: PropType<RippleTrigger>;
        } & {
        default: string;
        };
        spreadWidth: {
        type: PropType<string>;
        } & {
        default: string;
        };
        spreadSize: {
        type: PropType<string>;
        };
        }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
        type: RippleType;
        center: boolean;
        borderRadius: string;
        color: string;
        trigger: RippleTrigger;
        spreadWidth: string;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    type: {
    type: PropType<RippleType>;
    } & {
    default: string;
    };
    center: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    borderRadius: {
    type: PropType<string>;
    } & {
    default: string;
    };
    color: {
    type: PropType<string>;
    } & {
    default: string;
    };
    trigger: {
    type: PropType<RippleTrigger>;
    } & {
    default: string;
    };
    spreadWidth: {
    type: PropType<string>;
    } & {
    default: string;
    };
    spreadSize: {
    type: PropType<string>;
    };
    }>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
type: {
type: PropType<RippleType>;
} & {
default: string;
};
center: {
type: PropType<boolean>;
} & {
default: boolean;
};
borderRadius: {
type: PropType<string>;
} & {
default: string;
};
color: {
type: PropType<string>;
} & {
default: string;
};
trigger: {
type: PropType<RippleTrigger>;
} & {
default: string;
};
spreadWidth: {
type: PropType<string>;
} & {
default: string;
};
spreadSize: {
type: PropType<string>;
};
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
type: RippleType;
center: boolean;
borderRadius: string;
color: string;
trigger: RippleTrigger;
spreadWidth: string;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayRow: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<ExtractPropTypes<    {
        space: {
        type: PropType<string | number>;
        };
        }>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        space: {
        type: PropType<string | number>;
        };
        }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    space: {
    type: PropType<string | number>;
    };
    }>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
space: {
type: PropType<string | number>;
};
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayScroll: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            height: string;
            trackColor: string;
            thumbColor: string;
            thumbWidth: number;
        }> & Omit<Readonly<ExtractPropTypes<    {
        height: {
        type: PropType<string>;
        } & {
        default: string;
        };
        trackColor: {
        type: PropType<string>;
        } & {
        default: string;
        };
        thumbColor: {
        type: PropType<string>;
        } & {
        default: string;
        };
        thumbWidth: {
        type: PropType<number>;
        } & {
        default: number;
        };
        }>> & {
            onArrive?: ((...args: any[]) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "height" | "trackColor" | "thumbColor" | "thumbWidth">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "arrive", ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        height: {
        type: PropType<string>;
        } & {
        default: string;
        };
        trackColor: {
        type: PropType<string>;
        } & {
        default: string;
        };
        thumbColor: {
        type: PropType<string>;
        } & {
        default: string;
        };
        thumbWidth: {
        type: PropType<number>;
        } & {
        default: number;
        };
        }>> & {
        onArrive?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "arrive"[], string, {
        height: string;
        trackColor: string;
        thumbColor: string;
        thumbWidth: number;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    height: {
    type: PropType<string>;
    } & {
    default: string;
    };
    trackColor: {
    type: PropType<string>;
    } & {
    default: string;
    };
    thumbColor: {
    type: PropType<string>;
    } & {
    default: string;
    };
    thumbWidth: {
    type: PropType<number>;
    } & {
    default: number;
    };
    }>> & {
        onArrive?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
height: {
type: PropType<string>;
} & {
default: string;
};
trackColor: {
type: PropType<string>;
} & {
default: string;
};
thumbColor: {
type: PropType<string>;
} & {
default: string;
};
thumbWidth: {
type: PropType<number>;
} & {
default: number;
};
}>> & {
onArrive?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "arrive"[], "arrive", {
height: string;
trackColor: string;
thumbColor: string;
thumbWidth: number;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LaySelect: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
            multiple: boolean;
            size: SelectSize;
            modelValue: any;
            allowClear: boolean;
            showSearch: boolean;
            minCollapsedNum: number;
            collapseTagsTooltip: boolean;
        }> & Omit<Readonly<ExtractPropTypes<    {
        name: {
        type: PropType<string>;
        };
        disabled: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        multiple: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        size: {
        type: PropType<SelectSize>;
        } & {
        default: string;
        };
        placeholder: {
        type: PropType<string>;
        };
        modelValue: {
        type: PropType<any>;
        } & {
        default: null;
        };
        allowClear: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        contentClass: {
        type: PropType<string | object | (string | object)[]>;
        };
        contentStyle: {
        type: PropType<StyleValue>;
        };
        showSearch: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        minCollapsedNum: {
        type: PropType<number>;
        } & {
        default: number;
        };
        collapseTagsTooltip: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        searchPlaceholder: {
        type: PropType<string>;
        };
        items: {
        type: PropType<SelectOptionProps[]>;
        };
        }>> & {
            onChange?: ((value: string) => any) | undefined;
            "onUpdate:modelValue"?: ((value: string) => any) | undefined;
            onSearch?: ((value: string) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "disabled" | "multiple" | "size" | "modelValue" | "allowClear" | "showSearch" | "minCollapsedNum" | "collapseTagsTooltip">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: ((event: "search", value: string) => void) & ((event: "change", value: string) => void) & ((event: "update:modelValue", value: string) => void);
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        name: {
        type: PropType<string>;
        };
        disabled: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        multiple: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        size: {
        type: PropType<SelectSize>;
        } & {
        default: string;
        };
        placeholder: {
        type: PropType<string>;
        };
        modelValue: {
        type: PropType<any>;
        } & {
        default: null;
        };
        allowClear: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        contentClass: {
        type: PropType<string | object | (string | object)[]>;
        };
        contentStyle: {
        type: PropType<StyleValue>;
        };
        showSearch: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        minCollapsedNum: {
        type: PropType<number>;
        } & {
        default: number;
        };
        collapseTagsTooltip: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        searchPlaceholder: {
        type: PropType<string>;
        };
        items: {
        type: PropType<SelectOptionProps[]>;
        };
        }>> & {
        onChange?: ((value: string) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        onSearch?: ((value: string) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        "update:modelValue": (value: string) => void;
        } & {
        change: (value: string) => void;
        } & {
        search: (value: string) => void;
        }, string, {
        disabled: boolean;
        multiple: boolean;
        size: SelectSize;
        modelValue: any;
        allowClear: boolean;
        showSearch: boolean;
        minCollapsedNum: number;
        collapseTagsTooltip: boolean;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    name: {
    type: PropType<string>;
    };
    disabled: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    multiple: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    size: {
    type: PropType<SelectSize>;
    } & {
    default: string;
    };
    placeholder: {
    type: PropType<string>;
    };
    modelValue: {
    type: PropType<any>;
    } & {
    default: null;
    };
    allowClear: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    contentClass: {
    type: PropType<string | object | (string | object)[]>;
    };
    contentStyle: {
    type: PropType<StyleValue>;
    };
    showSearch: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    minCollapsedNum: {
    type: PropType<number>;
    } & {
    default: number;
    };
    collapseTagsTooltip: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    searchPlaceholder: {
    type: PropType<string>;
    };
    items: {
    type: PropType<SelectOptionProps[]>;
    };
    }>> & {
        onChange?: ((value: string) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        onSearch?: ((value: string) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
name: {
type: PropType<string>;
};
disabled: {
type: PropType<boolean>;
} & {
default: boolean;
};
multiple: {
type: PropType<boolean>;
} & {
default: boolean;
};
size: {
type: PropType<SelectSize>;
} & {
default: string;
};
placeholder: {
type: PropType<string>;
};
modelValue: {
type: PropType<any>;
} & {
default: null;
};
allowClear: {
type: PropType<boolean>;
} & {
default: boolean;
};
contentClass: {
type: PropType<string | object | (string | object)[]>;
};
contentStyle: {
type: PropType<StyleValue>;
};
showSearch: {
type: PropType<boolean>;
} & {
default: boolean;
};
minCollapsedNum: {
type: PropType<number>;
} & {
default: number;
};
collapseTagsTooltip: {
type: PropType<boolean>;
} & {
default: boolean;
};
searchPlaceholder: {
type: PropType<string>;
};
items: {
type: PropType<SelectOptionProps[]>;
};
}>> & {
onChange?: ((value: string) => any) | undefined;
"onUpdate:modelValue"?: ((value: string) => any) | undefined;
onSearch?: ((value: string) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (value: string) => void;
} & {
change: (value: string) => void;
} & {
search: (value: string) => void;
}, string, {
disabled: boolean;
multiple: boolean;
size: SelectSize;
modelValue: any;
allowClear: boolean;
showSearch: boolean;
minCollapsedNum: number;
collapseTagsTooltip: boolean;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LaySelectOption: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            label: string;
            disabled: boolean;
            keyword: string;
        }> & Omit<Readonly<ExtractPropTypes<    {
        value: {
        type: PropType<string | number | object>;
        required: true;
        };
        label: {
        type: PropType<string>;
        } & {
        default: string;
        };
        disabled: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        keyword: {
        type: PropType<string>;
        } & {
        default: string;
        };
        }>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "label" | "disabled" | "keyword">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        value: {
        type: PropType<string | number | object>;
        required: true;
        };
        label: {
        type: PropType<string>;
        } & {
        default: string;
        };
        disabled: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        keyword: {
        type: PropType<string>;
        } & {
        default: string;
        };
        }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
        label: string;
        disabled: boolean;
        keyword: string;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    value: {
    type: PropType<string | number | object>;
    required: true;
    };
    label: {
    type: PropType<string>;
    } & {
    default: string;
    };
    disabled: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    keyword: {
    type: PropType<string>;
    } & {
    default: string;
    };
    }>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
value: {
type: PropType<string | number | object>;
required: true;
};
label: {
type: PropType<string>;
} & {
default: string;
};
disabled: {
type: PropType<boolean>;
} & {
default: boolean;
};
keyword: {
type: PropType<string>;
} & {
default: string;
};
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
label: string;
disabled: boolean;
keyword: string;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LaySide: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            width: string | number;
        }> & Omit<Readonly<ExtractPropTypes<    {
        width: {
        type: PropType<string | number>;
        } & {
        default: string;
        };
        }>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "width">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        width: {
        type: PropType<string | number>;
        } & {
        default: string;
        };
        }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
        width: string | number;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    width: {
    type: PropType<string | number>;
    } & {
    default: string;
    };
    }>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
width: {
type: PropType<string | number>;
} & {
default: string;
};
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
width: string | number;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LaySkeleton: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            loading: boolean;
            rows: number;
            animated: boolean;
        }> & Omit<Readonly<ExtractPropTypes<    {
        loading: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        rows: {
        type: PropType<number>;
        } & {
        default: number;
        };
        animated: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        }>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "loading" | "rows" | "animated">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        loading: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        rows: {
        type: PropType<number>;
        } & {
        default: number;
        };
        animated: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
        loading: boolean;
        rows: number;
        animated: boolean;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    loading: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    rows: {
    type: PropType<number>;
    } & {
    default: number;
    };
    animated: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    }>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
loading: {
type: PropType<boolean>;
} & {
default: boolean;
};
rows: {
type: PropType<number>;
} & {
default: number;
};
animated: {
type: PropType<boolean>;
} & {
default: boolean;
};
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
loading: boolean;
rows: number;
animated: boolean;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        skeleton: (_: {}) => any;
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LaySkeletonItem: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            type: string;
        }> & Omit<Readonly<ExtractPropTypes<    {
        type: {
        type: PropType<string>;
        } & {
        default: string;
        };
        }>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "type">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        type: {
        type: PropType<string>;
        } & {
        default: string;
        };
        }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
        type: string;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    type: {
    type: PropType<string>;
    } & {
    default: string;
    };
    }>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
type: {
type: PropType<string>;
} & {
default: string;
};
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
type: string;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & Plugin_2;

export declare const LaySlider: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            max: number;
            disabled: boolean;
            vertical: boolean;
            step: number;
            min: number;
            modelValue: number | number[];
            showDots: boolean;
        }> & Omit<Readonly<ExtractPropTypes<    {
        max: {
        type: PropType<number>;
        } & {
        default: number;
        };
        disabled: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        range: {
        type: PropType<boolean>;
        };
        vertical: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        step: {
        type: PropType<number>;
        } & {
        default: number;
        };
        min: {
        type: PropType<number>;
        } & {
        default: number;
        };
        modelValue: {
        type: PropType<number | number[]>;
        } & {
        default: number;
        };
        rangeValue: {
        type: PropType<number[]>;
        };
        showDots: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "max" | "disabled" | "vertical" | "step" | "min" | "modelValue" | "showDots">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "update:modelValue", ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        max: {
        type: PropType<number>;
        } & {
        default: number;
        };
        disabled: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        range: {
        type: PropType<boolean>;
        };
        vertical: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        step: {
        type: PropType<number>;
        } & {
        default: number;
        };
        min: {
        type: PropType<number>;
        } & {
        default: number;
        };
        modelValue: {
        type: PropType<number | number[]>;
        } & {
        default: number;
        };
        rangeValue: {
        type: PropType<number[]>;
        };
        showDots: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "update:modelValue"[], string, {
        max: number;
        disabled: boolean;
        vertical: boolean;
        step: number;
        min: number;
        modelValue: number | number[];
        showDots: boolean;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    max: {
    type: PropType<number>;
    } & {
    default: number;
    };
    disabled: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    range: {
    type: PropType<boolean>;
    };
    vertical: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    step: {
    type: PropType<number>;
    } & {
    default: number;
    };
    min: {
    type: PropType<number>;
    } & {
    default: number;
    };
    modelValue: {
    type: PropType<number | number[]>;
    } & {
    default: number;
    };
    rangeValue: {
    type: PropType<number[]>;
    };
    showDots: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
max: {
type: PropType<number>;
} & {
default: number;
};
disabled: {
type: PropType<boolean>;
} & {
default: boolean;
};
range: {
type: PropType<boolean>;
};
vertical: {
type: PropType<boolean>;
} & {
default: boolean;
};
step: {
type: PropType<number>;
} & {
default: number;
};
min: {
type: PropType<number>;
} & {
default: number;
};
modelValue: {
type: PropType<number | number[]>;
} & {
default: number;
};
rangeValue: {
type: PropType<number[]>;
};
showDots: {
type: PropType<boolean>;
} & {
default: boolean;
};
}>> & {
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", {
max: number;
disabled: boolean;
vertical: boolean;
step: number;
min: number;
modelValue: number | number[];
showDots: boolean;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & Plugin_2;

export declare const LaySpace: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            fill: boolean;
            direction: "horizontal" | "vertical";
            size: (string | number) | [string | number, string | number];
            wrap: boolean;
        }> & Omit<Readonly<ExtractPropTypes<    {
        align: {
        type: PropType<"center" | "end" | "start" | "baseline">;
        };
        direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        };
        fill: {
        type: BooleanConstructor;
        default: boolean;
        };
        size: {
        type: PropType<(string | number) | [string | number, string | number]>;
        default: string;
        };
        wrap: {
        type: BooleanConstructor;
        default: boolean;
        };
        }>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "fill" | "direction" | "size" | "wrap">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        align: {
        type: PropType<"center" | "end" | "start" | "baseline">;
        };
        direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        };
        fill: {
        type: BooleanConstructor;
        default: boolean;
        };
        size: {
        type: PropType<(string | number) | [string | number, string | number]>;
        default: string;
        };
        wrap: {
        type: BooleanConstructor;
        default: boolean;
        };
        }>>, () => VNode<RendererNode, RendererElement, {
        [key: string]: any;
        }>, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
        fill: boolean;
        direction: "horizontal" | "vertical";
        size: (string | number) | [string | number, string | number];
        wrap: boolean;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    align: {
    type: PropType<"center" | "end" | "start" | "baseline">;
    };
    direction: {
    type: PropType<"horizontal" | "vertical">;
    default: string;
    };
    fill: {
    type: BooleanConstructor;
    default: boolean;
    };
    size: {
    type: PropType<(string | number) | [string | number, string | number]>;
    default: string;
    };
    wrap: {
    type: BooleanConstructor;
    default: boolean;
    };
    }>> & ShallowUnwrapRef<() => VNode<RendererNode, RendererElement, {
    [key: string]: any;
    }>> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
align: {
type: PropType<"center" | "end" | "start" | "baseline">;
};
direction: {
type: PropType<"horizontal" | "vertical">;
default: string;
};
fill: {
type: BooleanConstructor;
default: boolean;
};
size: {
type: PropType<(string | number) | [string | number, string | number]>;
default: string;
};
wrap: {
type: BooleanConstructor;
default: boolean;
};
}>>, () => VNode<RendererNode, RendererElement, {
[key: string]: any;
}>, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
fill: boolean;
direction: "horizontal" | "vertical";
size: (string | number) | [string | number, string | number];
wrap: boolean;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & Plugin_2;

export declare const LaySplitPanel: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            vertical: boolean;
            minSize: number;
        }> & Omit<Readonly<ExtractPropTypes<    {
        vertical: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        minSize: {
        type: PropType<number>;
        } & {
        default: number;
        };
        }>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "vertical" | "minSize">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        vertical: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        minSize: {
        type: PropType<number>;
        } & {
        default: number;
        };
        }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
        vertical: boolean;
        minSize: number;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    vertical: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    minSize: {
    type: PropType<number>;
    } & {
    default: number;
    };
    }>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
vertical: {
type: PropType<boolean>;
} & {
default: boolean;
};
minSize: {
type: PropType<number>;
} & {
default: number;
};
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
vertical: boolean;
minSize: number;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LaySplitPanelItem: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            space: number;
        }> & Omit<Readonly<ExtractPropTypes<    {
        space: {
        type: PropType<number>;
        } & {
        default: number;
        };
        }>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "space">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        space: {
        type: PropType<number>;
        } & {
        default: number;
        };
        }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
        space: number;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    space: {
    type: PropType<number>;
    } & {
    default: number;
    };
    }>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
space: {
type: PropType<number>;
} & {
default: number;
};
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
space: number;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayStep: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            active: number;
            center: boolean;
            direction: string;
            space: string;
            composition: string;
            simple: boolean;
            currentStatus: string;
        }> & Omit<Readonly<ExtractPropTypes<    {
        active: {
        type: PropType<number>;
        } & {
        default: number;
        };
        center: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        direction: {
        type: PropType<string>;
        } & {
        default: string;
        };
        space: {
        type: PropType<string>;
        } & {
        default: string;
        };
        composition: {
        type: PropType<string>;
        } & {
        default: string;
        };
        simple: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        currentStatus: {
        type: PropType<string>;
        } & {
        default: string;
        };
        }>> & {
            onOnChange?: ((...args: any[]) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "active" | "center" | "direction" | "space" | "composition" | "simple" | "currentStatus">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "onChange", ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        active: {
        type: PropType<number>;
        } & {
        default: number;
        };
        center: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        direction: {
        type: PropType<string>;
        } & {
        default: string;
        };
        space: {
        type: PropType<string>;
        } & {
        default: string;
        };
        composition: {
        type: PropType<string>;
        } & {
        default: string;
        };
        simple: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        currentStatus: {
        type: PropType<string>;
        } & {
        default: string;
        };
        }>> & {
        onOnChange?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "onChange"[], string, {
        active: number;
        center: boolean;
        direction: string;
        space: string;
        composition: string;
        simple: boolean;
        currentStatus: string;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    active: {
    type: PropType<number>;
    } & {
    default: number;
    };
    center: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    direction: {
    type: PropType<string>;
    } & {
    default: string;
    };
    space: {
    type: PropType<string>;
    } & {
    default: string;
    };
    composition: {
    type: PropType<string>;
    } & {
    default: string;
    };
    simple: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    currentStatus: {
    type: PropType<string>;
    } & {
    default: string;
    };
    }>> & {
        onOnChange?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
active: {
type: PropType<number>;
} & {
default: number;
};
center: {
type: PropType<boolean>;
} & {
default: boolean;
};
direction: {
type: PropType<string>;
} & {
default: string;
};
space: {
type: PropType<string>;
} & {
default: string;
};
composition: {
type: PropType<string>;
} & {
default: string;
};
simple: {
type: PropType<boolean>;
} & {
default: boolean;
};
currentStatus: {
type: PropType<string>;
} & {
default: string;
};
}>> & {
onOnChange?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "onChange"[], "onChange", {
active: number;
center: boolean;
direction: string;
space: string;
composition: string;
simple: boolean;
currentStatus: string;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayStepItem: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            content: string;
            title: string;
            status: string;
            icon: string;
        }> & Omit<Readonly<ExtractPropTypes<    {
        content: {
        type: PropType<string>;
        } & {
        default: string;
        };
        title: {
        type: PropType<string>;
        } & {
        default: string;
        };
        status: {
        type: PropType<string>;
        } & {
        default: string;
        };
        icon: {
        type: PropType<string>;
        } & {
        default: string;
        };
        }>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "content" | "title" | "status" | "icon">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        content: {
        type: PropType<string>;
        } & {
        default: string;
        };
        title: {
        type: PropType<string>;
        } & {
        default: string;
        };
        status: {
        type: PropType<string>;
        } & {
        default: string;
        };
        icon: {
        type: PropType<string>;
        } & {
        default: string;
        };
        }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
        content: string;
        title: string;
        status: string;
        icon: string;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    content: {
    type: PropType<string>;
    } & {
    default: string;
    };
    title: {
    type: PropType<string>;
    } & {
    default: string;
    };
    status: {
    type: PropType<string>;
    } & {
    default: string;
    };
    icon: {
    type: PropType<string>;
    } & {
    default: string;
    };
    }>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
content: {
type: PropType<string>;
} & {
default: string;
};
title: {
type: PropType<string>;
} & {
default: string;
};
status: {
type: PropType<string>;
} & {
default: string;
};
icon: {
type: PropType<string>;
} & {
default: string;
};
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
content: string;
title: string;
status: string;
icon: string;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        pace: (_: {}) => any;
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LaySubMenu: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<ExtractPropTypes<    {
        id: {
        type: PropType<string>;
        required: true;
        };
        title: {
        type: PropType<string>;
        };
        }>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        id: {
        type: PropType<string>;
        required: true;
        };
        title: {
        type: PropType<string>;
        };
        }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    id: {
    type: PropType<string>;
    required: true;
    };
    title: {
    type: PropType<string>;
    };
    }>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
id: {
type: PropType<string>;
required: true;
};
title: {
type: PropType<string>;
};
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        icon: (_: {}) => any;
        title: (_: {}) => any;
        expandIcon: (_: {}) => any;
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LaySwitch: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
            size: SwitchSize;
            loadingIcon: string;
            onswitchValue: string | number | boolean;
            unswitchValue: string | number | boolean;
        }> & Omit<Readonly<ExtractPropTypes<    {
        name: {
        type: PropType<string>;
        };
        loading: {
        type: PropType<boolean>;
        };
        disabled: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        size: {
        type: PropType<SwitchSize>;
        } & {
        default: string;
        };
        loadingIcon: {
        type: PropType<string>;
        } & {
        default: string;
        };
        modelValue: {
        type: PropType<string | number | boolean>;
        };
        onswitchText: {
        type: PropType<string>;
        };
        unswitchText: {
        type: PropType<string>;
        };
        onswitchColor: {
        type: PropType<string>;
        };
        unswitchColor: {
        type: PropType<string>;
        };
        onswitchValue: {
        type: PropType<string | number | boolean>;
        } & {
        default: boolean;
        };
        unswitchValue: {
        type: PropType<string | number | boolean>;
        } & {
        default: boolean;
        };
        }>> & {
            onChange?: ((...args: any[]) => any) | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "disabled" | "size" | "loadingIcon" | "onswitchValue" | "unswitchValue">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "change" | "update:modelValue", ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        name: {
        type: PropType<string>;
        };
        loading: {
        type: PropType<boolean>;
        };
        disabled: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        size: {
        type: PropType<SwitchSize>;
        } & {
        default: string;
        };
        loadingIcon: {
        type: PropType<string>;
        } & {
        default: string;
        };
        modelValue: {
        type: PropType<string | number | boolean>;
        };
        onswitchText: {
        type: PropType<string>;
        };
        unswitchText: {
        type: PropType<string>;
        };
        onswitchColor: {
        type: PropType<string>;
        };
        unswitchColor: {
        type: PropType<string>;
        };
        onswitchValue: {
        type: PropType<string | number | boolean>;
        } & {
        default: boolean;
        };
        unswitchValue: {
        type: PropType<string | number | boolean>;
        } & {
        default: boolean;
        };
        }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "update:modelValue")[], string, {
        disabled: boolean;
        size: SwitchSize;
        loadingIcon: string;
        onswitchValue: string | number | boolean;
        unswitchValue: string | number | boolean;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    name: {
    type: PropType<string>;
    };
    loading: {
    type: PropType<boolean>;
    };
    disabled: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    size: {
    type: PropType<SwitchSize>;
    } & {
    default: string;
    };
    loadingIcon: {
    type: PropType<string>;
    } & {
    default: string;
    };
    modelValue: {
    type: PropType<string | number | boolean>;
    };
    onswitchText: {
    type: PropType<string>;
    };
    unswitchText: {
    type: PropType<string>;
    };
    onswitchColor: {
    type: PropType<string>;
    };
    unswitchColor: {
    type: PropType<string>;
    };
    onswitchValue: {
    type: PropType<string | number | boolean>;
    } & {
    default: boolean;
    };
    unswitchValue: {
    type: PropType<string | number | boolean>;
    } & {
    default: boolean;
    };
    }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
name: {
type: PropType<string>;
};
loading: {
type: PropType<boolean>;
};
disabled: {
type: PropType<boolean>;
} & {
default: boolean;
};
size: {
type: PropType<SwitchSize>;
} & {
default: string;
};
loadingIcon: {
type: PropType<string>;
} & {
default: string;
};
modelValue: {
type: PropType<string | number | boolean>;
};
onswitchText: {
type: PropType<string>;
};
unswitchText: {
type: PropType<string>;
};
onswitchColor: {
type: PropType<string>;
};
unswitchColor: {
type: PropType<string>;
};
onswitchValue: {
type: PropType<string | number | boolean>;
} & {
default: boolean;
};
unswitchValue: {
type: PropType<string | number | boolean>;
} & {
default: boolean;
};
}>> & {
onChange?: ((...args: any[]) => any) | undefined;
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", {
disabled: boolean;
size: SwitchSize;
loadingIcon: string;
onswitchValue: string | number | boolean;
unswitchValue: string | number | boolean;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        'onswitch-icon': (_: {}) => any;
        'unswitch-icon': (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayTab: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            tabPosition: TabPosition;
        }> & Omit<Readonly<ExtractPropTypes<    {
        type: {
        type: PropType<string>;
        };
        modelValue: {
        type: PropType<string>;
        required: true;
        };
        beforeLeave: {
        type: PropType<Function>;
        };
        allowClose: {
        type: PropType<boolean>;
        };
        tabPosition: {
        type: PropType<TabPosition>;
        } & {
        default: string;
        };
        beforeClose: {
        type: PropType<Function>;
        };
        activeBarTransition: {
        type: PropType<boolean>;
        };
        }>> & {
            onChange?: ((value: string) => any) | undefined;
            "onUpdate:modelValue"?: ((value: string) => any) | undefined;
            onClose?: ((value: string) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "tabPosition">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: ((event: "change", value: string) => void) & ((event: "close", value: string) => void) & ((event: "update:modelValue", value: string) => void);
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        type: {
        type: PropType<string>;
        };
        modelValue: {
        type: PropType<string>;
        required: true;
        };
        beforeLeave: {
        type: PropType<Function>;
        };
        allowClose: {
        type: PropType<boolean>;
        };
        tabPosition: {
        type: PropType<TabPosition>;
        } & {
        default: string;
        };
        beforeClose: {
        type: PropType<Function>;
        };
        activeBarTransition: {
        type: PropType<boolean>;
        };
        }>> & {
        onChange?: ((value: string) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        onClose?: ((value: string) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        change: (value: string) => void;
        } & {
        "update:modelValue": (value: string) => void;
        } & {
        close: (value: string) => void;
        }, string, {
        tabPosition: TabPosition;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    type: {
    type: PropType<string>;
    };
    modelValue: {
    type: PropType<string>;
    required: true;
    };
    beforeLeave: {
    type: PropType<Function>;
    };
    allowClose: {
    type: PropType<boolean>;
    };
    tabPosition: {
    type: PropType<TabPosition>;
    } & {
    default: string;
    };
    beforeClose: {
    type: PropType<Function>;
    };
    activeBarTransition: {
    type: PropType<boolean>;
    };
    }>> & {
        onChange?: ((value: string) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        onClose?: ((value: string) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
type: {
type: PropType<string>;
};
modelValue: {
type: PropType<string>;
required: true;
};
beforeLeave: {
type: PropType<Function>;
};
allowClose: {
type: PropType<boolean>;
};
tabPosition: {
type: PropType<TabPosition>;
} & {
default: string;
};
beforeClose: {
type: PropType<Function>;
};
activeBarTransition: {
type: PropType<boolean>;
};
}>> & {
onChange?: ((value: string) => any) | undefined;
"onUpdate:modelValue"?: ((value: string) => any) | undefined;
onClose?: ((value: string) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
change: (value: string) => void;
} & {
"update:modelValue": (value: string) => void;
} & {
close: (value: string) => void;
}, string, {
tabPosition: TabPosition;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayTabItem: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            closable: string | boolean;
        }> & Omit<Readonly<ExtractPropTypes<    {
        id: {
        type: PropType<string>;
        required: true;
        };
        title: {
        type: PropType<string | Function>;
        };
        icon: {
        type: PropType<string | Function>;
        };
        closable: {
        type: PropType<string | boolean>;
        } & {
        default: boolean;
        };
        }>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "closable">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        id: {
        type: PropType<string>;
        required: true;
        };
        title: {
        type: PropType<string | Function>;
        };
        icon: {
        type: PropType<string | Function>;
        };
        closable: {
        type: PropType<string | boolean>;
        } & {
        default: boolean;
        };
        }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
        closable: string | boolean;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    id: {
    type: PropType<string>;
    required: true;
    };
    title: {
    type: PropType<string | Function>;
    };
    icon: {
    type: PropType<string | Function>;
    };
    closable: {
    type: PropType<string | boolean>;
    } & {
    default: boolean;
    };
    }>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
id: {
type: PropType<string>;
required: true;
};
title: {
type: PropType<string | Function>;
};
icon: {
type: PropType<string | Function>;
};
closable: {
type: PropType<string | boolean>;
} & {
default: boolean;
};
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
closable: string | boolean;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayTable: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            id: string;
            maxHeight: string;
            loading: boolean;
            size: string;
            selectedKey: string;
            indentSize: number;
            expandIndex: number;
            selectedKeys: Recordable[];
            childrenColumnName: string;
            cellClassName: string | Function;
            cellStyle: string | Function;
            rowClassName: string | Function;
            rowStyle: string | Function;
            spanMethod: Function;
            defaultExpandAll: boolean;
            expandKeys: Recordable[];
            getCheckboxProps: Function;
            getRadioProps: Function;
            dataSource: Recordable[];
            even: boolean;
        }> & Omit<Readonly<ExtractPropTypes<    {
        id: {
        type: PropType<string>;
        } & {
        default: string;
        };
        height: {
        type: PropType<number>;
        };
        columns: {
        type: PropType<Recordable[]>;
        required: true;
        };
        maxHeight: {
        type: PropType<string>;
        } & {
        default: string;
        };
        loading: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        size: {
        type: PropType<string>;
        } & {
        default: string;
        };
        page: {
        type: PropType<Recordable>;
        };
        skin: {
        type: PropType<string>;
        };
        selectedKey: {
        type: PropType<string>;
        } & {
        default: string;
        };
        indentSize: {
        type: PropType<number>;
        } & {
        default: number;
        };
        expandIndex: {
        type: PropType<number>;
        } & {
        default: number;
        };
        selectedKeys: {
        type: PropType<Recordable[]>;
        } & {
        default: () => never[];
        };
        childrenColumnName: {
        type: PropType<string>;
        } & {
        default: string;
        };
        cellClassName: {
        type: PropType<string | Function>;
        } & {
        default: string;
        };
        cellStyle: {
        type: PropType<string | Function>;
        } & {
        default: string;
        };
        rowClassName: {
        type: PropType<string | Function>;
        } & {
        default: string;
        };
        rowStyle: {
        type: PropType<string | Function>;
        } & {
        default: string;
        };
        spanMethod: {
        type: PropType<Function>;
        } & {
        default: () => void;
        };
        defaultExpandAll: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        expandKeys: {
        type: PropType<Recordable[]>;
        } & {
        default: () => never[];
        };
        getCheckboxProps: {
        type: PropType<Function>;
        } & {
        default: () => void;
        };
        getRadioProps: {
        type: PropType<Function>;
        } & {
        default: () => void;
        };
        dataSource: {
        type: PropType<Recordable[]>;
        required: true;
        } & {
        default: () => never[];
        };
        defaultToolbar: {
        type: PropType<boolean | Recordable[]>;
        };
        even: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        }>> & {
            onChange?: ((...args: any[]) => any) | undefined;
            "onUpdate:selectedKey"?: ((...args: any[]) => any) | undefined;
            onRow?: ((...args: any[]) => any) | undefined;
            "onRow-double"?: ((...args: any[]) => any) | undefined;
            "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onUpdate:expandKeys"?: ((...args: any[]) => any) | undefined;
            "onUpdate:selectedKeys"?: ((...args: any[]) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "id" | "maxHeight" | "loading" | "size" | "selectedKey" | "indentSize" | "expandIndex" | "selectedKeys" | "childrenColumnName" | "cellClassName" | "cellStyle" | "rowClassName" | "rowStyle" | "spanMethod" | "defaultExpandAll" | "expandKeys" | "getCheckboxProps" | "getRadioProps" | "dataSource" | "even">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "change" | "row" | "update:selectedKey" | "row-double" | "row-contextmenu" | "update:expandKeys" | "update:selectedKeys", ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        id: {
        type: PropType<string>;
        } & {
        default: string;
        };
        height: {
        type: PropType<number>;
        };
        columns: {
        type: PropType<Recordable[]>;
        required: true;
        };
        maxHeight: {
        type: PropType<string>;
        } & {
        default: string;
        };
        loading: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        size: {
        type: PropType<string>;
        } & {
        default: string;
        };
        page: {
        type: PropType<Recordable>;
        };
        skin: {
        type: PropType<string>;
        };
        selectedKey: {
        type: PropType<string>;
        } & {
        default: string;
        };
        indentSize: {
        type: PropType<number>;
        } & {
        default: number;
        };
        expandIndex: {
        type: PropType<number>;
        } & {
        default: number;
        };
        selectedKeys: {
        type: PropType<Recordable[]>;
        } & {
        default: () => never[];
        };
        childrenColumnName: {
        type: PropType<string>;
        } & {
        default: string;
        };
        cellClassName: {
        type: PropType<string | Function>;
        } & {
        default: string;
        };
        cellStyle: {
        type: PropType<string | Function>;
        } & {
        default: string;
        };
        rowClassName: {
        type: PropType<string | Function>;
        } & {
        default: string;
        };
        rowStyle: {
        type: PropType<string | Function>;
        } & {
        default: string;
        };
        spanMethod: {
        type: PropType<Function>;
        } & {
        default: () => void;
        };
        defaultExpandAll: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        expandKeys: {
        type: PropType<Recordable[]>;
        } & {
        default: () => never[];
        };
        getCheckboxProps: {
        type: PropType<Function>;
        } & {
        default: () => void;
        };
        getRadioProps: {
        type: PropType<Function>;
        } & {
        default: () => void;
        };
        dataSource: {
        type: PropType<Recordable[]>;
        required: true;
        } & {
        default: () => never[];
        };
        defaultToolbar: {
        type: PropType<boolean | Recordable[]>;
        };
        even: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:selectedKey"?: ((...args: any[]) => any) | undefined;
        onRow?: ((...args: any[]) => any) | undefined;
        "onRow-double"?: ((...args: any[]) => any) | undefined;
        "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onUpdate:expandKeys"?: ((...args: any[]) => any) | undefined;
        "onUpdate:selectedKeys"?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "row" | "update:selectedKey" | "row-double" | "row-contextmenu" | "update:expandKeys" | "update:selectedKeys")[], string, {
        id: string;
        maxHeight: string;
        loading: boolean;
        size: string;
        selectedKey: string;
        indentSize: number;
        expandIndex: number;
        selectedKeys: Recordable[];
        childrenColumnName: string;
        cellClassName: string | Function;
        cellStyle: string | Function;
        rowClassName: string | Function;
        rowStyle: string | Function;
        spanMethod: Function;
        defaultExpandAll: boolean;
        expandKeys: Recordable[];
        getCheckboxProps: Function;
        getRadioProps: Function;
        dataSource: Recordable[];
        even: boolean;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    id: {
    type: PropType<string>;
    } & {
    default: string;
    };
    height: {
    type: PropType<number>;
    };
    columns: {
    type: PropType<Recordable[]>;
    required: true;
    };
    maxHeight: {
    type: PropType<string>;
    } & {
    default: string;
    };
    loading: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    size: {
    type: PropType<string>;
    } & {
    default: string;
    };
    page: {
    type: PropType<Recordable>;
    };
    skin: {
    type: PropType<string>;
    };
    selectedKey: {
    type: PropType<string>;
    } & {
    default: string;
    };
    indentSize: {
    type: PropType<number>;
    } & {
    default: number;
    };
    expandIndex: {
    type: PropType<number>;
    } & {
    default: number;
    };
    selectedKeys: {
    type: PropType<Recordable[]>;
    } & {
    default: () => never[];
    };
    childrenColumnName: {
    type: PropType<string>;
    } & {
    default: string;
    };
    cellClassName: {
    type: PropType<string | Function>;
    } & {
    default: string;
    };
    cellStyle: {
    type: PropType<string | Function>;
    } & {
    default: string;
    };
    rowClassName: {
    type: PropType<string | Function>;
    } & {
    default: string;
    };
    rowStyle: {
    type: PropType<string | Function>;
    } & {
    default: string;
    };
    spanMethod: {
    type: PropType<Function>;
    } & {
    default: () => void;
    };
    defaultExpandAll: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    expandKeys: {
    type: PropType<Recordable[]>;
    } & {
    default: () => never[];
    };
    getCheckboxProps: {
    type: PropType<Function>;
    } & {
    default: () => void;
    };
    getRadioProps: {
    type: PropType<Function>;
    } & {
    default: () => void;
    };
    dataSource: {
    type: PropType<Recordable[]>;
    required: true;
    } & {
    default: () => never[];
    };
    defaultToolbar: {
    type: PropType<boolean | Recordable[]>;
    };
    even: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:selectedKey"?: ((...args: any[]) => any) | undefined;
        onRow?: ((...args: any[]) => any) | undefined;
        "onRow-double"?: ((...args: any[]) => any) | undefined;
        "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onUpdate:expandKeys"?: ((...args: any[]) => any) | undefined;
        "onUpdate:selectedKeys"?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
id: {
type: PropType<string>;
} & {
default: string;
};
height: {
type: PropType<number>;
};
columns: {
type: PropType<Recordable[]>;
required: true;
};
maxHeight: {
type: PropType<string>;
} & {
default: string;
};
loading: {
type: PropType<boolean>;
} & {
default: boolean;
};
size: {
type: PropType<string>;
} & {
default: string;
};
page: {
type: PropType<Recordable>;
};
skin: {
type: PropType<string>;
};
selectedKey: {
type: PropType<string>;
} & {
default: string;
};
indentSize: {
type: PropType<number>;
} & {
default: number;
};
expandIndex: {
type: PropType<number>;
} & {
default: number;
};
selectedKeys: {
type: PropType<Recordable[]>;
} & {
default: () => never[];
};
childrenColumnName: {
type: PropType<string>;
} & {
default: string;
};
cellClassName: {
type: PropType<string | Function>;
} & {
default: string;
};
cellStyle: {
type: PropType<string | Function>;
} & {
default: string;
};
rowClassName: {
type: PropType<string | Function>;
} & {
default: string;
};
rowStyle: {
type: PropType<string | Function>;
} & {
default: string;
};
spanMethod: {
type: PropType<Function>;
} & {
default: () => void;
};
defaultExpandAll: {
type: PropType<boolean>;
} & {
default: boolean;
};
expandKeys: {
type: PropType<Recordable[]>;
} & {
default: () => never[];
};
getCheckboxProps: {
type: PropType<Function>;
} & {
default: () => void;
};
getRadioProps: {
type: PropType<Function>;
} & {
default: () => void;
};
dataSource: {
type: PropType<Recordable[]>;
required: true;
} & {
default: () => never[];
};
defaultToolbar: {
type: PropType<boolean | Recordable[]>;
};
even: {
type: PropType<boolean>;
} & {
default: boolean;
};
}>> & {
onChange?: ((...args: any[]) => any) | undefined;
"onUpdate:selectedKey"?: ((...args: any[]) => any) | undefined;
onRow?: ((...args: any[]) => any) | undefined;
"onRow-double"?: ((...args: any[]) => any) | undefined;
"onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
"onUpdate:expandKeys"?: ((...args: any[]) => any) | undefined;
"onUpdate:selectedKeys"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "row" | "update:selectedKey" | "row-double" | "row-contextmenu" | "update:expandKeys" | "update:selectedKeys")[], "change" | "row" | "update:selectedKey" | "row-double" | "row-contextmenu" | "update:expandKeys" | "update:selectedKeys", {
id: string;
maxHeight: string;
loading: boolean;
size: string;
selectedKey: string;
indentSize: number;
expandIndex: number;
selectedKeys: Recordable[];
childrenColumnName: string;
cellClassName: string | Function;
cellStyle: string | Function;
rowClassName: string | Function;
rowStyle: string | Function;
spanMethod: Function;
defaultExpandAll: boolean;
expandKeys: Recordable[];
getCheckboxProps: Function;
getRadioProps: Function;
dataSource: Recordable[];
even: boolean;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: Record<any, {}> & Record<string, {
        data: any;
    }> & {
        toolbar: (_: {}) => any;
        header: (_: {}) => any;
        expand: (_: {
            data: any;
        }) => any;
        footer: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayTag: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            size: string;
            shape: TagShape;
            bordered: boolean;
            variant: TagVariant;
        }> & Omit<Readonly<ExtractPropTypes<    {
        type: {
        type: PropType<"normal" | "primary" | "warm" | "danger">;
        };
        color: {
        type: PropType<string>;
        };
        maxWidth: {
        type: PropType<string>;
        };
        disabled: {
        type: PropType<boolean>;
        };
        size: {
        type: PropType<string>;
        } & {
        default: string;
        };
        shape: {
        type: PropType<TagShape>;
        } & {
        default: string;
        };
        closable: {
        type: PropType<boolean>;
        };
        bordered: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        variant: {
        type: PropType<TagVariant>;
        } & {
        default: string;
        };
        }>> & {
            onClose?: ((...args: any[]) => any) | undefined;
            onCheck?: ((...args: any[]) => any) | undefined;
            "onUpdate:checked"?: ((...args: any[]) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "size" | "shape" | "bordered" | "variant">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "close" | "check" | "update:checked", ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        type: {
        type: PropType<"normal" | "primary" | "warm" | "danger">;
        };
        color: {
        type: PropType<string>;
        };
        maxWidth: {
        type: PropType<string>;
        };
        disabled: {
        type: PropType<boolean>;
        };
        size: {
        type: PropType<string>;
        } & {
        default: string;
        };
        shape: {
        type: PropType<TagShape>;
        } & {
        default: string;
        };
        closable: {
        type: PropType<boolean>;
        };
        bordered: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        variant: {
        type: PropType<TagVariant>;
        } & {
        default: string;
        };
        }>> & {
        onClose?: ((...args: any[]) => any) | undefined;
        onCheck?: ((...args: any[]) => any) | undefined;
        "onUpdate:checked"?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("close" | "check" | "update:checked")[], string, {
        size: string;
        shape: TagShape;
        bordered: boolean;
        variant: TagVariant;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    type: {
    type: PropType<"normal" | "primary" | "warm" | "danger">;
    };
    color: {
    type: PropType<string>;
    };
    maxWidth: {
    type: PropType<string>;
    };
    disabled: {
    type: PropType<boolean>;
    };
    size: {
    type: PropType<string>;
    } & {
    default: string;
    };
    shape: {
    type: PropType<TagShape>;
    } & {
    default: string;
    };
    closable: {
    type: PropType<boolean>;
    };
    bordered: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    variant: {
    type: PropType<TagVariant>;
    } & {
    default: string;
    };
    }>> & {
        onClose?: ((...args: any[]) => any) | undefined;
        onCheck?: ((...args: any[]) => any) | undefined;
        "onUpdate:checked"?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
type: {
type: PropType<"normal" | "primary" | "warm" | "danger">;
};
color: {
type: PropType<string>;
};
maxWidth: {
type: PropType<string>;
};
disabled: {
type: PropType<boolean>;
};
size: {
type: PropType<string>;
} & {
default: string;
};
shape: {
type: PropType<TagShape>;
} & {
default: string;
};
closable: {
type: PropType<boolean>;
};
bordered: {
type: PropType<boolean>;
} & {
default: boolean;
};
variant: {
type: PropType<TagVariant>;
} & {
default: string;
};
}>> & {
onClose?: ((...args: any[]) => any) | undefined;
onCheck?: ((...args: any[]) => any) | undefined;
"onUpdate:checked"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("close" | "check" | "update:checked")[], "close" | "check" | "update:checked", {
size: string;
shape: TagShape;
bordered: boolean;
variant: TagVariant;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        icon: (_: {}) => any;
        default: (_: {}) => any;
        'close-icon': (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayTagInput: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            size: TagInputSize;
            placeholder: string;
            minCollapsedNum: number;
        }> & Omit<Readonly<ExtractPropTypes<    {
        max: {
        type: PropType<number>;
        };
        disabled: {
        type: PropType<boolean>;
        };
        size: {
        type: PropType<TagInputSize>;
        } & {
        default: string;
        };
        readonly: {
        type: PropType<boolean>;
        };
        placeholder: {
        type: PropType<string>;
        } & {
        default: undefined;
        };
        modelValue: {
        type: PropType<(string | number | TagData)[]>;
        };
        allowClear: {
        type: PropType<boolean>;
        };
        disabledInput: {
        type: PropType<boolean>;
        };
        inputValue: {
        type: PropType<string>;
        };
        minCollapsedNum: {
        type: PropType<number>;
        } & {
        default: number;
        };
        collapseTagsTooltip: {
        type: PropType<boolean>;
        };
        tagProps: {
        type: PropType<TagProps>;
        };
        }>> & {
            onFocus?: ((...args: any[]) => any) | undefined;
            onBlur?: ((...args: any[]) => any) | undefined;
            onChange?: ((...args: any[]) => any) | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
            onClear?: ((...args: any[]) => any) | undefined;
            onRemove?: ((...args: any[]) => any) | undefined;
            "onUpdate:inputValue"?: ((...args: any[]) => any) | undefined;
            onInputValueChange?: ((...args: any[]) => any) | undefined;
            onPressEnter?: ((...args: any[]) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "size" | "placeholder" | "minCollapsedNum">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "remove" | "blur" | "change" | "focus" | "clear" | "update:modelValue" | "update:inputValue" | "inputValueChange" | "pressEnter", ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        max: {
        type: PropType<number>;
        };
        disabled: {
        type: PropType<boolean>;
        };
        size: {
        type: PropType<TagInputSize>;
        } & {
        default: string;
        };
        readonly: {
        type: PropType<boolean>;
        };
        placeholder: {
        type: PropType<string>;
        } & {
        default: undefined;
        };
        modelValue: {
        type: PropType<(string | number | TagData)[]>;
        };
        allowClear: {
        type: PropType<boolean>;
        };
        disabledInput: {
        type: PropType<boolean>;
        };
        inputValue: {
        type: PropType<string>;
        };
        minCollapsedNum: {
        type: PropType<number>;
        } & {
        default: number;
        };
        collapseTagsTooltip: {
        type: PropType<boolean>;
        };
        tagProps: {
        type: PropType<TagProps>;
        };
        }>> & {
        onFocus?: ((...args: any[]) => any) | undefined;
        onBlur?: ((...args: any[]) => any) | undefined;
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onClear?: ((...args: any[]) => any) | undefined;
        onRemove?: ((...args: any[]) => any) | undefined;
        "onUpdate:inputValue"?: ((...args: any[]) => any) | undefined;
        onInputValueChange?: ((...args: any[]) => any) | undefined;
        onPressEnter?: ((...args: any[]) => any) | undefined;
        }, {
        focus: (e: FocusEvent) => void;
        blur: (e: FocusEvent) => void;
        }, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("remove" | "blur" | "change" | "focus" | "clear" | "update:modelValue" | "update:inputValue" | "inputValueChange" | "pressEnter")[], string, {
        size: TagInputSize;
        placeholder: string;
        minCollapsedNum: number;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    max: {
    type: PropType<number>;
    };
    disabled: {
    type: PropType<boolean>;
    };
    size: {
    type: PropType<TagInputSize>;
    } & {
    default: string;
    };
    readonly: {
    type: PropType<boolean>;
    };
    placeholder: {
    type: PropType<string>;
    } & {
    default: undefined;
    };
    modelValue: {
    type: PropType<(string | number | TagData)[]>;
    };
    allowClear: {
    type: PropType<boolean>;
    };
    disabledInput: {
    type: PropType<boolean>;
    };
    inputValue: {
    type: PropType<string>;
    };
    minCollapsedNum: {
    type: PropType<number>;
    } & {
    default: number;
    };
    collapseTagsTooltip: {
    type: PropType<boolean>;
    };
    tagProps: {
    type: PropType<TagProps>;
    };
    }>> & {
        onFocus?: ((...args: any[]) => any) | undefined;
        onBlur?: ((...args: any[]) => any) | undefined;
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onClear?: ((...args: any[]) => any) | undefined;
        onRemove?: ((...args: any[]) => any) | undefined;
        "onUpdate:inputValue"?: ((...args: any[]) => any) | undefined;
        onInputValueChange?: ((...args: any[]) => any) | undefined;
        onPressEnter?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {
    focus: (e: FocusEvent) => void;
    blur: (e: FocusEvent) => void;
    }> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
max: {
type: PropType<number>;
};
disabled: {
type: PropType<boolean>;
};
size: {
type: PropType<TagInputSize>;
} & {
default: string;
};
readonly: {
type: PropType<boolean>;
};
placeholder: {
type: PropType<string>;
} & {
default: undefined;
};
modelValue: {
type: PropType<(string | number | TagData)[]>;
};
allowClear: {
type: PropType<boolean>;
};
disabledInput: {
type: PropType<boolean>;
};
inputValue: {
type: PropType<string>;
};
minCollapsedNum: {
type: PropType<number>;
} & {
default: number;
};
collapseTagsTooltip: {
type: PropType<boolean>;
};
tagProps: {
type: PropType<TagProps>;
};
}>> & {
onFocus?: ((...args: any[]) => any) | undefined;
onBlur?: ((...args: any[]) => any) | undefined;
onChange?: ((...args: any[]) => any) | undefined;
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
onClear?: ((...args: any[]) => any) | undefined;
onRemove?: ((...args: any[]) => any) | undefined;
"onUpdate:inputValue"?: ((...args: any[]) => any) | undefined;
onInputValueChange?: ((...args: any[]) => any) | undefined;
onPressEnter?: ((...args: any[]) => any) | undefined;
}, {
focus: (e: FocusEvent) => void;
blur: (e: FocusEvent) => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("remove" | "blur" | "change" | "focus" | "clear" | "update:modelValue" | "update:inputValue" | "inputValueChange" | "pressEnter")[], "remove" | "clear" | "blur" | "change" | "focus" | "update:modelValue" | "update:inputValue" | "inputValueChange" | "pressEnter", {
size: TagInputSize;
placeholder: string;
minCollapsedNum: number;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        prefix: (_: {}) => any;
        suffix: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayTextarea: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<ExtractPropTypes<    {
        name: {
        type: PropType<string>;
        };
        modelValue: {
        type: PropType<string>;
        };
        placeholder: {
        type: PropType<string>;
        };
        disabled: {
        type: PropType<boolean>;
        };
        showCount: {
        type: PropType<boolean>;
        };
        allowClear: {
        type: PropType<boolean>;
        };
        maxlength: {
        type: PropType<number>;
        };
        }>> & {
            onFocus?: ((evt: Event) => any) | undefined;
            onBlur?: ((evt: Event) => any) | undefined;
            onChange?: ((value: string) => any) | undefined;
            onInput?: ((value: string) => any) | undefined;
            "onUpdate:modelValue"?: ((value: string) => any) | undefined;
            onClear?: (() => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: ((event: "input", value: string) => void) & ((event: "clear") => void) & ((event: "blur", evt: Event) => void) & ((event: "change", value: string) => void) & ((event: "focus", evt: Event) => void) & ((event: "update:modelValue", value: string) => void);
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        name: {
        type: PropType<string>;
        };
        modelValue: {
        type: PropType<string>;
        };
        placeholder: {
        type: PropType<string>;
        };
        disabled: {
        type: PropType<boolean>;
        };
        showCount: {
        type: PropType<boolean>;
        };
        allowClear: {
        type: PropType<boolean>;
        };
        maxlength: {
        type: PropType<number>;
        };
        }>> & {
        onFocus?: ((evt: Event) => any) | undefined;
        onBlur?: ((evt: Event) => any) | undefined;
        onChange?: ((value: string) => any) | undefined;
        onInput?: ((value: string) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        onClear?: (() => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        blur: (evt: Event) => void;
        } & {
        input: (value: string) => void;
        } & {
        "update:modelValue": (value: string) => void;
        } & {
        change: (value: string) => void;
        } & {
        focus: (evt: Event) => void;
        } & {
        clear: () => void;
        }, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    name: {
    type: PropType<string>;
    };
    modelValue: {
    type: PropType<string>;
    };
    placeholder: {
    type: PropType<string>;
    };
    disabled: {
    type: PropType<boolean>;
    };
    showCount: {
    type: PropType<boolean>;
    };
    allowClear: {
    type: PropType<boolean>;
    };
    maxlength: {
    type: PropType<number>;
    };
    }>> & {
        onFocus?: ((evt: Event) => any) | undefined;
        onBlur?: ((evt: Event) => any) | undefined;
        onChange?: ((value: string) => any) | undefined;
        onInput?: ((value: string) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        onClear?: (() => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
name: {
type: PropType<string>;
};
modelValue: {
type: PropType<string>;
};
placeholder: {
type: PropType<string>;
};
disabled: {
type: PropType<boolean>;
};
showCount: {
type: PropType<boolean>;
};
allowClear: {
type: PropType<boolean>;
};
maxlength: {
type: PropType<number>;
};
}>> & {
onFocus?: ((evt: Event) => any) | undefined;
onBlur?: ((evt: Event) => any) | undefined;
onChange?: ((value: string) => any) | undefined;
onInput?: ((value: string) => any) | undefined;
"onUpdate:modelValue"?: ((value: string) => any) | undefined;
onClear?: (() => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
blur: (evt: Event) => void;
} & {
input: (value: string) => void;
} & {
"update:modelValue": (value: string) => void;
} & {
change: (value: string) => void;
} & {
focus: (evt: Event) => void;
} & {
clear: () => void;
}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & Plugin_2;

export declare const LayTimeline: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            direction: "horizontal" | "vertical";
        }> & Omit<Readonly<ExtractPropTypes<    {
        direction: {
        type: PropType<"horizontal" | "vertical">;
        } & {
        default: string;
        };
        }>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "direction">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        direction: {
        type: PropType<"horizontal" | "vertical">;
        } & {
        default: string;
        };
        }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
        direction: "horizontal" | "vertical";
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    direction: {
    type: PropType<"horizontal" | "vertical">;
    } & {
    default: string;
    };
    }>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
direction: {
type: PropType<"horizontal" | "vertical">;
} & {
default: string;
};
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
direction: "horizontal" | "vertical";
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayTimelineItem: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<ExtractPropTypes<    {
        title: {
        type: PropType<string>;
        };
        simple: {
        type: PropType<boolean>;
        };
        }>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        title: {
        type: PropType<string>;
        };
        simple: {
        type: PropType<boolean>;
        };
        }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    title: {
    type: PropType<string>;
    };
    simple: {
    type: PropType<boolean>;
    };
    }>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
title: {
type: PropType<string>;
};
simple: {
type: PropType<boolean>;
};
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        dot: (_: {}) => any;
        title: (_: {}) => any;
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayTooltip: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            position: string;
            visible: boolean;
            disabled: boolean;
            trigger: PopperTrigger | PopperTrigger[];
            enterable: boolean;
            isDark: boolean;
            isCanHide: boolean;
            isAutoShow: boolean;
        }> & Omit<Readonly<ExtractPropTypes<    {
        content: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        };
        position: {
        type: StringConstructor;
        default: string;
        };
        isDark: {
        type: BooleanConstructor;
        default: boolean;
        };
        disabled: {
        type: BooleanConstructor;
        default: boolean;
        };
        isCanHide: {
        type: BooleanConstructor;
        default: boolean;
        };
        isAutoShow: {
        type: BooleanConstructor;
        default: boolean;
        };
        visible: {
        type: BooleanConstructor;
        default: boolean;
        };
        trigger: {
        type: PropType<PopperTrigger | PopperTrigger[]>;
        default: string;
        };
        enterable: {
        type: BooleanConstructor;
        default: boolean;
        };
        popperClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        };
        popperStyle: {
        type: PropType<StyleValue>;
        };
        }>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "position" | "visible" | "disabled" | "trigger" | "enterable" | "isDark" | "isCanHide" | "isAutoShow">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        content: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        };
        position: {
        type: StringConstructor;
        default: string;
        };
        isDark: {
        type: BooleanConstructor;
        default: boolean;
        };
        disabled: {
        type: BooleanConstructor;
        default: boolean;
        };
        isCanHide: {
        type: BooleanConstructor;
        default: boolean;
        };
        isAutoShow: {
        type: BooleanConstructor;
        default: boolean;
        };
        visible: {
        type: BooleanConstructor;
        default: boolean;
        };
        trigger: {
        type: PropType<PopperTrigger | PopperTrigger[]>;
        default: string;
        };
        enterable: {
        type: BooleanConstructor;
        default: boolean;
        };
        popperClass: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        };
        popperStyle: {
        type: PropType<StyleValue>;
        };
        }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
        position: string;
        visible: boolean;
        disabled: boolean;
        trigger: PopperTrigger | PopperTrigger[];
        enterable: boolean;
        isDark: boolean;
        isCanHide: boolean;
        isAutoShow: boolean;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    content: {
    type: (StringConstructor | NumberConstructor)[];
    required: false;
    };
    position: {
    type: StringConstructor;
    default: string;
    };
    isDark: {
    type: BooleanConstructor;
    default: boolean;
    };
    disabled: {
    type: BooleanConstructor;
    default: boolean;
    };
    isCanHide: {
    type: BooleanConstructor;
    default: boolean;
    };
    isAutoShow: {
    type: BooleanConstructor;
    default: boolean;
    };
    visible: {
    type: BooleanConstructor;
    default: boolean;
    };
    trigger: {
    type: PropType<PopperTrigger | PopperTrigger[]>;
    default: string;
    };
    enterable: {
    type: BooleanConstructor;
    default: boolean;
    };
    popperClass: {
    type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
    };
    popperStyle: {
    type: PropType<StyleValue>;
    };
    }>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
content: {
type: (StringConstructor | NumberConstructor)[];
required: false;
};
position: {
type: StringConstructor;
default: string;
};
isDark: {
type: BooleanConstructor;
default: boolean;
};
disabled: {
type: BooleanConstructor;
default: boolean;
};
isCanHide: {
type: BooleanConstructor;
default: boolean;
};
isAutoShow: {
type: BooleanConstructor;
default: boolean;
};
visible: {
type: BooleanConstructor;
default: boolean;
};
trigger: {
type: PropType<PopperTrigger | PopperTrigger[]>;
default: string;
};
enterable: {
type: BooleanConstructor;
default: boolean;
};
popperClass: {
type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
};
popperStyle: {
type: PropType<StyleValue>;
};
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
position: string;
visible: boolean;
disabled: boolean;
trigger: PopperTrigger | PopperTrigger[];
enterable: boolean;
isDark: boolean;
isCanHide: boolean;
isAutoShow: boolean;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
        content: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayTransfer: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            id: string;
            height: string;
            width: string;
            title: string[];
            modelValue: Recordable[];
            showSearch: BooleanOrString;
            dataSource: Recordable[];
        }> & Omit<Readonly<ExtractPropTypes<    {
        id: {
        type: PropType<string>;
        } & {
        default: string;
        };
        height: {
        type: PropType<string>;
        } & {
        default: string;
        };
        width: {
        type: PropType<string>;
        } & {
        default: string;
        };
        title: {
        type: PropType<string[]>;
        } & {
        default: () => string[];
        };
        modelValue: {
        type: PropType<Recordable[]>;
        } & {
        default: () => never[];
        };
        showSearch: {
        type: PropType<BooleanOrString>;
        } & {
        default: boolean;
        };
        dataSource: {
        type: PropType<Recordable[]>;
        required: true;
        } & {
        default: () => never[];
        };
        }>> & {
            onChange?: ((...args: any[]) => any) | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "id" | "height" | "width" | "title" | "modelValue" | "showSearch" | "dataSource">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "change" | "update:modelValue", ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        id: {
        type: PropType<string>;
        } & {
        default: string;
        };
        height: {
        type: PropType<string>;
        } & {
        default: string;
        };
        width: {
        type: PropType<string>;
        } & {
        default: string;
        };
        title: {
        type: PropType<string[]>;
        } & {
        default: () => string[];
        };
        modelValue: {
        type: PropType<Recordable[]>;
        } & {
        default: () => never[];
        };
        showSearch: {
        type: PropType<BooleanOrString>;
        } & {
        default: boolean;
        };
        dataSource: {
        type: PropType<Recordable[]>;
        required: true;
        } & {
        default: () => never[];
        };
        }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "update:modelValue")[], string, {
        id: string;
        height: string;
        width: string;
        title: string[];
        modelValue: Recordable[];
        showSearch: BooleanOrString;
        dataSource: Recordable[];
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    id: {
    type: PropType<string>;
    } & {
    default: string;
    };
    height: {
    type: PropType<string>;
    } & {
    default: string;
    };
    width: {
    type: PropType<string>;
    } & {
    default: string;
    };
    title: {
    type: PropType<string[]>;
    } & {
    default: () => string[];
    };
    modelValue: {
    type: PropType<Recordable[]>;
    } & {
    default: () => never[];
    };
    showSearch: {
    type: PropType<BooleanOrString>;
    } & {
    default: boolean;
    };
    dataSource: {
    type: PropType<Recordable[]>;
    required: true;
    } & {
    default: () => never[];
    };
    }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
id: {
type: PropType<string>;
} & {
default: string;
};
height: {
type: PropType<string>;
} & {
default: string;
};
width: {
type: PropType<string>;
} & {
default: string;
};
title: {
type: PropType<string[]>;
} & {
default: () => string[];
};
modelValue: {
type: PropType<Recordable[]>;
} & {
default: () => never[];
};
showSearch: {
type: PropType<BooleanOrString>;
} & {
default: boolean;
};
dataSource: {
type: PropType<Recordable[]>;
required: true;
} & {
default: () => never[];
};
}>> & {
onChange?: ((...args: any[]) => any) | undefined;
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", {
id: string;
height: string;
width: string;
title: string[];
modelValue: Recordable[];
showSearch: BooleanOrString;
dataSource: Recordable[];
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        item: (_: {
            data: any;
        }) => any;
        leftFooter: (_: {}) => any;
        rightFooter: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayTransition: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            type: string;
            time: string | number;
            enable: boolean;
        }> & Omit<Readonly<ExtractPropTypes<    {
        type: {
        type: PropType<string>;
        } & {
        default: string;
        };
        time: {
        type: PropType<string | number>;
        } & {
        default: number;
        };
        enable: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        }>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "type" | "time" | "enable">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        type: {
        type: PropType<string>;
        } & {
        default: string;
        };
        time: {
        type: PropType<string | number>;
        } & {
        default: number;
        };
        enable: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
        type: string;
        time: string | number;
        enable: boolean;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    type: {
    type: PropType<string>;
    } & {
    default: string;
    };
    time: {
    type: PropType<string | number>;
    } & {
    default: number;
    };
    enable: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    }>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
type: {
type: PropType<string>;
} & {
default: string;
};
time: {
type: PropType<string | number>;
} & {
default: number;
};
enable: {
type: PropType<boolean>;
} & {
default: boolean;
};
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
type: string;
time: string | number;
enable: boolean;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
}) & Plugin_2;

export declare const LayTree: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
            replaceFields: ReplaceFieldsOptions;
            collapseTransition: boolean;
            checkedKeys: KeysType;
            checkStrictly: string | boolean;
            showCheckbox: boolean;
            showLine: boolean;
            onlyIconControl: boolean;
            edit: EditType;
        }> & Omit<Readonly<ExtractPropTypes<    {
        data: {
        type: PropType<OriginalTreeData>;
        required: true;
        };
        disabled: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        replaceFields: {
        type: PropType<ReplaceFieldsOptions>;
        } & {
        default: () => {
        id: string;
        children: string;
        title: string;
        };
        };
        collapseTransition: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        selectedKey: {
        type: PropType<any>;
        };
        checkedKeys: {
        type: PropType<KeysType>;
        } & {
        default: () => never[];
        };
        checkStrictly: {
        type: PropType<string | boolean>;
        } & {
        default: boolean;
        };
        showCheckbox: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        showLine: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        onlyIconControl: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        edit: {
        type: PropType<EditType>;
        } & {
        default: boolean;
        };
        }>> & {
            "onUpdate:expandKeys"?: ((keys: KeysType) => any) | undefined;
            "onNode-click"?: ((node: OriginalTreeData) => any) | undefined;
            "onUpdate:checkedKeys"?: ((keys: KeysType) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "disabled" | "replaceFields" | "collapseTransition" | "checkedKeys" | "checkStrictly" | "showCheckbox" | "showLine" | "onlyIconControl" | "edit">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: ((event: "update:expandKeys", keys: KeysType) => void) & ((event: "update:checkedKeys", keys: KeysType) => void) & ((event: "node-click", node: OriginalTreeData) => void);
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        data: {
        type: PropType<OriginalTreeData>;
        required: true;
        };
        disabled: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        replaceFields: {
        type: PropType<ReplaceFieldsOptions>;
        } & {
        default: () => {
        id: string;
        children: string;
        title: string;
        };
        };
        collapseTransition: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        selectedKey: {
        type: PropType<any>;
        };
        checkedKeys: {
        type: PropType<KeysType>;
        } & {
        default: () => never[];
        };
        checkStrictly: {
        type: PropType<string | boolean>;
        } & {
        default: boolean;
        };
        showCheckbox: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        showLine: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        onlyIconControl: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        edit: {
        type: PropType<EditType>;
        } & {
        default: boolean;
        };
        }>> & {
        "onUpdate:expandKeys"?: ((keys: KeysType) => any) | undefined;
        "onNode-click"?: ((node: OriginalTreeData) => any) | undefined;
        "onUpdate:checkedKeys"?: ((keys: KeysType) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        "update:checkedKeys": (keys: KeysType) => void;
        } & {
        "update:expandKeys": (keys: KeysType) => void;
        } & {
        "node-click": (node: OriginalTreeData) => void;
        }, string, {
        disabled: boolean;
        replaceFields: ReplaceFieldsOptions;
        collapseTransition: boolean;
        checkedKeys: KeysType;
        checkStrictly: string | boolean;
        showCheckbox: boolean;
        showLine: boolean;
        onlyIconControl: boolean;
        edit: EditType;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    data: {
    type: PropType<OriginalTreeData>;
    required: true;
    };
    disabled: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    replaceFields: {
    type: PropType<ReplaceFieldsOptions>;
    } & {
    default: () => {
    id: string;
    children: string;
    title: string;
    };
    };
    collapseTransition: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    selectedKey: {
    type: PropType<any>;
    };
    checkedKeys: {
    type: PropType<KeysType>;
    } & {
    default: () => never[];
    };
    checkStrictly: {
    type: PropType<string | boolean>;
    } & {
    default: boolean;
    };
    showCheckbox: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    showLine: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    onlyIconControl: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    edit: {
    type: PropType<EditType>;
    } & {
    default: boolean;
    };
    }>> & {
        "onUpdate:expandKeys"?: ((keys: KeysType) => any) | undefined;
        "onNode-click"?: ((node: OriginalTreeData) => any) | undefined;
        "onUpdate:checkedKeys"?: ((keys: KeysType) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
data: {
type: PropType<OriginalTreeData>;
required: true;
};
disabled: {
type: PropType<boolean>;
} & {
default: boolean;
};
replaceFields: {
type: PropType<ReplaceFieldsOptions>;
} & {
default: () => {
id: string;
children: string;
title: string;
};
};
collapseTransition: {
type: PropType<boolean>;
} & {
default: boolean;
};
selectedKey: {
type: PropType<any>;
};
checkedKeys: {
type: PropType<KeysType>;
} & {
default: () => never[];
};
checkStrictly: {
type: PropType<string | boolean>;
} & {
default: boolean;
};
showCheckbox: {
type: PropType<boolean>;
} & {
default: boolean;
};
showLine: {
type: PropType<boolean>;
} & {
default: boolean;
};
onlyIconControl: {
type: PropType<boolean>;
} & {
default: boolean;
};
edit: {
type: PropType<EditType>;
} & {
default: boolean;
};
}>> & {
"onUpdate:expandKeys"?: ((keys: KeysType) => any) | undefined;
"onNode-click"?: ((node: OriginalTreeData) => any) | undefined;
"onUpdate:checkedKeys"?: ((keys: KeysType) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:checkedKeys": (keys: KeysType) => void;
} & {
"update:expandKeys": (keys: KeysType) => void;
} & {
"node-click": (node: OriginalTreeData) => void;
}, string, {
disabled: boolean;
replaceFields: ReplaceFieldsOptions;
collapseTransition: boolean;
checkedKeys: KeysType;
checkStrictly: string | boolean;
showCheckbox: boolean;
showLine: boolean;
onlyIconControl: boolean;
edit: EditType;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        title: (_: {
            data: any;
        }) => any;
    };
}) & Plugin_2;

export declare const LayUpload: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            number: number;
            text: string;
            cut: boolean;
            drag: boolean;
            disabled: boolean;
            multiple: boolean;
            size: number;
            field: string;
            acceptMime: string;
            dragText: string;
            disabledPreview: boolean;
            cutOptions: CutOptions;
        }> & Omit<Readonly<ExtractPropTypes<    {
        number: {
        type: PropType<number>;
        } & {
        default: number;
        };
        data: {
        type: PropType<any>;
        };
        url: {
        type: PropType<string>;
        };
        text: {
        type: PropType<string>;
        } & {
        default: string;
        };
        cut: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        drag: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        disabled: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        multiple: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        size: {
        type: PropType<number>;
        } & {
        default: number;
        };
        headers: {
        type: PropType<Recordable>;
        };
        field: {
        type: PropType<string>;
        } & {
        default: string;
        };
        acceptMime: {
        type: PropType<string>;
        } & {
        default: string;
        };
        dragText: {
        type: PropType<string>;
        } & {
        default: string;
        };
        disabledPreview: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        cutOptions: {
        type: PropType<CutOptions>;
        } & {
        default: undefined;
        };
        }>> & {
            onError?: ((...args: any[]) => any) | undefined;
            onDone?: ((...args: any[]) => any) | undefined;
            onChoose?: ((...args: any[]) => any) | undefined;
            onBefore?: ((...args: any[]) => any) | undefined;
            onCutdone?: ((...args: any[]) => any) | undefined;
            onCutcancel?: ((...args: any[]) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "number" | "text" | "cut" | "drag" | "disabled" | "multiple" | "size" | "field" | "acceptMime" | "dragText" | "disabledPreview" | "cutOptions">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "error" | "done" | "choose" | "before" | "cutdone" | "cutcancel", ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
        number: {
        type: PropType<number>;
        } & {
        default: number;
        };
        data: {
        type: PropType<any>;
        };
        url: {
        type: PropType<string>;
        };
        text: {
        type: PropType<string>;
        } & {
        default: string;
        };
        cut: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        drag: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        disabled: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        multiple: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        size: {
        type: PropType<number>;
        } & {
        default: number;
        };
        headers: {
        type: PropType<Recordable>;
        };
        field: {
        type: PropType<string>;
        } & {
        default: string;
        };
        acceptMime: {
        type: PropType<string>;
        } & {
        default: string;
        };
        dragText: {
        type: PropType<string>;
        } & {
        default: string;
        };
        disabledPreview: {
        type: PropType<boolean>;
        } & {
        default: boolean;
        };
        cutOptions: {
        type: PropType<CutOptions>;
        } & {
        default: undefined;
        };
        }>> & {
        onError?: ((...args: any[]) => any) | undefined;
        onDone?: ((...args: any[]) => any) | undefined;
        onChoose?: ((...args: any[]) => any) | undefined;
        onBefore?: ((...args: any[]) => any) | undefined;
        onCutdone?: ((...args: any[]) => any) | undefined;
        onCutcancel?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("error" | "done" | "choose" | "before" | "cutdone" | "cutcancel")[], string, {
        number: number;
        text: string;
        cut: boolean;
        drag: boolean;
        disabled: boolean;
        multiple: boolean;
        size: number;
        field: string;
        acceptMime: string;
        dragText: string;
        disabledPreview: boolean;
        cutOptions: CutOptions;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<    {
    number: {
    type: PropType<number>;
    } & {
    default: number;
    };
    data: {
    type: PropType<any>;
    };
    url: {
    type: PropType<string>;
    };
    text: {
    type: PropType<string>;
    } & {
    default: string;
    };
    cut: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    drag: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    disabled: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    multiple: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    size: {
    type: PropType<number>;
    } & {
    default: number;
    };
    headers: {
    type: PropType<Recordable>;
    };
    field: {
    type: PropType<string>;
    } & {
    default: string;
    };
    acceptMime: {
    type: PropType<string>;
    } & {
    default: string;
    };
    dragText: {
    type: PropType<string>;
    } & {
    default: string;
    };
    disabledPreview: {
    type: PropType<boolean>;
    } & {
    default: boolean;
    };
    cutOptions: {
    type: PropType<CutOptions>;
    } & {
    default: undefined;
    };
    }>> & {
        onError?: ((...args: any[]) => any) | undefined;
        onDone?: ((...args: any[]) => any) | undefined;
        onChoose?: ((...args: any[]) => any) | undefined;
        onBefore?: ((...args: any[]) => any) | undefined;
        onCutdone?: ((...args: any[]) => any) | undefined;
        onCutcancel?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
number: {
type: PropType<number>;
} & {
default: number;
};
data: {
type: PropType<any>;
};
url: {
type: PropType<string>;
};
text: {
type: PropType<string>;
} & {
default: string;
};
cut: {
type: PropType<boolean>;
} & {
default: boolean;
};
drag: {
type: PropType<boolean>;
} & {
default: boolean;
};
disabled: {
type: PropType<boolean>;
} & {
default: boolean;
};
multiple: {
type: PropType<boolean>;
} & {
default: boolean;
};
size: {
type: PropType<number>;
} & {
default: number;
};
headers: {
type: PropType<Recordable>;
};
field: {
type: PropType<string>;
} & {
default: string;
};
acceptMime: {
type: PropType<string>;
} & {
default: string;
};
dragText: {
type: PropType<string>;
} & {
default: string;
};
disabledPreview: {
type: PropType<boolean>;
} & {
default: boolean;
};
cutOptions: {
type: PropType<CutOptions>;
} & {
default: undefined;
};
}>> & {
onError?: ((...args: any[]) => any) | undefined;
onDone?: ((...args: any[]) => any) | undefined;
onChoose?: ((...args: any[]) => any) | undefined;
onBefore?: ((...args: any[]) => any) | undefined;
onCutdone?: ((...args: any[]) => any) | undefined;
onCutcancel?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("error" | "done" | "choose" | "before" | "cutdone" | "cutcancel")[], "error" | "before" | "done" | "choose" | "cutdone" | "cutcancel", {
number: number;
text: string;
cut: boolean;
drag: boolean;
disabled: boolean;
multiple: boolean;
size: number;
field: string;
acceptMime: string;
dragText: string;
disabledPreview: boolean;
cutOptions: CutOptions;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {
            disabled: boolean;
        }) => any;
        preview: (_: {}) => any;
    };
}) & Plugin_2;

declare type modelType = {
    [key: string]: any;
};

declare interface OriginalTreeData {
    title: StringFn | string;
    id: StringOrNumber;
    field: StringFn | string;
    children?: OriginalTreeData[];
    disabled?: boolean;
}

declare type PanelShadow = "always" | "hover" | "never";

declare type PopperTrigger = "click" | "hover" | "focus" | "contextMenu";

declare type RadioSize = "lg" | "md" | "sm" | "xs";

declare type Recordable = Record<string, any>;

declare interface ReplaceFieldsOptions {
    id?: string;
    children?: string;
    title?: string;
}

declare type RippleTrigger = "always" | "mouseenter" | "click";

declare type RippleType = "out" | "inset";

declare interface SelectOptionProps {
    label?: string;
    value: string | number | object;
    disabled?: boolean;
    keyword?: string;
}

declare type SelectSize = "lg" | "md" | "sm" | "xs";

declare type StringFn = () => string;

declare type StringObject = Record<string, unknown>;

declare type StringOrNumber = string | number;

declare type SwitchSize = "lg" | "md" | "sm" | "xs";

declare type TabPosition = "top" | "bottom" | "left" | "right";

declare const TAG_COLORS: readonly ["primary", "normal", "warm", "danger"];

declare interface TagData {
    value?: string | number;
    label?: string;
    closable?: boolean;
    [other: string]: any;
}

declare type TagInputSize = "lg" | "md" | "sm" | "xs";

declare interface TagProps {
    type?: TagType;
    color?: string;
    closable?: boolean;
    size?: string;
    bordered?: boolean;
    disabled?: boolean;
    shape?: TagShape;
    maxWidth?: string;
    variant?: TagVariant;
}

declare type TagShape = "square" | "round";

declare type TagType = typeof TAG_COLORS[number];

declare type TagVariant = "dark" | "light" | "plain";

export declare function useI18n(): Composer<unknown, unknown, unknown, VueMessageType>;

export { }
