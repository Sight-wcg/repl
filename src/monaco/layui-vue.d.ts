import { AllowedComponentProps } from 'vue';
import type { App } from 'vue';
import Component from './index.vue';
import { ComponentCustomProperties } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentInternalInstance } from 'vue';
import { ComponentOptionsBase } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComponentPublicInstance } from 'vue';
import { default as Cropper_2 } from 'cropperjs';
import { CubicBezierPoints } from '@vueuse/core';
import { DebuggerEvent } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { layer } from '@layui/layer-vue';
import { LayIcon as LayIcon_2 } from '@layui/icons-vue';
import { nextTick } from 'vue';
import { Plugin as Plugin_2 } from 'vue';
import { PropType } from 'vue';
import { Rule } from 'async-validator';
import { ShallowUnwrapRef } from 'vue';
import { Slot } from 'vue';
import { StyleValue } from 'vue';
import { ValidateCallback } from 'async-validator';
import type { ValidateError } from 'async-validator';
import { ValidateMessages } from 'async-validator';
import { VNodeProps } from 'vue';
import { WatchOptions } from 'vue';
import { WatchStopHandle } from 'vue';

declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_10<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_11<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_12<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_13<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_14<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_15<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_16<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_17<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_18<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_19<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_2<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_20<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_21<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_22<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_23<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_24<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_25<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_26<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_27<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_28<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_29<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_3<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_30<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_31<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_32<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_33<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_34<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_35<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_36<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_37<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_38<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_39<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_4<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_40<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_41<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_42<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_43<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_44<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_45<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_46<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_47<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_48<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_49<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_5<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_50<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_51<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_52<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_53<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_54<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_55<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_56<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_57<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_58<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_59<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_6<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_60<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_61<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_62<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_63<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_64<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_65<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_66<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_67<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_68<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_69<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_7<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_70<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_71<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_72<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_73<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_8<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_9<T> = T extends undefined ? never : T;

declare type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_10<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_10<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_11<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_11<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_12<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_12<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_13<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_13<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_14<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_14<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_15<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_15<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_16<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_16<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_17<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_17<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_18<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_18<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_19<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_19<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_2<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_2<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_20<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_20<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_21<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_21<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_22<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_22<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_23<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_23<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_24<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_24<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_25<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_25<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_26<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_26<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_27<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_27<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_28<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_28<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_29<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_29<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_3<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_3<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_30<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_30<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_31<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_31<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_32<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_32<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_33<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_33<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_34<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_34<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_35<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_35<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_36<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_36<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_37<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_37<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_38<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_38<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_39<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_39<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_4<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_4<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_40<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_40<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_41<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_41<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_42<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_42<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_43<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_43<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_44<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_44<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_45<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_45<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_46<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_46<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_47<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_47<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_48<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_48<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_49<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_49<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_5<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_5<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_50<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_50<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_51<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_51<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_52<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_52<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_53<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_53<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_54<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_54<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_55<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_55<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_56<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_56<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_57<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_57<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_58<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_58<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_59<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_59<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_6<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_6<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_60<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_60<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_61<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_61<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_62<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_62<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_63<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_63<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_64<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_64<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_65<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_65<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_66<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_66<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_67<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_67<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_68<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_68<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_69<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_69<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_7<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_7<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_70<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_70<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_71<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_71<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_72<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_72<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_73<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_73<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_8<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_8<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_9<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_9<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_10<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_11<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_12<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_13<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_14<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_15<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_16<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_17<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_18<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_19<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_2<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_20<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_21<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_22<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_23<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_24<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_25<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_26<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_27<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_28<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_29<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_3<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_30<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_31<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_32<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_33<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_34<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_35<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_36<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_37<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_38<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_39<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_4<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_40<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_41<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_42<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_43<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_44<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_45<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_46<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_47<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_48<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_49<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_5<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_50<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_51<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_52<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_53<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_54<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_55<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_56<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_57<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_58<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_59<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_6<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_60<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_61<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_62<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_7<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_8<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type __VLS_WithDefaults_9<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

declare type BooleanOrString = boolean | string;

declare type ButtonBorder = "green" | "blue" | "orange" | "red" | "black";

declare type ButtonNativeType = "button" | "submit" | "reset";

declare type ButtonSize = "lg" | "sm" | "xs";

declare type ButtonType = "primary" | "normal" | "warm" | "danger";

declare type CardShadow = "always" | "hover" | "never";

declare interface cutOptions {
    layerOption: LayerModal;
    copperOption?: typeof Cropper_2;
}

declare const _default: {
    install: (app: App<any>, options?: InstallOptions | undefined) => void;
};
export default _default;

declare const _default_10: {
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
});

declare const _default_11: {
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
});

declare const _default_12: {
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
});

declare const _default_13: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            shadow: PanelShadow;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_8<__VLS_TypePropsToRuntimeProps_8<LayPanelProps>, {
        shadow: string;
        }>>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "shadow">;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_8<__VLS_TypePropsToRuntimeProps_8<LayPanelProps>, {
        shadow: string;
        }>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_8<__VLS_TypePropsToRuntimeProps_8<LayPanelProps>, {
    shadow: string;
    }>>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_8<__VLS_TypePropsToRuntimeProps_8<LayPanelProps>, {
shadow: string;
}>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
shadow: PanelShadow;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});

declare const _default_14: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            shadow: CardShadow;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_9<__VLS_TypePropsToRuntimeProps_9<LayCardProps>, {
        shadow: string;
        }>>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "shadow">;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_9<__VLS_TypePropsToRuntimeProps_9<LayCardProps>, {
        shadow: string;
        }>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_9<__VLS_TypePropsToRuntimeProps_9<LayCardProps>, {
    shadow: string;
    }>>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_9<__VLS_TypePropsToRuntimeProps_9<LayCardProps>, {
shadow: string;
}>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
shadow: CardShadow;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        title: (_: {}) => any;
        extra: (_: {}) => any;
        body: (_: {}) => any;
        default: (_: {}) => any;
        footer: (_: {}) => any;
    };
});

declare const _default_15: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            circle: boolean;
            circleSize: number;
            circleWidth: number;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_10<__VLS_TypePropsToRuntimeProps_10<LayProgressProps>, {
        circle: boolean;
        circleSize: number;
        circleWidth: number;
        }>>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "circle" | "circleSize" | "circleWidth">;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_10<__VLS_TypePropsToRuntimeProps_10<LayProgressProps>, {
        circle: boolean;
        circleSize: number;
        circleWidth: number;
        }>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_10<__VLS_TypePropsToRuntimeProps_10<LayProgressProps>, {
    circle: boolean;
    circleSize: number;
    circleWidth: number;
    }>>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_10<__VLS_TypePropsToRuntimeProps_10<LayProgressProps>, {
circle: boolean;
circleSize: number;
circleWidth: number;
}>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
circle: boolean;
circleSize: number;
circleWidth: number;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps;

declare const _default_16: {
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
});

declare const _default_17: {
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
});

declare const _default_18: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_11<LayRowProps>>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, never>;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_11<LayRowProps>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & {
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
    } & Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_11<LayRowProps>>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_11<LayRowProps>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});

declare const _default_19: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_12<LayColProps>>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, never>;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_12<LayColProps>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & {
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
    } & Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_12<LayColProps>>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_12<LayColProps>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});

declare const _default_2: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            space: number;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<LayStepItemProps>, {
        space: number;
        }>>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "space">;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<LayStepItemProps>, {
        space: number;
        }>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<LayStepItemProps>, {
    space: number;
    }>>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<LayStepItemProps>, {
space: number;
}>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
space: number;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});

declare const _default_20: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            password: boolean;
            autofocus: boolean;
            disabled: boolean;
            size: "xs" | "sm" | "md" | "lg";
            readonly: boolean;
            modelValue: string | number;
            allowClear: boolean;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_11<__VLS_TypePropsToRuntimeProps_13<LayInputProps>, {
        disabled: boolean;
        readonly: boolean;
        allowClear: boolean;
        autofocus: boolean;
        password: boolean;
        modelValue: string;
        size: string;
        }>>> & {
            onFocus?: ((event: Event) => any) | undefined;
            onBlur?: ((event: Event) => any) | undefined;
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
        $emit: ((event: "input", value: string) => void) & ((event: "clear") => void) & ((event: "blur", event: Event) => void) & ((event: "change", value: string) => void) & ((event: "focus", event: Event) => void) & ((event: "update:modelValue", value: string) => void);
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_11<__VLS_TypePropsToRuntimeProps_13<LayInputProps>, {
        disabled: boolean;
        readonly: boolean;
        allowClear: boolean;
        autofocus: boolean;
        password: boolean;
        modelValue: string;
        size: string;
        }>>> & {
        onFocus?: ((event: Event) => any) | undefined;
        onBlur?: ((event: Event) => any) | undefined;
        onChange?: ((value: string) => any) | undefined;
        onInput?: ((value: string) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        onClear?: (() => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        blur: (event: Event) => void;
        } & {
        input: (value: string) => void;
        } & {
        "update:modelValue": (value: string) => void;
        } & {
        change: (value: string) => void;
        } & {
        focus: (event: Event) => void;
        } & {
        clear: () => void;
        }, string, {
        password: boolean;
        autofocus: boolean;
        disabled: boolean;
        size: "xs" | "sm" | "md" | "lg";
        readonly: boolean;
        modelValue: string | number;
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_11<__VLS_TypePropsToRuntimeProps_13<LayInputProps>, {
    disabled: boolean;
    readonly: boolean;
    allowClear: boolean;
    autofocus: boolean;
    password: boolean;
    modelValue: string;
    size: string;
    }>>> & {
        onFocus?: ((event: Event) => any) | undefined;
        onBlur?: ((event: Event) => any) | undefined;
        onChange?: ((value: string) => any) | undefined;
        onInput?: ((value: string) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        onClear?: (() => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_11<__VLS_TypePropsToRuntimeProps_13<LayInputProps>, {
disabled: boolean;
readonly: boolean;
allowClear: boolean;
autofocus: boolean;
password: boolean;
modelValue: string;
size: string;
}>>> & {
onFocus?: ((event: Event) => any) | undefined;
onBlur?: ((event: Event) => any) | undefined;
onChange?: ((value: string) => any) | undefined;
onInput?: ((value: string) => any) | undefined;
"onUpdate:modelValue"?: ((value: string) => any) | undefined;
onClear?: (() => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
blur: (event: Event) => void;
} & {
input: (value: string) => void;
} & {
"update:modelValue": (value: string) => void;
} & {
change: (value: string) => void;
} & {
focus: (event: Event) => void;
} & {
clear: () => void;
}, string, {
password: boolean;
autofocus: boolean;
disabled: boolean;
size: "xs" | "sm" | "md" | "lg";
readonly: boolean;
modelValue: string | number;
allowClear: boolean;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        prepend: (_: {}) => any;
        prefix: (_: {}) => any;
        suffix: (_: {}) => any;
        append: (_: {}) => any;
    };
});

declare const _default_21: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_14<LayBadgeProps>>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, never>;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_14<LayBadgeProps>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & {
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
    } & Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_14<LayBadgeProps>>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_14<LayBadgeProps>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});

declare const _default_22: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_15<LayQuoteProps>>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, never>;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_15<LayQuoteProps>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & {
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
    } & Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_15<LayQuoteProps>>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_15<LayQuoteProps>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});

declare const _default_23: {
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
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_12<__VLS_TypePropsToRuntimeProps_16<LayLineProps>, {
        direction: string;
        contentPosition: string;
        borderWidth: string;
        borderStyle: string;
        offset: string;
        margin: string;
        }>>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "offset" | "borderStyle" | "borderWidth" | "direction" | "margin" | "contentPosition">;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_12<__VLS_TypePropsToRuntimeProps_16<LayLineProps>, {
        direction: string;
        contentPosition: string;
        borderWidth: string;
        borderStyle: string;
        offset: string;
        margin: string;
        }>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_12<__VLS_TypePropsToRuntimeProps_16<LayLineProps>, {
    direction: string;
    contentPosition: string;
    borderWidth: string;
    borderStyle: string;
    offset: string;
    margin: string;
    }>>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_12<__VLS_TypePropsToRuntimeProps_16<LayLineProps>, {
direction: string;
contentPosition: string;
borderWidth: string;
borderStyle: string;
offset: string;
margin: string;
}>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
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
});

declare const _default_24: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            direction: "horizontal" | "vertical";
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_13<__VLS_TypePropsToRuntimeProps_17<LayTimelineProps>, {
        direction: string;
        }>>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "direction">;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_13<__VLS_TypePropsToRuntimeProps_17<LayTimelineProps>, {
        direction: string;
        }>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_13<__VLS_TypePropsToRuntimeProps_17<LayTimelineProps>, {
    direction: string;
    }>>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_13<__VLS_TypePropsToRuntimeProps_17<LayTimelineProps>, {
direction: string;
}>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
direction: "horizontal" | "vertical";
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});

declare const _default_25: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_18<LayTimelineItemProps>>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, never>;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_18<LayTimelineItemProps>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & {
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
    } & Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_18<LayTimelineItemProps>>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_18<LayTimelineItemProps>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        dot: (_: {}) => any;
        title: (_: {}) => any;
        default: (_: {}) => any;
    };
});

declare const _default_26: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_19<LayTextareaProps>>> & {
            onFocus?: ((event: Event) => any) | undefined;
            onBlur?: ((event: Event) => any) | undefined;
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
        $emit: ((event: "input", value: string) => void) & ((event: "clear") => void) & ((event: "blur", event: Event) => void) & ((event: "change", value: string) => void) & ((event: "focus", event: Event) => void) & ((event: "update:modelValue", value: string) => void);
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_19<LayTextareaProps>>> & {
        onFocus?: ((event: Event) => any) | undefined;
        onBlur?: ((event: Event) => any) | undefined;
        onChange?: ((value: string) => any) | undefined;
        onInput?: ((value: string) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        onClear?: (() => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        blur: (event: Event) => void;
        } & {
        input: (value: string) => void;
        } & {
        "update:modelValue": (value: string) => void;
        } & {
        change: (value: string) => void;
        } & {
        focus: (event: Event) => void;
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
    } & Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_19<LayTextareaProps>>> & {
        onFocus?: ((event: Event) => any) | undefined;
        onBlur?: ((event: Event) => any) | undefined;
        onChange?: ((value: string) => any) | undefined;
        onInput?: ((value: string) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        onClear?: (() => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_19<LayTextareaProps>>> & {
onFocus?: ((event: Event) => any) | undefined;
onBlur?: ((event: Event) => any) | undefined;
onChange?: ((value: string) => any) | undefined;
onInput?: ((value: string) => any) | undefined;
"onUpdate:modelValue"?: ((value: string) => any) | undefined;
onClear?: (() => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
blur: (event: Event) => void;
} & {
input: (value: string) => void;
} & {
"update:modelValue": (value: string) => void;
} & {
change: (value: string) => void;
} & {
focus: (event: Event) => void;
} & {
clear: () => void;
}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps;

declare const _default_27: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
            size: "xs" | "sm" | "md" | "lg";
            loadingIcon: string;
            onswitchValue: string | number | boolean;
            unswitchValue: string | number | boolean;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_14<__VLS_TypePropsToRuntimeProps_20<LaySwitchProps>, {
        disabled: boolean;
        onswitchValue: boolean;
        unswitchValue: boolean;
        loadingIcon: string;
        size: string;
        }>>> & {
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_14<__VLS_TypePropsToRuntimeProps_20<LaySwitchProps>, {
        disabled: boolean;
        onswitchValue: boolean;
        unswitchValue: boolean;
        loadingIcon: string;
        size: string;
        }>>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "update:modelValue")[], string, {
        disabled: boolean;
        size: "xs" | "sm" | "md" | "lg";
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_14<__VLS_TypePropsToRuntimeProps_20<LaySwitchProps>, {
    disabled: boolean;
    onswitchValue: boolean;
    unswitchValue: boolean;
    loadingIcon: string;
    size: string;
    }>>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_14<__VLS_TypePropsToRuntimeProps_20<LaySwitchProps>, {
disabled: boolean;
onswitchValue: boolean;
unswitchValue: boolean;
loadingIcon: string;
size: string;
}>>> & {
onChange?: ((...args: any[]) => any) | undefined;
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", {
disabled: boolean;
size: "xs" | "sm" | "md" | "lg";
loadingIcon: string;
onswitchValue: string | number | boolean;
unswitchValue: string | number | boolean;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        'onswitch-icon': (_: {}) => any;
        'unswitch-icon': (_: {}) => any;
    };
});

declare const _default_28: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            modelValue: string | number | [];
            accordion: boolean;
            collapseTransition: boolean;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_15<__VLS_TypePropsToRuntimeProps_21<LayCollapseProps>, {
        modelValue: () => never[];
        accordion: boolean;
        collapseTransition: boolean;
        }>>> & {
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_15<__VLS_TypePropsToRuntimeProps_21<LayCollapseProps>, {
        modelValue: () => never[];
        accordion: boolean;
        collapseTransition: boolean;
        }>>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "update:modelValue")[], string, {
        modelValue: string | number | [];
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_15<__VLS_TypePropsToRuntimeProps_21<LayCollapseProps>, {
    modelValue: () => never[];
    accordion: boolean;
    collapseTransition: boolean;
    }>>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_15<__VLS_TypePropsToRuntimeProps_21<LayCollapseProps>, {
modelValue: () => never[];
accordion: boolean;
collapseTransition: boolean;
}>>> & {
onChange?: ((...args: any[]) => any) | undefined;
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", {
modelValue: string | number | [];
accordion: boolean;
collapseTransition: boolean;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});

declare const _default_29: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_16<__VLS_TypePropsToRuntimeProps_22<LayCollapseItemProps>, {
        disabled: boolean;
        }>>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "disabled">;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_16<__VLS_TypePropsToRuntimeProps_22<LayCollapseItemProps>, {
        disabled: boolean;
        }>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_16<__VLS_TypePropsToRuntimeProps_22<LayCollapseItemProps>, {
    disabled: boolean;
    }>>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_16<__VLS_TypePropsToRuntimeProps_22<LayCollapseItemProps>, {
disabled: boolean;
}>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
disabled: boolean;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        title: (_: {
            props: Readonly<LayCollapseItemProps> & {
                disabled: boolean;
            };
        }) => any;
        default: (_: {
            props: Readonly<LayCollapseItemProps> & {
                disabled: boolean;
            };
        }) => any;
    };
});

declare const _default_3: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            size: "xs" | "sm" | "md" | "lg";
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_2<__VLS_TypePropsToRuntimeProps_2<LayRadioProps>, {
        size: string;
        }>>> & {
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_2<__VLS_TypePropsToRuntimeProps_2<LayRadioProps>, {
        size: string;
        }>>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "update:modelValue")[], string, {
        size: "xs" | "sm" | "md" | "lg";
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_2<__VLS_TypePropsToRuntimeProps_2<LayRadioProps>, {
    size: string;
    }>>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_2<__VLS_TypePropsToRuntimeProps_2<LayRadioProps>, {
size: string;
}>>> & {
onChange?: ((...args: any[]) => any) | undefined;
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", {
size: "xs" | "sm" | "md" | "lg";
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});

declare const _default_30: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            fluid: BooleanOrString;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_17<__VLS_TypePropsToRuntimeProps_23<LayContainerProps>, {
        fluid: boolean;
        }>>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "fluid">;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_17<__VLS_TypePropsToRuntimeProps_23<LayContainerProps>, {
        fluid: boolean;
        }>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_17<__VLS_TypePropsToRuntimeProps_23<LayContainerProps>, {
    fluid: boolean;
    }>>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_17<__VLS_TypePropsToRuntimeProps_23<LayContainerProps>, {
fluid: boolean;
}>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
fluid: BooleanOrString;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});

declare const _default_31: {
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
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_18<__VLS_TypePropsToRuntimeProps_24<LayMenuProps>, {
        selectedKey: string;
        openKeys: () => never[];
        tree: boolean;
        theme: string;
        inverted: boolean;
        level: boolean;
        collapse: boolean;
        collapseTransition: boolean;
        indent: boolean;
        }>>> & {
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_18<__VLS_TypePropsToRuntimeProps_24<LayMenuProps>, {
        selectedKey: string;
        openKeys: () => never[];
        tree: boolean;
        theme: string;
        inverted: boolean;
        level: boolean;
        collapse: boolean;
        collapseTransition: boolean;
        indent: boolean;
        }>>> & {
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_18<__VLS_TypePropsToRuntimeProps_24<LayMenuProps>, {
    selectedKey: string;
    openKeys: () => never[];
    tree: boolean;
    theme: string;
    inverted: boolean;
    level: boolean;
    collapse: boolean;
    collapseTransition: boolean;
    indent: boolean;
    }>>> & {
        "onUpdate:selectedKey"?: ((...args: any[]) => any) | undefined;
        "onUpdate:openKeys"?: ((...args: any[]) => any) | undefined;
        onChangeSelectedKey?: ((...args: any[]) => any) | undefined;
        onChangeOpenKeys?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_18<__VLS_TypePropsToRuntimeProps_24<LayMenuProps>, {
selectedKey: string;
openKeys: () => never[];
tree: boolean;
theme: string;
inverted: boolean;
level: boolean;
collapse: boolean;
collapseTransition: boolean;
indent: boolean;
}>>> & {
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
});

declare const _default_32: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_25<LayMenuItemProps>>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, never>;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_25<LayMenuItemProps>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & {
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
    } & Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_25<LayMenuItemProps>>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_25<LayMenuItemProps>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        icon: (_: {}) => any;
        title: (_: {}) => any;
        default: (_: {}) => any;
    };
});

declare const _default_33: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            label: string;
            disabled: boolean;
            size: "xs" | "sm" | "md" | "lg";
            modelValue: boolean | (string | number | object)[];
            isIndeterminate: boolean;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_19<__VLS_TypePropsToRuntimeProps_26<LayCheckboxProps>, {
        isIndeterminate: boolean;
        modelValue: boolean;
        disabled: boolean;
        label: string;
        size: string;
        }>>> & {
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_19<__VLS_TypePropsToRuntimeProps_26<LayCheckboxProps>, {
        isIndeterminate: boolean;
        modelValue: boolean;
        disabled: boolean;
        label: string;
        size: string;
        }>>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "update:modelValue")[], string, {
        label: string;
        disabled: boolean;
        size: "xs" | "sm" | "md" | "lg";
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_19<__VLS_TypePropsToRuntimeProps_26<LayCheckboxProps>, {
    isIndeterminate: boolean;
    modelValue: boolean;
    disabled: boolean;
    label: string;
    size: string;
    }>>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_19<__VLS_TypePropsToRuntimeProps_26<LayCheckboxProps>, {
isIndeterminate: boolean;
modelValue: boolean;
disabled: boolean;
label: string;
size: string;
}>>> & {
onChange?: ((...args: any[]) => any) | undefined;
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", {
label: string;
disabled: boolean;
size: "xs" | "sm" | "md" | "lg";
modelValue: boolean | (string | number | object)[];
isIndeterminate: boolean;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});

declare const _default_34: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            model: modelType;
            initValidate: boolean;
            requiredIcons: string;
            useCN: boolean;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_20<__VLS_TypePropsToRuntimeProps_27<LayFormProps>, {
        model: () => {};
        useCN: boolean;
        requiredIcons: string;
        initValidate: boolean;
        }>>> & {
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_20<__VLS_TypePropsToRuntimeProps_27<LayFormProps>, {
        model: () => {};
        useCN: boolean;
        requiredIcons: string;
        initValidate: boolean;
        }>>> & {
        onSubmit?: ((...args: any[]) => any) | undefined;
        }, {
        validate: (fields?: string | string[] | FormCallback | null, callback?: FormCallback | null) => Promise<unknown> | null;
        clearValidate: (fields?: string | string[]) => void;
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_20<__VLS_TypePropsToRuntimeProps_27<LayFormProps>, {
    model: () => {};
    useCN: boolean;
    requiredIcons: string;
    initValidate: boolean;
    }>>> & {
        onSubmit?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {
    validate: (fields?: string | string[] | FormCallback | null, callback?: FormCallback | null) => Promise<unknown> | null;
    clearValidate: (fields?: string | string[]) => void;
    reset: () => void;
    }> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_20<__VLS_TypePropsToRuntimeProps_27<LayFormProps>, {
model: () => {};
useCN: boolean;
requiredIcons: string;
initValidate: boolean;
}>>> & {
onSubmit?: ((...args: any[]) => any) | undefined;
}, {
validate: (fields?: string | string[] | FormCallback | null, callback?: FormCallback | null) => Promise<unknown> | null;
clearValidate: (fields?: string | string[]) => void;
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
});

declare const _default_35: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            separator: string;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_21<__VLS_TypePropsToRuntimeProps_28<LayBreadcrumbProps>, {
        separator: string;
        }>>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "separator">;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_21<__VLS_TypePropsToRuntimeProps_28<LayBreadcrumbProps>, {
        separator: string;
        }>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_21<__VLS_TypePropsToRuntimeProps_28<LayBreadcrumbProps>, {
    separator: string;
    }>>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_21<__VLS_TypePropsToRuntimeProps_28<LayBreadcrumbProps>, {
separator: string;
}>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
separator: string;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});

declare const _default_36: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_29<LayBreadcrumbItemProps>>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, never>;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_29<LayBreadcrumbItemProps>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & {
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
    } & Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_29<LayBreadcrumbItemProps>>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_29<LayBreadcrumbItemProps>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});

declare const _default_37: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            size: "xs" | "sm" | "md" | "lg";
            icon: string;
            radius: boolean;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_22<__VLS_TypePropsToRuntimeProps_30<LayAvatarProps>, {
        size: string;
        radius: boolean;
        icon: string;
        }>>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "size" | "icon" | "radius">;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_22<__VLS_TypePropsToRuntimeProps_30<LayAvatarProps>, {
        size: string;
        radius: boolean;
        icon: string;
        }>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_22<__VLS_TypePropsToRuntimeProps_30<LayAvatarProps>, {
    size: string;
    radius: boolean;
    icon: string;
    }>>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_22<__VLS_TypePropsToRuntimeProps_30<LayAvatarProps>, {
size: string;
radius: boolean;
icon: string;
}>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
size: "xs" | "sm" | "md" | "lg";
icon: string;
radius: boolean;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});

declare const _default_38: {
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
});

declare const _default_39: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_31<LayFieldProps>>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, never>;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_31<LayFieldProps>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & {
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
    } & Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_31<LayFieldProps>>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_31<LayFieldProps>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});

declare const _default_4: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_3<__VLS_TypePropsToRuntimeProps_3<LayRadioGroupProps>, {
        disabled: boolean;
        }>>> & {
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_3<__VLS_TypePropsToRuntimeProps_3<LayRadioGroupProps>, {
        disabled: boolean;
        }>>> & {
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_3<__VLS_TypePropsToRuntimeProps_3<LayRadioGroupProps>, {
    disabled: boolean;
    }>>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_3<__VLS_TypePropsToRuntimeProps_3<LayRadioGroupProps>, {
disabled: boolean;
}>>> & {
onChange?: ((...args: any[]) => any) | undefined;
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", {
disabled: boolean;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});

declare const _default_40: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
            multiple: boolean;
            size: "xs" | "sm" | "md" | "lg";
            placeholder: string;
            modelValue: any;
            allowClear: boolean;
            showSearch: boolean;
            minCollapsedNum: number;
            collapseTagsTooltip: boolean;
            searchPlaceholder: string;
            showEmpty: boolean;
            emptyMessage: string;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_23<__VLS_TypePropsToRuntimeProps_32<LaySelectProps>, {
        modelValue: null;
        placeholder: string;
        showEmpty: boolean;
        emptyMessage: string;
        searchPlaceholder: string;
        collapseTagsTooltip: boolean;
        minCollapsedNum: number;
        disabled: boolean;
        multiple: boolean;
        allowClear: boolean;
        showSearch: boolean;
        size: string;
        }>>> & {
            onChange?: ((value: string) => any) | undefined;
            "onUpdate:modelValue"?: ((value: string) => any) | undefined;
            onSearch?: ((value: string) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "disabled" | "multiple" | "size" | "placeholder" | "modelValue" | "allowClear" | "showSearch" | "minCollapsedNum" | "collapseTagsTooltip" | "searchPlaceholder" | "showEmpty" | "emptyMessage">;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_23<__VLS_TypePropsToRuntimeProps_32<LaySelectProps>, {
        modelValue: null;
        placeholder: string;
        showEmpty: boolean;
        emptyMessage: string;
        searchPlaceholder: string;
        collapseTagsTooltip: boolean;
        minCollapsedNum: number;
        disabled: boolean;
        multiple: boolean;
        allowClear: boolean;
        showSearch: boolean;
        size: string;
        }>>> & {
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
        size: "xs" | "sm" | "md" | "lg";
        placeholder: string;
        modelValue: any;
        allowClear: boolean;
        showSearch: boolean;
        minCollapsedNum: number;
        collapseTagsTooltip: boolean;
        searchPlaceholder: string;
        showEmpty: boolean;
        emptyMessage: string;
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
        $nextTick: typeof nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_23<__VLS_TypePropsToRuntimeProps_32<LaySelectProps>, {
    modelValue: null;
    placeholder: string;
    showEmpty: boolean;
    emptyMessage: string;
    searchPlaceholder: string;
    collapseTagsTooltip: boolean;
    minCollapsedNum: number;
    disabled: boolean;
    multiple: boolean;
    allowClear: boolean;
    showSearch: boolean;
    size: string;
    }>>> & {
        onChange?: ((value: string) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        onSearch?: ((value: string) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_23<__VLS_TypePropsToRuntimeProps_32<LaySelectProps>, {
modelValue: null;
placeholder: string;
showEmpty: boolean;
emptyMessage: string;
searchPlaceholder: string;
collapseTagsTooltip: boolean;
minCollapsedNum: number;
disabled: boolean;
multiple: boolean;
allowClear: boolean;
showSearch: boolean;
size: string;
}>>> & {
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
size: "xs" | "sm" | "md" | "lg";
placeholder: string;
modelValue: any;
allowClear: boolean;
showSearch: boolean;
minCollapsedNum: number;
collapseTagsTooltip: boolean;
searchPlaceholder: string;
showEmpty: boolean;
emptyMessage: string;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});

declare const _default_41: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            height: string;
            trackColor: string;
            thumbColor: string;
            thumbWidth: number;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_24<__VLS_TypePropsToRuntimeProps_33<LayScrollProps>, {
        height: string;
        trackColor: string;
        thumbColor: string;
        thumbWidth: number;
        }>>> & {
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_24<__VLS_TypePropsToRuntimeProps_33<LayScrollProps>, {
        height: string;
        trackColor: string;
        thumbColor: string;
        thumbWidth: number;
        }>>> & {
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
        $nextTick: typeof nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_24<__VLS_TypePropsToRuntimeProps_33<LayScrollProps>, {
    height: string;
    trackColor: string;
    thumbColor: string;
    thumbWidth: number;
    }>>> & {
        onArrive?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_24<__VLS_TypePropsToRuntimeProps_33<LayScrollProps>, {
height: string;
trackColor: string;
thumbColor: string;
thumbWidth: number;
}>>> & {
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
});

declare const _default_42: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            label: string;
            disabled: boolean;
            keyword: string;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_25<__VLS_TypePropsToRuntimeProps_34<LaySelectOptionProps>, {
        disabled: boolean;
        keyword: string;
        label: string;
        }>>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "label" | "disabled" | "keyword">;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_25<__VLS_TypePropsToRuntimeProps_34<LaySelectOptionProps>, {
        disabled: boolean;
        keyword: string;
        label: string;
        }>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_25<__VLS_TypePropsToRuntimeProps_34<LaySelectOptionProps>, {
    disabled: boolean;
    keyword: string;
    label: string;
    }>>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_25<__VLS_TypePropsToRuntimeProps_34<LaySelectOptionProps>, {
disabled: boolean;
keyword: string;
label: string;
}>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
label: string;
disabled: boolean;
keyword: string;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});

declare const _default_43: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            description: string;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_26<__VLS_TypePropsToRuntimeProps_35<LayEmptyProps>, {
        description: string;
        }>>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "description">;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_26<__VLS_TypePropsToRuntimeProps_35<LayEmptyProps>, {
        description: string;
        }>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
        description: string;
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_26<__VLS_TypePropsToRuntimeProps_35<LayEmptyProps>, {
    description: string;
    }>>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_26<__VLS_TypePropsToRuntimeProps_35<LayEmptyProps>, {
description: string;
}>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
description: string;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        image: (_: {}) => any;
        extra: (_: {}) => any;
    };
});

declare const _default_44: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            mode: string;
            labelPosition: string;
            labelWidth: string | number;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_27<__VLS_TypePropsToRuntimeProps_36<LayFormItemProps>, {
        mode: string;
        labelPosition: string;
        labelWidth: number;
        }>>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "mode" | "labelPosition" | "labelWidth">;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_27<__VLS_TypePropsToRuntimeProps_36<LayFormItemProps>, {
        mode: string;
        labelPosition: string;
        labelWidth: number;
        }>>>, {
        validate: (callback?: ValidateCallback) => void;
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_27<__VLS_TypePropsToRuntimeProps_36<LayFormItemProps>, {
    mode: string;
    labelPosition: string;
    labelWidth: number;
    }>>> & ShallowUnwrapRef<    {
    validate: (callback?: ValidateCallback) => void;
    clearValidate: () => void;
    }> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_27<__VLS_TypePropsToRuntimeProps_36<LayFormItemProps>, {
mode: string;
labelPosition: string;
labelWidth: number;
}>>>, {
validate: (callback?: ValidateCallback) => void;
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
});

declare const _default_45: {
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
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_28<__VLS_TypePropsToRuntimeProps_37<LayRateProps>, {
        length: number;
        modelValue: number;
        readonly: boolean;
        half: boolean;
        text: boolean;
        isBlock: boolean;
        allowClear: boolean;
        clearIcon: string;
        icons: () => string[];
        }>>> & {
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_28<__VLS_TypePropsToRuntimeProps_37<LayRateProps>, {
        length: number;
        modelValue: number;
        readonly: boolean;
        half: boolean;
        text: boolean;
        isBlock: boolean;
        allowClear: boolean;
        clearIcon: string;
        icons: () => string[];
        }>>> & {
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_28<__VLS_TypePropsToRuntimeProps_37<LayRateProps>, {
    length: number;
    modelValue: number;
    readonly: boolean;
    half: boolean;
    text: boolean;
    isBlock: boolean;
    allowClear: boolean;
    clearIcon: string;
    icons: () => string[];
    }>>> & {
        onSelect?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onClear?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_28<__VLS_TypePropsToRuntimeProps_37<LayRateProps>, {
length: number;
modelValue: number;
readonly: boolean;
half: boolean;
text: boolean;
isBlock: boolean;
allowClear: boolean;
clearIcon: string;
icons: () => string[];
}>>> & {
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
});

declare const _default_46: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
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
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_29<__VLS_TypePropsToRuntimeProps_38<LayDropdownProps>, {
        visible: boolean;
        trigger: string;
        disabled: boolean;
        placement: string;
        autoFitPosition: boolean;
        autoFitMinWidth: boolean;
        autoFitWidth: boolean;
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
        }>>> & {
            onHide?: ((...args: any[]) => any) | undefined;
            onShow?: ((...args: any[]) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "visible" | "disabled" | "trigger" | "placement" | "autoFitPosition" | "autoFitWidth" | "autoFitMinWidth" | "updateAtScroll" | "autoFixPosition" | "clickToClose" | "blurToClose" | "clickOutsideToClose" | "contentOffset" | "mouseEnterDelay" | "mouseLeaveDelay" | "focusDelay" | "alignPoint" | "popupContainer">;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_29<__VLS_TypePropsToRuntimeProps_38<LayDropdownProps>, {
        visible: boolean;
        trigger: string;
        disabled: boolean;
        placement: string;
        autoFitPosition: boolean;
        autoFitMinWidth: boolean;
        autoFitWidth: boolean;
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
        }>>> & {
        onHide?: ((...args: any[]) => any) | undefined;
        onShow?: ((...args: any[]) => any) | undefined;
        }, {
        show: (delay?: number) => void;
        hide: (delay?: number) => void;
        toggle: () => void;
        }, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("hide" | "show")[], string, {
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
        $nextTick: typeof nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_29<__VLS_TypePropsToRuntimeProps_38<LayDropdownProps>, {
    visible: boolean;
    trigger: string;
    disabled: boolean;
    placement: string;
    autoFitPosition: boolean;
    autoFitMinWidth: boolean;
    autoFitWidth: boolean;
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
    }>>> & {
        onHide?: ((...args: any[]) => any) | undefined;
        onShow?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {
    show: (delay?: number) => void;
    hide: (delay?: number) => void;
    toggle: () => void;
    }> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_29<__VLS_TypePropsToRuntimeProps_38<LayDropdownProps>, {
visible: boolean;
trigger: string;
disabled: boolean;
placement: string;
autoFitPosition: boolean;
autoFitMinWidth: boolean;
autoFitWidth: boolean;
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
}>>> & {
onHide?: ((...args: any[]) => any) | undefined;
onShow?: ((...args: any[]) => any) | undefined;
}, {
show: (delay?: number) => void;
hide: (delay?: number) => void;
toggle: () => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("hide" | "show")[], "hide" | "show", {
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
});

declare const _default_47: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>>, {}>;

declare const _default_48: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_30<__VLS_TypePropsToRuntimeProps_39<LayDropdownMenuItemProps>, {
        disabled: boolean;
        }>>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "disabled">;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_30<__VLS_TypePropsToRuntimeProps_39<LayDropdownMenuItemProps>, {
        disabled: boolean;
        }>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_30<__VLS_TypePropsToRuntimeProps_39<LayDropdownMenuItemProps>, {
    disabled: boolean;
    }>>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_30<__VLS_TypePropsToRuntimeProps_39<LayDropdownMenuItemProps>, {
disabled: boolean;
}>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
disabled: boolean;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        prefix: (_: {}) => any;
        default: (_: {}) => any;
        suffix: (_: {}) => any;
    };
});

declare const _default_49: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
            trigger: DropdownTrigger_2 | DropdownTrigger_2[];
            placement: DropdownPlacement;
            contentOffset: number;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_31<__VLS_TypePropsToRuntimeProps_40<LayDropdownSubMenuProps>, {
        trigger: string;
        disabled: boolean;
        placement: string;
        contentOffset: number;
        }>>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "disabled" | "trigger" | "placement" | "contentOffset">;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_31<__VLS_TypePropsToRuntimeProps_40<LayDropdownSubMenuProps>, {
        trigger: string;
        disabled: boolean;
        placement: string;
        contentOffset: number;
        }>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_31<__VLS_TypePropsToRuntimeProps_40<LayDropdownSubMenuProps>, {
    trigger: string;
    disabled: boolean;
    placement: string;
    contentOffset: number;
    }>>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_31<__VLS_TypePropsToRuntimeProps_40<LayDropdownSubMenuProps>, {
trigger: string;
disabled: boolean;
placement: string;
contentOffset: number;
}>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
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
});

declare const _default_5: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            borderStyle: string;
            loading: BooleanOrString;
            disabled: BooleanOrString;
            radius: BooleanOrString;
            loadingIcon: string;
            fluid: BooleanOrString;
            nativeType: ButtonNativeType;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_4<__VLS_TypePropsToRuntimeProps_4<LayButtonProps>, {
        fluid: boolean;
        radius: boolean;
        loading: boolean;
        disabled: boolean;
        loadingIcon: string;
        nativeType: string;
        borderStyle: string;
        }>>> & {
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_4<__VLS_TypePropsToRuntimeProps_4<LayButtonProps>, {
        fluid: boolean;
        radius: boolean;
        loading: boolean;
        disabled: boolean;
        loadingIcon: string;
        nativeType: string;
        borderStyle: string;
        }>>> & {
        onClick?: ((evt: MouseEvent) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        click: (evt: MouseEvent) => boolean;
        }, string, {
        borderStyle: string;
        loading: BooleanOrString;
        disabled: BooleanOrString;
        radius: BooleanOrString;
        loadingIcon: string;
        fluid: BooleanOrString;
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_4<__VLS_TypePropsToRuntimeProps_4<LayButtonProps>, {
    fluid: boolean;
    radius: boolean;
    loading: boolean;
    disabled: boolean;
    loadingIcon: string;
    nativeType: string;
    borderStyle: string;
    }>>> & {
        onClick?: ((evt: MouseEvent) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_4<__VLS_TypePropsToRuntimeProps_4<LayButtonProps>, {
fluid: boolean;
radius: boolean;
loading: boolean;
disabled: boolean;
loadingIcon: string;
nativeType: string;
borderStyle: string;
}>>> & {
onClick?: ((evt: MouseEvent) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
click: (evt: MouseEvent) => boolean;
}, string, {
borderStyle: string;
loading: BooleanOrString;
disabled: BooleanOrString;
radius: BooleanOrString;
loadingIcon: string;
fluid: BooleanOrString;
nativeType: ButtonNativeType;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});

declare const _default_50: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            tabPosition: tabPositionType;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_32<__VLS_TypePropsToRuntimeProps_41<LayTabProps>, {
        tabPosition: string;
        }>>> & {
            onChange?: ((...args: any[]) => any) | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
            onClose?: ((...args: any[]) => any) | undefined;
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
        $emit: (event: "change" | "close" | "update:modelValue", ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_32<__VLS_TypePropsToRuntimeProps_41<LayTabProps>, {
        tabPosition: string;
        }>>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onClose?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "close" | "update:modelValue")[], string, {
        tabPosition: tabPositionType;
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
        $nextTick: typeof nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_32<__VLS_TypePropsToRuntimeProps_41<LayTabProps>, {
    tabPosition: string;
    }>>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onClose?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_32<__VLS_TypePropsToRuntimeProps_41<LayTabProps>, {
tabPosition: string;
}>>> & {
onChange?: ((...args: any[]) => any) | undefined;
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
onClose?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "close" | "update:modelValue")[], "change" | "close" | "update:modelValue", {
tabPosition: tabPositionType;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});

declare const _default_51: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            closable: string | boolean;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_33<__VLS_TypePropsToRuntimeProps_42<LayTabItemProps>, {
        closable: boolean;
        }>>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "closable">;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_33<__VLS_TypePropsToRuntimeProps_42<LayTabItemProps>, {
        closable: boolean;
        }>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_33<__VLS_TypePropsToRuntimeProps_42<LayTabItemProps>, {
    closable: boolean;
    }>>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_33<__VLS_TypePropsToRuntimeProps_42<LayTabItemProps>, {
closable: boolean;
}>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
closable: string | boolean;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});

declare const _default_52: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            page: boolean;
            modelValue: string;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_34<__VLS_TypePropsToRuntimeProps_43<LayIconPickerProps>, {
        modelValue: string;
        page: boolean;
        }>>> & {
            onChange?: ((...args: any[]) => any) | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "page" | "modelValue">;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_34<__VLS_TypePropsToRuntimeProps_43<LayIconPickerProps>, {
        modelValue: string;
        page: boolean;
        }>>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "update:modelValue")[], string, {
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_34<__VLS_TypePropsToRuntimeProps_43<LayIconPickerProps>, {
    modelValue: string;
    page: boolean;
    }>>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_34<__VLS_TypePropsToRuntimeProps_43<LayIconPickerProps>, {
modelValue: string;
page: boolean;
}>>> & {
onChange?: ((...args: any[]) => any) | undefined;
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", {
page: boolean;
modelValue: string;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps;

declare const _default_53: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
            replaceFields: ReplaceFieldsOptions;
            collapseTransition: boolean;
            selectedKey: any;
            checkedKeys: KeysType;
            checkStrictly: string | boolean;
            showCheckbox: boolean;
            showLine: boolean;
            onlyIconControl: boolean;
            edit: EditType;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_35<__VLS_TypePropsToRuntimeProps_44<TreeProps>, {
        checkedKeys: () => never[];
        showCheckbox: boolean;
        edit: boolean;
        collapseTransition: boolean;
        checkStrictly: boolean;
        onlyIconControl: boolean;
        disabled: boolean;
        showLine: boolean;
        selectedKey: string;
        replaceFields: () => {
        id: string;
        children: string;
        title: string;
        };
        }>>> & {
            "onUpdate:expandKeys"?: ((keys: KeysType) => any) | undefined;
            "onNode-click"?: ((node: OriginalTreeData) => any) | undefined;
            "onUpdate:checkedKeys"?: ((keys: KeysType) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "disabled" | "replaceFields" | "collapseTransition" | "selectedKey" | "checkedKeys" | "checkStrictly" | "showCheckbox" | "showLine" | "onlyIconControl" | "edit">;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_35<__VLS_TypePropsToRuntimeProps_44<TreeProps>, {
        checkedKeys: () => never[];
        showCheckbox: boolean;
        edit: boolean;
        collapseTransition: boolean;
        checkStrictly: boolean;
        onlyIconControl: boolean;
        disabled: boolean;
        showLine: boolean;
        selectedKey: string;
        replaceFields: () => {
        id: string;
        children: string;
        title: string;
        };
        }>>> & {
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
        selectedKey: any;
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
        $nextTick: typeof nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_35<__VLS_TypePropsToRuntimeProps_44<TreeProps>, {
    checkedKeys: () => never[];
    showCheckbox: boolean;
    edit: boolean;
    collapseTransition: boolean;
    checkStrictly: boolean;
    onlyIconControl: boolean;
    disabled: boolean;
    showLine: boolean;
    selectedKey: string;
    replaceFields: () => {
    id: string;
    children: string;
    title: string;
    };
    }>>> & {
        "onUpdate:expandKeys"?: ((keys: KeysType) => any) | undefined;
        "onNode-click"?: ((node: OriginalTreeData) => any) | undefined;
        "onUpdate:checkedKeys"?: ((keys: KeysType) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_35<__VLS_TypePropsToRuntimeProps_44<TreeProps>, {
checkedKeys: () => never[];
showCheckbox: boolean;
edit: boolean;
collapseTransition: boolean;
checkStrictly: boolean;
onlyIconControl: boolean;
disabled: boolean;
showLine: boolean;
selectedKey: string;
replaceFields: () => {
id: string;
children: string;
title: string;
};
}>>> & {
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
selectedKey: any;
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
});

declare const _default_54: {
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
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_36<__VLS_TypePropsToRuntimeProps_45<LayTableProps>, {
        id: string;
        size: string;
        indentSize: number;
        childrenColumnName: string;
        dataSource: () => never[];
        selectedKeys: () => never[];
        selectedKey: string;
        maxHeight: string;
        even: boolean;
        rowClassName: string;
        cellClassName: string;
        expandIndex: number;
        rowStyle: string;
        cellStyle: string;
        defaultExpandAll: boolean;
        spanMethod: () => void;
        expandKeys: () => never[];
        loading: boolean;
        getCheckboxProps: () => void;
        getRadioProps: () => void;
        }>>> & {
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_36<__VLS_TypePropsToRuntimeProps_45<LayTableProps>, {
        id: string;
        size: string;
        indentSize: number;
        childrenColumnName: string;
        dataSource: () => never[];
        selectedKeys: () => never[];
        selectedKey: string;
        maxHeight: string;
        even: boolean;
        rowClassName: string;
        cellClassName: string;
        expandIndex: number;
        rowStyle: string;
        cellStyle: string;
        defaultExpandAll: boolean;
        spanMethod: () => void;
        expandKeys: () => never[];
        loading: boolean;
        getCheckboxProps: () => void;
        getRadioProps: () => void;
        }>>> & {
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
        $nextTick: typeof nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_36<__VLS_TypePropsToRuntimeProps_45<LayTableProps>, {
    id: string;
    size: string;
    indentSize: number;
    childrenColumnName: string;
    dataSource: () => never[];
    selectedKeys: () => never[];
    selectedKey: string;
    maxHeight: string;
    even: boolean;
    rowClassName: string;
    cellClassName: string;
    expandIndex: number;
    rowStyle: string;
    cellStyle: string;
    defaultExpandAll: boolean;
    spanMethod: () => void;
    expandKeys: () => never[];
    loading: boolean;
    getCheckboxProps: () => void;
    getRadioProps: () => void;
    }>>> & {
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
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_36<__VLS_TypePropsToRuntimeProps_45<LayTableProps>, {
id: string;
size: string;
indentSize: number;
childrenColumnName: string;
dataSource: () => never[];
selectedKeys: () => never[];
selectedKey: string;
maxHeight: string;
even: boolean;
rowClassName: string;
cellClassName: string;
expandIndex: number;
rowStyle: string;
cellStyle: string;
defaultExpandAll: boolean;
spanMethod: () => void;
expandKeys: () => never[];
loading: boolean;
getCheckboxProps: () => void;
getRadioProps: () => void;
}>>> & {
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
});

declare const _default_55: {
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
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_37<__VLS_TypePropsToRuntimeProps_46<LayPageProps>, {
        limit: number;
        pages: number;
        modelValue: number;
        theme: string;
        showPage: boolean;
        showSkip: boolean;
        showCount: boolean;
        showLimit: boolean;
        showInput: boolean;
        showRefresh: boolean;
        limits: () => number[];
        }>>> & {
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_37<__VLS_TypePropsToRuntimeProps_46<LayPageProps>, {
        limit: number;
        pages: number;
        modelValue: number;
        theme: string;
        showPage: boolean;
        showSkip: boolean;
        showCount: boolean;
        showLimit: boolean;
        showInput: boolean;
        showRefresh: boolean;
        limits: () => number[];
        }>>> & {
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_37<__VLS_TypePropsToRuntimeProps_46<LayPageProps>, {
    limit: number;
    pages: number;
    modelValue: number;
    theme: string;
    showPage: boolean;
    showSkip: boolean;
    showCount: boolean;
    showLimit: boolean;
    showInput: boolean;
    showRefresh: boolean;
    limits: () => number[];
    }>>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        "onUpdate:limit"?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_37<__VLS_TypePropsToRuntimeProps_46<LayPageProps>, {
limit: number;
pages: number;
modelValue: number;
theme: string;
showPage: boolean;
showSkip: boolean;
showCount: boolean;
showLimit: boolean;
showInput: boolean;
showRefresh: boolean;
limits: () => number[];
}>>> & {
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
});

declare const _default_56: {
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
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_38<__VLS_TypePropsToRuntimeProps_47<LayTransferProps>, {
        id: string;
        title: () => string[];
        dataSource: () => never[];
        showSearch: boolean;
        modelValue: () => never[];
        width: string;
        height: string;
        }>>> & {
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_38<__VLS_TypePropsToRuntimeProps_47<LayTransferProps>, {
        id: string;
        title: () => string[];
        dataSource: () => never[];
        showSearch: boolean;
        modelValue: () => never[];
        width: string;
        height: string;
        }>>> & {
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_38<__VLS_TypePropsToRuntimeProps_47<LayTransferProps>, {
    id: string;
    title: () => string[];
    dataSource: () => never[];
    showSearch: boolean;
    modelValue: () => never[];
    width: string;
    height: string;
    }>>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_38<__VLS_TypePropsToRuntimeProps_47<LayTransferProps>, {
id: string;
title: () => string[];
dataSource: () => never[];
showSearch: boolean;
modelValue: () => never[];
width: string;
height: string;
}>>> & {
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
});

declare const _default_57: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
            modelValue: Recordable[];
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_39<__VLS_TypePropsToRuntimeProps_48<LayCheckboxGroupProps>, {
        modelValue: () => never[];
        disabled: boolean;
        }>>> & {
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_39<__VLS_TypePropsToRuntimeProps_48<LayCheckboxGroupProps>, {
        modelValue: () => never[];
        disabled: boolean;
        }>>> & {
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_39<__VLS_TypePropsToRuntimeProps_48<LayCheckboxGroupProps>, {
    modelValue: () => never[];
    disabled: boolean;
    }>>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_39<__VLS_TypePropsToRuntimeProps_48<LayCheckboxGroupProps>, {
modelValue: () => never[];
disabled: boolean;
}>>> & {
onChange?: ((...args: any[]) => any) | undefined;
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", {
disabled: boolean;
modelValue: Recordable[];
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});

declare const _default_58: {
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
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_40<__VLS_TypePropsToRuntimeProps_49<LaySliderProps>, {
        vertical: boolean;
        modelValue: number;
        disabled: boolean;
        step: number;
        min: number;
        max: number;
        showDots: boolean;
        }>>> & {
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_40<__VLS_TypePropsToRuntimeProps_49<LaySliderProps>, {
        vertical: boolean;
        modelValue: number;
        disabled: boolean;
        step: number;
        min: number;
        max: number;
        showDots: boolean;
        }>>> & {
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_40<__VLS_TypePropsToRuntimeProps_49<LaySliderProps>, {
    vertical: boolean;
    modelValue: number;
    disabled: boolean;
    step: number;
    min: number;
    max: number;
    showDots: boolean;
    }>>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_40<__VLS_TypePropsToRuntimeProps_49<LaySliderProps>, {
vertical: boolean;
modelValue: number;
disabled: boolean;
step: number;
min: number;
max: number;
showDots: boolean;
}>>> & {
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", {
max: number;
disabled: boolean;
vertical: boolean;
step: number;
min: number;
modelValue: number | number[];
showDots: boolean;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps;

declare const _default_59: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            interval: number;
            height: string;
            width: string;
            autoplay: boolean;
            anim: string;
            arrow: string;
            indicator: string;
            pauseOnHover: boolean;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_41<__VLS_TypePropsToRuntimeProps_50<{
        width?: string | undefined;
        height?: string | undefined;
        modelValue: string;
        anim?: string | undefined;
        autoplay?: boolean | undefined;
        arrow?: string | undefined;
        interval?: number | undefined;
        indicator?: string | undefined;
        pauseOnHover?: boolean | undefined;
        }>, {
        width: string;
        height: string;
        anim: string;
        autoplay: boolean;
        arrow: string;
        interval: number;
        indicator: string;
        pauseOnHover: boolean;
        }>>> & {
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_41<__VLS_TypePropsToRuntimeProps_50<{
        width?: string | undefined;
        height?: string | undefined;
        modelValue: string;
        anim?: string | undefined;
        autoplay?: boolean | undefined;
        arrow?: string | undefined;
        interval?: number | undefined;
        indicator?: string | undefined;
        pauseOnHover?: boolean | undefined;
        }>, {
        width: string;
        height: string;
        anim: string;
        autoplay: boolean;
        arrow: string;
        interval: number;
        indicator: string;
        pauseOnHover: boolean;
        }>>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "update:modelValue")[], string, {
        interval: number;
        height: string;
        width: string;
        autoplay: boolean;
        anim: string;
        arrow: string;
        indicator: string;
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_41<__VLS_TypePropsToRuntimeProps_50<{
    width?: string | undefined;
    height?: string | undefined;
    modelValue: string;
    anim?: string | undefined;
    autoplay?: boolean | undefined;
    arrow?: string | undefined;
    interval?: number | undefined;
    indicator?: string | undefined;
    pauseOnHover?: boolean | undefined;
    }>, {
    width: string;
    height: string;
    anim: string;
    autoplay: boolean;
    arrow: string;
    interval: number;
    indicator: string;
    pauseOnHover: boolean;
    }>>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_41<__VLS_TypePropsToRuntimeProps_50<{
width?: string | undefined;
height?: string | undefined;
modelValue: string;
anim?: string | undefined;
autoplay?: boolean | undefined;
arrow?: string | undefined;
interval?: number | undefined;
indicator?: string | undefined;
pauseOnHover?: boolean | undefined;
}>, {
width: string;
height: string;
anim: string;
autoplay: boolean;
arrow: string;
interval: number;
indicator: string;
pauseOnHover: boolean;
}>>> & {
onChange?: ((...args: any[]) => any) | undefined;
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", {
interval: number;
height: string;
width: string;
autoplay: boolean;
anim: string;
arrow: string;
indicator: string;
pauseOnHover: boolean;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});

declare const _default_6: {
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
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_5<__VLS_TypePropsToRuntimeProps_5<LayBacktopProps>, {
        target: string;
        showHeight: number;
        icon: string;
        iconSize: number;
        disabled: boolean;
        circle: boolean;
        }>>> & {
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_5<__VLS_TypePropsToRuntimeProps_5<LayBacktopProps>, {
        target: string;
        showHeight: number;
        icon: string;
        iconSize: number;
        disabled: boolean;
        circle: boolean;
        }>>> & {
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_5<__VLS_TypePropsToRuntimeProps_5<LayBacktopProps>, {
    target: string;
    showHeight: number;
    icon: string;
    iconSize: number;
    disabled: boolean;
    circle: boolean;
    }>>> & {
        onClick?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_5<__VLS_TypePropsToRuntimeProps_5<LayBacktopProps>, {
target: string;
showHeight: number;
icon: string;
iconSize: number;
disabled: boolean;
circle: boolean;
}>>> & {
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
});

declare const _default_60: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_51<{
        id: string;
        }>>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, never>;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_51<{
        id: string;
        }>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & {
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
    } & Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_51<{
    id: string;
    }>>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_51<{
id: string;
}>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});

declare const _default_61: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            modelValue: any;
            preset: any;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_42<__VLS_TypePropsToRuntimeProps_52<LayColorPicker_2>, {
        modelValue: {
        r: number;
        g: number;
        b: number;
        a: number;
        };
        preset: string[];
        }>>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "modelValue" | "preset">;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_42<__VLS_TypePropsToRuntimeProps_52<LayColorPicker_2>, {
        modelValue: {
        r: number;
        g: number;
        b: number;
        a: number;
        };
        preset: string[];
        }>>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "update:modelValue"[], string, {
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_42<__VLS_TypePropsToRuntimeProps_52<LayColorPicker_2>, {
    modelValue: {
    r: number;
    g: number;
    b: number;
    a: number;
    };
    preset: string[];
    }>>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_42<__VLS_TypePropsToRuntimeProps_52<LayColorPicker_2>, {
modelValue: {
r: number;
g: number;
b: number;
a: number;
};
preset: string[];
}>>> & {
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", {
modelValue: any;
preset: any;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps;

declare const _default_62: {
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
        $nextTick: typeof nextTick;
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
});

declare const _default_63: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            max: number;
            disabled: boolean;
            size: "xs" | "sm" | "md" | "lg";
            step: number;
            min: number;
            modelValue: number;
            disabledInput: boolean;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_43<__VLS_TypePropsToRuntimeProps_53<LayInputNumberProps>, {
        disabled: boolean;
        disabledInput: boolean;
        modelValue: number;
        step: number;
        min: number;
        max: number;
        size: string;
        }>>> & {
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_43<__VLS_TypePropsToRuntimeProps_53<LayInputNumberProps>, {
        disabled: boolean;
        disabledInput: boolean;
        modelValue: number;
        step: number;
        min: number;
        max: number;
        size: string;
        }>>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "update:modelValue")[], string, {
        max: number;
        disabled: boolean;
        size: "xs" | "sm" | "md" | "lg";
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_43<__VLS_TypePropsToRuntimeProps_53<LayInputNumberProps>, {
    disabled: boolean;
    disabledInput: boolean;
    modelValue: number;
    step: number;
    min: number;
    max: number;
    size: string;
    }>>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_43<__VLS_TypePropsToRuntimeProps_53<LayInputNumberProps>, {
disabled: boolean;
disabledInput: boolean;
modelValue: number;
step: number;
min: number;
max: number;
size: string;
}>>> & {
onChange?: ((...args: any[]) => any) | undefined;
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", {
max: number;
disabled: boolean;
size: "xs" | "sm" | "md" | "lg";
step: number;
min: number;
modelValue: number;
disabledInput: boolean;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps;

declare const _default_64: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            loading: boolean;
            rows: number;
            animated: boolean;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_44<__VLS_TypePropsToRuntimeProps_54<LaySkeletonProps>, {
        rows: number;
        loading: boolean;
        animated: boolean;
        }>>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "loading" | "rows" | "animated">;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_44<__VLS_TypePropsToRuntimeProps_54<LaySkeletonProps>, {
        rows: number;
        loading: boolean;
        animated: boolean;
        }>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_44<__VLS_TypePropsToRuntimeProps_54<LaySkeletonProps>, {
    rows: number;
    loading: boolean;
    animated: boolean;
    }>>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_44<__VLS_TypePropsToRuntimeProps_54<LaySkeletonProps>, {
rows: number;
loading: boolean;
animated: boolean;
}>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
loading: boolean;
rows: number;
animated: boolean;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        skeleton: (_: {}) => any;
        default: (_: {}) => any;
    };
});

declare const _default_65: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            type: string;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_45<__VLS_TypePropsToRuntimeProps_55<LaySkeletonProps_2>, {
        type: string;
        }>>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "type">;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_45<__VLS_TypePropsToRuntimeProps_55<LaySkeletonProps_2>, {
        type: string;
        }>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_45<__VLS_TypePropsToRuntimeProps_55<LaySkeletonProps_2>, {
    type: string;
    }>>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_45<__VLS_TypePropsToRuntimeProps_55<LaySkeletonProps_2>, {
type: string;
}>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
type: string;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps;

declare const _default_66: {
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
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_46<__VLS_TypePropsToRuntimeProps_56<LayCountupProps>, {
        startVal: number;
        endVal: number;
        decimal: string;
        decimalPlaces: number;
        useGrouping: boolean;
        separator: string;
        autoplay: boolean;
        useEasing: boolean;
        easingFn: CubicBezierPoints;
        duration: number;
        prefix: string;
        suffix: string;
        }>>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "prefix" | "decimal" | "separator" | "duration" | "autoplay" | "suffix" | "startVal" | "endVal" | "decimalPlaces" | "useGrouping" | "useEasing" | "easingFn">;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_46<__VLS_TypePropsToRuntimeProps_56<LayCountupProps>, {
        startVal: number;
        endVal: number;
        decimal: string;
        decimalPlaces: number;
        useGrouping: boolean;
        separator: string;
        autoplay: boolean;
        useEasing: boolean;
        easingFn: CubicBezierPoints;
        duration: number;
        prefix: string;
        suffix: string;
        }>>>, {
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_46<__VLS_TypePropsToRuntimeProps_56<LayCountupProps>, {
    startVal: number;
    endVal: number;
    decimal: string;
    decimalPlaces: number;
    useGrouping: boolean;
    separator: string;
    autoplay: boolean;
    useEasing: boolean;
    easingFn: CubicBezierPoints;
    duration: number;
    prefix: string;
    suffix: string;
    }>>> & ShallowUnwrapRef<    {
    start: () => void;
    }> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_46<__VLS_TypePropsToRuntimeProps_56<LayCountupProps>, {
startVal: number;
endVal: number;
decimal: string;
decimalPlaces: number;
useGrouping: boolean;
separator: string;
autoplay: boolean;
useEasing: boolean;
easingFn: CubicBezierPoints;
duration: number;
prefix: string;
suffix: string;
}>>>, {
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
});

declare const _default_67: {
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
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_47<__VLS_TypePropsToRuntimeProps_57<LayStepProps>, {
        active: number;
        center: boolean;
        direction: string;
        space: string;
        currentStatus: string;
        composition: string;
        simple: boolean;
        }>>> & {
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_47<__VLS_TypePropsToRuntimeProps_57<LayStepProps>, {
        active: number;
        center: boolean;
        direction: string;
        space: string;
        currentStatus: string;
        composition: string;
        simple: boolean;
        }>>> & {
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_47<__VLS_TypePropsToRuntimeProps_57<LayStepProps>, {
    active: number;
    center: boolean;
    direction: string;
    space: string;
    currentStatus: string;
    composition: string;
    simple: boolean;
    }>>> & {
        onOnChange?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_47<__VLS_TypePropsToRuntimeProps_57<LayStepProps>, {
active: number;
center: boolean;
direction: string;
space: string;
currentStatus: string;
composition: string;
simple: boolean;
}>>> & {
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
});

declare const _default_68: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            content: string;
            title: string;
            status: string;
            icon: string;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_48<__VLS_TypePropsToRuntimeProps_58<LayStepItemProps_2>, {
        title: string;
        content: string;
        icon: string;
        status: string;
        }>>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "content" | "title" | "status" | "icon">;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_48<__VLS_TypePropsToRuntimeProps_58<LayStepItemProps_2>, {
        title: string;
        content: string;
        icon: string;
        status: string;
        }>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_48<__VLS_TypePropsToRuntimeProps_58<LayStepItemProps_2>, {
    title: string;
    content: string;
    icon: string;
    status: string;
    }>>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_48<__VLS_TypePropsToRuntimeProps_58<LayStepItemProps_2>, {
title: string;
content: string;
icon: string;
status: string;
}>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
content: string;
title: string;
status: string;
icon: string;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        pace: (_: {}) => any;
        default: (_: {}) => any;
    };
});

declare const _default_69: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_59<LaySubMenuProps>>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, never>;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_59<LaySubMenuProps>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & {
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
    } & Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_59<LaySubMenuProps>>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_59<LaySubMenuProps>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        icon: (_: {}) => any;
        title: (_: {}) => any;
        expandIcon: (_: {}) => any;
        default: (_: {}) => any;
    };
});

declare const _default_7: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            isVertical: boolean;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_6<__VLS_TypePropsToRuntimeProps_6<LayLayoutProps>, {
        isVertical: boolean;
        }>>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "isVertical">;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_6<__VLS_TypePropsToRuntimeProps_6<LayLayoutProps>, {
        isVertical: boolean;
        }>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_6<__VLS_TypePropsToRuntimeProps_6<LayLayoutProps>, {
    isVertical: boolean;
    }>>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_6<__VLS_TypePropsToRuntimeProps_6<LayLayoutProps>, {
isVertical: boolean;
}>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
isVertical: boolean;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});

declare const _default_70: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            title: string;
            describe: string;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_49<__VLS_TypePropsToRuntimeProps_60<LayDropdownProps_2>, {
        title: string;
        describe: string;
        }>>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "title" | "describe">;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_49<__VLS_TypePropsToRuntimeProps_60<LayDropdownProps_2>, {
        title: string;
        describe: string;
        }>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_49<__VLS_TypePropsToRuntimeProps_60<LayDropdownProps_2>, {
    title: string;
    describe: string;
    }>>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_49<__VLS_TypePropsToRuntimeProps_60<LayDropdownProps_2>, {
title: string;
describe: string;
}>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
title: string;
describe: string;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        image: (_: {}) => any;
        extra: (_: {}) => any;
    };
});

declare const _default_71: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            title: string;
            status: "success" | "failure";
            describe: string;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_50<__VLS_TypePropsToRuntimeProps_61<LayResultProps>, {
        title: string;
        status: string;
        describe: string;
        }>>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "title" | "status" | "describe">;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_50<__VLS_TypePropsToRuntimeProps_61<LayResultProps>, {
        title: string;
        status: string;
        describe: string;
        }>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_50<__VLS_TypePropsToRuntimeProps_61<LayResultProps>, {
    title: string;
    status: string;
    describe: string;
    }>>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_50<__VLS_TypePropsToRuntimeProps_61<LayResultProps>, {
title: string;
status: string;
describe: string;
}>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
title: string;
status: "success" | "failure";
describe: string;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        content: (_: {}) => any;
        extra: (_: {}) => any;
    };
});

declare const _default_72: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            immersive: boolean;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_51<__VLS_TypePropsToRuntimeProps_62<LayFullscreenProps>, {
        immersive: boolean;
        }>>> & {
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_51<__VLS_TypePropsToRuntimeProps_62<LayFullscreenProps>, {
        immersive: boolean;
        }>>> & {
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_51<__VLS_TypePropsToRuntimeProps_62<LayFullscreenProps>, {
    immersive: boolean;
    }>>> & {
        onFullscreenchange?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_51<__VLS_TypePropsToRuntimeProps_62<LayFullscreenProps>, {
immersive: boolean;
}>>> & {
onFullscreenchange?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "fullscreenchange"[], "fullscreenchange", {
immersive: boolean;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {
            isFullscreen: boolean;
            enter: (targetEl: HTMLElement | undefined) => Promise<boolean | undefined>;
            exit: (targetEl: HTMLElement | Document | undefined) => Promise<boolean | undefined>;
            toggle: () => Promise<void>;
        }) => any;
    };
});

declare const _default_73: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            theme: string;
            locale: string;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_52<__VLS_TypePropsToRuntimeProps_63<LayConfigProviderProps>, {
        locale: string;
        theme: string;
        }>>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "theme" | "locale">;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_52<__VLS_TypePropsToRuntimeProps_63<LayConfigProviderProps>, {
        locale: string;
        theme: string;
        }>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_52<__VLS_TypePropsToRuntimeProps_63<LayConfigProviderProps>, {
    locale: string;
    theme: string;
    }>>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_52<__VLS_TypePropsToRuntimeProps_63<LayConfigProviderProps>, {
locale: string;
theme: string;
}>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
theme: string;
locale: string;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});

declare const _default_74: {
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
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_53<__VLS_TypePropsToRuntimeProps_64<LayDatePickerProps>, {
        modelValue: string;
        type: string;
        disabled: boolean;
        simple: boolean;
        range: boolean;
        rangeSeparator: string;
        readonly: boolean;
        allowClear: boolean;
        size: string;
        prefixIcon: string;
        suffixIcon: string;
        timestamp: boolean;
        }>>> & {
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_53<__VLS_TypePropsToRuntimeProps_64<LayDatePickerProps>, {
        modelValue: string;
        type: string;
        disabled: boolean;
        simple: boolean;
        range: boolean;
        rangeSeparator: string;
        readonly: boolean;
        allowClear: boolean;
        size: string;
        prefixIcon: string;
        suffixIcon: string;
        timestamp: boolean;
        }>>> & {
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_53<__VLS_TypePropsToRuntimeProps_64<LayDatePickerProps>, {
    modelValue: string;
    type: string;
    disabled: boolean;
    simple: boolean;
    range: boolean;
    rangeSeparator: string;
    readonly: boolean;
    allowClear: boolean;
    size: string;
    prefixIcon: string;
    suffixIcon: string;
    timestamp: boolean;
    }>>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_53<__VLS_TypePropsToRuntimeProps_64<LayDatePickerProps>, {
modelValue: string;
type: string;
disabled: boolean;
simple: boolean;
range: boolean;
rangeSeparator: string;
readonly: boolean;
allowClear: boolean;
size: string;
prefixIcon: string;
suffixIcon: string;
timestamp: boolean;
}>>> & {
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
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps;

declare const _default_75: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            type: string;
            time: string | number;
            enable: boolean;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_54<__VLS_TypePropsToRuntimeProps_65<LayTransitionProps>, {
        type: string;
        enable: boolean;
        time: number;
        }>>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "type" | "time" | "enable">;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_54<__VLS_TypePropsToRuntimeProps_65<LayTransitionProps>, {
        type: string;
        enable: boolean;
        time: number;
        }>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_54<__VLS_TypePropsToRuntimeProps_65<LayTransitionProps>, {
    type: string;
    enable: boolean;
    time: number;
    }>>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_54<__VLS_TypePropsToRuntimeProps_65<LayTransitionProps>, {
type: string;
enable: boolean;
time: number;
}>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
type: string;
time: string | number;
enable: boolean;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});

declare const _default_76: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            number: number;
            cut: boolean;
            drag: boolean;
            disabled: boolean;
            multiple: boolean;
            size: number;
            field: string;
            acceptMime: string;
            disabledPreview: boolean;
            cutOptions: cutOptions;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_55<__VLS_TypePropsToRuntimeProps_66<LayUploadProps>, {
        field: string;
        acceptMime: string;
        size: number;
        multiple: boolean;
        number: number;
        drag: boolean;
        disabled: boolean;
        disabledPreview: boolean;
        cut: boolean;
        cutOptions: undefined;
        }>>> & {
            onError?: ((...args: any[]) => any) | undefined;
            onDone?: ((...args: any[]) => any) | undefined;
            onChoose?: ((...args: any[]) => any) | undefined;
            onBefore?: ((...args: any[]) => any) | undefined;
            onCutdone?: ((...args: any[]) => any) | undefined;
            onCutcancel?: ((...args: any[]) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "number" | "cut" | "drag" | "disabled" | "multiple" | "size" | "field" | "acceptMime" | "disabledPreview" | "cutOptions">;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_55<__VLS_TypePropsToRuntimeProps_66<LayUploadProps>, {
        field: string;
        acceptMime: string;
        size: number;
        multiple: boolean;
        number: number;
        drag: boolean;
        disabled: boolean;
        disabledPreview: boolean;
        cut: boolean;
        cutOptions: undefined;
        }>>> & {
        onError?: ((...args: any[]) => any) | undefined;
        onDone?: ((...args: any[]) => any) | undefined;
        onChoose?: ((...args: any[]) => any) | undefined;
        onBefore?: ((...args: any[]) => any) | undefined;
        onCutdone?: ((...args: any[]) => any) | undefined;
        onCutcancel?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("error" | "done" | "choose" | "before" | "cutdone" | "cutcancel")[], string, {
        number: number;
        cut: boolean;
        drag: boolean;
        disabled: boolean;
        multiple: boolean;
        size: number;
        field: string;
        acceptMime: string;
        disabledPreview: boolean;
        cutOptions: cutOptions;
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
        $nextTick: typeof nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_55<__VLS_TypePropsToRuntimeProps_66<LayUploadProps>, {
    field: string;
    acceptMime: string;
    size: number;
    multiple: boolean;
    number: number;
    drag: boolean;
    disabled: boolean;
    disabledPreview: boolean;
    cut: boolean;
    cutOptions: undefined;
    }>>> & {
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
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_55<__VLS_TypePropsToRuntimeProps_66<LayUploadProps>, {
field: string;
acceptMime: string;
size: number;
multiple: boolean;
number: number;
drag: boolean;
disabled: boolean;
disabledPreview: boolean;
cut: boolean;
cutOptions: undefined;
}>>> & {
onError?: ((...args: any[]) => any) | undefined;
onDone?: ((...args: any[]) => any) | undefined;
onChoose?: ((...args: any[]) => any) | undefined;
onBefore?: ((...args: any[]) => any) | undefined;
onCutdone?: ((...args: any[]) => any) | undefined;
onCutcancel?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("error" | "done" | "choose" | "before" | "cutdone" | "cutcancel")[], "error" | "before" | "done" | "choose" | "cutdone" | "cutcancel", {
number: number;
cut: boolean;
drag: boolean;
disabled: boolean;
multiple: boolean;
size: number;
field: string;
acceptMime: string;
disabledPreview: boolean;
cutOptions: cutOptions;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {
            disabled: boolean;
        }) => any;
        preview: (_: {}) => any;
    };
});

declare const _default_77: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            type: "inset" | "out";
            center: boolean;
            borderRadius: string;
            color: string;
            trigger: "click" | "mouseenter" | "always";
            spreadWidth: string;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_56<__VLS_TypePropsToRuntimeProps_67<LayRippletProps>, {
        type: string;
        color: string;
        borderRadius: string;
        spreadWidth: string;
        trigger: string;
        center: boolean;
        }>>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "type" | "center" | "borderRadius" | "color" | "trigger" | "spreadWidth">;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_56<__VLS_TypePropsToRuntimeProps_67<LayRippletProps>, {
        type: string;
        color: string;
        borderRadius: string;
        spreadWidth: string;
        trigger: string;
        center: boolean;
        }>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
        type: "inset" | "out";
        center: boolean;
        borderRadius: string;
        color: string;
        trigger: "click" | "mouseenter" | "always";
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_56<__VLS_TypePropsToRuntimeProps_67<LayRippletProps>, {
    type: string;
    color: string;
    borderRadius: string;
    spreadWidth: string;
    trigger: string;
    center: boolean;
    }>>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_56<__VLS_TypePropsToRuntimeProps_67<LayRippletProps>, {
type: string;
color: string;
borderRadius: string;
spreadWidth: string;
trigger: string;
center: boolean;
}>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
type: "inset" | "out";
center: boolean;
borderRadius: string;
color: string;
trigger: "click" | "mouseenter" | "always";
spreadWidth: string;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});

declare const _default_78: {
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
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_57<__VLS_TypePropsToRuntimeProps_68<LayNoticeBarProps>, {
        color: () => "var(--color-warning)";
        background: () => "var(--color-warning-light-9)";
        text: string;
        textlist: () => never[];
        size: number;
        height: number;
        delay: number;
        speed: number;
        scrollable: boolean;
        }>>> & {
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_57<__VLS_TypePropsToRuntimeProps_68<LayNoticeBarProps>, {
        color: () => "var(--color-warning)";
        background: () => "var(--color-warning-light-9)";
        text: string;
        textlist: () => never[];
        size: number;
        height: number;
        delay: number;
        speed: number;
        scrollable: boolean;
        }>>> & {
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
        $nextTick: typeof nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_57<__VLS_TypePropsToRuntimeProps_68<LayNoticeBarProps>, {
    color: () => "var(--color-warning)";
    background: () => "var(--color-warning-light-9)";
    text: string;
    textlist: () => never[];
    size: number;
    height: number;
    delay: number;
    speed: number;
    scrollable: boolean;
    }>>> & {
        onLink?: ((...args: any[]) => any) | undefined;
        onClose?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_57<__VLS_TypePropsToRuntimeProps_68<LayNoticeBarProps>, {
color: () => "var(--color-warning)";
background: () => "var(--color-warning-light-9)";
text: string;
textlist: () => never[];
size: number;
height: number;
delay: number;
speed: number;
scrollable: boolean;
}>>> & {
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
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps;

declare const _default_79: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            content: string;
            backText: string;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_58<__VLS_TypePropsToRuntimeProps_69<LayPageHeaderProps>, {
        content: string;
        backText: string;
        }>>> & {
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_58<__VLS_TypePropsToRuntimeProps_69<LayPageHeaderProps>, {
        content: string;
        backText: string;
        }>>> & {
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_58<__VLS_TypePropsToRuntimeProps_69<LayPageHeaderProps>, {
    content: string;
    backText: string;
    }>>> & {
        onBack?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_58<__VLS_TypePropsToRuntimeProps_69<LayPageHeaderProps>, {
content: string;
backText: string;
}>>> & {
onBack?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "back"[], "back", {
content: string;
backText: string;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});

declare const _default_8: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            width: string | number;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_7<__VLS_TypePropsToRuntimeProps_7<LaySideProps>, {
        width: string;
        }>>> & VNodeProps & AllowedComponentProps & ComponentCustomProps, "width">;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_7<__VLS_TypePropsToRuntimeProps_7<LaySideProps>, {
        width: string;
        }>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_7<__VLS_TypePropsToRuntimeProps_7<LaySideProps>, {
    width: string;
    }>>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_7<__VLS_TypePropsToRuntimeProps_7<LaySideProps>, {
width: string;
}>>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
width: string | number;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});

declare const _default_80: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            options: any[] | null;
            size: "xs" | "sm" | "md" | "lg";
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
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_59<__VLS_TypePropsToRuntimeProps_70<LayCascaderProps>, {
        options: null;
        modelValue: string;
        decollator: string;
        placeholder: string;
        onlyLastLevel: boolean;
        allowClear: boolean;
        size: string;
        trigger: string;
        replaceFields: () => {
        label: string;
        value: string;
        children: string;
        };
        }>>> & {
            onChange?: ((...args: any[]) => any) | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
            onClear?: ((...args: any[]) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "options" | "size" | "placeholder" | "modelValue" | "allowClear" | "trigger" | "decollator" | "onlyLastLevel" | "replaceFields">;
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_59<__VLS_TypePropsToRuntimeProps_70<LayCascaderProps>, {
        options: null;
        modelValue: string;
        decollator: string;
        placeholder: string;
        onlyLastLevel: boolean;
        allowClear: boolean;
        size: string;
        trigger: string;
        replaceFields: () => {
        label: string;
        value: string;
        children: string;
        };
        }>>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onClear?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "clear" | "update:modelValue")[], string, {
        options: any[] | null;
        size: "xs" | "sm" | "md" | "lg";
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_59<__VLS_TypePropsToRuntimeProps_70<LayCascaderProps>, {
    options: null;
    modelValue: string;
    decollator: string;
    placeholder: string;
    onlyLastLevel: boolean;
    allowClear: boolean;
    size: string;
    trigger: string;
    replaceFields: () => {
    label: string;
    value: string;
    children: string;
    };
    }>>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onClear?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_59<__VLS_TypePropsToRuntimeProps_70<LayCascaderProps>, {
options: null;
modelValue: string;
decollator: string;
placeholder: string;
onlyLastLevel: boolean;
allowClear: boolean;
size: string;
trigger: string;
replaceFields: () => {
label: string;
value: string;
children: string;
};
}>>> & {
onChange?: ((...args: any[]) => any) | undefined;
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
onClear?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "clear" | "update:modelValue")[], "clear" | "change" | "update:modelValue", {
options: any[] | null;
size: "xs" | "sm" | "md" | "lg";
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
});

declare const _default_81: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            offset: number;
            position: string;
            target: HTMLElement;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_60<__VLS_TypePropsToRuntimeProps_71<LayAiffxProps>, {
        offset: number;
        position: string;
        target: () => HTMLElement;
        }>>> & {
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_60<__VLS_TypePropsToRuntimeProps_71<LayAiffxProps>, {
        offset: number;
        position: string;
        target: () => HTMLElement;
        }>>> & {
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
        $nextTick: typeof nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_60<__VLS_TypePropsToRuntimeProps_71<LayAiffxProps>, {
    offset: number;
    position: string;
    target: () => HTMLElement;
    }>>> & {
        onScroll?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_60<__VLS_TypePropsToRuntimeProps_71<LayAiffxProps>, {
offset: number;
position: string;
target: () => HTMLElement;
}>>> & {
onScroll?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "scroll"[], "scroll", {
offset: number;
position: string;
target: HTMLElement;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});

declare const _default_82: DefineComponent<    {
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
type: PropType<SpaceSize | [SpaceSize, SpaceSize]>;
default: string;
};
wrap: {
type: BooleanConstructor;
default: boolean;
};
}, () => JSX.Element, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
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
type: PropType<SpaceSize | [SpaceSize, SpaceSize]>;
default: string;
};
wrap: {
type: BooleanConstructor;
default: boolean;
};
}>>, {
fill: boolean;
direction: "horizontal" | "vertical";
size: SpaceSize | [SpaceSize, SpaceSize];
wrap: boolean;
}>;

declare const _default_83: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            size: string;
            shape: "square" | "round";
            bordered: boolean;
            variant: "dark" | "light" | "plain";
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_61<__VLS_TypePropsToRuntimeProps_72<LayTagProps>, {
        size: string;
        shape: string;
        variant: string;
        bordered: boolean;
        }>>> & {
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_61<__VLS_TypePropsToRuntimeProps_72<LayTagProps>, {
        size: string;
        shape: string;
        variant: string;
        bordered: boolean;
        }>>> & {
        onClose?: ((...args: any[]) => any) | undefined;
        onCheck?: ((...args: any[]) => any) | undefined;
        "onUpdate:checked"?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("close" | "check" | "update:checked")[], string, {
        size: string;
        shape: "square" | "round";
        bordered: boolean;
        variant: "dark" | "light" | "plain";
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
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_61<__VLS_TypePropsToRuntimeProps_72<LayTagProps>, {
    size: string;
    shape: string;
    variant: string;
    bordered: boolean;
    }>>> & {
        onClose?: ((...args: any[]) => any) | undefined;
        onCheck?: ((...args: any[]) => any) | undefined;
        "onUpdate:checked"?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_61<__VLS_TypePropsToRuntimeProps_72<LayTagProps>, {
size: string;
shape: string;
variant: string;
bordered: boolean;
}>>> & {
onClose?: ((...args: any[]) => any) | undefined;
onCheck?: ((...args: any[]) => any) | undefined;
"onUpdate:checked"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("close" | "check" | "update:checked")[], "close" | "check" | "update:checked", {
size: string;
shape: "square" | "round";
bordered: boolean;
variant: "dark" | "light" | "plain";
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        icon: (_: {}) => any;
        default: (_: {}) => any;
        'close-icon': (_: {}) => any;
    };
});

declare const _default_84: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            size: "xs" | "sm" | "md" | "lg";
            placeholder: string;
            minCollapsedNum: number;
        }> & Omit<Readonly<ExtractPropTypes<__VLS_WithDefaults_62<__VLS_TypePropsToRuntimeProps_73<LayTagInputProps>, {
        placeholder: undefined;
        minCollapsedNum: number;
        size: string;
        }>>> & {
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
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_62<__VLS_TypePropsToRuntimeProps_73<LayTagInputProps>, {
        placeholder: undefined;
        minCollapsedNum: number;
        size: string;
        }>>> & {
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
        size: "xs" | "sm" | "md" | "lg";
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
        $nextTick: typeof nextTick;
        $watch(source: string | Function, cb: Function, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<__VLS_WithDefaults_62<__VLS_TypePropsToRuntimeProps_73<LayTagInputProps>, {
    placeholder: undefined;
    minCollapsedNum: number;
    size: string;
    }>>> & {
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
} & ComponentOptionsBase<Readonly<ExtractPropTypes<__VLS_WithDefaults_62<__VLS_TypePropsToRuntimeProps_73<LayTagInputProps>, {
placeholder: undefined;
minCollapsedNum: number;
size: string;
}>>> & {
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
size: "xs" | "sm" | "md" | "lg";
placeholder: string;
minCollapsedNum: number;
}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        prefix: (_: {}) => any;
        suffix: (_: {}) => any;
    };
});

declare const _default_9: {
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
});

declare type DropdownPlacement = "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "right" | "right-start" | "right-end" | "left" | "left-start" | "left-end" | DropdownPlacementLegacy;

declare type DropdownPlacementLegacy = "top-left" | "top-right" | "bottom-left" | "bottom-right" | "right-top" | "right-bottom" | "left-top" | "left-bottom";

declare type DropdownTrigger = "click" | "hover" | "focus" | "contextMenu";

declare type DropdownTrigger_2 = "click" | "hover" | "focus" | "contextMenu";

declare type DropdownTrigger_3 = "click" | "hover" | "focus" | "contextMenu";

declare type EditType = boolean | ("add" | "update" | "delete");

declare interface FormCallback {
    (isValid?: boolean, model?: modelType, errors?: ValidateError[] | null): void;
}

export declare const install: (app: App, options?: InstallOptions) => void;

declare interface InstallOptions extends StringObject {
}

declare type KeysType = (number | string)[];

export declare const LayAffix: WithInstallType<typeof _default_81>;

declare interface LayAiffxProps {
    offset?: number;
    target?: HTMLElement;
    position?: string;
}

export declare const LayAvatar: WithInstallType<typeof _default_37>;

export declare const LayAvatarList: WithInstallType<typeof _default_38>;

declare interface LayAvatarProps {
    src?: string;
    size?: "xs" | "sm" | "md" | "lg";
    radius?: boolean;
    icon?: string;
    alt?: string;
}

export declare const LayBacktop: WithInstallType<typeof _default_6>;

declare interface LayBacktopProps {
    target?: string;
    showHeight?: number;
    disabled?: boolean;
    position?: "fixed" | "absolute";
    right?: number;
    bottom?: number;
    size?: "medium" | "small";
    bgcolor?: string;
    opacity?: number;
    color?: string;
    borderRadius?: number | string;
    circle?: boolean;
    icon?: string;
    iconSize?: number;
    iconColor?: string;
}

export declare const LayBadge: WithInstallType<typeof _default_21>;

declare interface LayBadgeProps {
    type?: "dot" | "rim";
    theme?: string;
    color?: string;
    ripple?: boolean;
}

export declare const LayBody: WithInstallType<typeof _default_10>;

export declare const LayBreadcrumb: WithInstallType<typeof _default_35>;

export declare const LayBreadcrumbItem: WithInstallType<typeof _default_36>;

declare interface LayBreadcrumbItemProps {
    title?: string;
}

declare interface LayBreadcrumbProps {
    separator?: string;
}

export declare const LayButton: WithInstallType<typeof _default_5>;

export declare const LayButtonContainer: WithInstallType<typeof _default_17>;

export declare const LayButtonGroup: WithInstallType<typeof _default_16>;

declare interface LayButtonProps {
    type?: ButtonType;
    size?: ButtonSize;
    prefixIcon?: String_2;
    suffixIcon?: String_2;
    loadingIcon?: String_2;
    border?: ButtonBorder;
    fluid?: BooleanOrString;
    radius?: BooleanOrString;
    loading?: BooleanOrString;
    disabled?: BooleanOrString;
    nativeType?: ButtonNativeType;
    borderStyle?: String_2;
}

export declare const LayCard: WithInstallType<typeof _default_14>;

declare interface LayCardProps {
    title?: String_2;
    shadow?: CardShadow;
}

export declare const LayCarousel: WithInstallType<typeof _default_59>;

export declare const LayCarouselItem: WithInstallType<typeof _default_60>;

export declare const LayCascader: WithInstallType<typeof _default_80>;

declare interface LayCascaderProps {
    options?: Array<any> | null;
    modelValue?: string;
    decollator?: string;
    placeholder?: string;
    onlyLastLevel?: boolean;
    replaceFields?: {
        label: string;
        value: string;
        children: string;
    };
    allowClear?: boolean;
    size?: "lg" | "md" | "sm" | "xs";
    trigger?: DropdownTrigger_3 | DropdownTrigger_3[];
}

export declare const LayCheckbox: WithInstallType<typeof _default_33>;

export declare const LayCheckboxGroup: WithInstallType<typeof _default_57>;

declare interface LayCheckboxGroupProps {
    modelValue?: Recordable[];
    disabled?: boolean;
}

declare interface LayCheckboxProps {
    name?: string;
    skin?: string;
    value: string | number | object;
    label?: string;
    isIndeterminate?: boolean;
    modelValue?: boolean | Array<string | number | object>;
    disabled?: boolean;
    size?: "lg" | "md" | "sm" | "xs";
}

export declare const LayCol: WithInstallType<typeof _default_19>;

export declare const LayCollapse: WithInstallType<typeof _default_28>;

export declare const LayCollapseItem: WithInstallType<typeof _default_29>;

declare interface LayCollapseItemProps {
    id: number | string;
    title: string;
    disabled?: boolean;
}

declare interface LayCollapseProps {
    modelValue?: number | string | [];
    accordion?: boolean;
    collapseTransition?: boolean;
}

export declare const LayColorPicker: WithInstallType<typeof _default_61>;

declare interface LayColorPicker_2 {
    modelValue?: any;
    preset?: any;
    eyeDropper?: boolean;
}

declare interface LayColProps {
    md?: string | number;
    xs?: string | number;
    sm?: string | number;
    lg?: string | number;
    mdOffset?: string | number;
    xsOffset?: string | number;
    smOffset?: string | number;
    lgOffset?: string | number;
}

export declare const LayConfigProvider: WithInstallType<typeof _default_73>;

declare interface LayConfigProviderProps {
    locale?: string;
    locales?: [];
    theme?: string;
    themeVariable?: any;
    darkPartial?: any;
}

export declare const LayContainer: WithInstallType<typeof _default_30>;

declare interface LayContainerProps {
    fluid?: BooleanOrString;
}

export declare const LayCountUp: WithInstallType<typeof _default_66>;

declare interface LayCountupProps {
    startVal?: number;
    endVal?: number;
    decimal?: string;
    decimalPlaces?: number;
    useGrouping?: boolean;
    separator?: string;
    autoplay?: boolean;
    useEasing?: boolean;
    easingFn?: any;
    duration?: number;
    prefix?: string;
    suffix?: string;
}

export declare const LayDatePicker: WithInstallType<typeof _default_74>;

declare interface LayDatePickerProps {
    type?: "date" | "datetime" | "year" | "time" | "month" | "yearmonth";
    placeholder?: string;
    modelValue?: string | number | string[];
    disabled?: boolean;
    simple?: boolean;
    name?: string;
    max?: string;
    min?: string;
    range?: boolean;
    rangeSeparator?: string;
    readonly?: boolean;
    allowClear?: boolean;
    size?: "lg" | "md" | "sm" | "xs";
    prefixIcon?: string;
    suffixIcon?: string;
    timestamp?: boolean;
}

export declare const LayDropdown: WithInstallType<typeof _default_46>;

export declare const LayDropdownMenu: WithInstallType<typeof _default_47>;

export declare const LayDropdownMenuItem: WithInstallType<typeof _default_48>;

declare interface LayDropdownMenuItemProps {
    disabled?: boolean;
}

declare interface LayDropdownProps {
    visible?: boolean;
    trigger?: DropdownTrigger | DropdownTrigger[];
    placement?: DropdownPlacement;
    disabled?: boolean;
    autoFitPosition?: boolean;
    autoFitWidth?: boolean;
    autoFitMinWidth?: boolean;
    updateAtScroll?: boolean;
    autoFixPosition?: boolean;
    clickToClose?: boolean;
    blurToClose?: boolean;
    clickOutsideToClose?: boolean;
    contentOffset?: number;
    mouseEnterDelay?: number;
    mouseLeaveDelay?: number;
    focusDelay?: number;
    alignPoint?: boolean;
    contentClass?: string | Array<string | object> | object;
    contentStyle?: StyleValue;
    popupContainer?: string | undefined;
}

declare interface LayDropdownProps_2 {
    title?: string;
    status?: "401" | "403" | "404" | "500";
    describe?: string;
}

export declare const LayDropdownSubMenu: WithInstallType<typeof _default_49>;

declare interface LayDropdownSubMenuProps {
    trigger?: DropdownTrigger_2 | DropdownTrigger_2[];
    placement?: DropdownPlacement;
    disabled?: boolean;
    contentOffset?: number;
}

export declare const LayEmpty: WithInstallType<typeof _default_43>;

declare interface LayEmptyProps {
    description?: string;
    image?: string;
}

export { layer }

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

export declare const LayException: WithInstallType<typeof _default_70>;

export declare const LayField: WithInstallType<typeof _default_39>;

declare interface LayFieldProps {
    title?: string;
}

export declare const LayFooter: WithInstallType<typeof _default_11>;

export declare const LayForm: WithInstallType<typeof _default_34>;

export declare const LayFormItem: WithInstallType<typeof _default_44>;

declare interface LayFormItemProps {
    prop?: string;
    mode?: string;
    label?: string;
    labelPosition?: string;
    labelWidth?: string | number;
    errorMessage?: string;
    rules?: Rule;
    required?: boolean;
    requiredErrorMessage?: string;
}

declare interface LayFormProps {
    model?: modelType;
    required?: boolean;
    rules?: Rule;
    initValidate?: boolean;
    requiredIcons?: string;
    requiredErrorMessage?: string;
    validateMessage?: ValidateMessages;
    useCN?: boolean;
}

export declare const LayFullscreen: WithInstallType<typeof _default_72>;

declare interface LayFullscreenProps {
    target?: HTMLElement;
    immersive?: boolean;
    position?: string;
    zIndex?: string;
}

export declare const LayHeader: WithInstallType<typeof _default_9>;

export declare const LayIcon: WithInstallType<typeof LayIcon_2>;

export declare const LayIconPicker: WithInstallType<typeof _default_52>;

declare interface LayIconPickerProps {
    page?: boolean;
    modelValue?: string;
    showSearch?: boolean;
}

export declare const LayInput: WithInstallType<typeof _default_20>;

export declare const LayInputNumber: WithInstallType<typeof _default_63>;

declare interface LayInputNumberProps {
    modelValue?: number;
    name?: string;
    disabled?: boolean;
    disabledInput?: boolean;
    step?: number;
    position?: "right";
    min?: number;
    max?: number;
    size?: "lg" | "md" | "sm" | "xs";
}

declare interface LayInputProps {
    name?: string;
    type?: string;
    prefixIcon?: string;
    suffixIcon?: string;
    modelValue?: string | number;
    allowClear?: boolean;
    autocomplete?: string;
    placeholder?: string;
    autofocus?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    password?: boolean;
    size?: "lg" | "md" | "sm" | "xs";
    maxlength?: number;
}

export declare const LayLayout: WithInstallType<typeof _default_7>;

declare interface LayLayoutProps {
    isVertical?: boolean;
}

export declare const LayLine: WithInstallType<typeof _default_23>;

declare interface LayLineProps {
    direction?: "horizontal" | "vertical";
    contentPosition?: "center" | "left" | "right";
    borderWidth?: string;
    borderStyle?: string;
    offset?: string;
    theme?: string;
    margin?: string;
}

export declare const LayLogo: WithInstallType<typeof _default_12>;

export declare const LayMenu: WithInstallType<typeof _default_31>;

export declare const LayMenuItem: WithInstallType<typeof _default_32>;

declare interface LayMenuItemProps {
    id: string;
    title?: string;
}

declare interface LayMenuProps {
    selectedKey?: string;
    openKeys?: string[];
    tree?: boolean;
    theme?: string;
    inverted?: boolean | string;
    level?: boolean | string;
    collapse?: boolean | string;
    collapseTransition?: boolean | string;
    indent?: boolean | string;
}

export declare const LayNoticeBar: WithInstallType<typeof _default_78>;

declare interface LayNoticeBarProps {
    mode?: string;
    text?: string;
    textlist?: any[];
    color?: string;
    background?: string;
    size?: number | string;
    height?: number | string;
    delay?: number;
    speed?: number;
    scrollable?: boolean;
    leftIcon?: string;
    rightIcon?: string;
}

export declare const LayPage: WithInstallType<typeof _default_55>;

export declare const LayPageHeader: WithInstallType<typeof _default_79>;

declare interface LayPageHeaderProps {
    content?: string;
    backText?: string;
}

declare interface LayPageProps {
    total: number;
    limit: number;
    theme?: string;
    showPage?: boolean;
    showSkip?: boolean;
    showCount?: boolean;
    showLimit?: boolean;
    showInput?: boolean;
    showRefresh?: boolean;
    pages?: number;
    limits?: number[];
    modelValue?: number;
}

export declare const LayPanel: WithInstallType<typeof _default_13>;

declare interface LayPanelProps {
    shadow?: PanelShadow;
}

export declare const LayProgress: WithInstallType<typeof _default_15>;

declare interface LayProgressProps {
    percent: number | string;
    theme?: string;
    color?: string;
    size?: string;
    showText?: boolean;
    text?: string;
    circle?: boolean;
    circleSize?: number;
    circleWidth?: number;
}

export declare const LayQuote: WithInstallType<typeof _default_22>;

declare interface LayQuoteProps {
    type?: string;
}

export declare const LayRadio: WithInstallType<typeof _default_3>;

export declare const LayRadioGroup: WithInstallType<typeof _default_4>;

declare interface LayRadioGroupProps {
    modelValue?: string | boolean | number;
    name?: string;
    disabled?: boolean;
}

declare interface LayRadioProps {
    name?: string;
    size?: "lg" | "md" | "sm" | "xs";
    disabled?: boolean;
    modelValue?: string | boolean | number;
    value?: string | boolean | number;
    label?: string;
}

export declare const LayRate: WithInstallType<typeof _default_45>;

declare interface LayRateProps {
    theme?: string;
    length?: number;
    modelValue: number;
    readonly?: boolean | string;
    half?: boolean;
    text?: boolean;
    isBlock?: boolean;
    allowClear?: boolean;
    clearIcon?: string;
    icons?: string[];
}

export declare const LayResult: WithInstallType<typeof _default_71>;

declare interface LayResultProps {
    title?: string;
    status?: "success" | "failure";
    describe?: string;
}

export declare const LayRipple: WithInstallType<typeof _default_77>;

declare interface LayRippletProps {
    type?: "out" | "inset";
    color?: string;
    borderRadius?: string;
    spreadWidth?: string;
    spreadSize?: string;
    trigger?: "always" | "mouseenter" | "click";
    center?: boolean;
}

export declare const LayRow: WithInstallType<typeof _default_18>;

declare interface LayRowProps {
    space?: string | number;
}

export declare const LayScroll: WithInstallType<typeof _default_41>;

declare interface LayScrollProps {
    height?: string;
    trackColor?: string;
    thumbColor?: string;
    thumbWidth?: number;
}

export declare const LaySelect: WithInstallType<typeof _default_40>;

export declare const LaySelectOption: WithInstallType<typeof _default_42>;

declare interface LaySelectOptionProps {
    label?: string;
    value: string | number | object;
    disabled?: boolean;
    keyword?: string;
}

declare interface LaySelectProps {
    name?: string;
    disabled?: boolean;
    placeholder?: string;
    searchPlaceholder?: string;
    showEmpty?: boolean;
    emptyMessage?: string;
    modelValue?: any;
    multiple?: boolean;
    items?: LaySelectOptionProps[];
    size?: "lg" | "md" | "sm" | "xs";
    collapseTagsTooltip?: boolean;
    minCollapsedNum?: number;
    allowClear?: boolean;
    showSearch?: boolean;
}

export declare const LaySide: WithInstallType<typeof _default_8>;

declare interface LaySideProps {
    width?: string | number;
}

export declare const LaySkeleton: WithInstallType<typeof _default_64>;

export declare const LaySkeletonItem: WithInstallType<typeof _default_65>;

declare interface LaySkeletonProps {
    rows?: number;
    loading?: boolean;
    animated?: boolean;
}

declare interface LaySkeletonProps_2 {
    type?: string;
}

export declare const LaySlider: WithInstallType<typeof _default_58>;

declare interface LaySliderProps {
    vertical?: boolean;
    modelValue?: number | Array<number>;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    range?: boolean;
    rangeValue?: number[];
    showDots?: boolean;
}

export declare const LaySpace: WithInstallType<typeof _default_82>;

export declare const LaySplitPanel: WithInstallType<typeof Component>;

export declare const LaySplitPanelItem: WithInstallType<typeof _default_2>;

export declare const LayStep: WithInstallType<typeof _default_67>;

export declare const LayStepItem: WithInstallType<typeof _default_68>;

declare interface LayStepItemProps {
    space?: number;
}

declare interface LayStepItemProps_2 {
    title?: string;
    content?: string;
    icon?: string;
    status?: string;
}

declare interface LayStepProps {
    active?: number;
    center?: boolean;
    direction?: string;
    space?: string;
    currentStatus?: string;
    composition?: string;
    simple?: boolean;
}

export declare const LaySubMenu: WithInstallType<typeof _default_69>;

declare interface LaySubMenuProps {
    id: string;
    title?: string;
}

export declare const LaySwitch: WithInstallType<typeof _default_27>;

declare interface LaySwitchProps {
    name?: string;
    disabled?: boolean;
    modelValue?: string | number | boolean;
    onswitchText?: string;
    unswitchText?: string;
    onswitchColor?: string;
    unswitchColor?: string;
    onswitchValue?: string | number | boolean;
    unswitchValue?: string | number | boolean;
    size?: "lg" | "md" | "sm" | "xs";
    loadingIcon?: string;
    loading?: boolean;
}

export declare const LayTab: WithInstallType<typeof _default_50>;

export declare const LayTabItem: WithInstallType<typeof _default_51>;

declare interface LayTabItemProps {
    id: string;
    title?: string | Function;
    icon?: string | Function;
    closable?: boolean | string;
}

export declare const LayTable: WithInstallType<typeof _default_54>;

declare interface LayTableProps {
    id?: string;
    skin?: string;
    size?: string;
    page?: Recordable;
    columns: Recordable[];
    dataSource: Recordable[];
    defaultToolbar?: boolean;
    selectedKey?: string;
    selectedKeys?: Recordable[];
    indentSize?: number;
    childrenColumnName?: string;
    height?: number;
    maxHeight?: string;
    even?: boolean;
    expandIndex?: number;
    rowClassName?: string | Function;
    cellClassName?: string | Function;
    rowStyle?: string | Function;
    cellStyle?: string | Function;
    spanMethod?: Function;
    defaultExpandAll?: boolean;
    expandKeys?: Recordable[];
    loading?: boolean;
    getCheckboxProps?: Function;
    getRadioProps?: Function;
}

declare interface LayTabProps {
    type?: string;
    modelValue: string;
    allowClose?: boolean;
    tabPosition?: tabPositionType;
    beforeClose?: Function;
    beforeLeave?: Function;
    activeBarTransition?: boolean;
}

export declare const LayTag: WithInstallType<typeof _default_83>;

export declare const LayTagInput: WithInstallType<typeof _default_84>;

declare interface LayTagInputProps {
    modelValue?: (string | number | TagData)[];
    inputValue?: string;
    disabled?: boolean;
    placeholder?: string;
    readonly?: boolean;
    allowClear?: boolean;
    max?: number;
    minCollapsedNum?: number;
    collapseTagsTooltip?: boolean;
    size?: "lg" | "md" | "sm" | "xs";
    tagProps?: LayTagProps;
    disabledInput?: boolean;
}

declare interface LayTagProps {
    type?: tagType;
    color?: string;
    closable?: boolean;
    size?: string;
    bordered?: boolean;
    disabled?: boolean;
    shape?: "square" | "round";
    maxWidth?: string;
    variant?: "dark" | "light" | "plain";
}

export declare const LayTextarea: WithInstallType<typeof _default_26>;

declare interface LayTextareaProps {
    name?: string;
    modelValue?: string;
    placeholder?: string;
    disabled?: boolean;
    showCount?: boolean;
    allowClear?: boolean;
    maxlength?: number;
}

export declare const LayTimeline: WithInstallType<typeof _default_24>;

export declare const LayTimelineItem: WithInstallType<typeof _default_25>;

declare interface LayTimelineItemProps {
    title?: string;
    simple?: boolean;
}

declare interface LayTimelineProps {
    direction?: "horizontal" | "vertical";
}

export declare const LayTooltip: WithInstallType<typeof _default_62>;

export declare const LayTransfer: WithInstallType<typeof _default_56>;

declare interface LayTransferProps {
    id?: string;
    title?: string[];
    width?: string;
    height?: string;
    showSearch?: BooleanOrString;
    dataSource: Recordable[];
    modelValue?: Recordable[];
}

export declare const LayTransition: WithInstallType<typeof _default_75>;

declare interface LayTransitionProps {
    type?: string;
    enable?: boolean;
    time?: string | number;
}

export declare const LayTree: WithInstallType<typeof _default_53>;

export declare const LayUpload: WithInstallType<typeof _default_76>;

declare interface LayUploadProps {
    url?: string;
    data?: any;
    headers?: Recordable;
    acceptMime?: string;
    field?: string;
    size?: number;
    multiple?: boolean;
    number?: number;
    drag?: boolean;
    disabled?: boolean;
    disabledPreview?: boolean;
    cut?: boolean;
    cutOptions?: cutOptions;
}

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

declare type Recordable = Record<string, any>;

declare interface ReplaceFieldsOptions {
    id?: string;
    children?: string;
    title?: string;
}

declare type SpaceSize = "lg" | "md" | "sm" | "xs" | number | string;

declare type String_2 = string;

declare type StringFn = () => string;

declare type StringObject = Record<string, unknown>;

declare type StringOrNumber = string | number;

declare type tabPositionType = "top" | "bottom" | "left" | "right";

declare const TAG_COLORS: readonly ["primary", "normal", "warm", "danger"];

declare interface TagData {
    value?: string | number;
    label?: string;
    closable?: boolean;
    [other: string]: any;
}

declare type tagType = typeof TAG_COLORS[number];

declare interface TreeProps {
    data: OriginalTreeData;
    disabled?: boolean;
    edit?: EditType;
    checkedKeys?: KeysType;
    checkStrictly?: boolean | string;
    collapseTransition?: boolean;
    onlyIconControl?: boolean;
    selectedKey?: any;
    showLine?: boolean;
    showCheckbox?: boolean;
    replaceFields?: ReplaceFieldsOptions;
}

declare type WithInstallType<T> = T & Plugin_2;

export { }
